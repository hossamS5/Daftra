import React from "react";
import MenuIcon from "@/assets/icons/menuIcon.svg";

interface IProps {
  clickHandler: () => void;
}
const ToggleBtn: React.FC<IProps> = ({ clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="md:hidden border border-gray-400 w-[80px] h-auto rounded-[2px] flex items-center justify-center"
    >
      <MenuIcon />
    </div>
  );
};

export default ToggleBtn;
