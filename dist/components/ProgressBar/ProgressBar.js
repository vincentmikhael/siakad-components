export default function ProgressBar(_ref) {
  var _ref$progress = _ref.progress,
    progress = _ref$progress === void 0 ? 0 : _ref$progress,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 250 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 30 : _ref$height,
    _ref$withText = _ref.withText,
    withText = _ref$withText === void 0 ? false : _ref$withText,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$withBackground = _ref.withBackground,
    withBackground = _ref$withBackground === void 0 ? true : _ref$withBackground;
  var progressWidth = fullWidth ? "".concat(progress, "%") : "".concat(progress / 100 * width, "px");
  var evenRounded = height / 2;
  return /*#__PURE__*/React.createElement("svg", {
    width: fullWidth ? '100%' : width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    className: "horizontal-progress",
    style: {
      "--progress": progress
    }
  }, withBackground && /*#__PURE__*/React.createElement("rect", {
    className: "bg",
    x: "0",
    y: "0",
    width: fullWidth ? "100%" : width,
    height: height,
    rx: evenRounded,
    ry: evenRounded,
    fill: "#ddd"
  }), /*#__PURE__*/React.createElement("rect", {
    className: "fg",
    x: "0",
    y: "0",
    width: progressWidth,
    height: height,
    rx: evenRounded,
    ry: evenRounded,
    fill: "#068CCD"
  }), withText && /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "50%",
    dominantBaseline: "middle",
    textAnchor: "middle",
    fontSize: "16",
    fill: "#000"
  }, "".concat(progress, "%")));
}