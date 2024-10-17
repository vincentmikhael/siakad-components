import { twMerge } from "tailwind-merge";

const Label = ({ children, color = "default", className, ...props }) => {
  const colorClasses = {
    default: "text-gray-100",
    disabled: "text-gray-50",
    red: "text-danger-90",
    green: "text-success-90",
  };
  return (
    <label
      className={twMerge(
        "block text-sm font-medium",
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
