function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curriculum-curriculum-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-affiliations.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-affiliations.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumCurriculumAffiliationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\" *ngIf=\"affiliations\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort>\r\n                <th jhiSortBy=\"organisationName\">Organisation name <span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"name\">School name<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"city\">City<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"fromGrade\">From grade<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"toGrade\">To grade<span class=\"fa fa-sort  ml-1\"></span></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let curriculum of affiliations ;trackBy: trackId\">\r\n                <td data-column=\"Organisation name\">{{curriculum.organisationName}}</td>\r\n                <td data-column=\"School name\">{{curriculum.name}}</td>\r\n                <td data-column=\"City\">{{curriculum.city}}</td>\r\n                <td data-column=\"From grade\">{{curriculum.fromGrade}}</td>\r\n                <td data-column=\"To grade\">{{curriculum.toGrade}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-create.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-create.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumCurriculumCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\">\r\n        </i>Back\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"curriculumForm\">\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Curriculum name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter curriculum name (minlength: 3 and maxlength: 75)\"\r\n            formControlName=\"curriculumName\" minlength=\"3\" maxlength=\"75\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Acronym</label>\r\n        <input type=\"text\" class=\"form-control\"\r\n            placeholder=\"Enter acronym for curriculum(minlength: 2 and maxlength: 10)\"\r\n            formControlName=\"curriculumAcronym\" minlength=\"2\" maxlength=\"10\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets (CAPITAL LETTERS ONLY) </span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span></label>\r\n        <textarea class=\"form-control\" placeholder=\"Enter description (minlength: 3 and maxlength: 250)\"\r\n            formControlName=\"curriculumDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets, Numbers and Special characters</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"country\" class=\"col-form-label\">Country</label>\r\n        <ng-select [items]=\"countryList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n            placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n            formControlName=\"country\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"state\" class=\"col-form-label\">State</label>\r\n        <ng-select [items]=\"stateList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select state\"\r\n            [(ngModel)]=\"selectedState\" formControlName=\"state\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"startDate\" class=\"col-form-label\">Start date (dd-mm)</label>\r\n            <input id=\"startDate\" name=\"inputMask\" formControlName=\"startDate\" class=\"form-control input-mask\"\r\n                type=\"text\" placeholder=\"dd-mm\" minlength=\"5\" maxlength=\"5\" (click)=\"applyInputMaskForDate()\"\r\n                inputRestriction=\"onlyIntegers\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd-mm</span>\r\n        </div>\r\n        <div class=\"form-group  col-xxl-6\">\r\n            <label for=\"endDate\" name=\"inputMask\" class=\"col-form-label\">End date (dd-mm)</label>\r\n            <input id=\"endDate\" formControlName=\"endDate\" class=\"form-control input-mask\" type=\"text\"\r\n                placeholder=\"dd-mm\" (click)=\"applyInputMaskForDate()\" minlength=\"5\" maxlength=\"5\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd-mm</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"fromGrade\" class=\"col-form-label\">From grade</label>\r\n            <ng-select [items]=\"gradesFromList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedFromGrade\" (change)=\"onFromGradeChange()\"\r\n                formControlName=\"fromGrade\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"to\" class=\"col-form-label\">To grade</label>\r\n            <ng-select [items]=\"gradesToList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedToGrade\" formControlName=\"toGrade\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 d-flex justify-content-end\">\r\n        <button class=\"btn btn-danger mr-2 mb-2\" (click)=\"resetCurriculum()\">\r\n            <i class=\"fa fa-times mr-2\"></i>Reset\r\n        </button>\r\n        <button class=\"btn btn-info mb-2 mr-2\" (click)=\"saveAsDraft()\" [disabled]=\"validateForm\">\r\n            <i class=\"fa fa-save mr-2\"></i>Save as draft\r\n        </button>\r\n        <button class=\"btn btn-success mb-2\" (click)=\"saveAsPublish()\" [disabled]=\"validateForm\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>Save and publish\r\n        </button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-details.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-details.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumCurriculumDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\">\r\n        </i>Back\r\n    </div>\r\n    <a class=\"btn btn-success\" [routerLink]=\"['/curriculum', curriculumId, 'edit' ]\">\r\n        <i class=\"fa fa-edit mr-2\">\r\n        </i>Edit curriculum\r\n    </a>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"mb-2 col-xxl-6\">\r\n            <label> Curriculum name </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.name}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> Acronym </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.acronym}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> Description </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.description}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> Country </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{country}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> State </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.state}}>\r\n        </div>\r\n        <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> Start date (dd-mm) </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.startDate}}>\r\n            </div>\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> End date (dd-mm) </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.endDate}}>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> From grade </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.gradesApplicableFrom}}>\r\n            </div>\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> To grade </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.gradesApplicableTo}}>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-manage.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-manage.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumCurriculumManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-flex justify-content-end my-3\">\r\n    <a routerLink=\"/curriculum/create\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create new curriculum\r\n        </div>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"table-responsive\" *ngIf=\"curriculums\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"name\">Curriculum <span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"startDate\">Start Month (dd-mm)<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"endDate\">End Month (dd-mm)<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th class=\"fixed-column\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN']\">Update status</th>\r\n                <th class=\"fixed-column\">Affiliations</th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let curriculum of curriculums ;trackBy: trackId\">\r\n                <td data-column=\"Curriculum\">{{curriculum.acronym}}</td>\r\n                <td data-column=\"Start Month\">\r\n                    {{curriculum.startDate}}\r\n                </td>\r\n                <td data-column=\"End Month\">\r\n                    {{curriculum.endDate}}\r\n                </td>\r\n                <td data-column=\"Status\">{{curriculum.status}}</td>\r\n                <td class=\"fixed-column\" data-column=\"Update status\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN']\">\r\n                    <a class=\"btn btn-outline-success mr-1\"\r\n                        *ngIf=\"curriculum.status === 'DRAFT' || curriculum.status === 'INACTIVE'\"\r\n                        [routerLink]=\"['/curriculum', curriculum.id, 'publish' ]\">\r\n                        Publish\r\n                    </a>\r\n                    <a class=\"btn btn-outline-danger mr-1\" *ngIf=\"curriculum.status === 'ACTIVE'\"\r\n                        [routerLink]=\"['/curriculum', curriculum.id, 'unpublish' ]\">\r\n                        Unpublish\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Affiliations\">\r\n                    <a class=\"btn btn-outline-info mr-1 mb-1\"\r\n                        [routerLink]=\"['/curriculum', curriculum.id, 'affiliations' ]\">\r\n                        View\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div class=\"d-flex\">\r\n                        <a class=\"btn btn-outline-info btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/curriculum', curriculum.id, 'view' ]\" tooltip=\"View curriculum\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-success btn-icon d-flex justify-content-center align-items-center mr-1 mb-1\"\r\n                            [routerLink]=\"['/curriculum', curriculum.id, 'edit' ]\" tooltip=\"Edit curriculum\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n\r\n                        <!-- <a class=\"btn btn-outline-danger mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                            *ngIf=\"curriculum.status === 'DRAFT' || curriculum.status === 'INACTIVE'\"\r\n                            [routerLink]=\"['/curriculum', curriculum.id, 'delete' ]\" tooltip=\"Delete curriculum\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                        </a> -->\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-update.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-update.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumCurriculumUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\">\r\n        </i>Back\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"curriculumForm\">\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Curriculum name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter curriculum name (minlength: 3 and maxlength: 75)\"\r\n            formControlName=\"curriculumName\" minlength=\"3\" maxlength=\"75\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Acronym</label>\r\n        <input type=\"text\" class=\"form-control\"\r\n            placeholder=\"Enter acronym for curriculum (minlength: 2 and maxlength: 10)\"\r\n            formControlName=\"curriculumAcronym\" minlength=\"2\" maxlength=\"10\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets (CAPITAL LETTERS ONLY)</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span></label>\r\n        <textarea class=\"form-control\" placeholder=\"Enter description (minlength: 3 and maxlength: 250)\"\r\n            formControlName=\"curriculumDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets, Numbers and Special characters</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"country\" class=\"col-form-label\">Country</label>\r\n        <ng-select [items]=\"countryList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n            placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n            formControlName=\"country\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"state\" class=\"col-form-label\">State</label>\r\n        <ng-select [items]=\"stateList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select state\"\r\n            [(ngModel)]=\"selectedState\" formControlName=\"state\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"startDate\" class=\"col-form-label\">Start date (dd-mm)</label>\r\n            <input id=\"startDate\" name=\"inputMask\" formControlName=\"startDate\" class=\"form-control input-mask\"\r\n                type=\"text\" placeholder=\"dd-mm\" minlength=\"5\" maxlength=\"5\" (click)=\"applyInputMaskForDate()\"\r\n                inputRestriction=\"onlyIntegers\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd-mm</span>\r\n        </div>\r\n        <div class=\"form-group  col-xxl-6\">\r\n            <label for=\"endDate\" name=\"inputMask\" class=\"col-form-label\">End date (dd-mm)</label>\r\n            <input id=\"endDate\" formControlName=\"endDate\" class=\"form-control input-mask\" type=\"text\"\r\n                placeholder=\"dd-mm\" (click)=\"applyInputMaskForDate()\" minlength=\"5\" maxlength=\"5\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd-mm</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"fromGrade\" class=\"col-form-label\">From grade</label>\r\n            <ng-select [items]=\"gradesFromList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedFromGrade\" (change)=\"onFromGradeChange()\"\r\n                formControlName=\"fromGrade\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"to\" class=\"col-form-label\">To grade</label>\r\n            <ng-select [items]=\"gradesToList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedToGrade\" formControlName=\"toGrade\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 d-flex justify-content-end\">\r\n        <button class=\"btn btn-danger mr-2 mb-2\" (click)=\"cancelCurriculum()\">\r\n            <i class=\"fa fa-times mr-2\"></i>Reset\r\n        </button>\r\n        <button class=\"btn btn-info mb-2 mr-2\" (click)=\"saveAsDraft()\" [disabled]=\"validateForm\">\r\n            <i class=\"fa fa-save mr-2\"></i>Save as draft\r\n        </button>\r\n        <button class=\"btn btn-success mb-2\" (click)=\"saveAndPublish()\" [disabled]=\"validateForm\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>Save and publish\r\n        </button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-affiliations.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/curriculum/curriculum-affiliations.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CurriculumAffiliationsComponent */

  /***/
  function srcAppCurriculumCurriculumAffiliationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumAffiliationsComponent", function () {
      return CurriculumAffiliationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var CurriculumAffiliationsComponent =
    /*#__PURE__*/
    function () {
      function CurriculumAffiliationsComponent(_router, curriculumService, eventManager, parseLinks, principalService, pluginService, errorHandler, activatedRoute) {
        _classCallCheck(this, CurriculumAffiliationsComponent);

        this._router = _router;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.activatedRoute = activatedRoute;
        this.affiliations = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
          last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
      }

      _createClass(CurriculumAffiliationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.pluginService.sideMenuToggle();
          var curriculumId;
          curriculumId = this.activatedRoute.snapshot.params["id"];

          if (curriculumId) {
            this.loadCurriculumAffiliations(curriculumId);
          }

          this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
          });
        }
      }, {
        key: "loadCurriculumAffiliations",
        value: function loadCurriculumAffiliations(curriculumId) {
          var _this2 = this;

          this.curriculumService.getAffiliationsByCurriculumId(curriculumId).subscribe(function (res) {
            return _this2.paginateCurriculumAffiliations(res.body, res.headers);
          }, function (res) {
            return _this2.onError(res);
          });
        }
      }, {
        key: "paginateCurriculumAffiliations",
        value: function paginateCurriculumAffiliations(data, headers) {
          //this.links = this.parseLinks.parse(headers.get('link'));
          this.totalItems = parseInt(headers.get('X-Total-Count'), 10);

          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              this.affiliations.push(data[i]);
            }
          } else {
            this.pluginService.alertMessage("No data found..!", "warning");
          }
        }
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }, {
        key: "onBack",
        value: function onBack() {
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
              localObj.previousUrl();
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }, {
        key: "previousUrl",
        value: function previousUrl() {
          this._router.navigateByUrl('/curriculum');
        }
      }]);

      return CurriculumAffiliationsComponent;
    }();

    CurriculumAffiliationsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_1__["CurriculumService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_6__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CurriculumAffiliationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum-affiliations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-affiliations.component.html"))["default"],
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_1__["CurriculumService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _curriculum_service__WEBPACK_IMPORTED_MODULE_1__["CurriculumService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_6__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["CoreErrorHandler"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CurriculumAffiliationsComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-create.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/curriculum/curriculum-create.component.ts ***!
    \***********************************************************/

  /*! exports provided: CurriculumCreateComponent */

  /***/
  function srcAppCurriculumCurriculumCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumCreateComponent", function () {
      return CurriculumCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");

    var CurriculumCreateComponent =
    /*#__PURE__*/
    function () {
      function CurriculumCreateComponent(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService, changeDetectRef, errorHandler) {
        _classCallCheck(this, CurriculumCreateComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.errorHandler = errorHandler;
        this.curriculum = {};
        this.gradesFromList = [];
        this.gradesToList = [];
        this.countryList = [];
        this.stateList = [];
        this.validateForm = true;
      }

      _createClass(CurriculumCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pluginService.sideMenuToggle();
          this.createCurriculumFormGroup();
          this.getCountryList();
          this.getGradeList();
        } //Get grade list from local JSON data

      }, {
        key: "getGradeList",
        value: function getGradeList() {
          var _this3 = this;

          this.commonService.getGeneralDataList().subscribe(function (data) {
            _this3.grades = data.grade;
            _this3.gradesFromList = data.grade;
          });
        } //Get country list from local JSON data

      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this4 = this;

          this.commonService.getCountryList().subscribe(function (countryData) {
            _this4.countryList = countryData;
          });
        } //Initializing curriculum formfields

      }, {
        key: "createCurriculumFormGroup",
        value: function createCurriculumFormGroup() {
          this.curriculumForm = this.formBuilder.group({
            curriculumAcronym: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]),
            curriculumName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(75)]),
            curriculumDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            fromGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            toGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
          });
        } //Creating formcontrol for a curriculum formfields
        //Used for validations

      }, {
        key: "applyInputMaskForDate",
        //Applying input mask format for start date and end date 
        value: function applyInputMaskForDate() {
          $(document).ready(function () {
            $('.input-mask').mask('00-00');
          });
        } //Country dropdown on selection

      }, {
        key: "onCountryChange",
        value: function onCountryChange() {
          var countryId;

          if (this.selectedCountry) {
            countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
          }
        } //From grade dropdown on selection

      }, {
        key: "onFromGradeChange",
        value: function onFromGradeChange() {
          var grade;

          if (this.selectedFromGrade) {
            grade = this.selectedFromGrade.name;
            this.generateGradesToList(grade);
          }
        } //Get state list based on country selection

      }, {
        key: "getStateListByCountryId",
        value: function getStateListByCountryId(countryId) {
          var _this5 = this;

          var stateList = [];
          this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this5.stateList = stateList.filter(function (item) {
              return item.country_id === countryId.toString();
            });
          });
        } //Generate To grade list based on From grade selection

      }, {
        key: "generateGradesToList",
        value: function generateGradesToList(selectedGrade) {
          this.gradesToList = [];

          for (var i = selectedGrade; i < this.grades.length; i++) {
            this.gradesToList.push(this.grades[i]);
          }

          return this.gradesToList;
        } //Trim value for validation

      }, {
        key: "trimValue",
        value: function trimValue(value) {
          if (value === null || value === undefined) {
            return value;
          } else {
            return value.trim();
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.validateCurriculumForm();
          this.changeDetectRef.detectChanges();
        } //Curriculum form validation

      }, {
        key: "validateCurriculumForm",
        value: function validateCurriculumForm() {
          var curriculumName, acronym;
          curriculumName = this.trimValue(this.curriculumForm.value.curriculumName);
          acronym = this.trimValue(this.curriculumForm.value.curriculumAcronym);

          if (curriculumName === "" || curriculumName === undefined || curriculumName === null) {
            this.validateForm = true;
          }

          if (acronym === "" || acronym === undefined || acronym === null) {
            this.validateForm = true;
          }

          if (this.curriculumForm.invalid) {
            this.validateForm = true;
          }

          if (this.curriculumForm.valid) {
            this.validateForm = false;
          }
        } //Save curriculum with status DRAFT 

      }, {
        key: "saveAsDraft",
        value: function saveAsDraft() {
          if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"];
            this.saveCurriculum();
          }

          if (this.curriculumForm.invalid) {
            return;
          }
        } //Save curriculum with status ACTIVE 

      }, {
        key: "saveAsPublish",
        value: function saveAsPublish() {
          if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["ACTIVE"];
            this.saveCurriculum();
          }

          if (this.curriculumForm.invalid) {
            return;
          }
        } //Save curriculum service

      }, {
        key: "saveCurriculum",
        value: function saveCurriculum() {
          this.subscribeToSaveResponse(this.curriculumService.createCurriculum(this.createCurriculumForm()));
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this6 = this;

          result.subscribe(function (res) {
            return _this6.onSaveCurriculumSuccess();
          }, function (res) {
            return _this6.onError(res);
          });
        }
      }, {
        key: "onSaveCurriculumSuccess",
        value: function onSaveCurriculumSuccess() {
          if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Curriculum created successfully", "success");
          } else {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
          }

          this.curriculumForm.reset();
          this.router.navigateByUrl('/curriculum');
        }
      }, {
        key: "onError",
        value: function onError(res) {
          this.errorHandler.handleError(res);
        } //Creating curriculum object

      }, {
        key: "createCurriculumForm",
        value: function createCurriculumForm() {
          this.curriculum.name = this.trimValue(this.curriculumForm.get('curriculumName').value);
          this.curriculum.acronym = this.trimValue(this.curriculumForm.get('curriculumAcronym').value);
          this.curriculum.description = this.trimValue(this.curriculumForm.get('curriculumDescription').value);
          this.curriculum.startDate = this.curriculumForm.get('startDate').value;
          this.curriculum.endDate = this.curriculumForm.get('endDate').value;
          this.curriculum.status = this.curriculumStatus;
          this.curriculum.isExtraCurriculum = false;
          this.curriculum.country = this.selectedCountry.sortname;
          this.curriculum.state = this.selectedState.name;
          this.curriculum.gradesApplicableFrom = this.selectedFromGrade.name;
          this.curriculum.gradesApplicableTo = this.selectedToGrade.name;
          this.curriculum.organisationId = null;
          return this.curriculum;
        } //Reset curriculum formfields

      }, {
        key: "resetCurriculum",
        value: function resetCurriculum() {
          this.curriculumForm.reset();
          this.selectedCountry = null;
          this.selectedState = null;
          this.selectedFromGrade = null;
          this.selectedToGrade = null;
        }
      }, {
        key: "onBack",
        value: function onBack() {
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
              localObj.router.navigateByUrl('/curriculum');
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }, {
        key: "formControl",
        get: function get() {
          return this.curriculumForm.controls;
        }
      }]);

      return CurriculumCreateComponent;
    }();

    CurriculumCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]
      }];
    };

    CurriculumCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-create.component.html"))["default"],
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]])], CurriculumCreateComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-delete.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/curriculum/curriculum-delete.component.ts ***!
    \***********************************************************/

  /*! exports provided: CurriculumDeleteComponent */

  /***/
  function srcAppCurriculumCurriculumDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumDeleteComponent", function () {
      return CurriculumDeleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");

    var CurriculumDeleteComponent =
    /*#__PURE__*/
    function () {
      function CurriculumDeleteComponent(router, activatedRoute, eventManager, curriculumService, pluginService, errorHandler) {
        _classCallCheck(this, CurriculumDeleteComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
      }

      _createClass(CurriculumDeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.activatedRoute.data.subscribe(function (_ref) {
            var curriculum = _ref.curriculum;

            _this7.deleteCurriculum(curriculum);
          });
        }
      }, {
        key: "subscribeToDeleteCurriculumResponse",
        value: function subscribeToDeleteCurriculumResponse(resp) {
          var _this8 = this;

          resp.subscribe(function (res) {
            return _this8.onDeleteCurriculumSuccess(res);
          }, function (res) {
            return _this8.onError(res);
          });
        } //Delete curriculum

      }, {
        key: "deleteCurriculum",
        value: function deleteCurriculum(curriculum) {
          var localthisObject = this;
          swal({
            title: "Are you sure to delete this curriculum ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
          }, function (isConfirm) {
            if (isConfirm) {
              localthisObject.confirmDelete(curriculum.id);
            } else {
              localthisObject.previousUrl();
            }
          });
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete(id) {
          this.subscribeToDeleteCurriculumResponse(this.curriculumService.deleteCurriculum(id));
        }
      }, {
        key: "previousUrl",
        value: function previousUrl() {
          this.router.navigateByUrl('/curriculum');
        }
      }, {
        key: "onDeleteCurriculumSuccess",
        value: function onDeleteCurriculumSuccess(resp) {
          this.pluginService.alertMessage("Curriculum deleted successfully", "success");
          this.previousUrl();
        }
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }]);

      return CurriculumDeleteComponent;
    }();

    CurriculumDeleteComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]
      }];
    };

    CurriculumDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "",
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"], _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])], CurriculumDeleteComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-details.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/curriculum/curriculum-details.component.ts ***!
    \************************************************************/

  /*! exports provided: CurriculumDetailsComponent */

  /***/
  function srcAppCurriculumCurriculumDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumDetailsComponent", function () {
      return CurriculumDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");

    var CurriculumDetailsComponent =
    /*#__PURE__*/
    function () {
      function CurriculumDetailsComponent(router, activatedRoute, pluginService, commonService) {
        _classCallCheck(this, CurriculumDetailsComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pluginService = pluginService;
        this.commonService = commonService;
        this.curriculum = {};
      }

      _createClass(CurriculumDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.pluginService.sideMenuToggle();
          this.activatedRoute.data.subscribe(function (_ref2) {
            var curriculum = _ref2.curriculum;
            _this9.curriculum = curriculum;

            _this9.getCountryList();
          });
        } //Get country list from local JSON data

      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this10 = this;

          this.commonService.getCountryList().subscribe(function (countryData) {
            _this10.countryList = countryData;

            _this10.mapCurriculumValues();
          });
        }
      }, {
        key: "mapCurriculumValues",
        value: function mapCurriculumValues() {
          var _this11 = this;

          this.curriculumId = this.curriculum.id;
          this.country = this.countryList.find(function (item) {
            return item.sortname === _this11.curriculum.country;
          }).name;
        }
      }, {
        key: "onBack",
        value: function onBack() {
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
              localObj.router.navigateByUrl('/curriculum');
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }]);

      return CurriculumDetailsComponent;
    }();

    CurriculumDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    CurriculumDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-details.component.html"))["default"],
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])], CurriculumDetailsComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-manage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/curriculum/curriculum-manage.component.ts ***!
    \***********************************************************/

  /*! exports provided: CurriculumManageComponent */

  /***/
  function srcAppCurriculumCurriculumManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumManageComponent", function () {
      return CurriculumManageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");

    var CurriculumManageComponent =
    /*#__PURE__*/
    function () {
      function CurriculumManageComponent(_router, curriculumService, eventManager, parseLinks, principalService, pluginService, errorHandler) {
        _classCallCheck(this, CurriculumManageComponent);

        this._router = _router;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.curriculums = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_6__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
          last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
      }

      _createClass(CurriculumManageComponent, [{
        key: "loadStandardCurriculums",
        value: function loadStandardCurriculums() {
          var _this12 = this;

          this.curriculumService.getStandardCurriculums({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
          }).subscribe(function (res) {
            return _this12.paginateCurriculums(res.body, res.headers);
          }, function (res) {
            return _this12.onError(res);
          });
        }
      }, {
        key: "paginateCurriculums",
        value: function paginateCurriculums(data, headers) {
          //this.links = this.parseLinks.parse(headers.get('link'));
          this.totalItems = parseInt(headers.get('X-Total-Count'), 10);

          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              this.curriculums.push(data[i]);
            }
          } else {
            this.pluginService.alertMessage("No data found..!", "warning");
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.page = 0;
          this.curriculums = [];
          this.loadStandardCurriculums();
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          this.page = page;
          this.loadStandardCurriculums();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.loadStandardCurriculums();
          this.principalService.identity().then(function (account) {
            _this13.currentAccount = account;
          });
          this.registerChangeInCurriculums();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.eventManager.destroy(this.eventSubscriber);
        }
      }, {
        key: "trackId",
        value: function trackId(index, item) {
          return item.id;
        }
      }, {
        key: "registerChangeInCurriculums",
        value: function registerChangeInCurriculums() {
          var _this14 = this;

          this.eventSubscriber = this.eventManager.subscribe('curriculumListModification', function (response) {
            return _this14.reset();
          });
        }
      }, {
        key: "sort",
        value: function sort() {
          var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];

          if (this.predicate !== 'id') {
            result.push('id');
          }

          return result;
        }
      }, {
        key: "convertToCurriculumList",
        value: function convertToCurriculumList(data) {
          this.curriculums.push(data);
        }
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }, {
        key: "ngDestroy",
        value: function ngDestroy() {
          this.eventSubscriber.unsubscribe();
        }
      }]);

      return CurriculumManageComponent;
    }();

    CurriculumManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]
      }];
    };

    CurriculumManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-manage.component.html"))["default"],
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_5__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])], CurriculumManageComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-update-publish.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/curriculum/curriculum-update-publish.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CurriculumPublishComponent */

  /***/
  function srcAppCurriculumCurriculumUpdatePublishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumPublishComponent", function () {
      return CurriculumPublishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");

    var CurriculumPublishComponent =
    /*#__PURE__*/
    function () {
      function CurriculumPublishComponent(router, activatedRoute, curriculumService, pluginService, errorHandler) {
        _classCallCheck(this, CurriculumPublishComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
      }

      _createClass(CurriculumPublishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.activatedRoute.data.subscribe(function (_ref3) {
            var curriculum = _ref3.curriculum;

            _this15.publishCurriculum(curriculum);
          });
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this16 = this;

          result.subscribe(function (res) {
            return _this16.onSaveSuccess(res);
          }, function (errRes) {
            return _this16.onError(errRes);
          });
        }
      }, {
        key: "publishCurriculum",
        value: function publishCurriculum(curriculum) {
          curriculum.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"];
          this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(curriculum));
          this.router.navigateByUrl('/curriculum');
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(resp) {
          if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"]) {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
          }
        }
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }]);

      return CurriculumPublishComponent;
    }();

    CurriculumPublishComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]
      }];
    };

    CurriculumPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "",
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])], CurriculumPublishComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-update-unpublish.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/curriculum/curriculum-update-unpublish.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CurriculumUnpublishComponent */

  /***/
  function srcAppCurriculumCurriculumUpdateUnpublishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumUnpublishComponent", function () {
      return CurriculumUnpublishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");

    var CurriculumUnpublishComponent =
    /*#__PURE__*/
    function () {
      function CurriculumUnpublishComponent(router, activatedRoute, curriculumService, pluginService, errorHandler) {
        _classCallCheck(this, CurriculumUnpublishComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
      }

      _createClass(CurriculumUnpublishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.activatedRoute.data.subscribe(function (_ref4) {
            var curriculum = _ref4.curriculum;

            _this17.unpublishCurriculum(curriculum);
          });
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this18 = this;

          result.subscribe(function (res) {
            return _this18.onSaveSuccess(res);
          }, function (errRes) {
            return _this18.onError(errRes);
          });
        }
      }, {
        key: "unpublishCurriculum",
        value: function unpublishCurriculum(curriculum) {
          curriculum.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["INACTIVE"];
          this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(curriculum));
          this.pluginService.alertMessage("Curriculum published successfully", "success");
          this.router.navigateByUrl('/curriculum');
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(resp) {
          if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["INACTIVE"]) {
            this.pluginService.alertMessage("Curriculum unpublished successfully", "success");
          }
        }
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }]);

      return CurriculumUnpublishComponent;
    }();

    CurriculumUnpublishComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]
      }];
    };

    CurriculumUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "",
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]])], CurriculumUnpublishComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum-update.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/curriculum/curriculum-update.component.ts ***!
    \***********************************************************/

  /*! exports provided: CurriculumUpdateComponent */

  /***/
  function srcAppCurriculumCurriculumUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumUpdateComponent", function () {
      return CurriculumUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");

    var CurriculumUpdateComponent =
    /*#__PURE__*/
    function () {
      function CurriculumUpdateComponent(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService, changeDetectorRef, errorHandler) {
        _classCallCheck(this, CurriculumUpdateComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.changeDetectorRef = changeDetectorRef;
        this.errorHandler = errorHandler;
        this.curriculum = {};
        this.gradesFromList = [];
        this.gradesToList = [];
        this.validateForm = true;
      }

      _createClass(CurriculumUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.pluginService.sideMenuToggle();
          this.createCurriculumFormGroup();
          this.activatedRoute.data.subscribe(function (_ref5) {
            var curriculum = _ref5.curriculum;
            _this19.curriculum = curriculum;

            _this19.getCountryList();
          });
        }
      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this20 = this;

          this.commonService.getCountryList().subscribe(function (countryData) {
            _this20.countryList = countryData;

            _this20.getStateList();

            _this20.getGeneralDataList();
          });
        }
      }, {
        key: "getGeneralDataList",
        value: function getGeneralDataList() {
          var _this21 = this;

          this.commonService.getGeneralDataList().subscribe(function (generalData) {
            //this.curriculumTypeList = generalData.curriculumType;
            _this21.grades = generalData.grade;
            _this21.gradesFromList = _this21.grades;
          });
        }
      }, {
        key: "getStateList",
        value: function getStateList() {
          var _this22 = this;

          this.commonService.getStateList().subscribe(function (stateData) {
            _this22.allStateList = stateData;

            _this22.updateCurriculumValues();
          });
        }
      }, {
        key: "createCurriculumFormGroup",
        value: function createCurriculumFormGroup() {
          this.curriculumForm = this.formBuilder.group({
            curriculumAcronym: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]),
            curriculumName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(75)]),
            curriculumDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(5)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            fromGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            toGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
          });
        }
      }, {
        key: "updateCurriculumValues",
        value: function updateCurriculumValues() {
          var _this23 = this;

          var curriculumType, stateIndex, countryIndex, fromGradeIndex, toGradeIndex;
          this.stateList = [];
          countryIndex = this.countryList.findIndex(function (item) {
            return item.sortname === _this23.curriculum.country;
          });
          this.selectedCountry = this.countryList[countryIndex];
          this.stateList = this.allStateList.filter(function (item) {
            return item.country_id === _this23.countryList[countryIndex].id.toString();
          });
          stateIndex = this.stateList.findIndex(function (item) {
            return item.name === _this23.curriculum.state;
          });
          this.selectedState = this.stateList[stateIndex];
          fromGradeIndex = this.gradesFromList.findIndex(function (item) {
            return item.name === _this23.curriculum.gradesApplicableFrom;
          });
          this.selectedFromGrade = this.gradesFromList[fromGradeIndex];
          this.generateGradesToList(this.curriculum.gradesApplicableFrom);
          toGradeIndex = this.gradesToList.findIndex(function (item) {
            return item.name === _this23.curriculum.gradesApplicableTo;
          });
          this.selectedToGrade = this.gradesToList[toGradeIndex];
          this.curriculumForm.patchValue({
            curriculumType: curriculumType,
            curriculumAcronym: this.curriculum.acronym,
            curriculumName: this.curriculum.name,
            organisation: this.curriculum.id,
            curriculumDescription: this.curriculum.description,
            startDate: this.curriculum.startDate,
            endDate: this.curriculum.endDate
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.applyInputMaskForDate();
        }
      }, {
        key: "applyInputMaskForDate",
        value: function applyInputMaskForDate() {
          $(document).ready(function () {
            $('.input-mask').mask('00-00');
          });
        }
      }, {
        key: "onCountryChange",
        value: function onCountryChange() {
          var countryId;

          if (this.selectedCountry) {
            countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
          }
        }
      }, {
        key: "onFromGradeChange",
        value: function onFromGradeChange() {
          var grade;

          if (this.selectedFromGrade) {
            grade = this.selectedFromGrade.name;
            this.generateGradesToList(grade);
          }
        }
      }, {
        key: "getStateListByCountryId",
        value: function getStateListByCountryId(countryId) {
          var _this24 = this;

          var stateList = [];
          this.commonService.getStateList().subscribe(function (stateData) {
            stateList = stateData;
            _this24.stateList = stateList.filter(function (item) {
              return item.country_id === countryId.toString();
            });
          });
        }
      }, {
        key: "generateGradesToList",
        value: function generateGradesToList(selectedGrade) {
          this.gradesToList = [];

          for (var i = selectedGrade; i < this.grades.length; i++) {
            this.gradesToList.push(this.grades[i]);
          }

          return this.gradesToList;
        }
      }, {
        key: "trimValue",
        value: function trimValue(value) {
          if (value === null || value === undefined) {
            return value;
          } else {
            return value.trim();
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.validateCurriculumForm();
          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "validateCurriculumForm",
        value: function validateCurriculumForm() {
          var curriculumName, acronym;
          curriculumName = this.trimValue(this.curriculumForm.value.curriculumName);
          acronym = this.trimValue(this.curriculumForm.value.curriculumAcronym);

          if (curriculumName === "" || curriculumName === undefined || curriculumName === null) {
            this.validateForm = true;
          }

          if (acronym === "" || acronym === undefined || acronym === null) {
            this.validateForm = true;
          }

          if (this.curriculumForm.invalid) {
            this.validateForm = true;
          }

          if (this.curriculumForm.valid) {
            this.validateForm = false;
          }
        }
      }, {
        key: "saveAsDraft",
        value: function saveAsDraft() {
          if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"];
            this.saveCurriculum();
          }

          if (this.curriculumForm.invalid) {
            return;
          }
        }
      }, {
        key: "saveAndPublish",
        value: function saveAndPublish() {
          if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["ACTIVE"];
            this.saveCurriculum();
          }

          if (this.curriculumForm.invalid) {
            return;
          }
        }
      }, {
        key: "saveCurriculum",
        value: function saveCurriculum() {
          this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(this.createCurriculumForm()));
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this25 = this;

          result.subscribe(function (res) {
            return _this25.onSaveSuccess();
          }, function (res) {
            return _this25.onError(res);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess() {
          if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Curriculum updated successfully", "success");
          } else {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
          }

          this.router.navigateByUrl('/curriculum');
          this.curriculumForm.reset();
        }
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }, {
        key: "createCurriculumForm",
        value: function createCurriculumForm() {
          this.curriculum.name = this.curriculumForm.value.curriculumName;
          this.curriculum.acronym = this.curriculumForm.value.curriculumAcronym;
          this.curriculum.description = this.curriculumForm.value.curriculumDescription;
          this.curriculum.startDate = this.curriculumForm.value.startDate;
          this.curriculum.endDate = this.curriculumForm.value.endDate;
          this.curriculum.country = this.selectedCountry.sortname;
          this.curriculum.state = this.selectedState.name;
          this.curriculum.gradesApplicableFrom = this.selectedFromGrade.name;
          this.curriculum.gradesApplicableTo = this.selectedToGrade.name;
          this.curriculum.status = this.curriculumStatus;
          return this.curriculum;
        }
      }, {
        key: "cancelCurriculum",
        value: function cancelCurriculum() {
          this.curriculumForm.reset();
          this.selectedCountry = null;
          this.selectedState = null;
          this.selectedFromGrade = null;
          this.selectedToGrade = null;
        }
      }, {
        key: "onBack",
        value: function onBack() {
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
              localObj.router.navigateByUrl('/curriculum');
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }, {
        key: "formControl",
        get: function get() {
          return this.curriculumForm.controls;
        }
      }]);

      return CurriculumUpdateComponent;
    }();

    CurriculumUpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]
      }];
    };

    CurriculumUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-update.component.html"))["default"],
      providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]])], CurriculumUpdateComponent);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/curriculum/curriculum.module.ts ***!
    \*************************************************/

  /*! exports provided: CurriculumModule */

  /***/
  function srcAppCurriculumCurriculumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumModule", function () {
      return CurriculumModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _curriculum_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./curriculum.route */
    "./src/app/curriculum/curriculum.route.ts");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./index */
    "./src/app/curriculum/index.ts");

    var CurriculumModule = function CurriculumModule() {
      _classCallCheck(this, CurriculumModule);
    };

    CurriculumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_curriculum_route__WEBPACK_IMPORTED_MODULE_8__["curriculumRoute"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["NgJhipsterModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
      declarations: [_index__WEBPACK_IMPORTED_MODULE_9__["CurriculumManageComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumCreateComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumUpdateComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumDetailsComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumDeleteComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumPublishComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumUnpublishComponent"], _index__WEBPACK_IMPORTED_MODULE_9__["CurriculumAffiliationsComponent"]],
      providers: [_index__WEBPACK_IMPORTED_MODULE_9__["CurriculumService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CurriculumModule);
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum.route.ts":
  /*!************************************************!*\
    !*** ./src/app/curriculum/curriculum.route.ts ***!
    \************************************************/

  /*! exports provided: CurriculumResolve, curriculumRoute */

  /***/
  function srcAppCurriculumCurriculumRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumResolve", function () {
      return CurriculumResolve;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "curriculumRoute", function () {
      return curriculumRoute;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_model_content_curriculum_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/model/content/curriculum.model */
    "./src/app/shared/model/content/curriculum.model.ts");
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./curriculum-manage.component */
    "./src/app/curriculum/curriculum-manage.component.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _curriculum_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./curriculum-create.component */
    "./src/app/curriculum/curriculum-create.component.ts");
    /* harmony import */


    var _curriculum_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./curriculum-update.component */
    "./src/app/curriculum/curriculum-update.component.ts");
    /* harmony import */


    var _curriculum_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./curriculum-details.component */
    "./src/app/curriculum/curriculum-details.component.ts");
    /* harmony import */


    var _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./curriculum-update-publish.component */
    "./src/app/curriculum/curriculum-update-publish.component.ts");
    /* harmony import */


    var _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./curriculum-update-unpublish.component */
    "./src/app/curriculum/curriculum-update-unpublish.component.ts");
    /* harmony import */


    var _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./curriculum-delete.component */
    "./src/app/curriculum/curriculum-delete.component.ts");
    /* harmony import */


    var _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./curriculum-affiliations.component */
    "./src/app/curriculum/curriculum-affiliations.component.ts");

    var CurriculumResolve =
    /*#__PURE__*/
    function () {
      function CurriculumResolve(service) {
        _classCallCheck(this, CurriculumResolve);

        this.service = service;
      }

      _createClass(CurriculumResolve, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.params['id'] ? route.params['id'] : null;

          if (id) {
            return this.service.getCurriculumByCurriculumId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (response) {
              return response.ok;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (curriculum) {
              return curriculum.body;
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _shared_model_content_curriculum_model__WEBPACK_IMPORTED_MODULE_2__["Curriculum"]());
        }
      }]);

      return CurriculumResolve;
    }();

    CurriculumResolve.ctorParameters = function () {
      return [{
        type: _curriculum_service__WEBPACK_IMPORTED_MODULE_3__["CurriculumService"]
      }];
    };

    CurriculumResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_curriculum_service__WEBPACK_IMPORTED_MODULE_3__["CurriculumService"]])], CurriculumResolve);
    var curriculumRoute = [{
      path: '',
      component: _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumManageComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Manage curriculums'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: 'create',
      component: _curriculum_create_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumCreateComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Create new curriculum',
        action: "create"
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: ':id/edit',
      component: _curriculum_update_component__WEBPACK_IMPORTED_MODULE_9__["CurriculumUpdateComponent"],
      resolve: {
        curriculum: CurriculumResolve
      },
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Edit curriculum',
        action: 'edit'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: ':id/view',
      component: _curriculum_details_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumDetailsComponent"],
      resolve: {
        curriculum: CurriculumResolve
      },
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'View curriculum',
        action: 'view'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: ':id/delete',
      component: _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumDeleteComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Delete curriculum',
        action: 'delete'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: ':id/publish',
      component: _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumPublishComponent"],
      resolve: {
        curriculum: CurriculumResolve
      },
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Publish curriculum',
        action: 'publish'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: ':id/unpublish',
      component: _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumUnpublishComponent"],
      resolve: {
        curriculum: CurriculumResolve
      },
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Unpublish curriculum',
        action: 'unpublish'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
      path: ':id/affiliations',
      component: _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumAffiliationsComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Manage curriculum affiliations',
        action: 'unpublish'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }];
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/curriculum/curriculum.service.ts ***!
    \**************************************************/

  /*! exports provided: CurriculumService */

  /***/
  function srcAppCurriculumCurriculumServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumService", function () {
      return CurriculumService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/constants/service.constants */
    "./src/app/shared/constants/service.constants.ts");

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var CurriculumService =
    /*#__PURE__*/
    function () {
      function CurriculumService(http) {
        _classCallCheck(this, CurriculumService);

        this.http = http;
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["curriculum"];
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["curriculumSearch"];
        this.curriculumAffiliationResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["curriculumAffiliations"];
      }

      _createClass(CurriculumService, [{
        key: "createCurriculum",
        value: function createCurriculum(curriculum) {
          return this.http.post(this.curriculumResourceUrl, curriculum, {
            observe: 'response'
          });
        }
      }, {
        key: "updateCurriculum",
        value: function updateCurriculum(curriculum) {
          return this.http.put(this.curriculumResourceUrl, curriculum, {
            observe: 'response'
          });
        }
      }, {
        key: "getCurriculumByCurriculumId",
        value: function getCurriculumByCurriculumId(id) {
          return this.http.get("".concat(this.curriculumResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getStandardCurriculums",
        value: function getStandardCurriculums(req) {
          var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
          var reqJSON = {
            "isExtraCurriculum": false
          };
          return this.http.post(this.curriculumResourceUrlSearch, reqJSON, {
            params: options,
            observe: 'response'
          });
        }
      }, {
        key: "getCurriculumSearch",
        value: function getCurriculumSearch(req) {
          var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
          var reqJSON = {
            "isExtraCurriculum": false,
            "status": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"]
          };
          return this.http.post(this.curriculumResourceUrlSearch, reqJSON, {
            params: options,
            observe: 'response'
          });
        }
      }, {
        key: "deleteCurriculum",
        value: function deleteCurriculum(id) {
          return this.http["delete"]("".concat(this.curriculumResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getAffiliationsByCurriculumId",
        value: function getAffiliationsByCurriculumId(id) {
          return this.http.get("".concat(this.curriculumAffiliationResourceUrlSearch, "/").concat(id), {
            observe: 'response'
          });
        }
      }]);

      return CurriculumService;
    }();

    CurriculumService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CurriculumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CurriculumService);
    /***/
  },

  /***/
  "./src/app/curriculum/index.ts":
  /*!*************************************!*\
    !*** ./src/app/curriculum/index.ts ***!
    \*************************************/

  /*! exports provided: CurriculumAffiliationsComponent, CurriculumManageComponent, CurriculumUpdateComponent, CurriculumCreateComponent, CurriculumDetailsComponent, CurriculumDeleteComponent, CurriculumPublishComponent, CurriculumUnpublishComponent, CurriculumService */

  /***/
  function srcAppCurriculumIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./curriculum-affiliations.component */
    "./src/app/curriculum/curriculum-affiliations.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumAffiliationsComponent", function () {
      return _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_1__["CurriculumAffiliationsComponent"];
    });
    /* harmony import */


    var _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curriculum-manage.component */
    "./src/app/curriculum/curriculum-manage.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumManageComponent", function () {
      return _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_2__["CurriculumManageComponent"];
    });
    /* harmony import */


    var _curriculum_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./curriculum-update.component */
    "./src/app/curriculum/curriculum-update.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumUpdateComponent", function () {
      return _curriculum_update_component__WEBPACK_IMPORTED_MODULE_3__["CurriculumUpdateComponent"];
    });
    /* harmony import */


    var _curriculum_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./curriculum-create.component */
    "./src/app/curriculum/curriculum-create.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumCreateComponent", function () {
      return _curriculum_create_component__WEBPACK_IMPORTED_MODULE_4__["CurriculumCreateComponent"];
    });
    /* harmony import */


    var _curriculum_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./curriculum-details.component */
    "./src/app/curriculum/curriculum-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumDetailsComponent", function () {
      return _curriculum_details_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumDetailsComponent"];
    });
    /* harmony import */


    var _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./curriculum-delete.component */
    "./src/app/curriculum/curriculum-delete.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumDeleteComponent", function () {
      return _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumDeleteComponent"];
    });
    /* harmony import */


    var _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./curriculum-update-publish.component */
    "./src/app/curriculum/curriculum-update-publish.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumPublishComponent", function () {
      return _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumPublishComponent"];
    });
    /* harmony import */


    var _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./curriculum-update-unpublish.component */
    "./src/app/curriculum/curriculum-update-unpublish.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumUnpublishComponent", function () {
      return _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumUnpublishComponent"];
    });
    /* harmony import */


    var _curriculum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CurriculumService", function () {
      return _curriculum_service__WEBPACK_IMPORTED_MODULE_9__["CurriculumService"];
    });
    /***/

  },

  /***/
  "./src/app/shared/constants/common.constants.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/constants/common.constants.ts ***!
    \******************************************************/

  /*! exports provided: DRAFT, ACTIVE, INACTIVE, ARCHIVED, NOCHANGE, CREATED, EDITED, DELETED */

  /***/
  function srcAppSharedConstantsCommonConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRAFT", function () {
      return DRAFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTIVE", function () {
      return ACTIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INACTIVE", function () {
      return INACTIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ARCHIVED", function () {
      return ARCHIVED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOCHANGE", function () {
      return NOCHANGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATED", function () {
      return CREATED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EDITED", function () {
      return EDITED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETED", function () {
      return DELETED;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DRAFT = 'DRAFT';
    var ACTIVE = 'ACTIVE';
    var INACTIVE = 'INACTIVE';
    var ARCHIVED = 'ARCHIVED';
    var NOCHANGE = 'NOCHANGE';
    var CREATED = 'CREATED';
    var EDITED = 'EDITED';
    var DELETED = 'DELETED';
    /***/
  },

  /***/
  "./src/app/shared/model/content/curriculum.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/model/content/curriculum.model.ts ***!
    \**********************************************************/

  /*! exports provided: Curriculum */

  /***/
  function srcAppSharedModelContentCurriculumModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Curriculum", function () {
      return Curriculum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Curriculum = function Curriculum(id, acronym, country, description, endDate, gradesApplicableFrom, gradesApplicableTo, isExtraCurriculum, name, organisationId, curriculumTypeId, startDate, state, status, checked) {
      _classCallCheck(this, Curriculum);

      this.id = id;
      this.acronym = acronym;
      this.country = country;
      this.description = description;
      this.endDate = endDate;
      this.gradesApplicableFrom = gradesApplicableFrom;
      this.gradesApplicableTo = gradesApplicableTo;
      this.isExtraCurriculum = isExtraCurriculum;
      this.name = name;
      this.organisationId = organisationId;
      this.curriculumTypeId = curriculumTypeId;
      this.startDate = startDate;
      this.state = state;
      this.status = status;
      this.checked = checked;
      this.checked = false;
    };
    /***/

  }
}]);
//# sourceMappingURL=curriculum-curriculum-module-es5.js.map