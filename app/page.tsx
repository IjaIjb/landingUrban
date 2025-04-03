"use client";

import Image from "next/image";
import Navbar from "./shared/components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import BookTripForm from "./shared/components/book-trip-form/book-trip-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "./shared/components/footer/footer";
import AppAd from "./shared/components/app-ad/app-ad";
import Link from "next/link";

export default function Home() {
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

  useEffect(() => {
    const coords = { x: 80, y: 20 };
    const circles = document.querySelectorAll(".circle");

    const colors = ["#3e7c4c", "#2e5d39"];

    circles.forEach(function (circle: any, index) {
      circle.x = 8;
      circle.y = 8;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle: any, index) {
        circle.style.left = x - 40 + "px";
        circle.style.top = y - 2 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle: any = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <>
      <main className="relative ">
        <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[100vh] bg-herobg1 bg-cover py-10 px-4 xl:pb-20 2xl:pb-0">
          <div className="flex flex-col lg:w-11/12 2xl:w-10/12 m-auto lg:flex-row lg:m-h-[50vh] lg:mt-40 xl:mt-[12rem] mt-44 2xl:mt-60 2xl:justify-between">
            <div className="min-h-40 mb-20 lg:mb-0 mt-14 flex flex-col justify-center items-center lg:items-start lg:justify-start lg:mt-0 w-full lg:w-6/12 2x:w-8/12">
              <h2
                className="py-1 text-4xl lg:text-5xl xl:text-[4.2rem] 2xl:text-[5.2rem] text-white font-creato font-extralight uppercase mb-1"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                Reimagine your
              </h2>
              <h2
                className="py-1 text-4xl lg:text-5xl xl:text-[4.2rem] 2xl:text-[5.2rem] text-white font-creato font-extrabold mb-1"
                data-aos="fade-up"
                data-aos-duration="2400"
              >
                Travel Experience
              </h2>
              <h2
                className="py-1 text-4xl lg:text-5xl xl:text-[4.2rem] 2xl:text-[5.2rem] text-white font-creato font-extrabold mb-1"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <span className="font-light">with</span> Urban
              </h2>
              <div className="flex items-center gap-1 mt-2 2xl:mt-6">
                <Image
                  src="/assets/ulogo.svg"
                  width={25}
                  height={25}
                  alt=""
                  className="2xl:w-8"
                />
                <span className="px-1 italic font-creato font-light text-white lg:text-xl block 2xl:text-3xl">
                  Africa's most traveler-centric brand
                </span>
              </div>
              <div className="flex items-center gap-4 lg:gap-4 mt-6 2xl:mt-10">
                <Image
                  src="/assets/appstoreIcon.svg"
                  width={140}
                  height={40}
                  alt=""
                  className="lg:w-36 xl:w-44 2xl:w-52"
                />
                <Image
                  src="/assets/playstoreIcon.svg"
                  width={140}
                  height={40}
                  alt=""
                  className="lg:w-36 xl:w-44 2xl:w-52"
                />
              </div>
            </div>

            <div className="w-full max-h-80 lg:max-h-none lg:w-6/12 2xl:w-4/12 lg:flex lg:justify-end">
              <div
                className="bg-white w-full lg:w-10/12 xl:w-9/12 2xl:w-full rounded-2xl px-2 py-4 md:px-4 shadow-md"
                data-aos="zoom-in-left"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <div className="text-xl text-urban-green mt-4 text-center 2xl:text-xl 2xl:mt-5 2xl:mb-14">
                  BOOK A TRIP
                </div>
                <div className="w-full mt-4 pb-4">
                  <BookTripForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12">
          <section className="m-auto mt-72 lg:mt-20 xl:mt-14 min-h-96 xl:py-20">
            <div className="w-full flex justify-center">
              <Image
                src="/assets/section-logo.svg"
                width={140}
                height={40}
                alt=""
                className="w-52 xl:w-60"
              />
            </div>
            <div className="w-full mt-10 flex flex-col items-center gap-2">
              <h2
                className="text-4xl xl:text-[3.7rem] text-center"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <span className=" text-urban-green">With Urban</span>, you're
                always one click away
              </h2>

              <p
                className="xl:text-4xl font-thin italic text-center mt-2"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                from experiencing prompt, convenient and better travel with
                efficient ETAs
              </p>
            </div>
            <div className="bg-[#ebeaea81] min-h-40 lg:p-10 mt-20">
              <p className="text-center text-xl mt-10 xl:mt-4 2xl:text-3xl">
                Book your trip in 3 easy step
              </p>
              <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                  data-aos="fade-up"
                  data-aos-duration="600"
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
                    Download the Urban mobile app on either the Apple Store or
                    the Google Play Store
                  </p>
                </div>

                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                  data-aos="fade-up"
                  data-aos-duration="1800"
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
                    Sign up on the Urban mobile app you just downloaded using
                    your phone number and email
                  </p>
                </div>
                <div
                  className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                  data-aos="fade-up"
                  data-aos-duration="2500"
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

              <div className="mt-10 mb-5 flex items-center w-full lg:w-5/12 m-auto gap-4 2xl:mt-10">
                <button className="w-1/2 rounded-md py-3 px-4 border-none bg-urban-green text-white lg:text-sm xl:text-base 2xl:text-xl">
                  Book Now
                </button>

                <button className="w-1/2 rounded-md py-3 px-2 border border-urban-green text-urban-black lg:text-sm xl:text-base 2xl:text-xl">
                  Check My Booking(s)
                </button>
              </div>
            </div>
          </section>

          <section className="mt-20  lg:mt-10 min-h-60 bg-white">
            <div>
              <div className="py-2 lg:py-3 bg-urban-lightGreen rounded px-2 lg:px-4 w-80 lg:w-80 gap-2 flex items-center lg:gap-4">
                <Image
                  src="/assets/congrats-icon.svg"
                  width={40}
                  height={40}
                  alt=""
                />
                <span className="text-lg lg:text-xl font-creato 2xl:text-xl">
                  Our Next events & Tours
                </span>
              </div>

              <div className="mt-10">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={pagination}
                  navigation={false}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper min-h-96"
                >
                  <SwiperSlide className="min-h-80 w-80">
                    <div className="w-full flex flex-col lg:flex-row items-center">
                      <div className="w-full lg:w-5/12">
                        <img
                          src="/assets/tour.png"
                          width={50}
                          height={40}
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-full lg:w-1/2 p-4 lg:p-10">
                        <h2 className="text-2xl lg:text-4xl text-left xl:text-5xl xl:leading-[4rem] home-slider-text">
                          <span className="font-thin">Onboarding</span>{" "}
                          <span className="italic text-urban-green">
                            New Traveler’s Club Members
                          </span>
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="min-h-80 w-80">
                    <div className="w-full flex flex-col lg:flex-row items-center">
                      <div className="w-full lg:w-5/12">
                        <img
                          src="/assets/tour.png"
                          width={50}
                          height={40}
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-full lg:w-1/2 p-4 lg:p-10">
                        <h2 className="text-2xl lg:text-4xl text-left xl:text-5xl xl:leading-[4rem] home-slider-text">
                          <span className="font-thin">Onboarding</span>{" "}
                          <span className="italic text-urban-green">
                            New Traveler’s Club Members
                          </span>
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
        </div>

        <div className="full bg-[#6cc56c1e] pt-14">
          <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12">
            <section className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-10 lg:mb-0 ">
                <div className="bg-white homepage-tansit-img rounded-full p-10 relative lg:w-40 xl:w-[28rem] 2xl:w-[30rem] flex justify-center items-center boxShadow-main">
                  <Image
                    src="/assets/transit.svg"
                    width={540}
                    height={540}
                    alt=""
                    className="lg:w-40 xl:w-[28rem] 2xl:w-[40rem] boxShadow-main bg-white rounded-full"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:-ml-20 mt-6">
                <div className="flex flex-col xl:gap-8 justify-center">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      src="/assets/growth-logo.svg"
                      width={250}
                      height={60}
                      alt=""
                      className="2xl:w-64"
                    />
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <p className="text-xl text-center lg:text-left xl:text-4xl font-creato italic font-thin 2xl:text-5xl 2xl:leading-[3.4rem] leading-relaxed">
                      <span className="underline text-urban-green">
                        Join our community
                      </span>{" "}
                      of <strong>Fleet</strong> and{" "}
                      <strong>Park Partners</strong>. Become Urban's partner and
                      unlock guaranteed revenue.{" "}
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="mt-8 flex justify-start w-full lg:w-8/12 gap-4 2xl:w-9/12">
                      <button
                      onClick={() => {
                        window.location.href = "https://park.urban.ng/register"; 
                      }}
                       className="w-1/2 rounded-md py-3 px-4 border-none bg-urban-green text-white lg:text-sm xl:text-base 2xlpy-4 2xl:px-14 2xl:text-xl">
                        Own A Park
                      </button>

                      <button
                      onClick={() => {
                        window.location.href = "https://fleet.urban.ng/register"; 
                      }} className="w-1/2 rounded-md py-3 px-2 bg-white text-urban-black lg:text-sm xl:text-base 2xl:py-4 2xl:px-14 2xl:text-xl">
                        Join our Fleet 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* -----urban location cities ---------------- */}
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 2xl:w-10/12">
          <section className="w-full bg-whige mt-20 flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/12">
              <div>
                <Image
                  src="/assets/location-logo.svg"
                  width={220}
                  height={60}
                  alt=""
                  className="2xl:w-60"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                />
              </div>
              <h2 className="text-4xl my-4 lg:my-0 mb-6 lg:mb-0 lg:text-4xl 2xl:text-5xl font-creato xl:mt-10 lg:flex flex-col lg:gap-2 floating-text">
                <span className="lg:block">
                  <span className="text-urban-green">Urban </span>is
                </span>{" "}
                <span className="lg:block">available in 4+</span>{" "}
                <span className="lg:block">Cities across</span>
                Nigeria
              </h2>
            </div>
            <div className="w-full lg:w-10/12 xl:ml-10">
              <div className="flex justify-between gap-4 w-full mb-4">
                <div className="w-1/2 h-40 lg:h-60 2xl:h-80 relative overflow-hidden flex justify-center items-center">
                  <Image
                    src="/assets/abuja.svg"
                    width={220}
                    height={60}
                    alt=""
                    className="h-40 2xl:h-80 lg:w-full lg:h-80 object-cover object-center"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                  />
                  <div className="absolute py-2 px-4 bg-white rounded z-10 top-2 left-4">
                    Abuja
                  </div>
                </div>

                <div className="w-1/2 h-40 lg:h-60 2xl:h-80 relative overflow-hidden flex justify-center items-center">
                  <Image
                    // src="/assets/makurdi.svg"
                    src="/makurdi.svg"
                    width={220}
                    height={60}
                    alt=""
                    className="h-40 2xl:h-80 lg:w-full lg:h-80 object-cover object-center"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  />
                  <div className="absolute py-2 px-4 bg-white rounded z-10 top-2 left-4">
                    Makurdi
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-4 w-full mb-10 ">
                <div className="w-1/2 h-40 lg:h-60 2xl:h-80 relative overflow-hidden flex justify-center items-center">
                  <Image
                    src="/assets/jos.svg"
                    width={220}
                    height={60}
                    alt=""
                    className="h-40 2xl:h-80 lg:w-full lg:h-80 object-cover object-center"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                  />
                  <div className="absolute py-2 px-4 bg-white rounded z-10 top-2 left-4">
                    Jos
                  </div>
                </div>
                <div className="w-1/2 h-40 lg:h-60 2xl:h-80 relative overflow-hidden flex justify-center items-center">
                  <Image
                    src="/assets/citymore.svg"
                    width={220}
                    height={60}
                    alt=""
                    className="h-40 2xl:h-80 lg:w-full lg:h-80 object-cover object-center"
                  />
                  <Link
                    href="/cities"
                    className="absolute py-2 px-4 bg-white rounded z-10 top-30 cursor-pointer"
                  >
                    <div>View more</div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* -------------------------------------------- */}

        {/* =========== app ads ======================== */}
        <AppAd />
        {/* ============================================= */}

        {/* ---------- footer ------------------- */}
        <Footer />
        {/* -------------------------------------- */}
      </main>
    </>
  );
}
