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
                Urban Corporate Card
              </h2>
              <h4
                className="cardpage-heroText-content font-creato font-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Experience the all-in-one travel and expense platform. From team
                offsites to deal - closing dinners, give employees the freedom
                to achieve business goals while you control spend
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
                src="/assets/cardhero2.svg"
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
              <span className=" text-urban-green"> Corporate card</span>
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
                    Full control
                  </span>
                </div>
                <p className="mt-4 font-light xl:text-xl 2xl:text-xl">
                  Make sure everyone stay's in budget with custom spend
                  controls.
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
                    Real - time visibility
                  </span>
                </div>
                <p className="mt-4 font-light xl:text-xl 2xl:text-xl">
                  Easily monitor company or business spend as it happens and see
                  where you can save even more.
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
                    Your one - stop shop
                  </span>
                </div>
                <p className="mt-4 font-light xl:text-xl 2xl:text-xl">
                  From booking to bookkeeping - give your company or business
                  one place to manage travel and expense.
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
              <span className=" text-urban-green"> Corporate card</span>
            </h2>
          </div>

          {/* ---swipe */}
          <div className="card-swipe-section mt-14 bg-[#FBFBFB] md:p-4">
            <div className="card-swipe-image">
              <img src="/assets/cardsample.svg" alt="" />
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

        {/* =============== manage card=============== */}
        <section className="m-auto mt-10 lg:mt-10 xl:mt-10 min-h-96 xl:py-10">
          <div className="w-full mt-2 flex flex-col items-center">
            <h2
              className="text-4xl xl:text-[3.7rem] text-center w-10/12 lg:leading-[4rem] xl:w-9/12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Manage your company at scale
              <span className=" text-urban-green">
                {" "}
                while never going over budget
              </span>
            </h2>
          </div>
          <div className="lg:w-11/12 2xl:w-10/12 m-auto min-h-40 p-6 lg:p-10 mt-10 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/managecard.svg"
                alt=""
                className="managecardImg"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <div className="flex flex-col gap-y-10">
                <div>
                  <div className="w-full flex gap-2 xl:gap-4 items-center">
                    <img
                      src="/assets/mngIcon1.png"
                      alt=""
                      className="w-8 h-8 xl:h-7 xl:w-7"
                    />
                    <h2 className=" text-xl xl:text-4xl font-creato">
                      More options, more deals
                    </h2>
                  </div>
                  <p className="font-creato italic font-light mt-4 xl:text-xl">
                    Urban provides your team with special rates among massive
                    travel inventory featuring top suppliers.
                  </p>
                </div>

                <div>
                  <div className="w-full flex gap-2 xl:gap-4 items-center">
                    <img
                      src="/assets/mngIcon2.png"
                      alt=""
                      className="w-8 h-8 xl:h-7 xl:w-7"
                    />
                    <h2 className="text-xl xl:text-4xl font-creato">
                      Spend guardrails
                    </h2>
                  </div>
                  <p className="font-creato italic font-light mt-4 xl:text-xl">
                    Custom policies let your employees' book and spend across
                    our merchants as needed while protecting the company budget.
                  </p>
                </div>

                <div>
                  <div className="w-full flex gap-2 xl:gap-4 items-center">
                    <img
                      src="/assets/mngIcon3.png"
                      alt=""
                      className="w-8 h-8 xl:h-7 xl:w-7"
                    />
                    <h2 className="text-xl xl:text-4xl font-creato">
                      Urban rewards
                    </h2>
                  </div>
                  <p className="font-creato italic font-light mt-4 xl:text-xl">
                    Reward employees when they book travel or spend across our
                    merchants below budget - at no cost to you.
                  </p>
                </div>
                <div className="mt-4 md:mt-6">
                  <button className="py-3 px-5 bg-urban-green text-white rounded-lg text-base font-bold">
                    Visit Our Merchants
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================================ */}

        {/* =============== expense =============== */}
        <section className="m-auto mt-10 lg:mt-10 xl:mt-10 min-h-96 xl:py-10">
          <div className="bg-[#F2FAF2] lg:w-11/12 2xl:w-10/12 m-auto min-h-40 p-6 lg:p-10 mt-10 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/expenses.svg"
                alt=""
                className="managecardImg"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <div className="flex flex-col gap-y-10">
                <div>
                  <div className="w-full flex gap-2 xl:gap-4 items-center">
                    <img
                      src="/assets/expIcon1.png"
                      alt=""
                      className="w-8 h-8 xl:h-7 xl:w-7"
                    />
                    <h2 className=" text-xl xl:text-4xl font-creato">
                      Control employee spend
                    </h2>
                  </div>
                  <p className="font-creato italic font-light mt-4 xl:text-xl">
                    Customizable, conditional spend controls are enforced at the
                    point of card funding, with out-of-policy spend flagged to
                    eliminate wasteful spending and fraud.
                  </p>
                </div>

                <div>
                  <div className="w-full flex gap-2 xl:gap-4 items-center">
                    <img
                      src="/assets/mngIcon2.png"
                      alt=""
                      className="w-8 h-8 xl:h-7 xl:w-7"
                    />
                    <h2 className="text-xl xl:text-4xl font-creato">
                      Automated expense
                    </h2>
                  </div>
                  <p className="font-creato italic font-light mt-4 xl:text-xl">
                    With the swipe of the card, transaction details are
                    categorized and reconciled, eliminating the need for expense
                    reports.
                  </p>
                </div>

                <div>
                  <div className="w-full flex gap-2 xl:gap-4 items-center">
                    <img
                      src="/assets/expIcon2.png"
                      alt=""
                      className="w-8 h-8 xl:h-7 xl:w-7"
                    />
                    <h2 className="text-xl xl:text-4xl font-creato">
                      Rapid reimbursements:
                    </h2>
                  </div>
                  <p className="font-creato italic font-light mt-4 xl:text-xl">
                    Reimburse employees for out-of-pocket spend in real-time,
                    not in days, not in weeks across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================================ */}

        {/* ========================= */}
        {/* <section className="w-full py-10 lg:py-0 lg:w-11/12 2xl:w-10/12 m-auto xl:mt-40 xl:mb-40 lg:xl:my-0 lg:pb-20 relative card-slider-section">
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
        </section> */}
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
