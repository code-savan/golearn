"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { sidebarBottomLinks, sidebarLinks } from "@/constants";
import SidebarBottomItem from "./SidebarBottomItem";
import Image from "next/image";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
   const OverlayTwo = () => (
     <ModalOverlay
       bg="none"
       backdropFilter="auto"
       backdropInvert="80%"
       backdropBlur="2px"
     />
   );

  useEffect(() => {
    if (
      pathname.includes("test")
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [pathname]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="w-[300px] border-1 border height-custom flex flex-col justify-between py-5 space-y-2">
      <div>
        {sidebarLinks.map((item) => {
          const isActive = Array.isArray(item.isActive)
            ? item.isActive.includes(pathname)
            : pathname === item.isActive;

          return (
            <SidebarItem
              key={item.route}
              label={item.label}
              src={item.imgUrl}
              active={isActive}
              iconPage={show}
              showTests={show}
              link={item.route}
            />
          );
        })}
      </div>

      <div>
        <SidebarBottomItem
          label={"Help"}
          src={"/images/help.svg"}
          // onOpen={""}
        />
        <SidebarBottomItem
          label={"Log out"}
          src={"/images/logout.svg"}
          onOpen={onOpen}
        />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={true}
        size={"lg"}
      >
        <OverlayTwo />
        <ModalContent>
          <div className="bg-color-2 rounded-md">
            <ModalBody>
              <div className="p-[45px] text-center">
                <div className="w-[85px] h-[85px] flex items-center justify-center rounded-full bg-white p-1 mx-auto">
                  <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    width={80}
                    height={40}
                  />
                </div>

                <p className="text-dark-1 uppercase font-bold text-[30px] mt-[40px]">
                  Log out?
                </p>
                <p className="text-dark-2 text-[14px] font-light mt-[8px]">
                  Are you sure you want to log out?
                </p>

                <div className="flex space-x-4 mt-10">
                  <ButtonOutline
                    label={"Cancel"}
                    width={"100%"}
                    onClick={onClose}
                  />
                  <Button label={"Yes, Log Out"} width={"100%"} />
                </div>

                <p className="text-dark-2 text-[14px] mt-6">
                  Thanks for learning with GoLearn! See you soon!
                </p>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Sidebar;
