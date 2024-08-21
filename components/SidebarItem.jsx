import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({ src, label, link, active, iconPage, showTests }) => {
  const pathname = usePathname();
  return (
    <div className="min-h-[50px] w-full flex flex-col items-center justify-center">
      <Link
        href={link}
        className={`flex items-center justify-start space-x-2 ${
          active ? "bg-blue-1" : "bg-white"
        }  w-[200px] rounded-lg pl-[40px] py-2 cursor-pointer`}
      >
        <Image
          src={src}
          alt={label}
          className="size-6"
          height={10}
          width={10}
        />
        <h3 className="text-sm font-normal">{label}</h3>
        {active && iconPage && (
          <Image
            src={"/images/chevron-down.png"}
            alt={label}
            className="ml-1"
            height={15}
            width={15}
          />
        )}
      </Link>

      {active && showTests && (
        <div className="space-y-3 my-3 flex flex-col">
          <Link
            href={"/junior-tests"}
            className={`text-[13px] ${
              pathname === "/junior-tests" ? "font-semibold" : "text-[#86869E]"
            }`}
          >
            Junior Tests
          </Link>
          <Link
            href={"/senior-tests"}
            className={`text-[13px] ${
              pathname === "/senior-tests" ? "font-semibold" : "text-[#86869E]"
            }`}
          >
            Senior Tests
          </Link>
          <Link
            href={"/international-tests"}
            className={`text-[13px] ${
              pathname === "/international-tests"
                ? "font-semibold"
                : "text-[#86869E]"
            }`}
          >
            International Tests
          </Link>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
