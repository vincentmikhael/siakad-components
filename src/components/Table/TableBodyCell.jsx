"use client";
import {useContext, useState, useEffect} from "react";
import {TableContext} from "./Table";
import {twMerge} from "tailwind-merge";

const TableBodyCell = ({children, index, className, ...props}) => {
    const {getStickyOffset, headCellsData, tableRef} = useContext(TableContext);
    const lastPinnedIndex = headCellsData.map((cell, i) => (cell.pinned ? i : -1)).filter(i => i !== -1).pop();
    const isLastPinned = index === lastPinnedIndex;
    const [showDiv, setShowDiv] = useState(false);

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
        <td
            className={twMerge(
                "p-4",
                headCellsData[index]?.pinned ? `sticky left-[${getStickyOffset(index)}px] bg-white z-10` : "",
                className
            )}
            style={{
                left: headCellsData[index]?.pinned ? `${getStickyOffset(index)}px` : "auto",
            }}
            {...props}
        >
            {children}
            {isLastPinned && showDiv && (
                <div className="absolute inset-y-0 right-0 w-4 shadow-[4px_0px_4px_0px_rgba(16,24,40,0.05)]"/>
            )}
        </td>
    );
};

export default TableBodyCell;