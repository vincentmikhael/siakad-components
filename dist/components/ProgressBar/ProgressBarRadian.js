import React from "react";
export default function ProgressBarRadian() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      progress: 0
    },
    _ref$progress = _ref.progress,
    progress = _ref$progress === void 0 ? 0 : _ref$progress,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 250 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 250 : _ref$height,
    _ref$withText = _ref.withText,
    withText = _ref$withText === void 0 ? false : _ref$withText;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 250 250",
    className: "circular-progress",
    style: {
      "--progress": progress
    }
  }, /*#__PURE__*/React.createElement("circle", {
    className: "bg"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "fg"
  }), withText && /*#__PURE__*/React.createElement("text", {
    className: "text"
  }, "".concat(progress, "%")));
}