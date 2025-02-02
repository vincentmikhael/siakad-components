var _excluded = ["children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { twMerge } from "tailwind-merge";
var MenuUl = function MenuUl(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var baseClasses = "flex xl:flex-col flex-row gap-2 xl:max-w-[100%*0,18333333] min-w-[264px] max-w-full overflow-x-auto xl:overflow-x-clip scrollbar-none xl:border-0 border-b border-fade pb-6 mb-6";
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: twMerge(baseClasses, className)
  }, props), children);
};
export default MenuUl;