import {
  CheckCircle,
  Info,
  WarningCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";
import { Text } from "..";

const Alert = ({
  title = "New Alert",
  message = "This is a new alert",
  status = "success",
  className,
  ...props
}) => {
  const baseClasses =
    "flex flex-row gap-4 px-4 py-3 rounded-lg w-full border items-center shadow-[0px_12px_24px_-12px_rgba(24,78,68,0.2)]";
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
  return (
    <div
      className={twMerge(baseClasses, statusClasses[status], className)}
      {...props}
    >
      {status === "success" ? (
        <CheckCircle size={16} weight="bold" />
      ) : status === "danger" ? (
        <XCircle size={16} weight="bold" />
      ) : status === "info" ? (
        <WarningCircle size={16} weight="bold" />
      ) : (
        <Info size={16} weight="bold" />
      )}
      <div className="flex flex-col">
        <Text size="sm" weight="500">
          {title}
        </Text>
        <Text color="text-gray-50" size="xs" weight="500">
          {message}
        </Text>
      </div>
    </div>
  );
};

export default Alert;
