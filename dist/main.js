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
    value: function circleRect(cx, cy, r, rx, ry, rw, rh, dog) {
      var newX = cx;
      var newY = cy; // which edge is closest?

      if (cx < rx) {
        // left edge
        newX = rx;
      } else if (cx > rx + rw) {
        // right edge
        newX = rx + rw;
      }

      if (cy < ry) {
        // top edge
        newY = ry;
      } else if (cy > ry + rh) {
        // bottom edge
        newY = ry + rh;
      } // get distance from closest edges


      var distX = cx - newX;
      var distY = cy - newY;
      var distance = Math.sqrt(distX * distX + distY * distY); // if the distance is less than the radius, collision!

      if (distance <= r) {
        if (dog.color === "#803809" && dog.isHome === false) dog.isHome = true;
        this.score++;
        return true;
      }

      return false;
    } // change dogs to transprent
    // add alert to signify win // separate function to check win
    // change score to timer 
    // modal 

  }, {
    key: "doorCollision",
    value: function doorCollision(dog) {
      var hit = this.circleRect(dog.x, dog.y, dog.radius, this.home.doorX, this.home.doorY, this.home.doorWidth, this.home.doorHeight);

      if (hit) {
        dog.color = "#000000";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJNYWluIiwicnVuIiwiRG9nIiwieCIsInkiLCJ2eCIsInZ5IiwicmFkaXVzIiwiY29sb3IiLCJyYW5kb21Qb3MiLCJpc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkIiwiaXNIb21lIiwid2lkdGgiLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0IiwibWF4WCIsIm1heFkiLCJudW1Eb2dzIiwidGFyZ2V0RG9nQXJlYSIsInRhcmdldFJhZGl1cyIsInNxcnQiLCJQSSIsImRvZ1NoYWtlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsIkZvcmNlRmllbGQiLCJjYW52YXNQb3MiLCJnZXRQb3NpdGlvbiIsIm1vdXNlWCIsIm1vdXNlWSIsInNldE1vdXNlUG9zaXRpb24iLCJiaW5kIiwiaXNDb2xsaWRpbmciLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvZmZzZXRQYXJlbnQiLCJIb21lIiwiZG9vclgiLCJkb29yWSIsImRvb3JXaWR0aCIsImRvb3JIZWlnaHQiLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImRyYXdEb29yIiwiZG9ncyIsIm1ha2VEb2dzIiwiZm9yY2VGaWVsZCIsImhvbWUiLCJzY29yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwieDEiLCJ5MSIsInIxIiwieDIiLCJ5MiIsInIyIiwiY2lyY0Rpc3RhbmNlIiwibmV3WCIsIm5ld1kiLCJkb2ciLCJwYWRkaW5nIiwiY3giLCJjeSIsInIiLCJyeCIsInJ5IiwicnciLCJyaCIsImRpc3RYIiwiZGlzdFkiLCJkaXN0YW5jZSIsImhpdCIsImNpcmNsZVJlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9nQ291bnQiLCJpIiwicHVzaCIsImxlbmd0aCIsInhEaXN0YW5jZSIsInlEaXN0YW5jZSIsImludGVyc2VjdCIsImFuZ2xlIiwiYXRhbjIiLCJjb3MiLCJzaW4iLCJ3YWxsQ29sbGlzaW9uIiwiZm9udCIsImZpbGxUZXh0IiwiZm9yRWFjaCIsImRvb3JDb2xsaXNpb24iLCJkcmF3IiwiZHJhd1Njb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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SUFBTCxDQUFVbUMsSUFBVixDQUFlLElBQWYsQ0FBRCxDQUFyQjtBQUNEOzs7Ozs7QUFJWWxDLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUxBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBGb3JjZUZpZWxkIGZyb20gXCIuL3NjcmlwdHMvZm9yY2VfZmllbGRcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL3NjcmlwdHMvbWFpblwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgTWFpbihjdHgsIGNhbnZhcyk7XG5nYW1lLnJ1bigpO1xuXG4iLCJjbGFzcyBEb2cge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCB2eCwgdnkpIHtcbiAgICAgICAgLy8gdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgLy8gdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI2M3YzJiZlwiO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5yYW5kb21Qb3MoKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmdXaXRoRm9yY2VGaWVsZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSG9tZSA9IGZhbHNlO1xuICAgICAgICAvLyBhbm90aGVyIGluc3RhbmNlIHZhcmlhYmxlIGNhbiBrZWVwIHRyYWNrIGlmIGl0cyBhIHN0cmF5IG9yIG5vdCBlaCBib29sZWFuXG4gICAgICAgIC8vIHdoaWNoIGZlZWRzIGludG8gdGhlIHdpbi9sb3NlIE1haW4uanMgdG8gY2hlY2sgaWYgdGhhdCBpcyB0aGUgdGFyZ2V0XG59XG5cbiAgICByYW5kb21Qb3MoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKTtcbiAgICB9XG5cbiAgICByYWRpdXMobWF4WCwgbWF4WSwgbnVtRG9ncykge1xuICAgICAgICBsZXQgdGFyZ2V0RG9nQXJlYSA9IChtYXhYICogbWF4WSkgLyBudW1Eb2dzO1xuICAgICAgICBsZXQgdGFyZ2V0UmFkaXVzID0gTWF0aC5zcXJ0KHRhcmdldERvZ0FyZWEgLyBNYXRoLlBJKTtcbiAgICAgICAgcmV0dXJuIDIgKiB0YXJnZXRSYWRpdXM7XG4gICAgfTtcblxuICAgIG1vdmVSYW5kb20oKSB7XG4gICAgICAgIGxldCBkb2dTaGFrZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRvZ1NoYWtlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnZ4ICs9IDU7XG4gICAgICAgICAgICB0aGlzLnZ5ICs9IDU7XG4gICAgICAgICAgICBkb2dTaGFrZSA9IGZhbHNlOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudnggLT0gNTtcbiAgICAgICAgICAgIHRoaXMudnkgLT0gNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2c7IiwiY2xhc3MgRm9yY2VGaWVsZCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLm1vdXNlWCA9IDA7XG4gICAgICAgIHRoaXMubW91c2VZID0gMDtcbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uID0gdGhpcy5zZXRNb3VzZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRNb3VzZVBvc2l0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZVggPSBlLmNsaWVudFggLSB0aGlzLmNhbnZhc1Bvcy54O1xuICAgICAgICB0aGlzLm1vdXNlWSA9IGUuY2xpZW50WSAtIHRoaXMuY2FudmFzUG9zLnk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UG9zaXRpb24oY2FudmFzKSB7XG4gICAgICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgICAgIGxldCB5UG9zaXRpb24gPSAwO1xuICAgIFxuICAgICAgd2hpbGUgKGNhbnZhcykge1xuICAgICAgICB4UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldExlZnQgLSBjYW52YXMuc2Nyb2xsTGVmdCArIGNhbnZhcy5jbGllbnRMZWZ0O1xuICAgICAgICB5UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldFRvcCAtIGNhbnZhcy5zY3JvbGxUb3AgKyBjYW52YXMuY2xpZW50VG9wO1xuICAgICAgICBjYW52YXMgPSBjYW52YXMub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB4UG9zaXRpb24sXG4gICAgICAgIHk6IHlQb3NpdGlvbixcbiAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm1vdXNlWCwgdGhpcy5tb3VzZVksIDUwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmNlRmllbGQ7XG5cbiIsImNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kb29yWCA9IDI5ODtcbiAgICAgICAgdGhpcy5kb29yWSA9IDE5MDtcbiAgICAgICAgdGhpcy5kb29yV2lkdGggPSAxNTtcbiAgICAgICAgdGhpcy5kb29ySGVpZ2h0ID0gMjA7XG4gICAgfVxuXG4gICAgZHJhd0Rvb3IoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzc1NDcxOVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLmRvb3JYLCB0aGlzLmRvb3JZLCB0aGlzLmRvb3JXaWR0aCwgdGhpcy5kb29ySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmN2EwNjVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjgwLCAxODAsIDUwLCAzMCk7XG5cbiAgICAgICAgLy8gRHJhdyB0cmlhbmdsZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmNzUzNDhcIjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNzAsIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygzNDAsIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMDUsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgLy9kb29yXG4gICAgICAgIHRoaXMuZHJhd0Rvb3IoKTtcblxuICAgICAgICAvL3Bhd3NcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk5LCAyMjAsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTYuNiwgMjE2LjUsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDAsIDIxNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwMi43LCAyMTgsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAvL1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDcsIDIxNC40LCAxLjgsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDUuMywgMjEwLjgsIDAuOCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwOC41LCAyMTAuNiwgMC44LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzEwLjYsIDIxMi43LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk3LCAyMzAsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTUuNCwgMjI2LjIsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyOTguOCwgMjI2LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzAwLjcsIDIyOC42LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg2LCAyMzQsIDIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyODQuNCwgMjMwLjIsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygyODcuOCwgMjMwLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg5LjcsIDIzMi42LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IERvZyBmcm9tIFwiLi9kb2dzXCI7XG5pbXBvcnQgRm9yY2VGaWVsZCBmcm9tIFwiLi9mb3JjZV9maWVsZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiXG5cbmNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuZG9ncyA9IFtdO1xuICAgIHRoaXMubWFrZURvZ3MoMTApO1xuICAgIHRoaXMuZm9yY2VGaWVsZCA9IG5ldyBGb3JjZUZpZWxkKHRoaXMuY3R4LCB0aGlzLmNhbnZhcylcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh0aGlzLmN0eCwgdGhpcy5jYW52YXMpXG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihlKSB7XG4gICAgdGhpcy5mb3JjZUZpZWxkLnNldE1vdXNlUG9zaXRpb24oZSlcbiAgfVxuXG4gIGludGVyc2VjdCh4MSwgeTEsIHIxLCB4MiwgeTIsIHIyKSB7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gY2lyY2xlc1xuICAgIGxldCBjaXJjRGlzdGFuY2UgPSAoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5Mik7XG5cbiAgICAvLyBXaGVuIHRoZSBkaXN0YW5jZSBpcyBzbWFsbGVyIG9yIGVxdWFsIHRvIHRoZSBzdW1cbiAgICAvLyBvZiB0aGUgdHdvIHJhZGl1cywgdGhlIGNpcmNsZXMgdG91Y2ggb3Igb3ZlcmxhcFxuICAgIHJldHVybiBjaXJjRGlzdGFuY2UgPD0gKChyMSArIHIyKSAqIChyMSArIHIyKSkgKyA1O1xuICB9XG4gIFxuICB3YWxsQ29sbGlzaW9uKG5ld1gsIG5ld1ksIGRvZykge1xuICAgIGNvbnN0IHBhZGRpbmcgPSAwO1xuXG4gICAgaWYgKG5ld1ggKyBkb2cucmFkaXVzID4gdGhpcy5jYW52YXMud2lkdGggLSBwYWRkaW5nIHx8IG5ld1ggPCBkb2cucmFkaXVzICsgcGFkZGluZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgXG4gICAgaWYgKG5ld1kgKyBkb2cucmFkaXVzID4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gcGFkZGluZyB8fCBuZXdZIDwgZG9nLnJhZGl1cyArIHBhZGRpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGRvb3JDb2xsaXNpb24oZG9nKSB7XG4gIC8vICAgaWYgKGRvZy54ICsgZG9nLnZ4ID4gdGhpcy5ob21lLmRvb3JXaWR0aCAtIGRvZy5yYWRpdXMgJiYgZG9nLnggKyBkb2cudnggPCBkb2cucmFkaXVzKSB7XG4gIC8vICAgICBkb2cudnggPSAtZG9nLnZ4O1xuICAvLyAgICAgdGhpcy5zY29yZSsrXG4gIC8vICAgICAvLyBkb2cueCA9IDBcbiAgLy8gICAgIC8vIGRvZy55ID0gMFxuICAvLyAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgfSBcbiAgXG4gIC8vICAgaWYgKGRvZy55ICsgZG9nLnZ5IDwgZG9nLnJhZGl1cyAmJiBkb2cueSArIGRvZy52eSA+IHRoaXMuaG9tZS5kb29ySGVpZ2h0IC0gZG9nLnJhZGl1cykge1xuICAgIC8vICAgICBkb2cucmFkaXVzID0gMjA7XG4gICAgLy8gICAgIHRoaXMuc2NvcmUrK1xuICAgIC8vICAgICAvLyBkb2cueCA9IDBcbiAgICAvLyAgICAgLy8gZG9nLnkgPSAwXG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgfVxuICAgIFxuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH1cbiAgICBcbiAgICBjaXJjbGVSZWN0KGN4LCBjeSwgciwgcngsIHJ5LCBydywgcmgsIGRvZykge1xuICAgICAgbGV0IG5ld1ggPSBjeDtcbiAgICAgIGxldCBuZXdZID0gY3k7XG4gIFxuICAgICAgLy8gd2hpY2ggZWRnZSBpcyBjbG9zZXN0P1xuICAgICAgaWYgKGN4IDwgcngpIHsgLy8gbGVmdCBlZGdlXG4gICAgICAgIG5ld1ggPSByeDtcbiAgICAgIH0gZWxzZSBpZiAoY3ggPiByeCArIHJ3KSB7IC8vIHJpZ2h0IGVkZ2VcbiAgICAgICAgbmV3WCA9IHJ4ICsgcnc7XG4gICAgICB9ICAgXG5cbiAgICAgIGlmIChjeSA8IHJ5KSB7IC8vIHRvcCBlZGdlXG4gICAgICAgIG5ld1kgPSByeTsgXG4gICAgICB9IGVsc2UgaWYgKGN5ID4gcnkgKyByaCkgeyAvLyBib3R0b20gZWRnZVxuICAgICAgICBuZXdZID0gcnkgKyByaDsgICBcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IGRpc3RhbmNlIGZyb20gY2xvc2VzdCBlZGdlc1xuICAgICAgbGV0IGRpc3RYID0gY3ggLSBuZXdYO1xuICAgICAgbGV0IGRpc3RZID0gY3kgLSBuZXdZO1xuICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChkaXN0WCAqIGRpc3RYKSArIChkaXN0WSAqIGRpc3RZKSk7XG4gIFxuICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGlzIGxlc3MgdGhhbiB0aGUgcmFkaXVzLCBjb2xsaXNpb24hXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gcikge1xuICAgICAgICBpZiAoZG9nLmNvbG9yID09PSBcIiM4MDM4MDlcIiAmJiBkb2cuaXNIb21lID09PSBmYWxzZSlcbiAgICAgICAgICBkb2cuaXNIb21lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNjb3JlKytcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBjaGFuZ2UgZG9ncyB0byB0cmFuc3ByZW50XG4gICAgLy8gYWRkIGFsZXJ0IHRvIHNpZ25pZnkgd2luIC8vIHNlcGFyYXRlIGZ1bmN0aW9uIHRvIGNoZWNrIHdpblxuICAgIC8vIGNoYW5nZSBzY29yZSB0byB0aW1lciBcbiAgICAvLyBtb2RhbCBcblxuXG4gIGRvb3JDb2xsaXNpb24oZG9nKSB7XG4gICAgbGV0IGhpdCA9IHRoaXMuY2lyY2xlUmVjdChkb2cueCwgZG9nLnksIGRvZy5yYWRpdXMsIHRoaXMuaG9tZS5kb29yWCwgdGhpcy5ob21lLmRvb3JZLCB0aGlzLmhvbWUuZG9vcldpZHRoLCB0aGlzLmhvbWUuZG9vckhlaWdodClcbiAgICBcbiAgICBpZiAoaGl0KSB7XG4gICAgICBkb2cuY29sb3IgPSBcIiMwMDAwMDBcIlxuICAgICAgY29uc29sZS5sb2coXCJob21lXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gZG9nLmNvbG9yID0gXCIjMDAwMDAwXCJcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IGhvbWVcIilcbiAgICB9XG4gICAgLy8gcmVjdChzeCwgc3ksIHN3LCBzaCk7XG4gIH1cblxuXG4gIG1ha2VEb2dzKGRvZ0NvdW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2dDb3VudDsgaSsrKSB7XG4gICAgICBpZiAoIGkgPCAyICkge1xuICAgICAgICBsZXQgZG9nID0gbmV3IERvZyh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDAsIDAsIDUgKiBNYXRoLnJhbmRvbSgpLCA1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGRvZy5jb2xvciA9IFwiIzgwMzgwOVwiO1xuICAgICAgICBkb2cucmFkaXVzID0gNztcbiAgICAgICAgdGhpcy5kb2dzLnB1c2goZG9nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkb2cgPSBuZXcgRG9nKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMCwgMCwgNSAqIE1hdGgucmFuZG9tKCksIDUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5kb2dzLnB1c2goZG9nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlKGUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgeERpc3RhbmNlID0gdGhpcy5kb2dzW2ldLnggLSB0aGlzLmZvcmNlRmllbGQubW91c2VYO1xuICAgIHZhciB5RGlzdGFuY2UgPSB0aGlzLmRvZ3NbaV0ueSAtIHRoaXMuZm9yY2VGaWVsZC5tb3VzZVk7XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KHhEaXN0YW5jZSAqIHhEaXN0YW5jZSArIHlEaXN0YW5jZSAqIHlEaXN0YW5jZSk7XG5cbiAgICBpZiAoKHRoaXMuaW50ZXJzZWN0KHRoaXMuZm9yY2VGaWVsZC5tb3VzZVgsIHRoaXMuZm9yY2VGaWVsZC5tb3VzZVksIDUwLCB0aGlzLmRvZ3NbaV0ueCwgdGhpcy5kb2dzW2ldLnksIHRoaXMuZG9nc1tpXS5yYWRpdXMpKSkge1xuICAgICAgLy8gaWYgKCF0aGlzLndhbGxDb2xsaXNpb24odGhpcy5kb2dzW2ldKSkge1xuICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoeURpc3RhbmNlLCB4RGlzdGFuY2UpO1xuICAgICAgICAgIGNvbnN0IG5ld1ggPSB0aGlzLmRvZ3NbaV0ueCArIE1hdGguY29zKGFuZ2xlKSAqIGRpc3RhbmNlO1xuICAgICAgICAgIGNvbnN0IG5ld1kgPSB0aGlzLmRvZ3NbaV0ueSArIE1hdGguc2luKGFuZ2xlKSAqIGRpc3RhbmNlO1xuICAgICAgaWYgKCF0aGlzLndhbGxDb2xsaXNpb24obmV3WCwgbmV3WSwgdGhpcy5kb2dzW2ldKSkge1xuICAgICAgICAgICAgdGhpcy5kb2dzW2ldLnggPSBuZXdYO1xuICAgICAgICAgICAgdGhpcy5kb2dzW2ldLnkgPSBuZXdZO1xuICAgICAgICAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmRvZ3NbaV0ueCA9IHRoaXMuZG9nc1tpXS54XG4gICAgICAvLyAgIHRoaXMuZG9nc1tpXS55ID0gdGhpcy5kb2dzW2ldLnlcbiAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3U2NvcmUoKSB7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgOCwgMjApO1xuICB9XG5cblxuICBnYW1lKCkge1xuICAgIHRoaXMuZG9ncy5mb3JFYWNoKChkb2cpID0+IHtcbiAgICAgIC8vIGRvZy5tb3ZlUmFuZG9tKCk7XG4gICAgICB0aGlzLmRvb3JDb2xsaXNpb24oZG9nKTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgdGhpcy5kb2dzLmZvckVhY2goKGRvZykgPT4ge1xuICAgICAgZG9nLmRyYXcoKTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmZvcmNlRmllbGQudXBkYXRlKCk7XG4gICAgdGhpcy5ob21lLmRyYXcoKTtcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH1cblxuICBydW4oKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==