import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/app/shared/components/footer/footer";
import PolicyQuickLink from "@/app/shared/components/policy-quick-links/policy-quick-link";
import Link from "next/link";

export default function HotelPolicypage() {
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
            Hotel Terms & Condition
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            These terms and conditions apply to all types of services of Blip
            Limited ("Urban", "we", "us", "our" or "ours") offer, both direct or
            indirect. The terms "you", "your", "yourself", "yours" and
            "customer" refer to the individual person or corporation who
            subscribes to our newsletters and offers, creates an account with us
            or makes a booking (whether complete/incomplete,
            successful/unsuccessful) through this website. The terms "Final
            Party" and "Accommodation Provider" refer to the hotel (not limited
            to organisations that go by 'hotel' only, but also applies to
            'motels', 'inns', 'apartments', 'suites' and 'estates') that is
            advertised on urban.ng regardless of whether a signed deal between
            us and them exists or does not.
            <br />
            <br />
            Terms and conditions may be revised and modified occasionally;
            hence, it is advisable not to familiarise yourself with them at any
            point in time, but review them each and every time you use any of
            our services. Services (direct and indirect) apply to everything
            provided online, through mobile devices and computers of all
            platforms, by email, telephone, post or through direct contact with
            our officers. You accept that you have read, understood and agreed
            to the terms and conditions (as well as our privacy policy) below,
            if and when you make use of our service in any way, including but
            not limited to browsing this website, rating or giving hotel
            reviews, commenting on a review, or making a reservation.
            <br />
            <br />
            Legal Use
            <br />
            Your utilisation of any of our services warrant that you will not
            make unlawful use of this website or any contents and materials we
            provide through other means with which we correspond with you or
            final parties on your behalf.
            <br />
            <br />
            Our Service Scope
            <br />
            Urban provides temporary accommodation of all types, which include
            event halls, motels, hotels, apartments, etc. The provision of these
            services are found on the website through which you can book for
            your chosen service. By placing a reservation through us, you enter
            into a legally binding agreement with the direct service provider
            (hotel and the likes) with which your reservation is made to. Right
            after your reservation is placed, Urban acts simply as a mediator
            between you and the service provider.
            <Link href={"/assets/policy/HotelsT.pdf"} target="_blank">
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
