"use client"

import React, { createContext, useEffect, useRef, useState } from "react";
import {
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "..";

export const TableContext = createContext();


const Table = ({ columns = [], data = [],children,...props }) => {
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
      if (child.type === 'thead') {
        React.Children.forEach(child.props.children, (headRow) => {
          if (headRow.type === 'tr') {
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
    <TableContext.Provider value={{getStickyOffset,columnRefs,headCellsData}}>

      <div className="overflow-x-auto mt-8 rounded-xl border border-zinc-100">
            <table className="table-auto w-full bg-white rounded-lg">
              {children}
            </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <nav aria-label="Pagination" className="flex items-center w-full">
            <div className="flex-1 flex justify-start">
              <Button variant="white" leftIcon={<CaretLeft />}>
                Previous
              </Button>
            </div>
            <div className="flex-1 flex justify-center gap-3">
              <Button variant="white">1</Button>
              <Button variant="white" className={"border-0"}>
                2
              </Button>
              <Button variant="white" className={"border-0"}>
                3
              </Button>
            </div>
            <div className="flex-1 flex justify-end">
              <Button variant="white" rightIcon={<CaretRight />}>
                Next
              </Button>
            </div>
          </nav>
        </div>
      </TableContext.Provider>
  );
};

export default Table;
