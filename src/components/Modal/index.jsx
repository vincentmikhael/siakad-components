"use client";
import React, {useEffect} from "react";
import {twMerge} from "tailwind-merge";
import {X} from "@phosphor-icons/react";
import {IconButton, Text} from "..";

const Modal = ({
                   open = false,
                   title = "",
                   description = "",
                   size = "md",
                   placement = "top-center",
                   autoClose = false,
                   dismissable = true,
                   backdropClass,
                   defaultClass,
                   outsideClose = false,
                   dialogClass,
                   children,
                   ...props
               }) => {
    const backdropClasses = "fixed inset-0 z-50 bg-gray-100 bg-opacity-50";
    const dialogClasses =
        "fixed top-0 start-0 end-0 md:inset-0 h-full z-50 w-full flex p-8 flex overflow-y-auto scrollbar-none";
    const sizes = {
        xs: "max-w-md",
        sm: "max-w-lg",
        md: "max-w-2xl",
        lg: "max-w-4xl",
        xl: "max-w-7xl",
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open]);

    const hide = (e) => {
        e.preventDefault();
        props.onClose();
    };

    const handleKeys = (e) => {
        if (e.key === "Escape" && dismissable) {
            hide(e);
        }
    };
    const onAutoClose = (e) => {
        const target = e.target;
        if (autoClose && target?.tagName === "BUTTON") hide(e); // close on any button click
    };
    const onOutsideClose = (e) => {
        if (outsideClose && e.target === e.currentTarget) {
            hide(e);
        }
    };

    const placementClasses = {
        "top-left": "justify-start items-start",
        "top-center": "justify-center items-start",
        "top-right": "justify-end items-start",
        "center-left": "justify-start items-center",
        center: "justify-center items-center",
        "center-right": "justify-end items-center",
        "bottom-left": "justify-start items-end",
        "bottom-center": "justify-center items-end",
        "bottom-right": "justify-end items-end",
    };

    if (!open) return null;

    const childrenArray = React.Children.toArray(children);
    const header =
        childrenArray.find((child) => child.type === Modal.Header) || null;
    const body = childrenArray.find((child) => child.type === Modal.Body) || null;
    const footer =
        childrenArray.find((child) => child.type === Modal.Footer) || null;

    return (
        <>
            <div className={twMerge(backdropClasses, backdropClass)}/>
            <div
                onKeyDown={handleKeys}
                onClick={onOutsideClose}
                className={twMerge(
                    dialogClass,
                    placementClasses[placement],
                    dialogClasses
                )}
                tabIndex="-1"
                aria-modal="true"
                role="dialog"
            >
                <div className={`flex relative ${sizes[size]} w-full min-h-full`}>
                    {/* Modal Content */}
                    <div
                        className={twMerge(
                            defaultClass,
                            "flex bg-white rounded-[20px] w-full flex-col mx-auto h-auto max-h-max"
                        )}
                        {...props}
                    >
                        {/* Modal Header */}
                        {(header || title) && (
                            <div className="px-8 pt-8">
                                <div className="flex flex-row justify-between items-start border-b pb-8 border-fade">
                                    {header ? (
                                        header
                                    ) : (
                                        <div className="w-full flex flex-col gap-1.5">
                                            <Text tag="h3" size="xl" weight="600">
                                                {title}
                                            </Text>
                                            {description && (
                                                <Text color="text-gray-60" weight="400" size="sm">
                                                    {description}
                                                </Text>
                                            )}
                                        </div>
                                    )}
                                    {dismissable && (
                                        <IconButton onClick={hide}>
                                            <X weight="bold" size={16}/>
                                        </IconButton>
                                    )}
                                </div>
                            </div>
                        )}
                        {/* Modal Body */}
                        {body && (
                            <div
                                className="space-y-6 flex-1 p-8 scrollbar-none h-fit"
                                onClick={onAutoClose}
                            >
                                {dismissable && !header && !title && (
                                    <div className="flex justify-end items-start">
                                        <IconButton onClick={hide}>
                                            <X weight="bold" size={16}/>
                                        </IconButton>
                                    </div>
                                )}
                                {body}
                            </div>
                        )}
                        {/* Modal Footer */}
                        {footer}
                    </div>
                </div>
            </div>
        </>
    );
};

// Header component
Modal.Header = ({children}) => children;

// Body component
Modal.Body = ({children}) => children;

// Footer component
Modal.Footer = function ModalFooter({children}) {
    return (<div className="px-8 pb-8">
        <div className="border-t border-fade pt-8">{children}</div>
    </div>);
};

export default Modal;
