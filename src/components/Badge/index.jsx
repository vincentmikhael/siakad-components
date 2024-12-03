import {twMerge} from "tailwind-merge";

const Badge = ({
                   children,
                   variant = "primary",
                   filled = false,
                   size = "lg",
                   className,
                   ...props
               }) => {

    const sizeClasses = {
        sm: "px-2 py-[2px] text-xs leading-[19.2px]",
        md: "px-[10px] py-[2px] text-sm leading-[22.4px]",
        lg: "px-3 py-1 text-sm leading-[22.4px]",
    };

    const outlineClasses = {
        default: "border-gray-30 text-gray-90 bg-gray-20",
        success: "border-success-30 text-success-90 bg-success-10",
        warning: "border-warning-30 text-warning-90 bg-warning-10",
        danger: "border-danger-30 text-danger-90 bg-danger-10",
        primary: "border-primary-30 text-primary-100 bg-primary-10",
    };

    const filledClasses = {
        default: "text-gray-90 bg-gray-30 border-0",
        success: "text-gray-10 bg-success-90 border-0",
        warning: "text-gray-10 bg-warning-90 border-0",
        danger: "text-gray-10 bg-danger-90 border-0",
        primary: "text-gray-10 bg-primary-100 border-0",
    }

    const typeClasses = filled ? filledClasses[variant] : outlineClasses[variant];

    return (
        <div
            className={twMerge(
                "border font-medium rounded-full text-center inline-block",
                typeClasses,
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Badge;
