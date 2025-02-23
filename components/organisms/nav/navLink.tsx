import Link from "next/link";
import React from "react";
import { INavSections } from "@/data/navSections";

interface IProps {
  item: INavSections;
  classes?: string;
}

const NavLink: React.FC<IProps> = ({ item, classes = "" }) => {
  return (
    <Link
      className={`flex flex-col items-center justify-center gap-[2px] ${classes}`}
      href={item.href}
    >
      {item.icon}
      <span className="text-lg">{item.title}</span>
    </Link>
  );
};

export default NavLink;
