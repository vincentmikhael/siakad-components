import React from "react";
import {twMerge} from "tailwind-merge";

const TableBodyRow = ({children, className, selected = false}) => {
    const childrenWithIndex = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {index}); // Menambahkan index sebagai props
    });

    return (
        <tr className={twMerge(`group divide-y divide-fade ${selected ? "bg-gray-20" : "bg-white"}`, className)}>
            {childrenWithIndex}
        </tr>
    )
}

export default TableBodyRow
