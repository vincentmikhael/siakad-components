import {twMerge} from 'tailwind-merge';

const TabItem = ({
                     open,
                     onClick,
                     title = 'Tab title',
                     className,
                     children,
                     ...restProps
                 }) => {
    const baseClasses = "inline-block text-sm leading-[22.4px] p-3 font-semibold text-center disabled:cursor-not-allowed"

    const activeClasses = "text-primary-100 border-b-2 border-primary-100"

    const inactiveClasses = "text-gray-50"

    const buttonClass = twMerge(
        className,
        baseClasses,
        open ? activeClasses : inactiveClasses,
    );

    return (
        <li>
            <button
                type="button"
                onClick={onClick}
                role="tab"
                {...restProps}
                className={buttonClass}
            >
                {title}
            </button>
        </li>
    );
}
export default TabItem;