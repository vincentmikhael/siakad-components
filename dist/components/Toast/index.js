"use client";

var _excluded = ["title", "message", "status", "position", "dismissable", "isVisible", "onDismiss"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { X } from "@phosphor-icons/react";
import { IconButton, Text } from "../../..";
var Toast = function Toast(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "New Toast" : _ref$title,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? "This is a new alert" : _ref$message,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "success" : _ref$status,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "top-right" : _ref$position,
    _ref$dismissable = _ref.dismissable,
    dismissable = _ref$dismissable === void 0 ? true : _ref$dismissable,
    isVisible = _ref.isVisible,
    onDismiss = _ref.onDismiss,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(isVisible),
    _useState2 = _slicedToArray(_useState, 2),
    isAnimating = _useState2[0],
    setIsAnimating = _useState2[1];
  useEffect(function () {
    if (isVisible) {
      setIsAnimating(true);
    } else {
      var timer = setTimeout(function () {
        setIsAnimating(false);
      }, 300);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [isVisible]);
  var baseClasses = "flex flex-row gap-4 p-4 rounded-xl w-[296px] border justify-between items-start transition-opacity duration-300 ease-in-out shadow-[0px_16px_22px_-6px_rgba(16,24,40,0.1)]";
  var statusClasses = {
    success: "border-success-60 bg-success-10 text-success-90",
    danger: "border-danger-60 bg-danger-10 text-danger-90",
    warning: "border-warning-60 bg-warning-10 text-warning-90",
    info: "border-info-60 bg-info-10 text-info-90"
  };
  var positionClasses = {
    "top-right": "top-24 xl:top-44 right-5 xl:right-9",
    "top-left": "top-24 xl:top-44 left-5 xl:left-9",
    "bottom-right": "bottom-12 right-9",
    "bottom-left": "bottom-12 left-9"
  };
  if (!isVisible && !isAnimating) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: twMerge("fixed z-50", positionClasses[position])
  }, props), /*#__PURE__*/React.createElement("div", {
    className: twMerge(baseClasses, statusClasses[status], isAnimating ? isVisible ? 'animate-fade-in' : 'animate-fade-out' // Add animation classes
    : 'opacity-0')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "sm",
    weight: "600"
  }, title), /*#__PURE__*/React.createElement(Text, {
    size: "xs",
    color: "text-gray-50",
    weight: "400"
  }, message)), dismissable && /*#__PURE__*/React.createElement(IconButton, {
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement(X, {
    weight: "bold",
    size: 12
  }))));
};
export default Toast;