import React, {Children, forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import {IconButton, Text} from "@/components";
import {X} from "@phosphor-icons/react/dist/ssr";

function _NavDropdownClosable({
                                  showDropdown = false,
                                  title = "Notifikasi",
                                  description = "",
                                  ulClass = "flex flex-col gap-4 font-normal px-8 pb-4",
                                  dismissable = true,
                                  children,
                                  className = "",
                                  ...props
                              } = {showDropdown: true}, ref) {
    const _ulClass = twMerge(ulClass, props.classUl);
    const childrenArray = Children.toArray(children);
    const header =
        childrenArray.find((child) => child.type === NavDropdownClosable.Header) || null;
    const body = childrenArray.filter((child) => child.type === NavDropdownClosable.Body);
    const footer =
        childrenArray.find((child) => child.type === NavDropdownClosable.Footer) || null;
    const hide = (e) => {
        e.preventDefault();
        props.onClose();
    };
    return <div ref={ref}
                className={twMerge(`${
                    (showDropdown ? "translate-y-0 opacity-100" : "-translate-y-full-16 opacity-0")
                } items-center mt-16 md:mt-10 justify-between order-1 fixed md:absolute right-0 top-0 w-screen md:w-[453px] z-0 lg:z-50 lg:h-fit bg-white transition-all duration-500 transform rounded-[20px] overflow-y-auto lg:overflow-hidden custom-shadow-sidebar lg:shadow-none`, className)}
                {...props}
    >
        {/*Header*/}
        {(header || title) && (
            <div className="flex flex-row justify-between items-start p-8">
                {header ? (
                    header
                ) : (
                    <div className="w-full flex flex-col gap-1.5">
                        <Text tag="h3" size="xl" weight="600">
                            {title}
                        </Text>
                        {description && (
                            <Text color="text-gray-60" weight="500" size="sm">
                                {description}
                            </Text>
                        )}
                    </div>
                )}
                {dismissable && (
                    <IconButton onClick={hide} className="flex">
                        <X weight="bold" size={16}/>
                    </IconButton>
                )}
            </div>
        )}
        {/*Body*/}
        {body && <ul className={_ulClass}>{body ?? children}</ul>}
        {/*Footer */}
        {footer}
    </div>
}

const NavDropdownClosable = forwardRef(_NavDropdownClosable)

NavDropdownClosable.Header = ({children}) => children;

NavDropdownClosable.Body = ({children}) => children;

NavDropdownClosable.Footer = function DropdownFooter({children}) {
    return (<div className="border-t border-fade mx-8 pb-8 pt-4">{children}</div>);
}
export default NavDropdownClosable;