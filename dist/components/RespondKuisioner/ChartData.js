import { Text } from "./..";
var ChartData = function ChartData(_ref) {
  var data = _ref.data,
    className = _ref.className;
  return data.map(function (value, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-5 w-20",
      key: index
    }, /*#__PURE__*/React.createElement(Text, {
      size: "lg",
      weight: 800
    }, value.percentage, "%"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-3 h-3 rounded-full",
      style: {
        backgroundColor: value.color
      }
    }), /*#__PURE__*/React.createElement(Text, {
      color: "text-gray-70",
      weight: "500",
      size: "xs"
    }, value.label)));
  });
};
export default ChartData;