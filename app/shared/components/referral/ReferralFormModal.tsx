"use client";
import { useState } from "react";
import { Button } from "@/components/UI/button";
import CustomImage from "./CustomImage";
import ReferralForm from "./ReferralForm";
import useReferralStore from "@/providers/referral..providers";
import ReferredUsers from "./ReferredUsers";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants for better mobile responsiveness
  const cardVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        ease: "easeOut",
        duration: 0.4,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {apply && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 sm:items-center">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white w-[90%] max-w-[600px] h-[90vh] sm:h-fit sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-t-2xl sm:rounded-lg shadow-lg mx-4 sm:mx-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Button
                  onClick={() => {
                    setApply(false);
                    setReferralModal(true);
                  }}
                  className="p-2 hover:bg-gray-100"
                  variant="ghost"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="ml-2 hidden sm:inline">Previous</span>
                </Button>
              </div>

              <Button
                size="icon"
                variant="ghost"
                className="p-2 text-gray-600 hover:bg-gray-100"
                onClick={() => setClearAll()}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <ReferralForm />

            <CustomImage
              src="/bgun.svg"
              alt=""
              className="absolute right-0 bottom-0 w-24 sm:w-auto"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
