"use client";

import SeacrchInput from "@/components/molecules/searchInput";
import { navSections } from "@/data/navSections";
import NavLink from "./navLink";
import UserIcon from "@/assets/images/user.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrowDown.svg";
import MenuXS from "@/assets/icons/menuXS.svg";
import DropDownMenu from "@/components/molecules/dropdownMenu";
import UserMenu from "@/components/molecules/userMenu";
import NavbarMobile from "./navbarMobile";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-nav-bg text-white h-[90px] py-4 px-[20px] md:px-[40px]">
      <div className="flex items-center gap-[46px]">
        <Link href="/" className="text-[35px] font-bold text-white">
          I<span className="text-secondary-20">Z</span>AM
        </Link>

        <div className="hidden xl:block">
          <SeacrchInput />
        </div>
      </div>

      {/* Mobile search */}
      <div className="flex items-center gap-[58px]">
        <div className="hidden xl:flex items-center gap-[58px]">
          {navSections.map((nav, index) => (
            <div key={index}>
              <NavLink item={nav} />
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center justify-center gap-[2px]">
          <Image
            className="block xl:hidden"
            width={55}
            src={UserIcon}
            alt="UserIcon"
          />
          <Image
            className="hidden xl:block"
            width={35}
            src={UserIcon}
            alt="UserIcon"
          />
          <MenuXS
            onClick={() => setShowMobileMenu(true)}
            className="block xl:hidden absolute bottom-0 right-0"
          />

          <DropDownMenu
            title={
              <div className="flex items-center gap-1 text-lg">
                <span>profile</span>
                <ArrowDown />
              </div>
            }
            classes="hidden xl:block"
          >
            <UserMenu />
          </DropDownMenu>
        </div>
      </div>

      {showMobileMenu && (
        <NavbarMobile closeMenu={() => setShowMobileMenu(false)} />
      )}
    </nav>
  );
}
