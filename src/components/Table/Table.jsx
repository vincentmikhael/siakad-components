"use client"

import {createContext, useEffect, useRef, useState} from "react";
import TableLazyLoad from "./TableLazyLoad";
import {twMerge} from "tailwind-merge";

export const TableContext = createContext();

const Table = ({
                   columns = [],
                   data = [],
                   pinned,
                   children,
                   loading = false,
                   className = "",
                   containerClass = "",
                   ...props
               }) => {
    const columnRefs = useRef([]);
    const tableRef = useRef(null);
    const [columnWidths, setColumnWidths] = useState([]);
    const [headCellsData, setHeadCellsData] = useState([]);

    useEffect(() => {
        const widths = columnRefs.current.map((ref) => ref?.getBoundingClientRect().width || 0);
        setColumnWidths(widths);
    }, [columns]);

    useEffect(() => {
        if (pinned) {
            const data = columns.map((col, index) => ({
                ...col,
                pinned: pinned.includes(index),
            }));
            setHeadCellsData(data);
        }

    }, [columns, pinned]);

    const getStickyOffset = (index) => {
        let offset = 0;
        for (let i = 0; i < index; i++) {
            if (headCellsData[i]?.pinned) {
                offset += columnWidths[i];
            }
        }
        return offset;
    };

    return loading ? (
        <TableLazyLoad columns={columns}/>
    ) : (
        <TableContext.Provider value={{getStickyOffset, columnRefs, headCellsData, tableRef}}>
            <div
                ref={tableRef}
                className={twMerge("overflow-x-auto rounded-xl border border-fade scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full", containerClass)}>
                <table className={twMerge("table-auto w-full rounded-lg", className)} {...props}>
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    );
};

export default Table;