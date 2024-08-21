import { Divider } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CardDetails = () => {
  return (
    <div className="bg-white rounded-[5px] w-full pb-[15px]">
      <div className="flex items-center px-[15px] h-[50px] w-full justify-between">
        <p className="text-[15px] font-medium">Card Details</p>
              <div className="flex space-x-1 w-fit items-center">
                  <Image
                  src={"/images/edit.png"}
                      alt={"edit"}
                      className="size-4"
                      width={10}
                      height={10}
                  />
          <p className="text-[13px] font-medium text-[#069DF4]">
            Add Card
          </p>
        </div>
      </div>
      <Divider />
      <div className="px-[15px] space-y-5 mt-5"></div>
    </div>
  );
};

export default CardDetails;
