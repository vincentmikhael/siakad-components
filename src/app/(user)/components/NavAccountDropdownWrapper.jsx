"use client"
import {CaretDown} from "@phosphor-icons/react/dist/ssr";
import {NavButton, NavDropdown, NavLink} from "@/app/(user)/components";
import {useState} from "react";
import {useToast} from "@/context/ToastContext";
import axios from "axios";
import {useRouter} from "next/navigation";
import {SignOut} from "@phosphor-icons/react";

const LogoutButton = ({children, direct, icon, onLogout, sId, active, ...props} = {
    children: "Log Out", direct: false, icon: undefined, onLogout: undefined, sId: '', active: true
}) => {
    if (direct) {
        const action = "/api/delete-session";
        return <form action={action} method="POST">
            <input type="hidden" name="s_id" defaultValue={sId}/>
            <input type="hidden" name="_method" value="DELETE"/>
            <NavButton type="submit" icon={icon}>{children}</NavButton>
        </form>
    }
    return <NavButton onClick={onLogout} active={active} icon={icon} {...props}>{children}</NavButton>
}
const onLogout = async (event, router, showToast, sId, setLoadingLogout) => {
    event.preventDefault();
    setLoadingLogout(true)
    try {
        const response = await axios.delete('/api/delete-session', {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {s_id: sId},
        });

        if (response.status !== 200) {
            showToast('Logout failed!', 'Failed to delete session', 'danger');
        }
        // setLoadingLogout(false);
        router.push("/login")
    } catch (error) {
        showToast('Logout failed!', error.message, 'danger');
    } finally {
        setLoadingLogout(false)
    }
}
export default function NavAccountDropdownWrapper({userName, sId/*, onLogout*/} = {
    userName: ''/*, onLogout: undefined*/, sId: ''
}) {
    const [showNav, setShowNav] = useState(false);
    const showToast = useToast();
    const router = useRouter();
    const [loadingLogout, setLoadingLogout] = useState(false);
    const toggleNav = () => setShowNav((prev) => !prev);
    return <>
        <button onClick={toggleNav} className="gap-3 flex flex-row items-center">
            <div className="w-8 h-8 bg-white rounded-full"/>
            <p className="text-gray-10 font-normal text-sm hidden lg:block">
                {userName}
            </p>
            <div className="block">
                <CaretDown size={16} weight="regular" color="#FFFFFF"/>
            </div>
        </button>
        <NavDropdown className="" showNav={showNav}>
            <li>
                <NavLink href="/">Setings profile</NavLink>
            </li>
            <li className="h-0.5 my-0.5 mx-0.5 bg-gray-200"></li>
            <li>
                <NavButton icon={<SignOut/>}>Logout</NavButton>
                {/*<LogoutElementInitiator sId={sId} icon={<SignOut/>}*/}
                {/*                        onLogout={(e) => onLogout(e, router, showToast, sId, setLoadingLogout)}*/}
                {/*                        direct={typeof onLogout !== 'function'} active={!loadingLogout} disabled={loadingLogout}/>*/}
            </li>
        </NavDropdown>
    </>
}