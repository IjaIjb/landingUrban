"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Footer from "../shared/components/footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import "./city.scss";
import AppAd from "../shared/components/app-ad/app-ad";

export default function CityPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="relative">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] lg:min-h-[80vh] bg-cityhero bg-cover py-10 px-4 bg-top">
        <div className="flex flex-col justify-center items-center city-hero">
          <div className="mt-40 lg:mt-40 w-full lg:w-6/12 xl:w-7/12 m-auto text-center flex flex-col gap-4 lg:gap-10 items-center 2xl:w-8/12 2xl:mt-60">
            <h2
              className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl leading-8 xl:leading-[4rem] mt-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Urban Core Locations
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
          <div className="mt-10 grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-3  justify-between gap-1 lg:gap-2 xl:gap-8 2xl:gap-6">
            {/* -------------- */}
            <div className="w-full  h-[40rem] lg:min-h-[34rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/abuja.svg"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-80  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    ABUJA
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light  mb-2 text-urban-green">
                  Center of Unity
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  The Federal Capital Territory (FCT) of Nigeria, home to the
                  nation's capital Abuja, is a vibrant blend of modernity and
                  tradition. Nestled in the heart of Nigeria, FCT boasts
                  stunning landscapes, iconic architecture like Aso Rock and the
                  National Mosque, and serves as the political, economic, and
                  cultural hub of the country. Known for its bustling markets,
                  green spaces, and rich diversity, FCT is the pulse of
                  Nigeria's growth and ambition.
                </p>
              </div>
            </div>

            {/* ----------------- */}

            <div className="w-full   h-[40rem] lg:min-h-[34rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/jos.svg"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-80  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    JOS
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light  mb-2 text-urban-green">
                  Home of Peace and Tourism
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Jos, the cool and scenic capital of Plateau State, Nigeria, is
                  known for its pleasant climate, stunning rock formations, and
                  rich cultural diversity. Nestled on the Jos Plateau, this
                  charming city is a gateway to breathtaking natural attractions
                  like waterfalls, wildlife parks, and rolling hills. Often
                  called the "Home of Peace and Tourism," Jos offers a blend of
                  adventure, history, and tranquility, making it a hidden gem in
                  Nigeria's heart.
                </p>
              </div>
            </div>

            <div className="w-full   h-[40rem] lg:min-h-[34rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  // src="/assets/makurdi.svg"
                  src="/makurdi.svg"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-80  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    MAKURDI
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light  mb-2 text-urban-green">
                  Nigeria's Food Basket
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Makurdi, the lively capital of Benue State, Nigeria, sits
                  along the scenic banks of the Benue River. Known as the "Food
                  Basket of the Nation," Makurdi is rich in agriculture,
                  culture, and tradition. With its warm hospitality, vibrant
                  markets, and strong ties to nature, this city offers a
                  refreshing glimpse into Nigeria's agricultural heartland and
                  cultural diversity.
                </p>
              </div>
            </div>

            <div className="w-full  h-[40rem] lg:min-h-[34rem]  lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/minna.svg"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-80  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    MINNA
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <h3 className="city-card-sub font-light  mb-2 text-urban-green">
                  The Power State
                </h3>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Minna, the capital of Niger State, Nigeria, is a charming city
                  known for its rich history, serene landscapes, and vibrant
                  culture. Nestled between rolling hills, Minna offers a
                  peaceful retreat while serving as a hub for agriculture and
                  education. With its warm hospitality, famous clay pottery, and
                  historical significance as the birthplace of two former
                  Nigerian leaders, Minna is a hidden gem that blends tradition
                  with quiet progress.
                </p>
              </div>
            </div>

            <div className="w-full   h-[40rem] lg:min-h-[34rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/lagos.svg"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-80  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    LAGOS
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <div className="flex items-center justify-between">
                  <h3 className="city-card-sub font-light  mb-2 text-urban-green">
                    Centre of Excellence
                  </h3>
                  <h3 className="city-card-sub font-thin mb-2 text-urban-green italic">
                    Coming Soon
                  </h3>
                </div>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Lagos, Nigeria’s largest city, is a dynamic hub of energy,
                  creativity, and culture. Known for its bustling streets,
                  vibrant nightlife, and stunning coastal views, Lagos is the
                  economic powerhouse of West Africa. From the lively markets of
                  Balogun to the trendy art scenes in Lekki, this megacity
                  blends tradition with innovation, making it the heartbeat of
                  Nigeria’s hustle and spirit
                </p>
              </div>
            </div>

            <div className="w-full   h-[40rem] lg:min-h-[34rem] lg:3/12 flex flex-col relative overflow-hidden city-card">
              <div className="relative">
                <Image
                  src="/assets/kano.svg"
                  width={400}
                  height={240}
                  alt=""
                  className="w-full h-80  object-cover object-center rounded-[0.8rem]"
                />
                <div className="w-full absolute top-4 left-4">
                  <button className="bg-white py-2 px-4 rounded cursor-default">
                    KANO
                  </button>
                </div>
              </div>
              <div className="h-48 bg-white rounded-br-[2rem] rounded-bl-[2rem] flex flex-col p-3">
                <div className="flex items-center justify-between">
                  <h3 className="city-card-sub font-light text-urban-green">
                    Centre of Commerce
                  </h3>
                  <h3 className="city-card-sub font-thin mb-2 text-urban-green italic">
                    Coming Soon
                  </h3>
                </div>
                <p className="text-left _city-card-bodyText text-urban-black">
                  Kano, Nigeria's ancient city and commercial powerhouse, is a
                  vibrant blend of history and innovation. Famous for its
                  bustling markets like Kurmi, rich cultural heritage, and
                  iconic sites such as the Emir's Palace and Dala Hill, Kano is
                  a hub of trade, craftsmanship, and tradition. As one of
                  Nigeria’s oldest cities, Kano thrives with energy, offering a
                  unique experience of Northern Nigerian culture and spirit.
                </p>
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
  );
}
