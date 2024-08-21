"use client"

import { passwordValidations } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";


const PasswordInput = ({ label, placeholder, value, hasErrors, }) => {
    const [show, setShow] = useState(false)
  return (
    <div className="w-full">
      <div className="relative">
        <label htmlFor="" className="text-color-1 text-[15px] font-semibold">
          {label}
        </label>
        <input
          className="h-[42px] w-full rounded-[5px] border-[0.5px] 
        border-slate-300 mt-2 focus:outline-none px-3 text-[14px] text-color-1"
          type={show ? "text" : "password"}
          placeholder={placeholder}
          name="name"
          value={value}
        />
        <Image
          src={show ? "/images/eye.png" : "/images/eye-off.png"}
          className="absolute right-3 bottom-3 cursor-pointer"
          alt="eye"
          width={20}
          height={20}
          onClick={() => setShow(!show)}
        />
      </div>
      {hasErrors && (
        <>
          <span className="text-red-500 text-[11px] font-medium mb-2">
            Please add all necessary characters to create safe password
          </span>

          <div className="space-y-4 mt-4">
            {passwordValidations.map((item) => (
              <div className="flex space-x-4 items-center" key={item.text}>
                <Image src={item.icon} alt={item.text} width={15} height={15} />
                <p className="text-[13px] text-[#858598]">{item.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PasswordInput;
