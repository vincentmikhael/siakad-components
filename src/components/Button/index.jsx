import {Link} from "@/components";

const {twMerge} = require("tailwind-merge");

const Button = ({
                    type = "button",
                    variant = "primary",
                    size = "sm",
                    leftIcon,
                    rightIcon,
                    children,
                    onClick,
                    className,
                    disabled = false,
                    fullWidth = false,
                    filled = false,
                    href = "",
                    ...props
                }) => {

    const baseClasses = twMerge(
        "inline-flex items-center rounded-xl gap-[6px] border focus:outline-none font-medium justify-center",
        fullWidth ? "w-full" : "w-fit"
    );

    const outlineClasses = {
        primary:
            "text-primary-100 border-primary-100 hover:text-primary-80 hover:border-primary-80 focus:text-primary-110 focus:border-primary-110",
        white:
            "text-gray-20 border-gray-20 hover:text-fade hover:border-fade focus:text-gray-10 focus:border-0",
        info: "text-info-90 border-info-90 hover:text-info-80 hover:border-info-80 focus:text-info-100 focus:border-info-100",
        success:
            "text-success-90 border-success-90 hover:text-success-80 hover:border-success-80 focus:text-success-100 focus:border-success-100",
        danger:
            "text-danger-90 border-danger-90 hover:text-danger-80 hover:border-danger-80 focus:text-danger-100 focus:border-danger-100",
        warning:
            " text-warning-90 border-warning-90 hover:text-warning-80 hover:border-warning-80 focus:text-warning-100 focus:border-warning-100",
    };

    const filledClasses = {
        primary:
            "bg-primary-100 text-white hover:bg-primary-80 focus:bg-primary-110",
        white:
            "bg-white text-gray-50 hover:bg-fade hover:border-fade focus:bg-white",
        info: "bg-info-90 text-white hover:bg-info-80 focus:bg-info-100",
        success:
            "bg-success-90 text-white hover:bg-success-80 focus:bg-success-100",
        danger: "bg-danger-90 text-white hover:bg-danger-80 focus:bg-danger-100",
        warning:
            "bg-warning-90 text-white hover:bg-warning-80 focus:bg-warning-100",
    };

    const disabledClasses = `disabled:text-gray-40 disabled:cursor-not-allowed ${
        filled
            ? "disabled:bg-gray-30"
            : "disabled:bg-transparent disabled:border-gray-40"
    }`;

    const sizeClasses = {
        sm: "text-[13px] leading-[20.8px] py-1.5 px-3 h-9",
        md: "text-sm leading-[22.4px] py-2 px-4 h-10",
        lg: "text-sm leading-[22.4px] py-3 px-4 h-12",
    };

    const typeClasses = filled ? filledClasses[variant] : outlineClasses[variant];

    if (href) {
        return (
            <Link href={href} {...props} className={twMerge(
                baseClasses,
                typeClasses,
                sizeClasses[size],
                disabled && disabledClasses,
                className,
                filled
            )}>
                {leftIcon && <span className="text-base">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="text-base">{rightIcon}</span>}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={twMerge(
                baseClasses,
                typeClasses,
                sizeClasses[size],
                disabled && disabledClasses,
                className,
                filled
            )}
            {...props}
        >
            {leftIcon && <span className="text-base">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="text-base">{rightIcon}</span>}
        </button>
    );
};

export default Button;
