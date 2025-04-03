import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Accordion({ id, question, answer }: any) {
  const [isOpen, setisOpen] = useState(false);
  const [selected, setselected] = useState("");

  const accRefcard: any = useRef(null);
  const handleOutsideClick = (event: any) => {
    const customData = event.target.getAttribute("data-name");
    if (accRefcard.current && !accRefcard.current.contains(event.target)) {
      setisOpen(false); // Close the modal
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener when modal is open
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove event listener when modal is closed
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      className="bg-white rounded-xl  w-full"
      ref={accRefcard}
      data-name="meee"
    >
      <div
        className={
          "w-full bg-white p-4 py-5 rounded-xl border-b border-b-slate-200 cursor-pointer flex justify-between items-center"
        }
        onClick={() => {
          setisOpen(!isOpen);
          setselected(question);
        }}
      >
        <div className="font-creato text-xl"> {question}</div>
        <div>
          {!isOpen ? (
            <HiOutlineChevronUp size={20} className="faqstransition" />
          ) : (
            <HiOutlineChevronDown size={20} className="faqstransition" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 font-creato py-5 faqstransition">{answer}</div>
      )}
    </div>
  );
}
