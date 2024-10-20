"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';
import { useState } from "react"; 

const SignupInfoSchema = z.object({
  firstname: z.string().min(1, "Please enter your firstname").regex(/^[a-zA-Z]+$/, "Firstname should not contain special characters or numbers"),
  surname: z.string().min(1, "Please enter your surname").regex(/^[a-zA-Z]+$/, "Surname should not contain special characters or numbers"),
  gender: z.enum(["Male", "Female"], { required_error: "Please select your gender" }),
  dob: z.string().min(1, "Please select your date of birth"),
  phone: z.string().min(10,"Phone number must have at least 10 digits").max(15, "Phone number must have no more than 15 digits").regex(/^\d+$/, "Phone number should only contain digits"),
});

const SignUpInfo = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCreatingAccount, setShowCreatingAccount] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const form = useForm<z.infer<typeof SignupInfoSchema>>({
    resolver: zodResolver(SignupInfoSchema),
    defaultValues: {
      firstname: "",
      surname: "",
      gender: "Male",
      dob: "",
      phone: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof SignupInfoSchema>) => {
    setShowCreatingAccount(true);
    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup-complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: values.firstname,
          surname: values.surname,
          gender: values.gender,
          dob: values.dob,
          phone: values.phone,
          countryCode,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        alert(`Error: ${errorData.message}`);
      } else {
        setTimeout(() => {
          setShowCreatingAccount(false); 
          setShowPopup(true);
          
        
          setTimeout(() => {
            router.push('/auth/login');
          }, 2000);
        }, 2000);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <CardWrapper
      headerLabel="Register (3/3)"
      backButtonLabel="←"
      backButtonHref="/auth/signupverifyemail"
    >
      <div className="flex flex-col items-center px-4">
        <div className="mb-6 mt-8">
          <img
            src="/images/logo.png"
            alt="avatar"
            className="w-20 h-20 object-contain"
          />
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-green-100 p-4 rounded-lg shadow-lg">
              <p className="text-center text-md font-medium">✅ Account successfully created!</p>
            </div>
          </div>
        )}

        {showCreatingAccount && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-green-100 p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                </svg>
                <p className="text-center text-md font-medium">Creating account...</p>
              </div>
            </div>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">

            {/* Firstname */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Firstname</FormLabel>
                  <FormControl>
                    <Input {...field} style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000" }} placeholder="Firstname" />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />

            {/* Surname */}
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Surname</FormLabel>
                  <FormControl>
                    <Input {...field} style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000" }} placeholder="Surname" />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Gender</FormLabel>
                  <FormControl>
                    <select {...field} style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000", paddingLeft: "10px", borderRadius: "6px" }}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Date of Birth</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000",  }} />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={'vn'}
                      value={field.value}
                      onChange={(value, countryData) => {
                        field.onChange(value); 
                        setCountryCode(countryData.dialCode);
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        borderRadius: "6px",
                        fontSize: "16px",
                        border: "1px solid #000",
                        paddingLeft: "75px"
                      }}
                      buttonStyle={{
                        padding: "0 12px",
                        backgroundColor: "#fff",
                        border: "1px solid #000",
                        borderRadius: "6px 0 0 6px"
                      }}
                      dropdownStyle={{
                        width: "auto"
                      }}
                      enableSearch={true}
                    />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />

            {/* Submit Button with Loading */}
            <Button
              type="submit"
              className="bg-black text-white rounded-md"
              style={{ width: "100%", height: "48px", fontSize: "16px" }}
              disabled={loading} // Disable button during loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                  </svg>
                  Loading...
                </div>
              ) : (
                'Confirm Signup'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};

export default SignUpInfo;
