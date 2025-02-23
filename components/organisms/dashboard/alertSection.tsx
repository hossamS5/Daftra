import React from "react";
import Switcher from "@/components/atoms/switcher";

const AlertSection = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 md:px-8 py-[10px] md:py-6 bg-secondary-20 text-white rounded-[5px]">
      <div>
        <h3 className="font-bold text-sm md:text-[23px] mb-2">
          UI Designer in Egypt
        </h3>
        <span className="text-[11px] md:text-[17px]">70 job positions</span>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <span className="text-[11px] md:text-[21px]">Set alert</span>
        <Switcher />
      </div>
    </div>
  );
};

export default AlertSection;
