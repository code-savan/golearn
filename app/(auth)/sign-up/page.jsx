import Button from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import SideBanner from "@/components/SideBanner";
import { RegInputDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-[100dvh] flex relative bg-[#069DF4]">
      {/* input forms here  */}
      <div className="w-full h-[100dvh] py-[15px] px-[80px] relative z-10">
        <Image
          src="/images/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 right-0 top-0 bottom-0 left-0 w-full"
        />
        <div className="flex items-center relative z-10 pr-16">
          <Image
            src={"/images/reglogo.png"}
            alt="registration logo"
            width={70}
            height={70}
          />
          <p className="text-color-1 font-bold text-[30px] rel] z-10">
            GoLearn
          </p>
        </div>
        <p className="text-color-1 font-semibold text-[18px] mt-[10px] relative z-10 pr-16">
          Register!
        </p>
        <p className="text-[14px] text-color-1 mt-1 relative z-10 pr-16">
          Sign up for GoLearn to unlock endless learning.
        </p>
        {/* REG FORM👇  */}
        <form className="mt-4 space-y-4 relative z-10 pr-16">
          {RegInputDetails.map((input) => (
            <Input
              key={input.label}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          <PasswordInput label={"Password"} placeholder={"Password "} />

          <Button label={"Register"} width={"100%"} type={"submit"} />
        </form>
        <div className="flex justify-center items-center space-x-2 text-[13px] my-3 relative z-10  pr-16">
          <p>Already have an Account?</p>
          <Link href={"/sign-in"} className="text-[#069DF4]">
            Login
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-2 text-[13px] my-3 relative z-10 pr-16">
          <div className="w-full border-t" />
          <p>or</p>
          <div className="w-full border-t" />
        </div>
        <div className="pr-16 w-full">
          <GoogleButton label={"Sign up with Google"} />
        </div>
      </div>
      {/* side banner here  */}
      <div className="w-full  h-[100dvh] px-[80px]">
        <SideBanner />
      </div>
    </div>
  );
};

export default SignUp;
