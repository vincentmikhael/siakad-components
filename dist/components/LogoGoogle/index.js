import Image from "next/image";
var LogoGoogle = function LogoGoogle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height;
  return /*#__PURE__*/React.createElement(Image, {
    src: "/images/google-logo.png",
    alt: "google-logo",
    width: width,
    height: height,
    priority: true
  });
};
export default LogoGoogle;