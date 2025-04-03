import Input from "@mui/joy/Input";
import React from "react";
import PassengerAccordion from "../passenger-accordion/passenger-accordion";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function PassengerRow({ obj, handleChange, index }: any) {
  return (
    <PassengerAccordion
      sn={obj.firstName}
      passengerName={`${obj.firstName} ${obj.surname}`}
      seatNumber="B1"
    >
      <div
        className="w-full flex flex-col gap-10"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className=" w-full mt-6">
          <label className="text-base font-light">Title</label>
          <div className="mt-3">
            <Select
              defaultValue={18}
              indicator={<KeyboardArrowDown />}
              sx={{ height: "48px", fontSize: "0.8rem" }}
              slotProps={{
                listbox: {
                  sx: {
                    maxHeight: "200px",
                  },
                },
              }}
              value={obj.title}
              onChange={(
                event: React.SyntheticEvent | null,
                newValue: string | null
              ) => {
                handleChange(index, "title", newValue);
              }}
            >
              {["Mr", "Mrs", "Miss", "Sir"].map((seat, index: number) => (
                <Option value={seat} sx={{ fontSize: "0.8rem" }} key={index}>
                  {seat}
                </Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="w-full">
          <label className="text-base font-light">First Name</label>
          <div className="mt-3">
            <Input
              type="text"
              required
              placeholder="Type in here…"
              value={obj.firstName}
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
              onChange={(e: any) => {
                handleChange(index, "firstName", e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-base font-light">Last Name</label>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="Type in here…"
              required
              value={obj.surname}
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
              onChange={(e: any) => {
                handleChange(index, "surname", e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-base font-light">Phone Number</label>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="Type in here…"
              required
              value={obj.phoneNumber}
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
              onChange={(e: any) => {
                handleChange(index, "phoneNumber", e.target.value);
              }}
            />
          </div>
        </div>

        <div className=" w-full mt-2">
          <div className="w-full flex items-center justify-between">
            <label className="text-base font-light">Select Seat</label>
            <button
              className="bg-[#6cc56c29] text-urban-green py-2 px-4 text-xs rounded-lg"
              //   onClick={() => {
              //     setshowSeatModal(true);
              //     setcurrentPassager(index);
              //   }}
            >
              See seat Arrangement
            </button>
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder=""
              required
              disabled
              //   value={selectedSeat}
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
            />
          </div>
        </div>
      </div>
    </PassengerAccordion>
  );
}
