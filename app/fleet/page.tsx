"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../shared/components/footer/footer";
import "./fleet.scss";
import AppAd from "../shared/components/app-ad/app-ad";

export default function Fleetpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="relative">
      <section className="w-full -mt-[7.9rem] 2xl:-mt-40 min-h-[60vh] lg:min-h-[75vh] bg-heroFleet bg-cover py-10 px-4">
        <div className="flex flex-col justify-center items-center ">
          <div className="mt-40 lg:mt-40 2xl:mt-72 w-11/12 lg:w-5/12 xl:w-5/12 m-auto text-center flex flex-col gap-10 items-center 2xl:w-6/12 fleet-hero">
            <h2
              className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl fleet-hero-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Exquisitely Engineered Travel Experience.{" "}
              <span className="font-thin">
                Join Our Community of Fleet Partners
              </span>
            </h2>
            <button
              className="bg-white rounded-md py-3 px-4 w-5/12 lg:w-4/12"
              data-aos="fade-up"
              data-aos-duration="1800"
              onClick={() => {
                window.location.href = "https://fleet.urban.ng/register"; // Replace with your actual URL
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <div className="2xl:w-11/12 m-auto">
        {/* ---------------- about --------------- */}
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-2 mt-20 2xl:mt-20 2xl:mb-40">
          <section className="">
            <h2
              className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Exploitable{" "}
              <span className=" text-urban-green font-extrabold">
                Opportunities
              </span>
            </h2>
            <p
              className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              Instantly recognizable, Urban has been delivered across major
              cities in Nigeria at present. Our team works hand-in-hand with
              travelers to tailor each travel to their specific travel
              requirements. This truly bespoke travel experience is a
              collaboration process with infinite scope for personalization.
              Urban has instant appeal to travelers looking for ultimate
              unparallel travel. It's uncompromising approach across fleet and
              trip design and management has drawn countless accolades lauded as
              maximizing travelers' engagement and experience.
            </p>
            <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
              <div className="w-full h-96 lg:h-[28rem] lg:w-5/12 relative overflow-hidden">
                <Image
                  src="/assets/fleet1.svg"
                  width={300}
                  height={140}
                  alt=""
                  className="w-full h-96  2xl:h-[28rem] object-cover object-center"
                  data-aos="zoom-out-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                />
              </div>

              <div className="w-full h-96 lg:h-[28rem] lg:w-7/12 relative overflow-hidden">
                <Image
                  src="/assets/fleet2.svg"
                  width={300}
                  height={140}
                  alt=""
                  className="w-full h-96 2xl:h-[28rem]  object-cover object-center"
                  data-aos="zoom-out-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                />
              </div>
            </div>
          </section>
        </div>
        {/* ------------------------------------------ */}

        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-14 lg:mt-24 2xl:mt-40">
          <section className="m-auto xl:mt-14 min-h-96">
            <h2
              className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Why become Urban
              <span className=" text-urban-green font-extrabold">
                {" "}
                Fleet partner
              </span>
            </h2>
            <div className="bg-[#6cc56c2a] min-h-40 lg:p-10 mt-14">
              <div className="mt-4 flex flex-col lg:flex-row justify-between gap-y-4 gap-4 mb-0">
                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-1/3 flex flex-col items-center"
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/yfleet1.svg"
                      width={50}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-light text-center xl:text-lg 2xl:text-xl">
                    Strong support Network round the clock 365days
                  </p>
                </div>

                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-1/3 flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/yfleet2.svg"
                      width={50}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-light text-center xl:text-lg 2xl:text-xl">
                    Improved Revenue Visibility for Fleet Partners
                  </p>
                </div>

                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-1/3 flex flex-col items-center"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/yfleet3.svg"
                      width={50}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-light text-center xl:text-lg 2xl:text-xl">
                    Quick, Convenient, Easy to use Fleet Management Dashboard
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col lg:flex-row justify-between gap-y-4 gap-4 mb-0">
                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-1/3 flex flex-col items-center"
                  data-aos="zoom-out-left"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/yfleet4.svg"
                      width={50}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-light text-center xl:text-lg 2xl:text-xl">
                    Cutting-Edge Technology built with you in mind
                  </p>
                </div>

                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-1/3 flex flex-col items-center"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/yfleet5.svg"
                      width={50}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-light text-center xl:text-lg 2xl:text-xl">
                    Assured Revenue with real-time payments per booking
                  </p>
                </div>

                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-1/3 flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/yfleet6.svg"
                      width={50}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-light text-center xl:text-lg 2xl:text-xl">
                    Fixed agreed cost per Trip without excuses or delay
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ----------vision ------------------- */}
        <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-4 2xl:mt-40">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-7/12 bg-uFleethand bg-cover p-10 flex justify-center"></div>

            <div className="w-full lg:w-5/12 bg-urban-green p-10 lg:p-20 flex flex-col items-center justify-center gap-4 lg:gap-10 lg:min-h-96">
              <div className="flex items-center gap-4 text-white w-full">
                <Image
                  src="/assets/ufleetlogo.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <div className="mt-4 lg:mt-2">
                <h2 className=" text-2xl lg:text-3xl xl:text-4xl w-10/12 text-white font-creato italic">
                  Experience Great partnership{" "}
                  <span className="font-thin">
                    by Joining our growing community of
                  </span>
                  <span className=" text-green-500"> fleet partners</span>
                </h2>
              </div>

              <div className="w-full flex justify-start">
                <button className="bg-white text-urban-black py-2 px-6 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------------- */}
      </div>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 -mt-14 lg:mt-24 2xl:mt-40 2xl:w-10/12">
        <section className="m-auto xl:mt-14 min-h-96">
          <h2
            className="text-4xl lg:text-4xl font-creato 2xl:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            How to become Urban
            <span className=" text-urban-green font-extrabold">
              {" "}
              Fleet partner
            </span>
          </h2>
          <p
            className="text-xl lg:text-2xl font-thin italic font-creato 2xl:mt-4 2xl:text-4xl"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            follow the steps below
          </p>
          <div className=" min-h-40 mt-1 2xl:p-0">
            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%] boxShadow"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/stepone.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Step One
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Download the Urban mobile app on either the Apple Store or the
                  Google Play Store
                </p>
              </div>
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%] boxShadow"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/steptwo.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Step Two
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email
                </p>
              </div>
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%] boxShadow"
                data-aos="fade-up"
                data-aos-duration="2800"
                data-aos-once="true"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/stepthree.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Step Three
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Conveniently book your trip via the Urban mobile app or web
                  remotely and in real-time
                </p>
              </div>
            </div>
            <div className="mt-8 2xl:mt-10">
              <button
              onClick={() => {
                window.location.href = "https://fleet.urban.ng/register"; // Replace with your actual URL
              }}
               className="py-2 px-6 bg-urban-green text-white font-creato rounded 2xl:text-xl 2xl:py-3 2xl:px-10">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* =========== app ads ======================== */}
      <AppAd />
      {/* ============================================= */}

      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
