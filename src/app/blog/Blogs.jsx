"use client";
import { Card } from "@/components/Card";
import React, { useState } from "react";

const Blogs = ({ objResult }) => {
  const [sliceCount, setSliceCount] = useState(9);

  const moreHandler = () => {
    setSliceCount((prev) => prev + 9);
  };
  return (
    <div className="flex flex-wrap gap-4 justify-center ">
      {objResult
        .slice(0, sliceCount)
        .map(
          ({ id, cover_image, title, tag_list, published_at, user }, index) => {
            return (
              <div className="flex flex-wrap gap-10" key={index}>
                <Card
                  id={id}
                  cover_image={cover_image}
                  title={title}
                  tag={tag_list[0]}
                  published_at={published_at}
                  user={user}
                />
              </div>
            );
          }
        )}
      {sliceCount.length != objResult.length && (
        <button
          onClick={moreHandler}
          className="text-[#696A75] text-base font-medium w-[123px] h-12 rounded-md border-[1px]"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Blogs;
