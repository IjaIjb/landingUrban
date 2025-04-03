import React from "react";

export default function FavIcon() {
  return (
    <div className="w-8 h-8 relative flex justify-center items-center">
      <div className="absolute w-4 h-4 rounded-full bg-red-400 text-white flex justify-center items-center top-0 right-0 text-xs">
        4
      </div>
      <div>
        <svg
          width="28"
          height="28"
          viewBox="0 0 57 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5938 12.9688C14.6757 12.9688 10.6875 16.9528 10.6875 21.8682C10.6875 25.8362 12.2461 35.2535 27.588 44.7732C27.8628 44.942 28.1783 45.0313 28.5 45.0313C28.8217 45.0313 29.1372 44.942 29.412 44.7732C44.7539 35.2535 46.3125 25.8362 46.3125 21.8682C46.3125 16.9528 42.3243 12.9688 37.4063 12.9688C32.4882 12.9688 28.5 18.3624 28.5 18.3624C28.5 18.3624 24.5118 12.9688 19.5938 12.9688Z"
            stroke="black"
            stroke-width="2.67188"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
