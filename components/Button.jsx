import React from "react";

const Button = ({ label, width, type, onClick }) => {
  return (
    <div className="pt-2 w-full">
      <button
        type={type}
        style={{ width: width }}
        onClick={onClick}
        className="h-[49px] bg-blue-1 flex items-center 
          justify-center text-colorDark-1 rounded-[5px] text-[15px] text-white"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
