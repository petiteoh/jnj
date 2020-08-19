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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_force_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/force_field */ "./src/scripts/force_field.js");
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/main */ "./src/scripts/main.js");



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var game = new _scripts_main__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvas); // const forceField = new ForceField(ctx);

game.draw();

/***/ }),

/***/ "./src/scripts/dogs.js":
/*!*****************************!*\
  !*** ./src/scripts/dogs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dog = /*#__PURE__*/function () {
  function Dog(canvas) {
    _classCallCheck(this, Dog);

    // this.posX = posX;
    // this.posY = posY;
    this.radius = 5;
    this.color = "#4e4e4e";
    this.canvas = canvas;
    this.randomPos();
  }

  _createClass(Dog, [{
    key: "randomPos",
    value: function randomPos() {
      this.posX = this.canvas.width * Math.random();
      this.posY = this.canvas.height * Math.random();
    }
  }, {
    key: "radius",
    value: function radius(maxX, maxY, numDogs) {
      var targetDogArea = maxX * maxY / numDogs;
      var targetRadius = Math.sqrt(targetDogArea / Math.PI);
      return 2 * targetRadius;
    }
  }, {
    key: "moveRandom",
    // strayColor() {
    //     let color = "#4e4e4e";
    //     return color;
    // };
    value: function moveRandom() {
      var dx = Math.random() * 2 - 1;
      var dy = Math.random() * 2 - 1;
      this.posX = Math.abs((this.posX + dx * this.radius * 0.1) % maxX);
      this.posY = Math.abs((this.posY + dy * this.radius * 0.1) % maxY);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }]);

  return Dog;
}();

/* harmony default export */ __webpack_exports__["default"] = (Dog);

/***/ }),

/***/ "./src/scripts/force_field.js":
/*!************************************!*\
  !*** ./src/scripts/force_field.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ForceField = /*#__PURE__*/function () {
  function ForceField(ctx, canvas) {
    _classCallCheck(this, ForceField);

    this.ctx = ctx;
    this.canvas = canvas;
    this.canvasPos = this.getPosition(this.canvas);
    debugger;
    this.mouseX = 0;
    this.mouseY = 0;
    this.canvas.addEventListener("mousemove", this.setMousePosition.bind(this), false);
  }

  _createClass(ForceField, [{
    key: "setMousePosition",
    value: function setMousePosition(e) {
      this.mouseX = e.clientX - this.canvasPos.x;
      this.mouseY = e.clientY - this.canvasPos.y;
      console.log("".concat(this.mouseX, " ").concat(this.mouseY));
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(this.mouseX, this.mouseY, 50, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = "#FF6A6A";
      this.ctx.fill();
    }
  }, {
    key: "getPosition",
    value: function getPosition(canvas) {
      debugger;
      var xPosition = 0;
      var yPosition = 0;

      while (canvas) {
        xPosition += canvas.offsetLeft - canvas.scrollLeft + canvas.clientLeft;
        yPosition += canvas.offsetTop - canvas.scrollTop + canvas.clientTop;
        canvas = canvas.offsetParent;
      }

      debugger;
      return {
        x: xPosition,
        y: yPosition
      };
    }
  }, {
    key: "update",
    value: function update() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = "#FF6A6A";
      this.ctx.fill();
      requestAnimationFrame(this.update.bind(this)); // this is a global function so you need to bind it
    }
  }]);

  return ForceField;
}();

/* harmony default export */ __webpack_exports__["default"] = (ForceField);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dogs */ "./src/scripts/dogs.js");
/* harmony import */ var _force_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force_field */ "./src/scripts/force_field.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Main = /*#__PURE__*/function () {
  function Main(ctx, canvas) {
    _classCallCheck(this, Main);

    this.dogs = [];
    this.ctx = ctx;
    this.canvas = canvas;
    this.game(10);
    this.forceField = new _force_field__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.canvas);
  }

  _createClass(Main, [{
    key: "game",
    value: function game(dogCount) {
      for (var i = 0; i < dogCount; i++) {
        //   dogs.push(Dog.randomDog(canvas.width, canvas.height, 10));
        var dog = new _dogs__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas);
        this.dogs.push(dog);
      }
    }
  }, {
    key: "moveDog",
    value: function moveDog() {// let dx = Math.random() * 2 - 1;
      // let dy = Math.random() * 2 - 1;
      // this.centerX = Math.abs((this.centerX + dx * this.radius * 0.1) % maxX);
      // this.centerY = Math.abs((this.centerY + dy * this.radius * 0.1) % maxY);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var animateCallback = function animateCallback() {
        // this.moveDogs();
        _this.render();

        requestAnimationFrame(animateCallback);
      };

      animateCallback();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.render(); // this.moveDog();

      this.start(); // this.forceField.update();

      requestAnimationFrame(this.draw.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dogs.forEach(function (dog) {
        dog.render(_this2.ctx);
      });
    }
  }]);

  return Main;
}();

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiTWFpbiIsImRyYXciLCJEb2ciLCJyYWRpdXMiLCJjb2xvciIsInJhbmRvbVBvcyIsInBvc1giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJwb3NZIiwiaGVpZ2h0IiwibWF4WCIsIm1heFkiLCJudW1Eb2dzIiwidGFyZ2V0RG9nQXJlYSIsInRhcmdldFJhZGl1cyIsInNxcnQiLCJQSSIsImR4IiwiZHkiLCJhYnMiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsIiwiRm9yY2VGaWVsZCIsImNhbnZhc1BvcyIsImdldFBvc2l0aW9uIiwibW91c2VYIiwibW91c2VZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldE1vdXNlUG9zaXRpb24iLCJiaW5kIiwiZSIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJSZWN0IiwieFBvc2l0aW9uIiwieVBvc2l0aW9uIiwib2Zmc2V0TGVmdCIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwib2Zmc2V0UGFyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiZG9ncyIsImZvcmNlRmllbGQiLCJkb2dDb3VudCIsImkiLCJkb2ciLCJwdXNoIiwiYW5pbWF0ZUNhbGxiYWNrIiwicmVu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bkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSy9DLE1BQUwsQ0FBWWEsS0FBckMsRUFBNEMsS0FBS2IsTUFBTCxDQUFZaUIsTUFBeEQ7QUFFQSxXQUFLMEMsSUFBTCxDQUFVUyxPQUFWLENBQWtCLFVBQUNMLEdBQUQsRUFBUztBQUN6QkEsV0FBRyxDQUFDRyxNQUFKLENBQVcsTUFBSSxDQUFDL0QsR0FBaEI7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdZRyxtRUFBZixFOzs7Ozs7Ozs7OztBQ3hEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgRm9yY2VGaWVsZCBmcm9tIFwiLi9zY3JpcHRzL2ZvcmNlX2ZpZWxkXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9zY3JpcHRzL21haW5cIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBnYW1lID0gbmV3IE1haW4oY3R4LCBjYW52YXMpO1xuXG4vLyBjb25zdCBmb3JjZUZpZWxkID0gbmV3IEZvcmNlRmllbGQoY3R4KTtcbmdhbWUuZHJhdygpO1xuIiwiY2xhc3MgRG9nIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgLy8gdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgLy8gdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjNGU0ZTRlXCI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnJhbmRvbVBvcygpO1xufVxuXG4gICAgcmFuZG9tUG9zKCkge1xuICAgICAgICB0aGlzLnBvc1ggPSB0aGlzLmNhbnZhcy53aWR0aCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHRoaXMucG9zWSA9IHRoaXMuY2FudmFzLmhlaWdodCAqIE1hdGgucmFuZG9tKCk7XG4gICAgfVxuXG4gICAgcmFkaXVzKG1heFgsIG1heFksIG51bURvZ3MpIHtcbiAgICAgICAgbGV0IHRhcmdldERvZ0FyZWEgPSAobWF4WCAqIG1heFkpIC8gbnVtRG9ncztcbiAgICAgICAgbGV0IHRhcmdldFJhZGl1cyA9IE1hdGguc3FydCh0YXJnZXREb2dBcmVhIC8gTWF0aC5QSSk7XG4gICAgICAgIHJldHVybiAyICogdGFyZ2V0UmFkaXVzO1xuICAgIH07XG5cbiAgICAvLyBzdHJheUNvbG9yKCkge1xuICAgIC8vICAgICBsZXQgY29sb3IgPSBcIiM0ZTRlNGVcIjtcbiAgICAvLyAgICAgcmV0dXJuIGNvbG9yO1xuICAgIC8vIH07XG5cbiAgICBtb3ZlUmFuZG9tKCkge1xuICAgICAgICBsZXQgZHggPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XG4gICAgICAgIGxldCBkeSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcblxuICAgICAgICB0aGlzLnBvc1ggPSBNYXRoLmFicygodGhpcy5wb3NYICsgZHggKiB0aGlzLnJhZGl1cyAqIDAuMSkgJSBtYXhYKTtcbiAgICAgICAgdGhpcy5wb3NZID0gTWF0aC5hYnMoKHRoaXMucG9zWSArIGR5ICogdGhpcy5yYWRpdXMgKiAwLjEpICUgbWF4WSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWCwgdGhpcy5wb3NZLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvZzsiLCJjbGFzcyBGb3JjZUZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzUG9zID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMubW91c2VYID0gMDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuc2V0TW91c2VQb3NpdGlvbi5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0TW91c2VQb3NpdGlvbihlKSB7XG4gICAgICAgIHRoaXMubW91c2VYID0gZS5jbGllbnRYIC0gdGhpcy5jYW52YXNQb3MueDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSBlLmNsaWVudFkgLSB0aGlzLmNhbnZhc1Bvcy55O1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm1vdXNlWH0gJHt0aGlzLm1vdXNlWX1gKVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMubW91c2VYLCB0aGlzLm1vdXNlWSwgNTAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkY2QTZBXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UG9zaXRpb24oY2FudmFzKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgICAgIGxldCB5UG9zaXRpb24gPSAwO1xuICAgIFxuICAgICAgd2hpbGUgKGNhbnZhcykge1xuICAgICAgICB4UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldExlZnQgLSBjYW52YXMuc2Nyb2xsTGVmdCArIGNhbnZhcy5jbGllbnRMZWZ0O1xuICAgICAgICB5UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldFRvcCAtIGNhbnZhcy5zY3JvbGxUb3AgKyBjYW52YXMuY2xpZW50VG9wO1xuICAgICAgICBjYW52YXMgPSBjYW52YXMub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuXG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhQb3NpdGlvbixcbiAgICAgICAgeTogeVBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIFxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5hcmMoMTAwLCAxMDAsIDUwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNGRjZBNkFcIjtcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgIC8vIHRoaXMgaXMgYSBnbG9iYWwgZnVuY3Rpb24gc28geW91IG5lZWQgdG8gYmluZCBpdFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yY2VGaWVsZDtcblxuIiwiaW1wb3J0IERvZyBmcm9tIFwiLi9kb2dzXCI7XG5pbXBvcnQgRm9yY2VGaWVsZCBmcm9tIFwiLi9mb3JjZV9maWVsZFwiO1xuXG5jbGFzcyBNYWluIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLmRvZ3MgPSBbXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmdhbWUoMTApO1xuICAgIHRoaXMuZm9yY2VGaWVsZCA9IG5ldyBGb3JjZUZpZWxkKHRoaXMuY3R4LCB0aGlzLmNhbnZhcylcbiAgfVxuXG4gIGdhbWUoZG9nQ291bnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvZ0NvdW50OyBpKyspIHtcbiAgICAgIC8vICAgZG9ncy5wdXNoKERvZy5yYW5kb21Eb2coY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCAxMCkpO1xuICAgICAgbGV0IGRvZyA9IG5ldyBEb2codGhpcy5jYW52YXMpO1xuICAgICAgdGhpcy5kb2dzLnB1c2goZG9nKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlRG9nKCkge1xuICAgIC8vIGxldCBkeCA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICAvLyBsZXQgZHkgPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XG5cbiAgICAvLyB0aGlzLmNlbnRlclggPSBNYXRoLmFicygodGhpcy5jZW50ZXJYICsgZHggKiB0aGlzLnJhZGl1cyAqIDAuMSkgJSBtYXhYKTtcbiAgICAvLyB0aGlzLmNlbnRlclkgPSBNYXRoLmFicygodGhpcy5jZW50ZXJZICsgZHkgKiB0aGlzLnJhZGl1cyAqIDAuMSkgJSBtYXhZKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGFuaW1hdGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIC8vIHRoaXMubW92ZURvZ3MoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYW5pbWF0ZUNhbGxiYWNrKCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgLy8gdGhpcy5tb3ZlRG9nKCk7XG4gICAgdGhpcy5zdGFydCgpO1xuICAgIC8vIHRoaXMuZm9yY2VGaWVsZC51cGRhdGUoKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5kb2dzLmZvckVhY2goKGRvZykgPT4ge1xuICAgICAgZG9nLnJlbmRlcih0aGlzLmN0eCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9