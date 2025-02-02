"use client";

var _excluded = ["children", "index", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useContext, useState, useEffect } from "react";
import { TableContext } from "./Table";
import { twMerge } from "tailwind-merge";
var TableBodyCell = function TableBodyCell(_ref) {
  var _headCellsData$index, _headCellsData$index2;
  var children = _ref.children,
    index = _ref.index,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(TableContext),
    getStickyOffset = _useContext.getStickyOffset,
    headCellsData = _useContext.headCellsData,
    tableRef = _useContext.tableRef;
  var lastPinnedIndex = headCellsData.map(function (cell, i) {
    return cell.pinned ? i : -1;
  }).filter(function (i) {
    return i !== -1;
  }).pop();
  var isLastPinned = index === lastPinnedIndex;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDiv = _useState2[0],
    setShowDiv = _useState2[1];
  useEffect(function () {
    var currentTableRef = tableRef.current;
    var handleScroll = function handleScroll() {
      if (currentTableRef) {
        var scrollLeft = currentTableRef.scrollLeft;
        if (scrollLeft > getStickyOffset(lastPinnedIndex)) {
          setShowDiv(true);
        } else {
          setShowDiv(false);
        }
      }
    };
    if (currentTableRef) {
      currentTableRef.addEventListener("scroll", handleScroll);
    }
    return function () {
      if (currentTableRef) {
        currentTableRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [getStickyOffset, lastPinnedIndex, tableRef]);
  return /*#__PURE__*/React.createElement("td", _extends({
    className: twMerge("p-4", (_headCellsData$index = headCellsData[index]) !== null && _headCellsData$index !== void 0 && _headCellsData$index.pinned ? "md:sticky md:left-[".concat(getStickyOffset(index), "px] bg-white z-10") : "", className),
    style: {
      left: (_headCellsData$index2 = headCellsData[index]) !== null && _headCellsData$index2 !== void 0 && _headCellsData$index2.pinned ? "".concat(getStickyOffset(index), "px") : "auto"
    }
  }, props), children, isLastPinned && showDiv && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 right-0 w-4 shadow-[4px_0px_4px_0px_rgba(16,24,40,0.05)]"
  }));
};
export default TableBodyCell;