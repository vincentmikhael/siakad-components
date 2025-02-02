"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["columns", "data", "pinned", "children", "loading", "className", "containerClass"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { createContext, useEffect, useRef, useState } from "react";
import TableLazyLoad from "./TableLazyLoad";
import { twMerge } from "tailwind-merge";
export var TableContext = /*#__PURE__*/createContext();
var Table = function Table(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    pinned = _ref.pinned,
    children = _ref.children,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$containerClass = _ref.containerClass,
    containerClass = _ref$containerClass === void 0 ? "" : _ref$containerClass,
    props = _objectWithoutProperties(_ref, _excluded);
  var columnRefs = useRef([]);
  var tableRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    columnWidths = _useState2[0],
    setColumnWidths = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    headCellsData = _useState4[0],
    setHeadCellsData = _useState4[1];
  useEffect(function () {
    var widths = columnRefs.current.map(function (ref) {
      return (ref === null || ref === void 0 ? void 0 : ref.getBoundingClientRect().width) || 0;
    });
    setColumnWidths(widths);
  }, [columns]);
  useEffect(function () {
    if (pinned) {
      var _data = columns.map(function (col, index) {
        return _objectSpread(_objectSpread({}, col), {}, {
          pinned: pinned.includes(index)
        });
      });
      setHeadCellsData(_data);
    }
  }, [columns, pinned]);
  var getStickyOffset = function getStickyOffset(index) {
    var offset = 0;
    for (var i = 0; i < index; i++) {
      var _headCellsData$i;
      if ((_headCellsData$i = headCellsData[i]) !== null && _headCellsData$i !== void 0 && _headCellsData$i.pinned) {
        offset += columnWidths[i];
      }
    }
    return offset;
  };
  return loading ? /*#__PURE__*/React.createElement(TableLazyLoad, {
    columns: columns
  }) : /*#__PURE__*/React.createElement(TableContext.Provider, {
    value: {
      getStickyOffset: getStickyOffset,
      columnRefs: columnRefs,
      headCellsData: headCellsData,
      tableRef: tableRef
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: tableRef,
    className: twMerge("overflow-x-auto rounded-xl border border-fade scrollbar scrollbar-thumb-fade scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full", containerClass)
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: twMerge("table-auto w-full rounded-lg", className)
  }, props), children)));
};
export default Table;