"use client";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./preview-accordion.scss";

type PropT = {
  sn: number;
  passengerName: String;
  seatNumber: any;
};
export default function PreviewAccordion({
  children,
  sn,
  passengerName,
  seatNumber,
}: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full p-2 boxShadow px-1 lg:px-4">
      <div
        className="flex items-center justify-between border border-gray-200 p-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="text-base lg:text-[1.4rem] w-6/12 passenger-info text-urban-green">
          Passenger’s details
        </div>

        <div className="cursor-pointer">
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </div>
      </div>
      {isExpanded && <div className="min-h-60">{children}</div>}
    </div>
  );
}
