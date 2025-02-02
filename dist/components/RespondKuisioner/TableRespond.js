"use client";

var TableRespond = function TableRespond(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-xl border border-fade overflow-hidden shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-xs text-gray-90 font-medium"
  }, /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-fade"
  }, data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("tr", {
      className: "odd:bg-white even:bg-fade",
      key: index
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-4"
    }, item));
  }))));
};
export default TableRespond;