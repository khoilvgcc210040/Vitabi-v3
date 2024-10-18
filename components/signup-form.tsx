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
import { CardWrapper } from "./card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Validation schema for signup form
const SignupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // set the path of the error
  });

export const SignupForm = () => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Register (1/3)"
      backButtonLabel="←"
      backButtonHref="/" // Đường dẫn khi bấm back
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Email" type="email" />
                  </FormControl>
                  <FormMessage className="form-message" />{" "}
                  {/* Thêm class 'form-message' để giữ khoảng cách cố định */}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Password" type="password" />
                  </FormControl>
                  <FormMessage className="form-message" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-enter Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Re-enter Password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage className="form-message" />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full bg-black text-white">
            Next
          </Button>
          <p className="text-center  mt-4">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-gray-500 underline hover:text-blue-600"
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignupForm;
