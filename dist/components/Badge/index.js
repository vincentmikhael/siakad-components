var _excluded = ["children", "variant", "filled", "size", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
var Badge = function Badge(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    _ref$filled = _ref.filled,
    filled = _ref$filled === void 0 ? false : _ref$filled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "lg" : _ref$size,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var sizeClasses = {
    sm: "px-2 py-[2px] text-xs leading-[19.2px]",
    md: "px-[10px] py-[2px] text-sm leading-[22.4px]",
    lg: "px-3 py-1 text-sm leading-[22.4px]"
  };
  var outlineClasses = {
    "default": "border-gray-30 text-gray-90 bg-gray-20",
    success: "border-success-30 text-success-90 bg-success-10",
    warning: "border-warning-30 text-warning-90 bg-warning-10",
    danger: "border-danger-30 text-danger-90 bg-danger-10",
    primary: "border-primary-30 text-primary-100 bg-primary-10"
  };
  var filledClasses = {
    "default": "text-gray-90 bg-gray-30 border-0",
    success: "text-gray-10 bg-success-90 border-0",
    warning: "text-gray-10 bg-warning-90 border-0",
    danger: "text-gray-10 bg-danger-90 border-0",
    primary: "text-gray-10 bg-primary-100 border-0"
  };
  var typeClasses = filled ? filledClasses[variant] : outlineClasses[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: twMerge("border font-medium rounded-full text-center inline-block", typeClasses, sizeClasses[size], className)
  }, props), children);
};
export default Badge;