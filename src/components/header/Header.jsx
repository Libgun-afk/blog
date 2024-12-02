import Link from "next/link";

export const Header = () => {
  const routers = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex justify-around w-1280px h-[100px] px-28 py-8 gap-[10px]">
      <img src="/image.png" alt="" />
      <div className="h-[24px] flex gap-10">
        {routers.map(({ href, title }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </div>
      <div class="flex items-center   rounded-lg bg-[#F4F4F5]">
        <input type="search" className="bg-[#F4F4F5]" placeholder="Search" />
        <img src="image copy 4.png" alt="" />
      </div>

      {/* <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link> */}
    </div>
  );
};
