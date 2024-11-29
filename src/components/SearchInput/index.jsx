"use client";
import {useState, useEffect, useRef, useCallback} from "react";
import {twMerge} from "tailwind-merge";
import {Check, MagnifyingGlass} from "@phosphor-icons/react";
import {Text} from "..";

const SearchInput = ({
                         options = [],
                         label = "Label",
                         showLabel = false,
                         showHint = false,
                         hint = "This is a hint text to help user.",
                         placeholder = "Search option",
                         onChange,
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
    const [searchTerm, setSearchTerm] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const selectRef = useRef(null);

    const filteredOptions = options?.filter((item) => {
        if (searchTerm) {
            return item[labelKey].toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
    });

    const handleSelectItem = (item) => {
        const newValue = item[valueKey];
        setInputValue(item[labelKey]);
        setSelectedOption(item);
        setSearchTerm("");
        setIsOpen(false);
        onChange?.(newValue);
    };

    const handleSearchChange = (e) => {
        const targetValue = e.target.value;
        setSearchTerm(targetValue);
        setInputValue(targetValue);

        if (targetValue === "") {
            onChange?.("");
        }
        setIsOpen(true);
    };

    useEffect(() => {
        if (value) {
            const selectedItem = options.find((item) => item[valueKey] === value);
            if (selectedItem) {
                setInputValue(selectedItem[labelKey]);
            } else {
                setInputValue("");
                setSearchTerm("");
            }
        } else {
            setInputValue("");
            setSearchTerm("");
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
        "flex flex-row gap-2 justify-between items-center py-2.5 px-3.5 border rounded-xl transition-all duration-200 cursor-pointer"
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
        "border-fade border-[1px] absolute z-10 mt-1 w-full bg-white rounded-lg p-1.5 max-h-80 overflow-y-auto space-y-1 custom-shadow-select scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full";

    const optionClasses =
        "hover:bg-primary-10 p-2.5 cursor-pointer rounded-md flex items-center justify-between text-primary-100";

    const iconClasses = disabled ? "text-gray-30" : inputValue ? "text-gray-100" : "text-gray-40"

    const hintColorClasses = error ? "text-danger-90" : "text-gray-50";
    const inputClasses =
        "w-full block placeholder:text-gray-30 font-medium text-sm leading-[22.4px] outline-none text-gray-100";
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
                className={twMerge("relative", className)}
                ref={selectRef}
            >
                <div className={twMerge(fieldClasses, iconClasses)}>
                    <MagnifyingGlass size={16} weight="bold"/>
                    <input
                        className={inputClasses}
                        type="text"
                        value={inputValue}
                        placeholder={placeholder}
                        onChange={handleSearchChange}
                        disabled={disabled}
                        onFocus={() => setIsOpen(true)}
                        autoComplete="off"
                        {...props}
                    />
                </div>
                {isOpen && (
                    <ul className={menuClasses}>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => {
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
                                        onClick={() => handleSelectItem(option)}
                                    >
                                        <Text tag="p">{option[labelKey]}</Text>
                                        {isSelected && <Check weight="bold"/>}
                                    </li>
                                );
                            })) : (
                            <li
                                className="p-2.5 rounded-md flex items-center justify-between text-gray-40"
                            >
                                Data tidak ditemukan
                            </li>
                        )}
                    </ul>
                )}
            </div>
            {showHint && (
                <Text tag="label" size="sm" weight="400" color={hintColorClasses}>
                    {error}
                </Text>
            )}
        </div>
    );
};

export default SearchInput;
