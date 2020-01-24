function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-subject-general-subject-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-create.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-create.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralSubjectGeneralSubjectCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row-flex stepper\">\r\n  <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n    <a class=\"nav-link active\" id=\"createSubject-tab\" data-toggle=\"pill\" href=\"#createSubject\" role=\"tab\"\r\n      aria-controls=\"createSubject\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 1\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Create subject\r\n      </span>\r\n    </a>\r\n    <a class=\"nav-link disabled\" id=\"createConcept-tab\" data-toggle=\"pill\" href=\"#createConcept\" role=\"tab\"\r\n      aria-controls=\"createConcept\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 2\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Create concepts and topics\r\n      </span>\r\n    </a>\r\n    <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\r\n      aria-controls=\"confirmation\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 3\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Summary\r\n      </span>\r\n    </a>\r\n  </div>\r\n  <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\r\n\r\n    <div class=\"tab-pane fade show active\" id=\"createSubject\" role=\"tabpanel\" aria-labelledby=\"createSubject-tab\">\r\n\r\n      <form [formGroup]=\"generalSubjectForm\">\r\n        <div class=\"form-group mb-2 col-md-6\">\r\n          <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter subject name (min length: 3, max length: 50)\"\r\n            inputRestriction=\"alphabetsWithSpace\" formControlName=\"generalSubjectName\" maxlength=\"50\" minlength=\"3\" />\r\n          <div class=\"text-muted font-15 my-2\">Allowed\r\n            characters - Alphabets</div>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-md-6\">\r\n          <label for=\"description\" class=\" col-form-label\">Description\r\n            <span class=\"text-muted\">(Optional)</span>\r\n          </label>\r\n          <textarea class=\"form-control description-form\" name=\"description\"\r\n            placeholder=\"Enter description  (min length: 3, max length: 250)\"\r\n            formControlName=\"generalSubjectDescription\" maxlength=\"250\" minlength=\"3\"></textarea>\r\n          <div class=\"text-muted font-15 my-2\">\r\n            Allowed characters - Alphabets, Numbers and\r\n            Special characters\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 d-flex justify-content-end\">\r\n            <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\"\r\n              (click)=\"loadGeneralSubjectTree()\">\r\n              Next\r\n              <i class=\"fa fa-arrow-right ml-2\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"tab-pane fade\" id=\"createConcept\" role=\"tabpanel\" aria-labelledby=\"createConcept-tab\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xxl-4 p-2\">\r\n          <div class=\"d-flex justify-content-start mb-2\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\" *ngIf=\"updatedJSONTree.length > 1\">\r\n              <i class=\"fa fa-clone mr-2\"></i>\r\n              <span *ngIf=\"enableExpandNode === false\">\r\n                Expand all\r\n              </span>\r\n              <span *ngIf=\"enableExpandNode === true\">\r\n                Collapse all\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div id=\"buildTree\"></div>\r\n        </div>\r\n        <div class=\"col-xxl-8\">\r\n          <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\r\n            <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'topic'\" (click)=\"createNode()\">\r\n              <i class=\"fa fa-plus-circle mr-2\"></i>Add new\r\n              concept / topic\r\n            </div>\r\n            <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\r\n              <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\r\n            </div>\r\n            <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\r\n              <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 p-4\">\r\n            <div *ngIf=\"nodeType === 'concept'\">\r\n              <p><b>Concept name :</b> {{nodeTitle}} </p>\r\n              <p><b>Concept description :</b> {{nodeDescription}}</p>\r\n            </div>\r\n            <div *ngIf=\"nodeType === 'topic'\">\r\n              <p><b>Topic name :</b> {{nodeTitle}}</p>\r\n              <p><b>Topic description :</b> {{nodeDescription}}</p>\r\n              <p><b>Curriculum :</b> {{curriculum}}</p>\r\n              <p><b>Grade :</b> {{grade}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"my-2 rounded p-3 border-danger\" *ngIf=\"enableInstruction\">\r\n        <p class=\"text-danger\"><b>NOTE</b></p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check text-danger mr-2\"></i> Select a subject node and do your actions.\r\n        </p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Add atleast one concept or one topic for general subject\r\n          creation.\r\n        </p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't drag and drop on top of\r\n          root node\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 d-flex justify-content-end\">\r\n          <div class=\"btn btn-danger prev-step\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i> Previous\r\n          </div>\r\n          <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\r\n            Next\r\n            <i class=\"fa fa-arrow-right ml-2\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col-md-6\">\r\n            <h5>Before changes</h5>\r\n            <div id=\"beforeChangeTree\"></div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h5>After changes</h5>\r\n            <div id=\"afterChangeTree\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 d-flex justify-content-end\">\r\n          <span class=\"btn btn-danger mr-2 prev-step\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>\r\n            Previous\r\n          </span>\r\n          <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\r\n            <i class=\"fa fa-save mr-2\"></i>\r\n            Save as draft\r\n          </div>\r\n          <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>\r\n            Save and publish\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"generalSubjectEditModal\">\r\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n    <div class=\"modal-content\" [formGroup]=\"conceptAndTopicForm\">\r\n      <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n        <h5 class=\"modal-title text-white\">\r\n          {{modalTitleName}} concept / topic\r\n        </h5>\r\n        <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"col-form-label\">Type\r\n          </label>\r\n          <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n            bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\" (change)=\"onNodeTypeChange()\"\r\n            [searchable]=\"false\">\r\n          </ng-select>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'concept'\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Concept\r\n              name\r\n            </label>\r\n            <input type=\"text\" placeholder=\"Enter concept name (minlength: 3 and maxlength: 75)\" class=\"form-control\"\r\n              formControlName=\"conceptName\" inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.conceptName.errors }\">\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special character (-)\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Concept\r\n              description <span class=\"text-muted\">(Optional)</span>\r\n            </label>\r\n            <textarea class=\"form-control description-form\"\r\n              placeholder=\"Enter description (minlength: 3 and maxlength: 250)\" formControlName=\"conceptDescription\"\r\n              minlength=\"3\" maxlength=\"250\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.conceptDescription.errors }\"></textarea>\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special characters\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'topic'\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Topic\r\n              name\r\n            </label>\r\n            <input type=\"text\" placeholder=\"Enter topic name (minlength: 3 and maxlength: 75)\" class=\"form-control\"\r\n              formControlName=\"topicName\" inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.topicName.errors }\">\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special character (-)\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Topic\r\n              description <span class=\"text-muted\">(Optional)</span>\r\n            </label>\r\n            <textarea class=\"form-control description-form\"\r\n              placeholder=\"Enter description(minlength: 3 and maxlength: 250)\" formControlName=\"topicDescription\"\r\n              minlength=\"3\" maxlength=\"250\"\r\n              [ngClass]=\"{ 'is-invalid': validateNodeForm && modalFormControl.topicDescription.errors }\"></textarea>\r\n            <div class=\"text-muted font-15 my-2\">\r\n              Allowed characters - Alphabets, Numbers and Special characters\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Primary\r\n              applicable curriculum and\r\n              grade\r\n            </label>\r\n            <div class=\"form-row pr-0 mr-0\">\r\n              <div class=\"col-md-6 mb-2\">\r\n                <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                  placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-6 mb-2\">\r\n                <ng-select [items]=\"grades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                  placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\r\n        <div class=\"btn btn-danger\" (click)=\"resetConceptAndTopicFormValues()\">\r\n          <i class=\"fa fa-times mr-2\"></i>\r\n          Reset\r\n        </div>\r\n        <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\r\n          <i class=\"fa fa-save mr-2\"></i>\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-details.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-details.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralSubjectGeneralSubjectDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n  </div>\r\n  <a class=\"btn btn-success mr-2\" [routerLink]=\"['/general-subject',subjectId, 'edit' ]\">\r\n    <i class=\"fa fa-edit mr-2\"></i>Edit general subject\r\n  </a>\r\n</div>\r\n\r\n<div class=\"row mb-3 p-3\">\r\n  <div class=\"col-xxl-3\">\r\n    <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubject.length > 1\">\r\n      <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n        <i class=\"fa fa-clone mr-2\"></i>\r\n        <span *ngIf=\"active === false\">\r\n          Expand all\r\n        </span>\r\n        <span *ngIf=\"active === true\">\r\n          Collapse all\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div id=\"treeView\"></div>\r\n  </div>\r\n  <div class=\"col-xxl-9\">\r\n\r\n    <div class=\"p-3\" *ngIf=\"nodeType == 'root'\">\r\n      <p><b>Subject name</b></p>\r\n      <p>{{nodeName}}</p>\r\n      <p><b>Subject description</b></p>\r\n      <p>{{nodeDescription}}</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"nodeType == 'concept'\" class=\"p-3\">\r\n      <p><b>Concept name</b></p>\r\n      <p>{{nodeName}}</p>\r\n      <p><b>Concept description</b></p>\r\n      <p>{{nodeDescription}}</p>\r\n    </div>\r\n\r\n    <div class=\"p-3\" *ngIf=\"nodeType == 'topic'\">\r\n      <div class=\"d-flex w-100 justify-content-between mb-3\">\r\n        <div>\r\n          <p><b>Topic name</b> - {{nodeName}}</p>\r\n          <p><b>Topic description</b> - {{nodeDescription}}</p>\r\n          <p><b>Curriculum :</b> {{curriculum}}</p>\r\n          <p><b>Grade :</b> {{grade}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-manage.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-manage.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralSubjectGeneralSubjectManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-flex justify-content-end my-3\">\r\n  <a [routerLink]=\"['/general-subject','create']\">\r\n    <div class=\"btn btn-primary\">\r\n      <i class=\"fa fa-plus-circle mr-2\"></i> Create new subject\r\n    </div>\r\n  </a>\r\n</div>\r\n<div class=\"table-responsive\" *ngIf=\"generalSubjects\">\r\n  <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"generalSubjectsTable\">\r\n    <thead>\r\n      <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n        <th jhiSortBy=\"title\">Subject Name <span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th jhiSortBy=\"status\">Status <span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th class=\"fixed-column\">Update status</th>\r\n        <th class=\"fixed-column\">Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n      [infiniteScrollDistance]=\"0\">\r\n      <tr *ngFor=\"let generalSubject of generalSubjects ;trackBy: trackId\">\r\n        <td data-column=\"Subject name\">{{generalSubject.title}}</td>\r\n        <td data-column=\"Status\">{{generalSubject.status}}</td>\r\n        <td class=\"fixed-column\" data-column=\"Update status\">\r\n          <a class=\"btn btn-outline-success mr-1 mb-1\"\r\n            *ngIf=\"generalSubject.status === 'DRAFT' || generalSubject.status === 'INACTIVE'\"\r\n            [routerLink]=\"['/general-subject', generalSubject.id, 'publish']\">\r\n            Publish\r\n          </a>\r\n          <a class=\"btn btn-outline-danger mr-1 mb-1\" *ngIf=\"generalSubject.status === 'ACTIVE'\"\r\n            [routerLink]=\"['/general-subject', generalSubject.id, 'unpublish']\">\r\n            Unpublish\r\n          </a>\r\n        </td>\r\n        <td class=\"fixed-column\" data-column=\"Actions\">\r\n          <div>\r\n            <a class=\"btn btn-outline-info mr-1 btn-icon-size mb-1\"\r\n              [routerLink]=\"['/general-subject', generalSubject.id, 'view' ]\">\r\n              <i class=\"fa fa-eye\"></i>\r\n            </a>\r\n\r\n            <a class=\"btn btn-outline-success mr-1 btn-icon-size mb-1\"\r\n              [routerLink]=\"['/general-subject', generalSubject.id, 'edit' ]\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </a>\r\n\r\n            <div class=\"btn btn-outline-danger mr-1 btn-icon-size mb-1\"\r\n              *ngIf=\"generalSubject.status === 'INACTIVE' || generalSubject.status === 'DRAFT'\"\r\n              [routerLink]=\"['/general-subject', generalSubject.id, 'delete']\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-update.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-update.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralSubjectGeneralSubjectUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-xxl-12 justify-content-between d-flex my-3\">\r\n  <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n    <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row-flex stepper\">\r\n  <div class=\"nav flex-column nav-pills stepper-left\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n    <a class=\"nav-link active\" id=\"editSubject-tab\" data-toggle=\"pill\" href=\"#editSubject\" role=\"tab\"\r\n      aria-controls=\"editSubject\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 1\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Edit subject\r\n      </span>\r\n    </a>\r\n    <a class=\"nav-link disabled\" id=\"manageConcept-tab\" data-toggle=\"pill\" href=\"#manageConcept\" role=\"tab\"\r\n      aria-controls=\"manageConcept\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 2\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Manage concepts and topics\r\n      </span>\r\n    </a>\r\n    <a class=\"nav-link disabled\" id=\"confirmation-tab\" data-toggle=\"pill\" href=\"#confirmation\" role=\"tab\"\r\n      aria-controls=\"confirmation\" aria-selected=\"false\">\r\n      <span class=\"index-round\">\r\n        Step 3\r\n      </span>\r\n      <span class=\"step-label\">\r\n        Summary\r\n      </span>\r\n    </a>\r\n  </div>\r\n  <div class=\"stepper-right tab-content p-3\" id=\"v-pills-tabContent\">\r\n\r\n    <div class=\"tab-pane fade show active\" id=\"editSubject\" role=\"tabpanel\" aria-labelledby=\"editSubject-tab\">\r\n\r\n      <form [formGroup]=\"generalSubjectForm\">\r\n        <div class=\"form-group mb-2 col-md-6\">\r\n          <label for=\"subjectName\" class=\"col-form-label\">Subject name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"subjectName\"\r\n            placeholder=\"Enter subject name (min length: 3, max length: 50)\" inputRestriction=\"alphabetsWithSpace\"\r\n            formControlName=\"generalSubjectName\" maxlength=\"50\" minlength=\"3\" />\r\n          <div class=\"text-muted font-15 my-2\">Allowed\r\n            characters - Alphabets</div>\r\n        </div>\r\n        <div class=\"form-group mb-2 col-md-6\">\r\n          <label for=\"description\" class=\" col-form-label\">Description\r\n            <span class=\"text-muted\">(Optional)</span>\r\n          </label>\r\n          <textarea class=\"form-control description-form\" id=\"description\" name=\"description\"\r\n            placeholder=\"Enter description  (min length: 3, max length: 250)\"\r\n            formControlName=\"generalSubjectDescription\" maxlength=\"250\" minlength=\"3\"></textarea>\r\n          <div class=\"text-muted font-15 my-2\">\r\n            Allowed characters - Alphabets, Numbers and\r\n            Special characters\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 d-flex justify-content-end\">\r\n            <button class=\"btn btn-success next-step\" [disabled]=\"validateSubjectForm\" (click)=\"updateSubjectTree()\">\r\n              Next\r\n              <i class=\"fa fa-arrow-right ml-2\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"tab-pane fade\" id=\"manageConcept\" role=\"tabpanel\" aria-labelledby=\"manageConcept-tab\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xxl-4 p-2\">\r\n          <div class=\"d-flex justify-content-start mb-2\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\" *ngIf=\"generalSubject.length > 1\">\r\n              <i class=\"fa fa-clone mr-2\"></i>\r\n              <span *ngIf=\"enableExpandNode === false\">\r\n                Expand all\r\n              </span>\r\n              <span *ngIf=\"enableExpandNode === true\">\r\n                Collapse all\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div id=\"buildTree\"></div>\r\n        </div>\r\n        <div class=\"col-xxl-8\">\r\n          <div class=\"w-100 d-flex justify-content-end align-self-start mb-2\" *ngIf=\"enableNodeOperation\">\r\n            <div class=\"btn btn-primary mr-2\" *ngIf=\"nodeType !== 'topic'\" (click)=\"createNode()\">\r\n              <i class=\"fa fa-plus-circle mr-2\"></i>Add new\r\n              concept / topic\r\n            </div>\r\n            <div class=\"btn btn-success mr-2\" (click)=\"editNode()\" *ngIf=\"enableEditNodeOperation\">\r\n              <i class=\"fa fa-edit mr-2\"></i>Edit {{nodeType}}\r\n            </div>\r\n            <div class=\"btn btn-danger\" (click)=\"deleteNode()\" *ngIf=\"nodeType !== 'root'\">\r\n              <i class=\"fa fa-trash mr-2\"></i> Delete {{nodeType}}\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 p-4\">\r\n            <div *ngIf=\"nodeType === 'concept'\">\r\n              <p><b>Concept name :</b> {{nodeTitle}} </p>\r\n              <p><b>Concept description :</b> {{nodeDescription}}</p>\r\n            </div>\r\n            <div *ngIf=\"nodeType === 'topic'\">\r\n              <p><b>Topic name :</b> {{nodeTitle}}</p>\r\n              <p><b>Topic description :</b> {{nodeDescription}}</p>\r\n              <p><b>Curriculum :</b> {{curriculum}}</p>\r\n              <p><b>Grade :</b> {{grade}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"my-2 p-3 border-danger rounded\">\r\n        <p class=\"text-danger\"><b>NOTE</b></p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Select a node and do your actions.\r\n        </p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Without any changes, you can't update general subject.\r\n        </p>\r\n        <p class=\"text-primary\">\r\n          <i class=\"fa fa-check mr-2 text-danger\"></i> Only one root node is allowed, you can't do drag and drop on top\r\n          of\r\n          root node\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 d-flex justify-content-end\">\r\n          <div class=\"btn btn-danger prev-step\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i> Previous\r\n          </div>\r\n          <button class=\"btn btn-success ml-2 next-step\" [disabled]=\"validateNode\">\r\n            Next\r\n            <i class=\"fa fa-arrow-right ml-2\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-pane fade\" id=\"confirmation\" role=\"tabpanel\" aria-labelledby=\"confirmation-tab\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col-md-6\">\r\n            <h5>Before changes</h5>\r\n            <div id=\"beforeChangeTree\"></div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h5>After changes</h5>\r\n            <div id=\"afterChangeTree\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 d-flex justify-content-end\">\r\n          <span class=\"btn btn-danger mr-2 prev-step\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>\r\n            Previous\r\n          </span>\r\n          <div class=\"btn btn-info mr-2\" (click)=\"saveAsDraft()\">\r\n            <i class=\"fa fa-save mr-2\"></i>\r\n            Save as draft\r\n          </div>\r\n          <div class=\"btn btn-success\" (click)=\"saveAndPublish()\">\r\n            <i class=\"fe fe-file-plus mr-2\"></i>\r\n            Save and publish\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"generalSubjectModal\">\r\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n    <div class=\"modal-content\" [formGroup]=\"conceptAndTopicForm\">\r\n      <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n        <h5 class=\"modal-title text-white\">\r\n          {{modalTitleName}} concept / topic\r\n        </h5>\r\n        <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingNode()\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"conceptAndTopicForm\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"col-form-label\">Type\r\n            </label>\r\n            <ng-select [items]=\"nodeTypes\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n              bindLabel=\"name\" placeholder=\"Select node type\" [(ngModel)]=\"selectedNodeType\" [searchable]=\"false\"\r\n              (change)=\"onNodeTypeChange()\">\r\n            </ng-select>\r\n          </div>\r\n          <div *ngIf=\"nodeType === 'concept'\">\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"col-form-label\">Concept\r\n                name\r\n              </label>\r\n              <input type=\"text\" placeholder=\"Enter concept name (min length: 3 and max length: 75)\"\r\n                class=\"form-control\" formControlName=\"conceptName\" inputRestriction=\"alphabetsNumbersWithMinus\"\r\n                minlength=\"3\" maxlength=\"75\">\r\n              <div class=\"text-muted font-15 my-2\">\r\n                Allowed characters - Alphabets, Numbers and Special character (-)\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"col-form-label\">Concept\r\n                description <span class=\"text-muted\">(Optional)</span>\r\n              </label>\r\n              <textarea class=\"form-control description-form\"\r\n                placeholder=\"Enter description (min length: 3 and max length: 250)\" formControlName=\"conceptDescription\"\r\n                minlength=\"3\" maxlength=\"250\"></textarea>\r\n              <div class=\"text-muted font-15 my-2\">\r\n                Allowed characters - Alphabets, Numbers and Special characters\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"nodeType === 'topic'\">\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"col-form-label\">Topic\r\n                name\r\n              </label>\r\n              <input type=\"text\" placeholder=\"Enter topic name(min length: 3 and max length: 75)\" class=\"form-control\"\r\n                formControlName=\"topicName\" inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\">\r\n              <div class=\"text-muted font-15 my-2\">\r\n                Allowed characters - Alphabets, Numbers and Special character (-)\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"col-form-label\">Topic\r\n                description <span class=\"text-muted\">(Optional)</span>\r\n              </label>\r\n              <textarea class=\"form-control description-form\"\r\n                placeholder=\"Enter description(min length: 3 and max length: 250)\" formControlName=\"topicDescription\"\r\n                minlength=\"3\" maxlength=\"250\"></textarea>\r\n              <div class=\"text-muted font-15 my-2\">\r\n                Allowed characters - Alphabets, Numbers and Special characters\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-2\">\r\n              <label class=\"col-form-label\">Primary\r\n                applicable curriculum and\r\n                grade\r\n              </label>\r\n              <div class=\"form-row pr-0 mr-0\">\r\n                <div class=\"col-md-6 mb-2\">\r\n                  <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                    placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n                  </ng-select>\r\n                </div>\r\n                <div class=\"col-md-6 mb-2\">\r\n                  <ng-select [items]=\"grades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                    placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\">\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\" *ngIf=\"enableModalOperation\">\r\n        <div class=\"btn btn-danger\" (click)=\"resetConceptAndTopicFormValues()\">\r\n          <i class=\"fa fa-times mr-2\"></i>\r\n          Reset\r\n        </div>\r\n        <button class=\"btn btn-success\" (click)=\"saveNode()\" [disabled]=\"validateNodeForm\">\r\n          <i class=\"fa fa-save mr-2\"></i>\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var CurriculumService =
    /*#__PURE__*/
    function () {
      function CurriculumService(http) {
        _classCallCheck(this, CurriculumService);

        this.http = http;
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula';
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
        key: "find",
        value: function find(id) {
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
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.curriculumResourceUrl, "/").concat(id), {
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
  "./src/app/general-subject/general-subject-create.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/general-subject/general-subject-create.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GeneralSubjectCreateComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectCreateComponent", function () {
      return GeneralSubjectCreateComponent;
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


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");

    var GeneralSubjectCreateComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectCreateComponent(router, formBuilder, pluginService, curriculumService, generalSubjectService, activatedRoute, commonService, changeDetectRef) {
        _classCallCheck(this, GeneralSubjectCreateComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.generalSubjectService = generalSubjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.curriculumList = [];
        this.conceptAndTopicTree = [];
        this.updatedJSONTree = [];
        this.nodeTypes = [];
        this.grades = [];
        this.validateSubjectForm = true;
        this.validateNode = true;
        this.validateNodeForm = true;
        this.enableExpandNode = false;
      }

      _createClass(GeneralSubjectCreateComponent, [{
        key: "getNodeTypeList",
        value: function getNodeTypeList() {
          var _this = this;

          this.commonService.getGeneralDataList().subscribe(function (nodeTypeData) {
            _this.nodeTypes = nodeTypeData.generalSubject;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pluginService.sideMenuToggle();
          this.createGeneralSubjectGroup();
          this.pluginService.stepper();
          this.getCurriculumList();
          this.getNodeTypeList();
        }
      }, {
        key: "createGeneralSubjectGroup",
        value: function createGeneralSubjectGroup() {
          this.generalSubjectForm = this.formBuilder.group({
            generalSubjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            generalSubjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
          });
          this.conceptAndTopicForm = this.formBuilder.group({
            conceptName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            conceptDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            topicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            topicDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
          });
        }
      }, {
        key: "getCurriculumList",
        value: function getCurriculumList() {
          var _this2 = this;

          this.curriculumService.getStandardCurriculums().subscribe(function (res) {
            return _this2.assignResponseToList(res.body);
          }, function (res) {
            return _this2.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToList",
        value: function assignResponseToList(data) {
          this.curriculumList = data;
        }
      }, {
        key: "validateGeneralSubjectForm",
        value: function validateGeneralSubjectForm() {
          this.subjectName = this.trimValue(this.generalSubjectForm.value.generalSubjectName);
          this.subjectDescription = this.trimValue(this.generalSubjectForm.value.generalSubjectDescription);

          if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
          } else {
            this.validateSubjectForm = false;
          }

          if (this.generalSubjectForm.invalid) {
            this.validateSubjectForm = true;
          }

          if (this.generalSubjectForm.valid) {
            this.validateSubjectForm = false;
          }
        }
      }, {
        key: "loadGeneralSubjectTree",
        value: function loadGeneralSubjectTree() {
          if (this.generalSubjectForm.valid) {
            this.conceptAndTopicTree = [{
              "text": this.subjectName,
              "icon": "fa fa-book",
              "data": {
                "name": this.subjectName,
                "description": this.subjectDescription,
                "status": null,
                "curriculumId": 0,
                "grade": 0,
                "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
              },
              "parent": "#",
              "type": "root"
            }];
            this.pluginService.jsTree("#buildTree", this.conceptAndTopicTree, true);
            this.pluginService.jsTree("#beforeChangeTree", this.conceptAndTopicTree, false);
            this.enableInstruction = true;
          }

          if (this.generalSubjectForm.invalid) {
            return;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.nodeOnSelection();
          this.generateJSONTreeOnDragAndDrop();
        }
      }, {
        key: "onNodeTypeChange",
        value: function onNodeTypeChange() {
          var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];

          if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;

            if (this.nodeType === 'concept') {
              this.enableModalOperation = true;
              this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
              this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
              this.resetConceptAndTopicFormValues();
            } else if (this.nodeType === 'topic') {
              this.enableModalOperation = true;
              this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
              this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
              this.resetConceptAndTopicFormValues();
            }
          }
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
            gradesApplicableFrom = null;
            gradesApplicableTo = null;
          } else {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.grades = [];

          for (var i = min; i <= max; i++) {
            this.grades.push({
              "id": i,
              "name": i
            });
          }

          return this.grades;
        } //Reset all form values

      }, {
        key: "resetConceptAndTopicFormValues",
        value: function resetConceptAndTopicFormValues() {
          this.conceptAndTopicForm.reset();
          this.selectedNodeType = null;
          this.selectedCurriculum = null;
          this.selectedGrade = null;
        }
      }, {
        key: "validateConceptAndTopicForm",
        value: function validateConceptAndTopicForm() {
          var conceptName, topicName;
          conceptName = this.trimValue(this.conceptAndTopicForm.value.conceptName);
          topicName = this.trimValue(this.conceptAndTopicForm.value.topicName);

          if (this.nodeType === 'concept') {
            if (conceptName === "" || conceptName === undefined || conceptName === null) {
              this.validateNodeForm = true;
            } else {
              this.validateNodeForm = false;
            }
          } else if (this.nodeType === 'topic') {
            if (topicName === "" || topicName === undefined || topicName === null) {
              this.validateNodeForm = true;
            } else {
              this.validateNodeForm = false;
            }
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          //General Subject Form Validation
          this.validateGeneralSubjectForm(); //Concept and topic form validation

          this.validateConceptAndTopicForm();
          this.changeDetectRef.detectChanges();
        } //Tree selection and change method call

      }, {
        key: "nodeOnSelection",
        value: function nodeOnSelection() {
          var localThisObj = this;
          $('#buildTree').on('changed.jstree', function (e, data) {
            var i, j, curriculumId;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.enableNodeOperation = true;
                localThisObj.enableEditNodeOperation = false;
              } else if (localThisObj.nodeType === "concept") {
                localThisObj.enableEditNodeOperation = true;
                localThisObj.enableNodeOperation = true;
                localThisObj.nodeTitle = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.conceptAndTopicFormSetValues(localThisObj);
              } else if (localThisObj.nodeType === "topic") {
                localThisObj.enableNodeOperation = true;
                localThisObj.enableEditNodeOperation = true;
                localThisObj.nodeTitle = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                curriculumId = data.node.data.baseCurriculumId;

                if (curriculumId === null) {
                  localThisObj.selectedCurriculum = null;
                  localThisObj.curriculum = null;
                } else {
                  localThisObj.curriculum = localThisObj.curriculumList.find(function (item) {
                    return item.id === curriculumId;
                  }).acronym;
                }

                localThisObj.grade = data.node.data.baseGrade;
                localThisObj.conceptAndTopicFormSetValues(localThisObj);
              } else {
                localThisObj.enableNodeOperation = false;
                localThisObj.enableEditNodeOperation = false;
              }
            }
          });
        } //Concept and topic details form setvalues method

      }, {
        key: "conceptAndTopicFormSetValues",
        value: function conceptAndTopicFormSetValues(Objectthis) {
          var nodeTypeIndex, curriculumIndex, gradeIndex, gradesApplicableFrom, gradesApplicableTo;
          nodeTypeIndex = this.nodeTypes.findIndex(function (item) {
            return item.name === Objectthis.nodeType;
          });
          this.selectedNodeType = this.nodeTypes[nodeTypeIndex];

          if (Objectthis.nodeType === "concept") {
            this.conceptAndTopicForm.setValue({
              conceptName: Objectthis.nodeTitle,
              conceptDescription: Objectthis.nodeDescription,
              topicName: "",
              topicDescription: ""
            });
          } else if (Objectthis.nodeType === "topic") {
            if (Objectthis.curriculum === null || Objectthis.curriculum === undefined) {
              this.selectedCurriculum = null;
              this.selectedGrade = null;
            } else {
              curriculumIndex = this.curriculumList.findIndex(function (item) {
                return item.acronym === Objectthis.curriculum;
              });
              this.selectedCurriculum = this.curriculumList[curriculumIndex];
              gradesApplicableFrom = this.curriculumList[curriculumIndex].gradesApplicableFrom;
              gradesApplicableTo = this.curriculumList[curriculumIndex].gradesApplicableTo;
              this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
              gradeIndex = this.grades.findIndex(function (item) {
                return item.name === Objectthis.grade;
              });
              this.selectedGrade = this.grades[gradeIndex];
            }

            this.conceptAndTopicForm.setValue({
              conceptName: "",
              conceptDescription: "",
              topicName: Objectthis.nodeTitle,
              topicDescription: Objectthis.nodeDescription
            });
          }
        }
      }, {
        key: "openConceptAndTopicModal",
        value: function openConceptAndTopicModal() {
          this.pluginService.showModalWindow("#generalSubjectEditModal");
        }
      }, {
        key: "closeConceptAndTopicModal",
        value: function closeConceptAndTopicModal() {
          this.pluginService.hideModalWindow("#generalSubjectEditModal");
        }
      }, {
        key: "closeWithOutSavingNode",
        value: function closeWithOutSavingNode() {
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
              localthisObject.closeConceptAndTopicModal();
              localthisObject.disableNodeOperations();
            }
          });
        }
      }, {
        key: "disableNodeOperations",
        value: function disableNodeOperations() {
          this.enableNodeOperation = false;
          this.nodeType = "";
          this.resetConceptAndTopicFormValues();
          var treeCallback = $('#buildTree').jstree(true);
          treeCallback.deselect_all();
        } //Create node method

      }, {
        key: "createNode",
        value: function createNode() {
          this.nodeOperationType = "create";
          this.modalTitleName = "Add new";
          this.openConceptAndTopicModal();
          this.resetConceptAndTopicFormValues();
          this.disableDropdown = false;
          this.enableModalOperation = false;
          this.nodeType = "";
        } //Edit node method

      }, {
        key: "editNode",
        value: function editNode() {
          this.nodeOperationType = "edit";
          this.modalTitleName = "Edit";
          this.disableDropdown = true;
          this.conceptAndTopicForm.patchValue({
            conceptName: this.nodeTitle,
            topicName: this.nodeTitle,
            conceptDescription: this.nodeDescription,
            topicDescription: this.nodeDescription
          });
          this.openConceptAndTopicModal();
          this.enableModalOperation = true;
        } //Save node method

      }, {
        key: "saveNode",
        value: function saveNode() {
          if (this.conceptAndTopicForm.valid) {
            this.validateNodeForm = false;
            var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, nodeID, data, curriculum, grade;
            position = 'last';
            parent = $('#buildTree').jstree('get_selected')[0];
            treeCallback = $('#buildTree').jstree(true);
            jsonArray = treeCallback.get_json('#', {
              no_state: true,
              no_li_attr: true,
              no_a_attr: true,
              flat: true
            });
            nodeID = treeCallback.get_selected()[0];
            nodeIndex = jsonArray.findIndex(function (item) {
              return item.id === nodeID;
            });

            if (this.nodeOperationType === "create") {
              if (this.nodeType === "concept") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                newNodeArray = {
                  "text": this.nodeTitle,
                  "type": "concept",
                  "state": {
                    "opened": true,
                    "selected": false
                  },
                  "data": {
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "orderNumber": 0,
                    "status": null,
                    "curriculumId": null,
                    "grade": null,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"],
                    "baseCurriculumId": 0,
                    "baseGrade": 0
                  }
                };
                jsonArray[nodeIndex].text = this.nodeTitle;
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', {
                  no_state: true,
                  no_li_attr: true,
                  no_a_attr: true,
                  flat: true
                });
              } else if (this.nodeType === "topic") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);

                if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                  curriculum = null;
                } else {
                  curriculum = this.selectedCurriculum.id;
                }

                if (this.selectedGrade === null || this.selectedGrade === undefined) {
                  grade = null;
                } else {
                  grade = this.selectedGrade.id;
                }

                newNodeArray = {
                  "text": this.nodeTitle,
                  "type": "topic",
                  "state": {
                    "opened": true,
                    "selected": false
                  },
                  "data": {
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "baseCurriculumId": curriculum,
                    "baseGrade": grade,
                    "orderNumber": 0,
                    "status": null,
                    "curriculumId": null,
                    "grade": null,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                  }
                };
                jsonArray[nodeIndex].text = this.nodeTitle;
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', {
                  no_state: true,
                  no_li_attr: true,
                  no_a_attr: true,
                  flat: true
                });
              }
            } else if (this.nodeOperationType === "edit") {
              this.nodeType = jsonArray[nodeIndex].type;

              if (this.nodeType === "concept") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                jsonArray[nodeIndex].text = this.nodeTitle;
                data = {
                  "name": this.nodeTitle,
                  "description": this.nodeDescription,
                  "orderNumber": 0,
                  "baseCurriculumId": 0,
                  "baseGrade": 0,
                  "status": null,
                  "curriculumId": null,
                  "grade": null,
                  "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
              } else if (this.nodeType === "topic") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);
                jsonArray[nodeIndex].text = this.nodeTitle;

                if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                  curriculum = null;
                } else {
                  curriculum = this.selectedCurriculum.id;
                }

                if (this.selectedGrade === null || this.selectedGrade === undefined) {
                  grade = null;
                } else {
                  grade = this.selectedGrade.id;
                }

                data = {
                  "name": this.nodeTitle,
                  "description": this.nodeDescription,
                  "baseCurriculumId": curriculum,
                  "baseGrade": grade,
                  "orderNumber": 0,
                  "status": null,
                  "curriculumId": null,
                  "grade": null,
                  "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
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
            this.closeConceptAndTopicModal();
            this.resetConceptAndTopicFormValues();
          }

          if (this.conceptAndTopicForm.invalid) {
            this.validateNodeForm = true;
            return;
          }
        } //Delete node method

      }, {
        key: "deleteNode",
        value: function deleteNode() {
          var nodeID, jsonArray, treeCallback;
          this.nodeOperationType = "delete";
          treeCallback = $("#buildTree").jstree();
          nodeID = treeCallback.get_selected()[0];
          treeCallback.delete_node($('#' + nodeID));
          jsonArray = $("#buildTree").jstree(true).get_json('#', {
            no_state: true,
            no_li_attr: true,
            no_a_attr: true,
            flat: true
          });
          this.updateJSONTreeWithOrderNum(jsonArray);
          this.enableNodeOperation = false;
          this.nodeType = "root";
        } //Generate JSON tree on drag and drop

      }, {
        key: "generateJSONTreeOnDragAndDrop",
        value: function generateJSONTreeOnDragAndDrop() {
          var localObj = this;
          $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
              var json = $("#buildTree").jstree(true).get_json('#', {
                no_state: true,
                no_li_attr: true,
                no_a_attr: true,
                flat: true
              });
              localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
          });
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
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this3 = this;

          result.subscribe(function (res) {
            return _this3.onSaveSuccess(res);
          }, function (ErrRes) {
            return _this3.onSaveError(ErrRes);
          });
        }
      }, {
        key: "saveAsDraft",
        value: function saveAsDraft() {
          this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DRAFT"];
          this.saveGeneralSubject();
        }
      }, {
        key: "saveAndPublish",
        value: function saveAndPublish() {
          this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIVE"];
          this.saveGeneralSubject();
        }
      }, {
        key: "saveGeneralSubject",
        value: function saveGeneralSubject() {
          this.subscribeToSaveResponse(this.generalSubjectService.saveGeneralSubject(this.createGeneralSubjectForm()));
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("General subject saved successfully", "success");
          this.previousUrl();
          this.resetConceptAndTopicFormValues();
          this.generalSubjectForm.reset();
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(res) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "createGeneralSubjectForm",
        value: function createGeneralSubjectForm() {
          return this.updatedJSONTree;
        } //update JSON array with order number 

      }, {
        key: "updateJSONTreeWithOrderNum",
        value: function updateJSONTreeWithOrderNum(json) {
          this.updatedJSONTree = [];
          this.updatedJSONTree = json;

          if (this.updatedJSONTree[0].type === "concept" || this.updatedJSONTree[0].type === "topic") {
            this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
            this.validateNode = true;
          } else if (this.updatedJSONTree[0].type === "root") {
            this.validateNode = false;
          }

          for (var i = 0; i < this.updatedJSONTree.length; i++) {
            this.updatedJSONTree[i].data.orderNumber = i; //Remove unwanted objects (for api call) from the JSON tree

            delete this.updatedJSONTree[i].state;
            delete this.updatedJSONTree[i].a_attr;
            delete this.updatedJSONTree[i].li_attr;

            if (this.updatedJSONTree[i].type !== "root" && this.updatedJSONTree[i].parent === "#") {
              this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
              this.validateNode = true;
            }
          }

          this.pluginService.jsTree("#afterChangeTree", this.updatedJSONTree, false);
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          if (this.updatedJSONTree.length > 1) {
            this.enableExpandNode = !this.enableExpandNode;

            if (this.enableExpandNode) {
              this.pluginService.openJsTreeAllNodes("#buildTree");
            } else {
              this.pluginService.closeJsTreeAllNodes("#buildTree");
            }
          }
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
          this.router.navigateByUrl('/general-subject');
        }
      }, {
        key: "formControl",
        get: function get() {
          return this.generalSubjectForm.controls;
        }
      }, {
        key: "modalFormControl",
        get: function get() {
          return this.conceptAndTopicForm.controls;
        }
      }]);

      return GeneralSubjectCreateComponent;
    }();

    GeneralSubjectCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    GeneralSubjectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-subject-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-create.component.html"))["default"],
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"], _general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], GeneralSubjectCreateComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject-delete.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/general-subject/general-subject-delete.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GeneralSubjectDeleteComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectDeleteComponent", function () {
      return GeneralSubjectDeleteComponent;
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


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");

    var GeneralSubjectDeleteComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectDeleteComponent(router, activatedRoute, eventManager, generalSubjectService, pluginService) {
        _classCallCheck(this, GeneralSubjectDeleteComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
      }

      _createClass(GeneralSubjectDeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activatedRoute.data.subscribe(function (_ref) {
            var generalSubject = _ref.generalSubject;

            _this4.deletegeneralSubject(generalSubject);
          });
        }
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(resp) {
          var _this5 = this;

          resp.subscribe(function (res) {
            return _this5.onDeleteSuccess(res);
          }, function (res) {
            return _this5.onDeleteError(res);
          });
        }
      }, {
        key: "deletegeneralSubject",
        value: function deletegeneralSubject(generalSubject) {
          var localthisObject = this;
          swal({
            title: "Are you sure to delete this general subject ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: true
          }, function (isConfirm) {
            if (isConfirm) {
              localthisObject.confirmDelete(generalSubject.id);
            } else {
              localthisObject.previousUrl();
            }
          });
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete(id) {
          this.subscribeToDeleteResponse(this.generalSubjectService["delete"](id));
        }
      }, {
        key: "previousUrl",
        value: function previousUrl() {
          this.router.navigateByUrl('/general-subject');
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(resp) {
          this.pluginService.alertMessage("General subject deleted successfully", "success");
          this.previousUrl();
        }
      }, {
        key: "onDeleteError",
        value: function onDeleteError(err) {
          this.pluginService.alertMessage("Could not delete general subject, please contact admin", "error");
        }
      }]);

      return GeneralSubjectDeleteComponent;
    }();

    GeneralSubjectDeleteComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]
      }];
    };

    GeneralSubjectDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "",
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"], _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]])], GeneralSubjectDeleteComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/general-subject/general-subject-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: GeneralSubjectDetailsComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectDetailsComponent", function () {
      return GeneralSubjectDetailsComponent;
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


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");

    var GeneralSubjectDetailsComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectDetailsComponent(pluginService, curriculumService, generalSubjectService, activatedRoute, router) {
        _classCallCheck(this, GeneralSubjectDetailsComponent);

        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.generalSubjectService = generalSubjectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.generalSubject = [];
        this.active = false;
      }

      _createClass(GeneralSubjectDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.pluginService.sideMenuToggle();
          this.activatedRoute.data.subscribe(function (_ref2) {
            var generalSubject = _ref2.generalSubject;
            _this6.generalSubject = generalSubject;

            _this6.updateGeneralSubjectValues(generalSubject);
          });
          this.getCurriculumList();
        }
      }, {
        key: "updateGeneralSubjectValues",
        value: function updateGeneralSubjectValues(generalSubject) {
          this.generalSubject = generalSubject;
          this.pluginService.jsTree("#treeView", this.generalSubject, false);
          this.subjectId = this.generalSubject[0].data.id;
        }
      }, {
        key: "showConceptAndTopicDetails",
        value: function showConceptAndTopicDetails() {
          var localThisObj = this;
          $('#treeView').on('changed.jstree', function (e, data) {
            var i, j, curriculumId;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "concept") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "topic") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                curriculumId = data.node.data.baseCurriculumId;

                if (curriculumId === null) {
                  localThisObj.curriculum = null;
                } else {
                  localThisObj.curriculum = localThisObj.curriculumList.find(function (item) {
                    return item.id === curriculumId;
                  }).acronym;
                }

                localThisObj.grade = data.node.data.baseGrade;
              } else {
                localThisObj.nodeType = "";
              }
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.showConceptAndTopicDetails();
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.active = !this.active;

          if (this.active) {
            this.pluginService.openJsTreeAllNodes("#treeView");
          } else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
          }
        }
      }, {
        key: "getCurriculumList",
        value: function getCurriculumList() {
          var _this7 = this;

          this.curriculumService.getStandardCurriculums().subscribe(function (res) {
            return _this7.assignResponseToList(res.body);
          }, function (res) {
            return _this7.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToList",
        value: function assignResponseToList(data) {
          this.curriculumList = data;
        }
      }, {
        key: "onError",
        value: function onError(message) {
          this.pluginService.alertMessage(message, "error");
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
          this.router.navigateByUrl('/general-subject');
        }
      }]);

      return GeneralSubjectDetailsComponent;
    }();

    GeneralSubjectDetailsComponent.ctorParameters = function () {
      return [{
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumService"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GeneralSubjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-subject-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-details.component.html"))["default"],
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumService"], _general_subject_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], GeneralSubjectDetailsComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject-manage.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/general-subject/general-subject-manage.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GeneralSubjectManageComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectManageComponent", function () {
      return GeneralSubjectManageComponent;
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


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");

    var GeneralSubjectManageComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectManageComponent(_router, generalSubjectService, eventManager, parseLinks, principalService, pluginService) {
        _classCallCheck(this, GeneralSubjectManageComponent);

        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.generalSubjects = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_6__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
          last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
      }

      _createClass(GeneralSubjectManageComponent, [{
        key: "reset",
        value: function reset() {
          this.page = 0;
          this.generalSubjects = [];
          this.loadGeneralSubjects();
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          this.page = page;
          this.loadGeneralSubjects();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.loadGeneralSubjects();
          this.principalService.identity().then(function (account) {
            _this8.currentAccount = account;
          });
          this.registerChangeInGeneralSubjects();
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
        key: "sort",
        value: function sort() {
          var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];

          if (this.predicate !== 'id') {
            result.push('id');
          }

          return result;
        }
      }, {
        key: "registerChangeInGeneralSubjects",
        value: function registerChangeInGeneralSubjects() {
          var _this9 = this;

          this.eventSubscriber = this.eventManager.subscribe('generalSubjectListModification', function (response) {
            return _this9.reset();
          });
        }
      }, {
        key: "loadGeneralSubjects",
        value: function loadGeneralSubjects() {
          var _this10 = this;

          this.generalSubjectService.query({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
          }).subscribe(function (res) {
            return _this10.paginateGeneralSubjects(res.body, res.headers);
          }, function (res) {
            return _this10.onError(res.message);
          });
        }
      }, {
        key: "paginateGeneralSubjects",
        value: function paginateGeneralSubjects(data, headers) {
          this.links = this.parseLinks.parse(headers.get('link'));
          this.totalItems = parseInt(headers.get('X-Total-Count'), 10);

          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              this.generalSubjects.push(data[i]);
            }
          } else {
            this.pluginService.alertMessage("No data found..!", "warning");
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }]);

      return GeneralSubjectManageComponent;
    }();

    GeneralSubjectManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_4__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]
      }];
    };

    GeneralSubjectManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-subject-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-manage.component.html"))["default"],
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_4__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]])], GeneralSubjectManageComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject-update-publish.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/general-subject/general-subject-update-publish.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: GeneralSubjectPublishComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectUpdatePublishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectPublishComponent", function () {
      return GeneralSubjectPublishComponent;
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


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");

    var GeneralSubjectPublishComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectPublishComponent(router, activatedRoute, generalSubjectService, pluginService) {
        _classCallCheck(this, GeneralSubjectPublishComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
      }

      _createClass(GeneralSubjectPublishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.activatedRoute.data.subscribe(function (_ref3) {
            var generalSubject = _ref3.generalSubject;

            _this11.publishGeneralSubject(generalSubject);
          });
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this12 = this;

          result.subscribe(function (res) {
            return _this12.onSaveSuccess(res);
          }, function (errRes) {
            return _this12.onSaveError(errRes);
          });
        }
      }, {
        key: "publishGeneralSubject",
        value: function publishGeneralSubject(generalSubject) {
          generalSubject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"];
          this.subscribeToSaveResponse(this.generalSubjectService.updateGeneralSubjectStatus(generalSubject));
          this.router.navigateByUrl('/general-subject');
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(resp) {
          if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["ACTIVE"]) {
            this.pluginService.alertMessage("General subject published successfully", "success");
          }
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not publish, please contact admin", "error");
        }
      }]);

      return GeneralSubjectPublishComponent;
    }();

    GeneralSubjectPublishComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }];
    };

    GeneralSubjectPublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "",
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])], GeneralSubjectPublishComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject-update-unpublish.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/general-subject/general-subject-update-unpublish.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: GeneralSubjectUnpublishComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectUpdateUnpublishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectUnpublishComponent", function () {
      return GeneralSubjectUnpublishComponent;
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


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");

    var GeneralSubjectUnpublishComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectUnpublishComponent(router, activatedRoute, generalSubjectService, pluginService) {
        _classCallCheck(this, GeneralSubjectUnpublishComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
      }

      _createClass(GeneralSubjectUnpublishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.activatedRoute.data.subscribe(function (_ref4) {
            var generalSubject = _ref4.generalSubject;

            _this13.unpublishGeneralSubject(generalSubject);
          });
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this14 = this;

          result.subscribe(function (res) {
            return _this14.onSaveSuccess(res);
          }, function (errRes) {
            return _this14.onSaveError(errRes);
          });
        }
      }, {
        key: "unpublishGeneralSubject",
        value: function unpublishGeneralSubject(generalSubject) {
          generalSubject.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"];
          this.subscribeToSaveResponse(this.generalSubjectService.updateGeneralSubjectStatus(generalSubject));
          this.router.navigateByUrl('/general-subject');
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(resp) {
          if (resp.body.status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["INACTIVE"]) {
            this.pluginService.alertMessage("General subject unpublished successfully", "success");
          }
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not unpublish, please contact admin", "error");
        }
      }]);

      return GeneralSubjectUnpublishComponent;
    }();

    GeneralSubjectUnpublishComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }];
    };

    GeneralSubjectUnpublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "",
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])], GeneralSubjectUnpublishComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject-update.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/general-subject/general-subject-update.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GeneralSubjectUpdateComponent */

  /***/
  function srcAppGeneralSubjectGeneralSubjectUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectUpdateComponent", function () {
      return GeneralSubjectUpdateComponent;
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


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");

    var GeneralSubjectUpdateComponent =
    /*#__PURE__*/
    function () {
      function GeneralSubjectUpdateComponent(router, formBuilder, pluginService, curriculumService, generalSubjectService, activatedRoute, commonService, changeDetectRef) {
        _classCallCheck(this, GeneralSubjectUpdateComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.curriculumService = curriculumService;
        this.generalSubjectService = generalSubjectService;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.generalSubject = [];
        this.updatedJSONTree = [];
        this.curriculumList = [];
        this.nodeTypes = [];
        this.grades = [];
        this.validateSubjectForm = true;
        this.validateNode = true;
        this.validateNodeForm = true;
        this.enableExpandNode = false;
      }

      _createClass(GeneralSubjectUpdateComponent, [{
        key: "getNodeTypeList",
        value: function getNodeTypeList() {
          var _this15 = this;

          this.commonService.getGeneralDataList().subscribe(function (nodeTypeData) {
            _this15.nodeTypes = nodeTypeData.generalSubject;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.pluginService.sideMenuToggle();
          this.createGeneralSubjectGroup();
          this.pluginService.stepper();
          this.activatedRoute.data.subscribe(function (_ref5) {
            var generalSubject = _ref5.generalSubject;

            _this16.updateGeneralSubjectValues(generalSubject);
          });
          this.getNodeTypeList();
          this.getCurriculumList();
          this.resetConceptAndTopicFormValues();
        }
      }, {
        key: "createGeneralSubjectGroup",
        value: function createGeneralSubjectGroup() {
          this.generalSubjectForm = this.formBuilder.group({
            generalSubjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
            generalSubjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
          });
          this.conceptAndTopicForm = this.formBuilder.group({
            conceptName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            conceptDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]),
            topicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            topicDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)])
          });
        }
      }, {
        key: "getCurriculumList",
        value: function getCurriculumList() {
          var _this17 = this;

          this.curriculumService.getStandardCurriculums().subscribe(function (res) {
            return _this17.assignResponseToList(res.body);
          }, function (res) {
            return _this17.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToList",
        value: function assignResponseToList(data) {
          this.curriculumList = data;
        }
      }, {
        key: "updateGeneralSubjectValues",
        value: function updateGeneralSubjectValues(generalSubject) {
          this.updateStatusForAllNodes(generalSubject);
          this.pluginService.jsTree("#beforeChangeTree", generalSubject, false);
          this.subjectName = generalSubject[0].data.name;
          this.subjectDescription = generalSubject[0].data.description;
          this.generalSubjectForm.setValue({
            generalSubjectName: this.subjectName,
            generalSubjectDescription: this.subjectDescription
          });
        }
      }, {
        key: "updateStatusForAllNodes",
        value: function updateStatusForAllNodes(generalSubject) {
          for (var i = 0; i < generalSubject.length; i++) {
            generalSubject[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["NOCHANGE"];
          }

          this.generalSubject = generalSubject;
          this.pluginService.jsTree("#buildTree", generalSubject, true);
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
        key: "validateGeneralSubjectForm",
        value: function validateGeneralSubjectForm() {
          this.subjectName = this.trimValue(this.generalSubjectForm.value.generalSubjectName);
          this.subjectDescription = this.trimValue(this.generalSubjectForm.value.generalSubjectDescription);

          if (this.subjectName === "" || this.subjectName === undefined || this.subjectName === null) {
            this.validateSubjectForm = true;
          } else {
            this.validateSubjectForm = false;
          }

          if (this.generalSubjectForm.invalid) {
            this.validateSubjectForm = true;
          }

          if (this.generalSubjectForm.valid) {
            this.validateSubjectForm = false;
          }
        }
      }, {
        key: "updateSubjectTree",
        value: function updateSubjectTree() {
          var name, description;

          if (this.generalSubjectForm.valid) {
            name = this.trimValue(this.generalSubjectForm.value.generalSubjectName);
            description = this.trimValue(this.generalSubjectForm.value.generalSubjectDescription);
            this.generalSubject[0].text = name;
            this.generalSubject[0].data.name = name;
            this.generalSubject[0].data.description = description;
            this.pluginService.jsTree("#buildTree", this.generalSubject, true);
          }

          if (this.generalSubjectForm.invalid) {
            return;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.nodeOnSelection();
          this.generateJSONTreeOnDragAndDrop();
        }
      }, {
        key: "onNodeTypeChange",
        value: function onNodeTypeChange() {
          var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(75)];

          if (this.selectedNodeType) {
            this.nodeType = this.selectedNodeType.name;

            if (this.nodeType === 'concept') {
              this.enableModalOperation = true;
              this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
              this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
            } else if (this.nodeType === 'topic') {
              this.enableModalOperation = true;
              this.conceptAndTopicForm.addControl('topicName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', validators));
              this.conceptAndTopicForm.addControl('conceptName', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
            }
          }
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
            gradesApplicableFrom = null;
            gradesApplicableTo = null;
          } else {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.grades = [];

          for (var i = min; i <= max; i++) {
            this.grades.push({
              "id": i,
              "name": i
            });
          }

          return this.grades;
        } //Reset all form values

      }, {
        key: "resetConceptAndTopicFormValues",
        value: function resetConceptAndTopicFormValues() {
          this.conceptAndTopicForm.reset();
          this.selectedNodeType = null;
          this.selectedCurriculum = null;
          this.selectedGrade = null;
        } //Tree selection and change method call

      }, {
        key: "nodeOnSelection",
        value: function nodeOnSelection() {
          var localThisObj = this;
          $('#buildTree').on('changed.jstree', function (e, data) {
            var i, j;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.enableNodeOperation = true;
                localThisObj.enableEditNodeOperation = false;
              } else if (localThisObj.nodeType === "concept") {
                localThisObj.enableEditNodeOperation = true;
                localThisObj.enableNodeOperation = true;
                localThisObj.nodeId = data.node.data.id;
                localThisObj.nodeTitle = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.conceptAndTopicFormSetValues(localThisObj);
              } else if (localThisObj.nodeType === "topic") {
                localThisObj.enableNodeOperation = true;
                localThisObj.enableEditNodeOperation = true;
                localThisObj.nodeId = data.node.data.id;
                localThisObj.nodeTitle = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.curriculumId = data.node.data.baseCurriculumId;

                if (localThisObj.curriculumId === null) {
                  localThisObj.selectedCurriculum = null;
                  localThisObj.curriculum = null;
                } else {
                  localThisObj.curriculum = localThisObj.curriculumList.find(function (item) {
                    return item.id === localThisObj.curriculumId;
                  }).acronym;
                }

                localThisObj.grade = data.node.data.baseGrade;
                localThisObj.conceptAndTopicFormSetValues(localThisObj);
              } else {
                localThisObj.enableNodeOperation = false;
                localThisObj.enableEditNodeOperation = false;
              }
            }
          });
        } //Concept and topic details form setvalues method

      }, {
        key: "conceptAndTopicFormSetValues",
        value: function conceptAndTopicFormSetValues(Objectthis) {
          var nodeTypeIndex, curriculumIndex, gradeIndex, gradesApplicableFrom, gradesApplicableTo;
          nodeTypeIndex = this.nodeTypes.findIndex(function (item) {
            return item.name === Objectthis.nodeType;
          });
          this.selectedNodeType = this.nodeTypes[nodeTypeIndex];

          if (Objectthis.nodeType === "concept") {
            this.conceptAndTopicForm.setValue({
              conceptName: Objectthis.nodeTitle,
              conceptDescription: Objectthis.nodeDescription,
              topicName: "",
              topicDescription: ""
            });
          } else if (Objectthis.nodeType === "topic") {
            if (Objectthis.curriculum === null || Objectthis.curriculum === undefined) {
              this.selectedCurriculum = null;
              this.selectedGrade = null;
            } else {
              curriculumIndex = this.curriculumList.findIndex(function (item) {
                return item.acronym === Objectthis.curriculum;
              });
              this.selectedCurriculum = this.curriculumList[curriculumIndex];
              gradesApplicableFrom = this.curriculumList[curriculumIndex].gradesApplicableFrom;
              gradesApplicableTo = this.curriculumList[curriculumIndex].gradesApplicableTo;
              this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
              gradeIndex = this.grades.findIndex(function (item) {
                return item.name === Objectthis.grade;
              });
              this.selectedGrade = this.grades[gradeIndex];
            }

            this.conceptAndTopicForm.setValue({
              conceptName: "",
              conceptDescription: "",
              topicName: Objectthis.nodeTitle,
              topicDescription: Objectthis.nodeDescription
            });
          }
        }
      }, {
        key: "validateConceptAndTopicForm",
        value: function validateConceptAndTopicForm() {
          var conceptName, topicName;
          conceptName = this.trimValue(this.conceptAndTopicForm.value.conceptName);
          topicName = this.trimValue(this.conceptAndTopicForm.value.topicName);

          if (this.nodeType === 'concept') {
            if (conceptName === "" || conceptName === undefined || conceptName === null) {
              this.validateNodeForm = true;
            } else {
              this.validateNodeForm = false;
            }
          } else if (this.nodeType === 'topic') {
            if (topicName === "" || topicName === undefined || topicName === null) {
              this.validateNodeForm = true;
            } else {
              this.validateNodeForm = false;
            }
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          //General Subject Form Validation
          this.validateGeneralSubjectForm(); //Concept and topic form validation

          this.validateConceptAndTopicForm();
          this.changeDetectRef.detectChanges();
        } //Create node method

      }, {
        key: "createNode",
        value: function createNode() {
          this.nodeOperationType = "create";
          this.modalTitleName = "Add new";
          this.openConceptAndTopicModal();
          this.resetConceptAndTopicFormValues();
          this.disableDropdown = false;
          this.enableModalOperation = false;
          this.nodeType = "";
        } //Edit node method

      }, {
        key: "editNode",
        value: function editNode() {
          this.nodeOperationType = "edit";
          this.modalTitleName = "Edit";
          this.disableDropdown = true;
          this.conceptAndTopicForm.patchValue({
            conceptName: this.nodeTitle,
            topicName: this.nodeTitle,
            conceptDescription: this.nodeDescription,
            topicDescription: this.nodeDescription
          });
          this.enableModalOperation = true;
          this.openConceptAndTopicModal();
        }
      }, {
        key: "openConceptAndTopicModal",
        value: function openConceptAndTopicModal() {
          this.pluginService.showModalWindow("#generalSubjectModal");
        }
      }, {
        key: "closeConceptAndTopicModal",
        value: function closeConceptAndTopicModal() {
          this.pluginService.hideModalWindow("#generalSubjectModal");
        }
      }, {
        key: "closeWithOutSavingNode",
        value: function closeWithOutSavingNode() {
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
              localthisObject.closeConceptAndTopicModal();
              localthisObject.disableNodeOperations();
            }
          });
        }
      }, {
        key: "disableNodeOperations",
        value: function disableNodeOperations() {
          this.enableNodeOperation = false;
          this.nodeType = "";
          this.resetConceptAndTopicFormValues();
          var treeCallback = $('#buildTree').jstree(true);
          treeCallback.deselect_all();
        } //Save node method

      }, {
        key: "saveNode",
        value: function saveNode() {
          if (this.conceptAndTopicForm.valid) {
            this.validateNodeForm = false;
            var newNodeArray, position, parent, treeCallback, jsonArray, nodeIndex, arrayDetails, selectedNodeID, data, curriculum, grade;
            position = 'last';
            parent = $('#buildTree').jstree('get_selected')[0];
            treeCallback = $('#buildTree').jstree(true);
            jsonArray = treeCallback.get_json('#', {
              no_state: true,
              no_li_attr: true,
              no_a_attr: true,
              flat: true
            });
            selectedNodeID = treeCallback.get_selected()[0];
            nodeIndex = jsonArray.findIndex(function (item) {
              return item.id === selectedNodeID;
            });

            if (this.nodeOperationType === "create") {
              if (this.nodeType === "concept") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                newNodeArray = {
                  "text": this.nodeTitle,
                  "type": "concept",
                  "state": {
                    "opened": true,
                    "selected": false
                  },
                  "data": {
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "orderNumber": null,
                    "status": null,
                    "curriculumId": null,
                    "baseCurriculumId": null,
                    "baseGrade": null,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                  }
                };
                jsonArray[nodeIndex].text = this.nodeTitle;
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', {
                  no_state: true,
                  no_li_attr: true,
                  no_a_attr: true,
                  flat: true
                });
              } else if (this.nodeType === "topic") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);

                if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                  curriculum = null;
                } else {
                  curriculum = this.selectedCurriculum.id;
                }

                if (this.selectedGrade === null || this.selectedGrade === undefined) {
                  grade = null;
                } else {
                  grade = this.selectedGrade.id;
                }

                newNodeArray = {
                  "text": this.nodeTitle,
                  "type": "topic",
                  "state": {
                    "opened": true,
                    "selected": false
                  },
                  "data": {
                    "name": this.nodeTitle,
                    "description": this.nodeDescription,
                    "baseCurriculumId": curriculum,
                    "baseGrade": grade,
                    "orderNumber": null,
                    "status": null,
                    "curriculumId": null,
                    "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"]
                  }
                };
                jsonArray[nodeIndex].text = this.nodeTitle;
                $('#buildTree').jstree().create_node(parent, newNodeArray, position);
                jsonArray = treeCallback.get_json('#', {
                  no_state: true,
                  no_li_attr: true,
                  no_a_attr: true,
                  flat: true
                });
              }

              this.validateNode = false;
            }

            if (this.nodeOperationType === "edit") {
              this.validateNode = false;
              this.nodeType = jsonArray[nodeIndex].type;

              if (this.nodeType === "concept") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.conceptName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.conceptDescription);
                jsonArray[nodeIndex].text = this.nodeTitle;
                data = {
                  "id": this.nodeId,
                  "name": this.nodeTitle,
                  "description": this.nodeDescription,
                  "orderNumber": null,
                  "baseCurriculumId": null,
                  "baseGrade": null,
                  "status": null,
                  "curriculumId": null,
                  "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["EDITED"]
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
              } else if (this.nodeType === "topic") {
                this.nodeTitle = this.trimValue(this.conceptAndTopicForm.value.topicName);
                this.nodeDescription = this.trimValue(this.conceptAndTopicForm.value.topicDescription);
                jsonArray[nodeIndex].text = this.nodeTitle;

                if (this.selectedCurriculum === null || this.selectedCurriculum === undefined) {
                  curriculum = null;
                } else {
                  curriculum = this.selectedCurriculum.id;
                }

                if (this.selectedGrade === null || this.selectedGrade === undefined) {
                  grade = null;
                } else {
                  grade = this.selectedGrade.id;
                }

                data = {
                  "id": this.nodeId,
                  "name": this.nodeTitle,
                  "description": this.nodeDescription,
                  "baseCurriculumId": curriculum,
                  "baseGrade": grade,
                  "orderNumber": null,
                  "status": null,
                  "curriculumId": null,
                  "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["EDITED"]
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
              }
            } else if (this.nodeOperationType === "delete") {
              this.validateNode = false;
              this.nodeType = jsonArray[nodeIndex].type;

              if (this.nodeType === "concept") {
                data = {
                  "id": this.nodeId,
                  "name": this.nodeTitle,
                  "description": this.nodeDescription,
                  "orderNumber": null,
                  "baseCurriculumId": null,
                  "baseGrade": null,
                  "status": null,
                  "curriculumId": null,
                  "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
                arrayDetails.type = 'concept';
                jsonArray[nodeIndex].icon = "fa fa-trash"; //Update a child node status

                if (treeCallback.is_parent(selectedNodeID) === true) {
                  this.getChildrenDOM(selectedNodeID, jsonArray);
                }
              } else {
                data = {
                  "id": this.nodeId,
                  "name": this.nodeTitle,
                  "description": this.nodeDescription,
                  "orderNumber": null,
                  "baseCurriculumId": this.curriculumId,
                  "baseGrade": this.grade,
                  "status": null,
                  "curriculumId": null,
                  "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
                };
                arrayDetails = jsonArray[nodeIndex];
                arrayDetails.data = data;
                arrayDetails.type = 'topic';
                jsonArray[nodeIndex].icon = "fa fa-trash";
              }
            } else {}

            this.pluginService.jsTree("#buildTree", jsonArray, true);
            this.changeNodeStatus(jsonArray);
            treeCallback.deselect_all();
            this.nodeType = "";
            this.enableNodeOperation = false;
            this.closeConceptAndTopicModal();
            this.resetConceptAndTopicFormValues();
          }

          if (this.conceptAndTopicForm.invalid) {
            this.validateNodeForm = true;
            return;
          }
        } //Delete node method

      }, {
        key: "deleteNode",
        value: function deleteNode() {
          this.nodeOperationType = "delete";
          this.saveNode();
        } //Get children DOM

      }, {
        key: "getChildrenDOM",
        value: function getChildrenDOM(selectedNode, jsonArray) {
          var treeCallBack,
              childrenDOM,
              childDOM,
              lastChildDOM,
              subChildDOM,
              i,
              j,
              k,
              l,
              childrenIDs1 = [],
              childrenIDs2 = [],
              childrenIDs3 = [],
              childrenIDs4 = [],
              childrenIDs = [];
          treeCallBack = $("#buildTree").jstree(true);
          childrenDOM = treeCallBack.get_children_dom(selectedNode);

          for (i = 0; i < childrenDOM.length; i++) {
            childrenIDs1.push({
              "id": childrenDOM[i].id
            });

            if (treeCallBack.is_parent(childrenIDs1[i]) === true) {
              childDOM = treeCallBack.get_children_dom(childrenIDs1[i]);

              for (j = 0; j < childDOM.length; j++) {
                childrenIDs2.push({
                  "id": childDOM[j].id
                });

                if (treeCallBack.is_parent(childrenIDs2[j]) === true) {
                  subChildDOM = treeCallBack.get_children_dom(childrenIDs2[j]);

                  for (k = 0; k < subChildDOM.length; k++) {
                    childrenIDs3.push({
                      "id": subChildDOM[k].id
                    });

                    if (treeCallBack.is_parent(childrenIDs3[k]) === true) {
                      lastChildDOM = treeCallBack.get_children_dom(childrenIDs3[k]);

                      for (l = 0; l < lastChildDOM.length; l++) {
                        childrenIDs4.push({
                          "id": lastChildDOM[l].id
                        });
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
        } //Update delete status

      }, {
        key: "updateDeleteStatus",
        value: function updateDeleteStatus(childrenIDs, jsonArray) {
          var k, nodeIndex, nodeType, data;

          for (k = 0; k < childrenIDs.length; k++) {
            nodeIndex = jsonArray.findIndex(function (item) {
              return item.id === childrenIDs[k].id;
            });
            nodeType = jsonArray[nodeIndex].type;

            if (nodeType === "concept") {
              data = {
                "id": this.nodeId,
                "name": this.nodeTitle,
                "description": this.nodeDescription,
                "orderNumber": null,
                "baseCurriculumId": null,
                "baseGrade": null,
                "status": null,
                "curriculumId": null,
                "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
              };
              jsonArray[nodeIndex].data = data;
              jsonArray[nodeIndex].type = 'concept';
              jsonArray[nodeIndex].icon = "fa fa-trash";
            } else {
              data = {
                "id": this.nodeId,
                "name": this.nodeTitle,
                "description": this.nodeDescription,
                "orderNumber": null,
                "baseCurriculumId": this.curriculumId,
                "baseGrade": this.grade,
                "status": null,
                "curriculumId": null,
                "editStatus": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]
              };
              jsonArray[nodeIndex].data = data;
              jsonArray[nodeIndex].type = 'topic';
              jsonArray[nodeIndex].icon = "fa fa-trash";
            }
          }
        } //Generate JSON tree on drag and drop

      }, {
        key: "generateJSONTreeOnDragAndDrop",
        value: function generateJSONTreeOnDragAndDrop() {
          var localObj = this,
              json = [];
          $(document).on('dnd_stop.vakata', function (e, data) {
            setTimeout(function () {
              var json = $("#buildTree").jstree(true).get_json('#', {
                no_state: true,
                no_li_attr: true,
                no_a_attr: true,
                flat: true
              });
              localObj.updateJSONTreeWithOrderNum(json);
            }, 100);
          });
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this18 = this;

          result.subscribe(function (res) {
            return _this18.onSaveSuccess(res);
          }, function (errRes) {
            return _this18.onSaveError(errRes);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("General subject saved successfully", "success");
          this.previousUrl();
          this.resetConceptAndTopicFormValues();
          this.generalSubjectForm.reset();
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "saveAsDraft",
        value: function saveAsDraft() {
          this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DRAFT"];
          this.saveGeneralSubject();
          this.resetConceptAndTopicFormValues();
        }
      }, {
        key: "saveAndPublish",
        value: function saveAndPublish() {
          this.updatedJSONTree[0].data.status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIVE"];
          this.saveGeneralSubject();
          this.resetConceptAndTopicFormValues();
        }
      }, {
        key: "saveGeneralSubject",
        value: function saveGeneralSubject() {
          this.subscribeToSaveResponse(this.generalSubjectService.saveGeneralSubject(this.createGeneralSubjectForm()));
        }
      }, {
        key: "createGeneralSubjectForm",
        value: function createGeneralSubjectForm() {
          return this.updatedJSONTree;
        } //update JSON array with order number 

      }, {
        key: "updateJSONTreeWithOrderNum",
        value: function updateJSONTreeWithOrderNum(json) {
          this.updatedJSONTree = [];
          this.updatedJSONTree = json;

          if (this.updatedJSONTree[0].type === "concept" || this.updatedJSONTree[0].type === "topic") {
            this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
            this.validateNode = true;
          } else if (this.updatedJSONTree[0].type === "root") {
            this.validateNode = false;
          }

          for (var i = 0; i < this.updatedJSONTree.length; i++) {
            this.updatedJSONTree[i].data.orderNumber = i; //Remove unwanted objects (for api call) from the JSON tree

            delete this.updatedJSONTree[i].state;
            delete this.updatedJSONTree[i].a_attr;
            delete this.updatedJSONTree[i].li_attr;

            if (this.updatedJSONTree[i].type !== "root" && this.updatedJSONTree[i].parent === "#") {
              this.pluginService.alertMessage("More than one root element is not allowed, please remove the additional root element and proceed", "error");
              this.validateNode = true;
            }
          }

          this.pluginService.jsTree("#afterChangeTree", this.updatedJSONTree, false);
        } //If new node is created and edited , status will be created only 
        //If new node is created and deleted , remove an element from the updated array

      }, {
        key: "changeNodeStatus",
        value: function changeNodeStatus(json) {
          var selectedNodeID, treeCallback, updatedJson;

          for (var i = 0; i < json.length; i++) {
            if (json[i].data.id === undefined) {
              if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["EDITED"]) {
                json[i].data.editStatus = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["CREATED"];
              } else if (json[i].data.editStatus === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_6__["DELETED"]) {
                treeCallback = $('#buildTree').jstree(true);
                selectedNodeID = treeCallback.get_selected()[0];
                treeCallback.delete_node($('#' + selectedNodeID));
                updatedJson = $("#buildTree").jstree(true).get_json('#', {
                  no_state: true,
                  no_li_attr: true,
                  no_a_attr: true,
                  flat: true
                });
                json = updatedJson;
              }
            }
          }

          this.updateJSONTreeWithOrderNum(json);
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.enableExpandNode = !this.enableExpandNode;

          if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#buildTree");
          } else {
            this.pluginService.closeJsTreeAllNodes("#buildTree");
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "previousUrl",
        value: function previousUrl() {
          this.router.navigateByUrl('/general-subject');
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
        key: "formControl",
        get: function get() {
          return this.generalSubjectForm.controls;
        }
      }, {
        key: "modalFormControl",
        get: function get() {
          return this.conceptAndTopicForm.controls;
        }
      }]);

      return GeneralSubjectUpdateComponent;
    }();

    GeneralSubjectUpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"]
      }, {
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    GeneralSubjectUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-subject-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-subject/general-subject-update.component.html"))["default"],
      providers: [_general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"], _general_subject_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], GeneralSubjectUpdateComponent);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/general-subject/general-subject.module.ts ***!
    \***********************************************************/

  /*! exports provided: GeneralSubjectsModule */

  /***/
  function srcAppGeneralSubjectGeneralSubjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectsModule", function () {
      return GeneralSubjectsModule;
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


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! . */
    "./src/app/general-subject/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _general_subject_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./general-subject-create.component */
    "./src/app/general-subject/general-subject-create.component.ts");
    /* harmony import */


    var _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./general-subject-update-publish.component */
    "./src/app/general-subject/general-subject-update-publish.component.ts");
    /* harmony import */


    var _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./general-subject-update-unpublish.component */
    "./src/app/general-subject/general-subject-update-unpublish.component.ts");
    /* harmony import */


    var _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./general-subject-delete.component */
    "./src/app/general-subject/general-subject-delete.component.ts");

    var GeneralSubjectsModule = function GeneralSubjectsModule() {
      _classCallCheck(this, GeneralSubjectsModule);
    };

    GeneralSubjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(___WEBPACK_IMPORTED_MODULE_7__["generalSubjectRoute"]), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      declarations: [___WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectManageComponent"], _general_subject_create_component__WEBPACK_IMPORTED_MODULE_9__["GeneralSubjectCreateComponent"], ___WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectUpdateComponent"], ___WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectDetailsComponent"], _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_12__["GeneralSubjectDeleteComponent"], _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectPublishComponent"], _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_11__["GeneralSubjectUnpublishComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], GeneralSubjectsModule);
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject.route.ts":
  /*!**********************************************************!*\
    !*** ./src/app/general-subject/general-subject.route.ts ***!
    \**********************************************************/

  /*! exports provided: GeneralSubjectResolve, GeneralSubjectWithTreeResolve, generalSubjectRoute */

  /***/
  function srcAppGeneralSubjectGeneralSubjectRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectResolve", function () {
      return GeneralSubjectResolve;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectWithTreeResolve", function () {
      return GeneralSubjectWithTreeResolve;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generalSubjectRoute", function () {
      return generalSubjectRoute;
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


    var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _general_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./general-subject-manage.component */
    "./src/app/general-subject/general-subject-manage.component.ts");
    /* harmony import */


    var _general_subject_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./general-subject-details.component */
    "./src/app/general-subject/general-subject-details.component.ts");
    /* harmony import */


    var _general_subject_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./general-subject-update.component */
    "./src/app/general-subject/general-subject-update.component.ts");
    /* harmony import */


    var _shared_model_content_general_subject_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/model/content/general-subject.model */
    "./src/app/shared/model/content/general-subject.model.ts");
    /* harmony import */


    var _general_subject_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./general-subject-create.component */
    "./src/app/general-subject/general-subject-create.component.ts");
    /* harmony import */


    var _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./general-subject-update-publish.component */
    "./src/app/general-subject/general-subject-update-publish.component.ts");
    /* harmony import */


    var _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./general-subject-update-unpublish.component */
    "./src/app/general-subject/general-subject-update-unpublish.component.ts");
    /* harmony import */


    var _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./general-subject-delete.component */
    "./src/app/general-subject/general-subject-delete.component.ts");

    var GeneralSubjectResolve =
    /*#__PURE__*/
    function () {
      function GeneralSubjectResolve(service) {
        _classCallCheck(this, GeneralSubjectResolve);

        this.service = service;
      }

      _createClass(GeneralSubjectResolve, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.params['id'] ? route.params['id'] : null;

          if (id) {
            return this.service.getSubjectBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) {
              return response.ok;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (generalSubject) {
              return generalSubject.body;
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_general_subject_model__WEBPACK_IMPORTED_MODULE_9__["GeneralSubject"]());
        }
      }]);

      return GeneralSubjectResolve;
    }();

    GeneralSubjectResolve.ctorParameters = function () {
      return [{
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]
      }];
    };

    GeneralSubjectResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]])], GeneralSubjectResolve);

    var GeneralSubjectWithTreeResolve =
    /*#__PURE__*/
    function () {
      function GeneralSubjectWithTreeResolve(service) {
        _classCallCheck(this, GeneralSubjectWithTreeResolve);

        this.service = service;
      }

      _createClass(GeneralSubjectWithTreeResolve, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.params['id'] ? route.params['id'] : null;

          if (id) {
            return this.service.getSubjectTreeBySubjectId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (response) {
              return response.ok;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (generalSubject) {
              return generalSubject.body;
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _shared_model_content_general_subject_model__WEBPACK_IMPORTED_MODULE_9__["GeneralSubject"]());
        }
      }]);

      return GeneralSubjectWithTreeResolve;
    }();

    GeneralSubjectWithTreeResolve.ctorParameters = function () {
      return [{
        type: _general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]
      }];
    };

    GeneralSubjectWithTreeResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_general_subject_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectService"]])], GeneralSubjectWithTreeResolve);
    var generalSubjectRoute = [{
      path: '',
      component: _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage general subjects'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: 'create',
      component: _general_subject_create_component__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectCreateComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Create new general subject'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/edit',
      component: _general_subject_update_component__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectUpdateComponent"],
      resolve: {
        generalSubject: GeneralSubjectWithTreeResolve
      },
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Edit general subject',
        action: 'edit'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/view',
      component: _general_subject_details_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectDetailsComponent"],
      resolve: {
        generalSubject: GeneralSubjectWithTreeResolve
      },
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'View general subject'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/delete',
      component: _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_13__["GeneralSubjectDeleteComponent"],
      resolve: {
        generalSubject: GeneralSubjectResolve
      },
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Delete general subject'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/publish',
      component: _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_11__["GeneralSubjectPublishComponent"],
      resolve: {
        generalSubject: GeneralSubjectResolve
      },
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Publish general subject',
        action: 'publish'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/unpublish',
      component: _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_12__["GeneralSubjectUnpublishComponent"],
      resolve: {
        generalSubject: GeneralSubjectResolve
      },
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Unpublish general subject',
        action: 'unpublish'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }];
    /***/
  },

  /***/
  "./src/app/general-subject/general-subject.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/general-subject/general-subject.service.ts ***!
    \************************************************************/

  /*! exports provided: GeneralSubjectService */

  /***/
  function srcAppGeneralSubjectGeneralSubjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectService", function () {
      return GeneralSubjectService;
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

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var GeneralSubjectService =
    /*#__PURE__*/
    function () {
      function GeneralSubjectService(http) {
        _classCallCheck(this, GeneralSubjectService);

        this.http = http;
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
        this.curriculumResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula';
        this.generalSubjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-subjects';
        this.generalSubjectSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-subjects/search';
        this.generalSubjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-subjects/subject-tree';
      }

      _createClass(GeneralSubjectService, [{
        key: "getSubjectBySubjectId",
        value: function getSubjectBySubjectId(id) {
          return this.http.get("".concat(this.generalSubjectResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getSubjectSearchList",
        value: function getSubjectSearchList() {
          var reqJSON = {
            "status": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"]
          };
          return this.http.post(this.generalSubjectSearchResourceUrl, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "getSubjectTreeBySubjectId",
        value: function getSubjectTreeBySubjectId(id) {
          return this.http.get("".concat(this.generalSubjectResourceUrlWithTree, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "updateGeneralSubjectStatus",
        value: function updateGeneralSubjectStatus(generalSubject) {
          return this.http.put(this.generalSubjectResourceUrl, generalSubject, {
            observe: 'response'
          });
        }
      }, {
        key: "query",
        value: function query(req) {
          var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
          return this.http.get(this.generalSubjectResourceUrl, {
            params: options,
            observe: 'response'
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.generalSubjectResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "saveGeneralSubject",
        value: function saveGeneralSubject(generalSubject) {
          return this.http.post(this.generalSubjectResourceUrlWithTree, generalSubject, {
            headers: headers,
            observe: 'response'
          });
        }
      }]);

      return GeneralSubjectService;
    }();

    GeneralSubjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GeneralSubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], GeneralSubjectService);
    /***/
  },

  /***/
  "./src/app/general-subject/index.ts":
  /*!******************************************!*\
    !*** ./src/app/general-subject/index.ts ***!
    \******************************************/

  /*! exports provided: GeneralSubjectCreateComponent, GeneralSubjectDeleteComponent, GeneralSubjectPublishComponent, GeneralSubjectUnpublishComponent, GeneralSubjectManageComponent, GeneralSubjectUpdateComponent, GeneralSubjectDetailsComponent, GeneralSubjectResolve, GeneralSubjectWithTreeResolve, generalSubjectRoute */

  /***/
  function srcAppGeneralSubjectIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./general-subject-manage.component */
    "./src/app/general-subject/general-subject-manage.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectManageComponent", function () {
      return _general_subject_manage_component__WEBPACK_IMPORTED_MODULE_1__["GeneralSubjectManageComponent"];
    });
    /* harmony import */


    var _general_subject_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./general-subject-update.component */
    "./src/app/general-subject/general-subject-update.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectUpdateComponent", function () {
      return _general_subject_update_component__WEBPACK_IMPORTED_MODULE_2__["GeneralSubjectUpdateComponent"];
    });
    /* harmony import */


    var _general_subject_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-subject-create.component */
    "./src/app/general-subject/general-subject-create.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectCreateComponent", function () {
      return _general_subject_create_component__WEBPACK_IMPORTED_MODULE_3__["GeneralSubjectCreateComponent"];
    });
    /* harmony import */


    var _general_subject_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-subject-details.component */
    "./src/app/general-subject/general-subject-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectDetailsComponent", function () {
      return _general_subject_details_component__WEBPACK_IMPORTED_MODULE_4__["GeneralSubjectDetailsComponent"];
    });
    /* harmony import */


    var _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-subject-delete.component */
    "./src/app/general-subject/general-subject-delete.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectDeleteComponent", function () {
      return _general_subject_delete_component__WEBPACK_IMPORTED_MODULE_5__["GeneralSubjectDeleteComponent"];
    });
    /* harmony import */


    var _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./general-subject-update-publish.component */
    "./src/app/general-subject/general-subject-update-publish.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectPublishComponent", function () {
      return _general_subject_update_publish_component__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectPublishComponent"];
    });
    /* harmony import */


    var _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./general-subject-update-unpublish.component */
    "./src/app/general-subject/general-subject-update-unpublish.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectUnpublishComponent", function () {
      return _general_subject_update_unpublish_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSubjectUnpublishComponent"];
    });
    /* harmony import */


    var _general_subject_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./general-subject.route */
    "./src/app/general-subject/general-subject.route.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectResolve", function () {
      return _general_subject_route__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectResolve"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubjectWithTreeResolve", function () {
      return _general_subject_route__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectWithTreeResolve"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "generalSubjectRoute", function () {
      return _general_subject_route__WEBPACK_IMPORTED_MODULE_8__["generalSubjectRoute"];
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
  "./src/app/shared/model/content/general-subject.model.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/model/content/general-subject.model.ts ***!
    \***************************************************************/

  /*! exports provided: GeneralSubject */

  /***/
  function srcAppSharedModelContentGeneralSubjectModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralSubject", function () {
      return GeneralSubject;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GeneralSubject = function GeneralSubject(id, title, description, status, data, icon, parent, disabled, text, type, state, a_attr, li_attr, curriculumID, name, acronym, gradesApplicableFrom, gradesApplicableTo, grades) {
      _classCallCheck(this, GeneralSubject);

      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
      this.data = data;
      this.icon = icon;
      this.parent = parent;
      this.disabled = disabled;
      this.text = text;
      this.type = type;
      this.state = state;
      this.a_attr = a_attr;
      this.li_attr = li_attr;
      this.curriculumID = curriculumID;
      this.name = name;
      this.acronym = acronym;
      this.gradesApplicableFrom = gradesApplicableFrom;
      this.gradesApplicableTo = gradesApplicableTo;
      this.grades = grades;
    };
    /***/

  }
}]);
//# sourceMappingURL=general-subject-general-subject-module-es5.js.map