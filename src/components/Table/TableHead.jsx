import { twMerge } from "tailwind-merge"

const TableHead = ({children,className}) =>{
    return (
        <thead className={twMerge("text-[13px] rounded-lg",className)}>
            {children}
        </thead>
    )
}

export default TableHead