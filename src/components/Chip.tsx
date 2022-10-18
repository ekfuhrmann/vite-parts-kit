import cx from 'classnames';
import { ElementType } from 'react';

type ChipProps = {
  /**
  Element placed **before** the children.
  */
  startIcon?: React.ReactNode;

  /**
  Element placed **after** the children.
  */
  endIcon?: React.ReactNode;

  /**
  What the inner content of the chip is.
  */
  children: React.ReactNode;

  /**
  What custom classes should be applied to the element?
  */
  className?: string;

  // TODO: want to add `as` or `component` type
  /**
  The component used for the root node. Either a string to use a HTML element or a component.
  */
  as?: ElementType;

  /**
  Optional click handler.
  */
  onClick?: () => void;

  /**
  How large should the tab be?
  */
  size?: 'sm' | 'md';
};

export const Chip = ({
  startIcon = undefined,
  endIcon = undefined,
  size = 'md',
  children,
  className,
  ...props
}: ChipProps) => {
  const chipStyles = cx(
    // base
    'shrink-0 inline-flex items-center gap-x-6 px-8 text-center truncate bg-gray-100 rounded-full text-secondary-text [&_svg]:-mx-4',
    {
      // handle size
      'text-xs py-1 [&_svg]:rect-14': size === 'sm',
      'text-sm py-2 [&_svg]:rect-16': size === 'md',
    },
  );

  return (
    <span className={`${chipStyles} ${className}`} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </span>
  );
};
