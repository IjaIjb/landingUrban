"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/UI/button";
import CustomImage from "./CustomImage";
import useReferralStore from "@/providers/referral..providers";
import { X } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ReferralModal() {
  const {
    setReferralModal,
    referralModal,
    setApply,
    apply,
    setClearAll,
    checkReferrals,
    referrals,
  } = useReferralStore();

  useEffect(() => {
    if (referralModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [referralModal]);

  return (
    <AnimatePresence>
      {referralModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 px-2 sm:items-center">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.5,
              delay: 0.1,
            }}
            className="relative bg-white w-[90%] max-w-md md:max-w-[600px] mx-auto rounded-lg shadow-lg max-h-[90vh]"
          >
            <Button
              size={"icon"}
              variant={"ghost"}
              className="absolute top-4  right-4 text-gray-600 z-10"
              onClick={() => setClearAll()}
            >
              <X />
            </Button>

            <ScrollArea className="h-full max-h-[90vh] p-6">
              {/* Rest of your modal content remains the same */}
              <div className="space-y-8">
                <div className="w-full flex pt-8 md:pt-0">
                  <CustomImage
                    alt=""
                    src="/top.svg"
                    className="h-auto w-full max-w-[300px]"
                  />
                </div>

                <div className="px-2 md:px-8">
                  <div className="space-y-2">
                    <h2 className="text-xl md:text-3xl text-black">
                      Earn Up To
                    </h2>
                    <h1 className="text-primary text-xl md:text-3xl font-bold">
                      <span className="relative inline-block">
                        <span className="absolute top-[40%] left-0 w-full h-0.5 bg-current"></span>
                        <span className="absolute top-[60%] left-0 w-full h-0.5 bg-current"></span>
                        ₦
                      </span>
                      50,000.00 + Hoodie
                    </h1>
                  </div>

                  <p className="text-black mt-2 text-sm md:text-base">
                    When you refer a fleet owner or park owner after they sign
                    up, and successfully onboard a vehicle or add a functional
                    park on Urban.
                  </p>

                  <div className="py-5">
                    <h3 className="text-primary font-semibold text-base md:text-lg">
                      How It Works
                    </h3>
                    <ul className="text-black text-sm md:text-base mt-2 space-y-2 list-disc pl-5">
                      <li>
                        Share your referral link with fleet owners or park
                        owners.
                      </li>
                      <li>
                        They onboard their vehicles or sign up a park on Urban.
                      </li>
                      <li>
                        You get paid instantly once their fleet or park goes
                        live!
                      </li>
                    </ul>
                  </div>

                  <p className="text-black font-semibold mt-4 text-sm md:text-base">
                    Join Urban to Start Earning BIG!
                  </p>
                </div>

                <div className="flex flex-col overflow-hidden gap-2 px-2">
                  <Link
                    href="/documents/URBAN_PROVIDER_TandC.pdf"
                    download="Urban Vehicle Onboarding.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit z-50 text-base underline px-0 py-0 text-primary"
                  >
                    Urban Vehicle Onboarding PDF
                  </Link>
                  <Link
                    href="/documents/URBAN_PROVIDER_TandC.pdf"
                    download="Park & Experience.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit z-50 text-base underline px-0 py-0 text-primary"
                  >
                    Park & Experience PDF
                  </Link>
                  <Button
                    onClick={() => {
                      setReferralModal(false);
                      setApply(true);
                    }}
                    className="w-full md:w-fit z-50 bg-primary text-white py-2 rounded-full"
                  >
                    Apply Here
                  </Button>

                  <Button
                    onClick={() => {
                      setReferralModal(false);
                      checkReferrals(true);
                    }}
                    variant="link"
                    className="text-primary z-50 w-fit px-0 py-0 bg-transparent hover:bg-transparent text-sm"
                  >
                    Check Referral Links
                  </Button>
                </div>
                <CustomImage
                  src="/bgun.svg"
                  alt=""
                  className=" absolute bottom-0 right-0"
                />
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
