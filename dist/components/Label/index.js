var _excluded = ["children", "color", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
var Label = function Label(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "default" : _ref$color,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var colorClasses = {
    "default": "text-gray-100",
    disabled: "text-gray-50",
    red: "text-danger-90",
    green: "text-success-90"
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    className: twMerge("block text-sm font-medium", colorClasses[color], className)
  }, props), children);
};
export default Label;