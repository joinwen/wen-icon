(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/vue-svg-component-runtime/lib-esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-svg-component-runtime/lib-esm/index.js ***!
  \*****************************************************************/
/*! exports provided: isElementNode, svgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementNode\", function() { return isElementNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"svgComponent\", function() { return svgComponent; });\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nvar isElementNode = function (node) {\n    return node.hasOwnProperty('tag');\n};\nfunction renderASTNode(h, ast) {\n    if (isElementNode(ast)) {\n        var children = [];\n        if (ast.children) {\n            children = ast.children.map(function (child) { return renderASTNode(h, child); });\n        }\n        return h(ast.tag, {\n            attrs: ast.attrsMap\n        }, children);\n    }\n    else {\n        return ast.text;\n    }\n}\nvar svgComponent = function (svg) {\n    var component = {\n        props: {\n            scale: {\n                type: [Number, Boolean],\n                default: 1,\n                required: false,\n            },\n            fill: {\n                type: String,\n                default: 'currentColor',\n                required: false,\n            }\n        },\n        inheritAttrs: false,\n        computed: {\n            dimension: function () {\n                if (!this.scale || !svg.attrsMap || !svg.attrsMap.viewBox) {\n                    return {};\n                }\n                var splits = svg.attrsMap.viewBox.split(\" \");\n                return {\n                    width: Math.floor(parseInt(splits[2]) * this.scale),\n                    height: Math.floor(parseInt(splits[3]) * this.scale),\n                };\n            }\n        },\n        render: function (h) {\n            var scale = (this.scale ? this.dimension : {});\n            var svgAttrs = __assign({}, svg.attrsMap, { 'aria-hidden': 'true', fill: this.fill }, scale, this.$attrs);\n            return h(svg.tag, {\n                attrs: svgAttrs,\n                on: this.$listeners\n            }, [\n                this.$slots.default\n            ].concat((svg.children || []).map(function (c) { return renderASTNode(h, c); })));\n        },\n    };\n    return component;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vue-svg-component-runtime/lib-esm/index.js?");

/***/ }),

/***/ "./src/assets/svg/academic-cap.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/academic-cap.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var runtime = __webpack_require__(/*! vue-svg-component-runtime */ \"./node_modules/vue-svg-component-runtime/lib-esm/index.js\")\n    module.exports = {\n      __esModule: true,\n      default: runtime.svgComponent({\n  \"tag\": \"svg\",\n  \"attrsMap\": {\n    \"width\": \"24\",\n    \"height\": \"24\",\n    \"viewBox\": \"0 0 24 24\",\n    \"fill\": \"none\",\n    \"xmlns\": \"http://www.w3.org/2000/svg\"\n  },\n  \"children\": [\n    {\n      \"tag\": \"path\",\n      \"attrsMap\": {\n        \"d\": \"M12 14L21 9L12 4L3 9L12 14Z\",\n        \"stroke\": \"black\"\n      }\n    },\n    {\n      \"tag\": \"path\",\n      \"attrsMap\": {\n        \"d\": \"M11.9996 14.0001L18.1596 10.5781C18.9701 12.6362 19.2001 14.8773 18.8246 17.0571C16.2882 17.3033 13.8968 18.3537 11.9996 20.0551C10.1026 18.3539 7.71167 17.3035 5.17559 17.0571C4.79979 14.8773 5.02982 12.6362 5.84059 10.5781L11.9996 14.0001Z\",\n        \"stroke\": \"black\"\n      }\n    },\n    {\n      \"tag\": \"path\",\n      \"attrsMap\": {\n        \"d\": \"M12 14L21 9L12 4L3 9L12 14ZM12 14L18.16 10.578C18.9705 12.6361 19.2005 14.8772 18.825 17.057C16.2886 17.3032 13.8972 18.3536 12 20.055C10.1031 18.3538 7.71208 17.3034 5.176 17.057C4.8002 14.8772 5.03023 12.636 5.841 10.578L12 14ZM8 20V12.5L12 10.278\",\n        \"stroke\": \"black\",\n        \"stroke-width\": \"2\",\n        \"stroke-linecap\": \"round\",\n        \"stroke-linejoin\": \"round\"\n      }\n    }\n  ]\n})\n    }\n  \n\n//# sourceURL=webpack:///./src/assets/svg/academic-cap.svg?");

/***/ })

}]);