"use client";

var _excluded = ["open", "title", "description", "size", "placement", "autoClose", "dismissable", "backdropClass", "defaultClass", "outsideClose", "dialogClass", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { X } from "@phosphor-icons/react";
import { IconButton, Text } from "../../..";
var _Modal = function Modal(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? "" : _ref$description,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "top-center" : _ref$placement,
    _ref$autoClose = _ref.autoClose,
    autoClose = _ref$autoClose === void 0 ? false : _ref$autoClose,
    _ref$dismissable = _ref.dismissable,
    dismissable = _ref$dismissable === void 0 ? true : _ref$dismissable,
    backdropClass = _ref.backdropClass,
    defaultClass = _ref.defaultClass,
    _ref$outsideClose = _ref.outsideClose,
    outsideClose = _ref$outsideClose === void 0 ? false : _ref$outsideClose,
    dialogClass = _ref.dialogClass,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var backdropClasses = "fixed inset-0 z-50 bg-gray-100 bg-opacity-50";
  var dialogClasses = "fixed top-0 start-0 end-0 md:inset-0 h-full z-50 w-full flex p-8 flex overflow-y-auto scrollbar-none";
  var sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  useEffect(function () {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  var hide = function hide(e) {
    e.preventDefault();
    props.onClose();
  };
  var handleKeys = function handleKeys(e) {
    if (e.key === "Escape" && dismissable) {
      hide(e);
    }
  };
  var onAutoClose = function onAutoClose(e) {
    var target = e.target;
    if (autoClose && (target === null || target === void 0 ? void 0 : target.tagName) === "BUTTON") hide(e); // close on any button click
  };
  var onOutsideClose = function onOutsideClose(e) {
    if (outsideClose && e.target === e.currentTarget) {
      hide(e);
    }
  };
  var placementClasses = {
    "top-left": "justify-start items-start",
    "top-center": "justify-center items-start",
    "top-right": "justify-end items-start",
    "center-left": "justify-start items-center",
    center: "justify-center items-center",
    "center-right": "justify-end items-center",
    "bottom-left": "justify-start items-end",
    "bottom-center": "justify-center items-end",
    "bottom-right": "justify-end items-end"
  };
  if (!open) return null;
  var childrenArray = React.Children.toArray(children);
  var header = childrenArray.find(function (child) {
    return child.type === _Modal.Header;
  }) || null;
  var body = childrenArray.find(function (child) {
    return child.type === _Modal.Body;
  }) || null;
  var footer = childrenArray.find(function (child) {
    return child.type === _Modal.Footer;
  }) || null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: twMerge(backdropClasses, backdropClass)
  }), /*#__PURE__*/React.createElement("div", {
    onKeyDown: handleKeys,
    onClick: onOutsideClose,
    className: twMerge(dialogClass, placementClasses[placement], dialogClasses),
    tabIndex: "-1",
    "aria-modal": "true",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex relative ".concat(sizes[size], " w-full min-h-full")
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: twMerge(defaultClass, "flex bg-white rounded-[20px] w-full flex-col mx-auto h-auto max-h-max")
  }, props), (header || title) && /*#__PURE__*/React.createElement("div", {
    className: "px-8 pt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between items-start border-b pb-8 border-fade"
  }, header ? header : /*#__PURE__*/React.createElement("div", {
    className: "w-full flex flex-col gap-1.5"
  }, /*#__PURE__*/React.createElement(Text, {
    tag: "h3",
    size: "xl",
    weight: "600"
  }, title), description && /*#__PURE__*/React.createElement(Text, {
    color: "text-gray-60",
    weight: "400",
    size: "sm"
  }, description)), dismissable && /*#__PURE__*/React.createElement(IconButton, {
    onClick: hide
  }, /*#__PURE__*/React.createElement(X, {
    weight: "bold",
    size: 16
  })))), body && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 flex-1 p-8 scrollbar-none h-fit",
    onClick: onAutoClose
  }, dismissable && !header && !title && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end items-start"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: hide
  }, /*#__PURE__*/React.createElement(X, {
    weight: "bold",
    size: 16
  }))), body), footer))));
};

// Header component
_Modal.Header = function (_ref2) {
  var children = _ref2.children;
  return children;
};

// Body component
_Modal.Body = function (_ref3) {
  var children = _ref3.children;
  return children;
};

// Footer component
_Modal.Footer = function ModalFooter(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "px-8 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-t border-fade pt-8"
  }, children));
};
export default _Modal;