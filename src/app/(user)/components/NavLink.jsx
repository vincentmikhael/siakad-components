import Link from "next/link";

export default function NavLink({ children,
                                    className = "font-bold bg-primary-100 text-gray-10",
                                    classNameDisabled = "font-bold bg-gray-20 text-gray-70 cursor-not-allowed",
                                    href,
                                    icon,
                                    active = true,
                                    ...props
                                } = {
    className: "bg-primary-100 text-gray-10",
    classNameDisabled: "bg-gray-20 text-gray-70 cursor-not-allowed",
    active: true, icon: undefined
}) {
    return <Link href={href}
        // onClick={handleClick}
                 className={`text-sm font-normal rounded-lg flex p-3 gap-2 items-center ${
                     active ? className : classNameDisabled
                 }`} {...props}
    >
        {icon && <span className="lg:hidden text-base">{icon}</span>}
        {children}
    </Link>
}