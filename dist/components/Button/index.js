var _excluded = ["type", "variant", "size", "leftIcon", "rightIcon", "children", "onClick", "className", "disabled", "fullWidth", "filled", "href"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { Link } from "./..";
var _require = require("tailwind-merge"),
  twMerge = _require.twMerge;
var Button = function Button(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$filled = _ref.filled,
    filled = _ref$filled === void 0 ? false : _ref$filled,
    _ref$href = _ref.href,
    href = _ref$href === void 0 ? "" : _ref$href,
    props = _objectWithoutProperties(_ref, _excluded);
  var baseClasses = twMerge("inline-flex items-center rounded-xl gap-[6px] border focus:outline-none font-medium justify-center", fullWidth ? "w-full" : "w-fit");
  var outlineClasses = {
    primary: "text-primary-100 border-primary-100 hover:text-primary-80 hover:border-primary-80 focus:text-primary-110 focus:border-primary-110",
    white: "text-gray-20 border-gray-20 hover:text-fade hover:border-fade focus:text-gray-10 focus:border-0",
    info: "text-info-90 border-info-90 hover:text-info-80 hover:border-info-80 focus:text-info-100 focus:border-info-100",
    success: "text-success-90 border-success-90 hover:text-success-80 hover:border-success-80 focus:text-success-100 focus:border-success-100",
    danger: "text-danger-90 border-danger-90 hover:text-danger-80 hover:border-danger-80 focus:text-danger-100 focus:border-danger-100",
    warning: " text-warning-90 border-warning-90 hover:text-warning-80 hover:border-warning-80 focus:text-warning-100 focus:border-warning-100"
  };
  var filledClasses = {
    primary: "bg-primary-100 text-white hover:bg-primary-80 focus:bg-primary-110",
    white: "bg-white text-gray-50 hover:bg-fade hover:border-fade focus:bg-white",
    info: "bg-info-90 text-white hover:bg-info-80 focus:bg-info-100",
    success: "bg-success-90 text-white hover:bg-success-80 focus:bg-success-100",
    danger: "bg-danger-90 text-white hover:bg-danger-80 focus:bg-danger-100",
    warning: "bg-warning-90 text-white hover:bg-warning-80 focus:bg-warning-100"
  };
  var disabledClasses = "disabled:text-gray-40 disabled:cursor-not-allowed ".concat(filled ? "disabled:bg-gray-30" : "disabled:bg-transparent disabled:border-gray-40");
  var sizeClasses = {
    sm: "text-[13px] leading-[20.8px] py-1.5 px-3 h-9",
    md: "text-sm leading-[22.4px] py-2 px-4 h-10",
    lg: "text-sm leading-[22.4px] py-3 px-4 h-12"
  };
  var typeClasses = filled ? filledClasses[variant] : outlineClasses[variant];
  if (href) {
    return /*#__PURE__*/React.createElement(Link, _extends({
      href: href
    }, props, {
      className: twMerge(baseClasses, typeClasses, sizeClasses[size], disabled && disabledClasses, className, filled)
    }), leftIcon && /*#__PURE__*/React.createElement("span", {
      className: "text-base"
    }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
      className: "text-base"
    }, rightIcon));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    className: twMerge(baseClasses, typeClasses, sizeClasses[size], disabled && disabledClasses, className, filled)
  }, props), leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, rightIcon));
};
export default Button;