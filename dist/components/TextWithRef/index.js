var _excluded = ["weight", "align", "size", "spaces", "whitespace", "italic", "opacity", "color", "className", "children", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { sizeClasses, weightClasses, spaceClasses, alignClasses, whitespaceClasses } from "../Text/StandardClasses";
// import {default as Text} from "@components/Text";
var TextWithRef = /*#__PURE__*/forwardRef(function Text(_ref, ref) {
  var _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? "400" : _ref$weight,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "left" : _ref$align,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "base" : _ref$size,
    _ref$spaces = _ref.spaces,
    spaces = _ref$spaces === void 0 ? "normal" : _ref$spaces,
    _ref$whitespace = _ref.whitespace,
    whitespace = _ref$whitespace === void 0 ? "normal" : _ref$whitespace,
    _ref$italic = _ref.italic,
    italic = _ref$italic === void 0 ? false : _ref$italic,
    _ref$opacity = _ref.opacity,
    opacity = _ref$opacity === void 0 ? 100 : _ref$opacity,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "text-gray-100" : _ref$color,
    className = _ref.className,
    children = _ref.children,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? "p" : _ref$tag,
    props = _objectWithoutProperties(_ref, _excluded);
  var textClasses = twMerge(weightClasses[weight], alignClasses[align], sizeClasses[size], spaceClasses[spaces], whitespaceClasses[whitespace], italic && "italic", color, "opacity-".concat(opacity), className);
  var Wrapper = tag;
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    ref: ref,
    className: textClasses
  }, props), children);
});
export default TextWithRef;