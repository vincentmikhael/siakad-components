var _excluded = ["className", "children", "href"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { Link } from "../../..";
import { twMerge } from "tailwind-merge";
var Card = function Card(_ref) {
  var className = _ref.className,
    children = _ref.children,
    href = _ref.href,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Wrapper = href ? Link : "div";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: twMerge("bg-white gap-6 rounded-[20px] lg:p-8 p-6", className)
  }, rest), /*#__PURE__*/React.createElement(Wrapper, {
    href: href
  }, children));
};
export default Card;