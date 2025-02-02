'use client';

var _excluded = ["className", "onClick"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../../..";
import { List } from "@phosphor-icons/react";
import { NavbarContext } from "../Navbar";
var NavHamburger = function NavHamburger(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(NavbarContext),
    setShowNav = _useContext.setShowNav;
  var handleClick = function handleClick() {
    setShowNav(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: handleClick,
    className: twMerge("xl:hidden inline-flex bg-primary-10 gap-1.5 px-2 py-1.5 text-primary-100 rounded-lg items-center", className)
  }, props), /*#__PURE__*/React.createElement(Text, {
    size: "sm",
    color: "text-primary-100"
  }, "Menu"), /*#__PURE__*/React.createElement(List, {
    size: 16,
    weight: "bold"
  }));
};
export default NavHamburger;