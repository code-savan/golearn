import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";


export const metadata = {
  title: "Go Learn",
  description: "Next Generation Online Schooling System",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({children}) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="w-full height-custom pl-[50px] pr-[100px] py-10 bg-[#F3F8FA] overflow-y-auto">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
