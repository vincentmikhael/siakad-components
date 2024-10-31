import { twMerge } from "tailwind-merge";

const IconButton = ({
  children,
  className,
  size = "sm",
  type = "button",
  disabled = false,
  variant = "white",
  onClick,
  ...props
}) => {
  const baseClasses =
    "overflow-hidden justify-center items-center p-2 border disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "rounded-[10px] text-xs",
    md: "rounded-xl text-base",
  };

  const variantClasses = {
    primary: `bg-primary-10 text-primary-100 border-primary-30 hover:border-primary-80 hover:text-primary-80 focus:border-primary-90 focus:text-primary-90 focus:bg-primary-20 disabled:text-gray-40 ${
      size === "sm"
        ? "disabled:bg-gray-20 disabled:border-fade"
        : "disabled:bg-gray-30 disabled:border-0"
    }`,
    white:
      "bg-white text-gray-40 border-gray-20 hover:border-fade disabled:border-0 disabled:bg-gray-30",
    warning: `bg-warning-10 text-warning-90 border-warning-30 hover:border-warning-80 hover:text-warning-80 focus:border-warning-90 focus:text-warning-90 focus:bg-warning-20 ${
      size === "sm"
        ? "disabled:bg-gray-20 disabled:border-fade"
        : "disabled:bg-gray-30 disabled:border-0"
    }`,
    danger: `bg-danger-10 text-danger-90 border-danger-30 hover:border-danger-80 hover:text-danger-80 focus:border-danger-90 focus:text-danger-90 focus:bg-danger-20 ${
      size === "sm"
        ? "disabled:bg-gray-20 disabled:border-fade"
        : "disabled:bg-gray-30 disabled:border-0"
    }`,
    success: `bg-success-10 text-success-90 border-success-30 hover:border-success-80 hover:text-success-80 focus:border-success-90 focus:text-success-90 focus:bg-success-20 ${
      size === "sm"
        ? "disabled:bg-gray-20 disabled:border-fade"
        : "disabled:bg-gray-30 disabled:border-0"
    }`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        baseClasses,
        className,
        sizeClasses[size],
        variantClasses[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
