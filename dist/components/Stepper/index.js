import { twMerge } from "tailwind-merge";
var Stepper = function Stepper(_ref) {
  var children = _ref.children,
    isActive = _ref.isActive,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: twMerge(isActive ? 'block' : 'hidden', className)
  }, children);
};
export default Stepper;