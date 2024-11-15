"use client"
import {CaretDown} from "@phosphor-icons/react/dist/ssr";
import {
    NavButton,
    NavDropdown,
    NavLink
} from "@/components";
import {useEffect, useRef, useState} from "react";
// import {useToast} from "@/context/ToastContext";
// import axios from "axios";
// import {useRouter} from "next/navigation";
import {SignOut} from "@phosphor-icons/react";

// const onLogout = async (event, router, showToast, sId, setLoadingLogout) => {
//     event.preventDefault();
//     setLoadingLogout(true)
//     try {
//         const response = await axios.delete('/api/delete-session', {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             data: {s_id: sId},
//         });
//
//         if (response.status !== 200) {
//             showToast('Logout failed!', 'Failed to delete session', 'danger');
//         }
//         // setLoadingLogout(false);
//         router.push("/login")
//     } catch (error) {
//         showToast('Logout failed!', error.message, 'danger');
//     } finally {
//         setLoadingLogout(false)
//     }
// }
export default function NavAccountDropdownWrapper({userName, sId/*, onLogout*/} = {
    userName: ''/*, onLogout: undefined*/, sId: ''
}) {
    const [showNav, setShowNav] = useState(false);
    // const showToast = useToast();
    // const router = useRouter();
    // const [loadingLogout, setLoadingLogout] = useState(false);
    const dropdownRef = useRef(null);
    const ignoreOutsideClick = useRef(false);
    const toggleNav = () => {
        ignoreOutsideClick.current = true;
        setShowNav((prev) => !prev);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ignoreOutsideClick.current) {
                ignoreOutsideClick.current = false;
                return;
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                requestAnimationFrame(() => setTimeout(() => setShowNav(false), 0));
            }
        };

        const handleScroll = () => {
            setShowNav(false);
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
        <button ref={dropdownRef} onClick={toggleNav} aria-expanded={showNav}
                className="gap-3 flex flex-row items-center">
            <div className="w-8 h-8 bg-white rounded-full"/>
            <p className="text-gray-10 font-normal text-sm hidden lg:block">
                {userName}
            </p>
            <div className="block">
                <CaretDown size={16} weight="regular" color="#FFFFFF"/>
            </div>
        </button>
        <NavDropdown ref={dropdownRef} className="" showNav={showNav}>
            <li>
                <NavLink className="font-bold bg-primary-10 text-primary-90 active:text-white active:bg-primary-90"
                         href="/public">Settings profile</NavLink>
            </li>
            <li className="h-0.5 my-0.5 mx-0.5 bg-gray-20"></li>
            <li>
                <NavButton icon={<SignOut/>}>Log out</NavButton>
                {/*<ButtonLogoutOut sId={sId} icon={<SignOut/>}*/}
                {/*                        onLogout={(e) => onLogout(e, router, showToast, sId, setLoadingLogout)}*/}
                {/*                        direct={typeof onLogout !== 'function'} active={!loadingLogout} disabled={loadingLogout}/>*/}
            </li>
        </NavDropdown>
    </>
}