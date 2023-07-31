import React from "react";
import { GridColumnMenuContainer } from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  
  
  const colDef = currentColumn?.field ? currentColumn : null;
  
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      colDef={colDef}
      open={open}
    >

    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
