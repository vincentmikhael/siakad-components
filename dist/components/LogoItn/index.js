import Image from 'next/image';
var LogoItn = function LogoItn(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 40 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 40 : _ref$height,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'color' : _ref$type;
  var logoType = {
    'color': {
      src: '/images/itn-logo.webp',
      alt: 'My ITN Logo'
    },
    'white': {
      src: '/images/itn-white-logo.webp',
      alt: 'My ITN White Logo'
    }
  };
  return /*#__PURE__*/React.createElement(Image, {
    src: logoType[type].src,
    alt: logoType[type].alt,
    width: width,
    height: height,
    priority: true
  });
};
export default LogoItn;