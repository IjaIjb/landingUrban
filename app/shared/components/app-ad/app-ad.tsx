import React from "react";
import Image from "next/image";

export default function AppAd() {
  return (
    <div className="w-wull lg:w-full lg:px-6 m-auto bg-urban-black min-h-4">
      <div className="w-11/12 lg:w-11/12 lg:px-6 m-auto bg-urban-black py-10 2xl:w-10/12">
        <section className="w-full bg-white flex flex-col lg:flex-row p-10 lg:p-20 rounded-xl">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/appAdd.svg"
              width={120}
              height={120}
              alt=""
              className="w-full floating-text"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center min-h-80">
            <div className="">
              <h2 className="text-4xl lg:text-5xl font-creato font-bold">
                Urban App
              </h2>
              <p className="italic font-creato text-left text-2xl">
                Available on Web and App
              </p>
              <div className="flex items-center gap-2 lg:gap-5 mt-6 2xl:mt-10">
                <Image
                  src="/assets/appstoreIcon.svg"
                  width={140}
                  height={40}
                  alt=""
                  className="lg:w-28 xl:w-32 2xl:w-40"
                />
                <Image
                  src="/assets/playstoreIcon.svg"
                  width={140}
                  height={40}
                  alt=""
                  className="lg:w-28 xl:w-32 2xl:w-40"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 pl-1">
                <Image
                  src="/assets/bliplogo.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <span className="font-light text-sm">
                  Powered by <span className="font-bold">BLIP LLC</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
