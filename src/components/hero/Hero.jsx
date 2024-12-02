export const Hero = () => {
  return (
    <hero className="w-[100%] h-[600px] mx-auto justify-center items-center flex relative">
      <div className=" ">
        <img
          src="image copy.png"
          alt=""
          className="shrink-0 pt-[100px] rounded-[12px] w-[100%]"
        />
      </div>
      <div className="absolute bottom-1 left-3">
        <div className="  w-[598px] h-[252px] flex flex-col items-start gap-[24px] p-[40px] rounded-[12px] border border-secondary-100 bg-white shadow-md ">
          <div className="bg-blue-500 w-[97px] h-[28px] text-white flex items-center justify-center rounded-md text-[14px] gap-[16px] leading-5 font-normal">
            Technology
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[36px] leading-10">
              Grid system for better <br /> Design User Interface
            </h1>
          </div>
          <div>
            <p className=" leading-6 text-[16px] font-normal text-gray-400">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
    </hero>
  );
};
