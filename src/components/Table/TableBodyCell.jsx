"use client"
import { useContext } from "react";
import { TableContext } from "./Table";
import { twMerge } from "tailwind-merge";

const TableBodyCell = ({ children, index, className }) => {
    const { getStickyOffset, headCellsData } = useContext(TableContext);

    const lastPinnedIndex = headCellsData.map((cell, i) => (cell.pinned ? i : -1)).filter(i => i !== -1).pop();

    const isLastPinned = index === lastPinnedIndex;

    return (
        <td
            className={twMerge(
                "px-5 py-3",
                headCellsData[index]?.pinned ? `sticky left-[${getStickyOffset(index)}px] bg-white z-10` : "",
                className
            )}
            style={{
                left: headCellsData[index]?.pinned ? `${getStickyOffset(index)}px` : "auto",
            }}
        >
            {children}
            {isLastPinned && (
                <div className="absolute inset-y-0 right-0 w-4 shadow-[4px_0px_4px_0px_rgba(16,24,40,0.05)]" />
            )}
        </td>
    );
};

export default TableBodyCell;
