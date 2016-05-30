webpackJsonp([0],[
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var req = __webpack_require__(/*! ./app */ 3);
	
	var arr = _.remove(req.keys(), function(file){
	   return !/\.spec\.js$/.test(file);
	});
	
	arr.sort(function(a, b){
	    if(/index\.js$/.test(a)) return -1;
	    if(/app.js$/.test(a)) return -1;
	
	    return 1;
	});
	
	console.log(arr);
	
	arr.forEach(function(file){
	    req(file);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! lodash */ 1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/*!***********************!*\
  !*** ./src/app \.js$ ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./admin/test/index.js": 4,
		"./admin/test/login.ctrl.js": 5,
		"./app.js": 6,
		"./module1/index.js": 7,
		"./module1/mdl1.ctrl.js": 8,
		"./module1/mdl1.ctrl.spec.js": 13,
		"./module2/index.js": 9,
		"./module2/mdl2.ctrl.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./src/app/admin/test/index.js ***!
  \*************************************/
/***/ function(module, exports) {

	angular
	    .module('admin.login', []);

/***/ },
/* 5 */
/*!******************************************!*\
  !*** ./src/app/admin/test/login.ctrl.js ***!
  \******************************************/
/***/ function(module, exports) {

	angular
	    .module('admin.login')
	    .controller('LoginCtrl', function(){
	        this.title = 'Log in!';
	    });

/***/ },
/* 6 */
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ function(module, exports) {

	angular.module('app', [
	    'app.module1',
	    'admin.login'
	])
	
	.controller('MyCtrl', function(){
	    this.title = 'App Project';
	});

/***/ },
/* 7 */
/*!**********************************!*\
  !*** ./src/app/module1/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	angular.module('app.module1', [
	    'app.module2'
	]);
	
	    

/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./src/app/module1/mdl1.ctrl.js ***!
  \**************************************/
/***/ function(module, exports) {

	angular.module('app.module1')
	
	    .controller('Mdl1Ctrl', function () {
	        this.title = 'Module 1 Controller cool';
	    });

/***/ },
/* 9 */
/*!**********************************!*\
  !*** ./src/app/module2/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	angular.module('app.module2', []);
	
	   

/***/ },
/* 10 */
/*!**************************************!*\
  !*** ./src/app/module2/mdl2.ctrl.js ***!
  \**************************************/
/***/ function(module, exports) {

	angular.module('app.module2')
	
	    .controller('Mdl2Ctrl', function(){
	        this.title = 'Module 2 Controller';
	    });

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/*!*******************************************!*\
  !*** ./src/app/module1/mdl1.ctrl.spec.js ***!
  \*******************************************/
/***/ function(module, exports) {

	describe('test', function(){
	    expect(1).equals(1);
	})

/***/ }
]);
//# sourceMappingURL=app.js.map