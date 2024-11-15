import {NavButton} from "@/components";

const DEFAULT_CLASS = {
    ENABLED: "font-bold text-danger-90 bg-transparent active:text-white active:bg-danger-90",
    DISABLED: "font-bold text-gray-70 bg-gray-20 cursor-not-allowed",
}
const ButtonLogOut = ({children, direct, icon, onLogout, sId, active, ...props} = {
    children: "Log Out", direct: false, icon: undefined, onLogout: undefined, sId: '', active: true
}) => {
    if (direct) {
        const action = "/api/delete-session";
        return <form action={action} method="POST">
            <input type="hidden" name="s_id" defaultValue={sId}/>
            <input type="hidden" name="_method" value="DELETE"/>
            <NavButton type="submit" icon={icon} className={DEFAULT_CLASS.ENABLED}
                       classNameDisabled={DEFAULT_CLASS.DISABLED}>{children}</NavButton>
        </form>
    }
    return <NavButton onClick={onLogout} active={active} icon={icon} {...props}
                      className={DEFAULT_CLASS.ENABLED} classNameDisabled={DEFAULT_CLASS.DISABLED}
    >{children}</NavButton>
}

export default ButtonLogOut;