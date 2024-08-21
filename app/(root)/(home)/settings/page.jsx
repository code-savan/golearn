import Button from "@/components/Button";
import ButtonOutline from "@/components/ButtonOutline";
import CardDetails from "@/components/CardDetails";
import ContactEmail from "@/components/ContactEmail";
import GoogleCard from "@/components/GoogleCard";
import NotificationBar from "@/components/NotificationBar";
import PersonalInfo from "@/components/PersonalInfo";
import UpdatePassword from "@/components/UpdatePassword";
import UploadPhoto from "@/components/UploadPhoto";
import { NotificationOptions, pushNotifications } from "@/constants";
import { Divider } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
  return (
    <div>
      {/* First section heading  */}
      <div className="flex justify-between">
        {/* heading details  */}
        <div>
          <p className="text-[25px] font-bold mb-4">Settings</p>
          <p className="text-[18px] font-semibold mb-1">General Details</p>
          <p className="text-[14px] font-light">
            Upload your photo and personal details here
          </p>
        </div>
        {/* buttons  */}
        <div className="flex space-x-4">
          <ButtonOutline label={"Cancel"} width={"69px"} type={"button"} />
          <Button label={"Save"} width={"66px"} type={"button"} />
        </div>
      </div>

      {/* first section  */}
      <div className="flex space-x-8 w-full pt-6">
        <PersonalInfo />
        <UploadPhoto />
      </div>

      {/* Second section Heading  */}
      <div className="mb-6 mt-8">
        <p className="text-[18px] font-semibold mb-1">Manage Password</p>
        <p className="text-[14px] font-light">
          Ensure your account&apos;s security by updating your password
        </p>
      </div>

      {/* Second section  */}
      <div className="flex space-x-8 w-full">
        <UpdatePassword />
        <GoogleCard />
      </div>

      {/* Third section Heading  */}
      <div className="mb-6 mt-8">
        <p className="text-[18px] font-semibold mb-1">
          Notifications and Updates
        </p>
        <p className="text-[14px] font-light">
          Stay informed with real-time alerts and updates tailored to your
          learning journey.
        </p>
      </div>

      {/* Third section  */}
      <div className="w-full rounded-[10px] bg-white p-[20px]">
        <div className="flex space-x-8 w-full">
          <div className="w-[400px]">
            <p className="font-semibold text-[16px]">Email Notification</p>
            <p className="text-[12px] text-[#86869E]">
              Turn on and customize the email notifications
              <br /> you wish to receive.
            </p>
          </div>
          <div className="space-y-5 w-full">
            {NotificationOptions.map((item) => (
              <NotificationBar
                key={item.text}
                title={item.text}
                value={item.value}
                showValue={item.showValue}
              />
            ))}
          </div>
        </div>

        <Divider className="my-4" />

        <div className="flex space-x-8 w-full">
          <div className="w-[400px]">
            <p className="font-semibold text-[16px]">Push Notification</p>
            <p className="text-[12px] text-[#86869E]">
              Turn on and customize the email notifications
              <br /> you wish to receive.
            </p>
          </div>
          <div className="space-y-5 w-full">
            {pushNotifications.map((item) => (
              <NotificationBar
                key={item.text}
                title={item.text}
                value={item.value}
                showValue={item.showValue}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fourth section Heading  */}
      <div className="mb-6 mt-8">
        <p className="text-[18px] font-semibold mb-1">Payment Method</p>
        <p className="text-[14px] font-light">
          Update your billing details and address
        </p>
      </div>

      <div className="flex space-x-8 w-full">
        <ContactEmail />
        <CardDetails />
      </div>
    </div>
  );
};

export default Settings;
