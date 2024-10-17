"use client";
import { useState } from "react";
import { Check } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { Text } from "..";

const Checkbox = ({
  onChange,
  onClick,
  checked = undefined,
  children,
  disabled = false,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  let baseClasses =
    "w-4 h-4 rounded-[4px] p-[2px] transition-colors duration-200 flex items-center justify-center";
  let additionalClasses = "";

  if (!disabled && checked) {
    additionalClasses += "bg-primary-100 border-none ";
  } else {
    additionalClasses += "border border-fade ";
  }

  if (isFocused && !disabled) {
    additionalClasses += "shadow-[0_0_1px_1px_rgba(6,140,205,0.15)] ";
  }

  if (disabled) {
    additionalClasses += "bg-fade cursor-not-allowed ";
  }

  if (disabled && checked) {
    additionalClasses += "text-gray-30 ";
  } else {
    additionalClasses += "text-white ";
  }
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        disabled={disabled}
        {...props}
      />
      <div
        className={twMerge(baseClasses, additionalClasses, className)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={onClick}
        tabIndex={0}
      >
        {checked && <Check size={12} weight="bold" />}
      </div>
      <Text tag="span" weight="500">{children}</Text>
    </label>
  );
};

export default Checkbox;
