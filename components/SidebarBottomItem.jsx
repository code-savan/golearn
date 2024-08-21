
import Image from "next/image";
import React from "react";

const SidebarBottomItem = ({ label, src, onOpen }) => {
  return (
    <div className="h-[50px] w-full flex items-center justify-center cursor-pointer">
      <div
        className={`flex items-center justify-start space-x-2 
            w-[200px] rounded-lg pl-[40px] py-2`}
              onClick={onOpen}
      >
        <Image
          src={src}
          alt={label}
          className="size-7"
          height={10}
          width={10}
        />
        <h3 className="text-sm font-normal">{label}</h3>
      </div>
    </div>
  );
};

export default SidebarBottomItem;
