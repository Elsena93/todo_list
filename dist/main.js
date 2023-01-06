/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    display: grid;\n    grid-template-rows: 128px 1fr 128px 320px;\n    grid-template-areas: 'top' 'main' 'form1' 'form2';\n    justify-content: center;\n\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nh3 {\n    margin: 0;\n}\n\n\nheader {\n    grid-area: top;\n    \n}\n\nmain {\n    grid-area: main;\n}\n\nsub {\n    margin: 0;\n    padding: 0;\n}\n\n.project {\n    margin: 0;\n}\n\n#project-form {\n    grid-area: form1;\n\n    width: 512px;\n\n    display: grid;\n}\n\n#task-form {\n    grid-area: form2;\n\n    width: 512px;\n\n    display: grid;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,yCAAyC;IACzC,iDAAiD;IACjD,uBAAuB;;IAEvB,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;;AAGA;IACI,cAAc;;AAElB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;;IAEZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;;IAEZ,aAAa;AACjB","sourcesContent":["\nbody {\n    display: grid;\n    grid-template-rows: 128px 1fr 128px 320px;\n    grid-template-areas: 'top' 'main' 'form1' 'form2';\n    justify-content: center;\n\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nh3 {\n    margin: 0;\n}\n\n\nheader {\n    grid-area: top;\n    \n}\n\nmain {\n    grid-area: main;\n}\n\nsub {\n    margin: 0;\n    padding: 0;\n}\n\n.project {\n    margin: 0;\n}\n\n#project-form {\n    grid-area: form1;\n\n    width: 512px;\n\n    display: grid;\n}\n\n#task-form {\n    grid-area: form2;\n\n    width: 512px;\n\n    display: grid;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "taskElementFactory": () => (/* binding */ taskElementFactory),
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// INFORMATION HOLDER



/**
 * @typedef Task Task Object
 * @type {Object}
 * @property {String} id Generate by char 'T' + UUID4
 * @property {String} title
 * @property {String} description
 * @property {String} dueDate
 * @property {String} priority
 * @property {String} Project
 */

/**
 * @typedef Project Project Object
 * @type {Object}
 * @property {String} id Generate by char 'T' + UUID4
 * @property {String} name
 */

/**
 * @function factory of Task Object
 * @param {String} title title of The Task
 * @param {String} description description of The Task
 * @param {String} dueDate due date of The Task
 * @param {String} priority priority of The Task
 * @param {String} project The Task is a member of project
 * @returns {Task} Task Object
 */
function taskFactory (title, description, dueDate, priority = 'lowest', project = 'default') {
  let _id = 'T' + (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
  let _title = title
  let _description = description
  let _dueDate = dueDate
  let _priority = priority
  let _project = project

  return {
    get id () {
      return _id
    },
    set id (id) {
      _id = id
    },
    get title () {
      return _title
    },
    set title (title) {
      _title = title
    },
    get description () {
      return _description
    },
    set description (description) {
      _description = description
    },
    get dueDate () {
      return _dueDate
    },
    set dueDate (dueDate) {
      _dueDate = dueDate
    },
    get priority () {
      return _priority
    },
    set priority (priority) {
      _priority = priority
    },
    get project () {
      return _project
    },
    set project (project) {
      _project = project
    }
  }
}

/**
 * @function factory of Project Object
 * @param {String} name name of The Project
 * @returns {Project} Project Object
 */
function projectFactory (name) {
  let _id = 'P' + (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
  let _name = name
  return {
    get id () {
      return _id
    },
    set id (id) {
      _id = id
    },
    get name () {
      return _name
    },
    set name (name) {
      _name = name
    }
  }
}

/**
 * @description turn Task Object into DOM element
 * @param {Task} task Task Object
 */

function taskElementFactory (task) {
  const taskEl = document.createElement('div')
  taskEl.classList = 'task-el'
  taskEl.setAttribute('data-key', `${task.id}`)
  const taskTitleEl = document.createElement('h3')
  const taskDateEl = document.createElement('div')
  const taskDescEl = document.createElement('div')

  const taskControl = document.createElement('div')
  taskControl.classList = 'control'
  const deleteButton = document.createElement('button')
  const clearButton = document.createElement('button')

  taskTitleEl.innerText = task.title
  taskDateEl.innerText = task.dueDate
  taskDescEl.innerText = task.description
  deleteButton.innerText = 'Delete Task'
  deleteButton.classList = 'delete'
  deleteButton.setAttribute('data-key', `${task.id}`)
  clearButton.innerText = 'UNCLEARED'
  clearButton.classList = 'clear'
  clearButton.setAttribute('data-key', `${task.id}`)

  taskControl.appendChild(deleteButton)
  taskControl.appendChild(clearButton)
  taskEl.appendChild(taskTitleEl)
  taskEl.appendChild(taskDateEl)
  taskEl.appendChild(taskDescEl)
  taskEl.appendChild(taskControl)

  return taskEl
}




/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager */ "./src/manager.js");


function interfaceDOMConstructor () {
  const projectsButton = document.querySelector('.menu .projects')
  projectsButton.addEventListener('click', _manager__WEBPACK_IMPORTED_MODULE_0__.renderProjects)

  const tasksButton = document.querySelector('.menu .tasks')
  tasksButton.addEventListener('click', _manager__WEBPACK_IMPORTED_MODULE_0__.renderTasks)

  const displayContainer = document.querySelector('div.content')

  // Form interface

  const addProject = document.querySelector('#project-form button')
  addProject.addEventListener('click', _manager__WEBPACK_IMPORTED_MODULE_0__.projectFormHandling)

  const addTask = document.querySelector('#task-form button')
  addTask.addEventListener('click', _manager__WEBPACK_IMPORTED_MODULE_0__.taskFormHandling)

  const projectOptions = document.querySelector('#task-form #project')

  return {
    addProject, addTask, projectOptions, displayContainer
  }
}
/**
 * @description Object to manage interface
 */
const interFace = interfaceDOMConstructor()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interFace);


/***/ }),

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFormHandling": () => (/* binding */ projectFormHandling),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "storageManager": () => (/* binding */ storageManager),
/* harmony export */   "taskFormHandling": () => (/* binding */ taskFormHandling),
/* harmony export */   "updateProjectOptions": () => (/* binding */ updateProjectOptions)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.js");




/**
 * @typedef {import('./factory').Task} Task
 * @typedef {import('./factory').Project} Project
 */

function storageManagerConstructor () {
// STRUCTURE
  const objList = []
  /**
     * @description add item to storage
     * @param {Task|Project} obj
     * @returns {Void}
     */
  const addItem = (obj) => {
    objList.push(obj.id)
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(obj)
  }

  /**
     * @description remove item to storage
     * @param {String} id of Task or Project object inside localStrorage
     * @returns {Void}
     */
  const removeItem = (id) => {
    objList.splice(objList.indexOf(id), 1)
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(id)
  }

  /**
     * @param {String} id of Task or Project Object
     * @returns {Task | Project}
     */
  const readItem = (id) => {
    return _storage__WEBPACK_IMPORTED_MODULE_1__["default"].readItem(id)
  }

  const projectKeys = () => {
    return objList.filter(key => key.substring(0, 1) === 'P')
  }

  const taskKeys = () => {
    return objList.filter(key => key.substring(0, 1) === 'T')
  }

  return {
    objList, addItem, removeItem, readItem, projectKeys, taskKeys
  }
}

/**
 * @description Manager of localStorage AND current object ids in arrays
 */
const storageManager = storageManagerConstructor()


/**
 * @description handler for a click on add project form button
 * @param {Event} e
 */

// COORDINATOR/CONTROLLER

function projectFormHandling (e) {
  e.preventDefault()
  const projectName = document.querySelector('#project-form #name')
  if (projectName.value === '') {
    return alert('Please fill project name')
  } else {
    const newObj = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(projectName.value)
    projectName.value = ''
    storageManager.addItem(newObj)
    updateProjectOptions()
    updateDisplayFromForm('project')
  }
}

/**
 * @description handler for a click on add task form button
 * @param {Event} e
 */
function taskFormHandling (e) {
  e.preventDefault()
  const taskName = document.querySelector('#task-form #name')
  const taskDesc = document.querySelector('#task-form #description')
  const taskDue = document.querySelector('#task-form #dueDate')
  const taskPrio = document.querySelector('#task-form #priority')
  const taskProj = document.querySelector('#task-form #project')
  if (taskName.value === '' || taskDesc.value === '' || taskDue.value === '') {
    return alert('Fill the necessary form')
  }
  let projVal = 'default'
  if (taskProj.value !== '') {
    projVal = taskProj.value
  }
  const newObj = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(taskName.value, taskDesc.value,
    taskDue.value, taskPrio.value, projVal)
  storageManager.addItem(newObj)
  taskName.value = taskDesc.value = taskDue.value = taskProj.value = ''
  taskPrio.value = 'lowest'

  updateDisplayFromForm('task')
}

/**
 * @description Update project select drop-down in interface, called each time new project added to storage
 */
function updateProjectOptions () {
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].projectOptions
  container.replaceChildren()
  for (const i in storageManager.objList) {
    const j = storageManager.objList[i]
    if (j.substring(0, 1) === 'P') {
      const option = document.createElement('option')
      const x = storageManager.readItem(j)
      option.setAttribute('value', `${x.name}`)
      option.innerText = x.name
      container.appendChild(option)
    }
  }
}



function updateDisplayFromForm (obj) {
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  if (obj === 'project') {
    if (container.classList.contains('projects-container')) {
      renderProjects()
    } else {
      // Left empty
    }
  } else if (obj === 'task') {
    if (container.classList.contains('tasks-container')) {
      renderTasks()
    } else {
      // Left empty
    }
  } else {
    // Left empty
  }
}

function renderProjects (e) {
  const list = storageManager.projectKeys()

  // Need to be outside function
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  container.replaceChildren()
  container.classList = 'projects-container'

  list.forEach(key => {
    const obj = storageManager.readItem(key)

    const project = document.createElement('div')
    const title = document.createElement('h3')
    title.innerText = obj.name

    const sub = document.createElement('sub')
    sub.innerText = 'Project'

    project.setAttribute('data-key', `${key}`)
    project.classList.add('project')

    project.appendChild(sub)
    project.appendChild(title)

    container.appendChild(project)
  })
}

function renderTasks (e) {
  const list = storageManager.taskKeys()

  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  container.replaceChildren()
  container.classList = 'tasks-container'

  list.forEach(key => {
    const obj = storageManager.readItem(key)
    const el = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskElementFactory)(obj)

    container.appendChild(el)
  })

  const deleteButtons = document.querySelectorAll('.task-el .control .delete')
  const clearButtons = document.querySelectorAll('.task-el .control .clear')

  deleteButtons.forEach(element => {
    element.addEventListener('click', deleteTaskEl)
  })

  clearButtons.forEach(element => {
    element.addEventListener('click', clearTask)
  })
}

function deleteTaskEl (e) {
  const parentEl = e.target.closest('.task-el')
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  container.removeChild(parentEl)

  storageManager.removeItem(e.target.dataset.key)
}

function clearTask (e) {
  console.log(e.target)
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
// INTERFACE TO LOCALSTORAGE



/**
 * @typedef {import('./factory').Task} Task
 * @typedef {import('./factory').Project} Project
 */

function storageManager () {
  /**
     * @param {String} id Key to Stringified Object on localStorage
     * @returns {Task|Project} Task Object or Project Object
     */
  const readItem = (id) => {
    if (id.substring(0, 1) === 'T') {
      return readTask(id)
    } else if (id.substring(0, 1) === 'P') {
      return readProject(id)
    } else {
      // Left empty
    }
  }

  /**
     * @param {String} id Key to Stringified Task Object on localStorage
     * @returns {Task} Task Object
     */
  const readTask = (id) => {
    const store = JSON.parse(localStorage.getItem(id))
    const obj = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(store.title, store.description,
      store.dueDate, store.priority, store.project)
    obj.id = id
    return obj
  }

  /**
     * @param {String} id Key to Stringified Project Object on localStorage
     * @returns {Project}  Project Object
     */
  const readProject = (id) => {
    const store = JSON.parse(localStorage.getItem(id))
    const obj = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(store.name)
    obj.id = id
    return obj
  }

  /**
     * @param {Task|Project} obj
     * @returns {Void}
     */
  const addItem = (obj) => {
    const store = JSON.stringify(obj)
    localStorage.setItem(obj.id, store)
  }

  /**
     * @param {String} id of Task/Project Object inside localStorage
     * @returns {void}
     */
  const removeItem = (id) => {
    localStorage.removeItem(id)
  }

  return {
    readItem, addItem, removeItem
  }
}

/**
 * @description interface for I/O operation to localStorage
 */
const obj = storageManager()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (obj);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./src/manager.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


 // Not called but necessary to make functioning


function initialLoad () {
  // Test persistance storage manipulation
  localStorage.clear()

  // Add default project and sample tasks
  const sampleProject = (0,_factory__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('default')

  const sampleTask1 = (0,_factory__WEBPACK_IMPORTED_MODULE_3__.taskFactory)('title1', 'description1', 'duedate1')
  const sampleTask2 = (0,_factory__WEBPACK_IMPORTED_MODULE_3__.taskFactory)('title2', 'description2', 'duedate2')
  const sampleTask3 = (0,_factory__WEBPACK_IMPORTED_MODULE_3__.taskFactory)('title3', 'description3', 'duedate3')

  _manager__WEBPACK_IMPORTED_MODULE_1__.storageManager.addItem(sampleProject)
  _manager__WEBPACK_IMPORTED_MODULE_1__.storageManager.addItem(sampleTask1)
  _manager__WEBPACK_IMPORTED_MODULE_1__.storageManager.addItem(sampleTask2)
  _manager__WEBPACK_IMPORTED_MODULE_1__.storageManager.addItem(sampleTask3)

  ;(0,_manager__WEBPACK_IMPORTED_MODULE_1__.updateProjectOptions)()
  ;(0,_manager__WEBPACK_IMPORTED_MODULE_1__.renderProjects)()
}

initialLoad()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VztBQUNqQyxzQkFBc0IscURBQVc7QUFDakMsc0JBQXNCLHFEQUFXOztBQUVqQyxFQUFFLDREQUFzQjtBQUN4QixFQUFFLDREQUFzQjtBQUN4QixFQUFFLDREQUFzQjtBQUN4QixFQUFFLDREQUFzQjs7QUFFeEIsRUFBRSwrREFBb0I7QUFDdEIsRUFBRSx5REFBYztBQUNoQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyOHB4IDFmciAxMjhweCAzMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RvcCcgJ21haW4nICdmb3JtMScgJ2Zvcm0yJztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogdG9wO1xcbiAgICBcXG59XFxuXFxubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuc3ViIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICAgIGdyaWQtYXJlYTogZm9ybTE7XFxuXFxuICAgIHdpZHRoOiA1MTJweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICAgIGdyaWQtYXJlYTogZm9ybTI7XFxuXFxuICAgIHdpZHRoOiA1MTJweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGlEQUFpRDtJQUNqRCx1QkFBdUI7O0lBRXZCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOzs7QUFHQTtJQUNJLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFlBQVk7O0lBRVosYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsWUFBWTs7SUFFWixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyOHB4IDFmciAxMjhweCAzMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RvcCcgJ21haW4nICdmb3JtMScgJ2Zvcm0yJztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogdG9wO1xcbiAgICBcXG59XFxuXFxubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuc3ViIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICAgIGdyaWQtYXJlYTogZm9ybTE7XFxuXFxuICAgIHdpZHRoOiA1MTJweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICAgIGdyaWQtYXJlYTogZm9ybTI7XFxuXFxuICAgIHdpZHRoOiA1MTJweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gSU5GT1JNQVRJT04gSE9MREVSXG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbi8qKlxuICogQHR5cGVkZWYgVGFzayBUYXNrIE9iamVjdFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBpZCBHZW5lcmF0ZSBieSBjaGFyICdUJyArIFVVSUQ0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gdGl0bGVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkZXNjcmlwdGlvblxuICogQHByb3BlcnR5IHtTdHJpbmd9IGR1ZURhdGVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcmlvcml0eVxuICogQHByb3BlcnR5IHtTdHJpbmd9IFByb2plY3RcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIFByb2plY3QgUHJvamVjdCBPYmplY3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge1N0cmluZ30gaWQgR2VuZXJhdGUgYnkgY2hhciAnVCcgKyBVVUlENFxuICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWVcbiAqL1xuXG4vKipcbiAqIEBmdW5jdGlvbiBmYWN0b3J5IG9mIFRhc2sgT2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgdGl0bGUgb2YgVGhlIFRhc2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBvZiBUaGUgVGFza1xuICogQHBhcmFtIHtTdHJpbmd9IGR1ZURhdGUgZHVlIGRhdGUgb2YgVGhlIFRhc2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcmlvcml0eSBwcmlvcml0eSBvZiBUaGUgVGFza1xuICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgVGhlIFRhc2sgaXMgYSBtZW1iZXIgb2YgcHJvamVjdFxuICogQHJldHVybnMge1Rhc2t9IFRhc2sgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHRhc2tGYWN0b3J5ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gJ2xvd2VzdCcsIHByb2plY3QgPSAnZGVmYXVsdCcpIHtcbiAgbGV0IF9pZCA9ICdUJyArIHV1aWR2NCgpXG4gIGxldCBfdGl0bGUgPSB0aXRsZVxuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZVxuICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHlcbiAgbGV0IF9wcm9qZWN0ID0gcHJvamVjdFxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGlkICgpIHtcbiAgICAgIHJldHVybiBfaWRcbiAgICB9LFxuICAgIHNldCBpZCAoaWQpIHtcbiAgICAgIF9pZCA9IGlkXG4gICAgfSxcbiAgICBnZXQgdGl0bGUgKCkge1xuICAgICAgcmV0dXJuIF90aXRsZVxuICAgIH0sXG4gICAgc2V0IHRpdGxlICh0aXRsZSkge1xuICAgICAgX3RpdGxlID0gdGl0bGVcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uXG4gICAgfSxcbiAgICBzZXQgZGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgICBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUgKCkge1xuICAgICAgcmV0dXJuIF9kdWVEYXRlXG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZSAoZHVlRGF0ZSkge1xuICAgICAgX2R1ZURhdGUgPSBkdWVEYXRlXG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkgKCkge1xuICAgICAgcmV0dXJuIF9wcmlvcml0eVxuICAgIH0sXG4gICAgc2V0IHByaW9yaXR5IChwcmlvcml0eSkge1xuICAgICAgX3ByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9LFxuICAgIGdldCBwcm9qZWN0ICgpIHtcbiAgICAgIHJldHVybiBfcHJvamVjdFxuICAgIH0sXG4gICAgc2V0IHByb2plY3QgKHByb2plY3QpIHtcbiAgICAgIF9wcm9qZWN0ID0gcHJvamVjdFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBmYWN0b3J5IG9mIFByb2plY3QgT2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIFRoZSBQcm9qZWN0XG4gKiBAcmV0dXJucyB7UHJvamVjdH0gUHJvamVjdCBPYmplY3RcbiAqL1xuZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkgKG5hbWUpIHtcbiAgbGV0IF9pZCA9ICdQJyArIHV1aWR2NCgpXG4gIGxldCBfbmFtZSA9IG5hbWVcbiAgcmV0dXJuIHtcbiAgICBnZXQgaWQgKCkge1xuICAgICAgcmV0dXJuIF9pZFxuICAgIH0sXG4gICAgc2V0IGlkIChpZCkge1xuICAgICAgX2lkID0gaWRcbiAgICB9LFxuICAgIGdldCBuYW1lICgpIHtcbiAgICAgIHJldHVybiBfbmFtZVxuICAgIH0sXG4gICAgc2V0IG5hbWUgKG5hbWUpIHtcbiAgICAgIF9uYW1lID0gbmFtZVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB0dXJuIFRhc2sgT2JqZWN0IGludG8gRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7VGFza30gdGFzayBUYXNrIE9iamVjdFxuICovXG5cbmZ1bmN0aW9uIHRhc2tFbGVtZW50RmFjdG9yeSAodGFzaykge1xuICBjb25zdCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0YXNrRWwuY2xhc3NMaXN0ID0gJ3Rhc2stZWwnXG4gIHRhc2tFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7dGFzay5pZH1gKVxuICBjb25zdCB0YXNrVGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgY29uc3QgdGFza0RhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHRhc2tEZXNjRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGNvbnN0IHRhc2tDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFza0NvbnRyb2wuY2xhc3NMaXN0ID0gJ2NvbnRyb2wnXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICB0YXNrVGl0bGVFbC5pbm5lclRleHQgPSB0YXNrLnRpdGxlXG4gIHRhc2tEYXRlRWwuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlXG4gIHRhc2tEZXNjRWwuaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvblxuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBUYXNrJ1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gJ2RlbGV0ZSdcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHt0YXNrLmlkfWApXG4gIGNsZWFyQnV0dG9uLmlubmVyVGV4dCA9ICdVTkNMRUFSRUQnXG4gIGNsZWFyQnV0dG9uLmNsYXNzTGlzdCA9ICdjbGVhcidcbiAgY2xlYXJCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke3Rhc2suaWR9YClcblxuICB0YXNrQ29udHJvbC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gIHRhc2tDb250cm9sLmFwcGVuZENoaWxkKGNsZWFyQnV0dG9uKVxuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlRWwpXG4gIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRGF0ZUVsKVxuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NFbClcbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tDb250cm9sKVxuXG4gIHJldHVybiB0YXNrRWxcbn1cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB0YXNrRWxlbWVudEZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcHJvamVjdEZvcm1IYW5kbGluZywgdGFza0Zvcm1IYW5kbGluZywgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRhc2tzIH0gZnJvbSAnLi9tYW5hZ2VyJ1xuXG5mdW5jdGlvbiBpbnRlcmZhY2VET01Db25zdHJ1Y3RvciAoKSB7XG4gIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUgLnByb2plY3RzJylcbiAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJQcm9qZWN0cylcblxuICBjb25zdCB0YXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51IC50YXNrcycpXG4gIHRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGFza3MpXG5cbiAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jb250ZW50JylcblxuICAvLyBGb3JtIGludGVyZmFjZVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtIGJ1dHRvbicpXG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Rm9ybUhhbmRsaW5nKVxuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtIGJ1dHRvbicpXG4gIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrRm9ybUhhbmRsaW5nKVxuXG4gIGNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybSAjcHJvamVjdCcpXG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LCBhZGRUYXNrLCBwcm9qZWN0T3B0aW9ucywgZGlzcGxheUNvbnRhaW5lclxuICB9XG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBPYmplY3QgdG8gbWFuYWdlIGludGVyZmFjZVxuICovXG5jb25zdCBpbnRlckZhY2UgPSBpbnRlcmZhY2VET01Db25zdHJ1Y3RvcigpXG5leHBvcnQgZGVmYXVsdCBpbnRlckZhY2VcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSwgdGFza0VsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IHByb2plY3RTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSdcbmltcG9ydCBpbnRlckZhY2UgZnJvbSAnLi9pbnRlcmZhY2UnXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuVGFza30gVGFza1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuUHJvamVjdH0gUHJvamVjdFxuICovXG5cbmZ1bmN0aW9uIHN0b3JhZ2VNYW5hZ2VyQ29uc3RydWN0b3IgKCkge1xuLy8gU1RSVUNUVVJFXG4gIGNvbnN0IG9iakxpc3QgPSBbXVxuICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gYWRkIGl0ZW0gdG8gc3RvcmFnZVxuICAgICAqIEBwYXJhbSB7VGFza3xQcm9qZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgY29uc3QgYWRkSXRlbSA9IChvYmopID0+IHtcbiAgICBvYmpMaXN0LnB1c2gob2JqLmlkKVxuICAgIHByb2plY3RTdG9yYWdlLmFkZEl0ZW0ob2JqKVxuICB9XG5cbiAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHJlbW92ZSBpdGVtIHRvIHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgVGFzayBvciBQcm9qZWN0IG9iamVjdCBpbnNpZGUgbG9jYWxTdHJvcmFnZVxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XG4gICAgb2JqTGlzdC5zcGxpY2Uob2JqTGlzdC5pbmRleE9mKGlkKSwgMSlcbiAgICBwcm9qZWN0U3RvcmFnZS5yZW1vdmVJdGVtKGlkKVxuICB9XG5cbiAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIFRhc2sgb3IgUHJvamVjdCBPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7VGFzayB8IFByb2plY3R9XG4gICAgICovXG4gIGNvbnN0IHJlYWRJdGVtID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RTdG9yYWdlLnJlYWRJdGVtKGlkKVxuICB9XG5cbiAgY29uc3QgcHJvamVjdEtleXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9iakxpc3QuZmlsdGVyKGtleSA9PiBrZXkuc3Vic3RyaW5nKDAsIDEpID09PSAnUCcpXG4gIH1cblxuICBjb25zdCB0YXNrS2V5cyA9ICgpID0+IHtcbiAgICByZXR1cm4gb2JqTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5zdWJzdHJpbmcoMCwgMSkgPT09ICdUJylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2JqTGlzdCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVhZEl0ZW0sIHByb2plY3RLZXlzLCB0YXNrS2V5c1xuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1hbmFnZXIgb2YgbG9jYWxTdG9yYWdlIEFORCBjdXJyZW50IG9iamVjdCBpZHMgaW4gYXJyYXlzXG4gKi9cbmNvbnN0IHN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXJDb25zdHJ1Y3RvcigpXG5leHBvcnQgeyBzdG9yYWdlTWFuYWdlciB9XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGhhbmRsZXIgZm9yIGEgY2xpY2sgb24gYWRkIHByb2plY3QgZm9ybSBidXR0b25cbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuXG4vLyBDT09SRElOQVRPUi9DT05UUk9MTEVSXG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtSGFuZGxpbmcgKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybSAjbmFtZScpXG4gIGlmIChwcm9qZWN0TmFtZS52YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gYWxlcnQoJ1BsZWFzZSBmaWxsIHByb2plY3QgbmFtZScpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3T2JqID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUudmFsdWUpXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJ1xuICAgIHN0b3JhZ2VNYW5hZ2VyLmFkZEl0ZW0obmV3T2JqKVxuICAgIHVwZGF0ZVByb2plY3RPcHRpb25zKClcbiAgICB1cGRhdGVEaXNwbGF5RnJvbUZvcm0oJ3Byb2plY3QnKVxuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGhhbmRsZXIgZm9yIGEgY2xpY2sgb24gYWRkIHRhc2sgZm9ybSBidXR0b25cbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuZnVuY3Rpb24gdGFza0Zvcm1IYW5kbGluZyAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNuYW1lJylcbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNkZXNjcmlwdGlvbicpXG4gIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNkdWVEYXRlJylcbiAgY29uc3QgdGFza1ByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNwcmlvcml0eScpXG4gIGNvbnN0IHRhc2tQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybSAjcHJvamVjdCcpXG4gIGlmICh0YXNrTmFtZS52YWx1ZSA9PT0gJycgfHwgdGFza0Rlc2MudmFsdWUgPT09ICcnIHx8IHRhc2tEdWUudmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGFsZXJ0KCdGaWxsIHRoZSBuZWNlc3NhcnkgZm9ybScpXG4gIH1cbiAgbGV0IHByb2pWYWwgPSAnZGVmYXVsdCdcbiAgaWYgKHRhc2tQcm9qLnZhbHVlICE9PSAnJykge1xuICAgIHByb2pWYWwgPSB0YXNrUHJvai52YWx1ZVxuICB9XG4gIGNvbnN0IG5ld09iaiA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSxcbiAgICB0YXNrRHVlLnZhbHVlLCB0YXNrUHJpby52YWx1ZSwgcHJvalZhbClcbiAgc3RvcmFnZU1hbmFnZXIuYWRkSXRlbShuZXdPYmopXG4gIHRhc2tOYW1lLnZhbHVlID0gdGFza0Rlc2MudmFsdWUgPSB0YXNrRHVlLnZhbHVlID0gdGFza1Byb2oudmFsdWUgPSAnJ1xuICB0YXNrUHJpby52YWx1ZSA9ICdsb3dlc3QnXG5cbiAgdXBkYXRlRGlzcGxheUZyb21Gb3JtKCd0YXNrJylcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVXBkYXRlIHByb2plY3Qgc2VsZWN0IGRyb3AtZG93biBpbiBpbnRlcmZhY2UsIGNhbGxlZCBlYWNoIHRpbWUgbmV3IHByb2plY3QgYWRkZWQgdG8gc3RvcmFnZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0T3B0aW9ucyAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGludGVyRmFjZS5wcm9qZWN0T3B0aW9uc1xuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgZm9yIChjb25zdCBpIGluIHN0b3JhZ2VNYW5hZ2VyLm9iakxpc3QpIHtcbiAgICBjb25zdCBqID0gc3RvcmFnZU1hbmFnZXIub2JqTGlzdFtpXVxuICAgIGlmIChqLnN1YnN0cmluZygwLCAxKSA9PT0gJ1AnKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgY29uc3QgeCA9IHN0b3JhZ2VNYW5hZ2VyLnJlYWRJdGVtKGopXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3gubmFtZX1gKVxuICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHgubmFtZVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvamVjdEZvcm1IYW5kbGluZywgdGFza0Zvcm1IYW5kbGluZywgdXBkYXRlUHJvamVjdE9wdGlvbnMgfVxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5RnJvbUZvcm0gKG9iaikge1xuICBjb25zdCBjb250YWluZXIgPSBpbnRlckZhY2UuZGlzcGxheUNvbnRhaW5lclxuICBpZiAob2JqID09PSAncHJvamVjdCcpIHtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHMtY29udGFpbmVyJykpIHtcbiAgICAgIHJlbmRlclByb2plY3RzKClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGVmdCBlbXB0eVxuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogPT09ICd0YXNrJykge1xuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrcy1jb250YWluZXInKSkge1xuICAgICAgcmVuZGVyVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMZWZ0IGVtcHR5XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIExlZnQgZW1wdHlcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyAoZSkge1xuICBjb25zdCBsaXN0ID0gc3RvcmFnZU1hbmFnZXIucHJvamVjdEtleXMoKVxuXG4gIC8vIE5lZWQgdG8gYmUgb3V0c2lkZSBmdW5jdGlvblxuICBjb25zdCBjb250YWluZXIgPSBpbnRlckZhY2UuZGlzcGxheUNvbnRhaW5lclxuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9ICdwcm9qZWN0cy1jb250YWluZXInXG5cbiAgbGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3Qgb2JqID0gc3RvcmFnZU1hbmFnZXIucmVhZEl0ZW0oa2V5KVxuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gb2JqLm5hbWVcblxuICAgIGNvbnN0IHN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N1YicpXG4gICAgc3ViLmlubmVyVGV4dCA9ICdQcm9qZWN0J1xuXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7a2V5fWApXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ViKVxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MgKGUpIHtcbiAgY29uc3QgbGlzdCA9IHN0b3JhZ2VNYW5hZ2VyLnRhc2tLZXlzKClcblxuICBjb25zdCBjb250YWluZXIgPSBpbnRlckZhY2UuZGlzcGxheUNvbnRhaW5lclxuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9ICd0YXNrcy1jb250YWluZXInXG5cbiAgbGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3Qgb2JqID0gc3RvcmFnZU1hbmFnZXIucmVhZEl0ZW0oa2V5KVxuICAgIGNvbnN0IGVsID0gdGFza0VsZW1lbnRGYWN0b3J5KG9iailcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbClcbiAgfSlcblxuICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWwgLmNvbnRyb2wgLmRlbGV0ZScpXG4gIGNvbnN0IGNsZWFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVsIC5jb250cm9sIC5jbGVhcicpXG5cbiAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrRWwpXG4gIH0pXG5cbiAgY2xlYXJCdXR0b25zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyVGFzaylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza0VsIChlKSB7XG4gIGNvbnN0IHBhcmVudEVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stZWwnKVxuICBjb25zdCBjb250YWluZXIgPSBpbnRlckZhY2UuZGlzcGxheUNvbnRhaW5lclxuICBjb250YWluZXIucmVtb3ZlQ2hpbGQocGFyZW50RWwpXG5cbiAgc3RvcmFnZU1hbmFnZXIucmVtb3ZlSXRlbShlLnRhcmdldC5kYXRhc2V0LmtleSlcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrIChlKSB7XG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyVGFza3MgfVxuIiwiLy8gSU5URVJGQUNFIFRPIExPQ0FMU1RPUkFHRVxuXG5pbXBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuVGFza30gVGFza1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuUHJvamVjdH0gUHJvamVjdFxuICovXG5cbmZ1bmN0aW9uIHN0b3JhZ2VNYW5hZ2VyICgpIHtcbiAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIEtleSB0byBTdHJpbmdpZmllZCBPYmplY3Qgb24gbG9jYWxTdG9yYWdlXG4gICAgICogQHJldHVybnMge1Rhc2t8UHJvamVjdH0gVGFzayBPYmplY3Qgb3IgUHJvamVjdCBPYmplY3RcbiAgICAgKi9cbiAgY29uc3QgcmVhZEl0ZW0gPSAoaWQpID0+IHtcbiAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIDEpID09PSAnVCcpIHtcbiAgICAgIHJldHVybiByZWFkVGFzayhpZClcbiAgICB9IGVsc2UgaWYgKGlkLnN1YnN0cmluZygwLCAxKSA9PT0gJ1AnKSB7XG4gICAgICByZXR1cm4gcmVhZFByb2plY3QoaWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExlZnQgZW1wdHlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgS2V5IHRvIFN0cmluZ2lmaWVkIFRhc2sgT2JqZWN0IG9uIGxvY2FsU3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtUYXNrfSBUYXNrIE9iamVjdFxuICAgICAqL1xuICBjb25zdCByZWFkVGFzayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkpXG4gICAgY29uc3Qgb2JqID0gdGFza0ZhY3Rvcnkoc3RvcmUudGl0bGUsIHN0b3JlLmRlc2NyaXB0aW9uLFxuICAgICAgc3RvcmUuZHVlRGF0ZSwgc3RvcmUucHJpb3JpdHksIHN0b3JlLnByb2plY3QpXG4gICAgb2JqLmlkID0gaWRcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgS2V5IHRvIFN0cmluZ2lmaWVkIFByb2plY3QgT2JqZWN0IG9uIGxvY2FsU3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtQcm9qZWN0fSAgUHJvamVjdCBPYmplY3RcbiAgICAgKi9cbiAgY29uc3QgcmVhZFByb2plY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpKVxuICAgIGNvbnN0IG9iaiA9IHByb2plY3RGYWN0b3J5KHN0b3JlLm5hbWUpXG4gICAgb2JqLmlkID0gaWRcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2t8UHJvamVjdH0gb2JqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gIGNvbnN0IGFkZEl0ZW0gPSAob2JqKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqLmlkLCBzdG9yZSlcbiAgfVxuXG4gIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiBUYXNrL1Byb2plY3QgT2JqZWN0IGluc2lkZSBsb2NhbFN0b3JhZ2VcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWFkSXRlbSwgYWRkSXRlbSwgcmVtb3ZlSXRlbVxuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGludGVyZmFjZSBmb3IgSS9PIG9wZXJhdGlvbiB0byBsb2NhbFN0b3JhZ2VcbiAqL1xuY29uc3Qgb2JqID0gc3RvcmFnZU1hbmFnZXIoKVxuZXhwb3J0IGRlZmF1bHQgb2JqXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgc3RvcmFnZU1hbmFnZXIsIHVwZGF0ZVByb2plY3RPcHRpb25zLCByZW5kZXJQcm9qZWN0cyB9IGZyb20gJy4vbWFuYWdlcidcbmltcG9ydCB7IGludGVyRmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlJyAvLyBOb3QgY2FsbGVkIGJ1dCBuZWNlc3NhcnkgdG8gbWFrZSBmdW5jdGlvbmluZ1xuaW1wb3J0IHsgdGFza0ZhY3RvcnksIHByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5J1xuXG5mdW5jdGlvbiBpbml0aWFsTG9hZCAoKSB7XG4gIC8vIFRlc3QgcGVyc2lzdGFuY2Ugc3RvcmFnZSBtYW5pcHVsYXRpb25cbiAgbG9jYWxTdG9yYWdlLmNsZWFyKClcblxuICAvLyBBZGQgZGVmYXVsdCBwcm9qZWN0IGFuZCBzYW1wbGUgdGFza3NcbiAgY29uc3Qgc2FtcGxlUHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdkZWZhdWx0JylcblxuICBjb25zdCBzYW1wbGVUYXNrMSA9IHRhc2tGYWN0b3J5KCd0aXRsZTEnLCAnZGVzY3JpcHRpb24xJywgJ2R1ZWRhdGUxJylcbiAgY29uc3Qgc2FtcGxlVGFzazIgPSB0YXNrRmFjdG9yeSgndGl0bGUyJywgJ2Rlc2NyaXB0aW9uMicsICdkdWVkYXRlMicpXG4gIGNvbnN0IHNhbXBsZVRhc2szID0gdGFza0ZhY3RvcnkoJ3RpdGxlMycsICdkZXNjcmlwdGlvbjMnLCAnZHVlZGF0ZTMnKVxuXG4gIHN0b3JhZ2VNYW5hZ2VyLmFkZEl0ZW0oc2FtcGxlUHJvamVjdClcbiAgc3RvcmFnZU1hbmFnZXIuYWRkSXRlbShzYW1wbGVUYXNrMSlcbiAgc3RvcmFnZU1hbmFnZXIuYWRkSXRlbShzYW1wbGVUYXNrMilcbiAgc3RvcmFnZU1hbmFnZXIuYWRkSXRlbShzYW1wbGVUYXNrMylcblxuICB1cGRhdGVQcm9qZWN0T3B0aW9ucygpXG4gIHJlbmRlclByb2plY3RzKClcbn1cblxuaW5pdGlhbExvYWQoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9