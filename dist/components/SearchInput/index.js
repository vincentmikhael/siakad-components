"use client";

var _excluded = ["options", "label", "showLabel", "showHint", "hint", "placeholder", "onChange", "error", "disabled", "size", "className", "value", "labelKey", "valueKey", "keywordKey", "secondKeywordKey", "name", "loading", "customLabel", "icon"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useState, useEffect, useRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDown, Check, MagnifyingGlass } from "@phosphor-icons/react";
import { Spinner, Text } from "../../..";
var SearchInput = function SearchInput(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Label" : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    hint = _ref.hint,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Search option" : _ref$placeholder,
    onChange = _ref.onChange,
    error = _ref.error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    className = _ref.className,
    value = _ref.value,
    _ref$labelKey = _ref.labelKey,
    labelKey = _ref$labelKey === void 0 ? "label" : _ref$labelKey,
    _ref$valueKey = _ref.valueKey,
    valueKey = _ref$valueKey === void 0 ? "value" : _ref$valueKey,
    _ref$keywordKey = _ref.keywordKey,
    keywordKey = _ref$keywordKey === void 0 ? "label" : _ref$keywordKey,
    _ref$secondKeywordKey = _ref.secondKeywordKey,
    secondKeywordKey = _ref$secondKeywordKey === void 0 ? "" : _ref$secondKeywordKey,
    name = _ref.name,
    loading = _ref.loading,
    customLabel = _ref.customLabel,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? true : _ref$icon,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    inputValue = _useState6[0],
    setInputValue = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOption = _useState8[0],
    setSelectedOption = _useState8[1];
  var selectRef = useRef(null);
  var filteredOptions = useMemo(function () {
    if (!searchTerm) return options;
    return options.filter(function (item) {
      var keywordValue = typeof item[keywordKey] === "string" ? item[keywordKey] : "";
      var secondKeywordValue = typeof item[secondKeywordKey] === "string" ? item[secondKeywordKey] : "";
      return (keywordValue === null || keywordValue === void 0 ? void 0 : keywordValue.toLowerCase().includes(searchTerm.toLowerCase())) || (secondKeywordValue === null || secondKeywordValue === void 0 ? void 0 : secondKeywordValue.toLowerCase().includes(searchTerm.toLowerCase()));
    });
  }, [searchTerm, options, keywordKey, secondKeywordKey]);
  var handleSelectItem = function handleSelectItem(item) {
    var newValue = item[valueKey];
    setInputValue(item[labelKey]);
    setSelectedOption(item);
    setSearchTerm("");
    setIsOpen(false);
    onChange === null || onChange === void 0 || onChange({
      target: {
        name: name,
        value: newValue
      }
    });
  };
  var handleSearchChange = function handleSearchChange(e) {
    var targetValue = e.target.value;
    setSearchTerm(targetValue);
    setInputValue(targetValue);
    if (targetValue === "") {
      onChange === null || onChange === void 0 || onChange({
        target: {
          name: name,
          value: ""
        }
      });
    }
    setIsOpen(true);
  };
  useEffect(function () {
    if (value) {
      var selectedItem = options.find(function (item) {
        return item[valueKey] === value;
      });
      if (selectedItem) {
        setInputValue(selectedItem[labelKey]);
      } else {
        setInputValue("");
        setSearchTerm("");
      }
    } else {
      setInputValue("");
      setSearchTerm("");
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
  var baseClasses = "flex flex-row gap-2 justify-between items-center py-2.5 px-3.5 border rounded-xl transition-all duration-200 cursor-pointer";
  var focusClasses = "border-primary-100 shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]";
  var errorClasses = "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";
  var colorClasses = disabled ? "text-gray-50" : "text-gray-100";
  var sizeClasses = {
    xs: "h-9",
    sm: "h-10",
    lg: "h-12"
  };
  var fieldClasses = twMerge(baseClasses, isOpen && !disabled ? focusClasses : error ? errorClasses : "border-gray-20 drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]", disabled ? "bg-fade" : "bg-white", sizeClasses[size]);
  var menuClasses = "border-fade border-[1px] absolute z-10 mt-1 w-full bg-white rounded-lg p-1.5 max-h-44 overflow-y-auto space-y-1 custom-shadow-select scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full";
  var optionClasses = "hover:bg-primary-10 p-2.5 cursor-pointer rounded-md flex items-center justify-between text-primary-100";
  var iconClasses = disabled ? "text-gray-30" : inputValue ? "text-gray-100" : "text-gray-40";
  var hintColorClasses = error ? "text-danger-90" : "text-gray-50";
  var inputClasses = "w-full block placeholder:text-gray-30 font-normal outline-none text-gray-100 ".concat(size === "xs" ? "text-xs" : "text-sm");
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5 w-full"
  }, showLabel && /*#__PURE__*/React.createElement("label", {
    className: twMerge("block text-sm font-medium", colorClasses)
  }, label), /*#__PURE__*/React.createElement("div", {
    className: twMerge("relative", className),
    ref: selectRef
  }, /*#__PURE__*/React.createElement("div", {
    className: twMerge(fieldClasses, iconClasses)
  }, icon && /*#__PURE__*/React.createElement(MagnifyingGlass, {
    size: 16,
    weight: "bold"
  }), /*#__PURE__*/React.createElement("input", _extends({
    className: inputClasses,
    type: "text",
    value: inputValue,
    placeholder: placeholder,
    onChange: handleSearchChange,
    disabled: disabled,
    onFocus: function onFocus() {
      return setIsOpen(true);
    },
    autoComplete: "off"
  }, props)), !icon && /*#__PURE__*/React.createElement("div", {
    className: "text-gray-40"
  }, /*#__PURE__*/React.createElement(CaretDown, {
    size: 16,
    weight: "bold"
  }))), isOpen && /*#__PURE__*/React.createElement("ul", {
    className: menuClasses
  }, loading ? /*#__PURE__*/React.createElement("li", {
    className: "p-2.5 rounded-md flex items-center justify-center text-gray-30"
  }, /*#__PURE__*/React.createElement(Spinner, null)) : filteredOptions.length > 0 ? filteredOptions.map(function (option, index) {
    var isSelected = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption[valueKey]) === option[valueKey];
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: twMerge(optionClasses, isSelected ? "bg-primary-10 text-primary-100" : "hover:bg-primary-10 hover:text-primary-100"),
      onClick: function onClick() {
        return handleSelectItem(option);
      }
    }, /*#__PURE__*/React.createElement(Text, {
      tag: "p"
    }, customLabel ? customLabel(option) : option[labelKey]), isSelected && /*#__PURE__*/React.createElement(Check, {
      weight: "bold"
    }));
  }) : /*#__PURE__*/React.createElement("li", {
    className: "p-2.5 rounded-md flex items-center justify-between text-gray-40"
  }, "Data tidak ditemukan"))), showHint && (error || hint) && /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    size: "sm",
    weight: "400",
    color: hintColorClasses
  }, error || hint));
};
export default SearchInput;