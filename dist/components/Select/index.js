"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["isRelative", "options", "label", "showLabel", "showHint", "hint", "placeholder", "onChange", "name", "error", "disabled", "size", "className", "menuClass", "containerClass", "value", "labelKey", "valueKey"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDown, Check } from "@phosphor-icons/react";
import { Text } from "../../..";
var Select = function Select(_ref) {
  var _ref$isRelative = _ref.isRelative,
    isRelative = _ref$isRelative === void 0 ? true : _ref$isRelative,
    options = _ref.options,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Label" : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    hint = _ref.hint,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select option" : _ref$placeholder,
    onChange = _ref.onChange,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "" : _ref$name,
    error = _ref.error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$menuClass = _ref.menuClass,
    menuClass = _ref$menuClass === void 0 ? "" : _ref$menuClass,
    _ref$containerClass = _ref.containerClass,
    containerClass = _ref$containerClass === void 0 ? "" : _ref$containerClass,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? null : _ref$value,
    _ref$labelKey = _ref.labelKey,
    labelKey = _ref$labelKey === void 0 ? "label" : _ref$labelKey,
    _ref$valueKey = _ref.valueKey,
    valueKey = _ref$valueKey === void 0 ? "value" : _ref$valueKey,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOption = _useState4[0],
    setSelectedOption = _useState4[1];
  var selectRef = useRef(null);
  useEffect(function () {
    if (value) {
      var normalizedOptions = options === null || options === void 0 ? void 0 : options.map(function (option) {
        return typeof option === "string" ? _defineProperty(_defineProperty({}, valueKey, option), labelKey, option) : option;
      });
      var initialOption = normalizedOptions === null || normalizedOptions === void 0 ? void 0 : normalizedOptions.find(function (option) {
        return option[valueKey] === value;
      });
      setSelectedOption(initialOption || null);
    } else {
      setSelectedOption(null); // pastikan selectedOption null jika value null
    }
  }, [value, options]);
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var baseClasses = "flex flex-row gap-3 justify-between items-center py-2.5 px-3.5 border rounded-xl transition-all duration-200 cursor-pointer";
  var focusClasses = "border-primary-100 shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]";
  var errorClasses = "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";
  var colorClasses = disabled ? "text-gray-50" : "text-gray-100";
  var sizeClasses = {
    xs: "h-9",
    sm: "h-10",
    lg: "h-12"
  };
  var fieldClasses = twMerge(baseClasses, isOpen && !disabled ? focusClasses : error ? errorClasses : "border-gray-20 drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]", disabled ? "bg-fade" : "bg-white", sizeClasses[size]);
  var menuClasses = twMerge("border-fade border-[1px] absolute z-30 mt-1 ".concat(isRelative ? 'w-full' : 'min-w-[200px]', " bg-white rounded-lg p-1.5 max-h-80 overflow-y-auto space-y-1 custom-shadow-select scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full"), menuClass);
  var optionClasses = "hover:bg-primary-10 p-2.5 cursor-pointer rounded-md flex items-center justify-between text-primary-100";
  var toggleDropdown = function toggleDropdown() {
    setIsOpen(!isOpen);
  };
  var handleOptionClick = function handleOptionClick(option) {
    setSelectedOption(option);
    onChange({
      target: {
        name: name,
        value: option[valueKey]
      }
    });
    setIsOpen(false);
  };
  var hintColorClasses = error ? "text-danger-90" : "text-gray-50";
  return /*#__PURE__*/React.createElement("div", {
    className: twMerge("flex flex-col gap-1.5 w-full", containerClass)
  }, showLabel && /*#__PURE__*/React.createElement("label", {
    className: twMerge("block text-sm font-medium", colorClasses)
  }, label), /*#__PURE__*/React.createElement("div", _extends({
    className: isRelative ? twMerge("relative", className) : className,
    ref: selectRef
  }, props), /*#__PURE__*/React.createElement("div", {
    className: fieldClasses,
    onClick: toggleDropdown
  }, /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    size: size === "xs" ? "xs" : "sm",
    weight: "400",
    color: selectedOption ? "text-gray-100" : "text-gray-30",
    className: "truncate w-full overflow-hidden whitespace-nowrap"
  }, selectedOption ? selectedOption[labelKey] : placeholder), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-40"
  }, /*#__PURE__*/React.createElement(CaretDown, {
    size: 16,
    weight: "bold"
  }))), isOpen && !disabled && /*#__PURE__*/React.createElement("ul", {
    className: menuClasses
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    var normalizedOption = typeof option === "string" ? _defineProperty(_defineProperty({}, valueKey, option), labelKey, option) : option;
    var isSelected = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption[valueKey]) === normalizedOption[valueKey];
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: twMerge(optionClasses, isSelected ? "bg-primary-10 text-primary-100" : "hover:bg-primary-10 hover:text-primary-100"),
      onClick: function onClick() {
        return handleOptionClick(normalizedOption);
      }
    }, /*#__PURE__*/React.createElement(Text, {
      tag: "p"
    }, normalizedOption[labelKey]), isSelected && /*#__PURE__*/React.createElement(Check, {
      weight: "bold"
    }));
  }))), showHint && (error || hint) && /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    size: "sm",
    weight: "400",
    color: hintColorClasses
  }, error || hint));
};
export default Select;