(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curriculum-curriculum-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-affiliations.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-affiliations.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i>Back\r\n    </div>\r\n</div>\r\n<div class=\"w-100 p-3 alert-warning\">\r\n    Coming soon...!\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-create.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\">\r\n        </i>Back\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"curriculumForm\">\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Curriculum name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter curriculum name (minlength: 3 and maxlength: 75)\"\r\n            formControlName=\"curriculumName\" minlength=\"3\" maxlength=\"75\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Acronym</label>\r\n        <input type=\"text\" class=\"form-control\"\r\n            placeholder=\"Enter acronym for curriculum(minlength: 2 and maxlength: 10)\"\r\n            formControlName=\"curriculumAcronym\" minlength=\"2\" maxlength=\"10\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets (CAPITAL LETTERS ONLY) </span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span></label>\r\n        <textarea class=\"form-control\" placeholder=\"Enter description (minlength: 3 and maxlength: 250)\"\r\n            formControlName=\"curriculumDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets, Numbers and Special characters</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"country\" class=\"col-form-label\">Country</label>\r\n        <ng-select [items]=\"countryList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n            placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n            formControlName=\"country\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"state\" class=\"col-form-label\">State</label>\r\n        <ng-select [items]=\"stateList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select state\"\r\n            [(ngModel)]=\"selectedState\" formControlName=\"state\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"startDate\" class=\"col-form-label\">Start date (dd/mm)</label>\r\n            <input id=\"startDate\" name=\"inputMask\" formControlName=\"startDate\" class=\"form-control input-mask\"\r\n                type=\"text\" placeholder=\"_ _ /_ _ \" minlength=\"5\" maxlength=\"5\" (click)=\"applyInputMaskForDate()\"\r\n                inputRestriction=\"onlyIntegers\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers</span>\r\n        </div>\r\n        <div class=\"form-group  col-xxl-6\">\r\n            <label for=\"endDate\" name=\"inputMask\" class=\"col-form-label\">End date (dd/mm)</label>\r\n            <input id=\"endDate\" formControlName=\"endDate\" class=\"form-control input-mask\" type=\"text\"\r\n                placeholder=\"_ _ /_ _ \" (click)=\"applyInputMaskForDate()\" minlength=\"5\" maxlength=\"5\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"fromGrade\" class=\"col-form-label\">From grade</label>\r\n            <ng-select [items]=\"gradesFromList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedFromGrade\" (change)=\"onFromGradeChange()\"\r\n                formControlName=\"fromGrade\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"to\" class=\"col-form-label\">To grade</label>\r\n            <ng-select [items]=\"gradesToList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedToGrade\" formControlName=\"toGrade\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 d-flex justify-content-end\">\r\n        <button class=\"btn btn-danger mr-2 mb-2\" (click)=\"resetCurriculum()\">\r\n            <i class=\"fa fa-times mr-2\"></i>Reset\r\n        </button>\r\n        <button class=\"btn btn-info mb-2 mr-2\" (click)=\"saveAsDraft()\" [disabled]=\"validateForm\">\r\n            <i class=\"fa fa-save mr-2\"></i>Save as draft\r\n        </button>\r\n        <button class=\"btn btn-success mb-2\" (click)=\"saveAsPublish()\" [disabled]=\"validateForm\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>Save and publish\r\n        </button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-details.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\">\r\n        </i>Back\r\n    </div>\r\n    <a class=\"btn btn-success\" [routerLink]=\"['/curriculum', curriculumId, 'edit' ]\">\r\n        <i class=\"fa fa-edit mr-2\">\r\n        </i>Edit curriculum\r\n    </a>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-12\">\r\n        <div class=\"mb-2 col-xxl-6\">\r\n            <label> Curriculum name </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.name}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> Acronym </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.acronym}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> Description </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.description}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> Country </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{country}}>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n            <label> State </label>\r\n            <input type=\"text\" class=\"form-control\" disabled value={{curriculum.state}}>\r\n        </div>\r\n        <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> Start date (dd/mm) </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{startDate}}>\r\n            </div>\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> End date (dd/mm) </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{endDate}}>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> From grade </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.gradesApplicableFrom}}>\r\n            </div>\r\n            <div class=\"form-group mb-2 col-xxl-6\">\r\n                <label> To grade </label>\r\n                <input type=\"text\" class=\"form-control\" disabled value={{curriculum.gradesApplicableTo}}>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-manage.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-manage.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-end my-3\">\r\n    <a routerLink=\"/curriculum/create\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create new curriculum\r\n        </div>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"table-responsive\" *ngIf=\"curriculums\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"name\">Curriculum <span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"startDate\">Start Month (dd/mm)<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"endDate\">End Month (dd/mm)<span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort  ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Update status</th>\r\n                <th class=\"fixed-column\">Affiliations</th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let curriculum of curriculums ;trackBy: trackId\">\r\n                <td data-column=\"Curriculum\">{{curriculum.acronym}}</td>\r\n                <td data-column=\"Start Month\">\r\n                    {{startDate}}\r\n                </td>\r\n                <td data-column=\"End Month\">\r\n                    {{endDate}}\r\n                </td>\r\n                <td data-column=\"Status\">{{curriculum.status}}</td>\r\n                <td class=\"fixed-column\" data-column=\"Update status\">\r\n                    <a class=\"btn btn-outline-success mr-1\"\r\n                        *ngIf=\"curriculum.status === 'DRAFT' || curriculum.status === 'INACTIVE'\"\r\n                        [routerLink]=\"['/curriculum', curriculum.id, 'publish' ]\">\r\n                        Publish\r\n                    </a>\r\n                    <a class=\"btn btn-outline-danger mr-1\" *ngIf=\"curriculum.status === 'ACTIVE'\"\r\n                        [routerLink]=\"['/curriculum', curriculum.id, 'unpublish' ]\">\r\n                        Unpublish\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Affiliations\">\r\n                    <a class=\"btn btn-outline-info mr-1 mb-1\"\r\n                        [routerLink]=\"['/curriculum', curriculum.id, 'affiliations' ]\">\r\n                        View\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div>\r\n                        <a class=\"btn btn-outline-info btn-icon-size mr-1 mb-1\"\r\n                            [routerLink]=\"['/curriculum', curriculum.id, 'view' ]\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-success btn-icon-size mr-1 mb-1\"\r\n                            [routerLink]=\"['/curriculum', curriculum.id, 'edit' ]\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n\r\n                        <a class=\"btn btn-outline-danger mb-1 btn-icon-size\"\r\n                            *ngIf=\"curriculum.status === 'DRAFT' || curriculum.status === 'INACTIVE'\"\r\n                            [routerLink]=\"['/curriculum', curriculum.id, 'delete' ]\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-update.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-update.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\">\r\n        </i>Back\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"curriculumForm\">\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Curriculum name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter curriculum name (minlength: 3 and maxlength: 75)\"\r\n            formControlName=\"curriculumName\" minlength=\"3\" maxlength=\"75\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Acronym</label>\r\n        <input type=\"text\" class=\"form-control\"\r\n            placeholder=\"Enter acronym for curriculum (minlength: 2 and maxlength: 10)\"\r\n            formControlName=\"curriculumAcronym\" minlength=\"2\" maxlength=\"10\" inputRestriction=\"alphabetsWithSpace\">\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets (CAPITAL LETTERS ONLY)</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span></label>\r\n        <textarea class=\"form-control\" placeholder=\"Enter description (minlength: 3 and maxlength: 250)\"\r\n            formControlName=\"curriculumDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\r\n        <span class=\"font-15 text-muted\">Allowed characters - Alphabets, Numbers and Special characters</span>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"country\" class=\"col-form-label\">Country</label>\r\n        <ng-select [items]=\"countryList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n            placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"onCountryChange()\"\r\n            formControlName=\"country\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"form-group mb-2 col-xxl-6\">\r\n        <label for=\"state\" class=\"col-form-label\">State</label>\r\n        <ng-select [items]=\"stateList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select state\"\r\n            [(ngModel)]=\"selectedState\" formControlName=\"state\">\r\n        </ng-select>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"startDate\" class=\"col-form-label\">Start date (dd/mm)</label>\r\n            <input id=\"startDate\" name=\"inputMask\" formControlName=\"startDate\" class=\"form-control input-mask\"\r\n                type=\"text\" placeholder=\"d d /m m \" minlength=\"5\" maxlength=\"5\" (click)=\"applyInputMaskForDate()\"\r\n                inputRestriction=\"onlyIntegers\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd/mm</span>\r\n        </div>\r\n        <div class=\"form-group  col-xxl-6\">\r\n            <label for=\"endDate\" name=\"inputMask\" class=\"col-form-label\">End date (dd/mm)</label>\r\n            <input id=\"endDate\" formControlName=\"endDate\" class=\"form-control input-mask\" type=\"text\"\r\n                placeholder=\"d d /m m \" (click)=\"applyInputMaskForDate()\" minlength=\"5\" maxlength=\"5\">\r\n            <span class=\"font-15 text-muted\">Allowed characters - Numbers, Data format - dd/mm</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mr-0 ml-0 w-100 mb-2\">\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"fromGrade\" class=\"col-form-label\">From grade</label>\r\n            <ng-select [items]=\"gradesFromList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedFromGrade\" (change)=\"onFromGradeChange()\"\r\n                formControlName=\"fromGrade\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-xxl-6\">\r\n            <label for=\"to\" class=\"col-form-label\">To grade</label>\r\n            <ng-select [items]=\"gradesToList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedToGrade\" formControlName=\"toGrade\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 d-flex justify-content-end\">\r\n        <button class=\"btn btn-danger mr-2 mb-2\" (click)=\"cancelCurriculum()\">\r\n            <i class=\"fa fa-times mr-2\"></i>Reset\r\n        </button>\r\n        <button class=\"btn btn-info mb-2 mr-2\" (click)=\"saveAsDraft()\" [disabled]=\"validateForm\">\r\n            <i class=\"fa fa-save mr-2\"></i>Save as draft\r\n        </button>\r\n        <button class=\"btn btn-success mb-2\" (click)=\"saveAndPublish()\" [disabled]=\"validateForm\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>Save and publish\r\n        </button>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./src/app/curriculum/curriculum-affiliations.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/curriculum/curriculum-affiliations.component.ts ***!
  \*****************************************************************/
/*! exports provided: CurriculumAffiliationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumAffiliationsComponent", function() { return CurriculumAffiliationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");





let CurriculumAffiliationsComponent = class CurriculumAffiliationsComponent {
    constructor(router, pluginService) {
        this.router = router;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
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
                localObj.previousUrl();
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
    previousUrl() {
        this.router.navigateByUrl('/curriculum');
    }
};
CurriculumAffiliationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] }
];
CurriculumAffiliationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-affiliations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-affiliations.component.html")).default,
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_1__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
], CurriculumAffiliationsComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-create.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumCreateComponent", function() { return CurriculumCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");









let CurriculumCreateComponent = class CurriculumCreateComponent {
    constructor(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService, changeDetectRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.curriculum = {};
        this.gradesFromList = [];
        this.gradesToList = [];
        this.countryList = [];
        this.stateList = [];
        this.validateForm = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.createCurriculumFormGroup();
        this.getCountryList();
        this.getGradeList();
    }
    //Get grade list from local JSON data
    getGradeList() {
        this.commonService.getGeneralDataList().subscribe((data) => {
            this.grades = data.grade;
            this.gradesFromList = data.grade;
        });
    }
    //Get country list from local JSON data
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countryList = countryData;
        });
    }
    //Initializing curriculum formfields
    createCurriculumFormGroup() {
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
    //Creating formcontrol for a curriculum formfields
    //Used for validations
    get formControl() { return this.curriculumForm.controls; }
    ngAfterViewInit() {
        this.removeSlashInDate();
    }
    //Applying input mask format for start date and end date 
    applyInputMaskForDate() {
        $(document).ready(function () {
            $('.input-mask').mask('00/00');
        });
    }
    //Country dropdown on selection
    onCountryChange() {
        let countryId;
        if (this.selectedCountry) {
            countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
        }
    }
    //From grade dropdown on selection
    onFromGradeChange() {
        let grade;
        if (this.selectedFromGrade) {
            grade = this.selectedFromGrade.name;
            this.generateGradesToList(grade);
        }
    }
    //Get state list based on country selection
    getStateListByCountryId(countryId) {
        let stateList = [];
        this.commonService.getStateList().subscribe((stateData) => {
            stateList = stateData;
            this.stateList = stateList.filter(item => item.country_id === countryId.toString());
        });
    }
    //Generate To grade list based on From grade selection
    generateGradesToList(selectedGrade) {
        this.gradesToList = [];
        for (let i = selectedGrade; i < this.grades.length; i++) {
            this.gradesToList.push(this.grades[i]);
        }
        return this.gradesToList;
    }
    //Trim value for validation
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    ngAfterViewChecked() {
        this.validateCurriculumForm();
        this.changeDetectRef.detectChanges();
    }
    //Curriculum form validation
    validateCurriculumForm() {
        let curriculumName, acronym;
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
    //Save curriculum with status DRAFT 
    saveAsDraft() {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    }
    //Save curriculum with status ACTIVE 
    saveAsPublish() {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["ACTIVE"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    }
    //Removing slash in start date and end date 
    //While saving date, we need to send numbers without slash
    removeSlashInDate() {
        this.startDate = this.curriculumForm.get('startDate').value;
        this.startDate = this.startDate.replace("/", "");
        this.endDate = this.curriculumForm.get('endDate').value;
        this.endDate = this.endDate.replace("/", "");
    }
    //Save curriculum service
    saveCurriculum() {
        this.subscribeToSaveResponse(this.curriculumService.createCurriculum(this.createCurriculumForm()));
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveCurriculumSuccess(), (res) => this.onSaveCurriculumError());
    }
    onSaveCurriculumSuccess() {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Curriculum created successfully", "success");
        }
        else {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
        }
        this.curriculumForm.reset();
        this.router.navigateByUrl('/curriculum');
    }
    onSaveCurriculumError() {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Error while curriculum save", "error");
        }
        else {
            this.pluginService.alertMessage("Error while curriculum publish", "error");
        }
    }
    //Creating curriculum object
    createCurriculumForm() {
        this.removeSlashInDate();
        this.curriculum.name = this.trimValue(this.curriculumForm.get('curriculumName').value);
        this.curriculum.acronym = this.trimValue(this.curriculumForm.get('curriculumAcronym').value);
        this.curriculum.description = this.trimValue(this.curriculumForm.get('curriculumDescription').value);
        this.curriculum.startDate = this.startDate;
        this.curriculum.endDate = this.endDate;
        this.curriculum.status = this.curriculumStatus;
        this.curriculum.isExtraCurriculum = false;
        this.curriculum.country = this.selectedCountry.sortname;
        this.curriculum.state = this.selectedState.name;
        this.curriculum.gradesApplicableFrom = this.selectedFromGrade.name;
        this.curriculum.gradesApplicableTo = this.selectedToGrade.name;
        this.curriculum.organisationId = null;
        return this.curriculum;
    }
    //Reset curriculum formfields
    resetCurriculum() {
        this.curriculumForm.reset();
        this.selectedCountry = null;
        this.selectedState = null;
        this.selectedFromGrade = null;
        this.selectedToGrade = null;
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
                localObj.router.navigateByUrl('/curriculum');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
CurriculumCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CurriculumCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-create.component.html")).default,
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CurriculumCreateComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-delete.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumDeleteComponent", function() { return CurriculumDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");






let CurriculumDeleteComponent = class CurriculumDeleteComponent {
    constructor(router, activatedRoute, eventManager, curriculumService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ curriculum }) => {
            this.deleteCurriculum(curriculum);
        });
    }
    subscribeToDeleteCurriculumResponse(resp) {
        resp.subscribe((res) => this.onDeleteCurriculumSuccess(res), (res) => this.onDeleteCurriculumError(res));
    }
    //Delete curriculum
    deleteCurriculum(curriculum) {
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
            }
            else {
                localthisObject.previousUrl();
            }
        });
    }
    confirmDelete(id) {
        this.subscribeToDeleteCurriculumResponse(this.curriculumService.delete(id));
    }
    previousUrl() {
        this.router.navigateByUrl('/curriculum');
    }
    onDeleteCurriculumSuccess(resp) {
        this.pluginService.alertMessage("Curriculum deleted successfully", "success");
        this.previousUrl();
    }
    onDeleteCurriculumError(err) {
        this.pluginService.alertMessage("Could not delete curriculum, please contact admin", "error");
    }
};
CurriculumDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] }
];
CurriculumDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
], CurriculumDeleteComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/curriculum/curriculum-details.component.ts ***!
  \************************************************************/
/*! exports provided: CurriculumDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumDetailsComponent", function() { return CurriculumDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");








let CurriculumDetailsComponent = class CurriculumDetailsComponent {
    constructor(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.curriculum = {};
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.activatedRoute.data.subscribe(({ curriculum }) => {
            this.curriculum = curriculum;
            this.getCountryList();
        });
    }
    //Get country list from local JSON data
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countryList = countryData;
            this.mapCurriculumValues();
        });
    }
    mapCurriculumValues() {
        this.curriculumId = this.curriculum.id;
        this.country = this.countryList.find(item => item.sortname === this.curriculum.country).name;
        this.startDate = this.addSlashBetweenDateMonth(this.curriculum.startDate);
        this.endDate = this.addSlashBetweenDateMonth(this.curriculum.endDate);
    }
    //Adding slash in start date and end date 
    addSlashBetweenDateMonth(dateValue) {
        let date, month, dateWithSlash;
        date = dateValue.substring(0, 2);
        month = dateValue.substring(2, 4);
        dateWithSlash = date + "/" + month;
        return dateWithSlash;
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
                localObj.router.navigateByUrl('/curriculum');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
CurriculumDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
CurriculumDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-details.component.html")).default,
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], CurriculumDetailsComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-manage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-manage.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumManageComponent", function() { return CurriculumManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");








let CurriculumManageComponent = class CurriculumManageComponent {
    constructor(_router, curriculumService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.curriculums = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_6__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    loadStandardCurriculums() {
        this.curriculumService
            .getStandardCurriculums({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe((res) => this.paginateCurriculums(res.body, res.headers), (res) => this.onError(res.message));
    }
    paginateCurriculums(data, headers) {
        //this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.curriculums.push(data[i]);
                this.startDate = this.addSlashBetweenDateMonth(data[i].startDate);
                this.endDate = this.addSlashBetweenDateMonth(data[i].endDate);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    reset() {
        this.page = 0;
        this.curriculums = [];
        this.loadStandardCurriculums();
    }
    loadPage(page) {
        this.page = page;
        this.loadStandardCurriculums();
    }
    ngOnInit() {
        this.loadStandardCurriculums();
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCurriculums();
    }
    addSlashBetweenDateMonth(dateValue) {
        let date, month, dateWithSlash;
        date = dateValue.substring(0, 2);
        month = dateValue.substring(2, 4);
        dateWithSlash = date + "/" + month;
        return dateWithSlash;
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
    trackId(index, item) {
        return item.id;
    }
    registerChangeInCurriculums() {
        this.eventSubscriber = this.eventManager.subscribe('curriculumListModification', response => this.reset());
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    convertToCurriculumList(data) {
        this.curriculums.push(data);
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    ngDestroy() {
        this.eventSubscriber.unsubscribe();
    }
};
CurriculumManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"] }
];
CurriculumManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-manage.component.html")).default,
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]])
], CurriculumManageComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-update-publish.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/curriculum/curriculum-update-publish.component.ts ***!
  \*******************************************************************/
/*! exports provided: CurriculumPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumPublishComponent", function() { return CurriculumPublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






let CurriculumPublishComponent = class CurriculumPublishComponent {
    constructor(router, activatedRoute, curriculumService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ curriculum }) => {
            this.publishCurriculum(curriculum);
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onSaveError(errRes));
    }
    publishCurriculum(curriculum) {
        curriculum.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"];
        this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(curriculum));
        this.pluginService.alertMessage("Curriculum published successfully", "success");
        this.router.navigateByUrl('/curriculum');
    }
    onSaveSuccess(resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"]) {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
        }
    }
    onSaveError(errRes) {
        this.pluginService.alertMessage("Could not publish curriculum, please contact admin", "error");
    }
};
CurriculumPublishComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] }
];
CurriculumPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
], CurriculumPublishComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-update-unpublish.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/curriculum/curriculum-update-unpublish.component.ts ***!
  \*********************************************************************/
/*! exports provided: CurriculumUnpublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumUnpublishComponent", function() { return CurriculumUnpublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






let CurriculumUnpublishComponent = class CurriculumUnpublishComponent {
    constructor(router, activatedRoute, curriculumService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ curriculum }) => {
            this.unpublishCurriculum(curriculum);
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onSaveError(errRes));
    }
    unpublishCurriculum(curriculum) {
        curriculum.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["INACTIVE"];
        this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(curriculum));
        this.pluginService.alertMessage("Curriculum published successfully", "success");
        this.router.navigateByUrl('/curriculum');
    }
    onSaveSuccess(resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["INACTIVE"]) {
            this.pluginService.alertMessage("Curriculum unpublished successfully", "success");
        }
    }
    onSaveError(errRes) {
        this.pluginService.alertMessage("Could not publish curriculum, please contact admin", "error");
    }
};
CurriculumUnpublishComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] }
];
CurriculumUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
], CurriculumUnpublishComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum-update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/curriculum/curriculum-update.component.ts ***!
  \***********************************************************/
/*! exports provided: CurriculumUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumUpdateComponent", function() { return CurriculumUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");









let CurriculumUpdateComponent = class CurriculumUpdateComponent {
    constructor(router, activatedRoute, curriculumService, eventManager, pluginService, formBuilder, commonService, changeDetectorRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.eventManager = eventManager;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.changeDetectorRef = changeDetectorRef;
        this.curriculum = {};
        this.gradesFromList = [];
        this.gradesToList = [];
        this.validateForm = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.createCurriculumFormGroup();
        this.activatedRoute.data.subscribe(({ curriculum }) => {
            this.curriculum = curriculum;
            this.getCountryList();
        });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((countryData) => {
            this.countryList = countryData;
            this.getStateList();
            this.getGeneralDataList();
        });
    }
    getGeneralDataList() {
        this.commonService.getGeneralDataList().subscribe((generalData) => {
            //this.curriculumTypeList = generalData.curriculumType;
            this.grades = generalData.grade;
            this.gradesFromList = this.grades;
        });
    }
    getStateList() {
        this.commonService.getStateList().subscribe((stateData) => {
            this.allStateList = stateData;
            this.updateCurriculumValues();
        });
    }
    createCurriculumFormGroup() {
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
    get formControl() { return this.curriculumForm.controls; }
    updateCurriculumValues() {
        var curriculumType, stateIndex, countryIndex, fromGradeIndex, toGradeIndex;
        this.stateList = [];
        countryIndex = this.countryList.findIndex(item => item.sortname === this.curriculum.country);
        this.selectedCountry = this.countryList[countryIndex];
        this.stateList = this.allStateList.filter(item => item.country_id === this.countryList[countryIndex].id.toString());
        stateIndex = this.stateList.findIndex(item => item.name === this.curriculum.state);
        this.selectedState = this.stateList[stateIndex];
        fromGradeIndex = this.gradesFromList.findIndex(item => item.name === this.curriculum.gradesApplicableFrom);
        this.selectedFromGrade = this.gradesFromList[fromGradeIndex];
        this.generateGradesToList(this.curriculum.gradesApplicableFrom);
        toGradeIndex = this.gradesToList.findIndex(item => item.name === this.curriculum.gradesApplicableTo);
        this.selectedToGrade = this.gradesToList[toGradeIndex];
        this.curriculumForm.patchValue({
            curriculumType: curriculumType,
            curriculumAcronym: this.curriculum.acronym,
            curriculumName: this.curriculum.name,
            organisation: this.curriculum.id,
            curriculumDescription: this.curriculum.description,
            startDate: this.addSlashBetweenDateMonth(this.curriculum.startDate),
            endDate: this.addSlashBetweenDateMonth(this.curriculum.endDate)
        });
    }
    addSlashBetweenDateMonth(dateValue) {
        let date, month, dateWithSlash;
        date = dateValue.substring(0, 2);
        month = dateValue.substring(2, 4);
        dateWithSlash = date + "/" + month;
        return dateWithSlash;
    }
    ngAfterViewInit() {
        this.applyInputMaskForDate();
        this.removeSlashInDate();
    }
    applyInputMaskForDate() {
        $(document).ready(function () {
            $('.input-mask').mask('00/00');
        });
    }
    onCountryChange() {
        let countryId;
        if (this.selectedCountry) {
            countryId = this.selectedCountry.id;
            this.getStateListByCountryId(countryId);
        }
    }
    onFromGradeChange() {
        let grade;
        if (this.selectedFromGrade) {
            grade = this.selectedFromGrade.name;
            this.generateGradesToList(grade);
        }
    }
    getStateListByCountryId(countryId) {
        let stateList = [];
        this.commonService.getStateList().subscribe((stateData) => {
            stateList = stateData;
            this.stateList = stateList.filter(item => item.country_id === countryId.toString());
        });
    }
    generateGradesToList(selectedGrade) {
        this.gradesToList = [];
        for (let i = selectedGrade; i < this.grades.length; i++) {
            this.gradesToList.push(this.grades[i]);
        }
        return this.gradesToList;
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
        this.validateCurriculumForm();
        this.changeDetectorRef.detectChanges();
    }
    validateCurriculumForm() {
        let curriculumName, acronym;
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
    saveAsDraft() {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    }
    saveAndPublish() {
        if (this.curriculumForm.valid) {
            this.curriculumStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["ACTIVE"];
            this.saveCurriculum();
        }
        if (this.curriculumForm.invalid) {
            return;
        }
    }
    removeSlashInDate() {
        this.startDate = this.curriculumForm.get('startDate').value;
        this.startDate = this.startDate.replace("/", "");
        this.endDate = this.curriculumForm.get('endDate').value;
        this.endDate = this.endDate.replace("/", "");
    }
    saveCurriculum() {
        this.subscribeToSaveResponse(this.curriculumService.updateCurriculum(this.createCurriculumForm()));
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(), (res) => this.onSaveError());
    }
    onSaveSuccess() {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Curriculum updated successfully", "success");
        }
        else {
            this.pluginService.alertMessage("Curriculum published successfully", "success");
        }
        this.router.navigateByUrl('/curriculum');
        this.curriculumForm.reset();
    }
    onSaveError() {
        if (this.curriculumStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_7__["DRAFT"]) {
            this.pluginService.alertMessage("Error while curriculum save", "error");
        }
        else {
            this.pluginService.alertMessage("Error while curriculum publish", "error");
        }
    }
    createCurriculumForm() {
        this.removeSlashInDate();
        this.curriculum.name = this.curriculumForm.value.curriculumName;
        this.curriculum.acronym = this.curriculumForm.value.curriculumAcronym;
        this.curriculum.description = this.curriculumForm.value.curriculumDescription;
        this.curriculum.startDate = this.startDate;
        this.curriculum.endDate = this.endDate;
        this.curriculum.country = this.selectedCountry.sortname;
        this.curriculum.state = this.selectedState.name;
        this.curriculum.gradesApplicableFrom = this.selectedFromGrade.name;
        this.curriculum.gradesApplicableTo = this.selectedToGrade.name;
        this.curriculum.status = this.curriculumStatus;
        return this.curriculum;
    }
    cancelCurriculum() {
        this.curriculumForm.reset();
        this.selectedCountry = null;
        this.selectedState = null;
        this.selectedFromGrade = null;
        this.selectedToGrade = null;
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
                localObj.router.navigateByUrl('/curriculum');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
CurriculumUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CurriculumUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum-update.component.html")).default,
        providers: [_curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CurriculumUpdateComponent);



/***/ }),

/***/ "./src/app/curriculum/curriculum.module.ts":
/*!*************************************************!*\
  !*** ./src/app/curriculum/curriculum.module.ts ***!
  \*************************************************/
/*! exports provided: CurriculumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumModule", function() { return CurriculumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./curriculum-manage.component */ "./src/app/curriculum/curriculum-manage.component.ts");
/* harmony import */ var _curriculum_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./curriculum.route */ "./src/app/curriculum/curriculum.route.ts");
/* harmony import */ var _curriculum_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./curriculum-create.component */ "./src/app/curriculum/curriculum-create.component.ts");
/* harmony import */ var _curriculum_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./curriculum-update.component */ "./src/app/curriculum/curriculum-update.component.ts");
/* harmony import */ var _curriculum_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./curriculum-details.component */ "./src/app/curriculum/curriculum-details.component.ts");
/* harmony import */ var _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./curriculum-update-publish.component */ "./src/app/curriculum/curriculum-update-publish.component.ts");
/* harmony import */ var _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./curriculum-update-unpublish.component */ "./src/app/curriculum/curriculum-update-unpublish.component.ts");
/* harmony import */ var _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./curriculum-delete.component */ "./src/app/curriculum/curriculum-delete.component.ts");
/* harmony import */ var _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curriculum-affiliations.component */ "./src/app/curriculum/curriculum-affiliations.component.ts");

















let CurriculumModule = class CurriculumModule {
};
CurriculumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_curriculum_route__WEBPACK_IMPORTED_MODULE_9__["curriculumRoute"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["NgJhipsterModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ],
        declarations: [
            _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumManageComponent"],
            _curriculum_create_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumCreateComponent"],
            _curriculum_update_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumUpdateComponent"],
            _curriculum_details_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumDetailsComponent"],
            _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_15__["CurriculumDeleteComponent"],
            _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumPublishComponent"],
            _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumUnpublishComponent"],
            _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumAffiliationsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], CurriculumModule);



/***/ }),

/***/ "./src/app/curriculum/curriculum.route.ts":
/*!************************************************!*\
  !*** ./src/app/curriculum/curriculum.route.ts ***!
  \************************************************/
/*! exports provided: CurriculumResolve, curriculumRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumResolve", function() { return CurriculumResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curriculumRoute", function() { return curriculumRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_model_content_curriculum_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/content/curriculum.model */ "./src/app/shared/model/content/curriculum.model.ts");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curriculum-manage.component */ "./src/app/curriculum/curriculum-manage.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _curriculum_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./curriculum-create.component */ "./src/app/curriculum/curriculum-create.component.ts");
/* harmony import */ var _curriculum_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./curriculum-update.component */ "./src/app/curriculum/curriculum-update.component.ts");
/* harmony import */ var _curriculum_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./curriculum-details.component */ "./src/app/curriculum/curriculum-details.component.ts");
/* harmony import */ var _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./curriculum-update-publish.component */ "./src/app/curriculum/curriculum-update-publish.component.ts");
/* harmony import */ var _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./curriculum-update-unpublish.component */ "./src/app/curriculum/curriculum-update-unpublish.component.ts");
/* harmony import */ var _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./curriculum-delete.component */ "./src/app/curriculum/curriculum-delete.component.ts");
/* harmony import */ var _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./curriculum-affiliations.component */ "./src/app/curriculum/curriculum-affiliations.component.ts");















let CurriculumResolve = class CurriculumResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((response) => response.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((curriculum) => curriculum.body));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _shared_model_content_curriculum_model__WEBPACK_IMPORTED_MODULE_2__["Curriculum"]());
    }
};
CurriculumResolve.ctorParameters = () => [
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_3__["CurriculumService"] }
];
CurriculumResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_curriculum_service__WEBPACK_IMPORTED_MODULE_3__["CurriculumService"]])
], CurriculumResolve);

const curriculumRoute = [
    {
        path: '',
        component: _curriculum_manage_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage curriculums'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _curriculum_create_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create new curriculum',
            action: "create"
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/edit',
        component: _curriculum_update_component__WEBPACK_IMPORTED_MODULE_9__["CurriculumUpdateComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
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
            authorities: ['ROLE_USER'],
            pageTitle: 'View curriculum',
            action: 'view'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/delete',
        component: _curriculum_delete_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumDeleteComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete curriculum',
            action: 'delete'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/publish',
        component: _curriculum_update_publish_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumPublishComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Publish curriculum',
            action: 'publish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    },
    {
        path: ':id/unpublish',
        component: _curriculum_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumUnpublishComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Unpublish curriculum',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }, {
        path: ':id/affiliations',
        component: _curriculum_affiliations_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumAffiliationsComponent"],
        resolve: {
            curriculum: CurriculumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage curriculum affiliations',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_7__["UserRouteAccessService"]]
    }
];


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






let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let CurriculumService = class CurriculumService {
    constructor(http) {
        this.http = http;
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula';
    }
    createCurriculum(curriculum) {
        return this.http.post(this.curriculumResourceUrl, curriculum, { observe: 'response' });
    }
    updateCurriculum(curriculum) {
        return this.http.put(this.curriculumResourceUrl, curriculum, { observe: 'response' });
    }
    find(id) {
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
    delete(id) {
        return this.http.delete(`${this.curriculumResourceUrl}/${id}`, { observe: 'response' });
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

/***/ "./src/app/shared/model/content/curriculum.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/model/content/curriculum.model.ts ***!
  \**********************************************************/
/*! exports provided: Curriculum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curriculum", function() { return Curriculum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Curriculum {
    constructor(id, acronym, country, description, endDate, gradesApplicableFrom, gradesApplicableTo, isExtraCurriculum, name, organisationId, curriculumTypeId, startDate, state, status, checked) {
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
    }
}


/***/ })

}]);
//# sourceMappingURL=curriculum-curriculum-module-es2015.js.map