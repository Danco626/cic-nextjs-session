"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/log-session";
exports.ids = ["pages/api/auth/log-session"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "(api)/./pages/api/auth/log-session.js":
/*!***************************************!*\
  !*** ./pages/api/auth/log-session.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const session = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    const accessToken = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res);\n    res.status(200).json({\n        session,\n        accessToken\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2ctc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUU7QUFFakUsNkJBQWUsMENBQWVFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRXBDLE1BQU1DLFVBQVUsTUFBTUosK0RBQVVBLENBQUNFLEtBQUtDO0lBQ3RDLE1BQU1FLGNBQWMsTUFBTUosbUVBQWNBLENBQUNDLEtBQUtDO0lBRTlDQSxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNIO1FBQVNDO0lBQVc7QUFFNUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9wYWdlcy9hcGkvYXV0aC9sb2ctc2Vzc2lvbi5qcz9hNmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIGdldEFjY2Vzc1Rva2VuIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzKSB7ICAgIFxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVxLCByZXMpOyAgICBcbiAgICBcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c2Vzc2lvbiwgYWNjZXNzVG9rZW59KTtcblxuICB9Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJnZXRBY2Nlc3NUb2tlbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJhY2Nlc3NUb2tlbiIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/log-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/log-session.js"));
module.exports = __webpack_exports__;

})();