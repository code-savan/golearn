import { Divider } from "@chakra-ui/react";
import React from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";

const PersonalInfo = () => { 
  return (
    <div className="bg-white rounded-[5px] w-full pb-[15px]">
      <div className="flex items-center pl-[15px] h-[50px]">
        <p className="text-[15px] font-medium">Personal Information</p>
      </div>
      <Divider />
          <form className="px-[15px] space-y-5">
              <div >
                  
        <p className="text-color-1 text-[15px] font-semibold mt-5">
          Full Name
        </p>
        <div className="flex space-x-5">
          <Input
            placeholder={"First name"}
            type={"text"}
            inputIcon={true}
            icon={"/images/user.png"}
          />
          <Input
            placeholder={"Last name"}
            type={"text"}
            inputIcon={true}
            icon={"/images/user.png"}
          />
              </div>
              </div>
              
              <Input label={"Email Address"} type={"email"} placeholder="jossy.williams@gmail.com" inputIcon={true} icon={"/images/at.png"} disabled={true} />
              <Input label={"Username"} type={"text"} placeholder="Jossy Williams" disabled={true} />
              <Input label={"Bio"} type={"text"} placeholder="Write a short introduction" />
              <SelectInput label={"Timezone"} type={"text"} placeholder="West African Time (WAT)" inputIcon={true} icon={"/images/clock.png"} />
      </form>
    </div>
  );
};

export default PersonalInfo;
