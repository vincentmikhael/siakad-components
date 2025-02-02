"use client";

var _excluded = ["placeholder", "showHint", "hint", "className", "classInput", "classLabel", "onFocus", "value", "defaultValue", "onChange", "type", "leftIcon", "rightIcon", "size", "error", "disabled", "onRemove"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../../..";
var OptionInput = function OptionInput(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Placeholder" : _ref$placeholder,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    hint = _ref.hint,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$classInput = _ref.classInput,
    classInput = _ref$classInput === void 0 ? "" : _ref$classInput,
    _ref$classLabel = _ref.classLabel,
    classLabel = _ref$classLabel === void 0 ? "" : _ref$classLabel,
    onFocus = _ref.onFocus,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "checkbox" : _ref$type,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    error = _ref.error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onRemove = _ref.onRemove,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  var baseClasses = "transition-all duration-200 h-fit";
  var focusClasses = "border-primary-100 border-b";
  var errorClasses = "border-b border-danger-90";
  var sizeClasses = {
    xs: "h-9",
    sm: "h-10",
    lg: "h-12"
  };
  var fieldClasses = twMerge(baseClasses, sizeClasses[size], isFocused && !disabled ? focusClasses : error ? errorClasses : "border-gray-20", disabled ? "bg-fade" : "bg-white");
  var inputClasses = "w-full block placeholder:text-gray-30 text-sm outline-none text-gray-50 p-0 pt-0.5 h-fit transition-all duration-200 hover:border-b hover:border-gray-20 focus:border-b focus:border-primary-100 ".concat(error && errorClasses);
  var hintColorClasses = error ? "text-danger-90" : "text-gray-50";
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: twMerge("flex flex-row gap-1.5 items-center grow", className)
  }, type === "checkbox" ? /*#__PURE__*/React.createElement("div", {
    className: "w-4 h-4 border border-gray-20 rounded"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "w-4 h-4 border border-fade rounded-full"
  }), /*#__PURE__*/React.createElement("input", _extends({
    className: inputClasses,
    type: "text",
    value: value,
    onChange: disabled ? undefined : onChange,
    placeholder: placeholder,
    disabled: disabled
  }, props))), /*#__PURE__*/React.createElement("button", {
    className: "text-gray-40 hover:text-gray-80",
    type: "button",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(X, {
    size: 16
  }))), showHint && (error || hint) && /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    size: "sm",
    weight: "400",
    color: hintColorClasses
  }, error || hint));
};
export default OptionInput;