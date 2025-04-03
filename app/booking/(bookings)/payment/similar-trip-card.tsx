import React from "react";
import Image from "next/image";

export default function SimilarTripCard() {
  return (
    <div className="similar-trip-card card-shadow">
      <div className="bg-urban-green h-28 p-4 similar-trip-card-head flex items-center">
        <div className="flex flex-col gap-2 w-10/12">
          <p className="text-white font-light">
            Trip code: <span className="font-bold">OGLA01</span>
          </p>
          <h3>Sagamu to Lagos</h3>
          <button>4 Available seats</button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/urlogo.svg"
            width={100}
            height={100}
            alt=""
            className="w-5/12"
          />
        </div>
      </div>

      {/* below */}
      <div className="mt-8 lg:mt-4 px-2">
        <div className="flex items-start gap-1">
          <Image
            src="/assets/trip-timeline.svg"
            width={100}
            height={100}
            alt=""
            className="similar-trip-timeline"
          />
          <div>
            <div className="flex justify-start similarcard-pickup">
              <div className="6/12">
                <span>Pickup park</span>
                <p className="text-sm lg:text-[0.66rem]">
                  Sagamu Express Junction, Ogunstate
                </p>
              </div>
              <div className="w-6/12 flex justify-end">
                <button className="bg-[#6cc56c41] h-6 text-urban-green rounded-full text-[0.6rem] px-2">
                  See Info
                </button>
              </div>
            </div>

            <div className="flex justify-start mt-10 similarcard-destination">
              <div className="8/12">
                <span>Destination City</span>
                <p className="text-sm lg:text-[0.66rem]">Amac, Abuja</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 flex items-center justify-between mt-16 lg:mt-8 similiar-tripcard-footer">
          <div className="border border-urban-green text-sm lg:text-[0.6rem] text-center py-1 rounded-full w-20 lg:w-16">
            Book Trip
          </div>
          <div className="text-sm lg:text-[0.6rem]">
            <p className="text-urban-green">Departure Time</p>
            <p>09:00 AM</p>
          </div>

          <div className="text-sm lg:text-[0.6rem]">
            <p className="text-urban-green">Amount</p>
            <p>N30,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
