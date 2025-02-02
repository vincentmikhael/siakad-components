import React from "react";
import { twMerge } from "tailwind-merge";
var TableHeadRow = function TableHeadRow(_ref) {
  var children = _ref.children,
    className = _ref.className;
  var childrenWithIndex = React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, {
      index: index
    }); // Menambahkan index sebagai props
  });
  return /*#__PURE__*/React.createElement("tr", {
    className: twMerge("bg-fade text-black text-left", className)
  }, childrenWithIndex);
};
export default TableHeadRow;