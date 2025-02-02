"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState, useEffect, useRef, useMemo } from "react";
import getDaysInMonth from "../../utils/getDaysInMonth";
import formatDate from "../../utils/formatDate";
import useClickOutside from "../../hooks/useClickOutside";
import DateInputPopup from "./DateInputPopup";
import DateItem from "./DateItem";
import { CalendarBlank } from "@phosphor-icons/react";
import { Input } from "../../..";
import { twMerge } from "tailwind-merge";
function getDateSlots(currentMonth, currentYear) {
  var dateArray = getDaysInMonth(currentMonth, currentYear);
  var slotSkipCount = new Date(dateArray[0]).getDay();
  for (var i = 0; i < slotSkipCount; i++) {
    dateArray.unshift(null);
  }
  return dateArray;
}
var DateInput = function DateInput(_ref) {
  var value = _ref.value,
    name = _ref.name,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    _ref$actionButton = _ref.actionButton,
    actionButton = _ref$actionButton === void 0 ? false : _ref$actionButton,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select date" : _ref$placeholder,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Label" : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    error = _ref.error,
    className = _ref.className,
    position = _ref.position;
  var popupRef = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPopup = _useState2[0],
    setShowPopup = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedDate = _useState4[0],
    setSelectedDate = _useState4[1];
  var _useState5 = useState(new Date().getMonth()),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMonth = _useState6[0],
    setCurrentMonth = _useState6[1];
  var _useState7 = useState(new Date().getFullYear()),
    _useState8 = _slicedToArray(_useState7, 2),
    currentYear = _useState8[0],
    setCurrentYear = _useState8[1];
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    typingTimeout = _useState10[0],
    setTypingTimeout = _useState10[1];
  useClickOutside(popupRef, function () {
    setShowPopup(false);
  });
  var dateArray = useMemo(function () {
    return getDateSlots(currentMonth, currentYear);
  }, [currentMonth, currentYear]);
  useEffect(function () {
    if (value) {
      var dateObj = new Date(value);
      setSelectedDate(formatDate(dateObj));
      setCurrentMonth(dateObj.getMonth());
      setCurrentYear(dateObj.getFullYear());
    }
  }, [value]);
  function togglePopupHandler() {
    setShowPopup(function (currentShowPopup) {
      return !currentShowPopup;
    });
  }
  function navigateMonthHandler() {
    var navigateBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    if (currentMonth + navigateBy === 12) {
      setCurrentMonth(0);
      setCurrentYear(function (currentState) {
        return currentState + 1;
      });
    } else if (currentMonth + navigateBy === -1) {
      setCurrentMonth(11);
      setCurrentYear(function (currentState) {
        return currentState - 1;
      });
    } else {
      setCurrentMonth(function (currentState) {
        return currentState + navigateBy;
      });
    }
  }
  function selectDateHandler(date) {
    var value = new Date(date);
    onChange({
      target: {
        name: name,
        value: value
      }
    });
    setSelectedDate(formatDate(date));
    setShowPopup(false);
  }
  function clearDate() {
    setSelectedDate(null);
  }
  function dateToday() {
    setShowPopup(false);
    setSelectedDate(formatDate(new Date()));
  }
  function handleInputChange(event) {
    var inputValue = event.target.value;
    setSelectedDate(inputValue);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(setTimeout(function () {
      var parsedDate = new Date(inputValue);
      if (!isNaN(parsedDate) && inputValue === formatDate(parsedDate)) {
        onChange(parsedDate);
        setCurrentMonth(parsedDate.getMonth());
        setCurrentYear(parsedDate.getFullYear());
      }
    }, 1000));
  }
  return /*#__PURE__*/React.createElement("span", {
    ref: popupRef
  }, /*#__PURE__*/React.createElement("div", {
    className: twMerge("relative w-full", className)
  }, /*#__PURE__*/React.createElement(Input, {
    size: size,
    placeholder: placeholder,
    label: label,
    showLabel: showLabel,
    showHint: showHint,
    error: error,
    value: selectedDate,
    onChange: handleInputChange,
    onFocus: togglePopupHandler,
    rightIcon: /*#__PURE__*/React.createElement(CalendarBlank, {
      size: 16,
      weight: "bold"
    }),
    disabled: disabled
  }), showPopup && /*#__PURE__*/React.createElement(DateInputPopup, {
    currentMonth: currentMonth,
    currentYear: currentYear,
    navigateMonth: navigateMonthHandler,
    clearDate: clearDate,
    dateToday: dateToday,
    actionButton: actionButton,
    position: position,
    size: size
  }, dateArray.map(function (dateObj, index) {
    return /*#__PURE__*/React.createElement(DateItem, {
      key: index,
      dateObj: dateObj.date,
      isFromPreviousMonth: dateObj.isFromPreviousMonth,
      isFromNextMonth: dateObj.isFromNextMonth,
      selected: selectedDate === formatDate(dateObj.date),
      onClick: function onClick() {
        return selectDateHandler(dateObj.date);
      }
    });
  }))));
};
export default DateInput;