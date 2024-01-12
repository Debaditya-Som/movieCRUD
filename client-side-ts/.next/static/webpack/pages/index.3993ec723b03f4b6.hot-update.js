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

/***/ "./components/MovieCard.tsx":
/*!**********************************!*\
  !*** ./components/MovieCard.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MovieCard = (param)=>{\n    let { title, posterUrl, trailerUrl, imdbId } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: posterUrl,\n                alt: title,\n                className: \"rounded-md w-full mb-2\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\components\\\\MovieCard.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\components\\\\MovieCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 text-white px-4 py-2 rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/reviews/\".concat(imdbId),\n                    children: \"Review\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\components\\\\MovieCard.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\components\\\\MovieCard.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\components\\\\MovieCard.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBCO0FBUzFCLE1BQU1DLFlBQXNDO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFO0lBQ25GLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlDLEtBQUtOO2dCQUFXTyxLQUFLUjtnQkFBT0ssV0FBVTs7Ozs7OzBCQUMzQyw4REFBQ0k7Z0JBQUdKLFdBQVU7MEJBQXFCTDs7Ozs7OzBCQUNuQyw4REFBQ1U7Z0JBQU9MLFdBQVU7MEJBQ2hCLDRFQUFDTTtvQkFBRUMsTUFBTSxZQUFtQixPQUFQVDs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7S0FWTUo7QUFZTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdmllQ2FyZC50c3g/Y2M2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBNb3ZpZUNhcmRQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBwb3N0ZXJVcmw6IHN0cmluZztcclxuICB0cmFpbGVyVXJsOiBzdHJpbmc7XHJcbiAgaW1kYklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1vdmllQ2FyZDogUmVhY3QuRkM8TW92aWVDYXJkUHJvcHM+ID0gKHsgdGl0bGUsIHBvc3RlclVybCwgdHJhaWxlclVybCwgaW1kYklkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgIDxpbWcgc3JjPXtwb3N0ZXJVcmx9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgdy1mdWxsIG1iLTJcIiAvPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57dGl0bGV9PC9oMj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgPGEgaHJlZj17YC9yZXZpZXdzLyR7aW1kYklkfWB9PlJldmlldzwvYT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb3ZpZUNhcmQiLCJ0aXRsZSIsInBvc3RlclVybCIsInRyYWlsZXJVcmwiLCJpbWRiSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImJ1dHRvbiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MovieCard.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MovieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MovieCard */ \"./components/MovieCard.tsx\");\n// pages/index.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch movies from your API\n        const fetchMovies = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8080/api/v1/movies\");\n                if (response.ok) {\n                    const data = await response.json();\n                    setMovies(data);\n                } else {\n                    console.error(\"Failed to fetch movies\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching movies\", error);\n            }\n        };\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"MovieCRUD\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MovieCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...movie\n                    }, movie.imdbId, false, {\n                        fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Codes\\\\New folder\\\\movie-review-app\\\\client-side-ts\\\\pages\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"MO6b3PSP3RIUqZ8gtSrBZBVtBbs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0JBQWtCOzs7QUFDaUM7QUFDSDtBQUVoRCxNQUFNSSxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsNkJBQTZCO1FBQzdCLE1BQU1NLGNBQWM7WUFDbEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLElBQUlELFNBQVNFLEVBQUUsRUFBRTtvQkFDZixNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7b0JBQ2hDTixVQUFVSztnQkFDWixPQUFPO29CQUNMRSxRQUFRQyxLQUFLLENBQUM7Z0JBQ2hCO1lBQ0YsRUFBRSxPQUFPQSxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztRQUNGO1FBRUFQO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaWCxPQUFPYSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNoQiw2REFBU0E7d0JBQXFCLEdBQUdnQixLQUFLO3VCQUF2QkEsTUFBTUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QztHQWhDTWhCO0tBQUFBO0FBa0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL01vdmllQ2FyZCc7XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggbW92aWVzIGZyb20geW91ciBBUElcclxuICAgIGNvbnN0IGZldGNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvbW92aWVzJyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgc2V0TW92aWVzKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbW92aWVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1vdmllcycsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaE1vdmllcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Nb3ZpZUNSVUQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgIDxNb3ZpZUNhcmQga2V5PXttb3ZpZS5pbWRiSWR9IHsuLi5tb3ZpZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb3ZpZUNhcmQiLCJIb21lIiwibW92aWVzIiwic2V0TW92aWVzIiwiZmV0Y2hNb3ZpZXMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwibW92aWUiLCJpbWRiSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});