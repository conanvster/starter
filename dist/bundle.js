/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular/angular.js":
/*!*****************************************!*\
  !*** ./node_modules/angular/angular.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/angular/index.js":
/*!***************************************!*\
  !*** ./node_modules/angular/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/angular/angular.js\");\nmodule.exports = angular;\n\n\n//# sourceURL=webpack:///./node_modules/angular/index.js?");

/***/ }),

/***/ "./src/app.component.js":
/*!******************************!*\
  !*** ./src/app.component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    template: `<header>\n        Hello world\n    </header>\n    <br>\n    <test></test>\n    <br>\n    <br>\n    <div>\n        <div ui-view></div>\n    </div>\n    <footer>\n        Copyright MyApp 2018.\n    </footer>`\n});\n\n//# sourceURL=webpack:///./src/app.component.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ \"./src/app.component.js\");\n/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.component */ \"./src/test/test.component.js\");\n\n\n\n\n\n\nangular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', [])\n    .component('app', _app_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n    .component('test', _test_test_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/test/test.component.js":
/*!************************************!*\
  !*** ./src/test/test.component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.controller */ \"./src/test/test.controller.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    template: `\n        <input ng-model=\"$ctrl.a1\" ng-change=\"$ctrl.updateSum($ctrl.a1, $ctrl.a2)\"/> <br>\n        <input ng-model=\"$ctrl.a2\" ng-change=\"$ctrl.updateSum($ctrl.a1, $ctrl.a2)\"/> <br>\n        Sum: {{$ctrl.sum}}`,\n    controller: _test_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/test/test.component.js?");

/***/ }),

/***/ "./src/test/test.controller.js":
/*!*************************************!*\
  !*** ./src/test/test.controller.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TestController; });\nclass TestController {\n    constructor(){\n        let $ctrl = this;\n\n        $ctrl.a1 = 1;\n        $ctrl.a2 = 2;\n        this.updateSum($ctrl.a1, $ctrl.a2);\n\n    }\n\n    updateSum(arg1, arg2){\n        this.sum = parseInt(arg1) + parseInt(arg2);\n    }\n\n}\n\n//# sourceURL=webpack:///./src/test/test.controller.js?");

/***/ })

/******/ });