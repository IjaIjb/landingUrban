"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PrimaryBtn from "../buttons/primary-btn";
import MenuIcon from "@mui/icons-material/Menu";

import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./navbar.scss";
import Link from "next/link";
import LoginDialog from "../login-dialog/login-dialog";
import RegisterDialog from "../register-dialog/register-dialog";
import TravelsDesktopDrop from "../travels-desktop-drop/travels-desktop-drop";
import CardDesktopDrop from "../card-desktop-drop copy/card-desktop-drop";
import CompanyDesktopDrop from "../company-desktop-drop/company-desktop-drop";

export default function Navbar({ setMobileVisibility }: any) {
  const [selectedTab, setselectedTab] = useState("Home");
  const [isOpen, setisOpen] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [travelersPage, settravelersPage] = useState("Travelers");
  const [isTravelsDropOpen, setisTravelsDropOpen] = useState(false);
  const [isCardDropOpen, setisCardsDropOpen] = useState(false);
  const [isCompanyDropOpen, setisCompanyDropOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [modalName, setmodalName] = useState("");

  const dropdownRef: any = useRef(null);

  const pathname = usePathname();

  const router = useRouter();

  // const tabsData = [
  //   {
  //     id: 1,
  //     title: "Home",
  //     path: "/",
  //     icon: (
  //       <>
  //         <svg
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M9 16.9999H15M3 14.5999V12.1301C3 10.9814 3 10.407 3.14805 9.87807C3.2792 9.40953 3.49473 8.96886 3.78405 8.57768C4.11067 8.13608 4.56404 7.78346 5.47078 7.07822L8.07078 5.056C9.47608 3.96298 10.1787 3.41648 10.9546 3.2064C11.6392 3.02104 12.3608 3.02104 13.0454 3.2064C13.8213 3.41648 14.5239 3.96299 15.9292 5.056L18.5292 7.07822C19.436 7.78346 19.8893 8.13608 20.2159 8.57768C20.5053 8.96886 20.7208 9.40953 20.8519 9.87807C21 10.407 21 10.9814 21 12.1301V14.5999C21 16.8401 21 17.9603 20.564 18.8159C20.1805 19.5685 19.5686 20.1805 18.816 20.564C17.9603 20.9999 16.8402 20.9999 14.6 20.9999H9.4C7.15979 20.9999 6.03969 20.9999 5.18404 20.564C4.43139 20.1805 3.81947 19.5685 3.43597 18.8159C3 17.9603 3 16.8401 3 14.5999Z"
  //             stroke="#036E03"
  //             strokeWidth="2"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //           />
  //         </svg>
  //       </>
  //     ),
  //   },
  //   { id: 6, title: "Traveler’s Kit", path: "/travelers-club" },
  //   { id: 3, title: "Card", path: "/card" },
  //   {
  //     id: 2,
  //     title: "About Us",
  //     path: "/about",
  //     icon: (
  //       <>
  //         <svg
  //           width="25"
  //           height="25"
  //           viewBox="0 0 25 25"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M13.5 20.366V18.366C13.5 15.6045 11.2614 13.366 8.5 13.366C5.73858 13.366 3.5 15.6045 3.5 18.366V20.366H13.5ZM13.5 20.366H21.5V19.366C21.5 16.4204 19.2614 14.366 16.5 14.366C15.0867 14.366 13.8103 14.9915 12.9009 15.9971M11.5 7.36597C11.5 9.02282 10.1569 10.366 8.5 10.366C6.84315 10.366 5.5 9.02282 5.5 7.36597C5.5 5.70911 6.84315 4.36597 8.5 4.36597C10.1569 4.36597 11.5 5.70911 11.5 7.36597ZM18.5 9.36597C18.5 10.4705 17.6046 11.366 16.5 11.366C15.3954 11.366 14.5 10.4705 14.5 9.36597C14.5 8.2614 15.3954 7.36597 16.5 7.36597C17.6046 7.36597 18.5 8.2614 18.5 9.36597Z"
  //             stroke="#036E03"
  //             strokeWidth="2"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //           />
  //         </svg>
  //       </>
  //     ),
  //   },
  //   { id: 3, title: "Fleet", path: "/fleet" },
  //   { id: 4, title: "Park", path: "/park" },
  //   { id: 5, title: "Agency", path: "/agency" },
  //   { id: 6, title: "Traveler’s Kit", path: "/travelers-club" },
  // ];

  const tabsData = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.9999H15M3 14.5999V12.1301C3 10.9814 3 10.407 3.14805 9.87807C3.2792 9.40953 3.49473 8.96886 3.78405 8.57768C4.11067 8.13608 4.56404 7.78346 5.47078 7.07822L8.07078 5.056C9.47608 3.96298 10.1787 3.41648 10.9546 3.2064C11.6392 3.02104 12.3608 3.02104 13.0454 3.2064C13.8213 3.41648 14.5239 3.96299 15.9292 5.056L18.5292 7.07822C19.436 7.78346 19.8893 8.13608 20.2159 8.57768C20.5053 8.96886 20.7208 9.40953 20.8519 9.87807C21 10.407 21 10.9814 21 12.1301V14.5999C21 16.8401 21 17.9603 20.564 18.8159C20.1805 19.5685 19.5686 20.1805 18.816 20.564C17.9603 20.9999 16.8402 20.9999 14.6 20.9999H9.4C7.15979 20.9999 6.03969 20.9999 5.18404 20.564C4.43139 20.1805 3.81947 19.5685 3.43597 18.8159C3 17.9603 3 16.8401 3 14.5999Z"
              stroke="#036E03"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
    },
    { id: 6, title: "Travel", path: "/travelers-club" },
    { id: 3, title: "Cards", path: "/card" },
    { id: 4, title: "Hotels", path: "/hotels" },

    { id: 4, title: "Merchants", path: "/merchant" },
    { id: 5, title: "Company", path: "/company" },
  ];

  const dialogRef: any = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    handleScroll();
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 200; // Adjust this value to set the height where the change occurs
      if (window.scrollY >= scrollHeight) {
        setIsFullWidth(true);
      } else {
        setIsFullWidth(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const totalDays = 1;
  //   const totalSeconds = totalDays * 24 * 60 * 60;
  //   const intervalTime = 1000;
  //   const fadeStep = 1 / totalSeconds;
  //   let opacity = 1;
  //   const fadeBody = () => {
  //     if (opacity > 0.01) {
  //       opacity -= fadeStep;
  //       document.body.style.opacity = opacity.toFixed(6);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   };

  //   const interval = setInterval(fadeBody, intervalTime);

  //   return () => clearInterval(interval); // Cleanup when component unmounts
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisTravelsDropOpen(false);
      } else {
        return;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousein", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousein", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      {pathname !== "/register/fleet" && pathname !== "/register/park" && (
        <div
          className={`w-full px-4 py-2 2xl:py-4 sticky z-50 ${
            isFullWidth
              ? "bg-white bg-opacity-60 backdrop-blur-xl top-0"
              : "top-2"
          }`}
        >
          <div
            className={`w-full lg:w-11/12 2xl:w-10/12 m-auto ${
              isFullWidth ? "bg-opacity-90" : "bg-white"
            } rounded-lg px-0 py-2 2xl:py-4 2xl:px-6 xl:max-w-8xl mt-2 lg:-mt-0`}
          >
            {/* desktop navbar */}
            <div className="hidden lg:block py-1 px-4">
              <div className="flex flex-row items-center justify-between">
                <div className="lg:w-1/12 xl:w-1/12">
                  <Image
                    src="/logo.svg"
                    width={80}
                    height={35}
                    alt=""
                    className="2xl:w-24"
                  />
                </div>
                <div
                  className="lg:w-8/12 xl:w-8/12 2xl:w-[62%] flex justify-start navTabsContainer"
                  ref={dropdownRef}
                >
                  <ul className="flex items-center lg:gap-8 xl:gap-10 2xl:gap-10 tabs-container">
                    {tabsData.map((obj, index: number) => (
                      <div key={index}>
                        {obj.title !== "Travel" &&
                          obj.title !== "Cards" &&
                          obj.title !== "Company" && (
                            <>
                              <Link href={obj.path}>
                                <li
                                  onClick={() => {
                                    setselectedTab(obj.title);
                                    // router.push(obj.path);
                                  }}
                                  key={index}
                                  className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green navbar-items ${
                                    pathname === obj.path
                                      ? "font-semibold text-urban-green underline"
                                      : "font-light text-urban-black"
                                  }`}
                                >
                                  {obj.title}
                                </li>
                              </Link>
                            </>
                          )}

                        {obj.title == "Travel" && (
                          <>
                            <div className="travelersClub-tab">
                              <div
                                className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green ${
                                  selectedTab === obj.title
                                    ? "font-semibold text-urban-green navbar-items"
                                    : "font-light text-urban-black navbar-items"
                                }`}
                                onClick={() => {
                                  setselectedTab(obj.title);
                                }}
                                // onMouseEnter={() => {
                                //   setisTravelsDropOpen(true);
                                // }}
                              >
                                {/* {travelersPage?travelersPage: obj.title} */}
                                Travel
                              </div>
                              <div
                                className="arrow-down"
                                onClick={() =>
                                  setisTravelsDropOpen(!isTravelsDropOpen)
                                }
                              >
                                <KeyboardArrowDownIcon
                                  sx={{ fontSize: "1.4rem" }}
                                />
                              </div>
                            </div>

                            {isTravelsDropOpen && (
                              <TravelsDesktopDrop
                                isTravelsDropOpen={isTravelsDropOpen}
                                setisTravelsDropOpen={setisTravelsDropOpen}
                                settravelersPage={settravelersPage}
                              />
                            )}
                          </>
                        )}

                        {obj.title == "Cards" && (
                          <>
                            <div className="travelersClub-tab">
                              <div
                                className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green ${
                                  selectedTab === obj.title
                                    ? "font-semibold text-urban-green underline navbar-items"
                                    : "font-light text-urban-black navbar-items"
                                }`}
                                onClick={() => {
                                  setselectedTab(obj.title);
                                  router.push("/urban-card");
                                }}
                                // onMouseEnter={() => {
                                //   setisCardsDropOpen(true);
                                // }}
                              >
                                Cards
                              </div>
                              <div
                                className="arrow-down"
                                onClick={() =>
                                  setisCardsDropOpen(!isCardDropOpen)
                                }
                              >
                                <KeyboardArrowDownIcon
                                  sx={{ fontSize: "1.4rem" }}
                                />
                              </div>
                            </div>

                            {isCardDropOpen && (
                              <CardDesktopDrop
                                isCardDropOpen={isCardDropOpen}
                                setCardPage={() => ""}
                                setisCardDropOpen={setisCardsDropOpen}
                              />
                            )}
                          </>
                        )}

                        {obj.title == "Company" && (
                          <>
                            <div className="travelersClub-tab">
                              <div
                                className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green ${
                                  selectedTab === obj.title
                                    ? "font-semibold text-urban-green underline navbar-items"
                                    : "font-light text-urban-black navbar-items"
                                }`}
                                onClick={() => {
                                  setselectedTab(obj.title);
                                  router.push(obj.path);
                                }}
                                // onMouseEnter={() => {
                                //   setisCompanyDropOpen(true);
                                // }}
                              >
                                {/* {travelersPage?travelersPage: obj.title} */}
                                Company
                              </div>
                              <div
                                className="arrow-down"
                                onClick={() =>
                                  setisCompanyDropOpen(!isCompanyDropOpen)
                                }
                              >
                                <KeyboardArrowDownIcon
                                  sx={{ fontSize: "1.4rem" }}
                                />
                              </div>
                            </div>

                            {isCompanyDropOpen && (
                              <CompanyDesktopDrop
                                isCompanyDropOpen={isCompanyDropOpen}
                                setisCompanyDropOpen={setisCompanyDropOpen}
                                setCompanyPage={() => ""}
                              />
                            )}
                          </>
                        )}
                      </div>
                    ))}
                    <button className="p-2 h-8 2xl:h-10 flex justify-center items-center px-4 2xl:px-2 2xl:w-60 bg-black rounded-full text-white text-sm getcardBtn">
                      Get Card
                    </button>
                  </ul>
                </div>
                <div className="w-4/12 lg:w-2/12 flex justify-end items-center gap-4 navbar-btns navBarBtn_Container">
                  <button
                    className="px-10 py-3 2xl:px-5 2xl:py-2 rounded-md text-urban-green 2xl:text-base"
                    onClick={() => {
                      setopenModal(true);
                      setmodalName("login");
                    }}
                  >
                    Login
                  </button>
                  <PrimaryBtn
                    title="Register"
                    handlePress={() => {
                      setopenModal(true);
                      setmodalName("register");
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ---------- */}

            {/* mobile navbar */}
            <div className="lg:hidden py-2 relative">
              <div className="flex flex-row items-center justify-between px-4">
                <div>
                  <Image src="/logo.svg" width={80} height={35} alt="" />
                </div>
                <div></div>
                <div
                  onClick={() => {
                    setisOpen(!isOpen);
                    if (setMobileVisibility) {
                      setMobileVisibility(!isOpen);
                    }
                  }}
                >
                  <MenuIcon />
                </div>
              </div>

              <dialog
                open={isOpen}
                className="bg-white rounded-xl p-3 w-full top-16  overflow-scroll"
              >
                <div className="flex flex-col justify-between h-[84vh] ">
                  <div>
                    {tabsData.map((tab, index: number) => (
                      <div key={index}>
                        {tab.title !== "Travels" &&
                          tab.title !== "Card" &&
                          tab.title !== "Company" && (
                            <div
                              className={`flex items-center gap-1 justify-center py-3 border ${
                                index > 0
                                  ? "border-t-gray-100 border-l-0 border-r-0"
                                  : ""
                              }`}
                              onClick={() => {
                                setselectedTab(tab.title);
                                router.push(tab.path);
                                setisOpen(false);
                              }}
                            >
                              {tab.icon && selectedTab == tab.title && (
                                <div>{tab.icon}</div>
                              )}
                              <div className="cursor-pointer">
                                <span
                                  className={`${
                                    selectedTab == tab.title &&
                                    "font-bold text-urban-green"
                                  }`}
                                >
                                  {tab.title}
                                </span>
                              </div>
                            </div>
                          )}

                        {tab.title == "Travels" && isOpen && (
                          <div className="mt-2 relative py-2 flex justify-center">
                            <div className="relative flex justify-center gap-x-2">
                              <div
                                className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green ${
                                  selectedTab === tab.title
                                    ? "font-semibold text-urban-green underline"
                                    : " text-urban-black"
                                }`}
                              >
                                Travelers
                              </div>
                              <div
                                className="arrow-down"
                                onClick={() => {
                                  setisTravelsDropOpen(!isTravelsDropOpen);
                                }}
                              >
                                <KeyboardArrowDownIcon
                                  sx={{ fontSize: "1.4rem" }}
                                />
                              </div>
                            </div>

                            {isTravelsDropOpen && (
                              <TravelsDesktopDrop
                                isTravelsDropOpen={isTravelsDropOpen}
                                setisTravelsDropOpen={(value: any) => {
                                  setisTravelsDropOpen(value);
                                  setisOpen(false);
                                }}
                                settravelersPage={settravelersPage}
                              />
                            )}
                          </div>
                        )}

                        {tab.title == "Card" && isOpen && (
                          <div className="mt-2 relative  py-2 flex justify-center">
                            <div className="relative flex justify-center gap-x-2">
                              <div
                                className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green ${
                                  selectedTab === tab.title
                                    ? "font-semibold text-urban-green underline"
                                    : " text-urban-black"
                                }`}
                              >
                                Card
                              </div>
                              <div
                                className="arrow-down"
                                onClick={() =>
                                  setisCardsDropOpen(!isCardDropOpen)
                                }
                              >
                                <KeyboardArrowDownIcon
                                  sx={{ fontSize: "1.4rem" }}
                                />
                              </div>
                            </div>

                            {isCardDropOpen && (
                              <CardDesktopDrop
                                isCardDropOpen={isCardDropOpen}
                                setCardPage={() => ""}
                                setisCardDropOpen={(value: any) => {
                                  setisCardsDropOpen(value);
                                  setisOpen(false);
                                }}
                              />
                            )}
                          </div>
                        )}

                        {tab.title == "Company" && isOpen && (
                          <div className="mt-2 relative border border-slate-100 py-2 flex justify-center">
                            <div className="relative flex justify-center gap-x-2">
                              <div
                                className={` cursor-pointer lg:text-base xl:text-base 2xl:text-base hover:underline hover:text-urban-green ${
                                  selectedTab === tab.title
                                    ? "font-semibold text-urban-green underline"
                                    : " text-urban-black"
                                }`}
                              >
                                Company
                              </div>
                              <div
                                className="arrow-down"
                                onClick={() =>
                                  setisCompanyDropOpen(!isCompanyDropOpen)
                                }
                              >
                                <KeyboardArrowDownIcon
                                  sx={{ fontSize: "1.4rem" }}
                                />
                              </div>
                            </div>

                            {isCompanyDropOpen && (
                              <CompanyDesktopDrop
                                isCompanyDropOpen={isCompanyDropOpen}
                                setisCompanyDropOpen={(value: any) => {
                                  setisCompanyDropOpen(value);
                                  setisOpen(false);
                                }}
                                setCompanyPage={() => ""}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="mt-4">
                      <div className="flex items-center gap-2 justify-center">
                        <button className="w-1/2 bg-green-100 rounded py-3">
                          Login
                        </button>
                        <button className="py-3 w-1/2 bg-urban-green text-white rounded">
                          Register
                        </button>
                      </div>
                      <div>
                        <h2 className="text-center mt-6">
                          <span className="font-bold text-xl">Urban App</span>{" "}
                          <span className="p-1 italic font-light">
                            Available on Web and App
                          </span>
                        </h2>
                        <div className="flex justify-center items-center gap-2 mt-2">
                          <Image
                            src="/assets/appstoreIcon.svg"
                            width={140}
                            height={28}
                            alt=""
                            className=""
                          />
                          <Image
                            src="/assets/playstoreIcon.svg"
                            width={140}
                            height={28}
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-urban-black p-3 w-full py-4 flex justify-between gap-8">
                    <div className="w-1/2">
                      <Image
                        src="/assets/mobilefooterLogo.svg"
                        width={80}
                        height={28}
                        alt=""
                        className=""
                      />
                      <p className="mt-2 italic font-light text-gray-100 text-[0.6rem]">
                        Urban is an enabler of their inter-state travel needs
                        and experience
                      </p>
                    </div>
                    <div className="w-1/2">
                      <div className="flex gap-2 mb-4">
                        <Image
                          src="/assets/MFooterEmailIcon.svg"
                          width={32}
                          height={28}
                          alt=""
                          className=""
                        />
                        <div className="text-white text-[0.6rem]">
                          <p>Email</p>
                          <p>contact@urban.com</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Image
                          src="/assets/MCallIcon.svg"
                          width={32}
                          height={28}
                          alt=""
                          className=""
                        />
                        <div className="text-white text-[0.6rem]">
                          <p>Call Us</p>
                          <p>(00) 112 365 489</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>

            {/* ---------- */}
          </div>
        </div>
      )}
      {modalName === "login" && openModal && (
        <LoginDialog isOpen={openModal} setisopen={setopenModal} />
      )}

      {modalName === "register" && openModal && (
        <RegisterDialog isOpen={openModal} setisopen={setopenModal} />
      )}
    </>
  );
}
