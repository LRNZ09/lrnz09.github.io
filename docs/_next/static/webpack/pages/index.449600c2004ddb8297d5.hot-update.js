webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react95_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react95/core */ \"./node_modules/@react95/core/index.js\");\n/* harmony import */ var _react95_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react95_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icon_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icon-box */ \"./components/icon-box.jsx\");\n/* harmony import */ var _components_icon_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon-text */ \"./components/icon-text.jsx\");\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page */ \"./components/page.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/lorenzopieri/Development/lrnz09.github.io/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar MODAL_DEFAULT_POSITION = {\n  x: 56,\n  y: 56\n};\nvar SOCIAL_ANCHORS_LIST = [// \t{ icon: 'dribbble', url: '//dribbble.com/LRNZ09' },\n// \t{ icon: 'instagram', url: '//instagram.com/lrnz09' },\n// \t{ icon: 'pinterest', url: '//www.pinterest.com/lrnz09' },\n// \t{ icon: 'playstation', url: '//my.playstation.com/profile/LRNZ09-' },\n// \t{ icon: 'reddit', url: '//www.reddit.com/user/LRNZ09' },\n// \t{ icon: 'spotify', url: '//open.spotify.com/user/lrnz09' },\n// \t{ icon: 'twitch', url: '//www.twitch.tv/LRNZ09' },\n{\n  icon: 'keyboard_mouse',\n  name: 'GitHub',\n  url: '//github.com/LRNZ09'\n}, {\n  icon: 'packager',\n  name: 'Play Store',\n  url: '//play.google.com/store/apps/developer?id=LRNZ09'\n}, {\n  icon: 'cd_music',\n  name: 'Last.fm',\n  url: '//www.last.fm/user/LRNZ09'\n}, {\n  icon: 'desktop',\n  name: 'LinkedIn',\n  url: '//linkedin.com/in/lrnz09'\n}, {\n  icon: 'file_pen',\n  name: 'Medium',\n  url: '//medium.com/@LRNZ09'\n}, {\n  icon: 'defrag',\n  name: 'StackOverflow',\n  url: '//stackoverflow.com/story/lrnz09'\n}, {\n  icon: 'textchat',\n  name: 'Twitter',\n  url: '//twitter.com/LRNZ09'\n}]; // const handleClose = () => {\n// \twindow.open('', '_self').close()\n// }\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      showAboutModal = _useState[0],\n      setShowAboutModal = _useState[1];\n\n  var handleOpenAboutModal = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setShowAboutModal(true);\n  }, []);\n  var handleCloseAboutModal = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setShowAboutModal(false);\n  }, []);\n  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(_components_icon_box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n    name: \"recycle_full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }), __jsx(_components_icon_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, \"Recycle Bin\")), showAboutModal && __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    closeModal: handleCloseAboutModal,\n    defaultPosition: MODAL_DEFAULT_POSITION,\n    height: 128,\n    icon: \"info_bubble\",\n    menu: [{\n      name: 'File',\n      list: __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }\n      }, __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n        onClick: handleCloseAboutModal,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 19\n        }\n      }, \"Exit\"))\n    } // {\n    //   name: 'Edit',\n    //   list: (\n    //     <List>\n    //       <List.Item onClick={}>Copy</List.Item>\n    //       <List.Item onClick={}>\n    //         Select all\n    //       </List.Item>\n    //     </List>\n    //   ),\n    // },\n    ],\n    title: \"About\",\n    width: 208,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, \"Hi, my name is Lorenzo Pieri and I'm from Florence.I live in Lugano and I'm currently working for \", __jsx(\"a\", {\n    href: \"//www.welld.ch/\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"WellD\"), ' as a mobile developer.')), __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"TaskBar\"], {\n    list: __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 11\n      }\n    }, __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n      icon: \"drvspace_7\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 13\n      }\n    }, \"Socials\", __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 15\n      }\n    }, SOCIAL_ANCHORS_LIST.map(function (_ref) {\n      var icon = _ref.icon,\n          name = _ref.name,\n          url = _ref.url;\n      return __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n        as: \"a\",\n        href: url,\n        icon: icon,\n        key: name,\n        rel: \"noopener noreferrer\",\n        target: \"_blank\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 19\n        }\n      }, name);\n    }))), __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n      as: \"a\",\n      href: \"mailto:hello@lorenzopieri.dev\",\n      icon: \"mail\",\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 13\n      }\n    }, \"Contact me\"), __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Divider, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 13\n      }\n    }), __jsx(_react95_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n      icon: \"info_bubble\",\n      onClick: handleOpenAboutModal,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 13\n      }\n    }, \"About\")),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Home, \"n6MgSPCol+D1vCX7evQBcCDep7c=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiTU9EQUxfREVGQVVMVF9QT1NJVElPTiIsIngiLCJ5IiwiU09DSUFMX0FOQ0hPUlNfTElTVCIsImljb24iLCJuYW1lIiwidXJsIiwiSG9tZSIsInVzZVN0YXRlIiwic2hvd0Fib3V0TW9kYWwiLCJzZXRTaG93QWJvdXRNb2RhbCIsImhhbmRsZU9wZW5BYm91dE1vZGFsIiwidXNlQ2FsbGJhY2siLCJoYW5kbGVDbG9zZUFib3V0TW9kYWwiLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRztBQUFFQyxHQUFDLEVBQUUsRUFBTDtBQUFTQyxHQUFDLEVBQUU7QUFBWixDQUEvQjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLENBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDRUMsTUFBSSxFQUFFLGdCQURSO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBVDBCLEVBYzFCO0FBQ0VGLE1BQUksRUFBRSxVQURSO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBZDBCLEVBbUIxQjtBQUNFRixNQUFJLEVBQUUsVUFEUjtBQUVFQyxNQUFJLEVBQUUsU0FGUjtBQUdFQyxLQUFHLEVBQUU7QUFIUCxDQW5CMEIsRUF3QjFCO0FBQ0VGLE1BQUksRUFBRSxTQURSO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBeEIwQixFQTZCMUI7QUFDRUYsTUFBSSxFQUFFLFVBRFI7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsS0FBRyxFQUFFO0FBSFAsQ0E3QjBCLEVBa0MxQjtBQUNFRixNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFQyxLQUFH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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRR0EsSUFSSCxDQUR1QjtBQUFBLEtBQXhCLENBREgsQ0FGRixDQURGLEVBa0JFLE1BQUMsa0RBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBRSxFQUFDLEdBREw7QUFFRSxVQUFJLEVBQUMsK0JBRlA7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLFlBQU0sRUFBQyxRQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGLEVBMkJFLE1BQUMsa0RBQUQsQ0FBTSxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQkYsRUE2QkUsTUFBQyxrREFBRCxDQUFNLElBQU47QUFBVyxVQUFJLEVBQUMsYUFBaEI7QUFBOEIsYUFBTyxFQUFFTSxvQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRixDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsREYsQ0FERjtBQTZGRCxDQXhHRDs7R0FBTUosSTs7S0FBQUEsSTtBQTBHU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uLCBMaXN0LCBNb2RhbCwgVGFza0JhciB9IGZyb20gJ0ByZWFjdDk1L2NvcmUnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEljb25Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9pY29uLWJveCdcbmltcG9ydCBJY29uVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL2ljb24tdGV4dCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSdcblxuY29uc3QgTU9EQUxfREVGQVVMVF9QT1NJVElPTiA9IHsgeDogNTYsIHk6IDU2IH1cblxuY29uc3QgU09DSUFMX0FOQ0hPUlNfTElTVCA9IFtcbiAgLy8gXHR7IGljb246ICdkcmliYmJsZScsIHVybDogJy8vZHJpYmJibGUuY29tL0xSTlowOScgfSxcbiAgLy8gXHR7IGljb246ICdpbnN0YWdyYW0nLCB1cmw6ICcvL2luc3RhZ3JhbS5jb20vbHJuejA5JyB9LFxuICAvLyBcdHsgaWNvbjogJ3BpbnRlcmVzdCcsIHVybDogJy8vd3d3LnBpbnRlcmVzdC5jb20vbHJuejA5JyB9LFxuICAvLyBcdHsgaWNvbjogJ3BsYXlzdGF0aW9uJywgdXJsOiAnLy9teS5wbGF5c3RhdGlvbi5jb20vcHJvZmlsZS9MUk5aMDktJyB9LFxuICAvLyBcdHsgaWNvbjogJ3JlZGRpdCcsIHVybDogJy8vd3d3LnJlZGRpdC5jb20vdXNlci9MUk5aMDknIH0sXG4gIC8vIFx0eyBpY29uOiAnc3BvdGlmeScsIHVybDogJy8vb3Blbi5zcG90aWZ5LmNvbS91c2VyL2xybnowOScgfSxcbiAgLy8gXHR7IGljb246ICd0d2l0Y2gnLCB1cmw6ICcvL3d3dy50d2l0Y2gudHYvTFJOWjA5JyB9LFxuXG4gIHtcbiAgICBpY29uOiAna2V5Ym9hcmRfbW91c2UnLFxuICAgIG5hbWU6ICdHaXRIdWInLFxuICAgIHVybDogJy8vZ2l0aHViLmNvbS9MUk5aMDknLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ3BhY2thZ2VyJyxcbiAgICBuYW1lOiAnUGxheSBTdG9yZScsXG4gICAgdXJsOiAnLy9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXZlbG9wZXI/aWQ9TFJOWjA5JyxcbiAgfSxcbiAge1xuICAgIGljb246ICdjZF9tdXNpYycsXG4gICAgbmFtZTogJ0xhc3QuZm0nLFxuICAgIHVybDogJy8vd3d3Lmxhc3QuZm0vdXNlci9MUk5aMDknLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2Rlc2t0b3AnLFxuICAgIG5hbWU6ICdMaW5rZWRJbicsXG4gICAgdXJsOiAnLy9saW5rZWRpbi5jb20vaW4vbHJuejA5JyxcbiAgfSxcbiAge1xuICAgIGljb246ICdmaWxlX3BlbicsXG4gICAgbmFtZTogJ01lZGl1bScsXG4gICAgdXJsOiAnLy9tZWRpdW0uY29tL0BMUk5aMDknLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2RlZnJhZycsXG4gICAgbmFtZTogJ1N0YWNrT3ZlcmZsb3cnLFxuICAgIHVybDogJy8vc3RhY2tvdmVyZmxvdy5jb20vc3RvcnkvbHJuejA5JyxcbiAgfSxcbiAge1xuICAgIGljb246ICd0ZXh0Y2hhdCcsXG4gICAgbmFtZTogJ1R3aXR0ZXInLFxuICAgIHVybDogJy8vdHdpdHRlci5jb20vTFJOWjA5JyxcbiAgfSxcbl1cblxuLy8gY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4vLyBcdHdpbmRvdy5vcGVuKCcnLCAnX3NlbGYnKS5jbG9zZSgpXG4vLyB9XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93QWJvdXRNb2RhbCwgc2V0U2hvd0Fib3V0TW9kYWxdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBoYW5kbGVPcGVuQWJvdXRNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93QWJvdXRNb2RhbCh0cnVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDbG9zZUFib3V0TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0Fib3V0TW9kYWwoZmFsc2UpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8SWNvbkJveD5cbiAgICAgICAgPEljb24gbmFtZT0ncmVjeWNsZV9mdWxsJyAvPlxuICAgICAgICA8SWNvblRleHQ+UmVjeWNsZSBCaW48L0ljb25UZXh0PlxuICAgICAgPC9JY29uQm94PlxuXG4gICAgICB7c2hvd0Fib3V0TW9kYWwgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBjbG9zZU1vZGFsPXtoYW5kbGVDbG9zZUFib3V0TW9kYWx9XG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXtNT0RBTF9ERUZBVUxUX1BPU0lUSU9OfVxuICAgICAgICAgIGhlaWdodD17MTI4fVxuICAgICAgICAgIGljb249J2luZm9fYnViYmxlJ1xuICAgICAgICAgIG1lbnU9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ0ZpbGUnLFxuICAgICAgICAgICAgICBsaXN0OiAoXG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQWJvdXRNb2RhbH0+RXhpdDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIG5hbWU6ICdFZGl0JyxcbiAgICAgICAgICAgIC8vICAgbGlzdDogKFxuICAgICAgICAgICAgLy8gICAgIDxMaXN0PlxuICAgICAgICAgICAgLy8gICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXt9PkNvcHk8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgIC8vICAgICAgIDxMaXN0Lkl0ZW0gb25DbGljaz17fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgU2VsZWN0IGFsbFxuICAgICAgICAgICAgLy8gICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAvLyAgICAgPC9MaXN0PlxuICAgICAgICAgICAgLy8gICApLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIHRpdGxlPSdBYm91dCdcbiAgICAgICAgICB3aWR0aD17MjA4fVxuICAgICAgICA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7XCJIaSwgbXkgbmFtZSBpcyBMb3JlbnpvIFBpZXJpIGFuZCBJJ20gZnJvbSBGbG9yZW5jZS5JIGxpdmUgaW4gTHVnYW5vIGFuZCBJJ20gY3VycmVudGx5IHdvcmtpbmcgZm9yIFwifVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj0nLy93d3cud2VsbGQuY2gvJ1xuICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBXZWxsRFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeycgYXMgYSBtb2JpbGUgZGV2ZWxvcGVyLid9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cblxuICAgICAgPFRhc2tCYXJcbiAgICAgICAgbGlzdD17XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICA8TGlzdC5JdGVtIGljb249J2RydnNwYWNlXzcnPlxuICAgICAgICAgICAgICBTb2NpYWxzXG4gICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgIHtTT0NJQUxfQU5DSE9SU19MSVNULm1hcCgoeyBpY29uLCBuYW1lLCB1cmwgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICBhcz0nYSdcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgICBhcz0nYSdcbiAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOmhlbGxvQGxvcmVuem9waWVyaS5kZXYnXG4gICAgICAgICAgICAgIGljb249J21haWwnXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb250YWN0IG1lXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cblxuICAgICAgICAgICAgPExpc3QuRGl2aWRlciAvPlxuXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGljb249J2luZm9fYnViYmxlJyBvbkNsaWNrPXtoYW5kbGVPcGVuQWJvdXRNb2RhbH0+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgIHsvKiA8TGlzdC5JdGVtIGljb249J2NvbXB1dGVyXzMnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cblx0XHRcdFx0XHRcdFx0Q2xvc2Vcblx0XHRcdFx0XHRcdDwvTGlzdC5JdGVtPiAqL31cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9QYWdlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})