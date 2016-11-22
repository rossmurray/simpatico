/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mainloop = __webpack_require__(1);
	
	var mainLoop = _interopRequireWildcard(_mainloop);
	
	var _screen = __webpack_require__(2);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _scene = __webpack_require__(3);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _timeKeeper = __webpack_require__(5);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var scene;
	var screen;
	
	function main() {
	    var canvas = document.getElementById("canvas");
	    var context = canvas.getContext("2d");
	    var width = canvas.clientWidth;
	    var height = canvas.clientHeight;
	    canvas.width = width;
	    canvas.height = height;
	
	    screen = new _screen2.default(context);
	    scene = new _scene2.default(screen);
	    mainLoop.setUpdate(mainUpdate);
	    mainLoop.setDraw(mainDraw);
	    mainLoop.setEnd(mainEnd);
	    mainLoop.start();
	}
	
	function mainUpdate(deltaMs) {
	    timeKeeper.updateTime(deltaMs);
	    scene.update();
	}
	
	function mainDraw(interpolationPercentage) {
	    screen.resize();
	    screen.clear();
	    scene.draw();
	}
	
	function mainEnd(fps, panic) {
	    if (panic) {
	        var discardedTime = Math.round(mainLoop.resetFrameDelta());
	        console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + "ms");
	    }
	}
	
	main();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * mainloop.js 1.0.3-20160320
	 *
	 * @author Isaac Sukin (http://www.isaacsukin.com/)
	 * @license MIT
	 */
	
	!function(a){function b(a){if(v=o(b),!(e+j>a)){for(d+=a-e,e=a,r(a,d),a>g+1e3&&(f=.25*h+.75*f,g=a,h=0),h++,i=0;d>=c;)if(s(c),d-=c,++i>=240){m=!0;break}t(d/c),u(f,m),m=!1}}var c=1e3/60,d=0,e=0,f=60,g=0,h=0,i=0,j=0,k=!1,l=!1,m=!1,n="object"==typeof window?window:a,o=n.requestAnimationFrame||function(){var a=Date.now(),b,d;return function(e){return b=Date.now(),d=Math.max(0,c-(b-a)),a=b+d,setTimeout(function(){e(b+d)},d)}}(),p=n.cancelAnimationFrame||clearTimeout,q=function(){},r=q,s=q,t=q,u=q,v;a.MainLoop={getSimulationTimestep:function(){return c},setSimulationTimestep:function(a){return c=a,this},getFPS:function(){return f},getMaxAllowedFPS:function(){return 1e3/j},setMaxAllowedFPS:function(a){return"undefined"==typeof a&&(a=1/0),0===a?this.stop():j=1e3/a,this},resetFrameDelta:function(){var a=d;return d=0,a},setBegin:function(a){return r=a||r,this},setUpdate:function(a){return s=a||s,this},setDraw:function(a){return t=a||t,this},setEnd:function(a){return u=a||u,this},start:function(){return l||(l=!0,v=o(function(a){t(1),k=!0,e=a,g=a,h=0,v=o(b)})),this},stop:function(){return k=!1,l=!1,p(v),this},isRunning:function(){return k}}, true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (a.MainLoop), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&null!==module&&"object"==typeof module.exports&&(module.exports=a.MainLoop)}(this);
	//# sourceMappingURL=mainloop.min.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Screen = function () {
	    function Screen(context) {
	        _classCallCheck(this, Screen);
	
	        var canvas = context.canvas;
	        this.canvas = canvas;
	        this.context = context;
	        this.width = canvas.width;
	        this.height = canvas.height;
	    }
	
	    _createClass(Screen, [{
	        key: "makeImageData",
	        value: function makeImageData(width, height) {
	            var w = width || this.width;
	            var h = height || this.height;
	            var imageData = this.context.createImageData(w, h);
	            return imageData;
	        }
	    }, {
	        key: "clear",
	        value: function clear(color) {
	            this.context.shadowBlur = 0;
	            if (!color) {
	                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	                return;
	            }
	            this.context.fillStyle = color;
	            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	        }
	    }, {
	        key: "resize",
	        value: function resize() {
	            var width = this.canvas.clientWidth;
	            var height = this.canvas.clientHeight;
	            if (this.canvas.width != width || this.canvas.height != height) {
	                this.canvas.width = width;
	                this.canvas.height = height;
	                this.width = width;
	                this.height = height;
	            }
	        }
	    }, {
	        key: "drawCircles",
	        value: function drawCircles(circles) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = circles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var circle = _step.value;
	
	                    drawCircle(this.context, circle.x, circle.y, circle.r, circle.color);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "drawLines",
	        value: function drawLines(lines) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var line = _step2.value;
	
	                    drawLine(this.context, line.x, line.y, line.radians, line.length);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "drawRectangles",
	        value: function drawRectangles(rectangles) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = rectangles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var rect = _step3.value;
	
	                    this.context.fillStyle = rect.color;
	                    this.context.fillRect(rect.x, rect.y, rect.width, rect.height);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "drawImageStretch",
	        value: function drawImageStretch(imageElement) {
	            var width = this.canvas.width;
	            var height = this.canvas.height;
	            this.context.drawImage(imageElement, 0, 0, width, height);
	        }
	    }], [{
	        key: "virtualContext",
	        value: function virtualContext(width, height) {
	            var canvas = document.createElement("canvas");
	            canvas.width = width;
	            canvas.height = height;
	            var context = canvas.getContext("2d");
	            return context;
	        }
	    }]);
	
	    return Screen;
	}();
	
	function drawCircle(context, x, y, r, fillStyle) {
	    context.beginPath();
	    context.arc(x, y, r, 0, 2 * Math.PI, false);
	    if (fillStyle) {
	        context.fillStyle = fillStyle;
	    }
	    context.fill();
	}
	
	function drawLine(context, x, y, length, radians, strokeStyle, lineWidth) {
	    var x2 = x + length * Math.cos(radians);
	    var y2 = y + length * Math.sin(radians);
	    context.beginPath();
	    context.moveTo(x, y);
	    context.lineTo(x2, y2);
	    if (strokeStyle) {
	        context.strokeStyle = strokeStyle;
	    }
	    if (lineWidth) {
	        context.lineWidth = lineWidth;
	    }
	    context.stroke();
	}
	
	exports.default = Screen;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings = __webpack_require__(4);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _timeKeeper = __webpack_require__(5);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	var _wave = __webpack_require__(6);
	
	var _wave2 = _interopRequireDefault(_wave);
	
	var _husl = __webpack_require__(7);
	
	var husl = _interopRequireWildcard(_husl);
	
	var _utility = __webpack_require__(8);
	
	var utility = _interopRequireWildcard(_utility);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Scene = function () {
	    function Scene(screen) {
	        _classCallCheck(this, Scene);
	
	        timeKeeper.updateTime(8500);
	        var boundary = makeBoundary(screen);
	        var n = _settings2.default.numSliders;
	        var sliders = makeSliders(n, boundary);
	        updateSliders(sliders, boundary);
	
	        this.boundary = boundary;
	        this.sliders = sliders;
	        this.screen = screen;
	    }
	
	    _createClass(Scene, [{
	        key: "update",
	        value: function update() {
	            updateSliders(this.sliders, this.boundary);
	        }
	    }, {
	        key: "draw",
	        value: function draw() {
	            drawSliders(this.screen, this.sliders);
	        }
	    }]);
	
	    return Scene;
	}();
	
	function updateSliders(sliders, boundary) {
	    //const maxX = boundary.width + boundary.x - boundary.width * settings.sliderWidth;
	    var hueF = (0, _wave2.default)(function (x) {
	        return _wave2.default.linear(x);
	    }, { min: 0, max: 360 });
	    var widthF = (0, _wave2.default)(function (x) {
	        return _wave2.default.triangle(x);
	    }, { min: _settings2.default.sliderWidthMin, max: _settings2.default.sliderWidthMax });
	    var widthAt1 = boundary.width * widthF(1 - Number.EPSILON);
	    var widthAt0 = boundary.width * widthF(0);
	    var maxX = boundary.width + boundary.x - boundary.width * widthAt1;
	    //const xPosF = wave(x => wave.linear(x), {min: boundary.x, max: maxX});
	    var xMargin = boundary.x * 2;
	    var xPosF = (0, _wave2.default)(function (x) {
	        return _wave2.default.smooth(x);
	    }, { min: 0 - widthAt0, max: boundary.width + xMargin });
	    for (var i = 0; i < sliders.length; i++) {
	        var slider = sliders[i];
	        var motionValue = slider.motion();
	        var hue = hueF(motionValue);
	        var widthPercent = widthF(motionValue);
	        slider.color = husl.toHex(hue, 100, 60);
	        slider.width = boundary.width * widthPercent;
	        var x = xPosF(motionValue);
	        // if(x < 0) {
	        //     slider.x = 0;
	        //     slider.width = slider.width + x;
	        // }
	        // else {
	        //     slider.x = x;
	        // }
	        slider.x = x;
	        //slider.x = boundary.width / 2 - slider.width / 2;
	    }
	}
	
	function makeSliders(count, boundary) {
	    var result = [];
	    var heightMin = boundary.height * _settings2.default.sliderHeightMin / count;
	    var heightMax = boundary.height * _settings2.default.sliderHeightMax / count;
	    var frequencyFunction = function frequencyFunction(x) {
	        return utility.scale(x, 1000 / _settings2.default.slowestSliderPeriodMs, 1000 / _settings2.default.fastestSliderPeriodMs);
	    };
	    var heightFunction = (0, _wave2.default)(function (x) {
	        return _wave2.default.smooth(x / count);
	    }, { min: heightMin, max: heightMax });
	
	    var _loop = function _loop() {
	        var frequency = frequencyFunction(i / count);
	        var motion = (0, _wave2.default)(function (x) {
	            return _wave2.default.time(frequency);
	        });
	        var y = boundary.y + boundary.height / count * (count - i - 1) + boundary.height / count / 2;
	        var slider = {
	            x: 0,
	            y: y,
	            motion: motion,
	            height: heightFunction(i)
	        };
	        result.push(slider);
	    };
	
	    for (var i = 0; i < count; i++) {
	        _loop();
	    }
	    return result;
	}
	
	function drawSliders(screen, sliders) {
	    screen.drawRectangles(sliders);
	}
	
	function makeBoundary(screen) {
	    var marginPercent = _settings2.default.screenMargin;
	    var xMin = screen.width * marginPercent;
	    var yMin = screen.height * marginPercent;
	    var xMax = screen.width - xMin;
	    var yMax = screen.height - yMin;
	    var boundary = {
	        x: xMin,
	        y: yMin,
	        width: xMax - xMin,
	        height: yMax - yMin
	    };
	    return boundary;
	}
	
	exports.default = Scene;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var settings = {
	    palette: ["#f00"],
	    numSliders: 45,
	    sliderHeightMin: 0.1,
	    sliderHeightMax: 1.06,
	    slowestSliderPeriodMs: 2000,
	    fastestSliderPeriodMs: 1000,
	    screenMargin: 0.05,
	    sliderWidthMin: 0.01,
	    sliderWidthMax: 0.25
	};
	
	exports.default = settings;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.updateTime = updateTime;
	exports.getTimeProgress = getTimeProgress;
	exports.getTotalTimeMs = getTotalTimeMs;
	exports.getLastDeltaMs = getLastDeltaMs;
	var totalTimeMs = 0;
	var lastDeltaMs = 0;
	
	function updateTime(deltaMs) {
	    lastDeltaMs = deltaMs;
	    totalTimeMs += deltaMs;
	}
	
	//todo: can this be shuffled around to improve the performance?
	function getTimeProgress(frequencyHz) {
	    var periodMs = 1000 / frequencyHz;
	    return totalTimeMs % periodMs / periodMs;
	}
	
	function getTotalTimeMs() {
	    return totalTimeMs;
	}
	
	function getLastDeltaMs() {
	    return lastDeltaMs;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _timeKeeper = __webpack_require__(5);
	
	var timeKeeper = _interopRequireWildcard(_timeKeeper);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var wave = build;
	wave.linear = linear;
	wave.sawtooth = sawtooth;
	wave.sine = sine;
	wave.triangle = triangle;
	wave.square = square;
	wave.round = round;
	wave.reverse = reverse;
	wave.time = time;
	wave.timePeriod = timePeriod;
	wave.smooth = smoothStep;
	exports.default = wave;
	
	/**
	 * config options:
	 * frequency
	 * shift
	 * min
	 * max
	 * frequencyMod
	 * phaseMod
	 * carrierMin
	 * carrierMax
	 * carrierFrequency
	 */
	
	function build(carrier, config) {
	    if (!carrier || typeof carrier !== "function") {
	        return function (x) {
	            return carrier;
	        };
	    }
	    if (!config) {
	        return carrier;
	    }
	    var carrierFrequency = config.carrierFrequency || 1;
	    var carrierMin = config.carrierMin || 0;
	    var carrierMax = config.carrierMax || 1;
	    var targetMin = config.min || 0;
	    var targetMax = config.max || 1;
	    var frequency = config.frequency || 1;
	    var shift = config.shift || 0;
	    var frequencyMod = config.frequencyMod || function (x) {
	        return 1;
	    };
	    var phaseMod = config.phaseMod || function (x) {
	        return 0;
	    };
	    var targetDelta = targetMax - targetMin;
	    var carrierDelta = carrierMax - carrierMin;
	
	    var A = carrierDelta != 0 ? targetDelta / carrierDelta : 0;
	    var B = carrierFrequency != 0 ? frequency / carrierFrequency : 0;
	    var C = -shift;
	    var D = targetMin - carrierMin;
	
	    var result = function result(x) {
	        var a = A;
	        var b = B * frequencyMod(x);
	        var c = C + phaseMod(x);
	        var d = D;
	        var func = carrier;
	        return a * func(b * (x + c)) + d;
	    };
	    return result;
	}
	
	function time(x) {
	    return timeKeeper.getTimeProgress(x);
	}
	
	function timePeriod(x) {
	    var totalTimeMs = timeKeeper.getTotalTimeMs();
	    return totalTimeMs % x / x;
	}
	
	function linear(x) {
	    return x % 1;
	}
	
	//todo improve this. generate using fft?
	function sawtooth(x) {
	    return linear(x);
	}
	
	function sine(x) {
	    return Math.sin(x * Math.PI * 2) * 0.5 + 0.5;
	}
	
	function triangle(x) {
	    return Math.abs((0.5 + x) % 1 - 0.5) * 2;
	}
	
	//todo this looks wrong. test
	function square(x) {
	    Math.sign(sine(x));
	}
	
	//todo: make this periodic
	function round(x) {
	    var y = x % 1;
	    var rad = Math.PI / 2;
	    var down = 3 * rad;
	    var turn = y * rad;
	    return 1 + Math.sin(down + turn);
	}
	
	//linear from 1 (exclusive) down to 0 (inclusive)
	function reverse(x) {
	    return 1 - Number.EPSILON - x;
	}
	
	function smoothStep(x) {
	    var y = x % 1;
	    return y * y * (3 - 2 * y);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(){function f(e){return function(f,g,b){return e([f,g,b])}}var h=h||{};(function(){function e(){}function f(){}function g(){}h.h=h.h||{};g.m=function(a){a=a.charCodeAt(1);if(a==a)return a};g.substr=function(a,b,c){if(null!=b&&0!=b&&null!=c&&0>c)return"";null==c&&(c=a.length);0>b?(b=a.length+b,0>b&&(b=0)):0>c&&(c=a.length+c-b);return a.substr(b,c)};f.parseInt=function(a){var b=parseInt(a,10);0!=b||120!=g.m(a)&&88!=g.m(a)||(b=parseInt(a));return isNaN(b)?null:b};e.L=function(a){var b="";do b=
	"0123456789ABCDEF".charAt(a&15)+b,a>>>=4;while(0<a);for(;2>b.length;)b="0"+b;return b};var b=h.h.a=function(){};b.s=function(a){for(var d=[],c=Math.pow(a+16,3)/1560896,c=c>b.o?c:a/b.i,k=0;3>k;)for(var l=k++,e=b.c[l][0],f=b.c[l][1],l=b.c[l][2],g=0;2>g;){var h=g++,m=(632260*l-126452*f)*c+126452*h;d.push([(284517*e-94839*l)*c/m,((838422*l+769860*f+731718*e)*a*c-769860*h*a)/m])}return d};b.T=function(a,b){return(a[1]-b[1])/(b[0]-a[0])};b.K=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))};
	b.Y=function(a,b){return b[1]/(Math.sin(a)-b[0]*Math.cos(a))};b.C=function(a){a=b.s(a);for(var d=1.7976931348623157E308,c=0;2>c;)var k=c++,e=a[k][0],k=a[k][1],f=b.T([e,k],[-1/e,0]),d=Math.min(d,b.K([f,k+f*e]));return d};b.B=function(a,d){for(var c=d/360*Math.PI*2,e=b.s(a),f=1.7976931348623157E308,g=0;g<e.length;){var h=e[g];++g;h=b.Y(c,h);0<=h&&(f=Math.min(f,h))}return f};b.b=function(a,b){for(var c=0,d=0,e=a.length;d<e;)var f=d++,c=c+a[f]*b[f];return c};b.g=function(a){return.0031308>=a?12.92*a:
	1.055*Math.pow(a,.4166666666666667)-.055};b.l=function(a){return.04045<a?Math.pow((a+.055)/1.055,2.4):a/12.92};b.ca=function(a){return[b.g(b.b(b.c[0],a)),b.g(b.b(b.c[1],a)),b.g(b.b(b.c[2],a))]};b.aa=function(a){a=[b.l(a[0]),b.l(a[1]),b.l(a[2])];return[b.b(b.j[0],a),b.b(b.j[1],a),b.b(b.j[2],a)]};b.da=function(a){return a<=b.o?a/b.f*b.i:116*Math.pow(a/b.f,.3333333333333333)-16};b.U=function(a){return 8>=a?b.f*a/b.i:b.f*Math.pow((a+16)/116,3)};b.ba=function(a){var d=a[0],c=a[1];a=d+15*c+3*a[2];0!=a?
	(d=4*d/a,a=9*c/a):a=d=NaN;c=b.da(c);return 0==c?[0,0,0]:[c,13*c*(d-b.D),13*c*(a-b.F)]};b.$=function(a){var d=a[0];if(0==d)return[0,0,0];var c=a[1]/(13*d)+b.D;a=a[2]/(13*d)+b.F;d=b.U(d);c=0-9*d*c/((c-4)*a-c*a);return[c,d,(9*d-15*a*d-a*c)/(3*a)]};b.Z=function(a){var b=a[0],c=a[1],e=a[2];a=Math.sqrt(c*c+e*e);1E-8>a?c=0:(c=180*Math.atan2(e,c)/3.141592653589793,0>c&&(c=360+c));return[b,a,c]};b.X=function(a){var b=a[1],c=a[2]/360*2*Math.PI;return[a[0],Math.cos(c)*b,Math.sin(c)*b]};b.P=function(a){var d=
	a[0],c=a[1];a=a[2];if(99.9999999<a)return[100,0,d];if(1E-8>a)return[0,0,d];c*=b.B(a,d)/100;return[a,c,d]};b.V=function(a){var d=a[0],c=a[1];a=a[2];if(99.9999999<d)return[a,0,100];if(1E-8>d)return[a,0,0];var e=b.B(d,a);return[a,c/e*100,d]};b.S=function(a){var d=a[0],c=a[1];a=a[2];if(99.9999999<a)return[100,0,d];if(1E-8>a)return[0,0,d];c*=b.C(a)/100;return[a,c,d]};b.W=function(a){var d=a[0],c=a[1];a=a[2];if(99.9999999<d)return[a,0,100];if(1E-8>d)return[a,0,0];var e=b.C(d);return[a,c/e*100,d]};b.G=function(a){for(var b=
	"#",c=0,f=a.length;c<f;)var g=c++,b=b+e.L(Math.round(255*a[g]));return b};b.u=function(a){return[f.parseInt("0x"+g.substr(a,1,2).toUpperCase())/255,f.parseInt("0x"+g.substr(a,3,2).toUpperCase())/255,f.parseInt("0x"+g.substr(a,5,2).toUpperCase())/255]};b.A=function(a){return b.ca(b.$(b.X(a)))};b.J=function(a){return b.Z(b.ba(b.aa(a)))};b.v=function(a){return b.A(b.P(a))};b.H=function(a){return b.V(b.J(a))};b.w=function(a){return b.A(b.S(a))};b.I=function(a){return b.W(b.J(a))};b.O=function(a){return b.G(b.v(a))};
	b.R=function(a){return b.G(b.w(a))};b.M=function(a){return b.H(b.u(a))};b.N=function(a){return b.I(b.u(a))};b.c=[[3.240969941904521,-1.537383177570093,-.498610760293],[-.96924363628087,1.87596750150772,.041555057407175],[.055630079696993,-.20397695888897,1.056971514242878]];b.j=[[.41239079926595,.35758433938387,.18048078840183],[.21263900587151,.71516867876775,.072192315360733],[.019330818715591,.11919477979462,.95053215224966]];b.f=1;b.D=.19783000664283;b.F=.46831999493879;b.i=903.2962962;b.o=.0088564516})("undefined"!=
	typeof console?console:{log:function(){}});var e=h.h,e={fromRGB:f(e.a.H),fromHex:e.a.M,toRGB:f(e.a.v),toHex:f(e.a.O),p:{fromRGB:f(e.a.I),fromHex:e.a.N,toRGB:f(e.a.w),toHex:f(e.a.R)}};"undefined"!==typeof jQuery&&(jQuery.husl=e);"undefined"!==typeof module&&(module.exports=e);"undefined"!=="function"&&!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));"undefined"!==typeof window&&(window.HUSL=e)})();


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.randomInt = randomInt;
	exports.randomNumber = randomNumber;
	exports.distance = distance;
	exports.clamp = clamp;
	exports.scale = scale;
	exports.scaleFrom = scaleFrom;
	function randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function randomNumber(min, max) {
	    return Math.random() * (max - min) + min;
	}
	
	function distance(a, b) {
	    return Math.hypot(b.x - a.x, b.y - a.y);
	}
	
	function clamp(value, min, max) {
	    return Math.min(Math.max(value, min), max);
	}
	
	function scale(value, min, max) {
	    var delta = max - min;
	    var result = value * delta + min;
	    return result;
	}
	
	function scaleFrom(value, valueMin, valueMax, newMin, newMax) {
	    var oldDelta = valueMax - valueMin;
	    var newDelta = newMax - newMin;
	    //difference in scale between old range and new range
	    var ratio = newDelta / oldDelta;
	    //shift the value so zero is the min, then scale by the ratio, then shift to the new min.
	    var result = (value - valueMin) * ratio + newMin;
	    return result;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map