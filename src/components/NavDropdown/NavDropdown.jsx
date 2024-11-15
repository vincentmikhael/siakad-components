import {twMerge} from "tailwind-merge";
import {forwardRef} from "react";

const NavDropdown =
    forwardRef(
        function NavDropdown({
                                 ulClass = "flex flex-col gap-1 font-normal",
                                 children,
                                 className = "",
                                 showNav,
                                 ...props
                             } = {showNav: true}) {
            const _ulClass = twMerge(ulClass, props.classUl);
            return <div className={twMerge(`${
                            (showNav ? "translate-y-0 opacity-100" : "-translate-y-full-16 opacity-0")
                        } items-center mt-10 justify-between order-1 absolute right-0 top-0 w-[250px] md:w-[267px] z-0 lg:h-fit bg-white p-3 transition-all duration-500 transform rounded-[20px] overflow-y-auto lg:overflow-hidden custom-shadow-sidebar lg:shadow-none`, className)}
                        {...props}
            >
                <ul className={_ulClass}>{children}</ul>
            </div>
        })

export default NavDropdown;