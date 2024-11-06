import React from "react";
import { twMerge } from "tailwind-merge";

const TableHeadRow = ({children,className}) =>{

    const childrenWithIndex = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index }); // Menambahkan index sebagai props
      });


    return (
        <tr className={twMerge("bg-fade text-black text-left",className)}>
            {childrenWithIndex}                                                           
        </tr>
    )
}

export default TableHeadRow