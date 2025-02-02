var _excluded = ["color", "className", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { Text } from "../../..";
var Helper = function Helper(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "default" : _ref$color,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var colorClasses = {
    "default": "gray-50",
    green: "green-90",
    red: "danger-90"
  };
  return /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    size: "sm",
    weight: "400",
    color: colorClasses[color],
    className: className
  }, props), children);
};
export default Helper;