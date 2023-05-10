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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createMain\": () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n// import homeMainContent from './home';\n\n\n\n\nconst content = document.querySelector('#content');\n\nfunction createHeader() {\n  const header = document.createElement('header');\n\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement('nav');\n  const navbar = document.createElement('div');\n  navbar.classList.add('navbar');\n\n  const ul = document.createElement('ul');\n\n  const li_home = document.createElement('li');\n  li_home.setAttribute('id', 'home');\n  li_home.innerText = 'Home';\n\n  const li_menu = document.createElement('li');\n  li_menu.setAttribute('id', 'menu');\n  li_menu.innerText = 'Menu';\n\n  const li_contact = document.createElement('li');\n  li_contact.setAttribute('id', 'contact');\n  li_contact.innerText = 'Contact';\n\n  nav.appendChild(navbar);\n  navbar.appendChild(ul);\n  ul.appendChild(li_home);\n  ul.appendChild(li_menu);\n  ul.appendChild(li_contact);\n\n  return nav;\n}\n\nfunction createMain() {\n  const main = document.createElement('main');\n\n  return main;\n}\n\n/*----FOOTER----*/\nfunction createFooter() {\n  const footer = document.createElement('footer');\n\n  footer.innerHTML = `<p>\n          Copyright ©\n          <script>\n            document.write(new Date().getFullYear());\n          </script>\n          Created by <b><i>ersinisgor </i></b>\n        </p>\n        <a href=\"https://github.com/ersinisgor\" target=\"_blank\">\n          <i class=\"fab fa-github\"></i\n        ></a>`;\n\n  return footer;\n}\n\n// function init() {\n//   const content = document.querySelector('#content');\n//   content.innerHTML = '';\n\n//   content.appendChild(createHeader());\n//   content.appendChild(createMain());\n//   content.appendChild(createFooter());\n\n//   return content;\n// }\n\ndocument.addEventListener('click', e => {\n  const target = e.target.innerText;\n\n  if (target === 'Home') (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  if (target === 'Menu') (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  if (target === 'Contact') (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// init();\n\n\n\n\n//# sourceURL=webpack://09-restaurant-page/./src/modules/components.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/modules/components.js\");\n\n\nfunction contact_createMain() {\n  const main = document.createElement('main');\n\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('contact-main');\n\n  main.appendChild(mainContainer);\n  mainContainer.appendChild(contact_createMainContent());\n\n  return main;\n}\n\nfunction contact_createMainContent() {\n  const mainContent = document.createElement('div');\n  mainContent.classList.add('contact-main-content');\n\n  // const h1 = document.createElement('h1');\n  // h1.innerText = 'Contact';\n\n  // const hr = document.createElement('hr');\n\n  const tel = document.createElement('p');\n  tel.classList.add('tel');\n  tel.innerText = `☎ +90 266 11 22 333`;\n\n  const address = document.createElement('p');\n  address.classList.add('address');\n  address.innerText = `🏠 Atatürk Boulevard 15, Istanbul, TURKEY`;\n\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('image-container');\n\n  const location = document.createElement('img');\n  location.classList.add('location');\n  location.src = `../dist/img/Location.jpg`;\n  imageContainer.appendChild(location);\n\n  // mainContent.appendChild(h1);\n  // mainContent.appendChild(hr);\n  mainContent.appendChild(tel);\n  mainContent.appendChild(address);\n  mainContent.appendChild(imageContainer);\n\n  return mainContent;\n}\n\nfunction loadContact() {\n  content.innerHTML = '';\n\n  content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  content.appendChild(contact_createMain());\n  content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://09-restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/modules/components.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\n\n\nfunction home_createMain() {\n  const main = document.createElement('main');\n  // main.classList.add('home-main');\n\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('home-main');\n\n  main.appendChild(mainContainer);\n  mainContainer.appendChild(home_createMainContent());\n\n  return main;\n}\n\nfunction home_createMainContent() {\n  const mainContent = document.createElement('div');\n  mainContent.classList.add('home-main-content');\n\n  const h1 = document.createElement('h1');\n  h1.innerText = 'Donald';\n\n  const hr = document.createElement('hr');\n\n  mainContent.appendChild(h1);\n  mainContent.appendChild(hr);\n  mainContent.appendChild(home_createMainText());\n\n  return mainContent;\n}\n\nfunction home_createMainText() {\n  const mainText = document.createElement('div');\n  mainText.classList.add('main-text');\n\n  const p = document.createElement('p');\n  p.innerText = 'Welcome to Donald home page.';\n\n  const subtext = document.createElement('p');\n  subtext.classList.add('subtext');\n  subtext.innerText =\n    'We have been serving our customers with passion since 2002. Click to discover the best breakfast restaurant in the region';\n\n  const button = document.createElement('button');\n  button.innerText = 'Order Online';\n  button.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  mainText.appendChild(p);\n  mainText.appendChild(subtext);\n  mainText.appendChild(button);\n\n  return mainText;\n}\n\nfunction loadHome() {\n  _components__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = '';\n\n  _components__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  _components__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(home_createMain());\n  _components__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n// function createMainContent() {\n//   const mainContent = document.createElement('div');\n//   mainContent.classList.add('main-content');\n\n//   const h1 = document.createElement('h1');\n//   h1.innerText = 'Donatello';\n\n//   mainContent.appendChild(h1);\n//   mainContent.appendChild(createMainText());\n\n//   return mainContent;\n// }\n\n// function createMainText() {\n//   const mainText = document.createElement('div');\n//   mainText.classList.add('main-text');\n\n//   const p = document.createElement('p');\n//   p.innerText = 'Welcome to Donatello home page.';\n\n//   const subtext = document.createElement('p');\n//   subtext.classList.add('subtext');\n//   subtext.innerText =\n//     'We have been serving our customers with passion since 2002. Click to discover the best breakfast restaurant in the region';\n\n//   const button = document.createElement('button');\n//   button.setAttribute('href', '#menu');\n//   button.innerText = 'Order Online';\n\n//   mainText.appendChild(p);\n//   mainText.appendChild(subtext);\n//   mainText.appendChild(button);\n\n//   return mainText;\n// }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://09-restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/modules/components.js\");\n\n\nfunction menu_createMain() {\n  const main = document.createElement('main');\n\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('menu-main');\n\n  main.appendChild(mainContainer);\n  mainContainer.appendChild(menu_createMainContent());\n\n  return main;\n}\n\nfunction menu_createMainContent() {\n  const mainContent = document.createElement('div');\n  mainContent.classList.add('menu-main-content');\n\n  const h1 = document.createElement('h1');\n  h1.innerText = 'Menu';\n\n  const hr = document.createElement('hr');\n\n  mainContent.appendChild(h1);\n  mainContent.appendChild(hr);\n  mainContent.appendChild(menu_createMainText());\n\n  return mainContent;\n}\n\nfunction menu_createMainText() {\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n\n  menuContainer.appendChild(createMenuItems('Omelet', 22));\n  menuContainer.appendChild(createMenuItems('Sausage', 18));\n  menuContainer.appendChild(createMenuItems('Pancake', 12));\n  menuContainer.appendChild(createMenuItems('Croissant', 8));\n  menuContainer.appendChild(createMenuItems('Eggs', 14));\n  menuContainer.appendChild(createMenuItems('Bagel', 7));\n\n  return menuContainer;\n}\n\nfunction createMenuItems(name, price) {\n  const menuItems = document.createElement('div');\n  menuItems.classList.add('menu-items');\n\n  const menuImage = document.createElement('div');\n  menuImage.classList.add('menu-image');\n  const image = document.createElement('img');\n  image.src = `../dist/img/${name.toLowerCase()}.png`;\n  menuImage.appendChild(image);\n\n  const menuTitle = document.createElement('p');\n  menuTitle.classList.add('menu-title');\n  menuTitle.innerText = `${name}`;\n\n  const menuText = document.createElement('p');\n  menuText.classList.add('menu-text');\n  menuText.innerText = 'Lorem ipsum dolor sit amet consectetur elit.';\n\n  const menuPrice = document.createElement('p');\n  menuPrice.classList.add('menu-price');\n  menuPrice.innerText = `$${price}`;\n\n  menuItems.appendChild(menuImage);\n  menuItems.appendChild(menuTitle);\n  menuItems.appendChild(menuText);\n  menuItems.appendChild(menuPrice);\n\n  return menuItems;\n}\n\nfunction loadMenu() {\n  content.innerHTML = '';\n\n  content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  content.appendChild(menu_createMain());\n  content.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://09-restaurant-page/./src/modules/menu.js?");

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