"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Footer from "../shared/components/footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import "./hotels.scss";
import AppAd from "../shared/components/app-ad/app-ad";
import HotelCard from "../shared/components/hotel-card/hotel-card";
import HotelDialog from "../shared/components/hotel-dialog/hotel-dialog";

export default function HotelsPage() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedObj, setselectedObj] = useState({});
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="relative">
        <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[60vh] lg:min-h-[85vh] bg-hotelhero bg-cover py-10 px-4">
          <div className="flex flex-col justify-center items-center hotel-hero">
            <div className="mt-40 lg:mt-40 w-full lg:w-6/12 xl:w-7/12 m-auto text-center flex flex-col gap-4 lg:gap-10 items-center 2xl:w-8/12 2xl:mt-60">
              <h2
                className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl leading-8 xl:leading-[4rem]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Take Advantage of Discounted Room Offers at Our Partner Hotels
              </h2>
              <div className="w-10/12 lg:w-8/12 m-auto 2xl:w-7/12">
                <form
                  className="w-full rounded-xl bg-white flex items-center gap-1 px-4 2xl:py-2"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  <SearchIcon
                    sx={{ color: "#a7a7ab" }}
                    className="2xl:text-3xl"
                  />
                  <input
                    placeholder="Abuja"
                    type="search"
                    className="w-full py-2 outline-none px-1 text-gray-500 2xl:text-xl font-light tracking-[0.1rem]"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20 2xl:w-10/12">
          <section className="">
            <h2
              className="text-4xl lg:text-4xl font-creato font-light 2xl:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Recommended Hotels in your Destination
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-y-14 lg:gap-y-6 lg:grid-cols-3  justify-between gap-1 lg:gap-6 xl:gap-8 2xl:gap-6">
              {/* -------------- */}
              <HotelCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              {/* ----------------- */}

              <HotelCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <HotelCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <HotelCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <HotelCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <HotelCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />
            </div>

            <div className="w-full flex justify-center mt-10 py-10">
              <div className="flex items-center gap-10">
                <span className="font-creato font-bold">Page 1 of 30</span>
                <div>
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div
                      className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#D9D9D9] rounded-full flex justify-center items-center cursor-pointer"
                      onClick={() => {}}
                    >
                      <HiOutlineChevronLeft size={28} />
                    </div>
                    <div
                      className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#D9D9D9] rounded-full flex justify-center items-center cursor-pointer"
                      onClick={() => {}}
                    >
                      <HiOutlineChevronRight size={28} />
                    </div>
                  </div>
                </div>
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
      {isModalOpen && (
        <HotelDialog isOpen={isModalOpen} setisopen={setisModalOpen} />
      )}
    </>
  );
}
