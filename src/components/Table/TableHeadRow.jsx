import React from "react";

const TableHeadRow = ({children}) =>{

    const childrenWithIndex = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index }); // Menambahkan index sebagai props
      });


    return (
        <tr className="bg-fade text-black text-left">
            {childrenWithIndex}                                                           
        </tr>
    )
}

export default TableHeadRow