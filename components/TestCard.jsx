"use client";

import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Button from "./Button";

const TestCard = ({ tagName, tagColor, img, duration, questions, text, showText, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  return (
    <div className="w-full rounded-[10px] p-[18px] bg-white cursor-pointer">
      <div className="bg-[#D9D9D9] rounded-[7px] w-full h-[140px] mb-2 relative p-2">
        <div
          className="rounded-[5px] px-2 py-1 w-fit text-color-2 text-[12px] text-white"
          style={{ backgroundColor: tagColor }}
        >
          {tagName}
        </div>
      </div> 
      {showText && (

      <p className="text-[15px] font-semibold mt-2 text-black">{text}</p>
      )}
      <div className="flex justify-between items-center mt-4 mb-2">
        <div className="space-y-3 ">
          <div className="flex size-fit items-center space-x-2 text-[15px]">
            <Image
              src={"/images/timer.png"}
              alt="Test Card"
              width={20}
              height={20}
              className="size-5"
            />
            <p>{duration}</p>
          </div>

          <div className="flex size-fit items-center space-x-2 text-[15px]">
            <Image
              src={"/images/send.png"}
              alt="Test Card"
              width={20}
              height={20}
              className="size-5"
            />
            <p>{questions} Questions</p>
          </div>
        </div>

        <button
          onClick={onOpen}
          className="flex space-x-2 items-center justify-center bg-[#069DF4] 
        rounded-[5px] w-[110px] h-[35px] hover:scale-105 transition"
        >
          <Image
            src={"/images/play.png"}
            alt="Test Card"
            width={20}
            height={20}
            className="size-5"
          />
          <span className="text-white text-[14px]">START</span>
        </button>
      </div>
      

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={true}
        size={"2xl"}
      >
        <OverlayTwo />
        <ModalContent className="w-full">
          <div className="bg-color-2 rounded-md w-full relative">
            <Image
              src={"/images/close.png"}
              alt="Test Card"
              width={20}
              height={20}
                          className="size-6 absolute top-4 right-4 cursor-pointer"
                          onClick={onClose}
            />
            <ModalBody>
              <div className="p-[45px] text-center">
                <p className="text-dark-1 font-bold text-[30px] mt-[10px]">
                  {tagName} Test
                </p>

                <p className="text-dark-2 text-[14px] font-light mt-[2px]">
                  Welcome to the {tagName} Test!
                </p>

                <div className="space-x-3 flex items-center my-4 justify-center">
                  <div
                    className="flex size-fit items-center space-x-2 text-[15px] text-[#010D17B2] 
                  font-medium"
                  >
                    <Image
                      src={"/images/send.png"}
                      alt="Test Card"
                      width={20}
                      height={20}
                      className="size-5"
                    />
                    <p>{questions} Questions</p>
                  </div>

                  <div
                    className="flex size-fit items-center space-x-2 text-[15px] text-[#010D17B2]
                  font-medium"
                  >
                    <Image
                      src={"/images/timer.png"}
                      alt="Test Card"
                      width={20}
                      height={20}
                      className="size-5"
                    />
                    <p>40+ minutes</p>
                  </div>
                </div>

                <div className="bg-[#D2EDFF] rounded-[10px] p-6 w-full mb-4">
                  <p className="text-dark-1 font-bold text-[18px] mb-5">
                    About Assessment
                  </p>
                  <p className="text-dark-2 text-[14px] font-light">
                    This comprehensive assessment is designed to evaluate your
                    understanding and mastery of key {tagName} concepts.
                  </p>
                </div>

                <div className="bg-[#FFF1D7] rounded-[10px] p-6 w-full">
                  <p className="text-dark-1 font-bold text-[18px] mb-4">
                    Instruction
                  </p>
                  <p className="text-dark-2 text-[14px] font-light">
                    The test duration is 90 minutes. Make sure to manage your
                    time effectively to complete all sections. Once you have
                    completed the test, review your answers carefully and click
                    the &quot;Submit Quiz&quot; button to finalize your
                    submission.
                  </p>
                </div>

                <div className="flex space-x-4 mt-5">
                  <button
                    onClick={onOpen}
                    className="flex space-x-2 items-center justify-center bg-[#069DF4] rounded-[7px] 
                    w-[200px] h-[50px] hover:scale-105 transition mx-auto"
                  >
                    <Image
                      src={"/images/play.png"}
                      alt="Test Card"
                      width={20}
                      height={20}
                      className="size-7"
                    />
                    <span className="text-white text-[18px]">Start Test</span>
                  </button>
                </div>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TestCard;
