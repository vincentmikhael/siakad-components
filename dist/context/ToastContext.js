"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { createContext, useContext, useState, useCallback } from "react";
import { Toast } from "../components";
var ToastContext = /*#__PURE__*/createContext();
export var useToast = function useToast() {
  return useContext(ToastContext);
};
export var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    toast = _useState2[0],
    setToast = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isVisible = _useState4[0],
    setIsVisible = _useState4[1];
  var showToast = useCallback(function (title, message) {
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
    var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "top-right";
    var dismissable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var duration = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3000;
    var newToast = {
      title: title,
      message: message,
      status: status,
      position: position,
      dismissable: dismissable
    };
    setToast(newToast);
    setIsVisible(true);

    // set a timeout to hide the toast after the duration
    var timer = setTimeout(function () {
      setIsVisible(false);
    }, duration);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  var removeToast = useCallback(function () {
    setIsVisible(false);
  }, []);
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: showToast
  }, children, toast && /*#__PURE__*/React.createElement(Toast, {
    title: toast.title,
    message: toast.message,
    status: toast.status,
    dismissable: toast.dismissable,
    isVisible: isVisible,
    onDismiss: removeToast
  }));
};