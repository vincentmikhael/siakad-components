import { twMerge } from "tailwind-merge";
var Hr = function Hr(_ref) {
  var _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? false : _ref$icon,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    children = _ref.children,
    classHr = _ref.classHr,
    className = _ref.className,
    classInnerDiv = _ref.classInnerDiv;
  var divClass = "inline-flex items-center justify-center ".concat(direction === 'horizontal' ? 'w-full' : 'w-fit');
  var iconDivClass = "absolute left-1/2 px-4 bg-white transform -translate-x-1/2";
  var textSpanClass = "absolute px-2 text-sm text-gray-50 font-medium transform bg-white -translate-x-1/2 left-1/2";
  var innerDivClass = "absolute px-4 transform -translate-x-1/2 bg-white left-1/2";
  var directionClass = {
    horizontal: "h-[1px] w-full",
    vertical: "w-[1px] h-full"
  };
  var horizontalCls = twMerge("bg-fade border-0", directionClass[direction], classHr);
  var divCls = twMerge(divClass, "relative", className);
  var innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, classInnerDiv);
  return /*#__PURE__*/React.createElement("div", {
    className: divCls
  }, children ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
    className: horizontalCls
  }), /*#__PURE__*/React.createElement("div", {
    className: innerDivCls
  }, children)) : /*#__PURE__*/React.createElement("hr", {
    className: horizontalCls
  }));
};
export default Hr;