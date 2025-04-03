import React from "react";

type PropT = {
  title: string;
  handlePress: Function;
};
export default function PrimaryBtn({ title, handlePress }: PropT) {
  return (
    <button
      className="px-10 py-3 2xl:py-2 2xl:px-5 rounded-md text-white bg-urban-green 2xl:text-base"
      onClick={() => handlePress()}
    >
      {title}
    </button>
  );
}
