"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../shared/components/footer/footer";
import AppAd from "../shared/components/app-ad/app-ad";

export default function Aboutpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="relative ">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[58vh] bg-heroAbout bg-cover py-10 px-4 ">
        <div className="flex flex-col lg:w-11/12 2xl:w-10/12 m-auto lg:flex-row lg:m-h-[50vh] lg:mt-40 2xl:mt-60"></div>
      </section>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20 2xl:w-10/12">
        <section className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 mb-10">
            <div className="flex items-center gap-4 cursor-pointer">
              <ArrowBackIcon sx={{ color: "#036E03" }} />
              <span className="text-xl font-creato text-urban-black font-bold 2xl:text-3xl">
                About Us
              </span>
            </div>
            <div>
              <div className="mt-4 flex flex-row items-center gap-4 lg:ml-8">
                <div className="flex gap-2 urban-footer-icons">
                  <Image
                    src="/assets/MFooterEmailIcon.svg"
                    width={32}
                    height={28}
                    alt=""
                    className=""
                  />
                  <div className="text-urban-green text-xs xl:text-sm pr-4 font-light">
                    <p>Email</p>
                    <p>hello@urban.ng</p>
                  </div>
                </div>

                <div className="flex gap-2 urban-footer-icons">
                  <Image
                    src="/assets/footerCallIcon.svg"
                    width={32}
                    height={28}
                    alt=""
                    className=""
                  />
                  <div className="text-urban-green text-xs xl:text-sm pr-4 font-light">
                    <p>Call Us</p>
                    <p>+234 901 919 5291</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-xl font-creato font-bold 2xl:text-3xl">
              Quick Links:
            </span>
            <div className="mt-4 text-sm 2xl:text-lg">
              <div className="flex items-center gap-4 flex-wrap mb-2">
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Our Vision
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Fleet Partners
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Park Partners
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Traveler's Club
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Traveler's Kits Store
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Hotels
                </span>
                <span className="block text-urban-black underline font-creato cursor-pointer">
                  Urban Cards
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ---------------- about --------------- */}
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-14 2xl:w-10/12">
        <section className="">
          <h2
            className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We are{" "}
            <span className=" text-urban-green font-extrabold">Urban</span>
          </h2>
          <p
            className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Urban is an equal opportunities platform that promotes and value
            diversity. Team members are welcomed from various backgrounds and
            cultures with a range of skills and experiences, all sharing the
            Urban brand ethos and passion for their work. Together, we create
            magic. We are a travel masterpiece brand executed with jaw-dropping
            skill and attention to detail.
          </p>
          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
            <div className="w-full h-80 lg:3/12 relative overflow-hidden">
              <Image
                src="/assets/brand1.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center "
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="w-full h-80 lg:3/12 relative overflow-hidden">
              <Image
                src="/assets/brand2.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </div>
            <div className="w-full h-80 lg:3/12 relative overflow-hidden">
              <Image
                src="/assets/brand3.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </div>
          </div>
        </section>
      </div>
      {/* ------------------------------------------ */}

      {/* ----------vision ------------------- */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-4 2xl:w-10/12">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-5/12 bg-urban-black p-10 lg:p-20 flex flex-col items-center gap-4 lg:gap-10 lg:min-h-96">
            <div className="flex items-center gap-4 text-white w-full">
              <Image
                src="/assets/pointIcon.svg"
                width={50}
                height={50}
                alt=""
              />
              <h2 className="text-4xl font-creato">Our Vision </h2>
            </div>

            <div className="mt-4 lg:mt-24">
              <h2
                className=" text-2xl lg:text-3xl xl:text-4xl w-10/12 text-white font-creato italic"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1800"
              >
                To be Africa’s{" "}
                <span className=" text-green-400">
                  most traveler- centric brand
                </span>
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-7/12 bg-[#6CC56C] p-10 flex justify-center">
            <Image
              src="/assets/africamap.svg"
              width={500}
              height={580}
              alt=""
            />
          </div>
        </div>
      </section>
      {/* -------------------------------- */}

      {/* ---------------- experience --------------- */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-10 2xl:w-10/12">
        <div className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl">
            The Urban{" "}
            <span className=" text-urban-green font-extrabold">Experience</span>
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            Urban continues to break novel grounds in the travel vertical and
            win new fans every day, but our ethos remains the same: challenge
            convention and provide the ultimate travel experience. To achieve
            our ethos, we have formed sustainable partnerships with the finest
            automotive, technology and lifestyle brands with the primary goal of
            enhancing user experience.
          </p>
          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
            <div className="w-full h-80 2xl:h-[30rem] lg:w-1/2 relative overflow-hidden">
              <Image
                src="/assets/exp1.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
            <div className="w-full h-80 2xl:h-[30rem] lg:w-1/2 relative overflow-hidden">
              <Image
                src="/assets/exp2.png"
                width={300}
                height={140}
                alt=""
                className="w-full  object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------ */}

      {/* ---------------- values --------------- */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-10 2xl:w-10/12">
        <div className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl">
            Urban{" "}
            <span className=" text-urban-green font-extrabold">
              Core Values
            </span>
          </h2>
          <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row  justify-between gap-4 mb-8  lg:mb-20 gap-y-20">
            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex pr-4">
              <div className="w-40">
                <Image
                  src="/assets/1.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4 w-full">
                <h3 className="text-2xl font-creato 2xl:text-4xl">
                  Push Boundaries
                </h3>
                <hr className=" border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12 2xl:text-2xl">
                  Dare to design the future of travel
                </span>
              </div>
            </div>

            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex pr-4">
              <div className="w-40 overflow-hidden">
                <Image
                  src="/assets/2.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1800"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4 w-full">
                <h3 className="text-2xl font-creato 2xl:text-4xl">
                  Build with Empathy
                </h3>
                <hr className="border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12 2xl:text-2xl">
                  Create long-lasting, sustainable impact
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4 mb-4 pr-4">
            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex pr-4">
              <div className="w-40 overflow-hidden">
                <Image
                  src="/assets/3.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4 w-full">
                <h3 className="text-2xl font-creato 2xl:text-4xl">
                  Travel Together
                </h3>
                <hr className=" border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12 2xl:text-2xl">
                  Collaborate with the ambition of changing the world
                </span>
              </div>
            </div>

            <div className="w-full h-52 lg:w-1/2 relative overflow-hidden flex pr-4">
              <div className="w-40 overflow-hidden">
                <Image
                  src="/assets/4.svg"
                  width={100}
                  height={80}
                  alt=""
                  className="w-full  object-cover object-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2800"
                />
              </div>
              <div className="pl-10 flex flex-col justify-center gap-4 w-full">
                <h3 className="text-2xl font-creato 2xl:text-4xl">
                  Seamless Experience
                </h3>
                <hr className="border border-[#6CC56C]" />
                <span className="font-creato font-thin w-11/12 2xl:text-2xl">
                  Enable linkages across boundaries
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------ */}
      <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 lg:mt-10 2xl:w-10/12">
        <div className="w-full">
          <Image
            src="/assets/withUrban.svg"
            width={800}
            height={80}
            alt=""
            className="w-full  object-cover object-center"
          />
        </div>
      </section>

      {/* =========== app ads ======================== */}
      <AppAd />
      {/* ============================================= */}

      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
