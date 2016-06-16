/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Malatium\n\nvar Provider = function () {\n  function Provider() {\n    _classCallCheck(this, Provider);\n  }\n\n  _createClass(Provider, [{\n    key: \"init\",\n    value: function init(m, store) {\n      if (!m || !store || !store.getState) throw new Error(\"Mithril and Redux store are required\");\n      this.m = m;\n      this.store = store;\n      return this;\n    }\n  }]);\n\n  return Provider;\n}();\n\nvar Malatium = new Provider();\n\n// helper functions\nvar isArray = exports.isArray = function isArray(arr) {\n  return Object.prototype.toString.call(arr) === \"[object Array]\";\n};\n\nvar isFunction = exports.isFunction = function isFunction(fn) {\n  return typeof fn === \"function\";\n};\n\nvar isObject = exports.isObject = function isObject(obj) {\n  return obj === Object(obj);\n};\n\nvar isComponent = exports.isComponent = function isComponent(component) {\n  return isObject(component) && isFunction(component.view);\n};\n\nvar nestComponents = exports.nestComponents = function nestComponents() {\n  for (var _len = arguments.length, components = Array(_len), _key = 0; _key < _len; _key++) {\n    components[_key] = arguments[_key];\n  }\n\n  return components.reduce(function (out, component, idx) {\n    if (out === false) return Malatium.m.component(component);\n    return Malatium.m.component(component, {}, out);\n  }, false);\n};\n\nvar identity = exports.identity = function identity(x) {\n  return x;\n};\n\nvar lazyInit = exports.lazyInit = function lazyInit(component) {\n  return isFunction(component) ? new component() : component;\n};\n\nfunction bindActions(actions, dispatch) {\n  if (typeof actions === \"function\") return actions(dispatch);\n  if ((typeof actions === \"undefined\" ? \"undefined\" : _typeof(actions)) === \"object\") return Object.keys(actions).reduce(function (out, key, index) {\n    if (typeof actions[key] === \"function\") out[key] = function () {\n      for (var _len2 = arguments.length, factoryArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        factoryArgs[_key2] = arguments[_key2];\n      }\n\n      return function () {\n        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n          args[_key3] = arguments[_key3];\n        }\n\n        return dispatch(actions[key].apply(actions, factoryArgs.concat(args)));\n      };\n    };else if (_typeof(actions[key]) === \"object\") out[key] = actions[key];\n    return out;\n  }, {});\n  return {};\n}\n\nfunction wrapView(comp, actionMap) {\n  var originalView = comp.view;\n  comp.view = function (ctrl) {\n    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {\n      args[_key4 - 1] = arguments[_key4];\n    }\n\n    var nc = _extends({}, ctrl, actionMap);\n    return originalView.apply(undefined, [nc].concat(args));\n  };\n}\n\n// connect\nvar connect = exports.connect = function connect(selector, actions, mergeProps) {\n  return function (Component) {\n    return {\n      view: function view(controller, props, children) {\n        var _Malatium$store = Malatium.store;\n        var dispatch = _Malatium$store.dispatch;\n        var getState = _Malatium$store.getState;\n\n        var state = selector(getState());\n        var component = lazyInit(Component);\n\n        var actionMap = bindActions(actions, dispatch);\n        wrapView(component, actionMap);\n\n        return Malatium.m.component(component, _extends({}, props, { dispatch: dispatch }, state, actionMap, mergeProps), children);\n      }\n    };\n  };\n};\n\n// redraw middleware\nvar redrawMiddleware = exports.redrawMiddleware = function redrawMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      next(action);\n      if (action.redraw && Malatium.m && Malatium.m.redraw) Malatium.m.redraw();\n    };\n  };\n};\n\n// routing\nvar special = [\"$container\", \"$alias\", \"$default\"];\nvar trimRightSlash = function trimRightSlash(str) {\n  return str.replace(/\\/$/, \"\");\n};\n\nvar flattenRoutes = exports.flattenRoutes = function flattenRoutes(routes) {\n  for (var _len5 = arguments.length, parents = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {\n    parents[_key5 - 3] = arguments[_key5];\n  }\n\n  var obj = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n  var prefix = arguments.length <= 2 || arguments[2] === undefined ? \"\" : arguments[2];\n\n  if (isFunction(routes)) routes = routes();\n\n  if (isComponent(routes)) {\n    obj[trimRightSlash(prefix)] = nestComponents.apply(undefined, [routes].concat(_toConsumableArray(parents)));\n    return routes;\n  }\n\n  if (!isObject(routes)) throw new Error(\"routes needs to be an object, or function that returns an object\");\n\n  if (routes.hasOwnProperty(\"$container\")) {\n    var $container = isFunction(routes.$container) ? routes.$container() : routes.$container;\n    parents = [$container].concat(_toConsumableArray(parents));\n  }\n\n  Object.keys(routes).forEach(function (key, idx) {\n    if (special.indexOf(key) > -1) return;\n    var value = routes[key];\n\n    if (isFunction(value)) value = value();\n    if (isArray(value)) throw new Error(\"not set up to handle arrays\");\n    if (isComponent(value)) return obj[trimRightSlash(prefix + key)] = nestComponents.apply(undefined, [value].concat(_toConsumableArray(parents)));\n    if (isObject(value)) return flattenRoutes.apply(undefined, [value, obj, prefix + key].concat(_toConsumableArray(parents)));\n    throw new Error(\"type not handled\");\n  });\n\n  if (routes.hasOwnProperty(\"$default\")) flattenRoutes.apply(undefined, [routes.$default, obj, prefix + \"/:stub...\"].concat(_toConsumableArray(parents)));\n\n  return obj;\n};\n\nMalatium.route = function (DOMElement, defaultRoute, routes, mode) {\n  if (mode) Malatium.m.route.mode = mode;\n  return Malatium.m.route(DOMElement, defaultRoute, flattenRoutes(routes));\n};\n\nexports.default = Malatium;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ }
/******/ ]);