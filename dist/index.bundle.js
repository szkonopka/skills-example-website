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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.toggleMenu = toggleMenu;\nexports.showGames = showGames;\nexports.getHeaderHamburgerDOMElem = getHeaderHamburgerDOMElem;\nexports.getMenuDOMElem = getMenuDOMElem;\nexports.getMoreGamesBtnDOMElem = getMoreGamesBtnDOMElem;\nexports.getBookmarksDOMElems = getBookmarksDOMElems;\nexports.activeBookmark = activeBookmark;\nexports.deactiveAllBookmarks = deactiveAllBookmarks;\nfunction toggleMenu() {\n\tvar menu = getMenuDOMElem();\n\tvar headerHamburger = getHeaderHamburgerDOMElem();\n\tvar logoSrcLight = './img/vr-logo-w.svg';\n\tvar logoSrcDark = './img/vr-logo.svg';\n\tvar logoContainer = document.querySelector('#logo img');\n\tvar currentLogoSrc = logoContainer.getAttribute('src');\n\n\tif (menu === null || headerHamburger === null) return false;\n\n\tmenu.classList.toggle('main-menu_active');\n\theaderHamburger.classList.toggle('header__hamburger_active');\n\n\tif (currentLogoSrc === logoSrcLight) setTimeout(function () {\n\t\tlogoContainer.setAttribute('src', logoSrcDark);\n\t}, 200);else logoContainer.setAttribute('src', logoSrcLight);\n\n\treturn true;\n}\n\nfunction showGames() {\n\tvar windowPopUp = getWindowPopUpDOMElem();\n\tvar library = getLibraryDOMElem();\n\twindowPopUp.classList.toggle('window-pop-up_active');\n\tlibrary.classList.toggle('library_active');\n}\n\nfunction getHeaderHamburgerDOMElem() {\n\treturn document.querySelector('.header__hamburger');\n};\nfunction getMenuDOMElem() {\n\treturn document.querySelector('.main-menu');\n};\nfunction getMoreGamesBtnDOMElem() {\n\treturn document.querySelector('#more-games');\n};\nfunction getBookmarksDOMElems() {\n\treturn document.querySelectorAll('.library__bookmark');\n};\n\nfunction getWindowPopUpDOMElem() {\n\treturn document.querySelector('.window-pop-up');\n};\nfunction getLibraryDOMElem() {\n\treturn document.querySelector('.library');\n};\n\nfunction activeBookmark(bookmarks, index) {\n\tfor (var i = 0; i < bookmarks.length; i++) {\n\t\tif (index === i) bookmarks[i].classList.add('library__bookmark_active');\n\t}\n}\n\nfunction deactiveAllBookmarks(bookmarks) {\n\tvar _iteratorNormalCompletion = true;\n\tvar _didIteratorError = false;\n\tvar _iteratorError = undefined;\n\n\ttry {\n\t\tfor (var _iterator = bookmarks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n\t\t\tvar bookmark = _step.value;\n\n\t\t\tbookmark.classList.remove('library__bookmark_active');\n\t\t}\n\t} catch (err) {\n\t\t_didIteratorError = true;\n\t\t_iteratorError = err;\n\t} finally {\n\t\ttry {\n\t\t\tif (!_iteratorNormalCompletion && _iterator.return) {\n\t\t\t\t_iterator.return();\n\t\t\t}\n\t\t} finally {\n\t\t\tif (_didIteratorError) {\n\t\t\t\tthrow _iteratorError;\n\t\t\t}\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./src/animations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _animations = __webpack_require__(/*! ./animations.js */ \"./src/animations.js\");\n\nvar animLib = _interopRequireWildcard(_animations);\n\nvar _textSlider = __webpack_require__(/*! ./textSlider.js */ \"./src/textSlider.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar headers = [\"<i>The biggest</i> VR arcade in Wrocław\", \"<i>About 100+</i> VR stands\", \"<i>Console gaming</i> zone\"];\n\nvar descriptions = [\"Lorem Ipsum jest tekstem stosowanym w <strong>przemyśle poligraficznym</strong>. Został po raz pierwszy użyty w XV w. przez <strong>nieznanego drukarza</strong>.\", \"Zaczął być <strong>używany przemyśle elektronicznym</strong>, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty <strong>Lorem Ipsum</strong>.\", \"<strong>Lorem Ipsum</strong> nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed <strong>Chrystusem</strong>, czyli ponad 2000 lat temu!\"];\n\n/*\r\nconst popUpWindow = `\r\n\t<div id=\"more-games\" class=\"pop-up\">\r\n\t\t<ul class=\"games\">\r\n\t\t\t<li>Games</li>\r\n\t\t</ul>\r\n\t</div>\r\n`\r\n*/\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tvar headerHamburger = animLib.getHeaderHamburgerDOMElem();\n\n\tloadBookmarkContent(0);\n\n\theaderHamburger.addEventListener(\"click\", function () {\n\t\tanimLib.toggleMenu();\n\t});\n\n\tvar moreGamesBtn = animLib.getMoreGamesBtnDOMElem();\n\n\tmoreGamesBtn.addEventListener(\"click\", function () {\n\t\tanimLib.showGames();\n\t});\n\n\tvar bookmarks = animLib.getBookmarksDOMElems();\n\n\tvar _loop = function _loop(i) {\n\t\tbookmarks[i].addEventListener(\"click\", function () {\n\t\t\tanimLib.deactiveAllBookmarks(bookmarks);\n\t\t\tanimLib.activeBookmark(bookmarks, i);\n\t\t\tloadBookmarkContent(i);\n\t\t});\n\t};\n\n\tfor (var i = 0; i < bookmarks.length; i++) {\n\t\t_loop(i);\n\t}\n\n\tvar textSlider = new _textSlider.TextSlider(headers, descriptions);\n\ttextSlider.init();\n});\n\nfunction loadBookmarkContent(index) {\n\tvar fetchedUrl = \"http://localhost:3000/\";\n\n\tswitch (index) {\n\t\tcase 1:\n\t\t\tfetchedUrl = fetchedUrl + \"apps.html\";\n\t\t\tbreak;\n\t\tcase 2:\n\t\t\tfetchedUrl = fetchedUrl + \"movies.html\";\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tfetchedUrl = fetchedUrl + \"games.html\";\n\t\t\tbreak;\n\t}\n\n\tfetch(fetchedUrl).then(function (response) {\n\t\treturn response.text();\n\t}).then(function (html) {\n\t\tdocument.querySelector('.examples_library').innerHTML = html;\n\t});\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/textSlider.js":
/*!***************************!*\
  !*** ./src/textSlider.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.TextSlider = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TextSlider = exports.TextSlider = function () {\n\tfunction TextSlider(headers, descriptions) {\n\t\tvar reloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6000;\n\n\t\t_classCallCheck(this, TextSlider);\n\n\t\tthis.currentSlide = 0;\n\t\tthis.slides = headers.map(function (header, index) {\n\t\t\treturn { 'header': header, 'description': descriptions[index] };\n\t\t});\n\n\t\tthis.headers = document.querySelectorAll('#headers li h1');\n\t\tthis.descriptions = document.querySelector('#descriptions p');\n\t\tthis.headersAmount = this.headers.length;\n\t\tthis.reloadTime = reloadTime;\n\t\tthis.loader = document.querySelector('.headers__loader_progress');\n\t\tthis.counter = 0;\n\t}\n\n\t_createClass(TextSlider, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.headersList = document.querySelectorAll('#headers li');\n\n\t\t\tvar _loop = function _loop(i) {\n\t\t\t\t_this.headers[i].innerHTML = _this.slides[i].header;\n\t\t\t\t_this.headers[i].addEventListener('click', function () {\n\t\t\t\t\t_this.show(i);\n\t\t\t\t});\n\t\t\t};\n\n\t\t\tfor (var i = 0; i < this.headersAmount; i++) {\n\t\t\t\t_loop(i);\n\t\t\t}\n\n\t\t\tthis.deactiveHeaders();\n\t\t\tthis.headers[this.currentSlide].classList.add('headers__item_active');\n\t\t\tthis.descriptions.innerHTML = this.slides[this.currentSlide].description;\n\n\t\t\tthis.startTimer();\n\t\t}\n\t}, {\n\t\tkey: 'startTimer',\n\t\tvalue: function startTimer() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar headerSwitchInterval = setInterval(function () {\n\t\t\t\tif (_this2.counter === 200) {\n\t\t\t\t\t_this2.showNext();\n\t\t\t\t}\n\t\t\t\t_this2.counter++;\n\t\t\t\tObject.assign(_this2.loader.style, {\n\t\t\t\t\t'width': _this2.counter / 2 + '%'\n\t\t\t\t});\n\t\t\t}, this.reloadTime / 200);\n\t\t}\n\t}, {\n\t\tkey: 'showNext',\n\t\tvalue: function showNext() {\n\t\t\tif (this.currentSlide === this.headersAmount - 1) {\n\t\t\t\tthis.show(0);\n\t\t\t} else {\n\t\t\t\tthis.show(this.currentSlide + 1);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'showPrevious',\n\t\tvalue: function showPrevious() {}\n\t}, {\n\t\tkey: 'show',\n\t\tvalue: function show(index) {\n\t\t\tthis.currentSlide = index;\n\t\t\tthis.counter = 0;\n\t\t\tthis.deactiveHeaders();\n\t\t\tthis.headers[this.currentSlide].classList.add('headers__item_active');\n\t\t\tthis.descriptions.innerHTML = this.slides[this.currentSlide].description;\n\t\t}\n\t}, {\n\t\tkey: 'deactiveHeaders',\n\t\tvalue: function deactiveHeaders() {\n\t\t\tfor (var i = 0; i < this.headersAmount; i++) {\n\t\t\t\tthis.headers[i].classList.remove('headers__item_active');\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn TextSlider;\n}();\n\n//# sourceURL=webpack:///./src/textSlider.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Timer = exports.Timer = function () {\n\tfunction Timer(ms) {\n\t\t_classCallCheck(this, Timer);\n\n\t\tthis.interval = ms ? ms : 1000;\n\t}\n\n\t_createClass(Timer, [{\n\t\tkey: \"run\",\n\t\tvalue: function run() {\n\t\t\tvar that = this;\n\t\t\tsetInterval(function (runnableFunc) {\n\t\t\t\trunnableFunc(that);\n\t\t\t}, this.interval);\n\t\t}\n\t}]);\n\n\treturn Timer;\n}();\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });