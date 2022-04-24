"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./layouts/index.tsx":
/*!***************************!*\
  !*** ./layouts/index.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Bar */ \"./components/Bar/index.tsx\");\n/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Drawer */ \"./components/Drawer/index.tsx\");\n/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useLanguage */ \"./hooks/useLanguage.ts\");\n/* harmony import */ var _hooks_useNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useNotification */ \"./hooks/useNotification.ts\");\n/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useTheme */ \"./hooks/useTheme.ts\");\n/* harmony import */ var _hooks_useWords__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useWords */ \"./hooks/useWords.ts\");\n/* harmony import */ var _services_localKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/localKey */ \"./services/localKey.ts\");\n/* harmony import */ var _utils_path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/path */ \"./utils/path.ts\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var englishWords = (0,_hooks_useWords__WEBPACK_IMPORTED_MODULE_8__.useWords)().englishWords;\n    var addNotification = (0,_hooks_useNotification__WEBPACK_IMPORTED_MODULE_6__.useNotification)().addNotification;\n    var languageContext = (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_5__.useLanguage)().languageContext;\n    var themeContext = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__.useTheme)().themeContext;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_services_localKey__WEBPACK_IMPORTED_MODULE_9__.Mode.LIGHT), mode = ref[0], setMode = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref1[0], setOpen = ref1[1];\n    var items = _utils_path__WEBPACK_IMPORTED_MODULE_10__.paths.find(function(path) {\n        return path.pathName === router.asPath;\n    });\n    var status = englishWords.length <= _services_localKey__WEBPACK_IMPORTED_MODULE_9__.WordsParams.MINLENGTH && router.asPath === \"/test\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (status) {\n            addNotification(\"leastFive\", _services_localKey__WEBPACK_IMPORTED_MODULE_9__.NotificationKeys.ERROR);\n            next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/enter\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setMode(themeContext);\n    }, [\n        themeContext\n    ]);\n    var theme1 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.createTheme)({\n        palette: {\n            mode: mode\n        },\n        components: {\n            MuiCssBaseline: {\n                styleOverrides: {\n                    body: {\n                        overflow: \"hidden\"\n                    }\n                }\n            }\n        }\n    });\n    var ref2, ref3;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: theme1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n            sx: {\n                display: \"flex\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.CssBaseline, {}, void 0, false, {\n                    fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bar__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n                    title: languageContext === \"english\" ? (ref2 = items === null || items === void 0 ? void 0 : items.en) !== null && ref2 !== void 0 ? ref2 : \"\" : (ref3 = items === null || items === void 0 ? void 0 : items.ru) !== null && ref3 !== void 0 ? ref3 : \"\",\n                    setOpen: setOpen\n                }, void 0, false, {\n                    fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerBar, {\n                    openDrawer: open,\n                    setOpenDrawer: setOpen\n                }, void 0, false, {\n                    fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n                    component: \"main\",\n                    sx: {\n                        backgroundColor: function(theme) {\n                            return theme.palette.mode === \"light\" ? theme.palette.grey[100] : theme.palette.grey[900];\n                        },\n                        flexGrow: 1,\n                        height: \"100vh\",\n                        overflow: \"auto\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Toolbar, {}, void 0, false, {\n                            fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n                            maxWidth: \"lg\",\n                            sx: {\n                                mt: 4,\n                                mb: 4,\n                                width: \"100vw\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Paper, {\n                                sx: {\n                                    p: 2,\n                                    display: \"flex\",\n                                    flexDirection: \"column\"\n                                },\n                                children: !status ? children : \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/daloniil/Desktop/Programer/LearnWords/layouts/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"uN7JfHXbKzLQE7uG2jOJzV6Fbbw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _hooks_useWords__WEBPACK_IMPORTED_MODULE_8__.useWords,\n        _hooks_useNotification__WEBPACK_IMPORTED_MODULE_6__.useNotification,\n        _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_5__.useLanguage,\n        _hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__.useTheme\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvaW5kZXgudHN4PzM2OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBQYXBlciwgVG9vbGJhciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0JhclwiO1xuaW1wb3J0IHsgRHJhd2VyQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRHJhd2VyXCI7XG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gXCIuLi9ob29rcy91c2VMYW5ndWFnZVwiO1xuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2hvb2tzL3VzZU5vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVGhlbWVcIjtcbmltcG9ydCB7IHVzZVdvcmRzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdvcmRzXCI7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0xheW91dEludGVyZmFjZVwiO1xuaW1wb3J0IHsgTW9kZSwgTm90aWZpY2F0aW9uS2V5cywgV29yZHNQYXJhbXMgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYWxLZXlcIjtcbmltcG9ydCB7IHBhdGhzIH0gZnJvbSBcIi4uL3V0aWxzL3BhdGhcIjtcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGVuZ2xpc2hXb3JkcyB9ID0gdXNlV29yZHMoKTtcbiAgY29uc3QgeyBhZGROb3RpZmljYXRpb24gfSA9IHVzZU5vdGlmaWNhdGlvbigpO1xuICBjb25zdCB7IGxhbmd1YWdlQ29udGV4dCB9ID0gdXNlTGFuZ3VhZ2UoKTtcbiAgY29uc3QgeyB0aGVtZUNvbnRleHQgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8TW9kZS5MSUdIVCB8IE1vZGUuREFSSz4oTW9kZS5MSUdIVCk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpdGVtcyA9IHBhdGhzLmZpbmQoKHBhdGgpID0+IHBhdGgucGF0aE5hbWUgPT09IHJvdXRlci5hc1BhdGgpO1xuXG4gIGNvbnN0IHN0YXR1cyA9XG4gICAgZW5nbGlzaFdvcmRzLmxlbmd0aCA8PSBXb3Jkc1BhcmFtcy5NSU5MRU5HVEggJiYgcm91dGVyLmFzUGF0aCA9PT0gXCIvdGVzdFwiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgYWRkTm90aWZpY2F0aW9uKFwibGVhc3RGaXZlXCIsIE5vdGlmaWNhdGlvbktleXMuRVJST1IpO1xuICAgICAgUm91dGVyLnB1c2goXCIvZW50ZXJcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb2RlKHRoZW1lQ29udGV4dCBhcyBNb2RlLkxJR0hUIHwgTW9kZS5EQVJLKTtcbiAgfSwgW3RoZW1lQ29udGV4dF0pO1xuXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIG1vZGUsXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBNdWlDc3NCYXNlbGluZToge1xuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8QmFyXG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgbGFuZ3VhZ2VDb250ZXh0ID09PSBcImVuZ2xpc2hcIiA/IGl0ZW1zPy5lbiA/PyBcIlwiIDogaXRlbXM/LnJ1ID8/IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgLz5cbiAgICAgICAgPERyYXdlckJhciBvcGVuRHJhd2VyPXtvcGVufSBzZXRPcGVuRHJhd2VyPXtzZXRPcGVufSAvPlxuXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IG10OiA0LCBtYjogNCwgd2lkdGg6IFwiMTAwdndcIiB9fT5cbiAgICAgICAgICAgIDxQYXBlciBzeD17eyBwOiAyLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgeyFzdGF0dXMgPyBjaGlsZHJlbiA6IFwiXCJ9XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJDc3NCYXNlbGluZSIsIlBhcGVyIiwiVG9vbGJhciIsIlJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCYXIiLCJEcmF3ZXJCYXIiLCJ1c2VMYW5ndWFnZSIsInVzZU5vdGlmaWNhdGlvbiIsInVzZVRoZW1lIiwidXNlV29yZHMiLCJNb2RlIiwiTm90aWZpY2F0aW9uS2V5cyIsIldvcmRzUGFyYW1zIiwicGF0aHMiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsImVuZ2xpc2hXb3JkcyIsImFkZE5vdGlmaWNhdGlvbiIsImxhbmd1YWdlQ29udGV4dCIsInRoZW1lQ29udGV4dCIsIkxJR0hUIiwibW9kZSIsInNldE1vZGUiLCJvcGVuIiwic2V0T3BlbiIsIml0ZW1zIiwiZmluZCIsInBhdGgiLCJwYXRoTmFtZSIsImFzUGF0aCIsInN0YXR1cyIsImxlbmd0aCIsIk1JTkxFTkdUSCIsIkVSUk9SIiwicHVzaCIsInRoZW1lIiwicGFsZXR0ZSIsImNvbXBvbmVudHMiLCJNdWlDc3NCYXNlbGluZSIsInN0eWxlT3ZlcnJpZGVzIiwiYm9keSIsIm92ZXJmbG93Iiwic3giLCJkaXNwbGF5IiwidGl0bGUiLCJlbiIsInJ1Iiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJjb21wb25lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmV5IiwiZmxleEdyb3ciLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm10IiwibWIiLCJ3aWR0aCIsInAiLCJmbGV4RGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/index.tsx\n");

/***/ })

});