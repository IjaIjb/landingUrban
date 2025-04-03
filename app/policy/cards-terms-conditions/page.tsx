import React from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/app/shared/components/footer/footer";
import PolicyQuickLink from "@/app/shared/components/policy-quick-links/policy-quick-link";
import Link from "next/link";

export default function CardPolicypage() {
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
            Cards Terms & Condition
          </h2>
          <p className="mt-4 leading-8 2xl:leading-10 lg:leading-10 text-base lg:text-xl 2xl:text-2xl font-creato font-light">
            TERMS AND CONDITIONS
            <br />
            These terms and conditions comprise the Agreement between Blip
            Limited (hereinafter referred to as “the Issuer”) of Plot A10,
            Persian Garden Estate, Lokogoma, FCT-Abuja, Nigeria and the
            Customer, (hereinafter referred to as “the Cardholder”). The parties
            have agreed that the relationship shall be governed by the terms and
            conditions set out hereunder.
            <br />
            <br />
            DEFINITIONS
            <br />
            Account means the account maintained for the Cardholder in
            connection with the use of the Card. Account Holder means an
            individual, entrepreneur, corporate or non-corporate in whose name
            an Account is maintained. Balance means the level of indebtedness of
            the Cardholder, comprising all transactions, fees and interest
            (finance) charges. Card means any credit card including any
            additional or renewed card supplied by the Issuer from time to time
            under this agreement, and “Card Number” means the identifying number
            on the Card. Cardholder means the possessor of the Card and/or
            persons having power alone to utilize the Card in accordance with
            the Issuer's mandate. CBN means Central Bank of Nigeria. Conditions
            mean these or any other conditions of use from time to time in
            force. Credit Limit means the maximum debit balance allowed on the
            Cardholder's Account. Interest Rate means the relevant Interest Rate
            stated as varied by the Issuer from time to time. Direct Debit
            Mandate is the instruction the cardholder has executed to instruct
            the Issuer to take money from his account to settle his outstanding
            balance monthly. PIN means the Personal Identification Number the
            Issuer issues for use with a Card. Principal Cardholder means the
            Cardholder, and “Additional Cardholder” means any other person or
            persons to whom or for whose use the Issuer supplies a Card at the
            Cardholder's request. Statement means any statement of transactions
            sent to the Cardholder in accordance with the Conditions.
            Transaction means any payment for goods or services obtained by the
            use of the Card or Card Number or PIN. Card Account means the Issuer
            shall open a Card Account in the Cardholder’s name under its
            agreement.
            <br />
            <br />
            VARIATIONS OF CONDITIONS
            <br />
            The Issuer may vary all or any of these Conditions at any time by
            giving the Cardholder 20 days' prior written notice if and when it
            becomes necessary or appropriate to do so in order to comply with
            legal, fiscal or regulatory requirements, to reflect alterations in
            the nature and extent of the service which the Issuer is able to
            provide to the Cardholder having regard to its systems’
            capabilities, to market practice and to the level of customer
            demand, to reflect any corporate amalgamation or reconstruction
            which affects the Issuer or to rectify errors, inconsistencies,
            ambiguities or omissions in them.
            <Link href={"/assets/policy/CardsT.pdf"} target="_blank">
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
