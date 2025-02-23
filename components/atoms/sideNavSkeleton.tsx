import React from "react";

const SideNavSkeleton = () => {
  return (
    <aside className="bg-white w-full mt-12 min-w-[400px] h-screen md:h-[calc(100vh-90px)] p-5 flex flex-col gap-8 overflow-y-auto">
      {Array.from(Array(8).keys()).map((item) => (
        <div
          key={item}
          className="bg-main-grey animate-pulse w-full h-14"
        ></div>
      ))}
    </aside>
  );
};

export default SideNavSkeleton;
