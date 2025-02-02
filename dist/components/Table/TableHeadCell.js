"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useContext, useEffect, useState } from "react";
import { TableContext } from "./Table";
import { twMerge } from "tailwind-merge";
var TableHeadCell = function TableHeadCell(_ref) {
  var _headCellsData$index, _headCellsData$index2;
  var children = _ref.children,
    index = _ref.index,
    className = _ref.className;
  var _useContext = useContext(TableContext),
    getStickyOffset = _useContext.getStickyOffset,
    columnRefs = _useContext.columnRefs,
    headCellsData = _useContext.headCellsData,
    tableRef = _useContext.tableRef;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDiv = _useState2[0],
    setShowDiv = _useState2[1];
  var lastPinnedIndex = headCellsData.map(function (cell, i) {
    return cell.pinned ? i : -1;
  }).filter(function (i) {
    return i !== -1;
  }).pop();
  var isLastPinned = index === lastPinnedIndex;
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
  return /*#__PURE__*/React.createElement("th", {
    className: twMerge("bg-fade uppercase px-4 py-3 ".concat((_headCellsData$index = headCellsData[index]) !== null && _headCellsData$index !== void 0 && _headCellsData$index.pinned ? "md:sticky md:left-[".concat(getStickyOffset(index), "px] last:border-r-4 last:border-fade") : ""), className),
    style: {
      left: (_headCellsData$index2 = headCellsData[index]) !== null && _headCellsData$index2 !== void 0 && _headCellsData$index2.pinned ? "".concat(getStickyOffset(index), "px") : "auto"
    },
    ref: function ref(el) {
      return columnRefs.current[index] = el;
    }
  }, children, isLastPinned && showDiv && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 right-0 w-4 shadow-[4px_0px_4px_0px_rgba(16,24,40,0.05)]"
  }));
};
export default TableHeadCell;