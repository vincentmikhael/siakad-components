"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { Link } from "../../..";
import { NavbarContext } from "../Navbar";
var NavLi = function NavLi(_ref) {
  var children = _ref.children,
    href = _ref.href,
    icon = _ref.icon;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var pathname = usePathname();
  var _useContext = useContext(NavbarContext),
    setShowNav = _useContext.setShowNav;
  useEffect(function () {
    setActive(pathname === href || pathname.startsWith("".concat(href, "/")));
  }, [pathname, href]);
  var handleClick = function handleClick() {
    setShowNav(false);
  };
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: href,
    onClick: handleClick,
    className: "text-sm font-normal rounded-lg flex xl:block p-3 xl:py-1.5 gap-2 items-center ".concat(active ? "bg-primary-100 text-gray-10 xl:bg-gray-10 xl:text-primary-100" : "bg-gray-20 text-gray-70 xl:text-white xl:bg-transparent xl:px-0")
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "xl:hidden text-base"
  }, icon), children));
};
export default NavLi;