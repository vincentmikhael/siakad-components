"use client";

var _excluded = ["href", "className", "children", "open", "onClick", "title"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from 'tailwind-merge';
import { Link } from "./..";
import { usePathname } from "next/navigation";
var TabItem = function TabItem(_ref) {
  var href = _ref.href,
    className = _ref.className,
    children = _ref.children,
    open = _ref.open,
    onClick = _ref.onClick,
    title = _ref.title,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var pathname = usePathname();
  var baseClasses = "inline-block text-sm leading-[22.4px] p-3 font-semibold text-center disabled:cursor-not-allowed";
  var activeClasses = "text-primary-100 border-b-2 border-primary-100";
  var inactiveClasses = "text-gray-50";
  var isActive = href ? pathname === href : open;
  var buttonClass = twMerge(className, baseClasses, isActive ? activeClasses : inactiveClasses);
  return /*#__PURE__*/React.createElement("li", null, href ? /*#__PURE__*/React.createElement(Link, _extends({
    href: href
  }, restProps, {
    className: buttonClass
  }), title) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    role: "tab"
  }, restProps, {
    className: buttonClass
  }), title));
};
export default TabItem;