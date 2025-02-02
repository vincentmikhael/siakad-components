var _excluded = ["title", "message", "status", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { CheckCircle, Info, WarningCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";
import { Text } from "../../..";
var Alert = function Alert(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "New Alert" : _ref$title,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? "This is a new alert" : _ref$message,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "success" : _ref$status,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var baseClasses = "flex flex-row gap-4 px-4 py-3 rounded-lg w-full border items-center shadow-[0px_12px_24px_-12px_rgba(24,78,68,0.2)]";
  var successClasses = "border-success-60 bg-success-10 text-success-90";
  var warningClasses = "border-warning-60 bg-warning-10 text-warning-90";
  var dangerClasses = "border-danger-60 bg-danger-10 text-danger-90";
  var infoClasses = "border-info-60 bg-info-10 text-info-90";
  var statusClasses = {
    success: successClasses,
    danger: dangerClasses,
    warning: warningClasses,
    info: infoClasses
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: twMerge(baseClasses, statusClasses[status], className)
  }, props), status === "success" ? /*#__PURE__*/React.createElement(CheckCircle, {
    size: 16,
    weight: "bold"
  }) : status === "danger" ? /*#__PURE__*/React.createElement(XCircle, {
    size: 16,
    weight: "bold"
  }) : status === "info" ? /*#__PURE__*/React.createElement(WarningCircle, {
    size: 16,
    weight: "bold"
  }) : /*#__PURE__*/React.createElement(Info, {
    size: 16,
    weight: "bold"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "sm",
    weight: "500"
  }, title), /*#__PURE__*/React.createElement(Text, {
    color: "text-gray-50",
    size: "xs",
    weight: "500"
  }, message)));
};
export default Alert;