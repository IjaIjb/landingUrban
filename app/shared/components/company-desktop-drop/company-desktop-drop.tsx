import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

type PropT = {
  setCompanyPage: Function;
  setisCompanyDropOpen: Function;
  isCompanyDropOpen: boolean;
};

export default function CompanyDesktopDrop({
  setisCompanyDropOpen,
  setCompanyPage,
  isCompanyDropOpen,
}: PropT) {
  const router = useRouter();

  const modalRefcard: any = useRef(null);
  const handleOutsideClick = (event: any) => {
    // Check if the click is outside the modal
    if (modalRefcard.current && !modalRefcard.current.contains(event.target)) {
      setisCompanyDropOpen(false); // Close the modal
    }
  };

  useEffect(() => {
    if (isCompanyDropOpen && window.innerWidth >= 1024) {
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
  }, [isCompanyDropOpen]);

  if (!isCompanyDropOpen) return null; // Return null if modal is not open

  return (
    <div className="travelersItems-container-comp py-4" ref={modalRefcard}>
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Urban Card");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/about");
            }}
          >
            <img src="./assets/bulb.svg" alt="" className="mt-1" />
            <div>
              <h4 className="font-bold">About Us</h4>
              <p className="text-sm">Learn how Urban is reimagining travel.</p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Partners");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/partners");
            }}
          >
            <img src="./assets/partnerIcon.svg" alt="" className="mt-1" />
            <div>
              <h4 className="font-bold">Partners</h4>
              {/* <p className="text-sm">Enabling linkages across boundaries.</p> */}
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("Careers");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/careers");
            }}
          >
            <img src="./assets/careerIcon.svg" alt="" className="mt-1" />
            <div>
              <h4 className="font-bold">Careers</h4>
              <p className="text-sm">
                Join our mission-driven culture and redefine travel.
              </p>
            </div>
          </div>

          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
            onClick={() => {
              setCompanyPage("contact");
              console.log("nav called");
              setisCompanyDropOpen(!isCompanyDropOpen);
              router.push("/contact");
            }}
          >
            <img src="./assets/contactIcon.svg" alt="" className="mt-1" />
            <div>
              <h4 className="font-bold">Contact Us</h4>
              <p className="text-sm">Get in touch with the Urban team.</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="item font-creato font-light flex flex-row gap-2 items-start p-2">
            <img src="./assets/resourceIcon.svg" alt="" className="mt-1" />
            <div>
              <h4 className="font-bold">Resources</h4>
              <p className="text-sm">Learn how Urban is reimagining travel.</p>

              <div className="flex flex-col gap-4 mt-4">
                <div
                  className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
                  onClick={() => {
                    setCompanyPage("Blog");
                    setisCompanyDropOpen(!isCompanyDropOpen);
                    router.push("/blog");
                  }}
                >
                  <img src="./assets/blogIcon.svg" alt="" className="mt-1" />
                  <div>
                    <h4 className="text-sm font-creato font-medium">Blog</h4>
                    <p className="text-sm">
                      Check out our top posts for personal and business travel.
                    </p>
                  </div>
                </div>

                <div
                  className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
                  onClick={() => {
                    setCompanyPage("Glossary");
                    setisCompanyDropOpen(!isCompanyDropOpen);
                    router.push("/glossary");
                  }}
                >
                  <img
                    src="./assets/glossaryIcon.svg"
                    alt=""
                    className="mt-1"
                  />
                  <div>
                    <h4 className="text-sm font-creato font-medium">
                      Glossary
                    </h4>
                    <p className="text-sm">
                      Learn the language of personal and business travel.
                    </p>
                  </div>
                </div>

                <div
                  className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2"
                  onClick={() => {
                    setCompanyPage("Urban Experience");
                    setisCompanyDropOpen(!isCompanyDropOpen);
                    router.push("/urban-Experience");
                  }}
                >
                  <img
                    src="./assets/urbanexpIcon.svg"
                    alt=""
                    className="mt-1"
                  />
                  <div>
                    <h4 className="text-sm font-creato font-medium">
                      Urban Experience Center
                    </h4>
                    <p className="text-sm">
                      Search and visit any of our UEC's near you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
