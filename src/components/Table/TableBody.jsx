import { twMerge } from "tailwind-merge"

const TableBody = ({children,className}) =>{
    return (
            <tbody className={twMerge("text-sm text-black font-light",className)}>
                {children}
            </tbody>
    )
}

export default TableBody