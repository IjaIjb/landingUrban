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
import "./travelers-kit.scss";
import { useRouter } from "next/navigation";

export default function TravelersKitPage() {
  const [ismovileNavOpen, setismovileNavOpen] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + ' bg-urban-green">' + "</span>";
    },
  };

  const router = useRouter();
  const setSearchValue = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("search", "travellers kit"); // Set or update the `searchValue`
    router.push(`/merchant?${params.toString()}`); // Update the URL
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="relative ">
      <section className="w-full angecyHero -mt-[7.8rem] 2xl:-mt-40 min-h-[82vh]  bg-agencyHero bg-cover py-10 px-4 flex flex-col items-center">
        <div className="kit-hero-container relative">
          <div className="_leftSide">
            <h2
              className="travlerskit-heroText  font-creato font-bold italic"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Urban Traveler's Kit Store
            </h2>
            <h2
              className="travlerskit-heroText font-creato font-light"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Brilliant travel accessories for every traveler
            </h2>
          </div>

          <div className="_kitrigthSide">
            <Image
              src="/assets/kithero.svg"
              width={840}
              height={400}
              alt=""
              className="floating"
            />
          </div>
        </div>
      </section>

      <div className="2xl:w-11/12 m-auto mt-40 2xl:mt-52">
        {/* ---------------- about --------------- */}
        <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-2 mt-20">
          <section className="">
            <h2
              className="italic text-4xl lg:text-4xl font-creato font-bold text-urban-green 2xl:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Accessorize your Travel:{" "}
              <span className=" text-urban-green font-thin">
                Bring your trip to life
              </span>
            </h2>
            <p
              className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              We carry 50+ of the top kits, luggage, handbags and accessories
              brands including Tumi, Rimowa, Samsonite, Travelpro, and more.
              With a wide variety of brands, thousands of products and
              traveler-generated ratings and reviews, we are committed in
              helping our travelers find the best travel kits and accessories
              for every travel. We pride ourselves in having the knowledge and
              experience to help our travelers prepare for any trip or journey!
            </p>
            <div className="mt-8 2xl:mt-10">
              <button
                className="py-2 px-6 xl:py-3 xl:px-10 xl:text-xl bg-urban-green text-white font-creato rounded 2xl:text-xl 2xl:py-3 2xl:px-10"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
                onClick={setSearchValue}
              >
                Shop now
              </button>
            </div>
          </section>
        </div>
        {/* ------------------------------------------ */}
      </div>

      {/* ====== kits ======================= */}
      <div className="bg-slate-50 flex justify-center items-center py-20 mt-20">
        <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4 2xl:w-10/12">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full min-h-[20rem] p-5 lg:p-20 lg:min-h-[40rem] lg:w-7/12 bg-urban-lightGreen bg-cover flex justify-center">
              <Image
                src="/assets/kit-access.svg"
                width={100}
                height={100}
                alt=""
                className="w-full"
              />
            </div>

            <div className="w-full lg:w-5/12 bg-urban-black p-10 lg:p-20 flex flex-col items-center justify-center gap-4 lg:gap-10 lg:min-h-96">
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

              <div className="mt-4 lg:mt-2 w-full">
                <h2
                  className=" text-2xl lg:text-3xl xl:text-4xl w-10/12 text-white font-creato font-thin italic"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  data-aos-once="true"
                >
                  Trip <span className="font-bold">Accessories</span>
                </h2>
              </div>
              <p
                className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light text-white"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                It's just as important to accessorize your travel as it is your
                lifestyle! Bring your trip to life with our gorgeous range of
                trip accessories. Effortless travel style at great value prices!
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* ======================================= */}

      {/* ========================= */}
      <section className="w-full py-10 lg:py-0 lg:w-8/12 2xl:w-10/12 m-auto xl:mt-20 lg:xl:my-0 lg:pb-20 relative card-slider-section bg-white">
        <div className="minh-96 flex flex-col items-center">
          <div>
            <h2
              className="italic text-center text-3xl lg:text-4xl font-creato font-bold text-urban-green 2xl:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              50+ Travel Kits and more{" "}
            </h2>
            <p
              className="mt-4 text-center w-10/12 xl:w-8/12 m-auto  leading-6 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              we have the requisite experience and knowledge to help you prepare
              for any journey. With a wide variety of products and accessories,
              you're sure to find what you need - at the right price and ready
              for immediate delivery.
            </p>
          </div>
          <div className="w-11/12 m-auto flex flex-col items-center lg:w-full mt-12">
            <Image
              src="/assets/mansory.svg"
              width={600}
              height={600}
              alt=""
              className="w-full"
            />

            <div className="mt-20 mb-10 2xl:mt-14">
              <button
                className="py-2 px-6 xl:py-3 xl:px-10 xl:text-xl bg-urban-green text-white font-creato rounded 2xl:text-xl 2xl:py-3 2xl:px-10 floating-text"
                onClick={setSearchValue}
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* =========================== */}

      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
