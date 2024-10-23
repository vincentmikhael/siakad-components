import React from "react";

const TableBodyRow = ({children}) =>{
    const childrenWithIndex = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index }); // Menambahkan index sebagai props
      });

    return (
        <tr className="hover:bg-zinc-200 group border-b">
            {childrenWithIndex}
        </tr>
    )
}

export default TableBodyRow