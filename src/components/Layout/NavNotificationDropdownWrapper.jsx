"use client"
import {BellRinging, Check} from "@phosphor-icons/react";
import {useEffect, useRef, useState} from "react";
import {Button, NavLink, NavDropdownClosable} from "@/components";


export default function NavNotificationDropdownWrapper({userName, sId}) {
    const [showDropdown, setShowDropdown] = useState(false);
    // const showToast = useToast();
    // const router = useRouter();
    const dropdownRef = useRef(null);
    const ignoreOutsideClick = useRef(false);
    const toggleNav = () => {
        ignoreOutsideClick.current = true;
        setShowDropdown((prev) => !prev);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ignoreOutsideClick.current) {
                ignoreOutsideClick.current = false;
                return;
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                requestAnimationFrame(() => setTimeout(() => setShowDropdown(false), 0));
            }
        };

        const handleScroll = () => {
            setShowDropdown(false);
        };

        // Attach listeners
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        // Cleanup listeners on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return <>
        <button ref={dropdownRef} onClick={toggleNav} className="flex items-center p-3">
            <BellRinging color="#FFFFFF" size={20} weight="regular"/>
        </button>
        <NavDropdownClosable ref={dropdownRef} className="" showDropdown={showDropdown} onClose={() => {
            setShowDropdown(false)
        }}>
            <NavDropdownClosable.Body>
                <li>
                    <NavLink
                        className="font-extrabold bg-primary-10 text-primary-90 active:text-white active:bg-primary-90"
                        href={`/`}>Notification 1</NavLink>
                </li>
            </NavDropdownClosable.Body>
            <NavDropdownClosable.Footer>
                <Button filled={true} variant="primary" leftIcon={<Check/>}>Tandai semua dibaca</Button>
            </NavDropdownClosable.Footer>
        </NavDropdownClosable>
    </>
}