const { twMerge } = require("tailwind-merge");

const Button = ({
  type = "button",
  variant = "primary",
  size = "sm",
  leftIcon,
  rightIcon,
  children,
  onClick,
  className,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const baseClasses = twMerge(
    "inline-flex items-center rounded-xl gap-[6px] border focus:outline-none font-semibold justify-center",
    fullWidth ? "w-full" : "w-fit"
  );
  const variantClasses = {
    primary:
      "bg-primary-100 hover:bg-primary-80 focus:bg-primary-110 focus:border-primary-100 text-white",
    white:
      "bg-white hover:bg-fade hover:border-fade focus:bg-white border-gray-20 focus:border-0 text-gray-50",
    info: "bg-info-90 hover:bg-info-80 focus:bg-info-100 focus:border-info-90 text-white",
    success:
      "bg-success-90 hover:bg-success-80 focus:bg-success-100 focus:border-success-90 text-white",
    danger:
      "bg-danger-90 hover:bg-danger-80 focus:bg-danger-100 focus:border-danger-90 text-white",
    warning:
      "bg-warning-90 hover:bg-warning-80 focus:bg-warning-100 focus:border-warning-90 text-white",
  };

  const disabledClasses =
    "disabled:bg-gray-30 disabled:text-gray-40 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "text-[13px] py-1.5 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-sm py-3 px-4",
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && disabledClasses,
        className
      )}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
