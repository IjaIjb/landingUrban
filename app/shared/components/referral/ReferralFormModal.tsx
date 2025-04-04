"use client";
import { useState } from "react";
import { Button } from "@/components/UI/button";
import CustomImage from "./CustomImage";
import ReferralForm from "./ReferralForm";
import useReferralStore from "@/providers/referral..providers";
import ReferredUsers from "./ReferredUsers";
import { ArrowLeft, X } from "lucide-react";

export default function ReferralFormModal() {
  const {
    setReferralModal,
    referralModal,
    setApply,
    apply,
    setClearAll,
    checkReferrals,
    referrals,
  } = useReferralStore();

  return (
    apply && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-[90%] lg:h-fit max-h-[90%] overflow-auto md:max-w-[600px] p-6 rounded-lg shadow-lg relative">
          <div className=" items-center flex justify-between">
            <div className=" flex-row items-center justify-start ">
              <Button
                onClick={() => {
                  setApply(false);
                  setReferralModal(true);
                }}
                className=" px-0 hover:bg-transparent"
                variant={"ghost"}
              >
                <ArrowLeft />
                Previous
              </Button>
            </div>

            <Button
              size={"icon"}
              variant={"ghost"}
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setClearAll()}
            >
              <X />
            </Button>
          </div>

          <ReferralForm />

          <CustomImage
            src="/bgun.svg"
            alt=""
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    )
  );
}
