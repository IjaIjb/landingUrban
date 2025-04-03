import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/app/shared/components/footer/footer";
import PolicyQuickLink from "@/app/shared/components/policy-quick-links/policy-quick-link";
import Link from "next/link";

export default function TermOfUsepage() {
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
          <PolicyQuickLink />
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
            Terms of use policy
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            This term of use is a legal agreement between you, a user (“You” or
            “Your”), and Blip Limited (“Urban” or “Us” or “Our” or “We”). These
            terms of use together with our Our Privacy Policy, Refund Policy and
            Behaviour Policy on Urban's website, (collectively referred to as
            the "Terms of Use") sets out the complete terms and conditions upon
            which You may use the services on Urban's website (the "WebApp") and
            Urban’s mobile application (the "App"). The Terms of Use also govern
            the relationship between You and Urban and governs any claims that
            may be made by You or Urban in relation to the Services.
            <br />
            <br />
            By signing up to create a user account on the WebApp and the App
            “User Account”, You acknowledge that You have read, understood, and
            agree to be bound by the Terms of Use and to comply with all
            applicable laws and regulations incorporated into the Terms of Use.
            Your access to and the use of Our services is conditioned on Your
            acceptance of and compliance with these terms. Your agreement with
            Us regarding compliance with the Terms of Use becomes effective
            immediately upon the creation of a User Account.
            <br />
            <br />
            The WebApp and the App is an information and booking reservations
            platform for mobility, transportation, and chartering of vehicles.
            You would be able to hire buses, and book buses for transportation
            from specific pickup locations to destinations listed on the WebApp
            and the App (“Services”). The Services enables You to arrange and
            schedule transportation services with third party providers who
            partner with Us (“Partners”). You hereby acknowledge that the
            transportation services, as well as drivers and vehicles used for
            the same are provided by Partners.{" "}
            <Link href={"/assets/policy/TermsofUse.pdf"} target="_blank">
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
