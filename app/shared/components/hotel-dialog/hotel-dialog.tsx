"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "aos/dist/aos.css";
import AOS from "aos";
import "./hotel-dialog.scss";

type PropT = {
  isOpen?: boolean;
  setisopen: Function;
};
export default function HotelDialog({ isOpen, setisopen }: PropT) {
  const [open, setopen] = useState(isOpen);

  const modalRef: any = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up when the component is unmounted or when `isOpen` changes
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  useEffect(() => {
    setopen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setopen(false);
        setisopen(false);
      } else {
        return;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  if (!open) return null;
  return (
    <div
      className={`hotelDialogBody h-screen w-screen fixed bg-white ${
        open ? "" : "hidedialog"
      }`}
    >
      <div
        ref={modalRef}
        className="hotelDialog-card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-end w-full py-2"></div>
        <div>
          <h3 className="text-2xl w-full text-center">Make Reservations</h3>
          <div className="mt-6 px-10 2xl:mt-14">
            <div>
              <div className="w-full h-60 rounded-xl relative overflow-hidden">
                <Image
                  src="/assets/hotel.png"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-60  object-cover object-center"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="w-8/12">
                    <h2 className="font-light text-xl 2xl:text-2xl">
                      Elixir Hotel
                    </h2>
                  </div>
                  <div className="w-5/12 lg:4/12 xl:w-4/12 see-direction-container">
                    <div className="flex items-center justify-between py-2 px-2 lg:px-4 border border-urban-lightGreen text-urban-green cursor-pointer rounded-full text-[0.6rem] lg:text-xs gap-1 2xl:gap-2 2xl:text-sm see-direction-button">
                      See Direction
                      <GpsFixedIcon className="text-xs lg:text-sm 2xl:text-lg" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-y-2">
                  <p className="text-sm font-light 2xl:text-lg">
                    <span className="text-urban-green">Address:</span> No 23,
                    Kingsway rd Kaduna
                  </p>
                  <p className="text-sm font-light 2xl:text-lg">
                    For Reservations call{" "}
                    <span className="text-urban-green underline">
                      +234 903 476 9809
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-6 w-8/12 lg:w-6/12 2xl:w-5/12">
              {/* <button className="py-3 px-6 text-xs lg:text-sm rounded-md bg-urban-green text-white 2xl:py-4 2xl:px-4">
                Make Reservations
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
