"use client";
import { Button } from "@/components/UI/button";
import useReferralStore from "@/providers/referral..providers";
import ReferredUsers from "./ReferredUsers";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReferralsModal() {
  const { setClearAll, checkReferrals, referrals } = useReferralStore();

  return (
    <AnimatePresence>
      {referrals && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 sm:items-center">
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
            className="bg-white w-[90%] lg:h-fit max-h-[90%] overflow-auto md:max-w-[600px] p-6 rounded-lg shadow-lg relative"
          >
            <Button
              size={"icon"}
              variant={"ghost"}
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => checkReferrals(false)}
            >
              <X />
            </Button>

            <ReferredUsers />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
