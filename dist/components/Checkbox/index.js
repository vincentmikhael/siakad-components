"use client";

var _excluded = ["label", "showLabel", "showHint", "hint", "error", "onChange", "onClick", "checked", "children", "disabled", "className", "classLabel"];
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
import { Check } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { Text } from "../../..";
var Checkbox = function Checkbox(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Label" : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    hint = _ref.hint,
    error = _ref.error,
    onChange = _ref.onChange,
    onClick = _ref.onClick,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? undefined : _ref$checked,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    className = _ref.className,
    _ref$classLabel = _ref.classLabel,
    classLabel = _ref$classLabel === void 0 ? "" : _ref$classLabel,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  var baseClasses = "w-4 h-4 rounded-[4px] p-[2px] transition-colors duration-200 flex items-center justify-center";
  var additionalClasses = "";
  if (!disabled && checked) {
    additionalClasses += "bg-primary-100 border-none ";
  } else {
    additionalClasses += "border border-fade ";
  }
  if (isFocused && !disabled) {
    additionalClasses += "shadow-[0_0_1px_1px_rgba(6,140,205,0.15)] ";
  }
  if (disabled) {
    additionalClasses += "bg-fade cursor-not-allowed ";
  }
  if (disabled && checked) {
    additionalClasses += "text-gray-30 ";
  } else {
    additionalClasses += "text-white ";
  }
  var colorClasses = disabled ? "text-gray-50" : "text-gray-100";
  var hintColorClasses = error ? "text-danger-90" : "text-gray-50";
  return /*#__PURE__*/React.createElement("div", {
    className: twMerge("flex flex-col gap-1.5", className)
  }, showLabel && /*#__PURE__*/React.createElement("label", {
    className: twMerge("block text-sm font-medium", colorClasses, classLabel)
  }, label), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center cursor-pointer w-fit ".concat(children ? "gap-2" : "")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    className: "hidden",
    disabled: disabled
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: twMerge(baseClasses, additionalClasses, className),
    onFocus: function onFocus() {
      return !disabled && setIsFocused(true);
    },
    onBlur: function onBlur() {
      return setIsFocused(false);
    },
    onClick: onClick,
    tabIndex: 0
  }, checked && /*#__PURE__*/React.createElement(Check, {
    size: 12,
    weight: "bold"
  })), /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    weight: "500",
    size: "sm",
    color: checked ? "text-gray-100" : "text-gray-50"
  }, children)), showHint && (error || hint) && /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    size: "sm",
    weight: "400",
    color: hintColorClasses
  }, error || hint));
};
export default Checkbox;