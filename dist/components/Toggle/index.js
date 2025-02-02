"use client";

var _excluded = ["onChange", "checked", "disabled", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../../..";
var Toggle = function Toggle(_ref) {
  var onChange = _ref.onChange,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(checked),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var handleToggle = function handleToggle() {
    if (!disabled) {
      setIsChecked(function (prev) {
        return !prev;
      });
      onChange && onChange(!isChecked);
    }
  };
  return /*#__PURE__*/React.createElement("label", {
    className: twMerge("flex items-center gap-2", disabled ? "cursor-not-allowed" : "cursor-pointer")
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: handleToggle,
    className: twMerge("relative w-9 h-5 flex items-center rounded-full p-[2px] transition-colors duration-200", isChecked ? "bg-primary-100" : "bg-gray-20", disabled && "opacity-50", className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: twMerge("absolute w-4 h-4 rounded-full shadow-[0px_1px_5px_0px_rgba(16,24,40,0.16)] transition-transform duration-200", isChecked ? "translate-x-4" : "translate-x-0", disabled ? "bg-fade" : "bg-white")
  })), /*#__PURE__*/React.createElement(Text, {
    weight: "500"
  }, children));
};
export default Toggle;