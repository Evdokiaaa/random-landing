/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
      /*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg_large.png */ "./src/images/bg_large.png"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg__1200.png */ "./src/images/bg__1200.png"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg__375.jpg */ "./src/images/bg__375.jpg"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/header__effect.png */ "./src/images/header__effect.png"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/card_bg.png */ "./src/images/card_bg.png"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --heading-font: "Merriweather", sans-serif;\n  --secondary-font: "Golos Text", sans-serif;\n  --heading-color: #313131;\n  --heading-bg: #e9ded4;\n  --logo-color: #595653;\n  --banner-btn: #1f1f1f;\n  --banner-btn-hover: #fbce51;\n  --marquee-bg: #f54932;\n  --marquee-color: #ffffff;\n  --secondary-color: #f54932;\n  --tertiary-color: #3057a2;\n  --table-line: #d0d0d0;\n  --pagination-dot-bg: #d9d9d9;\n  --arrow-bg-disabled: #d6d6d6;\n  --footer-bg: #e9ded4;\n  --white: #ffffff;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nh1,\nh2 {\n  font-family: var(--heading-font);\n  color: var(--heading-color);\n  text-transform: uppercase;\n  font-weight: 400;\n  font-style: normal;\n}\n\nh3,\nh4 {\n  font-family: var(--secondary-font);\n}\n\np {\n  font-family: var(--secondary-font);\n  font-weight: 400;\n  font-style: normal;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.container {\n  --width: 1222px;\n  --padding: 72px;\n  max-width: calc(var(--width) + var(--padding) * 2);\n  margin: 0 auto;\n  padding: 0 var(--padding);\n}\n@media screen and (max-width: 1200px) {\n  .container {\n    --padding: 8vw;\n  }\n}\n@media screen and (max-width: 375px) {\n  .container {\n    --padding: 20px;\n  }\n}\n\n.header {\n  padding: 26px 0 132px 0;\n  position: relative;\n  background-color: var(--heading-bg);\n}\n@media screen and (max-width: 1200px) {\n  .header {\n    padding: 96px 0 130px 0;\n  }\n}\n@media screen and (max-width: 375px) {\n  .header {\n    padding: 18px 0 291px 0;\n  }\n}\n.header::before {\n  content: "";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n@media screen and (max-width: 1200px) {\n  .header::before {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  }\n}\n@media screen and (max-width: 375px) {\n  .header::before {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-position: bottom center;\n    background-size: contain;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .header::after {\n    content: "";\n    position: absolute;\n    top: 4px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n    background-color: var(----heading-bg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    mix-blend-mode: color-burn;\n  }\n}\n.header__banner {\n  position: relative;\n  z-index: 1;\n  max-width: 542px;\n  margin-top: 62px;\n}\n.header__banner-description {\n  margin-top: 24px;\n  height: 46px;\n  font-family: var(--secondary-font);\n  font-size: 18px;\n  line-height: 1.3;\n  text-align: center;\n  color: var(--heading-color);\n  font-weight: 400;\n}\n@media screen and (max-width: 1200px) {\n  .header__banner-description {\n    display: none;\n  }\n}\n@media screen and (max-width: 375px) {\n  .header__banner-description {\n    display: block;\n    text-align: left;\n    height: 69px;\n  }\n}\n.header__banner-buttons {\n  display: flex;\n  gap: 16px;\n  margin-top: 40px;\n}\n@media screen and (max-width: 1200px) {\n  .header__banner-buttons {\n    display: none;\n  }\n}\n@media screen and (max-width: 375px) {\n  .header__banner-buttons {\n    display: grid;\n    margin-top: 32px;\n    gap: 14px;\n  }\n}\n.header__banner-btn {\n  width: 263px;\n  height: 70px;\n  border: 2px solid transparent;\n  font-size: 16px;\n  border-radius: 66px;\n  font-weight: 500;\n  line-height: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-decoration: none;\n  font-family: var(--secondary-font);\n  -webkit-tap-highlight-color: transparent;\n  transition: 0.15s linear;\n}\n@media screen and (max-width: 375px) {\n  .header__banner-btn {\n    display: inline-flex;\n    width: 100%;\n    height: 48px;\n    padding: 18px 20px;\n    font-size: 4.25vw;\n    flex-direction: unset;\n  }\n}\n.header__banner-btn-primary {\n  background-color: var(--banner-btn);\n  color: var(--white);\n}\n.header__banner-btn-primary:hover {\n  color: var(--banner-btn);\n  background: var(--banner-btn-hover);\n}\n.header__banner-btn-secondary {\n  background-color: transparent;\n  color: var(--banner-btn);\n  border: 2px solid var(--banner-btn);\n}\n.header__banner-btn-secondary:hover {\n  background-color: var(--banner-btn);\n  color: var(--white);\n}\n@media screen and (max-width: 375px) {\n  .header__banner-btn-secondary {\n    border: none;\n    background-color: #ffffff;\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .header__banner {\n    margin-top: 80px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .header__banner {\n    margin-top: 40px;\n  }\n}\n.header__content h1 {\n  display: inline-block;\n  font-size: 60px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  color: var(--heading-color);\n  font-family: var(--heading-font);\n}\n@media screen and (max-width: 1200px) {\n  .header__content h1 {\n    font-size: clamp(26px, 5vw, 60px);\n  }\n}\n@media screen and (max-width: 375px) {\n  .header__content h1 {\n    width: 100%;\n    font-size: 9.6vw;\n  }\n}\n.header__content h1 :nth-child(2) {\n  letter-spacing: -12px;\n}\n@media screen and (max-width: 768px) {\n  .header__content h1 :nth-child(2) {\n    letter-spacing: -8px;\n  }\n}\n.header__content h1 :nth-child(4) {\n  display: block;\n  text-align: center;\n}\n.header__content h1 :nth-child(5) {\n  display: block;\n  text-align: right;\n}\n\n.logo__container {\n  z-index: 1;\n  position: relative;\n}\n\n@media screen and (max-width: 1200px) {\n  .logo {\n    min-width: 213px;\n    width: 34vw;\n  }\n}\n@media screen and (max-width: 375px) {\n  .logo {\n    width: 213px;\n    height: 31px;\n  }\n}\n\n.running__line {\n  background: var(--marquee-bg);\n  color: var(--white);\n  padding: 18px 0;\n  overflow: hidden;\n}\n@media screen and (max-width: 375px) {\n  .running__line {\n    padding: 10px 0;\n  }\n}\n.running__line-container {\n  max-width: 2335px;\n  margin: 0 auto;\n  display: flex;\n}\n.running__line-container span {\n  position: relative;\n  margin-right: 30px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  white-space: nowrap;\n  font-family: var(--heading-font);\n}\n.running__line-container span::after {\n  content: "";\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: var(--white);\n  border-radius: 50%;\n  top: 50%;\n  transform: translateY(-50%);\n  right: -18px;\n}\n@media screen and (max-width: 375px) {\n  .running__line-container span {\n    font-size: 16px;\n  }\n}\n\n.support {\n  padding: 80px 0 100px;\n}\n@media screen and (max-width: 1200px) {\n  .support {\n    padding: 40px 0 100px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support {\n    padding: 48px 0 60px 0;\n  }\n}\n.support__wrapper {\n  display: grid;\n  gap: 64px;\n}\n@media screen and (max-width: 375px) {\n  .support__wrapper {\n    gap: 21px;\n  }\n}\n.support__header {\n  display: flex;\n  align-items: center;\n  min-height: 250px;\n  justify-content: space-between;\n}\n@media screen and (max-width: 1200px) {\n  .support__header {\n    min-height: auto;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    gap: 40px;\n  }\n}\n.support__header-top-image {\n  margin-left: 64px;\n}\n@media screen and (max-width: 1200px) {\n  .support__header-top-image {\n    margin: 0;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__header-top-image {\n    margin: 24px auto 24.44px auto;\n    width: 100%;\n  }\n}\n.support__header-top-title {\n  max-width: 764px;\n}\n.support__header-top-title p,\n.support__header-top-title h2 {\n  color: var(--heading-color);\n  display: inline;\n  font-family: var(--heading-font);\n  font-size: 36px;\n  font-weight: 400;\n  text-transform: uppercase;\n  line-height: 1.35;\n  letter-spacing: 0px;\n}\n@media screen and (max-width: 1200px) {\n  .support__header-top-title p {\n    font-size: clamp(28px, 2.6vw, 36px);\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__header-top-title p {\n    font-size: 7.47vw;\n    line-height: 1.36;\n  }\n}\n.support__header-top-title span {\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n@media screen and (max-width: 375px) {\n  .support__header {\n    text-align: left;\n  }\n}\n.support__main {\n  position: relative;\n}\n.support__main-image-wrapper {\n  position: absolute;\n  top: -26px;\n  left: -26px;\n}\n@media screen and (max-width: 1366px) {\n  .support__main-image-wrapper {\n    width: 38.8vw;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .support__main-image-wrapper {\n    position: relative;\n    margin: 0 auto;\n    max-width: 530px;\n    width: 100%;\n    top: unset;\n    left: unset;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__main-image-wrapper {\n    margin: 0 -20px;\n    width: calc(100% + 40px);\n    max-width: 100vw;\n  }\n}\n.support__main-table {\n  width: 100%;\n  transform: translateY(-14px);\n  border-collapse: collapse;\n}\n@media screen and (max-width: 375px) {\n  .support__main-table {\n    table-layout: fixed;\n  }\n}\n.support__main-table tr {\n  height: 56px;\n}\n.support__main-table tr:not(:last-child) {\n  border-bottom: 2px solid var(--table-line);\n}\n@media screen and (max-width: 375px) {\n  .support__main-table tr {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: center;\n    gap: 12px;\n    height: auto;\n    padding-bottom: 12px;\n  }\n  .support__main-table tr:not(:first-child) {\n    padding-top: 16px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__main-table td {\n    width: 100%;\n  }\n}\n.support__main-text-wrapper {\n  max-width: 704px;\n  margin: 0 0 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .support__main-text-wrapper {\n    max-width: 100%;\n  }\n}\n.support__main-text-title {\n  margin-bottom: 60px;\n}\n.support__main-text-title p {\n  max-width: 680px;\n  color: var(--heading-color);\n  font-family: var(--heading-font);\n  font-size: 36px;\n  text-transform: uppercase;\n  font-weight: 400;\n  line-height: 1.35;\n}\n@media screen and (max-width: 1200px) {\n  .support__main-text-title p {\n    font-size: clamp(30px, 2.64vw, 36px);\n    min-width: none;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__main-text-title p {\n    text-align: left;\n    font-size: 7.47vw;\n    line-height: 1.36;\n  }\n}\n.support__main-text-title span {\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n.support__main-text-label {\n  font-family: var(--secondary-font);\n  font-weight: 400;\n  width: 306px;\n  opacity: 0.7;\n  font-size: 20px;\n  border-right: 2px solid var(--table-line);\n}\n@media screen and (max-width: 1200px) {\n  .support__main-text-label {\n    width: 100%;\n    border-right: none;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__main-text-label {\n    font-size: 20px;\n  }\n}\n.support__main-text-play__info {\n  font-family: var(--secondary-font);\n  width: 398px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  padding-left: 16px;\n}\n@media screen and (max-width: 1200px) {\n  .support__main-text-play__info {\n    font-size: 18px;\n    padding: 0;\n  }\n}\n@media screen and (max-width: 375px) {\n  .support__main-text-play__info {\n    font-size: 20px;\n  }\n}\n.support__main-text-old {\n  position: relative;\n  margin-right: 8px;\n}\n.support__main-text-old:after {\n  content: "";\n  position: absolute;\n  width: 81px;\n  border: 2px solid var(--secondary-color);\n  left: 0;\n  right: 0;\n  top: 50%;\n}\n.support__footer {\n  margin-top: 18px;\n  font-family: var(--secondary-font);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.2;\n  color: var(--tertiary-color);\n}\n@media screen and (max-width: 375px) {\n  .support__footer {\n    font-size: 18px;\n  }\n}\n\n.stages {\n  padding: 100px 0 100px;\n}\n@media screen and (max-width: 375px) {\n  .stages {\n    padding: 50px 0 50px;\n  }\n}\n.stages__header {\n  max-width: 806px;\n  position: relative;\n}\n@media screen and (max-width: 1200px) {\n  .stages__header {\n    max-width: unset;\n  }\n}\n.stages__header h2 {\n  font-family: var(--heading-font);\n  font-size: 54px;\n  font-weight: 400;\n  line-height: 1.2;\n  letter-spacing: 0px;\n  text-align: left;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 1200px) {\n  .stages__header h2 {\n    font-size: clamp(36px, 4.5vw, 54px);\n  }\n}\n@media screen and (max-width: 375px) {\n  .stages__header h2 {\n    font-size: clamp(28px, 9.6vw, 36px);\n    line-height: 1.1;\n  }\n}\n.stages__header p {\n  position: absolute;\n  top: 72px;\n  left: 301px;\n  width: 280px;\n  color: var(--tertiary-color);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.2;\n}\n@media screen and (max-width: 1200px) {\n  .stages__header p {\n    position: relative;\n    width: 100%;\n    top: unset;\n    left: unset;\n  }\n}\n@media screen and (max-width: 375px) {\n  .stages__header p {\n    font-size: 18px;\n  }\n}\n.stages__content {\n  display: grid;\n  margin-top: 54px;\n  position: relative;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content {\n    grid-template-columns: unset;\n    margin: 180px 20px 0px 20px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .stages__content {\n    margin-top: 147px;\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n}\n.stages__content-1 {\n  grid-area: 1/1/2/3;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-1 {\n    grid-area: unset;\n    grid-template-columns: unset;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 300px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .stages__content-1 {\n    height: 300px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-1 div:nth-child(1) {\n    padding-bottom: 0;\n    background-image: none;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-1 div:nth-child(2) {\n    padding-top: 0;\n    background-image: none;\n  }\n}\n.stages__content-2 {\n  grid-area: 1/3/3/4;\n  display: grid;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-2 {\n    grid-area: unset;\n    height: 300px;\n    grid-template-columns: repeat(2, auto);\n  }\n}\n.stages__content-3 {\n  grid-area: 2/1/2/3;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-3 {\n    grid-area: unset;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 300px;\n    grid-template-columns: unset;\n    gap: 28px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-3 div:nth-child(1) {\n    padding-bottom: 0;\n    background-image: none;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-3 div:nth-child(2) {\n    padding-top: 0;\n    background-image: none;\n  }\n}\n.stages__content-4 {\n  grid-area: 3/1/3/2;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-4 {\n    grid-area: unset;\n    height: 300px;\n    grid-template-columns: repeat(2, auto);\n  }\n}\n.stages__content-5 {\n  grid-area: 3/2/4/4;\n  display: grid;\n  grid-template-columns: 2px 1fr;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-5 {\n    grid-area: unset;\n    height: 300px;\n    grid-template-columns: repeat(2, auto);\n  }\n}\n.stages__content-5 p {\n  max-width: clamp(310px, 27vw, 410px);\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-5 p {\n    max-width: unset;\n  }\n}\n.stages__content .card {\n  min-height: 112px;\n  display: flex;\n  padding: 20px;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  gap: 0 16px;\n  font-family: var(--secondary-font);\n}\n@media screen and (max-width: 1200px) {\n  .stages__content .card {\n    padding: 62px 20px 33px 20px;\n  }\n}\n.stages__content .card div {\n  min-width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 60px;\n  background: var(--white);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.stages__content .card p {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content .card p {\n    font-size: clamp(17px, 2.33vw, 28px);\n  }\n}\n@media screen and (max-width: 375px) {\n  .stages__content .card p {\n    font-size: clamp(16px, 4.8vw, 18px);\n  }\n}\n.stages__content .card.card__extra {\n  display: grid;\n  grid-template-columns: 37px 1fr;\n}\n.stages__content-image {\n  position: absolute;\n  bottom: 0;\n  right: -64px;\n  user-select: none;\n}\n@media screen and (max-width: 1200px) {\n  .stages__content-image {\n    width: clamp(310px, 29.36vw, 401px);\n    top: -125px;\n    bottom: unset;\n    right: unset;\n    left: 10px;\n  }\n}\n@media screen and (max-width: 375px) {\n  .stages__content-image {\n    max-width: 335px;\n    width: 100%;\n    top: -130px;\n    left: 12px;\n  }\n}\n.stages__controls {\n  display: none;\n  margin: 10px auto 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .stages__controls {\n    display: flex;\n    gap: 16px;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n.stages__controls button {\n  width: 36px;\n  height: 36px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.stages__controls button:hover svg circle {\n  fill: var(--banner-btn-hover);\n  transition: 0.2s;\n}\n.stages__controls button:disabled {\n  opacity: 0.5;\n}\n.stages__controls button:disabled:hover svg circle {\n  fill: var(--heading-color);\n}\n.stages__dots {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.stages__dots-active circle {\n  fill: var(--heading-color);\n}\n.stages__dots-active svg {\n  cursor: pointer;\n  transition: 0.1s linear;\n}\n.stages__dots-active svg:hover circle {\n  fill: var(--banner-btn-hover);\n}\n@media screen and (max-width: 1200px) {\n  .stages .stages__item {\n    display: none;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .stages .stages__item-active {\n    display: grid;\n  }\n}\n\n.members {\n  padding: 100px 0 140px;\n}\n.members__wrapper {\n  position: relative;\n}\n.members__title-wrapper {\n  max-width: 806px;\n}\n.members__title {\n  font-family: var(--heading-font);\n  font-size: 54px;\n  font-weight: 400;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 1200px) {\n  .members__title {\n    font-size: clamp(36px, 4.5vw, 54px);\n  }\n}\n@media screen and (max-width: 375px) {\n  .members__title {\n    font-size: clamp(28px, 9.6vw, 36px);\n    line-height: 1.14;\n  }\n}\n.members__main {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin-top: 60px;\n}\n@media screen and (max-width: 1200px) {\n  .members__main {\n    display: block;\n  }\n}\n@media screen and (max-width: 375px) {\n  .members__main {\n    margin-top: 38px;\n  }\n}\n.members__main-image img {\n  display: block;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .members__main-image img {\n    width: unset;\n    max-width: 320px;\n    height: auto;\n  }\n}\n@media screen and (max-width: 375px) {\n  .members__main-image img {\n    max-width: unset;\n    height: unset;\n    width: 244px;\n    height: 244px;\n  }\n}\n.members__main-card-person {\n  margin-top: 28px;\n  display: block;\n  color: var(--heading-color);\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.26;\n  text-align: center;\n}\n.members__main-card-subtitle {\n  display: block;\n  font-family: var(--secondary-font);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.2;\n  letter-spacing: 0px;\n  color: var(--heading-color);\n  text-align: center;\n  margin-top: 6px;\n  opacity: 0.6;\n}\n.members__main-card-link {\n  margin: 18px auto 0 auto;\n  width: 114px;\n  height: 35px;\n  font-family: var(--secondary-font);\n  color: var(--tertiary-color);\n  border: 1px solid var(--tertiary-color);\n  border-radius: 62px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.2;\n  text-align: center;\n}\n.members__main-card-link:hover {\n  color: var(--white);\n  background-color: var(--tertiary-color);\n  transition: 0.2s;\n}\n@media screen and (max-width: 375px) {\n  .members__main-card-link {\n    margin: 20px auto 0 auto;\n  }\n}\n.members__controls {\n  position: absolute;\n  top: 9px;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n}\n@media screen and (max-width: 1200px) {\n  .members__controls {\n    position: relative;\n    max-width: 130px;\n    top: unset;\n    right: unset;\n    margin: 40px auto 0 auto;\n  }\n}\n@media screen and (max-width: 375px) {\n  .members__controls {\n    max-width: 130px;\n    justify-content: center;\n    align-items: flex-end;\n    top: unset;\n  }\n}\n.members__controls button {\n  background: inherit;\n  width: 44px;\n  height: 44px;\n  border: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.members__controls button:hover svg circle {\n  fill: #fbce51;\n  transition: 0.5s;\n}\n@media screen and (max-width: 375px) {\n  .members__controls button {\n    width: 36px;\n    height: 36px;\n  }\n}\n.members__controls-numbers {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  gap: 5px;\n  font-weight: 400;\n  line-height: 1.2;\n  color: var(--heading-color);\n}\n.members__controls-numbers :nth-child(2) {\n  opacity: 0.6;\n}\n.members__controls-numbers :nth-child(3) {\n  opacity: 0.6;\n}\n@media screen and (max-width: 375px) {\n  .members__controls-numbers {\n    margin: 0 16px;\n  }\n}\n\n.footer {\n  padding: 40px 0 72px 0;\n  background: var(--footer-bg);\n}\n@media screen and (max-width: 375px) {\n  .footer {\n    padding: 40px 0 60px 0;\n  }\n}\n.footer p {\n  font-family: var(--secondary-font);\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 120%;\n  opacity: 0.6;\n}`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://yandex-landing/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://yandex-landing/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://yandex-landing/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://yandex-landing/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/scss/style.scss":
      /*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://yandex-landing/./src/scss/style.scss?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://yandex-landing/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://yandex-landing/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://yandex-landing/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://yandex-landing/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://yandex-landing/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://yandex-landing/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/js/main.js":
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");\n\r\n\r\nconst stageCards = document.querySelectorAll(".stages__item");\r\nconst stageLeftBtn = document.querySelector(".stages__left-btn");\r\nconst stageRightBtn = document.querySelector(".stages__right-btn");\r\nconst stageDots = document.querySelectorAll(".stages__dots svg");\r\n\r\nlet currentState = 0;\r\n\r\nfunction reset() {\r\n  stageDots.forEach((item) => item.classList.remove("stages__dots-active"));\r\n  stageCards.forEach((card) => card.classList.remove("stages__item-active"));\r\n}\r\n//Активируем кружок и карточку показываем\r\n\r\nfunction activateStage(i) {\r\n  stageCards[i].classList.add("stages__item-active");\r\n  stageDots[i].classList.add("stages__dots-active");\r\n  stageLeftBtn.disabled = i === 0;\r\n  stageRightBtn.disabled = i === 4;\r\n}\r\nstageLeftBtn.addEventListener("click", () => {\r\n  currentState--;\r\n  reset();\r\n  activateStage(currentState);\r\n});\r\nstageRightBtn.addEventListener("click", () => {\r\n  currentState++;\r\n  reset();\r\n  activateStage(currentState);\r\n});\r\nconst members = document.querySelectorAll(".members__main-card");\r\nconst memberRightBtn = document.querySelector(".members__right-btn");\r\nconst memberLeftBtn = document.querySelector(".members__left-btn");\r\nconst membersCurrentCount = document.querySelector(".members__current"); //Счетчик слайдов\r\n\r\nlet currentMember = 0;\r\nconst totalMembers = members.length;\r\nlet slidesToShow = window.innerWidth <= 1200 ? 1 : 3;\r\n\r\nfunction updateSlide() {\r\n  members.forEach((member) => (member.style.display = "none"));\r\n\r\n  for (let i = currentMember; i < currentMember + slidesToShow; i++) {\r\n    if (i < totalMembers) {\r\n      members[i].style.display = "block";\r\n    }\r\n  }\r\n}\r\nfunction updateCounter() {\r\n  membersCurrentCount.textContent = currentMember + 1;\r\n}\r\nmemberRightBtn.addEventListener("click", () => {\r\n  if (currentMember + slidesToShow < totalMembers) {\r\n    currentMember += slidesToShow;\r\n  } else {\r\n    currentMember = 0; // Возврат к первому\r\n  }\r\n  updateCounter();\r\n  updateSlide();\r\n});\r\nmemberLeftBtn.addEventListener("click", () => {\r\n  if (currentMember - slidesToShow >= 0) {\r\n    currentMember -= slidesToShow;\r\n  } else {\r\n    currentMember = Math.max(totalMembers - slidesToShow, 0); // Переход к последним\r\n  }\r\n  updateCounter();\r\n  updateSlide();\r\n});\r\n\r\ndocument.addEventListener("DOMContentLoaded", () => {\r\n  updateSlide();\r\n  updateCounter();\r\n});\r\nwindow.addEventListener("resize", () => {\r\n  slidesToShow = window.innerWidth <= 1200 ? 1 : 3;\r\n  counter = 0;\r\n  updateSlide();\r\n});\r\n\n\n//# sourceURL=webpack://yandex-landing/./src/js/main.js?'
        );

        /***/
      },

    /***/ "./src/images/bg__1200.png":
      /*!*********************************!*\
  !*** ./src/images/bg__1200.png ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "images/bg__1200.png";\n\n//# sourceURL=webpack://yandex-landing/./src/images/bg__1200.png?'
        );

        /***/
      },

    /***/ "./src/images/bg__375.jpg":
      /*!********************************!*\
  !*** ./src/images/bg__375.jpg ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "images/bg__375.jpg";\n\n//# sourceURL=webpack://yandex-landing/./src/images/bg__375.jpg?'
        );

        /***/
      },

    /***/ "./src/images/bg_large.png":
      /*!*********************************!*\
  !*** ./src/images/bg_large.png ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "images/bg_large.png";\n\n//# sourceURL=webpack://yandex-landing/./src/images/bg_large.png?'
        );

        /***/
      },

    /***/ "./src/images/card_bg.png":
      /*!********************************!*\
  !*** ./src/images/card_bg.png ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "images/card_bg.png";\n\n//# sourceURL=webpack://yandex-landing/./src/images/card_bg.png?'
        );

        /***/
      },

    /***/ "./src/images/header__effect.png":
      /*!***************************************!*\
  !*** ./src/images/header__effect.png ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "images/header__effect.png";\n\n//# sourceURL=webpack://yandex-landing/./src/images/header__effect.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (
        document.currentScript &&
        document.currentScript.tagName.toUpperCase() === "SCRIPT"
      )
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/js/main.js");
  /******/
  /******/
})();
