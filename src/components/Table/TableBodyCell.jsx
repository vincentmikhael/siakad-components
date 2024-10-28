"use client"
import { useContext } from "react";
import { TableContext } from "./Table";

const TableBodyCell = ({children,index}) =>{
    // console.log(index)
    const { getStickyOffset, columnRefs,headCellsData } = useContext(TableContext);
    // console.log(headCellsData)
    return (
        <td className={"px-5 py-3 "+ (headCellsData[index]?.pinned == true ? `sticky left-[${getStickyOffset(index)}px] group-hover:bg-fade bg-white last:border-r-4 last:border-fade` : "")} 
        style={{
            left: headCellsData[index]?.pinned == true ? `${getStickyOffset(index)}px` : "auto",
          }}>
                {children}
        </td>
                
    )
}

export default TableBodyCell