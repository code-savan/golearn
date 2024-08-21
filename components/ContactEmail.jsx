import { Divider } from "@chakra-ui/react";
import React from "react";
import ContactDetails from "./ContactDetails";
import { ContactCards } from "@/constants";

const ContactEmail = () => {
  return (
    <div className="bg-white rounded-[5px] w-full pb-[15px]">
      <div className="flex items-center pl-[15px] h-[50px]">
        <p className="text-[15px] font-medium">Contact Email</p>
      </div>
      <Divider />
      <div className="px-[15px] space-y-5 mt-5">
        {ContactCards.map((item) => (
          <ContactDetails
            key={item.text}
            title={item.text}
            value={item.value}
            showValue={item.showValue}
            showInput={item.showInput}
            brightCheck={item.brightCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactEmail;
