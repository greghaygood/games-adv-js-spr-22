"use strict";

var _this = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."); // ES5

var aVar = 10; // ES2015 => ES6

var anotherVar = "a let var";
var aConstant = "a constant";

function doSomething() {}

var doSomethingElse = function doSomethingElse() {};

var aButton = document.querySelector("button");
aButton.addEventListener("click", function (evt) {
  // do something
  console.log("clicked A");
});
aButton.addEventListener("click", function (evt) {
  // do something
  console.log("clicked B");
  aButton.innerText = "Clicked";
});

function myCallback(evt) {
  // do something
  console.log("clicked C");
}

aButton.addEventListener("click", myCallback);
var SLIDES_PER_DECK = 4;
var myObject = {
  aVar: 10,
  something: 21,
  doSomething: function doSomething() {
    console.log("hi there", aVar, this.aVar);
  },
  start: function start() {
    console.log("start hi there", _this.aVar);
  }
};
console.log("aVar", myObject.aVar);
console.log("did something", myObject.doSomething());
aButton.addEventListener("click", myObject.doSomething); // IIFE = immediately invoked function expression

var myObject2 = function () {
  var aVar = 10;
  var aVar2 = "b";

  function show() {
    console.log("me", this);
  }

  function startFunction() {
    console.log('starting...', aVar, aVar2, this.aVar2);
  }

  ;

  function updateVar(newValue) {
    aVar2 = newValue;
  }

  return {
    start: startFunction,
    update: updateVar,
    show: show // aVar2: aVar2

  };
}();

var MyObject = /*#__PURE__*/function () {
  function MyObject() {
    _classCallCheck(this, MyObject);

    _defineProperty(this, "aVar", "a");
  }

  _createClass(MyObject, [{
    key: "start",
    value: function start() {
      console.log('starting...', aVar);
    }
  }]);

  return MyObject;
}();

var Slide = /*#__PURE__*/function () {
  function Slide() {
    _classCallCheck(this, Slide);
  }

  _createClass(Slide, [{
    key: "build",
    value: function build() {}
  }]);

  return Slide;
}();

var Carousel = /*#__PURE__*/function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    _defineProperty(this, "slides", []);
  }

  _createClass(Carousel, [{
    key: "makeSlides",
    value: function makeSlides() {
      var slideArray = [];

      for (var i = 0; i < slideArray.length; i++) {
        var slide = new Slide();
        slides.push(slide);
      }
    }
  }]);

  return Carousel;
}();

var Car = /*#__PURE__*/function () {
  function Car() {
    _classCallCheck(this, Car);
  }

  _createClass(Car, [{
    key: "setType",
    value: function setType(name) {
      this.name = name;
    }
  }, {
    key: "drive",
    value: function drive() {
      console.log('driving my ' + this.name);
    }
  }]);

  return Car;
}();
//# sourceMappingURL=main.js.map
