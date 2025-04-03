"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { nigeriaStates } from "../../utils/data";
import { useRouter } from "next/navigation";
import { getVehicleTypes } from "@/app/service/auth.service";

const today = new Date().toISOString().split("T")[0];
const initialData = {
  departureState: "abia",
  destinationState: "lagos",
  travelDate: today,
  numberOfPassagers: 1,
};
export default function BookTripForm() {
  const [userData, setuserData] = useState(initialData);
  const [isformValid, setisformValid] = useState(false);

  const router = useRouter();
  const handleForm = (e: any) => {
    e.preventDefault();
    localStorage.setItem("firstStep", JSON.stringify(userData));
    router.push("/booking/available-trips");
  };

  const handleChange = (value: any, field: string) => {
    setuserData((prev: any) => {
      return { ...prev, [field]: value };
    });
  };

  const handleValidation = () => {
    const { departureState, destinationState, travelDate, numberOfPassagers } =
      userData;

    const isValid =
      departureState.length > 0 &&
      destinationState.length > 0 &&
      travelDate.length > 0 &&
      numberOfPassagers > 0;
    setisformValid(isValid);
  };

  const fetchVehicleTypes = (payload?: any) => {
    const queryApi = () => {
      getVehicleTypes({}).subscribe({
        next: (res) => {
          if (res) {
            if (res.data?.length) {
              const vehicletypes = res.data.map((obj: any) => obj.category);
              console.log("===>vehicle types", vehicletypes);
              localStorage.setItem(
                "vehicleTypes",
                JSON.stringify(vehicletypes)
              );
            }
          } else {
          }
        },
        error: () => {},
        complete: () => {},
      });
    };

    queryApi();
  };

  useEffect(() => {
    handleValidation();
  }, [userData]);

  useEffect(() => {
    fetchVehicleTypes();
    router.prefetch("/booking/available-trips");
  }, []);

  return (
    <form className="px-2 md:px-3 lg:px-2 w-full mt-8" onSubmit={handleForm}>
      <div className="flex items-start gap-2 w-full">
        <Image
          src="./assets/timline.svg"
          width={10}
          height={40}
          alt=""
          className="w-6 lg:w-[1.45rem] xl:w-6 2xl:w-[1.44rem]"
        />
        <div className="w-full">
          <div className="flex justify-between w-full gap-4 -mt-1">
            <div className="w-1/2">
              <label className="text-base font-light">Departure State</label>
              <div className="mt-3">
                <Select
                  defaultValue="abia"
                  indicator={<KeyboardArrowDown />}
                  sx={{ height: "46px", fontSize: "0.8rem" }}
                  value={userData.departureState}
                  onChange={(
                    event: React.SyntheticEvent | null,
                    newValue: string | null
                  ) => handleChange(newValue, "departureState")}
                  slotProps={{
                    listbox: {
                      sx: {
                        maxHeight: "200px",
                      },
                    },
                  }}
                >
                  {nigeriaStates.map((state, index: number) => (
                    <Option
                      value={state.value}
                      sx={{ fontSize: "0.8rem" }}
                      key={index}
                    >
                      {state.title}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-base font-light">Travel Date</label>
              <div className="mt-3 w-full">
                <Input
                  type="date"
                  value={userData.travelDate}
                  placeholder="Type in here…"
                  // min={today}
                  sx={{
                    height: "46px",
                    fontSize: "0.8rem",
                    "--Input-focusedInset": "var(--any, )",
                    "--Input-focusedThickness": "0.25px",
                    "--Input-focusedHighlight": "#15560c",
                    "&:focus-outside": {
                      borderColor: "#000000",
                    },
                    ":focus": "#000",
                  }}
                  onChange={(e: any) =>
                    handleChange(e.target.value, "travelDate")
                  }
                />
              </div>
            </div>
          </div>

          <div className=" w-full mt-[3.4rem] lg:mt-12">
            <label className="text-base font-light">Destination State</label>
            <div className="mt-3">
              <Select
                defaultValue="abia"
                indicator={<KeyboardArrowDown />}
                sx={{ height: "46px", fontSize: "0.8rem" }}
                slotProps={{
                  listbox: {
                    sx: {
                      maxHeight: "200px",
                    },
                  },
                }}
                value={userData.destinationState}
                onChange={(
                  event: React.SyntheticEvent | null,
                  newValue: string | null
                ) => handleChange(newValue, "destinationState")}
              >
                {nigeriaStates.map((state, index: number) => (
                  <Option
                    value={state.value}
                    sx={{ fontSize: "0.8rem" }}
                    key={index}
                  >
                    {state.title}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mt-6">
        <label className="text-base font-light">Number of passenger</label>
        <div className="mt-3">
          <Select
            indicator={<KeyboardArrowDown />}
            sx={{ height: "46px", fontSize: "0.8rem" }}
            slotProps={{
              listbox: {
                sx: {
                  maxHeight: "200px",
                },
              },
            }}
            value={userData.numberOfPassagers}
            onChange={(
              event: React.SyntheticEvent | null,
              newValue: number | null
            ) => handleChange(newValue, "numberOfPassagers")}
          >
            {[1, 2, 3, 4, 5].map((seat, index: number) => (
              <Option value={seat} sx={{ fontSize: "0.8rem" }} key={index}>
                {seat}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-8 flex items-center w-full gap-4">
        <button
          disabled={!isformValid}
          className="w-1/2 rounded-md py-3 px-4 border-none bg-urban-green text-sm text-white lg:text-sm xl:text-base disabled:bg-gray-400 disabled:text-gray-200"
        >
          Continue
        </button>

        <div
          className="w-1/2 rounded-md py-3 px-2 border border-urban-green text-urban-black text-sm lg:text-sm xl:text-base text-center cursor-pointer"
          onClick={() => router.push("/booking/user-booking")}
        >
          Check My Booking(s)
        </div>
      </div>
    </form>
  );
}
