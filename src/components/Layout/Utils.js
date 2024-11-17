import {NavLi} from "@/components";

export default class Utils {
    static renderMenuList = (list) => {
        return list.map(({href, label, icon}) => (
            <NavLi key={href} href={href} icon={icon}>
                {label}
            </NavLi>
        ))
    }
    static getDocumentTitle = (title='Home') =>  `SIAKAD | ${title}`;
}