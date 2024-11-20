import {NavLi} from "@/components";
import {redirect} from "next/navigation";

export default class Utils {
    static renderMenuList = (list) => {
        return list.map(({href, label, icon}) => (
            <NavLi key={href} href={href} icon={icon}>
                {label}
            </NavLi>
        ))
    }
    static getDocumentTitle = (title='Home') =>  `SIAKAD | ${title}`;
    static redirectLogin = ()=> redirect(`${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`);
    /**
     * Translate nested value that using '.' for delimiter
     * @param obj
     * @param path
     * @returns {*}
     */
    static resolveNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    };
}