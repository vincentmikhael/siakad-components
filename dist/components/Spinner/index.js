import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";
var Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? "bold" : _ref$weight,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement(CircleNotch, {
    size: size,
    weight: weight,
    className: twMerge("motion-safe:animate-spin", className)
  });
};
export default Spinner;