import TestCard from '@/components/TestCard';
import { seniorTests } from '@/constants';
import React from 'react'

const page = () => {
  return (
    <div>
      <p className="text-[25px] font-bold">Senior Tests</p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 pt-6">
        {seniorTests.map((item) => (
          <TestCard
            key={item.tagName}
            tagName={item.tagName}
            tagColor={item.tagColor}
            duration={item.duration}
            questions={item.questions}
          />
        ))}
      </div>
    </div>
  );
}

export default page