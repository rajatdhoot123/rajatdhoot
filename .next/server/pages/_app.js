(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
;// CONCATENATED MODULE: ./src/styles/global.js

const GlobalStyle = external_styled_components_.createGlobalStyle`
body {
  margin: 0;
  font-family: "Averta";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "Averta";
  src: local("Averta"),
    url(./fonts/Averta/AvertaDemoPE-Regular.otf) format("woff");
}
`;
/* harmony default export */ var global = ((/* unused pure expression or super */ null && (GlobalStyle)));
;// CONCATENATED MODULE: ./src/pages/_app.js

var __jsx = (external_react_default()).createElement;



function MyApp({
  Component,
  pageProps
}) {
  return __jsx(Component, pageProps);
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(973));
module.exports = __webpack_exports__;

})();