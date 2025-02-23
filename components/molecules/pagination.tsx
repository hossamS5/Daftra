import React from "react";
import { Pagination } from "@mui/material";

interface IProps {
  pagesNumber: number;
  cuurentPage: number;
}

const PaginationCutomized: React.FC<IProps> = ({
  pagesNumber,
  cuurentPage,
}) => {
  return (
    <Pagination
      count={pagesNumber}
      page={cuurentPage}
      variant="outlined"
      shape="rounded"
      sx={{
        "& .Mui-selected": {
          backgroundColor: "#48A74C !important",
          color: "white",
          "&:hover": { backgroundColor: "#3D8E41 !important" },
        },
      }}
    />
  );
};

export default PaginationCutomized;
