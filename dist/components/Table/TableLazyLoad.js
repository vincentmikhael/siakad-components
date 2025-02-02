import { twMerge } from "tailwind-merge";
var TableLazyLoad = function TableLazyLoad(_ref) {
  var columns = _ref.columns;
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto rounded-xl"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-full bg-white"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "text-[13px] rounded-lg"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "bg-fade text-black text-left"
  }, columns.map(function (e, index) {
    return /*#__PURE__*/React.createElement("th", {
      className: twMerge("bg-fade uppercase px-4 py-3", e.className),
      key: index
    }, e.name);
  }))), /*#__PURE__*/React.createElement("tbody", null, Array(5).fill(null).map(function (_, rowIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: rowIndex
    }, columns.map(function (col, colIndex) {
      return /*#__PURE__*/React.createElement("td", {
        className: "p-4 whitespace-nowrap",
        key: colIndex
      }, /*#__PURE__*/React.createElement("div", {
        className: "h-3 bg-fade rounded w-full animate-pulse"
      }));
    }));
  }))));
};
export default TableLazyLoad;