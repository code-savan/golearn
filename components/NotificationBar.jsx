import React from "react";
import { Switch } from "@chakra-ui/react";

const NotificationBar = ({ title, value, showValue }) => {
  return (
    <div className="rounded-[10px] px-[20px] py-[15px] flex justify-between items-center bg-[#FBFBFB] min-h-[80px]">
      <div className="w-[50%]">
        <p className="text-[15px] font-semibold">{title}</p>
        {showValue && (
          <p className="text-[12px] text-[#86869E] mt-2">{value}</p>
        )}
      </div>
      <Switch isChecked size={"md"} />
    </div>
  );
};

export default NotificationBar;
