'use client';

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, Input } from "./..";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
var Tabs = function Tabs(_ref) {
  var _ref$defaultClass = _ref.defaultClass,
    defaultClass = _ref$defaultClass === void 0 ? 'flex flex-wrap gap-2 border-b border-fade w-fit' : _ref$defaultClass,
    className = _ref.className,
    children = _ref.children;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement("ul", {
    className: twMerge(defaultClass, className)
  }, React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, {
      key: index,
      open: activeTab === index,
      onClick: function onClick() {
        return setActiveTab(index);
      }
    });
  })), React.Children.map(children, function (child, index) {
    return activeTab === index ? child.props.children : null;
  }));
};
export default Tabs;