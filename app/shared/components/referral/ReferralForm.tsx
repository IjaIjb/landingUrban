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
import axios from "axios";
import { envbaseURL } from "@/app/service/api";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { Copy, Loader } from "lucide-react";
import toast from "react-hot-toast";
import { FloatingLabelPasswordInput } from "@/components/UI/floating-label-password-input";
import useReferralStore from "@/providers/referral..providers";
import ReferralTerms from "./ReferralTerms";

// Define form schema with proper TypeScript typing

export const postApiService = async (url: string, { arg }: { arg: any }) => {
  try {
    const response = await axios.post(envbaseURL + url, { ...arg });
    return response.data;
  } catch (error) {
    throw error;
  }
};
const formSchema = z.object({
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, { message: "Password is required" }),
  firstName: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required"),
  lastName: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required"),
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .min(10, "Phone number must be at least 10 digits"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  terms: z
    .boolean({
      required_error: "You must accept the terms",
    })
    .refine((val) => val === true, {
      message: "You must accept the terms",
    }),
});

// Define form data type
type FormData = z.infer<typeof formSchema>;

export default function ReferralForm() {
  const { terms, setTerms } = useReferralStore();
  const { trigger, isMutating } = useSWRMutation(
    "/add-individual",
    postApiService
  );

  // Initialize form with proper default values
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      terms: true,
    },
  });
  interface DataLink {
    user?: {
      username?: string;
    };
  }

  const [dataLink, setDataLink] = useState<DataLink | null>(null);
  // Type the onSubmit function
  const onSubmit = async (data: FormData) => {
    try {
      let values = {
        firstname: data.firstName,
        lastname: data?.lastName,
        phone: data?.phone,
        password: data?.password,
        email: data?.email,
        city: "unknown",
        role: "USER",
        userType: "PASSENGERS",
        userCategory: "PASSENGERS",
        termsAndConditions: data?.terms,
      };
      const response = await trigger(values);
      if (response?.status === 201 || response?.data?.user) {
        setDataLink(response?.data);
        toast.success(response.message, { position: "top-right" });
        form.reset();
      }
    } catch (error: any) {
      let message = "";
      if (Array.isArray(error?.response?.data?.message)) {
        message = error?.response?.data?.message[0];
      }
      if (error?.message) {
        message = error?.message;
      }
      toast.error(message, {
        position: "top-right",
      });
    }
  };

  if (dataLink?.user) {
    return (
      <div className=" w-full flex gap-5 flex-col justify-center">
        {/* <div className=" grid gap-5">
          <span className=" text-2xl text-primary font-semibold">
            Your Referral Link:
          </span>
          <span className="bg-gray-600 py-2 px-5 text-white flex-wrap">
            {`https://fleet.urban.ng/register?referral=${dataLink.user.username}`}
          </span>
        </div> */}
        <div className=" grid gap-2">
          <span className=" text-base text-primary font-semibold">
            Your Fleet Referral Link:
          </span>
          <span className="bg-primary/55 py-2 px-5 text-white flex-wrap rounded-md">
            {`https://fleet.urban.ng/register?referral=${dataLink.user.username}`}
          </span>
        </div>
        <div className=" grid gap-2">
          <span className=" text-base text-primary font-semibold">
            Your Park Referral Link:
          </span>
          <span className="bg-primary/55 py-2 px-5 text-white flex-wrap rounded-md">
            {`https://park.urban.ng/register?referral=${dataLink.user.username}`}
          </span>
        </div>
        <div className=" grid grid-cols-2 gap-3 pt-5">
          <Button
            className="bg-primary z-50 hover:bg-primary/45 text-white py-2 px-5 rounded-sm mb-1"
            size="sm"
            onClick={async () => {
              console.log("Button clicked!"); // Debugging
              try {
                await navigator.clipboard.writeText(
                  `https://fleet.urban.ng/register?referral=${
                    dataLink?.user?.username || ""
                  }`
                );
                toast.success("Referral link copied to clipboard!", {
                  position: "top-right",
                });
              } catch (error) {
                toast.error("Failed to copy link. Please try again.", {
                  position: "top-right",
                });
              }
            }}
          >
            <Copy className="text-white size-5" /> Copy Fleet Link
          </Button>
          <Button
            className="bg-primary z-50 hover:bg-primary/45 text-white py-2 px-5 rounded-sm mb-1"
            size="sm"
            onClick={async () => {
              console.log("Button clicked!"); // Debugging
              try {
                await navigator.clipboard.writeText(
                  `https://fleet.urban.ng/register?referral=${
                    dataLink?.user?.username || ""
                  }`
                );
                toast.success("Referral link copied to clipboard!", {
                  position: "top-right",
                });
              } catch (error) {
                toast.error("Failed to copy link. Please try again.", {
                  position: "top-right",
                });
              }
            }}
          >
            <Copy className="text-white size-5" /> Copy Park Link
          </Button>
        </div>
      </div>
    );
  }

  if (terms) {
    return <ReferralTerms />;
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pb-5">
        <div className="space-y-8 max-w-md mx-auto mt-5">
          <div className="w-full flex items-center justify-center">
            <span className="text-primary text-3xl text-center">
              Application Form
            </span>
          </div>
          <div className=" w-full grid gap-5">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={cn(
                          "w-full outline-none shadow-none focus-visible:ring-transparent",
                          form.formState.errors.firstName && "border-red-500"
                        )}
                        placeholder="Enter first name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={cn(
                          "w-full outline-none shadow-none focus-visible:ring-transparent",
                          form.formState.errors.lastName && "border-red-500"
                        )}
                        placeholder="Enter last name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Create Password</FormLabel>

                  <FormControl>
                    <FloatingLabelPasswordInput
                      {...field}
                      id="password"
                      label="Create Password"
                      disabled={isMutating}
                      autoComplete="current-password"
                      placeholder="Create Password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      className={cn(
                        " h-11 focus-visible:ring-0 shadow-none",
                        form.formState.errors.password
                          ? "border-red-500 focus:!border-red-500 border-2"
                          : "border-[#D9D9D9]"
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-light mt-1" />
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
                    <Input
                      {...field}
                      type="tel"
                      className={cn(
                        "w-full outline-none focus-visible:ring-transparent shadow-none",

                        form.formState.errors.phone && "border-red-500"
                      )}
                      placeholder="07038193633"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className={cn(
                        "w-full outline-none focus-visible:ring-transparent shadow-none",

                        form.formState.errors.email && "border-red-500"
                      )}
                      placeholder="john@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className=" grid">
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id="custom-color"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={
                          !field.value
                            ? "border border-gray-300"
                            : "border border-green-600"
                        }
                      />
                    </FormControl>
                    <FormLabel className="font-normal z-20">
                      I accept the{" "}
                      <Button
                        onClick={() => {
                          setTerms(true);
                        }}
                        type="button"
                        variant={"link"}
                        className="text-primary z-50 px-0 py-0 underline"
                      >
                        Terms & Conditions
                      </Button>
                    </FormLabel>
                  </div>

                  <FormMessage className=" text-sm" />
                </FormItem>
              )}
            />

            <Button
              disabled={isMutating}
              type="submit"
              className="w-fit my-4 z-50 text-white py-2"
            >
              {isMutating && (
                <Loader className="size-4 animate-spin text-white" />
              )}
              {isMutating ? "Wait..." : "Generate Referral link"}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
