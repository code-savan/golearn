import Image from "next/image";
import React from "react";

const GoogleCard = () => {
  return (
    <div className="w-[450px] rounded-[10px] pt-[15px] p-[20px] bg-white h-fit">
      <div className="flex justify-between items-center mb-2">
        {/* <Image
          src={"/images/googletext.png"}
          alt="google text"
          width={100}
          height={20}
        /> */}
        <div className="flex w-fit font-semibold text-[28px] items-center">
          <span className="text-[30px] text-blue-500">G</span>
          <span className=" text-red-500">o</span>
          <span className=" text-orange-400">o</span>
          <span className=" text-blue-500">g</span>
          <span className=" text-green-400">l</span>
          <span className=" text-red-500">e</span>
        </div>

        <div
          className="w-[80px] h-[30px] flex items-center 
               justify-center text-[11px] bg-[#D2EDFF] text-[#0571D3] 
               border-[#0571D3] border rounded-[5px]"
        >
          Connected
        </div>
      </div>

      <p className="font-semibold text-[17px] mb-2">Google</p>
      <p className="text-[12px]">
        Use Google to sign in to your <br /> account.{" "}
        <span className="text-accent-1">Click here to learn more.</span>{" "}
      </p>
    </div>
  );
};

export default GoogleCard;
