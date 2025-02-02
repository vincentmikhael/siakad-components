var _excluded = ["label", "showLabel", "showHint", "hint", "value", "onChange", "placeholder", "rows", "className", "classLabel", "disabled", "error"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
import { Text } from "./..";
var Textarea = function Textarea(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Label" : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "placeholder" : _ref$placeholder,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    className = _ref.className,
    _ref$classLabel = _ref.classLabel,
    classLabel = _ref$classLabel === void 0 ? "" : _ref$classLabel,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded);
  var errorClasses = "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]";
  var baseClasses = twMerge("rounded-xl bg-white px-3.5 py-2.5 placeholder:text-gray-30 placeholder:text-sm w-full text-gray-100 disabled:bg-fade disabled:cursor-not-allowed border resize-none", error ? errorClasses : "border-gray-20 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus:border-primary-100 focus:shadow-[0_0_1px_3px_rgba(6,140,205,0.15)]");
  var colorClasses = disabled ? "text-gray-50" : "text-gray-100";
  var hintColorClasses = error ? "text-danger-90" : "text-gray-50";
  return /*#__PURE__*/React.createElement("div", {
    className: twMerge("flex flex-col gap-1.5", className)
  }, showLabel && /*#__PURE__*/React.createElement("label", {
    className: twMerge("block text-sm font-medium", colorClasses, classLabel)
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    className: twMerge(baseClasses, className)
  }, props)), showHint && (error || hint) && /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    size: "sm",
    weight: "400",
    color: hintColorClasses
  }, error || hint));
};
export default Textarea;