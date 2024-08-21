import Image from "next/image";
import React from "react";

const ContactDetails = ({
  title,
  value,
  showValue,
  showInput,
  brightCheck,
}) => {
  return (
    <div
      className={`rounded-[10px] px-[20px] py-[15px] flex ${
        !brightCheck ? "flex items-start" : "items-center"
      } justify-between bg-[#D2EDFF] min-h-[80px] border-[##069DF4] border w-full`}
    >
      <div className={`w-full`}>
        <p className="text-[15px] font-semibold">{title}</p>

        {showValue && (
          <p className="text-[12px] text-[#86869E] mt-2">{value}</p>
        )}
        {showInput && (
          <div className="relative w-full">
            <input
              type="email"
              className="w-full bg-white rounded-[10px] text-[12px] 
              py-[5px] px-[10px] border-none outline-none min-h-[36px] pl-[45px] mt-2"
              placeholder="Enter alternative email"
            />
            <Image
              src={"/images/mail.png"}
              alt="mail"
              width={15}
              height={15}
              className=" absolute bottom-[11px] left-5"
            />
          </div>
        )}
      </div>
      {brightCheck && (
        <Image src={"/images/check.svg"} alt="check" width={15} height={15} />
      )}
      {!brightCheck && (
        <Image src={"/images/check.png"} alt="check" width={15} height={5} />
      )}
    </div>
  );
};

export default ContactDetails;
