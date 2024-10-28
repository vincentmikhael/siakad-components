"use client"
import { useContext } from "react";
import { TableContext } from "./Table";


const TableHeadCell = ({children,pinned,index}) =>{
    const { getStickyOffset, columnRefs } = useContext(TableContext);
    return (
        <th
        className={"bg-fade uppercase px-5 py-4 " + (pinned == true ? `sticky left-[${getStickyOffset(index)}px] bg-fade last:border-r-4 last:border-fade` : "")}
        style={{
          left: pinned == true ? `${getStickyOffset(index)}px` : "auto",
        }}
        ref={(el) => (columnRefs.current[index] = el)}
      >
        {children}
      </th>
           
    )
}

export default TableHeadCell