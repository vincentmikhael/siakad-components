import { twMerge } from "tailwind-merge";
var DateItem = function DateItem(_ref) {
  var dateObj = _ref.dateObj,
    onClick = _ref.onClick,
    isFromPreviousMonth = _ref.isFromPreviousMonth,
    isFromNextMonth = _ref.isFromNextMonth,
    selected = _ref.selected;
  var displayDate = dateObj ? dateObj.getDate() : null;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: twMerge("w-10 h-10 items-center flex justify-center hover:bg-fade hover:rounded-full hover:text-gray-100 hover:font-semibold", selected && "bg-primary-100 rounded-full font-semibold", selected ? "text-gray-10" : isFromPreviousMonth || isFromNextMonth ? "text-gray-50" : "text-gray-100")
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, displayDate !== null ? displayDate : ""));
};
export default DateItem;