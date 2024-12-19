"use client"
import {twMerge} from 'tailwind-merge';
import {Link} from "@/components";
import {usePathname} from "next/navigation";

const TabItem = ({
                     href,
                     className,
                     children,
                     ...restProps
                 }) => {
    const pathname = usePathname();
    const baseClasses = "inline-block text-sm leading-[22.4px] p-3 font-semibold text-center disabled:cursor-not-allowed";
    const activeClasses = "text-primary-100 border-b-2 border-primary-100";
    const inactiveClasses = "text-gray-50";

    const buttonClass = twMerge(
        className,
        baseClasses,
        pathname === href ? activeClasses : inactiveClasses,
    );

    return (
        <li>
            <Link
                type="button"
                href={href}
                {...restProps}
                className={buttonClass}
            >
                {children}
            </Link>
        </li>
    );
};

export default TabItem;
