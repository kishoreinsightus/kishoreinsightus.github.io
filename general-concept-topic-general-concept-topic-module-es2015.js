(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-concept-topic-general-concept-topic-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-content-manage.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-content-manage.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-2\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div id=\"treeView\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-3 py-3\">\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'concept'\">\r\n            <p><b>Concept name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Concept description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'topic'\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\r\n                <div>\r\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\r\n                </div>\r\n                <div class=\"d-flex align-items-start justify-content-end\">\r\n                    <div class=\"btn btn-primary text-white mb-2\" (click)=\"addContent()\">\r\n                        <i class=\"fa fa-plus-circle mr-2\"></i> Add content\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"d-flex flex-wrap w-100\" *ngIf=\"topicContents\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Order number</th>\r\n                            <th>Title</th>\r\n                            <th>Active Web URL</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody id=\"dragBody\">\r\n                        <tr *ngFor=\"let topiccontent of topicContents;trackBy: trackId;let topicIndex = index\">\r\n                            <td data-column=\"Select\" title=\"{{topiccontent.id}}\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" id=\"{{topiccontent.id}}\"\r\n                                        (change)=\"checkSelectedContents($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{topiccontent.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Order number\" class=\"index\">\r\n                                {{topiccontent.orderNumber}}\r\n                            </td>\r\n                            <td data-column=\"Title\">\r\n                                {{topiccontent.content.title}}\r\n                            </td>\r\n                            <td data-column=\"Active Web URL\">\r\n                                <a class=\"btn btn-link text-ellipsis\" href=\"{{topiccontent.content.webUrl}}\"\r\n                                    target=\"_blank\">\r\n                                    {{topiccontent.content.webUrl}}\r\n                                </a>\r\n                            </td>\r\n                            <td data-column=\"Actions\">\r\n                                <div>\r\n                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                        (click)=\"viewContent(topiccontent.content.id)\">\r\n                                        <i class=\"fa fa-eye\"></i>\r\n                                    </a>\r\n                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\r\n                                        (click)=\"editContent(topiccontent.content.id)\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"topicContents.length > 0\">\r\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopicContent()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"deleteTopicContents()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\r\n                        (click)=\"updateTopicContentsWithOrderNumber()\">\r\n                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"generalTopicContent\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\" [formGroup]=\"topicContentForm\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} content\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeTopicContentModalWithOutSaving()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Title\r\n                        </label>\r\n                        <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\r\n                            class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\r\n                            inputRestriction=\"alphabetsNumbersWithMinus\" />\r\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            Allowed characters - Alphabets, Numbers and One special character (-)\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group mb-2\">\r\n                        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span>\r\n                        </label>\r\n                        <textarea class=\"form-control description-form\"\r\n                            placeholder=\"Enter description (min length: 3 and max length: 250)\"\r\n                            formControlName=\"contentDescription\"></textarea>\r\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Content type\r\n                    </label>\r\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\r\n                        [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"form-group mb-2\" *ngIf=\"selectedContentType\">\r\n                    <label class=\"col-form-label\">Content source\r\n                    </label>\r\n                    <ng-select [items]=\"contentSource\" [disabled]=\"disableDropdown\"\r\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select content source\"\r\n                        [(ngModel)]=\"selectedContentSource\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource\"> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                        <div class=\"form-group mb-2\" *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                            <label class=\"col-form-label\">File\r\n                            </label>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\r\n                                <label class=\"custom-file-label\" for=\"documentFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                <input type=\"file\" alife-file-to-base64 (onFileChanged)=\"onVideoFileChanges($event)\"\r\n                                    id=\"videoFile\" />\r\n                                <label class=\"custom-file-label\" for=\"videoFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    Only PDF will allow Max file size - 100 MB\r\n                                </div>\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    Max file size - 200 MB\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"d-flex w-100 my-2\">\r\n                                <div *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadVideoFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\r\n                                    <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\r\n                                        <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\r\n                                    </a>\r\n                                    <div *ngIf=\" modalTitleName !=='View'\">\r\n                                        <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\"\r\n                                            *ngIf=\"uploadedFileName\">\r\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete file\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name !== 'File upload'\"> -->\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl1\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher1\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl1\" [checked]=\"checkUrl1\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl1\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl2\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher2\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl2\" [checked]=\"checkUrl2\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl2\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl3\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher3\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl3\" [checked]=\"checkUrl3\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl3\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <!-- </div> -->\r\n                    <!-- </div> -->\r\n                </div>\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <div class=\"d-flex justify-content-between w-100\">\r\n                        <p><b>Title </b></p>\r\n                        <p>{{contentDetails.content.title}}</p>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\r\n                        <p><b>Description</b></p>\r\n                        <p>{{contentDetails.content.description}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url1\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 1</b></p>\r\n                            <p>{{contentDetails.content.url1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 1</b></p>\r\n                            <p>{{contentDetails.content.publisher1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 1</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url1\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url2\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 2</b></p>\r\n                            <p>{{contentDetails.content.url2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 2</b></p>\r\n                            <p>{{contentDetails.content.publisher2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 2</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url2\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 3</b></p>\r\n                            <p>{{contentDetails.content.url3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 3</b></p>\r\n                            <p>{{contentDetails.content.publisher3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 3</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url3\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-danger\" (click)=\"cancelTopicContent()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Add'\">\r\n                    <button class=\"btn btn-success\" (click)=\"saveTopicContent()\" [disabled]=\"validateContent\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-success\" (click)=\"updateTopicContents()\" [disabled]=\"validateContent\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <button class=\"btn btn-danger\" (click)=\"closeTopicContentModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-create.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-create.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 1 - Select question type</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12\">\r\n                <pick-question-type></pick-question-type>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateQuestionType\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\r\n                <p class=\"font-20 text-warning\">Step 2 - Build question</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mx-3\">\r\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question category</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\r\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\r\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\r\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\r\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\r\n                                (click)=\"onSelectComplexityLevel(level.value)\">\r\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" [disabled]=\"validateQuestion\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 3 - Add solution content (Optional)</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mb-2\">\r\n                <label for=\"\">Solution content</label>\r\n                <ckeditor class=\"w-100\" [config]=\"editorSolutionConfig\" [(ngModel)]=\"solutionContent\"\r\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                    [required]=\"true\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"loadPreviewQuestion()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 4 - Summary</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <div\r\n                *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3 p-3\">\r\n                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2  font-18\"\r\n                        *ngFor=\"let choice of questionResource.Choices;let i = index\">\r\n                        <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\r\n                            <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" disabled readonly>\r\n                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                        </div>\r\n                        <label for=\"{{choice.ChoiceId}}\">\r\n                            <p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <div class=\"text-dark\" *ngFor=\"let data of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"data | sanitizeHtml\">\r\n                            </span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\r\n                    <tr class=\"bg-lightgray\">\r\n                        <td></td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <p [MathJax]=\"option.OptionText | sanitizeHtml\"></p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\r\n                        <td><p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p></td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <div class=\"radio\">\r\n                                <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\r\n                                    name=\"{{ choice.ChoiceId }}\">\r\n                                <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span *ngIf=\"answers.length > 0\">\r\n                            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                -\r\n                                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                {{checkIndex  === answers.length - 1? ' ' : ','}}\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngFor=\"let answer of answers\">\r\n                    <div class=\"choice-container\">\r\n                        <div class=\"item\">\r\n                            <div class=\"choice--group\">\r\n                                <div class=\"choice--label\">\r\n                                    <p [MathJax]=\"answer.choiceName  | sanitizeHtml\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"line-circle\">\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"drag--container\">\r\n                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                    [MathJax]=\"answer.optionName  | sanitizeHtml\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n                        <span *ngIf=\"answers.length > 0\">\r\n                            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                -\r\n                                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSaveQuestion\">\r\n            <button class=\"btn btn-success float-right ml-2\" (click)=\"saveQuestion()\" [disabled]=\"showAddQuestion\">\r\n                <i class=\"fa fa-save mr-2\"></i>\r\n                Save question\r\n            </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showAddQuestion\">\r\n            <button class=\"btn btn-info float-right\" (click)=\"addQuestion()\">\r\n                <i class=\"fa fa-plus-circle mr-2\"></i>\r\n                Add one more question\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"previous btn btn-danger float-right mr-2\" (click)=\"resetPreviewQuestions()\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-manage.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-manage.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-2\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div id=\"treeView\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-3 py-3\">\r\n\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'concept'\">\r\n            <p><b>Concept name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Concept description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'topic'\">\r\n            <div class=\"d-flex row justify-content-between align-items-center\">\r\n                <div class=\"col-xxl-3\">\r\n                    <h4 class=\"font-20 mb-2\">{{nodeName}}</h4>\r\n                </div>\r\n                <div\r\n                    class=\"d-flex align-items-start flex-wrap justify-content-md-between justify-content-lg-end col-xxl-9\">\r\n                    <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openPreviewQuestionModal()\"\r\n                        *ngIf=\"questions.length > 0\">\r\n                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                    </div>\r\n                    <div class=\"btn btn-success mb-2 mr-2\" (click)=\"openSimulateQuestionModal()\"\r\n                        *ngIf=\"questions.length > 0\">\r\n                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                    </div>\r\n                    <a class=\"btn btn-primary text-white mb-2 mr-2\" target=\"_blank\"\r\n                        [routerLink]=\"['/general-concept-and-topic',topicId,'general-topic-question-create']\">\r\n                        <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\r\n                    </a>\r\n                    <div class=\"btn btn-warning text-white mb-2\" (click)=\"loadUpdatedTopicQuestions()\">\r\n                        <i class=\"fa fa-refresh mr-2\"></i> Refresh\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"table-responsive\" *ngIf=\"questions\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"generalSubjectsTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Question category</th>\r\n                            <th>Question type</th>\r\n                            <th>Complexity level</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let question of questions ;trackBy: trackId\">\r\n                            <td data-column=\"Select\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" id=\"{{question.id}}\"\r\n                                        (change)=\"checkSelectedQuestions($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{question.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Question category\">{{question.questionCategory}}</td>\r\n                            <td data-column=\"Question type\">{{question.questionType}}</td>\r\n                            <td data-column=\"Complexity level\">{{question.complexityLevel}}</td>\r\n                            <td data-column=\"Actions\">\r\n                                <div>\r\n                                    <a class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\" target=\"_blank\"\r\n                                        [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-view' ]\">\r\n                                        <i class=\"fa fa-eye\"></i>\r\n                                    </a>\r\n                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\" target=\"_blank\"\r\n                                        [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-edit' ]\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"questions.length > 0\">\r\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopicQuestion()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"deleteTopicQuestions()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"simulateQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"simulateQuestionModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Simulate question - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\r\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div cdkDropListGroup>\r\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n                                        <div class=\"mcq-left mr-2\">\r\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\r\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n                                        <div class=\"mcq-right ml-2\">\r\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\r\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\r\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\"\r\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\r\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\r\n                                </div>\r\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\r\n                                    (click)=\"nextQuestion()\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"previewQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"previewQuestionModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Preview question - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                [answers]=\"questiondata.answers\" disabled readonly>\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\r\n                                                readonly [answers]=\"questiondata.answers\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\r\n                                    <div class=\"choice-container\">\r\n                                        <div class=\"item\">\r\n                                            <div class=\"choice--group\">\r\n                                                <div class=\"choice--label\">\r\n                                                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"line-circle\">\r\n                                        </div>\r\n                                        <div class=\"item\">\r\n                                            <div class=\"drag--container\">\r\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"d-flex text-dark flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ' ,'}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"d-flex text-dark flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/general-concept-topic/general-concept-topic.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/general-concept-topic/general-concept-topic.module.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralConceptAndTopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralConceptAndTopicModule", function() { return GeneralConceptAndTopicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-topic-question-manage.component */ "./src/app/general-concept-topic/general-topic-question-manage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _general_concept_topic_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.route */ "./src/app/general-concept-topic/general-concept-topic.route.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-topic-question-create.component */ "./src/app/general-concept-topic/general-topic-question-create.component.ts");
/* harmony import */ var _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../question-builder/question-builder.module */ "./src/app/question-builder/question-builder.module.ts");
/* harmony import */ var _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-topic-content-manage.component */ "./src/app/general-concept-topic/general-topic-content-manage.component.ts");
/* harmony import */ var _syllabus_lesson_topic_syllabus_lesson_topic_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../syllabus-lesson-topic/syllabus-lesson-topic.module */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts");














let GeneralConceptAndTopicModule = class GeneralConceptAndTopicModule {
};
GeneralConceptAndTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_11__["QuestionBuilderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_7__["NgJhipsterModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_general_concept_topic_route__WEBPACK_IMPORTED_MODULE_4__["generalConceptAndTopicRoute"]),
            _syllabus_lesson_topic_syllabus_lesson_topic_module__WEBPACK_IMPORTED_MODULE_13__["SyllabusLessonTopicModule"]
        ],
        declarations: [
            _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_12__["GeneralTopicContentManageComponent"],
            _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_2__["GeneralTopicQuestionManageComponent"],
            _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_10__["GeneralTopicQuestionCreateComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], GeneralConceptAndTopicModule);



/***/ }),

/***/ "./src/app/general-concept-topic/general-concept-topic.route.ts":
/*!**********************************************************************!*\
  !*** ./src/app/general-concept-topic/general-concept-topic.route.ts ***!
  \**********************************************************************/
/*! exports provided: generalConceptAndTopicRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalConceptAndTopicRoute", function() { return generalConceptAndTopicRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-topic-question-manage.component */ "./src/app/general-concept-topic/general-topic-question-manage.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-topic-question-create.component */ "./src/app/general-concept-topic/general-topic-question-create.component.ts");
/* harmony import */ var _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-builder/mcq-standard */ "./src/app/question-builder/mcq-standard/index.ts");
/* harmony import */ var _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-builder/matchlist/matchlist.component */ "./src/app/question-builder/matchlist/matchlist.component.ts");
/* harmony import */ var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../question-builder/mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-topic-content-manage.component */ "./src/app/general-concept-topic/general-topic-content-manage.component.ts");
/* harmony import */ var _syllabus_lesson_topic_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../syllabus-lesson-topic/topic-question/topic-question-details.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
/* harmony import */ var _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../question-builder/cloze/drag-n-drop/drag-n-drop.component */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
/* harmony import */ var _syllabus_lesson_topic_topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../syllabus-lesson-topic/topic-question/topic-question-update.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");











const generalConceptAndTopicRoute = [
    {
        path: "", redirectTo: "general-topic-question", pathMatch: "full"
    },
    {
        path: 'general-topic-question',
        component: _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_1__["GeneralTopicQuestionManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage general topic questions'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/general-topic-question-create',
        component: _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_3__["GeneralTopicQuestionCreateComponent"],
        children: [
            {
                path: 'mcqstandard',
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
                data: {
                    type: "MCQ_SINGLE",
                    title: "Create"
                },
            },
            {
                path: "mcqstandard/:qid",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
                data: {
                    type: "MCQ_SINGLE",
                    title: "Edit"
                }
            },
            {
                path: "mcqmultiple",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
                data: {
                    type: "MCQ_MULTIPLE",
                    mode: "Create"
                }
            },
            {
                path: "mcqmultiple/:qid",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
                data: {
                    type: "MCQ_MULTIPLE",
                    mode: "Edit"
                }
            },
            {
                path: "mcqtruefalse",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
                data: {
                    type: "MCQ_TRUE_FALSE",
                    title: "Create"
                }
            },
            {
                path: "mcqtruefalse/:qid",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
                data: {
                    type: "MCQ_TRUE_FALSE",
                    title: "Edit"
                }
            },
            {
                path: 'mcqchoicematrix',
                component: _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_6__["MCQChoiceMatrixComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_CHOICE_MATRIX"
                }
            }, {
                path: 'mcqchoicematrix/:qid',
                component: _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_6__["MCQChoiceMatrixComponent"],
                data: {
                    title: "Edit",
                    type: "MCQ_CHOICE_MATRIX"
                }
            }, {
                path: "matchlist",
                component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_MATCH_LIST"
                }
            },
            {
                path: "matchlist/:qid",
                component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
                data: {
                    title: "Edit",
                    type: "MCQ_MATCH_LIST"
                }
            },
            {
                path: "clozedrag",
                component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
                data: {
                    title: "Create",
                    type: "mcq-drag"
                }
            },
            {
                path: "clozedrag/:qid",
                component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
                data: {
                    title: "Edit",
                    type: "mcq-drag"
                }
            }
        ],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Create general topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/general-topic-question-view',
        component: _syllabus_lesson_topic_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumTopicQuestionDetailsComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'View general topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: ':id/general-topic-question-edit',
        component: _syllabus_lesson_topic_topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionUpdateComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Edit general topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    },
    {
        path: 'general-topic-content',
        component: _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_7__["GeneralTopicContentManageComponent"],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Manage general topic content'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/general-concept-topic/general-concept-topic.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-concept-topic.service.ts ***!
  \************************************************************************/
/*! exports provided: GeneralConceptAndTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralConceptAndTopicService", function() { return GeneralConceptAndTopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let GeneralConceptAndTopicService = class GeneralConceptAndTopicService {
    constructor(http) {
        this.http = http;
        this.generalTopicsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topics/all-details';
        this.topicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topic-contents';
        this.contentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/contents';
        this.questionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/questions';
    }
    getTopicContentList(id) {
        return this.http.get(`${this.generalTopicsResourceUrl}/${id}`, { observe: 'response' });
    }
    getTopicQuestionList(id) {
        return this.http.get(`${this.generalTopicsResourceUrl}/${id}`, { observe: 'response' });
    }
    getContentByContentId(id) {
        return this.http.get(`${this.contentResourceUrl}/${id}`, { observe: 'response' });
    }
    updateContent(content) {
        return this.http.put(this.contentResourceUrl, content, { headers: headers, observe: 'response' });
    }
    saveTopicContent(topicContents) {
        return this.http.post(this.topicContentResourceUrl, topicContents, { headers: headers, observe: 'response' });
    }
    updateTopicContents(topicContents) {
        return this.http.put(this.topicContentResourceUrl, topicContents, { headers: headers, observe: 'response' });
    }
    deleteTopicContents(contentIds) {
        return this.http.delete(`${this.topicContentResourceUrl}/${"batch"}/${contentIds}`, { observe: 'response' });
    }
    saveTopicQuestion(question) {
        return this.http.post(this.questionResourceUrl, question, { headers: headers, observe: 'response' });
    }
    deleteTopicQuestions(questionIds) {
        return this.http.delete(`${this.questionResourceUrl}/${"batch"}/${questionIds}`, { observe: 'response' });
    }
};
GeneralConceptAndTopicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeneralConceptAndTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GeneralConceptAndTopicService);



/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-content-manage.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-content-manage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GeneralTopicContentManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicContentManageComponent", function() { return GeneralTopicContentManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);











let GeneralTopicContentManageComponent = class GeneralTopicContentManageComponent {
    constructor(_router, generalSubjectService, generalTopicContentService, formBuilder, pluginService, commonService, changeDetectRef, fileService) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicContentService = generalTopicContentService;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.fileService = fileService;
        this.subjectTree = [];
        this.topicContents = [];
        this.contentDetails = {};
        this.contentSource = [];
        this.contentType = [];
        this.contentIds = [];
        this.selectedFile = null;
        this.enableExpandNode = false;
        this.topicContents = [];
        this.fileName = "No file chosen";
        this.tableAction = true;
        this.updateAction = true;
        this.checkUrl1 = true;
    }
    ngOnInit() {
        this.loadSubjectData();
        this.createTopicContentForm();
        this.getContentType();
        this.getContentSource();
    }
    getContentType() {
        this.commonService.getContentTypeList().subscribe((typeData) => {
            this.contentType = typeData;
        });
    }
    getContentSource() {
        this.commonService.getContentSourceList().subscribe((sourceData) => {
            this.contentSource = sourceData;
        });
    }
    createTopicContentForm() {
        this.topicContentForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(250)]),
            webUrl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2048)]),
            publisher1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]),
            webUrl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2048)]),
            publisher2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]),
            webUrl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2048)]),
            publisher3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)])
        });
    }
    get contentFormControl() { return this.topicContentForm.controls; }
    loadSubjectData() {
        this.generalSubjectService.getSubjectSearchList().subscribe((res) => this.assignResponseToList(res.body), (res) => this.onError(res.message));
    }
    assignResponseToList(data) {
        this.subjects = data;
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    showConceptAndTopicDetails() {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "concept") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.contentIds = [];
                }
                else if (localThisObj.nodeType === "topic") {
                    localThisObj.contentIds = [];
                    localThisObj.topicContents = [];
                    localThisObj.topicId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.getTopicContentList(localThisObj.topicId);
                }
                else {
                }
            }
        });
    }
    getTopicContentList(topicId) {
        this.generalTopicContentService.getTopicContentList(topicId).subscribe((res) => this.assignResponseToTopicList(res.body), (res) => this.onError(res.message));
    }
    assignResponseToTopicList(data) {
        this.contentIds = [];
        this.topicContents = [];
        this.topicContents = data.generalTopicContents;
        this.sortArrayByOrderNumber(this.topicContents);
        this.updateAction = true;
        this.tableAction = true;
        if (this.topicContents.length > 0) {
            this.dragTableContent();
        }
    }
    ngAfterViewInit() {
        this.showConceptAndTopicDetails();
    }
    loadSubjectTree() {
        if (this.selectedSubject === null || this.selectedSubject === undefined) {
            this.selectedSubject = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
        else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            let subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignResponsetoTree(res.body), (res) => this.onError(res.message));
            }
        }
    }
    assignResponsetoTree(data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.nodeType = "";
        this.enableExpandNode = false;
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
        this.validateTopicContentForm();
        this.changeDetectRef.detectChanges();
    }
    validateTopicContentForm() {
        let contentName, webURL1, webURL2, webURL3;
        contentName = this.trimValue(this.topicContentForm.value.contentTitle);
        webURL1 = this.trimValue(this.topicContentForm.value.webUrl1);
        webURL2 = this.trimValue(this.topicContentForm.value.webUrl2);
        webURL3 = this.trimValue(this.topicContentForm.value.webUrl3);
        if (contentName === "" || contentName === undefined || contentName === null) {
            this.validateContent = true;
        }
        if ((this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null)) {
            this.validateContent = true;
        }
        if (this.topicContentForm.valid) {
            this.validateContent = false;
        }
        if (this.topicContentForm.invalid) {
            this.validateContent = true;
        }
        if (this.checkUrl1 === true) {
            if ((webURL1 === "" || webURL1 === undefined || webURL1 === null)) {
                this.validateContent = true;
            }
        }
        if (this.checkUrl2 === true) {
            if ((webURL2 === "" || webURL2 === undefined || webURL2 === null)) {
                this.validateContent = true;
            }
        }
        if (this.checkUrl3 === true) {
            if ((webURL3 === "" || webURL3 === undefined || webURL3 === null)) {
                this.validateContent = true;
            }
        }
    }
    onActiveWebUrlSelection(event) {
        if (event.target.checked === true) {
            this.activeUrl = event.target.id;
            if (this.activeUrl === "webUrl1") {
                this.checkUrl1 = true;
                this.checkUrl2 = false;
                this.checkUrl3 = false;
            }
            else if (this.activeUrl === "webUrl2") {
                this.checkUrl2 = true;
                this.checkUrl3 = false;
                this.checkUrl1 = false;
            }
            else if (this.activeUrl === "webUrl3") {
                this.checkUrl3 = true;
                this.checkUrl1 = false;
                this.checkUrl2 = false;
            }
        }
    }
    onVideoFileChanges(event) {
        let splitType;
        this.selectedFile = event[0];
        splitType = this.selectedFile.type.split('/');
        this.fileType = splitType[0];
        this.fileName = this.selectedFile.name;
        if ((this.fileType === "video") && (this.selectedFile.size > 209715200)) {
            this.pluginService.alertMessage("Please upload file size lesser than 200 MB", "error");
        }
    }
    uploadVideoFile() {
        if (this.fileName !== "No file chosen") {
            if (this.fileType === "video") {
                this.fileService.getpresignedurls(this.fileName).subscribe(res => {
                    if (res.status === 200) {
                        this.uploadedFileName = Object.keys(res.body)[0];
                        this.uploadedFilePath = Object.values(res.body)[0];
                        this.fileName = this.uploadedFileName;
                        if (this.uploadedFileName && this.uploadedFilePath) {
                            let block, base64Data, dataSrc;
                            dataSrc = this.selectedFile.base64;
                            block = dataSrc.split(";");
                            base64Data = block[1].split(",")[1];
                            this.fileService.uploadVideoFile(this.uploadedFilePath, base64Data).subscribe((event) => {
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                                    this.showFileAction = true;
                                    this.pluginService.alertMessage("File uploaded successfully", "success");
                                }
                            });
                        }
                    }
                });
            }
            else {
                this.pluginService.alertMessage("Invalid file, it support only Video formats", "error");
            }
        }
        else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
        }
    }
    onDocumentFileChanges(event) {
        this.selectedFile = event.target.files;
        this.fileName = this.selectedFile[0].name;
        if ((this.selectedFile[0].type === "application/pdf") && (this.selectedFile[0].size > 104857600)) {
            this.pluginService.alertMessage("Please upload file size lesser than 100 MB", "error");
        }
    }
    uploadDocumentFile() {
        if (this.fileName !== "No file chosen") {
            if (this.selectedFile[0].type === "application/pdf") {
                let file = this.selectedFile.item(0);
                this.fileService.getpresignedurls(this.fileName).subscribe(res => {
                    if (res.status === 200) {
                        this.uploadedFileName = Object.keys(res.body)[0];
                        this.uploadedFilePath = Object.values(res.body)[0];
                        this.fileName = this.uploadedFileName;
                        if (this.uploadedFileName && this.uploadedFilePath) {
                            this.fileService.uploadPDFFile(this.uploadedFilePath, file).subscribe((event) => {
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                                    this.showFileAction = true;
                                    this.pluginService.alertMessage("File uploaded successfully", "success");
                                }
                            });
                        }
                    }
                });
            }
            else {
                this.pluginService.alertMessage("Invalid file, it support only PDF", "error");
            }
        }
        else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
        }
    }
    downloadFile() {
        if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
        }
    }
    subscribeToDownloadResponse(result) {
        result.subscribe((res) => this.onDownloadSuccess(res), (errRes) => this.onDownloadError(errRes));
    }
    onDownloadSuccess(resp) {
        if (resp.body) {
            let downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(downloadFilePath);
        }
    }
    onDownloadError(error) {
        this.pluginService.alertMessage("Error in downloading file", "error");
    }
    addContent() {
        this.modalTitleName = "Add";
        this.openTopicContentModal();
        this.resetFormValues();
        this.validateContent = false;
        this.selectedContentSource = null;
        this.selectedContentType = null;
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.fileName = "No file chosen";
    }
    saveTopicContent() {
        if (this.topicContentForm.valid) {
            this.validateContent = false;
            let generalTopicContents = [], content = {}, contentDetail = content.content;
            contentDetail = {};
            contentDetail.title = this.trimValue(this.topicContentForm.value.contentTitle);
            contentDetail.description = this.trimValue(this.topicContentForm.value.contentDescription);
            contentDetail.url1 = this.trimValue(this.topicContentForm.value.webUrl1);
            contentDetail.url2 = this.trimValue(this.topicContentForm.value.webUrl2);
            contentDetail.url3 = this.trimValue(this.topicContentForm.value.webUrl3);
            contentDetail.publisher1 = this.trimValue(this.topicContentForm.value.publisher1);
            contentDetail.publisher2 = this.trimValue(this.topicContentForm.value.publisher2);
            contentDetail.publisher3 = this.trimValue(this.topicContentForm.value.publisher3);
            contentDetail.contentType = "VIDEO";
            contentDetail.contentSource = "WEB_URL";
            //Below codes are Video and document file upload
            // contentDetail.contentType = this.selectedContentType.tag;
            // contentDetail.contentSource = this.selectedContentSource.tag;
            // if (this.selectedContentSource.tag === "FILE_UPLOAD") {
            //     contentDetail.fileName = this.uploadedFileName;
            //     contentDetail.filePath = this.uploadedFilePath;
            // } else if (this.selectedContentSource.tag === "WEB_URL") {
            //Active web url assigning condition
            if (this.checkUrl1 === true) {
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = contentDetail.url2;
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = contentDetail.url3;
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            // }
            generalTopicContents.push({
                generalTopicId: this.topicId,
                content: contentDetail,
                orderNumber: this.topicContents.length + 1
            });
            this.saveTopicContents(generalTopicContents);
        }
        if (this.topicContentForm.invalid) {
            this.validateContent = true;
        }
    }
    saveTopicContents(generalTopicContents) {
        this.subscribeToSaveResponse(this.generalTopicContentService.saveTopicContent(generalTopicContents));
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onSaveError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Topic content created successfully", "success");
        this.getTopicContentList(this.topicId);
        this.checkContentType();
        this.resetFormValues();
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
    }
    onSaveError(errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    }
    openTopicContentModal() {
        this.pluginService.showModalWindow("#generalTopicContent");
    }
    closeTopicContentModal() {
        this.pluginService.hideModalWindow("#generalTopicContent");
    }
    closeTopicContentModalWithOutSaving() {
        if (this.modalTitleName === "View") {
            this.closeTopicContentModal();
        }
        else if (this.modalTitleName === "Add" || this.modalTitleName === "Edit") {
            var localthisObject = this;
            swal({
                title: "Are you sure to close without saving content ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                confirmButtonColor: "#32b432",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function (isConfirm) {
                if (isConfirm === true) {
                    localthisObject.checkContentType();
                }
                else {
                    localthisObject.closeTopicContentModal();
                }
            });
        }
    }
    checkContentType() {
        this.closeTopicContentModal();
        if (this.selectedContentSource) {
            if (this.selectedContentSource.tag === 'FILE_UPLOAD') {
                if (this.uploadedFilePath) {
                    this.deleteUploadedFile();
                }
            }
        }
    }
    deleteUploadedFile() {
        this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(this.uploadedFileName));
    }
    subscribeToDeleteFiletResponse(resp) {
        resp.subscribe((res) => this.onDeleteFileSuccess(res), (res) => this.onDeleteError(res));
    }
    onDeleteFileSuccess(resp) {
        this.fileName = "No file chosen";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.pluginService.alertMessage("File deleted successfully", "success");
    }
    getContent(contentId) {
        let topicContents = [], contentDetails = {};
        topicContents = this.topicContents.filter(item => item.content.id === contentId);
        contentDetails = topicContents[0].content;
        this.patchContentFormfields(contentDetails);
        this.openTopicContentModal();
    }
    getContentDetails(contentId) {
        let topicContents = [];
        this.contentDetails = {};
        topicContents = this.topicContents.filter(item => item.content.id === contentId);
        this.contentDetails = topicContents[0];
        if (this.contentDetails.content.webUrl == this.contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        else if (this.contentDetails.content.webUrl == this.contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
        }
        else if (this.contentDetails.content.webUrl == this.contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
        }
        else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        this.openTopicContentModal();
    }
    onContentError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    patchContentFormfields(contentDetails) {
        this.contentId = contentDetails.id;
        this.topicContentForm.patchValue({
            contentTitle: contentDetails.title,
            contentDescription: contentDetails.description,
            webUrl1: contentDetails.url1,
            publisher1: contentDetails.publisher1,
            webUrl2: contentDetails.url2,
            publisher2: contentDetails.publisher2,
            webUrl3: contentDetails.url3,
            publisher3: contentDetails.publisher3
        });
        // this.selectedContentType = this.contentType.filter(item => item.tag === contentDetails.contentType)[0];
        // this.selectedContentSource = this.contentSource.filter(item => item.tag === contentDetails.contentSource)[0];
        // if (this.selectedContentSource) {
        //     if (this.selectedContentSource.tag === "WEB_URL") {
        if (contentDetails.webUrl == contentDetails.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        else if (contentDetails.webUrl == contentDetails.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
        }
        else if (contentDetails.webUrl == contentDetails.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
        }
        else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
        //     this.uploadedFileName = contentDetails.fileName;
        //     this.fileName = contentDetails.fileName;
        //     this.uploadedFilePath = contentDetails.filePath;
        // }
        // }
    }
    viewContent(contentId) {
        this.modalTitleName = "View";
        this.getContentDetails(contentId);
    }
    editContent(contentId) {
        this.modalTitleName = "Edit";
        this.getContent(contentId);
    }
    updateTopicContents() {
        if (this.topicContentForm.valid) {
            let content = {}, contentDetail = content.content;
            contentDetail = {};
            contentDetail.id = this.contentId;
            contentDetail.title = this.trimValue(this.topicContentForm.value.contentTitle);
            contentDetail.description = this.trimValue(this.topicContentForm.value.contentDescription);
            contentDetail.url1 = this.trimValue(this.topicContentForm.value.webUrl1);
            contentDetail.url2 = this.trimValue(this.topicContentForm.value.webUrl2);
            contentDetail.url3 = this.trimValue(this.topicContentForm.value.webUrl3);
            contentDetail.publisher1 = this.trimValue(this.topicContentForm.value.publisher1);
            contentDetail.publisher2 = this.trimValue(this.topicContentForm.value.publisher2);
            contentDetail.publisher3 = this.trimValue(this.topicContentForm.value.publisher3);
            contentDetail.contentType = "VIDEO";
            contentDetail.contentSource = "WEB_URL";
            //Below codes are Video and document file upload
            // contentDetail.contentType = this.selectedContentType.tag;
            // contentDetail.contentSource = this.selectedContentSource.tag;
            // if (this.selectedContentSource) {
            //     //Active web url assigning condition
            //     if (this.selectedContentSource.tag === "WEB_URL") {
            if (this.checkUrl1 === true) {
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = contentDetail.url2;
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = contentDetail.url3;
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = contentDetail.url1;
                contentDetail.publisher = contentDetail.publisher1;
            }
            // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
            //     contentDetail.fileName = this.uploadedFileName;
            //     contentDetail.filePath = this.uploadedFilePath;
            // }
            // }
            this.subscribeToUpdateResponse(this.generalTopicContentService.updateContent(contentDetail));
        }
        if (this.topicContentForm.invalid) {
            this.validateContent = true;
        }
    }
    subscribeToUpdateResponse(result) {
        result.subscribe((res) => this.onUpdateSuccess(res), (errRes) => this.onUpdateError(errRes));
    }
    onUpdateSuccess(res) {
        this.getTopicContentList(this.topicId);
        this.checkContentType();
        this.resetFormValues();
        this.pluginService.alertMessage("Topic content updated successfully", "success");
    }
    onUpdateError(errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    }
    cancelTopicContent() {
        this.resetFormValues();
    }
    checkSelectedContents(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.id;
        if (checked === true) {
            this.tableAction = false;
            this.contentIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.contentIds.findIndex(item => item === selectedId);
            this.contentIds.splice(index, 1);
        }
        this.contentIds = this.removeDuplicateElements(this.contentIds);
        if (this.contentIds.length <= 0) {
            this.tableAction = true;
        }
    }
    removeDuplicateElements(array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    }
    resetFormValues() {
        this.topicContentForm.reset();
        this.selectedContentSource = null;
        this.selectedContentType = null;
    }
    resetSelectedTopicContent() {
        this.contentIds = [];
        $(".checkAll").prop("checked", false);
        this.tableAction = true;
    }
    deleteTopicContents() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete content ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.contentIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.generalTopicContentService.deleteTopicContents(localthisObject.contentIds));
                }
            }
        });
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onDeleteError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.getTopicContentList(this.topicId);
        this.tableAction = true;
        this.contentIds = [];
    }
    onDeleteError(errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    }
    dragTableContent() {
        let localThisObj = this;
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
            localThisObj.updateTopicContentOrder();
        };
        $("#dragTable #dragBody")
            .sortable({
            helper: fixHelperModified,
            stop: updateIndex
        });
        $("#dragBody").sortable({
            distance: 1,
            opacity: 0, delay: 10,
            cursor: "move",
            update: function () { }
        });
    }
    updateTopicContentOrder() {
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach((row) => {
            let list = row.querySelectorAll('td');
            var contentId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (let i = 0; i < this.topicContents.length; i++) {
                if (this.topicContents[i].id === contentId) {
                    this.topicContents[i].orderNumber = newOrderNum;
                    break;
                }
            }
            this.sortArrayByOrderNumber(this.topicContents);
        });
    }
    sortArrayByOrderNumber(array) {
        array.sort((a, b) => (a.orderNumber > b.orderNumber) ? 1 : -1);
    }
    updateTopicContentsWithOrderNumber() {
        var localthisObject = this;
        swal({
            title: "Are you sure to update order ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.checkOrderNumChange === true) {
                    localthisObject.subscribeToUpdateTopicContentResponse(localthisObject.generalTopicContentService.updateTopicContents(localthisObject.topicContents));
                    localthisObject.updateAction = true;
                }
            }
        });
    }
    subscribeToUpdateTopicContentResponse(result) {
        result.subscribe((res) => this.onUpdateTopicContentSuccess(res), (errRes) => this.onUpdateTopicContentError(errRes));
    }
    onUpdateTopicContentSuccess(res) {
        this.pluginService.alertMessage("Topic content order updated successfully", "success");
        this.getTopicContentList(this.topicId);
        this.resetFormValues();
    }
    onUpdateTopicContentError(errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
    }
    toggleTreeNodes() {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    }
};
GeneralTopicContentManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectService"] },
    { type: _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"] }
];
GeneralTopicContentManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-topic-content-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-content-manage.component.html")).default,
        providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectService"],
        _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"]])
], GeneralTopicContentManageComponent);



/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-question-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-question-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GeneralTopicQuestionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicQuestionCreateComponent", function() { return GeneralTopicQuestionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");









let GeneralTopicQuestionCreateComponent = class GeneralTopicQuestionCreateComponent {
    constructor(activatedRoute, router, pluginService, questionBuilderService, questionService, commonService, formBuilder, changedetector, fileService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.changedetector = changedetector;
        this.fileService = fileService;
        this.questionResource = {};
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.answers = [];
        this.contentSource = [];
        this.showSaveQuestion = false;
        this.showAddQuestion = false;
        this.validateQuestionType = true;
    }
    ngOnInit() {
        this.editorSolutionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.topicId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
        this.validateQuestionTypeSelectedOrNot();
    }
    getContentSource() {
        this.commonService.getContentSourceList().subscribe((data) => {
            this.contentSource = data;
        });
    }
    getQuestionCategory() {
        this.commonService.getQuestionCategoryList().subscribe((data) => {
            this.questionCategory = data;
        });
    }
    getQuestionComplexityLevel() {
        this.commonService.getQuestionComplexityLevelList().subscribe((data) => {
            this.questionComplexityLevel = data;
        });
    }
    ngAfterViewChecked() {
        this.validateQuestionTypeSelectedOrNot();
        this.changedetector.detectChanges();
    }
    validateQuestionTypeSelectedOrNot() {
        let currentRoute, splitUrl = [], lastItem;
        currentRoute = this.router.url;
        splitUrl = currentRoute.split("/");
        lastItem = splitUrl.pop();
        if (lastItem === 'general-topic-question-create') {
            this.validateQuestionType = true;
        }
        else {
            this.validateQuestionType = false;
        }
    }
    loadPreviewQuestion() {
        let duplicateChoices = [], question, choices = [], choiceText, choiceId, answers = [], matrixChoices = [], matrixOptions = [];
        this.questionResource = [];
        this.questionResource = this.questionBuilderService.getQuestionResource;
        this.questionType = this.questionResource.QuestionType;
        answers = this.questionResource.Answers;
        this.onChangeOptionType(this.questionType);
        if (question === "" || question === "undefined") {
            //"Question is missing, please fill question detail";
            this.validateQuestion = true;
        }
        else {
            if (answers.length > 0) {
                if (this.questionType === "MCQ_SINGLE" || this.questionType === "MCQ_MULTIPLE" || this.questionType === "MCQ_TRUE_FALSE") {
                    this.answers = [];
                    duplicateChoices = this.questionResource.Choices;
                    if (duplicateChoices.length > 0) {
                        choices = [];
                        for (let i = 0; i < duplicateChoices.length; i++) {
                            choiceId = duplicateChoices[i].ChoiceId;
                            choiceText = duplicateChoices[i].ChoiceText;
                            choices.push({
                                "choiceId": choiceId,
                                "choiceText": choiceText
                            });
                        }
                        for (let j = 0; j < answers.length; j++) {
                            let answerText = choices.find(item => item.choiceId === answers[j]).choiceText;
                            this.answers.push(answerText);
                            answerText = "";
                        }
                        this.validateQuestion = false;
                    }
                    else {
                        //"Choices are missing, Please fill the choices";
                        this.validateQuestion = true;
                    }
                }
                else if (this.questionType === "MCQ_CHOICE_MATRIX") {
                    matrixChoices = [];
                    matrixOptions = [];
                    matrixChoices = this.questionResource.Choices;
                    matrixOptions = this.questionResource.Options;
                    if (matrixChoices.length > 0 && matrixOptions.length > 0) {
                        if (answers.length > 0) {
                            this.answers = [];
                            for (let k = 0; k < answers.length; k++) {
                                this.answers.push({
                                    choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                                    optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
                                });
                            }
                        }
                        this.validateQuestion = false;
                    }
                    else {
                        //"Choices and options are missing, please fill the details";
                        this.validateQuestion = true;
                    }
                }
                else if (this.questionType === "MCQ_MATCH_LIST") {
                    matrixChoices = [];
                    matrixOptions = [];
                    matrixChoices = this.questionResource.Choices;
                    matrixOptions = this.questionResource.Options;
                    if (matrixChoices.length > 0 && matrixOptions.length > 0) {
                        if (answers.length > 0) {
                            this.answers = [];
                            for (let k = 0; k < answers.length; k++) {
                                this.answers.push({
                                    choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                                    optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
                                });
                            }
                        }
                        this.validateQuestion = false;
                    }
                    else {
                        //"Left side and right side options are missing, please fill the details";
                        this.validateQuestion = true;
                    }
                }
                this.showSaveQuestion = true;
                this.updateQuestionResource();
            }
            else {
                //"Answer is missing, please select a answer";
                this.validateQuestion = true;
            }
        }
    }
    questionAlertMsg(str) {
        this.pluginService.alertMessage(str, "error");
    }
    onChangeOptionType(questionType) {
        if (questionType === "MCQ_SINGLE" || questionType === "MCQ_TRUE_FALSE") {
            this.type = "radio";
        }
        else if (questionType === "MCQ_MULTIPLE") {
            this.type = "checkbox";
        }
        else {
            this.type = "";
        }
    }
    onContentSource(sourceName) {
        this.selectedContentSource = sourceName;
    }
    onSelectQuestionCategory(value) {
        this.category = value;
    }
    onSelectComplexityLevel(value) {
        this.complexityLevel = value;
    }
    resetPreviewQuestions() {
        this.questionResource = [];
        this.answers = [];
    }
    getBase64ImageFromUrl(imageUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var res = yield fetch(imageUrl);
            var blob = yield res.blob();
            return new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    resolve(reader.result);
                }, false);
                reader.onerror = () => {
                    return reject(this);
                };
                reader.readAsDataURL(blob);
            });
        });
    }
    updateImageSrc(dataSource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let imageTags, htmlElement, imageId, imageUrl, index, updatedHTMLData, base64;
            htmlElement = document.createElement("div");
            htmlElement.innerHTML = dataSource;
            imageTags = htmlElement.getElementsByTagName("img");
            if (imageTags.length > 0) {
                for (let i = 0; i < imageTags.length; i++) {
                    imageId = "image" + [i];
                    index = i;
                    imageTags[i].setAttribute("id", imageId); //Set id attribute for image 
                    imageUrl = imageTags[i].src; //Get image source 
                    base64 = yield this.getBase64ImageFromUrl(imageUrl);
                    updatedHTMLData = yield this.getAWSFilePath(base64, index, htmlElement);
                }
            }
            else {
                updatedHTMLData = htmlElement.innerHTML;
            }
            return updatedHTMLData;
        });
    }
    getAWSFilePath(base64, index, htmlElement) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let block, contentType, encodedData, fileType, imageType, presignedURL, imageTags, updatedHTMLData;
            imageTags = htmlElement.getElementsByTagName("img");
            block = base64.split(',');
            contentType = block[0].split(':')[1];
            fileType = contentType.split('/')[1];
            imageType = fileType.split(';')[0];
            encodedData = block[1];
            let fileName = new Date().getUTCMilliseconds() + "quesImage" + "." + imageType;
            if (encodedData) {
                let res = yield this.fileService.getImagePresignedurls(fileName);
                let map = new Map().set(Object.keys(res)[0], Object.values(res)[0]).set(Object.keys(res)[1], Object.values(res)[1]);
                map.forEach((value, key) => {
                    if (key !== "objectURL") {
                        presignedURL = value;
                    }
                    else if (key === "objectURL") {
                        let updatedFilePath = value;
                        imageTags[index].setAttribute("src", updatedFilePath); //Setting aws filepath in respective image source
                        updatedHTMLData = htmlElement.innerHTML;
                        this.getImagePathUploadedHTML(updatedHTMLData);
                    }
                });
                yield this.fileService.uploadImagefileAWSS3(presignedURL, encodedData);
            }
        });
    }
    updateQuestionResource() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let choices = [], options = [], questionResource = {}, choiceText, optionText;
            questionResource = this.questionBuilderService.getQuestionResource;
            if (questionResource.Question) {
                this.updatedHTMLDATA = questionResource.Question;
                yield this.updateImageSrc(questionResource.Question);
                questionResource.Question = this.updatedHTMLDATA;
            }
            if (questionResource.Choices.length > 0) {
                for (let i = 0; i < questionResource.Choices.length; i++) {
                    this.updatedHTMLDATA = questionResource.Choices[i].ChoiceText;
                    yield this.updateImageSrc(questionResource.Choices[i].ChoiceText);
                    choiceText = this.updatedHTMLDATA;
                    choices.push({
                        ChoiceText: choiceText,
                        ChoiceId: questionResource.Choices[i].ChoiceId
                    });
                }
                questionResource.Choices = choices;
            }
            if (questionResource.Options.length > 0) {
                for (let i = 0; i < questionResource.Options.length; i++) {
                    this.updatedHTMLDATA = questionResource.Options[i].OptionText;
                    yield this.updateImageSrc(questionResource.Options[i].OptionText);
                    optionText = this.updatedHTMLDATA;
                    options.push({
                        OptionText: optionText,
                        OptionId: questionResource.Options[i].OptionId
                    });
                }
                questionResource.Options = options;
            }
            yield this.questionBuilderService.generateQuestionResource(questionResource);
        });
    }
    getImagePathUploadedHTML(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updatedHTMLDATA = data;
        });
    }
    saveQuestion() {
        let questionResource = {}, jsonConversion, questionDetails, solutionContentJson, updatedQuestionResource;
        if (this.category) {
            questionResource.category = this.category;
        }
        else {
            questionResource.category = this.questionCategory[0].tag;
        }
        if (this.complexityLevel) {
            questionResource.complexityLevel = this.complexityLevel;
        }
        else {
            questionResource.complexityLevel = 1;
        }
        solutionContentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(this.solutionContent));
        updatedQuestionResource = this.questionBuilderService.getQuestionResource;
        questionResource.marks = updatedQuestionResource.TotalMarks;
        jsonConversion = JSON.stringify(updatedQuestionResource);
        questionDetails = this.questionBuilderService.convertJsonToString(jsonConversion);
        questionResource.contentJson = questionDetails;
        questionResource.generalTopicId = this.topicId;
        questionResource.solutionJson = solutionContentJson;
        this.subscribeToSaveResponse(this.questionService.saveTopicQuestion(questionResource));
    }
    subscribeToSaveResponse(result) {
        result.subscribe((resp) => this.onSaveSuccess(resp), (errRes) => this.onSaveError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("General Topic question created successfully", "success");
        this.showAddQuestion = true;
        this.showSaveQuestion = false;
    }
    onSaveError(errRes) {
        this.pluginService.alertMessage("Could not save, please contact admin", "error");
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
                localObj.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
                localObj.pluginService.sideMenuToggle();
            }
        });
    }
    addQuestion() {
        window.location.reload();
        this.questionType = "";
        this.showSaveQuestion = true;
    }
};
GeneralTopicQuestionCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"] },
    { type: _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"] }
];
GeneralTopicQuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-topic-question-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-create.component.html")).default,
        providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"],
        _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"]])
], GeneralTopicQuestionCreateComponent);



/***/ }),

/***/ "./src/app/general-concept-topic/general-topic-question-manage.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/general-concept-topic/general-topic-question-manage.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GeneralTopicQuestionManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicQuestionManageComponent", function() { return GeneralTopicQuestionManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");








let GeneralTopicQuestionManageComponent = class GeneralTopicQuestionManageComponent {
    constructor(_router, generalSubjectService, generalTopicQuestionService, pluginService, questionBuilderService) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicQuestionService = generalTopicQuestionService;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.subjectTree = [];
        this.questions = [];
        this.topicQuestions = [];
        this.questionResources = [];
        this.questionIds = [];
        this.selectedAnswer = [];
        this.enableExpandNode = false;
        this.tableAction = true;
    }
    ngOnInit() {
        this.loadSubjectData();
    }
    loadSubjectData() {
        this.generalSubjectService.getSubjectSearchList().subscribe((res) => this.assignResponseToList(res.body), (res) => this.onError(res.message));
    }
    assignResponseToList(data) {
        this.subjects = data;
    }
    onError(errorMessage) {
        this.pluginService.alertMessage(errorMessage, "error");
    }
    showConceptAndTopicDetails() {
        var localThisObj = this;
        $('#treeView')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.nodeType = data.node.type;
                if (localThisObj.nodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "concept") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "topic") {
                    localThisObj.topicId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.questions = [];
                    localThisObj.questionIds = [];
                    localThisObj.getTopicQuestionsList(localThisObj.topicId);
                }
                else {
                    localThisObj.nodeType = "";
                }
            }
        });
    }
    loadUpdatedTopicQuestions() {
        this.getTopicQuestionsList(this.topicId);
    }
    getTopicQuestionsList(topicId) {
        this.generalTopicQuestionService.getTopicQuestionList(topicId).subscribe((res) => this.assignResponseToQuestionList(res.body), (res) => this.onError(res.message));
    }
    assignResponseToQuestionList(data) {
        let questionDetails = [], question, complexityLevel, questionType;
        this.questions = [];
        this.questionResources = data.questions;
        if (this.questionResources.length > 0) {
            for (let i = 0; i < this.questionResources.length; i++) {
                questionDetails.push(this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson));
                question = questionDetails[i].Question;
                if (this.questionResources[i].complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.questionResources[i].complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.questionResources[i].complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[i].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[i].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[i].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[i].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[i].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.questions.push({
                    id: this.questionResources[i].id,
                    complexityLevel: complexityLevel,
                    questionCategory: this.titleCapitalize(this.questionResources[i].category),
                    questionText: question,
                    questionType: questionType
                });
            }
        }
        this.questionIds = [];
        this.tableAction = true;
    }
    titleCapitalize(word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    ngAfterViewInit() {
        this.showConceptAndTopicDetails();
    }
    loadSubjectTree() {
        if (this.selectedSubject === null || this.selectedSubject === undefined) {
            this.selectedSubject = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
        else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            let subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignResponsetoTree(res.body), (res) => this.onError(res.message));
            }
        }
    }
    assignResponsetoTree(data) {
        this.subjectTree = data;
        this.pluginService.jsTree("#treeView", this.subjectTree, false);
        this.nodeType = "";
        this.enableExpandNode = false;
    }
    resetSelectedTopicQuestion() {
        this.questionIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    }
    checkSelectedQuestions(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.id;
        if (checked === true) {
            this.tableAction = false;
            this.questionIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.questionIds.findIndex(item => item === selectedId);
            this.questionIds.splice(index, 1);
        }
        this.questionIds = this.removeDuplicateElements(this.questionIds);
        if (this.questionIds.length <= 0) {
            this.tableAction = true;
        }
    }
    removeDuplicateElements(array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    }
    deleteTopicQuestions() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete topic question ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.questionIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.generalTopicQuestionService.deleteTopicQuestions(localthisObject.questionIds));
                }
            }
        });
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onDeleteError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.questions = [];
        this.questionIds = [];
        this.getTopicQuestionsList(this.topicId);
        this.tableAction = true;
    }
    onDeleteError(errRes) {
        this.pluginService.alertMessage("Could not delete, please contact admin", "error");
    }
    toggleTreeNodes() {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    }
    openSimulateQuestionModal() {
        this.pluginService.showModalWindow("#simulateQuestionModal");
        this.simulateTopicQuestionList();
    }
    closeSimulateQuestionModal() {
        this.pluginService.hideModalWindow("#simulateQuestionModal");
    }
    openPreviewQuestionModal() {
        this.pluginService.showModalWindow("#previewQuestionModal");
        this.previewTopicQuestionList();
    }
    closePreviewQuestionModal() {
        this.pluginService.hideModalWindow("#previewQuestionModal");
    }
    previewTopicQuestionList() {
        let questionDetails, options = [], answers = [], choices = [];
        this.topicQuestions = [];
        for (let i = 0; i < this.questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                answers = [];
                choices = [];
                options = questionDetails.Options;
                choices = questionDetails.Choices;
                for (let k = 0; k < questionDetails.Answers.length; k++) {
                    answers.push({
                        choiceName: choices.find(item => item.ChoiceId === questionDetails.Answers[k].ChoiceId).ChoiceText,
                        optionName: options.find(item => item.OptionId === questionDetails.Answers[k].OptionId).OptionText
                    });
                }
            }
            else if (questionDetails.QuestionType === "MCQ_SINGLE" || questionDetails.QuestionType === "MCQ_MULTIPLE" || questionDetails.QuestionType === "MCQ_TRUE_FALSE") {
                options = [];
                answers = [];
                for (let j = 0; j < questionDetails.Answers.length; j++) {
                    let answerText = questionDetails.Choices.find(item => item.ChoiceId === questionDetails.Answers[j]).ChoiceText;
                    answers.push(answerText);
                    answerText = "";
                }
            }
            this.topicQuestions.push({
                id: this.questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: this.questionResources[i].generalTopicId,
                questionId: this.questionResources[i].id,
                choices: questionDetails.Choices,
                options: options,
                answers: answers
            });
        }
    }
    simulateTopicQuestionList() {
        let questionDetails, options = [], choices = [];
        this.topicQuestions = [];
        for (let i = 0; i < this.questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                options = this.shuffleArray(questionDetails.Options);
                choices = questionDetails.Choices;
            }
            else {
                options = [];
                choices = this.shuffleArray(questionDetails.Choices);
            }
            this.topicQuestions.push({
                id: this.questionResources[i].id,
                questionType: questionDetails.QuestionType,
                question: questionDetails.Question,
                generalTopicId: this.questionResources[i].generalTopicId,
                questionId: this.questionResources[i].id,
                choices: choices,
                options: options,
                answers: questionDetails.Answers,
                checkAnswer: ""
            });
        }
    }
    shuffleArray(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    }
    onSelectMCQSingleAnswer(questionId, choiceId) {
        let topicIndex;
        topicIndex = this.topicQuestions.findIndex(item => item.id === questionId);
        for (let i = 0; i < this.topicQuestions[topicIndex].answers.length; i++) {
            if (this.topicQuestions[topicIndex].answers[i] === choiceId) {
                this.topicQuestions[topicIndex].checkAnswer = "Correct";
            }
            else {
                this.topicQuestions[topicIndex].checkAnswer = "Wrong";
            }
        }
    }
    onSelectMCQMultipleAnswer(questionId, choiceId, event) {
        let topicIndex, checked, choiceIndex;
        checked = event.target.checked;
        topicIndex = this.topicQuestions.findIndex(item => item.id === questionId);
        if (checked === true) {
            this.selectedAnswer.push(choiceId);
        }
        else {
            choiceIndex = this.selectedAnswer.findIndex(item => item === choiceId);
            this.selectedAnswer.splice(choiceIndex, 1);
        }
        this.checkMultipleAnswer(topicIndex);
    }
    checkMultipleAnswer(index) {
        let answers = this.topicQuestions[index].answers.sort();
        let selectedAnswers = this.selectedAnswer.sort();
        let duplicateAnswers = [];
        for (let i = 0; i < answers.length; i++) {
            for (let j = 0; j < selectedAnswers.length; j++) {
                if (answers[i] === selectedAnswers[j]) {
                    duplicateAnswers.push(selectedAnswers[j]);
                    this.topicQuestions[index].checkAnswer = "Partial";
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Wrong";
                }
            }
        }
        if (duplicateAnswers.length > 0) {
            if (duplicateAnswers.length === answers.length) {
                if (JSON.stringify(duplicateAnswers.sort()) === JSON.stringify(selectedAnswers)) {
                    this.topicQuestions[index].checkAnswer = "Correct";
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Partial";
                }
            }
            else {
                this.topicQuestions[index].checkAnswer = "Partial";
            }
        }
    }
    onSelectChoiceMatrixAnswer(questionId, choiceId, optionId) {
        let topicIndex, index;
        topicIndex = this.topicQuestions.findIndex(item => item.id === questionId);
        if (this.selectedAnswer.length === 0) {
            this.selectedAnswer = [];
        }
        this.selectedAnswer.push({
            ChoiceId: choiceId,
            OptionId: optionId
        });
        if (this.selectedAnswer.length > 1) {
            for (let i = 0; i < this.selectedAnswer.length; i++) {
                for (let j = i + 1; j < this.selectedAnswer.length; j++) {
                    if (this.selectedAnswer[i].ChoiceId === this.selectedAnswer[j].ChoiceId) {
                        index = this.selectedAnswer.findIndex(item => item.ChoiceId === this.selectedAnswer[i].ChoiceId);
                        this.selectedAnswer.splice(index, 1);
                    }
                }
            }
        }
        this.checkMatrixAndMatchListAnswers(topicIndex);
    }
    checkAnswerStatus(questionId) {
        let topicIndex = this.topicQuestions.findIndex(item => item.id === questionId);
        if (this.topicQuestions[topicIndex].checkAnswer === "Correct") {
            this.pluginService.alertMessage("Good keep going...Correct answer", "success");
        }
        else if (this.topicQuestions[topicIndex].checkAnswer === "Partial") {
            this.pluginService.alertMessage("This is partially correct", "warning");
        }
        else if (this.topicQuestions[topicIndex].checkAnswer === "Wrong") {
            this.pluginService.alertMessage("Oops..! this is wrong", "error");
        }
        else {
            this.pluginService.alertMessage("Please select a answer and check it", "error");
        }
    }
    updatedDropList(questionId, event) {
        let topicIndex = this.topicQuestions.findIndex(item => item.id === questionId);
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.selectedAnswer = [];
            for (let i = 0; i < this.topicQuestions[topicIndex].choices.length; i++) {
                for (let j = 0; j < this.topicQuestions[topicIndex].options.length; j++) {
                    if (i === j) {
                        this.selectedAnswer.push({
                            ChoiceId: this.topicQuestions[topicIndex].choices[i].ChoiceId,
                            OptionId: this.topicQuestions[topicIndex].options[j].OptionId
                        });
                    }
                }
            }
            this.checkMatrixAndMatchListAnswers(topicIndex);
        }
    }
    checkMatrixAndMatchListAnswers(index) {
        let sortArr1, sortArr2, duplicateAnswers = [];
        for (let i = 0; i < this.topicQuestions[index].answers.length; i++) {
            for (let j = 0; j < this.selectedAnswer.length; j++) {
                if (this.topicQuestions[index].answers[i].ChoiceId === this.selectedAnswer[j].ChoiceId) {
                    if (this.topicQuestions[index].answers[i].OptionId === this.selectedAnswer[j].OptionId) {
                        duplicateAnswers.push({
                            ChoiceId: this.selectedAnswer[j].ChoiceId,
                            OptionId: this.selectedAnswer[j].OptionId
                        });
                    }
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Wrong";
                }
            }
        }
        if (duplicateAnswers.length > 0) {
            sortArr1 = (obj1, obj2) => { return obj1.ChoiceId - obj2.ChoiceId; };
            const sortedArray1 = duplicateAnswers.sort(sortArr1);
            sortArr2 = (obj1, obj2) => { return obj1.ChoiceId - obj2.ChoiceId; };
            const sortedArray2 = this.selectedAnswer.sort(sortArr2);
            if (duplicateAnswers.length === this.topicQuestions[index].answers.length) {
                if (JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2)) {
                    this.topicQuestions[index].checkAnswer = "Correct";
                }
                else {
                    this.topicQuestions[index].checkAnswer = "Partial";
                }
            }
            else {
                this.topicQuestions[index].checkAnswer = "Partial";
            }
        }
    }
    previousQuestion() {
        this.selectedAnswer = [];
    }
    nextQuestion() {
        this.selectedAnswer = [];
    }
};
GeneralTopicQuestionManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectService"] },
    { type: _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"] },
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"] }
];
GeneralTopicQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-topic-question-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-manage.component.html")).default,
        providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectService"],
        _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"]])
], GeneralTopicQuestionManageComponent);



/***/ })

}]);
//# sourceMappingURL=general-concept-topic-general-concept-topic-module-es2015.js.map