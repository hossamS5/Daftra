"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

interface IProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  classes?: string;
  width?: string;
  padding?: string;
}

const DropDownMenu: React.FC<IProps> = ({
  title,
  children,
  classes = "",
  width = "auto",
  padding = "20px",
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "white",
          fontSize: "18px",
          fontFamily: "inherit",
          fontWeight: "400",
          textTransform: "none",
        }}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slotProps={{
          paper: {
            sx: { borderRadius: "12px", padding: padding, width: width },
          },
        }}
      >
        {children}
      </Menu>
    </div>
  );
};

export default DropDownMenu;
