import Image from 'next/image'
import React from 'react'

const CategoryBox = ({nText, bText}) => {
  return (
    <div className="bg-white rounded-[5px] px-3 py-2 flex space-x-2 items-center">
      <span className="font-light text-[13px]">{nText}:</span>
      <p className="font-semibold text-[13px]">{bText}</p>

      <Image
        src={"/images/chevron-down.png"}
        alt="down arrow"
        width={15}
        height={15}
      />
    </div>
  );
}

export default CategoryBox