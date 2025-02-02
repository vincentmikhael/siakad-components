var _excluded = ["colSpan", "className", "text"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
var NotFoundRow = function NotFoundRow(_ref) {
  var colSpan = _ref.colSpan,
    className = _ref.className,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Data tidak ditemukan" : _ref$text,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", _extends({
    colSpan: colSpan,
    className: twMerge("p-4 text-center text-gray-40", className)
  }, props), text));
};
export default NotFoundRow;