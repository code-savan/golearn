import { Divider } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const UploadPhoto = () => {
  return (
    <div className="bg-white rounded-[10px] w-[450px] pb-[20px] h-fit">
      <div className="flex items-center pl-[15px] h-[50px]">
        <p className="text-[15px] font-medium">Your Photo</p>
      </div>
      <Divider />
      <div className="px-[15px] w-full mt-5">
        <div className="flex">
          <div className="bg-[#D9D9D9] rounded-full size-[35px] mr-3" />
          <div className="flex flex-col justify-between">
            <p className="text-[13px]">Edit your photo</p>
            <p className="font-medium text-[12px] text-red-500">Delete</p>
          </div>
        </div>

        <div
          className="flex justify-center items-center border-1 border-[#86869E] 
          border border-dashed rounded-[10px] 
          w-full h-[170px] mt-4"
        >
          <div className="w-full text-center">
            <Image
              src="/images/upload.png"
              alt="upload"
              width={80}
              height={80}
              className="mx-auto"
            />

            <p className="text-[11px] text-color-1 w-[60%] mx-auto">
              <span className="text-accent-1">Click to upload </span>
              or drag and drop SVG, PNG, JPG OR GIF <br />
              (max. 800x400px)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
