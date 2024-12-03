"use client";

import {useState, useEffect, useRef} from "react";
import {twMerge} from "tailwind-merge";
import {CaretDown, Check} from "@phosphor-icons/react";
import {Text} from "..";

const Select = ({
                    isRelative = true,
                    options,
                    label = "Label",
                    showLabel = false,
                    showHint = false,
                    hint = "This is a hint text to help user.",
                    placeholder = "Select option",
                    onChange,
                    name,
                    error,
                    disabled = false,
                    size = "sm",
                    className,
                    value,
                    labelKey = "label",
                    valueKey = "value",
                    ...props
                }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const selectRef = useRef(null);

    useEffect(() => {
        if (value) {
            const initialOption = options.find(option => option[valueKey] === value);
            setSelectedOption(initialOption || null);
        }
    }, [value, options]);

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
        "flex flex-row gap-3 justify-between items-center py-2.5 px-3.5 border rounded-xl transition-all duration-200 cursor-pointer";
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
        sizeClasses[size],
    );

    const menuClasses =
        `border-fade border-[1px] absolute z-10 mt-1 ${isRelative ? 'w-full' : 'min-w-[200px]'} bg-white rounded-lg p-1.5 max-h-80 overflow-y-auto space-y-1 custom-shadow-select scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full`;

    const optionClasses =
        "hover:bg-primary-10 p-2.5 cursor-pointer rounded-md flex items-center justify-between text-primary-100";

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange({
            target: {
                name,
                value: option[valueKey],
            },
        });
        setIsOpen(false);
    };

    const hintColorClasses = error ? "text-danger-90" : "text-gray-50";

    return (
        <div className="flex flex-col gap-1.5 w-full">
            {showLabel && (
                <label
                    className={twMerge(
                        "block text-sm font-medium",
                        colorClasses,
                    )}
                >
                    {label}
                </label>
            )}
            <div
                className={isRelative ? twMerge("relative", className) : className}
                ref={selectRef}
                {...props}
            >
                <div className={fieldClasses} onClick={toggleDropdown}>
                    <Text
                        tag="span"
                        size={size === "xs" ? "xs" : "sm"}
                        weight="400"
                        color={selectedOption ? "text-gray-100" : "text-gray-30"}
                        className="truncate w-full overflow-hidden whitespace-nowrap"
                    >
                        {selectedOption ? selectedOption[labelKey] : placeholder}
                    </Text>
                    <div className="text-gray-40">
                        <CaretDown size={16} weight="bold"/>
                    </div>
                </div>
                {isOpen && (
                    <ul className={menuClasses}>
                        {options.map((option, index) => {
                            const isSelected = selectedOption?.[valueKey] === option[valueKey];
                            return (
                                <li
                                    key={index}
                                    className={twMerge(
                                        optionClasses,
                                        isSelected
                                            ? "bg-primary-10 text-primary-100"
                                            : "hover:bg-primary-10 hover:text-primary-100"
                                    )}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <Text tag="p">{option[labelKey]}</Text>
                                    {isSelected && <Check weight="bold"/>}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            {showHint && (error || hint) && (
                <Text tag="label" size="sm" weight="400" color={hintColorClasses}>
                    {error || hint}
                </Text>
            )}
        </div>
    );
};

export default Select;
