"use client";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDown, Check } from "@phosphor-icons/react";
import { Text } from "..";

const Select = ({
  options,
  label = "Label",
  showLabel = false,
  placeholder = "Select option",
  onChange,
  error,
  disabled = false,
  size = "sm",
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const baseClasses =
    "flex flex-row justify-between items-center w-full py-2.5 px-3.5 border rounded-xl transition-all duration-200 cursor-pointer";
  const focusClasses =
    "border-primary-100 shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]";
  const errorClasses =
    "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";

  const colorClasses = disabled ? "text-gray-50" : "text-gray-100";

  const sizeClasses = {
    xs: "h-9",
    sm: "h-10",
    lg: "h-12",
  };

  const fieldClasses = twMerge(
    baseClasses,
    isOpen && !disabled
      ? focusClasses
      : error
      ? errorClasses
      : "border-gray-20 drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]",
    disabled ? "bg-fade" : "bg-white",
    sizeClasses[size]
  );

  const menuClasses =
    "border-fade border-[1px] absolute z-10 mt-1 w-full bg-white rounded-lg p-1.5 max-h-80 overflow-y-auto space-y-1 custom-shadow-select";

  const optionClasses =
    "hover:bg-primary-10 p-2.5 cursor-pointer rounded-md flex items-center justify-between text-primary-100";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-1.5">
      {showLabel && (
        <label
          className={twMerge(
            "block text-sm font-medium",
            colorClasses,
            className
          )}
        >
          {label}
        </label>
      )}
      <div
        className={twMerge("relative", className)}
        ref={selectRef}
        {...props}
      >
        <div className={fieldClasses} onClick={toggleDropdown}>
          <Text
            tag="span"
            size={size === "xs" ? "xs" : "sm"}
            weight="400"
            color={selectedOption ? "text-gray-100" : "text-gray-30"}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <div className="text-gray-40">
            <CaretDown size={16} weight="bold" />
          </div>
        </div>
        {isOpen && (
          <div className={menuClasses}>
            {options.map((option, index) => {
              const isSelected = selectedOption?.value === option.value;
              return (
                <div
                  key={index}
                  className={twMerge(
                    optionClasses,
                    isSelected
                      ? "bg-primary-10 text-primary-100"
                      : "hover:bg-primary-10 hover:text-primary-100"
                  )}
                  onClick={() => handleOptionClick(option)}
                >
                  <Text tag="p">{option.label}</Text>
                  {isSelected && <Check weight="bold" />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
