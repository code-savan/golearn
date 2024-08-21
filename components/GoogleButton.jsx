import Image from "next/image";
import React from "react";

const GoogleButton = ({ label }) => {
  return (
    <div>
      <button
        //   onClick={onClick}
        className="h-[49px] flex w-full items-center 
          justify-center rounded-[5px] text-[14px] font-medium space-x-3 border border-slate-300 relative z-10"
      >
        <Image src="/images/google.png" alt="google" width={25} height={25} />
        <p>{label}</p>
      </button>
    </div>
  );
};

export default GoogleButton;
