import { twMerge } from "tailwind-merge";

const Radio = ({
  value,
  className,
  children,
  checked,
  onChange,
  disabled = false,
  ...restProps
}) => {
  return (
    <label className={"flex flex-row gap-1.5 items-center"}>
      <label className="relative flex items-center cursor-pointer">
        <input
          type="radio"
          value={value}
          checked={checked} // Ensure it reflects the checked state
          onChange={onChange} // Handle state change
          className={twMerge(
            className,
            "peer appearance-none w-4 h-4 border border-fade rounded-full checked:border-2 checked:border-primary-100 focus:custom-shadow-radio disabled:bg-fade disabled:cursor-not-allowed"
          )}
          disabled={disabled}
          {...restProps}
        />
        <span className="absolute bg-primary-100 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </label>
      {children && (
        <span
          className={`font-medium text-sm ${
            checked ? "text-gray-100" : "text-gray-50"
          } transition-colors duration-200`}
        >
          {children}
        </span>
      )}
    </label>
  );
};

export default Radio;
