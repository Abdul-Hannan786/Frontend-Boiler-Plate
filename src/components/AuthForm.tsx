"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";
import useUserStore from "@/store/userStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type AuthFormType = "sign-in" | "sign-up";

const authFormSchema = () => {
  return z.object({
    email: z.string().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must not exceed 32 characters"),
  });
};


const AuthForm = ({ type }: { type: AuthFormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const setUserFromStore = useUserStore((state) => state.saveUser);

  const router = useRouter();

  const formSchema = authFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      let response;
      if (type === "sign-in") {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
          {
            email: values.email,
            password: values.password,
          },
          { withCredentials: true }
        );
      }

      setUserFromStore(response?.data.data.user);
      toast.success(response?.data.msg);
      router.push("/");
      form.reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.msg || "An error occurred. Please try again.";
        toast.error(errorMsg);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="min-w-[320px] w-[320px] sm:w-[400px] lg:w-[450px]">
        <CardHeader>
          <CardTitle className="form-title">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form-label">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form-label">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Password"
                        className=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-cyan-600 mt-3 hover:bg-cyan-700"
                disabled={isLoading}
              >
                {type === "sign-in" ? "Sign In" : "Sign Up"}
                {isLoading && (
                  <Image
                    src="/images/loader.svg"
                    alt="loader"
                    width={24}
                    height={24}
                    className="ml-2 animate-spin"
                  />
                )}
              </Button>
              <div className="body-2 pb-2 flex justify-center">
                <p className="text-light-100">
                  {type === "sign-in"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <Link
                    className="ml-1 font-medium text-cyan-600"
                    href={type === "sign-in" ? "/signup" : "signin"}
                  >
                    {type === "sign-in" ? "Sign Up" : "Sign in"}
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
