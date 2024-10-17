"use client";
import { EnvelopeSimple, Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  placeholder = "Placeholder",
  className = "",
  onFocus,
  value,
  defaultValue,
  onChange,
  type = "text",
  leftIcon,
  rightIcon,
  size = "sm",
  error,
  disabled = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const baseClasses =
    "flex flex-row gap-2 justify-start items-center py-2.5 px-3.5 border rounded-xl transition-all duration-200 text-gray-40";
  const focusClasses =
    "border-primary-100 shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]";
  const errorClasses =
    "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";
  const sizeClasses = {
    xs: "h-9",
    sm: "h-10",
    lg: "h-12",
  };

  const fieldClasses = twMerge(
    baseClasses,
    sizeClasses[size],
    isFocused && !disabled
      ? focusClasses
      : error
      ? errorClasses
      : "border-gray-20 drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]",
    disabled ? "bg-fade" : "bg-white"
  );

  const inputClasses =
    "w-full block placeholder:text-gray-30 text-sm outline-none text-gray-100";

  return (
    // <div className="flex flex-col gap-1.5 rounded justify-start items-start w-full">
    <div className={twMerge(fieldClasses, className)}>
      {type === "email" ? (
        <EnvelopeSimple size={16} weight="bold" />
      ) : (
        leftIcon && <span>{leftIcon}</span>
      )}
      <input
        className={inputClasses}
        type={inputType}
        value={value}
        onChange={disabled ? undefined : onChange}
        placeholder={placeholder}
        onFocus={() => {
          if (!disabled) {
            setIsFocused(true);
            if (onFocus) {
              onFocus(); 
            }
          }
        }}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        defaultValue={defaultValue}
        {...props}
      />
      {type === "password" ? (
        <button
          type="button"
          className="text-gray-40"
          onClick={handleShowPassword}
        >
          {inputType === "password" ? (
            <Eye size={16} weight="bold" />
          ) : (
            <EyeSlash size={16} weight="bold" />
          )}
        </button>
      ) : (
        rightIcon && <span>{rightIcon}</span>
      )}
    </div>
    // {/* </div> */}
  );
};

export default Input;
