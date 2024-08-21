import CategoryBox from "@/components/CategoryBox";
import LessonCard from "@/components/LessonCard";
import { lessonCards } from "@/constants";
import React from "react";

const VideoLibrary = () => {
  return (
    <div>
      <p className="text-[25px] font-bold">Video Library</p>
      {/* Search Sorting  */}
      <div className="flex justify-between items-start my-4">
        <div className="flex space-x-4">
          <CategoryBox nText={"Sort"} bText={"By Popular"} />
          <CategoryBox nText={"Category"} bText={"All Category"} />
        </div>
        <div className="bg-white rounded-[5px] px-3 py-2  flex space-x-2 items-center">
          <p className="font-semibold text-[13px]">Result: 16</p>
        </div>
      </div>
      {/* Search Sorting end  */}

      {/* Lesson Components List  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 pt-6">
        {lessonCards.map((item) => (
          <LessonCard
            key={item.title}
            tagName={item.tagName}
            tagColor={item.tagColor}
            title={item.title}
            instructor={item.instructor}
            date={item.date}
            likes={item.likes}
            views={item.views}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
