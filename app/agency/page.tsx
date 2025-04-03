"use client";

import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../shared/components/footer/footer";
import "./agency.scss";
import AppAd from "../shared/components/app-ad/app-ad";

export default function AgencyPage() {
  const [ismovileNavOpen, setismovileNavOpen] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + ' bg-urban-green">' + "</span>";
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="relative ">
      <section className="w-full angecyHero -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh]  bg-agencyHero bg-cover py-10 px-4 flex flex-col items-center">
        <div className="agency-hero-container">
          <div className="_leftSide">
            <h2
              className="agency-heroText font-creato font-thin"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Take the Urban Wheel and experience a level of driving purity.
              <span className="font-creato font-bold"> Drive with Us</span>
            </h2>
            <div className="mt-8">
              <button
               onClick={() => {
                window.location.href = "https://agency.urban.ng/register"; // Replace with your actual URL
              }} className="py-3 px-10 rounded bg-white 2xl:py-4 2xl:px-20 2xl:mt-2 2xl:text-xl">
                Register
              </button>
            </div>
          </div>

          <div className="_rigthSide">
            <div className="">
              <Image
                src="/assets/agencyCars.svg"
                width={440}
                height={400}
                alt=""
                className="agencyHeroImage"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-28 lg:mt-40 2xl:w-10/12">
        <div className="">
          <h2
            className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Why{" "}
            <span className=" text-urban-green font-extrabold">
              Drive With Us
            </span>
          </h2>
          <p
            className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            Our collaborative partnership ecosystem of partners represents a
            commitment to innovation and excellence. This collaboration and
            partnership are growth-driven through the integration of
            cutting-edge technology and resources. Urban equips you with
            state-of-the-art enterprise-based provider management system,
            empowering our provider agencies with seamless, scalable, and
            forward-thinking solutions geared towards consistent and guaranteed
            revenue per user, per trip.
          </p>
          <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
            <div
              className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/stepone.svg"
                  width={50}
                  height={40}
                  alt=""
                />
                <span className=" text-urban-lightGreen 2xl:text-2xl">
                  Cutting-Edge Technology
                </span>
              </div>
              <p className="mt-4 font-light 2xl:text-xl">
                Exquisitely engineered technology built for you
              </p>
            </div>
            <div
              className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/steptwo.svg"
                  width={50}
                  height={40}
                  alt=""
                />
                <span className=" text-urban-lightGreen 2xl:text-2xl">
                  Seamless-Prompt Support
                </span>
              </div>
              <p className="mt-4 font-light 2xl:text-xl">
                Strong support network round the clock 365days
              </p>
            </div>
            <div
              className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/stepthree.svg"
                  width={50}
                  height={40}
                  alt=""
                />
                <span className=" text-urban-lightGreen 2xl:text-2xl">
                  Easy-to-use Dashboard
                </span>
              </div>
              <p className="mt-4 font-light 2xl:text-xl">
                Convenient and Easy to use provider dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#6cc56c17] flex justify-center items-center lg:py-20 mt-0 lg:mt-20">
        <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-5/12 bg-agencyVision bg-cover p-10 flex justify-center"></div>

            <div className="w-full lg:w-7/12 bg-urban-green p-10 lg:py-20 lg:px-20 flex flex-col items-center gap-4 lg:gap-10 lg:min-h-96">
              <div className="flex items-center gap-4 text-white w-full">
                <Image
                  src="/assets/ufleetlogo.svg"
                  width={40}
                  height={40}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>

              <div className="mt-2 lg:mt-2 w-full">
                <h2
                  className=" text-2xl lg:text-xl xl:text-5xl lg:w-full w-11/12 text-green-400 font-creato mb-8"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Drive -{" "}
                  <span className="font-thin text-white italic">
                    Dream in Motion
                  </span>
                </h2>
                <p
                  className="leading-8 xl:leading-9 font-creato mt-4 text-white font-light lg:text-xl xl:text-3xl"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  Every aspect of the urban trip is designed and engineered with
                  one primary goal in mind: providing the ultimate driving
                  experience - one that's unrivalled on the road.
                </p>
              </div>

              <div className="w-full flex justify-start">
                <button
                 onClick={() => {
                  window.location.href = "https://agency.urban.ng/register"; // Replace with your actual URL
                }}
                 className="bg-white text-urban-green py-2 px-6 rounded 2xl:py-4 2xl:px-10 2xl:text-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full mt-28 lg:mt-40 py-14 bg-urban-lightGreen relative overflow-hidden">
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto 2xl:w-10/12">
          <div className="flex flex-col lg:flex-row bg-white p-6 lg:p-0">
            <div className="w-full lg:w-4/12">
              <Image
                src="/assets/agency-desktop.svg"
                width={40}
                height={80}
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-8/12 relative py-4 lg:p-10 flex flex-col justify-center items-center mt-14 lg:mt-0">
              <div className="w-full flex flex-col gap-2">
                <h2
                  className="text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  The{" "}
                  <span className=" text-urban-green font-bold">
                    Urban Provider Agency
                  </span>
                </h2>
                <p
                  className="leading-8 xl:leading-9 font-creato mt-4 font-light lg:text-xl xl:text-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Urban Provider Agency dashboard is crafted to seamlessly
                  onboard providers, assign trips to providers, manage providers
                  and trips, etc.
                </p>

                <div className="w-full flex justify-start mt-4">
                  <button
                    className="bg-urban-green text-white py-4 px-10 rounded 2xl:py-4 2xl:px-10 2xl:text-xl"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    Drive With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/agency-blur-app.svg"
          // src="/assets/agency-desktop.svg"
          width={40}
          height={80}
          alt=""
          className="w-3/12 absolute -right-40  top-60"
        />
      </section>

      {/* ================ ===================== */}
      <div className="flex justify-center items-center py-20 lg:mt-20">
        <section className="w-11/12 lg:w-11/12 px-1 lg:px-6 m-auto lg:mt-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-5/12 bg-urban-black p-10 lg:p-10 flex flex-col items-center justify-center gap-4 lg:gap-10 lg:min-h-96">
              <div className="flex items-center gap-4 text-white w-full">
                <Image
                  src="/assets/ufleetlogo.svg"
                  width={40}
                  height={40}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>

              <div className="mt-4 lg:mt-2 w-full">
                <h2
                  className=" text-2xl font-light lg:text-3xl xl:text-4xl w-10/12 text-white font-creato"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Worried about{" "}
                </h2>
                <h2
                  className=" text-2xl font-light lg:text-3xl xl:text-4xl w-10/12 text-white font-creato"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  <span className="font-bold italic">trip consumables?</span>
                </h2>
              </div>

              <div className="w-full flex justify-center">
                <Image
                  src="/assets/urban-card.svg"
                  width={120}
                  height={120}
                  alt=""
                  className=" w-8/12"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                />
              </div>
            </div>

            <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-7/12 flex gap-2 px-2 mt-16 lg:mt-0">
              <div className="w-2/12">
                <Image
                  src="/assets/middle-car.svg"
                  width={40}
                  height={80}
                  alt=""
                  className="w-10/12"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-2 w-9/12 gap-4">
                <h2
                  className="text-2xl lg:text-4xl font-creato font-thin 2xl:text-5xl 2xl:leading-[3.5rem]"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  data-aos-once="true"
                >
                  The{" "}
                  <span className="font-bold text-urban-green">
                    Urban provider card
                  </span>{" "}
                  is the ultimate travel partner for{" "}
                  <span className="font-bold">seamless driving experience</span>{" "}
                </h2>

                <div className="w-full flex justify-start mt-4">
                  <button
                    className="bg-urban-green text-white py-3 lg:py-4 px-10 rounded 2xl:py-4 2xl:px-10 2xl:text-xl"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-once="true"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ============================================ */}

      {/* =========== app ads ======================== */}
      <AppAd />
      {/* ============================================= */}

      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
