import React from "react";
import "./card-stepper.scss";

type PropT = {
  step: number;
  title: string;
  content: string;
};
export default function CardSteppercard({ step, title, content }: PropT) {
  return (
    <div className="stepper-card">
      <div className="flex items-center gap-2">
        <div className="w-16 h-16 md:w-10 md:h-10 xl:w-16 xl:h-16 rounded-full bg-urban-green text-white flex justify-center items-center text-2xl">
          {step}
        </div>
        <h2 className="text-xl text-urban-green font-creato">{title}</h2>
      </div>
      <p className="font-creato mt-10 text-xl">{content}</p>
    </div>
  );
}
