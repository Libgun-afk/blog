"use client";

import Link from "next/link";
import { Author } from "./Author";

export const Card = ({ id, cover_image, tag, title, published_at, user }) => {
  return (
    <Link href={`/single/${id}`} className="w-[392px]">
      <div className="flex flex-col gap-4 rounded-lg  h-[476px] w-[380px] justify-between px-4 py-4  border border-[#E8E8EA]">
        <img
          className="rounded-xl w-[360px] h-[240px] flex justify-center"
          src={cover_image}
          alt=""
        />
        <div
          className="flex items-center justify-center
         rounded-md font-normal text-[#4B6BFB] w-[97px] h-[28px] leading-5  bg-[#E8E8EA]"
        >
          {" "}
          {tag}{" "}
        </div>
        <div className="flex font-bold text-[#181A2A] leading-7 text-2xl ">
          {title}
        </div>
        <div className="flex items-center gap-3">
          {user && (
            <Author user={user.username} profile_image={user.profile_image} />
          )}
          <div className="text-base font-normal text-[#97989F]">
            {published_at}
          </div>
        </div>
      </div>
    </Link>
  );
};
