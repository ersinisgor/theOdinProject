/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/components.js":
/*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n// import homeMainContent from './home';\n\n\nconst content = document.querySelector('#content');\n\n/*----HEADER----*/\nfunction createHeader() {\n  const header = document.createElement('header');\n\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement('nav');\n  const navbar = document.createElement('div');\n  navbar.classList.add('navbar');\n  nav.appendChild(navbar);\n\n  const ul = document.createElement('ul');\n  navbar.appendChild(ul);\n\n  const li_home = document.createElement('li');\n  li_home.setAttribute('id', 'home');\n  li_home.innerText = 'Home';\n\n  const li_menu = document.createElement('li');\n  li_menu.setAttribute('id', 'menu');\n  li_menu.innerText = 'Menu';\n\n  const li_contact = document.createElement('li');\n  li_contact.setAttribute('id', 'contact');\n  li_contact.innerText = 'Contact';\n\n  ul.appendChild(li_home);\n  ul.appendChild(li_menu);\n  ul.appendChild(li_contact);\n\n  return nav;\n}\n\n/*----MAIN----*/\n\nfunction menuMain() {\n  const main = document.createElement('main');\n\n  main.appendChild(menuMainContent());\n\n  return main;\n}\n\nfunction contactMain() {\n  const main = document.createElement('main');\n\n  main.appendChild(contactMainContent());\n\n  return main;\n}\n\nfunction menuMainContent() {\n  const mainContent = document.createElement('div');\n  // mainContent.classList.add('main-content');\n\n  return mainContent;\n}\n\nfunction contactMainContent() {\n  const mainContent = document.createElement('div');\n  mainContent.classList.add('main-content');\n\n  return mainContent;\n}\n\n/*----FOOTER----*/\nfunction createFooter() {\n  const footer = document.createElement('footer');\n\n  footer.innerHTML = `<p>\n          Copyright ©\n          <script>\n            document.write(new Date().getFullYear());\n          </script>\n          Created by <b><i>ersinisgor </i></b>\n        </p>\n        <a href=\"https://github.com/ersinisgor\" target=\"_blank\">\n          <i class=\"fab fa-github\"></i\n        ></a>`;\n\n  return footer;\n}\n\nfunction loadMenu() {\n  content.innerHTML = '';\n\n  content.appendChild(createHeader());\n  content.appendChild(menuMain());\n  content.appendChild(createFooter());\n}\n\nfunction loadContact() {\n  content.innerHTML = '';\n\n  content.appendChild(createHeader());\n  content.appendChild(contactMain());\n  content.appendChild(createFooter());\n}\n\ndocument.addEventListener('click', e => {\n  const target = e.target.innerText;\n\n  if (target === 'Home') (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  if (target === 'Menu') loadMenu();\n  if (target === 'Contact') loadContact();\n});\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://09-restaurant-page/./src/modules/components.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/modules/components.js\");\n\n\nfunction home_createMain() {\n  const main = document.createElement('main');\n\n  main.appendChild(home_createMainContent());\n\n  return main;\n}\n\nfunction home_createMainContent() {\n  const mainContent = document.createElement('div');\n  mainContent.classList.add('main-content');\n\n  const h1 = document.createElement('h1');\n  h1.innerText = 'Donatello';\n\n  mainContent.appendChild(h1);\n  mainContent.appendChild(home_createMainText());\n\n  return mainContent;\n}\n\nfunction home_createMainText() {\n  const mainText = document.createElement('div');\n  mainText.classList.add('main-text');\n\n  const p = document.createElement('p');\n  p.innerText = 'Welcome to Donatello home page.';\n\n  const subtext = document.createElement('p');\n  subtext.classList.add('subtext');\n  subtext.innerText =\n    'We have been serving our customers with passion since 2002. Click to discover the best breakfast restaurant in the region';\n\n  const button = document.createElement('button');\n  button.setAttribute('href', '#menu');\n  button.innerText = 'Order Online';\n\n  mainText.appendChild(p);\n  mainText.appendChild(subtext);\n  mainText.appendChild(button);\n\n  return mainText;\n}\n\nfunction loadHome() {\n  content.innerHTML = '';\n\n  content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  content.appendChild(home_createMain());\n  content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n// function createMainContent() {\n//   const mainContent = document.createElement('div');\n//   mainContent.classList.add('main-content');\n\n//   const h1 = document.createElement('h1');\n//   h1.innerText = 'Donatello';\n\n//   mainContent.appendChild(h1);\n//   mainContent.appendChild(createMainText());\n\n//   return mainContent;\n// }\n\n// function createMainText() {\n//   const mainText = document.createElement('div');\n//   mainText.classList.add('main-text');\n\n//   const p = document.createElement('p');\n//   p.innerText = 'Welcome to Donatello home page.';\n\n//   const subtext = document.createElement('p');\n//   subtext.classList.add('subtext');\n//   subtext.innerText =\n//     'We have been serving our customers with passion since 2002. Click to discover the best breakfast restaurant in the region';\n\n//   const button = document.createElement('button');\n//   button.setAttribute('href', '#menu');\n//   button.innerText = 'Order Online';\n\n//   mainText.appendChild(p);\n//   mainText.appendChild(subtext);\n//   mainText.appendChild(button);\n\n//   return mainText;\n// }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://09-restaurant-page/./src/modules/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/components.js");
/******/ 	
/******/ })()
;