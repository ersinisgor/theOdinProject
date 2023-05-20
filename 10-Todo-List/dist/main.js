/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const btnNav = document.querySelectorAll('.btn_nav');\nconst btnContainer = document.querySelectorAll('.btn-container');\nconst todos = document.querySelectorAll('.todo');\n\nbtnNav.forEach(nav =>\n  nav.addEventListener('click', function () {\n    selectProject(this);\n  })\n);\n\nfunction selectProject(project) {\n  const buttons = [...btnNav, ...btnContainer];\n\n  buttons.forEach(nav => nav.classList.remove('active'));\n  project.classList.add('active');\n  project.parentElement.classList.add('active');\n}\n\ntodos.forEach(todoCheck =>\n  todoCheck.addEventListener('click', function () {\n    makeTodoComplete(this);\n  })\n);\n\nfunction makeTodoComplete(check) {\n  check.checked\n    ? check.nextElementSibling.classList.add('complete')\n    : check.nextElementSibling.classList.remove('complete');\n}\n\n\n//# sourceURL=webpack://10-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;