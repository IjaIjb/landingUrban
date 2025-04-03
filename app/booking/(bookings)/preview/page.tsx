"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./preview-details.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";
import PreviewAccordion from "./preview-accordion/preview-accordion";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import SimilarTripCard from "./similar-hotel-card";
import MapWithPath from "@/app/shared/components/map-with-path/map-with-path";
import SeatArrangementDialog from "@/app/shared/components/seat-arrange-dialog/seat-arrangement-dialog";
import HotelCard from "@/app/shared/components/hotel-card/hotel-card";
import RecommendedHotel from "./recommended-hotels/recommended-hotel";
import { formatDate } from "@/app/shared/utils/utils";
import { calculateVAT } from "@/app/shared/utils/helperfunction";

export default function PassengerDetails() {
  const [passengers, setpassengers] = useState<any[]>();
  const [tripDetails, settripDetails] = useState<any>({});
  const [vatObj, setvatObj] = useState<any>({});
  const [noOfPassanger, setnoOfPassanger] = useState(0);
  const router = useRouter();

  const LazyMap = dynamic(
    () => import("@/app/shared/components/map-with-path/map-with-path"),
    {
      ssr: false,
    }
  );

  const handleSubmit = () => {
    localStorage.setItem(
      "finalStep",
      JSON.stringify({ ...tripDetails, passengers, vatObj })
    );
    router.push("./payment");
  };

  const handleEdit = () => {
    router.push("./passenger-details");
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const step1Data: any = localStorage.getItem("firstStep");
    const step2Data: any = localStorage.getItem("secondStep");
    const step3Data: any = localStorage.getItem("thirdStep");
    if (
      step1Data == null ||
      step1Data.length < 1 ||
      step2Data == null ||
      step3Data == null
    ) {
      router.push("/");
    } else {
      const firstStep = JSON.parse(step1Data);
      const secondStep = JSON.parse(step2Data);
      const thirdStep = JSON.parse(step3Data);
      setpassengers(thirdStep.passagers);

      const tripdetails = {
        ...firstStep,
        ...secondStep,
        ...thirdStep,
      };
      const { numberOfPassagers } = firstStep;
      settripDetails(tripdetails);
      setnoOfPassanger(parseInt(numberOfPassagers));
      setvatObj(calculateVAT(tripdetails.fare * parseInt(numberOfPassagers)));
    }
  }, []);

  return (
    <>
      <main className="-mt-[9.8rem]  2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] py-10 px-4">
        <section className="m-h-96  w-full lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12 passenger-details-trips-page">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-x-2">
                <div onClick={() => router.back()} className="cursor-pointer">
                  <KeyboardBackspaceIcon />
                </div>
                <span className="text-xl lg:text-2xl">Preview</span>
              </div>
              <div className="mt-4">
                <div className="mb-4">
                  <PreviewAccordion sn={1} passengerName={""} seatNumber="B1">
                    <div
                      className="w-full flex flex-col gap-10"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="800"
                    >
                      <div className="w-full mt-6 min-h-40">
                        {passengers?.map((obj: any, index: number) => (
                          <div key={index} className="mb-4">
                            <h2 className="px-2">
                              {index + 1}. Passenger Details
                            </h2>
                            <div className="mt-4 font-light">
                              <div className="w-full px-2 py-1 flex items-center justify-between">
                                <span className="block w-1/2 text-gray-400">
                                  Passenger’s Name
                                </span>
                                <span className="block w-1/2">
                                  {obj.firstName} {obj.surname}
                                </span>
                              </div>

                              <div className="w-full px-2 py-1 flex items-center justify-between">
                                <span className="block w-1/2 text-gray-400">
                                  Email
                                </span>
                                <span className="block w-1/2">
                                  {obj.email ?? "---"}
                                </span>
                              </div>

                              <div className="w-full px-2 py-1 flex items-center justify-between">
                                <span className="block w-1/2 text-gray-400">
                                  Phone Number
                                </span>
                                <span className="block w-1/2">
                                  {obj.phoneNumber}
                                </span>
                              </div>

                              <div className="w-full px-2 py-1 flex items-center justify-between">
                                <span className="block w-1/2 text-gray-400">
                                  Seat Number
                                </span>
                                <span className="block w-1/2">{obj.seat}</span>
                              </div>

                              <div className="w-full px-2 py-1 flex items-center justify-between">
                                <span className="block w-1/2 text-gray-400">
                                  Extra Luggage size
                                </span>
                                <span className="block w-1/2">--</span>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-4">
                          <h2 className="text-urban-green text-xl">
                            Trip Details
                          </h2>
                          <div className="p-2 bg-[#036E030F] mt-6 font-light flex flex-col gap-y-2">
                            <p>Vehicle Type: {tripDetails.vehicleType}</p>
                            <p>
                              Trip Code:{" "}
                              <span className="font-bold text-urban-green">
                                {tripDetails.tripCode}
                              </span>
                            </p>
                            <p>
                              Departure Time:{" "}
                              <span className="font-bold text-urban-green">
                                {tripDetails.departureTime}
                              </span>
                            </p>
                            <p>
                              Departure Date:{" "}
                              <span className="font-bold text-urban-green">
                                {formatDate(tripDetails.departureDate)}
                              </span>
                            </p>
                            <p>
                              Departure City:{" "}
                              <span className="font-bold text-urban-green">
                                {tripDetails.departureCity}
                              </span>
                            </p>
                            <p>
                              Destination City:{" "}
                              <span className="font-bold text-urban-green">
                                {tripDetails.destinationCity}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h2 className="text-urban-green text-xl">
                            Payment Details
                          </h2>
                          <div className="mt-4 font-light">
                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                Number of Passenger
                              </span>
                              <span className="block w-1/2">
                                {noOfPassanger}
                              </span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                Price per seats
                              </span>
                              <span className="block w-1/2">
                                N{tripDetails.fare}
                              </span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                Cost Of Extra Luggage
                              </span>
                              <span className="block w-1/2">-</span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-gray-400">
                                VAT
                              </span>
                              <span className="block w-1/2">N{vatObj.vat}</span>
                            </div>

                            <div className="w-full px-2 py-1 flex items-center justify-between">
                              <span className="block w-1/2 text-urban-green text-xl font-bold">
                                Total Amount
                              </span>
                              <span className="block w-1/2 font-semibold">
                                N{vatObj.total}
                              </span>
                            </div>
                            <div className="mt-4 flex items-center gap-x-1">
                              <InfoOutlinedIcon
                                sx={{ fontSize: 18 }}
                                className="text-urban-green"
                              />
                              <p className="text-sm text-gray-800">
                                <span className="text-urban-green font-semibold">
                                  Please Note:
                                </span>{" "}
                                Luggage size and weight may attract extra cost
                                at check-in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PreviewAccordion>
                </div>

                <div className="mt-10 mb-10 w-full flex flex-col gap-y-2">
                  <div
                    className="py-3 border border-urban-green rounded-md bg-white text-urban-green flex justify-center items-center px-10 w-full cursor-pointer"
                    onClick={handleEdit}
                  >
                    Edit Info
                  </div>
                  <button
                    className="py-3 rounded-md bg-urban-green text-white px-10 w-full"
                    onClick={handleSubmit}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
            {/* ----- right side------ */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="border border-gray-300 w-full lg:w-11/12 p-4 px-2 lg:px-7 2xl:px-8">
                <h2 className="text-xl lg:text-2xl">
                  Recommended Hotels in your Destination
                </h2>
                <RecommendedHotel />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
