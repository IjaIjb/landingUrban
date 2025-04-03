"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./passenger-payment.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";

import SuccessDialog from "@/app/shared/components/success-dialog/success-dialog";
import SimilarTripCard from "../passenger-details/similar-trip-card";
import { ITrips } from "@/app/models/trips-model";
import { toast } from "react-toastify";
import { getTrips } from "@/app/service/auth.service";
import { createBookings } from "@/app/service/bookings.service";
import Spinner from "@/app/shared/components/Spinner";
// import { usePaystackPayment } from "react-paystack";

const paystackKey: string = process.env.NEXT_PUBLIC_PAYSTACK_KEY ?? "";

export default function PassengerDetails() {
  const [isloading, setisloading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [secondStepData, setsecondStepData] = useState<any>({});
  const [tripDetails, settripDetails] = useState<any>({});
  const [tripData, settripData] = useState<any>({});
  const [showSuccessModal, setshowSuccessModal] = useState(false);
  const [noOfPassanger, setnoOfPassanger] = useState(0);
  const [similarTrips, setsimilarTrips] = useState<ITrips>([]);
  const [bookingRef, setbookingRef] = useState("");

  const noPassengers = [1, 2];

  const [passengers, setpassengers] = useState<any[]>(
    noPassengers.map((obj) => {
      return {
        title: "",
        email: "",
        firstName: "",
        surname: "",
        phoneNumber: "",
        seat: "",
        extraLuggage: 0,
      };
    })
  );
  const [currentPassager, setcurrentPassager] = useState<any>(null);
  const router = useRouter();
  const currDate = Date.now().toString();

  const loadPaystack = async () => {
    const paystackModule = await import("react-paystack");
    return paystackModule;
  };
  const makePayment = async (trnxRef: string) => {
    const config = {
      email: tripDetails?.passengers
        ? tripDetails?.passengers[0]?.email
        : "---",
      reference: trnxRef,
      amount: tripDetails?.vatObj ? Number(tripDetails.vatObj.total * 100) : 0,
      publicKey: paystackKey,
      metadata: {
        custom_fields: [],
      },
    };
    const { usePaystackPayment } = await loadPaystack();
    const initializePayment = usePaystackPayment(config);
    initializePayment({
      onSuccess: () => {
        setshowSuccessModal(true);
        setbookingRef(trnxRef);
      },
      onClose: () => {
        console.log("failed");
      },
    });
  };

  const handleSubmit = () => {
    if (isloading) return;
    setisloading(true);
    const tripObj = tripDetails.tripData;
    const bookings = tripDetails.passengers.map((obj: any) => {
      return {
        title: obj.title,
        firstname: obj.firstName,
        lastname: obj.surname,
        phone: obj.phoneNumber,
        city: tripObj.departure.city,
        avatar: "string",
        password: "P@ssw0rd",
        email: obj.email,
        parkId: tripObj.departure.parkOwnerId,
        role: "USER",
        userType: "PASSENGERS",
        userCategory: "PASSENGERS",
        seatNumber: obj.seat,
        nextOfKinName: "string",
        nextOfKinPhone: "string",
        costOfExtraLuggage: "0.0",
        extraLuggageWeight: "0.0",
        uniqueID: tripDetails.tripCode,
        userId: tripObj.departure.parkOwnerId,
        tripId: tripObj.id,
      };
    });
    const payload = { bookings };
    createBookings(payload).subscribe({
      next: (res) => {
        if (res) {
          makePayment(res.data.uniqueID);
          setisloading(false);
        } else {
          toast.info(res.error);
        }
      },
      error: (msg) => {
        toast.error(msg.message);
        setisloading(false);
      },
      complete: () => {
        setisloading(false);
      },
    });
  };

  const LazyMap = dynamic(
    () => import("@/app/shared/components/map-with-path/map-with-path"),
    {
      ssr: false,
    }
  );

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const similarTripData: any = localStorage.getItem("similarTrips");
    const step1Data: any = localStorage.getItem("firstStep");
    const step2Data: any = localStorage.getItem("secondStep");
    const finalData: any = localStorage.getItem("finalStep");
    const firstStep = JSON.parse(step1Data);
    const secondStep = JSON.parse(step2Data);
    const { numberOfPassagers } = firstStep;
    setsimilarTrips(JSON.parse(similarTripData));
    setnoOfPassanger(parseInt(numberOfPassagers));
    setsecondStepData(JSON.parse(step2Data));
    settripDetails(JSON.parse(finalData));
    settripData({ secondStep });
  }, []);

  // if (!isClient) return null;

  const PaystackButton = dynamic(
    () => import("react-paystack").then((c) => c.PaystackButton),
    {
      ssr: false,
    }
  );

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
                <span className="text-xl 2xl:text-2xl">Payment</span>
              </div>
              <div className="mt-4">
                <div className="mt-6">
                  <h4 className="text-lg 2xl:text-2xl">Payment</h4>
                  {Object.keys(tripDetails).length && (
                    <p className=" w-full lg:w-10/12 text-base font-light text-gray-600">
                      You are about to make the payment of N
                      {tripDetails.vatObj.total}. Select payment option below
                    </p>
                  )}

                  <div className="mt-4 flex flex-col gap-y-4">
                    <div className="w-full p-3 border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
                      <span className="text-xs font-light">Pay with</span>
                      <Image
                        src="/assets/paystack.svg"
                        width={80}
                        height={40}
                        alt=""
                      />
                    </div>

                    <div className="w-full p-3 border border-gray-200 rounded-lg flex items-center justify-between cursor-not-allowed bg-gray-200">
                      <span className="text-xs font-light text-gray-400">
                        Pay with
                      </span>
                      <Image
                        src="/assets/rave.svg"
                        width={45}
                        height={20}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-10">
                  {/* <PaystackButton
                    {...componentProps}
                    className="py-3 rounded-md bg-urban-green text-white px-10"
                  /> */}
                  <button
                    className="py-3 rounded-md bg-urban-green text-white px-10"
                    onClick={handleSubmit}
                  >
                    {isloading ? <Spinner isLoading /> : " Submit"}
                  </button>
                </div>
              </div>
            </div>
            {/* ----- right side------ */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="border border-gray-300 w-full lg:w-11/12 p-4 px-2 lg:px-7 2xl:px-8">
                <h2 className="text-xl lg:text-2xl">Map</h2>
                <div className="mt-4">
                  <div className="h-80 bg-slate-100 overflow-hidden">
                    {/* <MapWithPath /> */}
                    {/* <LazyMap /> */}
                    {Object.keys(secondStepData).length > 0 && (
                      <LazyMap
                        depatPath={secondStepData.depatPath}
                        destinPath={secondStepData.destinPath}
                      />
                    )}
                  </div>

                  <h2 className="w-full text-xl lg:text-2xl mt-10 mb-4 font-light">
                    Parks around you with similar trips
                  </h2>
                  <div className="similar-trip-card-container w-full grid grid-cols-1 gap-y-14 lg:gap-y-10 lg:grid-cols-2 lg:gap-x-2">
                    {/* cards */}
                    {similarTrips.length &&
                      similarTrips.map((obj, index: number) => (
                        <SimilarTripCard data={obj} key={index} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showSuccessModal && (
        <SuccessDialog
          isOpen={showSuccessModal}
          setisopen={setshowSuccessModal}
          transRef={bookingRef}
        />
      )}
    </>
  );
}
