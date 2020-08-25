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
    this.isCollidingWithForceField = false; // another instance variable can keep track if its a stray or not eh boolean
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

    this.ctx = ctx;
    this.canvas = canvas;
    this.dogs = [];
    this.makeDogs(10);
    this.forceField = new _force_field__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.canvas);
    this.home = new _home__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, this.canvas);
    this.score = 0;
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
    } // doorCollision(dog) {
    //   if (dog.x + dog.vx > this.home.doorWidth - dog.radius && dog.x + dog.vx < dog.radius) {
    //     dog.vx = -dog.vx;
    //     this.score++
    //     // dog.x = 0
    //     // dog.y = 0
    //     return true;
    //   } 
    //   if (dog.y + dog.vy < dog.radius && dog.y + dog.vy > this.home.doorHeight - dog.radius) {
    //     dog.radius = 20;
    //     this.score++
    //     // dog.x = 0
    //     // dog.y = 0
    //     return true;
    //   }
    //   return false;
    // }

  }, {
    key: "circleRect",
    value: function circleRect(cx, cy, r, sx, sy, sw, sh) {
      var textX = cx;
      var testY = cy; // which edge is closest?

      if (cx < rx) testX = rx; // test left edge
      else if (cx > rx + rw) testX = rx + rw; // right edge

      if (cy < ry) testY = ry; // top edge
      else if (cy > ry + rh) testY = ry + rh; // bottom edge
      // get distance from closest edges

      var distX = cx - testX;
      var distY = cy - testY;
      var distance = sqrt(distX * distX + distY * distY); // if the distance is less than the radius, collision!

      if (distance <= radius) {
        this.score++;
        return true;
      }

      return false;
    }
  }, {
    key: "doorCollision",
    value: function doorCollision(dog) {
      var hit = this.circleRect(this.forceField.mouseX, this.forceField.mouseY, 50, 298, 190, 15, 20);

      if (hit) {
        dog.fill(255, 150, 0);
      } else {
        dog.forceField.fill(0, 150, 255);
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
          // if (!this.wallCollision(this.dogs[i])) {
          var angle = Math.atan2(yDistance, xDistance);
          var newX = this.dogs[i].x + Math.cos(angle) * distance;
          var newY = this.dogs[i].y + Math.sin(angle) * distance;

          if (!this.wallCollision(newX, newY, this.dogs[i])) {
            this.dogs[i].x = newX;
            this.dogs[i].y = newY;
          } // }
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
    value: function game() {
      this.dogs.forEach(function (dog) {// dog.moveRandom();
        // this.doorCollision(dog);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJNYWluIiwicnVuIiwiRG9nIiwieCIsInkiLCJ2eCIsInZ5IiwicmFkaXVzIiwiY29sb3IiLCJyYW5kb21Qb3MiLCJpc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkIiwid2lkdGgiLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0IiwibWF4WCIsIm1heFkiLCJudW1Eb2dzIiwidGFyZ2V0RG9nQXJlYSIsInRhcmdldFJhZGl1cyIsInNxcnQiLCJQSSIsImRvZ1NoYWtlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsIkZvcmNlRmllbGQiLCJjYW52YXNQb3MiLCJnZXRQb3NpdGlvbiIsIm1vdXNlWCIsIm1vdXNlWSIsInNldE1vdXNlUG9zaXRpb24iLCJiaW5kIiwiaXNDb2xsaWRpbmciLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvZmZzZXRQYXJlbnQiLCJIb21lIiwiZG9vcldpZHRoIiwiZG9vckhlaWdodCIsImZpbGxSZWN0IiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZHJhd0Rvb3IiLCJkb2dzIiwibWFrZURvZ3MiLCJmb3JjZUZpZWxkIiwiaG9tZSIsInNjb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ4MSIsInkxIiwicjEiLCJ4MiIsInkyIiwicjIiLCJjaXJjRGlzdGFuY2UiLCJuZXdYIiwibmV3WSIsImRvZyIsInBhZGRpbmciLCJjeCIsImN5IiwiciIsInN4Iiwic3kiLCJzdyIsInNoIiwidGV4dFgiLCJ0ZXN0WSIsInJ4IiwidGVzdFgiLCJydyIsInJ5IiwicmgiLCJkaXN0WCIsImRpc3RZIiwiZGlzdGFuY2UiLCJoaXQiLCJjaXJjbGVSZWN0IiwiZG9nQ291bnQiLCJpIiwicHVzaCIsImxlbmd0aCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImludGVyc2VjdCIsImFuZ2xlIiwiYXRhbjIiLCJjb3MiLCJzaW4iLCJ3YWxsQ29sbGlzaW9uIiwiZm9udCIsImZpbGxUZXh0IiwiZm9yRWFjaCIsImRyYXciLCJkcmF3U2NvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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LEdBQUwsQ0FBUzhHLFFBQVQsQ0FBa0IsWUFBWSxLQUFLOUMsS0FBbkMsRUFBMEMsQ0FBMUMsRUFBNkMsRUFBN0M7QUFDRDs7OzJCQUdNO0FBQ0wsV0FBS0osSUFBTCxDQUFVbUQsT0FBVixDQUFrQixVQUFDbkMsR0FBRCxFQUFTLENBQ3pCO0FBQ0E7QUFDRCxPQUhEO0FBS0EsV0FBSzVFLEdBQUwsQ0FBU3lDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzVDLE1BQUwsQ0FBWWlCLEtBQXJDLEVBQTRDLEtBQUtqQixNQUFMLENBQVlvQixNQUF4RDtBQUVBLFdBQUsyQyxJQUFMLENBQVVtRCxPQUFWLENBQWtCLFVBQUNuQyxHQUFELEVBQVM7QUFDekJBLFdBQUcsQ0FBQ29DLElBQUo7QUFDRCxPQUZEO0FBSUEsV0FBS2xELFVBQUwsQ0FBZ0JwQixNQUFoQjtBQUNBLFdBQUtxQixJQUFMLENBQVVpRCxJQUFWO0FBQ0EsV0FBS0MsU0FBTDtBQUNBQywyQkFBcUIsQ0FBQyxLQUFLaEgsSUFBTCxDQUFVa0MsSUFBVixDQUFlLElBQWYsQ0FBRCxDQUFyQjtBQUNBLFdBQUsrRSxJQUFMO0FBQ0Q7OzswQkFFSztBQUNKRCwyQkFBcUIsQ0FBQyxLQUFLaEgsSUFBTCxDQUFVa0MsSUFBVixDQUFlLElBQWYsQ0FBRCxDQUFyQjtBQUNEOzs7Ozs7QUFJWWpDLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDMUtBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBGb3JjZUZpZWxkIGZyb20gXCIuL3NjcmlwdHMvZm9yY2VfZmllbGRcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL3NjcmlwdHMvbWFpblwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgTWFpbihjdHgsIGNhbnZhcyk7XG5nYW1lLnJ1bigpO1xuXG5cblxuLy8gY29uc3QgZm9yY2VGaWVsZCA9IG5ldyBGb3JjZUZpZWxkKGN0eCk7XG5cbiIsImNsYXNzIERvZyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIHZ4LCB2eSkge1xuICAgICAgICAvLyB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICAvLyB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLnZ4ID0gdng7XG4gICAgICAgIHRoaXMudnkgPSB2eTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjYzdjMmJmXCI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnJhbmRvbVBvcygpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkID0gZmFsc2U7XG4gICAgICAgIC8vIGFub3RoZXIgaW5zdGFuY2UgdmFyaWFibGUgY2FuIGtlZXAgdHJhY2sgaWYgaXRzIGEgc3RyYXkgb3Igbm90IGVoIGJvb2xlYW5cbiAgICAgICAgLy8gd2hpY2ggZmVlZHMgaW50byB0aGUgd2luL2xvc2UgTWFpbi5qcyB0byBjaGVjayBpZiB0aGF0IGlzIHRoZSB0YXJnZXRcbn1cblxuICAgIHJhbmRvbVBvcygpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpO1xuICAgIH1cblxuICAgIHJhZGl1cyhtYXhYLCBtYXhZLCBudW1Eb2dzKSB7XG4gICAgICAgIGxldCB0YXJnZXREb2dBcmVhID0gKG1heFggKiBtYXhZKSAvIG51bURvZ3M7XG4gICAgICAgIGxldCB0YXJnZXRSYWRpdXMgPSBNYXRoLnNxcnQodGFyZ2V0RG9nQXJlYSAvIE1hdGguUEkpO1xuICAgICAgICByZXR1cm4gMiAqIHRhcmdldFJhZGl1cztcbiAgICB9O1xuXG4gICAgbW92ZVJhbmRvbSgpIHtcbiAgICAgICAgbGV0IGRvZ1NoYWtlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZG9nU2hha2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMudnggKz0gNTtcbiAgICAgICAgICAgIHRoaXMudnkgKz0gNTtcbiAgICAgICAgICAgIGRvZ1NoYWtlID0gZmFsc2U7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52eCAtPSA1O1xuICAgICAgICAgICAgdGhpcy52eSAtPSA1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvZzsiLCJjbGFzcyBGb3JjZUZpZWxkIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzUG9zID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMubW91c2VYID0gMDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwO1xuICAgICAgICB0aGlzLnNldE1vdXNlUG9zaXRpb24gPSB0aGlzLnNldE1vdXNlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUG9zLng7XG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZIC0gdGhpcy5jYW52YXNQb3MueTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBnZXRQb3NpdGlvbihjYW52YXMpIHtcbiAgICAgIGxldCB4UG9zaXRpb24gPSAwO1xuICAgICAgbGV0IHlQb3NpdGlvbiA9IDA7XG4gICAgXG4gICAgICB3aGlsZSAoY2FudmFzKSB7XG4gICAgICAgIHhQb3NpdGlvbiArPSBjYW52YXMub2Zmc2V0TGVmdCAtIGNhbnZhcy5zY3JvbGxMZWZ0ICsgY2FudmFzLmNsaWVudExlZnQ7XG4gICAgICAgIHlQb3NpdGlvbiArPSBjYW52YXMub2Zmc2V0VG9wIC0gY2FudmFzLnNjcm9sbFRvcCArIGNhbnZhcy5jbGllbnRUb3A7XG4gICAgICAgIGNhbnZhcyA9IGNhbnZhcy5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhQb3NpdGlvbixcbiAgICAgICAgeTogeVBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMubW91c2VYLCB0aGlzLm1vdXNlWSwgNTAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yY2VGaWVsZDtcblxuIiwiY2xhc3MgSG9tZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRvb3JXaWR0aCA9IDE1O1xuICAgICAgICB0aGlzLmRvb3JIZWlnaHQgPSAyMDtcbiAgICB9XG5cbiAgICBkcmF3RG9vcigpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjNzU0NzE5XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDI5OCwgMTkwLCB0aGlzLmRvb3JXaWR0aCwgdGhpcy5kb29ySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmN2EwNjVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjgwLCAxODAsIDUwLCAzMCk7XG5cbiAgICAgICAgLy8gRHJhdyB0cmlhbmdsZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmNzUzNDhcIjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNzAsIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygzNDAsIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMDUsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgLy9kb29yXG4gICAgICAgIHRoaXMuZHJhd0Rvb3IoKTtcblxuICAgICAgICAvL3Bhd3NcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk5LCAyMjAsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTYuNiwgMjE2LjUsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDAsIDIxNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwMi43LCAyMTgsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDcsIDIxNC40LCAxLjgsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDUuMywgMjEwLjgsIDAuOCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwOC41LCAyMTAuNiwgMC44LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzEwLjYsIDIxMi43LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk3LCAyMzAsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTUuNCwgMjI2LjIsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTguOCwgMjI2LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzAwLjcsIDIyOC42LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg2LCAyMzQsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyODQuNCwgMjMwLjIsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyODcuOCwgMjMwLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg5LjcsIDIzMi42LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IERvZyBmcm9tIFwiLi9kb2dzXCI7XG5pbXBvcnQgRm9yY2VGaWVsZCBmcm9tIFwiLi9mb3JjZV9maWVsZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiXG5cbmNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZG9ncyA9IFtdO1xuICAgIHRoaXMubWFrZURvZ3MoMTApO1xuICAgIHRoaXMuZm9yY2VGaWVsZCA9IG5ldyBGb3JjZUZpZWxkKHRoaXMuY3R4LCB0aGlzLmNhbnZhcylcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh0aGlzLmN0eCwgdGhpcy5jYW52YXMpXG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihlKSB7XG4gICAgdGhpcy5mb3JjZUZpZWxkLnNldE1vdXNlUG9zaXRpb24oZSlcbiAgfVxuXG4gIGludGVyc2VjdCh4MSwgeTEsIHIxLCB4MiwgeTIsIHIyKSB7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gY2lyY2xlc1xuICAgIGxldCBjaXJjRGlzdGFuY2UgPSAoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5Mik7XG5cbiAgICAvLyBXaGVuIHRoZSBkaXN0YW5jZSBpcyBzbWFsbGVyIG9yIGVxdWFsIHRvIHRoZSBzdW1cbiAgICAvLyBvZiB0aGUgdHdvIHJhZGl1cywgdGhlIGNpcmNsZXMgdG91Y2ggb3Igb3ZlcmxhcFxuICAgIHJldHVybiBjaXJjRGlzdGFuY2UgPD0gKChyMSArIHIyKSAqIChyMSArIHIyKSkgKyA1O1xuICB9XG4gIFxuICB3YWxsQ29sbGlzaW9uKG5ld1gsIG5ld1ksIGRvZykge1xuICAgIGNvbnN0IHBhZGRpbmcgPSAwO1xuXG4gICAgaWYgKG5ld1ggKyBkb2cucmFkaXVzID4gdGhpcy5jYW52YXMud2lkdGggLSBwYWRkaW5nIHx8IG5ld1ggPCBkb2cucmFkaXVzICsgcGFkZGluZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgXG4gICAgaWYgKG5ld1kgKyBkb2cucmFkaXVzID4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gcGFkZGluZyB8fCBuZXdZIDwgZG9nLnJhZGl1cyArIHBhZGRpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGRvb3JDb2xsaXNpb24oZG9nKSB7XG4gIC8vICAgaWYgKGRvZy54ICsgZG9nLnZ4ID4gdGhpcy5ob21lLmRvb3JXaWR0aCAtIGRvZy5yYWRpdXMgJiYgZG9nLnggKyBkb2cudnggPCBkb2cucmFkaXVzKSB7XG4gIC8vICAgICBkb2cudnggPSAtZG9nLnZ4O1xuICAvLyAgICAgdGhpcy5zY29yZSsrXG4gIC8vICAgICAvLyBkb2cueCA9IDBcbiAgLy8gICAgIC8vIGRvZy55ID0gMFxuICAvLyAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgfSBcbiAgXG4gIC8vICAgaWYgKGRvZy55ICsgZG9nLnZ5IDwgZG9nLnJhZGl1cyAmJiBkb2cueSArIGRvZy52eSA+IHRoaXMuaG9tZS5kb29ySGVpZ2h0IC0gZG9nLnJhZGl1cykge1xuICAgIC8vICAgICBkb2cucmFkaXVzID0gMjA7XG4gICAgLy8gICAgIHRoaXMuc2NvcmUrK1xuICAgIC8vICAgICAvLyBkb2cueCA9IDBcbiAgICAvLyAgICAgLy8gZG9nLnkgPSAwXG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgfVxuICAgIFxuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH1cbiAgICBcbiAgICBjaXJjbGVSZWN0KGN4LCBjeSwgciwgc3gsIHN5LCBzdywgc2gpIHtcbiAgICAgIGxldCB0ZXh0WCA9IGN4O1xuICAgICAgbGV0IHRlc3RZID0gY3k7XG4gIFxuICAgICAgLy8gd2hpY2ggZWRnZSBpcyBjbG9zZXN0P1xuICAgICAgaWYgKGN4IDwgcngpIHRlc3RYID0gcng7ICAgICAgLy8gdGVzdCBsZWZ0IGVkZ2VcbiAgICAgIGVsc2UgaWYgKGN4ID4gcnggKyBydykgdGVzdFggPSByeCArIHJ3OyAgIC8vIHJpZ2h0IGVkZ2VcbiAgICAgIGlmIChjeSA8IHJ5KSB0ZXN0WSA9IHJ5OyAgICAgIC8vIHRvcCBlZGdlXG4gICAgICBlbHNlIGlmIChjeSA+IHJ5ICsgcmgpIHRlc3RZID0gcnkgKyByaDsgICAvLyBib3R0b20gZWRnZVxuICBcbiAgICAgIC8vIGdldCBkaXN0YW5jZSBmcm9tIGNsb3Nlc3QgZWRnZXNcbiAgICAgIGxldCBkaXN0WCA9IGN4IC0gdGVzdFg7XG4gICAgICBsZXQgZGlzdFkgPSBjeSAtIHRlc3RZO1xuICAgICAgbGV0IGRpc3RhbmNlID0gc3FydCgoZGlzdFggKiBkaXN0WCkgKyAoZGlzdFkgKiBkaXN0WSkpO1xuICBcbiAgICAgIC8vIGlmIHRoZSBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gdGhlIHJhZGl1cywgY29sbGlzaW9uIVxuICAgICAgaWYgKGRpc3RhbmNlIDw9IHJhZGl1cykge1xuICAgICAgICB0aGlzLnNjb3JlKytcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIGRvb3JDb2xsaXNpb24oZG9nKSB7XG4gICAgbGV0IGhpdCA9IHRoaXMuY2lyY2xlUmVjdCh0aGlzLmZvcmNlRmllbGQubW91c2VYLCB0aGlzLmZvcmNlRmllbGQubW91c2VZLCA1MCwgMjk4LCAxOTAsIDE1LCAyMClcbiAgICBcbiAgICBpZiAoaGl0KSB7XG4gICAgICBkb2cuZmlsbCgyNTUsIDE1MCwgMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZG9nLmZvcmNlRmllbGQuZmlsbCgwLCAxNTAsIDI1NSk7XG4gICAgfVxuICAgIC8vIHJlY3Qoc3gsIHN5LCBzdywgc2gpO1xuICB9XG5cblxuICBtYWtlRG9ncyhkb2dDb3VudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9nQ291bnQ7IGkrKykge1xuICAgICAgaWYgKCBpIDwgMiApIHtcbiAgICAgICAgbGV0IGRvZyA9IG5ldyBEb2codGhpcy5jYW52YXMsIHRoaXMuY3R4LCAwLCAwLCA1ICogTWF0aC5yYW5kb20oKSwgNSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBkb2cuY29sb3IgPSBcIiM4MDM4MDlcIjtcbiAgICAgICAgZG9nLnJhZGl1cyA9IDc7XG4gICAgICAgIHRoaXMuZG9ncy5wdXNoKGRvZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZG9nID0gbmV3IERvZyh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDAsIDAsIDUgKiBNYXRoLnJhbmRvbSgpLCA1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuZG9ncy5wdXNoKGRvZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZShlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHhEaXN0YW5jZSA9IHRoaXMuZG9nc1tpXS54IC0gdGhpcy5mb3JjZUZpZWxkLm1vdXNlWDtcbiAgICB2YXIgeURpc3RhbmNlID0gdGhpcy5kb2dzW2ldLnkgLSB0aGlzLmZvcmNlRmllbGQubW91c2VZO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCh4RGlzdGFuY2UgKiB4RGlzdGFuY2UgKyB5RGlzdGFuY2UgKiB5RGlzdGFuY2UpO1xuXG4gICAgaWYgKCh0aGlzLmludGVyc2VjdCh0aGlzLmZvcmNlRmllbGQubW91c2VYLCB0aGlzLmZvcmNlRmllbGQubW91c2VZLCA1MCwgdGhpcy5kb2dzW2ldLngsIHRoaXMuZG9nc1tpXS55LCB0aGlzLmRvZ3NbaV0ucmFkaXVzKSkpIHtcbiAgICAgIC8vIGlmICghdGhpcy53YWxsQ29sbGlzaW9uKHRoaXMuZG9nc1tpXSkpIHtcbiAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHlEaXN0YW5jZSwgeERpc3RhbmNlKTtcbiAgICAgICAgICBjb25zdCBuZXdYID0gdGhpcy5kb2dzW2ldLnggKyBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICAgICAgICBjb25zdCBuZXdZID0gdGhpcy5kb2dzW2ldLnkgKyBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZTtcbiAgICAgIGlmICghdGhpcy53YWxsQ29sbGlzaW9uKG5ld1gsIG5ld1ksIHRoaXMuZG9nc1tpXSkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9nc1tpXS54ID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMuZG9nc1tpXS55ID0gbmV3WTtcbiAgICAgICAgICB9XG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5kb2dzW2ldLnggPSB0aGlzLmRvZ3NbaV0ueFxuICAgICAgLy8gICB0aGlzLmRvZ3NbaV0ueSA9IHRoaXMuZG9nc1tpXS55XG4gICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd1Njb3JlKCkge1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIDgsIDIwKTtcbiAgfVxuXG5cbiAgZ2FtZSgpIHtcbiAgICB0aGlzLmRvZ3MuZm9yRWFjaCgoZG9nKSA9PiB7XG4gICAgICAvLyBkb2cubW92ZVJhbmRvbSgpO1xuICAgICAgLy8gdGhpcy5kb29yQ29sbGlzaW9uKGRvZyk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIFxuICAgIHRoaXMuZG9ncy5mb3JFYWNoKChkb2cpID0+IHtcbiAgICAgIGRvZy5kcmF3KCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5mb3JjZUZpZWxkLnVwZGF0ZSgpO1xuICAgIHRoaXMuaG9tZS5kcmF3KCk7XG4gICAgdGhpcy5kcmF3U2NvcmUoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lLmJpbmQodGhpcykpO1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWUuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=