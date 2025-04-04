"use client";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/UI/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Button } from "@/components/UI/button";
import { Checkbox } from "@/components/UI/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";
import http, { envbaseURL } from "@/app/service/api";
import useSWR from "swr";
import { ArrowLeft, Copy, Loader } from "lucide-react";
import useReferralStore from "@/providers/referral..providers";
import { ScrollArea } from "@/components/UI/scroll-area";
import { Separator } from "@/components/UI/separator";
import { postApiService } from "./ReferralForm";
import useSWRMutation from "swr/mutation";
import { Fragment, useEffect, useMemo } from "react";
import axios from "axios";
import { IUserReferred } from "@/types/referred.type";
import ReferralLinks from "./ReferralLinks";
import { useMap } from "react-leaflet";
import toast from "react-hot-toast";
export const getApiService = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default function ReferredUsers() {
  const { checkReferrals, user, setUser, setReferralModal } =
    useReferralStore();

  const username = useMemo(() => user?.username, [user?.username]);
  const { data, isLoading } = useSWR(
    username ? `/users/referral-downline/${username}` : null,
    getApiService
  );

  const users: Array<IUserReferred> = data?.data ?? [];
  if (isLoading) {
    return (
      <div className=" h-96 w-full flex items-center justify-center">
        <Loader className=" animate-spin size-5 text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className=" flex-row items-center justify-start ">
        <Button
          onClick={() => {
            checkReferrals(false);
            setReferralModal(true);
            setUser(null);
          }}
          className=" px-0 hover:bg-transparent"
          variant={"ghost"}
        >
          <ArrowLeft />
          Previous
        </Button>
      </div>

      <ScrollArea
        className={cn(" w-full pt-5", users.length > 0 ? "h-[25rem]" : "h-96")}
      >
        <h2 className="text-xl font-bold text-primary">Urban Referral Links</h2>
        <Separator className="my-2" />

        {user && <ReferralLinks user={user} dataLink={users} />}
        {!user && <LoginForm />}
      </ScrollArea>
    </div>
  );
}

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});

function LoginForm() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setUser } = useReferralStore();

  const { trigger: login, isMutating } = useSWRMutation(
    `/auth/login`,
    postApiService
  );

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const response = await login(data);

      if (response?.data?.user && response?.status === 200) {
        toast.success("Login successful!", { position: "top-right" });
        setUser(response?.data?.user);
      }

      if (response.status && response.status >= 400) {
        let message = response.message || "Login failed";
        if (typeof response.error === "string") {
          try {
            const parsedError = JSON.parse(response.error);
            if (parsedError?.message) {
              message = parsedError.message;
            }
          } catch (parseError) {
            console.error("Error parsing response.error:", parseError);
          }
        }

        toast.error(message, { position: "top-right" });
        return;
      }
    } catch (error: any) {
      toast.error("An unexpected error occurred", { position: "top-right" });
      console.error("Login failed", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-4 px-5"
      >
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  className=" focus-visible:ring-transparent outline-none"
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className=" focus-visible:ring-transparent outline-none"
                  autoComplete="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isMutating} className="w-full h-12">
          {isMutating ? "Logging in..." : "Login"}
        </Button>
      </form>
    </FormProvider>
  );
}
