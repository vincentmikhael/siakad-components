function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { NavLi, Text } from "./..";
import { redirect } from "next/navigation";
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  return _createClass(Utils, null, [{
    key: "thousandth",
    value: function thousandth(value) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".";
      var retVal = value.toString().replace(/\D/g, ''); //from /[^\d]/g
      while (/(\d+)(\d{3})/.test(retVal)) {
        retVal = retVal.replace(/(\d+)(\d{3})/, '$1' + delimiter + '$2');
      }
      return retVal;
    }
  }, {
    key: "initCountUpAnimation",
    value: function initCountUpAnimation(target, onCountUp, countUpTo) {
      var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
      var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
      /**
       * Animation count up only occurred when visible to the client
       * @type {IntersectionObserver}
       */
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          // console.log('count up entry', entry)
          if (entry.isIntersecting) {
            // console.log('start animation count up')
            Utils.countUpAnimation(onCountUp, 0, countUpTo, duration, timeout);
            // Once the animation is started, stop observing
            observer.unobserve(entry.target);
          }
        });
      });

      // Observe each element
      observer.observe(target);
    }
  }, {
    key: "countUpAnimation",
    value: function countUpAnimation(onCountUp, start, end) {
      var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
      var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
      // Calculate the increment
      var increment = (end - start) / (duration / timeout);
      var currentValue = start;
      var timer = setInterval(function () {
        currentValue += increment;

        // If we've reached or exceeded the end value, stop the timer and set the value to end
        if (increment > 0 && currentValue >= end) {
          clearInterval(timer);
          currentValue = end;
        } else if (increment < 0 && currentValue <= end) {
          clearInterval(timer);
          currentValue = end;
        }

        // Update the element with the current value
        if (typeof onCountUp === 'function') onCountUp(Math.floor(currentValue));
      }, timeout);
    }
  }, {
    key: "fixFloatingPoint",
    value: function fixFloatingPoint(value) {
      var fractionDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var round = Math.pow(10, fractionDigits);
      return Math.round(value * round) / round;
    }
  }]);
}();
_defineProperty(Utils, "renderMenuList", function (list) {
  return list.map(function (_ref) {
    var href = _ref.href,
      label = _ref.label,
      icon = _ref.icon;
    return /*#__PURE__*/React.createElement(NavLi, {
      key: href,
      href: href,
      icon: icon
    }, label);
  });
});
_defineProperty(Utils, "getDocumentTitle", function () {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Home';
  return "SIAKAD | ".concat(title);
});
_defineProperty(Utils, "redirectLogin", function () {
  return redirect("".concat(process.env.NEXT_PUBLIC_MYITN_BASE_URL, "/login"));
});
// static showTextDanger = ({children}) => (<Text size="xs" style={{color: 'red'}}>{children}</Text>)
/**
 * Translate nested value that using '.' for delimiter
 * @param obj
 * @param path
 * @returns {*}
 */
_defineProperty(Utils, "resolveNestedValue", function (obj, path) {
  return path.split('.').reduce(function (acc, key) {
    return acc && acc[key];
  }, obj);
});
export { Utils as default };