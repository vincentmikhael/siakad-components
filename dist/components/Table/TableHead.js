import { twMerge } from "tailwind-merge";
var TableHead = function TableHead(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("thead", {
    className: twMerge("text-[13px] rounded-lg", className)
  }, children);
};
export default TableHead;