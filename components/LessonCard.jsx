import Image from "next/image";
import React from "react";

const LessonCard = ({
  tagName,
  tagColor,
  img,
  title,
  instructor,
  date,
  likes,
  views,
}) => {
  return (
    <div className="w-full rounded-[10px] p-[18px] bg-white cursor-pointer hover:scale-105 transition">
      <div className="bg-[#D9D9D9] rounded-[7px] w-full h-[140px] mb-2 relative p-2">
        <div
          className="rounded-[5px] px-2 py-1 w-fit text-color-2 text-[12px] text-white"
          style={{ backgroundColor: tagColor }}
        >
          {tagName}
        </div>
      </div>
      <p className="font-semibold text-[16px]">{title}</p>
      <span className="font-light text-[12px] text-slate-500">
        {instructor}
      </span>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-2">
          <Image
            src={"/images/calendar.png"}
            alt="calendar"
            width={15}
            height={15}
          />
          <p className="text-[14px] font-semibold">{date}</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* likes  */}
          <div className="flex items-center space-x-1">
            <Image
              src={"/images/heart.png"}
              alt="calender"
              width={15}
              height={15}
            />
            <p className="text-[13px]">{likes}k</p>
          </div>
          {/* views  */}
          <div className="flex items-center space-x-1">
            <Image
              src={"/images/eye.png"}
              alt="calender"
              width={15}
              height={15}
            />
            <p className="text-[13px]">{views}k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
