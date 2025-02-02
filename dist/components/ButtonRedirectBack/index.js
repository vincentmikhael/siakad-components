'use client';

var _excluded = ["type", "variant", "size", "leftIcon", "referrer", "url", "rightIcon", "children", "onClick", "className", "disabled", "fullWidth", "filled"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./..";
import { useRouter } from "next/navigation";
var ButtonRedirectBack = function ButtonRedirectBack(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "white" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size,
    _ref$leftIcon = _ref.leftIcon,
    leftIcon = _ref$leftIcon === void 0 ? /*#__PURE__*/React.createElement(ArrowLeft, {
      weight: "bold"
    }) : _ref$leftIcon,
    _ref$referrer = _ref.referrer,
    referrer = _ref$referrer === void 0 ? "" : _ref$referrer,
    _ref$url = _ref.url,
    url = _ref$url === void 0 ? undefined : _ref$url,
    rightIcon = _ref.rightIcon,
    children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$filled = _ref.filled,
    filled = _ref$filled === void 0 ? true : _ref$filled,
    props = _objectWithoutProperties(_ref, _excluded);
  var router = useRouter();
  var goBack = function goBack() {
    if (referrer) {
      router.push(referrer); // Redirect to the referrer URL
    } else if (url) {
      router.push(url);
    } else {
      router.back(); // Fallback to browser history
    }
  };
  return /*#__PURE__*/React.createElement(Button, _extends({
    onClick: onClick !== null && onClick !== void 0 ? onClick : goBack,
    className: className,
    leftIcon: leftIcon,
    rightIcon: rightIcon,
    filled: filled,
    variant: variant !== null && variant !== void 0 ? variant : "white",
    size: size !== null && size !== void 0 ? size : "sm",
    type: type !== null && type !== void 0 ? type : "button",
    disabled: disabled,
    fullWidth: fullWidth
  }, props), children !== null && children !== void 0 ? children : "Kembali ke Halaman Sebelumnya");
};
export default ButtonRedirectBack;