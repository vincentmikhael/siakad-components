var _excluded = ["olClass", "className", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
var Breadcrumb = function Breadcrumb(_ref) {
  var olClass = _ref.olClass,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var classOl = "inline-flex items-center space-x-3";
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: twMerge("flex ", className),
    "aria-label": "Breadcrumb"
  }, props), /*#__PURE__*/React.createElement("ol", {
    className: twMerge(classOl, olClass)
  }, children));
};
export default Breadcrumb;