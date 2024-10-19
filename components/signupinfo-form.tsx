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

const SignupInfoSchema = z.object({
    firstname: z.string().min(1, "Please enter your firstname").regex(/^[a-zA-Z]+$/, "Firstname should not contain special characters or numbers"),
    surname: z.string().min(1, "Please enter your surname").regex(/^[a-zA-Z]+$/, "Surname should not contain special characters or numbers"),
    gender: z.enum(["Male", "Female"], { required_error: "Please select your gender" }),
    dob: z.string().min(1, "Please select your date of birth"),
    phone: z.string().min(10,"Phone number must have at least 10 digits").max(15, "Phone number must have no more than 15 digits").regex(/^\d+$/, "Phone number should only contain digits"),
  });
  

export const SignUpInfo = () => {
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

  const onSubmit = (values: z.infer<typeof SignupInfoSchema>) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Register (3/3)"
      backButtonLabel="←"
      backButtonHref="/auth/signupverifyemail"
    >
      <div className="flex flex-col items-center px-4">
        <div className="mb-6 mt-6">
          <img
            src="/images/logo.png"
            alt="avatar"
            className="w-20 h-20 object-contain"
          />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
          
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Firstname" className="w-full h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Surname" className="w-full h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full h-12 border border-gray-300 rounded"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" placeholder="mm/dd/yyyy" className="w-full h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={'vn'}
                      value={field.value}
                      onChange={field.onChange}
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        paddingLeft: "65px"
                      }}
                      buttonStyle={{
                        padding: "0 12px",
                        backgroundColor: "#fff"
                      }}
                      dropdownStyle={{
                        width: "auto"
                      }}
                      enableSearch={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12 bg-black text-white py-2 rounded-md">
              Register
            </Button>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};

export default SignUpInfo;
