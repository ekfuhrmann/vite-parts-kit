import React from 'react';

export type IconProps = {
  /**
   Apply additional styles to the svg.
   */
  classes?: string;

  /**
   The root node component.
   */
  children?: React.ReactNode;
};

// Wrapper component
const Icon = ({ classes = 'rect-24', children }: IconProps) => {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={classes}>
      {children}
    </svg>
  );
};

// Icons
export const AddIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon {...props}>
      <path d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
    </Icon>
  );
};

export const CloseIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon {...props}>
      <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
    </Icon>
  );
};
