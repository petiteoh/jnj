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
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ "./src/scripts/main.js");


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var game = new _scripts_main__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
game.run();

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
    this.isCollidingWithForceField = false;
    this.isHome = false; // another instance variable can keep track if its a stray or not eh boolean
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
      var dogShake = true;

      if (dogShake === true) {
        this.vx += 5;
        this.vy += 5;
        dogShake = false;
      } else {
        this.vx -= 5;
        this.vy -= 5;
      }
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
    this.mouseX = 0;
    this.mouseY = 0;
    this.setMousePosition = this.setMousePosition.bind(this);
    this.isColliding = false;
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
    this.doorX = 298;
    this.doorY = 190;
    this.doorWidth = 15;
    this.doorHeight = 20;
  }

  _createClass(Home, [{
    key: "drawDoor",
    value: function drawDoor() {
      this.ctx.fillStyle = "#754719";
      this.ctx.fillRect(this.doorX, this.doorY, this.doorWidth, this.doorHeight);
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

    this.ctx = ctx;
    this.canvas = canvas;
    this.dogs = [];
    this.makeDogs(10);
    this.forceField = new _force_field__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.canvas);
    this.home = new _home__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, this.canvas);
    this.score = 0;
    this.time = 0;
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
  }

  _createClass(Main, [{
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(e) {
      this.forceField.setMousePosition(e);
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
    value: function wallCollision(newX, newY, dog) {
      var padding = 0;

      if (newX + dog.radius > this.canvas.width - padding || newX < dog.radius + padding) {
        return true;
      }

      if (newY + dog.radius > this.canvas.height - padding || newY < dog.radius + padding) {
        return true;
      }

      return false;
    }
  }, {
    key: "circleRect",
    value: function circleRect(dog, rx, ry, rw, rh) {
      var newX = dog.x;
      var newY = dog.y; // which edge is closest?

      if (dog.x < rx) {
        // left edge
        newX = rx;
      } else if (dog.x > rx + rw) {
        // right edge
        newX = rx + rw;
      }

      if (dog.y < ry) {
        // top edge
        newY = ry;
      } else if (dog.y > ry + rh) {
        // bottom edge
        newY = ry + rh;
      } // get distance from closest edges


      var distX = dog.x - newX;
      var distY = dog.y - newY;
      var distance = Math.sqrt(distX * distX + distY * distY); // if the distance is less than the radius, collision!

      if (distance <= dog.radius) {
        if (dog.color === "#803809" && dog.isHome === false) {
          dog.isHome = true;
          this.score++;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "gameCheck",
    value: function gameCheck() {
      if (this.score === 2) {}
    } // add alert to signify win // separate function to check win
    // change score to timer 
    // modal 

  }, {
    key: "doorCollision",
    value: function doorCollision(dog) {
      var hit = this.circleRect(dog, this.home.doorX, this.home.doorY, this.home.doorWidth, this.home.doorHeight);

      if (hit) {
        dog.color = "#ffffff";
        console.log("home");
      } else {
        // dog.color = "#000000"
        console.log("not home");
      } // rect(sx, sy, sw, sh);

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

        if (this.intersect(this.forceField.mouseX, this.forceField.mouseY, 50, this.dogs[i].x, this.dogs[i].y, this.dogs[i].radius)) {
          var angle = Math.atan2(yDistance, xDistance);
          var newX = this.dogs[i].x + Math.cos(angle) * distance;
          var newY = this.dogs[i].y + Math.sin(angle) * distance;

          if (!this.wallCollision(newX, newY, this.dogs[i])) {
            this.dogs[i].x = newX;
            this.dogs[i].y = newY;
          }
        }
      }
    }
  }, {
    key: "timer",
    value: function timer() {
      var timer = setInterval(this.canvas, 1000);
      this.time++;

      if (this.score === 2) {
        clearInterval(timer);
      }
    }
  }, {
    key: "drawTimer",
    value: function drawTimer() {
      this.ctx.font = "16px Arial";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText("Time: " + this.time, 8, 20);
    }
  }, {
    key: "game",
    value: function game() {
      var _this = this;

      this.dogs.forEach(function (dog) {
        // dog.moveRandom();
        _this.doorCollision(dog);
      });
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dogs.forEach(function (dog) {
        dog.draw();
      });
      this.forceField.update();
      this.home.draw();
      this.drawTimer();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJNYWluIiwicnVuIiwiRG9nIiwieCIsInkiLCJ2eCIsInZ5IiwicmFkaXVzIiwiY29sb3IiLCJyYW5kb21Qb3MiLCJpc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkIiwiaXNIb21lIiwid2lkdGgiLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0IiwibWF4WCIsIm1heFkiLCJudW1Eb2dzIiwidGFyZ2V0RG9nQXJlYSIsInRhcmdldFJhZGl1cyIsInNxcnQiLCJQSSIsImRvZ1NoYWtlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsIkZvcmNlRmllbGQiLCJjYW52YXNQb3MiLCJnZXRQb3NpdGlvbiIsIm1vdXNlWCIsIm1vdXNlWSIsInNldE1vdXNlUG9zaXRpb24iLCJiaW5kIiwiaXNDb2xsaWRpbmciLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvZmZzZXRQYXJlbnQiLCJIb21lIiwiZG9vclgiLCJkb29yWSIsImRvb3JXaWR0aCIsImRvb3JIZWlnaHQiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImRyYXdEb29yIiwiZG9ncyIsIm1ha2VEb2dzIiwiZm9yY2VGaWVsZCIsImhvbWUiLCJzY29yZSIsInRpbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VNb3ZlSGFuZGxlciIsIngxIiwieTEiLCJyMSIsIngyIiwieTIiLCJyMiIsImNpcmNEaXN0YW5jZSIsIm5ld1giLCJuZXdZIiwiZG9nIiwicGFkZGluZyIsInJ4IiwicnkiLCJydyIsInJoIiwiZGlzdFgiLCJkaXN0WSIsImRpc3RhbmNlIiwiaGl0IiwiY2lyY2xlUmVjdCIsImNvbnNvbGUiLCJsb2ciLCJkb2dDb3VudCIsImkiLCJwdXNoIiwibGVuZ3RoIiwieERpc3RhbmNlIiwieURpc3RhbmNlIiwiaW50ZXJzZWN0IiwiYW5nbGUiLCJhdGFuMiIsImNvcyIsInNpbiIsIndhbGxDb2xsaXNpb24iLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZvbnQiLCJmaWxsVGV4dCIsImZvckVhY2giLCJkb29yQ29sbGlzaW9uIiwiZHJhdyIsImRyYXdUaW1lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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QyxVQUFMLENBQWdCdEIsTUFBaEI7QUFDQSxXQUFLdUIsSUFBTCxDQUFVOEMsSUFBVjtBQUNBLFdBQUtDLFNBQUw7QUFDQUMsMkJBQXFCLENBQUMsS0FBS2hILElBQUwsQ0FBVW1DLElBQVYsQ0FBZSxJQUFmLENBQUQsQ0FBckI7QUFDQSxXQUFLOEUsSUFBTDtBQUNEOzs7MEJBRUs7QUFDSkQsMkJBQXFCLENBQUMsS0FBS2hILElBQUwsQ0FBVW1DLElBQVYsQ0FBZSxJQUFmLENBQUQsQ0FBckI7QUFDRDs7Ozs7O0FBSVlsQyxtRUFBZixFOzs7Ozs7Ozs7OztBQy9LQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9zY3JpcHRzL21haW5cIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBnYW1lID0gbmV3IE1haW4oY3R4LCBjYW52YXMpO1xuZ2FtZS5ydW4oKTtcbiIsImNsYXNzIERvZyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIHZ4LCB2eSkge1xuICAgICAgICAvLyB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICAvLyB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgIHRoaXMudnkgPSB2eTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjYzdjMmJmXCI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnJhbmRvbVBvcygpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNIb21lID0gZmFsc2U7XG4gICAgICAgIC8vIGFub3RoZXIgaW5zdGFuY2UgdmFyaWFibGUgY2FuIGtlZXAgdHJhY2sgaWYgaXRzIGEgc3RyYXkgb3Igbm90IGVoIGJvb2xlYW5cbiAgICAgICAgLy8gd2hpY2ggZmVlZHMgaW50byB0aGUgd2luL2xvc2UgTWFpbi5qcyB0byBjaGVjayBpZiB0aGF0IGlzIHRoZSB0YXJnZXRcbn1cblxuICAgIHJhbmRvbVBvcygpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpO1xuICAgIH1cblxuICAgIHJhZGl1cyhtYXhYLCBtYXhZLCBudW1Eb2dzKSB7XG4gICAgICAgIGxldCB0YXJnZXREb2dBcmVhID0gKG1heFggKiBtYXhZKSAvIG51bURvZ3M7XG4gICAgICAgIGxldCB0YXJnZXRSYWRpdXMgPSBNYXRoLnNxcnQodGFyZ2V0RG9nQXJlYSAvIE1hdGguUEkpO1xuICAgICAgICByZXR1cm4gMiAqIHRhcmdldFJhZGl1cztcbiAgICB9O1xuXG4gICAgbW92ZVJhbmRvbSgpIHtcbiAgICAgICAgbGV0IGRvZ1NoYWtlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZG9nU2hha2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMudnggKz0gNTtcbiAgICAgICAgICAgIHRoaXMudnkgKz0gNTtcbiAgICAgICAgICAgIGRvZ1NoYWtlID0gZmFsc2U7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52eCAtPSA1O1xuICAgICAgICAgICAgdGhpcy52eSAtPSA1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvZzsiLCJjbGFzcyBGb3JjZUZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzUG9zID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMubW91c2VYID0gMDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwO1xuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24gPSB0aGlzLnNldE1vdXNlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUG9zLng7XG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZIC0gdGhpcy5jYW52YXNQb3MueTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBnZXRQb3NpdGlvbihjYW52YXMpIHtcbiAgICAgIGxldCB4UG9zaXRpb24gPSAwO1xuICAgICAgbGV0IHlQb3NpdGlvbiA9IDA7XG4gICAgXG4gICAgICB3aGlsZSAoY2FudmFzKSB7XG4gICAgICAgIHhQb3NpdGlvbiArPSBjYW52YXMub2Zmc2V0TGVmdCAtIGNhbnZhcy5zY3JvbGxMZWZ0ICsgY2FudmFzLmNsaWVudExlZnQ7XG4gICAgICAgIHlQb3NpdGlvbiArPSBjYW52YXMub2Zmc2V0VG9wIC0gY2FudmFzLnNjcm9sbFRvcCArIGNhbnZhcy5jbGllbnRUb3A7XG4gICAgICAgIGNhbnZhcyA9IGNhbnZhcy5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhQb3NpdGlvbixcbiAgICAgICAgeTogeVBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMubW91c2VYLCB0aGlzLm1vdXNlWSwgNTAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yY2VGaWVsZDtcblxuIiwiY2xhc3MgSG9tZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRvb3JYID0gMjk4O1xuICAgICAgICB0aGlzLmRvb3JZID0gMTkwO1xuICAgICAgICB0aGlzLmRvb3JXaWR0aCA9IDE1O1xuICAgICAgICB0aGlzLmRvb3JIZWlnaHQgPSAyMDtcbiAgICB9XG5cbiAgICBkcmF3RG9vcigpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjNzU0NzE5XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMuZG9vclgsIHRoaXMuZG9vclksIHRoaXMuZG9vcldpZHRoLCB0aGlzLmRvb3JIZWlnaHQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2Y3YTA2NVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyODAsIDE4MCwgNTAsIDMwKTtcblxuICAgICAgICAvLyBEcmF3IHRyaWFuZ2xlXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2Y3NTM0OFwiO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI3MCwgMTgwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDM0MCwgMTgwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDMwNSwgMTUwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAvL2Rvb3JcbiAgICAgICAgdGhpcy5kcmF3RG9vcigpO1xuXG4gICAgICAgIC8vcGF3c1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTksIDIyMCwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5Ni42LCAyMTYuNSwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwMCwgMjE2LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzAyLjcsIDIxOCwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwNywgMjE0LjQsIDEuOCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwNS4zLCAyMTAuOCwgMC44LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzA4LjUsIDIxMC42LCAwLjgsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMTAuNiwgMjEyLjcsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTcsIDIzMCwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5NS40LCAyMjYuMiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5OC44LCAyMjYsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDAuNywgMjI4LjYsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyODYsIDIzNCwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI4NC40LCAyMzAuMiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI4Ny44LCAyMzAsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyODkuNywgMjMyLjYsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgRG9nIGZyb20gXCIuL2RvZ3NcIjtcbmltcG9ydCBGb3JjZUZpZWxkIGZyb20gXCIuL2ZvcmNlX2ZpZWxkXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCJcblxuY2xhc3MgTWFpbiB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5kb2dzID0gW107XG4gICAgdGhpcy5tYWtlRG9ncygxMCk7XG4gICAgdGhpcy5mb3JjZUZpZWxkID0gbmV3IEZvcmNlRmllbGQodGhpcy5jdHgsIHRoaXMuY2FudmFzKVxuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHRoaXMuY3R4LCB0aGlzLmNhbnZhcylcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnRpbWUgPSAwO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIHRoaXMuZm9yY2VGaWVsZC5zZXRNb3VzZVBvc2l0aW9uKGUpXG4gIH1cblxuICBpbnRlcnNlY3QoeDEsIHkxLCByMSwgeDIsIHkyLCByMikge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIGNpcmNsZXNcbiAgICBsZXQgY2lyY0Rpc3RhbmNlID0gKHgxIC0geDIpICogKHgxIC0geDIpICsgKHkxIC0geTIpICogKHkxIC0geTIpO1xuXG4gICAgLy8gV2hlbiB0aGUgZGlzdGFuY2UgaXMgc21hbGxlciBvciBlcXVhbCB0byB0aGUgc3VtXG4gICAgLy8gb2YgdGhlIHR3byByYWRpdXMsIHRoZSBjaXJjbGVzIHRvdWNoIG9yIG92ZXJsYXBcbiAgICByZXR1cm4gY2lyY0Rpc3RhbmNlIDw9ICgocjEgKyByMikgKiAocjEgKyByMikpICsgNTtcbiAgfVxuICBcbiAgd2FsbENvbGxpc2lvbihuZXdYLCBuZXdZLCBkb2cpIHtcbiAgICBjb25zdCBwYWRkaW5nID0gMDtcblxuICAgIGlmIChuZXdYICsgZG9nLnJhZGl1cyA+IHRoaXMuY2FudmFzLndpZHRoIC0gcGFkZGluZyB8fCBuZXdYIDwgZG9nLnJhZGl1cyArIHBhZGRpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gIFxuICAgIGlmIChuZXdZICsgZG9nLnJhZGl1cyA+IHRoaXMuY2FudmFzLmhlaWdodCAtIHBhZGRpbmcgfHwgbmV3WSA8IGRvZy5yYWRpdXMgKyBwYWRkaW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgICBcbiAgY2lyY2xlUmVjdChkb2csIHJ4LCByeSwgcncsIHJoKSB7XG4gICAgbGV0IG5ld1ggPSBkb2cueDtcbiAgICBsZXQgbmV3WSA9IGRvZy55O1xuXG4gICAgLy8gd2hpY2ggZWRnZSBpcyBjbG9zZXN0P1xuICAgIGlmIChkb2cueCA8IHJ4KSB7IC8vIGxlZnQgZWRnZVxuICAgICAgbmV3WCA9IHJ4O1xuICAgIH0gZWxzZSBpZiAoZG9nLnggPiByeCArIHJ3KSB7IC8vIHJpZ2h0IGVkZ2VcbiAgICAgIG5ld1ggPSByeCArIHJ3O1xuICAgIH0gICBcblxuICAgIGlmIChkb2cueSA8IHJ5KSB7IC8vIHRvcCBlZGdlXG4gICAgICBuZXdZID0gcnk7IFxuICAgIH0gZWxzZSBpZiAoZG9nLnkgPiByeSArIHJoKSB7IC8vIGJvdHRvbSBlZGdlXG4gICAgICBuZXdZID0gcnkgKyByaDsgICBcbiAgICB9XG5cbiAgICAvLyBnZXQgZGlzdGFuY2UgZnJvbSBjbG9zZXN0IGVkZ2VzXG4gICAgbGV0IGRpc3RYID0gZG9nLnggLSBuZXdYO1xuICAgIGxldCBkaXN0WSA9IGRvZy55IC0gbmV3WTtcbiAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGRpc3RYICogZGlzdFgpICsgKGRpc3RZICogZGlzdFkpKTtcblxuICAgIC8vIGlmIHRoZSBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gdGhlIHJhZGl1cywgY29sbGlzaW9uIVxuICAgIGlmIChkaXN0YW5jZSA8PSBkb2cucmFkaXVzKSB7XG4gICAgICBpZiAoZG9nLmNvbG9yID09PSBcIiM4MDM4MDlcIiAmJiBkb2cuaXNIb21lID09PSBmYWxzZSkge1xuICAgICAgICBkb2cuaXNIb21lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY29yZSsrXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdhbWVDaGVjaygpIHtcbiAgICBpZiAodGhpcy5zY29yZSA9PT0gMikge1xuICAgICAgXG4gICAgfVxuICB9XG4gICAgLy8gYWRkIGFsZXJ0IHRvIHNpZ25pZnkgd2luIC8vIHNlcGFyYXRlIGZ1bmN0aW9uIHRvIGNoZWNrIHdpblxuICAgIC8vIGNoYW5nZSBzY29yZSB0byB0aW1lciBcbiAgICAvLyBtb2RhbCBcblxuXG4gIGRvb3JDb2xsaXNpb24oZG9nKSB7XG4gICAgbGV0IGhpdCA9IHRoaXMuY2lyY2xlUmVjdChkb2csIHRoaXMuaG9tZS5kb29yWCwgdGhpcy5ob21lLmRvb3JZLCB0aGlzLmhvbWUuZG9vcldpZHRoLCB0aGlzLmhvbWUuZG9vckhlaWdodClcbiAgICBcbiAgICBpZiAoaGl0KSB7XG4gICAgICBkb2cuY29sb3IgPSBcIiNmZmZmZmZcIlxuICAgICAgY29uc29sZS5sb2coXCJob21lXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gZG9nLmNvbG9yID0gXCIjMDAwMDAwXCJcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IGhvbWVcIilcbiAgICB9XG4gICAgLy8gcmVjdChzeCwgc3ksIHN3LCBzaCk7XG4gIH1cblxuXG4gIG1ha2VEb2dzKGRvZ0NvdW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2dDb3VudDsgaSsrKSB7XG4gICAgICBpZiAoIGkgPCAyICkge1xuICAgICAgICBsZXQgZG9nID0gbmV3IERvZyh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDAsIDAsIDUgKiBNYXRoLnJhbmRvbSgpLCA1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGRvZy5jb2xvciA9IFwiIzgwMzgwOVwiO1xuICAgICAgICBkb2cucmFkaXVzID0gNztcbiAgICAgICAgdGhpcy5kb2dzLnB1c2goZG9nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkb2cgPSBuZXcgRG9nKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMCwgMCwgNSAqIE1hdGgucmFuZG9tKCksIDUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5kb2dzLnB1c2goZG9nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlKGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9ncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHhEaXN0YW5jZSA9IHRoaXMuZG9nc1tpXS54IC0gdGhpcy5mb3JjZUZpZWxkLm1vdXNlWDtcbiAgICAgIHZhciB5RGlzdGFuY2UgPSB0aGlzLmRvZ3NbaV0ueSAtIHRoaXMuZm9yY2VGaWVsZC5tb3VzZVk7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeERpc3RhbmNlICogeERpc3RhbmNlICsgeURpc3RhbmNlICogeURpc3RhbmNlKTtcblxuICAgICAgaWYgKCh0aGlzLmludGVyc2VjdCh0aGlzLmZvcmNlRmllbGQubW91c2VYLCB0aGlzLmZvcmNlRmllbGQubW91c2VZLCA1MCwgdGhpcy5kb2dzW2ldLngsIHRoaXMuZG9nc1tpXS55LCB0aGlzLmRvZ3NbaV0ucmFkaXVzKSkpIHtcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih5RGlzdGFuY2UsIHhEaXN0YW5jZSk7XG4gICAgICAgIGNvbnN0IG5ld1ggPSB0aGlzLmRvZ3NbaV0ueCArIE1hdGguY29zKGFuZ2xlKSAqIGRpc3RhbmNlO1xuICAgICAgICBjb25zdCBuZXdZID0gdGhpcy5kb2dzW2ldLnkgKyBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICAgICAgaWYgKCF0aGlzLndhbGxDb2xsaXNpb24obmV3WCwgbmV3WSwgdGhpcy5kb2dzW2ldKSkge1xuICAgICAgICAgICAgICB0aGlzLmRvZ3NbaV0ueCA9IG5ld1g7XG4gICAgICAgICAgICAgIHRoaXMuZG9nc1tpXS55ID0gbmV3WTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRpbWVyKCkge1xuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKHRoaXMuY2FudmFzLCAxMDAwKVxuICAgIHRoaXMudGltZSsrXG4gICAgaWYgKHRoaXMuc2NvcmUgPT09IDIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgfVxuICB9XG5cbiAgZHJhd1RpbWVyKCkge1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRpbWU6IFwiICsgdGhpcy50aW1lLCA4LCAyMCk7XG4gIH1cblxuXG4gIGdhbWUoKSB7XG4gICAgdGhpcy5kb2dzLmZvckVhY2goKGRvZykgPT4ge1xuICAgICAgLy8gZG9nLm1vdmVSYW5kb20oKTtcbiAgICAgIHRoaXMuZG9vckNvbGxpc2lvbihkb2cpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICB0aGlzLmRvZ3MuZm9yRWFjaCgoZG9nKSA9PiB7XG4gICAgICBkb2cuZHJhdygpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuZm9yY2VGaWVsZC51cGRhdGUoKTtcbiAgICB0aGlzLmhvbWUuZHJhdygpO1xuICAgIHRoaXMuZHJhd1RpbWVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lLmJpbmQodGhpcykpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9