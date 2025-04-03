"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import { GiSteeringWheel } from "react-icons/gi";
import AOS from "aos";
import "./seat-arrange.scss";
import { IVehicleType } from "@/app/models/trips-model";
import {
  generateSeatDivs,
  generateSeatObjects,
  splitAndConvertToNumbers,
} from "../../utils/utils";

type PropT = {
  isOpen?: boolean;
  setisopen: Function;
  handleSelect: Function;
  currentPassengerIndex: any;
  vehicleData: IVehicleType;
  setSelectedSeat: Function;
  bookedSeats: String[];
  selectedSeat: String;
};
export default function SeatArrangementDialog({
  isOpen,
  setisopen,
  handleSelect,
  currentPassengerIndex,
  vehicleData,
  setSelectedSeat,
  bookedSeats,
  selectedSeat,
}: PropT) {
  const [open, setopen] = useState(isOpen);

  const seatFormation = splitAndConvertToNumbers(vehicleData?.seatFormation);
  const numberOfRows = vehicleData?.numberOfRows;
  const arrangements = generateSeatObjects(seatFormation);

  const SeatArrangement = () => {
    const arrangement = seatFormation;
    const rowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const bgChecker = (seatId: any) => {
      if (bookedSeats.includes(seatId) || seatId === selectedSeat)
        return "bg-urban-green";
      else return "bg-white";
    };

    return (
      <div className="seat-arrangement w-full">
        {arrangement?.map((seatsInRow, rowIndex) => (
          <div
            className="row w-full flex items-center justify-around"
            id={`row-${rowLetters[rowIndex]}`}
            key={rowIndex}
          >
            {Array.from({ length: seatsInRow }).map((_, seatIndex) => {
              const seatId = `${rowLetters[rowIndex]}${seatIndex + 1}`;
              return (
                <div
                  className={`seat w-full h-20 lg:h-28 flex items-center justify-center rounded-md cursor-pointer ${
                    seatId === "A1"
                      ? "bg-gray-500 text-gray-100 cursor-not-allowed hover:bg-gray-500"
                      : bgChecker(seatId)
                  } hover:bg-urban-green font-bold text-urban-black  m-1 `}
                  id={seatId}
                  key={seatId}
                  onClick={() => {
                    if (!bookedSeats.includes(seatId) && seatId !== "A1") {
                      setSelectedSeat(seatId);
                      setisopen(!open);
                    }
                  }}
                >
                  {seatId === "A1" ? (
                    <div>
                      <GiSteeringWheel color="#fff" size={40} />
                    </div>
                  ) : (
                    seatId
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

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

  if (!open) return null;
  return (
    <div
      className={`seatArrangeBody h-screen w-screen fixed bg-white ${
        open ? "" : "hidedialog"
      }`}
    >
      <div
        className="seatDialog-card-container pt-2 pb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-end w-full">
          <div
            className="cursor-pointer pr-6 pt-4 2xl:pr-6 2xl:pt-4"
            onClick={() => setisopen(!open)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="pb-4">
          <h3 className="text-xl w-full pl-4 text-urban-green font-light">
            Seat Arrangement
          </h3>
          <div className="mt-2 px-2">
            <div className="p-2">
              {/* <div className="py-3 rounded-lg bg-slate-200 text-center">
                Driver's seat
              </div> */}
              <div className="bg-[#f0f6f0] min-h-60 p-4">
                {/* {seats} */}
                <SeatArrangement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
