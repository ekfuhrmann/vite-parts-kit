import cx from 'classnames';

/**
 * Label example ehre
 */
type DefaultButtonProps = {
  /**
  What styles should be applied to the element?
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
  What custom classes should be applied to the element?
  */
  className?: string;

  /**
  How large should the button be?
  */
  size?: 'xs' | 'sm' | 'md' | 'lg';

  /**
  When present, specifies that the button should be disabled.
  */
  disabled?: boolean;

  /**
  What the inner content of the button is.
  */
  children?: React.ReactNode;

  /**
  Optional click handler.
  */
  onClick?: () => void;
};

type ButtonProps = DefaultButtonProps & {
  /**
  Element placed **before** the children.
  */
  startIcon?: React.ReactNode;

  /**
  Element placed **after** the children.
  */
  endIcon?: React.ReactNode;
};

type ButtonIconProps = DefaultButtonProps & {
  /**
  Element used in place of children.
  */
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

function setButtonStyles(variant: string, size: string, icon?: boolean) {
  return cx(
    // base
    'inline-flex transition-colors duration-200 items-center gap-10 rounded justify-center text-center align-middle [&_svg]:-mx-4 [&_svg]:rect-20',
    {
      // handle variants
      // primary
      'bg-primary text-white shadow-button border-0 hover:bg-primary-hover hover:text-white active:!bg-primary-active active:!text-white disabled:!border-none disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'primary',
      // outlined
      'bg-white text-primary border border-default shadow-button hover:bg-gray-100 hover:text-primary-hover active:!bg-gray-200 active:!text-primary-active disabled:!ring-gray-200  disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'outlined',
      // secondary
      'bg-blue-100 text-blue-700 hover:bg-blue-50 hover:text-blue-600 active:!bg-blue-200 disabled:!ring-gray-200 disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'secondary',
      // subtle
      'bg-transparent text-primary hover:bg-gray-100 hover:text-primary-hover active:!bg-gray-200 active:!text-primary-active disabled:!ring-gray-200 disabled:!bg-transparent disabled:!text-gray-400':
        variant === 'subtle',
      // link
      'bg-transparent text-primary !px-0 hover:text-blue-400 active:!text-blue-800 disabled:!text-gray-400':
        variant === 'link',
      // destructive
      'bg-status-error text-white shadow-button hover:bg-red-400 active:!bg-red-600 disabled:!border-none disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'destructive',
      // destructive-outlined
      'bg-transparent text-status-error border border-status-error shadow-button hover:bg-red-500/10 hover:text-red-600 active:!bg-red-600 active:!text-white disabled:!border-gray-200 disabled:!bg-gray-100 disabled:!text-gray-400':
        variant === 'destructive-outlined',

      // handle sizes
      // NOTE: you can adjust default svg size and margin offset here
      'px-8 h-28': size === 'xs' && !icon,
      'px-16 h-40': size === 'sm' && !icon,
      'px-20 h-48': size === 'md' && !icon,
      'px-24 h-56': size === 'lg' && !icon,

      // handle sizes for icons
      // NOTE: you can adjust default svg size here
      'rect-28 [&_svg]:rect-16': size === 'xs' && icon,
      'rect-40 [&_svg]:rect-20': size === 'sm' && icon,
      'rect-48 [&_svg]:rect-24': size === 'md' && icon,
      'rect-56 [&_svg]:rect-32': size === 'lg' && icon,
    },
  );
}

export const Button = ({
  size = 'md',
  variant = 'primary',
  children,
  className,
  startIcon = undefined,
  endIcon = undefined,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${setButtonStyles(variant, size)} ${className}`}
      {...props}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export const ButtonIcon = ({
  size = 'md',
  variant = 'primary',
  children,
  className,
  icon = undefined,
  ...props
}: ButtonIconProps) => {
  return (
    <button
      type='button'
      className={`${setButtonStyles(variant, size, true)} ${className}`}
      {...props}>
      {icon ? icon : children}
    </button>
  );
};
