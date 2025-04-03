"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function PolicyQuickLink() {
  const router = useRouter();
  return (
    <div>
      <div className="mt-4 text-sm 2xl:text-lg">
        <div className="flex items-center gap-4 flex-wrap mb-2">
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/terms-of-use")}
          >
            Urban Policies
          </span>
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/terms-of-use")}
          >
            Terms of Use
          </span>
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/refund-policy")}
          >
            Refund Policies
          </span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/behavioral-policy")}
          >
            Behavior Policy
          </span>
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/charter-policy")}
          >
            Charter
          </span>
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/trip-cancellation-policy")}
          >
            Trip Cancellation Policy
          </span>
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/hotel-terms-conditions")}
          >
            Hotel T&C
          </span>
          <span
            className="block text-urban-black underline font-creato cursor-pointer"
            onClick={() => router.push("/policy/cards-terms-conditions")}
          >
            Cards T&C
          </span>
        </div>
      </div>
    </div>
  );
}
