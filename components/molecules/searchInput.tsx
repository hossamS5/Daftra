import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@/assets/icons/searchIcon.svg";

export default function SeacrchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "47px",
      }}
    >
      <IconButton type="button" sx={{ p: "3px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by name, job title, ..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
