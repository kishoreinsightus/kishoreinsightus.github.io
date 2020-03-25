(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisation-organisation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-create.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-create.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\" [formGroup]=\"organisationSchoolAdminUserForm\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">Personal information</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"firstName\">First name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\r\n                formControlName=\"firstName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"lastName\">Last name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\r\n                formControlName=\"lastName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"gender\">Gender *</label>\r\n            <div class=\"row mx-0\">\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\r\n                </div>\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dob\">Date of birth *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dobDate\" class=\"form-control\" placeholder=\"Select date of birth\"\r\n                    [(ngModel)]=\"dateOfBirth\" #dobDate=\"ngModel\" trim id=\"dateOfBirth\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dateOfJoining\">Date of joining *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dateOfJoining\" class=\"form-control\" placeholder=\"Select joining date\"\r\n                    [(ngModel)]=\"joiningDate\" #dateOfJoining=\"ngModel\" trim id=\"joiningDate\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"email\">Email *</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\"\r\n                required maxlength=\"50\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"mobile\">Mobile number *</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"phoneNumber\"\r\n                minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n        </div>\r\n        <button class=\"next btn btn-success ml-3 float-right\" [disabled]=\"validatePersonalInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Role information</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\r\n                <div class=\"checkbox\">\r\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\r\n                    <label for=\"{{data.id}}\"></label>\r\n                </div>\r\n                <label for=\"{{data.id}}\">\r\n                    {{data.name}}\r\n                </label>\r\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\r\n                    <i class=\"fa fa-user mr-2\"></i> Role information\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"next btn btn-success ml-2 float-right d-block\" (click)=\"mapOrgSchoolAdminUserData()\"\r\n            [disabled]=\"validateRoleInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>First name</b></p>\r\n                            <p>{{organisationSchoolAdminUser.user.givenName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Last name</b></p>\r\n                            <p>{{organisationSchoolAdminUser.user.lastName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Gender</b></p>\r\n                            <p>{{organisationSchoolAdminUser.user.gender}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of birth</b></p>\r\n                            <p>{{dateOfBirth}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of joining</b></p>\r\n                            <p>{{joiningDate}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisationSchoolAdminUser.user.email}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisationSchoolAdminUser.user.mobileNumber}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Role information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Selected role</b></p>\r\n                            <p>\r\n                                {{authorityNames}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"saveOrganisationSchoolAdminUser()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-details.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-details.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n        <a class=\"btn btn-success\"\r\n            [routerLink]=\"['/organisation',organisationId, 'school', schoolId, 'school-user', schoolUserId, 'edit']\">\r\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation school user\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"accordion\" id=\"organisationCnf\">\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\r\n                    aria-expanded=\"true\">Personal information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>First name</b></p>\r\n                    <p>{{organisationSchoolAdminUser.givenName}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Last name</b></p>\r\n                    <p>{{organisationSchoolAdminUser.lastName}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Gender</b></p>\r\n                    <p>{{organisationSchoolAdminUser.gender}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Date of birth</b></p>\r\n                    <p>{{organisationSchoolAdminUser.dateOfBirth}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Date of joining</b></p>\r\n                    <p>{{organisationSchoolAdminUser.joiningDate}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Email</b></p>\r\n                    <p>{{organisationSchoolAdminUser.email}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Phone number</b></p>\r\n                    <p>{{organisationSchoolAdminUser.mobileNumber}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                    data-toggle=\"collapse\">Role information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Selected role</b></p>\r\n                    <p>\r\n                        {{authorityNames}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n    </div>\r\n    <a [routerLink]=\"['/organisation',organisationId, 'school', schoolId , 'school-user', 'create']\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create school user\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"table-responsive\" *ngIf=\"organisationSchoolAdminUserList\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"loginId\">Login ID <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"fName\">First name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"lName\">Last name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"status\">Status<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let orgUser of organisationSchoolAdminUserList;trackBy: trackId;\">\r\n                <td data-column=\"Login ID\">{{orgUser.login}}</td>\r\n                <td data-column=\"First Name\">{{orgUser.givenName}}</td>\r\n                <td data-column=\"Last Name\">{{orgUser.lastName}}</td>\r\n                <td data-column=\"Status\">\r\n                    <span *ngIf=\"orgUser.activated === true\">Active</span>\r\n                    <span *ngIf=\"orgUser.activated === false\">Inactive</span>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div class=\"d-flex\">\r\n                        <a class=\"btn btn-outline-info btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId, 'school' , schoolId, 'school-user', orgUser.id, 'view']\"\r\n                            tooltip=\"View school user\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-success btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'school' , schoolId, 'school-user',orgUser.id, 'edit']\"\r\n                            tooltip=\"Edit school user\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-primary btn-icon justify-content-center align-items-center mr-1 mb-1\"\r\n                            *ngIf=\"orgUser.activated === false\" tooltip=\"Activate user\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'school' , schoolId, 'school-user',orgUser.login, 'activate']\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-danger btn-icon justify-content-center align-items-center mr-1 mb-1\"\r\n                            *ngIf=\"orgUser.activated === true\" tooltip=\"Deactivate user\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'school' , schoolId, 'school-user',orgUser.login, 'deactivate']\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-danger btn-icon d-flex justify-content-center align-items-center mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.id, 'reset-pin']\"\r\n                            tooltip=\"OTP verification\">\r\n                            <i class=\"fa fa-mobile\"></i>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-update.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-update.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\" [formGroup]=\"organisationSchoolAdminUserForm\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">Personal information</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"firstName\">First name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\r\n                formControlName=\"firstName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"lastName\">Last name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\r\n                formControlName=\"lastName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"gender\">Gender *</label>\r\n            <div class=\"row mx-0\">\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\r\n                </div>\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dob\">Date of birth *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dobDate\" class=\"form-control\" placeholder=\"Select date of birth\"\r\n                    [(ngModel)]=\"dateOfBirth\" #dobDate=\"ngModel\" trim id=\"dateOfBirth\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dateOfJoining\">Date of joining *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dateOfJoining\" class=\"form-control\" placeholder=\"Select joining date\"\r\n                    [(ngModel)]=\"joiningDate\" #dateOfJoining=\"ngModel\" trim id=\"joiningDate\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"email\">Email *</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\"\r\n                required maxlength=\"50\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"mobile\">Mobile number *</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"phoneNumber\"\r\n                minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n        </div>\r\n        <button class=\"next btn btn-success ml-3 float-right\" [disabled]=\"validatePersonalInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Role information</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\r\n                <div class=\"checkbox\">\r\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\r\n                    <label for=\"{{data.id}}\"></label>\r\n                </div>\r\n                <label for=\"{{data.id}}\">\r\n                    {{data.name}}\r\n                </label>\r\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\r\n                    <i class=\"fa fa-user mr-2\"></i> Role information\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"next btn btn-success ml-2 float-right d-block\" (click)=\"mapOrgSchoolAdminUserData()\"\r\n            [disabled]=\"validateRoleInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>First name</b></p>\r\n                            <p>{{organisationSchoolAdminUser.givenName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Last name</b></p>\r\n                            <p>{{organisationSchoolAdminUser.lastName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Gender</b></p>\r\n                            <p>{{organisationSchoolAdminUser.gender}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of birth</b></p>\r\n                            <p>{{organisationSchoolAdminUser.dateOfBirth}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of joining</b></p>\r\n                            <p>{{organisationSchoolAdminUser.joiningDate}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisationSchoolAdminUser.mobileNumber}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisationSchoolAdminUser.email}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Role information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Selected role</b></p>\r\n                            <p>\r\n                                {{authorityNames}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"saveOrganisationSchoolAdminUser()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-create.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-create.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset [formGroup]=\"organisationSubSchoolForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">School information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"orgName\">School name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter school name (min length: 3 and max length: 50)\" formControlName=\"schoolName\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"number\" class=\"form-control\"\r\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\r\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"country\">Country</label>\r\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n                    formControlName=\"country\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"state\">State</label>\r\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\r\n                    formControlName=\"state\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\r\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"number\">Pin code</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\r\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgSchoolInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset [formGroup]=\"contactInfoForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Primary contact information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"fName\">Name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"designation\">Designation</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"emailId\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\r\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"phone\">Mobile number</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\r\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\"\r\n            (click)=\"mapOrganisationSubSchoolData()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">School information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>School name</b></p>\r\n                            <p>{{organisationSubSchool.name}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\"\r\n                            *ngIf=\"organisationSubSchool.registrationNumber\">\r\n                            <p><b>Registration number</b></p>\r\n                            <p>{{organisationSubSchool.registrationNumber}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine1\">\r\n                            <p><b>Address line 1</b></p>\r\n                            <p>{{organisationSubSchool.addressLine1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine2\">\r\n                            <p><b>Address line 2</b></p>\r\n                            <p>{{organisationSubSchool.addressLine2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Country</b></p>\r\n                            <p>{{organisationSubSchool.country}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>State</b></p>\r\n                            <p>{{organisationSubSchool.state}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.city\">\r\n                            <p><b>City</b></p>\r\n                            <p>{{organisationSubSchool.city}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Pincode</b></p>\r\n                            <p>{{organisationSubSchool.pincode}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Contact information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Name</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Designation</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactDesignation}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactPhone}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactMail}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"saveOrganisationSubSchool()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-details.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-details.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n        <a class=\"btn btn-success\"\r\n            [routerLink]=\"['/organisation',organisationSubSchool.parentOrganisationId, 'school', organisationSubSchool.id, 'edit']\">\r\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation school\r\n        </a>\r\n    </div>\r\n</div>\r\n<div class=\"accordion\" id=\"organisationCnf\">\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\r\n                    aria-expanded=\"true\">School information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>School name</b></p>\r\n                    <p>{{organisationSubSchool.name}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.registrationNumber\">\r\n                    <p><b>Registration number</b></p>\r\n                    <p>{{organisationSubSchool.registrationNumber}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine1\">\r\n                    <p><b>Address line 1</b></p>\r\n                    <p>{{organisationSubSchool.addressLine1}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine2\">\r\n                    <p><b>Address line 2</b></p>\r\n                    <p>{{organisationSubSchool.addressLine2}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Country</b></p>\r\n                    <p>{{organisationSubSchool.country}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>State</b></p>\r\n                    <p>{{organisationSubSchool.state}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.city\">\r\n                    <p><b>City</b></p>\r\n                    <p>{{organisationSubSchool.city}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Pincode</b></p>\r\n                    <p>{{organisationSubSchool.pincode}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                    data-toggle=\"collapse\">Contact information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Name</b></p>\r\n                    <p>{{organisationSubSchool.primaryContactName}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Designation</b></p>\r\n                    <p>{{organisationSubSchool.primaryContactDesignation}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Phone number</b></p>\r\n                    <p>{{organisationSubSchool.primaryContactPhone}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Email</b></p>\r\n                    <p>{{organisationSubSchool.primaryContactMail}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-manage.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-manage.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n    </div>\r\n    <a [routerLink]=\"['/organisation',organisationId, 'school', 'create']\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','ORG_MANAGER']\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create subsidiary school\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"table-responsive\" *ngIf=\"schoolList\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"id\">ID<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"name\">School name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"city\">City <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">School user<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let school of schoolList;trackBy: trackId\">\r\n                <td data-column=\"ID\">{{school.id}}</td>\r\n                <td data-column=\"School name\">{{school.name}}</td>\r\n                <td data-column=\"City\">{{school.city}}</td>\r\n                <td class=\"fixed-column\" data-column=\"School users\">\r\n                    <a class=\"btn btn-outline-primary mr-1\"\r\n                        [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'school-user']\">\r\n                        <i class=\"fa fa-cog mr-2\"></i>\r\n                        Manage\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div class=\"d-flex\">\r\n                        <a class=\"btn btn-outline-info btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'view']\"\r\n                            tooltip=\"View school\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-outline-success btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId, 'school', school.id, 'edit']\"\r\n                            tooltip=\"Edit school\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-update.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-update.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n    <fieldset [formGroup]=\"organisationSubSchoolForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">School information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"orgName\">School name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter school name (min length: 3 and max length: 50)\" formControlName=\"schoolName\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"number\" class=\"form-control\"\r\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\r\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"country\">Country</label>\r\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n                    formControlName=\"country\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"state\">State</label>\r\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\r\n                    formControlName=\"state\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\r\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"number\">Pin code</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\r\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgSchoolInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset [formGroup]=\"contactInfoForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Primary contact information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"fName\">Name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"designation\">Designation</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"emailId\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\r\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"phone\">Mobile number</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\r\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\"\r\n            (click)=\"mapOrganisationSubSchoolData()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">School information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>School name</b></p>\r\n                            <p>{{organisationSubSchool.name}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\"\r\n                            *ngIf=\"organisationSubSchool.registrationNumber\">\r\n                            <p><b>Registration number</b></p>\r\n                            <p>{{organisationSubSchool.registrationNumber}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine1\">\r\n                            <p><b>Address line 1</b></p>\r\n                            <p>{{organisationSubSchool.addressLine1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.addressLine2\">\r\n                            <p><b>Address line 2</b></p>\r\n                            <p>{{organisationSubSchool.addressLine2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Country</b></p>\r\n                            <p>{{organisationSubSchool.country}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>State</b></p>\r\n                            <p>{{organisationSubSchool.state}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisationSubSchool.city\">\r\n                            <p><b>City</b></p>\r\n                            <p>{{organisationSubSchool.city}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Pincode</b></p>\r\n                            <p>{{organisationSubSchool.pincode}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Contact information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Name</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Designation</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactDesignation}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactPhone}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisationSubSchool.primaryContactMail}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"updateOrganisationSubSchool()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-create.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-create.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\" [formGroup]=\"organisationAdminUserForm\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">Personal information</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"firstName\">First name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\r\n                formControlName=\"firstName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"lastName\">Last name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\r\n                formControlName=\"lastName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"gender\">Gender *</label>\r\n            <div class=\"row mx-0\">\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\r\n                </div>\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dob\">Date of birth *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dobDate\" class=\"form-control\" placeholder=\"Select date of birth\"\r\n                    [(ngModel)]=\"dateOfBirth\" #dobDate=\"ngModel\" trim id=\"dateOfBirth\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dateOfJoining\">Date of joining *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dateOfJoining\" class=\"form-control\" placeholder=\"Select joining date\"\r\n                    [(ngModel)]=\"joiningDate\" #dateOfJoining=\"ngModel\" trim id=\"joiningDate\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"email\">Email *</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\"\r\n                required maxlength=\"50\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"mobile\">Mobile number *</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"phoneNumber\"\r\n                minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n        </div>\r\n        <button class=\"next btn btn-success ml-3 float-right\" [disabled]=\"validatePersonalInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Role information *</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\r\n                <div class=\"checkbox\">\r\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\r\n                    <label for=\"{{data.id}}\"></label>\r\n                </div>\r\n                <label for=\"{{data.id}}\">\r\n                    {{data.name}}\r\n                </label>\r\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\r\n                    <i class=\"fa fa-user mr-2\"></i> Role information\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-3 float-right d-block\" [disabled]=\"validateRoleInfo\"\r\n            (click)=\"mapOrgUserAdminUserData()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>First name</b></p>\r\n                            <p>{{organisationAdminUser.user.givenName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Last name</b></p>\r\n                            <p>{{organisationAdminUser.user.lastName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Gender</b></p>\r\n                            <p>{{organisationAdminUser.user.gender}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of birth</b></p>\r\n                            <p>{{dateOfBirth}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of joining</b></p>\r\n                            <p>{{joiningDate}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisationAdminUser.user.mobileNumber}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisationAdminUser.user.email}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Role information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Selected role</b></p>\r\n                            <p>\r\n                                {{authorityNames}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"saveOrganisationUserAdmin()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n        <a class=\"btn btn-success\"\r\n            [routerLink]=\"['/organisation', organisationId,  'organisation-user', organisationUserId , 'edit']\">\r\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation user\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"accordion\" id=\"organisationCnf\">\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\r\n                    aria-expanded=\"true\">Personal information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>First name</b></p>\r\n                    <p>{{organisationAdminUser.givenName}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Last name</b></p>\r\n                    <p>{{organisationAdminUser.lastName}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Gender</b></p>\r\n                    <p>{{organisationAdminUser.gender}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Date of birth</b></p>\r\n                    <p>{{organisationAdminUser.dateOfBirth}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Date of joining</b></p>\r\n                    <p>{{organisationAdminUser.joiningDate}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Email</b></p>\r\n                    <p>{{organisationAdminUser.email}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Phone number</b></p>\r\n                    <p>{{organisationAdminUser.mobileNumber}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                    data-toggle=\"collapse\">Role information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Selected role</b></p>\r\n                    <p>\r\n                        {{authorityNames}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-manage.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-manage.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n    </div>\r\n    <a [routerLink]=\"['/organisation',organisationId, 'organisation-user', 'create']\"\r\n        *iusHasAnyAuthority=\"['SYSTEM_ADMIN','ORG_MANAGER']\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create organisation user\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"table-responsive\" *ngIf=\"organisationAdminUserList\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"loginId\">Login ID <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"fName\">First name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"lName\">Last name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"status\">Status<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let orgUser of organisationAdminUserList;trackBy: trackId;\">\r\n                <td data-column=\"Login ID\">{{orgUser.login}}</td>\r\n                <td data-column=\"First Name\">{{orgUser.givenName}}</td>\r\n                <td data-column=\"Last Name\">{{orgUser.lastName}}</td>\r\n                <td data-column=\"Status\">\r\n                    <span *ngIf=\"orgUser.activated === true\">Active</span>\r\n                    <span *ngIf=\"orgUser.activated === false\">Inactive</span>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div class=\"d-flex\">\r\n                        <a class=\"btn btn-outline-info btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId, 'organisation-user', orgUser.id, 'view']\"\r\n                            tooltip=\"View organisation user\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-outline-success btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.id, 'edit']\"\r\n                            tooltip=\"Edit organisation user\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-outline-primary btn-icon justify-content-center align-items-center mr-1 mb-1\"\r\n                            *ngIf=\"orgUser.activated === false\" tooltip=\"Activate user\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.login, 'activate']\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-outline-danger btn-icon justify-content-center align-items-center mr-1 mb-1\"\r\n                            *ngIf=\"orgUser.activated === true\" tooltip=\"Deactivate user\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.login, 'deactivate']\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-outline-danger btn-icon d-flex justify-content-center align-items-center mb-1\"\r\n                            [routerLink]=\"['/organisation',organisationId,  'organisation-user', orgUser.id, 'reset-pin']\"\r\n                            tooltip=\"OTP verification\">\r\n                            <i class=\"fa fa-mobile\"></i>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-update.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-update.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\" [formGroup]=\"organisationAdminUserForm\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">Personal information</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"firstName\">First name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\"\r\n                formControlName=\"firstName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"lastName\">Last name *</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\"\r\n                formControlName=\"lastName\" required maxlength=\"30\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"gender\">Gender *</label>\r\n            <div class=\"row mx-0\">\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"MALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"male\">Male</label>\r\n                </div>\r\n                <div class=\"radio mr-2\">\r\n                    <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"FEMALE\" name=\"gender\" required>\r\n                    <label class=\"custom-control-label\" for=\"female\">Female</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dob\">Date of birth *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dobDate\" class=\"form-control\" placeholder=\"Select date of birth\"\r\n                    [(ngModel)]=\"dateOfBirth\" #dobDate=\"ngModel\" trim id=\"dateOfBirth\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"dateOfJoining\">Date of joining *</label>\r\n            <div class=\"input-group date datepicker-default\" data-date-format=\"dd-mm-yyyy\">\r\n                <input type=\"text\" name=\"dateOfJoining\" class=\"form-control\" placeholder=\"Select joining date\"\r\n                    [(ngModel)]=\"joiningDate\" #dateOfJoining=\"ngModel\" trim id=\"joiningDate\"\r\n                    [ngModelOptions]=\"{standalone: true}\" datepicker>\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"email\">Email *</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"emailId\"\r\n                required maxlength=\"50\">\r\n        </div>\r\n        <div class=\"form-group col-xxl-6 px-0\">\r\n            <label for=\"mobile\">Mobile number *</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\" formControlName=\"phoneNumber\"\r\n                minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n        </div>\r\n        <button class=\"next btn btn-success ml-3 float-right\" [disabled]=\"validatePersonalInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Role information *</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-start\" *ngFor=\"let data of authorities\">\r\n                <div class=\"checkbox\">\r\n                    <input type=\"checkbox\" [id]=\"data.id\" [checked]=\"data.checked\" (click)=\"onRoleSelection($event)\">\r\n                    <label for=\"{{data.id}}\"></label>\r\n                </div>\r\n                <label for=\"{{data.id}}\">\r\n                    {{data.name}}\r\n                </label>\r\n                <div class=\"btn btn-outline-primary btn-sm ml-2 mb-2\">\r\n                    <i class=\"fa fa-user mr-2\"></i> Role information\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-3 float-right d-block\" [disabled]=\"validateRoleInfo\"\r\n            (click)=\"mapOrgUserAdminUserData()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Personal information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>First name</b></p>\r\n                            <p>{{organisationAdminUser.givenName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Last name</b></p>\r\n                            <p>{{organisationAdminUser.lastName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Gender</b></p>\r\n                            <p>{{organisationAdminUser.gender}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of birth</b></p>\r\n                            <p>{{organisationAdminUser.dateOfBirth}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Date of joining</b></p>\r\n                            <p>{{organisationAdminUser.joiningDate}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisationAdminUser.email}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisationAdminUser.mobileNumber}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Role information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Selected role</b></p>\r\n                            <p>\r\n                                {{authorityNames}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn btn-success ml-3 float-right\" (click)=\"saveOrganisationAdminUser()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-create.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-create.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset [formGroup]=\"organisationInfoForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">Organisation information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN']\">\r\n                <label for=\"orgName\">Organisation type</label>\r\n                <ng-select [items]=\"organisationTypes\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select organisation type\" [(ngModel)]=\"selectedOrganisationType\"\r\n                    formControlName=\"organisationType\" [searchable]=\"false\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\" *iusHasAnyAuthority=\"['SALES_SUPPORT']\">\r\n                <label for=\"orgName\">Organisation type</label>\r\n                <input type=\"text\" value=\"School organisation\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"orgName\">Organisation name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter organisation name (min length: 3 and max length: 50)\"\r\n                    formControlName=\"organisationName\" minlength=\"3\" maxlength=\"50\"\r\n                    inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\r\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"country\">Country</label>\r\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n                    formControlName=\"country\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"state\">State</label>\r\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\r\n                    formControlName=\"state\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\r\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"number\">Pin code</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\r\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset [formGroup]=\"contactInfoForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Primary contact information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"fName\">Name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"designation\">Designation</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"emailId\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\r\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"phone\">Mobile number</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\r\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div *ngIf=\"selectedOrganisationType\">\r\n            <div *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\r\n                <div class=\"row pb-4\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <h2 class=\"font-20\">Curriculum information</h2>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-6 d-flex justify-content-start\" *ngFor=\"let data of curriculums;\">\r\n                        <div class=\"checkbox\">\r\n                            <input type=\"checkbox\" id=\"{{data.id}}\" [checked]=\"data.checked\"\r\n                                (click)=\"onCurriculumSelection($event)\">\r\n                            <label for=\"{{data.id}}\"></label>\r\n                        </div>\r\n                        <label for=\"{{data.id}}\">\r\n                            {{data.acronym}}\r\n                        </label>\r\n                        <div class=\"btn btn-icon d-flex justify-content-center align-items-center btn-outline-info align-self-center ml-4 mb-3\"\r\n                            (click)=\"showCurriculumDetails(data.id)\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div [formGroup]=\"examTypeForm\">\r\n                    <div class=\"row d-flex mb-2 align-items-end col-xxl-6 px-0\"\r\n                        *ngFor=\"let row of examTypeForm.get('examTypesList')?.controls;let index = index;\">\r\n                        <div class=\"col-xxl-8\">\r\n                            <label>Exam name</label>\r\n                            <input class=\"form-control\" [formControl]=\"row.get('examType')\" type=\"text\" minlength=\"3\"\r\n                                maxlength=\"50\" placeholder=\"Enter exam name\" />\r\n                        </div>\r\n                        <div class=\"btn btn-xxl btn-outline-danger\" (click)=\"deleteExamType(index)\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-muted font-15 my-2 w-100\">\r\n                        Allowed characters - Alphabets, Numbers and Special characters\r\n                    </div>\r\n                    <div class=\"btn btn-info\" (click)=\"addExamType()\">\r\n                        <i class=\"fa fa-plus-circle mr-2\"></i>Add exam type\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedOrganisationType.tag === 'SUPER' \">\r\n                <div class=\"border-warning alert-warning p-2 mb-2\">\r\n                    Coming soon..!\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedOrganisationType.tag === 'RETAILER' \">\r\n                <div class=\"border-warning alert-warning p-2 mb-2\">\r\n                    Coming soon..!\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-2 float-right\" (click)=\"mapOrganisationData()\"\r\n            [disabled]=\"validateCurriculumInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Organisation information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Organisation type</b></p>\r\n                            <p>{{organisation.organisationType}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Organisation name</b></p>\r\n                            <p>{{organisation.name}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.registrationNumber\">\r\n                            <p><b>Registration number</b></p>\r\n                            <p>{{organisation.registrationNumber}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine1\">\r\n                            <p><b>Address line 1</b></p>\r\n                            <p>{{organisation.addressLine1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine2\">\r\n                            <p><b>Address line 2</b></p>\r\n                            <p>{{organisation.addressLine2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Country</b></p>\r\n                            <p>{{organisation.country}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>State</b></p>\r\n                            <p>{{organisation.state}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.city\">\r\n                            <p><b>City</b></p>\r\n                            <p>{{organisation.city}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.pincode\">\r\n                            <p><b>Pincode</b></p>\r\n                            <p>{{organisation.pincode}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Contact information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Name</b></p>\r\n                            <p>{{organisation.primaryContactName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Designation</b></p>\r\n                            <p>{{organisation.primaryContactDesignation}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisation.primaryContactPhone}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisation.primaryContactMail}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\" *ngIf=\"selectedOrganisationType\">\r\n                <div class=\"card-header border\" *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Curriculum information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Curriculum</b></p>\r\n                            <p>{{curriculumNames}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"examTypes\">\r\n                            <p><b>Exam types</b></p>\r\n                            <p>{{examTypes}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn btn-success ml-3 float-right\" (click)=\"saveOrganisation()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewCurriculumDetailModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    View curriculum\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeViewCurriculum()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Curriculum name</b></p>\r\n                    <p>{{curriculum.acronym}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Description</b></p>\r\n                    <p>{{curriculum.description}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>From grade</b></p>\r\n                    <p>{{curriculum.gradesApplicableFrom}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>To grade</b></p>\r\n                    <p>{{curriculum.gradesApplicableTo}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Country</b></p>\r\n                    <p>{{country}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>State</b></p>\r\n                    <p>{{curriculum.state}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Start date</b></p>\r\n                    <p>{{startDate}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>End date</b></p>\r\n                    <p>{{endDate}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-danger\" (click)=\"closeViewCurriculum()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Close\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n        <a class=\"btn btn-success\" [routerLink]=\"['/organisation',organisation.id, 'edit']\">\r\n            <i class=\"fa fa-edit mr-2\"></i>Edit organisation\r\n        </a>\r\n    </div>\r\n</div>\r\n<div class=\"accordion\" id=\"organisationCnf\">\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\" data-toggle=\"collapse\"\r\n                    aria-expanded=\"true\">Organisation information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Organisation type</b></p>\r\n                    <p>{{organisationType}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Organisation name</b></p>\r\n                    <p>{{organisation.name}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.registrationNumber\">\r\n                    <p><b>Registration number</b></p>\r\n                    <p>{{organisation.registrationNumber}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine1\">\r\n                    <p><b>Address line 1</b></p>\r\n                    <p>{{organisation.addressLine1}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine2\">\r\n                    <p><b>Address line 2</b></p>\r\n                    <p>{{organisation.addressLine2}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Country</b></p>\r\n                    <p>{{organisation.country}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>State</b></p>\r\n                    <p>{{organisation.state}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.city\">\r\n                    <p><b>City</b></p>\r\n                    <p>{{organisation.city}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.pincode\">\r\n                    <p><b>Pincode</b></p>\r\n                    <p>{{organisation.pincode}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                    data-toggle=\"collapse\">Contact information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Name</b></p>\r\n                    <p>{{organisation.primaryContactName}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Designation</b></p>\r\n                    <p>{{organisation.primaryContactDesignation}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Phone number</b></p>\r\n                    <p>{{organisation.primaryContactPhone}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Email</b></p>\r\n                    <p>{{organisation.primaryContactMail}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-2 acd-group\">\r\n        <div class=\"card-header border\">\r\n            <h5 class=\"mb-0\">\r\n                <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                    data-toggle=\"collapse\">Curriculum information</a>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n            <div class=\"card-body p-3\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Curriculum</b></p>\r\n                    <p>{{curriculumNames}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.examType\">\r\n                    <p><b>Exam types</b></p>\r\n                    <p>{{organisation.examType}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-licenses.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-licenses.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-between align-items-start mt-3\">\r\n    <div class=\"btn btn-danger mr-2\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left  mb-2 mr-2\"></i> Back\r\n    </div>\r\n    <!-- *iusHasAnyAuthority=\"['SCHOOL_ORG_ADMIN']\" -->\r\n    <div>\r\n        <div class=\"btn mb-2\" [ngClass]=\"{ 'btn-success': cellAction === true, 'btn-danger': cellAction === false }\"\r\n            (click)=\"editBuyLicenses()\">\r\n            <span *ngIf=\"cellAction\"><i class=\"fa fa-edit mr-2\"></i>Edit buy licenses</span>\r\n            <span *ngIf=\"!cellAction\"><i class=\"fa fa-times mr-2\"></i>Clear</span>\r\n        </div>\r\n        <div class=\"btn btn-info mb-2 ml-2\" (click)=\"payAmount()\" *ngIf=\"!cellAction\">\r\n            <i class=\"fa fa-inr mr-2\"></i>Pay {{totalAmount | round}}\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"courseTitle\">Title<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"basePrice\">Base price<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"currentDiscount\">Discount (%)<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"afterDiscountPrice\">After discount price<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"totalLicencesCount\">Total licenses<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"usedLicensesCount\">Used licenses<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"requiredLicenses\">Buy licenses</th>\r\n                <th jhiSortBy=\"amountPerLicense\">Total amount</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let data of orgLicensesList;let index = index\">\r\n                <td data-column=\"Title\">{{data.courseTitle}}</td>\r\n                <td data-column=\"Base price\">{{data.basePrice}}</td>\r\n                <td data-column=\"Discount\">{{data.currentDiscount}}</td>\r\n                <td data-column=\"After discount price\">{{data.amountPerLicense | round}}</td>\r\n                <td data-column=\"Total licenses\">{{data.totalLicencesCount}}</td>\r\n                <td data-column=\"Used licenses\">{{data.usedLicensesCount}}</td>\r\n                <td data-column=\"Buy licenses\">\r\n                    <input type=\"number\" [(ngModel)]=\"data.newLicensesCount\" class=\"form-control\"\r\n                        [disabled]=\"cellAction\" placeholder=\"Enter license count\"\r\n                        (ngModelChange)=\"calculateTotalAmount(index)\">\r\n                </td>\r\n                <td data-column=\"Total amount\">\r\n                    {{data.totalAmount}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"license\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Buy licenses\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeLicenseModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label>Course title</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"CBSE.9\" readonly>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Base price</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"6000\" readonly>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Discount (%)</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"10\" readonly>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Amount per license</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"5400\" readonly>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Number of licenses *</label>\r\n                    <input type=\"number\" class=\"form-control\" value=\"100\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Total amount</label>\r\n                    <input type=\"number\" class=\"form-control\" value=\"600000\" readonly>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"d-flex\">\r\n                    <button class=\"btn btn-danger mr-2\" (click)=\"closeLicenseModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </button>\r\n                    <button class=\"btn btn-success\" (click)=\"payAmount()\">\r\n                        <i class=\"fa fa-inr mr-2\"></i>\r\n                        Pay amount\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-manage.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-manage.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-end my-3\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','ORG_MANAGER']\">\r\n    <a routerLink=\"/organisation/create\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create organisation\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"table-responsive\" *ngIf=\"organisations\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"name\">Organisation name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"organisationType\">Organisation type <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Subsidiary schools</th>\r\n                <th class=\"fixed-column\">Organisation users</th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let organisation of organisations ;trackBy: trackId\">\r\n                <td data-column=\"Organisation name\">{{organisation.name}}</td>\r\n                <td data-column=\"Organisation type\">\r\n                    <span *ngIf=\"organisation.organisationType === 'SUPER'\">\r\n                        Super\r\n                    </span>\r\n                    <span *ngIf=\"organisation.organisationType === 'SCHOOL_ORG'\">\r\n                        School organisation\r\n                    </span>\r\n                    <span *ngIf=\"organisation.organisationType === 'RETAILER'\">\r\n                        Retailer\r\n                    </span>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Subsidiary schools\">\r\n                    <a class=\"btn btn-outline-primary mr-1\" *ngIf=\"organisation.organisationType !== 'SUPER'\"\r\n                        [routerLink]=\"['/organisation', organisation.id, 'school' ]\">\r\n                        <i class=\"fa fa-cog mr-2\"></i>\r\n                        Manage\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Organisation users\">\r\n                    <a class=\"btn btn-outline-primary mr-1\"\r\n                        [routerLink]=\"['/organisation', organisation.id, 'organisation-user' ]\">\r\n                        <i class=\"fa fa-cog mr-2\"></i>\r\n                        Manage\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div class=\"d-flex\">\r\n                        <a class=\"btn btn-outline-info btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation', organisation.id, 'view' ]\" tooltip=\"View organisation\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-success btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/organisation', organisation.id, 'edit']\" tooltip=\"Edit organisation\"\r\n                            *iusHasAnyAuthority=\"['SYSTEM_ADMIN','ORG_MANAGER']\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-primary btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            tooltip=\"Price configuration\"\r\n                            [routerLink]=\"['/organisation', organisation.id, 'price-config']\"\r\n                            *iusHasAnyAuthority=\"['SYSTEM_ADMIN']\">\r\n                            <i class=\"fa fa-inr\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-primary btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            tooltip=\"Purchase history\"\r\n                            [routerLink]=\"['/organisation', organisation.id, 'purchase-history']\">\r\n                            <i class=\"fa fa-history\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-primary btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            tooltip=\"Manage licenses\"\r\n                            [routerLink]=\"['/organisation', organisation.id, 'manage-licenses']\">\r\n                            <span class=\"font-18\">L</span>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-pricing-config.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-pricing-config.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger mr-2\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n    <div class=\"btn btn-success mr-2\" (click)=\"editDiscountDetails()\">\r\n        <i class=\"fa fa-edit mr-2\"></i> Edit discount\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"courseTitle\">Course title<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"basePrice\">Base price<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"currentDiscount\">Discount (%)<span class=\"fa fa-sort ml-1\"></span></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let data of courseList;let index = index\">\r\n                <td data-column=\"Title\">{{data.courseTitle}}</td>\r\n                <td data-column=\"Base price\">{{data.basePrice}}</td>\r\n                <td data-column=\"Discount\">\r\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"data.currentDiscount\" [disabled]=\"cellAction\"\r\n                        placeholder=\"Enter discount\">\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <!-- (change)=\"onCellEditable(index, $event, data.courseId)\" -->\r\n</div>\r\n<div class=\"w-100 d-flex justify-content-end my-3\">\r\n    <button class=\"btn btn-success mr-2\" (click)=\"updateDiscountDetails()\" [disabled]=\"cellAction\">\r\n        <i class=\"fa fa-save mr-2\"></i> Save\r\n    </button>\r\n    <button class=\"btn btn-danger mr-2\" (click)=\"resetDiscountDetails()\" [disabled]=\"cellAction\">\r\n        <i class=\"fa fa-times mr-2\"></i> Reset\r\n    </button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-purchase-history.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-purchase-history.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-start my-3\">\r\n    <a (click)=\"onBack()\">\r\n        <div class=\"btn btn-danger mr-2\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"purchasedDate\">Purchased date<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"amountPaid\">Amount paid<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let data of invoiceList; let index = index\">\r\n                <td data-column=\"Purchased date\">{{data.purchasedDate}}\r\n                </td>\r\n                <td data-column=\"Amount paid\">{{data.totalAmount}}</td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div class=\"d-flex\">\r\n                        <a class=\"btn btn-info d-flex justify-content-center align-items-center mr-1 mb-1\">\r\n                            <i class=\"fa fa-eye mr-2\"></i> View & download invoice\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-update.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-update.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-3 px-2\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n            <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset [formGroup]=\"organisationInfoForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h5 class=\"font-20\">Organisation information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"orgName\">Organisation type</label>\r\n                <ng-select [items]=\"organisationTypes\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select organisation type\" [(ngModel)]=\"selectedOrganisationType\"\r\n                    formControlName=\"organisationType\" [searchable]=\"false\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"orgName\">Organisation name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter organisation name (min length: 3 and max length: 50)\"\r\n                    formControlName=\"organisationName\" minlength=\"3\" maxlength=\"50\"\r\n                    inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"regNumber\">Registration number <span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter registration number (min length: 3 and max length: 25)\"\r\n                    formControlName=\"registrationNumber\" minlength=\"3\" maxlength=\"25\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address1\">Address line 1<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 1 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineOne\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"address2\">Address line 2<span class=\"text-muted\">(Optional)</span></label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter address line 2 (min length: 3 and max length: 250)\"\r\n                    formControlName=\"addressLineTwo\" minlength=\"3\" maxlength=\"250\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"country\">Country</label>\r\n                <ng-select [items]=\"countries\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n                    formControlName=\"country\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"state\">State</label>\r\n                <ng-select [items]=\"states\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select state\" [(ngModel)]=\"selectedState\" (change)=\"onStateChange()\"\r\n                    formControlName=\"state\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"city\">City<span class=\"text-muted\">(Optional)</span></label>\r\n                <ng-select [items]=\"cities\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select city\" [(ngModel)]=\"selectedCity\">\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"number\">Pin code </label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter pin code (min length: 6 and max length: 10)\"\r\n                    formControlName=\"pincode\" minlength=\"6\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateOrgInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset [formGroup]=\"contactInfoForm\">\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 d-flex justify-content-between align-items-start\">\r\n                <h5 class=\"font-20\">Primary contact information</h5>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"fName\">Name</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter contact name (min length: 3 and max length: 50)\" formControlName=\"contactName\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"designation\">Designation</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter designation (min length: 3 and max length: 50)\" formControlName=\"designation\"\r\n                    minlength=\"3\" maxlength=\"50\" inputRestriction=\"alphabetsWithSpace\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"emailId\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email (min length: 3 and max length: 50)\"\r\n                    formControlName=\"emailId\" minlength=\"3\" maxlength=\"50\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Alphabets, Numbers and Special characters\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-xxl-6 p-0\">\r\n                <label for=\"phone\">Mobile number</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Enter mobile number (min length: 10 and max length: 10)\" formControlName=\"phoneNumber\"\r\n                    minlength=\"10\" maxlength=\"10\" inputRestriction=\"onlyIntegers\">\r\n                <div class=\"text-muted font-15 my-2\">\r\n                    Allowed characters - Numbers\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success ml-2 float-right\" [disabled]=\"validateContactInfo\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div   [formGroup]=\"examTypeForm\">\r\n            <div *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\r\n                <div class=\"row pb-4\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <h2 class=\"font-20\">Curriculum information</h2>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-6 d-flex justify-content-start\" *ngFor=\"let data of curriculums;\">\r\n                        <div class=\"checkbox\">\r\n                            <input type=\"checkbox\" id=\"{{data.id}}\" [checked]=\"data.checked\"\r\n                                (click)=\"onCurriculumSelection($event)\">\r\n                            <label for=\"{{data.id}}\"></label>\r\n                        </div>\r\n                        <label for=\"{{data.id}}\">\r\n                            {{data.acronym}}\r\n                        </label>\r\n                        <div class=\"btn btn-icon d-flex justify-content-center align-items-center btn-outline-info align-self-center ml-4 mb-3\"\r\n                            (click)=\"showCurriculumDetails(data.id)\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"examTypesList.length > 0\">\r\n                    <div class=\"row d-flex mb-2 align-items-end col-xxl-6 px-0\"\r\n                        *ngFor=\"let data of examTypesList;let index = index;\">\r\n                        <div class=\"col-xxl-8\">\r\n                            <label>Exam name</label>\r\n                            <input class=\"form-control\" type=\"text\" minlength=\"3\" maxlength=\"50\"\r\n                                placeholder=\"Enter exam name\" [value]=\"data\" readonly />\r\n                        </div>\r\n                        <div class=\"btn btn-xxl btn-outline-danger\" data-action=\"edit\"\r\n                            (click)=\"deleteExamType($event,index)\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row d-flex mb-2 align-items-end col-xxl-6 px-0\"\r\n                    *ngFor=\"let row of examTypeForm.get('updatedExamTypesList')?.controls;let index = index;\">\r\n                    <div class=\"col-xxl-8\">\r\n                        <label>Exam name</label>\r\n                        <input class=\"form-control\" [formControl]=\"row.get('examType')\" type=\"text\" minlength=\"3\"\r\n                            maxlength=\"50\" placeholder=\"Enter exam name\" />\r\n                    </div>\r\n                    <div class=\"btn btn-xxl btn-outline-danger\" data-action=\"create\"\r\n                        (click)=\"deleteExamType($event,index)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                    </div>\r\n                    <div class=\"text-muted font-15 my-2 w-100 px-4\">\r\n                        Allowed characters - Alphabets, Numbers and Special characters\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn btn-info\" (click)=\"addExamType()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i>Add exam type\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedOrganisationType.tag === 'SUPER' \">\r\n                <div class=\"border-warning alert-warning p-2 mb-2\">\r\n                    Coming soon..!\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"selectedOrganisationType.tag === 'RETAILER' \">\r\n                <div class=\"border-warning alert-warning p-2 mb-2\">\r\n                    Coming soon..!\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success mx-3 float-right\" [disabled]=\"validateCurriculumInfo\"\r\n            (click)=\"mapOrganisationData()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12\">\r\n                <h2 class=\"font-20\">Summary</h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"accordion\" id=\"organisationCnf\">\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion1\" class=\"btn-block text-left text-muted acd-heading\"\r\n                            data-toggle=\"collapse\" aria-expanded=\"true\">Organisation information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion1\" class=\"collapse show\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Organisation type</b></p>\r\n                            <p>{{organisation.organisationType}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Organisation name</b></p>\r\n                            <p>{{organisation.name}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.registrationNumber\">\r\n                            <p><b>Registration number</b></p>\r\n                            <p>{{organisation.registrationNumber}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine1\">\r\n                            <p><b>Address line 1</b></p>\r\n                            <p>{{organisation.addressLine1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.addressLine2\">\r\n                            <p><b>Address line 2</b></p>\r\n                            <p>{{organisation.addressLine2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Country</b></p>\r\n                            <p>{{organisation.country}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>State</b></p>\r\n                            <p>{{organisation.state}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.city\">\r\n                            <p><b>City</b></p>\r\n                            <p>{{organisation.city}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"organisation.pincode\">\r\n                            <p><b>Pincode</b></p>\r\n                            <p>{{organisation.pincode}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\">\r\n                <div class=\"card-header border\">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion2\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Contact information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion2\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Name</b></p>\r\n                            <p>{{organisation.primaryContactName}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Designation</b></p>\r\n                            <p>{{organisation.primaryContactDesignation}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Phone number</b></p>\r\n                            <p>{{organisation.primaryContactPhone}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Email</b></p>\r\n                            <p>{{organisation.primaryContactMail}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2 acd-group\" *ngIf=\"selectedOrganisationType\">\r\n                <div class=\"card-header border\" *ngIf=\"selectedOrganisationType.tag === 'SCHOOL_ORG' \">\r\n                    <h5 class=\"mb-0\">\r\n                        <a href=\"#collpaseAccordion3\" class=\"btn-block text-left text-muted acd-heading collapsed\"\r\n                            data-toggle=\"collapse\">Curriculum information</a>\r\n                    </h5>\r\n                </div>\r\n                <div id=\"collpaseAccordion3\" class=\"collapse\" data-parent=\"#organisationCnf\">\r\n                    <div class=\"card-body p-3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Curriculum</b></p>\r\n                            <p>{{curriculumNames}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\" *ngIf=\"examTypes\">\r\n                            <p><b>Exam types</b></p>\r\n                            <p>{{examTypes}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn btn-success ml-2 float-right\" (click)=\"updateOrganisation()\">\r\n            <i class=\"fa fa-save mr-2\"></i> Save\r\n        </div>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewCurriculumDetailEditModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    View curriculum\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" data-dismiss=\"modal\" (click)=\"closeViewCurriculum()\" aria-label=\"Close\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Curriculum name</b></p>\r\n                    <p>{{curriculum.acronym}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Description</b></p>\r\n                    <p>{{curriculum.description}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>From grade</b></p>\r\n                    <p>{{curriculum.gradesApplicableFrom}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>To grade</b></p>\r\n                    <p>{{curriculum.gradesApplicableTo}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Country</b></p>\r\n                    <p>{{country}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>State</b></p>\r\n                    <p>{{curriculum.state}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>Start date</b></p>\r\n                    <p>{{startDate}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                    <p><b>End date</b></p>\r\n                    <p>{{endDate}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button class=\"btn btn-danger\" (click)=\"closeViewCurriculum()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-promotions/student-promotions.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-promotions/student-promotions.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3 alert-warning w-100\">\r\n  Coming soon..!\r\n</div>");

/***/ }),

/***/ "./src/app/curriculum/curriculum.service.ts":
/*!**************************************************!*\
  !*** ./src/app/curriculum/curriculum.service.ts ***!
  \**************************************************/
/*! exports provided: CurriculumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumService", function() { return CurriculumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");







let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let CurriculumService = class CurriculumService {
    constructor(http) {
        this.http = http;
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["curriculum"];
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["curriculumSearch"];
        this.curriculumAffiliationResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["curriculumAffiliations"];
    }
    createCurriculum(curriculum) {
        return this.http.post(this.curriculumResourceUrl, curriculum, { observe: 'response' });
    }
    updateCurriculum(curriculum) {
        return this.http.put(this.curriculumResourceUrl, curriculum, { observe: 'response' });
    }
    getCurriculumByCurriculumId(id) {
        return this.http.get(`${this.curriculumResourceUrl}/${id}`, { observe: 'response' });
    }
    getStandardCurriculums(req) {
        const options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        var reqJSON = {
            "isExtraCurriculum": false
        };
        return this.http.post(this.curriculumResourceUrlSearch, reqJSON, { params: options, observe: 'response' });
    }
    getCurriculumSearch(req) {
        const options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        var reqJSON = {
            "isExtraCurriculum": false,
            "status": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"]
        };
        return this.http.post(this.curriculumResourceUrlSearch, reqJSON, { params: options, observe: 'response' });
    }
    deleteCurriculum(id) {
        return this.http.delete(`${this.curriculumResourceUrl}/${id}`, { observe: 'response' });
    }
    getAffiliationsByCurriculumId(id) {
        return this.http.get(`${this.curriculumAffiliationResourceUrlSearch}/${id}`, { observe: 'response' });
    }
};
CurriculumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CurriculumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CurriculumService);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-activate.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-activate.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OrganisationSchoolUserActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserActivateComponent", function() { return OrganisationSchoolUserActivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");






let OrganisationSchoolUserActivateComponent = class OrganisationSchoolUserActivateComponent {
    constructor(router, activatedRoute, orgSchoolService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orgSchoolService = orgSchoolService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        let login = this.activatedRoute.snapshot.paramMap.get('login');
        if (login) {
            this.orgSchoolService
                .getUserDetailByLogin(login)
                .subscribe((res) => this.assignOrgUser(res.body), (res) => this.onError(res));
        }
    }
    assignOrgUser(data) {
        this.organisationId = data.organisationId;
        this.schoolId = data.schoolId;
        this.activateUser(data);
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(), (errRes) => this.onError(errRes));
    }
    activateUser(orgUser) {
        orgUser.activated = true;
        this.subscribeToSaveResponse(this.orgSchoolService.updateSchoolUser(orgUser));
        this.previousPage();
    }
    onSaveSuccess() {
        this.pluginService.alertMessage("User activated successfully", "success");
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this.router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    }
};
OrganisationSchoolUserActivateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_3__["OrganisationSchoolUserService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"] }
];
OrganisationSchoolUserActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_3__["OrganisationSchoolUserService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"]])
], OrganisationSchoolUserActivateComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserCreateComponent", function() { return OrganisationSchoolUserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationSchoolUserCreateComponent = class OrganisationSchoolUserCreateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationSchoolAdminUser = {};
        this.authorities = [];
        this.validatePersonalInfo = true;
        this.validateRoleInfo = true;
        this.organisationSchoolAdminUser = {};
        this.organisationSchoolAdminUser.user = {};
        this.authorities = [
            {
                id: "schoolAdmin",
                role: "SCHOOL_ADMIN",
                name: "School admin",
                checked: false
            },
            {
                id: "principal",
                role: "PRINCIPAL",
                name: "Principal",
                checked: false
            }
        ];
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.schoolId = params['schoolId'];
        });
    }
    createOrganisationUserForm() {
        this.organisationSchoolAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
    }
    ngAfterViewChecked() {
        if (this.organisationSchoolAdminUserForm.invalid) {
            this.validatePersonalInfo = true;
            if (!this.dateOfBirth && !this.joiningDate) {
                this.validatePersonalInfo = true;
            }
        }
        if (this.organisationSchoolAdminUserForm.valid) {
            this.validatePersonalInfo = false;
            if (this.dateOfBirth && this.joiningDate) {
                this.validatePersonalInfo = false;
            }
            else {
                this.validatePersonalInfo = true;
            }
        }
        if (this.authorities.length > 0) {
            this.authorities.forEach((element => {
                if (element.checked === true) {
                    this.validateRoleInfo = false;
                }
            }));
        }
    }
    mapOrgSchoolAdminUserData() {
        let updatedAuthorities = [], selectedAuthorities = [];
        for (let i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationSchoolAdminUser.user = {
            givenName: this.organisationSchoolAdminUserForm.value.firstName,
            lastName: this.organisationSchoolAdminUserForm.value.lastName,
            gender: this.organisationSchoolAdminUserForm.value.gender,
            dateOfBirth: this.dateOfBirth,
            joiningDate: this.joiningDate,
            email: this.organisationSchoolAdminUserForm.value.emailId,
            mobileNumber: this.organisationSchoolAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password need Kiran's feedback
            login: this.organisationSchoolAdminUserForm.value.firstName,
            password: this.organisationSchoolAdminUserForm.value.firstName,
            authorities: updatedAuthorities,
            organisationId: this.organisationId,
            schoolId: this.schoolId
        };
    }
    onRoleSelection(event) {
        let eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        this.authorities.find(item => item.id === selectedId).checked = eventChecked;
        if (eventChecked === false) {
            this.validateRoleInfo = true;
        }
        else {
            this.validateRoleInfo = false;
        }
    }
    saveOrganisationSchoolAdminUser() {
        this.subscribeToSaveResponse(this.organisationService.createSchoolUser(this.organisationSchoolAdminUser));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation school admin user created successfully", "success");
        this.previousPage();
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationSchoolUserCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationSchoolUserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-school-user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-create.component.html")).default,
        providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationSchoolUserCreateComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-deactivate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-deactivate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OrganisationSchoolUserDeactivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDeactivateComponent", function() { return OrganisationSchoolUserDeactivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");






let OrganisationSchoolUserDeactivateComponent = class OrganisationSchoolUserDeactivateComponent {
    constructor(router, activatedRoute, orgSchoolService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orgSchoolService = orgSchoolService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        let login = this.activatedRoute.snapshot.paramMap.get('login');
        if (login) {
            this.orgSchoolService
                .getUserDetailByLogin(login)
                .subscribe((res) => this.assignOrgUser(res.body), (res) => this.onError(res));
        }
    }
    assignOrgUser(data) {
        this.organisationId = data.organisationId;
        this.schoolId = data.schoolId;
        this.activateUser(data);
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(), (errRes) => this.onError(errRes));
    }
    activateUser(orgUser) {
        orgUser.activated = false;
        this.subscribeToSaveResponse(this.orgSchoolService.updateSchoolUser(orgUser));
        this.previousPage();
    }
    onSaveSuccess() {
        this.pluginService.alertMessage("User deactivated successfully", "success");
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this.router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    }
};
OrganisationSchoolUserDeactivateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_3__["OrganisationSchoolUserService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"] }
];
OrganisationSchoolUserDeactivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: []
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_3__["OrganisationSchoolUserService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"]])
], OrganisationSchoolUserDeactivateComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDeleteComponent", function() { return OrganisationSchoolUserDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationSchoolUserDeleteComponent = class OrganisationSchoolUserDeleteComponent {
    constructor(router, activatedRoute, eventManager, organisationService, pluginService, errHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
        this.errHandler = errHandler;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.schoolId = params['schoolId'];
            this.login = params['login'];
            this.deleteOrganisationSchoolAdminUser();
        });
    }
    subscribeToDeleteResponse(resp) {
        resp.subscribe((res) => this.onDeleteSuccess(res), (res) => this.onError(res));
    }
    deleteOrganisationSchoolAdminUser() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation school admin user ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(localthisObject.login);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    }
    confirmDelete(login) {
        this.subscribeToDeleteResponse(this.organisationService.deleteSchoolUser(login));
    }
    previousUrl() {
        this.router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    }
    onDeleteSuccess(resp) {
        this.pluginService.alertMessage("Organisation school admin user deleted successfully", "success");
        this.previousUrl();
    }
    onError(errRes) {
        this.errHandler.handleError(errRes);
    }
};
OrganisationSchoolUserDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationSchoolUserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationSchoolUserDeleteComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrganisationSchoolUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDetailsComponent", function() { return OrganisationSchoolUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationSchoolUserDetailsComponent = class OrganisationSchoolUserDetailsComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationSchoolAdminUser = {};
        this.authorities = [];
        this.organisationSchoolAdminUser = {};
        this.authorities = [
            {
                id: "schoolAdmin",
                role: "SCHOOL_ADMIN",
                name: "School admin",
                checked: false
            },
            {
                id: "principal",
                role: "PRINCIPAL",
                name: "Principal",
                checked: false
            }
        ];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.schoolId = params['schoolId'];
            this.schoolUserId = params['schoolUserId'];
            this.getOrganisationUserDetails();
        });
    }
    getOrganisationUserDetails() {
        this.organisationService
            .getUserDetailByUserId(this.schoolUserId)
            .subscribe((res) => this.assignOrganisationSchoolAdminUser(res.body), (res) => this.onError(res));
    }
    assignOrganisationSchoolAdminUser(data) {
        let organisationSchoolAdminUser = data[0];
        this.patchOrganisationSchoolAdminUserForm(organisationSchoolAdminUser);
    }
    patchOrganisationSchoolAdminUserForm(organisationSchoolAdminUser) {
        let authorities = [], selectedAuthorities = [];
        authorities = organisationSchoolAdminUser.authorities;
        for (let i = 0; i < this.authorities.length; i++) {
            for (let j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                    selectedAuthorities.push(this.authorities[i].name);
                }
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationSchoolAdminUser = organisationSchoolAdminUser;
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationSchoolUserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationSchoolUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-school-user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-details.component.html")).default,
        providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationSchoolUserDetailsComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserManageComponent", function() { return OrganisationSchoolUserManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");









let OrganisationSchoolUserManageComponent = class OrganisationSchoolUserManageComponent {
    constructor(_router, activatedRoute, organisationSubSchoolService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationSubSchoolService = organisationSubSchoolService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.organisationSchoolAdminUserList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        // descending
        this.reverse = false;
    }
    ngOnInit() {
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisationSchoolAdminUser();
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.schoolId = params['schoolId'];
            this.getSchoolUserBySchoolId();
        });
    }
    getSchoolUserBySchoolId() {
        this.organisationSubSchoolService
            .getSchoolUserBySchoolId(this.organisationId, this.schoolId)
            .subscribe((res) => this.assignOrgUserList(res.body), (res) => this.onError(res));
    }
    assignOrgUserList(data) {
        this.organisationSchoolAdminUserList = data;
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    reset() {
        this.page = 0;
        this.organisationSchoolAdminUserList = [];
        this.getSchoolUserBySchoolId();
    }
    loadPage(page) {
        this.page = page;
        this.getSchoolUserBySchoolId();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.organisationId;
    }
    registerChangeInOrganisationSchoolAdminUser() {
        this.eventSubscriber = this.eventManager.subscribe('organisationSchoolUserListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'school']);
    }
};
OrganisationSchoolUserManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSchoolUserService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
OrganisationSchoolUserManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-school-user-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-manage.component.html")).default,
        providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSchoolUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSchoolUserService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], OrganisationSchoolUserManageComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganisationSchoolUserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserUpdateComponent", function() { return OrganisationSchoolUserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationSchoolUserUpdateComponent = class OrganisationSchoolUserUpdateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationSchoolAdminUser = {};
        this.authorities = [];
        this.validatePersonalInfo = true;
        this.validateRoleInfo = true;
        this.organisationSchoolAdminUser = {};
        this.authorities = [
            {
                id: "schoolAdmin",
                role: "SCHOOL_ADMIN",
                name: "School admin",
                checked: false
            },
            {
                id: "principal",
                role: "PRINCIPAL",
                name: "Principal",
                checked: false
            }
        ];
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.schoolId = params['schoolId'];
            this.schoolUserId = params['schoolUserId'];
            this.getOrganisationUserDetails();
        });
    }
    createOrganisationUserForm() {
        this.organisationSchoolAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
    }
    ngAfterViewChecked() {
        if (this.organisationSchoolAdminUserForm.invalid) {
            this.validatePersonalInfo = true;
            if (!this.dateOfBirth && !this.joiningDate) {
                this.validatePersonalInfo = true;
            }
        }
        if (this.organisationSchoolAdminUserForm.valid) {
            this.validatePersonalInfo = false;
            if (this.dateOfBirth && this.joiningDate) {
                this.validatePersonalInfo = false;
            }
            else {
                this.validatePersonalInfo = true;
            }
        }
        if (this.authorities.length > 0) {
            this.authorities.forEach((element => {
                if (element.checked === true) {
                    this.validateRoleInfo = false;
                }
            }));
        }
    }
    getOrganisationUserDetails() {
        this.organisationService
            .getUserDetailByUserId(this.schoolUserId)
            .subscribe((res) => this.assignOrganisationUser(res.body), (res) => this.onError(res.message));
    }
    assignOrganisationUser(data) {
        this.organisationSchoolAdminUser = data[0];
        this.patchOrganisationSchoolAdminUserForm(this.organisationSchoolAdminUser);
    }
    patchOrganisationSchoolAdminUserForm(organisationSchoolAdminUser) {
        let authorities = [], dateOfBirth, joiningDate;
        authorities = organisationSchoolAdminUser.authorities;
        for (let i = 0; i < this.authorities.length; i++) {
            for (let j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                }
            }
        }
        dateOfBirth = organisationSchoolAdminUser.dateOfBirth;
        this.pluginService.setDate("#dateOfBirth", dateOfBirth);
        joiningDate = organisationSchoolAdminUser.joiningDate;
        this.pluginService.setDate("#joiningDate", joiningDate);
        this.organisationSchoolAdminUserForm.setValue({
            firstName: organisationSchoolAdminUser.givenName,
            lastName: organisationSchoolAdminUser.lastName,
            gender: organisationSchoolAdminUser.gender,
            emailId: organisationSchoolAdminUser.email,
            phoneNumber: organisationSchoolAdminUser.mobileNumber
        });
    }
    onError(res) {
        this.errorHandler.handleError(res);
    }
    setDefaultDropdownValues() {
        $("#country").val("").trigger('change');
        $("#state").val("").trigger('change');
        $("#city").val("").trigger('change');
    }
    setDateFormat(dateValue) {
        let dateFormat = "";
        dateFormat = dateValue + "T12:00:22Z";
        return dateFormat;
    }
    mapOrgSchoolAdminUserData() {
        let updatedAuthorities = [], selectedAuthorities = [], dateOfBirth, joiningDate;
        for (let i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        if (!this.dateOfBirth) {
            dateOfBirth = this.organisationSchoolAdminUser.dateOfBirth;
        }
        else {
            dateOfBirth = this.dateOfBirth;
        }
        if (!this.joiningDate) {
            joiningDate = this.organisationSchoolAdminUser.joiningDate;
        }
        else {
            joiningDate = this.joiningDate;
        }
        this.organisationSchoolAdminUser = {
            id: this.schoolUserId,
            activated: true,
            givenName: this.organisationSchoolAdminUserForm.value.firstName,
            lastName: this.organisationSchoolAdminUserForm.value.lastName,
            gender: this.organisationSchoolAdminUserForm.value.gender,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            email: this.organisationSchoolAdminUserForm.value.emailId,
            mobileNumber: this.organisationSchoolAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password 
            login: this.organisationSchoolAdminUserForm.value.firstName,
            password: this.organisationSchoolAdminUserForm.value.firstName,
            authorities: updatedAuthorities
        };
    }
    onRoleSelection(event) {
        let eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        if (eventChecked === true) {
            this.authorities.find(item => item.id === selectedId).checked = true;
            this.validateRoleInfo = false;
        }
        else if (eventChecked === false) {
            this.authorities.find(item => item.id === selectedId).checked = false;
            this.validateRoleInfo = true;
        }
    }
    saveOrganisationSchoolAdminUser() {
        this.subscribeToSaveResponse(this.organisationService.updateSchoolUser(this.organisationSchoolAdminUser));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation school user updated successfully", "success");
        this.previousPage();
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'school', this.schoolId, 'school-user']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationSchoolUserUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationSchoolUserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-school-user-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school-user/organisation-school-user-update.component.html")).default,
        providers: [_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationSchoolUserUpdateComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/organisation-sub-school-user/organisation-school-user.service.ts ***!
  \**********************************************************************************/
/*! exports provided: OrganisationSchoolUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserService", function() { return OrganisationSchoolUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");





let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let OrganisationSchoolUserService = class OrganisationSchoolUserService {
    constructor(http) {
        this.http = http;
        this.appUsersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["appUsers"];
        this.usersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["users"];
        this.usersSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["usersSearch"];
    }
    getSchoolUserBySchoolId(organisationId, schoolId) {
        // const options = createRequestOption(req);
        var reqJSON = {
            "organisationId": organisationId,
            "schoolId": schoolId,
            "authorities": [
                "SCHOOL_ADMIN",
                "PRINICIPAL"
            ]
        };
        return this.http.post(this.usersSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    getUserDetailByUserId(userId) {
        var reqJSON = {
            "id": userId
        };
        return this.http.post(this.usersSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    createSchoolUser(orgSchool) {
        return this.http.post(this.appUsersResourceUrl, orgSchool, { headers: headers, observe: 'response' });
    }
    updateSchoolUser(organisationUser) {
        return this.http.put(this.usersResourceUrl, organisationUser, { observe: 'response' });
    }
    deleteSchoolUser(login) {
        return this.http.delete(`${this.appUsersResourceUrl}/${login}`, { observe: 'response' });
    }
    getUserDetailByLogin(login) {
        return this.http.get(`${this.usersResourceUrl}/${login}`, { observe: 'response' });
    }
};
OrganisationSchoolUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrganisationSchoolUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrganisationSchoolUserService);



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolCreateComponent", function() { return OrganisationSubSchoolCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");








let OrganisationSubSchoolCreateComponent = class OrganisationSubSchoolCreateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, commonService, changeDetector, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.errorHandler = errorHandler;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.organisationSubSchool = {};
        this.validateOrgSchoolInfo = true;
        this.validateContactInfo = true;
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.createOrganisationSchoolForm();
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.organisationId = organisation.id;
            this.getCountryList();
        });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countries = countryData;
        });
    }
    createOrganisationSchoolForm() {
        this.organisationSubSchoolForm = this.formBuilder.group({
            schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
    }
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    ngAfterViewChecked() {
        this.validateOrganisationSchoolForm();
        this.changeDetector.detectChanges();
    }
    validateOrganisationSchoolForm() {
        let schoolName, contactName, emailId, designation;
        schoolName = this.trimValue(this.organisationSubSchoolForm.value.schoolName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (schoolName === "" || schoolName === undefined || schoolName === null) {
            this.validateOrgSchoolInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationSubSchoolForm.valid) {
            this.validateOrgSchoolInfo = false;
        }
        if (this.organisationSubSchoolForm.invalid) {
            this.validateOrgSchoolInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
    }
    onCountryChange() {
        if (this.selectedCountry) {
            let countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
            this.selectedState = null;
            this.selectedCity = null;
        }
    }
    onStateChange() {
        if (this.selectedState) {
            let stateId = this.selectedState.id;
            this.getCityListByStateId(stateId);
            this.selectedCity = null;
        }
    }
    getStateListByCountryId(countryId) {
        let stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe((stateData) => {
            stateList = stateData;
            this.states = stateList.filter(item => item.country_id === countryId.toString());
        });
    }
    getCityListByStateId(stateId) {
        let cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe((cityData) => {
            cityList = cityData;
            this.cities = cityList.filter(item => item.state_id === stateId);
        });
    }
    mapOrganisationSubSchoolData() {
        let regNumber, addressLine1, addressLine2, city;
        regNumber = this.organisationSubSchoolForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationSubSchoolForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationSubSchoolForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        this.organisationSubSchool = {
            name: this.trimValue(this.organisationSubSchoolForm.get('schoolName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationSubSchoolForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
            parentOrganisationId: this.organisationId
        };
    }
    saveOrganisationSubSchool() {
        this.subscribeToSaveResponse(this.organisationService.createOrgSchool(this.organisationSubSchool));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation subsidairy school created successfully", "success");
        this.previousPage();
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'school']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationSubSchoolCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"] }
];
OrganisationSubSchoolCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-sub-school-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-create.component.html")).default,
        providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]])
], OrganisationSubSchoolCreateComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolDeleteComponent", function() { return OrganisationSubSchoolDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationSubSchoolDeleteComponent = class OrganisationSubSchoolDeleteComponent {
    constructor(router, activatedRoute, eventManager, organisationService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            let organisationSchoolId = params['schoolId'];
            this.getOrganisationSubSchoolDetails(organisationSchoolId);
        });
    }
    getOrganisationSubSchoolDetails(schoolId) {
        this.organisationService
            .getOrganisationSchoolBySchoolId(schoolId)
            .subscribe((res) => this.assignOrganisationSubSchool(res.body), (res) => this.onError(res));
    }
    assignOrganisationSubSchool(data) {
        let organisationSubSchool = data;
        this.organisationId = organisationSubSchool.parentOrganisationId;
        this.deleteOrganisationSubSchool(organisationSubSchool);
    }
    subscribeToDeleteResponse(resp) {
        resp.subscribe((res) => this.onDeleteSuccess(res), (res) => this.onError(res));
    }
    deleteOrganisationSubSchool(organisationSubSchool) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation subsidiary school?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(organisationSubSchool.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    }
    confirmDelete(id) {
        this.subscribeToDeleteResponse(this.organisationService.deleteOrgSchool(id));
    }
    previousUrl() {
        this.router.navigate(['/organisation', this.organisationId, 'school']);
    }
    onDeleteSuccess(resp) {
        this.pluginService.alertMessage("Organisation subsidiary school deleted successfully", "success");
        this.previousUrl();
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
};
OrganisationSubSchoolDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationSubSchoolDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationSubSchoolDeleteComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrganisationSubSchoolDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolDetailsComponent", function() { return OrganisationSubSchoolDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationSubSchoolDetailsComponent = class OrganisationSubSchoolDetailsComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationSubSchool = {};
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.activatedRoute.params.subscribe(params => {
            let organisationSchoolId = params['schoolId'];
            this.getOrganisationSubSchoolDetails(organisationSchoolId);
        });
    }
    getOrganisationSubSchoolDetails(schoolId) {
        this.organisationService
            .getOrganisationSchoolBySchoolId(schoolId)
            .subscribe((res) => this.assignOrganisationSubSchool(res.body), (res) => this.onError(res));
    }
    assignOrganisationSubSchool(data) {
        this.organisationSubSchool = data;
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj._router.navigate(['/organisation', localObj.organisationSubSchool.parentOrganisationId, 'school']);
            }
        });
    }
};
OrganisationSubSchoolDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationSubSchoolDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-sub-school-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-details.component.html")).default,
        providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationSubSchoolDetailsComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolManageComponent", function() { return OrganisationSubSchoolManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");









let OrganisationSubSchoolManageComponent = class OrganisationSubSchoolManageComponent {
    constructor(_router, activatedRoute, organisationSubSchoolService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationSubSchoolService = organisationSubSchoolService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.schoolList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisationSchool();
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.organisationId = organisation.id;
            this.getSchoolListByOrgID();
        });
    }
    getSchoolListByOrgID() {
        this.organisationSubSchoolService
            .getSchoolByOrgId(this.organisationId)
            .subscribe((res) => this.assignOrgSchoolList(res.body), (res) => this.onError(res));
    }
    assignOrgSchoolList(data) {
        if (data.length > 0) {
            this.schoolList = data;
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    reset() {
        this.page = 0;
        this.schoolList = [];
        this.getSchoolListByOrgID();
    }
    loadPage(page) {
        this.page = page;
        this.getSchoolListByOrgID();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInOrganisationSchool() {
        this.eventSubscriber = this.eventManager.subscribe('organisationSubSchoolListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj._router.navigateByUrl('/organisation');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
OrganisationSubSchoolManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSubSchoolService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
OrganisationSubSchoolManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-sub-school-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-manage.component.html")).default,
        providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSubSchoolService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationSubSchoolService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], OrganisationSubSchoolManageComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school-update.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school-update.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrganisationSubSchoolUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolUpdateComponent", function() { return OrganisationSubSchoolUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");








let OrganisationSubSchoolUpdateComponent = class OrganisationSubSchoolUpdateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, commonService, changeDetector, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.errorHandler = errorHandler;
        this.organisationSubSchool = {};
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.allStates = [];
        this.allCities = [];
        this.validateOrgSchoolInfo = true;
        this.validateContactInfo = true;
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.createOrganisationForm();
        this.activatedRoute.params.subscribe(params => {
            this.organisationSchoolId = params['schoolId'];
            this.getCountryList();
        });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countries = countryData;
            this.getStateList();
        });
    }
    getStateList() {
        this.allStates = [];
        this.commonService.getStateList().subscribe((stateData) => {
            this.allStates = stateData;
            this.getCityList();
        });
    }
    getCityList() {
        this.allCities = [];
        this.commonService.getCityList().subscribe((cityData) => {
            this.allCities = cityData;
            this.getOrganisationSubSchoolDetails(this.organisationSchoolId);
        });
    }
    getOrganisationSubSchoolDetails(schoolId) {
        this.organisationService
            .getOrganisationSchoolBySchoolId(schoolId)
            .subscribe((res) => this.assignOrganisationSubSchool(res.body), (res) => this.onError(res));
    }
    assignOrganisationSubSchool(data) {
        this.organisationSubSchool = data;
        this.organisationId = this.organisationSubSchool.parentOrganisationId;
        this.patchOrganisationForm(this.organisationSubSchool);
    }
    onError(errorRes) {
        this.errorHandler.handleError(errorRes);
    }
    createOrganisationForm() {
        this.organisationSubSchoolForm = this.formBuilder.group({
            schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
    }
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    ngAfterViewChecked() {
        this.validateOrganisationSchoolForm();
        this.changeDetector.detectChanges();
    }
    validateOrganisationSchoolForm() {
        let schoolName, contactName, emailId, designation;
        schoolName = this.trimValue(this.organisationSubSchoolForm.value.schoolName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (schoolName === "" || schoolName === undefined || schoolName === null) {
            this.validateOrgSchoolInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationSubSchoolForm.valid) {
            this.validateOrgSchoolInfo = false;
        }
        if (this.organisationSubSchoolForm.invalid) {
            this.validateOrgSchoolInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
    }
    patchOrganisationForm(organisationSubSchool) {
        let countryIndex, stateIndex, cityIndex;
        this.organisationSubSchoolForm.setValue({
            schoolName: organisationSubSchool.name,
            registrationNumber: organisationSubSchool.registrationNumber,
            addressLineOne: organisationSubSchool.addressLine1,
            addressLineTwo: organisationSubSchool.addressLine2,
            country: null,
            state: null,
            pincode: organisationSubSchool.pincode
        });
        this.contactInfoForm.setValue({
            contactName: organisationSubSchool.primaryContactName,
            designation: organisationSubSchool.primaryContactDesignation,
            emailId: organisationSubSchool.primaryContactMail,
            phoneNumber: organisationSubSchool.primaryContactPhone
        });
        countryIndex = this.countries.findIndex(item => item.name === organisationSubSchool.country);
        this.selectedCountry = this.countries[countryIndex];
        this.states = this.allStates.filter(item => item.country_id === this.countries[countryIndex].id.toString());
        stateIndex = this.states.findIndex(item => item.name === organisationSubSchool.state);
        this.selectedState = this.states[stateIndex];
        this.cities = this.allCities.filter(item => item.state_id === this.states[stateIndex].id);
        cityIndex = this.cities.findIndex(item => item.name === organisationSubSchool.city);
        this.selectedCity = this.cities[cityIndex];
        this.organisationSubSchool.id = organisationSubSchool.id;
    }
    onCountryChange() {
        if (this.selectedCountry) {
            let countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
            this.selectedState = null;
            this.selectedCity = null;
        }
    }
    onStateChange() {
        if (this.selectedState) {
            let stateId = this.selectedState.id;
            this.getCityListByStateId(stateId);
            this.selectedCity = null;
        }
    }
    getStateListByCountryId(countryId) {
        let stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe((stateData) => {
            stateList = stateData;
            this.states = stateList.filter(item => item.country_id === countryId.toString());
        });
    }
    getCityListByStateId(stateId) {
        let cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe((cityData) => {
            cityList = cityData;
            this.cities = cityList.filter(item => item.state_id === stateId);
        });
    }
    mapOrganisationSubSchoolData() {
        let regNumber, addressLine1, addressLine2, city;
        regNumber = this.organisationSubSchoolForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationSubSchoolForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationSubSchoolForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        this.organisationSubSchool = {
            id: this.organisationSchoolId,
            name: this.trimValue(this.organisationSubSchoolForm.get('schoolName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationSubSchoolForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
            parentOrganisationId: this.organisationId
        };
    }
    updateOrganisationSubSchool() {
        this.subscribeToSaveResponse(this.organisationService.updateOrgSchool(this.organisationSubSchool));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation subsidiary school updated successfully", "success");
        this.previousPage();
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'school']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationSubSchoolUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"] }
];
OrganisationSubSchoolUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-sub-school-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-sub-school/organisation-sub-school-update.component.html")).default,
        providers: [_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSubSchoolService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]])
], OrganisationSubSchoolUpdateComponent);



/***/ }),

/***/ "./src/app/organisation-sub-school/organisation-sub-school.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/organisation-sub-school/organisation-sub-school.service.ts ***!
  \****************************************************************************/
/*! exports provided: OrganisationSubSchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolService", function() { return OrganisationSubSchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");





let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let OrganisationSubSchoolService = class OrganisationSubSchoolService {
    constructor(http) {
        this.http = http;
        this.schoolResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["organisationSubSchool"];
        this.schoolSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["organisationSubSchoolSearch"];
    }
    getSchoolByOrgId(organisationId) {
        var reqJSON = {
            "parentOrganisationId": organisationId
        };
        return this.http.post(this.schoolSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    createOrgSchool(orgSchool) {
        return this.http.post(this.schoolResourceUrl, orgSchool, { headers: headers, observe: 'response' });
    }
    updateOrgSchool(organisation) {
        return this.http.put(this.schoolResourceUrl, organisation, { observe: 'response' });
    }
    getOrganisationSchoolBySchoolId(id) {
        return this.http.get(`${this.schoolResourceUrl}/${id}`, { observe: 'response' });
    }
    deleteOrgSchool(id) {
        return this.http.delete(`${this.schoolResourceUrl}/${id}`, { observe: 'response' });
    }
};
OrganisationSubSchoolService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrganisationSubSchoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrganisationSubSchoolService);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-activate.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-activate.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrganisationUserActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserActivateComponent", function() { return OrganisationUserActivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");






let OrganisationUserActivateComponent = class OrganisationUserActivateComponent {
    constructor(router, activatedRoute, orgSchoolService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orgSchoolService = orgSchoolService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        let login = this.activatedRoute.snapshot.paramMap.get('login');
        if (login) {
            this.orgSchoolService
                .getUserDetailByLogin(login)
                .subscribe((res) => this.assignOrgUser(res.body), (res) => this.onError(res));
        }
    }
    assignOrgUser(data) {
        this.organisationId = data.organisationId;
        this.schoolId = data.schoolId;
        this.activateUser(data);
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(), (errRes) => this.onError(errRes));
    }
    activateUser(orgUser) {
        orgUser.activated = true;
        this.subscribeToSaveResponse(this.orgSchoolService.updateSchoolUser(orgUser));
        this.previousPage();
    }
    onSaveSuccess() {
        this.pluginService.alertMessage("User activated successfully", "success");
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this.router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    }
};
OrganisationUserActivateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["CoreErrorHandler"] }
];
OrganisationUserActivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["CoreErrorHandler"]])
], OrganisationUserActivateComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserCreateComponent", function() { return OrganisationUserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationUserCreateComponent = class OrganisationUserCreateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationAdminUser = {};
        this.authorities = [];
        this.validatePersonalInfo = true;
        this.validateRoleInfo = true;
        this.organisationAdminUser = {};
        this.organisationAdminUser.user = {};
        this.authorities = [
            {
                id: "orgAdmin",
                role: "ORG_USER_ADMIN",
                name: "Organisation admin",
                checked: false
            },
            {
                id: "contentAdmin",
                role: "ORG_CONTENT_ADMIN",
                name: "Content admin",
                checked: false
            }
        ];
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.organisationId = organisation.id;
        });
    }
    createOrganisationUserForm() {
        this.organisationAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
    }
    ngAfterViewChecked() {
        if (this.organisationAdminUserForm.invalid) {
            this.validatePersonalInfo = true;
            if (!this.dateOfBirth && !this.joiningDate) {
                this.validatePersonalInfo = true;
            }
        }
        if (this.organisationAdminUserForm.valid) {
            this.validatePersonalInfo = false;
            if (this.dateOfBirth && this.joiningDate) {
                this.validatePersonalInfo = false;
            }
            else {
                this.validatePersonalInfo = true;
            }
        }
        if (this.authorities.length > 0) {
            this.authorities.forEach((element => {
                if (element.checked === true) {
                    this.validateRoleInfo = false;
                }
            }));
        }
    }
    mapOrgUserAdminUserData() {
        let updatedAuthorities = [], selectedAuthorities = [];
        for (let i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationAdminUser.user = {
            givenName: this.organisationAdminUserForm.value.firstName,
            lastName: this.organisationAdminUserForm.value.lastName,
            gender: this.organisationAdminUserForm.value.gender,
            dateOfBirth: this.dateOfBirth,
            joiningDate: this.joiningDate,
            email: this.organisationAdminUserForm.value.emailId,
            mobileNumber: this.organisationAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password 
            login: this.organisationAdminUserForm.value.firstName,
            password: this.organisationAdminUserForm.value.firstName,
            authorities: updatedAuthorities,
            organisationId: this.organisationId
        };
    }
    onRoleSelection(event) {
        let eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        this.authorities.find(item => item.id === selectedId).checked = eventChecked;
        if (eventChecked === false) {
            this.validateRoleInfo = true;
        }
        else {
            this.validateRoleInfo = false;
        }
    }
    saveOrganisationUserAdmin() {
        this.subscribeToSaveResponse(this.organisationService.createOrgUser(this.organisationAdminUser));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation admin user created successfully", "success");
        this.previousPage();
    }
    onError(res) {
        this.errorHandler.handleError(res);
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationUserCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationUserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-create.component.html")).default,
        providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationUserCreateComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-deactivate.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-deactivate.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OrganisationUserDeactivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDeactivateComponent", function() { return OrganisationUserDeactivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");






let OrganisationUserDeactivateComponent = class OrganisationUserDeactivateComponent {
    constructor(router, activatedRoute, orgSchoolService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orgSchoolService = orgSchoolService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        let login = this.activatedRoute.snapshot.paramMap.get('login');
        if (login) {
            this.orgSchoolService
                .getUserDetailByLogin(login)
                .subscribe((res) => this.assignOrgUser(res.body), (res) => this.onError(res));
        }
    }
    assignOrgUser(data) {
        this.organisationId = data.organisationId;
        this.activateUser(data);
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(), (errRes) => this.onError(errRes));
    }
    activateUser(orgUser) {
        orgUser.activated = false;
        this.subscribeToSaveResponse(this.orgSchoolService.updateSchoolUser(orgUser));
        this.previousPage();
    }
    onSaveSuccess() {
        this.pluginService.alertMessage("User deactivated successfully", "success");
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    previousPage() {
        this.router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    }
};
OrganisationUserDeactivateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["CoreErrorHandler"] }
];
OrganisationUserDeactivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: []
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationSchoolUserService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["CoreErrorHandler"]])
], OrganisationUserDeactivateComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-delete.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-delete.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDeleteComponent", function() { return OrganisationUserDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationUserDeleteComponent = class OrganisationUserDeleteComponent {
    constructor(router, activatedRoute, eventManager, organisationService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.login = params['login'];
            this.deleteOrganisationAdminUser();
        });
    }
    subscribeToDeleteResponse(resp) {
        resp.subscribe((res) => this.onDeleteSuccess(res), (res) => this.onError(res));
    }
    deleteOrganisationAdminUser() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation admin user ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(localthisObject.login);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    }
    confirmDelete(login) {
        this.subscribeToDeleteResponse(this.organisationService.deleteOrgUser(login));
    }
    previousUrl() {
        this.router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    }
    onDeleteSuccess(resp) {
        this.pluginService.alertMessage("Organisation user deleted successfully", "success");
        this.previousUrl();
    }
    onError(err) {
        this.errorHandler.handleError(err);
    }
};
OrganisationUserDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationUserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationUserDeleteComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrganisationUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDetailsComponent", function() { return OrganisationUserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationUserDetailsComponent = class OrganisationUserDetailsComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationAdminUser = {};
        this.authorities = [];
        this.organisationAdminUser = {};
        this.authorities = [
            {
                id: "orgAdmin",
                role: "ORG_USER_ADMIN",
                name: "Organisation admin",
                checked: false
            },
            {
                id: "contentAdmin",
                role: "ORG_CONTENT_ADMIN",
                name: "Content admin",
                checked: false
            }
        ];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.organisationUserId = params['orgUserId'];
            this.getOrganisationUserDetails(this.organisationUserId);
        });
    }
    getOrganisationUserDetails(userId) {
        this.organisationService
            .getUserDetailByUserId(userId)
            .subscribe((res) => this.assignOrganisationUser(res.body), (res) => this.onError(res.message));
    }
    assignOrganisationUser(data) {
        let organisationAdminUser = data[0];
        this.patchOrganisationAdminUserForm(organisationAdminUser);
    }
    patchOrganisationAdminUserForm(organisationAdminUser) {
        let authorities = [], selectedAuthorities = [];
        authorities = organisationAdminUser.authorities;
        for (let i = 0; i < this.authorities.length; i++) {
            for (let j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                    selectedAuthorities.push(this.authorities[i].name);
                }
            }
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationAdminUser = organisationAdminUser;
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
    onError(err) {
        this.errorHandler.handleError(err);
    }
};
OrganisationUserDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationUserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-details.component.html")).default,
        providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationUserDetailsComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-manage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-manage.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserManageComponent", function() { return OrganisationUserManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");









let OrganisationUserManageComponent = class OrganisationUserManageComponent {
    constructor(_router, activatedRoute, organisationSubSchoolService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationSubSchoolService = organisationSubSchoolService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.organisationAdminUserList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        // descending
        this.reverse = false;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisationUserAdmin();
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.organisationId = organisation.id;
            this.getOrganisationUserByOrganisationId();
        });
    }
    getOrganisationUserByOrganisationId() {
        this.organisationSubSchoolService
            .getOrganisationUserByOrgUserId(this.organisationId)
            .subscribe((res) => this.assignOrgUserList(res.body), (res) => this.onError(res.message));
    }
    assignOrgUserList(data) {
        this.organisationAdminUserList = data;
    }
    onError(err) {
        this.errorHandler.handleError(err);
    }
    reset() {
        this.page = 0;
        this.organisationAdminUserList = [];
        this.getOrganisationUserByOrganisationId();
    }
    loadPage(page) {
        this.page = page;
        this.getOrganisationUserByOrganisationId();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInOrganisationUserAdmin() {
        this.eventSubscriber = this.eventManager.subscribe('organisationUserListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj._router.navigateByUrl('/organisation');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
OrganisationUserManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationUserService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
OrganisationUserManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-user-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-manage.component.html")).default,
        providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_user_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationUserService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], OrganisationUserManageComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationUserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserUpdateComponent", function() { return OrganisationUserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationUserUpdateComponent = class OrganisationUserUpdateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.organisationAdminUser = {};
        this.authorities = [];
        this.organisationAdminUser = {};
        this.authorities = [
            {
                id: "orgAdmin",
                role: "ORG_USER_ADMIN",
                name: "Organisation admin",
                checked: false
            },
            {
                id: "contentAdmin",
                role: "ORG_CONTENT_ADMIN",
                name: "Content admin",
                checked: false
            }
        ];
    }
    ngOnInit() {
        this.pluginService.newStepperJs();
        this.createOrganisationUserForm();
        this.activatedRoute.params.subscribe(params => {
            this.organisationId = params['id'];
            this.organisationUserId = params['orgUserId'];
            this.getOrganisationUserDetails(this.organisationUserId);
        });
    }
    createOrganisationUserForm() {
        this.organisationAdminUserForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
    }
    ngAfterViewChecked() {
        if (this.organisationAdminUserForm.invalid) {
            this.validatePersonalInfo = true;
            if (!this.dateOfBirth && !this.joiningDate) {
                this.validatePersonalInfo = true;
            }
        }
        if (this.organisationAdminUserForm.valid) {
            this.validatePersonalInfo = false;
            if (this.dateOfBirth && this.joiningDate) {
                this.validatePersonalInfo = false;
            }
            else {
                this.validatePersonalInfo = true;
            }
        }
        if (this.authorities.length > 0) {
            this.authorities.forEach((element => {
                if (element.checked === true) {
                    this.validateRoleInfo = false;
                }
            }));
        }
    }
    getOrganisationUserDetails(userId) {
        this.organisationService
            .getUserDetailByUserId(userId)
            .subscribe((res) => this.assignOrganisationUser(res.body), (res) => this.onError(res.message));
    }
    assignOrganisationUser(data) {
        this.organisationAdminUser = data[0];
        this.patchOrganisationAdminUserForm(this.organisationAdminUser);
    }
    patchOrganisationAdminUserForm(organisationAdminUser) {
        let authorities = [], dateOfBirth, joiningDate;
        authorities = organisationAdminUser.authorities;
        for (let i = 0; i < this.authorities.length; i++) {
            for (let j = 0; j < authorities.length; j++) {
                if (this.authorities[i].role === authorities[j]) {
                    this.authorities[i].checked = true;
                }
            }
        }
        dateOfBirth = organisationAdminUser.dateOfBirth;
        this.pluginService.setDate("#dateOfBirth", dateOfBirth);
        joiningDate = organisationAdminUser.joiningDate;
        this.pluginService.setDate("#joiningDate", joiningDate);
        this.organisationAdminUserForm.setValue({
            firstName: organisationAdminUser.givenName,
            lastName: organisationAdminUser.lastName,
            gender: organisationAdminUser.gender,
            emailId: organisationAdminUser.email,
            phoneNumber: organisationAdminUser.mobileNumber
        });
    }
    onError(res) {
        this.errorHandler.handleError(res);
    }
    mapOrgUserAdminUserData() {
        let updatedAuthorities = [], selectedAuthorities = [], dateOfBirth, joiningDate;
        for (let i = 0; i < this.authorities.length; i++) {
            if (this.authorities[i].checked === true) {
                updatedAuthorities.push(this.authorities[i].role);
                selectedAuthorities.push(this.authorities[i].name);
            }
        }
        if (!this.dateOfBirth) {
            dateOfBirth = this.organisationAdminUser.dateOfBirth;
        }
        else {
            dateOfBirth = this.dateOfBirth;
        }
        if (!this.joiningDate) {
            joiningDate = this.organisationAdminUser.joiningDate;
        }
        else {
            joiningDate = this.joiningDate;
        }
        this.authorityNames = selectedAuthorities.toString();
        this.organisationAdminUser = {
            id: this.organisationUserId,
            activated: true,
            givenName: this.organisationAdminUserForm.value.firstName,
            lastName: this.organisationAdminUserForm.value.lastName,
            gender: this.organisationAdminUserForm.value.gender,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            email: this.organisationAdminUserForm.value.emailId,
            mobileNumber: this.organisationAdminUserForm.value.phoneNumber.toString(),
            //TODO: login and password 
            login: this.organisationAdminUserForm.value.firstName,
            password: this.organisationAdminUserForm.value.firstName,
            authorities: updatedAuthorities
        };
    }
    onRoleSelection(event) {
        let eventChecked, selectedId;
        eventChecked = event.target.checked;
        selectedId = event.target.id;
        this.authorities.find(item => item.id === selectedId).checked = eventChecked;
        if (eventChecked === false) {
            this.validateRoleInfo = true;
        }
        else {
            this.validateRoleInfo = false;
        }
    }
    saveOrganisationAdminUser() {
        this.subscribeToSaveResponse(this.organisationService.updateOrgUser(this.organisationAdminUser));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation user updated successfully", "success");
        this.previousPage();
    }
    previousPage() {
        this._router.navigate(['/organisation', this.organisationId, 'organisation-user']);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
            }
        });
    }
};
OrganisationUserUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationUserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-user-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation-user/organisation-user-update.component.html")).default,
        providers: [_organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _organisation_user_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationUserService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationUserUpdateComponent);



/***/ }),

/***/ "./src/app/organisation-user/organisation-user.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/organisation-user/organisation-user.service.ts ***!
  \****************************************************************/
/*! exports provided: OrganisationUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserService", function() { return OrganisationUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");





let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let OrganisationUserService = class OrganisationUserService {
    constructor(http) {
        this.http = http;
        this.usersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["users"];
        this.usersSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["usersSearch"];
        this.appUsersResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["appUsers"];
    }
    getOrganisationUserByOrgUserId(organisationId) {
        // const options = createRequestOption(req);
        var reqJSON = {
            "organisationId": organisationId,
            "authorities": [
                "ORG_CONTENT_ADMIN",
                "ORG_USER_ADMIN"
            ]
        };
        return this.http.post(this.usersSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    getUserDetailByUserId(userId) {
        var reqJSON = {
            "id": userId
        };
        return this.http.post(this.usersSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    createOrgUser(orgSchool) {
        return this.http.post(this.appUsersResourceUrl, orgSchool, { headers: headers, observe: 'response' });
    }
    updateOrgUser(organisationUser) {
        return this.http.put(this.usersResourceUrl, organisationUser, { observe: 'response' });
    }
    deleteOrgUser(login) {
        return this.http.delete(`${this.appUsersResourceUrl}/${login}`, { observe: 'response' });
    }
};
OrganisationUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrganisationUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrganisationUserService);



/***/ }),

/***/ "./src/app/organisation/index.ts":
/*!***************************************!*\
  !*** ./src/app/organisation/index.ts ***!
  \***************************************/
/*! exports provided: OrganisationCreateComponent, OrganisationDeleteComponent, OrganisationDetailsComponent, OrganisationManageComponent, OrganisationUpdateComponent, OrganisationService, OrganisationSubSchoolCreateComponent, OrganisationSubSchoolDeleteComponent, OrganisationSubSchoolDetailsComponent, OrganisationSubSchoolManageComponent, OrganisationSubSchoolUpdateComponent, OrganisationSubSchoolService, OrganisationSchoolUserCreateComponent, OrganisationSchoolUserDeleteComponent, OrganisationSchoolUserDetailsComponent, OrganisationSchoolUserManageComponent, OrganisationSchoolUserUpdateComponent, OrganisationSchoolUserDeactivateComponent, OrganisationSchoolUserActivateComponent, OrganisationSchoolUserService, OrganisationUserCreateComponent, OrganisationUserDeleteComponent, OrganisationUserDetailsComponent, OrganisationUserManageComponent, OrganisationUserUpdateComponent, OrganisationUserActivateComponent, OrganisationUserDeactivateComponent, OrganisationUserService, StudentPromotionComponent, StudentPromotionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _organisation_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisation-create.component */ "./src/app/organisation/organisation-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationCreateComponent", function() { return _organisation_create_component__WEBPACK_IMPORTED_MODULE_1__["OrganisationCreateComponent"]; });

/* harmony import */ var _organisation_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organisation-delete.component */ "./src/app/organisation/organisation-delete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationDeleteComponent", function() { return _organisation_delete_component__WEBPACK_IMPORTED_MODULE_2__["OrganisationDeleteComponent"]; });

/* harmony import */ var _organisation_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation-details.component */ "./src/app/organisation/organisation-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationDetailsComponent", function() { return _organisation_details_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationDetailsComponent"]; });

/* harmony import */ var _organisation_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organisation-manage.component */ "./src/app/organisation/organisation-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationManageComponent", function() { return _organisation_manage_component__WEBPACK_IMPORTED_MODULE_4__["OrganisationManageComponent"]; });

/* harmony import */ var _organisation_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-update.component */ "./src/app/organisation/organisation-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUpdateComponent", function() { return _organisation_update_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationUpdateComponent"]; });

/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return _organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]; });

/* harmony import */ var _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-create.component */ "./src/app/organisation-sub-school/organisation-sub-school-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolCreateComponent", function() { return _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_7__["OrganisationSubSchoolCreateComponent"]; });

/* harmony import */ var _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-delete.component */ "./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolDeleteComponent", function() { return _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolDeleteComponent"]; });

/* harmony import */ var _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-details.component */ "./src/app/organisation-sub-school/organisation-sub-school-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolDetailsComponent", function() { return _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_9__["OrganisationSubSchoolDetailsComponent"]; });

/* harmony import */ var _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-manage.component */ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolManageComponent", function() { return _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_10__["OrganisationSubSchoolManageComponent"]; });

/* harmony import */ var _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-update.component */ "./src/app/organisation-sub-school/organisation-sub-school-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolUpdateComponent", function() { return _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationSubSchoolUpdateComponent"]; });

/* harmony import */ var _organisation_sub_school_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school.service */ "./src/app/organisation-sub-school/organisation-sub-school.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSubSchoolService", function() { return _organisation_sub_school_organisation_sub_school_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationSubSchoolService"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-create.component */ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserCreateComponent", function() { return _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationSchoolUserCreateComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-delete.component */ "./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDeleteComponent", function() { return _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationSchoolUserDeleteComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-details.component */ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDetailsComponent", function() { return _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_15__["OrganisationSchoolUserDetailsComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-manage.component */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserManageComponent", function() { return _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_16__["OrganisationSchoolUserManageComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-update.component */ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserUpdateComponent", function() { return _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationSchoolUserUpdateComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_deactivate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-deactivate.component */ "./src/app/organisation-sub-school-user/organisation-school-user-deactivate.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserDeactivateComponent", function() { return _organisation_sub_school_user_organisation_school_user_deactivate_component__WEBPACK_IMPORTED_MODULE_18__["OrganisationSchoolUserDeactivateComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_activate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-activate.component */ "./src/app/organisation-sub-school-user/organisation-school-user-activate.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserActivateComponent", function() { return _organisation_sub_school_user_organisation_school_user_activate_component__WEBPACK_IMPORTED_MODULE_19__["OrganisationSchoolUserActivateComponent"]; });

/* harmony import */ var _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user.service */ "./src/app/organisation-sub-school-user/organisation-school-user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationSchoolUserService", function() { return _organisation_sub_school_user_organisation_school_user_service__WEBPACK_IMPORTED_MODULE_20__["OrganisationSchoolUserService"]; });

/* harmony import */ var _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../organisation-user/organisation-user-create.component */ "./src/app/organisation-user/organisation-user-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserCreateComponent", function() { return _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_21__["OrganisationUserCreateComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisation-user/organisation-user-delete.component */ "./src/app/organisation-user/organisation-user-delete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDeleteComponent", function() { return _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_22__["OrganisationUserDeleteComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../organisation-user/organisation-user-details.component */ "./src/app/organisation-user/organisation-user-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDetailsComponent", function() { return _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_23__["OrganisationUserDetailsComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisation-user/organisation-user-manage.component */ "./src/app/organisation-user/organisation-user-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserManageComponent", function() { return _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_24__["OrganisationUserManageComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../organisation-user/organisation-user-update.component */ "./src/app/organisation-user/organisation-user-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserUpdateComponent", function() { return _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_25__["OrganisationUserUpdateComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_activate_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisation-user/organisation-user-activate.component */ "./src/app/organisation-user/organisation-user-activate.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserActivateComponent", function() { return _organisation_user_organisation_user_activate_component__WEBPACK_IMPORTED_MODULE_26__["OrganisationUserActivateComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_deactivate_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../organisation-user/organisation-user-deactivate.component */ "./src/app/organisation-user/organisation-user-deactivate.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserDeactivateComponent", function() { return _organisation_user_organisation_user_deactivate_component__WEBPACK_IMPORTED_MODULE_27__["OrganisationUserDeactivateComponent"]; });

/* harmony import */ var _organisation_user_organisation_user_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../organisation-user/organisation-user.service */ "./src/app/organisation-user/organisation-user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationUserService", function() { return _organisation_user_organisation_user_service__WEBPACK_IMPORTED_MODULE_28__["OrganisationUserService"]; });

/* harmony import */ var _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../student-promotions/student-promotions.component */ "./src/app/student-promotions/student-promotions.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentPromotionComponent", function() { return _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_29__["StudentPromotionComponent"]; });

/* harmony import */ var _student_promotions_student_promotions_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../student-promotions/student-promotions.service */ "./src/app/student-promotions/student-promotions.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentPromotionsService", function() { return _student_promotions_student_promotions_service__WEBPACK_IMPORTED_MODULE_30__["StudentPromotionsService"]; });


































/***/ }),

/***/ "./src/app/organisation/organisation-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-create.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationCreateComponent", function() { return OrganisationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");









let OrganisationCreateComponent = class OrganisationCreateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, curriculumService, organisationService, commonService, changeDetector, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.errorHandler = errorHandler;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.curriculums = [];
        this.organisationTypes = [];
        this.curriculum = {};
        this.organisation = {};
        this.validateOrgInfo = true;
        this.validateContactInfo = true;
        this.validateCurriculumInfo = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.createorganisationInfoForm();
        this.getOrganisationTypeList();
        this.getCountryList();
        this.getCurriculums();
        this.examTypesList = this.formBuilder.array([]);
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countries = countryData;
        });
    }
    getOrganisationTypeList() {
        this.commonService.getOrganisationTypeList().subscribe((orgTypes) => {
            this.organisationTypes = orgTypes;
        });
    }
    createorganisationInfoForm() {
        this.organisationInfoForm = this.formBuilder.group({
            organisationType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            organisationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)])
        });
        this.examTypeForm = this.formBuilder.group({});
    }
    createExamType() {
        return this.formBuilder.group({
            examType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    addExamType() {
        this.examTypeForm.addControl('examTypesList', this.examTypesList);
        this.examTypesList.push(this.createExamType());
    }
    deleteExamType(index) {
        this.examTypesList.removeAt(index);
    }
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    ngAfterViewChecked() {
        this.validateOrganisationForm();
        this.changeDetector.detectChanges();
    }
    validateOrganisationForm() {
        let orgName, contactName, emailId, designation;
        orgName = this.trimValue(this.organisationInfoForm.value.organisationName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (orgName === "" || orgName === undefined || orgName === null) {
            this.validateOrgInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationInfoForm.valid) {
            this.validateOrgInfo = false;
        }
        if (this.organisationInfoForm.invalid) {
            this.validateOrgInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
        if (this.curriculums.length > 0) {
            for (let i = 0; i < this.curriculums.length; i++) {
                if (this.curriculums[i].checked === true) {
                    this.validateCurriculumInfo = false;
                }
                else if (this.curriculums[i].checked === false) {
                    this.validateCurriculumInfo = true;
                }
            }
        }
    }
    getCurriculums() {
        this.curriculumService
            .getStandardCurriculums()
            .subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculums = data;
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    onCurriculumSelection(event) {
        let selectedId, checked;
        checked = event.target.checked;
        selectedId = Number(event.target.id);
        this.curriculums.find(item => item.id === selectedId).checked = checked;
    }
    onCountryChange() {
        if (this.selectedCountry) {
            let countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
            this.selectedState = null;
            this.selectedCity = null;
        }
    }
    onStateChange() {
        if (this.selectedState) {
            let stateId = this.selectedState.id;
            this.getCityListByStateId(stateId);
            this.selectedCity = null;
        }
    }
    getStateListByCountryId(countryId) {
        let stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe((stateData) => {
            stateList = stateData;
            this.states = stateList.filter(item => item.country_id === countryId.toString());
        });
    }
    getCityListByStateId(stateId) {
        let cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe((cityData) => {
            cityList = cityData;
            this.cities = cityList.filter(item => item.state_id === stateId);
        });
    }
    showCurriculumDetails(curriculumId) {
        let curriculum = [];
        curriculum = this.curriculums.filter(item => item.id === curriculumId);
        this.curriculum = curriculum[0];
        this.country = this.countries.find(item => item.sortname === this.curriculum.country).name;
        this.startDate = this.curriculum.startDate.substr(1, 2) + '/' + this.curriculum.startDate.substr(2, 3);
        this.endDate = this.curriculum.endDate.substr(1, 2) + '/' + this.curriculum.endDate.substr(2, 3);
        this.openViewCurriculumModal();
    }
    openViewCurriculumModal() {
        this.pluginService.showModalWindow("#viewCurriculumDetailModal");
    }
    closeViewCurriculum() {
        this.pluginService.hideModalWindow("#viewCurriculumDetailModal");
    }
    mapOrganisationData() {
        let curriculumIds = [], curriculumNames = [], regNumber, addressLine1, addressLine2, city, examTypes = [];
        for (let i = 0; i < this.curriculums.length; i++) {
            if (this.curriculums[i].checked === true) {
                curriculumIds.push(this.curriculums[i].id);
                curriculumNames.push(this.curriculums[i].acronym);
            }
        }
        this.curriculumNames = curriculumNames.toString();
        regNumber = this.organisationInfoForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationInfoForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationInfoForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        for (let j = 0; j < this.examTypesList.value.length; j++) {
            examTypes.push(this.examTypesList.value[j].examType);
        }
        if (this.selectedOrganisationType === null) {
            this.selectedOrganisationType = {};
            this.selectedOrganisationType.tag = "SCHOOL_ORG";
        }
        this.examTypes = examTypes.toString();
        this.organisation = {
            organisationType: this.selectedOrganisationType.tag,
            examType: this.examTypes,
            curriculumIds: curriculumIds.toString(),
            name: this.trimValue(this.organisationInfoForm.get('organisationName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationInfoForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
        };
    }
    saveOrganisation() {
        this.subscribeToSaveResponse(this.organisationService.createOrganisation(this.organisation));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation created successfully", "success");
        this.previousPage();
    }
    previousPage() {
        this._router.navigateByUrl('/organisation');
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
OrganisationCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
OrganisationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-create.component.html")).default,
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], OrganisationCreateComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-delete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-delete.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationDeleteComponent", function() { return OrganisationDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");







let OrganisationDeleteComponent = class OrganisationDeleteComponent {
    constructor(router, activatedRoute, eventManager, organisationService, pluginService, errorHandler) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.organisationService = organisationService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.deleteOrganisation(organisation);
        });
    }
    subscribeToDeleteResponse(resp) {
        resp.subscribe((res) => this.onDeleteSuccess(res), (res) => this.onError(res));
    }
    deleteOrganisation(organisation) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this organisation ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(organisation.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    }
    confirmDelete(id) {
        this.subscribeToDeleteResponse(this.organisationService.deleteOrganisation(id));
    }
    previousUrl() {
        this.router.navigateByUrl('/organisation');
    }
    onDeleteSuccess(resp) {
        this.pluginService.alertMessage("Organisation deleted successfully", "success");
        this.previousUrl();
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
};
OrganisationDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationDeleteComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/organisation/organisation-details.component.ts ***!
  \****************************************************************/
/*! exports provided: OrganisationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationDetailsComponent", function() { return OrganisationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");








let OrganisationDetailsComponent = class OrganisationDetailsComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, curriculumService, organisationService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.errorHandler = errorHandler;
        this.curriculums = [];
        this.organisation = {};
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.organisation = organisation;
            this.getCurriculums();
        });
    }
    updateOrganisationDetails(organisation) {
        let curriculumNames = [], curriculumIds, curriculumIdArray = [];
        curriculumIds = organisation.curriculumIds;
        curriculumIdArray = curriculumIds.split(",", 3);
        for (let i = 0; i < curriculumIdArray.length; i++) {
            curriculumNames.push(this.curriculums.find(item => item.id === Number(curriculumIdArray[i])).acronym);
        }
        this.curriculumNames = curriculumNames.toString();
        if (organisation.organisationType === 'SCHOOL_ORG') {
            this.organisationType = "School organisation";
        }
        else if (organisation.organisationType === 'SUPER') {
            this.organisationType = "Super";
        }
        else if (organisation.organisationType === 'RETAILER') {
            this.organisationType = "Retailer";
        }
    }
    getCurriculums() {
        this.curriculumService
            .getStandardCurriculums()
            .subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculums = data;
        this.updateOrganisationDetails(this.organisation);
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj._router.navigateByUrl('/organisation');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
OrganisationDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_6__["CurriculumService"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"] }
];
OrganisationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-details.component.html")).default,
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_6__["CurriculumService"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]])
], OrganisationDetailsComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-licenses.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/organisation/organisation-licenses.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrganisationLicensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationLicensesComponent", function() { return OrganisationLicensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");









let OrganisationLicensesComponent = class OrganisationLicensesComponent {
    constructor(_router, activatedRoute, organisationService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.orgLicensesList = [];
        this.totalAmount = 0;
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
        this.cellAction = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.organisationId = this.activatedRoute.snapshot.params['id'];
        if (this.organisationId) {
            this.loadOrganisationCourseList();
        }
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisations();
    }
    loadOrganisationCourseList() {
        this.organisationService
            .getOrgCoursesSearch(this.organisationId)
            .subscribe((res) => this.paginateOrganisationCourses(res.body, res.headers), (res) => this.onError(res));
    }
    paginateOrganisationCourses(data, headers) {
        let totalAmount;
        this.orgLicensesList = [];
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.orgLicensesList.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    reset() {
        this.page = 0;
        this.orgLicensesList = [];
        this.loadOrganisationCourseList();
    }
    loadPage(page) {
        this.page = page;
        this.loadOrganisationCourseList();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInOrganisations() {
        this.eventSubscriber = this.eventManager.subscribe('organisationListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    previousPage() {
        this._router.navigateByUrl('/organisation');
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
    calculateTotalAmount(index) {
        let orgLicense = {}, sumAmount;
        orgLicense = this.orgLicensesList[index];
        if (orgLicense.newLicensesCount > 0) {
            sumAmount = orgLicense.amountPerLicense * orgLicense.newLicensesCount;
            orgLicense.totalAmount = sumAmount.toFixed();
        }
        else {
            orgLicense.totalAmount = 0;
        }
        this.totalAmount = 0;
        for (let i = 0; i < this.orgLicensesList.length; i++) {
            if (this.orgLicensesList[i].newLicensesCount > 0) {
                sumAmount = 0;
                sumAmount = this.orgLicensesList[i].amountPerLicense * this.orgLicensesList[i].newLicensesCount;
                this.totalAmount = this.totalAmount + sumAmount;
            }
            else {
                sumAmount = 0;
            }
        }
    }
    openLicenseModal() {
        this.pluginService.showModalWindow("#license");
    }
    closeLicenseModal() {
        this.pluginService.hideModalWindow("#license");
    }
    editBuyLicenses() {
        this.cellAction = this.cellAction != true;
        if (this.cellAction) {
            this.totalAmount = 0;
            for (let i = 0; i < this.orgLicensesList.length; i++) {
                this.orgLicensesList[i].newLicensesCount = 0;
                this.orgLicensesList[i].totalAmount = 0;
            }
        }
    }
    payAmount() {
        let newLicenseDetails = [];
        for (let i = 0; i < this.orgLicensesList.length; i++) {
            if (this.orgLicensesList[i].newLicensesCount !== 0 && this.orgLicensesList[i].newLicensesCount !== undefined) {
                newLicenseDetails.push({
                    id: this.orgLicensesList[i].id,
                    newLicensesCount: this.orgLicensesList[i].newLicensesCount
                });
            }
        }
        if (newLicenseDetails.length > 0) {
            this.subscribeToAddLicensesResponse(this.organisationService.addLicenses(newLicenseDetails));
        }
    }
    subscribeToAddLicensesResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Payment done successfully", "success");
        this.cellAction = true;
        this.loadOrganisationCourseList();
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
};
OrganisationLicensesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_7__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationLicensesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-licenses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-licenses.component.html")).default,
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_7__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationLicensesComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-manage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-manage.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationManageComponent", function() { return OrganisationManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");









let OrganisationManageComponent = class OrganisationManageComponent {
    constructor(_router, activatedRoute, organisationService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.organisations = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    loadOrganisationList() {
        this.organisationService
            .getOrganisations({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe((res) => this.paginateOrganisations(res.body, res.headers), (res) => this.onError(res));
    }
    paginateOrganisations(data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.organisations.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    reset() {
        this.page = 0;
        this.organisations = [];
        this.loadOrganisationList();
    }
    loadPage(page) {
        this.page = page;
        this.loadOrganisationList();
    }
    ngOnInit() {
        this.loadOrganisationList();
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisations();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInOrganisations() {
        this.eventSubscriber = this.eventManager.subscribe('organisationListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
};
OrganisationManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
OrganisationManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-manage.component.html")).default,
        providers: [_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], OrganisationManageComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-pricing-config.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/organisation/organisation-pricing-config.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrganisationPricingConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationPricingConfigComponent", function() { return OrganisationPricingConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/local-storage/local-storage.service */ "./src/app/shared/local-storage/local-storage.service.ts");










let OrganisationPricingConfigComponent = class OrganisationPricingConfigComponent {
    constructor(_router, activatedRoute, organisationService, eventManager, parseLinks, principalService, pluginService, errorHandler, localStorageService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.localStorageService = localStorageService;
        this.courseList = [];
        this.setDiscountDetails = [];
        this.courseList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
        this.cellAction = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.organisationId = this.activatedRoute.snapshot.params['id'];
        if (this.organisationId) {
            this.loadOrganisationCourseList();
        }
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisations();
    }
    loadOrganisationCourseList() {
        this.organisationService
            .getOrgCoursesSearch(this.organisationId)
            .subscribe((res) => this.paginateOrganisationCourses(res.body, res.headers), (res) => this.onError(res));
    }
    paginateOrganisationCourses(data, headers) {
        this.courseList = [];
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.courseList.push(data[i]); // updated list
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    reset() {
        this.page = 0;
        this.courseList = [];
        this.loadOrganisationCourseList();
    }
    loadPage(page) {
        this.page = page;
        this.loadOrganisationCourseList();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInOrganisations() {
        this.eventSubscriber = this.eventManager.subscribe('organisationListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    previousPage() {
        this._router.navigateByUrl('/organisation');
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
    openLicenseModal() {
        this.pluginService.showModalWindow("#license");
    }
    closeLicenseModal() {
        this.pluginService.hideModalWindow("#license");
    }
    buyLicenses() {
        this.openLicenseModal();
    }
    payAmount() {
        this.pluginService.alertMessage("Sorry service is not available, check it later", "warning");
    }
    editDiscountDetails() {
        this.cellAction = false;
    }
    updateDiscountDetails() {
        let discountDetails = [];
        for (let i = 0; i < this.courseList.length; i++) {
            if (this.courseList[i].currentDiscount !== null) {
                discountDetails.push({
                    id: this.courseList[i].id,
                    currentDiscount: this.courseList[i].currentDiscount,
                    organisationId: this.organisationId,
                    courseId: this.courseList[i].courseId
                });
            }
        }
        if (discountDetails.length > 0) {
            this.subscribeToSetDiscountResponse(this.organisationService.updateOrganisationDiscount(discountDetails));
        }
    }
    subscribeToSetDiscountResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Updated discount successfully", "success");
        this.cellAction = true;
        this.loadOrganisationCourseList();
    }
    resetDiscountDetails() {
        this.cellAction = true;
        this.loadOrganisationCourseList();
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
};
OrganisationPricingConfigComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_7__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] },
    { type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"] }
];
OrganisationPricingConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-pricing-config.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-pricing-config.component.html")).default,
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_7__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"],
        _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"]])
], OrganisationPricingConfigComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-purchase-history.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/organisation/organisation-purchase-history.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrganisationPurchaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationPurchaseHistoryComponent", function() { return OrganisationPurchaseHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");









let OrganisationPurchaseHistoryComponent = class OrganisationPurchaseHistoryComponent {
    constructor(_router, activatedRoute, organisationService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.invoiceList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.organisationId = this.activatedRoute.snapshot.params['id'];
        if (this.organisationId) {
            this.loadPurchaseHistory();
        }
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInOrganisations();
    }
    loadPurchaseHistory() {
        this.organisationService
            .getInvoiceSearch(this.organisationId)
            .subscribe((res) => this.paginateInvoiceList(res.body, res.headers), (res) => this.onError(res));
    }
    paginateInvoiceList(data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.invoiceList.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    reset() {
        this.page = 0;
        this.invoiceList = [];
        this.loadPurchaseHistory();
    }
    loadPage(page) {
        this.page = page;
        this.loadPurchaseHistory();
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInOrganisations() {
        this.eventSubscriber = this.eventManager.subscribe('organisationListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    previousPage() {
        this._router.navigateByUrl('/organisation');
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
};
OrganisationPurchaseHistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_7__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"] }
];
OrganisationPurchaseHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-purchase-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-purchase-history.component.html")).default,
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_7__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])
], OrganisationPurchaseHistoryComponent);



/***/ }),

/***/ "./src/app/organisation/organisation-update.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/organisation/organisation-update.component.ts ***!
  \***************************************************************/
/*! exports provided: OrganisationUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUpdateComponent", function() { return OrganisationUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");









let OrganisationUpdateComponent = class OrganisationUpdateComponent {
    constructor(_router, activatedRoute, formBuilder, pluginService, curriculumService, organisationService, commonService, changeDetector, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.commonService = commonService;
        this.changeDetector = changeDetector;
        this.errorHandler = errorHandler;
        this.examTypesList = [];
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.allStates = [];
        this.allCities = [];
        this.curriculums = [];
        this.curriculumIds = [];
        this.organisationTypes = [];
        this.curriculum = {};
        this.organisation = {};
        this.validateOrgInfo = true;
        this.validateContactInfo = true;
        this.validateCurriculumInfo = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.createorganisationInfoForm();
        this.getCountryList();
        this.getOrganisationTypeList();
        this.activatedRoute.data.subscribe(({ organisation }) => {
            this.organisation = organisation;
        });
        this.updatedExamTypesList = this.formBuilder.array([]);
    }
    getOrganisationTypeList() {
        this.commonService.getOrganisationTypeList().subscribe((orgTypes) => {
            this.organisationTypes = orgTypes;
        });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countries = countryData;
            this.getStateList();
        });
    }
    getStateList() {
        this.allStates = [];
        this.commonService.getStateList().subscribe((stateData) => {
            this.allStates = stateData;
            this.getCityList();
        });
    }
    getCityList() {
        this.allCities = [];
        this.commonService.getCityList().subscribe((cityData) => {
            this.allCities = cityData;
            this.patchorganisationInfoForm();
        });
    }
    createorganisationInfoForm() {
        this.organisationInfoForm = this.formBuilder.group({
            organisationType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            organisationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            registrationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.contactInfoForm = this.formBuilder.group({
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.examTypeForm = this.formBuilder.group({});
    }
    createExamType() {
        return this.formBuilder.group({
            examType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    addExamType() {
        this.examTypeForm.addControl('updatedExamTypesList', this.updatedExamTypesList);
        this.updatedExamTypesList.push(this.createExamType());
    }
    deleteExamType(event, index) {
        let action = event.target.dataset.action;
        if (action === "create") {
            this.updatedExamTypesList.removeAt(index);
        }
        else if (action === "edit") {
            this.examTypesList.splice(index, 1);
        }
    }
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    ngAfterViewChecked() {
        this.validateOrganisationForm();
        this.changeDetector.detectChanges();
    }
    validateOrganisationForm() {
        let orgName, contactName, emailId, designation;
        orgName = this.trimValue(this.organisationInfoForm.value.organisationName);
        contactName = this.trimValue(this.contactInfoForm.value.contactName);
        emailId = this.trimValue(this.contactInfoForm.value.email);
        designation = this.trimValue(this.contactInfoForm.value.designation);
        if (orgName === "" || orgName === undefined || orgName === null) {
            this.validateOrgInfo = true;
        }
        if (contactName === "" || contactName === undefined || contactName === null) {
            this.validateContactInfo = true;
        }
        if (emailId === "" || emailId === undefined || emailId === null) {
            this.validateContactInfo = true;
        }
        if (designation === "" || designation === undefined || designation === null) {
            this.validateContactInfo = true;
        }
        if (this.organisationInfoForm.valid) {
            this.validateOrgInfo = false;
        }
        if (this.organisationInfoForm.invalid) {
            this.validateOrgInfo = true;
        }
        if (this.contactInfoForm.valid) {
            this.validateContactInfo = false;
        }
        if (this.contactInfoForm.invalid) {
            this.validateContactInfo = true;
        }
        if (this.curriculums.length > 0) {
            for (let i = 0; i < this.curriculums.length; i++) {
                if (this.curriculums[i].checked === true) {
                    this.validateCurriculumInfo = false;
                }
                else if (this.curriculums[i].checked === false) {
                    this.validateCurriculumInfo = true;
                }
            }
        }
    }
    patchorganisationInfoForm() {
        let countryIndex, stateIndex, cityIndex, organisation;
        this.curriculumIds = [];
        organisation = this.organisation;
        this.organisationId = this.organisation.id;
        if (this.organisation.examType) {
            this.examTypesList = organisation.examType.split(',');
        }
        if (this.organisation.organisationType) {
            this.selectedOrganisationType = this.organisationTypes.filter(item => item.tag === this.organisation.organisationType)[0];
        }
        else {
            this.selectedOrganisationType = null;
        }
        this.organisationInfoForm.setValue({
            organisationType: this.selectedOrganisationType,
            organisationName: organisation.name,
            registrationNumber: organisation.registrationNumber,
            addressLineOne: organisation.addressLine1,
            addressLineTwo: organisation.addressLine2,
            country: null,
            state: null,
            pincode: organisation.pincode
        });
        this.contactInfoForm.setValue({
            contactName: organisation.primaryContactName,
            designation: organisation.primaryContactDesignation,
            emailId: organisation.primaryContactMail,
            phoneNumber: organisation.primaryContactPhone
        });
        countryIndex = this.countries.findIndex(item => item.name === organisation.country);
        this.selectedCountry = this.countries[countryIndex];
        this.states = this.allStates.filter(item => item.country_id === this.countries[countryIndex].id.toString());
        stateIndex = this.states.findIndex(item => item.name === organisation.state);
        this.selectedState = this.states[stateIndex];
        this.cities = this.allCities.filter(item => item.state_id === this.states[stateIndex].id);
        cityIndex = this.cities.findIndex(item => item.name === organisation.city);
        this.selectedCity = this.cities[cityIndex];
        this.curriculumIds = organisation.curriculumIds;
        this.getCurriculums();
    }
    getCurriculums() {
        this.curriculumService
            .getStandardCurriculums()
            .subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        let curriculumIdArray = [], curriculums = [];
        this.curriculums = [];
        curriculums = data;
        curriculumIdArray = this.curriculumIds.toString().split(",", 3);
        for (let j = 0; j < curriculumIdArray.length; j++) {
            for (let i = 0; i < curriculums.length; i++) {
                if (curriculums[i].id === Number(curriculumIdArray[j])) {
                    curriculums[i].checked = true;
                }
            }
        }
        this.curriculums = curriculums;
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    onCurriculumSelection(event) {
        let selectedId, checked;
        checked = event.target.checked;
        selectedId = Number(event.target.id);
        this.curriculums.find(item => item.id === selectedId).checked = checked;
    }
    onCountryChange() {
        let countryId = this.selectedCountry.id;
        this.getStateListByCountryId(countryId);
        this.selectedState = null;
        this.selectedCity = null;
    }
    onStateChange() {
        let stateId = this.selectedState.id;
        this.getCityListByStateId(stateId);
        this.selectedCity = null;
    }
    getStateListByCountryId(countryId) {
        let stateList = [];
        this.states = [];
        this.commonService.getStateList().subscribe((stateData) => {
            stateList = stateData;
            this.states = stateList.filter(item => item.country_id === countryId.toString());
        });
    }
    getCityListByStateId(stateId) {
        let cityList = [];
        this.cities = [];
        this.commonService.getCityList().subscribe((cityData) => {
            cityList = cityData;
            this.cities = cityList.filter(item => item.state_id === stateId);
        });
    }
    showCurriculumDetails(curriculumId) {
        let curriculum = [];
        curriculum = this.curriculums.filter(item => item.id === curriculumId);
        this.curriculum = curriculum[0];
        this.country = this.countries.find(item => item.sortname === this.curriculum.country).name;
        this.startDate = this.curriculum.startDate.substr(1, 2) + '/' + this.curriculum.startDate.substr(2, 3);
        this.endDate = this.curriculum.endDate.substr(1, 2) + '/' + this.curriculum.endDate.substr(2, 3);
        this.openViewCurriculumModal();
    }
    openViewCurriculumModal() {
        this.pluginService.showModalWindow("#viewCurriculumDetailEditModal");
    }
    closeViewCurriculum() {
        this.pluginService.hideModalWindow("#viewCurriculumDetailEditModal");
    }
    mapOrganisationData() {
        let curriculumNames = [], curriculumIds = [], regNumber, addressLine1, addressLine2, city, examTypes = [], updatedExamTypes = [];
        for (let i = 0; i < this.curriculums.length; i++) {
            if (this.curriculums[i].checked === true) {
                curriculumIds.push(this.curriculums[i].id);
                curriculumNames.push(this.curriculums[i].acronym);
            }
        }
        this.curriculumNames = curriculumNames.toString();
        regNumber = this.organisationInfoForm.get('registrationNumber').value;
        if (regNumber === null || regNumber === "") {
            regNumber = null;
        }
        addressLine1 = this.trimValue(this.organisationInfoForm.get('addressLineOne').value);
        if (addressLine1 === null || addressLine1 === "") {
            addressLine1 = null;
        }
        addressLine2 = this.trimValue(this.organisationInfoForm.get('addressLineTwo').value);
        if (addressLine2 === null || addressLine2 === "") {
            addressLine2 = null;
        }
        if (this.selectedCity === null || this.selectedCity === "") {
            city = null;
        }
        else {
            city = this.selectedCity.name;
        }
        for (let j = 0; j < this.updatedExamTypesList.value.length; j++) {
            examTypes.push(this.updatedExamTypesList.value[j].examType);
        }
        updatedExamTypes = [...this.examTypesList, ...examTypes];
        this.examTypes = updatedExamTypes.toString();
        this.organisation = {
            id: this.organisationId,
            organisationType: this.selectedOrganisationType.tag,
            examType: this.examTypes,
            curriculumIds: curriculumIds.toString(),
            name: this.trimValue(this.organisationInfoForm.get('organisationName').value),
            registrationNumber: regNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            country: this.selectedCountry.name,
            state: this.selectedState.name,
            city: city,
            pincode: this.organisationInfoForm.get('pincode').value,
            primaryContactName: this.trimValue(this.contactInfoForm.get('contactName').value),
            primaryContactDesignation: this.trimValue(this.contactInfoForm.get('designation').value),
            primaryContactPhone: this.contactInfoForm.get('phoneNumber').value,
            primaryContactMail: this.trimValue(this.contactInfoForm.get('emailId').value),
        };
    }
    updateOrganisation() {
        this.subscribeToSaveResponse(this.organisationService.updateOrganisation(this.organisation));
    }
    subscribeToSaveResponse(resp) {
        resp.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Organisation updated successfully", "success");
        this.previousPage();
    }
    previousPage() {
        this._router.navigateByUrl('/organisation');
    }
    onBack() {
        var localObj = this;
        swal({
            title: "Are you sure to go previous page ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localObj.previousPage();
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
OrganisationUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"] },
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
OrganisationUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organisation-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organisation/organisation-update.component.html")).default,
        providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"],
        _organisation_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], OrganisationUpdateComponent);



/***/ }),

/***/ "./src/app/organisation/organisation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organisation/organisation.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganisationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationModule", function() { return OrganisationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./src/app/organisation/index.ts");
/* harmony import */ var _organisation_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organisation.route */ "./src/app/organisation/organisation.route.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_activate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-activate.component */ "./src/app/organisation-sub-school-user/organisation-school-user-activate.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_deactivate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-deactivate.component */ "./src/app/organisation-sub-school-user/organisation-school-user-deactivate.component.ts");
/* harmony import */ var _organisation_user_organisation_user_activate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisation-user/organisation-user-activate.component */ "./src/app/organisation-user/organisation-user-activate.component.ts");
/* harmony import */ var _organisation_user_organisation_user_deactivate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisation-user/organisation-user-deactivate.component */ "./src/app/organisation-user/organisation-user-deactivate.component.ts");
/* harmony import */ var _organisation_purchase_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./organisation-purchase-history.component */ "./src/app/organisation/organisation-purchase-history.component.ts");
/* harmony import */ var _organisation_licenses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organisation-licenses.component */ "./src/app/organisation/organisation-licenses.component.ts");
/* harmony import */ var _organisation_pricing_config_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./organisation-pricing-config.component */ "./src/app/organisation/organisation-pricing-config.component.ts");

















let OrganisationModule = class OrganisationModule {
};
OrganisationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_organisation_route__WEBPACK_IMPORTED_MODULE_9__["organisationRoute"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        declarations: [
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationCreateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationDeleteComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationDetailsComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUpdateComponent"],
            _organisation_pricing_config_component__WEBPACK_IMPORTED_MODULE_16__["OrganisationPricingConfigComponent"],
            _organisation_user_organisation_user_activate_component__WEBPACK_IMPORTED_MODULE_12__["OrganisationUserActivateComponent"],
            _organisation_user_organisation_user_deactivate_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationUserDeactivateComponent"],
            _organisation_purchase_history_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationPurchaseHistoryComponent"],
            _organisation_licenses_component__WEBPACK_IMPORTED_MODULE_15__["OrganisationLicensesComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolCreateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolDeleteComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolDetailsComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolUpdateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUserManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUserCreateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUserDetailsComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUserUpdateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUserDeleteComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSchoolUserManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSchoolUserCreateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSchoolUserDetailsComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSchoolUserUpdateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSchoolUserDeleteComponent"],
            _organisation_sub_school_user_organisation_school_user_activate_component__WEBPACK_IMPORTED_MODULE_10__["OrganisationSchoolUserActivateComponent"],
            _organisation_sub_school_user_organisation_school_user_deactivate_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationSchoolUserDeactivateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_8__["StudentPromotionComponent"]
        ],
        providers: [
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationService"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolService"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationSchoolUserService"],
            _index__WEBPACK_IMPORTED_MODULE_8__["OrganisationUserService"],
            _index__WEBPACK_IMPORTED_MODULE_8__["StudentPromotionsService"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], OrganisationModule);



/***/ }),

/***/ "./src/app/organisation/organisation.route.ts":
/*!****************************************************!*\
  !*** ./src/app/organisation/organisation.route.ts ***!
  \****************************************************/
/*! exports provided: OrganisationResolve, organisationRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationResolve", function() { return OrganisationResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organisationRoute", function() { return organisationRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _organisation_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation-manage.component */ "./src/app/organisation/organisation-manage.component.ts");
/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _shared_model_common_organisation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/model/common/organisation.model */ "./src/app/shared/model/common/organisation.model.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-manage.component */ "./src/app/organisation-sub-school/organisation-sub-school-manage.component.ts");
/* harmony import */ var _organisation_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organisation-delete.component */ "./src/app/organisation/organisation-delete.component.ts");
/* harmony import */ var _organisation_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organisation-create.component */ "./src/app/organisation/organisation-create.component.ts");
/* harmony import */ var _organisation_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organisation-details.component */ "./src/app/organisation/organisation-details.component.ts");
/* harmony import */ var _organisation_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organisation-update.component */ "./src/app/organisation/organisation-update.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-create.component */ "./src/app/organisation-sub-school/organisation-sub-school-create.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-delete.component */ "./src/app/organisation-sub-school/organisation-sub-school-delete.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-details.component */ "./src/app/organisation-sub-school/organisation-sub-school-details.component.ts");
/* harmony import */ var _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisation-sub-school/organisation-sub-school-update.component */ "./src/app/organisation-sub-school/organisation-sub-school-update.component.ts");
/* harmony import */ var _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../organisation-user/organisation-user-manage.component */ "./src/app/organisation-user/organisation-user-manage.component.ts");
/* harmony import */ var _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisation-user/organisation-user-create.component */ "./src/app/organisation-user/organisation-user-create.component.ts");
/* harmony import */ var _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../organisation-user/organisation-user-delete.component */ "./src/app/organisation-user/organisation-user-delete.component.ts");
/* harmony import */ var _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisation-user/organisation-user-details.component */ "./src/app/organisation-user/organisation-user-details.component.ts");
/* harmony import */ var _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../organisation-user/organisation-user-update.component */ "./src/app/organisation-user/organisation-user-update.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-manage.component */ "./src/app/organisation-sub-school-user/organisation-school-user-manage.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-create.component */ "./src/app/organisation-sub-school-user/organisation-school-user-create.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-update.component */ "./src/app/organisation-sub-school-user/organisation-school-user-update.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-details.component */ "./src/app/organisation-sub-school-user/organisation-school-user-details.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-delete.component */ "./src/app/organisation-sub-school-user/organisation-school-user-delete.component.ts");
/* harmony import */ var _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../student-promotions/student-promotions.component */ "./src/app/student-promotions/student-promotions.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_activate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-activate.component */ "./src/app/organisation-sub-school-user/organisation-school-user-activate.component.ts");
/* harmony import */ var _organisation_sub_school_user_organisation_school_user_deactivate_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../organisation-sub-school-user/organisation-school-user-deactivate.component */ "./src/app/organisation-sub-school-user/organisation-school-user-deactivate.component.ts");
/* harmony import */ var _organisation_user_organisation_user_activate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../organisation-user/organisation-user-activate.component */ "./src/app/organisation-user/organisation-user-activate.component.ts");
/* harmony import */ var _organisation_user_organisation_user_deactivate_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../organisation-user/organisation-user-deactivate.component */ "./src/app/organisation-user/organisation-user-deactivate.component.ts");
/* harmony import */ var _organisation_purchase_history_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./organisation-purchase-history.component */ "./src/app/organisation/organisation-purchase-history.component.ts");
/* harmony import */ var _organisation_licenses_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./organisation-licenses.component */ "./src/app/organisation/organisation-licenses.component.ts");
/* harmony import */ var _organisation_pricing_config_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./organisation-pricing-config.component */ "./src/app/organisation/organisation-pricing-config.component.ts");



































let OrganisationResolve = class OrganisationResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getOrganisationByOrganisationId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((response) => response.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((organisation) => organisation.body));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_common_organisation_model__WEBPACK_IMPORTED_MODULE_7__["Organisation"]());
    }
};
OrganisationResolve.ctorParameters = () => [
    { type: _organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] }
];
OrganisationResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]])
], OrganisationResolve);

const organisationRoute = [
    {
        path: '',
        component: _organisation_manage_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage organisations'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _organisation_create_component__WEBPACK_IMPORTED_MODULE_10__["OrganisationCreateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Create organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/view',
        component: _organisation_details_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationDetailsComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        },
    },
    {
        path: ':id/edit',
        component: _organisation_update_component__WEBPACK_IMPORTED_MODULE_12__["OrganisationUpdateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Edit organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        },
    },
    {
        path: ':id/delete',
        component: _organisation_delete_component__WEBPACK_IMPORTED_MODULE_9__["OrganisationDeleteComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Delete organisation'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        },
    },
    {
        path: ':id/price-config',
        component: _organisation_pricing_config_component__WEBPACK_IMPORTED_MODULE_34__["OrganisationPricingConfigComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Organisation price configuration'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
    },
    {
        path: ':id/purchase-history',
        component: _organisation_purchase_history_component__WEBPACK_IMPORTED_MODULE_32__["OrganisationPurchaseHistoryComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Purchase history'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/manage-licenses',
        component: _organisation_licenses_component__WEBPACK_IMPORTED_MODULE_33__["OrganisationLicensesComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage licenses'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school',
        component: _organisation_sub_school_organisation_sub_school_manage_component__WEBPACK_IMPORTED_MODULE_8__["OrganisationSubSchoolManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage subsidiary schools'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/create',
        component: _organisation_sub_school_organisation_sub_school_create_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationSubSchoolCreateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Create organisations subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/delete',
        component: _organisation_sub_school_organisation_sub_school_delete_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationSubSchoolDeleteComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Delete organisation subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school/:schoolId/view',
        component: _organisation_sub_school_organisation_sub_school_details_component__WEBPACK_IMPORTED_MODULE_15__["OrganisationSubSchoolDetailsComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View organisation subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school/:schoolId/edit',
        component: _organisation_sub_school_organisation_sub_school_update_component__WEBPACK_IMPORTED_MODULE_16__["OrganisationSubSchoolUpdateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View organisation subsidiary school'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/school/:schoolId/school-user',
        component: _organisation_sub_school_user_organisation_school_user_manage_component__WEBPACK_IMPORTED_MODULE_22__["OrganisationSchoolUserManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage school users'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/create',
        component: _organisation_sub_school_user_organisation_school_user_create_component__WEBPACK_IMPORTED_MODULE_23__["OrganisationSchoolUserCreateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Create school users'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:schoolUserId/edit',
        component: _organisation_sub_school_user_organisation_school_user_update_component__WEBPACK_IMPORTED_MODULE_24__["OrganisationSchoolUserUpdateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Edit school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:schoolUserId/view',
        component: _organisation_sub_school_user_organisation_school_user_details_component__WEBPACK_IMPORTED_MODULE_25__["OrganisationSchoolUserDetailsComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:login/delete',
        component: _organisation_sub_school_user_organisation_school_user_delete_component__WEBPACK_IMPORTED_MODULE_26__["OrganisationSchoolUserDeleteComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Delete school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:login/activate',
        component: _organisation_sub_school_user_organisation_school_user_activate_component__WEBPACK_IMPORTED_MODULE_28__["OrganisationSchoolUserActivateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Activate school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/school/:schoolId/school-user/:login/deactivate',
        component: _organisation_sub_school_user_organisation_school_user_deactivate_component__WEBPACK_IMPORTED_MODULE_29__["OrganisationSchoolUserDeactivateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Deactivate school user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user',
        component: _organisation_user_organisation_user_manage_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationUserManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage organisation users'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user/create',
        component: _organisation_user_organisation_user_create_component__WEBPACK_IMPORTED_MODULE_18__["OrganisationUserCreateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Create organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user/:login/delete',
        component: _organisation_user_organisation_user_delete_component__WEBPACK_IMPORTED_MODULE_19__["OrganisationUserDeleteComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Delete organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/organisation-user/:orgUserId/view',
        component: _organisation_user_organisation_user_details_component__WEBPACK_IMPORTED_MODULE_20__["OrganisationUserDetailsComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/organisation-user/:orgUserId/edit',
        component: _organisation_user_organisation_user_update_component__WEBPACK_IMPORTED_MODULE_21__["OrganisationUserUpdateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Edit organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/organisation-user/:login/activate',
        component: _organisation_user_organisation_user_activate_component__WEBPACK_IMPORTED_MODULE_30__["OrganisationUserActivateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Activate organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: ':id/organisation-user/:login/deactivate',
        component: _organisation_user_organisation_user_deactivate_component__WEBPACK_IMPORTED_MODULE_31__["OrganisationUserDeactivateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Deactivate organisation user'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]],
        resolve: {
            organisation: OrganisationResolve
        }
    },
    {
        path: "student-promotions",
        component: _student_promotions_student_promotions_component__WEBPACK_IMPORTED_MODULE_27__["StudentPromotionComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Student promotions'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/organisation/organisation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/organisation/organisation.service.ts ***!
  \******************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");






let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let OrganisationService = class OrganisationService {
    constructor(http) {
        this.http = http;
        this.organisationResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["organisation"];
        this.organisationCoursesSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["organisationCourseSearch"];
        this.organisationDiscountResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["organisationDiscount"];
        this.organisationLicensesResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["organisationLicense"];
        this.invoiceSearchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["invoiceSearch"];
    }
    createOrganisation(organisation) {
        return this.http.post(this.organisationResourceUrl, organisation, { headers: headers, observe: 'response' });
    }
    updateOrganisation(organisation) {
        return this.http.put(this.organisationResourceUrl, organisation, { observe: 'response' });
    }
    getOrganisationByOrganisationId(id) {
        return this.http.get(`${this.organisationResourceUrl}/${id}`, { observe: 'response' });
    }
    getOrganisations(req) {
        const options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http.get(this.organisationResourceUrl, { params: options, observe: 'response' });
    }
    deleteOrganisation(id) {
        return this.http.delete(`${this.organisationResourceUrl}/${id}`, { observe: 'response' });
    }
    getOrgCoursesSearch(organisationId, req) {
        const options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        var reqJSON = {
            "organisationId": organisationId
        };
        return this.http.post(this.organisationCoursesSearchResourceUrl, reqJSON, { params: options, observe: 'response' });
    }
    updateOrganisationDiscount(orgDiscount) {
        return this.http.put(this.organisationDiscountResourceUrl, orgDiscount, { observe: 'response' });
    }
    addLicenses(orgLicenses) {
        return this.http.put(this.organisationLicensesResourceUrl, orgLicenses, { observe: 'response' });
    }
    getInvoiceSearch(organisationId, req) {
        const options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        var reqJSON = {
            "purchasedByOrganisationId": organisationId
        };
        return this.http.post(this.invoiceSearchUrl, reqJSON, { params: options, observe: 'response' });
    }
};
OrganisationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrganisationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrganisationService);



/***/ }),

/***/ "./src/app/shared/constants/common.constants.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/constants/common.constants.ts ***!
  \******************************************************/
/*! exports provided: DRAFT, ACTIVE, INACTIVE, ARCHIVED, NOCHANGE, CREATED, EDITED, DELETED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAFT", function() { return DRAFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE", function() { return ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INACTIVE", function() { return INACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCHIVED", function() { return ARCHIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOCHANGE", function() { return NOCHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITED", function() { return EDITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETED", function() { return DELETED; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DRAFT = 'DRAFT';
const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';
const ARCHIVED = 'ARCHIVED';
const NOCHANGE = 'NOCHANGE';
const CREATED = 'CREATED';
const EDITED = 'EDITED';
const DELETED = 'DELETED';


/***/ }),

/***/ "./src/app/shared/model/common/organisation.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/model/common/organisation.model.ts ***!
  \***********************************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Organisation {
    constructor(addressLine1, addressLine2, city, country, curriculumIds, district, extraCurriculumId, hasExtraCurriculum, id, name, phone1, phone2, pincode, primaryContactDesignation, primaryContactName, primaryContactPhone, primaryContactMail, registrationNumber, secondaryContactDesignation, secondaryContactName, secondaryContactPhone, secondaryContactMail, state, gender, organisationType, organisationName, examType) {
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.country = country;
        this.curriculumIds = curriculumIds;
        this.district = district;
        this.extraCurriculumId = extraCurriculumId;
        this.hasExtraCurriculum = hasExtraCurriculum;
        this.id = id;
        this.name = name;
        this.phone1 = phone1;
        this.phone2 = phone2;
        this.pincode = pincode;
        this.primaryContactDesignation = primaryContactDesignation;
        this.primaryContactName = primaryContactName;
        this.primaryContactPhone = primaryContactPhone;
        this.primaryContactMail = primaryContactMail;
        this.registrationNumber = registrationNumber;
        this.secondaryContactDesignation = secondaryContactDesignation;
        this.secondaryContactName = secondaryContactName;
        this.secondaryContactPhone = secondaryContactPhone;
        this.secondaryContactMail = secondaryContactMail;
        this.state = state;
        this.gender = gender;
        this.organisationType = organisationType;
        this.organisationName = organisationName;
        this.examType = examType;
    }
}


/***/ }),

/***/ "./src/app/student-promotions/student-promotions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/student-promotions/student-promotions.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPromotionComponent", function() { return StudentPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_promotions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-promotions.service */ "./src/app/student-promotions/student-promotions.service.ts");



let StudentPromotionComponent = class StudentPromotionComponent {
    constructor() { }
    ngOnInit() { }
};
StudentPromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-promotions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-promotions/student-promotions.component.html")).default,
        providers: [_student_promotions_service__WEBPACK_IMPORTED_MODULE_2__["StudentPromotionsService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudentPromotionComponent);



/***/ }),

/***/ "./src/app/student-promotions/student-promotions.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-promotions/student-promotions.service.ts ***!
  \******************************************************************/
/*! exports provided: StudentPromotionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPromotionsService", function() { return StudentPromotionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let StudentPromotionsService = class StudentPromotionsService {
    constructor(http) {
        this.http = http;
    }
};
StudentPromotionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentPromotionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StudentPromotionsService);



/***/ })

}]);
//# sourceMappingURL=organisation-organisation-module-es2015.js.map