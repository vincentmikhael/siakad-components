var _excluded = ["children", "className", "size", "type", "disabled", "variant", "onClick", "href"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
import Link from "next/link";
var IconButton = function IconButton(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "white" : _ref$variant,
    onClick = _ref.onClick,
    href = _ref.href,
    props = _objectWithoutProperties(_ref, _excluded);
  var baseClasses = "overflow-hidden justify-center items-center p-2 border disabled:cursor-not-allowed w-fit h-fit";
  var sizeClasses = {
    sm: "rounded-[10px] text-xs",
    md: "rounded-xl text-base"
  };
  var disabledClasses = size === "sm" ? "disabled:bg-gray-20 disabled:border-fade" : "disabled:bg-gray-30 disabled:border-0";
  var variantClasses = {
    primary: "bg-primary-10 text-primary-100 border-primary-30 hover:border-primary-80 hover:text-primary-80 focus:border-primary-90 focus:text-primary-90 focus:bg-primary-20",
    white: "bg-white text-gray-40 border-gray-20 hover:border-fade",
    warning: "bg-warning-10 text-warning-90 border-warning-30 hover:border-warning-80 hover:text-warning-80 focus:border-warning-90 focus:text-warning-90 focus:bg-warning-20",
    danger: "bg-danger-10 text-danger-90 border-danger-30 hover:border-danger-80 hover:text-danger-80 focus:border-danger-90 focus:text-danger-90 focus:bg-danger-20",
    success: "bg-success-10 text-success-90 border-success-30 hover:border-success-80 hover:text-success-80 focus:border-success-90 focus:text-success-90 focus:bg-success-20"
  };
  if (href) {
    return /*#__PURE__*/React.createElement(Link, _extends({
      href: href,
      className: twMerge(baseClasses, sizeClasses[size], variantClasses[variant], disabledClasses, className)
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: disabled,
    className: twMerge(baseClasses, sizeClasses[size], variantClasses[variant], disabledClasses, className)
  }, props), children);
};
export default IconButton;