import React from "react";
import UserIcon from "@/assets/images/user.png";
import Image from "next/image";

const UserMenu = () => {
  return (
    <div>
      <div className="flex gap-[17px] pb-[23px] border-b border-[#F0F0F0]">
        <Image width={70} height={70} src={UserIcon} alt="UserIcon" />
        <div className=" flex flex-col gap-1">
          <span className="text-[19px] font-medium text-[#161616]">
            Ahmed Amaar
          </span>
          <span className=" text-[15px] text-primary-20">UX UI designer</span>
        </div>
      </div>

      <ul className="mt-5 flex flex-col gap-2 border-b border-[#F0F0F0]">
        <li className="text-primary-20 text-[17px] font-medium hover:bg-gray-100 p-1 cursor-pointer">
          Setting and privacy
        </li>
        <li className="text-primary-20 text-[17px] font-medium hover:bg-gray-100 p-1 cursor-pointer">
          Language
        </li>
        <li className="text-primary-20 text-[17px] font-medium hover:bg-gray-100 p-1 cursor-pointer">
          Help
        </li>
      </ul>

      <button className="text-[#ED1F03] text-[17px] font-medium mt-[22px] hover:opacity-90">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
