import React, { useState } from "react";
import Image from "next/image";
import { ITrip } from "@/app/models/trips-model";

import {
  convertDate,
  convertTo12HourFormat,
  stringToNumberArray,
  truncateString,
} from "@/app/shared/utils/utils";
import { useRouter } from "next/navigation";

type PropT = {
  data: ITrip;
};

export default function SimilarTripCard({ data }: PropT) {
  const [isparkInfoOpen, setisparkInfoOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const {
    cost,
    departure,
    departureDate,
    departureTime,
    description,
    uniqueID,
    destination,
    tripVehicle,
    bookings,
    finalBusStop,
  } = data;
  const router = useRouter();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleBookTrip = () => {
    const secondStep = {
      tripCode: uniqueID,
      parkAddr: departure.address ?? "---",
      parkCity: departure.city,
      parkState: departure.region,
      parkname: "---",
      fare: parseInt(cost),
      vehicleType: tripVehicle?.vehicleType.category,
      departureCity: departure.city,
      destinationCity: finalBusStop.locationCity.name,
      departureTime: departureTime,
      departureDate: departureDate,
      lat: "",
      long: "",
      depatPath: stringToNumberArray(departure.coordinate),
      destinPath: stringToNumberArray(finalBusStop.coordinate),
      vehicleData: tripVehicle?.vehicleType,
      bookings: bookings,
    };
    localStorage.setItem("secondStep", JSON.stringify(secondStep));
    router.push("/booking/passenger-details");
  };

  const journey: string = `${departure?.locationCity?.name ?? "---"} to ${
    finalBusStop.locationCity.name ?? "---"
  }`;
  const seats = tripVehicle?.vehicleType.numberOfSeats - 1;
  const availableSeats = seats - bookings.length;

  return (
    <div className="similar-trip-card card-shadow">
      <div className="bg-urban-green h-28 p-4 similar-trip-card-head flex items-center">
        <div className="flex flex-col gap-2 w-10/12">
          <p className="text-white font-light">
            Trip code:{" "}
            <span className="font-bold">{uniqueID.toLowerCase()}</span>
          </p>
          <h3> {truncateString(journey, 28)}</h3>
          <button>
            {" "}
            {availableSeats! > 0 ? availableSeats : 0} Seats available
          </button>
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
      <div className="mt-8 lg:mt-4 px-2 relative">
        <div className="flex items-start gap-1">
          <Image
            src="/assets/trip-timeline.svg"
            width={100}
            height={100}
            alt=""
            className="similar-trip-timeline"
          />
          <div>
            <div className="flex justify-between similarcard-pickup">
              <div className="6/12">
                <span>Pickup park</span>
                <p className="text-sm lg:text-[0.66rem]">
                  {departure?.locationCity?.name}, {departure?.region}
                </p>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  className="bg-[#6cc56c41] h-6 text-urban-green rounded-full text-[0.6rem] px-2"
                  onClick={() => setisparkInfoOpen(!isparkInfoOpen)}
                >
                  See Info
                </button>

                {isparkInfoOpen && (
                  <div className="h-48 rounded-xl w-full right-0 top-6 p-2 px-4 lg:w-10/12 bg-white absolute z-10 card-shadow py-4">
                    <h2 className="text-center text-urban-green text-sm">
                      Park Info
                    </h2>
                    <div className="mt-4 flex flex-col gap-2">
                      <div className="flex items-center w-full text-xs">
                        <div className="w-5/12 text-gray-500 font-light text-[0.70rem]">
                          Park Address:
                        </div>
                        <div className="text-[0.70rem]">
                          {departure.address ?? "---"}
                        </div>
                      </div>
                      <div className="flex items-center w-full text-xs">
                        <div className="w-5/12 text-gray-500 font-light text-[0.70rem]">
                          Departure time:
                        </div>
                        <div className="text-[0.70rem]">
                          {convertTo12HourFormat(departureTime)}
                        </div>
                      </div>
                      <div className="flex items-center w-full text-xs">
                        <div className="w-5/12 text-gray-500 font-light text-[0.70rem]">
                          Departure Date:
                        </div>
                        <div className="text-[0.70rem]">
                          {convertDate(departureDate)}
                        </div>
                      </div>
                      <div className="flex items-center w-full text-xs">
                        <div className="w-5/12 text-gray-500 font-light text-[0.70rem]">
                          Park Tel:
                        </div>
                        <div className="text-[0.70rem]">
                          {departure.phone ?? "---"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-start mt-10 similarcard-destination">
              <div className="8/12">
                <span>Destination City</span>
                <p className="text-sm lg:text-[0.66rem]">
                  {finalBusStop.locationCity.name},{" "}
                  {finalBusStop.locationCity.locationState.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 flex items-center justify-between mt-16 lg:mt-8 similiar-tripcard-footer">
          <div
            className="border border-urban-green text-sm lg:text-[0.6rem] text-center py-1 rounded-full w-20 lg:w-16 cursor-pointer"
            onClick={handleBookTrip}
          >
            Book Trip
          </div>
          <div className="text-sm lg:text-[0.6rem]">
            <p className="text-urban-green">Departure Time</p>
            <p>{convertTo12HourFormat(departureTime)}</p>
          </div>

          <div className="text-sm lg:text-[0.6rem]">
            <p className="text-urban-green">Amount</p>
            <p>N{cost}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
