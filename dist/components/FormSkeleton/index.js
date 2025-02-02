import { twMerge } from "tailwind-merge";
var FormSkeleton = function FormSkeleton(_ref) {
  var count = _ref.count,
    className = _ref.className,
    _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? 2 : _ref$cols;
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-".concat(cols, " gap-6 flex-grow")
  }, Array.from({
    length: count
  }).map(function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: twMerge("skeleton skeleton-box h-12", className)
    });
  }));
};
export default FormSkeleton;