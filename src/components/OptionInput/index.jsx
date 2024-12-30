"use client";

import {X} from "@phosphor-icons/react";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import {Text} from "..";

const OptionInput = ({
                         placeholder = "Placeholder",
                         showHint = false,
                         hint,
                         className = "",
                         classInput = "",
                         classLabel = "",
                         onFocus,
                         value,
                         defaultValue,
                         onChange,
                         type = "checkbox",
                         leftIcon,
                         rightIcon,
                         size = "sm",
                         error,
                         disabled = false,
                         onRemove,
                         ...props
                     }) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseClasses =
        "transition-all duration-200 h-fit";
    const focusClasses =
        "border-primary-100 border-b";
    const errorClasses =
        "border-b border-danger-90";
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
                : "border-gray-20",
        disabled ? "bg-fade" : "bg-white"
    );

    const inputClasses =
        `w-full block placeholder:text-gray-30 text-sm outline-none text-gray-50 p-0 pt-0.5 h-fit transition-all duration-200 hover:border-b hover:border-gray-20 focus:border-b focus:border-primary-100 ${error && errorClasses}`;

    const hintColorClasses = error ? "text-danger-90" : "text-gray-50";

    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex flex-row items-center gap-6">
                <div className={twMerge("flex flex-row gap-1.5 items-center grow", className)}>
                    {type === "checkbox" ? (
                        <div className="w-4 h-4 border border-gray-20 rounded"/>
                    ) : (
                        <div className="w-4 h-4 border border-fade rounded-full"/>
                    )}
                    <input
                        className={inputClasses}
                        type="text"
                        value={value}
                        onChange={disabled ? undefined : onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        {...props}
                    />
                </div>

                <button className="text-gray-40 hover:text-gray-80" type="button" onClick={onRemove}>
                    <X size={16}/>
                </button>
            </div>
            {showHint && (error || hint) && (
                <Text tag="label" size="sm" weight="400" color={hintColorClasses}>
                    {error || hint}
                </Text>
            )}
        </div>
    );
};

export default OptionInput;
