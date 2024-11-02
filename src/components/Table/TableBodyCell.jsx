"use client"
import { useContext } from "react";
import { TableContext } from "./Table";
import { twMerge } from "tailwind-merge";

const TableBodyCell = ({children,index,className}) =>{
    const { getStickyOffset, columnRefs,headCellsData } = useContext(TableContext);

    return (
        <td className={twMerge("px-5 py-3 "+ (headCellsData[index]?.pinned == true ? `sticky left-[${getStickyOffset(index)}px] group-hover:bg-fade bg-white last:border-r-4 last:border-fade` : ""),className)} 
        style={{
            left: headCellsData[index]?.pinned == true ? `${getStickyOffset(index)}px` : "auto",
          }}>
                {children}
        </td>
                
    )
}

export default TableBodyCell