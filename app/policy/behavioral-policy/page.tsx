import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/app/shared/components/footer/footer";
import PolicyQuickLink from "@/app/shared/components/policy-quick-links/policy-quick-link";
import Link from "next/link";

export default function BehavioralPolicypage() {
  return (
    <main className="relative ">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] bg-policyBg bg-cover py-10 px-4 ">
        <div className="flex flex-col lg:w-11/12 2xl:w-10/12 m-auto lg:flex-row lg:m-h-[50vh] lg:mt-40 2xl:mt-60"></div>
      </section>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20 2xl:w-10/12">
        <section className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 mb-10">
            <div className="flex items-center gap-4 cursor-pointer">
              <ArrowBackIcon sx={{ color: "#036E03" }} />
              <span className="text-xl font-creato text-urban-black font-bold 2xl:text-3xl">
                Our Policy
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-xl font-creato font-bold 2xl:text-3xl">
              Quick Links:
            </span>
            <PolicyQuickLink />
          </div>
        </section>

        <div className="mt-10">
          <p className="mb-4 font-light">Document Updated 2nd May, 2024</p>
          <p className="w-full lg:w-4/12 font-light">
            Our Policies are legal agreement between you and Blip Limited
            (Urban) and governs any claims that may be made by any User in
            relation to the Services.
          </p>
        </div>
      </div>
      {/* ---------------- about --------------- */}
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-2 2xl:w-10/12">
        <section className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-light 2xl:text-5xl">
            Behavioral Policy
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            <span className="mb-4 text-2xl font-bold block mt-10">
              Introduction
            </span>
            The following Passenger Behaviour policy outlines the expected code
            of conduct for all passengers of Urban. This policy aims to ensure a
            safe, comfortable, and respectful environment for all passengers. By
            using Urban, passengers agree to abide by this policy.
            <br />
            <br />
            <span className="mb-4 text-2xl font-bold block mt-10">
              Booking and Trip Guidelines
            </span>
            Passengers are required to book all trips on the Urban mobile or web
            app, or through a Dispatch Officer.
            <br />
            Passengers are required to arrive at the departure park at least 30
            minutes before their departure time.
            <br />
            Passengers are required to cooperate with the Park Officials, and
            Drivers at all times. If you are running late, kindly contact the
            Park or the Customer Experience Team to inform them. Getting on a
            Bus without having a booking for the trip or taking a trip using
            another customer’s booking is not permitted. When in doubt about
            your trip, please contact the Customer Experience Team.
            <br />
            <br />
            <span className="mb-4 text-2xl font-bold block mt-10">
              1. Respectful Behaviour
            </span>
            1.1 Respect for Others: Passengers must treat fellow passengers,
            drivers, and Urban staff with respect, courtesy, and dignity. Any
            form of discrimination, harassment, verbal abuse, or physical
            assault will not be tolerated.
            <br />
            1.2 Personal Space: Passengers should respect the personal space of
            others and avoid unnecessary physical contact or invasion of
            privacy.
            <br />
            1.3 Noise and Volume: Passengers should maintain a reasonable noise
            level during their journey, ensuring that the volume of
            conversations, electronic devices, or any other activities does not
            disturb or inconvenience others.
            <Link href={"/assets/policy/BehaviorPolicy.pdf"} target="_blank">
              <span className="italic text-urban-green cursor-pointer font-bold pl-2">
                See more
              </span>
            </Link>
            <br />
          </p>
        </section>
      </div>
      {/* ------------------------------------------ */}

      {/* ---------- footer ------------------- */}
      <Footer />
      {/* -------------------------------------- */}
    </main>
  );
}
