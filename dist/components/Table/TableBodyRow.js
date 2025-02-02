import React from "react";
import { twMerge } from "tailwind-merge";
var TableBodyRow = function TableBodyRow(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected;
  var childrenWithIndex = React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, {
      index: index
    }); // Menambahkan index sebagai props
  });
  return /*#__PURE__*/React.createElement("tr", {
    className: twMerge("group divide-y divide-fade ".concat(selected ? "bg-gray-20" : "bg-white"), className)
  }, childrenWithIndex);
};
export default TableBodyRow;