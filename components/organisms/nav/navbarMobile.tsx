import React from "react";
import UserIcon from "@/assets/images/user.png";
import VectoRight from "@/assets/icons/vectoRight.svg";
import Image from "next/image";
import NavLink from "./navLink";
import { navSections } from "@/data/navSections";
import HomeIcon from "@/assets/icons/home2.svg";
import NotifIcon from "@/assets/icons/notify2.svg";
import UsesrIcon from "@/assets/icons/users2.svg";
import JobIcon from "@/assets/icons/job2.svg";
import MessageIcon from "@/assets/icons/message2.svg";

interface IProps {
  closeMenu: () => void;
}

const icons = [
  <HomeIcon />,
  <JobIcon />,
  <UsesrIcon />,
  <NotifIcon />,
  <MessageIcon />,
];

const NavbarMobile: React.FC<IProps> = ({ closeMenu }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen p-[24px] bg-white z-50 md:hidden transition-transform ${
        true ? "animate-slideIn" : "animate-slideOut"
      }`}
    >
      <div className="flex items-center justify-between pb-[23px] border-b border-[#F0F0F0]">
        <div className="flex items-center gap-[17px]">
          <Image width={70} height={70} src={UserIcon} alt="UserIcon" />
          <div className=" flex flex-col gap-1">
            <span className="text-[19px] font-medium text-[#161616]">
              Ahmed Amaar
            </span>
            <span className=" text-[15px] text-primary-20">UX UI designer</span>
          </div>
        </div>

        <VectoRight onClick={closeMenu} />
      </div>

      <div className="flex flex-col items-start gap-5 py-5 border-b border-[#F0F0F0]">
        {navSections.map((nav, index) => (
          <div key={index}>
            <NavLink
              classes="text-black !flex-row !gap-2"
              item={{ ...nav, icon: icons[index] }}
            />
          </div>
        ))}
      </div>

      <ul className="mt-5 flex flex-col gap-2 border-b py-5 border-[#F0F0F0]">
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

export default NavbarMobile;
