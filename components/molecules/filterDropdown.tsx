import React from "react";

const FilterDropDown = () => {
  return (
    <div>
      <ul className="mt-5 flex flex-col gap-2 border-b border-[#F0F0F0]">
        <li className="px-[27px] py-[17px] text-primary-20 text-[20px] font-medium hover:bg-[#D8D8D8] hover:text-secondary-10 p-1 cursor-pointer">
          Top match
        </li>
        <li className="px-[27px] py-[17px] text-primary-20 text-[20px] font-medium hover:bg-[#D8D8D8] hover:text-secondary-10 p-1 cursor-pointer">
          Newest
        </li>
        <li className="px-[27px] py-[17px] text-primary-20 text-[20px] font-medium hover:bg-[#D8D8D8] hover:text-secondary-10 p-1 cursor-pointer">
          Latest
        </li>
      </ul>
    </div>
  );
};

export default FilterDropDown;
