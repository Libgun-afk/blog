"use client";
import React from "react";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center pb-40">
      <div className="w-[624px] h-[163px] flex flex-col gap-5">
        <h1 className="font-semibold text-4xl font-sans">Contact Us</h1>
        <div className="font-normal text-base text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </div>
      </div>

      <div>
        <div className="flex gap-14 py-3">
          <div className="flex flex-col rounded-xl py-4 px-4 gap-3 border-[#E8E8EA] border-solid border-[1px] w-[294px] h-[133px]">
            <div className="font-semibold text-3xl font-sans">Address</div>
            <div className="font-normal text-base text-[#696A75]">
              1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
            </div>
          </div>
          <div className="flex flex-col rounded-xl py-4 px-4 gap-3 border-[#E8E8EA] border-solid border-[1px] w-[294px] h-[133px]">
            <div className="font-semibold text-3xl font-sans">Contact</div>
            <div className="font-normal text-base text-[#696A75]">
              313-332-8662 <br /> info@email.com
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-md bg-[#F6F6F7] border-solid border-[1px] w-[643px] h-[440px] py-8 px-8">
          <h2 className="text-base font-semibold w-[149px] h-[26px]">
            Leave a Message
          </h2>
          <div
            className="flex w-[589px] h-[39px]
          gap-7"
          >
            <input
              className="w-[225px] h-[38px] rounded-md border-[1px] flex gap-3 py-[14px] pb-5 pt-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-[225px] h-[38px] rounded-md border-[1px] flex gap-3 py-[14px] pb-5 pt-4"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <input
            className="w-[478px] h-[38px] rounded-md border-[1px] flex gap-x-3 py-[14px] pb-5 pt-4"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-[478px] h-[134px] rounded-md border-[1px] flex gap-x-3 py-[14px] pb-5 pt-4"
            name="text"
            id=""
            placeholder="Write a message"
          />
          <button className="font-medium text-sm flex items-center rounded-md border-[1px] text-white bg-[#4B6BFB] py-3 px-2 w-[130px] h-[40px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
