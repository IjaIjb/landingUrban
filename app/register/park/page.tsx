"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./registerPark.scss";
import { addIndividual } from "@/app/service/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import Link from "next/link";

const Page = () => {
  // const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordError, setPassordError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state manually
  const [openM, setOpen] = useState(false);

  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  // useEffect(() => {
  //   onOpenModal();
  // }, []);
  const [confirmPassword, setShowConfirmPassword] = useState(false);

  const initialData = {
    firstname: "",
    lastname: "",
    phone: "",
    city: "",
    avatar: "",
    /** Password of the user */
    password: "",
    /** Email of the user */
    email: "",
    role: "USER",
    userType: "PARK",
    userCategory: "PASSENGERS",
    documents: [
      { name: "", expiryDate: "", image: null }, // Ensure a default document exists
    ],
  };

  const validation = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    city: Yup.string().required("City is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be minimum of 6 characters")
      .max(255)
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    // documents: Yup.array().of(
    //   Yup.object().shape({
    //     name: Yup.string().required("Document name is required"),
    //     expiryDate: Yup.date().required("Expiry date is required"),
    //     image: Yup.mixed().required("Document upload is required"),
    //   })
    // ),
  });

  const onSubmit = async (values: any) => {
    setIsLoading(true); // Set loading state
    console.log(values);
    try {
      const response: any = await addIndividual(values); // Using http2
      console.log("Added individual:", response);
      setIsLoading(false); // Set loading state
      toast.success(response?.message);
      onOpenModal();
    } catch (error) {
      console.error("Error adding individual:", error);
      toast.error("An error occured");
    }
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-14 items-center w-full h-full ">
        {/* Left Section */}
        <div className="w-full z-10 h-screen lg:block hidden relative">
          <div className="absolute h-screen z-10 object-cover w-full rounded-xl">
            {/* <img
              className="h-full z-10 object-cover w-full"
              src="/onboarding/transport-concept-parked-vehicles 1.svg"
              alt=""
            /> */}

            <Image
              className="h-full z-10 object-cover w-full"
              src="/assets/register/parkBg.jpg"
              alt="Descriptive alt text"
              layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-center relative z-20 h-full">
            <div className="">
              <div className="bg-[#036E03]/[30%] rounded-t-[25px]">
                <div className="flex justify-center pt-14 pb-8">
                  <Image
                    className=""
                    src="/urban 1.png"
                    alt="image"
                    width={140}
                    height={140}
                    priority
                  />
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#036E03] md:pl-7 md:pr-6 md:pt-4 lg:pt-6 md:pb-10 lg:pb-14 rounded-b-[25px]">
                  <Image
                    className="h-full object-cover w-full"
                    src="/pattern.png"
                    alt="Descriptive alt text"
                    layout="fill"
                    // objectFit="cover"
                  />
                  <h4 className="text-white text-center md:text-[48px] font-[700] text-[36px] leading-[55px] max-w-[400px]">
                    Urban Experience Centre (UEC)
                  </h4>
                  <div className="flex py-10 justify-center">
                    <Image
                      className=""
                      src="/urban single logo.svg"
                      alt="image"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>

                  <div className="flex items-center gap-4 justify-center">
                    <Image
                      className=""
                      src="/assets/register/blip.svg"
                      alt="image"
                      width={40}
                      height={40}
                      priority
                    />
                    <h5 className="text-[19.85px] text-white font-[200]">
                      Powered by <span className="font-[700]">BLIP LLC</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full scrollbar-hide lg:w-[90%] lg:overflow-y-auto">
          {/* <div className="lg:hidden block">
            <div className="w-full z-10   relative">
              <div className="absolute h-full z-10 object-cover w-full rounded-xl">
            
                <Image
                  className="h-full  object-cover w-full"
                  src="/assets/register/transport-concept-parked-vehicles 1.svg"
                  alt="Descriptive alt text"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlay h-full absolute inset-0 bg-[#036E03]/[50%] "></div>
              </div>
              <div className="flex relative z-20 h-full justify-center text-center">
                <div className="flex justify-center text-center pt-14 pb-14">
                  <Image
                    className=""
                    src="/urban 1.png"
                    alt="image"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="px-8   ">
            {/* <div className="sticky top-0 pt-[40px] z-20 bg-white">
              {showScreen === 1 ? (
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                  </button>

                  <div className="flex items-center gap-2">
                    <h6>Step 1</h6>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
                    </div>
                  </div>
                </div>
              ) : showScreen === 2 ? (
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowScreen(1)}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                  </button>

                  <div className="flex items-center gap-2">
                    <h6>Step 2</h6>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
                    </div>
                  </div>
                </div>
              ) : showScreen === 3 ? (
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowScreen(2)}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                  </button>

                  <div className="flex items-center gap-2">
                    <h6>Step 3</h6>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full lg:w-[40%]">
                  <button
                    type="button"
                    onClick={() => setShowScreen(3)}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                  </button>

                  <div className="flex items-center gap-2">
                    <h6>Step 3</h6>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#6CC56C]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
            <div className="md:h-full h-full scrollbar-hide overflow-y-scroll">
              {/* {showScreen === 1 ? ( */}
              <div className="flex flex-col">
                <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[40px] font-[800]">
                  Register as Park Owner
                </h5>
                {/* <h3 className="text-[#1A1A1A] text-[15px] lg:text-[20px] font-[400]">
                  Register in easy steps
                </h3> */}
              </div>
              {/* ) : showScreen === 2 ? (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Upload Profile Picture
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[20px] font-[300]">
                    Upload a cleer picture of yourself
                  </h3>
                </div>
              ) : showScreen === 3 ? (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Add a Vehicle
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[20px] font-[300]">
                    Add at least one vehicle from your fleet
                  </h3>
                </div>
              ) : (
                <div className="flex flex-col">
                  <h5 className="text-[#121212] text-[26px] md:text-[34px] lg:text-[36px] font-[800]">
                    Upload Vehicle Documents
                  </h5>
                  <h3 className="text-[#1A1A1A] text-[15px] lg:text-[20px] font-[300]">
                    Add at least one vehicle document for your fleet
                  </h3>
                </div>
              )} */}

              <div className="flex flex-col  gap-8">
                <Formik
                  initialValues={initialData}
                  validationSchema={validation}
                  onSubmit={onSubmit}
                >
                  {({  }) => (
                    <Form className="w-full  mt-6 mb-6 flex flex-col justify-between">
                      <div className="">
                        <div className="grid md:grid-cols-2 gap-3 w-full">
                          <div className=" mb-3 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px]  font-[500] "
                              htmlFor="firstname"
                            >
                              First Name
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="firstname"
                              type="text"
                              id="firstname"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="firstname" />
                            </p>
                          </div>
                          <div className=" mb-3 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px]  font-[500] "
                              htmlFor="lastname"
                            >
                              Last Name
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="lastname"
                              type="text"
                              id="lastname"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="lastname" />
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 w-full">
                          <div className=" mb-3 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px]  font-[500] "
                              htmlFor="phone"
                            >
                              Phone Number
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="phone"
                              type="text"
                              id="phone"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="phone" />
                            </p>
                          </div>
                          <div className=" mb-3 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px]  font-[500] "
                              htmlFor="email"
                            >
                              E-mail
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="email"
                              type="email"
                              id="email"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="email" />
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3 w-full">
                          <div className=" mb-3 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px]  font-[500] "
                              htmlFor="address"
                            >
                              Address
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="address"
                              type="text"
                              id="address"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="address" />
                            </p>
                          </div>
                          <div className=" mb-3 relative">
                            <label
                              className=" text-[#2B2C2B] text-[16px]  font-[500] "
                              htmlFor="city"
                            >
                              City
                            </label>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="city"
                              type="text"
                              id="city"
                              placeholder=""
                            />
                            <p className="text-red-700 text-xs mt-1 ">
                              <ErrorMessage name="city" />
                            </p>
                          </div>
                        </div>

                        <div className=" mb-3 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px]  font-[500] "
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="password"
                              id="password"
                              type={!showPassword ? "password" : "text"}
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowPassword(() => !showPassword)
                              }
                              className={`absolute right-4 top-[43px]`}
                            >
                              {!showPassword ? (
                           <svg width="24" height="15" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path> </g></svg>
                              ) : (
                                <svg width="22" height="12" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0237 7.5C23.0237 7.14892 22.8315 6.90884 22.4469 6.42868C20.7871 4.35617 16.7352 0 12 0C7.26484 0 3.21294 4.35617 1.55313 6.42868C1.16859 6.90884 0.976318 7.14892 0.976318 7.5C0.976318 7.85108 1.16859 8.09116 1.55313 8.57132C3.21293 10.6438 7.26484 15 12 15C16.7352 15 20.7871 10.6438 22.4469 8.57132C22.8315 8.09116 23.0237 7.85108 23.0237 7.5ZM12 11.25C14.0711 11.25 15.75 9.57107 15.75 7.5C15.75 5.42893 14.0711 3.75 12 3.75C9.92896 3.75 8.25003 5.42893 8.25003 7.5C8.25003 9.57107 9.92896 11.25 12 11.25Z" fill="black"/>
                                </svg>
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="password" />
                          </p>
                        </div>
                        {/* {passwordError && (
  <div className="text-red-500 text-xs mt-1">{passwordError}</div>
)} */}
                        <div className=" mb-3 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px]  font-[500] "
                            htmlFor="confirmPassword"
                          >
                            Retype Password
                          </label>
                          <div>
                            <Field
                              className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                              name="confirmPassword"
                              id="confirmPassword"
                              type={
                                !confirmPassword ? "password" : "text"
                              }
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowConfirmPassword(() => !confirmPassword)
                              }
                              className={`absolute right-4 top-[43px]`}
                            >
                              {!confirmPassword ? (
                                <svg width="24" height="15" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path> </g></svg>
                              ) : (
                                <svg width="22" height="12" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0237 7.5C23.0237 7.14892 22.8315 6.90884 22.4469 6.42868C20.7871 4.35617 16.7352 0 12 0C7.26484 0 3.21294 4.35617 1.55313 6.42868C1.16859 6.90884 0.976318 7.14892 0.976318 7.5C0.976318 7.85108 1.16859 8.09116 1.55313 8.57132C3.21293 10.6438 7.26484 15 12 15C16.7352 15 20.7871 10.6438 22.4469 8.57132C22.8315 8.09116 23.0237 7.85108 23.0237 7.5ZM12 11.25C14.0711 11.25 15.75 9.57107 15.75 7.5C15.75 5.42893 14.0711 3.75 12 3.75C9.92896 3.75 8.25003 5.42893 8.25003 7.5C8.25003 9.57107 9.92896 11.25 12 11.25Z" fill="black"/>
                                </svg>
                              )} 
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="confirmPassword" />
                          </p>
                        </div>
                      </div>

                      {/* {showScreen === 4 ? (
                        <div className="block w-full md:w-[70%]">
                          <button
                            // onClick={onSubmit}
                            type="submit"
                            // disabled={!selectedOption} // Disable button if no option is selected
                            className={`py-4 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
      }`}
                          >
                            Proceed
                          </button>
                        </div>
                      ) : ( */}
                      <div className="flex justify-between gap-5 mt-4 items-center">
                        <Link
                          href={"/"}
                          // onClick={
                          //   showScreen === 1
                          //     ? () => setShowScreen(2)
                          //     : showScreen === 2
                          //     ? () => setShowScreen(3)
                          //     : () => setShowScreen(4)
                          // }
                          // Disable button if no option is selected
                          className={`disabled:bg-gray-500  py-2 w-full px-6 border border-[#036E03]  text-[#036E03] text-center rounded-lg hover:text-white hover:bg-green-700
        }`}
                        >
                          Cancel
                        </Link>

                        <button
                          type="submit"
                          // onClick={
                          //   showScreen === 1
                          //     ? () => setShowScreen(2)
                          //     : showScreen === 2
                          //     ? () => setShowScreen(3)
                          //     : () => setShowScreen(4)
                          // }
                          disabled={isLoading} // Disable button if no option is selected
                          className={`disabled:bg-gray-500  py-2 w-full px-6 bg-[#036E03] text-white rounded-lg  hover:bg-green-700
        }`}
                        >
                          {isLoading ? <LoadingSpinner /> : "Proceed"}
                        </button>
                      </div>
                      {/* )} */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            {/* Proceed Button */}
            {/* <button
              onClick={handleProceed}
              disabled={!selectedOption} // Disable button if no option is selected
              className={`py-4 px-6 bg-[#036E03] w-full mb-8 text-white rounded-lg ${
                !selectedOption
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-700"
              }`}
            >
              Proceed
            </button> */}
          </div>
        </div>
        <Modal
          classNames={{
            modal:
              "rounded-[16px] overflow-visible relative bg-white shadow-lg p-8",
          }}
          open={openM}
          onClose={() => {}} // Disables close behavior
          closeOnOverlayClick={false} // Disables closing by clicking the overlay
          showCloseIcon={false} // Hides the close button
          center
        >
          <div className="md:w-[500px] flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-[#6CC56C1A] py-3 px-4 rounded-[10px] ">
              <h4 className="text-[#036E03] text-[14px] md:text-[18px] font-[400] text-start ">
                Congratulations, your registration is successful. Our team will
                contact you shortly.
              </h4>
            </div>

            <div className="flex gap-3 items-center">
              <Image
                className=""
                src="/fi-rr-magic-wand.svg"
                alt="image"
                width={23}
                height={23}
                priority
              />
              <h4 className="text-[16px] md:text-[18px] font-[400] text-[#1A1A1A] ">
                Reach out to our Customer Care?
              </h4>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-[#036E03] text-[12px] md:text-[14px] font-[400] ">
                CALL US ON:
              </h5>
              <div className="flex gap-3 items-center">
                <Image
                  className=""
                  src="/phoneM.svg"
                  alt="image"
                  width={23}
                  height={23}
                  priority
                />
                <h4 className="text-[#1A1A1A] tetx-[16px] md:text-[18px] font-[500] ">
                  +234 901 919 5291
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-[#036E03] text-[12px] md:text-[14px] font-[400] ">
                EMAIL US VIA:
              </h5>
              <div className="flex gap-3 items-center">
                <Image
                  className=""
                  src="/fi-rr-envelope.svg"
                  alt="image"
                  width={23}
                  height={23}
                  priority
                />
                <h4 className="text-[#1A1A1A] text-[16px] md:text-[18px] font-[500] ">
                  hello@urban.ng
                </h4>
              </div>
            </div>
            <Link
              href="/"
              className="py-2 px-8 md:px-[100px] bg-urban-green text-white rounded-md font-creato mt-8"
            >
              Return Home
            </Link>
          </div>
        </Modal>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Page;
