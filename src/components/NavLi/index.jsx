"use client";

import {usePathname} from "next/navigation";
import {useEffect, useState, useContext} from "react";
import {Link} from "..";
import {NavbarContext} from "../Navbar";

const NavLi = ({children, href, icon}) => {
    const [active, setActive] = useState(false);
    const pathname = usePathname();
    const {setShowNav} = useContext(NavbarContext);

    useEffect(() => {
        setActive(pathname === href || pathname.startsWith(`${href}/`));
    }, [pathname, href]);

    const handleClick = () => {
        setShowNav(false);
    };

    return (
        <li>
            <Link
                href={href}
                onClick={handleClick}
                className={`text-sm font-normal rounded-lg flex xl:block p-3 xl:py-1.5 gap-2 items-center ${
                    active
                        ? "bg-primary-100 text-gray-10 xl:bg-gray-10 xl:text-primary-100"
                        : "bg-gray-20 text-gray-70 xl:text-white xl:bg-transparent xl:px-0"
                }`}
            >
                {icon && <span className="xl:hidden text-base">{icon}</span>}
                {children}
            </Link>
        </li>
    );
};

export default NavLi;
