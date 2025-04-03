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
import "swiper/css";
import "swiper/css/pagination";
import "./urban-card.scss";
import AppAd from "../shared/components/app-ad/app-ad";
import TravelersDialog from "../shared/components/travelers-dialog/travelers-dialog";
import CardSteppercard from "../shared/components/card-steppercard/card-steppercard";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import React from "react";
import Accordion from "../shared/components/accordion/accordion";
import { faqsData } from "../shared/utils/data";
import RequestCardDemoDialog from "../shared/components/request-demo-card/request-demo-card";

export default function UrbanCardPage() {
  const [ismovileNavOpen, setismovileNavOpen] = useState(false);
  const [scrollToLeft, setscrollToLeft] = useState(false);
  const [scrollToRight, setscrollToRight] = useState(false);
  const [openModal, setopenModal] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + ' bg-urban-green">' + "</span>";
    },
  };

  const steps = [
    {
      step: 1,
      title: "Sign Up",
      content: "Sign up on Urban for your customized Urban personal card.",
    },
    {
      step: 2,
      title: "Request Card",
      content: "Request for your personalized Urban physical card.",
    },

    {
      step: 3,
      title: "Download the Urban App",
      content:
        "Download the Urban app on Google Playstore or Apple IOS Store for your seamless card transaction management.",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className="relative ">
        <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh]  bg-newcardHeroBg bg-cover py-10 px-4 flex flex-col items-center">
          <div className="urbancardpage-hero-container relative">
            <div className="_cardPage_hero_leftSide flex flex-col gap-y-5">
              <Image
                src="/assets/cardpage-desc.svg"
                width={20}
                height={20}
                alt=""
                className="cardpage-desc-img"
              />
              <h2 className="font-creato cardpage-heroText italic">
                Urban Personal Card
              </h2>
              <h4
                className="cardpage-heroText-content font-creato font-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Everyone's travel and smart-expense destination. From unrivaled
                discounts across our massive merchants and travel inventory
                featuring top suppliers, to rewards for personal trips and to
                joining our super-amazing traveler's club
              </h4>
              <div className="flex items-center gap-x-4 mt-2 2xl:mt-4">
                <div className="py-4 lg:py-3 2xl:py-5 px-8 2xl:px-12 bg-white rounded-lg font-creato font-semibold border-2 border-white cardhereBtn cursor-pointer">
                  Get Started
                </div>
                <div
                  className="border-2 border-white py-4 lg:py-3 2xl:py-5 px-5 2xl:px-12 text-white rounded-lg font-creato font-semibold cardhereBtn cursor-pointer"
                  onClick={() => setopenModal(true)}
                >
                  Request A Demo
                </div>
              </div>
            </div>

            <div className="_cardPage_hero_rigthSide">
              <Image
                src="/assets/cardhero22.svg"
                width={840}
                height={400}
                alt=""
                className="floating"
                data-aos="flip-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </section>

        <section className="m-auto mt-10 lg:mt-10 xl:mt-10 min-h-96 xl:py-10">
          <div className="w-full mt-2 flex flex-col items-center">
            <h2
              className="text-4xl xl:text-[3.7rem] text-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Benefits of Urban
              <span className=" text-urban-green"> Personal card</span>
            </h2>
          </div>
          <div className="bg-[#ebeaea42] min-h-40 lg:p-10 mt-10">
            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/benefit1.png"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Seamless travel experience
                  </span>
                </div>
                <p className="mt-4 font-light xl:text-xl 2xl:text-xl">
                  Drive down travel costs without sacrificing your travel
                  experience. Visit our extensive merchant inventory across the
                  country.
                </p>
              </div>

              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/benefit2.png"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    24/7 Support
                  </span>
                </div>
                <p className="mt-4 font-light xl:text-xl 2xl:text-xl">
                  Access a massive network of our travel experience centers or
                  self-serve with our Urban Mobile app, Webapp or AI Agent.
                </p>
              </div>
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/benefit3.png"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen 2xl:text-2xl">
                    Spend is a breeze
                  </span>
                </div>
                <p className="mt-4 font-light xl:text-xl 2xl:text-xl">
                  Access our extensive ecosystem of merchants across the country
                  and enjoy unrivaled discounts across your spend.
                </p>
              </div>
            </div>

            <div className="mt-14 mb-5 flex items-center justify-center w-full lg:w-5/12 m-auto gap-4 2xl:mt-10">
              <button className="w-60 xl:w-44 2xL:w-60 rounded-md py-4 px-4 border-none bg-urban-green text-white lg:text-sm xl:text-base 2xl:text-xl">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* ------------------------------------- */}

        <section className="m-auto mt-20 lg:mt-10 xl:mt-10 min-h-96 xl:py-10">
          <div className="w-full mt-2 flex flex-col items-center">
            <h2
              className="text-4xl xl:text-[3.7rem] text-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              How to apply for Urban
              <span className=" text-urban-green"> Personal card</span>
            </h2>
          </div>

          {/* ---swipe */}
          <div className="card-swipe-section mt-14 bg-[#FBFBFB] md:p-4">
            <div className="card-swipe-image">
              <img src="/assets/cardsample2.png" alt="" />
            </div>
            <div className="card-swipe-container">
              <div
                className={`stepscards-container ${
                  scrollToLeft && "change-postion-left"
                } ${scrollToRight && "change-postion-right"}`}
              >
                {steps.map((obj, index: number) => (
                  <React.Fragment key={index}>
                    <CardSteppercard {...obj} key={index} />
                    {obj.step !== 3 && (
                      <span className="h-[0.10rem] w-20 bg-slate-400 mt-10 hidden md:block"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="w-full bottom-1 md:bottom-0 absolute flex justify-center md:justify-between items-center px-5">
                <button className="py-3 xlpy-4 xl:px-10 2xl:py-4 2xl:px-10 2xl:text-2xl px-6 bg-urban-green text-white rounded-lg">
                  Get Card
                </button>
                <div className="hidden md:block">
                  <div className="flex items-center gap-4 lg:gap-2">
                    <div
                      className="w-14 h-14 md:w-8 md:h-8 lg:w-14 lg:h-14 bg-[#D9D9D9] rounded-full flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        setscrollToLeft(true);
                        setscrollToRight(false);
                      }}
                    >
                      <HiOutlineChevronLeft size={36} />
                    </div>
                    <div
                      className="w-14 h-14 md:w-8 md:h-8 lg:w-14 lg:h-14 bg-[#D9D9D9] rounded-full flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        setscrollToRight(true);
                        setscrollToLeft(false);
                      }}
                    >
                      <HiOutlineChevronRight size={36} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------------------- */}

        {/* ========================= */}
        <section className="w-full py-10 lg:py-0 lg:w-11/12 2xl:w-10/12 m-auto xl:mt-40 xl:mb-40 lg:xl:my-0 lg:pb-20 relative card-slider-section">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full p-20 lg:p-0 lg:w-1/2 ">
              <Image
                src="/assets/card-store.svg"
                width={120}
                height={40}
                alt=""
                className="w-full lg:w-8/12"
              />
            </div>
            <div className="w-full -mt-10 md:-mt-0 p-10 lg:p-0  lg:w-1/2 flex items-center justify-center">
              <h2 className="text-2xl leading-8 md:text-4xl xl:text-4xl 2xl:text-5xl font-creato md:leading-10 font-thin italic">
                <p className="font-bold not-italic text-urban-green">
                  Live Your Best Life!
                </p>
                <p className="text-xl leading-8 md:text-2xl xl:text-2xl 2xl:text-2xl mt-4 md:mt-8 w-11/12 lg:w-11/12">
                  Step out into the world confidently. Get the ultimate
                  companion card that help you make the most of your spend and
                  travel experiences and adventures.
                </p>
                <div className="mt-4 md:mt-8">
                  <button className="py-3 px-5 bg-urban-green text-white rounded-lg text-base font-bold">
                    Visit Our Merchants
                  </button>
                </div>
              </h2>
            </div>
          </div>
        </section>
        {/* =========================== */}

        {/* ==== faq ============= */}
        <section className="m-auto mt-10 lg:mt-10 xl:mt-10 min-h-[82vh] xl:py-10 bg-faqBg  bg-cover flex items-center justify-center">
          <div className="min-h-40 lg:p-10 mt-10 w-10/12 md:w-8/12 m-auto">
            <h1 className="text-4xl text-center text-white font-creato font-bold">
              Frequently Asked questions
            </h1>
            <div className="mt-10 flex flex-col gap-4">
              {faqsData.map((obj, index: number) => (
                <Accordion {...obj} key={index} />
              ))}
            </div>
          </div>
        </section>
        {/* ======================== */}

        {/* ---------- footer ------------------- */}
        <Footer />
        {/* -------------------------------------- */}
      </main>
      {openModal && (
        <RequestCardDemoDialog isOpen={openModal} setisopen={setopenModal} />
      )}
    </>
  );
}
