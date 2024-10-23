"use client"
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

const TableProvider = ({ children }) => {
  const columnRefs = useRef([]);
  const [columnWidths, setColumnWidths] = useState([]);

  useEffect(() => {
    const widths = columnRefs.current.map((ref) => ref?.offsetWidth || 0);
    setColumnWidths(widths);
    console.log(columnRefs)
  }, [children]);

  const getStickyOffset = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += columnWidths[i];
    }
    return offset;
  };

  return (
    <TableContext.Provider value={{ columnRefs, getStickyOffset }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
