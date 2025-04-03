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
import Link from "next/link";

export default function UrbanCardPage() {
  const [ismovileNavOpen, setismovileNavOpen] = useState(false);
  const [sliders, setsliders] = useState([
    {
      id: 0,
      slide: "/assets/kard1.svg",
    },
    {
      id: 1,
      slide: "/assets/kard2.svg",
    },
  ]);

  const [sliderx, setsliderx] = useState([
    {
      id: 0,
      slide: "/assets/sliderx1.svg",
    },
    {
      id: 1,
      slide: "/assets/sliderx2.svg",
    },
  ]);
  const [activeSlide, setactiveSlide] = useState({
    id: 0,
    slide: "/assets/simplecard.svg",
  });
  const [openModal, setopenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sliders.length]);

  return (
    <>
      <main className="relative ">
        <section className="w-full angecyHero -mt-[7.8rem] 2xl:-mt-40 md:min-h-[82vh] bg-newcardHeroBg bg-cover py-10 px-4 flex flex-col items-center">
          <div className="agency-hero-container relative">
            <div className="_leftSide">
              <h2
                className="agency-heroText font-creato font-light"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                It's amazing how much perks and freedom can be packed into a
                simple card.
              </h2>
              <div
                className="flex items-center gap-2 mt-6"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image
                  src="/assets/rounded-logo.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="lg:w-10"
                />
                <span className="italic block font-thin font-creato text-white text-xl xl:text-3xl">
                  Live like a Native
                </span>
              </div>

              <div className="flex items-center mt-4 gap-x-4  xl:mt-10">
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

            <div className="_cardrigthSide">
              <img
                src={sliders[currentIndex].slide}
                // width={40}
                // height={40}
                alt=""
                className="floating"
                data-aos="flip-up"
                data-aos-duration="1000"
              />
              <div className=" absolute bottom-10 xs:w-full right-40 lg:right-0 lg:left-none lg:w-1/2 flex justify-center items-center">
                <div className="flex items-center gap-2">
                  {sliders.map((item, index: number) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full cursor-pointer"
                      onClick={() => setactiveSlide(item)}
                      style={{
                        backgroundColor:
                          item.id === currentIndex ? "#1A1A1A" : "#fff",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=" flex justify-center items-center lg:pt-20 mt-24 lg:mt-2">
          <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto lg:mt-4">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full min-h-[20rem] lg:min-h-[20rem] lg:w-4/12 xl:min-h-[30rem] xl:w-6/12">
                <Image
                  src="/assets/card-section-bg.svg"
                  width={30}
                  height={30}
                  alt=""
                  className="w-full object-cover object-center"
                />
              </div>

              <div className="w-full lg:w-6/12 bg-white mt-8 lg:mt-0 lg:p-10 lg:px-20 flex flex-col">
                <div className="mt-2 w-full xl:-mt-8 cardsection-container">
                  <h2 className=" text-2xl lg:text-xl xl:text-4xl 2xl:text-5xl lg:w-full w-11/12 font-creato mb-2 text-urban-green">
                    From individuals, small businesses to global enterprises
                  </h2>
                  <p className="font-creato text-xl mt-4">
                    {" "}
                    Everyone spend and saves with Urban Card.{" "}
                  </p>
                  <div className="mt-4 mb-4 px-4 2xl:mt-8">
                    <ul className="flex-col gap-4 text-xl list-item list-disc font-creato list-outside">
                      <li className="mb-4"> Road Warriors</li>
                      <li className="mb-4"> Travel Managers</li>
                      <li className="mb-4"> Finance and Accounting</li>
                      <li className="mb-4"> Executive Assistants</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full flex justify-start">
                  <button
                    className="bg-urban-green text-white py-2 px-6 rounded 2xl:py-3 2xl:px-10 2xl:text-xl"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    data-aos-once="true"
                    onClick={() => setopenModal(true)}
                  >
                    Get Card
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ----------- ad ----------- */}
        <div className="flex justify-center items-center py-10 mb-10 mt-20">
          <section className="w-11/12 lg:w-11/12 px-1 lg:px-6 m-auto lg:mt-4 2xl:w-10/12">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-5/12 bg-urban-black p-10 lg:px-1 flex flex-col items-center justify-center gap-4 lg:gap-10 lg:min-h-96">
                <div className="flex items-center gap-4 text-white w-full md:px-10 lg:w-11/12 m-auto">
                  <Image
                    src="/assets/cardblob1.svg"
                    width={180}
                    height={140}
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    className="w-1/2"
                  />
                  <Image
                    src="/assets/cardblob2.svg"
                    width={180}
                    height={140}
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    className="w-1/2"
                  />
                </div>

                <div className="mt-4 lg:mt-2 w-full xl:px-1 flex justify-center lg:w-11/12 m-auto">
                  <div className="w-full md:px-10">
                    <h2
                      className=" text-2xl font-light lg:text-3xl xl:text-4xl w-10/12 text-white font-creato"
                      data-aos="fade-up"
                      data-aos-duration="1800"
                    >
                      Spend Smarter with
                    </h2>
                    <h2 className=" text-2xl font-bold lg:text-3xl xl:text-4xl w-10/12 text-urban-lightGreen font-creato">
                      Urban Cards
                    </h2>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <Image
                    src={sliderx[currentIndex].slide}
                    width={120}
                    height={120}
                    alt=""
                    className=" w-8/12"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                  />
                </div>
                <div className=" bottom-10 xs:w-full right-40 lg:right-0 lg:left-none lg:w-1/2 flex justify-center items-center">
                  <div className="flex items-center gap-2">
                    {sliderx.map((item, index: number) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full cursor-pointer"
                        onClick={() => setactiveSlide(item)}
                        style={{
                          backgroundColor:
                            item.id === currentIndex ? "#036E03" : "#fff",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-7/12 flex justify-center items-center gap-2 px-2 mt-16 lg:mt-0 xl:p-10">
                <div className="xl:w-10/12 m-auto">
                  <h2 className="italic text-3xl  xl:text-5xl font-creato font-thin mb-2">
                    What would you like to do with{" "}
                    <span className="text-urban-green font-bold">Urban?</span>
                  </h2>
                  <div className="mt-10 mb-4 px-4">
                    <ul className="flex-col gap-4 text-xl list-item list-decimal font-creato list-outside font-light">
                      <li className="mb-4">
                        Enjoy unrivaled discounts across our merchants
                      </li>
                      <li className="mb-4">Book your own trip</li>
                      <li className="mb-4">
                        Book trips for employees and Execs
                      </li>
                      <li className="mb-4">
                        Manage company cards and expenses
                      </li>
                      <li className="mb-4">Create a company travel program</li>
                      <li className="mb-4">
                        Attend Urban events across the country
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 mt-10 flex flex-col gap-6">
                    <hr />
                    <li className="text-xl xl:text-2xl font-light italic">
                      All discounts are for Urban card holders - learn more on
                      each card with the links below
                    </li>
                  </div>
                  <div className=" flex items-center gap-x-4 mt-4">
                    <Link href="/personal-card">
                      <div className="flex cursor-pointerx items-center">
                        <span className="text-xl font-creato block font-bold">
                          Personal Card page
                        </span>
                        <img src="./assets/roundArrow.svg" alt="" />
                      </div>
                    </Link>
                    <Link href="/corporate-card">
                      <div className="flex cursor-pointerx items-center">
                        <span className="text-xl font-creato font-bold">
                          Corporate Card page
                        </span>
                        <img src="./assets/roundArrow.svg" alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* -------------------------- */}

        {/* ===== random ============== */}
        <section className="min-h-[65vh] bg-urban-green w-full mb-10 mt-10 pl-0 pr-0 pt-10 relative">
          <div className="w-full lg:w-4/12 m-auto  mt-10 mb-14">
            <p className="text-4xl xl:text-4xl text-center font-creato font-bold italic text-white">
              <span className="font-light">Do more</span> with Urban Merchants
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-around px-10 gap-y-4 items-center mb-14">
            <div className="w-[40vh] h-[40vh] lg:w-[20vw] lg:h-[20vw] rounded-full overflow-hidden">
              <img src="/assets/rand2.png" alt="" className="object-cover" />
            </div>
            <div className="w-[40vh] h-[40vh] lg:w-[20vw] lg:h-[20vw] rounded-full overflow-hidden">
              <img src="/assets/rand3.png" alt="" className="object-cover" />
            </div>
            <div className="w-[40vh] h-[40vh] lg:w-[20vw] lg:h-[20vw] rounded-full overflow-hidden">
              <img src="/assets/rand4.png" alt="" className="object-cover" />
            </div>
          </div>

          <div className="h-40 overflow-hidden w-full relative">
            <div className="flex justify-center mt-10 pb-6">
              <button className="py-3 px-6 2xl:py-4 bg-[#1A1A1A] text-white rounded-lg">
                Explore our Merchants
              </button>
            </div>
            <Image
              src="/assets/hiddencard.svg"
              width={120}
              height={120}
              alt=""
              className="w-80 absolute -left-20 -top-20 bottom-0"
            />
          </div>
        </section>
        {/* =========================== */}

        {/* ========================= */}
        <section className="w-full py-10 lg:py-0 lg:w-8/12 2xl:w-10/12 m-auto xl:mt-20 lg:xl:my-0 lg:pb-20 relative card-slider-section">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full p-20 lg:p-0 lg:w-1/2">
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
                <span className="font-bold not-italic text-urban-green">
                  Live Your Best Life!
                </span>{" "}
                Use your Urban Card Anywhere Anytime ATM, POS or Web.
              </h2>
            </div>
          </div>
        </section>
        {/* =========================== */}

        {/* =========== app ads ======================== */}
        <AppAd />
        {/* ============================================= */}

        {/* ---------- footer ------------------- */}
        <Footer />
        {/* -------------------------------------- */}
      </main>
      {openModal && (
        <TravelersDialog isOpen={openModal} setisopen={setopenModal} />
      )}
    </>
  );
}
