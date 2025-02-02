"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "label", "showLabel", "showHint", "hint", "error", "allowDeleted", "name", "value", "onUploadSuccess", "onChange", "type", "maxWidth", "maxHeight", "maxSize", "sizeUnit", "multiple"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useEffect, useState } from "react";
import { UploadSimple, Trash, X } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";
import { Checkbox, FileIcon, Text } from "./..";
import { useToast } from "../../context/ToastContext";
var FileUpload = function FileUpload(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Label" : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
    _ref$showHint = _ref.showHint,
    showHint = _ref$showHint === void 0 ? false : _ref$showHint,
    hint = _ref.hint,
    error = _ref.error,
    _ref$allowDeleted = _ref.allowDeleted,
    allowDeleted = _ref$allowDeleted === void 0 ? false : _ref$allowDeleted,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "" : _ref$name,
    value = _ref.value,
    onUploadSuccess = _ref.onUploadSuccess,
    onChange = _ref.onChange,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "image" : _ref$type,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? 800 : _ref$maxWidth,
    _ref$maxHeight = _ref.maxHeight,
    maxHeight = _ref$maxHeight === void 0 ? 400 : _ref$maxHeight,
    _ref$maxSize = _ref.maxSize,
    maxSize = _ref$maxSize === void 0 ? 5 : _ref$maxSize,
    _ref$sizeUnit = _ref.sizeUnit,
    sizeUnit = _ref$sizeUnit === void 0 ? "MB" : _ref$sizeUnit,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    props = _objectWithoutProperties(_ref, _excluded);
  var showToast = useToast();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    file = _useState4[0],
    setFile = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    dragging = _useState6[0],
    setDragging = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    uploading = _useState8[0],
    setUploading = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    progress = _useState10[0],
    setProgress = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    failed = _useState12[0],
    setFailed = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    xhrInstance = _useState14[0],
    setXhrInstance = _useState14[1];
  useEffect(function () {
    if (value && !file) {
      var fetchFileInfo = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var res, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.prev = 1;
                _context.next = 4;
                return fetch("/api/get-info-file?fileName=".concat(value));
              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();
              case 7:
                data = _context.sent;
                if (res.ok) {
                  setFile(data.data);
                } else {
                  showToast("Failed!", "File not found", "danger");
                }
                _context.next = 14;
                break;
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                showToast("Error!", "An error occurred while getting information of the file", "danger");
              case 14:
                _context.prev = 14;
                setLoading(false);
                return _context.finish(14);
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 11, 14, 17]]);
        }));
        return function fetchFileInfo() {
          return _ref2.apply(this, arguments);
        };
      }();
      fetchFileInfo();
    }
  }, [value]);
  var description = {
    image: "PNG, JPG or JPEG (max. ".concat(maxWidth, "x").concat(maxHeight, "px)"),
    pdf: "PDF (max. 5MB)",
    excel: "Excel (max. 5MB)"
  };
  var getValidTypes = function getValidTypes(type) {
    var types = {
      image: ["image/jpeg", "image/png"],
      pdf: ["application/pdf"],
      excel: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" // excel .xlsx
      ]
    };
    return types[type];
  };
  var getValidExtensions = function getValidExtensions(type) {
    var extensions = {
      image: ["jpg", "jpeg", "png"],
      pdf: ["pdf"],
      excel: ["xlsx"]
    };
    return extensions[type];
  };
  var validateFileExtension = function validateFileExtension(file, type) {
    var validExtensions = getValidExtensions(type);
    var fileExtension = file.name.split('.').pop().toLowerCase();
    return validExtensions.includes(fileExtension);
  };
  var sizeUnits = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024
  };
  var maxSizeInBytes = maxSize * (sizeUnits[sizeUnit] || sizeUnits.MB);
  var handleFileValidation = function handleFileValidation(file) {
    var validTypes = getValidTypes(type);
    var isValidType = validTypes.includes(file.type);
    var isValidExtension = validateFileExtension(file, type);
    var isValidSize = file.size <= maxSizeInBytes;
    if (!isValidType || !isValidExtension) {
      showToast("Upload failed!", "Invalid file type", "danger");
      return false;
    }
    if (!isValidSize) {
      showToast("Upload failed!", "File size exceeds the maximum limit of ".concat(maxSize).concat(sizeUnit), "danger");
      return false;
    }
    if (type === "image") {
      return new Promise(function (resolve) {
        var img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = function () {
          var width = img.width,
            height = img.height;
          if (width > maxWidth || height > maxHeight) {
            showToast("Upload failed!", "Image dimensions should not exceed ".concat(maxWidth, "x").concat(maxHeight, "px"), "danger");
            resolve(false);
          } else {
            resolve(true);
          }
        };
        img.onerror = function () {
          showToast("Upload failed!", "Invalid image file", "danger");
          resolve(false);
        };
      });
    }
    return true;
  };

  // Fungsi untuk mengunggah file
  var uploadFile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(file) {
      var formData, xhr;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setUploading(true);
            setProgress(0);
            formData = new FormData();
            formData.set("file", file);

            // Gunakan XMLHttpRequest untuk melacak progress
            xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/upload-file", true);
            setXhrInstance(xhr);

            // Event listener untuk mengupdate progress
            xhr.upload.onprogress = function (event) {
              if (event.lengthComputable) {
                var percentComplete = Math.round(event.loaded / event.total * 100);
                setTimeout(function () {
                  setProgress(percentComplete);
                }, 100);
              }
            };
            xhr.onload = function () {
              if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.url) {
                  var fileName = response.name;
                  setProgress(100);
                  if (name) {
                    onChange({
                      target: {
                        name: name,
                        value: fileName
                      }
                    });
                  }
                  if (onUploadSuccess) {
                    onUploadSuccess(fileName);
                  }
                }
              } else {
                setFailed(true);
                setProgress(0);
              }
            };
            xhr.onerror = function () {
              setFailed(true);
              setUploading(false);
              setProgress(0);
            };
            xhr.send(formData);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function uploadFile(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  //format show size
  var formatFileSize = function formatFileSize(size) {
    if (size < 1024) {
      return "".concat(size, " B");
    } else if (size < 1024 * 1024) {
      return "".concat((size / 1024).toFixed(2), " KB");
    } else {
      return "".concat((size / (1024 * 1024)).toFixed(2), " MB");
    }
  };

  // Handle file drop
  var handleDrop = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var droppedFiles, droppedFile, isValid;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            setDragging(false);
            droppedFiles = e.dataTransfer.files;
            if (!droppedFiles.length) {
              _context3.next = 12;
              break;
            }
            droppedFile = droppedFiles[0];
            _context3.next = 7;
            return handleFileValidation(droppedFile);
          case 7:
            isValid = _context3.sent;
            if (!isValid) {
              _context3.next = 12;
              break;
            }
            setFile(droppedFile);
            _context3.next = 12;
            return uploadFile(droppedFile);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleDrop(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    setDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };
  var handleDragLeave = function handleDragLeave() {
    setDragging(false);
  };
  var handleFileChange = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var selectedFile, isValid;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            selectedFile = e.target.files[0];
            if (!selectedFile) {
              _context4.next = 9;
              break;
            }
            _context4.next = 4;
            return handleFileValidation(selectedFile);
          case 4:
            isValid = _context4.sent;
            if (!isValid) {
              _context4.next = 9;
              break;
            }
            setFile(selectedFile);
            _context4.next = 9;
            return uploadFile(selectedFile);
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleFileChange(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleClick = function handleClick() {
    document.getElementById("fileInput").click();
  };
  var handleCancelUpload = function handleCancelUpload() {
    if (xhrInstance) {
      xhrInstance.abort(); // Hentikan proses unggahan
    }
    setFile(null);
    setProgress(0);
    setUploading(false);
  };
  var handleDeleteFile = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (file) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            setLoading(true);
            _context5.prev = 3;
            _context5.next = 6;
            return fetch("/api/delete-file?fileName=".concat(value), {
              method: 'DELETE'
            });
          case 6:
            response = _context5.sent;
            if (response.ok) {
              showToast("Success!", "File deleted successfully", "success");
              setFile(null);
              onChange({
                target: {
                  name: name,
                  value: ""
                }
              });
            } else {
              showToast("Failed!", "Failed to delete the file", "danger");
            }
            _context5.next = 14;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            console.error("Error deleting file:", _context5.t0);
            showToast("Error!", "An error occurred while deleting the file", "danger");
          case 14:
            _context5.prev = 14;
            setLoading(false);
            return _context5.finish(14);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[3, 10, 14, 17]]);
    }));
    return function handleDeleteFile() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleRetry = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            e.stopPropagation();
            setFailed(false);
            _context6.next = 4;
            return uploadFile(file);
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function handleRetry(_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
  var getFileTypeIcon = function getFileTypeIcon(fileNameOrType) {
    if (!fileNameOrType) return "file";
    var fileType = fileNameOrType;
    if (typeof fileNameOrType === "string" && !fileNameOrType.includes("/")) {
      var extension = fileNameOrType.split('.').pop().toLowerCase();
      switch (extension) {
        case "jpg":
        case "jpeg":
        case "png":
          return "image";
        case "pdf":
          return "pdf";
        case "xlsx":
          return "excel";
        default:
          return "file";
      }
    }
    if (fileType.startsWith("image/")) return "image";
    if (fileType === "application/pdf") return "pdf";
    if (fileType.includes("spreadsheet")) return "excel";
    return "file";
  };
  var hintColorClasses = error ? "text-danger-90" : "text-gray-50";
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5 w-full"
  }, showLabel && /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-100"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: twMerge("w-full flex flex-col gap-4", className)
  }, loading && !uploading ? /*#__PURE__*/React.createElement("div", {
    className: "skeleton-box h-20",
    style: {
      borderRadius: 12
    }
  }) : file ? /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-4 flex gap-3 items-start ".concat(failed ? 'border-danger-90 border-2' : 'border-fade border')
  }, /*#__PURE__*/React.createElement(FileIcon, {
    type: getFileTypeIcon((file === null || file === void 0 ? void 0 : file.type) || (file === null || file === void 0 ? void 0 : file.name))
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-start gap-1 flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col w-full gap-1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-80 text-sm font-semibold"
  }, file === null || file === void 0 ? void 0 : file.name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-50 text-sm font-normal"
  }, failed ? "Upload failed, please try again" : formatFileSize(file === null || file === void 0 ? void 0 : file.size))), failed ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-primary-100 text-sm font-semibold text-start",
    onClick: handleRetry
  }, "Try again") : uploading ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-3 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-fade h-2 w-full rounded-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-primary-100 h-2 rounded-full",
    style: {
      width: "".concat(progress, "%"),
      transition: 'width 0.3s ease-in-out'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-80 font-semibold leading-[22.4px]"
  }, progress, "%")) : null), allowDeleted ? progress === 100 || value ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-gray-50",
    onClick: handleDeleteFile
  }, /*#__PURE__*/React.createElement(Trash, {
    size: 16,
    weight: "bold"
  })) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-gray-50",
    onClick: handleCancelUpload
  }, /*#__PURE__*/React.createElement(X, {
    size: 16,
    weight: "bold"
  })) : progress === 100 || value ? /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    onChange: function onChange() {}
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-gray-50",
    onClick: handleCancelUpload
  }, /*#__PURE__*/React.createElement(X, {
    size: 16,
    weight: "bold"
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "border py-4 px-6 rounded-xl bg-white text-center cursor-pointer ".concat(dragging ? "border-primary-90" : error ? "border-danger-90 shadow-[0_0_1px_3px_rgba(255,65,68,0.15)]" : "border-fade"),
    onDrop: handleDrop,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "file",
    className: "hidden",
    onChange: handleFileChange,
    id: "fileInput",
    accept: getValidTypes(type).join(",")
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 border-fade border rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
  }, /*#__PURE__*/React.createElement(UploadSimple, {
    size: 16,
    weight: "bold",
    color: "text-gray-100"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block text-primary-100 text-[13px] font-semibold"
  }, "Click to upload", /*#__PURE__*/React.createElement("span", {
    className: "inline-block text-gray-50 font-normal text-xs ml-1"
  }, "or drag and drop")), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-50 text-xs font-normal"
  }, description[type]))))), showHint && (error || hint) && /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    size: "sm",
    weight: "400",
    color: hintColorClasses
  }, error || hint));
};
export default FileUpload;