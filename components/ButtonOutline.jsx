import React from "react";

const ButtonOutline = ({ label, width, type, onClick }) => {
  return (
    <div className="pt-2 w-full">
      <button
        type={type}
        style={{ width: width }}
        onClick={onClick}
        className="h-[49px] border-[2px] border-blue-1  flex items-center 
          justify-center text-dark-1 rounded-[5px] focus:outline-none text-[15px]"
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonOutline;
