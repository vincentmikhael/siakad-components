import { twMerge } from "tailwind-merge";
var NavRow = function NavRow(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement("div", {
    className: twMerge("border-b border-white border-opacity-10 bg-primary-100 flex py-4 md:px-14 px-5 max-h-20 w-full justify-between items-center", className)
  }, children);
};
export default NavRow;