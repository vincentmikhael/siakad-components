import {twMerge} from "tailwind-merge"

const TableBody = ({children, className}) => {
    return (
        <tbody className={twMerge("text-sm text-gray-90 font-medium", className)}>
        {children}
        </tbody>
    )
}

export default TableBody