import { twMerge } from "tailwind-merge";

const Textarea = ({
  value,
  onChange,
  placeholder = "placeholder",
  rows = 4,
  className,
  disabled = false,
  error,
  ...props
}) => {
  const errorClasses =
    "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";
  const baseClasses = twMerge(
    "rounded-xl bg-white px-3.5 py-2.5 placeholder:text-gray-30 w-full text-gray-100 disabled:bg-fade disabled:cursor-not-allowed border resize-none",
    error
      ? errorClasses
      : "border-gray-20 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus:border-primary-100 focus:shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]"
  );
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={twMerge(baseClasses, className)}
      {...props}
    />
  );
};

export default Textarea;
