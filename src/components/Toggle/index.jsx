"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "..";

const Toggle = ({
  onChange,
  checked = false,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      setIsChecked((prev) => !prev);
      onChange && onChange(!isChecked);
    }
  };

  return (
    <label
      className={twMerge(
        "flex items-center gap-2",
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      )}
    >
      <div
        onClick={handleToggle}
        className={twMerge(
          "relative w-9 h-5 flex items-center rounded-full p-[2px] transition-colors duration-200",
          isChecked ? "bg-primary-100" : "bg-gray-20",
          disabled && "opacity-50",
          className
        )}
        {...props}
      >
        <div
          className={twMerge(
            "absolute w-4 h-4 rounded-full shadow-[0px_1px_5px_0px_rgba(16,24,40,0.16)] transition-transform duration-200",
            isChecked ? "translate-x-4" : "translate-x-0",
            disabled ? "bg-fade" : "bg-white"
          )}
        />
      </div>
      <Text weight="500">{children}</Text>
    </label>
  );
};

export default Toggle;
