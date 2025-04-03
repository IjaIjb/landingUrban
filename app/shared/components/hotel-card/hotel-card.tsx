import React from "react";
import Image from "next/image";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
type PropT = {
  onbookClick: Function;
};
export default function HotelCard({ onbookClick }: PropT) {
  return (
    <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden hotel-card">
      <div className="relative">
        <Image
          src="/assets/hotel.png"
          width={400}
          height={240}
          alt=""
          className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
        />
        <div className="w-full absolute bottom-4 flex justify-center"></div>
      </div>
      <div className="h-48 mt-4 bg-[#6cc56c22] rounded-br-[2rem] rounded-bl-[2rem] flex p-3 justify-between items-center">
        <div>
          <h2 className="mt-2 font-creato font-bold text-3xl mb-2 _hotel-name ">
            Elixir Hotel
          </h2>
          <div className="flex flex-col lg:flex-row items-start  lg:items-center gap-3">
            <div className="flex items-center">
              <PlaceOutlinedIcon
                // sx={{ fontSize: "1.2rem" }}
                className="text-xl 2xl:text-40"
              />
              <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                Abuja
              </span>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="font-light  _hotel-card-bodyText">Rate from</h3>

              <h3 className="font-light _hotel-card-price">
                <span className="text-urban-green font-bold">N20,000.00</span>
              </h3>
            </div>
          </div>
          <button
            className="bg-urban-green text-white py-2 px-4 rounded-lg text-sm mt-4"
            onClick={() => onbookClick()}
          >
            Make Reservations
          </button>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-center w-full">
            <span className="text-4xl font-bold text-urban-green 2xl:text-[2.42rem]">
              10%
            </span>
            <p className="font-light text-sm 2xl:text-base">Discount /Room</p>
          </div>
        </div>
      </div>
    </div>
  );
}
