"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/UI/button";
import CustomImage from "./CustomImage";
import ReferralForm from "./ReferralForm";
import ReferredUsers from "./ReferredUsers";
import { ArrowLeft, X } from "lucide-react";
import ReferralTerms from "./ReferralTerms";
import useReferralStore from "@/providers/referral..providers";

export default function ReferralTermsModal() {
  const { setReferralModal, apply, terms } = useReferralStore();

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (terms) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // For mobile devices
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [terms]);

  // Animation variants
  const cardVariants = {
    hidden: {
      y: "100vh",
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
        duration: 0.5,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 0.3,
      },
    },
  };

  return (
    terms && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white w-[90%] lg:h-fit max-h-[90%] overflow-auto md:max-w-[600px] p-6 rounded-lg shadow-lg relative"
        >
          <ReferralTerms />
          <CustomImage
            src="/bgun.svg"
            alt=""
            className="absolute right-0 bottom-0"
          />
        </motion.div>
      </div>
    )
  );
}
