"use client";

import { useState } from "react";
import { Card } from "../Card";

export const AllPost = ({ posts }) => {
  const [data, setData] = useState(posts.slice(0, 9));

  const moreHandler = () => {
    setData((prev) => posts.slice(0, prev.length + 9));
  };

  return (
    <div
      className="flex flex-wrap gap-4 justify-center 
    "
    >
      {data.map(({ id, cover_image, title, tag_list, published_at }, index) => {
        return (
          <div className="  flex flex-wrap gap-10">
            <Card
              key={index}
              id={id}
              cover_image={cover_image}
              title={title}
              tag={tag_list[0]}
              published_at={published_at}
            />
          </div>
        );
      })}
      {data.length != posts.length && (
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

// "use client";
// import { useState } from "react";

// export const AllPost = ({ posts }) => {
//   const informations = [
//     { title: "All" },
//     { title: "Design" },
//     { title: "Travel" },
//     { title: "Fashion" },
//     { title: "Technology" },
//     { title: "Branding" },
//   ];

//   const [visiblePosts, setVisiblePosts] = useState(9);

//   const handleLoadMore = () => {
//     setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
//   };

//   return (
//     <div className="flex flex-col gap-10">
//       <p className="text-2xl font-bold">All Blog Posts</p>
//       <div className="flex gap-10 text-xs">
//         {informations.map(({ title }, index) => (
//           <p key={index} className="cursor-pointer hover:text-blue-500">
//             {title}
//           </p>
//         ))}
//       </div>

//       <div className="flex flex-wrap justify-between gap-9">
//         {posts
//           .slice(0, visiblePosts)
//           .map(({ cover_image, title, tags, published_at }, index) => (
//             <div
//               key={index}
//               className="w-[360px] border border-gray-300 p-4 rounded-lg"
//             >
//               <img
//                 src={cover_image}
//                 className="h-[240px] w-full object-cover mb-2"
//                 alt={title || "Blog cover"}
//               />
//               <div className="font-semibold">{title}</div>
//               <div className="text-sm text-gray-600">{tags}</div>
//               <div className="text-xs text-gray-400">{published_at}</div>
//             </div>
//           ))}
//       </div>

//       {visiblePosts < posts.length && (
//         <button
//           className="flex justify-center items-center mt-4 py-2 px-4 w-[120px] border rounded-lg hover:bg-blue-500 hover:text-white transition"
//           onClick={handleLoadMore}
//         >
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };
