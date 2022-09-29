import React from 'react';

export type IconProps = {
  /**
   Apply additional styles to the svg.
   */
  classes?: string;

  /**
   Specify whether the icon is outlined or filled
   */
  outlined?: boolean;

  /**
   The root node component.
   */
  children?: React.ReactNode;
};

// Wrapper component
const Icon = ({
  classes = 'rect-24',
  outlined = false,
  children,
}: IconProps) => {
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

export const DeleteIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon {...props}>
      {props.outlined ? (
        <path d='M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z' />
      ) : (
        <path d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z' />
      )}
    </Icon>
  );
};

export const ArrowRightIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon {...props}>
      <path d='M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z' />
    </Icon>
  );
};
