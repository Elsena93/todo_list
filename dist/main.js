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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    display: grid;\n    grid-template-rows: 128px 1fr 128px 320px;\n    grid-template-areas: 'top' 'main' 'form1' 'form2';\n    justify-content: center;\n\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nh3 {\n    margin: 0;\n}\n\n\nheader {\n    grid-area: top;\n    \n}\n\nmain {\n    grid-area: main;\n}\n\nsub {\n    margin: 0;\n    padding: 0;\n}\n\n.project {\n    margin: 0;\n}\n\n.project-el, .task-el {\n    border: 2px;\n    border-style: solid;\n    border-color: red;\n}\n\n#project-form {\n    grid-area: form1;\n\n    width: 512px;\n\n    display: grid;\n}\n\n#task-form {\n    grid-area: form2;\n\n    width: 512px;\n\n    display: grid;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,yCAAyC;IACzC,iDAAiD;IACjD,uBAAuB;;IAEvB,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;;AAGA;IACI,cAAc;;AAElB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;;IAEZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;;IAEhB,YAAY;;IAEZ,aAAa;AACjB","sourcesContent":["\nbody {\n    display: grid;\n    grid-template-rows: 128px 1fr 128px 320px;\n    grid-template-areas: 'top' 'main' 'form1' 'form2';\n    justify-content: center;\n\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nh3 {\n    margin: 0;\n}\n\n\nheader {\n    grid-area: top;\n    \n}\n\nmain {\n    grid-area: main;\n}\n\nsub {\n    margin: 0;\n    padding: 0;\n}\n\n.project {\n    margin: 0;\n}\n\n.project-el, .task-el {\n    border: 2px;\n    border-style: solid;\n    border-color: red;\n}\n\n#project-form {\n    grid-area: form1;\n\n    width: 512px;\n\n    display: grid;\n}\n\n#task-form {\n    grid-area: form2;\n\n    width: 512px;\n\n    display: grid;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "projectElementFactory": () => (/* binding */ projectElementFactory),
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
 * @param {Task} param1 Task Object
 */
function taskElementFactory (param1) {
  const taskEl = document.createElement('div')
  taskEl.classList = 'task-el'
  taskEl.setAttribute('data-key', `${param1.id}`)
  const taskTitleEl = document.createElement('h3')
  const taskDateEl = document.createElement('div')
  const taskDescEl = document.createElement('div')

  const taskControl = document.createElement('div')
  taskControl.classList = 'control'
  const deleteButton = document.createElement('button')
  const clearButton = document.createElement('button')

  taskTitleEl.innerText = param1.title
  taskDateEl.innerText = param1.dueDate
  taskDescEl.innerText = param1.description
  deleteButton.innerText = 'Delete Task'
  deleteButton.classList = 'delete'
  deleteButton.setAttribute('data-key', `${param1.id}`)
  clearButton.innerText = 'UNCLEARED'
  clearButton.classList = 'clear'
  clearButton.setAttribute('data-key', `${param1.id}`)

  taskControl.appendChild(deleteButton)
  taskControl.appendChild(clearButton)
  taskEl.appendChild(taskTitleEl)
  taskEl.appendChild(taskDateEl)
  taskEl.appendChild(taskDescEl)
  taskEl.appendChild(taskControl)

  return taskEl
}

/**
 * @description turn Project Object into DOM element
 * @param {Project} param1 Project Object
 */
function projectElementFactory (param1) {
  const proEl = document.createElement('div')
  proEl.classList = 'project-el'
  proEl.setAttribute('data-key', `${param1.id}`)

  const title = document.createElement('h3')
  title.innerText = param1.name
  const sub = document.createElement('sub')
  sub.innerText = 'Project'

  const showTask = document.createElement('button')
  showTask.innerText = 'Show Tasks'
  showTask.classList = 'expand'

  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Delete Project'
  deleteButton.classList = 'delete'

  proEl.appendChild(sub)
  proEl.appendChild(title)
  proEl.appendChild(showTask)
  proEl.appendChild(deleteButton)

  return proEl
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
  tasksButton.addEventListener('click', _manager__WEBPACK_IMPORTED_MODULE_0__.expandTasks)

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
/* harmony export */   "expandTasks": () => (/* binding */ expandTasks),
/* harmony export */   "projectFormHandling": () => (/* binding */ projectFormHandling),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
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



// Coordinator to show projects or tasks
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
      expandTasks()
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
    const el = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.projectElementFactory)(obj)

    container.appendChild(el)
  })

  // Add delete event listener
  const deleteButtons = document.querySelectorAll('.project-el .delete')
  deleteButtons.forEach(element => {
    element.addEventListener('click', deleteProjectEl)
  })

  // Show all task
  const showButtons = document.querySelectorAll('.project-el .expand')
  showButtons.forEach(element => {
    element.addEventListener('click', expandTasks)
  })
}
// Coordinator to render all tasks from project
function expandTasks (e) {
  if (e.target.classList.contains('tasks')) {
    const list = storageManager.taskKeys()
    renderTasks(list)
  } else if (e.target.classList.contains('expand')) {
    const list = storageManager.taskKeys()
    const id = e.target.closest('.project-el').dataset.key
    const filtered = filterTaskOfProject(list, id)
    renderTasks(filtered)
  }
}

/**
 * @description filter tasks array assosiacited with a project
 * @param {Array} param1 List of all task keys
 * @param {string} param2 id of project
 */
function filterTaskOfProject (param1, param2) {
  const filtered = []
  param1.forEach(key => {
    const obj = storageManager.readItem(key)
    console.log(obj.project)
    const project = storageManager.readItem(param2)
    console.log(project.name)
    if (obj.project === storageManager.readItem(param2).name) {
      filtered.push(obj.id)
    }
  })
  return filtered
}
/**
 * @param {Array} keys list of rendered keys
 */
function renderTasks (keys) {
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  container.replaceChildren()
  container.classList = 'tasks-container'

  keys.forEach(key => {
    const obj = storageManager.readItem(key)
    const el = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.taskElementFactory)(obj)

    container.appendChild(el)
  })

  // Add delete event listener
  const deleteButtons = document.querySelectorAll('.task-el .control .delete')
  deleteButtons.forEach(element => {
    element.addEventListener('click', deleteTaskEl)
  })

  const clearButtons = document.querySelectorAll('.task-el .control .clear')
  clearButtons.forEach(element => {
    element.addEventListener('click', clearTask)
  })
}

function deleteTaskEl (e) {
  const parentEl = e.target.closest('.task-el')
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  container.removeChild(parentEl)

  storageManager.removeItem(parentEl.dataset.key)
}

function deleteProjectEl (e) {
  const parentEl = e.target.closest('.project-el')
  const container = _interface__WEBPACK_IMPORTED_MODULE_2__["default"].displayContainer
  container.removeChild(parentEl)

  storageManager.removeItem(parentEl.dataset.key)
  updateProjectOptions()
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


// eslint-disable-next-line no-unused-vars
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUc7Ozs7Ozs7VUN6RWxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDNEQ7QUFDaEY7QUFDdUM7QUFDZ0I7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix3REFBYzs7QUFFdEMsc0JBQXNCLHFEQUFXO0FBQ2pDLHNCQUFzQixxREFBVztBQUNqQyxzQkFBc0IscURBQVc7O0FBRWpDLEVBQUUsNERBQXNCO0FBQ3hCLEVBQUUsNERBQXNCO0FBQ3hCLEVBQUUsNERBQXNCO0FBQ3hCLEVBQUUsNERBQXNCOztBQUV4QixFQUFFLCtEQUFvQjtBQUN0QixFQUFFLHlEQUFjO0FBQ2hCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTI4cHggMWZyIDEyOHB4IDMyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndG9wJyAnbWFpbicgJ2Zvcm0xJyAnZm9ybTInO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB0b3A7XFxuICAgIFxcbn1cXG5cXG5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG5zdWIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1lbCwgLnRhc2stZWwge1xcbiAgICBib3JkZXI6IDJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0ge1xcbiAgICBncmlkLWFyZWE6IGZvcm0xO1xcblxcbiAgICB3aWR0aDogNTEycHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiN0YXNrLWZvcm0ge1xcbiAgICBncmlkLWFyZWE6IGZvcm0yO1xcblxcbiAgICB3aWR0aDogNTEycHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxpREFBaUQ7SUFDakQsdUJBQXVCOztJQUV2QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLFlBQVk7O0lBRVosYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsWUFBWTs7SUFFWixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyOHB4IDFmciAxMjhweCAzMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RvcCcgJ21haW4nICdmb3JtMScgJ2Zvcm0yJztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogdG9wO1xcbiAgICBcXG59XFxuXFxubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuc3ViIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3QtZWwsIC50YXNrLWVsIHtcXG4gICAgYm9yZGVyOiAycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gICAgZ3JpZC1hcmVhOiBmb3JtMTtcXG5cXG4gICAgd2lkdGg6IDUxMnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jdGFzay1mb3JtIHtcXG4gICAgZ3JpZC1hcmVhOiBmb3JtMjtcXG5cXG4gICAgd2lkdGg6IDUxMnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBJTkZPUk1BVElPTiBIT0xERVJcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuLyoqXG4gKiBAdHlwZWRlZiBUYXNrIFRhc2sgT2JqZWN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGlkIEdlbmVyYXRlIGJ5IGNoYXIgJ1QnICsgVVVJRDRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0aXRsZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRlc2NyaXB0aW9uXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZHVlRGF0ZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByaW9yaXR5XG4gKiBAcHJvcGVydHkge1N0cmluZ30gUHJvamVjdFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgUHJvamVjdCBQcm9qZWN0IE9iamVjdFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBpZCBHZW5lcmF0ZSBieSBjaGFyICdUJyArIFVVSUQ0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZVxuICovXG5cbi8qKlxuICogQGZ1bmN0aW9uIGZhY3Rvcnkgb2YgVGFzayBPYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSB0aXRsZSBvZiBUaGUgVGFza1xuICogQHBhcmFtIHtTdHJpbmd9IGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIG9mIFRoZSBUYXNrXG4gKiBAcGFyYW0ge1N0cmluZ30gZHVlRGF0ZSBkdWUgZGF0ZSBvZiBUaGUgVGFza1xuICogQHBhcmFtIHtTdHJpbmd9IHByaW9yaXR5IHByaW9yaXR5IG9mIFRoZSBUYXNrXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdCBUaGUgVGFzayBpcyBhIG1lbWJlciBvZiBwcm9qZWN0XG4gKiBAcmV0dXJucyB7VGFza30gVGFzayBPYmplY3RcbiAqL1xuZnVuY3Rpb24gdGFza0ZhY3RvcnkgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnbG93ZXN0JywgcHJvamVjdCA9ICdkZWZhdWx0Jykge1xuICBsZXQgX2lkID0gJ1QnICsgdXVpZHY0KClcbiAgbGV0IF90aXRsZSA9IHRpdGxlXG4gIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlXG4gIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eVxuICBsZXQgX3Byb2plY3QgPSBwcm9qZWN0XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaWQgKCkge1xuICAgICAgcmV0dXJuIF9pZFxuICAgIH0sXG4gICAgc2V0IGlkIChpZCkge1xuICAgICAgX2lkID0gaWRcbiAgICB9LFxuICAgIGdldCB0aXRsZSAoKSB7XG4gICAgICByZXR1cm4gX3RpdGxlXG4gICAgfSxcbiAgICBzZXQgdGl0bGUgKHRpdGxlKSB7XG4gICAgICBfdGl0bGUgPSB0aXRsZVxuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHtcbiAgICAgIHJldHVybiBfZGVzY3JpcHRpb25cbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgfSxcbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICByZXR1cm4gX2R1ZURhdGVcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlIChkdWVEYXRlKSB7XG4gICAgICBfZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9LFxuICAgIGdldCBwcmlvcml0eSAoKSB7XG4gICAgICByZXR1cm4gX3ByaW9yaXR5XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgICBfcHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIH0sXG4gICAgZ2V0IHByb2plY3QgKCkge1xuICAgICAgcmV0dXJuIF9wcm9qZWN0XG4gICAgfSxcbiAgICBzZXQgcHJvamVjdCAocHJvamVjdCkge1xuICAgICAgX3Byb2plY3QgPSBwcm9qZWN0XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIGZhY3Rvcnkgb2YgUHJvamVjdCBPYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgVGhlIFByb2plY3RcbiAqIEByZXR1cm5zIHtQcm9qZWN0fSBQcm9qZWN0IE9iamVjdFxuICovXG5mdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSAobmFtZSkge1xuICBsZXQgX2lkID0gJ1AnICsgdXVpZHY0KClcbiAgbGV0IF9uYW1lID0gbmFtZVxuICByZXR1cm4ge1xuICAgIGdldCBpZCAoKSB7XG4gICAgICByZXR1cm4gX2lkXG4gICAgfSxcbiAgICBzZXQgaWQgKGlkKSB7XG4gICAgICBfaWQgPSBpZFxuICAgIH0sXG4gICAgZ2V0IG5hbWUgKCkge1xuICAgICAgcmV0dXJuIF9uYW1lXG4gICAgfSxcbiAgICBzZXQgbmFtZSAobmFtZSkge1xuICAgICAgX25hbWUgPSBuYW1lXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHR1cm4gVGFzayBPYmplY3QgaW50byBET00gZWxlbWVudFxuICogQHBhcmFtIHtUYXNrfSBwYXJhbTEgVGFzayBPYmplY3RcbiAqL1xuZnVuY3Rpb24gdGFza0VsZW1lbnRGYWN0b3J5IChwYXJhbTEpIHtcbiAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFza0VsLmNsYXNzTGlzdCA9ICd0YXNrLWVsJ1xuICB0YXNrRWwuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke3BhcmFtMS5pZH1gKVxuICBjb25zdCB0YXNrVGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgY29uc3QgdGFza0RhdGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHRhc2tEZXNjRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGNvbnN0IHRhc2tDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFza0NvbnRyb2wuY2xhc3NMaXN0ID0gJ2NvbnRyb2wnXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICB0YXNrVGl0bGVFbC5pbm5lclRleHQgPSBwYXJhbTEudGl0bGVcbiAgdGFza0RhdGVFbC5pbm5lclRleHQgPSBwYXJhbTEuZHVlRGF0ZVxuICB0YXNrRGVzY0VsLmlubmVyVGV4dCA9IHBhcmFtMS5kZXNjcmlwdGlvblxuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBUYXNrJ1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gJ2RlbGV0ZSdcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHtwYXJhbTEuaWR9YClcbiAgY2xlYXJCdXR0b24uaW5uZXJUZXh0ID0gJ1VOQ0xFQVJFRCdcbiAgY2xlYXJCdXR0b24uY2xhc3NMaXN0ID0gJ2NsZWFyJ1xuICBjbGVhckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7cGFyYW0xLmlkfWApXG5cbiAgdGFza0NvbnRyb2wuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuICB0YXNrQ29udHJvbC5hcHBlbmRDaGlsZChjbGVhckJ1dHRvbilcbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tUaXRsZUVsKVxuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0RhdGVFbClcbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tEZXNjRWwpXG4gIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrQ29udHJvbClcblxuICByZXR1cm4gdGFza0VsXG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHR1cm4gUHJvamVjdCBPYmplY3QgaW50byBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcm9qZWN0fSBwYXJhbTEgUHJvamVjdCBPYmplY3RcbiAqL1xuZnVuY3Rpb24gcHJvamVjdEVsZW1lbnRGYWN0b3J5IChwYXJhbTEpIHtcbiAgY29uc3QgcHJvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9FbC5jbGFzc0xpc3QgPSAncHJvamVjdC1lbCdcbiAgcHJvRWwuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGAke3BhcmFtMS5pZH1gKVxuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbTEubmFtZVxuICBjb25zdCBzdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdWInKVxuICBzdWIuaW5uZXJUZXh0ID0gJ1Byb2plY3QnXG5cbiAgY29uc3Qgc2hvd1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBzaG93VGFzay5pbm5lclRleHQgPSAnU2hvdyBUYXNrcydcbiAgc2hvd1Rhc2suY2xhc3NMaXN0ID0gJ2V4cGFuZCdcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBQcm9qZWN0J1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0ID0gJ2RlbGV0ZSdcblxuICBwcm9FbC5hcHBlbmRDaGlsZChzdWIpXG4gIHByb0VsLmFwcGVuZENoaWxkKHRpdGxlKVxuICBwcm9FbC5hcHBlbmRDaGlsZChzaG93VGFzaylcbiAgcHJvRWwuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuXG4gIHJldHVybiBwcm9FbFxufVxuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHRhc2tFbGVtZW50RmFjdG9yeSwgcHJvamVjdEVsZW1lbnRGYWN0b3J5IH1cbiIsImltcG9ydCB7IHByb2plY3RGb3JtSGFuZGxpbmcsIHRhc2tGb3JtSGFuZGxpbmcsIHJlbmRlclByb2plY3RzLCBleHBhbmRUYXNrcyB9IGZyb20gJy4vbWFuYWdlcidcblxuZnVuY3Rpb24gaW50ZXJmYWNlRE9NQ29uc3RydWN0b3IgKCkge1xuICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51IC5wcm9qZWN0cycpXG4gIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyUHJvamVjdHMpXG5cbiAgY29uc3QgdGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudSAudGFza3MnKVxuICB0YXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFRhc2tzKVxuXG4gIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY29udGVudCcpXG5cbiAgLy8gRm9ybSBpbnRlcmZhY2VcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybSBidXR0b24nKVxuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZvcm1IYW5kbGluZylcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybSBidXR0b24nKVxuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0Zvcm1IYW5kbGluZylcblxuICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0gI3Byb2plY3QnKVxuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdCwgYWRkVGFzaywgcHJvamVjdE9wdGlvbnMsIGRpc3BsYXlDb250YWluZXJcbiAgfVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24gT2JqZWN0IHRvIG1hbmFnZSBpbnRlcmZhY2VcbiAqL1xuY29uc3QgaW50ZXJGYWNlID0gaW50ZXJmYWNlRE9NQ29uc3RydWN0b3IoKVxuZXhwb3J0IGRlZmF1bHQgaW50ZXJGYWNlXG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHRhc2tFbGVtZW50RmFjdG9yeSwgcHJvamVjdEVsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5J1xuaW1wb3J0IHByb2plY3RTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSdcbmltcG9ydCBpbnRlckZhY2UgZnJvbSAnLi9pbnRlcmZhY2UnXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuVGFza30gVGFza1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuUHJvamVjdH0gUHJvamVjdFxuICovXG5cbmZ1bmN0aW9uIHN0b3JhZ2VNYW5hZ2VyQ29uc3RydWN0b3IgKCkge1xuLy8gU1RSVUNUVVJFXG4gIGNvbnN0IG9iakxpc3QgPSBbXVxuICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gYWRkIGl0ZW0gdG8gc3RvcmFnZVxuICAgICAqIEBwYXJhbSB7VGFza3xQcm9qZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgY29uc3QgYWRkSXRlbSA9IChvYmopID0+IHtcbiAgICBvYmpMaXN0LnB1c2gob2JqLmlkKVxuICAgIHByb2plY3RTdG9yYWdlLmFkZEl0ZW0ob2JqKVxuICB9XG5cbiAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHJlbW92ZSBpdGVtIHRvIHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgVGFzayBvciBQcm9qZWN0IG9iamVjdCBpbnNpZGUgbG9jYWxTdHJvcmFnZVxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XG4gICAgb2JqTGlzdC5zcGxpY2Uob2JqTGlzdC5pbmRleE9mKGlkKSwgMSlcbiAgICBwcm9qZWN0U3RvcmFnZS5yZW1vdmVJdGVtKGlkKVxuICB9XG5cbiAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIFRhc2sgb3IgUHJvamVjdCBPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7VGFzayB8IFByb2plY3R9XG4gICAgICovXG4gIGNvbnN0IHJlYWRJdGVtID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RTdG9yYWdlLnJlYWRJdGVtKGlkKVxuICB9XG5cbiAgY29uc3QgcHJvamVjdEtleXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9iakxpc3QuZmlsdGVyKGtleSA9PiBrZXkuc3Vic3RyaW5nKDAsIDEpID09PSAnUCcpXG4gIH1cblxuICBjb25zdCB0YXNrS2V5cyA9ICgpID0+IHtcbiAgICByZXR1cm4gb2JqTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5zdWJzdHJpbmcoMCwgMSkgPT09ICdUJylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2JqTGlzdCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVhZEl0ZW0sIHByb2plY3RLZXlzLCB0YXNrS2V5c1xuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1hbmFnZXIgb2YgbG9jYWxTdG9yYWdlIEFORCBjdXJyZW50IG9iamVjdCBpZHMgaW4gYXJyYXlzXG4gKi9cbmNvbnN0IHN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXJDb25zdHJ1Y3RvcigpXG5leHBvcnQgeyBzdG9yYWdlTWFuYWdlciB9XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGhhbmRsZXIgZm9yIGEgY2xpY2sgb24gYWRkIHByb2plY3QgZm9ybSBidXR0b25cbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuXG4vLyBDT09SRElOQVRPUi9DT05UUk9MTEVSXG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtSGFuZGxpbmcgKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybSAjbmFtZScpXG4gIGlmIChwcm9qZWN0TmFtZS52YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gYWxlcnQoJ1BsZWFzZSBmaWxsIHByb2plY3QgbmFtZScpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3T2JqID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUudmFsdWUpXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJ1xuICAgIHN0b3JhZ2VNYW5hZ2VyLmFkZEl0ZW0obmV3T2JqKVxuICAgIHVwZGF0ZVByb2plY3RPcHRpb25zKClcbiAgICB1cGRhdGVEaXNwbGF5RnJvbUZvcm0oJ3Byb2plY3QnKVxuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGhhbmRsZXIgZm9yIGEgY2xpY2sgb24gYWRkIHRhc2sgZm9ybSBidXR0b25cbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuZnVuY3Rpb24gdGFza0Zvcm1IYW5kbGluZyAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNuYW1lJylcbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNkZXNjcmlwdGlvbicpXG4gIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNkdWVEYXRlJylcbiAgY29uc3QgdGFza1ByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtICNwcmlvcml0eScpXG4gIGNvbnN0IHRhc2tQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybSAjcHJvamVjdCcpXG4gIGlmICh0YXNrTmFtZS52YWx1ZSA9PT0gJycgfHwgdGFza0Rlc2MudmFsdWUgPT09ICcnIHx8IHRhc2tEdWUudmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGFsZXJ0KCdGaWxsIHRoZSBuZWNlc3NhcnkgZm9ybScpXG4gIH1cbiAgbGV0IHByb2pWYWwgPSAnZGVmYXVsdCdcbiAgaWYgKHRhc2tQcm9qLnZhbHVlICE9PSAnJykge1xuICAgIHByb2pWYWwgPSB0YXNrUHJvai52YWx1ZVxuICB9XG4gIGNvbnN0IG5ld09iaiA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSxcbiAgICB0YXNrRHVlLnZhbHVlLCB0YXNrUHJpby52YWx1ZSwgcHJvalZhbClcbiAgc3RvcmFnZU1hbmFnZXIuYWRkSXRlbShuZXdPYmopXG4gIHRhc2tOYW1lLnZhbHVlID0gdGFza0Rlc2MudmFsdWUgPSB0YXNrRHVlLnZhbHVlID0gdGFza1Byb2oudmFsdWUgPSAnJ1xuICB0YXNrUHJpby52YWx1ZSA9ICdsb3dlc3QnXG5cbiAgdXBkYXRlRGlzcGxheUZyb21Gb3JtKCd0YXNrJylcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVXBkYXRlIHByb2plY3Qgc2VsZWN0IGRyb3AtZG93biBpbiBpbnRlcmZhY2UsIGNhbGxlZCBlYWNoIHRpbWUgbmV3IHByb2plY3QgYWRkZWQgdG8gc3RvcmFnZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0T3B0aW9ucyAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGludGVyRmFjZS5wcm9qZWN0T3B0aW9uc1xuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgZm9yIChjb25zdCBpIGluIHN0b3JhZ2VNYW5hZ2VyLm9iakxpc3QpIHtcbiAgICBjb25zdCBqID0gc3RvcmFnZU1hbmFnZXIub2JqTGlzdFtpXVxuICAgIGlmIChqLnN1YnN0cmluZygwLCAxKSA9PT0gJ1AnKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgY29uc3QgeCA9IHN0b3JhZ2VNYW5hZ2VyLnJlYWRJdGVtKGopXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3gubmFtZX1gKVxuICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHgubmFtZVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvamVjdEZvcm1IYW5kbGluZywgdGFza0Zvcm1IYW5kbGluZywgdXBkYXRlUHJvamVjdE9wdGlvbnMgfVxuXG4vLyBDb29yZGluYXRvciB0byBzaG93IHByb2plY3RzIG9yIHRhc2tzXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5RnJvbUZvcm0gKG9iaikge1xuICBjb25zdCBjb250YWluZXIgPSBpbnRlckZhY2UuZGlzcGxheUNvbnRhaW5lclxuICBpZiAob2JqID09PSAncHJvamVjdCcpIHtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHMtY29udGFpbmVyJykpIHtcbiAgICAgIHJlbmRlclByb2plY3RzKClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGVmdCBlbXB0eVxuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogPT09ICd0YXNrJykge1xuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrcy1jb250YWluZXInKSkge1xuICAgICAgZXhwYW5kVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMZWZ0IGVtcHR5XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIExlZnQgZW1wdHlcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyAoZSkge1xuICBjb25zdCBsaXN0ID0gc3RvcmFnZU1hbmFnZXIucHJvamVjdEtleXMoKVxuXG4gIC8vIE5lZWQgdG8gYmUgb3V0c2lkZSBmdW5jdGlvblxuICBjb25zdCBjb250YWluZXIgPSBpbnRlckZhY2UuZGlzcGxheUNvbnRhaW5lclxuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9ICdwcm9qZWN0cy1jb250YWluZXInXG5cbiAgbGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3Qgb2JqID0gc3RvcmFnZU1hbmFnZXIucmVhZEl0ZW0oa2V5KVxuICAgIGNvbnN0IGVsID0gcHJvamVjdEVsZW1lbnRGYWN0b3J5KG9iailcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbClcbiAgfSlcblxuICAvLyBBZGQgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1lbCAuZGVsZXRlJylcbiAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0RWwpXG4gIH0pXG5cbiAgLy8gU2hvdyBhbGwgdGFza1xuICBjb25zdCBzaG93QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWVsIC5leHBhbmQnKVxuICBzaG93QnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRUYXNrcylcbiAgfSlcbn1cbi8vIENvb3JkaW5hdG9yIHRvIHJlbmRlciBhbGwgdGFza3MgZnJvbSBwcm9qZWN0XG5mdW5jdGlvbiBleHBhbmRUYXNrcyAoZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrcycpKSB7XG4gICAgY29uc3QgbGlzdCA9IHN0b3JhZ2VNYW5hZ2VyLnRhc2tLZXlzKClcbiAgICByZW5kZXJUYXNrcyhsaXN0KVxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICBjb25zdCBsaXN0ID0gc3RvcmFnZU1hbmFnZXIudGFza0tleXMoKVxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtZWwnKS5kYXRhc2V0LmtleVxuICAgIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyVGFza09mUHJvamVjdChsaXN0LCBpZClcbiAgICByZW5kZXJUYXNrcyhmaWx0ZXJlZClcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBmaWx0ZXIgdGFza3MgYXJyYXkgYXNzb3NpYWNpdGVkIHdpdGggYSBwcm9qZWN0XG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbTEgTGlzdCBvZiBhbGwgdGFzayBrZXlzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0yIGlkIG9mIHByb2plY3RcbiAqL1xuZnVuY3Rpb24gZmlsdGVyVGFza09mUHJvamVjdCAocGFyYW0xLCBwYXJhbTIpIHtcbiAgY29uc3QgZmlsdGVyZWQgPSBbXVxuICBwYXJhbTEuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHN0b3JhZ2VNYW5hZ2VyLnJlYWRJdGVtKGtleSlcbiAgICBjb25zb2xlLmxvZyhvYmoucHJvamVjdClcbiAgICBjb25zdCBwcm9qZWN0ID0gc3RvcmFnZU1hbmFnZXIucmVhZEl0ZW0ocGFyYW0yKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3QubmFtZSlcbiAgICBpZiAob2JqLnByb2plY3QgPT09IHN0b3JhZ2VNYW5hZ2VyLnJlYWRJdGVtKHBhcmFtMikubmFtZSkge1xuICAgICAgZmlsdGVyZWQucHVzaChvYmouaWQpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheX0ga2V5cyBsaXN0IG9mIHJlbmRlcmVkIGtleXNcbiAqL1xuZnVuY3Rpb24gcmVuZGVyVGFza3MgKGtleXMpIHtcbiAgY29uc3QgY29udGFpbmVyID0gaW50ZXJGYWNlLmRpc3BsYXlDb250YWluZXJcbiAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSAndGFza3MtY29udGFpbmVyJ1xuXG4gIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHN0b3JhZ2VNYW5hZ2VyLnJlYWRJdGVtKGtleSlcbiAgICBjb25zdCBlbCA9IHRhc2tFbGVtZW50RmFjdG9yeShvYmopXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpXG4gIH0pXG5cbiAgLy8gQWRkIGRlbGV0ZSBldmVudCBsaXN0ZW5lclxuICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWwgLmNvbnRyb2wgLmRlbGV0ZScpXG4gIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFza0VsKVxuICB9KVxuXG4gIGNvbnN0IGNsZWFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVsIC5jb250cm9sIC5jbGVhcicpXG4gIGNsZWFyQnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclRhc2spXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tFbCAoZSkge1xuICBjb25zdCBwYXJlbnRFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWVsJylcbiAgY29uc3QgY29udGFpbmVyID0gaW50ZXJGYWNlLmRpc3BsYXlDb250YWluZXJcbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHBhcmVudEVsKVxuXG4gIHN0b3JhZ2VNYW5hZ2VyLnJlbW92ZUl0ZW0ocGFyZW50RWwuZGF0YXNldC5rZXkpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RFbCAoZSkge1xuICBjb25zdCBwYXJlbnRFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWVsJylcbiAgY29uc3QgY29udGFpbmVyID0gaW50ZXJGYWNlLmRpc3BsYXlDb250YWluZXJcbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHBhcmVudEVsKVxuXG4gIHN0b3JhZ2VNYW5hZ2VyLnJlbW92ZUl0ZW0ocGFyZW50RWwuZGF0YXNldC5rZXkpXG4gIHVwZGF0ZVByb2plY3RPcHRpb25zKClcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrIChlKSB7XG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgZXhwYW5kVGFza3MgfVxuIiwiLy8gSU5URVJGQUNFIFRPIExPQ0FMU1RPUkFHRVxuXG5pbXBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuVGFza30gVGFza1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mYWN0b3J5JykuUHJvamVjdH0gUHJvamVjdFxuICovXG5cbmZ1bmN0aW9uIHN0b3JhZ2VNYW5hZ2VyICgpIHtcbiAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIEtleSB0byBTdHJpbmdpZmllZCBPYmplY3Qgb24gbG9jYWxTdG9yYWdlXG4gICAgICogQHJldHVybnMge1Rhc2t8UHJvamVjdH0gVGFzayBPYmplY3Qgb3IgUHJvamVjdCBPYmplY3RcbiAgICAgKi9cbiAgY29uc3QgcmVhZEl0ZW0gPSAoaWQpID0+IHtcbiAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIDEpID09PSAnVCcpIHtcbiAgICAgIHJldHVybiByZWFkVGFzayhpZClcbiAgICB9IGVsc2UgaWYgKGlkLnN1YnN0cmluZygwLCAxKSA9PT0gJ1AnKSB7XG4gICAgICByZXR1cm4gcmVhZFByb2plY3QoaWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExlZnQgZW1wdHlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgS2V5IHRvIFN0cmluZ2lmaWVkIFRhc2sgT2JqZWN0IG9uIGxvY2FsU3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtUYXNrfSBUYXNrIE9iamVjdFxuICAgICAqL1xuICBjb25zdCByZWFkVGFzayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkpXG4gICAgY29uc3Qgb2JqID0gdGFza0ZhY3Rvcnkoc3RvcmUudGl0bGUsIHN0b3JlLmRlc2NyaXB0aW9uLFxuICAgICAgc3RvcmUuZHVlRGF0ZSwgc3RvcmUucHJpb3JpdHksIHN0b3JlLnByb2plY3QpXG4gICAgb2JqLmlkID0gaWRcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgS2V5IHRvIFN0cmluZ2lmaWVkIFByb2plY3QgT2JqZWN0IG9uIGxvY2FsU3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtQcm9qZWN0fSAgUHJvamVjdCBPYmplY3RcbiAgICAgKi9cbiAgY29uc3QgcmVhZFByb2plY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpKVxuICAgIGNvbnN0IG9iaiA9IHByb2plY3RGYWN0b3J5KHN0b3JlLm5hbWUpXG4gICAgb2JqLmlkID0gaWRcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2t8UHJvamVjdH0gb2JqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gIGNvbnN0IGFkZEl0ZW0gPSAob2JqKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqLmlkLCBzdG9yZSlcbiAgfVxuXG4gIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiBUYXNrL1Byb2plY3QgT2JqZWN0IGluc2lkZSBsb2NhbFN0b3JhZ2VcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWFkSXRlbSwgYWRkSXRlbSwgcmVtb3ZlSXRlbVxuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGludGVyZmFjZSBmb3IgSS9PIG9wZXJhdGlvbiB0byBsb2NhbFN0b3JhZ2VcbiAqL1xuY29uc3Qgb2JqID0gc3RvcmFnZU1hbmFnZXIoKVxuZXhwb3J0IGRlZmF1bHQgb2JqXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgc3RvcmFnZU1hbmFnZXIsIHVwZGF0ZVByb2plY3RPcHRpb25zLCByZW5kZXJQcm9qZWN0cyB9IGZyb20gJy4vbWFuYWdlcidcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgaW50ZXJGYWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnIC8vIE5vdCBjYWxsZWQgYnV0IG5lY2Vzc2FyeSB0byBtYWtlIGZ1bmN0aW9uaW5nXG5pbXBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknXG5cbmZ1bmN0aW9uIGluaXRpYWxMb2FkICgpIHtcbiAgLy8gVGVzdCBwZXJzaXN0YW5jZSBzdG9yYWdlIG1hbmlwdWxhdGlvblxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuXG4gIC8vIEFkZCBkZWZhdWx0IHByb2plY3QgYW5kIHNhbXBsZSB0YXNrc1xuICBjb25zdCBzYW1wbGVQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ2RlZmF1bHQnKVxuXG4gIGNvbnN0IHNhbXBsZVRhc2sxID0gdGFza0ZhY3RvcnkoJ3RpdGxlMScsICdkZXNjcmlwdGlvbjEnLCAnZHVlZGF0ZTEnKVxuICBjb25zdCBzYW1wbGVUYXNrMiA9IHRhc2tGYWN0b3J5KCd0aXRsZTInLCAnZGVzY3JpcHRpb24yJywgJ2R1ZWRhdGUyJylcbiAgY29uc3Qgc2FtcGxlVGFzazMgPSB0YXNrRmFjdG9yeSgndGl0bGUzJywgJ2Rlc2NyaXB0aW9uMycsICdkdWVkYXRlMycpXG5cbiAgc3RvcmFnZU1hbmFnZXIuYWRkSXRlbShzYW1wbGVQcm9qZWN0KVxuICBzdG9yYWdlTWFuYWdlci5hZGRJdGVtKHNhbXBsZVRhc2sxKVxuICBzdG9yYWdlTWFuYWdlci5hZGRJdGVtKHNhbXBsZVRhc2syKVxuICBzdG9yYWdlTWFuYWdlci5hZGRJdGVtKHNhbXBsZVRhc2szKVxuXG4gIHVwZGF0ZVByb2plY3RPcHRpb25zKClcbiAgcmVuZGVyUHJvamVjdHMoKVxufVxuXG5pbml0aWFsTG9hZCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=