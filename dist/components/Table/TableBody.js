import { twMerge } from "tailwind-merge";
var TableBody = function TableBody(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("tbody", {
    className: twMerge("text-sm text-gray-90 font-medium", className)
  }, children);
};
export default TableBody;