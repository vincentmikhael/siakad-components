"use client"
import {twMerge} from "tailwind-merge";
import {useState} from "react";

const Radio = ({
                   options,
                   selected,
                   name,
                   className,
                   children,
                   onChange,
                   ...restProps
               }) => {
    const [optionSelected, setOptionSelected] = useState(selected || "");
    const handleSelect = (value) => {
        setOptionSelected(value);
        if (onChange) onChange(value);
    }
    return (
        // <label className={"flex flex-row gap-1.5 items-center"}>
        <>
            {options.map((option, index) => (
                <div className={"flex flex-row gap-1.5 items-center cursor-pointer"} key={index}>
                    <label className="relative flex items-center">
                        <input
                            type="radio"
                            value={option.value}
                            name={name}
                            checked={optionSelected === option.value} // Ensure it reflects the checked state
                            onChange={() => handleSelect(option.value)} // Handle state change
                            className={twMerge(
                                className,
                                "peer appearance-none w-4 h-4 border border-fade rounded-full checked:border-2 checked:border-primary-100 focus:custom-shadow-radio disabled:bg-fade disabled:cursor-not-allowed"
                            )}
                            disabled={option.disabled}
                            {...restProps}
                        />
                        <span
                            className="absolute bg-primary-100 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </label>
                    {option.label && (
                        <span
                            className={`font-medium text-sm ${
                                optionSelected === option.value ? "text-gray-100" : "text-gray-50"
                            } transition-colors duration-200`}
                        >
                            {option.label}
                        </span>
                    )}
                </div>
            ))}
            {/*</label>*/}
        </>
    );
};

export default Radio;
