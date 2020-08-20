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
    this.radius = 20;
    this.color = "#4e4e4e";
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
    // strayColor() {
    //     let color = "#4e4e4e";
    //     return color;
    // };
    value: function moveRandom() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }, {
    key: "draw",
    value: function draw() {
      debugger;
      this.ctx.fillStyle = this.isColliding ? this.color : '#0099b0'; // add in the logic to reverse it's direction

      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fill();
    } // render(ctx) {
    //     ctx.fillStyle = this.color;
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    //     ctx.fill();
    // }

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
    this.isColliding = false; // this.canvas.addEventListener("mousemove", this.setMousePosition.bind(this), false);
  }

  _createClass(ForceField, [{
    key: "setMousePosition",
    value: function setMousePosition(e) {
      this.mouseX = e.clientX - this.canvasPos.x;
      this.mouseY = e.clientY - this.canvasPos.y; // console.log(`${this.mouseX} ${this.mouseY}`)

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.update(); // this.ctx.beginPath();
      // this.ctx.arc(this.mouseX, this.mouseY, 50, 0, 2 * Math.PI, true);
      // this.ctx.fillStyle = "#FF6A6A";
      // this.ctx.fill();
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
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // requestAnimationFrame(this.update.bind(this));
      // this is a global function so you need to bind it
      this.ctx.beginPath();
      this.ctx.arc(this.mouseX, this.mouseY, 50, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = "#FF6A6A";
      this.ctx.fill();
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
    this.ctx = ctx; // this.myDogs = [new Dog(this.canvas, this.ctx, 0, 0, 2, 2), new Dog(this.canvas, this.ctx, 0, 0, 2, 2)]

    this.canvas = canvas;
    this.makeDogs(10);
    this.forceField = new _force_field__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.canvas); // this.dogs.push(this.forceField);

    debugger;
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
  }

  _createClass(Main, [{
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(e) {
      this.forceField.setMousePosition(e); // function that will perform the collisiondetection
    } // collisionDetection() {
    //   this.dogs.forEach((dog) => {
    //     let dogPos = { posX: dog.posX, posY = dog.posY }
    //     let forceFieldPos = this.forceField.getPosition(this.canvas)
    //     if (this.forceField.getPosition(this.canvas)) {
    //     }
    //   });
    //   // with the borders, dogs, then house
    //   // depending on what you collided with, you want to triger another function like dogsMove
    // }

  }, {
    key: "detectCollisions",
    value: function detectCollisions() {
      var obj1;
      var obj2; // Reset collision state of all objects

      for (var i = 0; i < this.dogs.length; i++) {
        this.dogs[i].isColliding = false;
      } // Start checking for collisions


      for (var _i = 0; _i < this.dogs.length; _i++) {
        obj1 = this.dogs[_i];

        for (var j = _i + 1; j < this.dogs.length; j++) {
          obj2 = this.dogs[j]; // Compare object1 with object2

          if (this.forceIntersect(obj1.x, obj1.y, obj1.radius, obj2.x, obj2.y, obj2.radius)) {
            obj1.isColliding = true;
            obj2.isColliding = true;
            obj1.vx = -obj1.vx;
            obj1.vy = -obj1.vy;
            obj2.vx = -obj2.vx;
            obj2.vy = -obj2.vy;
          }
        }
      }
    }
  }, {
    key: "forceIntersect",
    value: function forceIntersect(x1, y1, r1, x2, y2, r2) {
      // Calculate the distance between the two circles
      var squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2); // When the distance is smaller or equal to the sum
      // of the two radius, the circles touch or overlap

      return squareDistance <= (r1 + r2) * (r1 + r2) + 5;
    }
  }, {
    key: "makeDogs",
    value: function makeDogs(dogCount) {
      for (var i = 0; i < dogCount; i++) {
        //   dogs.push(Dog.randomDog(canvas.width, canvas.height, 10));
        var dog = new _dogs__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, 0, 0, 5 * Math.random(), 5 * Math.random()); //randomi

        this.dogs.push(dog); // randomly select 2 to be the target dogs and change their colors
      }
    }
  }, {
    key: "wallCollision",
    value: function wallCollision(dog) {
      if (dog.x + dog.vx > this.canvas.width - dog.radius || dog.x + dog.vx < dog.radius) {
        dog.vx = -dog.vx;
      }

      if (dog.y + dog.vy < dog.radius || dog.y + dog.vy > this.canvas.height - dog.radius) {
        dog.vy = -dog.vy;
      }
    }
  }, {
    key: "game",
    value: function game(timeStamp) {
      var _this = this;

      debugger;
      var timeLapsed = (timeStamp - oldTime) / 1000;
      var oldTime = timeStamp;
      this.dogs.forEach(function (dog) {
        dog.moveRandom(timeLapsed);

        _this.wallCollision(dog);
      });
      this.detectCollisions();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dogs.forEach(function (dog) {
        dog.draw();
      });
      this.forceField.update();
      requestAnimationFrame(this.game.bind(this));
    }
  }, {
    key: "moveDog",
    value: function moveDog() {// let dx = Math.random() * 2 - 1;
      // let dy = Math.random() * 2 - 1;
      // this.centerX = Math.abs((this.centerX + dx * this.radius * 0.1) % maxX);
      // this.centerY = Math.abs((this.centerY + dy * this.radius * 0.1) % maxY);
    } // start() {
    //   const animateCallback = () => {
    //     // this.moveDogs();
    //     this.render();
    //     requestAnimationFrame(animateCallback);
    //   };
    //   animateCallback();
    // }
    // draw() {
    //   this.render();
    //   // this.moveDog();
    //   // this.start();
    //   // this.forceField.update();
    //   requestAnimationFrame(this.draw.bind(this));
    // }

  }, {
    key: "render",
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dogs.forEach(function (dog) {// dog.render(this.ctx);
      });
      this.forceField.update();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9yY2VfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiTWFpbiIsInJ1biIsIkRvZyIsIngiLCJ5IiwidngiLCJ2eSIsInJhZGl1cyIsImNvbG9yIiwicmFuZG9tUG9zIiwiaXNDb2xsaWRpbmciLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJoZWlnaHQiLCJtYXhYIiwibWF4WSIsIm51bURvZ3MiLCJ0YXJnZXREb2dBcmVhIiwidGFyZ2V0UmFkaXVzIiwic3FydCIsIlBJIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsIkZvcmNlRmllbGQiLCJjYW52YXNQb3MiLCJnZXRQb3NpdGlvbiIsIm1vdXNlWCIsIm1vdXNlWSIsInNldE1vdXNlUG9zaXRpb24iLCJiaW5kIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xlYXJSZWN0IiwidXBkYXRlIiwieFBvc2l0aW9uIiwieVBvc2l0aW9uIiwib2Zmc2V0TGVmdCIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwib2Zmc2V0UGFyZW50IiwiZG9ncyIsIm1ha2VEb2dzIiwiZm9yY2VGaWVsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwib2JqMSIsIm9iajIiLCJpIiwibGVuZ3RoIiwiaiIsImZvcmNlSW50ZXJzZWN0IiwieDEiLCJ5MSIsInIxIiwieDIiLCJ5MiIsInIyIiwic3F1YXJlRGlzdGFuY2UiLCJkb2dDb3VudCIsImRvZyIsInB1c2giLCJ0aW1lU3RhbXAiLCJ0aW1lTGFwc2VkIiwib2xkVGltZSIsImZvckVhY2giLCJtb3ZlUmFuZG9tIiwid2FsbENvbGxpc2lvbiIsImRldGVjdENvbGxpc2lvbnMiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLElBQUksR0FBRyxJQUFJQyxxREFBSixDQUFTSCxHQUFULEVBQWNILE1BQWQsQ0FBYjtBQUNBSyxJQUFJ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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEZvcmNlRmllbGQgZnJvbSBcIi4vc2NyaXB0cy9mb3JjZV9maWVsZFwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vc2NyaXB0cy9tYWluXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBNYWluKGN0eCwgY2FudmFzKTtcbmdhbWUucnVuKCk7XG5cblxuXG4vLyBjb25zdCBmb3JjZUZpZWxkID0gbmV3IEZvcmNlRmllbGQoY3R4KTtcblxuIiwiY2xhc3MgRG9nIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIC8vIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIC8vIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMudnggPSB2eDtcbiAgICAgICAgdGhpcy52eSA9IHZ5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAyMDtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiIzRlNGU0ZVwiO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5yYW5kb21Qb3MoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIGFub3RoZXIgaW5zdGFuY2UgdmFyaWFibGUgY2FuIGtlZXAgdHJhY2sgaWYgaXRzIGEgc3RyYXkgb3Igbm90IGVoIGJvb2xlYW5cbiAgICAgICAgLy8gd2hpY2ggZmVlZHMgaW50byB0aGUgd2luL2xvc2UgTWFpbi5qcyB0byBjaGVjayBpZiB0aGF0IGlzIHRoZSB0YXJnZXRcbn1cblxuICAgIHJhbmRvbVBvcygpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpO1xuICAgIH1cblxuICAgIHJhZGl1cyhtYXhYLCBtYXhZLCBudW1Eb2dzKSB7XG4gICAgICAgIGxldCB0YXJnZXREb2dBcmVhID0gKG1heFggKiBtYXhZKSAvIG51bURvZ3M7XG4gICAgICAgIGxldCB0YXJnZXRSYWRpdXMgPSBNYXRoLnNxcnQodGFyZ2V0RG9nQXJlYSAvIE1hdGguUEkpO1xuICAgICAgICByZXR1cm4gMiAqIHRhcmdldFJhZGl1cztcbiAgICB9O1xuXG4gICAgLy8gc3RyYXlDb2xvcigpIHtcbiAgICAvLyAgICAgbGV0IGNvbG9yID0gXCIjNGU0ZTRlXCI7XG4gICAgLy8gICAgIHJldHVybiBjb2xvcjtcbiAgICAvLyB9O1xuXG4gICAgbW92ZVJhbmRvbSgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuaXNDb2xsaWRpbmcgPyB0aGlzLmNvbG9yIDogJyMwMDk5YjAnOyAvLyBhZGQgaW4gdGhlIGxvZ2ljIHRvIHJldmVyc2UgaXQncyBkaXJlY3Rpb25cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICAvLyByZW5kZXIoY3R4KSB7XG4gICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIC8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgIC8vICAgICBjdHguZmlsbCgpO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9nOyIsImNsYXNzIEZvcmNlRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNQb3MgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuY2FudmFzKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5tb3VzZVggPSAwO1xuICAgICAgICB0aGlzLm1vdXNlWSA9IDA7XG4gICAgICAgIHRoaXMuc2V0TW91c2VQb3NpdGlvbiA9IHRoaXMuc2V0TW91c2VQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5zZXRNb3VzZVBvc2l0aW9uLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG5cblxuICAgIHNldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUG9zLng7XG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZIC0gdGhpcy5jYW52YXNQb3MueTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy5tb3VzZVh9ICR7dGhpcy5tb3VzZVl9YClcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguYXJjKHRoaXMubW91c2VYLCB0aGlzLm1vdXNlWSwgNTAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkY2QTZBXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UG9zaXRpb24oY2FudmFzKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgICAgIGxldCB5UG9zaXRpb24gPSAwO1xuICAgIFxuICAgICAgd2hpbGUgKGNhbnZhcykge1xuICAgICAgICB4UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldExlZnQgLSBjYW52YXMuc2Nyb2xsTGVmdCArIGNhbnZhcy5jbGllbnRMZWZ0O1xuICAgICAgICB5UG9zaXRpb24gKz0gY2FudmFzLm9mZnNldFRvcCAtIGNhbnZhcy5zY3JvbGxUb3AgKyBjYW52YXMuY2xpZW50VG9wO1xuICAgICAgICBjYW52YXMgPSBjYW52YXMub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuXG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhQb3NpdGlvbixcbiAgICAgICAgeTogeVBvc2l0aW9uLFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAvLyB0aGlzIGlzIGEgZ2xvYmFsIGZ1bmN0aW9uIHNvIHlvdSBuZWVkIHRvIGJpbmQgaXRcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm1vdXNlWCwgdGhpcy5tb3VzZVksIDUwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI0ZGNkE2QVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JjZUZpZWxkO1xuXG4iLCJpbXBvcnQgRG9nIGZyb20gXCIuL2RvZ3NcIjtcbmltcG9ydCBGb3JjZUZpZWxkIGZyb20gXCIuL2ZvcmNlX2ZpZWxkXCI7XG5cbmNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgIHRoaXMuZG9ncyA9IFtdO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIC8vIHRoaXMubXlEb2dzID0gW25ldyBEb2codGhpcy5jYW52YXMsIHRoaXMuY3R4LCAwLCAwLCAyLCAyKSwgbmV3IERvZyh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDAsIDAsIDIsIDIpXVxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMubWFrZURvZ3MoMTApO1xuICAgIHRoaXMuZm9yY2VGaWVsZCA9IG5ldyBGb3JjZUZpZWxkKHRoaXMuY3R4LCB0aGlzLmNhbnZhcylcbiAgICAvLyB0aGlzLmRvZ3MucHVzaCh0aGlzLmZvcmNlRmllbGQpO1xuICAgIGRlYnVnZ2VyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICB0aGlzLmZvcmNlRmllbGQuc2V0TW91c2VQb3NpdGlvbihlKVxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJmb3JtIHRoZSBjb2xsaXNpb25kZXRlY3Rpb25cbiAgfVxuXG4gIC8vIGNvbGxpc2lvbkRldGVjdGlvbigpIHtcbiAgLy8gICB0aGlzLmRvZ3MuZm9yRWFjaCgoZG9nKSA9PiB7XG4gIC8vICAgICBsZXQgZG9nUG9zID0geyBwb3NYOiBkb2cucG9zWCwgcG9zWSA9IGRvZy5wb3NZIH1cbiAgLy8gICAgIGxldCBmb3JjZUZpZWxkUG9zID0gdGhpcy5mb3JjZUZpZWxkLmdldFBvc2l0aW9uKHRoaXMuY2FudmFzKVxuICAvLyAgICAgaWYgKHRoaXMuZm9yY2VGaWVsZC5nZXRQb3NpdGlvbih0aGlzLmNhbnZhcykpIHtcbiAgICAgICAgXG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vICAgLy8gd2l0aCB0aGUgYm9yZGVycywgZG9ncywgdGhlbiBob3VzZVxuICAvLyAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHlvdSBjb2xsaWRlZCB3aXRoLCB5b3Ugd2FudCB0byB0cmlnZXIgYW5vdGhlciBmdW5jdGlvbiBsaWtlIGRvZ3NNb3ZlXG5cbiAgLy8gfVxuXG4gIGRldGVjdENvbGxpc2lvbnMoKSB7XG4gICAgbGV0IG9iajE7XG4gICAgbGV0IG9iajI7XG5cbiAgLy8gUmVzZXQgY29sbGlzaW9uIHN0YXRlIG9mIGFsbCBvYmplY3RzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5kb2dzW2ldLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gIH1cblxuICAvLyBTdGFydCBjaGVja2luZyBmb3IgY29sbGlzaW9uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9ncy5sZW5ndGg7IGkrKykge1xuICAgIG9iajEgPSB0aGlzLmRvZ3NbaV07XG4gICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5kb2dzLmxlbmd0aDsgaisrKSB7XG4gICAgICBvYmoyID0gdGhpcy5kb2dzW2pdO1xuXG4gICAgICAvLyBDb21wYXJlIG9iamVjdDEgd2l0aCBvYmplY3QyXG4gICAgICBpZiAodGhpcy5mb3JjZUludGVyc2VjdChvYmoxLngsIG9iajEueSwgb2JqMS5yYWRpdXMsIG9iajIueCwgb2JqMi55LCBvYmoyLnJhZGl1cykpIHtcbiAgICAgICAgb2JqMS5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgIG9iajIuaXNDb2xsaWRpbmcgPSB0cnVlO1xuICAgICAgICBvYmoxLnZ4ID0gLW9iajEudng7XG4gICAgICAgIG9iajEudnkgPSAtb2JqMS52eTtcbiAgICAgICAgb2JqMi52eCA9IC1vYmoyLnZ4O1xuICAgICAgICBvYmoyLnZ5ID0gLW9iajIudnk7XG4gICAgICB9XG5cbiAgICAgIFxuICAgIH1cbiAgfVxufVxuXG4gIGZvcmNlSW50ZXJzZWN0KHgxLCB5MSwgcjEsIHgyLCB5MiwgcjIpIHtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIGNpcmNsZXNcbiAgICBsZXQgc3F1YXJlRGlzdGFuY2UgPSAoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5Mik7XG5cbiAgICAvLyBXaGVuIHRoZSBkaXN0YW5jZSBpcyBzbWFsbGVyIG9yIGVxdWFsIHRvIHRoZSBzdW1cbiAgICAvLyBvZiB0aGUgdHdvIHJhZGl1cywgdGhlIGNpcmNsZXMgdG91Y2ggb3Igb3ZlcmxhcFxuICAgIHJldHVybiBzcXVhcmVEaXN0YW5jZSA8PSAoKHIxICsgcjIpICogKHIxICsgcjIpKSArIDU7XG4gIH1cblxuICBtYWtlRG9ncyhkb2dDb3VudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9nQ291bnQ7IGkrKykge1xuICAgICAgLy8gICBkb2dzLnB1c2goRG9nLnJhbmRvbURvZyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIDEwKSk7XG4gICAgICBsZXQgZG9nID0gbmV3IERvZyh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDAsIDAsIDUgKiBNYXRoLnJhbmRvbSgpLCA1ICogTWF0aC5yYW5kb20oKSk7IC8vcmFuZG9taVxuICAgICAgdGhpcy5kb2dzLnB1c2goZG9nKTtcblxuICAgICAgLy8gcmFuZG9tbHkgc2VsZWN0IDIgdG8gYmUgdGhlIHRhcmdldCBkb2dzIGFuZCBjaGFuZ2UgdGhlaXIgY29sb3JzXG4gICAgfVxuICB9XG5cbiAgd2FsbENvbGxpc2lvbihkb2cpIHtcbiAgICBpZiAoZG9nLnggKyBkb2cudnggPiB0aGlzLmNhbnZhcy53aWR0aCAtIGRvZy5yYWRpdXMgfHwgZG9nLnggKyBkb2cudnggPCBkb2cucmFkaXVzKSB7XG4gICAgICBkb2cudnggPSAtZG9nLnZ4O1xuICAgIH0gXG4gICAgXG4gICAgaWYgKGRvZy55ICsgZG9nLnZ5IDwgZG9nLnJhZGl1cyB8fCBkb2cueSArIGRvZy52eSA+IHRoaXMuY2FudmFzLmhlaWdodCAtIGRvZy5yYWRpdXMpIHtcbiAgICAgIGRvZy52eSA9IC1kb2cudnk7XG4gICAgfVxuICB9XG5cbiAgZ2FtZSh0aW1lU3RhbXApIHtcbiAgICBkZWJ1Z2dlclxuICAgIGxldCB0aW1lTGFwc2VkID0gKHRpbWVTdGFtcCAtIG9sZFRpbWUpIC8gMTAwMDtcbiAgICBsZXQgb2xkVGltZSA9IHRpbWVTdGFtcDtcblxuICAgIHRoaXMuZG9ncy5mb3JFYWNoKChkb2cpID0+IHtcbiAgICAgIGRvZy5tb3ZlUmFuZG9tKHRpbWVMYXBzZWQpO1xuICAgICAgdGhpcy53YWxsQ29sbGlzaW9uKGRvZyk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5kZXRlY3RDb2xsaXNpb25zKCk7XG5cblxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuZG9ncy5mb3JFYWNoKChkb2cpID0+IHtcbiAgICAgIGRvZy5kcmF3KCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5mb3JjZUZpZWxkLnVwZGF0ZSgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG1vdmVEb2coKSB7XG4gICAgLy8gbGV0IGR4ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgIC8vIGxldCBkeSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcblxuICAgIC8vIHRoaXMuY2VudGVyWCA9IE1hdGguYWJzKCh0aGlzLmNlbnRlclggKyBkeCAqIHRoaXMucmFkaXVzICogMC4xKSAlIG1heFgpO1xuICAgIC8vIHRoaXMuY2VudGVyWSA9IE1hdGguYWJzKCh0aGlzLmNlbnRlclkgKyBkeSAqIHRoaXMucmFkaXVzICogMC4xKSAlIG1heFkpO1xuICB9XG5cbiAgLy8gc3RhcnQoKSB7XG4gIC8vICAgY29uc3QgYW5pbWF0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAvLyAgICAgLy8gdGhpcy5tb3ZlRG9ncygpO1xuICAvLyAgICAgdGhpcy5yZW5kZXIoKTtcbiAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlQ2FsbGJhY2spO1xuICAvLyAgIH07XG5cbiAgLy8gICBhbmltYXRlQ2FsbGJhY2soKTtcbiAgLy8gfVxuXG4gIC8vIGRyYXcoKSB7XG4gIC8vICAgdGhpcy5yZW5kZXIoKTtcbiAgLy8gICAvLyB0aGlzLm1vdmVEb2coKTtcbiAgLy8gICAvLyB0aGlzLnN0YXJ0KCk7XG4gIC8vICAgLy8gdGhpcy5mb3JjZUZpZWxkLnVwZGF0ZSgpO1xuXG4gIC8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmRvZ3MuZm9yRWFjaCgoZG9nKSA9PiB7XG4gICAgICAvLyBkb2cucmVuZGVyKHRoaXMuY3R4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yY2VGaWVsZC51cGRhdGUoKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lLmJpbmQodGhpcykpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9