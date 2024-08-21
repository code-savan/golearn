import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className={`w-full h-[100px] text-left text-base text-black`}>
      <nav className="h-[100px] border-bottom-1 border px-[100px] py-[20px] w-full justify-between flex items-center">
        {/* logo  */}
        <div className="w-[230px]">
          {/* <div className="w-[60px] h-[60px]" /> */}
          <Image width={54} height={28} alt="logo" src="/images/logo.png" />
        </div>

        <div className="flex justify-between w-full">
          {/* welcome greeting  */}
          <div className="">
            <h2 className="text-inherit font-semibold font-inherit">
              Hello GoLearner,
            </h2>
            <div className="text-xs font-light">Welcome back!</div>
          </div>

          {/* rest of the nav  */}
          <div className="flex space-x-5 items-center">
            {/* nav search  */}
            <div className="relative">
              <input
                className="border-1 border w-[325px] h-[40px] border-solid 
              font-light bg-[transparent] border-slate-500
              text-slate-500 pl-[50px] rounded-[50px] text-[14px]"
                placeholder="Search for curriculums.."
                type="text"
              />

              <Image
                alt="Nav Search"
                className="absolute left-5 top-[10px]"
                src="/images/navsearch.svg"
                width={18}
                height={16}
              />
            </div>
            <Image
              className="cursor-pointer h-[20px]"
              alt=""
              src="/images/navbell.png"
              width={20}
              height={10}
            />
            <Image
              className="rounded-[50%]"
              alt=""
              src="/images/navuser.png"
              width={36}
              height={28}
            />

            <div className="h-full text-small flex items-center">
              <h3 className="m-0 text-inherit font-normal font-inherit">
                English
              </h3>
              {/* <Image
                className="overflow-hidden object-cover"
                alt=""
                src="/chevrondown@2x.png"
                width={14}
                height={14}
              /> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
