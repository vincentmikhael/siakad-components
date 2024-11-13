import Link from "next/link";

export default function NavLink({children, href, icon, active, ...props} = {active: true, icon: undefined}) {
    return <Link href={href}
        // onClick={handleClick}
                 className={`text-sm font-normal rounded-lg flex p-3 gap-2 items-center ${
                     active
                         ? "bg-primary-100 text-gray-10"
                         : "bg-gray-20 text-gray-70"
                 }`} {...props}
    >
        {icon && <span className="lg:hidden text-base">{icon}</span>}
        {children}
    </Link>
}