import { timeZones } from '@/constants';
import Image from 'next/image';
import React from 'react'

const SelectInput = ({
  label,
  type,
  placeholder,
  inputIcon,
  icon,
  disabled,
}) => {
  return (
    <div className="w-full relative">
      <label htmlFor="" className="text-color-1 text-[15px] font-semibold">
        {label}
      </label>
      <select
        className={`h-[42px] w-full rounded-[5px] border-[0.5px] 
        border-slate-300 mt-2 focus:outline-none px-3 text-[14px]
        text-color-1 ${inputIcon ? "pl-[45px]" : "pl-[12px]"} ${
          disabled ? "bg-[#D3D3D380]" : "bg-transparent"
        }`}
        type={type}
        placeholder={placeholder}
        name="name"
        disabled={disabled}
          >
              {
                  timeZones.map((item) => (
                      <option key={item.abbr}>
                        {item.text}
                      </option>
                  ))
        }
          </select>
      {inputIcon && (
        <Image
          src={icon}
          alt="user"
          className="absolute bottom-3 left-4"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default SelectInput