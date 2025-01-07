"use client";
import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import {X} from "@phosphor-icons/react";
import {IconButton, Text} from "..";

const Toast = ({
                   title = "New Toast",
                   message = "This is a new alert",
                   status = "success",
                   position = "top-right",
                   dismissable = true,
                   isVisible,
                   onDismiss,
                   ...props
               }) => {
    const [isAnimating, setIsAnimating] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setIsAnimating(true);
        } else {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const baseClasses =
        "flex flex-row gap-4 p-4 rounded-xl w-[296px] border justify-between items-start transition-opacity duration-300 ease-in-out shadow-[0px_16px_22px_-6px_rgba(16,24,40,0.1)]";

    const statusClasses = {
        success: "border-success-60 bg-success-10 text-success-90",
        danger: "border-danger-60 bg-danger-10 text-danger-90",
        warning: "border-warning-60 bg-warning-10 text-warning-90",
        info: "border-info-60 bg-info-10 text-info-90",
    };

    const positionClasses = {
        "top-right": "top-24 xl:top-44 right-5 xl:right-9",
        "top-left": "top-24 xl:top-44 left-5 xl:left-9",
        "bottom-right": "bottom-12 right-9",
        "bottom-left": "bottom-12 left-9",
    };
    if (!isVisible && !isAnimating) return null;
    return (
        <div
            className={twMerge("fixed z-50", positionClasses[position])}
            {...props}
        >
            <div
                className={twMerge(
                    baseClasses,
                    statusClasses[status],
                    isAnimating
                        ? (isVisible ? 'animate-fade-in' : 'animate-fade-out') // Add animation classes
                        : 'opacity-0'
                )}
            >
                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="600">
                        {title}
                    </Text>
                    <Text size="xs" color="text-gray-50" weight="400">
                        {message}
                    </Text>
                </div>
                {dismissable && (
                    <IconButton onClick={onDismiss}>
                        <X weight="bold" size={12}/>
                    </IconButton>
                )}
            </div>
        </div>
    );
};

export default Toast;
