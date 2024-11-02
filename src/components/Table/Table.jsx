"use client"

import React, { createContext, useEffect, useRef, useState } from "react";

import TableLazyLoad from "./TableLazyLoad";
import { twMerge } from "tailwind-merge";

export const TableContext = createContext();


const Table = ({ columns = [], data = [],children,loading = false,className,...props }) => {
  const columnRefs = useRef([]);
  
  const [columnWidths, setColumnWidths] = useState([]);
  const [headCellsData, setHeadCellsData] = useState([]);

  useEffect(() => {
    const widths = columnRefs.current.map((ref) => ref?.offsetWidth || 0);
    setColumnWidths(widths);
    
  // }, [columns, data]);
  }, [children]);

  useEffect(() => {
    let data = [];
    React.Children.forEach(children, (child) => {
      if (child.type.name === 'TableHead') {
        React.Children.forEach(child.props.children, (headRow) => {
          if (headRow.type.name === 'TableHeadRow') {
            React.Children.forEach(headRow.props.children, (headCell) => {
                data.push({ pinned: headCell.props.pinned });
            });
          }
        });
      }
    });
    setHeadCellsData(data);
  }, [children]);


  useEffect(() => {
  }, [headCellsData]);

  const getStickyOffset = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      if (headCellsData[i]?.pinned) {
        // if (columns[i]?.pinned) {
        // offset += getColumnWidth(i); // Menghitung lebar kolom sebelumnya yang di-pin
        offset += columnWidths[i];
      }
    }
    return offset;
  };

  return (
    loading ? <TableLazyLoad></TableLazyLoad>: 
    <TableContext.Provider value={{getStickyOffset,columnRefs,headCellsData}}>
      
      <div className={"overflow-x-auto mt-8 rounded-xl border border-fade"}>
            <table className={twMerge("table-auto w-full bg-white rounded-lg",className)}>
              {children}
            </table>
        </div>

      </TableContext.Provider>
  );
};

export default Table;
