"use client"
import { useContext } from "react";
import { TableContext } from "./Table";
import { twMerge } from "tailwind-merge";


const TableHeadCell = ({children,index,className}) =>{
    const { getStickyOffset, columnRefs,headCellsData } = useContext(TableContext);

    const lastPinnedIndex = headCellsData
        .map((cell, i) => (cell.pinned ? i : -1))
        .filter(i => i !== -1)
        .pop();

    const isLastPinned = index === lastPinnedIndex;

    return (
        <th
        className={
          twMerge(`bg-fade uppercase px-5 py-4 ${(headCellsData[index]?.pinned ? `sticky left-[${getStickyOffset(index)}px] last:border-r-4 last:border-fade` : "")}`,
          className)}

        style={{
          left: headCellsData[index]?.pinned ? `${getStickyOffset(index)}px` : "auto",
        }}
        ref={(el) => (columnRefs.current[index] = el)}
      >
        {children}
            {isLastPinned && (
                <div className="absolute inset-y-0 right-0 w-4 shadow-[4px_0px_4px_0px_rgba(16,24,40,0.05)]" />
            )}
      </th>

    )
}

export default TableHeadCell