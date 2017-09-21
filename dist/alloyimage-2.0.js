/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	__webpack_require__(56);

	__webpack_require__(58);

	__webpack_require__(60);

	__webpack_require__(61);

	__webpack_require__(62);

	__webpack_require__(63);

	__webpack_require__(64);

	__webpack_require__(65);

	__webpack_require__(66);

	__webpack_require__(67);

	__webpack_require__(68);

	__webpack_require__(69);

	__webpack_require__(70);

	__webpack_require__(71);

	__webpack_require__(72);

	__webpack_require__(73);

	__webpack_require__(74);

	__webpack_require__(75);

	__webpack_require__(76);

	__webpack_require__(77);

	__webpack_require__(78);

	__webpack_require__(79);

	__webpack_require__(80);

	__webpack_require__(81);

	__webpack_require__(82);

	__webpack_require__(83);

	__webpack_require__(84);

	__webpack_require__(85);

	__webpack_require__(86);

	__webpack_require__(87);

	__webpack_require__(88);

	__webpack_require__(89);

	__webpack_require__(90);

	__webpack_require__(91);

	__webpack_require__(92);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.AlloyImage = _AlloyImage2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alteration = exports.Filter = undefined;

	var _filter = __webpack_require__(2);

	var _filter2 = _interopRequireDefault(_filter);

	var _alteration = __webpack_require__(7);

	var _alteration2 = _interopRequireDefault(_alteration);

	var _core = __webpack_require__(8);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _core2.default; //import addLayer from './addLayer';
	/*
	import act from './act';
	import size from './size';
	import show from './show';
	import clone from './clone';
	*/

	exports.Filter = _filter2.default;
	exports.Alteration = _alteration2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _PixelProcesser2 = __webpack_require__(3);

	var _PixelProcesser3 = _interopRequireDefault(_PixelProcesser2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Filter = function (_PixelProcesser) {
	    _inherits(Filter, _PixelProcesser);

	    function Filter() {
	        _classCallCheck(this, Filter);

	        return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));
	    }

	    return Filter;
	}(_PixelProcesser3.default);

	exports.default = Filter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dorsyMath = __webpack_require__(4);

	var _dorsyMath2 = _interopRequireDefault(_dorsyMath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PixelProcesser = function () {
	    function PixelProcesser() {
	        _classCallCheck(this, PixelProcesser);
	    }

	    _createClass(PixelProcesser, [{
	        key: "doProcess",
	        value: function doProcess(imgData, args) {
	            var _this = this;

	            return new Promise(function (rs, rj) {
	                var result = _this.process(imgData, { dorsyMath: _dorsyMath2.default })(args);

	                rs(result);
	            });
	        }
	    }]);

	    return PixelProcesser;
	}();

	exports.default = PixelProcesser;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _c = __webpack_require__(5);

	var _c2 = _interopRequireDefault(_c);

	var _matrix = __webpack_require__(6);

	var _matrix2 = _interopRequireDefault(_matrix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.default = new (function () {
	    function DorsyMath() {
	        _classCallCheck(this, DorsyMath);

	        this.Matrix = _matrix2.default;
	        this.C = _c2.default;
	    }

	    _createClass(DorsyMath, [{
	        key: 'FFT1',
	        value: function FFT1(dataArr) {
	            /*
	             * @description:快速傅里叶变换
	             * @按时间抽取
	             * */
	            var size = dataArr.length;
	            var count = 0;

	            //------计算权重W------------
	            var W = [];
	            for (var i = 0; i < size; i++) {
	                W[i] = this.exp(-2 * Math.PI * i / size);
	            }

	            butterflyCal();
	            return dataArr;

	            //蝶形运算单元
	            function butterflyCal() {
	                count++;

	                //蝶形单元个数
	                var singleLength = size / Math.pow(2, count);
	                var everyLength = size / singleLength;

	                for (var i = 0; i < singleLength; i++) {

	                    //逐次计算蝶形单元
	                    singleButterflyCal(i * everyLength, (i + 1) * everyLength - 1, count);
	                }

	                //如果单元个数大于1继续运算
	                if (singleLength > 1) {

	                    //递归
	                    butterflyCal();
	                } else {}
	            }

	            //一个蝶形单元 n运算次数 蝶形单元的成对间隔
	            function singleButterflyCal(start, end, n) {

	                var delta = Math.pow(2, n - 1);

	                for (var i = start, j = 0; i <= end - delta; i++) {

	                    //i 的运算对
	                    var pairI = i + delta;

	                    //计算i运算时的权重下标
	                    var currWeightForI = j * size / Math.pow(2, n);

	                    //计算i的运算对时候的权重
	                    var currWeightForPairI = currWeightForI + size / 4;

	                    if (!(dataArr[i] instanceof _c2.default)) dataArr[i] = new _c2.default(dataArr[i]);

	                    if (!(dataArr[pairI] instanceof _c2.default)) dataArr[pairI] = new _c2.default(dataArr[pairI]);

	                    var currResultForI = dataArr[i].plus(dataArr[pairI].mutiply(W[currWeightForI]));
	                    var currResultForPairI = dataArr[i].plus(dataArr[pairI].mutiply(W[currWeightForPairI]));

	                    dataArr[i] = currResultForI;
	                    dataArr[pairI] = currResultForPairI;

	                    j++;
	                }
	            }
	        }
	    }, {
	        key: 'DFT',
	        value: function DFT() {
	            /*
	             * @description:离散傅里叶变换
	             * */

	        }
	    }, {
	        key: 'exp',
	        value: function exp(theta, r) {
	            //  r e^(i * theta) = r cos theta + r i * sin theta

	            theta = theta || 0;
	            r = r || 1;

	            var tempC = new _c2.default();
	            tempC.r = r * Math.cos(theta);
	            tempC.i = r * Math.sin(theta);

	            return tempC;
	        }
	    }, {
	        key: 'lagrange',
	        value: function lagrange(xArr, yArr) {
	            /*
	             * Lagrange插值
	             * @usage   M.lagrange([1,2],[2,4])(3);
	             * */
	            var num = xArr.length;
	            function getLk(x, k) {
	                //计算lk
	                var omigaXk = 1;
	                var omigaX = 1;
	                for (var i = 0; i < num; i++) {
	                    if (i != k) {
	                        omigaXk *= xArr[k] - xArr[i];
	                        omigaX *= x - xArr[i];
	                    }
	                }
	                var lk = omigaX / omigaXk;
	                return lk;
	            }
	            var getY = function getY(x) {
	                var L = 0;
	                for (var k = 0; k < num; k++) {
	                    var lk = getLk(x, k);
	                    L += yArr[k] * lk;
	                }
	                return L;
	            };
	            return getY;
	        }
	    }, {
	        key: 'applyMatrix',
	        value: function applyMatrix(imgData, matrixArr, low) {
	            //对图象信号实行掩模算子变换 low为阈值,滤波运算

	            low = low || 0;
	            var data = imgData.data;
	            var width = imgData.width;
	            var height = imgData.height;
	            var matrixSize = matrixArr.length;
	            var template = new _matrix2.default(matrixArr, matrixSize, 1);
	            var tempData = [];
	            var start = -(Math.sqrt(matrixSize) - 1) / 2;

	            for (var i = 0, n = data.length; i < n; i += 4) {
	                var ii = i / 4;
	                var row = parseInt(ii / width);
	                var col = ii % width;
	                if (row == 0 || col == 0) continue;

	                var pixelArr = [[], [], []];
	                for (var k = start; k <= -start; k++) {
	                    var currRow = row + k;

	                    for (var kk = start; kk <= -start; kk++) {

	                        var currCol = col + kk;
	                        var currI = (currRow * width + currCol) * 4;

	                        for (var j = 0; j < 3; j++) {
	                            var tempI = currI + j;
	                            pixelArr[j].push(data[tempI]);
	                        }
	                    }
	                }

	                var pixelMatrix = new _matrix2.default(pixelArr, 3, matrixSize);
	                var resultMatrix = pixelMatrix.mutiply(template);

	                for (var j = 0; j < 3; j++) {
	                    tempData[i + j] = resultMatrix.data[j];
	                }
	                tempData[i + 4] = data[i + 4];
	            }

	            for (var i = 0, n = data.length; i < n; i++) {
	                if (tempData[i]) {
	                    data[i] = tempData[i] < low ? tempData[i] : data[i];
	                }
	            }

	            return imgData;
	        }
	    }, {
	        key: 'RGBToHSI',
	        value: function RGBToHSI(R, G, B) {
	            var theta = (R - G + R - B) / 2 / Math.sqrt((R - G) * (R - G) + (R - B) * (G - B)) || 0;
	            theta = Math.acos(theta);
	            var H = B > G ? 2 * Math.PI - theta : theta;

	            if (R + G + B > 0) {
	                var S = 1 - 3 * Math.min(R, G, B) / (R + G + B);
	            } else {
	                var S = 0;
	            }

	            var I = (R + G + B) / 3;

	            if (H > 2 * Math.PI) H = 2 * Math.PI;
	            if (H < 0) H = 0;

	            return {
	                H: H,
	                S: S,
	                I: I
	            };
	        }
	    }, {
	        key: 'HSIToRGB',
	        value: function HSIToRGB(H, S, I) {
	            //H为弧度值
	            //H (-Math.PI , Math.PI)  S (-1,1) I (-255,255)
	            if (H < 0) {
	                H %= 2 * Math.PI;
	                H += 2 * Math.PI;
	            } else {
	                H %= 2 * Math.PI;
	            }

	            if (H <= Math.PI * 2 / 3) {
	                var B = I * (1 - S);
	                var R = I * (1 + S * Math.cos(H) / Math.cos(Math.PI / 3 - H));
	                var G = 3 * I - (R + B);
	            } else if (H <= Math.PI * 4 / 3) {
	                H = H - Math.PI * 2 / 3;

	                var R = I * (1 - S);
	                var G = I * (1 + S * Math.cos(H) / Math.cos(Math.PI / 3 - H));
	                var B = 3 * I - (G + R);
	            } else {
	                H = H - Math.PI * 4 / 3;

	                var G = I * (1 - S);
	                var B = I * (1 + S * Math.cos(H) / Math.cos(Math.PI / 3 - H));
	                var R = 3 * I - (G + B);
	            }

	            return {
	                R: R,
	                G: G,
	                B: B
	            };
	        }
	    }, {
	        key: 'applyInHSI',
	        value: function applyInHSI(imgData, func) {
	            //在hsi空间上应用func
	            /*
	             * function(i){
	             *      i.H += 3;
	             * }
	             * H (-2*Math.PI , 2 * Math.PI)  S (-1,1) I (-255,255)
	             * */
	            var colorMap = ["R", "Y", "G", "C", "B", "M"];
	            var data = imgData.data;

	            var d30 = Math.PI / 6;
	            var d60 = Math.PI / 3;
	            for (var i = 0, n = data.length; i < n; i += 4) {
	                var hsiObj = this.RGBToHSI(data[i], data[i + 1], data[i + 2]);

	                //得到颜色属性
	                var h = hsiObj.H + d30;
	                var color = ~~(h / d60);
	                var rColor = colorMap[color % 6];

	                func(hsiObj, rColor, data[i + 3]);

	                if (hsiObj.S > 1) hsiObj.S = 1;
	                if (hsiObj.S < 0) hsiObj.S = 0;

	                var rgbObj = this.HSIToRGB(hsiObj.H, hsiObj.S, hsiObj.I);
	                data[i] = rgbObj.R;
	                data[i + 1] = rgbObj.G;
	                data[i + 2] = rgbObj.B;
	            }
	        }
	    }, {
	        key: 'applyInCoordinate',
	        value: function applyInCoordinate(imgData, func) {} //在坐标空间上应用func
	        /*
	         * function(dot){
	         *      
	         * }
	         * */


	        //计算两个点之间的距离
	        //p1   array
	        //p2   array

	    }, {
	        key: 'distance',
	        value: function distance(p1, p2) {
	            p2 = p2 || [0, 0];

	            p1 = new _c2.default(p1[0], p1[1]);
	            p2 = new _c2.default(p2[0], p2[1]);

	            var p3 = p1.minus(p2);
	            return p3.distance();
	        }

	        //将(x,y)的坐标转为单维的i

	    }, {
	        key: 'xyToIFun',
	        value: function xyToIFun(width) {
	            return function (x, y, z) {
	                z = z || 0;
	                return (y * width + x) * 4 + z;
	            };
	        }

	        //在(x,y)进行运算
	        //rgbfun 在rgb三个上进行的操作 aFun在alpha进行的操作
	        //rgbFun:   function(r, g, b){
	        //      return [r, g, b]
	        //     
	        //}

	    }, {
	        key: 'xyCal',
	        value: function xyCal(imgData, x, y, rgbFun, aFun) {
	            var xyToIFun = this.xyToIFun(imgData.width);
	            var j = xyToIFun(x, y, 0);
	            var data = imgData.data;
	            var processedData = rgbFun(data[j], data[j + 1], data[j + 2]);

	            if (processedData) {
	                data[j] = processedData[0];
	                data[j + 1] = processedData[1];
	                data[j + 2] = processedData[2];
	            }

	            if (aFun) {
	                data[j + 3] = aFun(data[j + 3]);
	            }
	        }
	    }]);

	    return DorsyMath;
	}())();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var C = function () {
	    function C(r, i) {
	        _classCallCheck(this, C);

	        /*
	         * @description:复数对象
	         *
	         * */
	        this.r = r || 0; //实部
	        this.i = i || 0; //虚部
	    }

	    _createClass(C, [{
	        key: "plus",
	        value: function plus(c) {
	            var tempC = new C();
	            tempC.r = this.r + c.r;
	            tempC.i = this.i + c.i;

	            return tempC;
	        }
	    }, {
	        key: "minus",
	        value: function minus(c) {
	            var tempC = new C();
	            tempC.r = this.r - c.r;
	            tempC.i = this.i - c.i;

	            return tempC;
	        }
	    }, {
	        key: "mutiply",
	        value: function mutiply(c) {
	            var tempC = new C();
	            tempC.r = this.r * c.r - this.i * c.i;
	            tempC.i = this.r * c.i + this.i * c.r;

	            return tempC;
	        }
	    }, {
	        key: "divide",
	        value: function divide(c) {

	            var tempC = new C();

	            var m = c.mutiply(c.conjugated());
	            var f = this.mutiply(c.conjugated());
	            tempC.r = f.r / m.r;
	            tempC.i = f.i / m.r;

	            return tempC;
	        }
	    }, {
	        key: "conjugated",
	        value: function conjugated() {
	            //取共轭
	            var tempC = new C(this.r, -this.i);
	            return tempC;
	        }

	        //取模

	    }, {
	        key: "distance",
	        value: function distance() {
	            return Math.sqrt(this.r * this.r + this.i * this.i);
	        }
	    }]);

	    return C;
	}();

	exports.default = C;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Matrix = function () {
	    function Matrix(arr, arg, arg2) {
	        _classCallCheck(this, Matrix);

	        /*
	        * @descriptiont:矩阵类
	        * 构造一个矩阵,当然从原始的数据构造,但具有矩阵的所有基本运算方法
	        * arr参数可以为矩阵,附加字符串参数为构造的行列如 ([0,0],"3*4")    或("构造3*4的1矩阵")  ("构造3*4的0矩阵")
	        * */
	        var resultArr = [];

	        if (arg) {

	            if (isNaN(arg)) {
	                var m = /(\d+)\s*\*/.exec(arg)[1];
	                var n = /\*\s*(\d+)/.exec(arg)[1];
	            } else {
	                m = arg;
	                n = arg2;
	            }

	            //本身二维的
	            if (arr[0] && arr[0][0]) {
	                for (var i = 0; i < m; i++) {
	                    resultArr[i] = [];
	                    for (var j = 0; j < n; j++) {
	                        resultArr[i][j] = arr[i][j] || 0;
	                    }
	                }

	                //一维的
	            } else {

	                for (var i = 0; i < m; i++) {
	                    resultArr[i] = [];
	                    for (var j = 0; j < n; j++) {
	                        var t = i * n + j;
	                        resultArr[i][j] = arr[i * n + j] || 0;
	                    }
	                }
	            }

	            this.m = m;
	            this.n = n;
	        } else {
	            this.m = arr.length;
	            this.n = arr[0].length;
	        }

	        this.data = resultArr;
	    }

	    _createClass(Matrix, [{
	        key: "plus",
	        value: function plus(matrix) {
	            if (this.m != matrix.m || this.n != matrix.n) {
	                throw new Error("矩阵加法行列不匹配");
	            }

	            var tempM = new Matrix([], this.m, this.n);
	            for (var i = 0; i < this.m; i++) {
	                for (var j = 0; j < this.n; j++) {
	                    tempM.data[i][j] = this.data[i][j] + matrix.data[i][j];
	                }
	            }
	            return tempM;
	        }
	    }, {
	        key: "minus",
	        value: function minus(matrix) {
	            if (this.m != matrix.m || this.n != matrix.n) {
	                throw new Error("矩阵减法法行列不匹配");
	            }

	            var tempM = new Matrix([], this.m, this.n);
	            for (var i = 0; i < this.m; i++) {
	                for (var j = 0; j < this.n; j++) {
	                    tempM.data[i][j] = this.data[i][j] - matrix.data[i][j];
	                }
	            }
	            return tempM;
	        }
	    }, {
	        key: "mutiply",
	        value: function mutiply(matrix) {
	            //左乘另一矩阵
	            if (this.n != matrix.m) {
	                throw new Error("矩阵乘法行列不匹配");
	            }

	            var tempM = new Matrix([], this.m, matrix.n);
	            for (var i = 0; i < this.m; i++) {
	                for (var j = 0; j < matrix.n; j++) {

	                    var sum = 0;
	                    for (var ii = 0; ii < this.n; ii++) {
	                        sum += this.data[i][ii] * matrix.data[ii][j];
	                    }
	                    tempM.data[i][j] = sum;
	                }
	            }
	            return tempM;
	        }
	    }]);

	    return Matrix;
	}();

	exports.default = Matrix;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dorsyMath = __webpack_require__(4);

	var _dorsyMath2 = _interopRequireDefault(_dorsyMath);

	var _PixelProcesser2 = __webpack_require__(3);

	var _PixelProcesser3 = _interopRequireDefault(_PixelProcesser2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Alteration = function (_PixelProcesser) {
	    _inherits(Alteration, _PixelProcesser);

	    function Alteration() {
	        _classCallCheck(this, Alteration);

	        return _possibleConstructorReturn(this, (Alteration.__proto__ || Object.getPrototypeOf(Alteration)).call(this));
	    }

	    return Alteration;
	}(_PixelProcesser3.default);

	exports.default = Alteration;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(9);

	__webpack_require__(53);

	var _util = __webpack_require__(54);

	var _fix = __webpack_require__(55);

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	function FakePromise(executor) {
	    var p = new Promise(function (resolve, reject) {
	        // before
	        return executor(resolve, reject);
	    });
	    // after

	    p.__proto__ = FakePromise.prototype;
	    return p;
	}

	FakePromise.__proto__ = Promise;
	FakePromise.prototype.__proto__ = Promise.prototype;

	FakePromise.prototype.then = function then(onFulfilled, onRejected) {
	    // before
	    var returnValue = Promise.prototype.then.call(this, onFulfilled, onRejected);
	    // after
	    return returnValue;
	}

	FakePromise.prototype.act = function(c){
	    return this.then(function(){
	        return new Promise(function(rs){
	            setTimeout(function(){
	                console.log(c);
	                rs();
	            }, 1000);
	        });
	    });
	};

	*/

	var AILayerData = function () {
	    function AILayerData(canvas) {
	        _classCallCheck(this, AILayerData);

	        this.canvas = canvas;
	    }

	    _createClass(AILayerData, [{
	        key: 'setCanvas',
	        value: function setCanvas(canvas) {
	            this.canvas = canvas;
	        }
	    }, {
	        key: 'context',
	        get: function get() {
	            return this.canvas.getContext('2d');
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this.canvas.width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this.canvas.height;
	        }
	    }, {
	        key: 'imgData',
	        get: function get() {
	            return this.context.getImageData(0, 0, this.width, this.height);
	        },
	        set: function set(imgData) {
	            this.context.putImageData(imgData, 0, 0);
	        }
	    }]);

	    return AILayerData;
	}();

	var AICore = function () {
	    function AICore(img, width, height) {
	        var _this = this;

	        _classCallCheck(this, AICore);

	        this._tasker = Promise.resolve(true);

	        //记录时间 time trace
	        this.startTime = +new Date();

	        this.then(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	            var _ref2, canvas, context, ctxCanvas;

	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return _this.initCanvas(img, width, height);

	                        case 2:
	                            _ref2 = _context.sent;
	                            canvas = _ref2.canvas;
	                            context = _ref2.context;


	                            //this.AILayerData = new AILayerData(canvas);

	                            _this.canvas = canvas;
	                            _this.context = context;

	                            _this.imgData = context.getImageData(0, 0, canvas.width, canvas.height);

	                            _this.name = 'AlloyImage_' + (0, _util.uniqueId)();
	                            _this.canvas.id = _this.name;

	                            _this.layers = [];

	                            ctxCanvas = document.createElement("canvas");

	                            ctxCanvas.width = canvas.width;
	                            ctxCanvas.height = canvas.height;

	                            _this.ctxCanvas = ctxCanvas;
	                            _this.ctxContext = ctxCanvas.getContext("2d");

	                            _this.width = _this.canvas.width;
	                            _this.height = _this.canvas.height;

	                            /*
	                            this.immediatelyDo = this;
	                            this.immediatelyDo.then = function(func){
	                                return this::func();
	                            };
	                            */

	                        case 18:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, _this);
	        })));
	    }

	    _createClass(AICore, [{
	        key: 'initCanvas',
	        value: function () {
	            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(img, width, height) {
	                var canvas, context, dw, dh, sw, sh, ratio;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                canvas = document.createElement("canvas");
	                                context = canvas.getContext("2d");

	                                //var l = psLib(20,30);构造适配

	                                if (isNaN(img)) {
	                                    _context2.next = 11;
	                                    break;
	                                }

	                                canvas.width = img;
	                                canvas.height = width;

	                                height = height || "#fff";

	                                context.fillStyle = height;
	                                context.fillRect(0, 0, img, width);

	                                this.srcImg = "";
	                                _context2.next = 23;
	                                break;

	                            case 11:
	                                if (!(typeof img == "string")) {
	                                    _context2.next = 15;
	                                    break;
	                                }

	                                _context2.next = 14;
	                                return (0, _util.loadImage)(img);

	                            case 14:
	                                img = _context2.sent;

	                            case 15:
	                                dw = width, dh = height;
	                                sw = img.width, sh = img.height;
	                                ratio = sw / sh;


	                                if (width || height) {
	                                    if (!height) {
	                                        dh = ~~(dw / ratio);
	                                    } else if (!width) {
	                                        dw = dh * ratio;
	                                    }
	                                } else {
	                                    dw = sw;
	                                    dh = sh;
	                                }

	                                canvas.width = dw;
	                                canvas.height = dh;

	                                if (!isNaN(dw)) {
	                                    if (_util.device == "ios") {
	                                        (0, _fix.drawImageIOS)(context, img, dw, dh);
	                                    } else {
	                                        context.drawImage(img, 0, 0, dw, dh);
	                                    }
	                                } else {
	                                    context.drawImage(img, 0, 0);
	                                }

	                                this.srcImg = img;

	                            case 23:
	                                return _context2.abrupt('return', { canvas: canvas, context: context });

	                            case 24:
	                            case 'end':
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));

	            function initCanvas(_x, _x2, _x3) {
	                return _ref3.apply(this, arguments);
	            }

	            return initCanvas;
	        }()
	    }, {
	        key: 'getImageData',
	        value: function getImageData() {
	            //return this.then(() => {
	            return this.imgData;
	            //});
	        }

	        /*
	        addAsyncTask(fn, pos){
	        }
	        */

	    }, {
	        key: 'then',
	        value: function then(fn) {
	            var _this2 = this;

	            // then内部的act等方法开一个子任务去处理
	            // 如果直接act会直接add在后面
	            var wrap = function () {
	                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
	                    var oldTask;
	                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                        while (1) {
	                            switch (_context3.prev = _context3.next) {
	                                case 0:
	                                    oldTask = _this2._tasker;


	                                    _this2._tasker = Promise.resolve(true);

	                                    _context3.next = 4;
	                                    return fn.bind(_this2)();

	                                case 4:

	                                    _this2._tasker = oldTask;

	                                case 5:
	                                case 'end':
	                                    return _context3.stop();
	                            }
	                        }
	                    }, _callee3, _this2);
	                }));

	                return function wrap() {
	                    return _ref4.apply(this, arguments);
	                };
	            }();

	            this._tasker = this._tasker.then(wrap);

	            return this;
	        }
	    }, {
	        key: 'promise',
	        value: function promise() {
	            return this._tasker;
	        }

	        // 获得合成视图

	    }, {
	        key: '_getCompositeView',
	        value: function () {
	            var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
	                var compositeCanvas, compositeContext, tempAIObj, i, tA, layers, currLayer, tempPsLib;
	                return regeneratorRuntime.wrap(function _callee4$(_context4) {
	                    while (1) {
	                        switch (_context4.prev = _context4.next) {
	                            case 0:
	                                if (!(this.layers.length === 0)) {
	                                    _context4.next = 10;
	                                    break;
	                                }

	                                compositeCanvas = document.createElement('canvas');

	                                compositeCanvas.width = this.width;
	                                compositeCanvas.height = this.height;

	                                compositeContext = compositeCanvas.getContext("2d");


	                                console.log(this.imgData, 'show');
	                                compositeContext.putImageData(this.imgData, 0, 0);

	                                return _context4.abrupt('return', {
	                                    compositeCanvas: compositeCanvas,
	                                    compositeContext: compositeContext
	                                });

	                            case 10:

	                                //创建一个临时的psLib对象，防止因为合并显示对本身imgData影响
	                                tempAIObj = new AlloyImage(this.canvas.width, this.canvas.height);

	                                tempAIObj.add(this, "正常", 0, 0);

	                                //this.tempPsLib = tempPsLib;

	                                //将挂接到本对象上的图层对象 一起合并到临时的psLib对象上去 用于显示合并的结果，不会影响每个图层，包括本图层
	                                for (i = 0; i < this.layers.length; i++) {
	                                    tA = this.layers[i];
	                                    layers = tA[0].layers;
	                                    currLayer = tA[0];


	                                    if (layers[layers.length - 1] && layers[layers.length - 1][0].type == 1) currLayer = layers[layers.length - 1][0];
	                                    tempAIObj.add(currLayer, tA[1], tA[2], tA[3]);
	                                }

	                                _context4.next = 15;
	                                return tempAIObj;

	                            case 15:
	                                return _context4.abrupt('return', {
	                                    compositeCanvas: tempAIObj.canvas,
	                                    compositeContext: tempAIObj.context

	                                    //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	                                });

	                            case 16:
	                                //如果其上无其他挂载图层，加快处理
	                                if (this.layers.length == 0) {
	                                    this.tempPsLib = {
	                                        imgData: this.imgData
	                                    };
	                                } else {

	                                    //创建一个临时的psLib对象，防止因为合并显示对本身imgData影响
	                                    tempPsLib = new AlloyImage(this.canvas.width, this.canvas.height);
	                                    /*
	                                    tempPsLib.add(this, "正常", 0, 0, isFast);
	                                    this.tempPsLib = tempPsLib;
	                                      //将挂接到本对象上的图层对象 一起合并到临时的psLib对象上去 用于显示合并的结果，不会影响每个图层，包括本图层
	                                    for(var i = 0; i < this.layers.length; i ++){
	                                        var tA = this.layers[i];
	                                        var layers = tA[0].layers;
	                                        var currLayer = tA[0];
	                                          if(layers[layers.length - 1] && layers[layers.length - 1][0].type == 1) currLayer = layers[layers.length - 1][0];
	                                        tempPsLib.add(currLayer, tA[1], tA[2], tA[3], isFast);
	                                    }
	                                    */

	                                    //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	                                }

	                            case 17:
	                            case 'end':
	                                return _context4.stop();
	                        }
	                    }
	                }, _callee4, this);
	            }));

	            function _getCompositeView() {
	                return _ref5.apply(this, arguments);
	            }

	            return _getCompositeView;
	        }()
	    }, {
	        key: 'wait',
	        value: function wait(aiObj) {
	            var _this3 = this;

	            var waitThing = new Promise(function (rs, rj) {
	                aiObj.then(function () {
	                    rs();
	                });
	            });

	            this.then(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
	                return regeneratorRuntime.wrap(function _callee5$(_context5) {
	                    while (1) {
	                        switch (_context5.prev = _context5.next) {
	                            case 0:
	                                _context5.next = 2;
	                                return waitThing;

	                            case 2:
	                            case 'end':
	                                return _context5.stop();
	                        }
	                    }
	                }, _callee5, _this3);
	            })));

	            return this;
	        }
	    }], [{
	        key: 'extend',
	        value: function extend(func) {
	            var name = func.name;

	            this.prototype[name] = func;
	        }
	    }]);

	    return AICore;
	}();

	/*
	export let register = (obj) => {
	    for(var i in obj){
	        if(obj.hasOwnProperty(i)){
	            obj[i](AlloyImage);
	        }
	    }
	};
	*/

	exports.default = AICore;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(10);
	var global = __webpack_require__(11);
	var ctx = __webpack_require__(12);
	var classof = __webpack_require__(14);
	var $export = __webpack_require__(19);
	var isObject = __webpack_require__(24);
	var aFunction = __webpack_require__(13);
	var anInstance = __webpack_require__(33);
	var forOf = __webpack_require__(34);
	var speciesConstructor = __webpack_require__(41);
	var task = __webpack_require__(42).set;
	var microtask = __webpack_require__(45)();
	var newPromiseCapabilityModule = __webpack_require__(46);
	var perform = __webpack_require__(47);
	var promiseResolve = __webpack_require__(48);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(16)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c;
	  var i = 0;
	  var reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(49)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(50)($Promise, PROMISE);
	__webpack_require__(51)(PROMISE);
	Wrapper = __webpack_require__(20)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(52)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(15);
	var TAG = __webpack_require__(16)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(17)('wks');
	var uid = __webpack_require__(18);
	var Symbol = __webpack_require__(11).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var core = __webpack_require__(20);
	var hide = __webpack_require__(21);
	var redefine = __webpack_require__(31);
	var ctx = __webpack_require__(12);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(22);
	var createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(26) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23);
	var IE8_DOM_DEFINE = __webpack_require__(25);
	var toPrimitive = __webpack_require__(29);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(26) && !__webpack_require__(27)(function () {
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(27)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	var document = __webpack_require__(11).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(24);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var hide = __webpack_require__(21);
	var has = __webpack_require__(32);
	var SRC = __webpack_require__(18)('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);

	__webpack_require__(20).inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(12);
	var call = __webpack_require__(35);
	var isArrayIter = __webpack_require__(36);
	var anObject = __webpack_require__(23);
	var toLength = __webpack_require__(38);
	var getIterFn = __webpack_require__(40);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(37);
	var ITERATOR = __webpack_require__(16)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(14);
	var ITERATOR = __webpack_require__(16)('iterator');
	var Iterators = __webpack_require__(37);
	module.exports = __webpack_require__(20).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(23);
	var aFunction = __webpack_require__(13);
	var SPECIES = __webpack_require__(16)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(12);
	var invoke = __webpack_require__(43);
	var html = __webpack_require__(44);
	var cel = __webpack_require__(28);
	var global = __webpack_require__(11);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(15)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(11).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var macrotask = __webpack_require__(42).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(15)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(13);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23);
	var isObject = __webpack_require__(24);
	var newPromiseCapability = __webpack_require__(46);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(31);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).f;
	var has = __webpack_require__(32);
	var TAG = __webpack_require__(16)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(11);
	var dP = __webpack_require__(22);
	var DESCRIPTORS = __webpack_require__(26);
	var SPECIES = __webpack_require__(16)('species');

	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(16)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var loadImage = exports.loadImage = function loadImage(src) {
	    return new Promise(function (rs, rj) {
	        var tmpImg = new Image();
	        tmpImg.onload = function () {
	            rs(tmpImg);
	            /*
	            canvas.width = parseInt(this.width);
	            canvas.height = parseInt(this.height);
	              context.drawImage(this, 0, 0, this.width, this.height);
	            */
	        };

	        tmpImg.onerror = function (e) {
	            rj(src + ' load error');
	        };

	        tmpImg.src = src;
	    });
	};

	var device = exports.device = function () {
	    if (window.navigator) {
	        var ua = window.navigator.userAgent;

	        if (/Android|android/.test(ua)) {
	            return 'android';
	        } else if (/iPhone|iPad|iPod/.test(ua)) {
	            return 'ios';
	        } else {
	            return 'other';
	        }
	    } else {
	        return "sandBox";
	    }
	}();

	var uniqueId = exports.uniqueId = function uniqueId() {
	    return ~~(Math.random() * 1e6);
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.drawImageIOSFix = drawImageIOSFix;
	exports.drawImageIOS = drawImageIOS;
	function detectVerticalSquash(img) {
	    var iw = img.naturalWidth,
	        ih = img.naturalHeight;
	    var canvas = document.createElement('canvas');
	    canvas.width = 1;
	    canvas.height = ih;
	    var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0, 0);
	    var data = ctx.getImageData(0, 0, 1, ih).data;
	    // search image edge pixel position in case it is squashed vertically.
	    var sy = 0;
	    var ey = ih;
	    var py = ih;
	    while (py > sy) {
	        var alpha = data[(py - 1) * 4 + 3];
	        if (alpha === 0) {
	            ey = py;
	        } else {
	            sy = py;
	        }
	        py = ey + sy >> 1;
	    }
	    var ratio = py / ih;
	    return ratio === 0 ? 1 : ratio;
	}

	/**
	* A replacement for context.drawImage
	* (args are for source and destination).
	*/
	function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
	    var vertSquashRatio = detectVerticalSquash(img);
	    // Works only if whole image is displayed:
	    // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
	    // The following works correct also when only a part of the image is displayed:
	    ctx.drawImage(img, sx * vertSquashRatio, sy * vertSquashRatio, sw * vertSquashRatio, sh * vertSquashRatio, dx, dy, dw, dh);
	}

	function drawImageIOS(ctx, img, dw, dh) {
	    var sx = 0,
	        sy = 0,
	        sw = img.width,
	        sh = img.height,
	        dx = 0,
	        dy = 0;
	    drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh);
	}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _addLayer2 = __webpack_require__(57);

	var _addLayer3 = _interopRequireDefault(_addLayer2);

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function add(aiObj) {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    var numberArr = [],
	        method = void 0,
	        alpha = void 0,
	        dx = void 0,
	        dy = void 0,
	        isFast = void 0,
	        channel = void 0;

	    //做重载
	    for (var i = 0; i < arguments.length; i++) {
	        if (!i) continue;

	        switch (_typeof(arguments[i])) {
	            case "string":
	                if (/\d+%/.test(arguments[i])) {
	                    //alpha
	                    alpha = arguments[i].replace("%", "");
	                } else if (/[RGB]+/.test(arguments[i])) {
	                    //channel
	                    channel = arguments[i];
	                } else {
	                    //method
	                    method = arguments[i];
	                }
	                break;

	            case "number":
	                numberArr.push(arguments[i]);
	                break;

	            case "boolean":
	                isFast = arguments[i];
	                break;
	        }
	    }

	    //赋值
	    dx = numberArr[0] || 0;
	    dy = numberArr[1] || 0;
	    method = method || "正常";
	    alpha = alpha / 100 || 1;
	    isFast = isFast || false;
	    channel = channel || "RGB";

	    //console.log("add init");

	    //做映射转发
	    // 这里有两个异步队列
	    // 要等this完成，也要等aiObj完成
	    // 所以不能简单then, 不然then后面的内容执行的时候，aiObj已不在这个时机


	    var wait = new Promise(function (rs) {
	        aiObj.then(function () {
	            rs(aiObj.cloneImageData());
	        });
	    });

	    console.log('add');

	    this.then(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var aiObjImgData;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return wait;

	                    case 2:
	                        aiObjImgData = _context.sent;

	                        _this.imgData = (0, _addLayer3.default)(_this.imgData, aiObjImgData, method, alpha, dx, dy, isFast, channel);

	                        console.log('xxxxxxx');

	                    case 5:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, _this);
	    })));

	    /*
	    var aiObjImgData;
	    // 等待aiObj完成后再做操作
	    this.wait(aiObj.then(() => {
	        aiObjImgData = aiObj.cloneImageData();
	    })).then(() => {
	        console.log(aiObjImgData, 'fff');
	        this.imgData = _addLayer(this.imgData, aiObjImgData, method, alpha, dx, dy, isFast, channel);
	    });
	    */

	    return this;
	}

	function addLayer() {
	    var _this2 = this;

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }

	    this.then(function () {
	        _this2.layers.push(args);
	    });

	    return this;
	}

	_AlloyImage2.default.extend(add);
	_AlloyImage2.default.extend(addLayer);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = addLayer;
	/**
	 * @author: Bin Wang
	 * @description: Main add
	 *
	 */

	//isFast用于快速，适用于中间处理
	function addLayer(lowerData, upperData, method, alpha, dx, dy, isFast, channel) {
	    var l = lowerData.data,
	        u = upperData.data;

	    dx = dx || 0;
	    dy = dy || 0;
	    alpha = alpha || 1; //alpha 范围为0 - 100
	    isFast = isFast || false;
	    channel = channel || "RGB";

	    if (!/[RGB]+/.test(channel)) {
	        channel = "RGB";
	    }

	    var channelString = channel.replace("R", "0").replace("G", "1").replace("B", "2"),
	        jump = 1,
	        result = void 0,
	        width = lowerData.width,
	        height = lowerData.height,
	        upperLength = u.length,
	        upperWidth = upperData.width,
	        upperHeight = upperData.height,
	        indexOfArr = [channelString.indexOf("0") > -1, channelString.indexOf("1") > -1, channelString.indexOf("2") > -1],
	        everyJump = 4 * jump;

	    /*
	    if(isFast){
	    jump = 1; 
	    }
	    */

	    var ii = void 0,
	        row = void 0,
	        col = void 0,
	        uRow = void 0,
	        uCol = void 0,
	        uIi = void 0,
	        uI = void 0;

	    //计算重叠部分x ,y范围
	    var xMin = void 0,
	        yMin = void 0,
	        xMax = void 0,
	        yMax = void 0;

	    var uXMin = dx;
	    var uXMax = dx + upperWidth;
	    var uYMin = dy;
	    var uYMax = dy + upperHeight;

	    if (uXMin > width) {
	        return;
	    } else if (uXMin < 0) {
	        uXMin = 0;
	    }

	    if (uXMax < 0) {
	        return;
	    } else if (uXMax > width) {
	        uXMax = width;
	    }

	    if (uYMin > height) {
	        return;
	    } else if (uYMin < 0) {
	        uYMin = 0;
	    }

	    if (uYMax < 0) {
	        return;
	    } else if (uYMax > height) {
	        uYMax = height;
	    }

	    var currRow = void 0,
	        upperY = void 0,
	        upperRow = void 0;
	    for (var y = uYMin; y < uYMax; y++) {
	        currRow = y * width;
	        upperY = y - dy;
	        upperRow = upperY * upperWidth;

	        for (var x = uXMin; x < uXMax; x++) {
	            //计算此时对应的upperX,Y
	            var upperX = x - dx;

	            //计算此时的i
	            var i = (currRow + x) * 4;

	            //计算此时的upperI
	            var _uI = (upperRow + upperX) * 4;

	            //for(var i = 0, n = l.length; i < n; i += everyJump){

	            //ii = i / 4;

	            //得到当前点的坐标 y分量
	            //row = ~~(ii / width); 
	            //col = ii % width;

	            //uRow = row - dy;
	            //uCol = col - dx;

	            //uIi = uRow * upperWidth + uCol;
	            //uI = uIi * 4;

	            //if(uI >= 0 && uI < (upperLength - 4) && uCol < upperWidth && uCol >= 0){

	            //l[i + 3] = u[uI + 3];//透明度
	            for (var j = 0; j < 3; j++) {

	                //若此点透明则不计算
	                if (u[_uI + 3] == 0) break;else l[i + 3] = u[_uI + 3];

	                switch (method) {
	                    case "颜色减淡":
	                        if (indexOfArr[j]) {
	                            result = l[i + j] + l[i + j] * u[_uI + j] / (255 - u[_uI + j]);
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "变暗":
	                        if (indexOfArr[j]) {
	                            result = l[i + j] < u[_uI + j] ? l[i + j] : u[_uI + j];
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "变亮":
	                        if (indexOfArr[j]) {
	                            result = l[i + j] > u[_uI + j] ? l[i + j] : u[_uI + j];
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "正片叠底":
	                        if (indexOfArr[j]) {
	                            result = ~~(l[i + j] * u[_uI + j] / 255);
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "滤色":
	                        if (indexOfArr[j]) {
	                            result = ~~(255 - (255 - l[i + j]) * (255 - u[_uI + j]) / 255);
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "叠加":
	                        if (indexOfArr[j]) {
	                            if (l[i + j] <= 127.5) {
	                                result = l[i + j] * u[_uI + j] / 127.5;
	                            } else {
	                                result = 255 - (255 - l[i + j]) * (255 - u[_uI + j]) / 127.5;
	                            }
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "强光":
	                        if (indexOfArr[j]) {
	                            if (u[_uI + j] <= 127.5) {
	                                result = l[i + j] * u[_uI + j] / 127.5;
	                            } else {
	                                result = l[i + j] + (255 - l[i + j]) * (u[_uI + j] - 127.5) / 127.5;
	                            }
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "差值":
	                        if (indexOfArr[j]) {
	                            result = l[i + j] > u[_uI + j] ? l[i + j] - u[_uI + j] : u[_uI + j] - l[i + j];
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "排除":
	                        if (indexOfArr[j]) {
	                            result = l[i + j] + u[_uI + j] - l[i + j] * u[_uI + j] / 127.5;
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "点光":
	                        if (indexOfArr[j]) {
	                            if (l[i + j] < 2 * u[_uI + j] - 255) {
	                                result = 2 * u[_uI + j] - 255;
	                            } else if (l[i + j] < 2 * u[_uI + j]) {
	                                result = l[i + j];
	                            } else {
	                                result = 2 * u[_uI + j];
	                            }
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "颜色加深":
	                        if (indexOfArr[j]) {
	                            result = 255 - 255 * (255 - l[i + j]) / u[_uI + j];
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "线性加深":
	                        if (indexOfArr[j]) {
	                            var tempR = l[i + j] + u[_uI + j];
	                            result = tempR > 255 ? tempR - 255 : 0;
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "线性减淡":
	                        if (indexOfArr[j]) {
	                            var tempR = l[i + j] + u[_uI + j];
	                            result = tempR > 255 ? 255 : tempR;
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "柔光":
	                        if (indexOfArr[j]) {
	                            if (u[_uI + j] < 127.5) {
	                                result = ((2 * u[_uI + j] - 255) * (255 - l[i + j]) / (255 * 255) + 1) * l[i + j];
	                            } else {
	                                result = (2 * u[_uI + j] - 255) * (Math.sqrt(l[i + j] / 255) - l[i + j] / 255) + l[i + j];
	                            }
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "亮光":
	                        if (indexOfArr[j]) {
	                            if (u[_uI + j] < 127.5) {
	                                result = (1 - (255 - l[i + j]) / (2 * u[_uI + j])) * 255;
	                            } else {
	                                result = l[i + j] / (2 * (1 - u[_uI + j] / 255));
	                            }
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "线性光":
	                        if (indexOfArr[j]) {
	                            var tempR = l[i + j] + 2 * u[_uI + j] - 255;
	                            result = tempR > 255 ? 255 : tempR;
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    case "实色混合":
	                        if (indexOfArr[j]) {
	                            if (u[_uI + j] < 255 - l[i + j]) {
	                                result = 0;
	                            } else {
	                                result = 255;
	                            }
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                        break;

	                    default:
	                        if (indexOfArr[j]) {
	                            result = u[_uI + j];
	                            l[i + j] = (1 - alpha) * l[i + j] + alpha * result;
	                        }
	                } //end switch
	            } //end for
	        } //end y
	    } //end x

	    return lowerData;
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _doAct = function () {
	    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(method, args) {
	        var layerPixelProcesser, imgData;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        layerPixelProcesser = new _layerPixelProcesser2.default(this.imgData);
	                        _context2.next = 3;
	                        return layerPixelProcesser.process(method, args);

	                    case 3:
	                        imgData = _context2.sent;


	                        this.imgData = imgData;

	                    case 5:
	                    case 'end':
	                        return _context2.stop();
	                }
	            }
	        }, _callee2, this);
	    }));

	    return function _doAct(_x, _x2) {
	        return _ref2.apply(this, arguments);
	    };
	}();

	var _layerPixelProcesser = __webpack_require__(59);

	var _layerPixelProcesser2 = _interopRequireDefault(_layerPixelProcesser);

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function act(method) {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    this.then(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        console.log('act', method);
	                        _context.next = 3;
	                        return _this._doAct(method, args);

	                    case 3:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, _this);
	    })));

	    return this;
	}

	_AlloyImage2.default.extend(act);
	_AlloyImage2.default.extend(_doAct);

	_AlloyImage2.default.addFilter = function (filter) {
	    _layerPixelProcesser2.default.addFilter(filter);
	};

	_AlloyImage2.default.addAlteration = function (alteration) {
	    _layerPixelProcesser2.default.addFilter(alteration);
	};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LayerPixelProcesser = function () {
	    function LayerPixelProcesser(imgData) {
	        _classCallCheck(this, LayerPixelProcesser);

	        this.imgData = imgData;
	    }

	    _createClass(LayerPixelProcesser, [{
	        key: 'process',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(name, args) {
	                var filter, alteration, doProcess, _ref2, data, width, height;

	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                name = name.toLocaleLowerCase();

	                                filter = LayerPixelProcesser.filterMap[name];
	                                alteration = LayerPixelProcesser.alterationMap[name];


	                                if (!(filter || alteration)) {
	                                    console.error('no act method registered: ', name);
	                                }

	                                doProcess = void 0;

	                                if (alteration) {
	                                    doProcess = alteration.doProcess.bind(alteration);
	                                } else {
	                                    doProcess = filter.doProcess.bind(filter);
	                                }

	                                _context.next = 8;
	                                return doProcess(this.imgData, args);

	                            case 8:
	                                _ref2 = _context.sent;
	                                data = _ref2.data;
	                                width = _ref2.width;
	                                height = _ref2.height;
	                                return _context.abrupt('return', new ImageData(data, width, height));

	                            case 13:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));

	            function process(_x, _x2) {
	                return _ref.apply(this, arguments);
	            }

	            return process;
	        }()
	    }], [{
	        key: 'addFilter',
	        value: function addFilter(Filter) {
	            var filter = new Filter();
	            var filterName = Filter.name.toLocaleLowerCase();
	            var filterCName = filter.cname;

	            LayerPixelProcesser.filterMap[filterName] = filter;

	            if (filterCName) {
	                LayerPixelProcesser.filterMap[filterCName] = filter;
	            }
	        }
	    }, {
	        key: 'addAlteration',
	        value: function addAlteration(Alteration) {
	            var alteration = new Alteration();
	            var alterationName = Alteration.name.toLocaleLowerCase();
	            var alterationCName = alteration.cname;

	            LayerPixelProcesser.alterationMap[alterationName] = alteration;

	            if (alterationCName) {
	                LayerPixelProcesser.alterationMap[alterationCName] = alteration;
	            }
	        }
	    }]);

	    return LayerPixelProcesser;
	}();

	/*
	export default AlloyImage => {
	    AlloyImage.addFilter = filter => {
	        LayerPixelProcesser.addFilter(filter);
	    };

	    AlloyImage.addAlteration = alteration => {
	        LayerPixelProcesser.addAlteration(alteration);
	    };
	};
	*/


	LayerPixelProcesser.filterMap = {};
	LayerPixelProcesser.alterationMap = {};
	exports.default = LayerPixelProcesser;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Object.defineProperties(_AlloyImage2.default.prototype, {
	    width: {
	        get: function get() {
	            return this.canvas.width;
	        },

	        set: function set(w) {
	            var _this = this;

	            this.then(function () {
	                _this.canvas.width = w;
	            });

	            return this;
	        }
	    },

	    height: {
	        get: function get() {
	            return this.canvas.height;
	        },

	        set: function set(h) {
	            var _this2 = this;

	            this.then(function () {
	                _this2.canvas.height = h;
	            });

	            return this;
	        }
	    }
	});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function show(selector, flag) {
	    var _this = this;

	    console.log('show invoked');
	    this.then(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var _ref2, compositeCanvas, el;

	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:

	                        console.log('show', flag);

	                        _context.next = 3;
	                        return _this._getCompositeView();

	                    case 3:
	                        _ref2 = _context.sent;
	                        compositeCanvas = _ref2.compositeCanvas;


	                        //以临时对象data显示
	                        /*
	                        this.context.putImageData(this.tempPsLib.imgData, 0, 0);
	                        */

	                        if (selector) {
	                            if (typeof selector == "string") {
	                                el = document.querySelector(selector);

	                                el.appendChild(compositeCanvas);
	                            } else {
	                                selector.appendChild(compositeCanvas);
	                            }
	                        } else {
	                            document.body.appendChild(compositeCanvas);
	                        }

	                    case 6:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, _this);
	    })));

	    return this;
	}

	_AlloyImage2.default.extend(show);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// clone只对单图层有效
	function clone() {
	    var _this = this;

	    var newAIObj = new _AlloyImage2.default(1, 1); //this.width, this.height); //this.width, this.height);

	    newAIObj.wait(this).then(function () {
	        // 这里直接取 立即生效
	        newAIObj.canvas.width = _this.width;
	        newAIObj.canvas.height = _this.height;

	        newAIObj.imgData = _this.cloneImageData();
	    });

	    return newAIObj;
	}

	function cloneImageData() {
	    var imgData = this.getImageData();
	    var canvas = document.createElement('canvas');

	    canvas.width = this.width;
	    canvas.height = this.height;

	    var ctx = canvas.getContext('2d');
	    ctx.putImageData(imgData, 0, 0);

	    return ctx.getImageData(0, 0, this.width, this.height);
	}

	_AlloyImage2.default.extend(clone);

	_AlloyImage2.default.extend(cloneImageData);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var effectsMap = {};
	var define = function define(name, func) {
	    effectsMap[name] = func;
	};

	var effect = function effect(name) {
	    var func = effectsMap[name];
	    if (!func) {
	        console.error('no method, please define');
	    }

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    return func.apply(this, args);
	};

	_AlloyImage2.default.extend(effect);

	_AlloyImage2.default.define = define;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var toGray = function (_Filter) {
	    _inherits(toGray, _Filter);

	    function toGray() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, toGray);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = toGray.__proto__ || Object.getPrototypeOf(toGray)).call.apply(_ref, [this].concat(args))), _this), _this.cname = "灰度处理", _this.process = function (_ref2, _ref3) {
	            var data = _ref2.data,
	                width = _ref2.width,
	                height = _ref2.height;
	            var dorsyMath = _ref3.dorsyMath;
	            return function (args) {
	                for (var i = 0, n = data.length; i < n; i += 4) {
	                    var gray = parseInt(0.299 * data[i] + 0.578 * data[i + 1] + 0.114 * data[i + 2]);
	                    data[i + 2] = data[i + 1] = data[i] = gray;
	                }

	                return { data: data, width: width, height: height };
	            };
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return toGray;
	}(_AlloyImage.Filter);

	_AlloyImage2.default.addFilter(toGray);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var corrode = function (_Filter) {
	    _inherits(corrode, _Filter);

	    function corrode() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, corrode);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = corrode.__proto__ || Object.getPrototypeOf(corrode)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return corrode;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "腐蚀";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var R = parseInt(args[0]) || 3;
	            var xLength = R * 2 + 1;

	            //区块
	            for (var x = 0; x < width; x++) {

	                for (var y = 0; y < height; y++) {

	                    var randomI = parseInt(Math.random() * R * 2) - R; //区块随机代表
	                    var randomJ = parseInt(Math.random() * R * 2) - R; //区块随机代表
	                    var realI = y * width + x;
	                    var realJ = (y + randomI) * width + x + randomJ;

	                    for (var j = 0; j < 3; j++) {
	                        data[realI * 4 + j] = data[realJ * 4 + j];
	                    }
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(corrode);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var darkCorner = function (_Filter) {
	        _inherits(darkCorner, _Filter);

	        function darkCorner() {
	                var _ref;

	                var _temp, _this, _ret;

	                _classCallCheck(this, darkCorner);

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                        args[_key] = arguments[_key];
	                }

	                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = darkCorner.__proto__ || Object.getPrototypeOf(darkCorner)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	        }

	        return darkCorner;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	        this.cname = "暗角";

	        this.process = function (_ref2, _ref3) {
	                var data = _ref2.data,
	                    width = _ref2.width,
	                    height = _ref2.height;
	                var dorsyMath = _ref3.dorsyMath;
	                return function (args) {
	                        //暗角级别 分1-10级吧
	                        var R = parseInt(args[0]) || 3;

	                        //暗角的形状
	                        var type = args[2] || "round";

	                        //暗角最终的级别 0 - 255
	                        var lastLevel = args[1] || 30;

	                        var xLength = R * 2 + 1;

	                        //计算中心点
	                        var middleX = width * 2 / 3;
	                        var middleY = height * 1 / 2;

	                        //计算距中心点最长距离
	                        var maxDistance = dorsyMath.distance([middleX, middleY]);
	                        //开始产生暗角的距离
	                        var startDistance = maxDistance * (1 - R / 10);

	                        var f = function f(x, p0, p1, p2, p3) {

	                                //基于三次贝塞尔曲线 
	                                return p0 * Math.pow(1 - x, 3) + 3 * p1 * x * Math.pow(1 - x, 2) + 3 * p2 * x * x * (1 - x) + p3 * Math.pow(x, 3);
	                        };

	                        //计算当前点应增加的暗度
	                        function calDark(x, y, p) {
	                                //计算距中心点距离
	                                var distance = dorsyMath.distance([x, y], [middleX, middleY]);
	                                var currBilv = (distance - startDistance) / (maxDistance - startDistance);
	                                if (currBilv < 0) currBilv = 0;

	                                //应该增加暗度
	                                return f(currBilv, 0, 0.02, 0.3, 1) * p * lastLevel / 255;
	                        }

	                        //区块
	                        for (var x = 0; x < width; x++) {

	                                for (var y = 0; y < height; y++) {

	                                        var realI = y * width + x;
	                                        for (var j = 0; j < 3; j++) {
	                                                var dDarkness = calDark(x, y, data[realI * 4 + j]);
	                                                data[realI * 4 + j] -= dDarkness;
	                                        }
	                                }
	                        }

	                        return { data: data, width: width, height: height };
	                };
	        };
	};

	;
	_AlloyImage2.default.addFilter(darkCorner);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dotted = function (_Filter) {
	        _inherits(dotted, _Filter);

	        function dotted() {
	                var _ref;

	                var _temp, _this, _ret;

	                _classCallCheck(this, dotted);

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                        args[_key] = arguments[_key];
	                }

	                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = dotted.__proto__ || Object.getPrototypeOf(dotted)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	        }

	        return dotted;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	        this.cname = "喷点";

	        this.process = function (_ref2, _ref3) {
	                var data = _ref2.data,
	                    width = _ref2.width,
	                    height = _ref2.height;
	                var dorsyMath = _ref3.dorsyMath;
	                return function (args) {
	                        //矩形半径
	                        var R = parseInt(args[0]) || 1;

	                        //内小圆半径
	                        var r = parseInt(args[1]) || 1;

	                        var xLength = R * 2 + 1;

	                        //构造距离模板
	                        var disTmlMatrix = [];

	                        var r2 = r * r;
	                        for (var x = -R; x < R; x++) {

	                                for (var y = -R; y < R; y++) {
	                                        if (x * x + y * y > r2) {
	                                                disTmlMatrix.push([x, y]);
	                                        }
	                                }
	                        }

	                        var xyToIFun = dorsyMath.xyToIFun(width);

	                        //将大于距离外面的透明度置为0
	                        for (var x = 0, n = parseInt(width / xLength); x < n; x++) {

	                                for (var y = 0, m = parseInt(height / xLength); y < m; y++) {
	                                        var middleX = parseInt((x + 0.5) * xLength);
	                                        var middleY = parseInt((y + 0.5) * xLength);

	                                        for (var i = 0; i < disTmlMatrix.length; i++) {
	                                                var dotX = middleX + disTmlMatrix[i][0];
	                                                var dotY = middleY + disTmlMatrix[i][1];

	                                                //data[(dotY * width + dotX) * 4 + 3] = 0;
	                                                data[xyToIFun(dotX, dotY, 3)] = 225;
	                                                data[xyToIFun(dotX, dotY, 2)] = 225;
	                                                data[xyToIFun(dotX, dotY, 0)] = 225;
	                                                data[xyToIFun(dotX, dotY, 1)] = 225;
	                                        }
	                                }
	                        }

	                        /*
	                        for(var x = 0; x < width; x ++){
	                            for(var y = 0; y < height; y ++){
	                                data[(y * width + x) * 4 + 3] = 0;
	                            }
	                        }
	                        */

	                        return { data: data, width: width, height: height };
	                };
	        };
	};

	_AlloyImage2.default.addFilter(dotted);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var embossment = function (_Filter) {
	    _inherits(embossment, _Filter);

	    function embossment() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, embossment);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = embossment.__proto__ || Object.getPrototypeOf(embossment)).call.apply(_ref, [this].concat(args))), _this), _this.cname = "浮雕效果", _this.process = function (_ref2, _ref3) {
	            var data = _ref2.data,
	                width = _ref2.width,
	                height = _ref2.height;
	            var dorsyMath = _ref3.dorsyMath;
	            return function (args) {
	                var outData = [];
	                for (var i = 0, n = data.length; i < n; i += 4) {

	                    var ii = i / 4;
	                    var row = parseInt(ii / width);
	                    var col = ii % width;
	                    var A = ((row - 1) * width + (col - 1)) * 4;
	                    var G = (row + 1) * width * 4 + (col + 1) * 4;

	                    if (row == 0 || col == 0) continue;
	                    for (var j = 0; j < 3; j++) {
	                        outData[i + j] = data[A + j] - data[G + j] + 127.5;
	                    }
	                    outData[i + 4] = data[i + 4];
	                }

	                for (var i = 0, n = data.length; i < n; i++) {
	                    data[i] = outData[i] || data[i];
	                }

	                return { data: data, width: width, height: height };
	            };
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return embossment;
	}(_AlloyImage.Filter);

	_AlloyImage2.default.addFilter(embossment);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var gaussBlur = function (_Filter) {
	    _inherits(gaussBlur, _Filter);

	    function gaussBlur() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, gaussBlur);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gaussBlur.__proto__ || Object.getPrototypeOf(gaussBlur)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }
	    /**
	     * 高斯模糊
	     * @param  {Array} pixes  pix array
	     * @param  {Number} width 图片的宽度
	     * @param  {Number} height 图片的高度
	     * @param  {Number} radius 取样区域半径, 正数, 可选, 默认为 3.0
	     * @param  {Number} sigma 标准方差, 可选, 默认取值为 radius / 3
	     * @return {Array}
	     */


	    return gaussBlur;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "高斯模糊";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var pixes = data;

	            var gaussMatrix = [],
	                gaussSum = 0,
	                x,
	                y,
	                r,
	                g,
	                b,
	                a,
	                i,
	                j,
	                k,
	                len;

	            var radius = args[0];
	            var sigma = args[1];

	            radius = Math.floor(radius) || 3;
	            sigma = sigma || radius / 3;

	            a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
	            b = -1 / (2 * sigma * sigma);
	            //生成高斯矩阵
	            for (i = 0, x = -radius; x <= radius; x++, i++) {
	                g = a * Math.exp(b * x * x);
	                gaussMatrix[i] = g;
	                gaussSum += g;
	            }
	            //归一化, 保证高斯矩阵的值在[0,1]之间
	            for (i = 0, len = gaussMatrix.length; i < len; i++) {
	                gaussMatrix[i] /= gaussSum;
	            }
	            //x 方向一维高斯运算
	            for (y = 0; y < height; y++) {
	                for (x = 0; x < width; x++) {
	                    r = g = b = a = 0;
	                    gaussSum = 0;
	                    for (j = -radius; j <= radius; j++) {
	                        k = x + j;
	                        if (k >= 0 && k < width) {
	                            //确保 k 没超出 x 的范围
	                            //r,g,b,a 四个一组
	                            i = (y * width + k) * 4;
	                            r += pixes[i] * gaussMatrix[j + radius];
	                            g += pixes[i + 1] * gaussMatrix[j + radius];
	                            b += pixes[i + 2] * gaussMatrix[j + radius];
	                            // a += pixes[i + 3] * gaussMatrix[j];
	                            gaussSum += gaussMatrix[j + radius];
	                        }
	                    }
	                    i = (y * width + x) * 4;
	                    // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
	                    // console.log(gaussSum)
	                    pixes[i] = r / gaussSum;
	                    pixes[i + 1] = g / gaussSum;
	                    pixes[i + 2] = b / gaussSum;
	                    // pixes[i + 3] = a ;
	                }
	            }
	            //y 方向一维高斯运算
	            for (x = 0; x < width; x++) {
	                for (y = 0; y < height; y++) {
	                    r = g = b = a = 0;
	                    gaussSum = 0;
	                    for (j = -radius; j <= radius; j++) {
	                        k = y + j;
	                        if (k >= 0 && k < height) {
	                            //确保 k 没超出 y 的范围
	                            i = (k * width + x) * 4;
	                            r += pixes[i] * gaussMatrix[j + radius];
	                            g += pixes[i + 1] * gaussMatrix[j + radius];
	                            b += pixes[i + 2] * gaussMatrix[j + radius];
	                            // a += pixes[i + 3] * gaussMatrix[j];
	                            gaussSum += gaussMatrix[j + radius];
	                        }
	                    }
	                    i = (y * width + x) * 4;
	                    pixes[i] = r / gaussSum;
	                    pixes[i + 1] = g / gaussSum;
	                    pixes[i + 2] = b / gaussSum;
	                    // pixes[i] = r ;
	                    // pixes[i + 1] = g ;
	                    // pixes[i + 2] = b ;
	                    // pixes[i + 3] = a ;
	                }
	            }
	            //end
	            return { data: pixes, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(gaussBlur);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var borderline = function (_Filter) {
	        _inherits(borderline, _Filter);

	        function borderline() {
	                var _ref;

	                var _temp, _this, _ret;

	                _classCallCheck(this, borderline);

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                        args[_key] = arguments[_key];
	                }

	                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = borderline.__proto__ || Object.getPrototypeOf(borderline)).call.apply(_ref, [this].concat(args))), _this), _this.cname = "查找边缘", _this.process = function (_ref2, _ref3) {
	                        var data = _ref2.data,
	                            width = _ref2.width,
	                            height = _ref2.height;
	                        var dorsyMath = _ref3.dorsyMath;
	                        return function (args) {
	                                var template1 = [-2, -4, -4, -4, -2, -4, 0, 8, 0, -4, -4, 8, 24, 8, -4, -4, 0, 8, 0, -4, -2, -4, -4, -4, -2];

	                                var template2 = [0, 1, 0, 1, -4, 1, 0, 1, 0];

	                                var template3 = [];

	                                return dorsyMath.applyMatrix({ data: data, width: width, height: height }, template2, 250);
	                        };
	                }, _temp), _possibleConstructorReturn(_this, _ret);
	        }

	        return borderline;
	}(_AlloyImage.Filter);

	_AlloyImage2.default.addFilter(borderline);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mosaic = function (_Filter) {
	    _inherits(mosaic, _Filter);

	    function mosaic() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, mosaic);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mosaic.__proto__ || Object.getPrototypeOf(mosaic)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return mosaic;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "马赛克";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var R = parseInt(args[0]) || 3;
	            var xLength = R * 2 + 1;

	            for (var x = 0, n = parseInt(width / xLength); x < n; x++) {

	                for (var y = 0, m = parseInt(height / xLength); y < m; y++) {

	                    var average = [],
	                        sum = [0, 0, 0];
	                    for (var i = 0; i < xLength; i++) {

	                        for (var j = 0; j < xLength; j++) {
	                            var realI = (y * xLength + i) * width + x * xLength + j;
	                            sum[0] += data[realI * 4];
	                            sum[1] += data[realI * 4 + 1];
	                            sum[2] += data[realI * 4 + 2];
	                        }
	                    }
	                    average[0] = sum[0] / (xLength * xLength);
	                    average[1] = sum[1] / (xLength * xLength);
	                    average[2] = sum[2] / (xLength * xLength);

	                    for (var i = 0; i < xLength; i++) {

	                        for (var j = 0; j < xLength; j++) {
	                            var realI = (y * xLength + i) * width + x * xLength + j;
	                            data[realI * 4] = average[0];
	                            data[realI * 4 + 1] = average[1];
	                            data[realI * 4 + 2] = average[2];
	                        }
	                    }
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(mosaic);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noise = function (_Filter) {
	    _inherits(noise, _Filter);

	    function noise() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, noise);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = noise.__proto__ || Object.getPrototypeOf(noise)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return noise;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "添加杂色";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var R = parseInt(args[0]) || 100;

	            var xLength = R * 2 + 1;

	            //区块
	            for (var x = 0; x < width; x++) {

	                for (var y = 0; y < height; y++) {

	                    var realI = y * width + x;
	                    for (var j = 0; j < 3; j++) {
	                        var rand = parseInt(Math.random() * R * 2) - R;
	                        data[realI * 4 + j] += rand;
	                    }
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(noise);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var oilPainting = function (_Filter) {
	    _inherits(oilPainting, _Filter);

	    function oilPainting() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, oilPainting);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = oilPainting.__proto__ || Object.getPrototypeOf(oilPainting)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return oilPainting;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var R = parseInt(args[0]) || 16;
	            var xLength = R * 2 + 1;

	            //区块
	            for (var x = 0; x < width; x++) {

	                for (var y = 0; y < height; y++) {

	                    var realI = y * width + x;
	                    var gray = 0;
	                    for (var j = 0; j < 3; j++) {
	                        gray += data[realI * 4 + j];
	                    }
	                    gray = gray / 3;
	                    var every = parseInt(gray / R) * R;
	                    for (var j = 0; j < 3; j++) {
	                        data[realI * 4 + j] = every;
	                    }
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(oilPainting);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var posterize = function (_Filter) {
	    _inherits(posterize, _Filter);

	    function posterize() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, posterize);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = posterize.__proto__ || Object.getPrototypeOf(posterize)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return posterize;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var dM = dorsyMath;

	            //灰度阶数
	            //由原来的255阶映射为现在的阶数
	            var step = args[0] || 20;

	            step = step < 1 ? 1 : step > 255 ? 255 : step;
	            var level = Math.floor(255 / step);

	            for (var x = 0; x < width; x++) {
	                for (var y = 0; y < height; y++) {
	                    dM.xyCal({ data: data, width: width, height: height }, x, y, function (r, g, b) {
	                        return [Math.floor(r / level) * level, Math.floor(g / level) * level, Math.floor(b / level) * level];
	                    });
	                }
	            }
	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(posterize);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sepia = function (_Filter) {
	    _inherits(sepia, _Filter);

	    function sepia() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, sepia);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = sepia.__proto__ || Object.getPrototypeOf(sepia)).call.apply(_ref, [this].concat(args))), _this), _this.process = function (_ref2, _ref3) {
	            var data = _ref2.data,
	                width = _ref2.width,
	                height = _ref2.height;
	            var dorsyMath = _ref3.dorsyMath;
	            return function (args) {
	                for (var x = 0; x < width; x++) {
	                    for (var y = 0; y < height; y++) {
	                        dorsyMath.xyCal({ data: data, width: width, height: height }, x, y, function (r, g, b) {
	                            return [r * 0.393 + g * 0.769 + b * 0.189, r * 0.349 + g * 0.686 + b * 0.168, r * 0.272 + g * 0.534 + b * 0.131];
	                        });
	                    }
	                }
	                return { data: data, width: width, height: height };
	            };
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return sepia;
	}(_AlloyImage.Filter);

	_AlloyImage2.default.addFilter(sepia);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sharp = function (_Filter) {
	    _inherits(sharp, _Filter);

	    function sharp() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, sharp);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = sharp.__proto__ || Object.getPrototypeOf(sharp)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return sharp;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "锐化";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var lamta = args[0] || 0.6;

	            for (var i = 0, n = data.length; i < n; i += 4) {
	                var ii = i / 4;
	                var row = parseInt(ii / width);
	                var col = ii % width;
	                if (row == 0 || col == 0) continue;

	                var A = ((row - 1) * width + (col - 1)) * 4;
	                var B = ((row - 1) * width + col) * 4;
	                var E = (ii - 1) * 4;

	                for (var j = 0; j < 3; j++) {
	                    var delta = data[i + j] - (data[B + j] + data[E + j] + data[A + j]) / 3;
	                    data[i + j] += delta * lamta;
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(sharp);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var toReverse = function (_Filter) {
	    _inherits(toReverse, _Filter);

	    function toReverse() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, toReverse);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = toReverse.__proto__ || Object.getPrototypeOf(toReverse)).call.apply(_ref, [this].concat(args))), _this), _this.cname = "反色", _this.process = function (_ref2, _ref3) {
	            var data = _ref2.data,
	                width = _ref2.width,
	                height = _ref2.height;
	            var dorsyMath = _ref3.dorsyMath;
	            return function (args) {
	                for (var i = 0, n = data.length; i < n; i += 4) {
	                    data[i] = 255 - data[i];
	                    data[i + 1] = 255 - data[i + 1];
	                    data[i + 2] = 255 - data[i + 2];
	                }

	                return { data: data, width: width, height: height };
	            };
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return toReverse;
	}(_AlloyImage.Filter);

	_AlloyImage2.default.addFilter(toReverse);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var toThresh = function (_Filter) {
	    _inherits(toThresh, _Filter);

	    function toThresh() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, toThresh);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = toThresh.__proto__ || Object.getPrototypeOf(toThresh)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return toThresh;
	}(_AlloyImage.Filter);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "灰度阈值";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            for (var i = 0, n = data.length; i < n; i += 4) {
	                var gray = parseInt(0.299 * data[i] + 0.578 * data[i + 1] + 0.114 * data[i + 2]);
	                data[i + 2] = data[i + 1] = data[i] = gray;
	            }

	            var arg = args[0] || 128;
	            for (var i = 0, n = data.length; i < n; i++) {
	                if ((i + 1) % 4) {
	                    data[i] = data[i] > arg ? 255 : 0;
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addFilter(toThresh);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Brightness = function (_Alteration) {
	    _inherits(Brightness, _Alteration);

	    function Brightness() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Brightness);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Brightness.__proto__ || Object.getPrototypeOf(Brightness)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return Brightness;
	}(_AlloyImage.Alteration);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "亮度";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            var brightness = args[0] / 50; // -1,1
	            var arg2 = args[1] || 0;

	            var c = arg2 / 50; // -1,1
	            var k = Math.tan((45 + 44 * c) * Math.PI / 180);

	            for (var i = 0, n = data.length; i < n; i += 4) {
	                for (var j = 0; j < 3; j++) {
	                    data[i + j] = (data[i + j] - 127.5 * (1 - brightness)) * k + 127.5 * (1 + brightness);
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addAlteration(Brightness);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Curve = function (_Alteration) {
	    _inherits(Curve, _Alteration);

	    function Curve() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Curve);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Curve.__proto__ || Object.getPrototypeOf(Curve)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return Curve;
	}(_AlloyImage.Alteration);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "曲线";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            /*
	             * arg   arg[0] = [3,3] ,arg[1]  = [2,2]
	             * */

	            //获得插值函数
	            var f = dorsyMath.lagrange(args[0], args[1]);

	            //调节通道
	            var channel = args[2];
	            if (!/[RGB]+/.test(channel)) {
	                channel = "RGB";
	            }

	            var channelString = channel.replace("R", "0").replace("G", "1").replace("B", "2");

	            var indexOfArr = [channelString.indexOf("0") > -1, channelString.indexOf("1") > -1, channelString.indexOf("2") > -1];

	            //区块
	            for (var x = 0; x < width; x++) {

	                for (var y = 0; y < height; y++) {

	                    var realI = y * width + x;

	                    for (var j = 0; j < 3; j++) {
	                        if (!indexOfArr[j]) continue;
	                        data[realI * 4 + j] = f(data[realI * 4 + j]);
	                    }
	                }
	            }

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addAlteration(Curve);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Gamma = function (_Alteration) {
	    _inherits(Gamma, _Alteration);

	    function Gamma() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Gamma);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gamma.__proto__ || Object.getPrototypeOf(Gamma)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return Gamma;
	}(_AlloyImage.Alteration);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "伽马";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {

	            //gamma阶-100， 100
	            var gamma;

	            if (args[0] == undefined) gamma = 10;else gamma = args[0];

	            var normalizedArg = (gamma + 100) / 200 * 2;

	            for (var x = 0; x < width; x++) {
	                for (var y = 0; y < height; y++) {
	                    dorsyMath.xyCal({ data: data, width: width, height: height }, x, y, function (r, g, b) {
	                        return [Math.pow(r, normalizedArg), Math.pow(g, normalizedArg), Math.pow(b, normalizedArg)];
	                    });
	                }
	            }
	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addAlteration(Gamma);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author: Bin Wang
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description:  可选颜色 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @参考：http://wenku.baidu.com/view/e32d41ea856a561252d36f0b.html
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SeletiveColor = function (_Alteration) {
	    _inherits(SeletiveColor, _Alteration);

	    //end process Method
	    function SeletiveColor() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, SeletiveColor);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SeletiveColor.__proto__ || Object.getPrototypeOf(SeletiveColor)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return SeletiveColor;
	}(_AlloyImage.Alteration); //end M defination

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "可选颜色";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            //选择的颜色
	            var color = args[0];

	            //百分数
	            var C = args[1];
	            var M = args[2];
	            var Y = args[3];
	            var K = args[4];

	            //是否相对
	            var isRelative = args[5] || 0;

	            var maxColorMap = {
	                red: "R",
	                green: "G",
	                blue: "B",
	                "红色": "R",
	                "绿色": "G",
	                "蓝色": "B"
	            };

	            var minColorMap = {
	                cyan: "R",
	                magenta: "G",
	                yellow: "B",
	                "青色": "R",
	                "洋红": "G",
	                "黄色": "B"
	            };

	            //检查是否是被选中的颜色
	            var checkSelectedColor = function checkSelectedColor(colorObj) {
	                if (maxColorMap[color]) {
	                    return Math.max(colorObj.R, colorObj.G, colorObj.B) == colorObj[maxColorMap[color]];
	                } else if (minColorMap[color]) {
	                    return Math.min(colorObj.R, colorObj.G, colorObj.B) == colorObj[minColorMap[color]];
	                } else if (color == "black" || color == "黑色") {
	                    return Math.min(colorObj.R, colorObj.G, colorObj.B) < 128;
	                } else if (color == "white" || color == "白色") {
	                    return Math.max(colorObj.R, colorObj.G, colorObj.B) > 128;
	                } else if (color == "中性色") {
	                    return !(Math.max(colorObj.R, colorObj.G, colorObj.B) < 1 || Math.min(colorObj.R, colorObj.G, colorObj.B) > 224);
	                }
	            };

	            var upLimit = 0;
	            var lowLimit = 0;
	            var limit = 0;

	            var alterNum = [C, M, Y, K];
	            for (var x = 0, w = width; x < w; x++) {
	                for (var y = 0, h = height; y < h; y++) {
	                    dorsyMath.xyCal({ data: data, width: width, height: height }, x, y, function (R, G, B) {
	                        var colorObj = {
	                            R: R,
	                            G: G,
	                            B: B
	                        };

	                        var colorArr = [R, G, B];
	                        var resultArr = [];

	                        if (checkSelectedColor(colorObj)) {
	                            if (maxColorMap[color]) {
	                                var maxColor = maxColorMap[color];

	                                var middleValue = R + G + B - Math.max(R, G, B) - Math.min(R, G, B);
	                                limit = colorObj[maxColor] - middleValue;
	                            } else if (minColorMap[color]) {
	                                var minColor = minColorMap[color];

	                                var middleValue = R + G + B - Math.max(R, G, B) - Math.min(R, G, B);
	                                limit = middleValue - colorObj[minColor];
	                            } else if (color == "black" || color == "黑色") {
	                                limit = parseInt(127.5 - Math.max(R, G, B)) * 2;
	                            } else if (color == "white" || color == "白色") {
	                                limit = parseInt(Math.min(R, G, B) - 127.5) * 2;
	                            } else if (color == "中性色") {
	                                limit = 255 - (Math.abs(Math.max(R, G, B) - 127.5) + Math.abs(Math.min(R, G, B) - 127.5));
	                            } else {
	                                return;
	                            }

	                            for (var i = 0; i < 3; i++) {
	                                //可减少到的量
	                                var lowLimitDelta = parseInt(limit * (colorArr[i] / 255));
	                                var lowLimit = colorArr[i] - lowLimitDelta;

	                                //可增加到的量
	                                var upLimitDelta = parseInt(limit * (1 - colorArr[i] / 255));
	                                var upLimit = colorArr[i] + upLimitDelta;

	                                //将黑色算进去 得到影响百分比因子
	                                var factor = alterNum[i] + K + alterNum[i] * K;

	                                //相对调节
	                                if (isRelative) {
	                                    //如果分量大于128  减少量=增加量
	                                    if (colorArr[i] > 128) {
	                                        lowLimitDelta = upLimitDelta;
	                                    }

	                                    //先算出黑色导致的原始增量
	                                    if (K > 0) {
	                                        var realUpLimit = colorArr[i] - K * lowLimitDelta;
	                                    } else {
	                                        var realUpLimit = colorArr[i] - K * upLimitDelta;
	                                    }

	                                    //标准化
	                                    if (realUpLimit > upLimit) realUpLimit = upLimit;
	                                    if (realUpLimit < lowLimit) realUpLimit = lowLimit;

	                                    upLimitDelta = upLimit - realUpLimit;
	                                    lowLimitDelta = realUpLimit - lowLimit;

	                                    if (K < 0) {
	                                        lowLimitDelta = upLimitDelta;
	                                    } else {}

	                                    //> 0表明在减少
	                                    if (alterNum[i] > 0) {
	                                        realUpLimit -= alterNum[i] * lowLimitDelta;
	                                    } else {
	                                        realUpLimit -= alterNum[i] * upLimitDelta;
	                                    }
	                                } else {

	                                    //现在量
	                                    var realUpLimit = limit * -factor + colorArr[i];
	                                }

	                                if (realUpLimit > upLimit) realUpLimit = upLimit;
	                                if (realUpLimit < lowLimit) realUpLimit = lowLimit;

	                                resultArr[i] = realUpLimit;
	                            }

	                            return resultArr;
	                        }
	                    }); //end xyCal
	                } //end forY
	            } //end forX

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	exports.default = SeletiveColor;
	_AlloyImage2.default.addAlteration(SeletiveColor);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author: Bin Wang
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description: 调整RGB 饱和和度  
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * H (-2*Math.PI , 2 * Math.PI)  S (-100,100) I (-100,100)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 着色原理  勾选着色后，所有的像素不管之前是什么色相，都变成当前设置的色相，
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 然后饱和度变成现在设置的饱和度，但保持明度为原来的基础上加上设置的明度
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SetHSI = function (_Alteration) {
	    _inherits(SetHSI, _Alteration);

	    function SetHSI() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, SetHSI);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SetHSI.__proto__ || Object.getPrototypeOf(SetHSI)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return SetHSI;
	}(_AlloyImage.Alteration);

	var _initialiseProps = function _initialiseProps() {
	    this.cname = "色相/饱和度调节";

	    this.process = function (_ref2, _ref3) {
	        var data = _ref2.data,
	            width = _ref2.width,
	            height = _ref2.height;
	        var dorsyMath = _ref3.dorsyMath;
	        return function (args) {
	            args[0] = args[0] / 180 * Math.PI;
	            args[1] = args[1] / 100 || 0;
	            args[2] = args[2] / 100 * 255 || 0;
	            args[3] = args[3] || false; //着色

	            //调节通道
	            var channel = args[4];
	            if (!/[RGBCMY]+/.test(channel)) {
	                channel = "RGBCMY";
	            }

	            var letters = channel.split("");
	            var indexOf = {};

	            for (var i = 0; i < letters.length; i++) {
	                indexOf[letters[i]] = 1;
	            }

	            dorsyMath.applyInHSI({ data: data, width: width, height: height }, function (i, color) {
	                if (!indexOf[color]) return;

	                if (args[3]) {
	                    i.H = args[0];
	                    i.S = args[1];
	                    i.I += args[2];
	                } else {
	                    i.H += args[0];
	                    i.S += args[1];
	                    i.I += args[2];
	                }
	            });

	            return { data: data, width: width, height: height };
	        };
	    };
	};

	_AlloyImage2.default.addAlteration(SetHSI);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('sketch', function () {
	    var _this = this.clone();

	    return this.add(_this.act("反色").act("高斯模糊", 8), "颜色减淡").act("toGray").act("锐化", 1);
	});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('softenFace', function () {
	    var _this = this.clone();
	    return _this.add(this.act("高斯模糊", 10), "滤色").act("亮度", -10, 5);
	});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('purpleStyle', function () {
	    var _this = this.clone();
	    return this.add(_this.act("高斯模糊", 3), "正片叠底", "RG");
	});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('vintage', function () {
	    var _this = this;

	    return this.act("灰度处理").then(function () {
	        return _this.add(new _AlloyImage2.default(_this.width, _this.height, "#808080").act("添加杂色").act("高斯模糊", 4).act("色相/饱和度调节", 32, 19, 0, true), "叠加").promise();
	    });
	});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('lomo', function () {
	    var m = this.clone().add(this.clone(), "滤色").add(this.clone(), "柔光");

	    return m.add(this.clone().act("反色"), "正常", "20%", "B").act("暗角", 6, 200);
	});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('warmAutumn', function () {
	    var m = this.clone().act("色相/饱和度调节", 36, 47, 8, true).act("暗角", 6, 150);
	    return this.add(m, "叠加");
	});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('soften', function () {
	    var _this = this.clone();
	    return this.add(_this.act("高斯模糊", 6), "变暗");
	});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AlloyImage2.default.define('carveStyle', function () {
	    var layerClone = this.clone().act("马赛克").act("查找边缘").act("浮雕效果");
	    return this.add(layerClone, "线性光");
	});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _AlloyImage = __webpack_require__(1);

	var _AlloyImage2 = _interopRequireDefault(_AlloyImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	_AlloyImage2.default.define('rough', function () {
	    var _this = this;

	    return this.then(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return _this.add(new _AlloyImage2.default(_this.width, _this.height, "#000").act("喷点").act("反色").act("浮雕效果"), "叠加").promise();

	                    case 2:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, _this);
	    })));
	});

/***/ })
/******/ ]);