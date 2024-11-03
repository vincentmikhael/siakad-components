import React from "react";
import { twMerge } from "tailwind-merge";

const TableBodyRow = ({children,className}) =>{
    const childrenWithIndex = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index }); // Menambahkan index sebagai props
      });

    return (
        <tr className={twMerge("hover:bg-gray-20 group divide-y divide-fade",className)}>
            {childrenWithIndex}
        </tr>
    )
}

export default TableBodyRow