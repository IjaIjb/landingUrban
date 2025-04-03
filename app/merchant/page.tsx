"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "./merchant.scss";
import FavIcon from "../shared/components/icons/fav-icon";
import UserIcon from "../shared/components/icons/user-icon";
import SearchIcon from "../shared/components/icons/search-icon";
import { CiSearch } from "react-icons/ci";
import { merchantCategory, nigeriaStates } from "../shared/utils/data";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { KeyboardArrowDown } from "@mui/icons-material";
import HotelCard from "../shared/components/hotel-card/hotel-card";
import Footer from "../shared/components/footer/footer";
import AppAd from "../shared/components/app-ad/app-ad";
import ProductCard from "../shared/components/product-card/product-card";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Search() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");

  const [searchVal, setsearchVal] = useState(searchValue ?? "");

  return (
    <div className="flex items-center bg-white px-2 gap-x-1 lg:w-5/12 rounded-full border border-gray-400">
      <CiSearch size={24} />
      <input
        value={searchVal}
        className="w-full outline-none h-12 rounded-full placeholder:text-urban-black font-creato font-light"
        placeholder="What are you looking for?"
        onChange={(event: any) => setsearchVal(event.target.value)}
      />
    </div>
  );
}

export default function MerchantPage() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const initialData = {
    category: "Most Popular",
    city: "abia",
    destinationState: "lagos",
    numberOfPassagers: 1,
  };
  const [userData, setuserData] = useState(initialData);

  const handleChange = (value: any, field: string) => {
    setuserData((prev: any) => {
      return { ...prev, [field]: value };
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="relative ">
        <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh] bg-merchantBg bg-cover py-10 px-4 flex flex-col items-center">
          <div className="urbancardpage-hero-container relative">
            <div className="_cardPage_hero_leftSide flex flex-col gap-y-5">
              <h2 className="font-creato cardpage-heroText">
                Making life easier for people on the move
              </h2>
              <h4 className="cardpage-heroText-content font-creato font-light">
                Experience great convenience and flexibility when you explore
                the county. Spend easily across our merchant ecosystem.
              </h4>
              <div className="flex items-center gap-x-4 mt-2 2xl:mt-4">
                <div className="py-4 lg:py-3 2xl:py-5 px-8 2xl:px-12 bg-white rounded-lg font-creato font-semibold border-2 border-white cardhereBtn cursor-pointer">
                  Get Started
                </div>
              </div>
            </div>

            <div className="_merchantPage_hero_rigthSide">
              <Image
                src="/assets/nigeria.png"
                width={840}
                height={400}
                alt=""
                className=""
              />
            </div>
          </div>
        </section>
        <section className="mt-10 min-h-80 px-4 lg:px-6">
          <div className="bg-slate-50 w-full xl:w-11/12 m-auto  min-h-20 flex justify-between xl:items-center">
            <div className="w-10/12 flex flex-col gap-y-2 lg:flex-row xl:items-center gap-x-4">
              <Search />
              <div className="lg:w-3/12 px-4 border border-urban-green bg-white flex items-center rounded-full justify-between">
                <span className="font-creato font-light">Category:</span>

                <Select
                  defaultValue="abia"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    height: "46px",
                    border: "none",
                    width: "60%",
                    fontSize: "0.88rem",
                    fontWeight: "600",
                    color: "#036e04",
                  }}
                  value={userData.category}
                  onChange={(
                    event: React.SyntheticEvent | null,
                    newValue: string | null
                  ) => handleChange(newValue, "category")}
                  slotProps={{
                    listbox: {
                      sx: {
                        maxHeight: "200px",
                      },
                    },
                  }}
                >
                  {merchantCategory.map((cat, index: number) => (
                    <Option
                      value={cat.value}
                      sx={{ fontSize: "0.8rem" }}
                      key={index}
                    >
                      {cat.title}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="lg:w-3/12 px-4 border border-urban-green bg-white flex items-center rounded-full justify-between">
                <span className="font-creato font-light">City:</span>

                <Select
                  defaultValue="abia"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    height: "46px",
                    border: "none",
                    width: "58%",
                    fontSize: "0.88rem",
                    fontWeight: "600",
                    color: "#036e04",
                  }}
                  value={userData.city}
                  onChange={(
                    event: React.SyntheticEvent | null,
                    newValue: string | null
                  ) => handleChange(newValue, "city")}
                  slotProps={{
                    listbox: {
                      sx: {
                        maxHeight: "200px",
                      },
                    },
                  }}
                >
                  {nigeriaStates.map((state, index: number) => (
                    <Option
                      value={state.value}
                      sx={{ fontSize: "0.8rem" }}
                      key={index}
                    >
                      {state.title}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                {" "}
                <FavIcon />
                <UserIcon />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-full xl:w-11/12 m-auto  min-h-20">
            <div className="mt-10 grid grid-cols-1 gap-y-14 lg:gap-y-6 lg:grid-cols-3  justify-between gap-1 lg:gap-6 xl:gap-8 2xl:gap-6">
              {/* -------------- */}
              <ProductCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              {/* ----------------- */}

              <ProductCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <ProductCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <ProductCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <ProductCard
                onbookClick={() => {
                  setisModalOpen(true);
                }}
              />

              <ProductCard
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
          </div>
        </section>

        <AppAd />
        <Footer />
      </main>
    </Suspense>
  );
}
