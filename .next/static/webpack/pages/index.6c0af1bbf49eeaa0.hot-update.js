"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Home XP\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/apinext/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Contador, {}, void 0, false, {\n                fileName: \"/var/www/html/apinext/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Teste\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/apinext/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/apinext/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Home;\nfunction Contador() {\n    var adicionarContador = function adicionarContador() {\n        setContador(contador + 1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), contador = ref[0], setContador = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: contador\n            }, void 0, false, {\n                fileName: \"/var/www/html/apinext/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: adicionarContador,\n                children: \"Adicionar\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/apinext/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/apinext/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Contador, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c1 = Contador;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Contador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQWdDOztBQUVoQyxTQUFTQyxJQUFJLEdBQUc7SUFDWixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsU0FBTzs7Ozs7b0JBQUs7MEJBQ2hCLDhEQUFDQyxRQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDRixLQUFHOzBCQUFDLE9BQUs7Ozs7O29CQUFNOzs7Ozs7WUFDZCxDQUNUO0NBQ0o7QUFSUUQsS0FBQUEsSUFBSTtBQVViLFNBQVNHLFFBQVEsR0FBRztRQUdQQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLEdBQUc7UUFDekJDLFdBQVcsQ0FBQ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7SUFKRCxJQUErQlAsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQWI5QyxRQWFtQixHQUFnQkEsR0FBVyxHQUEzQixFQWJuQixXQWErQixHQUFJQSxHQUFXLEdBQWY7SUFNM0IscUJBQ0ksOERBQUNFLEtBQUc7OzBCQUNBLDhEQUFDQSxLQUFHOzBCQUFFSyxRQUFROzs7OztvQkFBTzswQkFDckIsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRUosaUJBQWlCOzBCQUFFLFdBQVM7Ozs7O29CQUFTOzs7Ozs7WUFDcEQsQ0FDVDtDQUNKO0dBYlFELFFBQVE7QUFBUkEsTUFBQUEsUUFBUTtBQWVqQiwrREFBZUgsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkhvbWUgWFA8L2g0PlxuICAgICAgICAgICAgPENvbnRhZG9yIC8+XG4gICAgICAgICAgICA8ZGl2PlRlc3RlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQ29udGFkb3IoKSB7XG4gICAgY29uc3QgW2NvbnRhZG9yLHNldENvbnRhZG9yXSA9IHVzZVN0YXRlKDEpXG5cbiAgICBmdW5jdGlvbiBhZGljaW9uYXJDb250YWRvcigpIHtcbiAgICAgICAgc2V0Q29udGFkb3IoY29udGFkb3IgKyAxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2Pntjb250YWRvcn08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRpY2lvbmFyQ29udGFkb3J9PkFkaWNpb25hcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiZGl2IiwiaDQiLCJDb250YWRvciIsImFkaWNpb25hckNvbnRhZG9yIiwic2V0Q29udGFkb3IiLCJjb250YWRvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});