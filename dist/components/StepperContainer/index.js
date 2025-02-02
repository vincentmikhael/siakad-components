"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useEffect, useState } from "react";
import { Text } from "../../..";
import { twMerge } from "tailwind-merge";
var StepperContainer = function StepperContainer(_ref) {
  var children = _ref.children,
    className = _ref.className,
    activeStepper = _ref.activeStepper,
    getStepperLength = _ref.getStepperLength;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentStep = _useState2[0],
    setCurrentStep = _useState2[1];
  var stepperTitles = React.Children.map(children, function (child) {
    return child.props.title;
  });
  var tes = React.Children.map(children, function (child) {
    return child;
  });
  useEffect(function () {
    setCurrentStep(activeStepper);
  }, [activeStepper]);
  var stepperChildren = React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, {
      isActive: index === currentStep
    });
  });
  getStepperLength(stepperTitles.length);
  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("ol", {
    className: twMerge("flex items-center md:w-3/4 px-0 mx-auto text-sm text-gray-500 font-medium sm:text-base", className)
  }, stepperTitles.map(function (step, index) {
    return (
      /*#__PURE__*/
      // <li key={index} className={`flex relative text-black-600 ${index < stepperTitles.length - 1 ? ` w-full after:content-[''] after:w-full after:h-0.5 ${index <= currentStep - 1 ? 'after:bg-primary-100' : 'after:bg-slate-200' } after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-5 md:after:left-7 lg:after:left-9` : ''}`}>
      // <li key={index} className={`flex relative text-black-600 ${index < stepperTitles.length - 1 ? ` w-full after:content-[''] after:w-full lg:after:w-7/12 xl:after:w-3/4 after:h-0.5 ${index <= currentStep - 1 ? 'after:bg-primary-100' : 'after:bg-slate-200' } after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-5 md:after:left-5 lg:after:left-[4rem] xl:after:left-14` : ''}`}>
      React.createElement("li", {
        key: index,
        className: "flex relative text-black-600 ".concat(index < stepperTitles.length - 1 ? " w-full after:content-[''] after:w-full lg:after:w-7/12 xl:after:w-3/4 after:h-0.5 ".concat(index <= currentStep - 1 ? 'after:bg-primary-100' : 'after:bg-slate-200', " after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-5 md:after:left-5 lg:after:left-[4rem] xl:after:left-[17%]") : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "block relative whitespace-nowrap z-10"
      }, index <= currentStep ?
      /*#__PURE__*/
      // <span onClick={() => updateStepper(index)} className="w-8 h-8 bg-primary-100 border-4 box-content border-blue-200 rounded-full flex items-center justify-center">
      // <div style={{marginLeft: '0px'}} className="w-2.5 h-2.5 bg-white rounded-full"></div>
      // </span> 
      React.createElement("span", {
        style: {
          boxShadow: '0px 0px 0px 4px #068CCD3D'
        },
        className: "w-6 h-6 bg-primary-100 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-8 lg:h-8"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ml-0 w-2.5 h-2.5 bg-white rounded-full"
      })) :
      /*#__PURE__*/
      // <span onClick={() => updateStepper(index)} className="w-8 h-8 bg-slate-100 border-2 box-content border-slate-200 rounded-full flex items-center justify-center">
      // <div className="ml-0 w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
      // </span>
      React.createElement("span", {
        className: "w-6 h-6 bg-slate-100 border-2 border-slate-200 rounded rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-8 lg:h-8"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ml-0 w-2.5 h-2.5 bg-slate-200 rounded-full"
      })), " ", /*#__PURE__*/React.createElement(Text, {
        size: "sm",
        className: "text-center md:whitespace-nowrap absolute left-1/2 transform -translate-x-1/2"
      }, step)))
    );
  })), /*#__PURE__*/React.createElement("div", {
    className: 'mt-16'
  }, stepperChildren));
};
export default StepperContainer;