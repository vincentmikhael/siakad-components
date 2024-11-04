"use client"
import {useContext, useEffect, useState} from "react";
import {TableContext} from "./Table";
import {twMerge} from "tailwind-merge";


const TableHeadCell = ({children, index, className}) => {
    const {getStickyOffset, columnRefs, headCellsData, tableRef} = useContext(TableContext);
    const [showDiv, setShowDiv] = useState(false)
    const lastPinnedIndex = headCellsData
        .map((cell, i) => (cell.pinned ? i : -1))
        .filter(i => i !== -1)
        .pop();

    const isLastPinned = index === lastPinnedIndex;

    useEffect(() => {
        const currentTableRef = tableRef.current;
        const handleScroll = () => {
            if (currentTableRef) {
                const scrollLeft = currentTableRef.scrollLeft;
                if (scrollLeft > getStickyOffset(lastPinnedIndex)) {
                    setShowDiv(true);
                } else {
                    setShowDiv(false);
                }
            }
        };

        if (currentTableRef) {
            currentTableRef.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (currentTableRef) {
                currentTableRef.removeEventListener("scroll", handleScroll);
            }
        };
    }, [getStickyOffset, lastPinnedIndex, tableRef]);
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
            {isLastPinned && showDiv && (
                <div className="absolute inset-y-0 right-0 w-4 shadow-[4px_0px_4px_0px_rgba(16,24,40,0.05)]"/>
            )}
        </th>

    )
}

export default TableHeadCell