import HomeIcon from "@/assets/icons/homeIcon.svg";
import NotifIcon from "@/assets/icons/notifIcon.svg";
import UsesrIcon from "@/assets/icons/usersIcon.svg";
import JobIcon from "@/assets/icons/jobIcon.svg";
import MessageIcon from "@/assets/icons/messageIcon.svg";
import React from "react";

export interface INavSections {
  title: string;
  href: string;
  icon?: React.ReactNode;
}
export const navSections: INavSections[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Jobs",
    href: "/",
    icon: <JobIcon />,
  },
  {
    title: "employers",
    href: "/",
    icon: <UsesrIcon />,
  },
  {
    title: "Notifications",
    href: "/",
    icon: <NotifIcon />,
  },
  {
    title: "Messaging",
    href: "/",
    icon: <MessageIcon />,
  },
];
