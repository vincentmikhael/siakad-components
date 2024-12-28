"use client"
import {twMerge} from 'tailwind-merge';
import {Link} from "@/components";
import {usePathname} from "next/navigation";

const TabItem = ({
                     href,
                     className,
                     children,
                     open,
                     onClick,
                     title,
                     ...restProps
                 }) => {
    const pathname = usePathname();
    const baseClasses = "inline-block text-sm leading-[22.4px] p-3 font-semibold text-center disabled:cursor-not-allowed";
    const activeClasses = "text-primary-100 border-b-2 border-primary-100";
    const inactiveClasses = "text-gray-50";
    const isActive = href ? pathname === href : open;
    const buttonClass = twMerge(
        className,
        baseClasses,
        isActive ? activeClasses : inactiveClasses,
    );

    return (
        <li>
            {href ? (
                <Link href={href} {...restProps} className={buttonClass}>
                    {title}
                </Link>
            ) : (
                <button
                    type="button"
                    onClick={onClick}
                    role="tab"
                    {...restProps}
                    className={buttonClass}
                >
                    {title}
                </button>
            )
            }
        </li>
    )
        ;
};

export default TabItem;
