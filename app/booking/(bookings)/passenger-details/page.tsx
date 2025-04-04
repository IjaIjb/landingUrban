"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./passenger-details.scss";
import Footer from "@/app/shared/components/footer/footer";
import { useRouter } from "next/navigation";
import PassengerAccordion from "./passenger-accordion/passenger-accordion";
import Select from "@mui/joy/Select";
import { KeyboardArrowDown } from "@mui/icons-material";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import TripCard from "@/app/shared/components/trip-card/trip-card";
import SimilarTripCard from "./similar-trip-card";
import MapWithPath from "@/app/shared/components/map-with-path/map-with-path";
import SeatArrangementDialog from "@/app/shared/components/seat-arrange-dialog/seat-arrangement-dialog";
import TravellersManifestDialog from "@/app/shared/components/travellers-manifest-dialog/travellers-manifest-dialog";
import PassengerRow from "./passenger-row/passenger-row";
import { ITrips } from "@/app/models/trips-model";

export default function PassengerDetails() {
  const [noPassengers, setnoPassengers] = useState<number[]>([]);
  const [showSeatModal, setshowSeatModal] = useState(false);
  const [showManifestModal, setshowManifestModal] = useState(false);
  const [secondStepData, setsecondStepData] = useState<any>({});
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
  const [selectedSeat, setselectedSeat] = useState("");
  const [currentPassager, setcurrentPassager] = useState<any>(null);
  const [bookedSeats, setbookedSeats] = useState<any>([]);
  const [isformValid, setisformValid] = useState(false);
  const [similarTrips, setsimilarTrips] = useState<ITrips>([]);
  const router = useRouter();

  const handleChange = (index: number, fieldName: string, value: any) => {
    const tempArr = [...passengers];
    const temcurrentObj = { ...passengers[index], [fieldName]: value };
    tempArr[index] = temcurrentObj;
    setpassengers(tempArr);
  };

  const LazyMap = dynamic(
    () => import("@/app/shared/components/map-with-path/map-with-path"),
    {
      ssr: false,
    }
  );

  const handleSubmit = () => {
    if (passengers[0].firstName.length > 2) {
      setshowManifestModal(true);
    }
  };

  const handleSeatFieldChange = (
    index: number,
    fieldName: string,
    value: any
  ) => {
    setpassengers((prevFormValues: any) => {
      const updatedItems = [...prevFormValues];
      const updatedItem = { ...updatedItems[index] };
      updatedItem[fieldName] = value;
      updatedItems[index] = updatedItem;
      return [...updatedItems];
    });
    const step3Data: any = localStorage.getItem("thirdStep");
    if (step3Data == null) {
      if (!bookedSeats.includes(value)) {
        setbookedSeats([...bookedSeats, value]);
      }
    } else {
      const arr = bookedSeats.filter(
        (item: any) => item !== passengers[index].seat
      );
      setbookedSeats([...arr, value]);
    }
  };

  function generateArray(count: number) {
    return Array.from({ length: count }, (_, index) => index + 1);
  }

  const handleValidation = () => {
    passengers.map((obj: any) => {
      const { title, firstName, surname, phoneNumber, seat, email } = obj;
      if (title !== null) {
        const isValid =
          title.length > 0 &&
          email.length > 4 &&
          firstName.length > 2 &&
          surname.length > 2 &&
          phoneNumber.length == 11 &&
          seat.length === 2;
        setisformValid(isValid);
      }
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const similarTripData: any = localStorage.getItem("similarTrips");
    const prevPageData: any = localStorage.getItem("firstStep");
    const step3Data: any = localStorage.getItem("thirdStep");
    const step2Data: any = localStorage.getItem("secondStep");
    const bookingsData = JSON.parse(step2Data);
    const bookSeats = bookingsData?.bookings.map((item: any) => item.seatNumber);
    //get all already booked seats in the vehicle
    setbookedSeats(bookSeats);
    const thirdStep = JSON.parse(step3Data);
    setsecondStepData(JSON.parse(step2Data));

    if (prevPageData == null || prevPageData.length < 1) {
      router.push("/");
    } else {
      const firstStep = JSON.parse(prevPageData);
      const { numberOfPassagers } = firstStep;
      const arrayPassgrs = generateArray(numberOfPassagers);
      setsimilarTrips(JSON.parse(similarTripData));
      if (step3Data !== null) {
        setpassengers(thirdStep.passagers);
        setbookedSeats(thirdStep.bookedSeats);
      } else {
        const emptyData = arrayPassgrs.map((obj) => {
          return {
            title: "",
            email: "",
            firstName: "",
            surname: "",
            phoneNumber: "",
            seat: "",
            extraLuggage: 0,
          };
        });
        setpassengers(emptyData);
      }

      // setnoPassengers(arrayPassgrs);
    }
  }, []);
// console.log(secondStepData)
  useEffect(() => {
    handleValidation();
  }, [passengers]);

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
                <span className="text-xl lg:text-2xl">
                  Enter Passenger’s details
                </span>
              </div>
              <div className="mt-4">
                {passengers.map((obj, index: number) => (
                  <div key={index} className="mb-4">
                    <PassengerAccordion
                      sn={index + 1}
                      passengerName={`${obj.firstName} ${obj.surname}`}
                      seatNumber={passengers[index].seat ?? "---"}
                    >
                      <div
                        className="w-full flex flex-col gap-10"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="800"
                      >
                        <div className=" w-full mt-6">
                          <label className="text-base font-light">Title</label>
                          <div className="mt-3">
                            <Select
                              defaultValue={18}
                              indicator={<KeyboardArrowDown />}
                              sx={{ height: "48px", fontSize: "0.8rem" }}
                              slotProps={{
                                listbox: {
                                  sx: {
                                    maxHeight: "200px",
                                  },
                                },
                              }}
                              value={passengers[index].title}
                              onChange={(
                                event: React.SyntheticEvent | null,
                                newValue: string | null
                              ) => {
                                handleChange(index, "title", newValue);
                              }}
                            >
                              {["Mr", "Mrs", "Miss", "Sir"].map(
                                (seat, index: number) => (
                                  <Option
                                    value={seat}
                                    sx={{ fontSize: "0.8rem" }}
                                    key={index}
                                  >
                                    {seat}
                                  </Option>
                                )
                              )}
                            </Select>
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="text-base font-light">
                            First Name
                          </label>
                          <div className="mt-3">
                            <Input
                              type="text"
                              required
                              placeholder="Type in here…"
                              value={passengers[index].firstName}
                              sx={{
                                height: "46px",
                                fontSize: "0.8rem",
                                "--Input-focusedInset": "var(--any, )",
                                "--Input-focusedThickness": "0.25px",
                                "--Input-focusedHighlight": "#15560c",
                                "&:focus-outside": {
                                  borderColor: "#000000",
                                },
                                ":focus": "#000",
                              }}
                              onChange={(e: any) => {
                                handleChange(
                                  index,
                                  "firstName",
                                  e.target.value
                                );
                              }}
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="text-base font-light">
                            Last Name
                          </label>
                          <div className="mt-3">
                            <Input
                              type="text"
                              placeholder="Type in here…"
                              required
                              value={passengers[index].surname}
                              sx={{
                                height: "46px",
                                fontSize: "0.8rem",
                                "--Input-focusedInset": "var(--any, )",
                                "--Input-focusedThickness": "0.25px",
                                "--Input-focusedHighlight": "#15560c",
                                "&:focus-outside": {
                                  borderColor: "#000000",
                                },
                                ":focus": "#000",
                              }}
                              onChange={(e: any) => {
                                handleChange(index, "surname", e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="text-base font-light">Email</label>
                          <div className="mt-3">
                            <Input
                              type="text"
                              placeholder="Type in here…"
                              required
                              value={passengers[index].email}
                              sx={{
                                height: "46px",
                                fontSize: "0.8rem",
                                "--Input-focusedInset": "var(--any, )",
                                "--Input-focusedThickness": "0.25px",
                                "--Input-focusedHighlight": "#15560c",
                                "&:focus-outside": {
                                  borderColor: "#000000",
                                },
                                ":focus": "#000",
                              }}
                              onChange={(e: any) => {
                                handleChange(index, "email", e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <label className="text-base font-light">
                            Phone Number
                          </label>
                          <div className="mt-3">
                            <Input
                              type="text"
                              placeholder="Type in here…"
                              required
                              value={passengers[index].phoneNumber}
                              sx={{
                                height: "46px",
                                fontSize: "0.8rem",
                                "--Input-focusedInset": "var(--any, )",
                                "--Input-focusedThickness": "0.25px",
                                "--Input-focusedHighlight": "#15560c",
                                "&:focus-outside": {
                                  borderColor: "#000000",
                                },
                                ":focus": "#000",
                              }}
                              onChange={(e: any) => {
                                if (isNaN(e.target.value)) return false;
                                handleChange(
                                  index,
                                  "phoneNumber",
                                  e.target.value
                                );
                              }}
                            />
                          </div>
                        </div>

                        <div className=" w-full mt-2">
                          <div className="w-full flex items-center justify-between">
                            <label className="text-base font-light">
                              Select Seat
                            </label>
                            <button
                              className="bg-[#6cc56c29] text-urban-green py-2 px-4 text-xs rounded-lg"
                              onClick={() => {
                                setshowSeatModal(true);
                                setcurrentPassager(index);
                              }}
                            >
                              See seat Arrangement
                            </button>
                          </div>
                          <div className="mt-3">
                            <Input
                              type="text"
                              placeholder=""
                              required
                              disabled
                              value={passengers[index].seat}
                              sx={{
                                height: "46px",
                                fontSize: "0.8rem",
                                "--Input-focusedInset": "var(--any, )",
                                "--Input-focusedThickness": "0.25px",
                                "--Input-focusedHighlight": "#15560c",
                                "&:focus-outside": {
                                  borderColor: "#000000",
                                },
                                ":focus": "#000",
                              }}
                              defaultValue={selectedSeat}
                            />
                          </div>
                        </div>
                      </div>
                    </PassengerAccordion>
                  </div>
                ))}

                <div className="mt-10 mb-10">
                  <button
                    className="py-3 rounded-md disabled:bg-gray-300 bg-urban-green text-white px-10"
                    onClick={handleSubmit}
                    disabled={!isformValid}
                  >
                    Continue
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
                    {Object?.keys(secondStepData).length > 0 && (
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

      {showSeatModal && (
        <SeatArrangementDialog
          isOpen={showSeatModal}
          setisopen={setshowSeatModal}
          handleSelect={handleChange}
          currentPassengerIndex={currentPassager}
          vehicleData={secondStepData.tripData.vehicleType}
          setSelectedSeat={(value: any) =>
            handleSeatFieldChange(currentPassager, "seat", value)
          }
          bookedSeats={bookedSeats}
          selectedSeat={selectedSeat}
        />
      )}

      {showManifestModal && (
        <TravellersManifestDialog
          isOpen={showManifestModal}
          setisopen={setshowManifestModal}
          data={passengers}
          bookedSeats={bookedSeats}
        />
      )}
    </>
  );
}
