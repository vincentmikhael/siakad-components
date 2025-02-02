"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Button, IconButton } from "../../..";
import { useEffect, useState } from "react";
var disabledButtonClass = "disabled:cursor-not-allowed disabled:text-gray-20 disabled:border-gray-20 disabled:bg-white";
var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    onPageChange = _ref.onPageChange;
  var _useState = useState(currentPage),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var handlePageClick = function handlePageClick(page) {
    setPage(page);
    onPageChange(page);
  };
  useEffect(function () {
    setPage(currentPage);
  }, [currentPage]);
  var RenderPageNumbers = function RenderPageNumbers() {
    var maxVisiblePages = 5;
    var startPage, endPage;
    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (page <= 3) {
        startPage = 1;
        endPage = 3;
      } else if (page >= totalPages - 2) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = page;
        endPage = page;
      }
    }
    var pageNumbers = Array.from({
      length: endPage - startPage + 1
    }, function (_, i) {
      return startPage + i;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "flex space-x-2"
    }, startPage > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      key: 1,
      filled: true,
      variant: "white",
      className: "w-9 h-9 ".concat(page !== 1 ? "border-0" : ""),
      onClick: function onClick() {
        return handlePageClick(1);
      }
    }, "1"), startPage > 2 && /*#__PURE__*/React.createElement(Button, {
      filled: true,
      variant: "white",
      className: "w-9 h-9 border-0"
    }, "...")), pageNumbers.map(function (p) {
      return /*#__PURE__*/React.createElement(Button, {
        key: p,
        filled: true,
        variant: "white",
        className: "w-9 h-9 ".concat(p !== page ? "border-0" : ""),
        onClick: function onClick() {
          return handlePageClick(p);
        }
      }, p);
    }), endPage < totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, endPage < totalPages - 1 && /*#__PURE__*/React.createElement(Button, {
      filled: true,
      variant: "white",
      className: "w-9 h-9 border-0"
    }, "..."), /*#__PURE__*/React.createElement(Button, {
      key: totalPages,
      filled: true,
      variant: "white",
      className: "w-9 h-9 ".concat(page !== totalPages ? "border-0" : ""),
      onClick: function onClick() {
        return handlePageClick(totalPages);
      }
    }, totalPages)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center md:px-6 pt-3 pb-4"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    className: "flex items-center justify-between gap-3 w-full"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    leftIcon: /*#__PURE__*/React.createElement(CaretLeft, {
      weight: "bold"
    }),
    size: "sm",
    filled: true,
    disabled: page === 1,
    onClick: function onClick() {
      return handlePageClick(page - 1);
    },
    className: "hidden lg:flex ".concat(page === 1 && disabledButtonClass)
  }, "Previous"), /*#__PURE__*/React.createElement(IconButton, {
    className: "flex w-9 h-9 lg:hidden ".concat(page === 1 && disabledButtonClass),
    disabled: page === 1,
    onClick: function onClick() {
      return handlePageClick(page - 1);
    }
  }, /*#__PURE__*/React.createElement(CaretLeft, {
    weight: "bold"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center gap-0.5"
  }, /*#__PURE__*/React.createElement(RenderPageNumbers, null)), /*#__PURE__*/React.createElement(IconButton, {
    className: "flex w-9 h-9 lg:hidden ".concat(page === totalPages && disabledButtonClass),
    disabled: page === totalPages,
    onClick: function onClick() {
      return handlePageClick(page + 1);
    }
  }, /*#__PURE__*/React.createElement(CaretRight, {
    weight: "bold"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    rightIcon: /*#__PURE__*/React.createElement(CaretRight, {
      weight: "bold"
    }),
    size: "sm",
    filled: true,
    disabled: page === totalPages,
    onClick: function onClick() {
      return handlePageClick(page + 1);
    },
    className: "hidden lg:flex ".concat(page === totalPages && disabledButtonClass)
  }, "Next")));
};
export default Pagination;