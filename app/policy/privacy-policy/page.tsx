import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/app/shared/components/footer/footer";
import PolicyQuickLink from "@/app/shared/components/policy-quick-links/policy-quick-link";
import Link from "next/link";

export default function PrivacyPolicypage() {
  return (
    <main className="relative ">
      <section className="w-full -mt-[7.8rem] 2xl:-mt-40 min-h-[55vh] bg-policyBg bg-cover py-10 px-4 ">
        <div className="flex flex-col lg:w-11/12 2xl:w-10/12 m-auto lg:flex-row lg:m-h-[50vh] lg:mt-40 2xl:mt-60"></div>
      </section>

      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-2 mt-20 2xl:w-10/12">
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
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-20 2xl:w-10/12">
        <section className="">
          <h2 className="italic text-4xl lg:text-4xl font-creato font-light 2xl:text-5xl">
            Privacy policy
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            <span className="mb-4 text-2xl font-bold block mt-10">
              Introduction
            </span>
            Blip Limited (“Urban” or “Us” or “We” or “Our”) is a limited
            liability company incorporated under the laws of the Federal
            Republic of Nigeria, with registration number 1915983 and having its
            registered office address at Plot A10, Persian Garden Estate,
            Lokogoma, FCT-Abuja. We are dedicated to protecting the
            confidentiality and privacy of personally identifiable information
            entrusted to Us (“Personal Data”). As part of that fundamental
            obligation, We are committed to protecting the use of the Personal
            Data which We collect on https://www.urban.ng and Urban’s
            application software (the “App”). The App is an information and
            booking reservations platform for mobility, transportation and
            chartering of vehicles (“Services”). This privacy policy (“Privacy
            Statement”) sets out the basis upon which We will process, store,
            and disclose any Personal Data that is provided voluntarily by users
            of the App (“Data Subject” or “you” or “your”) in connection with
            the Services that We offer.
            <br />
            <br />
            We note that the Nigeria Data Privacy Regulations (NDPR)
            distinguishes between entities that are “controllers” of Personal
            Data and entities that “process” Personal Data. We note that We are
            a “Data Controller” where We determine the purposes for and the
            manner in which Personal Data is processed or is to be processed and
            We are a “Processor” for those Services where We only use Personal
            Data that is requested by other Data Controllers.
            <br />
            <br />
            Where We make decisions on how Personal Data is used in connection
            with Our Services (where We are acting as a controller), We are
            responsible for the obligations of a “Controller” under the NDPR in
            connection with the processing of Personal Data – for example, We
            use this Privacy Statement and other notices to provide you with
            information about Our use of personal information, as required by
            the NDPR. Where We only use Personal Data requested by other Data
            Controllers (where We are acting as a processor), those other Data
            Controllers are similarly responsible for the obligations of a
            “Controller” under applicable laws in connection with the processing
            of personal information, and, if you are using Our Services through
            those other Controllers, you should contact them if you have
            questions or concerns about the processing of your personal
            information or compliance with the NDPR and other applicable laws.
            <Link href={"/assets/policy/PrivacyPolicy.pdf"} target="_blank">
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
