import React from "react";
export default function ProgressBarRadianHalf() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      progress: 0
    },
    _ref$progress = _ref.progress,
    progress = _ref$progress === void 0 ? 0 : _ref$progress,
    _ref$withText = _ref.withText,
    withText = _ref$withText === void 0 ? false : _ref$withText,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 250 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? undefined : _ref$height;
  var adjustedProgress = Math.min(Math.max(progress, 0), 100); // Clamp progress between 0 and 100
  var circumference = 314.159; // Circumference of the half-circle (pi * radius for 100% progress)

  var dashOffset = (1 - adjustedProgress / 100) * circumference;
  if (!height) height = width / 2 + 25;
  if (!width) width = (height - 25) * 2;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height // Half of the full circle height
    ,
    viewBox: "0 0 250 125",
    className: "gauge-progress",
    style: {
      "--progress": adjustedProgress
    }
  }, /*#__PURE__*/React.createElement("path", {
    className: "bg"
  }), /*#__PURE__*/React.createElement("path", {
    className: "fg",
    style: {
      strokeDasharray: "".concat(circumference),
      strokeDashoffset: dashOffset
    }
  }), withText && /*#__PURE__*/React.createElement("text", {
    className: "text"
  }, "".concat(adjustedProgress, "%")));
}