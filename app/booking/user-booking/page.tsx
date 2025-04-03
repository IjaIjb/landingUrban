"use client";
import Footer from "@/app/shared/components/footer/footer";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import "./user-booking.scss";
import { searchBooking } from "@/app/service/bookings.service";
import { toast } from "react-toastify";
import useDebounce from "@/app/shared/hooks/useDebounce";
import Spinner from "@/app/shared/components/Spinner";
import { toPng } from "html-to-image";
import { ITicket } from "@/app/shared/models/ticket-model";
import { formatDate } from "@/app/shared/utils/utils";
import { calculateVAT } from "@/app/shared/utils/helperfunction";

export default function UserBooking() {
  const [isloading, setisloading] = useState(false);
  const [bookingDetails, setbookingDetails] = useState<ITicket[]>([]);
  const [mergedParams, setMergedParams] = useState<any>({
    query: "",
  });
  const debouncedParams = useDebounce(mergedParams, 900);

  const fetchBooking = (e: any) => {
    e.preventDefault();
    const queryApi = () => {
      setisloading(true);
      searchBooking({ ...mergedParams }).subscribe({
        next: (res) => {
          if (res) {
            console.log("===>trips", res);
            setbookingDetails(res);
            setisloading(false);
          } else {
            toast.error("Search failed!");
            setbookingDetails([]);
          }
        },
        error: (msg: any) => {
          toast.error(msg.message);
          setisloading(false);
        },
        complete: () => {
          setisloading(false);
        },
      });
    };

    if (mergedParams.query.length) {
      queryApi();
    }
  };

  const Ticket = ({ obj }: any) => {
    const divRef = useRef(null);

    const handlePrint = async () => {
      try {
        if (!divRef.current) return;

        // Convert the <div> to an image (PNG format)
        const imageUrl = await toPng(divRef.current);

        // Check if Web Share API supports files
        if (navigator.canShare && navigator.canShare({ files: [] })) {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const file = new File([blob], "shared-image.png", {
            type: blob.type,
          });

          navigator
            .share({
              files: [file],
              title: "Shared Content",
              text: "Check out this content!",
            })
            .then(() => "")
            .catch((error) => "");
        } else {
          const link = document.createElement("a");
          link.href = imageUrl;
          const printWindow = window.open("", "_blank");
          if (printWindow) {
            // Create an HTML structure in the new tab
            printWindow.document.write(`
              <html>
                <head>
                  <title>Print Image</title>
                </head>
                <body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;">
                  <img src="${imageUrl}" style="max-width: 100%; height: auto;" />
                </body>
              </html>
            `);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print(); //
          }
        }
      } catch (error) {
        console.error("Error converting div to image:", error);
      }
    };

    const handleShare = async () => {
      try {
        if (!divRef.current) return;

        // Convert the <div> to an image (PNG format)
        const imageUrl = await toPng(divRef.current);

        // Check if Web Share API supports files
        if (navigator.canShare && navigator.canShare({ files: [] })) {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const file = new File([blob], "shared-image.png", {
            type: blob.type,
          });

          navigator
            .share({
              files: [file],
              title: "Shared Content",
              text: "Check out this content!",
            })
            .then(() => console.log("Image shared successfully!"))
            .catch((error) => console.error("Error sharing image:", error));
        } else {
          // If Web Share API is not supported, download the image as a fallback
          const link = document.createElement("a");
          link.href = imageUrl;
          link.download = "shared-image.png";
          link.click();
        }
      } catch (error) {
        console.error("Error converting div to image:", error);
      }
    };

    return (
      <div className="w-full mt-4 bg-white" ref={divRef}>
        <div className="w-full flex flex-col justify-start items-center h-28 overflow-hidden relative bg-cover">
          <Image
            src="/assets/bookingdetailsbg.png"
            width={300}
            height={140}
            alt=""
            className="w-full  object-cover object-center"
          />
          <div className="bg-transparent w-full absolute h-28 flex flex-col justify-center items-center gap-2">
            <div className="bg-white rounded-lg p-2">
              <Image
                src="/assets/footer-logo.svg"
                alt=""
                width={20}
                height={120}
                className="w-12 xl:w-20"
              />
            </div>
            <h3 className="text-white mb-3 lg:mb-0">TRIP RECEIPT</h3>
          </div>
        </div>

        <div className="pt-4 pb-10 px-3 xl:px-6 flex flex-col gap-1 shadow">
          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Booking Code
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.uniqueID.toUpperCase()}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Booking Reference
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.transaction.uniqueID.toUpperCase()}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Passenger’s Name
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.user.individual.firstname.toUpperCase()}{" "}
              {obj.user.individual.lastname.toUpperCase()}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Passenger’s Phone No.
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.user.individual.phone}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Passenger’s Email.
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.user.email}
            </span>
          </div>

          <div className="my-2 flex flex-col gap-1">
            <p className=" font-bold">Park Details</p>
            <div className="w-full flex justify-between items-center">
              <span className="font-light text-base block w-1/2">
                Name Of Park
              </span>
              <span className="font-light text-base text-urban-green block w-1/2">
                {obj.trip.departure.city ?? "---"}
              </span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="font-light text-base block w-1/2">
                Park Address
              </span>
              <span className="font-light text-base text-urban-green block w-1/2">
                {obj.trip.departure.address ?? "---"}
              </span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="font-light text-base block w-1/2">
                Telephone No
              </span>
              <span className="font-light text-base text-urban-green block w-1/2">
                {obj.trip.departure.phone ?? "---"}
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Departure City
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.trip.departure.locationCity.name ?? "---"}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Departure Time:
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.trip.departureTime}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Destination City:
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.trip.finalBusStop.name ?? "---"}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">Trip Code:</span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.trip.uniqueID.toUpperCase()}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Price per seats:{" "}
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              ₦ {obj.trip.cost}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">Date</span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {formatDate(obj.trip.departureDate)}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Booking Time
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {formatDate(obj.createdAt)}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Seat Number
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              {obj.seatNumber}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">VAT</span>
            <span className="font-light text-base text-urban-green block w-1/2">
              ₦ {calculateVAT(parseInt(obj.trip.cost) * 1).vat}
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">
              Stamp Authentication
            </span>
            <span className="font-light text-base text-urban-green block w-1/2">
              ₦ 0.00
            </span>
          </div>

          <div className="w-full flex justify-between items-center">
            <span className="font-light text-base block w-1/2">Total Fare</span>
            <span className="font-light text-base text-urban-green block w-1/2">
              ₦ {calculateVAT(parseInt(obj.trip.cost) * 1).total}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 xl:px-6 mt-3">
          <div
            className="w-1/2 flex items-center h-12 justify-center bg-urban-green text-white rounded-md gap-2 cursor-pointer"
            onClick={handleShare}
          >
            Share Receipt
            <ShareOutlinedIcon />
          </div>
          <div
            className="w-1/2 flex items-center h-12 justify-center border border-urban-green bg-white text-urban-green rounded-md gap-2 cursor-pointer"
            onClick={handlePrint}
          >
            Print Receipt
            <LocalPrintshopOutlinedIcon />
          </div>
        </div>
      </div>
    );
  };

  // useEffect(() => {
  //   fetchBooking();
  // }, [debouncedParams]);

  return (
    <main className="-mt-40">
      <section className="min-h-80 w-11/12 lg:w-11/12 lg:px-6 m-auto pb-20 mt-28 lg:mt-60 2xl:w-10/12">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold font-creato">
              Check you booking here
            </h2>
            <div className="w-full lg:w-10/12  mt-10 pb-10">
              <form className="check-booking-form" onSubmit={fetchBooking}>
                <div className="flex flex-col gap-2">
                  <label className="font-light">
                    Enter your booking code here
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      value={mergedParams.query}
                      className="px-2 w-8/12 border border-gray-400 h-10 rounded-lg"
                      onChange={(event) => {
                        setMergedParams((prev: any) => {
                          return { ...prev, query: event.target.value.trim() };
                        });
                      }}
                    />
                    <button
                      className="py-2 rounded-lg px-6 bg-urban-green text-white"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>

              {/* ----- booking details container */}
              <div>
                {isloading ? (
                  <div className="py-20 flex justify-center items-center">
                    <Spinner isLoading />
                  </div>
                ) : (
                  <>
                    {bookingDetails.length ? (
                      <div>
                        {bookingDetails[0].transaction.status === "PAID" ? (
                          <div>
                            {bookingDetails.map((obj: any, index: number) => (
                              <Ticket obj={obj} key={index} />
                            ))}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <div className="w-full py-20 text-center">
                        No record found!
                      </div>
                    )}

                    {bookingDetails.length &&
                    bookingDetails[0].transaction.status === "UNPAID" ? (
                      <div className="my-4 p-4 lg:px-10 lg:py-6 text-orange-400 bg-[#fff1d7]">
                        Your payment is currently pending, please check back
                        later
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="flex justify-end">
              <div className="h-[50rem] w-8/12 relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/bookingslide.svg"
                  alt=""
                  width={20}
                  height={120}
                  className=" w-full object-cover object-center rounded-lg"
                />
                <div className="bg-transparent w-full h-[50rem] absolute top-0">
                  <div className="h-full">
                    <h2 className="px-4 text-5xl text-white text-center w-8/12 m-auto mt-32 mb-28">
                      Advertise with us
                    </h2>

                    <div className="flex justify-center p-4 mt-40 mb-52">
                      <button className="border-2 bg-transparent border-white rounded-full p-4 px-20 text-white font-light booking-sendmail-btn">
                        Send us mail today
                      </button>
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-urban-lightGreen rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
