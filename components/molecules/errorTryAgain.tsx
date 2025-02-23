import React from "react";
import Button from "@mui/material/Button";

interface IProps {
  clickhandler: () => void;
  message?: string;
}

const ErrorTryAgain: React.FC<IProps> = ({
  clickhandler,
  message = "Somthing went wrong",
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center gap-3">
      <Button
        onClick={clickhandler}
        sx={{ borderColor: "#3D8E41", color: "#3D8E41" }}
        variant="contained"
      >
        try again
      </Button>
      <h3 className="text-lg text-red-500 font-semibold">{message}</h3>
    </div>
  );
};

export default ErrorTryAgain;
