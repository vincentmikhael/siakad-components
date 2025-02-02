import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Text } from "../../..";
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DateInputControl = function DateInputControl(_ref) {
  var navigateToNextMonth = _ref.navigateToNextMonth,
    navigateToPrevMonth = _ref.navigateToPrevMonth,
    currentMonth = _ref.currentMonth,
    currentYear = _ref.currentYear;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "text-gray-100",
    type: "button",
    onClick: navigateToPrevMonth,
    "aria-label": "Previous Month"
  }, /*#__PURE__*/React.createElement(CaretLeft, {
    size: 20,
    weight: "bold"
  })), /*#__PURE__*/React.createElement(Text, {
    tag: "span",
    align: "center",
    weight: "600",
    size: "md"
  }, "".concat(monthNames[currentMonth], " ").concat(currentYear)), /*#__PURE__*/React.createElement("button", {
    className: "text-gray-100",
    type: "button",
    onClick: navigateToNextMonth,
    "aria-label": "Next Month"
  }, /*#__PURE__*/React.createElement(CaretRight, {
    size: 20,
    weight: "bold"
  })));
};
export default DateInputControl;