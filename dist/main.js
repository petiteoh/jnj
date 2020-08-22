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
var game = new _scripts_main__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvas);
game.run(); // const forceField = new ForceField(ctx);

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
  function Dog(canvas, ctx, x, y, vx, vy) {
    _classCallCheck(this, Dog);

    // this.posX = posX;
    // this.posY = posY;
    this.vx = vx;
    this.vy = vy;
    this.radius = 5;
    this.color = "#c7c2bf";
    this.canvas = canvas;
    this.randomPos();
    this.ctx = ctx;
    this.isColliding = false; // another instance variable can keep track if its a stray or not eh boolean
    // which feeds into the win/lose Main.js to check if that is the target
  }

  _createClass(Dog, [{
    key: "randomPos",
    value: function randomPos() {
      this.x = this.canvas.width * Math.random();
      this.y = this.canvas.height * Math.random();
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
    value: function moveRandom() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fill();
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
    this.setMousePosition = this.setMousePosition.bind(this);
    this.isColliding = false;
    debugger;
  }

  _createClass(ForceField, [{
    key: "setMousePosition",
    value: function setMousePosition(e) {
      this.mouseX = e.clientX - this.canvasPos.x;
      this.mouseY = e.clientY - this.canvasPos.y;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.update();
    }
  }, {
    key: "getPosition",
    value: function getPosition(canvas) {
      var xPosition = 0;
      var yPosition = 0;

      while (canvas) {
        xPosition += canvas.offsetLeft - canvas.scrollLeft + canvas.clientLeft;
        yPosition += canvas.offsetTop - canvas.scrollTop + canvas.clientTop;
        canvas = canvas.offsetParent;
      }

      return {
        x: xPosition,
        y: yPosition
      };
    }
  }, {
    key: "update",
    value: function update() {
      this.ctx.beginPath();
      this.ctx.arc(this.mouseX, this.mouseY, 50, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      this.ctx.fill();
    }
  }]);

  return ForceField;
}();

/* harmony default export */ __webpack_exports__["default"] = (ForceField);

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Home = /*#__PURE__*/function () {
  function Home(ctx, canvas) {
    _classCallCheck(this, Home);

    this.ctx = ctx;
    this.canvas = canvas;
    this.doorWidth = 15;
    this.doorHeight = 20;
  }

  _createClass(Home, [{
    key: "drawDoor",
    value: function drawDoor() {
      this.ctx.fillStyle = "#754719";
      this.ctx.fillRect(298, 190, this.doorWidth, this.doorHeight);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = "#f7a065";
      this.ctx.fillRect(280, 180, 50, 30); // Draw triangle

      this.ctx.fillStyle = "#f75348";
      this.ctx.beginPath();
      this.ctx.moveTo(270, 180);
      this.ctx.lineTo(340, 180);
      this.ctx.lineTo(305, 150);
      this.ctx.closePath();
      this.ctx.fill(); //door

      this.drawDoor(); //paws

      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(299, 220, 2, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(296.6, 216.5, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(300, 216, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(302.7, 218, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath(); //

      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(307, 214.4, 1.8, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(305.3, 210.8, 0.8, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(308.5, 210.6, 0.8, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(310.6, 212.7, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath(); //

      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(297, 230, 2, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(295.4, 226.2, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(298.8, 226, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(300.7, 228.6, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath(); //

      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(286, 234, 2, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(284.4, 230.2, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(287.8, 230, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000000";
      this.ctx.arc(289.7, 232.6, 1, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return Home;
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/scripts/home.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Main = /*#__PURE__*/function () {
  function Main(ctx, canvas) {
    _classCallCheck(this, Main);

    this.dogs = [];
    this.ctx = ctx;
    this.canvas = canvas;
    this.makeDogs(10);
    this.forceField = new _force_field__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.canvas);
    this.home = new _home__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, this.canvas);
    this.score = 0;
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
    debugger;
  }

  _createClass(Main, [{
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(e) {
      this.forceField.setMousePosition(e);
    }
  }, {
    key: "detectCollisionsWithForce",
    value: function detectCollisionsWithForce() {
      var obj1 = this.forceField;
      var obj2; // Reset collision state of all objects

      for (var i = 0; i < this.dogs.length; i++) {
        this.dogs[i].isColliding = false;
      } // Start checking for collisions


      for (var _i = 0; _i < this.dogs.length; _i++) {
        obj2 = this.dogs[_i]; // Compare object1 with object2

        if (this.intersect(obj1.mouseX, obj1.mouseY, 50, obj2.x, obj2.y, obj2.radius)) {
          obj1.isColliding = true;
          obj2.isColliding = true;
          obj1.vx = -obj1.vx;
          obj1.vy = -obj1.vy;
          obj2.vx = -obj2.vx;
          obj2.vy = -obj2.vy;
        }
      }
    }
  }, {
    key: "intersect",
    value: function intersect(x1, y1, r1, x2, y2, r2) {
      // Calculate the distance between the two circles
      var circDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2); // When the distance is smaller or equal to the sum
      // of the two radius, the circles touch or overlap

      return circDistance <= (r1 + r2) * (r1 + r2) + 5;
    }
  }, {
    key: "wallCollision",
    value: function wallCollision(dog) {
      if (dog.x + dog.vx > this.canvas.width - dog.radius || dog.x + dog.vx < dog.radius) {
        dog.vx = -dog.vx;
        return true;
      }

      if (dog.y + dog.vy < dog.radius || dog.y + dog.vy > this.canvas.height - dog.radius) {
        dog.vy = -dog.vy;
        return true;
      }

      return false;
    }
  }, {
    key: "doorCollision",
    value: function doorCollision(dog) {
      if (dog.x + dog.vx > this.home.doorWidth - dog.radius && dog.x + dog.vx < dog.radius) {
        dog.vx = -dog.vx;
        this.score++; // dog.x = 0
        // dog.y = 0

        return true;
      }

      if (dog.y + dog.vy < dog.radius && dog.y + dog.vy > this.home.doorHeight - dog.radius) {
        dog.radius = 20;
        this.score++; // dog.x = 0
        // dog.y = 0

        return true;
      }

      return false;
    }
  }, {
    key: "makeDogs",
    value: function makeDogs(dogCount) {
      for (var i = 0; i < dogCount; i++) {
        if (i < 2) {
          var dog = new _dogs__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, 0, 0, 5 * Math.random(), 5 * Math.random());
          dog.color = "#803809";
          dog.radius = 7;
          this.dogs.push(dog);
        } else {
          var _dog = new _dogs__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, 0, 0, 5 * Math.random(), 5 * Math.random());

          this.dogs.push(_dog);
        }
      }
    }
  }, {
    key: "move",
    value: function move(e) {
      for (var i = 0; i < this.dogs.length; i++) {
        var xDistance = this.dogs[i].x - this.forceField.mouseX;
        var yDistance = this.dogs[i].y - this.forceField.mouseY;
        var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

        if (this.intersect(this.forceField.mouseX, this.forceField.mouseY, 50, this.dogs[i].x, this.dogs[i].y, this.dogs[i].radius) && !this.wallCollision(this.dogs[i])) {
          // if (!this.wallCollision(this.dogs[i])) {
          var angle = Math.atan2(yDistance, xDistance);
          this.dogs[i].x += Math.cos(angle) * distance;
          this.dogs[i].y += Math.sin(angle) * distance; // }
          // else {
          //   this.dogs[i].x = this.dogs[i].x
          //   this.dogs[i].y = this.dogs[i].y
          // }
        }
      }
    }
  }, {
    key: "drawScore",
    value: function drawScore() {
      this.ctx.font = "16px Arial";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText("Score: " + this.score, 8, 20);
    }
  }, {
    key: "game",
    value: function game(timeStamp) {
      var _this = this;

      var timeLapsed = (timeStamp - oldTime) / 1000;
      var oldTime = timeStamp;
      this.dogs.forEach(function (dog) {
        // dog.moveRandom(timeLapsed);
        _this.wallCollision(dog);

        _this.doorCollision(dog);
      }); // this.detectCollisions();

      this.detectCollisionsWithForce();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dogs.forEach(function (dog) {
        dog.draw();
      });
      this.forceField.update();
      this.home.draw();
      this.drawScore();
      requestAnimationFrame(this.game.bind(this));
      this.move();
    }
  }, {
    key: "run",
    value: function run() {
      requestAnimationFrame(this.game.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJNYWluIiwicnVuIiwiRG9nIiwieCIsInkiLCJ2eCIsInZ5IiwicmFkaXVzIiwiY29sb3IiLCJyYW5kb21Qb3MiLCJpc0NvbGxpZGluZyIsIndpZHRoIiwiTWF0aCIsInJhbmRvbSIsImhlaWdodCIsIm1heFgiLCJtYXhZIiwibnVtRG9ncyIsInRhcmdldERvZ0FyZWEiLCJ0YXJnZXRSYWRpdXMiLCJzcXJ0IiwiUEkiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsIiwiRm9yY2VGaWVsZCIsImNhbnZhc1BvcyIsImdldFBvc2l0aW9uIiwibW91c2VYIiwibW91c2VZIiwic2V0TW91c2VQb3NpdGlvbiIsImJpbmQiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvZmZzZXRQYXJlbnQiLCJIb21lIiwiZG9vcldpZHRoIiwiZG9vckhlaWdodCIsImZpbGxSZWN0IiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZHJhd0Rvb3IiLCJkb2dzIiwibWFrZURvZ3MiLCJmb3JjZUZpZWxkIiwiaG9tZSIsInNjb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJvYmoxIiwib2JqMiIsImkiLCJsZW5ndGgiLCJpbnRlcnNlY3QiLCJ4MSIsInkxIiwicjEiLCJ4MiIsInkyIiwicjIiLCJjaXJjRGlzdGFuY2UiLCJkb2ciLCJkb2dDb3VudCIsInB1c2giLCJ4RGlzdGFuY2UiLCJ5RGlzdGFuY2UiLCJkaXN0YW5jZSIsIndhbGxDb2xsaXNpb24iLCJhbmdsZSIsImF0YW4yIiwiY29zIiwic2luIiwiZm9udCIsImZpbGxUZXh0IiwidGltZVN0YW1wIiwidGltZUxhcHNlZCIsIm9sZFRpbWUiLCJmb3JFYWNoIiwiZG9vckNvbGxpc2lvbiIsImRldGVjdENvbGxpc2lvbnNXaXRoRm9yY2UiLCJkcmF3IiwiZHJhd1Njb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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LHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBGb3JjZUZpZWxkIGZyb20gXCIuL3NjcmlwdHMvZm9yY2VfZmllbGRcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL3NjcmlwdHMvbWFpblwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgTWFpbihjdHgsIGNhbnZhcyk7XG5nYW1lLnJ1bigpO1xuXG5cblxuLy8gY29uc3QgZm9yY2VGaWVsZCA9IG5ldyBGb3JjZUZpZWxkKGN0eCk7XG5cbiIsImNsYXNzIERvZyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIHZ4LCB2eSkge1xuICAgICAgICAvLyB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICAvLyB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgIHRoaXMudnkgPSB2eTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjYzdjMmJmXCI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnJhbmRvbVBvcygpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyBhbm90aGVyIGluc3RhbmNlIHZhcmlhYmxlIGNhbiBrZWVwIHRyYWNrIGlmIGl0cyBhIHN0cmF5IG9yIG5vdCBlaCBib29sZWFuXG4gICAgICAgIC8vIHdoaWNoIGZlZWRzIGludG8gdGhlIHdpbi9sb3NlIE1haW4uanMgdG8gY2hlY2sgaWYgdGhhdCBpcyB0aGUgdGFyZ2V0XG59XG5cbiAgICByYW5kb21Qb3MoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKTtcbiAgICB9XG5cbiAgICByYWRpdXMobWF4WCwgbWF4WSwgbnVtRG9ncykge1xuICAgICAgICBsZXQgdGFyZ2V0RG9nQXJlYSA9IChtYXhYICogbWF4WSkgLyBudW1Eb2dzO1xuICAgICAgICBsZXQgdGFyZ2V0UmFkaXVzID0gTWF0aC5zcXJ0KHRhcmdldERvZ0FyZWEgLyBNYXRoLlBJKTtcbiAgICAgICAgcmV0dXJuIDIgKiB0YXJnZXRSYWRpdXM7XG4gICAgfTtcblxuICAgIG1vdmVSYW5kb20oKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9nOyIsImNsYXNzIEZvcmNlRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNQb3MgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuY2FudmFzKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5tb3VzZVggPSAwO1xuICAgICAgICB0aGlzLm1vdXNlWSA9IDA7XG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbiA9IHRoaXMuc2V0TW91c2VQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIH1cblxuICAgIHNldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUG9zLng7XG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZIC0gdGhpcy5jYW52YXNQb3MueTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBnZXRQb3NpdGlvbihjYW52YXMpIHtcbiAgICAgIGxldCB4UG9zaXRpb24gPSAwO1xuICAgICAgbGV0IHlQb3NpdGlvbiA9IDA7XG4gICAgXG4gICAgICB3aGlsZSAoY2FudmFzKSB7XG4gICAgICAgIHhQb3NpdGlvbiArPSBjYW52YXMub2Zmc2V0TGVmdCAtIGNhbnZhcy5zY3JvbGxMZWZ0ICsgY2FudmFzLmNsaWVudExlZnQ7XG4gICAgICAgIHlQb3NpdGlvbiArPSBjYW52YXMub2Zmc2V0VG9wIC0gY2FudmFzLnNjcm9sbFRvcCArIGNhbnZhcy5jbGllbnRUb3A7XG4gICAgICAgIGNhbnZhcyA9IGNhbnZhcy5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhQb3NpdGlvbixcbiAgICAgICAgeTogeVBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMubW91c2VYLCB0aGlzLm1vdXNlWSwgNTAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmNlRmllbGQ7XG5cbiIsImNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kb29yV2lkdGggPSAxNTtcbiAgICAgICAgdGhpcy5kb29ySGVpZ2h0ID0gMjA7XG4gICAgfVxuXG4gICAgZHJhd0Rvb3IoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzc1NDcxOVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyOTgsIDE5MCwgdGhpcy5kb29yV2lkdGgsIHRoaXMuZG9vckhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZjdhMDY1XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDI4MCwgMTgwLCA1MCwgMzApO1xuXG4gICAgICAgIC8vIERyYXcgdHJpYW5nbGVcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZjc1MzQ4XCI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjcwLCAxODApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzQwLCAxODApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzA1LCAxNTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIC8vZG9vclxuICAgICAgICB0aGlzLmRyYXdEb29yKCk7XG5cbiAgICAgICAgLy9wYXdzXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5OSwgMjIwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk2LjYsIDIxNi41LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzAwLCAyMTYsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDIuNywgMjE4LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzA3LCAyMTQuNCwgMS44LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzA1LjMsIDIxMC44LCAwLjgsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDguNSwgMjEwLjYsIDAuOCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMxMC42LCAyMTIuNywgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5NywgMjMwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk1LjQsIDIyNi4yLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk4LjgsIDIyNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwMC43LCAyMjguNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI4NiwgMjM0LCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg0LjQsIDIzMC4yLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg3LjgsIDIzMCwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI4OS43LCAyMzIuNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBEb2cgZnJvbSBcIi4vZG9nc1wiO1xuaW1wb3J0IEZvcmNlRmllbGQgZnJvbSBcIi4vZm9yY2VfZmllbGRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxuXG5jbGFzcyBNYWluIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLmRvZ3MgPSBbXTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLm1ha2VEb2dzKDEwKTtcbiAgICB0aGlzLmZvcmNlRmllbGQgPSBuZXcgRm9yY2VGaWVsZCh0aGlzLmN0eCwgdGhpcy5jYW52YXMpXG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUodGhpcy5jdHgsIHRoaXMuY2FudmFzKVxuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihlKSB7XG4gICAgdGhpcy5mb3JjZUZpZWxkLnNldE1vdXNlUG9zaXRpb24oZSlcbiAgfVxuXG4gIGRldGVjdENvbGxpc2lvbnNXaXRoRm9yY2UoKSB7XG4gICAgbGV0IG9iajEgPSB0aGlzLmZvcmNlRmllbGRcbiAgICBsZXQgb2JqMjtcblxuICAgIC8vIFJlc2V0IGNvbGxpc2lvbiBzdGF0ZSBvZiBhbGwgb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRvZ3NbaV0uaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCBjaGVja2luZyBmb3IgY29sbGlzaW9uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmoyID0gdGhpcy5kb2dzW2ldO1xuXG4gICAgICAvLyBDb21wYXJlIG9iamVjdDEgd2l0aCBvYmplY3QyXG4gICAgICBpZiAodGhpcy5pbnRlcnNlY3Qob2JqMS5tb3VzZVgsIG9iajEubW91c2VZLCA1MCwgb2JqMi54LCBvYmoyLnksIG9iajIucmFkaXVzKSkge1xuICAgICAgICBvYmoxLmlzQ29sbGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgb2JqMi5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgIG9iajEudnggPSAtb2JqMS52eDtcbiAgICAgICAgb2JqMS52eSA9IC1vYmoxLnZ5O1xuICAgICAgICBvYmoyLnZ4ID0gLW9iajIudng7XG4gICAgICAgIG9iajIudnkgPSAtb2JqMi52eTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnNlY3QoeDEsIHkxLCByMSwgeDIsIHkyLCByMikge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIGNpcmNsZXNcbiAgICBsZXQgY2lyY0Rpc3RhbmNlID0gKHgxIC0geDIpICogKHgxIC0geDIpICsgKHkxIC0geTIpICogKHkxIC0geTIpO1xuXG4gICAgLy8gV2hlbiB0aGUgZGlzdGFuY2UgaXMgc21hbGxlciBvciBlcXVhbCB0byB0aGUgc3VtXG4gICAgLy8gb2YgdGhlIHR3byByYWRpdXMsIHRoZSBjaXJjbGVzIHRvdWNoIG9yIG92ZXJsYXBcbiAgICByZXR1cm4gY2lyY0Rpc3RhbmNlIDw9ICgocjEgKyByMikgKiAocjEgKyByMikpICsgNTtcbiAgfVxuICBcbiAgd2FsbENvbGxpc2lvbihkb2cpIHtcbiAgICBpZiAoZG9nLnggKyBkb2cudnggPiB0aGlzLmNhbnZhcy53aWR0aCAtIGRvZy5yYWRpdXMgfHwgZG9nLnggKyBkb2cudnggPCBkb2cucmFkaXVzKSB7XG4gICAgICBkb2cudnggPSAtZG9nLnZ4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICBcbiAgICBpZiAoZG9nLnkgKyBkb2cudnkgPCBkb2cucmFkaXVzIHx8IGRvZy55ICsgZG9nLnZ5ID4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gZG9nLnJhZGl1cykge1xuICAgICAgZG9nLnZ5ID0gLWRvZy52eTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvb3JDb2xsaXNpb24oZG9nKSB7XG4gICAgaWYgKGRvZy54ICsgZG9nLnZ4ID4gdGhpcy5ob21lLmRvb3JXaWR0aCAtIGRvZy5yYWRpdXMgJiYgZG9nLnggKyBkb2cudnggPCBkb2cucmFkaXVzKSB7XG4gICAgICBkb2cudnggPSAtZG9nLnZ4O1xuICAgICAgdGhpcy5zY29yZSsrXG4gICAgICAvLyBkb2cueCA9IDBcbiAgICAgIC8vIGRvZy55ID0gMFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICBcbiAgICBpZiAoZG9nLnkgKyBkb2cudnkgPCBkb2cucmFkaXVzICYmIGRvZy55ICsgZG9nLnZ5ID4gdGhpcy5ob21lLmRvb3JIZWlnaHQgLSBkb2cucmFkaXVzKSB7XG4gICAgICBkb2cucmFkaXVzID0gMjA7XG4gICAgICB0aGlzLnNjb3JlKytcbiAgICAgIC8vIGRvZy54ID0gMFxuICAgICAgLy8gZG9nLnkgPSAwXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBtYWtlRG9ncyhkb2dDb3VudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9nQ291bnQ7IGkrKykge1xuICAgICAgaWYgKCBpIDwgMiApIHtcbiAgICAgICAgbGV0IGRvZyA9IG5ldyBEb2codGhpcy5jYW52YXMsIHRoaXMuY3R4LCAwLCAwLCA1ICogTWF0aC5yYW5kb20oKSwgNSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBkb2cuY29sb3IgPSBcIiM4MDM4MDlcIjtcbiAgICAgICAgZG9nLnJhZGl1cyA9IDc7XG4gICAgICAgIHRoaXMuZG9ncy5wdXNoKGRvZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZG9nID0gbmV3IERvZyh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDAsIDAsIDUgKiBNYXRoLnJhbmRvbSgpLCA1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuZG9ncy5wdXNoKGRvZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZShlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHhEaXN0YW5jZSA9IHRoaXMuZG9nc1tpXS54IC0gdGhpcy5mb3JjZUZpZWxkLm1vdXNlWDtcbiAgICB2YXIgeURpc3RhbmNlID0gdGhpcy5kb2dzW2ldLnkgLSB0aGlzLmZvcmNlRmllbGQubW91c2VZO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCh4RGlzdGFuY2UgKiB4RGlzdGFuY2UgKyB5RGlzdGFuY2UgKiB5RGlzdGFuY2UpO1xuXG4gICAgaWYgKCh0aGlzLmludGVyc2VjdCh0aGlzLmZvcmNlRmllbGQubW91c2VYLCB0aGlzLmZvcmNlRmllbGQubW91c2VZLCA1MCwgdGhpcy5kb2dzW2ldLngsIHRoaXMuZG9nc1tpXS55LCB0aGlzLmRvZ3NbaV0ucmFkaXVzKSkgJiYgKCF0aGlzLndhbGxDb2xsaXNpb24odGhpcy5kb2dzW2ldKSkpIHtcbiAgICAgIC8vIGlmICghdGhpcy53YWxsQ29sbGlzaW9uKHRoaXMuZG9nc1tpXSkpIHtcbiAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHlEaXN0YW5jZSwgeERpc3RhbmNlKTtcbiAgICAgICAgICB0aGlzLmRvZ3NbaV0ueCArPSBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICAgICAgICB0aGlzLmRvZ3NbaV0ueSArPSBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmRvZ3NbaV0ueCA9IHRoaXMuZG9nc1tpXS54XG4gICAgICAvLyAgIHRoaXMuZG9nc1tpXS55ID0gdGhpcy5kb2dzW2ldLnlcbiAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3U2NvcmUoKSB7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgOCwgMjApO1xuICB9XG5cblxuICBnYW1lKHRpbWVTdGFtcCkge1xuICAgIGxldCB0aW1lTGFwc2VkID0gKHRpbWVTdGFtcCAtIG9sZFRpbWUpIC8gMTAwMDtcbiAgICBsZXQgb2xkVGltZSA9IHRpbWVTdGFtcDtcblxuICAgIHRoaXMuZG9ncy5mb3JFYWNoKChkb2cpID0+IHtcbiAgICAgIC8vIGRvZy5tb3ZlUmFuZG9tKHRpbWVMYXBzZWQpO1xuICAgICAgdGhpcy53YWxsQ29sbGlzaW9uKGRvZyk7XG4gICAgICB0aGlzLmRvb3JDb2xsaXNpb24oZG9nKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyB0aGlzLmRldGVjdENvbGxpc2lvbnMoKTtcbiAgICB0aGlzLmRldGVjdENvbGxpc2lvbnNXaXRoRm9yY2UoKTtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgdGhpcy5kb2dzLmZvckVhY2goKGRvZykgPT4ge1xuICAgICAgZG9nLmRyYXcoKTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmZvcmNlRmllbGQudXBkYXRlKCk7XG4gICAgdGhpcy5ob21lLmRyYXcoKTtcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH1cblxuICBydW4oKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==