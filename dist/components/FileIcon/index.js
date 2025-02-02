import Image from "next/image";
var FileIcon = function FileIcon(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 40 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 40 : _ref$height,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "image" : _ref$type;
  var fileType = {
    'image': '/images/jpg-icon.svg',
    'pdf': '/images/pdf-icon.svg',
    'excel': '/images/xls-icon.svg'
  };
  var fileAlt = {
    'image': 'jpg-icon',
    'pdf': 'pdf-icon',
    'excel': 'xlsx-icon'
  };
  return /*#__PURE__*/React.createElement(Image, {
    src: fileType[type],
    alt: fileAlt[type],
    width: 0,
    height: 0,
    priority: true,
    style: {
      width: "".concat(width, "px"),
      height: "".concat(height, "px")
    }
  });
};
export default FileIcon;