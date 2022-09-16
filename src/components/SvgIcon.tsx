import React from "react";

interface IconProps {
  classes?: string;
  children: React.ReactNode;
}

export const SvgIcon = ({ classes, children }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      {children}
    </svg>
  );
};
