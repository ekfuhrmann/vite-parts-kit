interface ButtonProps {
  /**
   * What styles should be applied to the button?
   */
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "subtle"
    | "link"
    | "destructive"
    | "destructive-outline";

  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  size = "md",
  variant = "primary",
  label,
  ...props
}: ButtonProps) => {
  let btnStyles;

  switch (variant) {
    case "primary":
      btnStyles =
        "bg-primary text-white shadow-button border-0 hover:bg-primary-hover hover:text-white active:!bg-primary-active active:!text-white disabled:!border-none disabled:!bg-gray-100 disabled:!text-gray-400";
      break;

    default:
      break;
  }

  return (
    <button
      type="button"
      className={`inline-flex transition-colors duration-200 items-center gap-8 rounded justify-center px-20 h-48 text-center ${btnStyles}`}
      {...props}
    >
      {label}
    </button>
  );
};
