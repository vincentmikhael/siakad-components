import { twMerge } from "tailwind-merge"
const CardHeader = ({className, ...restProps}) => {
    const baseClasses = 'flex flex-col gap-1.5 pb-6 border-b border-fade'
    return (
        <div className={twMerge(baseClasses, className)} {...restProps}>

        </div>
    )
}
export default CardHeader