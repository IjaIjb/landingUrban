"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

import "aos/dist/aos.css";
import AOS from "aos";
import "./success-dialog.scss";
import { useRouter } from "next/navigation";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

type PropT = {
  isOpen?: boolean;
  setisopen: Function;
  transRef: string;
};
export default function SuccessDialog({ isOpen, setisopen, transRef }: PropT) {
  const [open, setopen] = useState(isOpen);
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add("modal-open");
  //   } else {
  //     document.body.classList.remove("modal-open");
  //   }

  //   // Clean up when the component is unmounted or when `isOpen` changes
  //   return () => {
  //     document.body.classList.remove("modal-open");
  //   };
  // }, [open]);

  useEffect(() => {
    setopen(isOpen);
  }, [isOpen]);

  if (!open) return null;
  return (
    <div
      className={`travDialogBody h-screen w-screen fixed bg-white ${
        open ? "" : "hidedialogx"
      }`}
      // onClick={() => setisopen(!open)}
    >
      <div
        className="travDialog-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-end w-full">
          <div
            className="mr-4"
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
          >
            <CloseIcon />
          </div>
        </div>
        <div>
          <div className="mt-10 px-4 md:px-2 2xl:mt-14">
            <div className="w-full lg:w-11/12 m-auto flex flex-col items-center mb-2">
              <Image
                src="/assets/cofetti.svg"
                width={80}
                height={40}
                alt=""
                className=""
              />
              <h2 className="font-bold text-xl text-urban-green mt-4">
                Congratulations
              </h2>
              <p className="font-light text-lg text-center w-full px-2 m-auto mt-2">
                Your booking was successful. Your booking Code is{" "}
                <b>{transRef.toUpperCase()}</b>
              </p>
            </div>
            <div className="flex flex-col gap-y-3 lg:flex-row w-full items-center justify-center gap-x-2 mt-6">
              <div
                className="flex items-center w-full text-sm lg:w-5/12 justify-center gap-x-2 rounded-lg bg-urban-green text-white py-3 border border-urban-green px-4 cursor-pointer"
                onClick={() => {
                  localStorage.clear();
                  router.push("/booking/user-booking");
                }}
              >
                <span>Check My booking(s)</span>
              </div>

              <div
                className="flex w-full text-sm lg:w-5/12 justify-center items-center gap-x-2 rounded-lg border-2 border-urban-green text-urban-green py-3 px-2 cursor-pointer"
                onClick={() => {
                  localStorage.clear();
                  router.push("/");
                }}
              >
                <span className="">Book a New Trip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
