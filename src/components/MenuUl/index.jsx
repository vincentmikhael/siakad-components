import {twMerge} from "tailwind-merge";

const MenuUl = ({children, className, ...props}) => {
    const baseClasses =
        "flex xl:flex-col flex-row gap-2 xl:max-w-[100%*0,18333333] min-w-[264px] max-w-full overflow-x-auto xl:overflow-x-clip scrollbar-none xl:border-0 border-b border-fade pb-6 mb-6";
    return (
        <ul className={twMerge(baseClasses, className)} {...props}>
            {children}
        </ul>
    );
};

export default MenuUl;
