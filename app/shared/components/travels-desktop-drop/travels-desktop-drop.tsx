import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

type PropT = {
  settravelersPage: Function;
  setisTravelsDropOpen: Function;
  isTravelsDropOpen: boolean;
};

export default function TravelsDesktopDrop({
  setisTravelsDropOpen,
  settravelersPage,
  isTravelsDropOpen,
}: PropT) {
  const router = useRouter();
  const modalRef: any = useRef(null);

  const handleOutsideClick = (event: any) => {
    // Check if the click is outside the modal
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setisTravelsDropOpen(false); // Close the modal
    }
  };

  useEffect(() => {
    if (isTravelsDropOpen && window.innerWidth >= 1024) {
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
  }, [isTravelsDropOpen]);

  if (!isTravelsDropOpen) return null; // Return null if modal is not open

  return (
    <div className="travelersItems-container-t py-4" ref={modalRef}>
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 over">
        <div className="lg:w-1/2 flex flex-col gap-4  w-full">
          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              settravelersPage("Urban Card");
              setisTravelsDropOpen(!isTravelsDropOpen);
              router.push("/park");
            }}
          >
            <img src="./assets/parkIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Park</h4>
              <p className="text-sm">Join our network of park partners.</p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              settravelersPage("fleet");
              setisTravelsDropOpen(!isTravelsDropOpen);
              router.push("/fleet");
            }}
          >
            <img src="./assets/fleetIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Fleet</h4>
              <p className="text-sm">
                Join our growing community of fleet partners.
              </p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              settravelersPage("Urban Card");
              setisTravelsDropOpen(!isTravelsDropOpen);
              router.push("/agency");
            }}
          >
            <img src="./assets/providersIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Provider’s agency</h4>
              <p className="text-sm">
                Take the Urban wheel and experience a level of driving purity.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              settravelersPage("Urban Card");
              setisTravelsDropOpen(!isTravelsDropOpen);
              router.push("/travelers-club");
            }}
          >
            <img src="./assets/travelersIcon.svg" alt="" />
            <div>
              <h4 className="font-bold">Traveler’s Club</h4>
              <p className="text-sm">Where to next? Go with Urban.</p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              settravelersPage("Urban Card");
              setisTravelsDropOpen(!isTravelsDropOpen);
              router.push("/travelers-kit");
            }}
          >
            <img src="./assets/travelerskit.svg" alt="" />
            <div>
              <h4 className="font-bold">Traveler’s Kit</h4>
              <p className="text-sm">
                Brilliant travel accessories for every traveler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
