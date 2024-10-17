import { twMerge } from "tailwind-merge";

const IconButton = ({
  children,
  className,
  size = "sm",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "flex flex-row gap-1.5 overflow-hidden justify-center items-center bg-white p-2 border text-gray-40 border-gray-20 hover:border-fade disabled:border-0 disabled:cursor-not-allowed disabled:bg-gray-30";

  const sizeClasses = {
    sm: "rounded-xl",
    md: "rounded-[10px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(baseClasses, className, sizeClasses[size])}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
