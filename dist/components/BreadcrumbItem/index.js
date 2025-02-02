var _excluded = ["home", "href", "className", "classHome", "classLink", "classSpan", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Link, Text } from "../../..";
var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var _ref$home = _ref.home,
    home = _ref$home === void 0 ? false : _ref$home,
    href = _ref.href,
    className = _ref.className,
    classHome = _ref.classHome,
    classLink = _ref.classLink,
    classSpan = _ref.classSpan,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("li", _extends({
    className: twMerge("inline-flex items-center space-x-3", className)
  }, props), home ? /*#__PURE__*/React.createElement(Link, {
    className: twMerge("inline-flex items-center text-sm font-normal text-gray-10", classHome),
    href: href
  }, children) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CaretRight, {
    size: 16,
    weight: "bold"
  }), href ? /*#__PURE__*/React.createElement(Link, {
    className: twMerge("text-sm font-normal text-gray-10", classLink),
    href: href
  }, children) : /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    size: "sm",
    weight: "400",
    color: "text-gray-30",
    className: classSpan
  }, children)));
};
export default BreadcrumbItem;