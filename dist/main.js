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
    key: "detectCollisionsWithForce",
    value: function detectCollisionsWithForce() {
      var obj1 = this.forceField;
      var obj2; // Reset collision state of all objects

      for (var i = 0; i < this.dogs.length; i++) {
        this.dogs[i].isCollidingWithForceField = false;
      } // Start checking for collisions


      for (var _i = 0; _i < this.dogs.length; _i++) {
        obj2 = this.dogs[_i]; // Compare object1 with object2
        // if (this.wallCollision(obj2)) {

        if (this.intersect(obj1.mouseX, obj1.mouseY, 50, obj2.x, obj2.y, obj2.radius)) {
          obj1.isColliding = true;
          obj2.isCollidingWithForceField = true; // obj1.vx = -obj1.vx;
          // obj1.vy = -obj1.vy;
          // obj2.vx = -obj2.vx;
          // obj2.vy = -obj2.vy;
        } // }

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
      // let timeLapsed = (timeStamp - oldTime) / 1000;
      // let oldTime = timeStamp;
      this.dogs.forEach(function (dog) {// dog.moveRandom();
        // this.wallCollision(dog);
        // this.doorCollision(dog);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJNYWluIiwicnVuIiwiRG9nIiwieCIsInkiLCJ2eCIsInZ5IiwicmFkaXVzIiwiY29sb3IiLCJyYW5kb21Qb3MiLCJpc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkIiwid2lkdGgiLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0IiwibWF4WCIsIm1heFkiLCJudW1Eb2dzIiwidGFyZ2V0RG9nQXJlYSIsInRhcmdldFJhZGl1cyIsInNxcnQiLCJQSSIsImRvZ1NoYWtlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsIkZvcmNlRmllbGQiLCJjYW52YXNQb3MiLCJnZXRQb3NpdGlvbiIsIm1vdXNlWCIsIm1vdXNlWSIsInNldE1vdXNlUG9zaXRpb24iLCJiaW5kIiwiaXNDb2xsaWRpbmciLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvZmZzZXRQYXJlbnQiLCJIb21lIiwiZG9vcldpZHRoIiwiZG9vckhlaWdodCIsImZpbGxSZWN0IiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZHJhd0Rvb3IiLCJkb2dzIiwibWFrZURvZ3MiLCJmb3JjZUZpZWxkIiwiaG9tZSIsInNjb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJvYmoxIiwib2JqMiIsImkiLCJsZW5ndGgiLCJpbnRlcnNlY3QiLCJ4MSIsInkxIiwicjEiLCJ4MiIsInkyIiwicjIiLCJjaXJjRGlzdGFuY2UiLCJuZXdYIiwibmV3WSIsImRvZyIsInBhZGRpbmciLCJjeCIsImN5IiwiciIsInN4Iiwic3kiLCJzdyIsInNoIiwidGV4dFgiLCJ0ZXN0WSIsInJ4IiwidGVzdFgiLCJydyIsInJ5IiwicmgiLCJkaXN0WCIsImRpc3RZIiwiZGlzdGFuY2UiLCJoaXQiLCJjaXJjbGVSZWN0IiwiZG9nQ291bnQiLCJwdXNoIiwieERpc3RhbmNlIiwieURpc3RhbmNlIiwiYW5nbGUiLCJhdGFuMiIsImNvcyIsInNpbiIsIndhbGxDb2xsaXNpb24iLCJmb250IiwiZmlsbFRleHQiLCJmb3JFYWNoIiwiZGV0ZWN0Q29sbGlzaW9uc1dpdGhGb3JjZSIsImRyYXciLCJkcmF3U2NvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLElBQUksR0FBRyxJQUFJQyxxREFBSixDQUFTSCxHQUFULEVBQWNILE1BQWQsQ0FBYjtBQUNBSyxJQUFJLENBQUNFLEdBQUwsRyxDQUlBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWE1DLEc7QUFDRixlQUFZUixNQUFaLEVBQW9CRyxHQUFwQixFQUF5Qk0sQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCQyxFQUEvQixFQUFtQ0MsRUFBbkMsRUFBdUM7QUFBQTs7QUFDbkM7QUFDQTtBQUNBLFNBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLFNBQWI7QUFDQSxTQUFLZCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLZSxTQUFMO0FBQ0EsU0FBS1osR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS2EseUJBQUwsR0FBaUMsS0FBakMsQ0FWbUMsQ0FXbkM7QUFDQTtBQUNQOzs7O2dDQUVlO0FBQ1IsV0FBS1AsQ0FBTCxHQUFTLEtBQUtULE1BQUwsQ0FBWWlCLEtBQVosR0FBb0JDLElBQUksQ0FBQ0MsTUFBTCxFQUE3QjtBQUNBLFdBQUtULENBQUwsR0FBUyxLQUFLVixNQUFMLENBQVlvQixNQUFaLEdBQXFCRixJQUFJLENBQUNDLE1BQUwsRUFBOUI7QUFDSDs7OzJCQUVNRSxJLEVBQU1DLEksRUFBTUMsTyxFQUFTO0FBQ3hCLFVBQUlDLGFBQWEsR0FBSUgsSUFBSSxHQUFHQyxJQUFSLEdBQWdCQyxPQUFwQztBQUNBLFVBQUlFLFlBQVksR0FBR1AsSUFBSSxDQUFDUSxJQUFMLENBQVVGLGFBQWEsR0FBR04sSUFBSSxDQUFDUyxFQUEvQixDQUFuQjtBQUNBLGFBQU8sSUFBSUYsWUFBWDtBQUNIOzs7aUNBRVk7QUFDVCxVQUFJRyxRQUFRLEdBQUcsSUFBZjs7QUFFQSxVQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkIsYUFBS2pCLEVBQUwsSUFBVyxDQUFYO0FBQ0EsYUFBS0MsRUFBTCxJQUFXLENBQVg7QUFDQWdCLGdCQUFRLEdBQUcsS0FBWDtBQUNILE9BSkQsTUFJTztBQUNILGFBQUtqQixFQUFMLElBQVcsQ0FBWDtBQUNBLGFBQUtDLEVBQUwsSUFBVyxDQUFYO0FBQ0g7QUFDSjs7OzJCQUVNO0FBQ0gsV0FBS1QsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixLQUFLZixLQUExQjtBQUNBLFdBQUtYLEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEtBQUt0QixDQUFsQixFQUFxQixLQUFLQyxDQUExQixFQUE2QixLQUFLRyxNQUFsQyxFQUEwQyxDQUExQyxFQUE2QyxJQUFJSyxJQUFJLENBQUNTLEVBQXRELEVBQTBELEtBQTFEO0FBQ0EsV0FBS3hCLEdBQUwsQ0FBUzZCLElBQVQ7QUFDSDs7Ozs7O0FBR1V4QixrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaERNeUIsVTtBQUNGLHNCQUFZOUIsR0FBWixFQUFpQkgsTUFBakIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0csR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS2tDLFNBQUwsR0FBaUIsS0FBS0MsV0FBTCxDQUFpQixLQUFLbkMsTUFBdEIsQ0FBakI7QUFDQSxTQUFLb0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDSDs7OztxQ0FFZ0JDLEMsRUFBRztBQUNoQixXQUFLTCxNQUFMLEdBQWNLLENBQUMsQ0FBQ0MsT0FBRixHQUFZLEtBQUtSLFNBQUwsQ0FBZXpCLENBQXpDO0FBQ0EsV0FBSzRCLE1BQUwsR0FBY0ksQ0FBQyxDQUFDRSxPQUFGLEdBQVksS0FBS1QsU0FBTCxDQUFleEIsQ0FBekM7QUFDQSxXQUFLUCxHQUFMLENBQVN5QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUs1QyxNQUFMLENBQVlpQixLQUFyQyxFQUE0QyxLQUFLakIsTUFBTCxDQUFZb0IsTUFBeEQ7QUFDQSxXQUFLeUIsTUFBTDtBQUNIOzs7Z0NBRVc3QyxNLEVBQVE7QUFDbEIsVUFBSThDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFVBQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFFQSxhQUFPL0MsTUFBUCxFQUFlO0FBQ2I4QyxpQkFBUyxJQUFJOUMsTUFBTSxDQUFDZ0QsVUFBUCxHQUFvQmhELE1BQU0sQ0FBQ2lELFVBQTNCLEdBQXdDakQsTUFBTSxDQUFDa0QsVUFBNUQ7QUFDQUgsaUJBQVMsSUFBSS9DLE1BQU0sQ0FBQ21ELFNBQVAsR0FBbUJuRCxNQUFNLENBQUNvRCxTQUExQixHQUFzQ3BELE1BQU0sQ0FBQ3FELFNBQTFEO0FBQ0FyRCxjQUFNLEdBQUdBLE1BQU0sQ0FBQ3NELFlBQWhCO0FBQ0Q7O0FBRUQsYUFBTztBQUNMN0MsU0FBQyxFQUFFcUMsU0FERTtBQUVMcEMsU0FBQyxFQUFFcUM7QUFGRSxPQUFQO0FBSUQ7Ozs2QkFFUTtBQUNMLFdBQUs1QyxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzRCLEdBQVQsQ0FBYSxLQUFLSyxNQUFsQixFQUEwQixLQUFLQyxNQUEvQixFQUF1QyxFQUF2QyxFQUEyQyxDQUEzQyxFQUE4QyxJQUFJbkIsSUFBSSxDQUFDUyxFQUF2RCxFQUEyRCxJQUEzRDtBQUNBLFdBQUt4QixHQUFMLENBQVMwQixTQUFULEdBQXFCLDBCQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVM2QixJQUFUO0FBQ0g7Ozs7OztBQUdVQyx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUNNc0IsSTtBQUNGLGdCQUFZcEQsR0FBWixFQUFpQkgsTUFBakIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0csR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3dELFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7Ozs7K0JBRVU7QUFDUCxXQUFLdEQsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVN1RCxRQUFULENBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCLEtBQUtGLFNBQWpDLEVBQTRDLEtBQUtDLFVBQWpEO0FBQ0g7OzsyQkFFTTtBQUNILFdBQUt0RCxHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBU3VELFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFGRyxDQUlIOztBQUNBLFdBQUt2RCxHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTd0QsTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLFdBQUt4RCxHQUFMLENBQVN5RCxNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsV0FBS3pELEdBQUwsQ0FBU3lELE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxXQUFLekQsR0FBTCxDQUFTMEQsU0FBVDtBQUNBLFdBQUsxRCxHQUFMLENBQVM2QixJQUFULEdBWEcsQ0FhSDs7QUFDQSxXQUFLOEIsUUFBTCxHQWRHLENBZ0JIOztBQUNBLFdBQUszRCxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsSUFBSWIsSUFBSSxDQUFDUyxFQUF0QztBQUNBLFdBQUt4QixHQUFMLENBQVM2QixJQUFUO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBUzBELFNBQVQ7QUFFQSxXQUFLMUQsR0FBTCxDQUFTMkIsU0FBVDtBQUNBLFdBQUszQixHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzRCLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLEtBQXBCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLElBQUliLElBQUksQ0FBQ1MsRUFBMUM7QUFDQSxXQUFLeEIsR0FBTCxDQUFTNkIsSUFBVDtBQUNBLFdBQUs3QixHQUFMLENBQVMwRCxTQUFUO0FBRUEsV0FBSzFELEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVM0QixHQUFULENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixJQUFJYixJQUFJLENBQUNTLEVBQXRDO0FBQ0EsV0FBS3hCLEdBQUwsQ0FBUzZCLElBQVQ7QUFDQSxXQUFLN0IsR0FBTCxDQUFTMEQsU0FBVDtBQUVBLFdBQUsxRCxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsSUFBSWIsSUFBSSxDQUFDUyxFQUF4QztBQUNBLFdBQUt4QixHQUFMLENBQVM2QixJQUFUO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBUzBELFNBQVQsR0F2Q0csQ0F5Q0g7O0FBQ0EsV0FBSzFELEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVM0QixHQUFULENBQWEsR0FBYixFQUFrQixLQUFsQixFQUF5QixHQUF6QixFQUE4QixDQUE5QixFQUFpQyxJQUFJYixJQUFJLENBQUNTLEVBQTFDO0FBQ0EsV0FBS3hCLEdBQUwsQ0FBUzZCLElBQVQ7QUFDQSxXQUFLN0IsR0FBTCxDQUFTMEQsU0FBVDtBQUVBLFdBQUsxRCxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEtBQWIsRUFBb0IsS0FBcEIsRUFBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsRUFBbUMsSUFBSWIsSUFBSSxDQUFDUyxFQUE1QztBQUNBLFdBQUt4QixHQUFMLENBQVM2QixJQUFUO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBUzBELFNBQVQ7QUFFQSxXQUFLMUQsR0FBTCxDQUFTMkIsU0FBVDtBQUNBLFdBQUszQixHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzRCLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDLENBQWhDLEVBQW1DLElBQUliLElBQUksQ0FBQ1MsRUFBNUM7QUFDQSxXQUFLeEIsR0FBTCxDQUFTNkIsSUFBVDtBQUNBLFdBQUs3QixHQUFMLENBQVMwRCxTQUFUO0FBRUEsV0FBSzFELEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVM0QixHQUFULENBQWEsS0FBYixFQUFvQixLQUFwQixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxJQUFJYixJQUFJLENBQUNTLEVBQTFDO0FBQ0EsV0FBS3hCLEdBQUwsQ0FBUzZCLElBQVQ7QUFDQSxXQUFLN0IsR0FBTCxDQUFTMEQsU0FBVCxHQWhFRyxDQWtFSDs7QUFDQSxXQUFLMUQsR0FBTCxDQUFTMkIsU0FBVDtBQUNBLFdBQUszQixHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzRCLEdBQVQsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLElBQUliLElBQUksQ0FBQ1MsRUFBdEM7QUFDQSxXQUFLeEIsR0FBTCxDQUFTNkIsSUFBVDtBQUNBLFdBQUs3QixHQUFMLENBQVMwRCxTQUFUO0FBRUEsV0FBSzFELEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVM0QixHQUFULENBQWEsS0FBYixFQUFvQixLQUFwQixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxJQUFJYixJQUFJLENBQUNTLEVBQTFDO0FBQ0EsV0FBS3hCLEdBQUwsQ0FBUzZCLElBQVQ7QUFDQSxXQUFLN0IsR0FBTCxDQUFTMEQsU0FBVDtBQUVBLFdBQUsxRCxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsSUFBSWIsSUFBSSxDQUFDUyxFQUF4QztBQUNBLFdBQUt4QixHQUFMLENBQVM2QixJQUFUO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBUzBELFNBQVQ7QUFFQSxXQUFLMUQsR0FBTCxDQUFTMkIsU0FBVDtBQUNBLFdBQUszQixHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzRCLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLEtBQXBCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLElBQUliLElBQUksQ0FBQ1MsRUFBMUM7QUFDQSxXQUFLeEIsR0FBTCxDQUFTNkIsSUFBVDtBQUNBLFdBQUs3QixHQUFMLENBQVMwRCxTQUFULEdBekZHLENBMkZIOztBQUNBLFdBQUsxRCxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsSUFBSWIsSUFBSSxDQUFDUyxFQUF0QztBQUNBLFdBQUt4QixHQUFMLENBQVM2QixJQUFUO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBUzBELFNBQVQ7QUFFQSxXQUFLMUQsR0FBTCxDQUFTMkIsU0FBVDtBQUNBLFdBQUszQixHQUFMLENBQVMwQixTQUFULEdBQXFCLFNBQXJCO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzRCLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLEtBQXBCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLElBQUliLElBQUksQ0FBQ1MsRUFBMUM7QUFDQSxXQUFLeEIsR0FBTCxDQUFTNkIsSUFBVDtBQUNBLFdBQUs3QixHQUFMLENBQVMwRCxTQUFUO0FBRUEsV0FBSzFELEdBQUwsQ0FBUzJCLFNBQVQ7QUFDQSxXQUFLM0IsR0FBTCxDQUFTMEIsU0FBVCxHQUFxQixTQUFyQjtBQUNBLFdBQUsxQixHQUFMLENBQVM0QixHQUFULENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixJQUFJYixJQUFJLENBQUNTLEVBQXhDO0FBQ0EsV0FBS3hCLEdBQUwsQ0FBUzZCLElBQVQ7QUFDQSxXQUFLN0IsR0FBTCxDQUFTMEQsU0FBVDtBQUVBLFdBQUsxRCxHQUFMLENBQVMyQixTQUFUO0FBQ0EsV0FBSzNCLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTNEIsR0FBVCxDQUFhLEtBQWIsRUFBb0IsS0FBcEIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsSUFBSWIsSUFBSSxDQUFDUyxFQUExQztBQUNBLFdBQUt4QixHQUFMLENBQVM2QixJQUFUO0FBQ0EsV0FBSzdCLEdBQUwsQ0FBUzBELFNBQVQ7QUFFSDs7Ozs7O0FBR1VOLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBOztJQUVNakQsSTtBQUNKLGdCQUFZSCxHQUFaLEVBQWlCSCxNQUFqQixFQUF5QjtBQUFBOztBQUN2QixTQUFLRyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLSCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLK0QsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLQyxRQUFMLENBQWMsRUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBSWhDLG9EQUFKLENBQWUsS0FBSzlCLEdBQXBCLEVBQXlCLEtBQUtILE1BQTlCLENBQWxCO0FBQ0EsU0FBS2tFLElBQUwsR0FBWSxJQUFJWCw2Q0FBSixDQUFTLEtBQUtwRCxHQUFkLEVBQW1CLEtBQUtILE1BQXhCLENBQVo7QUFDQSxTQUFLbUUsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLbkUsTUFBTCxDQUFZb0UsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS0MsZ0JBQUwsQ0FBc0I5QixJQUF0QixDQUEyQixJQUEzQixDQUExQyxFQUE0RSxLQUE1RTtBQUNEOzs7O3FDQUVnQkUsQyxFQUFHO0FBQ2xCLFdBQUt3QixVQUFMLENBQWdCM0IsZ0JBQWhCLENBQWlDRyxDQUFqQztBQUNEOzs7Z0RBRTJCO0FBQzFCLFVBQUk2QixJQUFJLEdBQUcsS0FBS0wsVUFBaEI7QUFDQSxVQUFJTSxJQUFKLENBRjBCLENBSTFCOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVCxJQUFMLENBQVVVLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGFBQUtULElBQUwsQ0FBVVMsQ0FBVixFQUFheEQseUJBQWIsR0FBeUMsS0FBekM7QUFDRCxPQVB5QixDQVMxQjs7O0FBQ0EsV0FBSyxJQUFJd0QsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxLQUFLVCxJQUFMLENBQVVVLE1BQTlCLEVBQXNDRCxFQUFDLEVBQXZDLEVBQTJDO0FBQ3pDRCxZQUFJLEdBQUcsS0FBS1IsSUFBTCxDQUFVUyxFQUFWLENBQVAsQ0FEeUMsQ0FHekM7QUFDQTs7QUFDRSxZQUFJLEtBQUtFLFNBQUwsQ0FBZUosSUFBSSxDQUFDbEMsTUFBcEIsRUFBNEJrQyxJQUFJLENBQUNqQyxNQUFqQyxFQUF5QyxFQUF6QyxFQUE2Q2tDLElBQUksQ0FBQzlELENBQWxELEVBQXFEOEQsSUFBSSxDQUFDN0QsQ0FBMUQsRUFBNkQ2RCxJQUFJLENBQUMxRCxNQUFsRSxDQUFKLEVBQStFO0FBQzdFeUQsY0FBSSxDQUFDOUIsV0FBTCxHQUFtQixJQUFuQjtBQUNBK0IsY0FBSSxDQUFDdkQseUJBQUwsR0FBaUMsSUFBakMsQ0FGNkUsQ0FHN0U7QUFDQTtBQUNBO0FBQ0E7QUFDRCxTQVpzQyxDQWF6Qzs7QUFDRDtBQUNGOzs7OEJBRVMyRCxFLEVBQUlDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlDLEUsRUFBSUMsRSxFQUFJO0FBQ2hDO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLENBQUNOLEVBQUUsR0FBR0csRUFBTixLQUFhSCxFQUFFLEdBQUdHLEVBQWxCLElBQXdCLENBQUNGLEVBQUUsR0FBR0csRUFBTixLQUFhSCxFQUFFLEdBQUdHLEVBQWxCLENBQTNDLENBRmdDLENBSWhDO0FBQ0E7O0FBQ0EsYUFBT0UsWUFBWSxJQUFLLENBQUNKLEVBQUUsR0FBR0csRUFBTixLQUFhSCxFQUFFLEdBQUdHLEVBQWxCLENBQUQsR0FBMEIsQ0FBakQ7QUFDRDs7O2tDQUVhRSxJLEVBQU1DLEksRUFBTUMsRyxFQUFLO0FBQzdCLFVBQU1DLE9BQU8sR0FBRyxDQUFoQjs7QUFDRSxVQUFJSCxJQUFJLEdBQUdFLEdBQUcsQ0FBQ3ZFLE1BQVgsR0FBb0IsS0FBS2IsTUFBTCxDQUFZaUIsS0FBWixHQUFvQm9FLE9BQXhDLElBQW1ESCxJQUFJLEdBQUdFLEdBQUcsQ0FBQ3ZFLE1BQUosR0FBYXdFLE9BQTNFLEVBQW9GO0FBQ2xGLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlGLElBQUksR0FBR0MsR0FBRyxDQUFDdkUsTUFBWCxHQUFvQixLQUFLYixNQUFMLENBQVlvQixNQUFaLEdBQXFCaUUsT0FBekMsSUFBb0RGLElBQUksR0FBR0MsR0FBRyxDQUFDdkUsTUFBSixHQUFhd0UsT0FBNUUsRUFBcUY7QUFDbkYsZUFBTyxJQUFQO0FBQ0Q7O0FBRUgsYUFBTyxLQUFQO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7K0JBRVdDLEUsRUFBSUMsRSxFQUFJQyxDLEVBQUdDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlDLEUsRUFBSTtBQUNwQyxVQUFJQyxLQUFLLEdBQUdQLEVBQVo7QUFDQSxVQUFJUSxLQUFLLEdBQUdQLEVBQVosQ0FGb0MsQ0FJcEM7O0FBQ0EsVUFBSUQsRUFBRSxHQUFHUyxFQUFULEVBQWFDLEtBQUssR0FBR0QsRUFBUixDQUFiLENBQThCO0FBQTlCLFdBQ0ssSUFBSVQsRUFBRSxHQUFHUyxFQUFFLEdBQUdFLEVBQWQsRUFBa0JELEtBQUssR0FBR0QsRUFBRSxHQUFHRSxFQUFiLENBTmEsQ0FNTTs7QUFDMUMsVUFBSVYsRUFBRSxHQUFHVyxFQUFULEVBQWFKLEtBQUssR0FBR0ksRUFBUixDQUFiLENBQThCO0FBQTlCLFdBQ0ssSUFBSVgsRUFBRSxHQUFHVyxFQUFFLEdBQUdDLEVBQWQsRUFBa0JMLEtBQUssR0FBR0ksRUFBRSxHQUFHQyxFQUFiLENBUmEsQ0FRTTtBQUUxQzs7QUFDQSxVQUFJQyxLQUFLLEdBQUdkLEVBQUUsR0FBR1UsS0FBakI7QUFDQSxVQUFJSyxLQUFLLEdBQUdkLEVBQUUsR0FBR08sS0FBakI7QUFDQSxVQUFJUSxRQUFRLEdBQUc1RSxJQUFJLENBQUUwRSxLQUFLLEdBQUdBLEtBQVQsR0FBbUJDLEtBQUssR0FBR0EsS0FBNUIsQ0FBbkIsQ0Fib0MsQ0FlcEM7O0FBQ0EsVUFBSUMsUUFBUSxJQUFJekYsTUFBaEIsRUFBd0I7QUFDdEIsYUFBS3NELEtBQUw7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFDRDs7O2tDQUVXaUIsRyxFQUFLO0FBQ2pCLFVBQUltQixHQUFHLEdBQUcsS0FBS0MsVUFBTCxDQUFnQixLQUFLdkMsVUFBTCxDQUFnQjdCLE1BQWhDLEVBQXdDLEtBQUs2QixVQUFMLENBQWdCNUIsTUFBeEQsRUFBZ0UsRUFBaEUsRUFBb0UsR0FBcEUsRUFBeUUsR0FBekUsRUFBOEUsRUFBOUUsRUFBa0YsRUFBbEYsQ0FBVjs7QUFFQSxVQUFJa0UsR0FBSixFQUFTO0FBQ1BuQixXQUFHLENBQUNwRCxJQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFDRCxPQUZELE1BR0s7QUFDSG9ELFdBQUcsQ0FBQ25CLFVBQUosQ0FBZWpDLElBQWYsQ0FBb0IsQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUI7QUFDRCxPQVJnQixDQVNqQjs7QUFDRDs7OzZCQUdReUUsUSxFQUFVO0FBQ2pCLFdBQUssSUFBSWpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpQyxRQUFwQixFQUE4QmpDLENBQUMsRUFBL0IsRUFBbUM7QUFDakMsWUFBS0EsQ0FBQyxHQUFHLENBQVQsRUFBYTtBQUNYLGNBQUlZLEdBQUcsR0FBRyxJQUFJNUUsNkNBQUosQ0FBUSxLQUFLUixNQUFiLEVBQXFCLEtBQUtHLEdBQTFCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLElBQUllLElBQUksQ0FBQ0MsTUFBTCxFQUF6QyxFQUF3RCxJQUFJRCxJQUFJLENBQUNDLE1BQUwsRUFBNUQsQ0FBVjtBQUNBaUUsYUFBRyxDQUFDdEUsS0FBSixHQUFZLFNBQVo7QUFDQXNFLGFBQUcsQ0FBQ3ZFLE1BQUosR0FBYSxDQUFiO0FBQ0EsZUFBS2tELElBQUwsQ0FBVTJDLElBQVYsQ0FBZXRCLEdBQWY7QUFDRCxTQUxELE1BS087QUFDTCxjQUFJQSxJQUFHLEdBQUcsSUFBSTVFLDZDQUFKLENBQVEsS0FBS1IsTUFBYixFQUFxQixLQUFLRyxHQUExQixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxJQUFJZSxJQUFJLENBQUNDLE1BQUwsRUFBekMsRUFBd0QsSUFBSUQsSUFBSSxDQUFDQyxNQUFMLEVBQTVELENBQVY7O0FBQ0EsZUFBSzRDLElBQUwsQ0FBVTJDLElBQVYsQ0FBZXRCLElBQWY7QUFDRDtBQUNGO0FBQ0Y7Ozt5QkFFSTNDLEMsRUFBRztBQUNSLFdBQUssSUFBSStCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1QsSUFBTCxDQUFVVSxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxZQUFJbUMsU0FBUyxHQUFHLEtBQUs1QyxJQUFMLENBQVVTLENBQVYsRUFBYS9ELENBQWIsR0FBaUIsS0FBS3dELFVBQUwsQ0FBZ0I3QixNQUFqRDtBQUNBLFlBQUl3RSxTQUFTLEdBQUcsS0FBSzdDLElBQUwsQ0FBVVMsQ0FBVixFQUFhOUQsQ0FBYixHQUFpQixLQUFLdUQsVUFBTCxDQUFnQjVCLE1BQWpEO0FBQ0EsWUFBSWlFLFFBQVEsR0FBR3BGLElBQUksQ0FBQ1EsSUFBTCxDQUFVaUYsU0FBUyxHQUFHQSxTQUFaLEdBQXdCQyxTQUFTLEdBQUdBLFNBQTlDLENBQWY7O0FBRUEsWUFBSyxLQUFLbEMsU0FBTCxDQUFlLEtBQUtULFVBQUwsQ0FBZ0I3QixNQUEvQixFQUF1QyxLQUFLNkIsVUFBTCxDQUFnQjVCLE1BQXZELEVBQStELEVBQS9ELEVBQW1FLEtBQUswQixJQUFMLENBQVVTLENBQVYsRUFBYS9ELENBQWhGLEVBQW1GLEtBQUtzRCxJQUFMLENBQVVTLENBQVYsRUFBYTlELENBQWhHLEVBQW1HLEtBQUtxRCxJQUFMLENBQVVTLENBQVYsRUFBYTNELE1BQWhILENBQUwsRUFBK0g7QUFDN0g7QUFDSSxjQUFJZ0csS0FBSyxHQUFHM0YsSUFBSSxDQUFDNEYsS0FBTCxDQUFXRixTQUFYLEVBQXNCRCxTQUF0QixDQUFaO0FBQ0EsY0FBTXpCLElBQUksR0FBRyxLQUFLbkIsSUFBTCxDQUFVUyxDQUFWLEVBQWEvRCxDQUFiLEdBQWlCUyxJQUFJLENBQUM2RixHQUFMLENBQVNGLEtBQVQsSUFBa0JQLFFBQWhEO0FBQ0EsY0FBTW5CLElBQUksR0FBRyxLQUFLcEIsSUFBTCxDQUFVUyxDQUFWLEVBQWE5RCxDQUFiLEdBQWlCUSxJQUFJLENBQUM4RixHQUFMLENBQVNILEtBQVQsSUFBa0JQLFFBQWhEOztBQUNKLGNBQUksQ0FBQyxLQUFLVyxhQUFMLENBQW1CL0IsSUFBbkIsRUFBeUJDLElBQXpCLEVBQStCLEtBQUtwQixJQUFMLENBQVVTLENBQVYsQ0FBL0IsQ0FBTCxFQUFtRDtBQUM3QyxpQkFBS1QsSUFBTCxDQUFVUyxDQUFWLEVBQWEvRCxDQUFiLEdBQWlCeUUsSUFBakI7QUFDQSxpQkFBS25CLElBQUwsQ0FBVVMsQ0FBVixFQUFhOUQsQ0FBYixHQUFpQnlFLElBQWpCO0FBQ0QsV0FSd0gsQ0FTN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQztBQUNGO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtoRixHQUFMLENBQVMrRyxJQUFULEdBQWdCLFlBQWhCO0FBQ0EsV0FBSy9HLEdBQUwsQ0FBUzBCLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTZ0gsUUFBVCxDQUFrQixZQUFZLEtBQUtoRCxLQUFuQyxFQUEwQyxDQUExQyxFQUE2QyxFQUE3QztBQUNEOzs7MkJBR007QUFDTDtBQUNBO0FBRUEsV0FBS0osSUFBTCxDQUFVcUQsT0FBVixDQUFrQixVQUFDaEMsR0FBRCxFQUFTLENBQ3pCO0FBQ0E7QUFDQTtBQUNELE9BSkQsRUFKSyxDQVVMOztBQUNBLFdBQUtpQyx5QkFBTDtBQUNBLFdBQUtsSCxHQUFMLENBQVN5QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUs1QyxNQUFMLENBQVlpQixLQUFyQyxFQUE0QyxLQUFLakIsTUFBTCxDQUFZb0IsTUFBeEQ7QUFFQSxXQUFLMkMsSUFBTCxDQUFVcUQsT0FBVixDQUFrQixVQUFDaEMsR0FBRCxFQUFTO0FBQ3pCQSxXQUFHLENBQUNrQyxJQUFKO0FBQ0QsT0FGRDtBQUlBLFdBQUtyRCxVQUFMLENBQWdCcEIsTUFBaEI7QUFDQSxXQUFLcUIsSUFBTCxDQUFVb0QsSUFBVjtBQUNBLFdBQUtDLFNBQUw7QUFDQUMsMkJBQXFCLENBQUMsS0FBS25ILElBQUwsQ0FBVWtDLElBQVYsQ0FBZSxJQUFmLENBQUQsQ0FBckI7QUFDQSxXQUFLa0YsSUFBTDtBQUNEOzs7MEJBRUs7QUFDSkQsMkJBQXFCLENBQUMsS0FBS25ILElBQUwsQ0FBVWtDLElBQVYsQ0FBZSxJQUFmLENBQUQsQ0FBckI7QUFDRDs7Ozs7O0FBSVlqQyxtRUFBZixFOzs7Ozs7Ozs7OztBQzFNQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgRm9yY2VGaWVsZCBmcm9tIFwiLi9zY3JpcHRzL2ZvcmNlX2ZpZWxkXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9zY3JpcHRzL21haW5cIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBnYW1lID0gbmV3IE1haW4oY3R4LCBjYW52YXMpO1xuZ2FtZS5ydW4oKTtcblxuXG5cbi8vIGNvbnN0IGZvcmNlRmllbGQgPSBuZXcgRm9yY2VGaWVsZChjdHgpO1xuXG4iLCJjbGFzcyBEb2cge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCB2eCwgdnkpIHtcbiAgICAgICAgLy8gdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgLy8gdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI2M3YzJiZlwiO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5yYW5kb21Qb3MoKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmdXaXRoRm9yY2VGaWVsZCA9IGZhbHNlO1xuICAgICAgICAvLyBhbm90aGVyIGluc3RhbmNlIHZhcmlhYmxlIGNhbiBrZWVwIHRyYWNrIGlmIGl0cyBhIHN0cmF5IG9yIG5vdCBlaCBib29sZWFuXG4gICAgICAgIC8vIHdoaWNoIGZlZWRzIGludG8gdGhlIHdpbi9sb3NlIE1haW4uanMgdG8gY2hlY2sgaWYgdGhhdCBpcyB0aGUgdGFyZ2V0XG59XG5cbiAgICByYW5kb21Qb3MoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKTtcbiAgICB9XG5cbiAgICByYWRpdXMobWF4WCwgbWF4WSwgbnVtRG9ncykge1xuICAgICAgICBsZXQgdGFyZ2V0RG9nQXJlYSA9IChtYXhYICogbWF4WSkgLyBudW1Eb2dzO1xuICAgICAgICBsZXQgdGFyZ2V0UmFkaXVzID0gTWF0aC5zcXJ0KHRhcmdldERvZ0FyZWEgLyBNYXRoLlBJKTtcbiAgICAgICAgcmV0dXJuIDIgKiB0YXJnZXRSYWRpdXM7XG4gICAgfTtcblxuICAgIG1vdmVSYW5kb20oKSB7XG4gICAgICAgIGxldCBkb2dTaGFrZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRvZ1NoYWtlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnZ4ICs9IDU7XG4gICAgICAgICAgICB0aGlzLnZ5ICs9IDU7XG4gICAgICAgICAgICBkb2dTaGFrZSA9IGZhbHNlOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudnggLT0gNTtcbiAgICAgICAgICAgIHRoaXMudnkgLT0gNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2c7IiwiY2xhc3MgRm9yY2VGaWVsZCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLm1vdXNlWCA9IDA7XG4gICAgICAgIHRoaXMubW91c2VZID0gMDtcbiAgICAgICAgdGhpcy5zZXRNb3VzZVBvc2l0aW9uID0gdGhpcy5zZXRNb3VzZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRNb3VzZVBvc2l0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZVggPSBlLmNsaWVudFggLSB0aGlzLmNhbnZhc1Bvcy54O1xuICAgICAgICB0aGlzLm1vdXNlWSA9IGUuY2xpZW50WSAtIHRoaXMuY2FudmFzUG9zLnk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UG9zaXRpb24oY2FudmFzKSB7XG4gICAgICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgICAgIGxldCB5UG9zaXRpb24gPSAwO1xuICAgIFxuICAgICAgd2hpbGUgKGNhbnZhcykge1xuICAgICAgICB4UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldExlZnQgLSBjYW52YXMuc2Nyb2xsTGVmdCArIGNhbnZhcy5jbGllbnRMZWZ0O1xuICAgICAgICB5UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldFRvcCAtIGNhbnZhcy5zY3JvbGxUb3AgKyBjYW52YXMuY2xpZW50VG9wO1xuICAgICAgICBjYW52YXMgPSBjYW52YXMub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB4UG9zaXRpb24sXG4gICAgICAgIHk6IHlQb3NpdGlvbixcbiAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm1vdXNlWCwgdGhpcy5tb3VzZVksIDUwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmNlRmllbGQ7XG5cbiIsImNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kb29yV2lkdGggPSAxNTtcbiAgICAgICAgdGhpcy5kb29ySGVpZ2h0ID0gMjA7XG4gICAgfVxuXG4gICAgZHJhd0Rvb3IoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzc1NDcxOVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyOTgsIDE5MCwgdGhpcy5kb29yV2lkdGgsIHRoaXMuZG9vckhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZjdhMDY1XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDI4MCwgMTgwLCA1MCwgMzApO1xuXG4gICAgICAgIC8vIERyYXcgdHJpYW5nbGVcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZjc1MzQ4XCI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjcwLCAxODApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzQwLCAxODApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzA1LCAxNTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIC8vZG9vclxuICAgICAgICB0aGlzLmRyYXdEb29yKCk7XG5cbiAgICAgICAgLy9wYXdzXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5OSwgMjIwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk2LjYsIDIxNi41LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzAwLCAyMTYsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDIuNywgMjE4LCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzA3LCAyMTQuNCwgMS44LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMzA1LjMsIDIxMC44LCAwLjgsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYygzMDguNSwgMjEwLjYsIDAuOCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMxMC42LCAyMTIuNywgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI5NywgMjMwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk1LjQsIDIyNi4yLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjk4LjgsIDIyNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDMwMC43LCAyMjguNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI4NiwgMjM0LCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg0LjQsIDIzMC4yLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMjg3LjgsIDIzMCwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKDI4OS43LCAyMzIuNiwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBEb2cgZnJvbSBcIi4vZG9nc1wiO1xuaW1wb3J0IEZvcmNlRmllbGQgZnJvbSBcIi4vZm9yY2VfZmllbGRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxuXG5jbGFzcyBNYWluIHtcbiAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmRvZ3MgPSBbXTtcbiAgICB0aGlzLm1ha2VEb2dzKDEwKTtcbiAgICB0aGlzLmZvcmNlRmllbGQgPSBuZXcgRm9yY2VGaWVsZCh0aGlzLmN0eCwgdGhpcy5jYW52YXMpXG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUodGhpcy5jdHgsIHRoaXMuY2FudmFzKVxuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIHRoaXMuZm9yY2VGaWVsZC5zZXRNb3VzZVBvc2l0aW9uKGUpXG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb25zV2l0aEZvcmNlKCkge1xuICAgIGxldCBvYmoxID0gdGhpcy5mb3JjZUZpZWxkXG4gICAgbGV0IG9iajI7XG5cbiAgICAvLyBSZXNldCBjb2xsaXNpb24gc3RhdGUgb2YgYWxsIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9ncy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kb2dzW2ldLmlzQ29sbGlkaW5nV2l0aEZvcmNlRmllbGQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCBjaGVja2luZyBmb3IgY29sbGlzaW9uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmoyID0gdGhpcy5kb2dzW2ldO1xuXG4gICAgICAvLyBDb21wYXJlIG9iamVjdDEgd2l0aCBvYmplY3QyXG4gICAgICAvLyBpZiAodGhpcy53YWxsQ29sbGlzaW9uKG9iajIpKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVyc2VjdChvYmoxLm1vdXNlWCwgb2JqMS5tb3VzZVksIDUwLCBvYmoyLngsIG9iajIueSwgb2JqMi5yYWRpdXMpKSB7XG4gICAgICAgICAgb2JqMS5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgICAgb2JqMi5pc0NvbGxpZGluZ1dpdGhGb3JjZUZpZWxkID0gdHJ1ZTtcbiAgICAgICAgICAvLyBvYmoxLnZ4ID0gLW9iajEudng7XG4gICAgICAgICAgLy8gb2JqMS52eSA9IC1vYmoxLnZ5O1xuICAgICAgICAgIC8vIG9iajIudnggPSAtb2JqMi52eDtcbiAgICAgICAgICAvLyBvYmoyLnZ5ID0gLW9iajIudnk7XG4gICAgICAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnNlY3QoeDEsIHkxLCByMSwgeDIsIHkyLCByMikge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIGNpcmNsZXNcbiAgICBsZXQgY2lyY0Rpc3RhbmNlID0gKHgxIC0geDIpICogKHgxIC0geDIpICsgKHkxIC0geTIpICogKHkxIC0geTIpO1xuXG4gICAgLy8gV2hlbiB0aGUgZGlzdGFuY2UgaXMgc21hbGxlciBvciBlcXVhbCB0byB0aGUgc3VtXG4gICAgLy8gb2YgdGhlIHR3byByYWRpdXMsIHRoZSBjaXJjbGVzIHRvdWNoIG9yIG92ZXJsYXBcbiAgICByZXR1cm4gY2lyY0Rpc3RhbmNlIDw9ICgocjEgKyByMikgKiAocjEgKyByMikpICsgNTtcbiAgfVxuICBcbiAgd2FsbENvbGxpc2lvbihuZXdYLCBuZXdZLCBkb2cpIHtcbiAgICBjb25zdCBwYWRkaW5nID0gMDtcbiAgICAgIGlmIChuZXdYICsgZG9nLnJhZGl1cyA+IHRoaXMuY2FudmFzLndpZHRoIC0gcGFkZGluZyB8fCBuZXdYIDwgZG9nLnJhZGl1cyArIHBhZGRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IFxuICAgIFxuICAgICAgaWYgKG5ld1kgKyBkb2cucmFkaXVzID4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gcGFkZGluZyB8fCBuZXdZIDwgZG9nLnJhZGl1cyArIHBhZGRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBkb29yQ29sbGlzaW9uKGRvZykge1xuICAvLyAgIGlmIChkb2cueCArIGRvZy52eCA+IHRoaXMuaG9tZS5kb29yV2lkdGggLSBkb2cucmFkaXVzICYmIGRvZy54ICsgZG9nLnZ4IDwgZG9nLnJhZGl1cykge1xuICAvLyAgICAgZG9nLnZ4ID0gLWRvZy52eDtcbiAgLy8gICAgIHRoaXMuc2NvcmUrK1xuICAvLyAgICAgLy8gZG9nLnggPSAwXG4gIC8vICAgICAvLyBkb2cueSA9IDBcbiAgLy8gICAgIHJldHVybiB0cnVlO1xuICAvLyAgIH0gXG4gIFxuICAvLyAgIGlmIChkb2cueSArIGRvZy52eSA8IGRvZy5yYWRpdXMgJiYgZG9nLnkgKyBkb2cudnkgPiB0aGlzLmhvbWUuZG9vckhlaWdodCAtIGRvZy5yYWRpdXMpIHtcbiAgICAvLyAgICAgZG9nLnJhZGl1cyA9IDIwO1xuICAgIC8vICAgICB0aGlzLnNjb3JlKytcbiAgICAvLyAgICAgLy8gZG9nLnggPSAwXG4gICAgLy8gICAgIC8vIGRvZy55ID0gMFxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICBcbiAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9XG4gICAgXG4gICAgY2lyY2xlUmVjdChjeCwgY3ksIHIsIHN4LCBzeSwgc3csIHNoKSB7XG4gICAgICBsZXQgdGV4dFggPSBjeDtcbiAgICAgIGxldCB0ZXN0WSA9IGN5O1xuICBcbiAgICAgIC8vIHdoaWNoIGVkZ2UgaXMgY2xvc2VzdD9cbiAgICAgIGlmIChjeCA8IHJ4KSB0ZXN0WCA9IHJ4OyAgICAgIC8vIHRlc3QgbGVmdCBlZGdlXG4gICAgICBlbHNlIGlmIChjeCA+IHJ4ICsgcncpIHRlc3RYID0gcnggKyBydzsgICAvLyByaWdodCBlZGdlXG4gICAgICBpZiAoY3kgPCByeSkgdGVzdFkgPSByeTsgICAgICAvLyB0b3AgZWRnZVxuICAgICAgZWxzZSBpZiAoY3kgPiByeSArIHJoKSB0ZXN0WSA9IHJ5ICsgcmg7ICAgLy8gYm90dG9tIGVkZ2VcbiAgXG4gICAgICAvLyBnZXQgZGlzdGFuY2UgZnJvbSBjbG9zZXN0IGVkZ2VzXG4gICAgICBsZXQgZGlzdFggPSBjeCAtIHRlc3RYO1xuICAgICAgbGV0IGRpc3RZID0gY3kgLSB0ZXN0WTtcbiAgICAgIGxldCBkaXN0YW5jZSA9IHNxcnQoKGRpc3RYICogZGlzdFgpICsgKGRpc3RZICogZGlzdFkpKTtcbiAgXG4gICAgICAvLyBpZiB0aGUgZGlzdGFuY2UgaXMgbGVzcyB0aGFuIHRoZSByYWRpdXMsIGNvbGxpc2lvbiFcbiAgICAgIGlmIChkaXN0YW5jZSA8PSByYWRpdXMpIHtcbiAgICAgICAgdGhpcy5zY29yZSsrXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICBkb29yQ29sbGlzaW9uKGRvZykge1xuICAgIGxldCBoaXQgPSB0aGlzLmNpcmNsZVJlY3QodGhpcy5mb3JjZUZpZWxkLm1vdXNlWCwgdGhpcy5mb3JjZUZpZWxkLm1vdXNlWSwgNTAsIDI5OCwgMTkwLCAxNSwgMjApXG4gICAgXG4gICAgaWYgKGhpdCkge1xuICAgICAgZG9nLmZpbGwoMjU1LCAxNTAsIDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRvZy5mb3JjZUZpZWxkLmZpbGwoMCwgMTUwLCAyNTUpO1xuICAgIH1cbiAgICAvLyByZWN0KHN4LCBzeSwgc3csIHNoKTtcbiAgfVxuXG5cbiAgbWFrZURvZ3MoZG9nQ291bnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvZ0NvdW50OyBpKyspIHtcbiAgICAgIGlmICggaSA8IDIgKSB7XG4gICAgICAgIGxldCBkb2cgPSBuZXcgRG9nKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMCwgMCwgNSAqIE1hdGgucmFuZG9tKCksIDUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgZG9nLmNvbG9yID0gXCIjODAzODA5XCI7XG4gICAgICAgIGRvZy5yYWRpdXMgPSA3O1xuICAgICAgICB0aGlzLmRvZ3MucHVzaChkb2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRvZyA9IG5ldyBEb2codGhpcy5jYW52YXMsIHRoaXMuY3R4LCAwLCAwLCA1ICogTWF0aC5yYW5kb20oKSwgNSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLmRvZ3MucHVzaChkb2cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmUoZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9ncy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB4RGlzdGFuY2UgPSB0aGlzLmRvZ3NbaV0ueCAtIHRoaXMuZm9yY2VGaWVsZC5tb3VzZVg7XG4gICAgdmFyIHlEaXN0YW5jZSA9IHRoaXMuZG9nc1tpXS55IC0gdGhpcy5mb3JjZUZpZWxkLm1vdXNlWTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeERpc3RhbmNlICogeERpc3RhbmNlICsgeURpc3RhbmNlICogeURpc3RhbmNlKTtcblxuICAgIGlmICgodGhpcy5pbnRlcnNlY3QodGhpcy5mb3JjZUZpZWxkLm1vdXNlWCwgdGhpcy5mb3JjZUZpZWxkLm1vdXNlWSwgNTAsIHRoaXMuZG9nc1tpXS54LCB0aGlzLmRvZ3NbaV0ueSwgdGhpcy5kb2dzW2ldLnJhZGl1cykpKSB7XG4gICAgICAvLyBpZiAoIXRoaXMud2FsbENvbGxpc2lvbih0aGlzLmRvZ3NbaV0pKSB7XG4gICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih5RGlzdGFuY2UsIHhEaXN0YW5jZSk7XG4gICAgICAgICAgY29uc3QgbmV3WCA9IHRoaXMuZG9nc1tpXS54ICsgTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2U7XG4gICAgICAgICAgY29uc3QgbmV3WSA9IHRoaXMuZG9nc1tpXS55ICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2U7XG4gICAgICBpZiAoIXRoaXMud2FsbENvbGxpc2lvbihuZXdYLCBuZXdZLCB0aGlzLmRvZ3NbaV0pKSB7XG4gICAgICAgICAgICB0aGlzLmRvZ3NbaV0ueCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLmRvZ3NbaV0ueSA9IG5ld1k7XG4gICAgICAgICAgfVxuICAgICAgLy8gfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIHRoaXMuZG9nc1tpXS54ID0gdGhpcy5kb2dzW2ldLnhcbiAgICAgIC8vICAgdGhpcy5kb2dzW2ldLnkgPSB0aGlzLmRvZ3NbaV0ueVxuICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdTY29yZSgpIHtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCA4LCAyMCk7XG4gIH1cblxuXG4gIGdhbWUoKSB7XG4gICAgLy8gbGV0IHRpbWVMYXBzZWQgPSAodGltZVN0YW1wIC0gb2xkVGltZSkgLyAxMDAwO1xuICAgIC8vIGxldCBvbGRUaW1lID0gdGltZVN0YW1wO1xuXG4gICAgdGhpcy5kb2dzLmZvckVhY2goKGRvZykgPT4ge1xuICAgICAgLy8gZG9nLm1vdmVSYW5kb20oKTtcbiAgICAgIC8vIHRoaXMud2FsbENvbGxpc2lvbihkb2cpO1xuICAgICAgLy8gdGhpcy5kb29yQ29sbGlzaW9uKGRvZyk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG4gICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zV2l0aEZvcmNlKCk7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIFxuICAgIHRoaXMuZG9ncy5mb3JFYWNoKChkb2cpID0+IHtcbiAgICAgIGRvZy5kcmF3KCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5mb3JjZUZpZWxkLnVwZGF0ZSgpO1xuICAgIHRoaXMuaG9tZS5kcmF3KCk7XG4gICAgdGhpcy5kcmF3U2NvcmUoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lLmJpbmQodGhpcykpO1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWUuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=