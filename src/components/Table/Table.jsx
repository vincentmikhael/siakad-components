"use client"

import React, { createContext, useEffect, useRef, useState } from "react";
import TableLazyLoad from "./TableLazyLoad";
import { twMerge } from "tailwind-merge";

export const TableContext = createContext();

const Table = ({ columns = [], data = [], pinned = [], children, loading = false, className, ...props }) => {
  const columnRefs = useRef([]);
  const [columnWidths, setColumnWidths] = useState([]);
  const [headCellsData, setHeadCellsData] = useState([]);

  useEffect(() => {
    const widths = columnRefs.current.map((ref) => ref?.offsetWidth || 0);
    setColumnWidths(widths);
  }, [children]);

  useEffect(() => {
    const data = columns.map((col, index) => ({
      ...col,
      pinned: pinned.includes(index),
    }));
    setHeadCellsData(data);
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
      <TableLazyLoad />
  ) : (
      <TableContext.Provider value={{ getStickyOffset, columnRefs, headCellsData }}>
        <div className="overflow-x-auto mt-8 rounded-xl border border-fade scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <table className={twMerge("table-auto w-full bg-white rounded-lg", className)}>
            {children}
          </table>
        </div>
      </TableContext.Provider>
  );
};

export default Table;
