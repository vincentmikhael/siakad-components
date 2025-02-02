'use client';

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState, useRef, useEffect } from 'react';
import { BellRinging, Check, X } from '@phosphor-icons/react';
import { Button, IconButton, Text } from "./..";
var NotificationDropdown = function NotificationDropdown() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1]; // Default dropdown tertutup
  var dropdownRef = useRef(null);
  var buttonRef = useRef(null);
  var notifications = [{
    title: 'Title 1',
    description: 'Description 1',
    timestamp: '4 Jam yang lalu',
    status: 0
  }, {
    title: 'Title 2',
    description: 'Description 2',
    timestamp: '4 Jam yang lalu',
    status: 0
  }, {
    title: 'Title 3',
    description: 'Description 3',
    timestamp: '4 Jam yang lalu',
    status: 1
  }, {
    title: 'Title 4',
    description: 'Description 4',
    timestamp: '4 Jam yang lalu',
    status: 1
  }];
  var toggleDropdown = function toggleDropdown() {
    setIsOpen(function (prev) {
      return !prev;
    });
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    ref: buttonRef,
    onClick: toggleDropdown,
    className: "flex items-center h-8"
  }, /*#__PURE__*/React.createElement(BellRinging, {
    color: "#FFFFFF",
    size: 20,
    weight: "regular"
  })), /*#__PURE__*/React.createElement("div", {
    ref: dropdownRef,
    className: "fixed sm:absolute mt-4 w-full sm:w-80 lg:w-[453px] p-8 bg-white rounded-[20px] z-10 transform transition-all duration-300 custom-shadow-dropdown ".concat(isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none", " right-0 left-auto")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "600",
    size: "lg",
    color: "text-gray-100"
  }, "Notifikasi"), /*#__PURE__*/React.createElement(IconButton, {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    variant: "white"
  }, /*#__PURE__*/React.createElement(X, {
    size: 16,
    weight: "bold",
    color: "#333"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col gap-4 overflow-y-auto max-h-96 my-6 scrollbar-none"
  }, notifications.map(function (notification, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "p-3 rounded-xl flex flex-col gap-3 ".concat(notification.status === 1 ? "bg-primary-10" : "border-primary-10 border", " hover:bg-primary-10")
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-1.5"
    }, /*#__PURE__*/React.createElement(Text, {
      weight: "600",
      size: "sm",
      color: "text-gray-100"
    }, notification.title), /*#__PURE__*/React.createElement(Text, {
      weight: "500",
      size: "sm",
      color: "text-gray-60"
    }, notification.description)), /*#__PURE__*/React.createElement(Text, {
      weight: "500",
      size: "sm",
      color: "text-primary-100"
    }, notification.timestamp));
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-fade border-t"
  }, /*#__PURE__*/React.createElement(Button, {
    leftIcon: /*#__PURE__*/React.createElement(Check, {
      weight: "bold"
    }),
    filled: true,
    variant: "primary",
    size: "sm"
  }, "Tandai semua dibaca"))));
};
export default NotificationDropdown;