import { Button, Input, Text } from "../../..";
import { twMerge } from "tailwind-merge";
import DateInputControl from "./DateInputControl";
var DateInputPopup = function DateInputPopup(_ref) {
  var _ref$position = _ref.position,
    position = _ref$position === void 0 ? "bottom-right" : _ref$position,
    currentMonth = _ref.currentMonth,
    currentYear = _ref.currentYear,
    navigateMonth = _ref.navigateMonth,
    children = _ref.children,
    dateToday = _ref.dateToday,
    clearDate = _ref.clearDate,
    actionButton = _ref.actionButton,
    size = _ref.size;
  var Week = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"];
  var positionClasses = {
    "bottom-right": "".concat(size === "lg" ? "top-20" : "top-[72px]", " right-0"),
    "bottom-left": "".concat(size === "lg" ? "top-20" : "top-[72px]", " left-0"),
    "top-right": "".concat(size === "lg" ? "bottom-14" : "bottom-12", " right-0"),
    "top-left": "".concat(size === "lg" ? "bottom-14" : "bottom-12", " left-0")
  };
  return /*#__PURE__*/React.createElement("div", {
    className: twMerge("absolute z-30 block w-[328px]", positionClasses[position])
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block rounded-xl bg-white custom-shadow-datepicker border border-fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-5 space-y-3"
  }, /*#__PURE__*/React.createElement(DateInputControl, {
    currentMonth: currentMonth,
    currentYear: currentYear,
    navigateToNextMonth: function navigateToNextMonth() {
      return navigateMonth(1);
    },
    navigateToPrevMonth: function navigateToPrevMonth() {
      return navigateMonth(-1);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 gap-y-1 gap-x-0"
  }, Week.map(function (day) {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 items-center flex justify-center",
      key: day
    }, /*#__PURE__*/React.createElement(Text, {
      tag: "span",
      weight: "600",
      size: "sm"
    }, day));
  }), children)), actionButton && /*#__PURE__*/React.createElement("div", {
    className: "p-4 gap-3 flex flex-row border-t border-fade"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "w-full",
    size: "md",
    onClick: dateToday
  }, "Today"), /*#__PURE__*/React.createElement(Button, {
    className: "w-full",
    size: "md",
    variant: "white",
    onClick: clearDate
  }, "Clear"))));
};
export default DateInputPopup;