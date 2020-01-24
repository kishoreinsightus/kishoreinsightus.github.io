(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subject-subject-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-create.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-create.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row-flex stepper\">\r\n  <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n    <a class=\"nav-link active\" id=\"createSubject-tab\" data-toggle=\"pill\" href=\"#createSubject\" role=\"tab\"\r\n      aria-controls=\"createSubject\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 1\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Create subject\r\n      </span>\r\n    </a>\r\n    <a class=\"nav-link disabled\" id=\"creareSyllabus-tab\" data-toggle=\"pill\" href=\"#creareSyllabus\" role=\"tab\"\r\n      aria-controls=\"creareSyllabus\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 2\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Create syllabus\r\n      </span>\r\n    </a>\r\n    <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\r\n      aria-controls=\"confirmation\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 3\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Summary\r\n      </span>\r\n    </a>\r\n  </div>\r\n  <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\r\n    <div class=\"tab-pane fade show active\" id=\"createSubject\" role=\"tabpanel\" aria-labelledby=\"createSubject-tab\">\r\n      <form [formGroup]=\"subjectForm\">\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n          <label for=\"curriculum\" class=\" col-form-label\">Curriculum</label>\r\n          <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n            placeholder=\"Select curriculum\" formControlName=\"curriculum\" [(ngModel)]=\"selectedCurriculum\"\r\n            (change)=\"onCurriculumChange()\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\" *ngIf=\"selectedCurriculum\">\r\n          <label for=\"grade\" class=\" col-form-label\">Grade</label>\r\n          <ng-select [items]=\"gradeList\" formControlName=\"grade\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n            placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n          <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter subject name (min length: 3, max length: 50)\"\r\n            inputRestriction=\"alphabetsWithSpace\" formControlName=\"subjectName\" maxlength=\"50\" minlength=\"3\">\r\n          <div class=\"text-muted font-15 my-2\">Allowed\r\n            characters - Alphabets</div>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6\">\r\n          <label for=\"description\" class=\" col-form-label\">Description\r\n            <span class=\"text-muted\">(Optional)</span></label>\r\n          <textarea class=\"form-control description-form\"\r\n            placeholder=\"Enter description  (min length: 3, max length: 250)\" formControlName=\"subjectDescription\"\r\n            maxlength=\"250\" minlength=\"3\"></textarea>\r\n          <div class=\"text-muted font-15 my-2\">\r\n            Allowed characters - Alphabets, Numbers and\r\n            Special characters\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-xxl-6 d-flex justify-content-start\">\r\n          <div class=\"checkbox mr-2\">\r\n            <input type=\"checkbox\" id=\"isLanguage\" formControlName=\"isLanguage\">\r\n            <label class=\"mt-2 p-3\" for=\"isLanguage\"></label>\r\n          </div>\r\n          <label class=\"mt-2\" for=\"isLanguage\">Is language ?<span class=\"text-muted\">(Optional)</span></label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xxl-12 d-flex justify-content-end\">\r\n            <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\" (click)=\"loadSubjectTree()\">\r\n              Next\r\n              <i class=\"fa fa-arrow-right ml-2\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"tab-pane fade\" id=\"creareSyllabus\" role=\"tabpanel\" aria-labelledby=\"creareSyllabus-tab\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xxl-4 p-2\">\r\n          <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"updatedJSONTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n              <i class=\"fa fa-clone mr-2\"></i>\r\n              <span *ngIf=\"enableExpandNode === false\">\r\n                Expand all\r\n              </span>\r\n              <span *ngIf=\"enableExpandNode === true\">\r\n                Collapse all\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div id=\"buildTree\"></div>\r\n        </div>\r\n        <div class=\"col-xxl-8\">\r\n          <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\r\n            <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'lesson'\" (click)=\"createNode()\">\r\n              <i class=\"fa fa-plus-circle mr-2\"></i>Add new\r\n              unit / lesson\r\n            </div>\r\n            <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\r\n              <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\r\n            </div>\r\n            <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\r\n              <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 p-4\">\r\n            <div *ngIf=\"nodeType === 'unit'\">\r\n              <p><b>Unit name :</b> {{nodeTitle}} </p>\r\n              <p><b>Unit description :</b> {{nodeDescription}}</p>\r\n            </div>\r\n            <div *ngIf=\"nodeType === 'lesson'\">\r\n              <p><b>Lesson name :</b> {{nodeTitle}}</p>\r\n              <p><b>Lesson objective :</b> {{nodeDescription}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"my-2 rounded p-3 border-danger\" *ngIf=\"enableInstruction\">\r\n        <p class=\"text-danger\"><b>NOTE</b></p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check text-danger mr-2\"></i> Select a subject node and do your actions.\r\n        </p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Add atleast one unit or one lesson for general subject\r\n          creation.\r\n        </p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't drag and drop on top of\r\n          root node\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xxl-12 d-flex justify-content-end\">\r\n          <div class=\"btn btn-danger prev-step\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i> Previous\r\n          </div>\r\n          <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\r\n            Next\r\n            <i class=\"fa fa-arrow-right ml-2\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col-xxl-6\">\r\n            <h5>Before changes</h5>\r\n            <div id=\"beforeChangeTree\"></div>\r\n          </div>\r\n          <div class=\"col-xxl-6\">\r\n            <h5>After changes</h5>\r\n            <div id=\"afterChangeTree\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xxl-12 d-flex justify-content-end\">\r\n          <span class=\"btn btn-danger mr-2 prev-step\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>\r\n            Previous\r\n          </span>\r\n          <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\r\n            <i class=\"fa fa-save mr-2\"></i>\r\n            Save as draft\r\n          </div>\r\n          <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>\r\n            Save and publish\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"subjectModal\">\r\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n    <div class=\"modal-content\" [formGroup]=\"syllabusForm\">\r\n      <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n        <h5 class=\"modal-title text-white\">\r\n          {{modalTitleName}} unit / lesson\r\n        </h5>\r\n        <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"col-form-label\">Type\r\n          </label>\r\n          <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n            bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\" (change)=\"onNodeTypeChange()\"\r\n            [searchable]=\"false\">\r\n          </ng-select>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Unit\r\n              name\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"unitName\"\r\n              placeholder=\"Enter unit name (minlength: 3 and maxlength: 75)\"\r\n              inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.unitName.errors }\" />\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special character (-)\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Unit\r\n              description\r\n            </label>\r\n            <textarea class=\"form-control description-form\"\r\n              placeholder=\"Enter unit description (minlength: 3 and maxlength: 250)\" minlength=\"3\" maxlength=\"250\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.unitDescription.errors }\"\r\n              formControlName=\"unitDescription\"></textarea>\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special characters\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Lesson\r\n              name\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"lessonName\"\r\n              placeholder=\"Enter lesson name (minlength: 3 and maxlength: 75)\"\r\n              inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.lessonName.errors }\" />\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special character (-)\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Lesson\r\n              objective\r\n            </label>\r\n            <textarea class=\"form-control description-form\"\r\n              placeholder=\"Enter lesson objective (minlength: 3 and maxlength: 250)\" minlength=\"3\" maxlength=\"250\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.lessonObjective.errors }\"\r\n              formControlName=\"lessonObjective\"></textarea>\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special characters\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\r\n        <div class=\"btn btn-danger\" (click)=\"cancelNode()\">\r\n          <i class=\"fa fa-times mr-2\"></i>\r\n          Reset\r\n        </div>\r\n        <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\r\n          <i class=\"fa fa-save mr-2\"></i>\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-details.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-details.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n    <a class=\"btn btn-success mr-2\" [routerLink]=\"['/subject',subjectId, 'edit' ]\">\r\n        <i class=\"fa fa-edit mr-2\"></i>Edit subject\r\n    </a>\r\n</div>\r\n\r\n<div class=\"row mb-3 p-3\">\r\n    <div class=\"col-xxl-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subject.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"active === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"active === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div id=\"treeView\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9\">\r\n        <div class=\"p-3\" *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'unit'\" class=\"p-3\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div class=\"p-3\" *ngIf=\"nodeType === 'lesson'\">\r\n            <p><b>Lesson name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Lesson objective</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-manage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-manage.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-flex justify-content-end my-3\">\r\n    <a routerLink=\"/subject/create\">\r\n        <div class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Create new subject\r\n        </div>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectList()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"table-responsive\" *ngIf=\"subjects\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"subject\">Subject Name <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"grade\">Grade <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th class=\"fixed-column\">Update status</th>\r\n                <th class=\"fixed-column\">Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let data of subjects ;trackBy: trackId\">\r\n                <td data-column=\"Subject name\">{{data.subject}}</td>\r\n                <td data-column=\"Grade\">{{data.grade}}</td>\r\n                <td data-column=\"Status\">{{data.status}}</td>\r\n                <td class=\"fixed-column\" data-column=\"Update status\">\r\n                    <a class=\"btn btn-outline-success mr-1 mb-1\"\r\n                        *ngIf=\"data.status === 'DRAFT' || data.status === 'INACTIVE'\"\r\n                        [routerLink]=\"['/subject', data.id, 'publish']\">\r\n                        Publish\r\n                    </a>\r\n                    <a class=\"btn btn-outline-danger mr-1 mb-1\" *ngIf=\"data.status === 'ACTIVE'\"\r\n                        [routerLink]=\"['/subject', data.id, 'unpublish']\">\r\n                        Unpublish\r\n                    </a>\r\n                </td>\r\n                <td class=\"fixed-column\" data-column=\"Actions\">\r\n                    <div>\r\n                        <a class=\"btn btn-outline-info mr-1 btn-icon-size mb-1\"\r\n                            [routerLink]=\"['/subject', data.id, 'view' ]\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-outline-success mr-1 btn-icon-size mb-1\"\r\n                            [routerLink]=\"['/subject', data.id, 'edit' ]\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                        </a>\r\n                        <div class=\"btn btn-outline-danger mr-1 btn-icon-size mb-1\"\r\n                            *ngIf=\"data.status === 'INACTIVE' || data.status === 'DRAFT'\"\r\n                            [routerLink]=\"['/subject', data.id, 'delete']\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-update.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-update.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-xxl-12 justify-content-between d-flex my-3\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row-flex stepper\">\r\n    <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n        <a class=\"nav-link active\" id=\"createSubject-tab\" data-toggle=\"pill\" href=\"#createSubject\" role=\"tab\"\r\n            aria-controls=\"createSubject\" aria-selected=\"false\">\r\n            <span class=\"index-round\">\r\n                Step 1\r\n            </span>\r\n            <span class=\"step-label\">\r\n                Create subject\r\n            </span>\r\n        </a>\r\n        <a class=\"nav-link disabled\" id=\"creareSyllabus-tab\" data-toggle=\"pill\" href=\"#creareSyllabus\" role=\"tab\"\r\n            aria-controls=\"creareSyllabus\" aria-selected=\"false\">\r\n            <span class=\"index-round\">\r\n                Step 2\r\n            </span>\r\n            <span class=\"step-label\">\r\n                Create syllabus\r\n            </span>\r\n        </a>\r\n        <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\r\n            aria-controls=\"confirmation\" aria-selected=\"false\">\r\n            <span class=\"index-round\">\r\n                Step 3\r\n            </span>\r\n            <span class=\"step-label\">\r\n                Summary\r\n            </span>\r\n        </a>\r\n    </div>\r\n    <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\r\n        <div class=\"tab-pane fade show active\" id=\"createSubject\" role=\"tabpanel\" aria-labelledby=\"createSubject-tab\">\r\n            <form [formGroup]=\"subjectForm\">\r\n                <div class=\"form-group mb-2 col-xxl-6\">\r\n                    <label for=\"curriculum\" class=\"col-form-label\">Curriculum name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"curriculum\" formControlName=\"curriculum\">\r\n                </div>\r\n                <div class=\"form-group mb-2 col-xxl-6\">\r\n                    <label for=\"grade\" class=\"col-form-label\">Grade</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"grade\" formControlName=\"grade\">\r\n                </div>\r\n                <div class=\"form-group mb-2 col-xxl-6\">\r\n                    <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\r\n                    <input type=\"text\" class=\"form-control\"\r\n                        placeholder=\"Enter subject name (min length: 3, max length: 50)\"\r\n                        inputRestriction=\"alphabetsWithSpace\" formControlName=\"subjectName\" maxlength=\"50\" minlength=\"3\"\r\n                        [ngClass]=\"{ 'is-invalid': validateSubjectForm && formControl.subjectName.errors }\">\r\n                    <div class=\"text-muted font-15 my-2\">Allowed\r\n                        characters - Alphabets</div>\r\n                </div>\r\n                <div class=\"form-group mb-2 col-xxl-6\">\r\n                    <label for=\"description\" class=\" col-form-label\">Description\r\n                        <span class=\"text-muted\">(Optional)</span></label>\r\n                    <textarea class=\"form-control description-form\"\r\n                        placeholder=\"Enter description  (min length: 3, max length: 250)\"\r\n                        formControlName=\"subjectDescription\"\r\n                        [ngClass]=\"{ 'is-invalid': validateSubjectForm && formControl.subjectDescription.errors }\"\r\n                        maxlength=\"250\" minlength=\"3\"></textarea>\r\n                    <div class=\"text-muted font-15 my-2\">\r\n                        Allowed characters - Alphabets, Numbers and\r\n                        Special characters\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group mb-2 col-xxl-6 d-flex justify-content-start\">\r\n                    <div class=\"checkbox mr-2\">\r\n                        <input type=\"checkbox\" id=\"isLanguage\" formControlName=\"isLanguage\">\r\n                        <label class=\"mt-2 p-3\" for=\"isLanguage\"></label>\r\n                    </div>\r\n                    <label class=\"mt-2\" for=\"isLanguage\">Is language ? <span\r\n                            class=\"text-muted\">(Optional)</span></label>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-12 d-flex justify-content-end\">\r\n                        <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\"\r\n                            (click)=\"loadUpdatedSubjectTree()\">\r\n                            Next\r\n                            <i class=\"fa fa-arrow-right ml-2\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"tab-pane fade\" id=\"creareSyllabus\" role=\"tabpanel\" aria-labelledby=\"creareSyllabus-tab\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xxl-4 p-2\">\r\n                    <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subject.length > 1\">\r\n                        <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                            <i class=\"fa fa-clone mr-2\"></i>\r\n                            <span *ngIf=\"enableExpandNode === false\">\r\n                                Expand all\r\n                            </span>\r\n                            <span *ngIf=\"enableExpandNode === true\">\r\n                                Collapse all\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"buildTree\"></div>\r\n                </div>\r\n                <div class=\"col-xxl-8\">\r\n                    <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\r\n                        <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'lesson'\" (click)=\"createNode()\">\r\n                            <i class=\"fa fa-plus-circle mr-2\"></i>Add new\r\n                            unit / lesson\r\n                        </div>\r\n                        <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\r\n                            <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\r\n                        </div>\r\n                        <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\r\n                            <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"w-100 p-4\">\r\n                        <div *ngIf=\"nodeType === 'unit'\">\r\n                            <p><b>Unit name :</b> {{nodeTitle}} </p>\r\n                            <p><b>Unit description :</b> {{nodeDescription}}</p>\r\n                        </div>\r\n                        <div *ngIf=\"nodeType === 'lesson'\">\r\n                            <p><b>Lesson name :</b> {{nodeTitle}}</p>\r\n                            <p><b>Lesson objective :</b> {{nodeDescription}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"my-2 p-3 border-danger rounded\">\r\n                <p class=\"text-danger\"><b>NOTE</b></p>\r\n                <p class=\"text-primary\">\r\n                    <i class=\"fa fa-check mr-2 text-danger\"></i> Select a node and do your actions.\r\n                </p>\r\n                <p class=\"text-primary\">\r\n                    <i class=\"fa fa-check mr-2 text-danger\"></i> Without any changes, you can't update subject.\r\n                </p>\r\n                <p class=\"text-primary\">\r\n                    <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't do drag and\r\n                    drop on top of\r\n                    root node\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xxl-12 d-flex justify-content-end\">\r\n                    <div class=\"btn btn-danger prev-step\">\r\n                        <i class=\"fa fa-arrow-left mr-2\"></i> Previous\r\n                    </div>\r\n                    <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\r\n                        Next\r\n                        <i class=\"fa fa-arrow-right ml-2\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\r\n\r\n            <div class=\"card-body\">\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-6\">\r\n                        <h5>Before changes</h5>\r\n                        <div id=\"beforeChangeTree\"></div>\r\n                    </div>\r\n                    <div class=\"col-xxl-6\">\r\n                        <h5>After changes</h5>\r\n                        <div id=\"afterChangeTree\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xxl-12 d-flex justify-content-end\">\r\n                    <span class=\"btn btn-danger mr-2 prev-step\">\r\n                        <i class=\"fa fa-arrow-left mr-2\"></i>\r\n                        Previous\r\n                    </span>\r\n                    <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save as draft\r\n                    </div>\r\n                    <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\r\n                        <i class=\"fe fe-file-plus mr-2\"></i>\r\n                        Save and publish\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"subjectEditModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\" [formGroup]=\"syllabusForm\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} unit / lesson\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Type\r\n                    </label>\r\n                    <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\"\r\n                        (change)=\"onNodeTypeChange()\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div *ngIf=\"nodeType === 'unit'\">\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Unit\r\n                            name\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"unitName\"\r\n                            placeholder=\"Enter unit name (minlength: 3 and maxlength: 75)\"\r\n                            inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and Special character (-)\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Unit\r\n                            description\r\n                        </label>\r\n                        <textarea class=\"form-control description-form\"\r\n                            placeholder=\"Enter unit description (minlength: 3 and maxlength: 250)\" minlength=\"3\"\r\n                            maxlength=\"250\" formControlName=\"unitDescription\"></textarea>\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"nodeType === 'lesson'\">\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Lesson\r\n                            name\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lessonName\"\r\n                            placeholder=\"Enter lesson name (minlength: 3 and maxlength: 75)\"\r\n                            inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and Special character (-)\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Lesson\r\n                            objective\r\n                        </label>\r\n                        <textarea class=\"form-control description-form\"\r\n                            placeholder=\"Enter lesson objective (minlength: 3 and maxlength: 250)\" minlength=\"3\"\r\n                            maxlength=\"250\" formControlName=\"lessonObjective\"></textarea>\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\r\n                <div class=\"btn btn-danger\" (click)=\"cancelNode()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Reset\r\n                </div>\r\n                <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\r\n                    <i class=\"fa fa-save mr-2\"></i>\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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

/***/ "./src/app/shared/model/content/subject.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/model/content/subject.model.ts ***!
  \*******************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Subject {
    constructor(data, icon, id, parent, text, type, state, a_attr, li_attr, status, isExtraCurriculum, generalTopicId) {
        this.data = data;
        this.icon = icon;
        this.id = id;
        this.parent = parent;
        this.text = text;
        this.type = type;
        this.state = state;
        this.a_attr = a_attr;
        this.li_attr = li_attr;
        this.status = status;
        this.isExtraCurriculum = isExtraCurriculum;
        this.generalTopicId = generalTopicId;
    }
}


/***/ }),

/***/ "./src/app/subject/subject-create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-create.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectCreateComponent", function() { return SubjectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");









let SubjectCreateComponent = class SubjectCreateComponent {
    constructor(router, formBuilder, pluginService, curriculumService, subjectService, activatedRoute, commonService, changeDetectRef) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.gradeList = [];
        this.curriculumList = [];
        this.syllabusTree = [];
        this.updatedJSONTree = [];
        this.nodeTypes = [];
        this.validateSubjectForm = true;
        this.validateNodeForm = true;
        this.validateNode = true;
        this.enableExpandNode = false;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.createSubjectGroup();
        this.pluginService.stepper();
        this.loadCurriculumList();
        this.getNodeTypeList();
    }
    getNodeTypeList() {
        this.commonService.getGeneralDataList().subscribe((nodeTypeData) => {
            this.nodeTypes = nodeTypeData.subject;
        });
    }
    createSubjectGroup() {
        this.subjectForm = this.formBuilder.group({
            curriculum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            subjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            subjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            isLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.syllabusForm = this.formBuilder.group({
            unitName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            unitDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            lessonName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lessonObjective: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
    }
    get formControl() { return this.subjectForm.controls; }
    get modalFormControl() { return this.syllabusForm.controls; }
    onNodeTypeChange() {
        const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];
        if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;
            if (this.nodeType === 'unit') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
            else if (this.nodeType === 'lesson') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
        }
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
            this.selectedGrade = null;
        }
    }
    loadSubjectTree() {
        let language;
        if (this.selectedCurriculum && this.selectedGrade) {
            language = this.subjectForm.value.isLanguage;
            this.syllabusTree = [
                {
                    "icon": "fa fa-book",
                    "parent": "#",
                    "text": this.subjectName,
                    "type": "root",
                    "data": {
                        "name": this.subjectName,
                        "description": this.subjectDescription,
                        "curriculumId": this.selectedCurriculum.id,
                        "grade": this.selectedGrade.name,
                        "isLanguage": language,
                        "curriculumSubjectId": 0,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                        "fullName": "",
                        "objective": "",
                        "orderNumber": 0,
                        "status": null
                    },
                }
            ];
            this.pluginService.jsTree("#buildTree", this.syllabusTree, true);
            this.pluginService.jsTree("#beforeChangeTree", this.syllabusTree, false);
            this.enableInstruction = true;
        }
    }
    cancelForm() {
        this.subjectForm.reset();
    }
    loadCurriculumList() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res.message));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    ngAfterViewInit() {
        this.nodeSelectedEvent();
        this.generateJSONTreeOnDragAndDrop();
    }
    generateGradeList(min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    }
    //Reset all form values
    resetFormValues() {
        this.syllabusForm.reset();
        this.selectedNodeType = null;
    }
    //Tree selection and change method call
    nodeSelectedEvent() {
        let i, j, conceptThis = this;
        $('#buildTree').on('changed.jstree', function (e, data) {
            for (i = 0, j = data.selected.length; i < j; i++) {
                conceptThis.nodeType = data.node.type;
                if (conceptThis.nodeType === "root") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = false;
                }
                else if (conceptThis.nodeType === "unit") {
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.enableNodeOperation = true;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.description;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else if (conceptThis.nodeType === "lesson") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.objective;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else {
                    conceptThis.enableNodeOperation = false;
                    conceptThis.enableEditNodeOperation = false;
                }
            }
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
    validateSubjectFormValues() {
        this.subjectName = this.trimValue(this.subjectForm.value.subjectName);
        this.subjectDescription = this.trimValue(this.subjectForm.value.subjectDescription);
        if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
        }
        else {
            this.validateSubjectForm = false;
        }
        if (this.subjectForm.invalid) {
            this.validateSubjectForm = true;
        }
        if (this.subjectForm.valid) {
            this.validateSubjectForm = false;
        }
    }
    validateUnitAndLessonForm() {
        let unitName, lessonName;
        unitName = this.syllabusForm.value.unitName;
        lessonName = this.syllabusForm.value.lessonName;
        if (this.nodeType === 'unit') {
            if (unitName === null || unitName === "") {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
        else if (this.nodeType === 'lesson') {
            if (lessonName === null || lessonName === "") {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
    }
    ngAfterViewChecked() {
        //Subject Form Validation
        this.validateSubjectFormValues();
        //Unit and lesson form validation
        this.validateUnitAndLessonForm();
        this.changeDetectRef.detectChanges();
    }
    //Unit and lesson details form setvalues method
    syllabusFormSetValues(Objectthis) {
        let nodeTypeIndex;
        nodeTypeIndex = this.nodeTypes.findIndex(item => item.name === Objectthis.nodeType);
        this.selectedNodeType = this.nodeTypes[nodeTypeIndex];
        if (Objectthis.nodeType === "unit") {
            this.syllabusForm.setValue({
                unitName: Objectthis.nodeTitle,
                unitDescription: Objectthis.nodeDescription,
                lessonName: "",
                lessonObjective: ""
            });
        }
        else {
            this.syllabusForm.setValue({
                unitName: "",
                unitDescription: "",
                lessonName: Objectthis.nodeTitle,
                lessonObjective: Objectthis.nodeDescription,
            });
        }
    }
    openUnitAndLessonModal() {
        this.pluginService.showModalWindow("#subjectModal");
    }
    closeUnitAndLessonModal() {
        this.pluginService.hideModalWindow("#subjectModal");
    }
    closeWithOutSavingNode() {
        var localthisObject = this;
        swal({
            title: "Are you sure to close without saving ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                localthisObject.closeUnitAndLessonModal();
                localthisObject.disableNodeOperations();
            }
        });
    }
    disableNodeOperations() {
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.resetFormValues();
        let treeCallback = $('#buildTree').jstree(true);
        treeCallback.deselect_all();
    }
    //Create node method
    createNode() {
        this.nodeOperationType = "create";
        this.modalTitleName = "Add new";
        this.openUnitAndLessonModal();
        this.nodeType = "";
        this.resetFormValues();
        this.disableDropdown = false;
        this.enableModalOperation = false;
        this.selectedNodeType = null;
    }
    //Edit node method
    editNode() {
        this.nodeOperationType = "edit";
        this.modalTitleName = "Edit";
        this.disableDropdown = true;
        this.syllabusForm.patchValue({
            unitName: this.nodeTitle,
            unitDescription: this.nodeDescription,
            lessonName: this.nodeTitle,
            lessonObjective: this.nodeDescription
        });
        this.openUnitAndLessonModal();
        this.enableModalOperation = true;
    }
    //Save node method
    saveNode() {
        this.validateNodeForm = false;
        var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, nodeId, data = {};
        position = 'last';
        parent = $('#buildTree').jstree('get_selected')[0];
        treeCallback = $('#buildTree').jstree(true);
        jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
        nodeId = treeCallback.get_selected()[0];
        nodeIndex = jsonArray.findIndex(item => item.id === nodeId);
        if (this.nodeOperationType === "create") {
            if (this.nodeType === "unit") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                newNodeArray = {
                    "icon": "fe fe-server",
                    "text": this.nodeTitle,
                    "type": "unit",
                    "data": {
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                        "objective": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": ""
                    }
                };
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            }
            else if (this.nodeType === "lesson") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                newNodeArray = {
                    "icon": "fa fa-file",
                    "text": this.nodeTitle,
                    "type": "lesson",
                    "data": {
                        "name": this.nodeTitle,
                        "objective": this.nodeDescription,
                        "editStatus": "CREATED",
                        "description": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": ""
                    }
                };
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            }
        }
        else if (this.nodeOperationType === "edit") {
            this.nodeType = jsonArray[nodeIndex].type;
            if (this.nodeType === "unit") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                jsonArray[nodeIndex].text = this.nodeTitle;
                data = {
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "editStatus": "CREATED",
                    "objective": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": ""
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
            }
            else if (this.nodeType === "lesson") {
                this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                jsonArray[nodeIndex].text = this.nodeTitle;
                data = {
                    "name": this.nodeTitle,
                    "objective": this.nodeDescription,
                    "editStatus": "CREATED",
                    "description": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": ""
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
            }
        }
        this.pluginService.jsTree("#buildTree", jsonArray, true);
        this.updateJSONTreeWithOrderNum(jsonArray);
        treeCallback.deselect_all();
        this.nodeType = "";
        this.enableNodeOperation = false;
        this.closeUnitAndLessonModal();
        this.resetFormValues();
    }
    //Delete node method
    deleteNode() {
        var nodeId, jsonArray, treeCallback;
        this.nodeOperationType = "delete";
        treeCallback = $("#buildTree").jstree();
        nodeId = treeCallback.get_selected()[0];
        treeCallback.delete_node($('#' + nodeId));
        jsonArray = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
        if (this.nodeType === "unit") {
            this.updatedJSONTree = jsonArray;
        }
        else {
            this.updatedJSONTree = jsonArray;
        }
        this.updateJSONTreeWithOrderNum(this.updatedJSONTree);
        this.enableNodeOperation = false;
        this.nodeType = "root";
    }
    //Generate JSON tree on drag and drop
    generateJSONTreeOnDragAndDrop() {
        var localObj = this;
        $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
                var json = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (ErrRes) => this.onSaveError(ErrRes));
    }
    saveAsDraft() {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DRAFT"];
        this.saveGeneralSubject();
    }
    saveAndPublish() {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"];
        this.saveGeneralSubject();
    }
    saveGeneralSubject() {
        this.subscribeToSaveResponse(this.subjectService.saveSubject(this.createSubjectForm()));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("General subject saved successfully", "success");
        this.previousUrl();
        this.resetFormValues();
        this.subjectForm.reset();
    }
    onSaveError(res) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    }
    createSubjectForm() {
        return this.updatedJSONTree;
    }
    //update JSON array with order number 
    updateJSONTreeWithOrderNum(json) {
        this.updatedJSONTree = [];
        this.updatedJSONTree = json;
        if (this.updatedJSONTree[0].type === "unit" || this.updatedJSONTree[0].type === "lesson") {
            this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
            this.validateNode = true;
        }
        else if (this.updatedJSONTree[0].type === "root") {
            this.validateNode = false;
        }
        for (let i = 0; i < this.updatedJSONTree.length; i++) {
            this.updatedJSONTree[i].data.orderNumber = i;
            //Remove unwanted objects (for api call) from the JSON tree
            delete this.updatedJSONTree[i].state;
            delete this.updatedJSONTree[i].a_attr;
            delete this.updatedJSONTree[i].li_attr;
            if ((this.updatedJSONTree[i].type !== "root") && (this.updatedJSONTree[i].parent === "#")) {
                this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
                this.validateNode = true;
            }
        }
        this.pluginService.jsTree("#afterChangeTree", this.updatedJSONTree, false);
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    toggleTreeNodes() {
        if (this.updatedJSONTree.length > 1) {
            this.enableExpandNode = !this.enableExpandNode;
            if (this.enableExpandNode) {
                this.pluginService.openJsTreeAllNodes("#buildTree");
            }
            else {
                this.pluginService.closeJsTreeAllNodes("#buildTree");
            }
        }
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
        this.router.navigateByUrl('/subject');
    }
};
SubjectCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
SubjectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-create.component.html")).default,
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
        _subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SubjectCreateComponent);



/***/ }),

/***/ "./src/app/subject/subject-delete.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-delete.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDeleteComponent", function() { return SubjectDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");






let SubjectDeleteComponent = class SubjectDeleteComponent {
    constructor(router, activatedRoute, eventManager, subjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.subjectService = subjectService;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ subject }) => {
            this.deletegeneralSubject(subject);
        });
    }
    subscribeToDeleteResponse(resp) {
        resp.subscribe((res) => this.onDeleteSuccess(res), (res) => this.onDeleteError(res));
    }
    deletegeneralSubject(subject) {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete this subject ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                localthisObject.confirmDelete(subject.id);
            }
            else {
                localthisObject.previousUrl();
            }
        });
    }
    confirmDelete(id) {
        this.subscribeToDeleteResponse(this.subjectService.delete(id));
    }
    previousUrl() {
        this.router.navigateByUrl('/subject');
    }
    onDeleteSuccess(resp) {
        this.pluginService.alertMessage("Subject deleted successfully", "success");
        this.previousUrl();
    }
    onDeleteError(err) {
        this.pluginService.alertMessage("Could not delete general subject, please contact admin", "error");
    }
};
SubjectDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] }
];
SubjectDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
        _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])
], SubjectDeleteComponent);



/***/ }),

/***/ "./src/app/subject/subject-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/subject/subject-details.component.ts ***!
  \******************************************************/
/*! exports provided: SubjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsComponent", function() { return SubjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");





let SubjectDetailsComponent = class SubjectDetailsComponent {
    constructor(pluginService, subjectService, router, activatedRoute) {
        this.pluginService = pluginService;
        this.subjectService = subjectService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subject = [];
        this.active = false;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.activatedRoute.data.subscribe(({ subject }) => {
            this.subject = subject;
            this.updateSubjectValues(subject);
        });
    }
    updateSubjectValues(subject) {
        this.subject = subject;
        this.pluginService.jsTree("#treeView", this.subject, false);
        this.subjectId = this.subject[0].data.id;
    }
    showSyllabusTreeDetails() {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j, nodeTreeType;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.topicId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                }
                else {
                }
            }
        });
    }
    toggleTreeNodes() {
        this.active = !this.active;
        if (this.active) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    }
    ngAfterViewInit() {
        this.showSyllabusTreeDetails();
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
                localObj.router.navigateByUrl('/subject');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
};
SubjectDetailsComponent.ctorParameters = () => [
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SubjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-details.component.html")).default,
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SubjectDetailsComponent);



/***/ }),

/***/ "./src/app/subject/subject-manage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-manage.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectManageComponent", function() { return SubjectManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");









let SubjectManageComponent = class SubjectManageComponent {
    constructor(_router, activatedRoute, curriculumService, subjectService, eventManager, parseLinks, principalService, pluginService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjects = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_5__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
    }
    ngOnInit() {
        this.principalService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInSubjects();
        this.loadCurriculums();
    }
    reset() {
        this.page = 0;
        this.subjects = [];
        this.loadSubjectList();
    }
    loadPage(page) {
        this.page = page;
        this.loadSubjectList();
    }
    loadCurriculums() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res.message));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    trackId(index, item) {
        return item.id;
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    registerChangeInSubjects() {
        this.eventSubscriber = this.eventManager.subscribe('subjectListModification', response => this.reset());
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
            this.selectedGrade = null;
        }
    }
    generateGradeList(min, max) {
        this.gradeList = [];
        for (var i = min; i <= max; i++) {
            this.gradeList.push({
                "id": i,
                "name": i
            });
        }
        return this.gradeList;
    }
    loadSubjectList() {
        this.subjects = [];
        if (this.selectedCurriculum && this.selectedGrade) {
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(this.selectedCurriculum.id, this.selectedGrade.id, null)
                .subscribe((res) => this.paginateSubjects(res.body, res.headers), (res) => this.onError(res.message));
        }
        else {
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
    }
    paginateSubjects(data, headers) {
        //this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                this.subjects.push(data[i]);
            }
        }
        else {
            this.pluginService.alertMessage("No data found..!", "warning");
        }
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }
};
SubjectManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] }
];
SubjectManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-manage.component.html")).default,
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
        _subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_4__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])
], SubjectManageComponent);



/***/ }),

/***/ "./src/app/subject/subject-update-publish.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/subject/subject-update-publish.component.ts ***!
  \*************************************************************/
/*! exports provided: SubjectPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPublishComponent", function() { return SubjectPublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");






let SubjectPublishComponent = class SubjectPublishComponent {
    constructor(router, activatedRoute, subjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ subject }) => {
            this.publishSubject(subject);
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onSaveError(errRes));
    }
    publishSubject(subject) {
        subject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"];
        this.subscribeToSaveResponse(this.subjectService.updateSubjectStatus(subject));
        this.router.navigateByUrl('/subject');
    }
    onSaveSuccess(resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"]) {
            this.pluginService.alertMessage("Subject published successfully", "success");
        }
    }
    onSaveError(errRes) {
        this.pluginService.alertMessage("Could not publish, please contact admin", "error");
    }
};
SubjectPublishComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] }
];
SubjectPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
], SubjectPublishComponent);



/***/ }),

/***/ "./src/app/subject/subject-update-unpublish.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/subject/subject-update-unpublish.component.ts ***!
  \***************************************************************/
/*! exports provided: SubjectUnpublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectUnpublishComponent", function() { return SubjectUnpublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");






let SubjectUnpublishComponent = class SubjectUnpublishComponent {
    constructor(router, activatedRoute, subjectService, pluginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.pluginService = pluginService;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ subject }) => {
            this.unpublishGeneralSubject(subject);
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onSaveError(errRes));
    }
    unpublishGeneralSubject(subject) {
        subject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"];
        this.subscribeToSaveResponse(this.subjectService.updateSubjectStatus(subject));
        this.router.navigateByUrl('/subject');
    }
    onSaveSuccess(resp) {
        if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"]) {
            this.pluginService.alertMessage("Subject unpublished successfully", "success");
        }
    }
    onSaveError(errRes) {
        this.pluginService.alertMessage("Could not unpublish, please contact admin", "error");
    }
};
SubjectUnpublishComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] }
];
SubjectUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
], SubjectUnpublishComponent);



/***/ }),

/***/ "./src/app/subject/subject-update.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-update.component.ts ***!
  \*****************************************************/
/*! exports provided: SubjectUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectUpdateComponent", function() { return SubjectUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");








let SubjectUpdateComponent = class SubjectUpdateComponent {
    constructor(router, formBuilder, pluginService, subjectService, activatedRoute, commonService, changeDetectRef) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.subject = [];
        this.updatedJSONTree = [];
        this.nodeTypes = [];
        this.validateNodeForm = true;
        this.validateNode = true;
        this.enableExpandNode = false;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.createSubjectGroup();
        this.pluginService.stepper();
        this.activatedRoute.data.subscribe(({ subject }) => {
            this.updateSubjectValues(subject);
        });
        this.getNodeTypeList();
    }
    getNodeTypeList() {
        this.commonService.getGeneralDataList().subscribe((nodeTypeData) => {
            this.nodeTypes = nodeTypeData.subject;
        });
    }
    createSubjectGroup() {
        this.subjectForm = this.formBuilder.group({
            curriculum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            subjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            subjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            isLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.syllabusForm = this.formBuilder.group({
            unitName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            unitDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            lessonName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lessonObjective: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
        });
    }
    get formControl() { return this.subjectForm.controls; }
    get modalFormControl() { return this.syllabusForm.controls; }
    onNodeTypeChange() {
        const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];
        if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;
            if (this.nodeType === 'unit') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
            else if (this.nodeType === 'lesson') {
                this.enableModalOperation = true;
                this.syllabusForm.addControl('lessonName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
                this.syllabusForm.addControl('unitName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null));
            }
        }
    }
    updateSubjectValues(subject) {
        var name, description, isLanguage, curriculumId, grade;
        this.updateStatusForAllNode(subject);
        name = subject[0].data.name;
        description = subject[0].data.description;
        isLanguage = subject[0].data.isLanguage;
        grade = subject[0].data.grade;
        curriculumId = subject[0].data.curriculumId;
        this.subjectForm.setValue({
            subjectName: name,
            subjectDescription: description,
            isLanguage: isLanguage,
            curriculum: curriculumId,
            grade: grade
        });
        this.pluginService.jsTree("#beforeChangeTree", subject, false);
        this.subjectForm.get('curriculum').disable();
        this.subjectForm.get('grade').disable();
    }
    updateStatusForAllNode(subject) {
        for (var i = 0; i < subject.length; i++) {
            subject[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["NOCHANGE"];
        }
        this.subject = subject;
    }
    loadUpdatedSubjectTree() {
        this.subject[0].text = this.subjectName;
        this.subject[0].data.name = this.subjectName;
        this.subject[0].data.description = this.subjectDescription;
        this.subject[0].data.isLanguage = this.subjectForm.value.isLanguage;
        this.pluginService.jsTree("#buildTree", this.subject, true);
    }
    cancelForm() {
        this.subjectForm.reset();
    }
    ngAfterViewInit() {
        this.nodeSelectedEvent();
        this.generateJSONTreeOnDragAndDrop();
    }
    openUnitAndLessonModal() {
        this.pluginService.showModalWindow("#subjectEditModal");
    }
    closeUnitAndLessonModal() {
        this.pluginService.hideModalWindow("#subjectEditModal");
    }
    closeWithOutSavingNode() {
        var localthisObject = this;
        swal({
            title: "Are you sure to close without saving ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                localthisObject.closeUnitAndLessonModal();
                localthisObject.disableNodeOperations();
            }
        });
    }
    disableNodeOperations() {
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.enableNodeOperation = false;
        this.nodeType = "";
        this.resetFormValues();
        let treeCallback = $('#buildTree').jstree(true);
        treeCallback.deselect_all();
    }
    //Reset all form values
    resetFormValues() {
        this.syllabusForm.reset();
        this.selectedNodeType = null;
    }
    //Tree selection and change method call
    nodeSelectedEvent() {
        let conceptThis = this;
        $('#buildTree').on('changed.jstree', function (e, data) {
            let i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                conceptThis.nodeType = data.node.type;
                if (conceptThis.nodeType === "root") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = false;
                }
                else if (conceptThis.nodeType === "unit") {
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.enableNodeOperation = true;
                    conceptThis.nodeId = data.node.data.id;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.description;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else if (conceptThis.nodeType === "lesson") {
                    conceptThis.enableNodeOperation = true;
                    conceptThis.enableEditNodeOperation = true;
                    conceptThis.nodeId = data.node.data.id;
                    conceptThis.nodeTitle = data.node.data.name;
                    conceptThis.nodeDescription = data.node.data.objective;
                    conceptThis.syllabusFormSetValues(conceptThis);
                }
                else {
                    conceptThis.enableNodeOperation = false;
                    conceptThis.enableEditNodeOperation = false;
                }
            }
        });
    }
    //Unit and lesson details form setvalues method
    syllabusFormSetValues(Objectthis) {
        let nodeTypeIndex;
        nodeTypeIndex = this.nodeTypes.findIndex(item => item.name === Objectthis.nodeType);
        this.selectedNodeType = this.nodeTypes[nodeTypeIndex];
        if (Objectthis.nodeType === "unit") {
            this.syllabusForm.setValue({
                unitName: Objectthis.nodeTitle,
                unitDescription: Objectthis.nodeDescription,
                lessonName: "",
                lessonObjective: ""
            });
        }
        else {
            this.syllabusForm.setValue({
                unitName: "",
                unitDescription: "",
                lessonName: Objectthis.nodeTitle,
                lessonObjective: Objectthis.nodeDescription,
            });
        }
    }
    //Create node method
    createNode() {
        this.nodeOperationType = "create";
        this.modalTitleName = "Add new";
        this.disableDropdown = false;
        this.openUnitAndLessonModal();
        this.nodeType = "";
        this.resetFormValues();
        this.disableDropdown = false;
        this.enableModalOperation = false;
        this.selectedNodeType = null;
    }
    //Edit node method
    editNode() {
        this.nodeOperationType = "edit";
        this.modalTitleName = "Edit";
        this.disableDropdown = true;
        this.syllabusForm.patchValue({
            unitName: this.nodeTitle,
            unitDescription: this.nodeDescription,
            lessonName: this.nodeTitle,
            lessonObjective: this.nodeDescription
        });
        this.openUnitAndLessonModal();
        this.enableModalOperation = true;
    }
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    validateSubjectFormValues() {
        this.subjectName = this.trimValue(this.subjectForm.value.subjectName);
        this.subjectDescription = this.trimValue(this.subjectForm.value.subjectDescription);
        if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
        }
        else {
            this.validateSubjectForm = false;
        }
        if (this.subjectForm.invalid) {
            this.validateSubjectForm = true;
        }
        if (this.subjectForm.valid) {
            this.validateSubjectForm = false;
        }
    }
    validateUnitAndLessonForm() {
        let unitName, lessonName;
        unitName = this.trimValue(this.syllabusForm.value.unitName);
        lessonName = this.trimValue(this.syllabusForm.value.lessonName);
        if (this.nodeType === 'unit') {
            if (unitName === null || unitName === "" || unitName === undefined) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
        else if (this.nodeType === 'lesson') {
            if (lessonName === null || lessonName === "" || lessonName === undefined) {
                this.validateNodeForm = true;
            }
            else {
                this.validateNodeForm = false;
            }
        }
    }
    ngAfterViewChecked() {
        //Subject Form Validation
        this.validateSubjectFormValues();
        //Unit and lesson form validation
        this.validateUnitAndLessonForm();
        this.changeDetectRef.detectChanges();
    }
    //Save node method
    saveNode() {
        if (this.syllabusForm.valid) {
            this.validateNodeForm = false;
            var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, selectedNodeID, data;
            position = 'last';
            parent = $('#buildTree').jstree('get_selected')[0];
            treeCallback = $('#buildTree').jstree(true);
            jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
            selectedNodeID = treeCallback.get_selected()[0];
            nodeIndex = jsonArray.findIndex(item => item.id === selectedNodeID);
            if (this.nodeOperationType === "create") {
                if (this.nodeType === "unit") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                    newNodeArray = {
                        "icon": "fe fe-server",
                        "text": this.nodeTitle,
                        "type": "unit",
                        "data": {
                            "name": this.nodeTitle,
                            "description": this.nodeDescription,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                            "objective": "",
                            "orderNumber": 0,
                            "status": null,
                            "fullName": "",
                            "curriculumId": null,
                            "grade": null
                        }
                    };
                    $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                else if (this.nodeType === "lesson") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                    newNodeArray = {
                        "icon": "fa fa-file",
                        "text": this.nodeTitle,
                        "type": "lesson",
                        "data": {
                            "name": this.nodeTitle,
                            "objective": this.nodeDescription,
                            "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"],
                            "description": "",
                            "orderNumber": 0,
                            "status": null,
                            "fullName": "",
                            "curriculumId": null,
                            "grade": null
                        }
                    };
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                    jsonArray = treeCallback.get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                }
                this.validateNode = false;
            }
            if (this.nodeOperationType === "edit") {
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "unit") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.unitName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.unitDescription);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["EDITED"],
                        "objective": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": ""
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
                else if (this.nodeType === "lesson") {
                    this.nodeTitle = this.trimValue(this.syllabusForm.value.lessonName);
                    this.nodeDescription = this.trimValue(this.syllabusForm.value.lessonObjective);
                    jsonArray[nodeIndex].text = this.nodeTitle;
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "objective": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["EDITED"],
                        "description": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": "",
                        "curriculumId": null,
                        "grade": null
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                }
                this.validateNode = false;
            }
            else if (this.nodeOperationType === "delete") {
                this.nodeType = jsonArray[nodeIndex].type;
                if (this.nodeType === "unit") {
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "description": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                        "objective": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": "",
                        "curriculumId": null,
                        "grade": null
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                    arrayDetails.type = 'unit';
                    jsonArray[nodeIndex].icon = "fa fa-trash";
                    //Update a child node status
                    if (treeCallback.is_parent(selectedNodeID) === true) {
                        this.getChildrenDOM(selectedNodeID, jsonArray);
                    }
                }
                else if (this.nodeType === "lesson") {
                    data = {
                        "id": this.nodeId,
                        "name": this.nodeTitle,
                        "objective": this.nodeDescription,
                        "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                        "description": "",
                        "orderNumber": 0,
                        "status": null,
                        "fullName": "",
                        "curriculumId": null,
                        "grade": null
                    };
                    arrayDetails = jsonArray[nodeIndex];
                    arrayDetails.data = data;
                    arrayDetails.type = 'lesson';
                    jsonArray[nodeIndex].icon = "fa fa-trash";
                }
                this.validateNode = false;
            }
            this.pluginService.jsTree("#buildTree", jsonArray, true);
            this.changeNodeStatus(jsonArray);
            treeCallback.deselect_all();
            this.nodeType = "";
            this.enableNodeOperation = false;
            this.closeUnitAndLessonModal();
            this.resetFormValues();
        }
        if (this.syllabusForm.invalid) {
            this.validateNodeForm = true;
            return;
        }
    }
    //Delete node method
    deleteNode() {
        this.nodeOperationType = "delete";
        this.saveNode();
    }
    //Get children DOM
    getChildrenDOM(selectedNode, jsonArray) {
        var treeCallBack, childrenDOM, childDOM, lastChildDOM, subChildDOM, i, j, k, l, childrenIDs1 = [], childrenIDs2 = [], childrenIDs3 = [], childrenIDs4 = [], childrenIDs = [];
        treeCallBack = $("#buildTree").jstree(true);
        childrenDOM = treeCallBack.get_children_dom(selectedNode);
        for (i = 0; i < childrenDOM.length; i++) {
            childrenIDs1.push({ "id": childrenDOM[i].id });
            if (treeCallBack.is_parent(childrenIDs1[i]) === true) {
                childDOM = treeCallBack.get_children_dom(childrenIDs1[i]);
                for (j = 0; j < childDOM.length; j++) {
                    childrenIDs2.push({ "id": childDOM[j].id });
                    if (treeCallBack.is_parent(childrenIDs2[j]) === true) {
                        subChildDOM = treeCallBack.get_children_dom(childrenIDs2[j]);
                        for (k = 0; k < subChildDOM.length; k++) {
                            childrenIDs3.push({ "id": subChildDOM[k].id });
                            if (treeCallBack.is_parent(childrenIDs3[k]) === true) {
                                lastChildDOM = treeCallBack.get_children_dom(childrenIDs3[k]);
                                for (l = 0; l < lastChildDOM.length; l++) {
                                    childrenIDs4.push({ "id": lastChildDOM[l].id });
                                    this.updateDeleteStatus(childrenIDs4, jsonArray);
                                }
                            }
                            this.updateDeleteStatus(childrenIDs3, jsonArray);
                        }
                    }
                    this.updateDeleteStatus(childrenIDs2, jsonArray);
                }
            }
        }
        this.updateDeleteStatus(childrenIDs1, jsonArray);
        this.updatedJSONTree = jsonArray;
    }
    //Update delete status
    updateDeleteStatus(childrenIDs, jsonArray) {
        var k, nodeIndex, nodeType, data, childrenIDs;
        for (k = 0; k < childrenIDs.length; k++) {
            nodeIndex = jsonArray.findIndex(item => item.id === childrenIDs[k].id);
            nodeType = jsonArray[nodeIndex].type;
            if (nodeType === "unit") {
                data = {
                    "id": this.nodeId,
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                    "objective": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": "",
                    "curriculumId": null,
                    "grade": null
                };
                jsonArray[nodeIndex].data = data;
                jsonArray[nodeIndex].type = 'unit';
                jsonArray[nodeIndex].icon = "fa fa-trash";
            }
            else {
                data = {
                    "id": this.nodeId,
                    "name": this.nodeTitle,
                    "objective": this.nodeDescription,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"],
                    "description": "",
                    "orderNumber": 0,
                    "status": null,
                    "fullName": "",
                    "curriculumId": null,
                    "grade": null
                };
                jsonArray[nodeIndex].data = data;
                jsonArray[nodeIndex].type = 'lesson';
                jsonArray[nodeIndex].icon = "fa fa-trash";
            }
        }
    }
    //Generate JSON tree on drag and drop
    generateJSONTreeOnDragAndDrop() {
        var localObj = this;
        $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
                var json = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (ErrRes) => this.onSaveError(ErrRes));
    }
    saveAsDraft() {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DRAFT"];
        this.saveGeneralSubject();
    }
    saveAndPublish() {
        this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"];
        this.saveGeneralSubject();
    }
    saveGeneralSubject() {
        this.subscribeToSaveResponse(this.subjectService.saveSubject(this.createSubjectForm()));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("General subject saved successfully", "success");
        this.previousUrl();
        this.resetFormValues();
        this.subjectForm.reset();
    }
    onSaveError(res) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    }
    createSubjectForm() {
        return this.updatedJSONTree;
    }
    //update JSON array with order number 
    updateJSONTreeWithOrderNum(json) {
        this.updatedJSONTree = [];
        this.updatedJSONTree = json;
        if (this.updatedJSONTree[0].type === "unit" || this.updatedJSONTree[0].type === "lesson") {
            this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
            this.validateNode = true;
        }
        else if (this.updatedJSONTree[0].type === "root") {
            this.validateNode = false;
        }
        for (let i = 0; i < this.updatedJSONTree.length; i++) {
            this.updatedJSONTree[i].data.orderNumber = i;
            //Remove unwanted objects (for api call) from the JSON tree
            delete this.updatedJSONTree[i].state;
            delete this.updatedJSONTree[i].a_attr;
            delete this.updatedJSONTree[i].li_attr;
            if ((this.updatedJSONTree[i].type !== "root") && (this.updatedJSONTree[i].parent === "#")) {
                this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
                this.validateNode = true;
            }
        }
        this.pluginService.jsTree("#afterChangeTree", this.updatedJSONTree, false);
    }
    //If new node is created and edited , status will be created only 
    //If new node is created and deleted , remove an element from the updated array
    changeNodeStatus(json) {
        let selectedNodeID, treeCallback, updatedJson;
        for (let i = 0; i < json.length; i++)
            if (json[i].data.id === undefined) {
                if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["EDITED"]) {
                    json[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["CREATED"];
                }
                else if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["DELETED"]) {
                    treeCallback = $('#buildTree').jstree(true);
                    selectedNodeID = treeCallback.get_selected()[0];
                    treeCallback.delete_node($('#' + selectedNodeID));
                    updatedJson = $("#buildTree").jstree(true).get_json('#', { no_state: true, no_li_attr: true, no_a_attr: true, flat: true });
                    json = updatedJson;
                }
            }
        this.updateJSONTreeWithOrderNum(json);
    }
    cancelNode() {
        this.resetFormValues();
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    toggleTreeNodes() {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#buildTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#buildTree");
        }
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
        this.router.navigateByUrl('/subject');
    }
};
SubjectUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
SubjectUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject-update.component.html")).default,
        providers: [_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SubjectUpdateComponent);



/***/ }),

/***/ "./src/app/subject/subject.module.ts":
/*!*******************************************!*\
  !*** ./src/app/subject/subject.module.ts ***!
  \*******************************************/
/*! exports provided: SubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectModule", function() { return SubjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _subject_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject.route */ "./src/app/subject/subject.route.ts");
/* harmony import */ var _subject_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subject-manage.component */ "./src/app/subject/subject-manage.component.ts");
/* harmony import */ var _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject-update-publish.component */ "./src/app/subject/subject-update-publish.component.ts");
/* harmony import */ var _subject_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject-delete.component */ "./src/app/subject/subject-delete.component.ts");
/* harmony import */ var _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subject-update-unpublish.component */ "./src/app/subject/subject-update-unpublish.component.ts");
/* harmony import */ var _subject_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject-create.component */ "./src/app/subject/subject-create.component.ts");
/* harmony import */ var _subject_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subject-update.component */ "./src/app/subject/subject-update.component.ts");
/* harmony import */ var _subject_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subject-details.component */ "./src/app/subject/subject-details.component.ts");
















let SubjectModule = class SubjectModule {
};
SubjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_subject_route__WEBPACK_IMPORTED_MODULE_8__["subjectRoute"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        declarations: [
            _subject_manage_component__WEBPACK_IMPORTED_MODULE_9__["SubjectManageComponent"],
            _subject_create_component__WEBPACK_IMPORTED_MODULE_13__["SubjectCreateComponent"],
            _subject_update_component__WEBPACK_IMPORTED_MODULE_14__["SubjectUpdateComponent"],
            _subject_details_component__WEBPACK_IMPORTED_MODULE_15__["SubjectDetailsComponent"],
            _subject_delete_component__WEBPACK_IMPORTED_MODULE_11__["SubjectDeleteComponent"],
            _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__["SubjectPublishComponent"],
            _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["SubjectUnpublishComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SubjectModule);



/***/ }),

/***/ "./src/app/subject/subject.route.ts":
/*!******************************************!*\
  !*** ./src/app/subject/subject.route.ts ***!
  \******************************************/
/*! exports provided: SubjectResolve, SubjectWithTreeResolve, subjectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectResolve", function() { return SubjectResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectWithTreeResolve", function() { return SubjectWithTreeResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectRoute", function() { return subjectRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_model_content_subject_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/content/subject.model */ "./src/app/shared/model/content/subject.model.ts");
/* harmony import */ var _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject-update-publish.component */ "./src/app/subject/subject-update-publish.component.ts");
/* harmony import */ var _subject_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject-manage.component */ "./src/app/subject/subject-manage.component.ts");
/* harmony import */ var _subject_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subject-delete.component */ "./src/app/subject/subject-delete.component.ts");
/* harmony import */ var _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subject-update-unpublish.component */ "./src/app/subject/subject-update-unpublish.component.ts");
/* harmony import */ var _subject_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject-create.component */ "./src/app/subject/subject-create.component.ts");
/* harmony import */ var _subject_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subject-update.component */ "./src/app/subject/subject-update.component.ts");
/* harmony import */ var _subject_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject-details.component */ "./src/app/subject/subject-details.component.ts");














let SubjectResolve = class SubjectResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getSubjectBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((response) => response.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((subject) => subject.body));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_subject_model__WEBPACK_IMPORTED_MODULE_6__["Subject"]());
    }
};
SubjectResolve.ctorParameters = () => [
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] }
];
SubjectResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]])
], SubjectResolve);

let SubjectWithTreeResolve = class SubjectWithTreeResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.getSubjectTreeBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((response) => response.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((subject) => subject.body));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_subject_model__WEBPACK_IMPORTED_MODULE_6__["Subject"]());
    }
};
SubjectWithTreeResolve.ctorParameters = () => [
    { type: _subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] }
];
SubjectWithTreeResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"]])
], SubjectWithTreeResolve);

const subjectRoute = [
    {
        path: '',
        component: _subject_manage_component__WEBPACK_IMPORTED_MODULE_8__["SubjectManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage subjects'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: 'create',
        component: _subject_create_component__WEBPACK_IMPORTED_MODULE_11__["SubjectCreateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create new subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/edit',
        component: _subject_update_component__WEBPACK_IMPORTED_MODULE_12__["SubjectUpdateComponent"],
        resolve: {
            subject: SubjectWithTreeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit subject',
            action: 'edit'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/view',
        component: _subject_details_component__WEBPACK_IMPORTED_MODULE_13__["SubjectDetailsComponent"],
        resolve: {
            subject: SubjectWithTreeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/delete',
        component: _subject_delete_component__WEBPACK_IMPORTED_MODULE_9__["SubjectDeleteComponent"],
        resolve: {
            subject: SubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Delete subject'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/publish',
        component: _subject_update_publish_component__WEBPACK_IMPORTED_MODULE_7__["SubjectPublishComponent"],
        resolve: {
            subject: SubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Publish subject',
            action: 'publish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/unpublish',
        component: _subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_10__["SubjectUnpublishComponent"],
        resolve: {
            subject: SubjectResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Unpublish subject',
            action: 'unpublish'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/subject/subject.service.ts":
/*!********************************************!*\
  !*** ./src/app/subject/subject.service.ts ***!
  \********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");





let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let SubjectService = class SubjectService {
    constructor(http) {
        this.http = http;
        this.subjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects';
        this.subjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects/subject-tree';
        this.subjectResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects/search';
    }
    getSubjectBySubjectId(id) {
        return this.http.get(`${this.subjectResourceUrl}/${id}`, { observe: 'response' });
    }
    updateSubjectStatus(generalSubject) {
        return this.http.put(this.subjectResourceUrl, generalSubject, { observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.subjectResourceUrl}/${id}`, { observe: 'response' });
    }
    saveSubject(generalSubject) {
        return this.http.post(this.subjectResourceUrlWithTree, generalSubject, { headers: headers, observe: 'response' });
    }
    getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status) {
        let reqJSON;
        if (status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"]) {
            reqJSON = {
                "curriculumId": curriculumId,
                "grade": gradeId,
                "status": status
            };
        }
        else {
            reqJSON = {
                "curriculumId": curriculumId,
                "grade": gradeId
            };
        }
        return this.http.post(this.subjectResourceUrlSearch, reqJSON, { observe: 'response' });
    }
    getSubjectTreeBySubjectId(id) {
        return this.http.get(`${this.subjectResourceUrlWithTree}/${id}`, { observe: 'response' });
    }
};
SubjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SubjectService);



/***/ })

}]);
//# sourceMappingURL=subject-subject-module-es2015.js.map