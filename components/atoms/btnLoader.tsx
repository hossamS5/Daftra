import React from "react";

interface IProps {
  width?: string;
  height?: string;
}

const BtnLoader: React.FC<IProps> = ({
  width = "w-[35px]",
  height = "h-[35px]",
}) => {
  return (
    <div
      className={`border-4 border-gray-200 border-t-4 border-t-secondary-20 rounded-full animate-spin ${width} ${height}`}
    ></div>
  );
};

export default BtnLoader;
