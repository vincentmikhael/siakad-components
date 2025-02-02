"use client";

import { X } from "@phosphor-icons/react";
import { Button, Hr, IconButton, Text } from "./..";
import { twMerge } from "tailwind-merge";
var BottomDrawer = function BottomDrawer(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Filter" : _ref$title,
    open = _ref.open,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    _ref$onClear = _ref.onClear,
    onClear = _ref$onClear === void 0 ? function () {} : _ref$onClear,
    children = _ref.children,
    _ref$dismissible = _ref.dismissible,
    dismissible = _ref$dismissible === void 0 ? true : _ref$dismissible,
    _ref$clearable = _ref.clearable,
    clearable = _ref$clearable === void 0 ? true : _ref$clearable,
    className = _ref.className,
    _ref$buttonLabel = _ref.buttonLabel,
    buttonLabel = _ref$buttonLabel === void 0 ? "Terapkan" : _ref$buttonLabel,
    _ref$onApply = _ref.onApply,
    onApply = _ref$onApply === void 0 ? function () {} : _ref$onApply;
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("div", {
    className: "xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: twMerge("xl:hidden fixed bottom-0 left-0 right-0 bg-white p-8 shadow-lg flex flex-col gap-8 rounded-t-[20px] z-50 transform ".concat(open ? "translate-y-0" : "translate-y-full", " transition-transform duration-300"), className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-4 justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-4 items-center"
  }, dismissible && /*#__PURE__*/React.createElement(IconButton, {
    onClick: onClose,
    size: "md"
  }, /*#__PURE__*/React.createElement(X, {
    weight: "bold",
    size: 16
  })), /*#__PURE__*/React.createElement(Text, {
    weight: 600,
    size: "xl"
  }, title)), clearable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClear
  }, /*#__PURE__*/React.createElement(Text, {
    color: "text-gray-50",
    weight: 600,
    size: "sm"
  }, "Clear"))), /*#__PURE__*/React.createElement(Hr, null), children, /*#__PURE__*/React.createElement(Hr, null), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    filled: true,
    size: "lg",
    fullWidth: true,
    onClick: onApply
  }, buttonLabel)));
};
export default BottomDrawer;