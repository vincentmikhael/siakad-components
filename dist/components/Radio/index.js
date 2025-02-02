"use client";

var _excluded = ["options", "selected", "name", "className", "children", "onChange"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
import { useState } from "react";
var Radio = function Radio(_ref) {
  var options = _ref.options,
    selected = _ref.selected,
    name = _ref.name,
    className = _ref.className,
    children = _ref.children,
    onChange = _ref.onChange,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(selected || ""),
    _useState2 = _slicedToArray(_useState, 2),
    optionSelected = _useState2[0],
    setOptionSelected = _useState2[1];
  var handleSelect = function handleSelect(value) {
    setOptionSelected(value);
    if (onChange) onChange(value);
  };
  return (
    /*#__PURE__*/
    // <label className={"flex flex-row gap-1.5 items-center"}>
    React.createElement(React.Fragment, null, options.map(function (option, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-row gap-1.5 items-center cursor-pointer",
        key: index
      }, /*#__PURE__*/React.createElement("label", {
        className: "relative flex items-center"
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: "radio",
        value: option.value,
        name: name,
        checked: optionSelected === option.value // Ensure it reflects the checked state
        ,
        onChange: function onChange() {
          return handleSelect(option.value);
        } // Handle state change
        ,
        className: twMerge(className, "peer appearance-none w-4 h-4 border border-fade rounded-full checked:border-2 checked:border-primary-100 focus:custom-shadow-radio disabled:bg-fade disabled:cursor-not-allowed"),
        disabled: option.disabled
      }, restProps)), /*#__PURE__*/React.createElement("span", {
        className: "absolute bg-primary-100 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      })), option.label && /*#__PURE__*/React.createElement("span", {
        className: "font-medium text-sm ".concat(optionSelected === option.value ? "text-gray-100" : "text-gray-50", " transition-colors duration-200")
      }, option.label));
    }))
  );
};
export default Radio;