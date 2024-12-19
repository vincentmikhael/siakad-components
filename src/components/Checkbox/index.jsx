"use client";
import {useState} from "react";
import {Check} from "@phosphor-icons/react";
import {twMerge} from "tailwind-merge";
import {Text} from "..";

const Checkbox = ({
                      label = "Label",
                      showLabel = false,
                      showHint = false,
                      hint,
                      error,
                      onChange,
                      onClick,
                      checked = undefined,
                      children,
                      disabled = false,
                      className,
                      classLabel = "",
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

    const colorClasses = disabled ? "text-gray-50" : "text-gray-100";
    const hintColorClasses = error ? "text-danger-90" : "text-gray-50";
    return (
        <div className={twMerge("flex flex-col gap-1.5", className)}>
            {showLabel && (
                <label
                    className={twMerge(
                        "block text-sm font-medium",
                        colorClasses,
                        classLabel
                    )}
                >
                    {label}
                </label>
            )}
            <label className={`flex items-center cursor-pointer w-fit ${children ? "gap-2" : ""}`}>
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
                    {checked && <Check size={12} weight="bold"/>}
                </div>
                <Text tag="span" weight="500" size="sm"
                      color={checked ? "text-gray-100" : "text-gray-50"}>{children}</Text>
            </label>
            {showHint && (error || hint) && (
                <Text tag="label" size="sm" weight="400" color={hintColorClasses}>
                    {error || hint}
                </Text>
            )}
        </div>
    );
};

export default Checkbox;
