import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/app/shared/components/footer/footer";
import PolicyQuickLink from "@/app/shared/components/policy-quick-links/policy-quick-link";
import Link from "next/link";

export default function TripCancelPolicypage() {
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
            Trip Cancellation Policy
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            The trip cancellation policy guidelines aim to ensure fairness,
            transparency, and efficient handling of trip cancellations. This
            policy is designed to provide clear expectations for passengers
            while mitigating potential revenue losses due to last-minute
            cancellations.
            <br />
            <br />
            <span className="">1. Penalty for Same-Day Cancellation</span>
            <br />A penalty of 25% of the fare will be applied if a trip is
            canceled on the same day it is scheduled to occur. The penalty
            amount will be calculated based on the total fare for the trip.
            However, the penalty will be capped at a maximum of N2,000.00. This
            cap ensures that the penalty remains reasonable and proportional to
            the fare.
            <br />
            <span className="">
              2. Penalty for Different-Day Cancellation
            </span>{" "}
            <br />A penalty of 10% of the fare will be applied if a trip is
            canceled on a different day from the day the Trip is scheduled to
            occur. The penalty amount will be calculated based on the total fare
            for the trip. Different-Day cancellation is free for users who have
            subscribed for a number of trips. However, the penalty will be
            capped at a maximum of N2,000.00. This cap ensures that the penalty
            remains reasonable and proportional to the fare.
            <br />
            <span>3. Free Cancellation within 10 Minutes of Booking </span>
            <br />
            Passengers will have the flexibility to cancel their trips for free
            within the first 10 minutes after making a booking. This option
            allows passengers to correct any booking errors or change their
            minds shortly after making a reservation without incurring any
            charges.
            <Link
              href={"/assets/policy/TripCancellationPolicy.pdf"}
              target="_blank"
            >
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
