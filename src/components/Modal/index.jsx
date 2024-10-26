"use client";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { X } from "@phosphor-icons/react";
import { IconButton, Text } from "..";

const Modal = ({
  open = false,
  title = "",
  description = "",
  size = "md",
  placement = "center",
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
    "overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex";
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

  return (
    <>
      <div className={twMerge(backdropClasses, backdropClass)} />
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
        <div className={`flex relative ${sizes[size]} w-full max-h-full`}>
          {/* Modal Content */}
          <div
            className={twMerge(
              defaultClass,
              "relative bg-white rounded-[20px] w-full flex-col mx-auto p-8"
            )}
            {...props}
          >
            {/* Modal Header */}
            {title && (
              <div className="flex flex-row justify-between items-start pb-8 border-b border-fade">
                <div className="w-full flex flex-col gap-1.5">
                  <Text tag="h3" size="xl" weight="600">
                    {title}
                  </Text>
                  {description && (
                    <Text color="text-gray-60" weight="500" size="sm">
                      {description}
                    </Text>
                  )}
                </div>
                {dismissable && (
                  <IconButton onClick={hide}>
                    <X weight="bold" size={16} />
                  </IconButton>
                )}
              </div>
            )}
            {/* Modal Body */}
            <div className="space-y-8 flex flex-grow pt-8" onClick={onAutoClose}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
