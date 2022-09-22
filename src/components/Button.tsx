import cx from 'classnames';
// import * as Icons from "./Icons";
import * as Icons from './Icons';

// type IconTypes = {[]: };
type IconTypes = typeof Icons.AddIcon | typeof Icons.CloseIcon;

type ButtonProps = {
  /**
   What styles should be applied to the button?
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'outlined'
    | 'subtle'
    | 'link'
    | 'destructive'
    | 'destructive-outlined';

  /**
   How large should the button be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';

  /**
   Element placed **before** the children.
   */
  startIcon?: React.ReactNode;

  /**
   Element placed **after** the children.
   */
  endIcon?: React.ReactNode;

  /**
   When present, specifies that the button should be disabled
   */
  disabled?: boolean;

  /**
   Button content
   */
  children: React.ReactNode;

  /**
   Optional click handler
   */
  onClick?: () => void;
};

export const Button = ({
  size = 'md',
  variant = 'primary',
  children,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const btnStyles = cx(
    // base
    'inline-flex transition-colors duration-200 items-center gap-10 rounded justify-center text-center [&_svg]:-mx-4 [&_svg]:rect-20 !p-24',
    {
      // handle variants
      'bg-primary text-white shadow-button border-0 hover:bg-primary-hover hover:text-white active:!bg-primary-active active:!text-white disabled:!border-none disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'primary',
      'bg-white text-primary border border-default shadow-button hover:bg-gray-100 hover:text-primary-hover active:!bg-gray-200 active:!text-primary-active disabled:!ring-gray-200  disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'outlined',
      'bg-blue-100 text-blue-700 hover:bg-blue-50 hover:text-blue-600 active:!bg-blue-200 disabled:!ring-gray-200 disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'secondary',
      'bg-transparent text-primary hover:bg-gray-100 hover:text-primary-hover active:!bg-gray-200 active:!text-primary-active disabled:!ring-gray-200 disabled:!bg-transparent disabled:!text-gray-400':
        variant === 'subtle',
      'bg-transparent text-primary !px-0 hover:text-blue-400 active:!text-blue-800 disabled:!text-gray-400':
        variant === 'link',
      'bg-status-error text-white border border-default shadow-button hover:bg-red-400 active:!bg-red-600 disabled:!border-none disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'destructive',
      'bg-white text-status-error border border-status-error shadow-button hover:bg-red-50 hover:text-red-600 active:!bg-red-600 active:!text-white disabled:!border-gray-200 disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'destructive-outlined',

      // handle size
      'px-8 h-28': size === 'xs',
      'px-16 h-40': size === 'sm',
      'px-20 h-48': size === 'md',
      'px-24 h-56': size === 'lg',
    },
  );

  return (
    <button type='button' className={btnStyles} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
