"use client";
import { Button } from "@/components/UI/button";
import useReferralStore from "@/providers/referral..providers";
import ReferredUsers from "./ReferredUsers";
import { X } from "lucide-react";

export default function ReferralsModal() {
  const { setClearAll, referrals } = useReferralStore();

  return (
    referrals && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-[90%] lg:h-fit max-h-[90%] overflow-auto md:max-w-[600px] p-6 rounded-lg shadow-lg relative">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setClearAll()}
          >
            <X />
          </Button>

          <ReferredUsers />
        </div>
      </div>
    )
  );
}
