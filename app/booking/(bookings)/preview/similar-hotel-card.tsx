import React from "react";
import Image from "next/image";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export default function SimilarHotelCard() {
  return (
    <div className="similar-Hotel-card card-shadow relative flex flex-col justify-between">
      <div className="h-40 relative">
        <Image
          src="/assets/hotel.png"
          width={400}
          height={240}
          alt=""
          className="w-full h-40 object-cover object-center rounded-tl-[1rem] rounded-tr-[1rem]"
        />
      </div>
      <div className=" bg-[#EDF8ED] similar-hotel-details p-2 pt-4">
        <div className="flex w-full">
          <div className="w-8/12 flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
              <div className="flex items-center text-urban-green text-sm lg:text-[0.58rem]">
                <PlaceOutlinedIcon className="text-sm" /> Abuja
              </div>
              <span className="text-urban-green lg:text-[0.54rem]">
                rate from <span className="font-bold">N20,000.00</span>
              </span>
            </div>
            <h2 className="text-xl lg:text-xl font-bold">Elixir Hotel</h2>
          </div>
          <div className="flex flex-col items-end w-4/12">
            <h2 className="text-right text-3xl lg:text-xl font-bold text-urban-green w-full">
              10%
            </h2>
            <span className="text-xs lg:text-[0.56rem] font-creato">
              Discount/Room
            </span>
          </div>
        </div>

        <div className="flex items justify-between mt-4 lg:mt-1">
          <div className="font-light text-sm lg:text-[0.60rem] w-8/12">
            <span className="text-urban-green">Address:</span> No 23, Kingsway
            rd Kaduna
          </div>
          <div>
            <button className="text-[0.56rem] bg-white rounded-full p-2">
              See Direction
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-light text-sm lg:text-[0.56rem]">
            For Reservations call:{" "}
            <span className="text-urban-green">+234 903 476 9809</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
