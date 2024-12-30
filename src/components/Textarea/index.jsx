import {twMerge} from "tailwind-merge";
import {Text} from "@/components";

const Textarea = ({
                      label = "Label",
                      showLabel = false,
                      showHint = false,
                      hint,
                      value,
                      onChange,
                      placeholder = "placeholder",
                      rows = 4,
                      className,
                      classLabel = "",
                      disabled = false,
                      error,
                      ...props
                  }) => {
    const errorClasses =
        "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";
    const baseClasses = twMerge(
        "rounded-xl bg-white px-3.5 py-2.5 placeholder:text-gray-30 placeholder:text-sm w-full text-gray-100 disabled:bg-fade disabled:cursor-not-allowed border resize-none",
        error
            ? errorClasses
            : "border-gray-20 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus:border-primary-100 focus:shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]"
    );

    const colorClasses = disabled ? "text-gray-50" : "text-gray-100";
    const hintColorClasses = error ? "text-danger-90" : "text-gray-50";
    return (
        <div className={twMerge("flex flex-col gap-1.5", className)}>
            {showLabel && (
                <label
                    className={twMerge(
                        "block text-sm font-medium",
                        colorClasses,
                        classLabel
                    )}
                >
                    {label}
                </label>
            )}
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={twMerge(baseClasses, className)}
                {...props}
            />
            {showHint && (error || hint) && (
                <Text tag="label" size="sm" weight="400" color={hintColorClasses}>
                    {error || hint}
                </Text>
            )}
        </div>
    );
};

export default Textarea;
