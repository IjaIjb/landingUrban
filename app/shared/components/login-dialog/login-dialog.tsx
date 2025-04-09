"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import AOS from "aos";
import "./login-dialog.scss";
import Link from "next/link";
import CustomImage from "../referral/CustomImage";

type PropT = {
  isOpen?: boolean;
  setisopen: (isOpen: boolean) => void;
};

export default function LoginDialog({ isOpen, setisopen }: PropT) {
  const [open, setopen] = useState(isOpen);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Handle body scroll and state changes
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Sync with parent state
  useEffect(() => {
    setopen(isOpen);
  }, [isOpen]);

  if (!open) return null;

  const portalLinks = [
    {
      title: "Login to Fleet Portal",
      url: "https://fleet.urban.ng",
      displayUrl: "fleet.urban.ng",
    },
    {
      title: "Login to Park Owner Portal",
      url: "https://park.urban.ng",
      displayUrl: "park.urban.ng",
    },
    {
      title: "Login to Park Portal",
      url: "https://park.urban.ng",
      displayUrl: "park.urban.ng",
    },
    {
      title: "Login to Provider Agency Portal",
      url: "https://agency.urban.ng",
      displayUrl: "agency.urban.ng",
    },
  ];

  return (
    <div className="travDialogBody fixed inset-0 bg-white z-50 overflow-y-auto">
      <div
        className="travDialog-card-container p-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-end w-full pr-8">
          <button
            className="cursor-pointer p-2"
            onClick={() => setisopen(false)}
            aria-label="Close dialog"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid py-4 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4 px-4 md:px-10">
            {portalLinks.map((portal, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center py-6 md:py-12 rounded-xl md:rounded-2xl border-2 border-primary gap-y-2"
              >
                <CustomImage
                  src={"/assets/carS.svg"}
                  alt=""
                  className=" mb-2"
                />
                <h2 className="text-lg md:text-xl font-creato font-bold text-center px-2">
                  {portal.title}
                </h2>
                <Link href={portal.url} target="_blank" passHref>
                  <button className="text-xs md:text-sm underline bg-[#6cc56c39] py-1 px-3 md:px-4 rounded-md font-light">
                    {portal.displayUrl}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
