import Button from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import SideBanner from "@/components/SideBanner";
import { LoginInputDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="w-full h-[100dvh] flex bg-[#069DF4]">
      {/* input forms here  */}
      <div className="w-full h-[100dvh] py-[40px] px-[80px] relative ">
        <Image
          src="/images/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 right-0 top-0 bottom-0 left-0 w-full"
        />
        <div className="flex items-center space-x-4 relative z-10 pr-16">
          <Image
            src={"/images/logo.png"}
            alt="registration logo"
            width={70}
            height={70}
          />
          <p className="text-color-1 font-bold text-[30px]">GoLearn</p>
        </div>
        <p className="text-color-1 font-semibold text-[18px] mt-16 relative z-10 pr-16">
          Welcome Back!
        </p>
        <p className="text-[14px] text-color-1 mt-1 relative z-10 pr-16">
          Login to continue your learning journey.
        </p>

        {/* REG FORM👇  */}
        <form className="mt-6 space-y-6 relative z-10 pr-16">
          {LoginInputDetails.map((input) => (
            <Input
              key={input.label}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          <PasswordInput label={"Password"} placeholder={"Password "} />

          <Button label={"Login"} width={"100%"} type={"submit"} />
        </form>
        <div className="flex justify-center items-center space-x-2 text-[13px] my-5 relative z-10 pr-16">
          <p>Don&apos;t have an Account?</p>
          <Link href={"/sign-up"} className="text-[#069DF4]">
            Register
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-2 text-[13px] my-5 relative z-10 pr-16">
          <div className="w-full border-t" />
          <p>or</p>
          <div className="w-full border-t" />
        </div>
        <div className="w-full relative z-10 pr-16">
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

export default SignIn;
