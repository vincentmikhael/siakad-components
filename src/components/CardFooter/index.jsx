import {twMerge} from "tailwind-merge"

const CardFooter = ({className, children, ...restProps}) => {
    const baseClasses = 'flex flex-col gap-1.5 pt-6 border-t border-fade'
    return (
        <div className={twMerge(baseClasses, className)} {...restProps}>
            {children}
        </div>
    )
}
export default CardFooter