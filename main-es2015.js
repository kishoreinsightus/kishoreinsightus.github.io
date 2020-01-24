(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container bg-login  h-100\">\r\n  <div class=\"card card-login col-xxl-4\">\r\n    <div class=\"logo text-center\">\r\n      <img src=\"../../../assets/img/logo-ed.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"card-body p-5\">\r\n      <form class=\"form-signin\">\r\n        <div class=\"form-group mb-3\">\r\n          <input type=\"text\" id=\"userID\" #userid class=\"form-control input-control\" placeholder=\"Email or User ID\"\r\n            required />\r\n          <div class=\"input-symbol input-symbol-mail\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group mb-3\">\r\n          <input type=\"password\" id=\"inputPassword\" #password class=\"form-control input-control\" placeholder=\"Password\"\r\n            required />\r\n          <div class=\"input-symbol input-symbol-lock\">\r\n            <i class=\"fa fa-lock\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-end align-self-center mb-2 w-100\">\r\n          <button class=\"btn btn-success text-uppercase btn-login w-100\" (click)=\"login($event)\" type=\"submit\">\r\n            Log in\r\n          </button>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between align-self-center mb-3 px-3\">\r\n          <div class=\"checkbox\">\r\n            <input #remember type=\"checkbox\" id=\"passwordRemember\" />\r\n            <label class=\"pl-5\" for=\"passwordRemember\">Remember password</label>\r\n          </div>\r\n          <div>\r\n            <a routerLink=\"/reset/request\" class=\"text-dark\">Forgot password</a>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/password-reset/finish/password-reset-finish.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/password-reset/finish/password-reset-finish.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\" style=\"margin: 10rem 0;\">\r\n            <div class=\"card card-signin\">\r\n                <div class=\"card-body\">\r\n\r\n                    <div *ngIf=\"!keyMissing\">\r\n                        <form *ngIf=\"!success\" class=\"form-forgotpassword\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\"\r\n                            #passwordForm=\"ngForm\">\r\n\r\n                            <h5 class=\"card-title text-center\" style=\"padding: 15px;\r\n                    background: #1497E2;\r\n                    color: white !important;\">\r\n                                CognitoEd Choose a new password\r\n                            </h5>\r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"keyMissing\">\r\n                                <strong>The password reset key is missing.</strong>\r\n                            </div>\r\n\r\n                            <!-- <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\">\r\n                                <p>Choose a new password</p>\r\n                            </div> -->\r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n                                <p>Your password couldn't be reset. Remember a password request is only valid for 24\r\n                                    hours.</p>\r\n                            </div>\r\n\r\n                            <p class=\"alert alert-success\" *ngIf=\"success\">\r\n                                <span><strong>Your password has been reset.</strong> Please </span>\r\n                                <a class=\"alert-link\" (click)=\"login()\">sign in</a>.\r\n                            </p>\r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\">\r\n                                The password and its confirmation do not match!\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-control-label\" for=\"password\">New password</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n                                    #passwordInput=\"ngModel\" placeholder=\"New password\" [(ngModel)]=\"resetAccount.password\"\r\n                                    minlength=4 maxlength=50 required>\r\n                                <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\">\r\n                                    <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\">\r\n                                        Your password is required.\r\n                                    </small>\r\n                                    <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\">\r\n                                        Your password is required to be at least 4 characters.\r\n                                    </small>\r\n                                    <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\">\r\n                                        Your password cannot be longer than 50 characters.\r\n                                    </small>\r\n                                </div>\r\n                                <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label>\r\n                                <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\"\r\n                                    #confirmPasswordInput=\"ngModel\" placeholder=\"Confirm the new password\" [(ngModel)]=\"confirmPassword\"\r\n                                    minlength=4 maxlength=50 required>\r\n                                <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\">\r\n                                    <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\">\r\n                                        Your password confirmation is required.\r\n                                    </small>\r\n                                    <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\">\r\n                                        Your password confirmation is required to be at least 4 characters.\r\n                                    </small>\r\n                                    <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\">\r\n                                        Your password confirmation cannot be longer than 50 characters.\r\n                                    </small>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\">Reset\r\n                                Password</button>\r\n                        </form>\r\n\r\n                        <p *ngIf=\"success\" class=\"success-message\">Your password has been changed successfully. Click to go to <a routerLink=\"/account/login\">login</a></p>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/password-reset/init/password-reset-init.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/password-reset/init/password-reset-init.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\" style=\"margin: 10rem 0;\">\r\n            <div class=\"card card-signin\">\r\n                <div class=\"card-body\">\r\n\r\n                    <form class=\"form-forgotpassword\">\r\n                        <h5 class=\"card-title text-center\" style=\"padding: 15px;\r\n              background: #1497E2;\r\n              color: white !important;\">\r\n                            CognitoEd Reset Password\r\n                        </h5>\r\n\r\n                        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success === 'OK'\" >\r\n                            <p>Check your emails for details on how to reset your password.</p>\r\n                        </div>\r\n\r\n                        <div class=\"form-group reset-password-text\">\r\n                            <p>Enter your email to reset your password</p>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" id=\"email\" (change)=\"resetAccount.email = email.value\" #email class=\"form-control\"\r\n                                placeholder=\"Email Address\" required autofocus />\r\n                        </div>\r\n\r\n                        <div class=\"custom-control custom-checkbox mb-3\">\r\n\r\n                            <div class=\"float-right\">\r\n                                <a href=\"#\" routerLink=\"/account/login\">Login with your account</a>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <button class=\"btn btn-sm btn-success btn-block text-uppercase\" (click)=\"requestReset()\" type=\"submit\">\r\n                            Send Email\r\n                        </button>                     \r\n\r\n\r\n\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"isAuthenticated()\">\r\n  <div class=\"light-sidebar\" *ngSwitchCase=\"true\">\r\n    <div class=\"app\">\r\n      <div class=\"app-wrap\">\r\n        <!-- begin app-header -->\r\n        <header class=\"app-header top-bar\">\r\n          <!-- begin navbar -->\r\n          <nav class=\"navbar navbar-expand-md\">\r\n            <!-- begin navbar-header -->\r\n            <div class=\"navbar-header d-flex align-items-center\">\r\n              <a href=\"javascript:void:(0)\" class=\"mobile-toggle\"><i class=\"ti ti-align-right\"></i></a>\r\n              <a class=\"navbar-brand\">\r\n                <img src=\"assets/img/logo-white.png\" class=\"img-fluid\" alt=\"logo\" />\r\n              </a>\r\n            </div>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <i class=\"ti ti-align-left\"></i>\r\n            </button>\r\n            <!-- end navbar-header -->\r\n            <!-- begin navigation -->\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n              <div class=\"navigation d-flex\">\r\n                <ul class=\"navbar-nav nav-left\">\r\n                  <li class=\"nav-item\">\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link sidebar-toggle\">\r\n                      <i class=\"ti ti-align-right text-white\"></i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item full-screen d-none d-lg-block\" id=\"btnFullscreen\">\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link expand\">\r\n                      <i class=\"icon-size-fullscreen\"></i>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n                <ul class=\"navbar-nav nav-right ml-auto\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"modal\" data-target=\"#toDoList\">\r\n                      <i class=\"fe fe-edit \"></i>\r\n                      <span class=\"notify\">\r\n                        <span class=\"blink\"></span>\r\n                        <span class=\"dot\"></span>\r\n                      </span>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item dropdown user-profile\">\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link dropdown-toggle \" id=\"navbarDropdown4\" role=\"button\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <img src=\"assets/img/avtar/02.jpg\" alt=\"avtar-img\" />\r\n                      <span class=\"bg-success user-status\"></span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu animated fadeIn\" aria-labelledby=\"navbarDropdown\">\r\n                      <div class=\"bg-warning px-4 py-3\">\r\n                        <div class=\"d-flex align-items-center justify-content-between\">\r\n                          <div class=\"mr-1\">\r\n                            <h4 class=\"text-white mb-0\">Naveen doulaghar</h4>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"p-4\">\r\n                        <a class=\"dropdown-item d-flex nav-link\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-user pr-2 text-success\"></i> Profile\r\n                        </a>\r\n                        <a class=\"dropdown-item d-flex nav-link\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-unlock-alt pr-2 text-primary\"></i> Change password\r\n                        </a>\r\n                        <a class=\"dropdown-item d-flex nav-link\" (click)=\"logout()\">\r\n                          <i class=\"fa fa-sign-out pr-2 text-info\"></i> Logout\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!-- end navigation -->\r\n          </nav>\r\n          <!-- end navbar -->\r\n        </header>\r\n        <!-- end app-header -->\r\n        <!-- begin app-container -->\r\n        <div class=\"app-container\">\r\n          <!-- begin app-navbar -->\r\n          <aside class=\"app-navbar\">\r\n            <!-- begin sidebar-nav -->\r\n            <div class=\"sidebar-nav scrollbar scroll_light\">\r\n              <ul class=\"metismenu \" id=\"sidebarNav\">\r\n                <li class=\"sidebar-banner p-4 text-center d-block\">\r\n                  <img src=\"assets/img/client/logo.png\" class=\"mCS_img_loaded\" />\r\n                </li>\r\n                <li *ngFor=\"let item of adminItems\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"onRouteNavigation(item)\"\r\n                    [ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false,'expaned':expanded ,'has-arrow':item.child === true}\"\r\n                    aria-expanded=\"false\" [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\">\r\n                    <!-- Below code is useful for teacher ,showing icons in menu items  -->\r\n                    <!-- <i class=\"nav-icon  {{item.iconName}}\"></i> -->\r\n                    <span class=\"nav-title\">\r\n                      {{item.displayName}}\r\n                    </span>\r\n                  </a>\r\n                  <ul aria-expanded=\"false\" *ngIf=\"item.child == true\">\r\n                    <li *ngFor=\"let subItem of item['children']\">\r\n                      <a routerLink=\"{{subItem.route}}\" routerLinkActive=\"active\"\r\n                        [routerLinkActiveOptions]=\"{exact: true}\" aria-expanded=\"false\">\r\n                        <span class=\"nav-title\">{{subItem.displayName}}</span>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <!-- end sidebar-nav -->\r\n          </aside>\r\n          <!-- end app-navbar -->\r\n          <!-- begin app-main -->\r\n          <div class=\"app-main\" id=\"main\">\r\n            <!-- begin container-fluid -->\r\n            <div class=\"container-fluid\">\r\n              <!--Breadcump begin row -->\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 mb-3\">\r\n                  <div class=\"d-block d-sm-flex flex-nowrap align-items-center\">\r\n                    <div class=\"page-title mb-2 mb-sm-0\">\r\n                      <p class=\"text-white\">{{pageTitle}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--Breadcump end row -->\r\n              <div class=\"card card-statistics\">\r\n                <div class=\"card-body p-3\">\r\n                  <router-outlet></router-outlet>\r\n                  <div class=\"scroll-top\" *ngIf=\"showScroll\" (click)=\"scrollOnTop()\" id=\"rocketmeluncur\">\r\n                    <i class=\"fa fa-chevron-up\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end app-main -->\r\n            </div>\r\n            <!-- end app-container -->\r\n            <!-- begin footer -->\r\n            <!-- <footer class=\"footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6 text-center text-sm-left\">\r\n                  <p>&copy; Copyright 2019. All rights reserved.</p>\r\n                </div>\r\n                <div class=\"col  col-sm-6 ml-sm-auto text-center text-sm-right\">\r\n                  <p>\r\n                    Hand-crafted made with\r\n                    <i class=\"fa fa-heart text-danger mx-1\"></i> by insightus.in\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </footer> -->\r\n            <!-- end footer -->\r\n          </div>\r\n          <!-- end app-wrap -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/app.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/app.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.component */ "./src/app/account/password-reset/init/password-reset-init.component.ts");
/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.route */ "./src/app/account/account.route.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.component */ "./src/app/account/password-reset/finish/password-reset-finish.component.ts");








let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_4__["PasswordResetInitComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetFinishComponent"]
        ],
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_account_route__WEBPACK_IMPORTED_MODULE_5__["accountState"])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/account/account.route.ts":
/*!******************************************!*\
  !*** ./src/app/account/account.route.ts ***!
  \******************************************/
/*! exports provided: accountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountState", function() { return accountState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.route */ "./src/app/account/login/login.route.ts");
/* harmony import */ var _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.route */ "./src/app/account/password-reset/init/password-reset-init.route.ts");
/* harmony import */ var _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.route */ "./src/app/account/password-reset/finish/password-reset-finish.route.ts");




const ACCOUNT_ROUTES = [_password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_2__["passwordResetInitRoute"], _login_login_route__WEBPACK_IMPORTED_MODULE_1__["loginRoute"], _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_3__["passwordResetFinishRoute"]];
const accountState = [
    {
        path: '',
        children: ACCOUNT_ROUTES
    }
];


/***/ }),

/***/ "./src/app/account/index.ts":
/*!**********************************!*\
  !*** ./src/app/account/index.ts ***!
  \**********************************/
/*! exports provided: passwordResetInitRoute, PasswordResetInitService, PasswordResetInitComponent, LoginComponent, loginRoute, accountState, AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.route */ "./src/app/account/password-reset/init/password-reset-init.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passwordResetInitRoute", function() { return _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_1__["passwordResetInitRoute"]; });

/* harmony import */ var _password_reset_init_password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.service */ "./src/app/account/password-reset/init/password-reset-init.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitService", function() { return _password_reset_init_password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__["PasswordResetInitService"]; });

/* harmony import */ var _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.component */ "./src/app/account/password-reset/init/password-reset-init.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitComponent", function() { return _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_3__["PasswordResetInitComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]; });

/* harmony import */ var _login_login_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.route */ "./src/app/account/login/login.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginRoute", function() { return _login_login_route__WEBPACK_IMPORTED_MODULE_5__["loginRoute"]; });

/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.route */ "./src/app/account/account.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountState", function() { return _account_route__WEBPACK_IMPORTED_MODULE_6__["accountState"]; });

/* harmony import */ var _account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.module */ "./src/app/account/account.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return _account_module__WEBPACK_IMPORTED_MODULE_7__["AccountModule"]; });











/***/ }),

/***/ "./src/app/account/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo > img {\n  width: 250px;\n  background: #fff;\n  margin-top: 30px; }\n\n.bg-login {\n  background-color: #6055cda8;\n  background-size: 100px 100px;\n  background-image: linear-gradient(45deg, #e9ecef 25%, transparent 25%, transparent 50%, #f0f0f0 50%, #f0f0f0 75%, transparent 75%, transparent); }\n\n.login-container {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px; }\n\n.card-login {\n  height: auto;\n  border-radius: 10px; }\n\n.input-symbol {\n  font-size: 17px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  color: #666;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.input-symbol-mail {\n  padding-left: 74px;\n  padding-bottom: 85px; }\n\n.input-symbol-lock {\n  padding-left: 74px;\n  padding-top: 45px; }\n\n.input-control {\n  font-size: 15px;\n  line-height: 1.5;\n  color: #666;\n  display: block;\n  width: 100%;\n  background: #e6e6e6;\n  height: 50px;\n  border-radius: 25px;\n  padding: 0 30px 0 68px; }\n\n.mx-auto {\n  margin: 10rem 0; }\n\n.btn-login {\n  border-radius: 25px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9DOlxcQ29kZWJhc2VcXGNlYWRtaW4vc3JjXFxhcHBcXGFjY291bnRcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9sb2dpbi9DOlxcQ29kZWJhc2VcXGNlYWRtaW4vc3JjXFxzY3NzXFxjb25zdGFudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQ2FVO0VEWlYsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBUUUsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwrSUFTQyxFQUFBOztBQUdIO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsNEJBQTRCO0VBRzVCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25zdGFudC5zY3NzXCI7XHJcblxyXG4ubG9nbyA+IGltZyB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYmctbG9naW4ge1xyXG4gIC8vIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gIC8vIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICM4ZTU0ZTkgMCwgIzQ3NzZlNiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0LCByaWdodCwgY29sb3Itc3RvcCgwLCAjOGU1NGU5KSwgY29sb3Itc3RvcCgxMDAlLCAjNDc3NmU2KSkgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOGU1NGU5IDAsICM0Nzc2ZTYgMTAwJSkgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzhlNTRlOSAwLCAjNDc3NmU2IDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOGU1NGU5IDAsICM0Nzc2ZTYgMTAwJSkgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4ZTU0ZTkgMCwgIzQ3NzZlNiAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDU1Y2RhODtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDQ1ZGVnLFxyXG4gICAgI2U5ZWNlZiAyNSUsXHJcbiAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICB0cmFuc3BhcmVudCA1MCUsXHJcbiAgICAjZjBmMGYwIDUwJSxcclxuICAgICNmMGYwZjAgNzUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgdHJhbnNwYXJlbnRcclxuICApO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC1sb2dpbiB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zeW1ib2wge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLmlucHV0LXN5bWJvbC1tYWlsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDc0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDg1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zeW1ib2wtbG9jayB7XHJcbiAgcGFkZGluZy1sZWZ0OiA3NHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiAwIDMwcHggMCA2OHB4O1xyXG59XHJcblxyXG4ubXgtYXV0byB7XHJcbiAgbWFyZ2luOiAxMHJlbSAwO1xyXG59XHJcblxyXG4uYnRuLWxvZ2luIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4iLCIvL0ZvbnRzXHJcbiRmb250LWZhbWlseS1yb2JvdG8tcmVndWxhcjogXCJyb2JvdG9yZWd1bGFyXCI7XHJcbiRmb250LWZhbWlseS1yb2JvdG8taXRhbGljOiBcInJvYm90b2l0YWxpY1wiO1xyXG4kZm9udC1mYW1pbHktcm9ib3RvLWJvbGQ6IFwicm9ib3RvYm9sZFwiO1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJzYW5zLXNlcmlmXCI7XHJcblxyXG4vL0NvbG9yc1xyXG4kYmx1ZTogIzAwN2JmZjtcclxuJGluZGlnbzogIzYwNTVjZDtcclxuJHB1cnBsZTogIzZmNDJjMTtcclxuJHBpbms6ICNlODNlOGM7XHJcbiRyZWQ6ICNkYzM1NDU7XHJcbiRvcmFuZ2U6ICNmZDdlMTQ7XHJcbiR5ZWxsb3c6ICNmN2I3MzE7XHJcbiRncmVlbjogIzMyYjQzMjtcclxuJHRlYWw6ICMyMGM5OTc7XHJcbiRjeWFuOiAjMTdhMmI4O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5OiAjNmM3NTdkO1xyXG4kZGFyay1ncmF5OiAjMzQzYTQwO1xyXG4kZGFya2dyYXk6IGRhcmtncmV5O1xyXG4kcHJpbWFyeTogJGluZGlnbztcclxuJGxhdmVuZGVyOiBsYXZlbmRlcjtcclxuJHNlY29uZGFyeTogIzZjNzU3ZDtcclxuJHN1Y2Nlc3M6ICMyOGE3NDU7XHJcbiRpbmZvOiAjMDA3YmZmO1xyXG4kd2FybmluZzogI2Y3YjczMTtcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuJGxpZ2h0OiAjZGVlMmU2O1xyXG4kbGlnaHRncmV5OiAjN2U4MmE0O1xyXG4kbGlnaHRncmF5OiAjZjBmMGYwO1xyXG4kZGFyazogIzM0M2E0MDtcclxuXHJcbi8vUmVzcG9uc2l2ZSBicmVha3BvaW50c1xyXG4kYnJlYWtwb2ludC14eHhzOiAwO1xyXG4kYnJlYWtwb2ludC14eHM6IDQ4MHB4O1xyXG4kYnJlYWtwb2ludC14czogNTc2cHg7XHJcbiRicmVha3BvaW50LXNtOiA2NjdweDtcclxuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1sZzogOTkycHg7XHJcbiRicmVha3BvaW50LXhsOiAxMjAwcHg7XHJcbiRicmVha3BvaW50LXh4bDogMTQ0MHB4O1xyXG4kYnJlYWtwb2ludC14eHhsOiAxNjAwcHg7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






let LoginComponent = class LoginComponent {
    constructor(loginService, router, stateStorageService, userLoginService, pluginService) {
        this.loginService = loginService;
        this.router = router;
        this.stateStorageService = stateStorageService;
        this.userLoginService = userLoginService;
        this.pluginService = pluginService;
    }
    login(event) {
        event.preventDefault();
        this.loginService.login({
            username: this.userid.nativeElement.value,
            password: this.password.nativeElement.value,
            rememberMe: this.remember.nativeElement.checked
        }).then(response => {
            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is succesful, go to stored previousState and clear previousState
            const redirect = this.stateStorageService.getUrl();
            if (redirect) {
                this.stateStorageService.storeUrl(null);
                this.router.navigateByUrl(redirect);
            }
            else {
                this.pluginService.alertMessage("Login successfully", "success");
                this.router.navigateByUrl('/general-subject');
            }
        }, error => {
            this.pluginService.alertMessage("Username and password doesn't match...! Please try again :(", "error");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"] },
    { type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginInfoService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userid", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "userid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("password", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "password", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("remember", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "remember", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/account/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"],
        _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginInfoService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/account/login/login.route.ts":
/*!**********************************************!*\
  !*** ./src/app/account/login/login.route.ts ***!
  \**********************************************/
/*! exports provided: loginRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRoute", function() { return loginRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/account/login/login.component.ts");


const loginRoute = {
    path: 'account/login',
    component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    data: {
        authorities: [],
        pageTitle: 'Login'
    }
};


/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success-message {\n  font-size: 21px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvQzpcXENvZGViYXNlXFxjZWFkbWluL3NyY1xcYXBwXFxhY2NvdW50XFxwYXNzd29yZC1yZXNldFxcZmluaXNoXFxwYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2Vzcy1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PasswordResetFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFinishComponent", function() { return PasswordResetFinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _password_reset_finish_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset-finish.service */ "./src/app/account/password-reset/finish/password-reset-finish.service.ts");


// import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

// import { LoginModalService } from 'app/core';

let PasswordResetFinishComponent = class PasswordResetFinishComponent {
    constructor(passwordResetFinishService, 
    // private loginModalService: LoginModalService,
    route, elementRef, renderer) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    }
    ngAfterViewInit() {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    }
    finishReset() {
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinishService.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(() => {
                this.success = 'OK';
            }, () => {
                this.success = null;
                this.error = 'ERROR';
            });
        }
    }
    login() {
        // this.modalRef = this.loginModalService.open();
    }
};
PasswordResetFinishComponent.ctorParameters = () => [
    { type: _password_reset_finish_service__WEBPACK_IMPORTED_MODULE_3__["PasswordResetFinishService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
PasswordResetFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jhi-password-reset-finish',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset-finish.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/password-reset/finish/password-reset-finish.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset-finish.component.scss */ "./src/app/account/password-reset/finish/password-reset-finish.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_password_reset_finish_service__WEBPACK_IMPORTED_MODULE_3__["PasswordResetFinishService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
], PasswordResetFinishComponent);



/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.route.ts":
/*!******************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.route.ts ***!
  \******************************************************************************/
/*! exports provided: passwordResetFinishRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordResetFinishRoute", function() { return passwordResetFinishRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset-finish.component */ "./src/app/account/password-reset/finish/password-reset-finish.component.ts");


const passwordResetFinishRoute = {
    path: 'reset/finish',
    component: _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_1__["PasswordResetFinishComponent"],
    data: {
        authorities: [],
        pageTitle: 'Password'
    }
};


/***/ }),

/***/ "./src/app/account/password-reset/finish/password-reset-finish.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/account/password-reset/finish/password-reset-finish.service.ts ***!
  \********************************************************************************/
/*! exports provided: PasswordResetFinishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFinishService", function() { return PasswordResetFinishService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let PasswordResetFinishService = class PasswordResetFinishService {
    constructor(http) {
        this.http = http;
    }
    save(keyAndPassword) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account/reset-password/finish', keyAndPassword);
    }
};
PasswordResetFinishService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PasswordResetFinishService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PasswordResetFinishService);



/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reset-password-text {\n  font-size: 21px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L0M6XFxDb2RlYmFzZVxcY2VhZG1pbi9zcmNcXGFwcFxcYWNjb3VudFxccGFzc3dvcmQtcmVzZXRcXGluaXRcXHBhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldC1wYXNzd29yZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.component.ts ***!
  \******************************************************************************/
/*! exports provided: PasswordResetInitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitComponent", function() { return PasswordResetInitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-init.service */ "./src/app/account/password-reset/init/password-reset-init.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");




let PasswordResetInitComponent = class PasswordResetInitComponent {
    constructor(passwordResetInitService, elementRef, renderer) {
        this.passwordResetInitService = passwordResetInitService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.resetAccount = {};
    }
    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    }
    requestReset() {
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInitService.save(this.resetAccount.email).subscribe(() => {
            this.success = 'OK';
        }, response => {
            this.success = null;
            if (response.status === 400 && response.error.type === _shared__WEBPACK_IMPORTED_MODULE_3__["EMAIL_NOT_FOUND_TYPE"]) {
                this.errorEmailNotExists = 'ERROR';
            }
            else {
                this.error = 'ERROR';
            }
        });
    }
};
PasswordResetInitComponent.ctorParameters = () => [
    { type: _password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__["PasswordResetInitService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
PasswordResetInitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jhi-password-reset-init',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset-init.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/password-reset/init/password-reset-init.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset-init.component.scss */ "./src/app/account/password-reset/init/password-reset-init.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__["PasswordResetInitService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
], PasswordResetInitComponent);



/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.route.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.route.ts ***!
  \**************************************************************************/
/*! exports provided: passwordResetInitRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordResetInitRoute", function() { return passwordResetInitRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _password_reset_init_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset-init.component */ "./src/app/account/password-reset/init/password-reset-init.component.ts");


const passwordResetInitRoute = {
    path: 'reset/request',
    component: _password_reset_init_component__WEBPACK_IMPORTED_MODULE_1__["PasswordResetInitComponent"],
    data: {
        authorities: [],
        pageTitle: 'Password'
    }
};


/***/ }),

/***/ "./src/app/account/password-reset/init/password-reset-init.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/account/password-reset/init/password-reset-init.service.ts ***!
  \****************************************************************************/
/*! exports provided: PasswordResetInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetInitService", function() { return PasswordResetInitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_SERVER);
let PasswordResetInitService = class PasswordResetInitService {
    constructor(http) {
        this.http = http;
    }
    save(mail) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account/reset-password/init', mail);
    }
};
PasswordResetInitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PasswordResetInitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PasswordResetInitService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _main_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/app.component */ "./src/app/main/app.component.ts");






let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                {
                    path: "", redirectTo: "account/login", pathMatch: "full"
                },
                {
                    path: "",
                    component: _main_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    children: [
                        {
                            path: "",
                            component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                            children: [
                                {
                                    path: "", redirectTo: "general-subject", pathMatch: "full"
                                },
                                {
                                    path: "general-subject",
                                    loadChildren: () => Promise.all(/*! import() | general-subject-general-subject-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("general-subject-general-subject-module")]).then(__webpack_require__.bind(null, /*! ./general-subject/general-subject.module */ "./src/app/general-subject/general-subject.module.ts")).then(m => m.GeneralSubjectsModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "General subjects",
                                    }
                                },
                                {
                                    path: "general-concept-and-topic",
                                    loadChildren: () => Promise.all(/*! import() | general-concept-topic-general-concept-topic-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-topic-module"), __webpack_require__.e("general-concept-topic-general-concept-topic-module")]).then(__webpack_require__.bind(null, /*! ./general-concept-topic/general-concept-topic.module */ "./src/app/general-concept-topic/general-concept-topic.module.ts")).then(m => m.GeneralConceptAndTopicModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "Genral concept and topic",
                                    }
                                },
                                {
                                    path: "organisation",
                                    loadChildren: () => Promise.all(/*! import() | organisation-organisation-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("organisation-organisation-module")]).then(__webpack_require__.bind(null, /*! ./organisation/organisation.module */ "./src/app/organisation/organisation.module.ts")).then(m => m.OrganisationModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "Organisation",
                                    }
                                },
                                {
                                    path: "curriculum",
                                    loadChildren: () => Promise.all(/*! import() | curriculum-curriculum-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("curriculum-curriculum-module")]).then(__webpack_require__.bind(null, /*! ./curriculum/curriculum.module */ "./src/app/curriculum/curriculum.module.ts")).then(m => m.CurriculumModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "Curriculums",
                                    }
                                },
                                {
                                    path: "subject",
                                    loadChildren: () => Promise.all(/*! import() | subject-subject-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("subject-subject-module")]).then(__webpack_require__.bind(null, /*! ./subject/subject.module */ "./src/app/subject/subject.module.ts")).then(m => m.SubjectModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "Subjects",
                                    }
                                },
                                {
                                    path: "lesson-topic",
                                    loadChildren: () => Promise.all(/*! import() | syllabus-lesson-topic-syllabus-lesson-topic-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-topic-module")]).then(__webpack_require__.bind(null, /*! ./syllabus-lesson-topic/syllabus-lesson-topic.module */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts")).then(m => m.SyllabusLessonTopicModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "Syllabus lesson topic",
                                    }
                                },
                                {
                                    path: "user-admin",
                                    loadChildren: () => Promise.all(/*! import() | user-admin-user-admin-module */[__webpack_require__.e("default~curriculum-curriculum-module~general-concept-topic-general-concept-topic-module~general-subj~98b75458"), __webpack_require__.e("user-admin-user-admin-module")]).then(__webpack_require__.bind(null, /*! ./user-admin/user-admin.module */ "./src/app/user-admin/user-admin.module.ts")).then(m => m.UserAdminModule),
                                    canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__["UserRouteAccessService"]],
                                    data: {
                                        pageTitle: "User administration",
                                    }
                                }
                            ]
                        }
                    ]
                }
            ], { useHash: true, enableTracing: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/app.component */ "./src/app/main/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account */ "./src/app/account/index.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _main_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"]
        ],
        imports: [
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["NgxWebstorageModule"].forRoot({ prefix: 'ius', separator: '-' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _account__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _core__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                multi: true,
                deps: [ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]]
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _core__WEBPACK_IMPORTED_MODULE_8__["AuthExpiredInterceptor"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]]
            }
            // {
            //     provide: HTTP_INTERCEPTORS,
            //     useClass: ErrorHandlerInterceptor,
            //     multi: true,
            //     deps: [JhiEventManager]
            // },
            // {
            //     provide: HTTP_INTERCEPTORS,
            //     useClass: NotificationInterceptor,
            //     multi: true,
            //     deps: [Injector]
            // }
        ],
        exports: [],
        bootstrap: [_main_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/auth/account.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/auth/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        this.appUserResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/app-users';
    }
    get() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account', { observe: 'response' });
    }
    save(account) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'api/account', account, { observe: 'response' });
    }
    getUserLoginInfo(login) {
        return this.http.get(`${this.appUserResourceUrl}/${login}`, { observe: 'response' });
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AccountService);



/***/ }),

/***/ "./src/app/core/auth/auth-jwt.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/auth/auth-jwt.service.ts ***!
  \***********************************************/
/*! exports provided: AuthServerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServerProvider", function() { return AuthServerProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
//headers = headers.append('Access-Control-Allow-Origin', 'http://18.220.201.109/');
//headers = headers.append('Access-Control-Allow-Origin', 'http://192.168.1.14/');
let AuthServerProvider = class AuthServerProvider {
    constructor(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }
    login(credentials) {
        const data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL + 'api/authenticate', data, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authenticateSuccess.bind(this)));
        function authenticateSuccess(resp) {
            const bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                const jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    }
    loginWithToken(jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    }
    storeAuthenticationToken(jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    }
    logout() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }
};
AuthServerProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"] }
];
AuthServerProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
], AuthServerProvider);



/***/ }),

/***/ "./src/app/core/auth/principal.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/auth/principal.service.ts ***!
  \************************************************/
/*! exports provided: Principal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Principal", function() { return Principal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ "./src/app/core/auth/account.service.ts");




let Principal = class Principal {
    constructor(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    authenticate(identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    }
    hasAnyAuthority(authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    }
    hasAnyAuthorityDirect(authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (let i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.includes(authorities[i])) {
                return true;
            }
        }
        return false;
    }
    hasAuthority(authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(id => {
            return Promise.resolve(id.authorities && id.authorities.includes(authority));
        }, () => {
            return Promise.resolve(false);
        });
    }
    identity(force) {
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account
            .get()
            .toPromise()
            .then(response => {
            const account = response.body;
            if (account) {
                this.userIdentity = account;
                this.authenticated = true;
            }
            else {
                this.userIdentity = null;
                this.authenticated = false;
            }
            this.authenticationState.next(this.userIdentity);
            return this.userIdentity;
        })
            .catch(err => {
            this.userIdentity = null;
            this.authenticated = false;
            this.authenticationState.next(this.userIdentity);
            return null;
        });
    }
    isAuthenticated() {
        return this.authenticated;
    }
    isIdentityResolved() {
        return this.userIdentity !== undefined;
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    getImageUrl() {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    }
};
Principal.ctorParameters = () => [
    { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
];
Principal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
], Principal);



/***/ }),

/***/ "./src/app/core/auth/state-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/state-storage.service.ts ***!
  \****************************************************/
/*! exports provided: StateStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateStorageService", function() { return StateStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");



let StateStorageService = class StateStorageService {
    constructor($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    getPreviousState() {
        return this.$sessionStorage.retrieve('previousState');
    }
    resetPreviousState() {
        this.$sessionStorage.clear('previousState');
    }
    storePreviousState(previousStateName, previousStateParams) {
        const previousState = { name: previousStateName, params: previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    }
    getDestinationState() {
        return this.$sessionStorage.retrieve('destinationState');
    }
    storeUrl(url) {
        this.$sessionStorage.store('previousUrl', url);
    }
    getUrl() {
        return this.$sessionStorage.retrieve('previousUrl');
    }
    storeDestinationState(destinationState, destinationStateParams, fromState) {
        const destinationInfo = {
            destination: {
                name: destinationState.name,
                data: destinationState.data
            },
            params: destinationStateParams,
            from: {
                name: fromState.name
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    }
};
StateStorageService.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"] }
];
StateStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
], StateStorageService);



/***/ }),

/***/ "./src/app/core/auth/user-route-access.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/auth/user-route-access.service.ts ***!
  \********************************************************/
/*! exports provided: UserRouteAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouteAccessService", function() { return UserRouteAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _state_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-storage.service */ "./src/app/core/auth/state-storage.service.ts");
/* harmony import */ var _principal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./principal.service */ "./src/app/core/auth/principal.service.ts");





let UserRouteAccessService = class UserRouteAccessService {
    constructor(router, principal, stateStorageService, activatedRoute) {
        this.router = router;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
        this.activatedRoute = activatedRoute;
    }
    canActivate(route, state) {
        const authorities = route.data['authorities'];
        // We need to call the checkLogin / and so the principal.identity() function, to ensure,
        // that the client has a principal too, if they already logged in by the server.
        // This could happen on a page refresh.
        this.pageTitle = route.data['pageTitle'];
        return this.checkLogin(authorities, state.url);
    }
    checkLogin(authorities, url) {
        const principal = this.principal;
        return Promise.resolve(principal.identity().then(account => {
            if (!authorities || authorities.length === 0) {
                return true;
            }
            if (account) {
                return principal.hasAnyAuthority(authorities).then(response => {
                    if (response) {
                        return true;
                    }
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
                        // console.error('User has not any of required authorities: ', authorities);
                    }
                    return false;
                });
            }
            this.stateStorageService.storeUrl(url);
            this.router.navigate(['account/login']).then(() => {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    // this.loginModalService.open();
                }
            });
            return false;
        }));
    }
    getPageTitle() {
        return this.pageTitle;
    }
};
UserRouteAccessService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _principal_service__WEBPACK_IMPORTED_MODULE_4__["Principal"] },
    { type: _state_storage_service__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UserRouteAccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _principal_service__WEBPACK_IMPORTED_MODULE_4__["Principal"],
        _state_storage_service__WEBPACK_IMPORTED_MODULE_3__["StateStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], UserRouteAccessService);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");








let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
        declarations: [],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                useValue: 'en'
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: Principal, AccountService, LoginService, StateStorageService, UserRouteAccessService, CoreModule, AuthExpiredInterceptor, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_principal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/principal.service */ "./src/app/core/auth/principal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Principal", function() { return _auth_principal_service__WEBPACK_IMPORTED_MODULE_1__["Principal"]; });

/* harmony import */ var _auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/account.service */ "./src/app/core/auth/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _auth_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]; });

/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.service */ "./src/app/core/login/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]; });

/* harmony import */ var _auth_state_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/state-storage.service */ "./src/app/core/auth/state-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateStorageService", function() { return _auth_state_storage_service__WEBPACK_IMPORTED_MODULE_4__["StateStorageService"]; });

/* harmony import */ var _auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/user-route-access.service */ "./src/app/core/auth/user-route-access.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRouteAccessService", function() { return _auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_5__["UserRouteAccessService"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]; });

/* harmony import */ var _interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptor/auth-expired.interceptor */ "./src/app/core/interceptor/auth-expired.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return _interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthExpiredInterceptor"]; });

/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ "./src/app/core/interceptor/auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"]; });










// export * from './interceptor/errorhandler.interceptor';
// export * from './interceptor/notification.interceptor';


/***/ }),

/***/ "./src/app/core/interceptor/auth-expired.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/interceptor/auth-expired.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: AuthExpiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return AuthExpiredInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/core/login/login.service.ts");




class AuthExpiredInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => { }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    const loginService = this.injector.get(_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]);
                    loginService.logout();
                }
            }
        }));
    }
}


/***/ }),

/***/ "./src/app/core/interceptor/auth.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptor/auth.interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


class AuthInterceptor {
    constructor(localStorage, sessionStorage) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    intercept(request, next) {
        if (!request || !request.url || (/^http/.test(request.url) && !(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL && request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL)))) {
            return next.handle(request);
        }
        // to avoid CROS error
        request = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_SERVER
            }
        });
        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                }
            });
        }
        return next.handle(request);
    }
}


/***/ }),

/***/ "./src/app/core/login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/principal.service */ "./src/app/core/auth/principal.service.ts");
/* harmony import */ var _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-jwt.service */ "./src/app/core/auth/auth-jwt.service.ts");




let LoginService = class LoginService {
    constructor(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    login(credentials, callback) {
        const cb = callback || function () { };
        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(data => {
                this.principal.identity(true).then(account => {
                    resolve(data);
                });
                return cb();
            }, err => {
                this.logout();
                reject(err);
                return cb(err);
            });
        });
    }
    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }
    logout() {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    }
};
LoginService.ctorParameters = () => [
    { type: _auth_principal_service__WEBPACK_IMPORTED_MODULE_2__["Principal"] },
    { type: _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__["AuthServerProvider"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_principal_service__WEBPACK_IMPORTED_MODULE_2__["Principal"], _auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__["AuthServerProvider"]])
], LoginService);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/mergeMap.js");








let LayoutComponent = class LayoutComponent {
    constructor(principal, router, loginService, activatedRoute, titleService, userAccessService, changeDetectorRef) {
        this.principal = principal;
        this.router = router;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.userAccessService = userAccessService;
        this.changeDetectorRef = changeDetectorRef;
        this.ariaExpanded = this.expanded;
        this.adminItems = [];
        this.topPosToStartShowing = 30;
        this.getMenuItemsList();
        this.activatedRoute.url.subscribe(activeUrl => {
            let currentRoute = window.location.hash.slice(1);
        });
    }
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.showScroll = true;
        }
        else {
            this.showScroll = false;
        }
    }
    ngOnInit() {
        this.metisMenu();
        this.getPageTitleInfo();
    }
    ngAfterViewChecked() {
        this.getPageTitleInfo();
        this.changeDetectorRef.detectChanges();
    }
    getPageTitleInfo() {
        this.pageTitle = this.userAccessService.getPageTitle();
    }
    getMenuItemsList() {
        this.adminItems = [
            {
                "displayName": "General subject administration",
                "iconName": "",
                "child": true,
                "children": [
                    {
                        "displayName": "Subjects",
                        "route": "/general-subject"
                    },
                    {
                        "displayName": "Topic content mapping",
                        "route": "/general-concept-and-topic/general-topic-content"
                    },
                    {
                        "displayName": "Topic questions",
                        "route": "/general-concept-and-topic/general-topic-question"
                    }
                ]
            },
            {
                "displayName": "Curriculum  administration",
                "iconName": "",
                "child": true,
                "children": [
                    {
                        "displayName": "Manage curriculums",
                        "route": "/curriculum"
                    },
                    {
                        "displayName": "Manage subjects",
                        "route": "/subject"
                    },
                    {
                        "displayName": "Manage lesson topics",
                        "route": "/lesson-topic/lesson-topic-manage"
                    },
                    {
                        "displayName": "Manage prerequisite topics",
                        "route": "/lesson-topic/prerequisite-lesson-topic-manage"
                    }
                ]
            },
            {
                "displayName": "Curriculum content administration",
                "iconName": "",
                "child": true,
                "children": [
                    {
                        "displayName": "Topic content",
                        "route": "/lesson-topic/topic-content"
                    },
                    {
                        "displayName": "Topic questions",
                        "route": "/lesson-topic/topic-question"
                    },
                    {
                        "displayName": "Additional lesson resources",
                        "route": "/lesson-topic/additional-resources"
                    },
                    {
                        "displayName": "Manage lesson plans",
                        "route": "/lesson-topic/lesson-plans"
                    }
                ]
            },
            {
                "displayName": "Organisation  administration",
                "iconName": "",
                "route": "/organisation",
                "child": false
            },
            {
                "displayName": "User  administration",
                "iconName": "",
                "route": "/user-admin",
                "child": false
            },
            {
                "displayName": "Student promotions",
                "iconName": "",
                "route": "/organisation/student-promotions",
                "child": false
            }
        ];
    }
    metisMenu() {
        $(function () {
            var sidebarNav = $(".sidebar-nav");
            if (sidebarNav.length > 0) {
                $('#sidebarNav').metisMenu();
            }
            $('.mobile-toggle').on('click', function () {
                $('.light-sidebar').toggleClass('sidebar-toggled');
            });
            $('.sidebar-toggle').on('click', function () {
                $('.light-sidebar').toggleClass('sidebar-mini');
                $('.app-navbar').toggleClass('expand');
            });
            $('.app-navbar').hover(function () {
                if ($('.light-sidebar').hasClass('sidebar-mini')) {
                    $('.navbar-header').toggleClass('expand');
                }
            });
        });
    }
    isAuthenticated() {
        return this.principal.isAuthenticated();
    }
    logout() {
        this.loginService.logout();
        this.router.navigate(["/account/login"]);
    }
    onRouteNavigation(item) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
        this.titleService.setTitle(item.displayName);
    }
    scrollOnTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnDestroy() {
        this.pageTitle = "";
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["Principal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-expanded'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LayoutComponent.prototype, "ariaExpanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutComponent.prototype, "checkScroll", null);
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "layout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["Principal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _core__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
        _core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], LayoutComponent);



/***/ }),

/***/ "./src/app/main/app.component.scss":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/main/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/main/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/shared/auth/has-any-authority.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/auth/has-any-authority.directive.ts ***!
  \************************************************************/
/*! exports provided: HasAnyAuthorityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAnyAuthorityDirective", function() { return HasAnyAuthorityDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *iusHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *iusHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
let HasAnyAuthorityDirective = class HasAnyAuthorityDirective {
    constructor(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    set iusHasAnyAuthority(value) {
        this.authorities = typeof value === 'string' ? [value] : value;
        this.updateView();
        // Get notified each time authentication state changes.
        this.principal.getAuthenticationState().subscribe(identity => this.updateView());
    }
    updateView() {
        this.principal.hasAnyAuthority(this.authorities).then(result => {
            this.viewContainerRef.clear();
            if (result) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        });
    }
};
HasAnyAuthorityDirective.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["Principal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "iusHasAnyAuthority", null);
HasAnyAuthorityDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[iusHasAnyAuthority]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["Principal"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], HasAnyAuthorityDirective);



/***/ }),

/***/ "./src/app/shared/common/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/common/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
    }
    getMenuItems() {
        return this.http.get('./assets/local-data/menu-items.json');
    }
    getCountryList() {
        return this.http.get('./assets/local-data/countries.json');
    }
    getStateList() {
        return this.http.get('./assets/local-data/states.json');
    }
    getCityList() {
        return this.http.get('./assets/local-data/cities.json');
    }
    getGeneralDataList() {
        return this.http.get('./assets/local-data/general.json');
    }
    getContentHostedDetailsList() {
        return this.http.get('./assets/local-data/content-hosted-details.json');
    }
    getContentCategoryList() {
        return this.http.get('./assets/local-data/content-category.json');
    }
    getContentSourceList() {
        return this.http.get('./assets/local-data/content-source.json');
    }
    getContentTypeList() {
        return this.http.get('./assets/local-data/content-type.json');
    }
    getQuestionTypeList() {
        return this.http.get('./assets/local-data/question-type.json');
    }
    getQuestionCategoryList() {
        return this.http.get('./assets/local-data/question-category.json');
    }
    getQuestionComplexityLevelList() {
        return this.http.get('./assets/local-data/question-complexity-level.json');
    }
    getOrganisationTypeList() {
        return this.http.get('./assets/local-data/organisation-type.json');
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CommonService);



/***/ }),

/***/ "./src/app/shared/constants/error.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/error.constants.ts ***!
  \*****************************************************/
/*! exports provided: PROBLEM_BASE_URL, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE, EMAIL_NOT_FOUND_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROBLEM_BASE_URL", function() { return PROBLEM_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ALREADY_USED_TYPE", function() { return EMAIL_ALREADY_USED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ALREADY_USED_TYPE", function() { return LOGIN_ALREADY_USED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_NOT_FOUND_TYPE", function() { return EMAIL_NOT_FOUND_TYPE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PROBLEM_BASE_URL = 'https://www.jhipster.tech/problem';
const EMAIL_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/email-already-used';
const LOGIN_ALREADY_USED_TYPE = PROBLEM_BASE_URL + '/login-already-used';
const EMAIL_NOT_FOUND_TYPE = PROBLEM_BASE_URL + '/email-not-found';


/***/ }),

/***/ "./src/app/shared/constants/pagination.constants.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/pagination.constants.ts ***!
  \**********************************************************/
/*! exports provided: ITEMS_PER_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE", function() { return ITEMS_PER_PAGE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ITEMS_PER_PAGE = 10;


/***/ }),

/***/ "./src/app/shared/file-management/file-management.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/file-management/file-management.service.ts ***!
  \*******************************************************************/
/*! exports provided: FileManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagementService", function() { return FileManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let FileManagementService = class FileManagementService {
    constructor(http) {
        this.http = http;
        this.generateURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/file-upload-url';
        this.downloadFile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/download-url';
        this.deleteFile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/delete';
        this.imgBase64File = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/file/image-upload-url';
    }
    //Service call to get a presigned URL from AWS 
    getpresignedurls(fileName) {
        return this.http.get(`${this.generateURL}/${fileName}`, { observe: 'response' });
    }
    //Upload a PDF file to a presigned URL from AWS
    uploadPDFFile(fileuploadurl, file) {
        const formdata = new FormData();
        formdata.append('file', file);
        return this.http.put(fileuploadurl, formdata, { observe: 'response' });
    }
    //Service call to get a presigned URL from AWS
    getImagePresignedurls(fileName) {
        //return this.http.get<any>(`${this.imgBase64File}/${fileName}`, { observe: 'response' });
        return this.http.get(`${this.imgBase64File}/${fileName}`).toPromise();
    }
    //Upload a image file to a presigned URL from AWS
    uploadImagefileAWSS3(fileuploadurl, base64Data) {
        let binaryBuf = this.base64ToArrayBuffer(base64Data);
        //return this.http.put<any>(fileuploadurl, binaryBuf, { observe: 'response' })
        return this.http.put(fileuploadurl, binaryBuf).toPromise();
    }
    //Upload a video file to a presigned URL from AWS
    uploadVideoFile(fileuploadurl, base64Data) {
        let binaryBuf = this.base64ToArrayBuffer(base64Data);
        return this.http.put(fileuploadurl, binaryBuf, { observe: 'response' });
    }
    //Service call to delete a uploaded file
    deleteUploadedFile(fileName) {
        return this.http.delete(`${this.deleteFile}/${fileName}`, { observe: 'response' });
    }
    //Base64 to array buffer conversion
    base64ToArrayBuffer(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }
    //Service call to download files
    downloadFiles(fileName) {
        return this.http.get(`${this.downloadFile}/${fileName}`, { observe: 'response' });
    }
};
FileManagementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FileManagementService);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: PROBLEM_BASE_URL, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE, EMAIL_NOT_FOUND_TYPE, ITEMS_PER_PAGE, SharedModule, HasAnyAuthorityDirective, createRequestOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants_error_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/error.constants */ "./src/app/shared/constants/error.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROBLEM_BASE_URL", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_1__["PROBLEM_BASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ALREADY_USED_TYPE", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_1__["EMAIL_ALREADY_USED_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ALREADY_USED_TYPE", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_1__["LOGIN_ALREADY_USED_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMAIL_NOT_FOUND_TYPE", function() { return _constants_error_constants__WEBPACK_IMPORTED_MODULE_1__["EMAIL_NOT_FOUND_TYPE"]; });

/* harmony import */ var _constants_pagination_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/pagination.constants */ "./src/app/shared/constants/pagination.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE", function() { return _constants_pagination_constants__WEBPACK_IMPORTED_MODULE_2__["ITEMS_PER_PAGE"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]; });

/* harmony import */ var _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/has-any-authority.directive */ "./src/app/shared/auth/has-any-authority.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasAnyAuthorityDirective", function() { return _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_4__["HasAnyAuthorityDirective"]; });

/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/request-util */ "./src/app/shared/util/request-util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequestOption", function() { return _util_request_util__WEBPACK_IMPORTED_MODULE_5__["createRequestOption"]; });









/***/ }),

/***/ "./src/app/shared/input-directive/input.restriction.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/input-directive/input.restriction.directive.ts ***!
  \***********************************************************************/
/*! exports provided: InputRestrictionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRestrictionDirective", function() { return InputRestrictionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputRestrictionDirective = class InputRestrictionDirective {
    constructor(el) {
        this.arabicRegex = '[\u0600-\u06FF]';
        this.inputElement = el;
    }
    onKeyPress(event) {
        if (this.inputRestriction === 'onlyIntegers') {
            this.integerOnly(event);
        }
        else if (this.inputRestriction === 'alphabetsWithSpace') {
            this.alphabetsWithSpace(event);
        }
        else if (this.inputRestriction === 'alphabetsNumbersWithMinus') {
            this.alphabetsNumbersWithMinus(event);
        }
        else if (this.inputRestriction === 'noSpecialChars') {
            this.noSpecialChars(event);
        }
    }
    integerOnly(event) {
        const e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return true;
        }
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
            e.preventDefault();
        }
    }
    alphabetsWithSpace(event) {
        const e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return true;
        }
        let k;
        k = event.keyCode; // k = event.charCode;  (Both can be used)
        if ((k > 64 && k < 91) || (k > 96 && k < 123 || k === 32)) {
            return true;
        }
        e.preventDefault();
    }
    alphabetsNumbersWithMinus(event) {
        const e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)) {
            // let it happen, don't do anything
            return true;
        }
        let k;
        k = event.keyCode; // k = event.charCode;  (Both can be used)
        if ((k > 64 && k < 91) || (k > 96 && k < 123 || k === 45 || k === 109 || k === 32 || k > 47 && k < 58) || event.key === "&" || event.key === "V") {
            return true;
        }
        e.preventDefault();
    }
    noSpecialChars(event) {
        const e = event;
        if (e.key === 'Tab' || e.key === 'TAB') {
            return true;
        }
        let k;
        k = event.keyCode; // k = event.charCode;  (Both can be used)
        if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57)) {
            return true;
        }
        const ch = String.fromCharCode(e.keyCode);
        const regEx = new RegExp(this.arabicRegex);
        if (regEx.test(ch)) {
            return true;
        }
        e.preventDefault();
    }
};
InputRestrictionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('inputRestriction'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputRestrictionDirective.prototype, "inputRestriction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], InputRestrictionDirective.prototype, "onKeyPress", null);
InputRestrictionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[inputRestriction]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], InputRestrictionDirective);



/***/ }),

/***/ "./src/app/shared/mathjax/mathjax-directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/mathjax/mathjax-directive.ts ***!
  \*****************************************************/
/*! exports provided: MathJaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathJaxDirective", function() { return MathJaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MathJaxDirective = class MathJaxDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnChanges() {
        this.element.nativeElement.innerHTML = this.texExpression;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement.innerHTML]);
        MathJax.Hub.Config({
            showMathMenu: false,
            messageStyle: "none"
        });
    }
};
MathJaxDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(' MathJax'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MathJaxDirective.prototype, "texExpression", void 0);
MathJaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[MathJax]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], MathJaxDirective);



/***/ }),

/***/ "./src/app/shared/plugin/plugin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/plugin/plugin.service.ts ***!
  \*************************************************/
/*! exports provided: PluginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginService", function() { return PluginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PluginService = class PluginService {
    constructor() {
        this.ckEditorQuestionConfig = {
            lang: 'en',
            allowedContent: true,
            height: '150px',
            extraPlugins: ['mathjax', 'divarea', 'easyimage'],
            mathJaxClass: 'math-tex',
            //mathJaxLib: './assets/MathJax-2.7.7/latest.js?config=TeX-MML-AM_CHTML',
            mathJaxLib: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML',
            removePlugins: ['elementspath', 'image', 'maximize'],
            cloudServices_tokenUrl: './assets',
            cloudServices_uploadUrl: './assets',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
                { name: 'insert' },
                { name: 'forms' },
                { name: 'tools' },
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
                { name: 'styles' },
                { name: 'colors' }
            ]
        };
        this.ckEditorChoiceConfig = {
            lang: 'en',
            allowedContent: true,
            height: '50px',
            extraPlugins: ['mathjax', 'divarea', 'easyimage'],
            mathJaxClass: 'm-equation',
            //mathJaxLib: './assets/MathJax-2.7.7/latest.js?config=TeX-MML-AM_CHTML',
            mathJaxLib: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML',
            removePlugins: ['elementspath', 'image', 'maximize'],
            cloudServices_tokenUrl: './assets',
            cloudServices_uploadUrl: './assets',
            toolbarGroups: [
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
                { name: 'insert' },
                { name: 'forms' },
                { name: 'tools' },
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
                { name: 'styles' },
                { name: 'colors' }
            ]
        };
    }
    stepper() {
        $(document).ready(function () {
            var $progressWizard = $('.stepper'), $tab_active, $tab_prev, $tab_next, $btn_prev = $progressWizard.find('.prev-step'), $btn_next = $progressWizard.find('.next-step');
            $btn_next.on('click', function () {
                $tab_active = $progressWizard.find('.active');
                $tab_active.next().removeClass('disabled').addClass('active');
                $tab_active.removeClass('active').addClass('disabled');
                $tab_next = $progressWizard.find('.show');
                $tab_next.next().addClass('show').addClass('active');
                $tab_next.removeClass('show').removeClass('show');
            });
            $btn_prev.click(function () {
                $tab_active = $progressWizard.find('.active');
                $tab_active.prev().removeClass('disabled').addClass('active');
                $tab_active.removeClass('active').addClass('disabled');
                $tab_prev = $progressWizard.find('.show');
                $tab_prev.prev().addClass('show').addClass('active');
                $tab_prev.removeClass('show').removeClass('show');
            });
        });
    }
    dragAndDrop(dragTableID, dragBody) {
        var fixHelperModified = function (e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
                $(this).width($originals.eq(index).width());
            });
            return $helper;
        }, updateIndex = function (e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
                $(this).html(i + 1);
            });
        };
        $(dragTableID + "" + dragBody)
            .sortable({
            helper: fixHelperModified,
            stop: updateIndex
        })
            .disableSelection();
        $(dragBody).sortable({
            distance: 5,
            delay: 100,
            opacity: 0.6,
            cursor: "move",
            update: function () { }
        });
    }
    jsTree(ID, jsonData, isDraggable) {
        var pluginConfig;
        let localObj = this;
        if (isDraggable) {
            pluginConfig = ["types", "conditionalselect", "dnd"];
        }
        else {
            pluginConfig = ["types", "conditionalselect"];
        }
        $(document).ready(function () {
            $(ID).jstree({
                core: {
                    check_callback: function (operation, node, node_parent, node_position, more) {
                        var childnodeLength = node_parent.children.length;
                        if ((operation === "move_node" || operation === "copy_node") && node.type && node.type == "root") {
                            return false;
                        }
                        if (operation === "move_node") {
                            console.log(node_position);
                        }
                    },
                    data: jsonData,
                    expand_selected_onload: true
                },
                types: {
                    root: {
                        icon: "fa fa-book",
                        valid_children: ["unit", "lesson", "concept", "topic"]
                    },
                    default: {
                        icon: "fa fa-file",
                        valid_children: []
                    },
                    unit: {
                        icon: "fe fe-server",
                        valid_children: ["unit", "lesson"]
                    },
                    lesson: {
                        icon: "fa fa-file",
                        valid_children: []
                    },
                    concept: {
                        icon: "fe fe-server",
                        valid_children: ["concept", "topic"]
                    },
                    topic: {
                        icon: "fa fa-file",
                        valid_children: []
                    }
                },
                plugins: pluginConfig
            });
            $(ID).jstree(true).settings.core.data = jsonData;
            $(ID).jstree().refresh();
            localObj.openJsTreeAllNodes(ID);
        });
    }
    openJsTreeAllNodes(ID) {
        $(document).ready(function () {
            $(ID).jstree("open_all");
        });
    }
    closeJsTreeAllNodes(ID) {
        $(document).ready(function () {
            $(ID).jstree("close_all");
        });
    }
    alertMessage(message, messageType) {
        swal({
            title: message,
            //text: "You will not be able to recover this imaginary file!",
            type: messageType,
            showCancelButton: false,
            closeOnConfirm: false,
            closeOnCancel: false
        });
    }
    newStepperJs() {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches
        $(".next").click(function () {
            if (animating)
                return false;
            animating = true;
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                    });
                    next_fs.css({ 'left': left, 'opacity': opacity });
                },
                duration: 0,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });
        $(".previous").click(function () {
            if (animating)
                return false;
            animating = false;
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({ 'left': left });
                    previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
                },
                duration: 0,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });
    }
    datePicker(ID) {
        $(document).ready(function () {
            $(ID).datepicker({
                format: 'dd-mm-yyyy',
                autoclose: true,
                orientation: "bottom",
                templates: {
                    leftArrow: '<i class="fa fa-angle-left"></i>',
                    rightArrow: '<i class="fa fa-angle-right"></i>'
                }
            });
        });
    }
    showModalWindow(ID) {
        $(document).ready(function () {
            $(ID).modal({
                detachable: false,
                closable: false,
                transition: "slide left"
            }).modal('show');
        });
    }
    hideModalWindow(ID) {
        $(document).ready(function () {
            $(ID).modal('hide others').modal('hide dimmer').modal('hide');
        });
    }
    sideMenuToggle() {
        $('#sidebarNav').metisMenu();
        $('.light-sidebar').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
        $('.light-sidebar').toggleClass('sidebar-toggled');
        $('.app-navbar').hover(function () {
            if ($('.light-sidebar').hasClass('sidebar-mini')) {
                $('.navbar-header').toggleClass('expand');
            }
        });
    }
    getCKEditorQuestionConfig() {
        return this.ckEditorQuestionConfig;
    }
    getCKEditorChoiceConfig() {
        return this.ckEditorChoiceConfig;
    }
};
PluginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PluginService);



/***/ }),

/***/ "./src/app/shared/sanitizeHtml-pipe/sanitizeHtml.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/sanitizeHtml-pipe/sanitizeHtml.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value) {
        return this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this._sanitizer.bypassSecurityTrustHtml(value));
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/shared/shared-library.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-library.module.ts ***!
  \*************************************************/
/*! exports provided: SharedLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLibraryModule", function() { return SharedLibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var alife_file_to_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alife-file-to-base64 */ "./node_modules/alife-file-to-base64/fesm2015/alife-file-to-base64.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");








let SharedLibraryModule = class SharedLibraryModule {
};
SharedLibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            alife_file_to_base64__WEBPACK_IMPORTED_MODULE_6__["AlifeFileToBase64Module"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
        ],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], alife_file_to_base64__WEBPACK_IMPORTED_MODULE_6__["AlifeFileToBase64Module"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]]
    })
], SharedLibraryModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-library.module */ "./src/app/shared/shared-library.module.ts");
/* harmony import */ var _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/has-any-authority.directive */ "./src/app/shared/auth/has-any-authority.directive.ts");
/* harmony import */ var _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _input_directive_input_restriction_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-directive/input.restriction.directive */ "./src/app/shared/input-directive/input.restriction.directive.ts");
/* harmony import */ var _sanitizeHtml_pipe_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sanitizeHtml-pipe/sanitizeHtml.pipe */ "./src/app/shared/sanitizeHtml-pipe/sanitizeHtml.pipe.ts");
/* harmony import */ var _file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var _mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mathjax/mathjax-directive */ "./src/app/shared/mathjax/mathjax-directive.ts");











let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__["HasAnyAuthorityDirective"],
            _input_directive_input_restriction_directive__WEBPACK_IMPORTED_MODULE_7__["InputRestrictionDirective"],
            _sanitizeHtml_pipe_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__["SanitizeHtmlPipe"],
            _mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_10__["MathJaxDirective"]
        ],
        imports: [_shared_library_module__WEBPACK_IMPORTED_MODULE_2__["SharedLibraryModule"]],
        exports: [
            _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_3__["HasAnyAuthorityDirective"],
            _input_directive_input_restriction_directive__WEBPACK_IMPORTED_MODULE_7__["InputRestrictionDirective"],
            _shared_library_module__WEBPACK_IMPORTED_MODULE_2__["SharedLibraryModule"],
            _sanitizeHtml_pipe_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_8__["SanitizeHtmlPipe"],
            _mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_10__["MathJaxDirective"]
        ],
        providers: [_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_5__["UserLoginInfoService"], _common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/user-login-info/user-login-info.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/user-login-info/user-login-info.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserLoginInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginInfoService", function() { return UserLoginInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/core */ "./src/app/core/index.ts");





let UserLoginInfoService = class UserLoginInfoService {
    constructor(http, accountService, pluginService, principalService) {
        this.http = http;
        this.accountService = accountService;
        this.pluginService = pluginService;
        this.principalService = principalService;
        if (principalService.authenticated === true) {
            this.getLoginInformation();
        }
    }
    getLoginInformation() {
        this.accountService.get()
            .subscribe((res) => this.assignLoginInfo(res.body), (res) => this.onError(res.message));
    }
    assignLoginInfo(data) {
        let login = data.login;
        this.getUserLoginInfo(login);
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    getUserLoginInfo(login) {
        this.accountService.getUserLoginInfo(login)
            .subscribe((res) => this.assignUserLoginInfo(res.body), (res) => this.onError(res.message));
    }
    assignUserLoginInfo(data) {
        this.organisationId = data.organisationId;
    }
};
UserLoginInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _app_core__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _app_core__WEBPACK_IMPORTED_MODULE_4__["Principal"] }
];
UserLoginInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _app_core__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
        _plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _app_core__WEBPACK_IMPORTED_MODULE_4__["Principal"]])
], UserLoginInfoService);



/***/ }),

/***/ "./src/app/shared/util/request-util.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/util/request-util.ts ***!
  \*********************************************/
/*! exports provided: createRequestOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequestOption", function() { return createRequestOption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach(val => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


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
    production: false,
    API_SERVER: "http://172.105.47.78:8080",
    API_URL: "http://172.105.47.78:8080/"
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

module.exports = __webpack_require__(/*! C:\Codebase\ceadmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map