import React from "react";
import Image from "next/image";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import "./product-card.scss";
type PropT = {
  onbookClick: Function;
};
export default function ProductCard({ onbookClick }: PropT) {
  return (
    <div className="w-full h-[38rem] lg:3/12 flex flex-col relative overflow-hidden product-card">
      <div className="relative">
        <Image
          src="/assets/product1.png"
          width={400}
          height={240}
          alt=""
          className="w-full h-96  object-cover object-center rounded-tl-[2rem] rounded-tr-[2rem]"
        />
        <div className="w-full absolute bottom-4 flex justify-center"></div>
      </div>

      <div className="h-48 rounded-br-[2rem] rounded-bl-[2rem] p-3">
        <div>
          <div className="py-1 flex items-center justify-between">
            <button className="py-1 px-4 bg-[#e9f7e9] rounded-full text-sm text-urban-green">
              -30% Discount
            </button>

            <div className="py-1 px-4 rounded-full text-sm text-urban-black border border-gray-400">
              View Direction
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <img src="/assets/prdIcon.png" alt="" className="w-8 h-8" />
            <h2 className="mt-2 font-creato font-bold text-3xl mb-2 _hotel-name ">
              Tade Product
            </h2>
          </div>

          <p>Sales of Skin Care products...</p>
          <div className="flex flex-col lg:flex-row items-start  lg:items-center gap-3">
            <div className="flex items-center">
              <span className="font-light text-[0.8rem] 2xl:text-base _hotel-card-bodyText">
                No 12. Gwagwalada Abuja
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
