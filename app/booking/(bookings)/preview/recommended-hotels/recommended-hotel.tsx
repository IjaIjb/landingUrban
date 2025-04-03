import React from "react";
import Image from "next/image";
import SimilarHotelCard from "../similar-hotel-card";

export default function RecommendedHotel() {
  return (
    <div className="mt-4">
      <div className="h-96 bg-slate-100 overflow-hidden">
        <div className="relative">
          <Image
            src="/assets/hotel.png"
            width={400}
            height={240}
            alt=""
            className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
          />
          <div className="w-full absolute bottom-4 flex justify-center">
            <button className="bg-white p-3 rounded-full">
              View More Hotel
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EDF8ED] p-4 mt-4">
        <h4 className="font-light">
          Get Exciting Discounts when You Make Hotel Reservations and Payment
          with{" "}
          <span className="font-bold text-urban-green underline">
            Urban Cards
          </span>
        </h4>
      </div>

      <h2 className="w-full text-xl lg:text-2xl mt-10 mb-4 font-light">
        Recommendations
      </h2>
      <div className="similar-hotel-card-container w-full grid grid-cols-1 gap-y-14 lg:gap-y-10 lg:grid-cols-2 lg:gap-x-2">
        <SimilarHotelCard />
        <SimilarHotelCard />
      </div>
    </div>
  );
}
