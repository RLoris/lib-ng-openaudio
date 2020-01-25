(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-openaudio/src/lib/ng-openaudio.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-openaudio/src/lib/ng-openaudio.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='openaudio' [style.backgroundColor]='this.backgroundColor'>\r\n    <div class=\"data-container\">\r\n        <img *ngIf='this.songData?.coverImgUrl' [style.borderColor]='this.accentColor' class='img-cover img-border' width=\"100\" height=\"100\" [src]='getCoverImg()'>\r\n        <div>\r\n            <h1 [style.color]='this.accentColor'>{{this.songData?.name}}</h1>\r\n            <br>\r\n            <h2 [style.color]='this.accentColor'>{{this.songData?.album}}</h2>\r\n            <br>\r\n            <h3 [style.color]='this.accentColor'>{{this.songData?.artist}}</h3>\r\n        </div>\r\n    </div>\r\n    <div class='visual-container' [style.height]='this.visualContainerHeight'>\r\n        <div *ngIf='isBarStyle()' [style.height]='this.visualContainerHeight' class=\"equalizer-container\" [style.alignItems]='getVisualStyle()' (click)='this.switchStyle()'>\r\n            <div *ngFor='let bar of this.equalizerBar' [style.backgroundImage]='getBackgroundStyle()' [style.transitionDuration.s]='bar.transitionDuration' [style.maxHeight]='this.visualContainerHeight' [style.height.px]='bar.height'></div>\r\n        </div>\r\n        <div *ngIf='isCoverStyle()' [style.height]='this.visualContainerHeight' class=\"equalizer-container\" (click)='this.switchStyle()'>\r\n            <img *ngIf='this.songData?.coverImgUrl' class='img-cover' style=\"height: 100%\" [src]='getCoverImg()'>\r\n        </div>\r\n        <div *ngIf='isCircularStyle()' [style.height]='this.visualContainerHeight' class=\"equalizer-center-bar equalizer-container\" (click)='this.switchStyle()'>\r\n            <div *ngFor='let bar of this.equalizerBar' class='equalizer-border-bar' [style.borderTopColor]='this.accentColor' [style.borderBottomColor]='this.accentColor' [style.transitionDuration.s]='bar.transitionDuration' [style.maxHeight]='this.visualContainerHeight' [style.height.px]='bar.height'>\r\n            </div>\r\n            <img *ngIf='this.songData?.coverImgUrl' class='img-foreground img-circular img-border rotate' [style.borderColor]='this.accentColor' width=\"200\" height=\"200\" [style.maxHeight]='this.visualContainerHeight' [style.maxWidth]='this.visualContainerHeight' [style.borderWidth.px]='this.circularStyle.height' [src]='getCoverImg()'>\r\n        </div>\r\n    </div>\r\n    <div [style.display]='getControlsStatus()' class=\"controls-container\">\r\n        <br>\r\n        <div class=\"controls-main\">\r\n            <button #controlsPlayPause [class]='this.btnPlayPauseClass' [style.borderLeftColor]='this.accentColor' (click)='this.switchState()'></button>\r\n        </div>\r\n        <br>\r\n        <div class=\"controls-volume-container\">\r\n            <span style='padding-right: 15px' [style.color]='this.accentColor'>-</span><div #controlsVolumeBar class=\"controls-volume-bar\" (click)='this.changeVolume($event)' [style.borderColor]='this.accentColor' >\r\n                <div class=\"controls-volume-bar-status\" [style.width.%]='this.volume' [style.backgroundColor]='this.accentColor'>  \r\n                </div>\r\n            </div><span style='padding-left: 15px' [style.color]='this.accentColor'>+</span>\r\n        </div>\r\n        <br>\r\n        <span class=\"controls-progress-current\" [style.color]='this.accentColor'>{{this.current * 1000 | date:\"mm:ss\"}}</span>\r\n        <span class=\"controls-progress-duration\" [style.color]='this.accentColor'>{{this.duration * 1000 | date:\"mm:ss\"}}</span>\r\n        <br><br>\r\n        <div class=\"controls-progress-container\">\r\n            <div #controlsProgressBar class=\"controls-progress-bar\" (click)='this.changeTime($event)' [style.borderColor]='this.accentColor' >\r\n                <div class=\"controls-progress-bar-status\" [style.width.%]='this.progress' [style.backgroundColor]='this.accentColor'>  \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div style=\"text-align:center\">\r\n    <h1>\r\n      Welcome to {{ title }}!\r\n    </h1>\r\n    <p>This project was made with &hearts; by RLoris</p>\r\n    <p>Use it, Share it, Improve it</p>\r\n  </div>\r\n<button style='width: 100%; height: 5vh; color: red; border: 2px solid red' (click)='playDemo()'>Click here to play DEMO track</button>\r\n<fieldset>\r\n    <legend>... or tune me the way you like it !</legend>\r\n    <label>Import song:</label>\r\n    <input type=\"file\" style=\"width: 100%;\"  (change)='this.loadAudioFile($event.target.files[0])' accept=\"audio/mp3\">\r\n    <br>\r\n    <label>Import cover image:</label>\r\n    <input type=\"file\" style=\"width: 100%;\"  (change)='this.loadImageFile($event.target.files[0])' accept=\"image/*\">\r\n    <br>\r\n    <label>Player visual style:</label>\r\n    <select style=\"width: 100%;\" [(ngModel)]='this.visualStyle'>\r\n        <option *ngFor='let style of this.getVisualStyles()'>{{style}}</option>\r\n    </select>\r\n    <br>\r\n    <label>Visual container height:</label>\r\n    <input type='text' style=\"width: 100%;\" [(ngModel)]='this.visualContainerHeight' placeholder=\"visual container height\" >\r\n    <br>\r\n    <label>Accent color:</label>\r\n    <input type=\"color\" style=\"width: 100%;\" [(ngModel)]='this.myAccentColor' [style.backgroundColor]='this.myAccentColor'>\r\n    <br>\r\n    <label>Background color:</label>\r\n    <input type=\"color\" style=\"width: 100%;\" [(ngModel)]='this.myBackgroundColor' [style.backgroundColor]='this.myBackgroundColor'>\r\n    <br>\r\n    <label>Gradient bar color:</label>\r\n    <input type=\"text\" style=\"width: 100%;\" [(ngModel)]='this.myGradient'>\r\n    <br>\r\n    <label>Bar amount:</label>\r\n    <input type=\"number\" style=\"width: 100%;\" [(ngModel)]='this.barAmount'>\r\n    <br>\r\n    <label>Song name:</label>\r\n    <input type=\"text\" style=\"width: 100%;\" [(ngModel)]='this.mySongData.name'>\r\n    <br>\r\n    <label>Artist name:</label>\r\n    <input type=\"text\" style=\"width: 100%;\" [(ngModel)]='this.mySongData.artist'>\r\n    <br>\r\n    <label>Album color:</label>\r\n    <input type=\"text\" style=\"width: 100%;\" [(ngModel)]='this.mySongData.album'>\r\n    <br>\r\n    <label>Cover image url:</label>\r\n    <input type=\"text\" style=\"width: 100%;\" [(ngModel)]='this.mySongData.coverImgUrl'>\r\n    <br>\r\n    <label>Allow controls:</label>\r\n    <input type=\"checkbox\" [checked]=\"this.playerControls\" (change)=\"changeControls($event.target.checked)\">\r\n    <br>\r\n    <label>Volume:</label>  \r\n    <input type=\"range\" style=\"width: 100%;\" max=\"100\" min=\"0\" [(ngModel)]='this.volume'>  \r\n    <br>\r\n    <label>Play</label>\r\n    <input type=\"checkbox\" [checked]=\"this.playerPlaying\" (change)=\"changePlaying($event.target.checked)\">\r\n    <br>\r\n    <label>Position in seconds:</label>\r\n    <input type=\"number\" style=\"width: 100%;\" [(ngModel)]='this.currentPosition'>\r\n</fieldset>\r\n<br>\r\n<ng-openaudio\r\n    [visualContainerHeight]='this.visualContainerHeight'\r\n    [accentColor]='this.myAccentColor'\r\n    [backgroundColor]='this.myBackgroundColor'\r\n    [barGradient]='this.myGradient'\r\n    [barAmount]='this.barAmount'\r\n    [songData]='this.mySongData'\r\n    [controls]='this.playerControls'\r\n    [visualStyle]='this.visualStyle'\r\n    [volume]='this.volume'\r\n    [playing]='this.playerPlaying'\r\n    [current]='this.currentPosition'\r\n    (statusEvent)='this.statusEvent($event)'\r\n    (errorsEvent)='this.errorEvent($event)'\r\n>\r\n</ng-openaudio>\r\n\r\n<br><br>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/ng-openaudio/src/lib/models/equalizer-bar.ts":
/*!***************************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/models/equalizer-bar.ts ***!
  \***************************************************************/
/*! exports provided: EqualizerBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualizerBar", function() { return EqualizerBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EqualizerBar {
    constructor(height) {
        this.height = 15;
        this.transitionDuration = 0;
        this.height = height;
    }
}


/***/ }),

/***/ "./projects/ng-openaudio/src/lib/models/equalizer-style.ts":
/*!*****************************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/models/equalizer-style.ts ***!
  \*****************************************************************/
/*! exports provided: EqualizerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualizerStyle", function() { return EqualizerStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EqualizerStyle;
(function (EqualizerStyle) {
    EqualizerStyle["BARS_DOWN"] = "BARS_DOWN";
    EqualizerStyle["BARS_UP"] = "BARS_UP";
    EqualizerStyle["BARS_MIDDLE"] = "BARS_MIDDLE";
    EqualizerStyle["CIRCULAR"] = "CIRCULAR";
    EqualizerStyle["COVER"] = "COVER";
})(EqualizerStyle || (EqualizerStyle = {}));


/***/ }),

/***/ "./projects/ng-openaudio/src/lib/models/song-data.ts":
/*!***********************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/models/song-data.ts ***!
  \***********************************************************/
/*! exports provided: SongData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongData", function() { return SongData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SongData {
    constructor() {
        this.name = '';
        this.artist = '';
        this.album = '';
        this.coverImgUrl = null;
        this.audioSource = null;
    }
}


/***/ }),

/***/ "./projects/ng-openaudio/src/lib/models/status-event.ts":
/*!**************************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/models/status-event.ts ***!
  \**************************************************************/
/*! exports provided: StatusEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusEvent", function() { return StatusEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class StatusEvent {
}


/***/ }),

/***/ "./projects/ng-openaudio/src/lib/ng-openaudio.component.css":
/*!******************************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/ng-openaudio.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.openaudio {\r\n}\r\n\r\n.data-container {\r\n  padding: 20px;\r\n  overflow: auto;\r\n}\r\n\r\n.visual-container {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.data-container h1,.data-container h2,.data-container h3 {\r\n  display: inline;\r\n  padding: 3px;\r\n}\r\n\r\n.img-cover {\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\n\r\n.img-circular {\r\n  border-radius: 50%;\r\n}\r\n\r\n.img-border {\r\n  border-style: solid;\r\n  border-width: 1%;\r\n}\r\n\r\n.equalizer-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /**background-image: url('https://www.n2odesigns.com/wp-content/uploads/Exiled-Recordings-Hope-Cover-FINAL-e1529268400767.jpg');**/\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.equalizer-container > div {\r\n  width: 100px;\r\n  margin: 1px;\r\n  text-align: center;\r\n  line-height: 75px;\r\n  font-size: 30px;\r\n}\r\n\r\n.equalizer-border-bar {\r\n  border-style: solid;\r\n  border-width: 5%;\r\n  border-left-color: transparent;\r\n  border-right-color: transparent;\r\n}\r\n\r\n.equalizer-center-bar {\r\n  align-items: center;\r\n}\r\n\r\n.controls-volume-container, .controls-progress-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.controls-progress-bar {\r\n  height: 10px;\r\n  border: 1px solid;\r\n  width: 98%;\r\n}\r\n\r\n.controls-volume-bar {\r\n  height: 10px;\r\n  border: 1px solid;\r\n  width: 50%;\r\n}\r\n\r\n.controls-progress-bar-status, .controls-volume-bar-status {\r\n  transition-duration: 1s;\r\n  height: 10px;\r\n}\r\n\r\n.controls-main {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n\r\n.controls-play-pause {\r\n  border: 0;\r\n  background: transparent;\r\n  box-sizing: border-box;\r\n  width: 0;\r\n  height: 50px;\r\n  border-color: transparent transparent transparent transparent;\r\n  transition: 200ms all ease;\r\n  cursor: pointer;\r\n  border-style: solid;\r\n  border-width: 25px 0 25px 50px;\r\n}\r\n\r\n.controls-play-pause.paused {\r\n  border-style: double;\r\n  border-width: 0px 0 0px 50px;\r\n}\r\n\r\n.controls-progress-duration {\r\n  float: right;\r\n  margin-right: 3%;\r\n}\r\n\r\n.controls-progress-current {\r\n  float: left;\r\n  margin-left: 3%;\r\n}\r\n\r\n.rotate{\r\n  -webkit-animation: rotate 5s linear infinite;\r\n          animation: rotate 5s linear infinite; \r\n}\r\n\r\n.img-foreground {\r\n  position: absolute;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  z-index: 999;\r\n}\r\n\r\n.img-border {\r\n  border-width: 2%;\r\n  border-style: solid;\r\n}\r\n\r\n@-webkit-keyframes rotate{\r\n  to{ transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes rotate{\r\n  to{ transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLW9wZW5hdWRpby9zcmMvbGliL25nLW9wZW5hdWRpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0lBQWtJO0VBQ2xJLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixZQUFZO0VBQ1osNkRBQTZEO0VBQzdELDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBb0M7VUFBcEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLElBQUkseUJBQXlCLEVBQUU7QUFDakM7O0FBRkE7RUFDRSxJQUFJLHlCQUF5QixFQUFFO0FBQ2pDIiwiZmlsZSI6InByb2plY3RzL25nLW9wZW5hdWRpby9zcmMvbGliL25nLW9wZW5hdWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vcGVuYXVkaW8ge1xyXG59XHJcblxyXG4uZGF0YS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi52aXN1YWwtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRhdGEtY29udGFpbmVyIGgxLC5kYXRhLWNvbnRhaW5lciBoMiwuZGF0YS1jb250YWluZXIgaDMge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn0gXHJcblxyXG4uaW1nLWNvdmVyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pbWctY2lyY3VsYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmltZy1ib3JkZXIge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxJTtcclxufVxyXG5cclxuLmVxdWFsaXplci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cubjJvZGVzaWducy5jb20vd3AtY29udGVudC91cGxvYWRzL0V4aWxlZC1SZWNvcmRpbmdzLUhvcGUtQ292ZXItRklOQUwtZTE1MjkyNjg0MDA3NjcuanBnJyk7KiovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZXF1YWxpemVyLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNzVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5lcXVhbGl6ZXItYm9yZGVyLWJhciB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDUlO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZXF1YWxpemVyLWNlbnRlci1iYXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250cm9scy12b2x1bWUtY29udGFpbmVyLCAuY29udHJvbHMtcHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udHJvbHMtcHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLmNvbnRyb2xzLXZvbHVtZS1iYXIge1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udHJvbHMtcHJvZ3Jlc3MtYmFyLXN0YXR1cywgLmNvbnRyb2xzLXZvbHVtZS1iYXItc3RhdHVzIHtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250cm9scy1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2xzLXBsYXktcGF1c2Uge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IDIwMG1zIGFsbCBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMjVweCAwIDI1cHggNTBweDtcclxufVxyXG5cclxuLmNvbnRyb2xzLXBsYXktcGF1c2UucGF1c2VkIHtcclxuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICBib3JkZXItd2lkdGg6IDBweCAwIDBweCA1MHB4O1xyXG59XHJcblxyXG4uY29udHJvbHMtcHJvZ3Jlc3MtZHVyYXRpb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcblxyXG4uY29udHJvbHMtcHJvZ3Jlc3MtY3VycmVudCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG4ucm90YXRle1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDVzIGxpbmVhciBpbmZpbml0ZTsgXHJcbn1cclxuXHJcbi5pbWctZm9yZWdyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmltZy1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogMiU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGV7XHJcbiAgdG97IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./projects/ng-openaudio/src/lib/ng-openaudio.component.ts":
/*!*****************************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/ng-openaudio.component.ts ***!
  \*****************************************************************/
/*! exports provided: NgOpenaudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOpenaudioComponent", function() { return NgOpenaudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_equalizer_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/equalizer-bar */ "./projects/ng-openaudio/src/lib/models/equalizer-bar.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/equalizer-style */ "./projects/ng-openaudio/src/lib/models/equalizer-style.ts");
/* harmony import */ var _models_status_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/status-event */ "./projects/ng-openaudio/src/lib/models/status-event.ts");






let NgOpenaudioComponent = class NgOpenaudioComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.errorEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusEvent = new _models_status_event__WEBPACK_IMPORTED_MODULE_5__["StatusEvent"]();
        this._controls = true;
        this._visualContainerHeight = '30vh';
        this._barAmount = 32;
        this._barGradient = 'linear-gradient(0deg, rgba(255, 255, 0, 0.719), rgba(255, 50, 0, 0.521), transparent)';
        this._backgroundColor = 'black';
        this._accentColor = '#FFA000';
        this.visualStyles = [];
        this.visualStyleIdx = 0;
        this.circularStyle = new _models_equalizer_bar__WEBPACK_IMPORTED_MODULE_2__["EqualizerBar"](1);
        this.equalizerBar = [];
        this.progress = 0;
        // total duration
        this.duration = 0;
        this._current = 0;
        this._isPlaying = false;
        this.btnPlayPauseClass = 'controls-play-pause';
        try {
            this.context = new AudioContext();
            this.audio = new Audio();
            this.source = this.context.createMediaElementSource(this.audio);
            this.analyser = this.context.createAnalyser();
            this.visualStyles = Object.keys(_models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__["EqualizerStyle"]).filter(key => isNaN(Number(_models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__["EqualizerStyle"][key])));
            this._visualStyle = this.visualStyles[this.visualStyleIdx];
            for (let index = 0; index < this._barAmount; index++) {
                this.equalizerBar.push(new _models_equalizer_bar__WEBPACK_IMPORTED_MODULE_2__["EqualizerBar"](1));
            }
        }
        catch (e) {
            this.errorEmitter.emit(e);
            console.log('Web Audio API is not supported in this browser');
        }
    }
    set controls(v) {
        this._controls = v;
        this.audio.controls = v;
    }
    get controls() {
        return this._controls;
    }
    set visualContainerHeight(v) {
        this._visualContainerHeight = v;
    }
    get visualContainerHeight() {
        return this._visualContainerHeight;
    }
    set songData(v) {
        this._songData = v;
        if (v.audioSource) {
            if (this._isPlaying) {
                this.audio.pause();
            }
            this.loadSound(v.audioSource);
        }
    }
    get songData() {
        return this._songData;
    }
    set barAmount(v) {
        if (v >= 0 && v <= 96) {
            this._barAmount = v;
            const e = [];
            for (let index = 0; index < v; index++) {
                e.push(new _models_equalizer_bar__WEBPACK_IMPORTED_MODULE_2__["EqualizerBar"](1));
            }
            this.equalizerBar = e;
        }
    }
    get barAmount() {
        return this._barAmount;
    }
    set barGradient(v) {
        this._barGradient = v;
    }
    get barGradient() {
        return this._barGradient;
    }
    set backgroundColor(v) {
        this._backgroundColor = v;
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set accentColor(v) {
        this._accentColor = v;
    }
    get accentColor() {
        return this._accentColor;
    }
    set visualStyle(v) {
        this.visualStyles.forEach((element, idx) => {
            if (v === element) {
                this.visualStyleIdx = idx;
                this._visualStyle = v;
            }
        });
    }
    get visualStyle() {
        return this._visualStyle;
    }
    set current(v) {
        if (this.audio.src) {
            if (v >= 0 && v <= this.audio.duration) {
                this.audio.currentTime = v;
            }
        }
    }
    get current() {
        return this._current;
    }
    set playing(v) {
        if (this.audio.src) {
            if (v === true) {
                this.audio.play();
            }
            else {
                this.audio.pause();
            }
        }
    }
    get playing() {
        return this._isPlaying;
    }
    set volume(v) {
        if (v >= 0 && v <= 100) {
            this.audio.volume = v / 100;
            // this._volume = v;
        }
    }
    get volume() {
        return this._volume;
    }
    ngOnInit() {
    }
    triggerStatusEvent(event) {
        this.statusEvent.event = event;
        this.statusEvent.duration = this.audio.duration;
        this.statusEvent.current = this.audio.currentTime;
        this.statusEvent.isPlaying = this._isPlaying;
        this.statusEvent.songData = this._songData;
        this.statusEvent.style = this.visualStyles[this.visualStyleIdx];
        this.statusEvent.volume = this.audio.volume * 100;
        this.statusEmitter.emit(this.statusEvent);
    }
    getVisualStyle() {
        switch (this._visualStyle) {
            case _models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__["EqualizerStyle"].BARS_UP:
                return 'flex-start';
                break;
            case _models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__["EqualizerStyle"].BARS_DOWN:
                return 'flex-end';
                break;
            case _models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__["EqualizerStyle"].BARS_MIDDLE:
                return 'center';
            default:
                return '';
                break;
        }
    }
    isCircularStyle() {
        if (this._visualStyle == "CIRCULAR") {
            return true;
        }
        else {
            return false;
        }
    }
    isCoverStyle() {
        if (this._visualStyle == "COVER") {
            return true;
        }
        else {
            return false;
        }
    }
    isBarStyle() {
        if (this._visualStyle == "BARS_DOWN"
            || this._visualStyle == "BARS_UP"
            || this._visualStyle == "BARS_MIDDLE") {
            return true;
        }
        else {
            return false;
        }
    }
    getCoverImg() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this._songData.coverImgUrl);
    }
    getBackgroundStyle() {
        return this.sanitizer.bypassSecurityTrustStyle(this._barGradient);
    }
    getControlsStatus() {
        if (this._controls === true) {
            return 'block';
        }
        return 'none';
    }
    switchStyle() {
        if (this._controls === true) {
            this.visualStyleIdx = (++this.visualStyleIdx) % this.visualStyles.length;
            this._visualStyle = this.visualStyles[this.visualStyleIdx];
        }
    }
    switchState() {
        if (this.audio.src && this._controls === true) {
            if (this._isPlaying) {
                this.audio.pause();
            }
            else {
                this.audio.play();
            }
        }
    }
    loadSound(src) {
        try {
            this.audio.src = src;
            this.audio.load();
            this.source.connect(this.analyser);
            this.analyser.connect(this.context.destination);
            this.analyser.fftSize = 512;
            this.frequency = new Uint8Array(this.analyser.frequencyBinCount);
            this._volume = this.audio.volume * 100;
            this.audio.onloadedmetadata = (d) => {
                this.duration = this.audio.duration;
                this.triggerStatusEvent('songLoaded');
            };
            this.audio.onvolumechange = (v) => {
                this._volume = this.audio.volume * 100;
                this.triggerStatusEvent('volumeChanged');
            };
            this.audio.onended = (v) => {
                this.audio.pause();
                this._current = 0;
                this.progress = 0;
                this.audio.load();
                this.triggerStatusEvent('songEnded');
            };
            this.audio.onpause = (v) => {
                this._isPlaying = !this._isPlaying;
                this.btnPlayPauseClass = 'controls-play-pause';
                clearInterval(this.intervalId);
                this.triggerStatusEvent('songPaused');
            };
            this.audio.onplay = (v) => {
                this._isPlaying = !this._isPlaying;
                this.btnPlayPauseClass = 'controls-play-pause paused';
                this.startAnimation();
                this.intervalId = setInterval(() => this.updateProgress(), 1000);
                this.triggerStatusEvent('songPlayed');
            };
            this.audio.onseeking = (v) => {
                this.updateProgress();
                this.triggerStatusEvent('songProgressUpdated');
            };
        }
        catch (e) {
            this.errorEmitter.emit(e);
        }
    }
    startAnimation() {
        if (this.audio.src) {
            try {
                this.analyser.getByteFrequencyData(this.frequency);
            }
            catch (e) {
                this.errorEmitter.emit(e);
            }
            if (this.isBarStyle() || this.isCircularStyle()) {
                let h = 1;
                for (var i = 0; i < this._barAmount; i++) {
                    h += this.frequency[i] % 10;
                    this.equalizerBar[i].height = this.frequency[i];
                    this.equalizerBar[i].transitionDuration = 0;
                }
                this.circularStyle.height = h % 25;
            }
            if (this._isPlaying === true) {
                requestAnimationFrame(() => this.startAnimation());
            }
            else {
                this.circularStyle.height = 1;
                this.equalizerBar.forEach((b) => { b.transitionDuration = 2; b.height = 1; });
            }
        }
    }
    updateProgress() {
        this.progress = (this.audio.currentTime / this.audio.duration) * 100;
        this._current = this.audio.currentTime;
    }
    changeTime(event) {
        if (this.audio.src && this._controls === true) {
            const e = this.controlsProgressBar.nativeElement;
            const selection = event.x - e.offsetLeft;
            //@ts-ignore
            let jumpTo = (selection / e.offsetWidth);
            if (jumpTo < 0) {
                jumpTo = 0;
            }
            else if (jumpTo > 100) {
                jumpTo = 100;
            }
            this.audio.currentTime = jumpTo * this.audio.duration;
        }
    }
    changeVolume(event) {
        if (this.audio.src && this._controls === true) {
            const e = this.controlsVolumeBar.nativeElement;
            const selection = event.x - e.offsetLeft;
            //@ts-ignore
            let volume = Math.round((selection / e.offsetWidth) * 100);
            if (volume < 0) {
                volume = 0;
            }
            else if (volume > 100) {
                volume = 100;
            }
            this.audio.volume = volume / 100;
        }
    }
};
NgOpenaudioComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('errorsEvent')
], NgOpenaudioComponent.prototype, "errorEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('statusEvent')
], NgOpenaudioComponent.prototype, "statusEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "controls", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "visualContainerHeight", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "songData", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "barAmount", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "barGradient", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "backgroundColor", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "accentColor", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "visualStyle", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "current", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "playing", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgOpenaudioComponent.prototype, "volume", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('controlsProgressBar', { static: true })
], NgOpenaudioComponent.prototype, "controlsProgressBar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('controlsVolumeBar', { static: true })
], NgOpenaudioComponent.prototype, "controlsVolumeBar", void 0);
NgOpenaudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng-openaudio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ng-openaudio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-openaudio/src/lib/ng-openaudio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ng-openaudio.component.css */ "./projects/ng-openaudio/src/lib/ng-openaudio.component.css")).default]
    })
], NgOpenaudioComponent);



/***/ }),

/***/ "./projects/ng-openaudio/src/lib/ng-openaudio.module.ts":
/*!**************************************************************!*\
  !*** ./projects/ng-openaudio/src/lib/ng-openaudio.module.ts ***!
  \**************************************************************/
/*! exports provided: NgOpenaudioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOpenaudioModule", function() { return NgOpenaudioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_openaudio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-openaudio.component */ "./projects/ng-openaudio/src/lib/ng-openaudio.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let NgOpenaudioModule = class NgOpenaudioModule {
};
NgOpenaudioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ng_openaudio_component__WEBPACK_IMPORTED_MODULE_2__["NgOpenaudioComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]
        ],
        exports: [_ng_openaudio_component__WEBPACK_IMPORTED_MODULE_2__["NgOpenaudioComponent"]]
    })
], NgOpenaudioModule);



/***/ }),

/***/ "./projects/ng-openaudio/src/public-api.ts":
/*!*************************************************!*\
  !*** ./projects/ng-openaudio/src/public-api.ts ***!
  \*************************************************/
/*! exports provided: NgOpenaudioComponent, NgOpenaudioModule, SongData, EqualizerStyle, StatusEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_ng_openaudio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-openaudio.component */ "./projects/ng-openaudio/src/lib/ng-openaudio.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgOpenaudioComponent", function() { return _lib_ng_openaudio_component__WEBPACK_IMPORTED_MODULE_1__["NgOpenaudioComponent"]; });

/* harmony import */ var _lib_ng_openaudio_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ng-openaudio.module */ "./projects/ng-openaudio/src/lib/ng-openaudio.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgOpenaudioModule", function() { return _lib_ng_openaudio_module__WEBPACK_IMPORTED_MODULE_2__["NgOpenaudioModule"]; });

/* harmony import */ var _lib_models_song_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/song-data */ "./projects/ng-openaudio/src/lib/models/song-data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SongData", function() { return _lib_models_song_data__WEBPACK_IMPORTED_MODULE_3__["SongData"]; });

/* harmony import */ var _lib_models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/equalizer-style */ "./projects/ng-openaudio/src/lib/models/equalizer-style.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqualizerStyle", function() { return _lib_models_equalizer_style__WEBPACK_IMPORTED_MODULE_4__["EqualizerStyle"]; });

/* harmony import */ var _lib_models_status_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models/status-event */ "./projects/ng-openaudio/src/lib/models/status-event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusEvent", function() { return _lib_models_status_event__WEBPACK_IMPORTED_MODULE_5__["StatusEvent"]; });

/*
 * Public API Surface of ng-openaudio
 */








/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ng-openaudio/src/public-api */ "./projects/ng-openaudio/src/public-api.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-openaudio';
        this.visualContainerHeight = '30vh';
        this.myAccentColor = 'red';
        this.myBackgroundColor = 'black';
        this.myGradient = 'linear-gradient(0deg, rgba(255, 255, 0, 0.719), rgba(255, 50, 0, 0.521), transparent)';
        this.barAmount = 32;
        this.playerControls = true;
        this.playerPlaying = false;
        this.volume = 50;
        this.currentPosition = 0;
        this.visualStyle = projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__["EqualizerStyle"].CIRCULAR;
        this.mySongData = new projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__["SongData"]();
    }
    loadAudioFile(event) {
        if (event.type == 'audio/mp3') {
            const s = new projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__["SongData"]();
            s.audioSource = URL.createObjectURL(event);
            s.name = event.name;
            // default image you want
            s.coverImgUrl = 'https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?cs=srgb&dl=black-and-gray-vinyl-record-2746823.jpg&fm=jpg';
            this.mySongData = s;
        }
    }
    loadImageFile(event) {
        const e = event.type.match('^image\/(gif|png|jpeg|jpg)$');
        if (e) {
            this.mySongData.coverImgUrl = URL.createObjectURL(event);
        }
    }
    changeControls(checked) {
        this.playerControls = checked;
    }
    changePlaying(checked) {
        this.playerPlaying = checked;
    }
    getVisualStyles() {
        return Object.keys(projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__["EqualizerStyle"]).filter(key => isNaN(Number(projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__["EqualizerStyle"][key])));
    }
    playDemo() {
        const s = new projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_2__["SongData"]();
        s.audioSource = 'assets/UnknownBrain_Superhero.mp3';
        s.name = 'Superhero';
        s.artist = 'Unknown Brain';
        s.album = 'No Copyright Song';
        s.coverImgUrl = 'assets/ncs_superhero_cover.jpg';
        this.mySongData = s;
    }
    statusEvent($event) {
        console.log($event);
    }
    errorEvent($event) {
        console.log($event);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ng-openaudio/src/public-api */ "./projects/ng-openaudio/src/public-api.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            projects_ng_openaudio_src_public_api__WEBPACK_IMPORTED_MODULE_5__["NgOpenaudioModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repo\lib-ng-openaudio\ng-openaudio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map