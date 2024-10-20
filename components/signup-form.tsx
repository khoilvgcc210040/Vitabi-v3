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
import { useRouter } from 'next/navigation';
import { useState } from "react";  // Import useState để quản lý loading

const SignupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);  // Tạo state quản lý loading

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    setLoading(true);  // Bật trạng thái loading khi bắt đầu gửi request

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message === 'Email already exists') {
          form.setError('email', {
            type: 'manual',
            message: 'This email already exists',
          });
        } else {
          alert(`Error: ${errorData.message}`);
        }
      } else {
        router.push('/auth/signupverifyemail');
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
      headerLabel="Register (1/3)"
      backButtonLabel="←"
      backButtonHref="/" 
    >
      <div className="flex justify-center mt-8 mb-6">
        <img src="/images/logo.png" alt="avatar" className="w-20 h-20 object-contain" />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pr-6 pl-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Email</FormLabel>
                  <FormControl>
                    <Input style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000" }} {...field} placeholder="Email" type="email" />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Password</FormLabel>
                  <FormControl>
                    <Input style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000" }} {...field} placeholder="Password" type="password" />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ fontWeight: "600" }}>Confirm Password</FormLabel>
                  <FormControl>
                    <Input style={{ width: "100%", height: "48px", fontSize: "16px", border: "1px solid #000" }} {...field} placeholder="Confirm Password" type="password" />
                  </FormControl>
                  <FormMessage style={{ marginLeft: "3px", fontSize: "12px" }} />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="bg-black text-white rounded-md" style={{ width: "100%", height: "48px", fontSize: "16px" }} disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center">
                {/* Hiệu ứng loading (spinner) */}
                <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                </svg>
                Loading...
              </div>
            ) : (
              'Next'
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignupForm;
