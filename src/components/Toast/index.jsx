"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { X } from "@phosphor-icons/react";
import { IconButton, Text } from "..";

const Toast = ({
  title = "New Toast",
  message = "This is a new alert",
  status = "success",
  position = "top-right",
  dismissable = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeToast = () => {
    setIsVisible(false);
  };
  const baseClasses =
    "flex flex-row gap-4 p-4 rounded-xl w-72 border items-start transition-opacity duration-300 ease-in-out shadow-[0px_16px_22px_-6px_rgba(16,24,40,0.1)]";

  const successClasses = "border-success-60 bg-success-10 text-success-90";

  const warningClasses = "border-warning-60 bg-warning-10 text-warning-90";

  const dangerClasses = "border-danger-60 bg-danger-10 text-danger-90";

  const infoClasses = "border-info-60 bg-info-10 text-info-90";

  const statusClasses = {
    success: successClasses,
    danger: dangerClasses,
    warning: warningClasses,
    info: infoClasses,
  };

  const positionClasses = {
    "top-right": "top-12 right-9",
    "top-left": "top-12 left-9",
    "bottom-right": "bottom-12 right-9",
    "bottom-left": "bottom-12 left-9",
  };
  return (
    <div
      className={twMerge("absolute z-50", positionClasses[position])}
      {...props}
    >
      <div
        className={twMerge(
          baseClasses,
          statusClasses[status],
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="600">
            {title}
          </Text>
          <Text size="xs" color="gray-50" weight="600">
            {message}
          </Text>
        </div>
        {dismissable && (
          <IconButton onClick={closeToast}>
            <X weight="bold" size={12} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Toast;
