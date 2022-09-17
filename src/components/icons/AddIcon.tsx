import React, { Component } from "react";
import { SvgIcon } from "../SvgIcon";

export const AddIcon = ({ ...props }) => {
  return (
    <SvgIcon {...props}>
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </SvgIcon>
  );
};
