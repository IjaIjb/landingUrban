"use client";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./passenger-accordion.scss";

type PropT = {
  sn: number;
  passengerName: String;
  seatNumber: any;
};
export default function PassengerAccordion({
  children,
  sn,
  passengerName,
  seatNumber,
}: any) {
  const [isExpanded, setIsExpanded] = useState(sn == 1 ? true : false);
  return (
    <div className="w-full p-2 boxShadow px-1 lg:px-4">
      <div
        className="flex items-center justify-between border border-gray-200 p-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="text-base lg:text-[1.120rem] text-urban-green w-3/12 passenger-info">
          {sn} Passenger’s info
        </div>
        <div className="h-8 border-[0.5px] border-gray-400"></div>
        <div className="flex items-center justify-between w-5/12">
          <span className="text-sm font-light text-gray-400">
            {passengerName}
          </span>
          <span className="text-sm text-gray-400">
            {" "}
            Seat No: <span className="text-urban-black">{seatNumber}</span>
          </span>
        </div>
        <div className="cursor-pointer">
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </div>
      </div>
      {isExpanded && <div className="min-h-60">{children}</div>}
    </div>
  );
}
