"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";

const MenuLi = ({children, href}) => {
    const [active, setActive] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setActive(pathname === href || pathname.startsWith(`${href}/`));
    }, [pathname, href]);
    return (
        <li>
            <Link
                href={href}
                className={`text-sm font-semibold rounded-xl flex flex-grow px-4 py-3 items-center whitespace-nowrap ${
                    active
                        ? "bg-primary-80 text-gray-10 custom-shadow-menu"
                        : "text-gray-100 bg-transparent border border-fade"
                }`}
            >
                {children}
            </Link>
        </li>
    );
};
export default MenuLi;
