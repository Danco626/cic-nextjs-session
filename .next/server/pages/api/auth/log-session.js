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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n// /api/my-route.js\n\n// import getAuth0 from '../../../utils/customsessionstore';\n// import Highlight from '../../../components/Highlight';\n//import { Row, Col } from 'reactstrap';\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const session = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    const accessToken = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res);\n    const { accessTokens  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    console.log(accessTokens);\n    // console.log(\"mfa accessTokens\", session)\n    // console.log(\"accessToken\", accessToken)\n    res.status(200).json({\n        session,\n        accessToken\n    });\n// accessTokens.audienceA.accessToken and accessTokens.audienceB.accessToken\n// return(\n//   <>\n//   <Row className=\"align-items-center profile-header mb-5 text-center text-md-left\" data-testid=\"profile\">              \n//     <Highlight>{JSON.stringify(session, null, 2)}</Highlight>                \n//   </Row>\n// </>\n// )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2ctc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQkFBbUI7QUFDOEM7QUFDakUsNERBQTREO0FBQzVELHlEQUF5RDtBQUN6RCx3Q0FBd0M7QUFDeEMsNkJBQWUsMENBQWVFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRXBDLE1BQU1DLFVBQVUsTUFBTUosK0RBQVVBLENBQUNFLEtBQUtDO0lBQ3RDLE1BQU1FLGNBQWMsTUFBTUosbUVBQWNBLENBQUNDLEtBQUtDO0lBQzlDLE1BQU0sRUFBRUcsYUFBWSxFQUFFLEdBQUcsTUFBTU4sK0RBQVVBLENBQUNFLEtBQUtDO0lBQy9DSSxRQUFRQyxHQUFHLENBQUNGO0lBQ1osMkNBQTJDO0lBQzNDLDBDQUEwQztJQUMxQ0gsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDTjtRQUFTQztJQUFXO0FBQzFDLDRFQUE0RTtBQUU1RSxVQUFVO0FBQ1YsT0FBTztBQUNQLDBIQUEwSDtBQUMxSCxnRkFBZ0Y7QUFDaEYsV0FBVztBQUVYLE1BQU07QUFDTixJQUFJO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgwLW5leHRqcy1zYW1wbGUvLi9wYWdlcy9hcGkvYXV0aC9sb2ctc2Vzc2lvbi5qcz9hNmNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9hcGkvbXktcm91dGUuanNcbmltcG9ydCB7IGdldFNlc3Npb24sIGdldEFjY2Vzc1Rva2VuIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG4vLyBpbXBvcnQgZ2V0QXV0aDAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3VzdG9tc2Vzc2lvbnN0b3JlJztcbi8vIGltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9IaWdobGlnaHQnO1xuLy9pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24ocmVxLCByZXMpIHsgICAgXG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbihyZXEsIHJlcyk7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbnMgfSA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuICAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VucylcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1mYSBhY2Nlc3NUb2tlbnNcIiwgc2Vzc2lvbilcbiAgICAvLyBjb25zb2xlLmxvZyhcImFjY2Vzc1Rva2VuXCIsIGFjY2Vzc1Rva2VuKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzZXNzaW9uLCBhY2Nlc3NUb2tlbn0pO1xuICAgIC8vIGFjY2Vzc1Rva2Vucy5hdWRpZW5jZUEuYWNjZXNzVG9rZW4gYW5kIGFjY2Vzc1Rva2Vucy5hdWRpZW5jZUIuYWNjZXNzVG9rZW5cblxuICAgIC8vIHJldHVybihcbiAgICAvLyAgIDw+XG4gICAgLy8gICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBwcm9maWxlLWhlYWRlciBtYi01IHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiIGRhdGEtdGVzdGlkPVwicHJvZmlsZVwiPiAgICAgICAgICAgICAgXG4gICAgLy8gICAgIDxIaWdobGlnaHQ+e0pTT04uc3RyaW5naWZ5KHNlc3Npb24sIG51bGwsIDIpfTwvSGlnaGxpZ2h0PiAgICAgICAgICAgICAgICBcbiAgICAvLyAgIDwvUm93PlxuICAgICAgXG4gICAgLy8gPC8+XG4gICAgLy8gKVxuICB9Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJnZXRBY2Nlc3NUb2tlbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VucyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/log-session.js\n");

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