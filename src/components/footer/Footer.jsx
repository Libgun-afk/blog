import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-gray-200 border-t border-gray-500 flex justify-around items-center w-full px-36 py-8 ">
      <div className=" mx-auto flex mt-16 mb-3 justify-between">
        <div className=" flex flex-col gap-6">
          <div className="text-lg font-semibold">About</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vel
            quo ullam itaque sapiente velit amet quisquam minima. Quidem,
            aperiam.
          </div>
          <div className="text-base font-semibold">
            Email:
            <a href="">info@jstemplate.net</a>
          </div>
          <div className="text-base font-semibold">
            Phone:
            <a href="">880123456789</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacts">Contact</Link>
        </div>
        <div>
          <img src="./Social wrapper.png" alt="" />
        </div>
      </div>
      <div className="w-full mx-auto border-t border-gray-500 py-5 flex items-center justify-around">
        <div className="flex gap-2.5">
          <img src="./Union.png" alt="" />
          <div className="">
            <img src="./MetaBlog.png" alt="" />
            <div>© All Rights Reserved.</div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="">Terms of Use</Link>
          <div className="text-gray-400">|</div>
          <Link href="">Privacy Policy</Link>
          <div className="text-gray-400">|</div>
          <Link href="">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};
