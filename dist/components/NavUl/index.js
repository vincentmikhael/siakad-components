"use client";

var _excluded = ["ulClass", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { NavbarContext } from "../Navbar";
var NavUl = function NavUl(_ref) {
  var _ref$ulClass = _ref.ulClass,
    ulClass = _ref$ulClass === void 0 ? "flex flex-col lg:p-0 xl:flex-row xl:gap-7 gap-3 font-normal" : _ref$ulClass,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(NavbarContext),
    showNav = _useContext.showNav,
    setShowNav = _useContext.setShowNav;
  var _ulClass = twMerge(ulClass, props.classUl);
  useEffect(function () {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return function () {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);
  var handleBackdropClick = function handleBackdropClick() {
    setShowNav(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showNav && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black opacity-30 z-30",
    role: "button",
    onClick: handleBackdropClick
  }), /*#__PURE__*/React.createElement("div", _extends({
    className: twMerge("".concat(showNav ? "translate-x-0" : "-translate-x-full xl:translate-x-0", " items-center justify-between xl:flex order-1 fixed xl:static left-0 top-0 w-[250px] md:w-[267px] xl:w-max z-[99] xl:z-0 h-full xl:h-fit bg-white xl:bg-transparent py-8 px-6 xl:p-0 transition-transform xl:transition-none duration-500 transform rounded-r-lg overflow-y-auto xl:overflow-hidden scrollbar-none custom-shadow-sidebar xl:shadow-none"), className)
  }, props), /*#__PURE__*/React.createElement("ul", {
    className: _ulClass
  }, children)));
};
export default NavUl;