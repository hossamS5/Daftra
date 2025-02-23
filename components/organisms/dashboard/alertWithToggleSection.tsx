"use client";

import React from "react";
import AlertSection from "./alertSection";
import ToggleBtn from "@/components/atoms/toggleBtn";
import { useGlobalStore } from "@/utils/store";

const AlertWithToggleSection = () => {
  const { setMobileSideNav } = useGlobalStore();

  return (
    <section className="flex justify-between gap-[6px]">
      <AlertSection />
      <ToggleBtn clickHandler={() => setMobileSideNav(true)} />
    </section>
  );
};

export default AlertWithToggleSection;
