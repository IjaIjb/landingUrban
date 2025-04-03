"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../shared/components/footer/footer";
import Marquee from "react-fast-marquee";
import "./travelers.scss";
import AppAd from "../shared/components/app-ad/app-ad";
import TravelersDialog from "../shared/components/travelers-dialog/travelers-dialog";
import TravelersClubDialog from "../shared/components/travClub-dialog/travClub-dialog";

export default function TravelersClubPage() {
  const [isModalOpen, setisModalOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const users = [
    {
      name: "PALM DUNG",
      locatiuon: "Urban Traveler - Jos.",
      photo: "/assets/user1.png",
      text: "For me, Urban is all about putting the sunglasses on, hitting the open road and leaving the world behind. I've done over 2,000miles across the country and every single of them has been unforgettable.",
    },
    {
      name: "DAVID TUNDE",
      locatiuon: "Urban Traveler - Abuja.",
      photo: "/assets/user1.png",
      text: "Urban provides a level of travel experience I didn't know was possible before I took the trip. I'm fortunate to have some of the most desirable travels in the country, but nothing comes close to this, nowhere near!",
    },

    {
      name: "HARUNA ABDULLAHI",
      locatiuon: "Urban Traveler - Jos.",
      photo: "/assets/user1.png",
      text: "The connection between man and travel when you're on the road is absolutely unparalleled - Urban really is more like a flight when you want ultimate thrills",
    },
    {
      name: "DAVID TUNDE",
      locatiuon: "Urban Traveler - Abuja.",
      photo: "/assets/user1.png",
      text: "Urban provides a level of travel experience I didn't know was possible before I took the trip. I'm fortunate to have some of the most desirable travels in the country, but nothing comes close to this, nowhere near!",
    },
    {
      name: "DAVID TUNDE",
      locatiuon: "Urban Traveler - Abuja.",
      photo: "/assets/user1.png",
      text: "Urban provides a level of travel experience I didn't know was possible before I took the trip. I'm fortunate to have some of the most desirable travels in the country, but nothing comes close to this, nowhere near!",
    },
  ];
  return (
    <>
      <main className="relative">
        <section className="w-full -mt-[7.9rem] 2xl:-mt-40 min-h-[60vh] lg:min-h-[75vh] bg-tvclubHero bg-cover  py-10 px-4">
          <div className="flex flex-col justify-center items-center travelers-club-hero">
            <div className="mt-32 lg:mt-40 2xl:mt-72 w-11/12 lg:w-5/12 xl:w-5/12 m-auto text-center flex flex-col gap-4 lg:gap-10 items-center 2xl:w-7/12">
              <div className="flex flex-col items-center">
                <h2
                  className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl fleet-hero-text font-thin"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Welcome to the official
                </h2>
                <h2
                  className="font-creato text-white text-3xl lg:text-4xl xl:text-5xl fleet-hero-text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Urban Traveler's Club
                </h2>

                <p
                  className="text-xl font-creato font-light w-full lg:w-10/12 text-white mt-2"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Exclusive club created by Urban's travel enthusiast for Urban
                  enthusiast
                </p>
              </div>

              <div
                className="flex flex-col items-center  lg:items-center w-full gap-4 lg:justify-center mt-2"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <button
                  className="bg-white text-urban-green xl:text-xl rounded-md py-3 px-4 w-5/12 lg:w-3/12 xl:w-4/12 "
                  onClick={() => setisModalOpen(true)}
                >
                  Register
                </button>
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src="/assets/rounded-logo.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="italic font-thin font-creato text-white">
                    Supported by Urban
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-2 mt-20 2xl:mt-20 2xl:mb-40 2xl:w-10/12">
          <section className="">
            <h2
              className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Why join Urban{" "}
              <span className=" text-urban-green font-bold">
                Traveler's club?
              </span>
            </h2>
            <p
              className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              Exclusive club created by Urban's travel enthusiast for Urban
              enthusiast. The main purpose is to bring together like-minded
              travelers who share a passion for exquisite travel experience all
              over the country. Urban traveler's club makes you part of a
              tight-knit community with travelers across the country-a community
              that has enjoyed phenomenal experience.
            </p>
            <div className="mt-10 flex flex-wrap justify-between gap-y-4 gap-2">
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/stepone.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen xl:text-lg 2xl:text-2xl">
                    Phenomenal Experience
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Have access to our one of a kind events and tours as well as
                  additional club benefits
                </p>
              </div>
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/steptwo.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen xl:text-lg 2xl:text-2xl">
                    Tight-Knit Community
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Sign up on the Urban mobile app you just downloaded using your
                  phone number and email
                </p>
              </div>
              <div
                className="p-10 bg-white min-h-40 w-full lg:w-[30%]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/stepthree.svg"
                    width={50}
                    height={40}
                    alt=""
                  />
                  <span className=" text-urban-lightGreen xl:text-lg 2xl:text-2xl">
                    Monthly Travel Newsletter
                  </span>
                </div>
                <p className="mt-4 font-light 2xl:text-xl">
                  Receive information about our next tours and events, our
                  promotions and coupons
                </p>
              </div>
            </div>
          </section>
        </section>

        <section className="bg-[#6cc56c10] pt-10 pb-5 mt-10">
          <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20 2xl:w-10/12">
            <div className="">
              <h2
                className="italic text-4xl lg:text-4xl font-creato font-thin 2xl:text-5xl"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                One of a kind{" "}
                <span className=" text-urban-green font-extrabold">Club</span>
              </h2>
              <p
                className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-thin"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                Traveling Urban is a unique experience. Although there are more
                and more enthusiastic travelers around the country, we are still
                a very small circle and tribe. The clubs mission is to provide
                Urban's travelers with ever more exciting opportunities to
                experience Urban in the most beautiful and spectacular way. But
                not only that, the club is a meeting place for like-minded
                people who enjoy unique, luxurious moments together and make
                friends for life in the process. Our tours and events are
                designed for Urban's travelers-however we welcome the
                participation of like-minded travel enthusiasts who want to join
                us on our tours with their family and friends. Just contact us
                if you are interested and we will make you an offer. We look
                forward to getting to know you.
              </p>
              <div className="mt-10 flex flex-col lg:flex-row  justify-between gap-4">
                <div className="w-full h-80 lg:3/12 ">
                  <div className="relative overflow-hidden h-64">
                    <Image
                      src="/assets/club1.png"
                      width={300}
                      height={140}
                      alt=""
                      className="w-full h-full  object-cover object-center"
                    />
                  </div>
                  <div className="w-full py-3 px-2 bg-urban-lightGreen text-urban-black text-center font-creato">
                    Like Minded
                  </div>
                </div>
                <div className="w-full h-80 lg:3/12 ">
                  <div className="relative overflow-hidden h-64">
                    <Image
                      src="/assets/club2.png"
                      width={300}
                      height={140}
                      alt=""
                      className="w-full h-full  object-cover object-center"
                    />
                  </div>
                  <div className="w-full py-3 px-2 bg-urban-green text-white text-center font-creato">
                    Exciting Opportunities
                  </div>
                </div>

                <div className="w-full h-80 lg:3/12 ">
                  <div className="relative overflow-hidden h-64">
                    <Image
                      src="/assets/club3.png"
                      width={300}
                      height={140}
                      alt=""
                      className="w-full h-full  object-cover object-center"
                    />
                  </div>
                  <div className="w-full py-3 px-2 bg-urban-black text-white text-center font-creato">
                    Tours and Events
                  </div>
                </div>
              </div>

              <div className="mt-14 lg:mt-10  mb-5 flex w-full  m-auto gap-4 2xl:mt-6 justify-center lg:justify-start">
                <button className="px-6 xl:px-14 rounded-md py-3 border-none bg-urban-green text-white lg:text-sm xl:text-base 2xl:text-xl">
                  Get in Touch
                </button>

                <button className="px-2 rounded-md py-3 xl:px-10 border border-urban-green text-urban-black lg:text-sm xl:text-base 2xl:text-xl">
                  Get Our Traveler’s kit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================ ===================== */}
        <div className="flex justify-center items-center py-10 mb-10 lg:mt-10">
          <section className="w-11/12 lg:w-11/12 px-1 lg:px-6 m-auto lg:mt-4 2xl:w-10/12">
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
                    data-aos-once="true"
                  />
                </div>

                <div className="mt-4 lg:mt-2 w-full">
                  <h2
                    className=" text-2xl font-light lg:text-3xl xl:text-4xl w-10/12 text-white font-creato"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    You don’t own an{" "}
                    <span className="font-bold text-urban-lightGreen">
                      Urban Card{" "}
                    </span>
                    yet?
                  </h2>
                </div>

                <div className="w-full flex justify-center">
                  <Image
                    src="/assets/urban-card.svg"
                    width={120}
                    height={120}
                    alt=""
                    className=" w-8/12"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                  />
                </div>

                <div className="w-full flex justify-center mt-4">
                  <button
                    className="bg-white text-urban-green rounded-md py-3 lg:py-4 px-10 2xl:py-3 2xl:px-10 2xl:text-xl"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              <div className="w-full min-h-[20rem] lg:min-h-[40rem] lg:w-7/12 flex justify-center items-center gap-2 px-2 mt-16 lg:mt-0 xl:p-10">
                <div className="xl:w-10/12 m-auto">
                  <h2 className="italic text-3xl  xl:text-5xl font-creato font-thin mb-2">
                    Where to find your{" "}
                    <span className="text-urban-green font-bold">
                      next adventure
                    </span>
                  </h2>
                  <p className="text-2xl font-thin">
                    Whether on the country road, on wild mountain passes or the
                    road shows;
                  </p>
                  <div className="p-4 mt-10 flex flex-col gap-6">
                    <li className="text-xl xl:text-2xl font-light italic">
                      Urban will always take your breath away. Find our next
                      tours and events here and become a part of the ever -
                      growing Urban family.
                    </li>
                    <hr />
                    <li className="text-xl xl:text-2xl font-light italic">
                      All prices are for club members - please contact us if you
                      are not a member yet.
                    </li>
                  </div>

                  <div className="w-full flex justify-start mt-4">
                    <button className="bg-urban-green text-white py-3 lg:py-4 px-10 rounded-lg 2xl:py-3 2xl:px-10 2xl:text-xl">
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ============================================ */}

        {/* ================= users ===================== */}
        <section className="py-10 lg:py-20 bg-slate-50 mb-5 lg:mb-20 mt-10">
          <Marquee>
            {users.map((obj, index: number) => (
              <div
                className=" w-80 2xl:w-[25rem] h-96 p-4 py-6 bg-white box-shadow-main ml-4"
                key={index}
              >
                <div className="flex gap-4 items-center">
                  <div className="overflow-hidden w-28 h-28 rounded-br-2xl rounded-bl-2xl">
                    <Image
                      src={obj.photo}
                      width={40}
                      height={40}
                      alt=""
                      className="object-center object-cover w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg lg:text-xl 2xl:text-3xl font-bold text-urban-green">
                      {obj.name}
                    </h2>
                    <p className="font-thin italic 2xl:text-xl">
                      {obj.locatiuon}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-light leading-7 2xl:leading-8 2xl:text-xl">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </section>
        {/* ============================================= */}

        {/* =========== app ads ======================== */}
        <AppAd />
        {/* ============================================= */}

        {/* ---------- footer ------------------- */}
        <Footer />
        {/* -------------------------------------- */}
      </main>

      {isModalOpen && (
        <TravelersClubDialog isOpen={isModalOpen} setisopen={setisModalOpen} />
      )}
    </>
  );
}
