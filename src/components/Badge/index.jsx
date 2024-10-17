import { twMerge } from "tailwind-merge";

const Badge = ({
  children,
  type = "default",
  size = "sm",
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2 py-[2px] text-xs",
    md: "px-[10px] py-[2px] text-sm",
    lg: "px-3 py-1 text-sm",
  };

  const typeClasses = {
    default: "border-gray-30 text-gray-90 bg-gray-20",
    success: "border-success-30 text-success-90 bg-success-10",
    warning: "border-warning-30 text-warning-90 bg-warning-10",
    danger: "border-danger-30 text-danger-90 bg-danger-10",
  };

  return (
    <div
      className={twMerge(
        "border font-medium rounded-full",
        typeClasses[type],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
