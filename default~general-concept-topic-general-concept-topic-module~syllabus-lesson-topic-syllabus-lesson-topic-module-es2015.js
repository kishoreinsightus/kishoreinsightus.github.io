(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-topic-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-content-manage.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-content-manage.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-xxl-3 mb-3\">\r\n            <ng-select [items]=\"allGrades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGeneralSubjectGrade\"\r\n                (change)=\"onGeneralSubjectGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-xxl-3 mb-3\">\r\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-xxl-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-2\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-4 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"tree-scroll\">\r\n            <div id=\"treeView\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xxl-8 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div>\r\n                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> - Concept,\r\n                <i class=\"fa fa-file ml-2\"></i> - Topic, <i class=\"fa fa-times text-danger ml-2\"></i> - No content is\r\n                mapped\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'concept'\">\r\n            <p><b>Concept name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Concept description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'topic'\">\r\n            <div class=\"d-flex mx-0 row justify-content-between align-items-center\">\r\n                <div class=\"col-xxl-12 px-0\">\r\n                    <p><b>Topic description</b></p>\r\n                    <p class=\"mb-2\">{{nodeDescription}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex align-items-start justify-content-end  w-100\">\r\n                <div class=\"btn btn-primary text-white mb-2\" (click)=\"addContent()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add content\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"d-flex flex-wrap w-100\" *ngIf=\"topicContents\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Order number</th>\r\n                            <th>Title</th>\r\n                            <th>Active Web URL</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody id=\"dragBody\">\r\n                        <tr *ngFor=\"let topiccontent of topicContents;trackBy: trackId;let topicIndex = index\">\r\n                            <td data-column=\"Select\" title=\"{{topiccontent.id}}\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" id=\"{{topiccontent.id}}\"\r\n                                        (change)=\"checkSelectedContents($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{topiccontent.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Order number\" class=\"index\">\r\n                                {{topiccontent.orderNumber}}\r\n                            </td>\r\n                            <td data-column=\"Title\">\r\n                                <div class=\"w-auto text-clip\" tooltip=\" {{topiccontent.content.title}}\">\r\n                                    {{topiccontent.content.title}}\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Active Web URL\">\r\n                                <a class=\"btn btn-link text-ellipsis\" href=\"{{topiccontent.content.webUrl}}\"\r\n                                    target=\"_blank\">\r\n                                    {{topiccontent.content.webUrl}}\r\n                                </a>\r\n                            </td>\r\n                            <td data-column=\"Actions\">\r\n                                <div class=\"d-flex\">\r\n                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                        (click)=\"viewContent(topiccontent.content.id)\" tooltip=\"View content\">\r\n                                        <i class=\"fa fa-eye\"></i>\r\n                                    </a>\r\n                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                        (click)=\"editContent(topiccontent.content.id)\" tooltip=\"Edit content\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"topicContents.length > 0\">\r\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopicContent()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\" (click)=\"deleteTopicContents()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\r\n                        (click)=\"updateTopicContentsWithOrderNumber()\">\r\n                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"generalTopicContent\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\" [formGroup]=\"topicContentForm\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} content\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeTopicContentModalWithOutSaving()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Title\r\n                        </label>\r\n                        <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\r\n                            class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\r\n                            inputRestriction=\"alphabetsNumbersWithMinus\" />\r\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            Allowed characters - Alphabets, Numbers and One special character (-)\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group mb-2\">\r\n                        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span>\r\n                        </label>\r\n                        <textarea class=\"form-control description-form\"\r\n                            placeholder=\"Enter description (min length: 3 and max length: 250)\"\r\n                            formControlName=\"contentDescription\"></textarea>\r\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Content type\r\n                    </label>\r\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\r\n                        [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"form-group mb-2\" *ngIf=\"selectedContentType\">\r\n                    <label class=\"col-form-label\">Content source\r\n                    </label>\r\n                    <ng-select [items]=\"contentSource\" [disabled]=\"disableDropdown\"\r\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select content source\"\r\n                        [(ngModel)]=\"selectedContentSource\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource\"> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                        <div class=\"form-group mb-2\" *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                            <label class=\"col-form-label\">File\r\n                            </label>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\r\n                                <label class=\"custom-file-label\" for=\"documentFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                <input type=\"file\" alife-file-to-base64 (onFileChanged)=\"onVideoFileChanges($event)\"\r\n                                    id=\"videoFile\" />\r\n                                <label class=\"custom-file-label\" for=\"videoFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    Only PDF will allow Max file size - 100 MB\r\n                                </div>\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    Max file size - 200 MB\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"d-flex w-100 my-2\">\r\n                                <div *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadVideoFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\r\n                                    <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\r\n                                        <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\r\n                                    </a>\r\n                                    <div *ngIf=\" modalTitleName !=='View'\">\r\n                                        <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\"\r\n                                            *ngIf=\"uploadedFileName\">\r\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete file\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name !== 'File upload'\"> -->\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl1\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher1\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl1\" [checked]=\"checkUrl1\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl1\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl2\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher2\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl2\" [checked]=\"checkUrl2\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl2\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl3\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher3\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl3\" [checked]=\"checkUrl3\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl3\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <!-- </div> -->\r\n                    <!-- </div> -->\r\n                </div>\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <div class=\"d-flex justify-content-between w-100\">\r\n                        <p><b>Title </b></p>\r\n                        <p>{{contentDetails.content.title}}</p>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\r\n                        <p><b>Description</b></p>\r\n                        <p>{{contentDetails.content.description}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url1\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 1</b></p>\r\n                            <p>{{contentDetails.content.url1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 1</b></p>\r\n                            <p>{{contentDetails.content.publisher1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 1</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url1\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url2\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 2</b></p>\r\n                            <p>{{contentDetails.content.url2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 2</b></p>\r\n                            <p>{{contentDetails.content.publisher2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 2</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url2\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 3</b></p>\r\n                            <p>{{contentDetails.content.url3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 3</b></p>\r\n                            <p>{{contentDetails.content.publisher3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 3</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url3\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-danger\" (click)=\"resetTopicContent()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Add'\">\r\n                    <button class=\"btn btn-success\" (click)=\"saveTopicContent()\" [disabled]=\"validateContent\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-success\" (click)=\"updateTopicContents()\" [disabled]=\"validateContent\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <button class=\"btn btn-danger\" (click)=\"closeTopicContentModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-create.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-create.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 1 - Select question type - <span\r\n                        class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12\">\r\n                <pick-question-type></pick-question-type>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateQuestionType\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\r\n                <p class=\"font-20 text-warning\">Step 2 - Build question - <span class=\"text-primary\">{{topicName}}</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mx-3\">\r\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question category</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\r\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\r\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\r\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\r\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\r\n                                (click)=\"onSelectComplexityLevel(level.value)\">\r\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 3 - Add solution content (Optional) - <span\r\n                        class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mb-2\">\r\n                <label for=\"\">Solution content</label>\r\n                <ckeditor class=\"w-100\" [config]=\"editorSolutionConfig\" [(ngModel)]=\"solutionContent\"\r\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                    [required]=\"true\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"loadPreviewQuestion()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 4 - Summary - <span class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <div\r\n                *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3 p-3\">\r\n                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2  font-18\"\r\n                        *ngFor=\"let choice of questionResource.Choices;let i = index\">\r\n                        <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\r\n                            <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" disabled readonly>\r\n                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                        </div>\r\n                        <label for=\"{{choice.ChoiceId}}\">\r\n                            <p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <div class=\"text-dark\" *ngFor=\"let data of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"data | sanitizeHtml\">\r\n                            </span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\r\n                    <tr class=\"bg-lightgray\">\r\n                        <td></td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <p [MathJax]=\"option.OptionText | sanitizeHtml\"></p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\r\n                        <td>\r\n                            <p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p>\r\n                        </td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <div class=\"radio\">\r\n                                <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\r\n                                    name=\"{{ choice.ChoiceId }}\">\r\n                                <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span *ngIf=\"answers.length > 0\">\r\n                            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                -\r\n                                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                {{checkIndex  === answers.length - 1? ' ' : ','}}\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngFor=\"let answer of answers\">\r\n                    <div class=\"choice-container\">\r\n                        <div class=\"item\">\r\n                            <div class=\"choice--group\">\r\n                                <div class=\"choice--label\">\r\n                                    <p [MathJax]=\"answer.choiceName  | sanitizeHtml\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"line-circle\">\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"drag--container\">\r\n                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                    [MathJax]=\"answer.optionName  | sanitizeHtml\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n                        <span *ngIf=\"answers.length > 0\">\r\n                            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                -\r\n                                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSaveQuestion\">\r\n            <button class=\"btn btn-success float-right ml-2\" (click)=\"saveQuestion()\" [disabled]=\"showAddQuestion\">\r\n                <i class=\"fa fa-save mr-2\"></i>\r\n                Save question\r\n            </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showAddQuestion\">\r\n            <button class=\"btn btn-info float-right\" (click)=\"addQuestion()\">\r\n                <i class=\"fa fa-plus-circle mr-2\"></i>\r\n                Add one more question\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"previous btn btn-danger float-right mr-2\" (click)=\"resetPreviewQuestions()\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-manage.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-manage.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-xxl-3 mb-3\">\r\n            <ng-select [items]=\"allGrades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGeneralSubjectGrade\"\r\n                (change)=\"onGeneralSubjectGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-xxl-3 mb-3\">\r\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-xxl-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-2\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-4 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"tree-scroll\">\r\n            <div id=\"treeView\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xxl-8 mb-3 py-3\">\r\n\r\n        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div>\r\n                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> - Concept,\r\n                <i class=\"fa fa-file ml-2\"></i> - Topic, <i class=\"fa fa-times text-danger ml-2\"></i> - No question is\r\n                mapped\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'concept'\">\r\n            <p><b>Concept name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Concept description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'topic'\">\r\n            <div class=\"w-100\">\r\n                <p><b>Topic description</b></p>\r\n                <p class=\"mb-2\">{{nodeDescription}}</p>\r\n            </div>\r\n            <div class=\"d-flex align-items-start flex-wrap justify-content-md-between justify-content-lg-end w-100\">\r\n                <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openPreviewQuestionModal()\" *ngIf=\"questions.length > 0\">\r\n                    <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                    <span class=\"badge badge-light\">{{questions.length}}</span>\r\n                </div>\r\n                <div class=\"btn btn-success mb-2 mr-2\" (click)=\"openSimulateQuestionModal()\"\r\n                    *ngIf=\"questions.length > 0\">\r\n                    <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                    <span class=\"badge badge-light\">{{questions.length}}</span>\r\n                </div>\r\n                <a class=\"btn btn-primary text-white mb-2 mr-2\" target=\"_blank\"\r\n                    [routerLink]=\"['/general-concept-and-topic',topicId,'general-topic-question-create']\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\r\n                </a>\r\n                <div class=\"btn btn-warning text-white mb-2\" (click)=\"loadUpdatedTopicQuestions()\">\r\n                    <i class=\"fa fa-refresh mr-2\"></i> Refresh\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"accordion\" id=\"questions\">\r\n                <div class=\"mb-2 acd-group\" *ngFor=\"let question of questions;let index=index\">\r\n                    <div class=\"card-header border\">\r\n                        <h5 class=\"mb-0\">\r\n                            <a href=\"#questionDetail{{question.id}}\"\r\n                                class=\"btn-block text-left text-muted acd-heading collapsed d-flex\"\r\n                                data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                                <div style=\"width: 99%;\" [MathJax]=\"question.questionText\">\r\n                                </div>\r\n                            </a>\r\n                        </h5>\r\n                    </div>\r\n                    <div id=\"questionDetail{{question.id}}\" class=\"collapse\" data-parent=\"#questions\">\r\n                        <div class=\"card-body p-3\">\r\n                            <div class=\"d-flex justify-content-between mb-2\">\r\n                                <div>\r\n                                    <b>Question type</b> : {{question.questionType}}\r\n                                </div>\r\n                                <div>\r\n                                    <b>Question category</b> : {{question.questionCategory}}\r\n                                </div>\r\n                                <div>\r\n                                    <b>Completexity level</b> : {{question.complexityLevel}}\r\n                                </div>\r\n                                NOTE: Select question category and complexity Level dropdown will come**\r\n                            </div>\r\n                            <div class=\"d-flex justify-content-end w-100\">\r\n                                <a class=\"btn btn-info  mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                    target=\"_blank\"\r\n                                    [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-view' ]\">\r\n                                    <i class=\"fa fa-eye mr-2\"></i> View\r\n                                </a>\r\n                                <a class=\"btn btn-success mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                    target=\"_blank\"\r\n                                    [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-edit' ]\">\r\n                                    <i class=\"fa fa-edit mr-2\"></i> Edit\r\n                                </a>\r\n                                <a class=\"btn btn-danger mb-2 mr-2 d-flex justify-content-center align-items-center\"\r\n                                    (click)=\"deleteTopicQuestions(question.id)\">\r\n                                    <i class=\"fa fa-trash mr-2\"></i> Delete\r\n                                </a>\r\n                                <a class=\"btn btn-success mb-2 d-flex justify-content-center align-items-center\"\r\n                                    (click)=\"updateQuestion()\">\r\n                                    <i class=\"fa fa-save mr-2\"></i> Save\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"simulateQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"simulateQuestionModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Simulate question - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\r\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div cdkDropListGroup>\r\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n                                        <div class=\"mcq-left mr-2\">\r\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\r\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n                                        <div class=\"mcq-right ml-2\">\r\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\r\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\r\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\"\r\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\r\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\r\n                                </div>\r\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\r\n                                    (click)=\"nextQuestion()\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"previewQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"previewQuestionModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Preview question - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                [answers]=\"questiondata.answers\" disabled readonly>\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\r\n                                                readonly [answers]=\"questiondata.answers\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\r\n                                    <div class=\"choice-container\">\r\n                                        <div class=\"item\">\r\n                                            <div class=\"choice--group\">\r\n                                                <div class=\"choice--label\">\r\n                                                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"line-circle\">\r\n                                        </div>\r\n                                        <div class=\"item\">\r\n                                            <div class=\"drag--container\">\r\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"d-flex text-dark flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ' ,'}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"d-flex text-dark flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-block my-2\" *ngIf=\"viewmodel\">\r\n    <p class=\"font-20 font-bold\">Question</p>\r\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\r\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\"  [required]=\"true\">\r\n    </ckeditor>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-20 font-bold\">Response</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewmodel.Options\">\r\n        <div class=\"editor\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #choiceInput=\"ngModel\"\r\n                placeholder=\"Enter question (min length: 3 and max length: 4000)\" \r\n                [required]=\"true\">\r\n            </ckeditor>\r\n        </div>\r\n        <div class=\"delete d-flex align-items-end ml-4 font-20 text-danger\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n        <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"drag--container\">\r\n    <p class=\"font-20 font-bold\">Preview</p>\r\n    <div [questionPreview]=\"viewmodel.Question\" class=\"preview-panel\">\r\n    </div>\r\n    <div class=\"option--container options zone\">\r\n        <span *ngFor=\"let option of viewmodel.Options\" [attr.data-option-id]=\"option.OptionId\" class=\"option--item\"\r\n            [MathJax]=\"option.OptionText | sanitizeHtml\"> </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\r\n    <button class=\"btn btn-danger mr-2\" type=\"submit\" (click)=\"cancel()\">\r\n        <i class=\"fa fa-times mr-2\"></i> Cancel</button>\r\n    <button class=\"btn btn-success\" type=\"submit\" (click)=\"saveQuestion()\">\r\n        <i class=\"fa fa-save mr-2\"></i> Save Question</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/matchlist/matchlist.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/matchlist/matchlist.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-2\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\r\n        <h5 class=\"font-16\">Compose question - Match list</h5>\r\n        <div>\r\n            <a class=\"btn btn-warning text-white mb-2 mr-2\" target=\"_blank\" [routerLink]=\"['/lesson-topic','ocr']\">\r\n                <i class=\"fa fa-cog mr-2\"></i>OCR tool\r\n            </a>\r\n            <a target=\"_blank\" class=\"btn btn-info\" routerLink=\"./topic-question-sample\">\r\n                <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\r\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\r\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\" [required]=\"true\">\r\n    </ckeditor>\r\n    <span class=\"text-danger font-15 my-2\" *ngIf=\"!questionInput.valid\">\r\n        Question is required\r\n    </span>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Left side option</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\" #choiceInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\r\n                Left side option is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-center ml-3 font-20 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n        <button class=\"btn btn-info\" (click)=\"addChoice()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add left option</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Right side option</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #optionInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!optionInput.valid\">\r\n                Right side option is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-center ml-4 font-20 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n        <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add right option</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"drag--container mb-2\">\r\n    <p class=\"font-16\">Setting up answers</p>\r\n\r\n    <div cdkDropListGroup>\r\n        <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n            <div class=\"mcq-left mr-2\">\r\n                <div class=\"match-list\" data-value=\"viewModel.Choices\">\r\n                    <div class=\"list-box\" *ngFor=\"let item of viewModel.Choices\"\r\n                        [MathJax]=\"item.ChoiceText | sanitizeHtml\"></div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n            <div class=\"mcq-right ml-2\">\r\n                <div cdkDropList [cdkDropListData]=\"viewModel.Options\" class=\"match-list\"\r\n                    (cdkDropListDropped)=\"updatedDropList($event)\">\r\n                    <div class=\"list-box\" *ngFor=\"let item of viewModel.Options\" cdkDrag\r\n                        [MathJax]=\"item.OptionText | sanitizeHtml\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n            <span *ngIf=\"answers.length > 0\">\r\n                <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                    -\r\n                    <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                    {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n            </span>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row my-2\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\r\n        <h5 class=\"font-16\">Compose question - Choice matrix question</h5>\r\n        <div>\r\n            <a class=\"btn btn-warning text-white mb-2 mr-2\" target=\"_blank\" [routerLink]=\"['/lesson-topic','ocr']\">\r\n                <i class=\"fa fa-cog mr-2\"></i>OCR tool\r\n            </a>\r\n            <a target=\"_blank\" class=\"btn btn-info\" routerLink=\"./topic-question-sample\">\r\n                <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\r\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\" [required]=\"true\">\r\n    </ckeditor>\r\n    <span class=\"text-danger font-15 my-2\" *ngIf=\"!questionInput.valid\">\r\n        Question is required\r\n    </span>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Stems</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [required]=\"true\" [(ngModel)]=\"choice.ChoiceText\"\r\n                #choiceInput=\"ngModel\" placeholder=\"Enter choice (min length: 1 and max length: 4000)\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\r\n                Stem is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n    <button class=\"btn btn-info\" (click)=\"addChoice()\">\r\n        <i class=\"fa fa-plus-circle mr-2\"></i> Add stem</button>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Options</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #optionInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!optionInput.valid\">\r\n                Option is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n    <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n        <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Setting up answers</p>\r\n</div>\r\n\r\n<table class=\"table-matrix my-2\">\r\n    <tr class=\"bg-lightgray\">\r\n        <td></td>\r\n        <td *ngFor=\"let option of viewModel.Options\">\r\n            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n        </td>\r\n    </tr>\r\n    <tr style=\"background: none !important;\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n        <td *ngFor=\"let option of viewModel.Options\">\r\n            <div class=\"radio\">\r\n                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\" [choicematrix]=\"viewModel.Answers\"\r\n                    [optionid]=\"option.OptionId\" [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\"\r\n                    (click)=\"markAsAnswer(choice, option)\">\r\n                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n<div class=\"mb-3 font-18\">\r\n    <div class=\"border-success p-3 alert-success\">\r\n        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n        <span *ngIf=\"answers.length > 0\">\r\n            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                -\r\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </span>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-standard/mcq-standard.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-standard/mcq-standard.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\r\n    <div class=\"row my-2\">\r\n        <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\r\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_SINGLE'\">\r\n                <p class=\"font-16\">Compose question - MCQ single answer</p>\r\n            </div>\r\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_MULTIPLE'\">\r\n                <p class=\"font-16\">Compose question - MCQ multiple answers</p>\r\n            </div>\r\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_TRUE_FALSE'\">\r\n                <p class=\"font-16\">Compose question - MCQ true or false</p>\r\n            </div>\r\n            <div>\r\n                <a class=\"btn btn-warning text-white mb-2 mr-2\" target=\"_blank\"\r\n                    [routerLink]=\"['/lesson-topic','ocr']\">\r\n                    <i class=\"fa fa-cog mr-2\"></i>OCR tool\r\n                </a>\r\n                <a target=\"_blank\" class=\"btn btn-info mb-2\" routerLink=\"./topic-question-sample\">\r\n                    <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\"\r\n                #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                [required]=\"true\">\r\n            </ckeditor>\r\n        </div>\r\n        <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\r\n            Question is required\r\n        </span>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <p class=\"font-16\">Choices</p>\r\n    </div>\r\n    <div class=\"w-100 mb-2 my-2 d-flex\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <div class=\"mcq-choice d-flex align-items-center\"\r\n            [ngClass]=\"{'radio': choiceType === 'radio','checkbox': choiceType === 'checkbox'}\">\r\n            <input type=\"{{choiceType}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"viewModel.Answers\"\r\n                [choiceid]=\"choice.ChoiceId\" (click)=\"markAsAnswer(choice.ChoiceId)\">\r\n            <label for=\"{{choice.ChoiceId}}\"></label>\r\n        </div>\r\n        <div class=\"mcq-question\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\" #choiceInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\r\n                Choice is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action font-22 d-flex align-items-center text-danger d-flex justify-content-end delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\r\n        <div class=\"btn btn-info\" *ngIf=\"viewModel.QuestionType !== 'MCQ_TRUE_FALSE'\" (click)=\"addChoice()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add Choice</div>\r\n    </div>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n            <span *ngIf=\"answers.length > 0\">\r\n                <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                    <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                    {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/pick-question-type/pick-question-type.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/pick-question-type/pick-question-type.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-start flex-wrap\">\r\n    <div *ngFor=\"let type of questionTypes;let i=index;\">\r\n        <label for=\"{{type.id}}\">\r\n            <div class=\"d-flex p-2\" (click)=\"navigateToUrl(type.router)\">\r\n                <div class=\"radio\">\r\n                    <input type=\"radio\" id=\"{{type.id}}\" [checked]=\"type.checked\" name=\"mcq\">\r\n                    <label for=\"{{type.id}}\"></label>\r\n                </div>\r\n                <div>\r\n                    <div class=\"mcq-header\">\r\n                        <p class=\"text-white p-2\">\r\n                            {{type.name}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"mcq-img p-2\">\r\n                        <img src=\"{{type.imgsrc}}\" alt=\"{{type.name}}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </label>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\" id=\"curriculumDropdown\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-4 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"tree-scroll\">\r\n            <div id=\"treeView\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xxl-8 mb-2 py-2\">\r\n        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div>\r\n                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> - Unit,\r\n                <i class=\"fa fa-file ml-2\"></i> - Lesson, <i class=\"fa fa-times text-danger ml-2\"></i> - No resource is\r\n                mapped\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n            <div class=\"w-100\">\r\n                <p><b>Lesson objective</b></p>\r\n                <p class=\"mb-2\">{{nodeDescription}}</p>\r\n            </div>\r\n            <div class=\"d-flex w-100 justify-content-between mb-2 flex-wrap\">\r\n                <div class=\"filterbg p-3 mb-2 w-100\">\r\n                    <p class=\"font-20 mb-3\">Study material preference for {{nodeName}}</p>\r\n                    <div class=\"row m-0 mb-2\">\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"ContentCE\" name=\"content\" [checked]=\"checkContentCE\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"ContentCE\">Default</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"OwnContent\" name=\"content\" [checked]=\"checkOwnContent\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"OwnContent\">Use\r\n                                our own study material</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"w-100 d-flex justify-content-end\">\r\n                            <div class=\"btn btn-success\" (click)=\"saveContentPreference()\">\r\n                                <i class=\"fa fa-save mr-2\"></i>Save\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab w-100\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\r\n                                aria-controls=\"home\" aria-selected=\"false\">Default </a>\r\n                        </li>\r\n                        <li class=\"nav-item\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\r\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by organizations</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\r\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own study material </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\r\n                            aria-labelledby=\"home-tab\">\r\n                            <div class=\"row mb-2\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                                <div class=\"col-md-12 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-primary\" (click)=\"addAddlessonResources()\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\r\n                                        study material\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"addlResource\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\r\n                                    id=\"dragTable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                                                Select</th>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Resource category</th>\r\n                                            <th>Content type</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody id=\"dragBody\">\r\n                                        <tr\r\n                                            *ngFor=\"let resource of addlResource;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Select\" data-column=\"Select\" id=\"{{resource.id}}\"\r\n                                                *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" title=\"{{resource.id}}\" id=\"{{resource.id}}2\"\r\n                                                        (change)=\"checkSelectedContents($event)\" class=\"checkAll\">\r\n                                                    <label for=\"{{resource.id}}2\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Order number\" class=\"index\">\r\n                                                {{resource.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                <div class=\"w-auto text-clip\" tooltip=\"{{resource.content.title}}\">\r\n                                                    {{resource.content.title}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Resource category\">\r\n                                                {{resource.content.tag}}\r\n                                            </td>\r\n                                            <td data-column=\"Content type\">\r\n                                                {{resource.content.contentType}}\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"viewAddlResource(resource.id)\"\r\n                                                        tooltip=\"View study material\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-outline-success mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"editAddlResource(resource.id)\"\r\n                                                        tooltip=\"Edit study material\"\r\n                                                        *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                                    <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"addlResource.length > 0\">\r\n                                        <button class=\"btn btn-danger mr-2\" [disabled]=\"tableGenAction\"\r\n                                            (click)=\"resetSelectedAddlResource()\">\r\n                                            <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger mr-2\" [disabled]=\"tableGenAction\"\r\n                                            (click)=\"deleteAddlResource()\">\r\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                        </button>\r\n                                        <button class=\"btn btn-success\" [disabled]=\"updateGenAction\"\r\n                                            (click)=\"updateAddlResourceWithOrderNumber()\">\r\n                                            <i class=\"fa fa-save mr-2\"></i>Update order\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\"\r\n                            *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_STUDYMATERIAL_ADMIN']\">\r\n                            <div class=\"col-12 filterbg py-2 px-4 rounded my-4\">\r\n                                <div class=\"filtericon font-20\">\r\n                                    <i class=\"fa fa-filter\"></i>\r\n                                </div>\r\n                                <div class=\"row col-xxl-4 mb-3\">\r\n                                    <ng-select [items]=\"organisations\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        bindLabel=\"name\" placeholder=\"Select organisation\"\r\n                                        [(ngModel)]=\"selectedOrganisation\" class=\"w-100\">\r\n                                    </ng-select>\r\n                                </div>\r\n                                <div class=\"w-100 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-success\" (click)=\"getOrgGeneralAddlResourceByOrganisation()\">\r\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"orgGeneralAddlResource\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Resource category</th>\r\n                                            <th>Content type</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let resource of orgGeneralAddlResource;trackBy: trackId;\">\r\n                                            <td data-column=\"Order number\">\r\n                                                {{resource.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                <div class=\"w-auto text-clip\" tooltip=\"{{resource.content.title}}\">\r\n                                                    {{resource.content.title}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Resource category\">\r\n                                                {{resource.content.tag}}\r\n                                            </td>\r\n                                            <td data-column=\"Content type\">\r\n                                                {{resource.content.contentType}}\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"viewOrgAddlResource(resource.id)\"\r\n                                                        tooltip=\"View study material\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-md-12 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-primary\" (click)=\"addOwnAddlResources()\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\r\n                                        resources\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ownAddlResource\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\r\n                                    id=\"ownContentDragTable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Resource category</th>\r\n                                            <th>Content type</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody id=\"ownContentDragBody\">\r\n                                        <tr *ngFor=\"let resource of ownAddlResource;trackBy: trackId;\">\r\n                                            <td data-column=\"Select\" data-column=\"Select\" id=\"{{resource.id}}\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" title=\"{{resource.id}}\" id=\"{{resource.id}}1\"\r\n                                                        (change)=\"checkSelectedOwnContents($event)\"\r\n                                                        class=\"checkAllOwnContents\">\r\n                                                    <label for=\"{{resource.id}}1\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Order number\" class=\"index\">\r\n                                                {{resource.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                <div class=\"w-auto text-clip\" tooltip=\"{{resource.content.title}}\">\r\n                                                    {{resource.content.title}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Resource category\">\r\n                                                {{resource.content.tag}}\r\n                                            </td>\r\n                                            <td data-column=\"Content type\">\r\n                                                {{resource.content.contentType}}\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"viewOwnAddlResource(resource.id)\"\r\n                                                        tooltip=\"View study material\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"editOwnAddlResource(resource.id)\"\r\n                                                        tooltip=\"Edit study material\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"ownAddlResource.length > 0\">\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"resetSelectedOwnAddlResource()\">\r\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"deleteOwnAddlResource()\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                    </button>\r\n                                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\r\n                                        (click)=\"updateOwnAddlResourceWithOrderNumber()\">\r\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"additionalResourceModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" [formGroup]=\"lessonResourceForm\"\r\n        role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} study material\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeLessonResourceModalWithOutSaving()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Title\r\n                    </label>\r\n                    <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\r\n                        class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\r\n                        inputRestriction=\"alphabetsNumbersWithMinus\" />\r\n                    <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                        Allowed characters - Alphabets, Numbers and One special character (-)\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Description <span class=\"text-muted\"\r\n                            *ngIf=\"modalTitleName !== 'View'\">(Optional)</span>\r\n                    </label>\r\n                    <textarea class=\"form-control description-form\"\r\n                        placeholder=\"Enter description (min length: 3 and max length: 250)\"\r\n                        formControlName=\"contentDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\r\n                    <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                        Allowed characters - Alphabets, Numbers and Special characters\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Resource category\r\n                    </label>\r\n                    <ng-select [items]=\"resourceCategory\" [disabled]=\"disableDropdown\"\r\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select resource category\"\r\n                        [(ngModel)]=\"selectedCategory\" formControlName=\"resourceCategory\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Content type\r\n                    </label>\r\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\r\n                        formControlName=\"contentType\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div *ngIf=\"selectedContentType\">\r\n                    <div class=\"form-group mb-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                        <label class=\"col-form-label\">Web URL\r\n                        </label>\r\n                        <input type=\"url\" class=\"form-control\"\r\n                            placeholder=\"Enter web url(min length: 3 and max length: 2048)\" formControlName=\"webSource\"\r\n                            minlength=\"3\" maxlength=\"2048\">\r\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group mb-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                        <label class=\"col-form-label\">File\r\n                        </label>\r\n                        <div class=\"custom-file\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\r\n                            <label class=\"custom-file-label\" for=\"documentFile\">\r\n                                <i>\r\n                                    {{fileName}}\r\n                                </i></label>\r\n                        </div>\r\n                        <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Only PDF will allow Max file size - 100 MB\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"d-flex w-100 my-2\">\r\n                            <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\r\n                                    *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                    <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\r\n                                <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\r\n                                    <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\r\n                                </a>\r\n                                <div *ngIf=\"modalTitleName !=='View'\">\r\n                                    <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\" *ngIf=\"uploadedFileName\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete file\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"btn btn-danger\" (click)=\"resetLessonResource()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-success\" (click)=\"updateAddlResource()\"\r\n                        [disabled]=\"lessonResourceForm.invalid\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalActionName === 'AddlResource'\">\r\n                    <div *ngIf=\"modalTitleName === 'Add'\">\r\n                        <button class=\"btn btn-success\" (click)=\"saveAddlResource()\"\r\n                            [disabled]=\"lessonResourceForm.invalid\">\r\n                            <i class=\"fa fa-save mr-2\"></i>\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalActionName === 'OwnAddlResource'\">\r\n                    <div *ngIf=\"modalTitleName === 'Add'\">\r\n                        <button class=\"btn btn-success\" (click)=\"saveOwnAddlResource()\"\r\n                            [disabled]=\"lessonResourceForm.invalid\">\r\n                            <i class=\"fa fa-save mr-2\"></i>\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <div class=\"btn btn-danger\" (click)=\"closeLessonResourceModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-4 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandSubjectNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandSubjectNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"tree-scroll\">\r\n            <div id=\"treeView\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xxl-8 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div>\r\n                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> - Unit,\r\n                <i class=\"fa fa-file ml-2\"></i> - Lesson, <i class=\"fa fa-times ml-2\"></i> - No topic is\r\n                mapped\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\r\n                <div class=\"mb-2\">\r\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\r\n                </div>\r\n                <div class=\"d-flex align-items-start\">\r\n                    <a class=\"btn btn-primary text-white mb-2\" (click)=\"addNewGeneralTopicMapping()\">\r\n                        <i class=\"fa fa-cog mr-2\"></i> Add new general topic\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"lessonTopicsList\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Order number</th>\r\n                            <th>General topic name</th>\r\n                            <th>New topic name</th>\r\n                            <th>Video count</th>\r\n                            <th>Question count</th>\r\n                            <th>Primary applicable grade</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody id=\"dragBody\">\r\n                        <tr *ngFor=\"let lesson of lessonTopicsList;trackBy: trackId;\">\r\n                            <td data-column=\"Select\" title=\"{{lesson.id}}\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" title=\"{{lesson.id}}\" id=\"{{lesson.id}}\"\r\n                                        (change)=\"checkSelectedTopics($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{lesson.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Order number\" class=\"index\">\r\n                                {{lesson.orderNumber}}\r\n                            </td>\r\n                            <td data-column=\"General topic name\">\r\n                                <div class=\"w-auto text-clip\" tooltip=\"{{lesson.generalTopicName}}\">\r\n                                    {{lesson.generalTopicName}}\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"New topic name\">\r\n                                <div class=\"w-auto text-clip\" tooltip=\"{{lesson.topicName}}\">\r\n                                    {{lesson.topicName}}\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Video count\">\r\n                                {{lesson.topicContentCount}}\r\n                            </td>\r\n                            <td data-column=\"Question count\">\r\n                                {{lesson.questionsCount}}\r\n                            </td>\r\n                            <td data-column=\"Primary applicable grade\">\r\n                                {{lesson.baseGrade}}\r\n                            </td>\r\n                            <td data-column=\"Action\">\r\n                                <div class=\"d-flex\">\r\n                                    <a class=\"btn btn-outline-success mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                        (click)=\"editLessonTopic(lesson.id)\" tooltip=\"Edit lesson topic name\">\r\n                                        <i class=\"fa fa-edit\"></i>\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"lessonTopicsList.length > 0\">\r\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopic()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger mx-2\" [disabled]=\"tableAction\" (click)=\"deleteLessonTopics()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\" (click)=\"updateLessonTopics()\">\r\n                        <i class=\"fa fa-save mr-2\"></i> Update order\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"addNewTopicMappingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewTopicMappingModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Add new general topic mapping - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicMapping()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"col-12 filterbg my-4 rounded\">\r\n                    <div class=\"filtericon font-20\">\r\n                        <i class=\"fa fa-filter\"></i>\r\n                    </div>\r\n                    <div class=\"row d-flex justify-content-start align-items-center\">\r\n                        <div class=\"col-lg-3 mb-3\">\r\n                            <ng-select [items]=\"allGrades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                                placeholder=\"Select grade\" [(ngModel)]=\"selectedGeneralSubjectGrade\"\r\n                                (change)=\"onGeneralSubjectGradeChange()\">\r\n                            </ng-select>\r\n                        </div>\r\n                        <div class=\"col-lg-3 mb-3\">\r\n                            <ng-select [items]=\"generalSubjectList\" [ngModelOptions]=\"{standalone: true}\"\r\n                                bindLabel=\"title\" placeholder=\"Select general subject\"\r\n                                [(ngModel)]=\"selectedGeneralSubject\">\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end pb-3 row\">\r\n                        <div class=\"col-lg-2\">\r\n                            <button class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                (click)=\"loadGeneralSubjectTree()\">\r\n                                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-3\">\r\n                        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubjectTree.length > 1\">\r\n                            <div class=\"btn btn-primary mr-2\" (click)=\"toggleGeneralSubjectTreeNodes()\">\r\n                                <i class=\"fa fa-clone mr-2\"></i>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === false\">\r\n                                    Expand all\r\n                                </span>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === true\">\r\n                                    Collapse all\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tree-scroll\">\r\n                            <div id=\"generalSubjectTreeView\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xxl-9\">\r\n                        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\"\r\n                            *ngIf=\"generalSubjectTree.length > 1\">\r\n                            <div>\r\n                                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> -\r\n                                Concept,\r\n                                <i class=\"fa fa-file ml-2\"></i> - Topic\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'root'\">\r\n                            <p><b>Subject name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Subject description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"modalNodeType === 'concept'\" class=\"p-3\">\r\n                            <div class=\"my-2\">\r\n                                <p><b>Concept name</b> - {{nodeName}}</p>\r\n                                <p><b>Concept description</b> - {{nodeDescription}}</p>\r\n                            </div>\r\n                            <div *ngIf=\"generalSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of generalSubTopicsList;\">\r\n                                            <td data-column=\"Select\">\r\n                                                <label for=\"{{topic.id}}+123\">\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"{{topic.id}}\" id=\"{{topic.id}}+123\"\r\n                                                            (change)=\"checkNewlyAddedTopics($event)\"\r\n                                                            [checked]=\"topic.disabled\" [disabled]=\"topic.disabled\">\r\n                                                        <label for=\"{{topic.id}}+123\"></label>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </td>\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"d-flex justify-content-end my-2\">\r\n                                <button class=\"btn btn-info\" [disabled]=\"addToListAction\" (click)=\"addTopicToList()\">\r\n                                    <i class=\"fa fa-plus-circle mr-2\"></i> Add to list\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"selectedGeneralSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                            <th>Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of selectedGeneralSubTopicsList;\">\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                            <td data-column=\"Action\">\r\n                                                <div class=\"btn btn-outline-danger\"\r\n                                                    (click)=\"removeFromNewTopicList(topic.id)\">\r\n                                                    <i class=\"fa fa-trash\"></i>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'topic'\">\r\n                            <p><b>Topic name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Topic description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeTopicMappingModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n                <div class=\"btn btn-success\" (click)=\"saveLessonTopicMapping()\">\r\n                    <i class=\"fa fa-save mr-2\"></i> Save\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"editLessonTopicModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\" [formGroup]=\"lessonTopicForm\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Edit lesson topic\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicName()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">General topic name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"generalTopicName\" />\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">New topic name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"newTopicName\"\r\n                        placeholder=\"Enter new topic name (minlength: 3 and maxlength: 75)\"\r\n                        inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\r\n                    <div class=\"text-muted font-15 my-2\">\r\n                        Allowed characters - Alphabets, Numbers and Special character (-)\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-danger\" (click)=\"resetEditLessonTopicModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Reset\r\n                </button>\r\n                <button class=\"btn btn-success\" (click)=\"updateLessonTopicName()\">\r\n                    <i class=\"fa fa-save mr-2\"></i>\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-4 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandSubjectNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandSubjectNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"tree-scroll\">\r\n            <div id=\"treeView\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xxl-8 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div>\r\n                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> - Unit,\r\n                <i class=\"fa fa-file ml-2\"></i> - Lesson, <i class=\"fa fa-times ml-2 text-danger\"></i> - No topic is\r\n                mapped\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\r\n                <div class=\"mb-2\">\r\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\r\n                </div>\r\n                <div class=\"d-flex align-items-start\">\r\n                    <a class=\"btn btn-primary text-white mb-2\" (click)=\"addNewGeneralTopicMapping()\">\r\n                        <i class=\"fa fa-cog mr-2\"></i> Add new general topic\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"lessonTopicsList\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Order number</th>\r\n                            <th>Topic name</th>\r\n                            <th>Video count</th>\r\n                            <th>Question count</th>\r\n                            <th>Primary applicable grade</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody id=\"dragBody\">\r\n                        <tr *ngFor=\"let lesson of lessonTopicsList;trackBy: trackId;\">\r\n                            <td data-column=\"Select\" title=\"{{lesson.id}}\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" title=\"{{lesson.id}}\" id=\"{{lesson.id}}\"\r\n                                        (change)=\"checkSelectedTopics($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{lesson.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Order number\" class=\"index\">\r\n                                {{lesson.orderNumber}}\r\n                            </td>\r\n                            <td data-column=\"Topic name\">\r\n                                <div class=\"w-auto text-clip\" tooltip=\"{{lesson.displayName}}\">\r\n                                    {{lesson.displayName}}\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Video count\">\r\n                                {{lesson.topicContentCount}}\r\n                            </td>\r\n                            <td data-column=\"Question count\">\r\n                                {{lesson.questionsCount}}\r\n                            </td>\r\n                            <td data-column=\"Primary applicable grade\">\r\n                                {{lesson.baseGrade}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"lessonTopicsList.length > 0\">\r\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopic()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger mx-2\" [disabled]=\"tableAction\" (click)=\"deleteLessonTopics()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\" (click)=\"updateLessonTopics()\">\r\n                        <i class=\"fa fa-save mr-2\"></i> Update order\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"addNewPrereqTopicMappingModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"addNewPrereqTopicMappingModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Add new prerequisite topic mapping - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicMapping()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"col-12 filterbg my-4 rounded\">\r\n                    <div class=\"filtericon font-20\">\r\n                        <i class=\"fa fa-filter\"></i>\r\n                    </div>\r\n                    <div class=\"row d-flex justify-content-start align-items-center\">\r\n                        <div class=\"col-xxl-3 mb-3\">\r\n                            <ng-select [items]=\"allGrades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                                placeholder=\"Select grade\" [(ngModel)]=\"selectedGeneralSubjectGrade\"\r\n                                (change)=\"onGeneralSubjectGradeChange()\">\r\n                            </ng-select>\r\n                        </div>\r\n                        <div class=\"col-xxl-3 mb-3\">\r\n                            <ng-select [items]=\"generalSubjectList\" [ngModelOptions]=\"{standalone: true}\"\r\n                                bindLabel=\"title\" placeholder=\"Select general subject\"\r\n                                [(ngModel)]=\"selectedGeneralSubject\">\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end pb-3 row\">\r\n                        <div class=\"col-xxl-2\">\r\n                            <button class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                (click)=\"loadGeneralSubjectTree()\">\r\n                                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-3\">\r\n                        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubjectTree.length > 1\">\r\n                            <div class=\"btn btn-primary mr-2\" (click)=\"toggleGeneralSubjectTreeNodes()\">\r\n                                <i class=\"fa fa-clone mr-2\"></i>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === false\">\r\n                                    Expand all\r\n                                </span>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === true\">\r\n                                    Collapse all\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tree-scroll\">\r\n                            <div id=\"generalSubjectTreeView\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xxl-9\">\r\n                        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\"\r\n                            *ngIf=\"generalSubjectTree.length > 1\">\r\n                            <div>\r\n                                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> -\r\n                                Concept,\r\n                                <i class=\"fa fa-file ml-2\"></i> - Topic\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'root'\">\r\n                            <p><b>Subject name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Subject description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"modalNodeType === 'concept'\" class=\"p-3\">\r\n                            <div class=\"my-2\">\r\n                                <p><b>Concept name</b> - {{nodeName}}</p>\r\n                                <p><b>Concept description</b> - {{nodeDescription}}</p>\r\n                            </div>\r\n                            <div *ngIf=\"generalSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of generalSubTopicsList;\">\r\n                                            <td data-column=\"Select\">\r\n                                                <label for=\"{{topic.id}}+123\">\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"{{topic.id}}\" id=\"{{topic.id}}+123\"\r\n                                                            (change)=\"checkNewlyAddedTopics($event)\"\r\n                                                            [checked]=\"topic.disabled\" [disabled]=\"topic.disabled\">\r\n                                                        <label for=\"{{topic.id}}+123\"></label>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </td>\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"d-flex justify-content-end my-2\">\r\n                                <button [disabled]=\"addToListAction\" class=\"btn btn-info\" (click)=\"addTopicToList()\">\r\n                                    <i class=\"fa fa-plus-circle mr-2\"></i> Add to list\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"selectedGeneralSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                            <th>Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of selectedGeneralSubTopicsList;\">\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                            <td data-column=\"Action\">\r\n                                                <div class=\"btn btn-outline-danger\"\r\n                                                    (click)=\"removeFromNewTopicList(topic.id)\">\r\n                                                    <i class=\"fa fa-trash\"></i>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'topic'\">\r\n                            <p><b>Topic name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Topic description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeTopicMappingModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n                <div class=\"btn btn-success\" (click)=\"saveLessonTopicMapping()\">\r\n                    <i class=\"fa fa-save mr-2\"></i> Save\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\" (change)=\"onSubjectChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedSubject\">\r\n            <ng-select [items]=\"lessonList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\r\n                placeholder=\"Select lesson\" [(ngModel)]=\"selectedLesson\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"getLessonTopicList()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row d-flex justify-content-between align-items-center\" *ngIf=\"showTopicHeading\">\r\n    <div class=\"col-xxl-3\">\r\n        <h5 class=\"font-20 mb-2\">Lesson topics</h5>\r\n    </div>\r\n    <div class=\"col-xxl-9 d-flex justify-content-between flex-wrap\">\r\n        <div class=\"badge-lightBlue col-xxl-4 p-2 rounded mb-2\">\r\n            NOTE : <i class=\"fa fa-file ml-2\"></i> - Topic, <i class=\"fa fa-times text-danger ml-2\"></i> - No content is\r\n            mapped\r\n        </div>\r\n        <div class=\"col-xxl-4 d-flex justify-content-end mb-2 p-0\">\r\n            <div class=\"btn btn-primary\" (click)=\"openSubjectTreeModal()\">\r\n                <i class=\"fa fa-eye mr-2\"></i>\r\n                View subject tree\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3\">\r\n        <div id=\"topicsList\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9\">\r\n        <div class=\"w-100\" *ngIf=\"topicDescription\">\r\n            <p><b>Topic description</b></p>\r\n            <p class=\"mb-2\">{{topicDescription}}</p>\r\n        </div>\r\n        <div class=\"py-2\" *ngIf=\"showContentMapping\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center mb-2 flex-wrap\">\r\n                <div class=\"filterbg p-3 mb-2 w-100\">\r\n                    <p class=\"font-20 mb-3\">Content preference for {{topicName}}</p>\r\n                    <div class=\"row m-0 mb-2\">\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"ContentCE\" name=\"content\" [checked]=\"checkContentCE\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"ContentCE\">Default</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"OwnContent\" name=\"content\" [checked]=\"checkOwnContent\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"OwnContent\">Use\r\n                                our own content</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"w-100 d-flex justify-content-end\">\r\n                            <div class=\"btn btn-success\" (click)=\"saveContentPreference()\">\r\n                                <i class=\"fa fa-save mr-2\"></i>Save\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab w-100\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <!-- <li class=\"nav-item\">\r\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\r\n                                aria-controls=\"home\" aria-selected=\"false\">Default </a>\r\n                        </li> -->\r\n                        <li class=\"nav-item\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_VIDEO_ADMIN']\">\r\n                            <a class=\"nav-link show active\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\"\r\n                                role=\"tab\" aria-controls=\"profile\" aria-selected=\"true\">Recommended by organizations</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\r\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\r\n                                content </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <!-- <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\r\n                            aria-labelledby=\"home-tab\">\r\n                            <div *ngIf=\"generalTopicContents\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Active Web URL</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let topicContent of generalTopicContents;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Order number\">\r\n                                                {{topicContent.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                <div class=\"w-auto text-clip\" tooltip=\"{{topicContent.content.title}}\">\r\n                                                    {{topicContent.content.title}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Active Web URL\">\r\n                                                <a class=\"btn btn-link text-ellipsis\"\r\n                                                    href=\"{{topicContent.content.webUrl}}\" target=\"_blank\">\r\n                                                    {{topicContent.content.webUrl}}\r\n                                                </a>\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"viewCETopicContent(topicContent.id)\"\r\n                                                        tooltip=\"View content\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"tab-pane fade py-3 active show\" id=\"profile\" role=\"tabpanel\"\r\n                            aria-labelledby=\"profile-tab\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_VIDEO_ADMIN']\">\r\n                            <div class=\"col-12 filterbg py-2 px-4 rounded my-4\">\r\n                                <div class=\"filtericon font-20\">\r\n                                    <i class=\"fa fa-filter\"></i>\r\n                                </div>\r\n                                <div class=\"row col-xxl-4 mb-3\">\r\n                                    <ng-select [items]=\"organisations\" class=\"w-100\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                                        placeholder=\"Select organisation\" [(ngModel)]=\"selectedOrganisation\">\r\n                                    </ng-select>\r\n                                </div>\r\n                                <div class=\"w-100 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                        (click)=\"getOrgTopicContentByOrgId()\">\r\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"orgGeneralTopicContents\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Active Web URL</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let orgcontent of orgGeneralTopicContents;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Order number\">\r\n                                                {{orgcontent.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                <div class=\"w-auto text-clip\" tooltip=\"{{orgcontent.content.title}}\">\r\n                                                    {{orgcontent.content.title}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Active Web URL\">\r\n                                                <a class=\"btn btn-link text-ellipsis\"\r\n                                                    href=\"{{orgcontent.content.webUrl}}\" target=\"_blank\">\r\n                                                    {{orgcontent.content.webUrl}}\r\n                                                </a>\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"viewOrgTopicContent(orgcontent.id)\"\r\n                                                        tooltip=\"View content\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-md-12 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-primary\" (click)=\"addOwnTopicContent()\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\r\n                                        content\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ownTopicContents\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\r\n                                    id=\"dragTable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Active Web URL</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody id=\"dragBody\">\r\n                                        <tr\r\n                                            *ngFor=\"let topicContent of ownTopicContents;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Select\" title=\"{{topicContent.id}}\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" title=\"{{topicContent.id}}\"\r\n                                                        id=\"{{topicContent.id}}+1\" class=\"checkAll\"\r\n                                                        (change)=\"checkSelectedOwnContents($event)\">\r\n                                                    <label for=\"{{topicContent.id}}+1\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Order number\" class=\"index\">\r\n                                                {{topicContent.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                <div class=\"w-auto text-clip\" tooltip=\"{{topicContent.content.title}}\">\r\n                                                    {{topicContent.content.title}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Active Web URL\">\r\n                                                <a class=\"btn btn-link text-ellipsis\"\r\n                                                    href=\"{{topicContent.content.webUrl}}\" target=\"_blank\">\r\n                                                    {{topicContent.content.webUrl}}\r\n                                                </a>\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"viewOwnTopicContent(topicContent.id)\"\r\n                                                        tooltip=\"View content\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon d-flex justify-content-center align-items-center\"\r\n                                                        (click)=\"editOwnTopicContent(topicContent.id)\"\r\n                                                        tooltip=\"Edit content\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"ownTopicContents.length > 0\">\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"resetSelectedOwnTopicContent()\">\r\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"deleteOwnTopicContents()\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                    </button>\r\n                                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\r\n                                        (click)=\"updateOwnTopicContentsWithOrderNumber()\">\r\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"topicContentModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" [formGroup]=\"topicContentForm\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} content\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeTopicContentModalWithOutSaving()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Title\r\n                        </label>\r\n                        <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\r\n                            class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\r\n                            inputRestriction=\"alphabetsNumbersWithMinus\" />\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and One special character (-)\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group mb-2\">\r\n                        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span>\r\n                        </label>\r\n                        <textarea class=\"form-control description-form\"\r\n                            placeholder=\"Enter description (min length: 3 and max length: 250)\"\r\n                            formControlName=\"contentDescription\"></textarea>\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Content type\r\n                    </label>\r\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\r\n                        [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"form-group mb-2\" *ngIf=\"selectedContentType\">\r\n                    <label class=\"col-form-label\">Content source\r\n                    </label>\r\n                    <ng-select [items]=\"contentSource\" [disabled]=\"disableDropdown\"\r\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select content source\"\r\n                        [(ngModel)]=\"selectedContentSource\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource\"> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                        <div class=\"form-group mb-2\" *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                            <label class=\"col-form-label\">File\r\n                            </label>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\r\n                                <label class=\"custom-file-label\" for=\"documentFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                <input type=\"file\" alife-file-to-base64 (onFileChanged)=\"onVideoFileChanges($event)\"\r\n                                    id=\"videoFile\" />\r\n                                <label class=\"custom-file-label\" for=\"videoFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    Only PDF will allow Max file size - 100 MB\r\n                                </div>\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    Max file size - 200 MB\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"d-flex w-100 my-2\">\r\n                                <div *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadVideoFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\r\n                                    <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\r\n                                        <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\r\n                                    </a>\r\n                                    <div *ngIf=\" modalTitleName !=='View'\">\r\n                                        <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\"\r\n                                            *ngIf=\"uploadedFileName\">\r\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete file\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name !== 'File upload'\"> -->\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl1\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher1\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl1\" [checked]=\"checkUrl1\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl1\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl2\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher2\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl2\" [checked]=\"checkUrl2\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl2\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl3\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher3\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl3\" [checked]=\"checkUrl3\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl3\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <!-- </div> -->\r\n                    <!-- </div> -->\r\n                </div>\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <div class=\"d-flex justify-content-between w-100\">\r\n                        <p><b>Title </b></p>\r\n                        <p>{{contentDetails.content.title}}</p>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\r\n                        <p><b>Description</b></p>\r\n                        <p>{{contentDetails.content.description}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url1\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 1</b></p>\r\n                            <p>{{contentDetails.content.url1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 1</b></p>\r\n                            <p>{{contentDetails.content.publisher1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 1</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url1\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url2\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 2</b></p>\r\n                            <p>{{contentDetails.content.url2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 2</b></p>\r\n                            <p>{{contentDetails.content.publisher2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 2</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url2\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 3</b></p>\r\n                            <p>{{contentDetails.content.url3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 3</b></p>\r\n                            <p>{{contentDetails.content.publisher3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 3</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url3\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"modalTitleName === 'ViewOrg'\">\r\n                    <div class=\"d-flex justify-content-between w-100\">\r\n                        <p><b>Title </b></p>\r\n                        <p>{{contentDetails.content.title}}</p>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\r\n                        <p><b>Description</b></p>\r\n                        <p>{{contentDetails.content.description}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url1\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 1</b></p>\r\n                            <p>{{contentDetails.content.url1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 1</b></p>\r\n                            <p>{{contentDetails.content.publisher1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 1</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url1\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url2\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 2</b></p>\r\n                            <p>{{contentDetails.content.url2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 2</b></p>\r\n                            <p>{{contentDetails.content.publisher2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 2</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url2\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 3</b></p>\r\n                            <p>{{contentDetails.content.url3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 3</b></p>\r\n                            <p>{{contentDetails.content.publisher3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 3</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url3\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"btn btn-danger\" (click)=\"resetTopicContent()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Add'\">\r\n                    <button class=\"btn btn-success\" (click)=\"saveTopicContent()\" [disabled]=\"validateForm\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-success\" (click)=\"updateTopicContents()\" [disabled]=\"validateForm\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'View'|| modalTitleName === 'ViewOrg' \">\r\n                    <button class=\"btn btn-danger\" (click)=\"closeTopicContentModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewSubjectTreeModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    View subject tree\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n                    <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                        <i class=\"fa fa-clone mr-2\"></i>\r\n                        <span *ngIf=\"enableExpandNode === false\">\r\n                            Expand all\r\n                        </span>\r\n                        <span *ngIf=\"enableExpandNode === true\">\r\n                            Collapse all\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div id=\"viewTree\"></div>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-end align-items-start\">\r\n                <button class=\"btn btn-danger\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Close\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 1 - Select question type - <span\r\n                        class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12\">\r\n                <pick-question-type></pick-question-type>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateQuestionType\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\r\n                <p class=\"font-20 text-warning\">Step 2 - Build question - <span\r\n                        class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mx-3\">\r\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question category</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\r\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\r\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\r\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\r\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\r\n                                (click)=\"onSelectComplexityLevel(level.value)\">\r\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 3 - Add solution content (Optional) - <span\r\n                        class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mb-2\">\r\n                <label for=\"\">Solution content</label>\r\n                <ckeditor class=\"w-100\" [config]=\"editorSolutionConfig\" [(ngModel)]=\"solutionContent\"\r\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                    [required]=\"true\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"loadPreviewQuestion()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 4 - Summary - <span class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <div\r\n                *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3 p-3\">\r\n                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                        *ngFor=\"let choice of questionResource.Choices;let i = index\">\r\n                        <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\r\n                            <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" disabled readonly>\r\n                            <label for=\"{{choice.ChoiceId}}\">\r\n                                <p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                            *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\r\n                    <tr class=\"bg-lightgray\">\r\n                        <td></td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <p [MathJax]=\"option.OptionText | sanitizeHtml\"></p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\r\n                        <td>\r\n                            <p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p>\r\n                        </td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <div class=\"radio\">\r\n                                <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\r\n                                    name=\"{{ choice.ChoiceId }}\">\r\n                                <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                            *ngFor=\"let data of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"data.choiceName | sanitizeHtml\"></span> -\r\n                            <span [MathJax]=\"data.optionName | sanitizeHtml\"></span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngFor=\"let answer of answers\">\r\n                    <div class=\"choice-container\">\r\n                        <div class=\"item\">\r\n                            <div class=\"choice--group\">\r\n                                <div class=\"choice--label\">\r\n                                    <p [MathJax]=\"answer.choiceName | sanitizeHtml\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"line-circle\">\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"drag--container\">\r\n                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                            *ngFor=\"let data of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"data.choiceName | sanitizeHtml\"></span> -\r\n                            <span [MathJax]=\"data.optionName | sanitizeHtml\"></span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSaveQuestion\">\r\n            <button class=\"btn btn-success float-right ml-2\" (click)=\"saveQuestion()\" [disabled]=\"showAddQuestion\">\r\n                <i class=\"fa fa-save mr-2\"></i>\r\n                Save question\r\n            </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showAddQuestion\">\r\n            <button class=\"btn btn-info float-right\" (click)=\"addQuestion()\">\r\n                <i class=\"fa fa-plus-circle mr-2\"></i>\r\n                Add one more question\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"previous btn btn-danger float-right mr-2\" (click)=\"resetPreviewQuestions()\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n    <a class=\"btn btn-success\" (click)=\"editQuestionRoute()\">\r\n        <i class=\"fa fa-edit mr-2\"></i> Edit question\r\n    </a>\r\n</div>\r\n<div class=\"w-100 mb-2 text-primary font-18\">\r\n    {{topicName}}\r\n</div>\r\n<div *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\r\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-3 p-3\">\r\n        <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n            *ngFor=\"let choice of questionResource.Choices;let i = index\">\r\n            <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\r\n                <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"questionResource.Answers\"\r\n                    [choiceid]=\"choice.ChoiceId\" disabled readonly>\r\n                <label for=\"{{choice.ChoiceId}}\"></label>\r\n            </div>\r\n            <label for=\"{{choice.ChoiceId}}\">\r\n                <span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\r\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\r\n        <tr class=\"bg-lightgray\">\r\n            <td></td>\r\n            <td *ngFor=\"let option of questionResource.Options\">\r\n                <span [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n            </td>\r\n        </tr>\r\n        <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\r\n            <td><span [MathJax]=\"choice.ChoiceText\"></span></td>\r\n            <td *ngFor=\"let option of questionResource.Options\">\r\n                <div class=\"radio\">\r\n                    <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\r\n                        [choicematrix]=\"questionResource.Answers\" [optionid]=\"option.OptionId\"\r\n                        [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\">\r\n                    <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\r\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\r\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngFor=\"let answer of answers\">\r\n        <div class=\"choice-container\">\r\n            <div class=\"item\">\r\n                <div class=\"choice--group\">\r\n                    <div class=\"choice--label\">\r\n                        <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"line-circle\">\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"drag--container\">\r\n                    <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                        [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\r\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\" (change)=\"onSubjectChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedSubject\">\r\n            <ng-select [items]=\"lessonList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\r\n                placeholder=\"Select lesson\" [(ngModel)]=\"selectedLesson\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"getLessonTopicList()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row d-flex justify-content-between align-items-center\" *ngIf=\"showTopicHeading\">\r\n    <div class=\"col-xxl-3\">\r\n        <h5 class=\"font-20 mb-2\">Lesson topics</h5>\r\n    </div>\r\n    <div class=\"col-xxl-9 d-flex justify-content-between flex-wrap\">\r\n        <div class=\"badge-lightBlue col-xxl-8 p-2 rounded mb-2\">\r\n            NOTE : <i class=\"fa fa-file ml-2\"></i> - Topic, <i class=\"fa fa-times ml-2 text-danger\"></i> - No question\r\n            is mapped\r\n        </div>\r\n        <div class=\"col-xxl-4 d-flex justify-content-end mb-2 p-0\">\r\n            <div class=\"btn btn-primary\" (click)=\"openSubjectTreeModal()\">\r\n                <i class=\"fa fa-eye mr-2\"></i>\r\n                View subject tree\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3\">\r\n        <div id=\"topicsList\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-3\">\r\n        <div class=\"w-100\" *ngIf=\"topicDescription\">\r\n            <p><b>Topic description</b></p>\r\n            <p class=\"mb-2\">{{topicDescription}}</p>\r\n        </div>\r\n        <div class=\"py-2\" *ngIf=\"showQuestionMapping\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center mb-2 flex-wrap\">\r\n                <div class=\"filterbg p-3 mb-2 w-100\">\r\n                    <p class=\"font-20 mb-3\">Question preference for {{topicName}}</p>\r\n                    <div class=\"row m-0 mb-2\">\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" class=\"form-check-input\" id=\"QuestionCE\" name=\"question\"\r\n                                [checked]=\"checkQuestionCE\" (change)=\"checkQuestionPreference($event)\">\r\n                            <label for=\"QuestionCE\">Default</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" class=\"form-check-input\" id=\"OwnQuestion\" name=\"question\"\r\n                                [checked]=\"checkOwnQuestion\" (change)=\"checkQuestionPreference($event)\">\r\n                            <label for=\"OwnQuestion\">Use\r\n                                our own question</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mx-0\">\r\n                        <div class=\"w-100 d-flex justify-content-end\" (click)=\"saveQuestionPreference()\">\r\n                            <div class=\"btn btn-success\">\r\n                                <i class=\"fa fa-save mr-2\"></i>Save\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab w-100\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\r\n                                aria-controls=\"home\" aria-selected=\"false\">Default</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_QUESTIONS_ADMIN']\">\r\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\r\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by\r\n                                organizations</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\r\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\r\n                                question </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\r\n                            aria-labelledby=\"home-tab\">\r\n                            <div class=\"row\" *ngIf=\"generalTopicQuestions.length > 0\">\r\n                                <div class=\"col-xxl-12 flex-wrap d-flex justify-content-lg-end\">\r\n                                    <div class=\"btn btn-info mb-2 mr-2\"\r\n                                        (click)=\"openGeneralTopicPreviewQuestionModal()\">\r\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                                    </div>\r\n                                    <div class=\"btn btn-success mb-2\" (click)=\"openGeneralTopicSimulateQuestionModal()\">\r\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"accordion\" id=\"generalTopicQuestions\">\r\n                                <div class=\"mb-2 acd-group\"\r\n                                    *ngFor=\"let question of generalTopicQuestions;let index=index\">\r\n                                    <div class=\"card-header border\">\r\n                                        <h5 class=\"mb-0\">\r\n                                            <a href=\"#questionDetail{{question.questionId}}\"\r\n                                                class=\"btn-block text-left text-muted acd-heading collapsed d-flex\"\r\n                                                data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                                                <div style=\"width: 99%;\" [MathJax]=\"question.questionText\">\r\n                                                </div>\r\n                                            </a>\r\n                                        </h5>\r\n                                    </div>\r\n                                    <div id=\"questionDetail{{question.questionId}}\" class=\"collapse\"\r\n                                        data-parent=\"#generalTopicQuestions\">\r\n                                        <div class=\"card-body p-3\">\r\n                                            <div class=\"d-flex justify-content-between mb-2\">\r\n                                                <div>\r\n                                                    <b>Question category</b> : {{question.questionCategory}}\r\n                                                </div>\r\n                                                <div>\r\n                                                    <b>Question type</b> : {{question.questionType}}\r\n                                                </div>\r\n                                                <div>\r\n                                                    <b>Completexity level</b> : {{question.complexityLevel}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"d-flex justify-content-end w-100\">\r\n                                                <a class=\"btn btn-info  mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                                    target=\"_blank\"\r\n                                                    [routerLink]=\"['/lesson-topic', question.id, 'general-topic-question-view']\">\r\n                                                    <i class=\"fa fa-eye mr-2\"></i> View question\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\"\r\n                            *iusHasAnyAuthority=\"['SYSTEM_ADMIN','MASTER_QUESTIONS_ADMIN']\">\r\n                            <div class=\"w-100 filterbg py-2 px-4 rounded my-4\">\r\n                                <div class=\"filtericon font-20\">\r\n                                    <i class=\"fa fa-filter\"></i>\r\n                                </div>\r\n                                <div class=\"row col-xxl-4 mb-3\">\r\n                                    <ng-select [items]=\"organisations\" class=\"w-100\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                                        placeholder=\"Select organisation\" [(ngModel)]=\"selectedOrganisation\">\r\n                                    </ng-select>\r\n                                </div>\r\n                                <div class=\"w-100 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                        (click)=\"getOrgTopicQuestiontByOrgId()\">\r\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"orgGeneralTopicQuestions.length > 0\">\r\n                                <div class=\"col-xxl-12 d-flex flex-wrap justify-content-lg-end\">\r\n                                    <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openOrgTopicPreviewQuestionModal()\">\r\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                                    </div>\r\n                                    <div class=\"btn btn-success mb-2\" (click)=\"openOrgTopicSimulateQuestionModal()\">\r\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"accordion\" id=\"organisationTopicQuestion\">\r\n                                <div class=\"mb-2 acd-group\"\r\n                                    *ngFor=\"let question of orgGeneralTopicQuestions;let index=index\">\r\n                                    <div class=\"card-header border\">\r\n                                        <h5 class=\"mb-0\">\r\n                                            <a href=\"#organisationQuestionDetail{{question.id}}\"\r\n                                                class=\"btn-block text-left text-muted acd-heading collapsed d-flex\"\r\n                                                data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                                                <div style=\"width: 99%;\" [MathJax]=\"question.questionText\">\r\n                                                </div>\r\n                                            </a>\r\n                                        </h5>\r\n                                    </div>\r\n                                    <div id=\"organisationQuestionDetail{{question.id}}\" class=\"collapse\"\r\n                                        data-parent=\"#organisationTopicQuestion\">\r\n                                        <div class=\"card-body p-3\">\r\n                                            <div class=\"d-flex justify-content-between mb-2\">\r\n                                                <div>\r\n                                                    <b>Question category</b> : {{question.questionCategory}}\r\n                                                </div>\r\n                                                <div>\r\n                                                    <b>Question type</b> : {{question.questionType}}\r\n                                                </div>\r\n                                                <div>\r\n                                                    <b>Completexity level</b> : {{question.complexityLevel}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"d-flex justify-content-end w-100\">\r\n                                                <a class=\"btn btn-info  mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                                    target=\"_blank\"\r\n                                                    [routerLink]=\"['/lesson-topic', question.id, 'topic-question-view' ]\">\r\n                                                    <i class=\"fa fa-eye mr-2\"></i> View question\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\r\n                            <div class=\"row\">\r\n                                <div\r\n                                    class=\"col-xxl-12 flex-wrap d-flex justify-content-lg-end justify-content-md-between\">\r\n                                    <div class=\"btn btn-info mr-2 mb-2\" (click)=\"openOwnTopicPreviewQuestionModal()\"\r\n                                        *ngIf=\"ownTopicQuestions.length > 0\">\r\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                                    </div>\r\n                                    <div class=\"btn btn-success mr-2 mb-2\" (click)=\"openOwnTopicSimulateQuestionModal()\"\r\n                                        *ngIf=\"ownTopicQuestions.length > 0\">\r\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                                    </div>\r\n                                    <a target=\"_blank\" class=\"btn btn-primary mb-2 mr-2\"\r\n                                        [routerLink]=\"['/lesson-topic',generalTopicId,'topic-question-create']\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\r\n                                    </a>\r\n                                    <div class=\"btn btn-warning mb-2\" (click)=\"loadUpdatedTopicQuestion()\">\r\n                                        <i class=\"fa fa-refresh mr-2\"></i> Refresh\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"accordion\" id=\"ownTopicQuestions\">\r\n                                <div class=\"mb-2 acd-group\" *ngFor=\"let question of ownTopicQuestions;let index=index\">\r\n                                    <div class=\"card-header border\">\r\n                                        <h5 class=\"mb-0\">\r\n                                            <a href=\"#ownquestionDetail{{question.questionId}}\"\r\n                                                class=\"btn-block text-left text-muted acd-heading collapsed d-flex\"\r\n                                                data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                                                <div style=\"width: 99%;\" [MathJax]=\"question.questionText\">\r\n                                                </div>\r\n                                            </a>\r\n                                        </h5>\r\n                                    </div>\r\n                                    <div id=\"ownquestionDetail{{question.questionId}}\" class=\"collapse\"\r\n                                        data-parent=\"#ownTopicQuestions\">\r\n                                        <div class=\"card-body p-3\">\r\n                                            <div class=\"d-flex justify-content-between mb-2\">\r\n                                                <div>\r\n                                                    <b>Question type</b> : {{question.questionType}}\r\n                                                </div>\r\n                                                <div>\r\n                                                    <b>Question category</b> : {{question.questionCategory}}\r\n                                                </div>\r\n                                                <div>\r\n                                                    <b>Completexity level</b> : {{question.complexityLevel}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"d-flex justify-content-end w-100\">\r\n                                                <a class=\"btn btn-info  mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                                    target=\"_blank\"\r\n                                                    [routerLink]=\"['/lesson-topic', question.questionId, 'topic-question-view']\">\r\n                                                    <i class=\"fa fa-eye mr-2\"></i> View\r\n                                                </a>\r\n                                                <a class=\"btn btn-success mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                                    target=\"_blank\"\r\n                                                    [routerLink]=\"['/lesson-topic', question.questionId, 'topic-question-edit']\">\r\n                                                    <i class=\"fa fa-edit mr-2\"></i> Edit\r\n                                                </a>\r\n                                                <a class=\"btn btn-danger  mb-2 d-flex justify-content-center align-items-center\"\r\n                                                    (click)=\"deleteOwnTopicQuestions(question.id)\">\r\n                                                    <i class=\"fa fa-trash mr-2\"></i> Delete\r\n                                                </a>\r\n                                                <a class=\"btn btn-success mb-2 d-flex justify-content-center align-items-center\"\r\n                                                    (click)=\"updateQuestion(question.id)\">\r\n                                                    <i class=\"fa fa-trash mr-2\"></i> Save\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewSubjectTreeModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    View subject tree\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n                    <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                        <i class=\"fa fa-clone mr-2\"></i>\r\n                        <span *ngIf=\"enableExpandNode === false\">\r\n                            Expand all\r\n                        </span>\r\n                        <span *ngIf=\"enableExpandNode === true\">\r\n                            Collapse all\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div id=\"viewSubjectTree\"></div>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-end align-items-start\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"simulateTopicQuestionModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"simulateTopicQuestionModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Simulate question - {{topicName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\r\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div cdkDropListGroup>\r\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n                                        <div class=\"mcq-left mr-2\">\r\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\r\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n                                        <div class=\"mcq-right ml-2\">\r\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\r\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\r\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\"\r\n                                                [MathJax]=\"option.OptionText  | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\"\r\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\r\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\r\n                                </div>\r\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\r\n                                    (click)=\"nextQuestion()\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"previewTopicQuestionModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"previewTopicQuestionModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Preview question - {{topicName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                [answers]=\"questiondata.answers\" disabled readonly>\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\r\n                                                readonly [answers]=\"questiondata.answers\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer || sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\r\n                                    <div class=\"choice-container\">\r\n                                        <div class=\"item\">\r\n                                            <div class=\"choice--group\">\r\n                                                <div class=\"choice--label\">\r\n                                                    <span [MathJax]=\"answer.choiceName  | sanitizeHtml\"></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"line-circle\">\r\n                                        </div>\r\n                                        <div class=\"item\">\r\n                                            <div class=\"drag--container\">\r\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                                    [MathJax]=\"answer.optionName  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"text-dark d-flex flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName || sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName || sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\"\r\n                                                [MathJax]=\"option.OptionText  | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"text-dark d-flex flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName || sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName || sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 1 - Edit question - <span class=\"text-primary\">{{topicName}}</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mx-3\">\r\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question category</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\r\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\r\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\r\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\r\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\r\n                                (click)=\"onSelectComplexityLevel(level.value)\">\r\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div\r\n            *ngIf=\"viewModel.QuestionType === 'MCQ_SINGLE' || viewModel.QuestionType === 'MCQ_MULTIPLE' || viewModel.QuestionType === 'MCQ_TRUE_FALSE'\">\r\n            <div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\r\n                <div class=\"row my-2\">\r\n                    <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n                        <h5 class=\"font-18 font-bold\">Compose question</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\"\r\n                            #questionInput=\"ngModel\">\r\n                        </ckeditor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <h5 class=\"font-20 font-bold\">Choices</h5>\r\n            </div>\r\n            <div class=\"w-100 mb-2 my-2 d-flex\" *ngFor=\"let choice of viewModel.Choices\">\r\n                <div class=\"mcq-choice d-flex align-items-center\"\r\n                    [ngClass]=\"{'radio': choiceType === 'radio','checkbox': choiceType === 'checkbox'}\">\r\n                    <input type=\"{{choiceType}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"viewModel.Answers\"\r\n                        [choiceid]=\"choice.ChoiceId\" (click)=\"markAsMCQAnswer(choice.ChoiceId)\">\r\n                    <label for=\"{{choice.ChoiceId}}\"></label>\r\n                </div>\r\n                <div class=\"mcq-question\">\r\n                    <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\"\r\n                        #questionInput=\"ngModel\">\r\n                    </ckeditor>\r\n                </div>\r\n                <div class=\"mcq-action font-22 d-flex align-items-center text-danger d-flex justify-content-end\">\r\n                    <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\r\n                <div class=\"btn btn-info\" *ngIf=\"viewModel.QuestionType !== 'MCQ_TRUE_FALSE'\" (click)=\"addChoice()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add Choice</div>\r\n            </div>\r\n            <div class=\"my-3 font-18\">\r\n                <div class=\"border-success p-3 alert-success\">\r\n                    <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                        *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                        <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                        {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewModel.QuestionType ==='MCQ_CHOICE_MATRIX'\">\r\n            <div class=\"row my-2\">\r\n                <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n                    <h5 class=\"font-18 font-bold\">Compose question</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-xxl-12\">\r\n                    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\">\r\n                    </ckeditor>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-100 d-block my-2\">\r\n                <p class=\"font-20 font-bold\">Stems</p>\r\n                <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\r\n                    <div class=\"mcq-stem\">\r\n                        <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\">\r\n                        </ckeditor>\r\n                    </div>\r\n                    <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger\">\r\n                        <i class=\"fa fa-trash\" (click)=\"deleteStem(choice.ChoiceId)\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n                <button class=\"btn btn-info\" (click)=\"addChoice()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add stem</button>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-block my-2\">\r\n                <p class=\"font-20 font-bold\">Options</p>\r\n                <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\r\n                    <div class=\"mcq-stem\">\r\n                        <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\">\r\n                        </ckeditor>\r\n                    </div>\r\n                    <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger\">\r\n                        <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n                <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-block my-2\">\r\n                <p class=\"font-20 font-bold\">Setting up answers</p>\r\n            </div>\r\n\r\n            <table class=\"table-matrix my-2\">\r\n                <tr class=\"bg-lightgray\">\r\n                    <td></td>\r\n                    <td *ngFor=\"let option of viewModel.Options\">\r\n                        <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                    </td>\r\n                </tr>\r\n                <tr style=\"background: none !important;\" *ngFor=\"let choice of viewModel.Choices\">\r\n                    <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                    <td *ngFor=\"let option of viewModel.Options\">\r\n                        <div class=\"radio\">\r\n                            <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                [choicematrix]=\"viewModel.Answers\" [optionid]=\"option.OptionId\"\r\n                                [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\"\r\n                                (click)=\"markAsMatrixAnswer(choice, option)\">\r\n                            <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <div class=\"mb-3 font-18\">\r\n                <div class=\"border-success p-3 alert-success\">\r\n                    <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                        *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                        <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\r\n                        <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                        {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewModel.QuestionType === 'MCQ_MATCH_LIST'\">\r\n            <match-list [questionResource]=\"viewModel\"></match-list>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" (click)=\"loadQuestionResource()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\r\n                <p class=\"font-20 text-warning\">Step 2 - Edit solution content - <span\r\n                        class=\"text-primary\">{{topicName}}</span></p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mb-2\">\r\n                <label for=\"\">Solution content</label>\r\n                <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"solutionContent\"\r\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                    [required]=\"true\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"updateQuestion()\">\r\n            <i class=\"fa fa-save mr-2\"></i>\r\n            Save question\r\n        </button>\r\n\r\n        <button class=\"btn btn-danger ml-2 float-right next\" (click)=\"resetQuestion()\">\r\n            <i class=\"fa fa-times mr-2\"></i>Reset\r\n        </button>\r\n\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>");

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
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");





let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let GeneralConceptAndTopicService = class GeneralConceptAndTopicService {
    constructor(http) {
        this.http = http;
        this.contentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["content"];
        this.questionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["question"];
        this.topicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["generalTopicContent"];
        this.generalTopicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["generalTopicContentDetails"];
        this.generalTopicQuestionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["generalTopicQuestionDetails"];
    }
    getTopicContentList(id) {
        return this.http.get(`${this.generalTopicContentResourceUrl}/${id}`, { observe: 'response' });
    }
    getTopicQuestionList(id) {
        return this.http.get(`${this.generalTopicQuestionResourceUrl}/${id}`, { observe: 'response' });
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
    deleteTopicQuestion(questionId) {
        return this.http.delete(`${this.questionResourceUrl}/${questionId}`, { observe: 'response' });
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
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");













let GeneralTopicContentManageComponent = class GeneralTopicContentManageComponent {
    constructor(_router, generalSubjectService, generalTopicContentService, formBuilder, pluginService, commonService, changeDetectRef, fileService, errorHandler) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicContentService = generalTopicContentService;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.fileService = fileService;
        this.errorHandler = errorHandler;
        this.subjectTree = [];
        this.topicContents = [];
        this.allGrades = [];
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
        this.allGrades = [
            {
                "id": 1,
                "name": 1
            },
            {
                "id": 2,
                "name": 2
            },
            {
                "id": 3,
                "name": 3
            },
            {
                "id": 4,
                "name": 4
            },
            {
                "id": 5,
                "name": 5
            },
            {
                "id": 6,
                "name": 6
            },
            {
                "id": 7,
                "name": 7
            },
            {
                "id": 8,
                "name": 8
            },
            {
                "id": 9,
                "name": 9
            },
            {
                "id": 10,
                "name": 10
            },
            {
                "id": 11,
                "name": 11
            },
            {
                "id": 12,
                "name": 12
            }
        ];
        this.selectedGeneralSubjectGrade = null;
    }
    ngOnInit() {
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
    onError(errRes) {
        this.errorHandler.handleError(errRes);
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
        this.generalTopicContentService.getTopicContentList(topicId).subscribe((res) => this.assignResponseToTopicList(res.body), (res) => this.onError(res));
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
    onGeneralSubjectGradeChange() {
        if (this.selectedGeneralSubjectGrade) {
            let grade = this.selectedGeneralSubjectGrade.name;
            let status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__["ACTIVE"];
            this.selectedSubject = null;
            this.generalSubjectService
                .getSubjectListByGrade(grade, status)
                .subscribe((res) => this.assignGeneralSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedGeneralSubjectGrade = null;
        this.subjects = [];
    }
    assignGeneralSubjectList(data) {
        this.subjects = [];
        this.subjects = data;
    }
    loadSubjectTree() {
        if (!this.selectedSubject && !this.selectedGeneralSubjectGrade) {
            this.selectedSubject = null;
            this.selectedGeneralSubjectGrade = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
        else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            let subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignResponsetoTree(res.body), (res) => this.onError(res));
            }
        }
    }
    assignResponsetoTree(generalSubject) {
        this.subjectTree = [];
        if (generalSubject.length > 0) {
            for (let i = 0; i < generalSubject.length; i++) {
                if (generalSubject[i].data.contentsCount === 0) {
                    generalSubject[i].icon = "fa fa-times text-danger";
                }
                this.subjectTree.push(generalSubject[i]);
            }
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
        }
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
                this.pluginService.alertMessage("Invalid file format, please upload valid video format ", "error");
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
                this.pluginService.alertMessage("Invalid file format, please upload file in PDF format", "error");
            }
        }
        else {
            this.pluginService.alertMessage("Please choose a file to upload", "error");
        }
    }
    downloadFile() {
        if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
        }
    }
    subscribeToDownloadResponse(result) {
        result.subscribe((res) => this.onDownloadSuccess(res), (errRes) => this.onError(errRes));
    }
    onDownloadSuccess(resp) {
        if (resp.body) {
            let downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(downloadFilePath);
        }
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
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url2);
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url3);
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
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
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Topic content created successfully", "success");
        this.getTopicContentList(this.topicId);
        this.checkContentType();
        this.resetFormValues();
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.loadSubjectTree();
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
        resp.subscribe((res) => this.onDeleteFileSuccess(res), (res) => this.onError(res));
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
        if (this.checkUrl1 === true) {
            contentDetails.webUrl = contentDetails.url1;
            contentDetails.publisher = contentDetails.publisher1;
        }
        else if (this.checkUrl2 === true) {
            contentDetails.webUrl = contentDetails.url2;
            contentDetails.publisher = contentDetails.publisher2;
        }
        else if (this.checkUrl3 === true) {
            contentDetails.webUrl = contentDetails.url3;
            contentDetails.publisher = contentDetails.publisher3;
        }
        else {
            //If user not at all changed active url, defaultly it takes first url as active
            contentDetails.webUrl = contentDetails.url1;
            contentDetails.publisher = contentDetails.publisher1;
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
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url2);
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url3);
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
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
        result.subscribe((res) => this.onUpdateSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateSuccess(res) {
        this.getTopicContentList(this.topicId);
        this.checkContentType();
        this.resetFormValues();
        this.pluginService.alertMessage("Topic content updated successfully", "success");
    }
    resetTopicContent() {
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
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.getTopicContentList(this.topicId);
        this.tableAction = true;
        this.contentIds = [];
        this.loadSubjectTree();
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
        result.subscribe((res) => this.onUpdateTopicContentSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateTopicContentSuccess(res) {
        this.pluginService.alertMessage("Topic content order updated successfully", "success");
        this.getTopicContentList(this.topicId);
        this.resetFormValues();
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
    getEmbedUrl(url) {
        var pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var matches = url.match(pattern);
        if (matches) {
            let embedURL = "https://www.youtube.com/embed/" + matches[1];
            return embedURL;
        }
        return url;
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
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["CoreErrorHandler"] }
];
GeneralTopicContentManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-topic-content-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-content-manage.component.html")).default,
        providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_8__["GeneralSubjectService"],
        _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_9__["FileManagementService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["CoreErrorHandler"]])
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
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/local-storage/local-storage.service */ "./src/app/shared/local-storage/local-storage.service.ts");











let GeneralTopicQuestionCreateComponent = class GeneralTopicQuestionCreateComponent {
    constructor(activatedRoute, router, pluginService, questionBuilderService, questionService, commonService, formBuilder, changedetector, fileService, errorHandler, localStorageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.changedetector = changedetector;
        this.fileService = fileService;
        this.errorHandler = errorHandler;
        this.localStorageService = localStorageService;
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
        this.topicId = Number(this.activatedRoute.snapshot.params['id']);
        if (this.topicId) {
            this.getTopicName();
        }
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
        this.validateQuestionTypeSelectedOrNot();
    }
    getTopicName() {
        let topicDetail = {};
        topicDetail = this.localStorageService.retrieveData("topicDetails");
        if (topicDetail.id === this.topicId) {
            this.topicName = topicDetail.title;
        }
        else {
            this.topicName = "";
        }
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
                    }
                }
                this.showSaveQuestion = true;
                this.updateQuestionResource();
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
                    if (imageTags[i].alt === "") {
                        imageId = "image" + [i];
                        index = i;
                        imageTags[i].setAttribute("id", imageId); //Set id attribute for image 
                        imageUrl = imageTags[i].src; //Get image source 
                        base64 = yield this.getBase64ImageFromUrl(imageUrl);
                        updatedHTMLData = yield this.getAWSFilePath(base64, index, htmlElement);
                    }
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
            let block, contentType, encodedData, fileType, imageType, presignedURL, imageTags, updatedHTMLData, updatedFileName;
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
                        let fileNameSplit;
                        fileNameSplit = updatedFilePath.split("/");
                        updatedFileName = fileNameSplit[fileNameSplit.length - 1];
                        imageTags[index].setAttribute("src", updatedFilePath); //Setting aws filepath in respective image source
                        imageTags[index].setAttribute("alt", updatedFileName); //Passed updatedFileName in alt attribute for delete purpose
                        updatedHTMLData = htmlElement.innerHTML;
                        this.getImagePathUploadedHTML(updatedHTMLData);
                    }
                });
                yield this.fileService.uploadImagefileAWSS3(presignedURL, encodedData);
            }
        });
    }
    getImagePathUploadedHTML(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updatedHTMLDATA = data;
        });
    }
    saveQuestion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let questionResource = {}, jsonConversion, questionDetails, solutionContentJson, updatedSolutionContent, updatedQuestionResource;
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
            yield this.updateImageSrc(this.solutionContent);
            if (this.solutionContent !== "") {
                updatedSolutionContent = this.updatedHTMLDATA;
                solutionContentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedSolutionContent));
            }
            else {
                solutionContentJson = "";
            }
            updatedQuestionResource = this.questionBuilderService.getQuestionResource;
            questionResource.marks = updatedQuestionResource.TotalMarks;
            jsonConversion = JSON.stringify(updatedQuestionResource);
            questionDetails = this.questionBuilderService.convertJsonToString(jsonConversion);
            questionResource.contentJson = questionDetails;
            questionResource.generalTopicId = this.topicId;
            questionResource.solutionJson = solutionContentJson;
            this.subscribeToSaveResponse(this.questionService.saveTopicQuestion(questionResource));
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((resp) => this.onSaveSuccess(resp), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("General Topic question created successfully", "success");
        this.showAddQuestion = true;
        this.showSaveQuestion = false;
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
    onError(errRes) {
        this.errorHandler.handleError(errRes);
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
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"] },
    { type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonLocalStorageService"] }
];
GeneralTopicQuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-topic-question-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-create.component.html")).default,
        providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"],
        _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"],
        _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonLocalStorageService"]])
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
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/local-storage/local-storage.service */ "./src/app/shared/local-storage/local-storage.service.ts");











let GeneralTopicQuestionManageComponent = class GeneralTopicQuestionManageComponent {
    constructor(_router, generalSubjectService, generalTopicQuestionService, pluginService, questionBuilderService, errorHandler, localStorageService) {
        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicQuestionService = generalTopicQuestionService;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.errorHandler = errorHandler;
        this.localStorageService = localStorageService;
        this.subjectTree = [];
        this.questions = [];
        this.topicQuestions = [];
        this.questionResources = [];
        this.selectedAnswer = [];
        this.allGrades = [];
        this.enableExpandNode = false;
        this.tableAction = true;
        this.allGrades = [
            {
                "id": 1,
                "name": 1
            },
            {
                "id": 2,
                "name": 2
            },
            {
                "id": 3,
                "name": 3
            },
            {
                "id": 4,
                "name": 4
            },
            {
                "id": 5,
                "name": 5
            },
            {
                "id": 6,
                "name": 6
            },
            {
                "id": 7,
                "name": 7
            },
            {
                "id": 8,
                "name": 8
            },
            {
                "id": 9,
                "name": 9
            },
            {
                "id": 10,
                "name": 10
            },
            {
                "id": 11,
                "name": 11
            },
            {
                "id": 12,
                "name": 12
            }
        ];
        this.selectedGeneralSubjectGrade = null;
    }
    ngOnInit() {
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
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
        this.generalTopicQuestionService.getTopicQuestionList(topicId).subscribe((res) => this.assignResponseToQuestionList(res.body), (res) => this.onError(res));
    }
    assignResponseToQuestionList(data) {
        let questionDetails = [], question, complexityLevel, questionType;
        this.questions = [];
        this.localStorageService.storeData("topicDetails", data);
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
    onGeneralSubjectGradeChange() {
        if (this.selectedGeneralSubjectGrade) {
            let grade = this.selectedGeneralSubjectGrade.name;
            let status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.selectedSubject = null;
            this.generalSubjectService
                .getSubjectListByGrade(grade, status)
                .subscribe((res) => this.assignGeneralSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedGeneralSubjectGrade = null;
        this.subjects = [];
    }
    assignGeneralSubjectList(data) {
        this.subjects = [];
        this.subjects = data;
    }
    loadSubjectTree() {
        if (!this.selectedSubject && !this.selectedGeneralSubjectGrade) {
            this.selectedSubject = null;
            this.selectedGeneralSubjectGrade = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
        else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            let subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignResponsetoTree(res.body), (res) => this.onError(res));
            }
        }
    }
    assignResponsetoTree(subject) {
        this.subjectTree = [];
        if (subject.length > 0) {
            for (let i = 0; i < subject.length; i++) {
                if (subject[i].data.questionsCount === 0) {
                    subject[i].icon = "fa fa-times text-danger";
                }
                this.subjectTree.push(subject[i]);
            }
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
        }
        this.nodeType = "";
        this.enableExpandNode = false;
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
    deleteTopicQuestions(questionId) {
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
                localthisObject.subscribeToDeleteResponse(localthisObject.generalTopicQuestionService.deleteTopicQuestion(questionId));
            }
        });
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic question deleted successfully", "success");
        this.questions = [];
        this.getTopicQuestionsList(this.topicId);
        this.tableAction = true;
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
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] },
    { type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonLocalStorageService"] }
];
GeneralTopicQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-topic-question-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-topic-question-manage.component.html")).default,
        providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectService"],
        _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"],
        _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonLocalStorageService"]])
], GeneralTopicQuestionManageComponent);



/***/ }),

/***/ "./src/app/general-concept-topic/index.ts":
/*!************************************************!*\
  !*** ./src/app/general-concept-topic/index.ts ***!
  \************************************************/
/*! exports provided: GeneralTopicContentManageComponent, GeneralTopicQuestionManageComponent, GeneralTopicQuestionCreateComponent, GeneralConceptAndTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-topic-content-manage.component */ "./src/app/general-concept-topic/general-topic-content-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicContentManageComponent", function() { return _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_1__["GeneralTopicContentManageComponent"]; });

/* harmony import */ var _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-topic-question-manage.component */ "./src/app/general-concept-topic/general-topic-question-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicQuestionManageComponent", function() { return _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_2__["GeneralTopicQuestionManageComponent"]; });

/* harmony import */ var _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-topic-question-create.component */ "./src/app/general-concept-topic/general-topic-question-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralTopicQuestionCreateComponent", function() { return _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_3__["GeneralTopicQuestionCreateComponent"]; });

/* harmony import */ var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-concept-topic.service */ "./src/app/general-concept-topic/general-concept-topic.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralConceptAndTopicService", function() { return _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]; });








/***/ }),

/***/ "./src/app/general-subject/general-subject.service.ts":
/*!************************************************************!*\
  !*** ./src/app/general-subject/general-subject.service.ts ***!
  \************************************************************/
/*! exports provided: GeneralSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSubjectService", function() { return GeneralSubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");







let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let GeneralSubjectService = class GeneralSubjectService {
    constructor(http) {
        this.http = http;
        this.generalSubjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["generalSubject"];
        this.generalSubjectSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["generalSubjectSearch"];
        this.generalSubjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_6__["generalSubjectTree"];
    }
    getSubjectBySubjectId(id) {
        return this.http.get(`${this.generalSubjectResourceUrl}/${id}`, { observe: 'response' });
    }
    getSubjectSearchList() {
        var reqJSON = {
            "status": _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_5__["ACTIVE"]
        };
        return this.http.post(this.generalSubjectSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    getSubjectListByGrade(grade, status) {
        var reqJSON = {
            "grade": grade,
            "status": status
        };
        return this.http.post(this.generalSubjectSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    getSubjectTreeBySubjectId(id) {
        return this.http.get(`${this.generalSubjectResourceUrlWithTree}/${id}`, { observe: 'response' });
    }
    updateGeneralSubjectStatus(generalSubject) {
        return this.http.put(this.generalSubjectResourceUrl, generalSubject, { observe: 'response' });
    }
    getAllSubjects(req) {
        const options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http.get(this.generalSubjectResourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.generalSubjectResourceUrl}/${id}`, { observe: 'response' });
    }
    saveGeneralSubject(generalSubject) {
        return this.http.post(this.generalSubjectResourceUrlWithTree, generalSubject, { headers: headers, observe: 'response' });
    }
};
GeneralSubjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeneralSubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GeneralSubjectService);



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

/***/ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".choice--group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 20px; }\n\n.choice--answer {\n  width: 5%; }\n\n.choice--editor {\n  width: 95%; }\n\n.choice--delete {\n  width: 5%;\n  text-align: right;\n  font-size: 16px; }\n\n.choice--delete i {\n    cursor: pointer; }\n\n.actions {\n  text-align: center; }\n\n.choice-container, .option-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px; }\n\n.choice-container .item, .option-container .item {\n    width: 45%; }\n\n.choice-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.option--container.zone {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.zone {\n  border: 1px solid #eeeeee;\n  padding: 10px 5px;\n  margin-bottom: 10px;\n  min-height: 50px;\n  border: 1px dashed #e8e6e6; }\n\n.zone .option--container {\n    justify-content: space-around;\n    min-width: 50px; }\n\n.choice--label {\n  min-height: 50px;\n  border: 1px solid #eee;\n  padding: 10px 5px;\n  width: 95%; }\n\n.option--container .option--item {\n  min-height: 50px;\n  border: 1px solid #eee;\n  padding: 10px 5px;\n  background-color: #eaeaea; }\n\n.choice--group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.choice--editor {\n  width: 95%; }\n\n.choice--delete {\n  width: 5%;\n  text-align: right;\n  font-size: 16px; }\n\n.choice--delete i {\n    cursor: pointer; }\n\n.dropzone {\n  outline: solid 1px;\n  height: 50px;\n  height: 50px; }\n\n.actions {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYnVpbGRlci9jbG96ZS9kcmFnLW4tZHJvcC9DOlxcVXNlcnNcXEluc2lnaHR1c1xcRGVza3RvcFxcVGVhY2hlclxcQWRtaW5cXGNlYWRtaW4vc3JjXFxhcHBcXHF1ZXN0aW9uLWJ1aWxkZXJcXGNsb3plXFxkcmFnLW4tZHJvcFxcZHJhZy1uLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksU0FBUyxFQUFBOztBQUdiO0VBQ1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUhuQjtJQUtRLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUkxQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBOztBQUw5QjtJQU9RLDZCQUE2QjtJQUM3QixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBRVEsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBSWY7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFIbkI7SUFLUSxlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksa0JBQWtCO0VBQUUsWUFBWTtFQUNoQyxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1idWlsZGVyL2Nsb3plL2RyYWctbi1kcm9wL2RyYWctbi1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob2ljZS0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2hvaWNlLS1hbnN3ZXIge1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4uY2hvaWNlLS1lZGl0b3Ige1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5jaG9pY2UtLWRlbGV0ZSB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNob2ljZS1jb250YWluZXIsIC5vcHRpb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaG9pY2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG4ub3B0aW9uLS1jb250YWluZXIuem9uZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuLnpvbmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U4ZTZlNjtcclxuICAgIC5vcHRpb24tLWNvbnRhaW5lciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hvaWNlLS1sYWJlbCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLm9wdGlvbi0tY29udGFpbmVyIHtcclxuICAgIC5vcHRpb24tLWl0ZW0ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hvaWNlLS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5jaG9pY2UtLWVkaXRvciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uY2hvaWNlLS1kZWxldGUge1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kcm9wem9uZSB7XHJcbiAgICBvdXRsaW5lOiBzb2xpZCAxcHg7IGhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClozeDrag, Answer, Option, DragAndDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClozeDrag", function() { return ClozeDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropComponent", function() { return DragAndDropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class ClozeDrag {
}
class Answer {
    constructor(ZoneId, OptionId) {
        this.ZoneId = ZoneId;
        this.OptionId = OptionId;
    }
}
class Option {
    constructor(OptionId, OptionText) {
        this.OptionId = OptionId;
        this.OptionText = OptionText;
    }
}
let DragAndDropComponent = class DragAndDropComponent {
    constructor(router, activatedRoute, elementRef) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.elementRef = elementRef;
        this.viewmodel = new ClozeDrag();
    }
    ngOnInit() {
        if (this.activatedRoute.snapshot.data.question) {
            this.viewmodel = this.activatedRoute.snapshot.data.question;
            this.resetDropState();
        }
    }
    ngAfterViewInit() {
        var containers = $(this.elementRef.nativeElement).find(".drag--container");
        //const droppable = new Droppable(containers.get(0), {
        //     draggable: ".option--item",
        //     mirror: {
        //         constrainDimensions: false,
        //         cursorOffsetX: 1,
        //         cursorOffsetY: 1
        //     },
        //     dropzone: ".zone"
        // });
        // droppable.on("droppable:dropped", this.onDropped.bind(this));
        // droppable.on("droppable:stop", (args) => {
        //     let dropzone = $(args.data.dropzone);
        //     if (dropzone.is(".options")) dropzone.removeClass("draggable-dropzone--occupied");
        // });
    }
    onDropped(args) {
        /* If the dropzone is Zone(X) then do nothing... */
        if (!$(args.data.dropzone).is(".cloze--dropzone"))
            return;
        //this.viewmodel.Answers = [];
        Promise.resolve().then(() => {
            let previewpanel = $(this.elementRef.nativeElement).find(".preview-panel");
            previewpanel.find(".zone").map((index, item) => {
                let zoneId = index + 1;
                let optionId = "";
                item = $(item);
                if (item.children().length > 0) {
                    optionId = item.find(".option--item").data("option-id");
                }
                this.viewmodel.Answers.push(new Answer(zoneId, optionId));
            });
        });
    }
    deleteOption(OptionId) {
        this.viewmodel.Options = this.viewmodel.Options.filter((item) => {
            return item.OptionId !== OptionId;
        });
    }
    addOption() {
        this.viewmodel.Options = this.viewmodel.Options || [];
        this.viewmodel.Options.push(new Option(new Date().getUTCMilliseconds(), ""));
    }
    saveQuestion() {
        // console.log(this.viewmodel);
    }
    cancel() {
        this.router.navigateByUrl("assessment/choose");
    }
    /**
     * This method should be invoked only once after the component is loaded
     */
    resetDropState() {
        // this method will restore the state of the dropped item
        Promise.resolve().then(() => {
            if (this.viewmodel.Answers && this.viewmodel.Answers.length > 0) {
                let rootElement = $(this.elementRef.nativeElement);
                let dropPanel = rootElement.find(".preview-panel");
                let optionPool = rootElement.find(".option--container");
                for (var i = 0; i < this.viewmodel.Answers.length; i++) {
                    let zone = dropPanel.find(`.zone:nth-child(${this.viewmodel.Answers[i].ZoneId})`);
                    let droppable = optionPool.find(`[data-option-id='${this.viewmodel.Answers[i].OptionId}']`);
                    zone.append(droppable).addClass("draggable-dropzone--occupied");
                }
            }
        });
    }
};
DragAndDropComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
DragAndDropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drag-n-drop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drag-n-drop.component.scss */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], DragAndDropComponent);



/***/ }),

/***/ "./src/app/question-builder/cloze/question-preview.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/question-builder/cloze/question-preview.directive.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionPreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPreviewDirective", function() { return QuestionPreviewDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionPreviewDirective = class QuestionPreviewDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.rootElement = $(this.elementRef.nativeElement);
    }
    ngOnChanges(change) {
        this.rootElement = $(this.elementRef.nativeElement);
        if (this.rootElement) {
            let preview = this.question ?
                this.question.replace(/{{response}}/g, '<span class="cloze--dropzone zone"></span>') : "";
            this.rootElement.html(preview);
        }
    }
};
QuestionPreviewDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("questionPreview"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionPreviewDirective.prototype, "question", void 0);
QuestionPreviewDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[questionPreview]"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], QuestionPreviewDirective);



/***/ }),

/***/ "./src/app/question-builder/matchlist/matchlist.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/question-builder/matchlist/matchlist.component.ts ***!
  \*******************************************************************/
/*! exports provided: MatchList, Answer, Choice, Option, MatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchList", function() { return MatchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchlistComponent", function() { return MatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");






class MatchList {
    constructor() {
        this.Choices = [];
        this.Options = [];
        this.Answers = [];
    }
}
class Answer {
    constructor(ChoiceId, OptionId) {
        this.ChoiceId = ChoiceId;
        this.OptionId = OptionId;
    }
}
class Choice {
    constructor(ChoiceId, ChoiceText) {
        this.ChoiceId = ChoiceId;
        this.ChoiceText = ChoiceText;
    }
}
class Option {
    constructor(OptionId, OptionText) {
        this.OptionId = OptionId;
        this.OptionText = OptionText;
    }
}
let MatchlistComponent = class MatchlistComponent {
    constructor(route, router, questionService, pluginService, changedetector) {
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.pluginService = pluginService;
        this.changedetector = changedetector;
        this.answers = [];
        this.questionResource = {};
        this.checkDrag = false;
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        this.viewModel = new MatchList();
        this.route.data.subscribe((args) => {
            if (args.type === "MCQ_MATCH_LIST") {
                this.viewModel.QuestionType = args.type;
            }
        });
    }
    ngOnInit() {
        if (this.route.snapshot.data.question) {
            this.viewModel = this.route.snapshot.data.question;
            //this.resetDropState();
        }
        this.getCurrentRouteInfo();
    }
    getCurrentRouteInfo() {
        let splitUrl, routeName;
        splitUrl = this.router.url.split("/");
        routeName = splitUrl.pop();
        if (routeName === "topic-question-edit" || routeName === "general-topic-question-edit") {
            this.viewModel = this.questionResource;
            this.showMatchListAnswers();
            this.checkDrag = true;
        }
    }
    updatedDropList(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.viewModel.Answers = [];
            for (let i = 0; i < this.viewModel.Choices.length; i++) {
                for (let j = 0; j < this.viewModel.Options.length; j++) {
                    if (i === j) {
                        this.viewModel.Answers.push({
                            ChoiceId: this.viewModel.Choices[i].ChoiceId,
                            OptionId: this.viewModel.Options[j].OptionId
                        });
                        this.showMatchListAnswers();
                    }
                }
            }
            this.viewModel.TotalMarks = this.viewModel.Answers.length;
        }
    }
    showMatchListAnswers() {
        let answers = [], matrixChoices = [], matrixOptions = [];
        this.answers = [];
        matrixChoices = [];
        matrixOptions = [];
        answers = this.viewModel.Answers;
        matrixChoices = this.viewModel.Choices;
        matrixOptions = this.viewModel.Options;
        for (let k = 0; k < answers.length; k++) {
            this.answers.push({
                choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
            });
        }
        this.checkDrag = false;
    }
    addChoice() {
        if (this.viewModel.Choices.length > 0) {
            this.viewModel.Choices = [...this.viewModel.Choices,
                new Choice(new Date().getUTCMilliseconds(), "")];
        }
        else if (this.viewModel.Choices.length === 0) {
            this.viewModel.Choices = [];
            this.viewModel.Choices = [...this.viewModel.Choices,
                new Choice(new Date().getUTCMilliseconds(), "")];
        }
        else {
            this.viewModel.Choices = [];
        }
    }
    addOption() {
        if (this.viewModel.Options.length > 0) {
            this.viewModel.Options = [...this.viewModel.Options,
                new Option(new Date().getUTCMilliseconds(), "")];
        }
        else if (this.viewModel.Options.length === 0) {
            this.viewModel.Options = [...this.viewModel.Options,
                new Option(new Date().getUTCMilliseconds(), "")];
        }
        else {
            this.viewModel.Options = [];
        }
    }
    deleteChoice(choiceId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
        }
        else {
            let index = this.viewModel.Choices.findIndex(item => item.ChoiceId === choiceId);
            this.viewModel.Choices.splice(index, 1);
        }
    }
    deleteOption(optionId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
        }
        else {
            let index = this.viewModel.Options.findIndex(item => item.OptionId === optionId);
            this.viewModel.Options.splice(index, 1);
        }
    }
    ngAfterViewChecked() {
        if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
            this.showMatchListAnswers();
        }
        this.changedetector.detectChanges();
    }
    ngOnDestroy() {
        this.viewModel.Question = "";
        this.viewModel.Choices = [];
        this.viewModel.Options = [];
        this.viewModel.QuestionType = "";
        this.viewModel.Answers = [];
    }
};
MatchlistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MatchlistComponent.prototype, "questionResource", void 0);
MatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "match-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./matchlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/matchlist/matchlist.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], MatchlistComponent);



/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/index.ts":
/*!************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/index.ts ***!
  \************************************************************/
/*! exports provided: MCQChoiceMatrix, Answer, Choice, Option, MCQChoiceMatrixComponent, UpdateAnswersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcq-choicematrix.component */ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrix", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["MCQChoiceMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["Answer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["Choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["Option"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrixComponent", function() { return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["MCQChoiceMatrixComponent"]; });

/* harmony import */ var _update_answers_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-answers.directive */ "./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAnswersDirective", function() { return _update_answers_directive__WEBPACK_IMPORTED_MODULE_2__["UpdateAnswersDirective"]; });






/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-matrix {\n  border-collapse: collapse; }\n\n.bg-lightgray {\n  background-color: #f0f0f0 !important; }\n\n.table-matrix tbody tr td,\n.table-matrix tbody tr th {\n  border: 1px solid #dee2e6 !important;\n  text-align: center; }\n\n.roundLabel {\n  padding: 5px; }\n\n.roundLabel:hover {\n  background: #fcfdd8; }\n\n.mcq-stem {\n  width: 95%; }\n\n.mcq-action {\n  width: 5%; }\n\n.radio {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYnVpbGRlci9tY3EtY2hvaWNlbWF0cml4L0M6XFxVc2Vyc1xcSW5zaWdodHVzXFxEZXNrdG9wXFxUZWFjaGVyXFxBZG1pblxcY2VhZG1pbi9zcmNcXGFwcFxccXVlc3Rpb24tYnVpbGRlclxcbWNxLWNob2ljZW1hdHJpeFxcbWNxLWNob2ljZW1hdHJpeC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLG9DQUF1QyxFQUFBOztBQUd6Qzs7RUFFRSxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1idWlsZGVyL21jcS1jaG9pY2VtYXRyaXgvbWNxLWNob2ljZW1hdHJpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi4vLi4vc2Nzcy9jb25zdGFudC5zY3NzXCI7XHJcblxyXG4udGFibGUtbWF0cml4IHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi5iZy1saWdodGdyYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLW1hdHJpeCB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlLW1hdHJpeCB0Ym9keSB0ciB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdW5kTGFiZWwge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnJvdW5kTGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZkZDg7XHJcbn1cclxuXHJcbi5tY3Etc3RlbSB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLm1jcS1hY3Rpb24ge1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MCQChoiceMatrix, Answer, Choice, Option, MCQChoiceMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrix", function() { return MCQChoiceMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrixComponent", function() { return MCQChoiceMatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");





class MCQChoiceMatrix {
    constructor() {
        this.Choices = [];
        this.Options = [];
        this.Answers = [];
    }
}
class Answer {
    constructor(ChoiceId, OptionId) {
        this.ChoiceId = ChoiceId;
        this.OptionId = OptionId;
    }
}
class Choice {
    constructor(choiceId, choiceText) {
        this.ChoiceId = choiceId;
        this.ChoiceText = choiceText;
    }
}
class Option {
    constructor(optionId, optionText) {
        this.OptionId = optionId;
        this.OptionText = optionText;
    }
}
let MCQChoiceMatrixComponent = class MCQChoiceMatrixComponent {
    constructor(route, questionService, pluginService, changedetector) {
        this.route = route;
        this.questionService = questionService;
        this.pluginService = pluginService;
        this.changedetector = changedetector;
        this.answers = [];
        this.viewModel = new MCQChoiceMatrix();
        this.route.data.subscribe((args) => {
            if (args.type === "MCQ_CHOICE_MATRIX") {
                this.viewModel.QuestionType = args.type;
            }
        });
    }
    ngOnInit() {
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        if (this.route.snapshot.data.question)
            Promise.resolve().then(() => {
                this.viewModel = this.route.snapshot.data.question;
            });
    }
    ngAfterViewChecked() {
        if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
        }
        this.changedetector.detectChanges();
    }
    deleteChoice(choiceId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
        }
        else {
            let index = this.viewModel.Choices.findIndex(item => item.ChoiceId === choiceId);
            this.viewModel.Choices.splice(index, 1);
        }
    }
    addChoice() {
        this.viewModel.Choices = [...this.viewModel.Choices, new Choice(new Date().getUTCMilliseconds(), "")];
    }
    addOption() {
        this.viewModel.Options = [...this.viewModel.Options,
            new Option(new Date().getUTCMilliseconds(), "")];
    }
    deleteOption(optionId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
        }
        else {
            let index = this.viewModel.Options.findIndex(item => item.OptionId === optionId);
            this.viewModel.Options.splice(index, 1);
        }
    }
    markAsAnswer(choice, option) {
        let index;
        if (this.viewModel.Answers.length === 0) {
            this.viewModel.Answers = [];
        }
        this.viewModel.Answers.push({
            ChoiceId: choice.ChoiceId,
            OptionId: option.OptionId
        });
        if (this.viewModel.Answers.length > 0) {
            for (let i = 0; i < this.viewModel.Answers.length; i++) {
                for (let j = i + 1; j < this.viewModel.Answers.length; j++) {
                    if (this.viewModel.Answers[i].ChoiceId === this.viewModel.Answers[j].ChoiceId) {
                        index = this.viewModel.Answers.findIndex(item => item.ChoiceId === this.viewModel.Answers[i].ChoiceId);
                        this.viewModel.Answers.splice(index, 1);
                    }
                }
            }
        }
        this.viewModel.TotalMarks = this.viewModel.Answers.length;
        this.showChoiceMatrixAnswers();
    }
    showChoiceMatrixAnswers() {
        let answers = [], matrixChoices = [], matrixOptions = [];
        this.answers = [];
        answers = this.viewModel.Answers;
        matrixChoices = this.viewModel.Choices;
        matrixOptions = this.viewModel.Options;
        for (let k = 0; k < answers.length; k++) {
            this.answers.push({
                choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
            });
        }
    }
    ngOnDestroy() {
        this.viewModel.Question = "";
        this.viewModel.Choices = [];
        this.viewModel.Options = [];
        this.viewModel.QuestionType = "";
        this.viewModel.Answers = [];
    }
};
MCQChoiceMatrixComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
MCQChoiceMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mcq-choicematrix.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mcq-choicematrix.component.scss */ "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], MCQChoiceMatrixComponent);



/***/ }),

/***/ "./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateAnswersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAnswersDirective", function() { return UpdateAnswersDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpdateAnswersDirective = class UpdateAnswersDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.answers = [];
    }
    ngOnChanges(changes) {
        this.elementRef.nativeElement.removeAttribute("checked");
        if (changes["answers"]) {
            let answer = this.answers.findIndex((item) => {
                return item.ChoiceId === this.choiceid;
            });
            if (answer > -1 && this.answers[answer].OptionId === this.optionid) {
                this.elementRef.nativeElement.setAttribute("checked", "checked");
            }
        }
    }
};
UpdateAnswersDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choicematrix'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], UpdateAnswersDirective.prototype, "answers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choiceid'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UpdateAnswersDirective.prototype, "choiceid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('optionid'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UpdateAnswersDirective.prototype, "optionid", void 0);
UpdateAnswersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[choicematrix]"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], UpdateAnswersDirective);



/***/ }),

/***/ "./src/app/question-builder/mcq-standard/index.ts":
/*!********************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/index.ts ***!
  \********************************************************/
/*! exports provided: MCQStandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mcq_standard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mcq-standard.component */ "./src/app/question-builder/mcq-standard/mcq-standard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MCQStandardComponent", function() { return _mcq_standard_component__WEBPACK_IMPORTED_MODULE_1__["MCQStandardComponent"]; });





/***/ }),

/***/ "./src/app/question-builder/mcq-standard/mcq-standard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/mcq-standard.component.ts ***!
  \*************************************************************************/
/*! exports provided: MCQStandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQStandardComponent", function() { return MCQStandardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcq-standard.service */ "./src/app/question-builder/mcq-standard/mcq-standard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");







let MCQStandardComponent = class MCQStandardComponent {
    constructor(mcqService, route, questionService, changedetector, pluginService, fileService) {
        this.mcqService = mcqService;
        this.route = route;
        this.questionService = questionService;
        this.changedetector = changedetector;
        this.pluginService = pluginService;
        this.fileService = fileService;
        this.choiceType = "";
        this.answers = [];
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        this.viewModel = mcqService.getQuestion();
        this.route.data.subscribe((args) => {
            if (args.type === "MCQ_SINGLE") {
                this.choiceType = "radio";
                this.viewModel.QuestionType = args.type;
            }
            if (args.type === "MCQ_MULTIPLE") {
                this.choiceType = "checkbox";
                this.viewModel.QuestionType = args.type;
            }
            if (args.type === "MCQ_TRUE_FALSE") {
                this.choiceType = "radio";
                this.viewModel.Choices = [new _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["Choice"](new Date().getUTCMilliseconds() + 1, "True"), new _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["Choice"](new Date().getUTCMilliseconds(), "False")];
                this.viewModel.QuestionType = args.type;
            }
        });
    }
    ngOnInit() {
        if (this.route.snapshot.data.question)
            Promise.resolve().then(() => {
                this.viewModel = this.mcqService.load(this.route.snapshot.data.question);
            });
    }
    ngAfterViewChecked() {
        if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
            this.showMCQAnswers();
        }
        this.changedetector.detectChanges();
    }
    updateQuestionDetails() {
        this.questionService.generateQuestionResource(this.viewModel);
        this.showMCQAnswers();
    }
    showMCQAnswers() {
        this.answers = [];
        for (let j = 0; j < this.viewModel.Answers.length; j++) {
            let answerText = this.viewModel.Choices.find(item => item.ChoiceId === this.viewModel.Answers[j]).ChoiceText;
            this.answers.push(answerText);
            answerText = "";
        }
    }
    addChoice() {
        this.mcqService.addChoice();
    }
    deleteChoice(choiceId) {
        this.mcqService.deleteChoice(choiceId);
    }
    markAsAnswer(choiceId) {
        if (this.viewModel.QuestionType === 'MCQ_MULTIPLE') {
            this.mcqService.toggleAnswer(choiceId);
        }
        else {
            this.viewModel.Answers = [choiceId];
        }
        this.viewModel.TotalMarks = this.viewModel.Answers.length;
    }
    ngOnDestroy() {
        this.viewModel.Question = "";
        this.viewModel.Choices = [];
        this.viewModel.QuestionType = "";
        this.viewModel.Answers = [];
    }
};
MCQStandardComponent.ctorParameters = () => [
    { type: _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _question_builder_service__WEBPACK_IMPORTED_MODULE_4__["QuestionBuilderService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__["FileManagementService"] }
];
MCQStandardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mcq-standard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-standard/mcq-standard.component.html")).default,
        providers: [_mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _question_builder_service__WEBPACK_IMPORTED_MODULE_4__["QuestionBuilderService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__["FileManagementService"]])
], MCQStandardComponent);



/***/ }),

/***/ "./src/app/question-builder/mcq-standard/mcq-standard.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/mcq-standard.service.ts ***!
  \***********************************************************************/
/*! exports provided: MCQStandard, Choice, MCQStandardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQStandard", function() { return MCQStandard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCQStandardService", function() { return MCQStandardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");



class MCQStandard {
    constructor() {
        this.Choices = [];
        this.Answers = [];
    }
}
class Choice {
    /**
     *
     */
    constructor(ChoiceId, ChoiceText) {
        this.ChoiceId = ChoiceId;
        this.ChoiceText = ChoiceText;
    }
}
let MCQStandardService = class MCQStandardService {
    constructor(pluginService) {
        this.pluginService = pluginService;
        this._question = new MCQStandard();
    }
    addChoice() {
        this._question.Choices.push(new Choice(new Date().getUTCMilliseconds(), ""));
    }
    getQuestion() {
        return this._question;
    }
    deleteChoice(choiceId) {
        if (this._question.Answers.length > 0) {
            for (let i = 0; i < this._question.Answers.length; i++) {
                if (this._question.Answers[i] !== choiceId) {
                    let index = this._question.Choices.findIndex(item => item.ChoiceId === choiceId);
                    this._question.Choices.splice(index, 1);
                }
                else {
                    this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
                }
            }
        }
        else {
            let index = this._question.Choices.findIndex(item => item.ChoiceId === choiceId);
            this._question.Choices.splice(index, 1);
        }
    }
    toggleAnswer(choiceId) {
        var index = this._question.Answers.indexOf(choiceId);
        if (this._question.QuestionType !== "MCQ_MULTIPLE") {
            this._question.Answers = [];
        }
        if (index === -1) {
            this._question.Answers = [...this._question.Answers, choiceId];
        }
        else {
            this._question.Answers = this._question.Answers.filter((item) => { return item !== choiceId; });
        }
    }
    load(question) {
        this._question = question;
        return this._question;
    }
};
MCQStandardService.ctorParameters = () => [
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__["PluginService"] }
];
MCQStandardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__["PluginService"]])
], MCQStandardService);



/***/ }),

/***/ "./src/app/question-builder/mcq-standard/update-answers.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/question-builder/mcq-standard/update-answers.directive.ts ***!
  \***************************************************************************/
/*! exports provided: AnswersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersDirective", function() { return AnswersDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnswersDirective = class AnswersDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnChanges(changes) {
        this.elementRef.nativeElement.removeAttribute("checked");
        if (changes["answers"]) {
            if (this.answers.indexOf(this.choiceid) > -1) {
                this.elementRef.nativeElement.setAttribute('checked', 'checked');
            }
        }
    }
};
AnswersDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('answers'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AnswersDirective.prototype, "answers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choiceid'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AnswersDirective.prototype, "choiceid", void 0);
AnswersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[answers]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AnswersDirective);



/***/ }),

/***/ "./src/app/question-builder/pick-question-type/pick-question-type.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/question-builder/pick-question-type/pick-question-type.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PickQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickQuestionComponent", function() { return PickQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");




let PickQuestionComponent = class PickQuestionComponent {
    constructor(router, route, commonService) {
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.questionTypes = [];
    }
    ngOnInit() {
        this.getQuestionTypeDetails();
    }
    getQuestionTypeDetails() {
        this.commonService.getQuestionTypeList().subscribe((data) => {
            this.questionTypes = data;
            let currentRoute = this.router.url;
            this.setSelectedQuestionType(currentRoute);
        });
    }
    setSelectedQuestionType(currentRoute) {
        let splitUrl = [], lastItem;
        splitUrl = currentRoute.split("/");
        lastItem = "./" + splitUrl.pop();
        for (let i = 0; i < this.questionTypes.length; i++) {
            if (lastItem === this.questionTypes[i].router) {
                this.questionTypes.find(item => item.router === lastItem).checked = true;
            }
        }
    }
    navigateToUrl(url) {
        this.router.navigate([url], { relativeTo: this.route });
    }
};
PickQuestionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
PickQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pick-question-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pick-question-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/pick-question-type/pick-question-type.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], PickQuestionComponent);



/***/ }),

/***/ "./src/app/question-builder/question-builder.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/question-builder/question-builder.module.ts ***!
  \*************************************************************/
/*! exports provided: QuestionBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBuilderModule", function() { return QuestionBuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mcq_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mcq-standard */ "./src/app/question-builder/mcq-standard/index.ts");
/* harmony import */ var _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mcq-standard/update-answers.directive */ "./src/app/question-builder/mcq-standard/update-answers.directive.ts");
/* harmony import */ var _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchlist/matchlist.component */ "./src/app/question-builder/matchlist/matchlist.component.ts");
/* harmony import */ var _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloze/question-preview.directive */ "./src/app/question-builder/cloze/question-preview.directive.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _question_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cloze/drag-n-drop/drag-n-drop.component */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
/* harmony import */ var _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pick-question-type/pick-question-type.component */ "./src/app/question-builder/pick-question-type/pick-question-type.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let QuestionBuilderModule = class QuestionBuilderModule {
};
QuestionBuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _mcq_standard__WEBPACK_IMPORTED_MODULE_2__["MCQStandardComponent"],
            _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__["PickQuestionComponent"],
            _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__["AnswersDirective"],
            _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["MCQChoiceMatrixComponent"],
            _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["UpdateAnswersDirective"],
            _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
            _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
            _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__["QuestionPreviewDirective"]
        ],
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]
        ],
        providers: [_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [
            _mcq_standard__WEBPACK_IMPORTED_MODULE_2__["MCQStandardComponent"],
            _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__["PickQuestionComponent"],
            _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__["AnswersDirective"],
            _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["MCQChoiceMatrixComponent"],
            _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["UpdateAnswersDirective"],
            _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
            _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
            _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__["QuestionPreviewDirective"]
        ]
    })
], QuestionBuilderModule);



/***/ }),

/***/ "./src/app/question-builder/question-builder.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/question-builder/question-builder.service.ts ***!
  \**************************************************************/
/*! exports provided: QuestionBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBuilderService", function() { return QuestionBuilderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionBuilderService = class QuestionBuilderService {
    //mcq-single, mcq-multiple, mcq-true or false, mcq-choice matrix and matchlist
    generateQuestionResource(jsonObj) {
        var jsonData = JSON.stringify(jsonObj);
        this.questionDetails = jsonObj;
        this.saveQuestionResource(jsonData);
    }
    //mcq-single, mcq-multiple, mcq-true or false,mcq-choice matrix and matchlist
    saveQuestionResource(jsonData) {
        this.questionResource = this.convertJsonToString(jsonData);
    }
    get getQuestionResource() {
        return this.questionDetails;
    }
    //JSON to String conversion
    convertJsonToString(jsonData) {
        let jsonString;
        jsonString = jsonData.replace(/"/g, '\\"');
        return jsonString;
    }
    //String to JSON conversion
    convertStringToJson(stringData) {
        let stringJson, parseJsonString;
        stringJson = stringData.replace(/\\"/g, '\"');
        parseJsonString = JSON.parse(stringJson);
        return parseJsonString;
    }
};
QuestionBuilderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], QuestionBuilderService);



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
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");






let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let SubjectService = class SubjectService {
    constructor(http) {
        this.http = http;
        this.subjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["curriculumSubject"];
        this.subjectResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["curriculumSubjectSearch"];
        this.subjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_5__["curriculumSubjectTree"];
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



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CurriculumAdditionalResourcesManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumAdditionalResourcesManageComponent", function() { return CurriculumAdditionalResourcesManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisation/organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");


















let CurriculumAdditionalResourcesManageComponent = class CurriculumAdditionalResourcesManageComponent {
    constructor(_router, activatedRoute, addlResourceService, curriculumService, subjectService, organisationService, eventManager, parseLinks, principalService, pluginService, formBuilder, userLoginInfo, commonService, changeDetectorRef, fileService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.addlResourceService = addlResourceService;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.organisationService = organisationService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.formBuilder = formBuilder;
        this.userLoginInfo = userLoginInfo;
        this.commonService = commonService;
        this.changeDetectorRef = changeDetectorRef;
        this.fileService = fileService;
        this.errorHandler = errorHandler;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.subjectTree = [];
        this.resourceCategory = [];
        this.contentType = [];
        this.resourceIds = [];
        this.ownLessonResourceIds = [];
        this.organisations = [];
        this.addlResource = [];
        this.ownAddlResource = [];
        this.orgGeneralAddlResource = [];
        this.selectedFile = null;
        this.enableExpandNode = false;
        this.checkContentCE = false;
        this.contentPreferenceStatus = false;
        this.validateForm = true;
        this.tableAction = true;
        this.updateAction = true;
        this.tableGenAction = true;
        this.updateGenAction = true;
    }
    ngOnInit() {
        this.loadCurriculums();
        this.createAdditionLessonResourceForm();
        this.getContentCategory();
        this.getContentType();
    }
    getContentCategory() {
        this.commonService.getContentCategoryList().subscribe((categoryData) => {
            this.resourceCategory = categoryData;
        });
    }
    getContentType() {
        this.commonService.getContentTypeList().subscribe((typeData) => {
            this.contentType = typeData;
        });
    }
    createAdditionLessonResourceForm() {
        this.lessonResourceForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(250)]),
            resourceCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            contentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            webSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
        });
    }
    loadCurriculums() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
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
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
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
        result.subscribe((res) => this.onDownloadSuccess(res), (errRes) => this.onError(errRes));
    }
    onDownloadSuccess(resp) {
        if (resp.body) {
            let downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(downloadFilePath);
        }
    }
    checkContentType() {
        if (this.selectedContentType) {
            if (this.selectedContentType.tag === 'DOCUMENT') {
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
        resp.subscribe((res) => this.onDeleteFileSuccess(res), (res) => this.onError(res));
    }
    onDeleteFileSuccess(resp) {
        this.fileName = "No file chosen";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.pluginService.alertMessage("File deleted successfully", "success");
    }
    ngAfterViewInit() {
        this.showSyllabusDetails();
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
    }
    onGradeChange() {
        let curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe((res) => this.assignSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedSubject = null;
    }
    assignSubjectList(data) {
        this.subjectList = [];
        for (let i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
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
    loadSubjectTree() {
        if (this.selectedSubject) {
            let subjectId = this.selectedSubject.id;
            if (subjectId) {
                this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignSubjectTree(res.body), (res) => this.onError(res));
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    }
    assignSubjectTree(subject) {
        this.subjectTree = [];
        if (subject.length > 0) {
            for (let i = 0; i < subject.length; i++) {
                if (subject[i].data.addlContentsCount === 0) {
                    subject[i].icon = "fa fa-times text-danger";
                }
                this.subjectTree.push(subject[i]);
            }
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
        }
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
        this.changeDetectorRef.detectChanges();
    }
    validateTopicContentForm() {
        let contentName, webURL;
        contentName = this.trimValue(this.lessonResourceForm.value.contentTitle);
        webURL = this.trimValue(this.lessonResourceForm.value.webSource);
        if (contentName === "" || contentName === undefined || contentName === null) {
            this.validateForm = true;
        }
        if (this.lessonResourceForm.valid) {
            this.validateForm = false;
        }
        if (this.lessonResourceForm.invalid) {
            this.validateForm = true;
        }
        if ((webURL === "" || webURL === undefined || webURL === null) || (this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null)) {
            this.validateForm = true;
        }
    }
    showSyllabusDetails() {
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
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.lessonId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                    localThisObj.addlResource = [];
                    localThisObj.orgGeneralAddlResource = [];
                    localThisObj.ownAddlResource = [];
                    localThisObj.getAddlResourceList(localThisObj.lessonId);
                    localThisObj.getOrgGeneralAddlResourceByOrganisationId(localThisObj.lessonId);
                    localThisObj.getOrganisationList();
                    localThisObj.getAddlResourcePreference(localThisObj.lessonId);
                    localThisObj.updateAction = true;
                    localThisObj.updateGenAction = true;
                    localThisObj.tableAction = true;
                    localThisObj.tableGenAction = true;
                }
                else {
                }
            }
        });
    }
    getAddlResourceList(lessonId) {
        this.addlResourceService.getAddlResource(lessonId).subscribe((res) => this.assignResponseToAddlResourceList(res.body), (res) => this.onError(res));
    }
    assignResponseToAddlResourceList(data) {
        this.addlResource = data;
        this.sortArrayByOrderNumber(this.addlResource);
        this.dragTableContent();
    }
    getOrgGeneralAddlResourceByOrganisation() {
        let organisationId = this.selectedOrganisation.id;
        this.addlResourceService.getOrgGeneralAddlResourceByOrganisationId(this.lessonId, organisationId).subscribe((res) => this.assignResponseToOrgAddlResource(res.body), (res) => this.onError(res));
    }
    assignResponseToOrgAddlResource(data) {
        this.orgGeneralAddlResource = data;
        this.sortArrayByOrderNumber(this.orgGeneralAddlResource);
    }
    getOrgGeneralAddlResourceByOrganisationId(lessonId) {
        //User login info organisationId
        this.organisationId = this.userLoginInfo.organisationId;
        this.addlResourceService.getOrgGeneralAddlResourceByOrganisationId(lessonId, this.organisationId).subscribe((res) => this.assignResponseToOrgAddlResourceList(res.body), (res) => this.onError(res));
    }
    assignResponseToOrgAddlResourceList(data) {
        this.orgGeneralAddlResource = data;
        this.ownAddlResource = data;
        this.sortArrayByOrderNumber(this.ownAddlResource);
        this.ownAddlResourceDragTableContent();
    }
    getOrganisationList() {
        this.organisationService.getOrganisations().subscribe((res) => this.assignOrgList(res.body), (res) => this.onError(res));
    }
    assignOrgList(data) {
        this.organisations = data;
    }
    sortArrayByOrderNumber(array) {
        array.sort((a, b) => (a.orderNumber > b.orderNumber) ? 1 : -1);
    }
    getAddlResourcePreference(lessonId) {
        this.addlResourceService.getAddlResourcePreference(lessonId, this.organisationId).subscribe((res) => this.onGetPreferenceSuccess(res.body), (res) => this.onError(res));
    }
    onGetPreferenceSuccess(acitveStatus) {
        if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkContentCE = true;
            this.checkOwnContent = false;
        }
        else if (acitveStatus === true) {
            this.checkContentCE = false;
            this.checkOwnContent = true;
        }
    }
    checkContentPreference(event) {
        let check = event.target.checked;
        let name = event.target.id;
        if (check === true && name === "ContentCE") {
            this.contentPreferenceStatus = false;
        }
        else if (check === true && name === "OwnContent") {
            this.contentPreferenceStatus = true;
        }
    }
    saveContentPreference() {
        if (this.contentPreferenceStatus === false) {
            if (this.addlResource.length > 0) {
                this.setContentPreference();
            }
            else {
                this.pluginService.alertMessage("Please add atleast one general additional lesson resources and change preference", "error");
            }
        }
        else if (this.contentPreferenceStatus === true) {
            if (this.ownAddlResource.length > 0) {
                this.setContentPreference();
            }
            else {
                this.pluginService.alertMessage("Please add atleast one own additional lesson resources and change preference", "error");
            }
        }
    }
    setContentPreference() {
        this.addlResourceService.setAddlResourcePreference(this.contentPreferenceStatus, this.lessonId, this.organisationId).subscribe((res) => this.onSuccess(res.body), (res) => this.onError(res));
    }
    onSuccess(data) {
        this.pluginService.alertMessage("Content preference saved successfully", "success");
    }
    resetFormValues() {
        this.lessonResourceForm.reset();
        this.selectedCategory = null;
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.fileName = "No file chosen";
    }
    addAddlessonResources() {
        this.openLessonResourceModal();
        this.modalTitleName = "Add";
        this.modalActionName = "AddlResource";
        this.resetFormValues();
        this.enableFormFields();
    }
    addOwnAddlResources() {
        this.openLessonResourceModal();
        this.modalTitleName = "Add";
        this.modalActionName = "OwnAddlResource";
        this.resetFormValues();
        this.enableFormFields();
    }
    openLessonResourceModal() {
        this.pluginService.showModalWindow("#additionalResourceModal");
    }
    closeLessonResourceModal() {
        this.pluginService.hideModalWindow("#additionalResourceModal");
    }
    viewAddlResource(contentId) {
        let lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.addlResource.filter(item => item.id === contentId);
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "View";
        this.modalActionName = "AddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    }
    editAddlResource(contentId) {
        let lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.addlResource.filter(item => item.id === contentId);
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "Edit";
        this.modalActionName = "AddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    }
    viewOrgAddlResource(contentId) {
        let lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.orgGeneralAddlResource.filter(item => item.id === contentId);
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "View";
        this.modalActionName = "OrgAddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    }
    editOwnAddlResource(contentId) {
        let lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.ownAddlResource.filter(item => item.id === contentId);
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "Edit";
        this.modalActionName = "OwnAddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    }
    viewOwnAddlResource(contentId) {
        let lessonResourcesDetails = [], lessonResourceDetail = {};
        lessonResourceDetail.content = {};
        lessonResourcesDetails = this.ownAddlResource.filter(item => item.id === contentId);
        lessonResourceDetail = lessonResourcesDetails[0];
        this.modalTitleName = "View";
        this.modalActionName = "OwnAddlResource";
        this.patchContentFormfields(lessonResourceDetail);
        this.openLessonResourceModal();
    }
    patchContentFormfields(lessonResourceDetail) {
        this.contentId = lessonResourceDetail.content.id;
        this.selectedCategory = this.resourceCategory.filter(item => item.tag === lessonResourceDetail.content.tag)[0];
        this.selectedContentType = this.contentType.filter(item => item.tag === lessonResourceDetail.content.contentType)[0];
        this.lessonResourceForm.patchValue({
            contentTitle: lessonResourceDetail.content.title,
            contentDescription: lessonResourceDetail.content.description
        });
        if (this.selectedContentType.tag === "DOCUMENT") {
            this.showFileAction = true;
            this.fileName = lessonResourceDetail.content.fileName;
            this.uploadedFileName = lessonResourceDetail.content.fileName;
            this.uploadedFilePath = lessonResourceDetail.content.filePath;
        }
        else if (this.selectedContentType.tag === "VIDEO") {
            this.lessonResourceForm.patchValue({
                webSource: lessonResourceDetail.content.webUrl
            });
        }
        if (this.modalTitleName === "View") {
            this.disableFormFields();
        }
        else if (this.modalTitleName === "Edit" || this.modalTitleName === "Add") {
            this.enableFormFields();
        }
    }
    disableFormFields() {
        this.lessonResourceForm.get('contentTitle').disable();
        this.lessonResourceForm.get('contentDescription').disable();
        this.lessonResourceForm.get('resourceCategory').disable();
        this.lessonResourceForm.get('contentType').disable();
        this.lessonResourceForm.get('webSource').disable();
        //this.disableDropdown = true;
    }
    enableFormFields() {
        this.lessonResourceForm.get('contentTitle').enable();
        this.lessonResourceForm.get('contentDescription').enable();
        this.lessonResourceForm.get('resourceCategory').enable();
        this.lessonResourceForm.get('contentType').enable();
        this.lessonResourceForm.get('webSource').enable();
        //this.disableDropdown = false;
    }
    saveAddlResource() {
        if (this.lessonResourceForm.valid) {
            let addlResources = [], addlResource = {};
            addlResource.content = {};
            addlResource.lessonId = this.lessonId;
            addlResource.orderNumber = this.addlResource.length + 1;
            addlResource.content.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
            addlResource.content.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
            addlResource.content.tag = this.selectedCategory.tag;
            addlResource.content.contentType = this.selectedContentType.tag;
            if (this.selectedContentType.tag === "VIDEO") {
                addlResource.content.contentSource = "WEB_URL";
                addlResource.content.webUrl = this.getEmbedUrl(this.trimValue(this.lessonResourceForm.value.webSource));
            }
            else if (this.selectedContentType.tag === "DOCUMENT") {
                addlResource.content.contentSource = "FILE_UPLOAD";
                addlResource.content.fileName = this.uploadedFileName;
                addlResource.content.filePath = this.uploadedFilePath;
            }
            addlResources.push(addlResource);
            this.addlResourceService.saveAddlResource(addlResources).subscribe((res) => this.onSaveSuccess(res.body), (res) => this.onError(res.error));
        }
        if (this.lessonResourceForm.invalid) {
            return;
        }
    }
    saveOwnAddlResource() {
        if (this.lessonResourceForm.valid) {
            let orgGeneralAddlResources = [], orgGeneralAddlResource = {};
            orgGeneralAddlResource.content = {};
            orgGeneralAddlResource.lessonId = this.lessonId;
            orgGeneralAddlResource.organisationId = this.userLoginInfo.organisationId;
            orgGeneralAddlResource.orderNumber = this.ownAddlResource.length + 1;
            orgGeneralAddlResource.content.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
            orgGeneralAddlResource.content.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
            orgGeneralAddlResource.content.tag = this.selectedCategory.tag;
            orgGeneralAddlResource.content.contentType = this.selectedContentType.tag;
            if (this.selectedContentType.tag === "VIDEO") {
                orgGeneralAddlResource.content.contentSource = "WEB_URL";
                orgGeneralAddlResource.content.webUrl = this.getEmbedUrl(this.trimValue(this.lessonResourceForm.value.webSource));
            }
            else if (this.selectedContentType.tag === "DOCUMENT") {
                orgGeneralAddlResource.content.contentSource = "FILE_UPLOAD";
                orgGeneralAddlResource.content.fileName = this.uploadedFileName;
                orgGeneralAddlResource.content.filePath = this.uploadedFilePath;
            }
            orgGeneralAddlResources.push(orgGeneralAddlResource);
            this.addlResourceService.saveOwnAddlResource(orgGeneralAddlResources).subscribe((res) => this.onSaveSuccess(res.body), (res) => this.onError(res.error));
        }
        if (this.lessonResourceForm.invalid) {
            return;
        }
    }
    onSaveSuccess(resp) {
        this.pluginService.alertMessage("Additional Lesson resource added successfully", "success");
        this.resetFormValues();
        this.closeLessonResourceModal();
        this.getAddlResourceList(this.lessonId);
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        this.loadSubjectTree();
    }
    updateAddlResource() {
        let contentResource = {};
        contentResource = {};
        contentResource.id = this.contentId;
        contentResource.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
        contentResource.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
        contentResource.tag = this.selectedCategory.tag;
        contentResource.contentType = this.selectedContentType.tag;
        if (this.selectedContentType.tag === "VIDEO") {
            contentResource.contentSource = "WEB_URL";
            contentResource.webUrl = this.getEmbedUrl(this.trimValue(this.lessonResourceForm.value.webSource));
        }
        else if (this.selectedContentType.tag === "DOCUMENT") {
            contentResource.contentSource = "FILE_UPLOAD";
            contentResource.fileName = this.uploadedFileName;
            contentResource.filePath = this.uploadedFilePath;
        }
        this.subscribeToUpdateResponse(this.addlResourceService.updateContentSource(contentResource));
    }
    subscribeToUpdateResponse(result) {
        result.subscribe((res) => this.onUpdateSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateSuccess(res) {
        this.pluginService.alertMessage("Additional Lesson resource updated successfully", "success");
        this.resetFormValues();
        this.closeLessonResourceModal();
        this.getAddlResourceList(this.lessonId);
    }
    checkSelectedContents(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableGenAction = false;
            this.resourceIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.resourceIds.findIndex(item => item === selectedId);
            this.resourceIds.splice(index, 1);
        }
        this.resourceIds = this.removeDuplicateElements(this.resourceIds);
        if (this.resourceIds.length <= 0) {
            this.tableGenAction = true;
        }
    }
    checkSelectedOwnContents(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableAction = false;
            this.ownLessonResourceIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.ownLessonResourceIds.findIndex(item => item === selectedId);
            this.ownLessonResourceIds.splice(index, 1);
        }
        this.ownLessonResourceIds = this.removeDuplicateElements(this.ownLessonResourceIds);
        if (this.ownLessonResourceIds.length <= 0) {
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
    resetSelectedAddlResource() {
        this.resourceIds = [];
        this.tableGenAction = true;
        $(".checkAll").prop("checked", false);
    }
    resetSelectedOwnAddlResource() {
        this.ownLessonResourceIds = [];
        this.tableAction = true;
        $(".checkAllOwnContents").prop("checked", false);
    }
    deleteAddlResource() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete additional lesson resources ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.resourceIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.addlResourceService.deleteAddlResource(localthisObject.resourceIds));
                }
            }
        });
    }
    deleteOwnAddlResource() {
        var localthisObject = this;
        if (this.contentPreferenceStatus === true) {
            this.pluginService.alertMessage("Please change your content preference and do delete action, ", "error");
        }
        else {
            swal({
                title: "Are you sure to delete additional lesson resources ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                confirmButtonColor: "#32b432",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function (isConfirm) {
                if (isConfirm === true) {
                    if (localthisObject.ownLessonResourceIds.length > 0) {
                        localthisObject.subscribeToDeleteResponse(localthisObject.addlResourceService.deleteOwnAddlResource(localthisObject.ownLessonResourceIds));
                    }
                }
            });
        }
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.tableGenAction = true;
        this.tableAction = true;
        this.resourceIds = [];
        this.ownLessonResourceIds = [];
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        this.getAddlResourceList(this.lessonId);
        this.loadSubjectTree();
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
            localThisObj.updateAddlResourceOrder();
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
    ownAddlResourceDragTableContent() {
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
            localThisObj.updateOwnAddlResourceOrder();
        };
        $("#ownContentDragTable #ownContentDragBody")
            .sortable({
            helper: fixHelperModified,
            stop: updateIndex
        });
        $("#ownContentDragBody").sortable({
            distance: 1,
            opacity: 0, delay: 10,
            cursor: "move",
            update: function () { }
        });
    }
    updateAddlResourceOrder() {
        this.updateGenAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach((row) => {
            let list = row.querySelectorAll('td');
            var contentId = Number(list[0].id);
            var newOrderNum = Number(list[1].textContent);
            for (let i = 0; i < this.addlResource.length; i++) {
                if (this.addlResource[i].id === contentId) {
                    this.addlResource[i].orderNumber = newOrderNum;
                    break;
                }
            }
            this.sortArrayByOrderNumber(this.addlResource);
        });
    }
    updateOwnAddlResourceOrder() {
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#ownContentDragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach((row) => {
            let list = row.querySelectorAll('td');
            var contentId = Number(list[0].id);
            var newOrderNum = Number(list[1].textContent);
            for (let i = 0; i < this.ownAddlResource.length; i++) {
                if (this.ownAddlResource[i].id === contentId) {
                    this.ownAddlResource[i].orderNumber = newOrderNum;
                    break;
                }
            }
            this.sortArrayByOrderNumber(this.ownAddlResource);
        });
    }
    updateAddlResourceWithOrderNumber() {
        let updatedAddlResource = [];
        for (let i = 0; i < this.addlResource.length; i++) {
            updatedAddlResource.push({
                id: this.addlResource[i].id,
                orderNumber: this.addlResource[i].orderNumber
            });
        }
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
                    localthisObject.subscribeToUpdateAddlResouceResponse(localthisObject.addlResourceService.updateAddlResource(updatedAddlResource));
                }
            }
        });
    }
    subscribeToUpdateAddlResouceResponse(result) {
        result.subscribe((res) => this.onUpdateAddlSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateAddlSuccess(res) {
        this.pluginService.alertMessage("Additional resource order updated successfully", "success");
        this.getAddlResourceList(this.lessonId);
        this.updateGenAction = true;
        this.resetFormValues();
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
    }
    updateOwnAddlResourceWithOrderNumber() {
        let updatedOwnAddlResource = [];
        for (let i = 0; i < this.ownAddlResource.length; i++) {
            updatedOwnAddlResource.push({
                id: this.ownAddlResource[i].id,
                orderNumber: this.ownAddlResource[i].orderNumber
            });
        }
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
                    localthisObject.subscribeToUpdateOwnAddlResouceResponse(localthisObject.addlResourceService.updateOwnAddlResource(updatedOwnAddlResource));
                }
            }
        });
    }
    subscribeToUpdateOwnAddlResouceResponse(result) {
        result.subscribe((res) => this.onUpdateOwnAddlSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateOwnAddlSuccess(res) {
        this.pluginService.alertMessage("Additional resource order updated successfully", "success");
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        this.updateAction = true;
        this.resetFormValues();
        this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
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
    closeLessonResourceModalWithOutSaving() {
        if (this.modalTitleName === "View") {
            this.closeLessonResourceModal();
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
                    localthisObject.closeLessonResourceModal();
                }
                else {
                    localthisObject.closeLessonResourceModal();
                }
            });
        }
    }
    resetLessonResource() {
        this.lessonResourceForm.reset();
        this.fileName = "";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.selectedContentType = null;
        this.selectedCategory = null;
    }
    getEmbedUrl(url) {
        var pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var matches = url.match(pattern);
        if (matches) {
            let embedURL = "https://www.youtube.com/embed/" + matches[1];
            return embedURL;
        }
        return url;
    }
};
CurriculumAdditionalResourcesManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"] },
    { type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"] },
    { type: _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_6__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["CoreErrorHandler"] }
];
CurriculumAdditionalResourcesManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addl-resource-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"],
        _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"],
        _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_6__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["CoreErrorHandler"]])
], CurriculumAdditionalResourcesManageComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/index.ts":
/*!************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/index.ts ***!
  \************************************************/
/*! exports provided: CurriculumAdditionalResourcesManageComponent, LessonTopicManageComponent, PrerequisiteLessonTopicManageComponent, CurriculumTopicContentManageComponent, CurriculumTopicQuestionCreateComponent, CurriculumTopicQuestionDetailsComponent, CurriculumTopicQuestionManageComponent, CurriculumTopicQuestionUpdateComponent, SyllabusLessonTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addl-resource/addl-resource-manage.component */ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurriculumAdditionalResourcesManageComponent", function() { return _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_1__["CurriculumAdditionalResourcesManageComponent"]; });

/* harmony import */ var _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson-topic/lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessonTopicManageComponent", function() { return _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__["LessonTopicManageComponent"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrerequisiteLessonTopicManageComponent", function() { return _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_3__["PrerequisiteLessonTopicManageComponent"]; });

/* harmony import */ var _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-content/topic-content-manage.component */ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicContentManageComponent", function() { return _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_4__["CurriculumTopicContentManageComponent"]; });

/* harmony import */ var _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic-question/topic-question-create.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionCreateComponent", function() { return _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumTopicQuestionCreateComponent"]; });

/* harmony import */ var _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topic-question/topic-question-details.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionDetailsComponent", function() { return _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumTopicQuestionDetailsComponent"]; });

/* harmony import */ var _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic-question/topic-question-manage.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionManageComponent", function() { return _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumTopicQuestionManageComponent"]; });

/* harmony import */ var _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topic-question/topic-question-update.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionUpdateComponent", function() { return _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumTopicQuestionUpdateComponent"]; });

/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicService", function() { return _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_9__["SyllabusLessonTopicService"]; });














/***/ }),

/***/ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LessonTopicManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTopicManageComponent", function() { return LessonTopicManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");













let LessonTopicManageComponent = class LessonTopicManageComponent {
    constructor(_router, activatedRoute, curriculumService, subjectService, lessonTopicService, eventManager, parseLinks, principalService, pluginService, generalSubjectService, formBuilder, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.lessonTopicService = lessonTopicService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.generalSubjectService = generalSubjectService;
        this.formBuilder = formBuilder;
        this.errorHandler = errorHandler;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.generalSubjectList = [];
        this.subjectTree = [];
        this.generalSubjectTree = [];
        this.lessonTopicsList = [];
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.allGrades = [];
        this.topicIds = [];
        this.lessonTopicIds = [];
        this.enableExpandSubjectNode = false;
        this.enableExpandGSubjectNode = false;
        this.tableAction = true;
        this.updateAction = true;
        this.addToListAction = true;
        this.allGrades = [
            {
                "id": 1,
                "name": 1
            },
            {
                "id": 2,
                "name": 2
            },
            {
                "id": 3,
                "name": 3
            },
            {
                "id": 4,
                "name": 4
            },
            {
                "id": 5,
                "name": 5
            },
            {
                "id": 6,
                "name": 6
            },
            {
                "id": 7,
                "name": 7
            },
            {
                "id": 8,
                "name": 8
            },
            {
                "id": 9,
                "name": 9
            },
            {
                "id": 10,
                "name": 10
            },
            {
                "id": 11,
                "name": 11
            },
            {
                "id": 12,
                "name": 12
            }
        ];
        this.selectedGeneralSubjectGrade = null;
    }
    ngOnInit() {
        this.loadCurriculums();
        this.createLessonTopicForm();
    }
    createLessonTopicForm() {
        this.lessonTopicForm = this.formBuilder.group({
            generalTopicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](""),
            newTopicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(75)])
        });
    }
    loadCurriculums() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    ngAfterViewInit() {
        this.showSyllabusDetails();
        this.showGeneralSubjectTreeDetails();
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
    }
    onGradeChange() {
        let curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe((res) => this.assignSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedSubject = null;
    }
    assignSubjectList(data) {
        this.subjectList = [];
        for (let i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
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
    onGeneralSubjectGradeChange() {
        if (this.selectedGeneralSubjectGrade) {
            let grade = this.selectedGeneralSubjectGrade.name;
            let status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.selectedGeneralSubject = null;
            this.generalSubjectService
                .getSubjectListByGrade(grade, status)
                .subscribe((res) => this.assignGeneralSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedGeneralSubjectGrade = null;
        this.generalSubjectList = [];
    }
    assignGeneralSubjectList(data) {
        this.generalSubjectList = [];
        this.generalSubjectList = data;
    }
    loadSubjectTree() {
        if (this.selectedSubject) {
            let subjectId = this.selectedSubject.id;
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            if (subjectId) {
                this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignSubjectTree(res.body), (res) => this.onError(res));
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    }
    assignSubjectTree(subject) {
        this.subjectTree = [];
        if (subject.length > 0) {
            for (let i = 0; i < subject.length; i++) {
                if (subject[i].data.topicsCount === 0) {
                    subject[i].icon = "fa fa-times text-danger";
                }
                this.subjectTree.push(subject[i]);
            }
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
        }
        this.nodeType = "";
        this.enableExpandSubjectNode = false;
    }
    showSyllabusDetails() {
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
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.lessonId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                    localThisObj.getLessonTopicList(localThisObj.lessonId);
                }
                else {
                }
            }
        });
    }
    getLessonTopicList(lessonId) {
        this.lessonTopicService
            .getLessonTopicListByLessonId(lessonId)
            .subscribe((res) => this.assignLessonTopicsList(res.body), (res) => this.onError(res));
    }
    assignLessonTopicsList(data) {
        this.lessonTopicsList = [];
        if (data.lessonTopics.length > 0) {
            this.lessonTopicsList = data.lessonTopics;
            this.sortArrayByOrderNumber(this.lessonTopicsList);
            this.updateAction = true;
            this.tableAction = true;
            this.topicIds = [];
            this.dragUpdateLessonTopicList();
        }
    }
    sortArrayByOrderNumber(array) {
        array.sort((a, b) => (a.orderNumber > b.orderNumber) ? 1 : -1);
    }
    toggleTreeNodes() {
        this.enableExpandSubjectNode = !this.enableExpandSubjectNode;
        if (this.enableExpandSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    }
    checkSelectedTopics(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableAction = false;
            this.lessonTopicIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.lessonTopicIds.findIndex(item => item === selectedId);
            this.lessonTopicIds.splice(index, 1);
        }
        this.lessonTopicIds = this.removeDuplicateElements(this.lessonTopicIds);
        if (this.lessonTopicIds.length <= 0) {
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
    deleteLessonTopics() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete lesson topic mapping ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.lessonTopicIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.lessonTopicService.deleteLessonTopicMapping(localthisObject.lessonTopicIds));
                }
            }
        });
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Lesson topic deleted successfully", "success");
        this.tableAction = true;
        this.lessonTopicIds = [];
        this.getLessonTopicList(this.lessonId);
        this.loadSubjectTree();
    }
    resetSelectedTopic() {
        this.lessonTopicIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    }
    updateLessonTopicMapping(lessonTopics) {
        this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
    }
    subscribeToUpdateResponse(result) {
        result.subscribe((res) => this.onUpdateSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateSuccess(res) {
        this.pluginService.alertMessage("Lesson topic mapping updated successfully", "success");
        this.getLessonTopicList(this.lessonId);
        this.closeEditLessonTopicModal();
    }
    dragUpdateLessonTopicList() {
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
            localThisObj.updateLessonTopicOrder();
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
    updateLessonTopicOrder() {
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach((row) => {
            let list = row.querySelectorAll('td');
            var topicMappingId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (let i = 0; i < this.lessonTopicsList.length; i++) {
                if (this.lessonTopicsList[i].id === topicMappingId) {
                    this.lessonTopicsList[i].orderNumber = newOrderNum;
                    this.lessonTopicsList[i].id = topicMappingId;
                    break;
                }
            }
            this.sortArrayByOrderNumber(this.lessonTopicsList);
        });
    }
    updateLessonTopics() {
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
                if (localthisObject.checkOrderNumChange) {
                    localthisObject.subscribeToUpdateResponse(localthisObject.lessonTopicService.updateLessonTopicMapping(localthisObject.lessonTopicsList));
                }
            }
        });
    }
    addNewGeneralTopicMapping() {
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.generalSubjectTree = [];
        this.selectedGeneralSubject = null;
        this.selectedGeneralSubjectGrade = null;
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.openTopicMappingModal();
    }
    loadGeneralSubjectTree() {
        this.generalSubjectTree = [];
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        if (this.selectedGeneralSubject) {
            let generalSubjectId = this.selectedGeneralSubject.id;
            this.generalSubjectService.getSubjectTreeBySubjectId(generalSubjectId).subscribe((res) => this.assignGeneralSubjectTree(res.body), (res) => this.onError(res));
        }
        else {
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
    }
    assignGeneralSubjectTree(data) {
        this.generalSubjectTree = data;
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.enableExpandGSubjectNode = false;
    }
    showGeneralSubjectTreeDetails() {
        var localThisObj = this;
        $('#generalSubjectTreeView')
            .on('changed.jstree', function (e, data) {
            var i, j, conceptId;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.modalNodeType = data.node.type;
                if (localThisObj.modalNodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.modalNodeType === "concept") {
                    conceptId = data.node.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.topicIds = [];
                    this.addToListAction = true;
                    localThisObj.getTopicsList(conceptId);
                }
                else if (localThisObj.modalNodeType === "topic") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else {
                }
            }
        });
    }
    getTopicsList(conceptId) {
        let conceptChildrenList;
        conceptChildrenList = this.generalSubjectTree.filter(item => item.parent === conceptId);
        this.generalSubTopicsList = conceptChildrenList.filter(item => item.type === 'topic');
        this.disablePreSelectedTopics();
    }
    disablePreSelectedTopics() {
        if (this.lessonTopicsList.length > 0) {
            for (let i = 0; i < this.lessonTopicsList.length; i++) {
                for (let j = 0; j < this.generalSubTopicsList.length; j++) {
                    if (this.lessonTopicsList[i].generalTopicId === this.generalSubTopicsList[j].data.id) {
                        this.generalSubTopicsList[j].disabled = true;
                    }
                }
            }
        }
    }
    checkNewlyAddedTopics(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.name;
        if (checked === true) {
            this.topicIds.push(selectedId);
            this.addToListAction = false;
        }
        else if (checked === false) {
            index = this.topicIds.findIndex(item => item === selectedId);
            this.topicIds.splice(index, 1);
        }
        this.topicIds = this.removeDuplicateElements(this.topicIds);
    }
    addTopicToList() {
        for (let i = 0; i < this.topicIds.length; i++) {
            this.selectedGeneralSubTopicsList.push(this.generalSubTopicsList.find(item => item.id === this.topicIds[i]));
        }
        this.selectedGeneralSubTopicsList = this.removeDuplicateElements(this.selectedGeneralSubTopicsList);
        this.addToListAction = true;
    }
    removeFromNewTopicList(id) {
        var topicIndex;
        if (this.selectedGeneralSubTopicsList.length > 0) {
            topicIndex = this.selectedGeneralSubTopicsList.findIndex(item => item.id === id);
            this.selectedGeneralSubTopicsList.splice(topicIndex, 1);
        }
        else {
            this.selectedGeneralSubTopicsList = [];
        }
    }
    toggleGeneralSubjectTreeNodes() {
        this.enableExpandGSubjectNode = !this.enableExpandGSubjectNode;
        if (this.enableExpandGSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#generalSubjectTreeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#generalSubjectTreeView");
        }
    }
    saveLessonTopicMapping() {
        let newLessonTopicsList = [];
        for (let i = 0; i < this.selectedGeneralSubTopicsList.length; i++) {
            newLessonTopicsList.push({
                generalTopicId: this.selectedGeneralSubTopicsList[i].data.id,
                topicName: this.selectedGeneralSubTopicsList[i].data.name,
                generalTopicName: this.selectedGeneralSubTopicsList[i].data.name,
                lessonId: this.lessonId,
                orderNumber: this.lessonTopicsList.length + i + 10
            });
        }
        if (newLessonTopicsList.length > 0) {
            this.subscribeToSaveResponse(this.lessonTopicService.saveLessonTopicMapping(newLessonTopicsList));
        }
        else {
            this.pluginService.alertMessage("No lesson topics added", "error");
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Lesson topic mapped successfully", "success");
        this.closeTopicMappingModal();
        this.getLessonTopicList(this.lessonId);
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.loadSubjectTree();
    }
    trimValue(value) {
        if (value === null || value === undefined) {
            return value;
        }
        else {
            return value.trim();
        }
    }
    editLessonTopic(lessonTopicId) {
        let lessonTopic = this.lessonTopicsList.filter(item => item.id === lessonTopicId)[0];
        this.lessonTopicId = lessonTopicId;
        this.lessonTopicForm.setValue({
            generalTopicName: lessonTopic.generalTopicName,
            newTopicName: lessonTopic.topicName
        });
        this.lessonTopicForm.get('generalTopicName').disable();
        this.openEditLessonTopicModal();
    }
    closeWithOutSavingTopicMapping() {
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
                localthisObject.closeTopicMappingModal();
            }
        });
    }
    openEditLessonTopicModal() {
        this.pluginService.showModalWindow("#editLessonTopicModal");
    }
    closeEditLessonTopicModal() {
        this.pluginService.hideModalWindow("#editLessonTopicModal");
    }
    closeWithOutSavingTopicName() {
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
                localthisObject.closeEditLessonTopicModal();
            }
        });
    }
    updateLessonTopicName() {
        let lessonTopic = {}, lessonTopics = [];
        lessonTopic = this.lessonTopicsList.filter(item => item.id === this.lessonTopicId)[0];
        lessonTopic.topicName = this.trimValue(this.lessonTopicForm.get('newTopicName').value);
        lessonTopics.push(lessonTopic);
        this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
    }
    resetEditLessonTopicModal() {
        let lessonTopic = this.lessonTopicsList.filter(item => item.id === this.lessonTopicId)[0];
        this.lessonTopicForm.setValue({
            generalTopicName: lessonTopic.generalTopicName,
            newTopicName: lessonTopic.topicName
        });
        this.lessonTopicForm.get('generalTopicName').disable();
    }
    openTopicMappingModal() {
        this.pluginService.showModalWindow("#addNewTopicMappingModal");
    }
    closeTopicMappingModal() {
        this.pluginService.hideModalWindow("#addNewTopicMappingModal");
    }
};
LessonTopicManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"] },
    { type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] },
    { type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["CoreErrorHandler"] }
];
LessonTopicManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lesson-topic-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"],
        _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
        _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["CoreErrorHandler"]])
], LessonTopicManageComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PrerequisiteLessonTopicManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrerequisiteLessonTopicManageComponent", function() { return PrerequisiteLessonTopicManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general-subject/general-subject.service */ "./src/app/general-subject/general-subject.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");












let PrerequisiteLessonTopicManageComponent = class PrerequisiteLessonTopicManageComponent {
    constructor(_router, activatedRoute, curriculumService, subjectService, lessonTopicService, eventManager, parseLinks, principalService, generalSubjectService, pluginService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.subjectService = subjectService;
        this.lessonTopicService = lessonTopicService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.generalSubjectService = generalSubjectService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.generalSubjectList = [];
        this.subjectTree = [];
        this.generalSubjectTree = [];
        this.lessonTopicsList = [];
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.topicIds = [];
        this.lessonTopicIds = [];
        this.allGrades = [];
        this.enableExpandSubjectNode = false;
        this.enableExpandGSubjectNode = false;
        this.addToListAction = true;
        this.tableAction = true;
        this.updateAction = true;
        this.allGrades = [
            {
                "id": 1,
                "name": 1
            },
            {
                "id": 2,
                "name": 2
            },
            {
                "id": 3,
                "name": 3
            },
            {
                "id": 4,
                "name": 4
            },
            {
                "id": 5,
                "name": 5
            },
            {
                "id": 6,
                "name": 6
            },
            {
                "id": 7,
                "name": 7
            },
            {
                "id": 8,
                "name": 8
            },
            {
                "id": 9,
                "name": 9
            },
            {
                "id": 10,
                "name": 10
            },
            {
                "id": 11,
                "name": 11
            },
            {
                "id": 12,
                "name": 12
            }
        ];
        this.selectedGeneralSubjectGrade = null;
    }
    ngOnInit() {
        this.loadCurriculums();
    }
    loadCurriculums() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    ngAfterViewInit() {
        this.showSyllabusDetails();
        this.showGeneralSubjectTreeDetails();
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
    }
    onGradeChange() {
        let curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe((res) => this.assignSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedSubject = null;
    }
    assignSubjectList(data) {
        this.subjectList = [];
        for (let i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
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
    onGeneralSubjectGradeChange() {
        if (this.selectedGeneralSubjectGrade) {
            let grade = this.selectedGeneralSubjectGrade.name;
            let status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.selectedGeneralSubject = null;
            this.generalSubjectService
                .getSubjectListByGrade(grade, status)
                .subscribe((res) => this.assignGeneralSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedGeneralSubjectGrade = null;
        this.generalSubjectList = [];
    }
    assignGeneralSubjectList(data) {
        this.generalSubjectList = [];
        this.generalSubjectList = data;
    }
    loadSubjectTree() {
        if (this.selectedSubject) {
            let subjectId = this.selectedSubject.id;
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            if (subjectId) {
                this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignSubjectTree(res.body), (res) => this.onError(res));
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    }
    assignSubjectTree(subject) {
        this.subjectTree = [];
        if (subject.length > 0) {
            for (let i = 0; i < subject.length; i++) {
                if (subject[i].data.preReqTopicsCount === 0) {
                    subject[i].icon = "fa fa-times text-danger";
                }
                this.subjectTree.push(subject[i]);
            }
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
        }
        this.enableExpandSubjectNode = false;
    }
    showSyllabusDetails() {
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
                else if (localThisObj.nodeType === "unit") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.nodeType === "lesson") {
                    localThisObj.lessonId = data.node.data.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.objective;
                    localThisObj.getLessonTopicList(localThisObj.lessonId);
                }
                else {
                }
            }
        });
    }
    getLessonTopicList(lessonId) {
        this.lessonTopicService
            .getLessonPreReqTopicListByLessonId(lessonId)
            .subscribe((res) => this.assignLessonTopicsList(res.body), (res) => this.onError(res));
    }
    assignLessonTopicsList(data) {
        this.lessonTopicsList = [];
        if (data.lessonPreReqTopics.length > 0) {
            this.lessonTopicsList = data.lessonPreReqTopics;
            this.sortArrayByOrderNumber(this.lessonTopicsList);
            this.dragUpdateLessonTopicList();
            this.tableAction = true;
            this.updateAction = true;
            this.topicIds = [];
        }
    }
    sortArrayByOrderNumber(array) {
        array.sort((a, b) => (a.orderNumber > b.orderNumber) ? 1 : -1);
    }
    toggleTreeNodes() {
        this.enableExpandSubjectNode = !this.enableExpandSubjectNode;
        if (this.enableExpandSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
        }
    }
    checkSelectedTopics(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
        if (checked === true) {
            this.tableAction = false;
            this.lessonTopicIds.push(selectedId);
        }
        else if (checked === false) {
            index = this.lessonTopicIds.findIndex(item => item === selectedId);
            this.lessonTopicIds.splice(index, 1);
        }
        this.lessonTopicIds = this.removeDuplicateElements(this.lessonTopicIds);
        if (this.lessonTopicIds.length <= 0) {
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
    deleteLessonTopics() {
        var localthisObject = this;
        swal({
            title: "Are you sure to delete lesson topic mapping ?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#32b432",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm === true) {
                if (localthisObject.lessonTopicIds.length > 0) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.lessonTopicService.deletePrerequisiteLessonTopicMapping(localthisObject.lessonTopicIds));
                }
            }
        });
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Lesson topic deleted successfully", "success");
        this.tableAction = true;
        this.lessonTopicIds = [];
        this.getLessonTopicList(this.lessonId);
        this.loadSubjectTree();
    }
    resetSelectedTopic() {
        this.lessonTopicIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    }
    subscribeToUpdateResponse(result) {
        result.subscribe((res) => this.onUpdateSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateSuccess(res) {
        this.pluginService.alertMessage("Prerequisite lesson topic mapping updated successfully", "success");
        this.getLessonTopicList(this.lessonId);
    }
    dragUpdateLessonTopicList() {
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
            localThisObj.updateLessonTopicOrder();
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
    updateLessonTopicOrder() {
        this.updateAction = false;
        this.checkOrderNumChange = true;
        var table = document.querySelector('#dragTable');
        var rows = table.querySelectorAll('tbody tr');
        Array.from(rows).forEach((row) => {
            let list = row.querySelectorAll('td');
            var topicMappingId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);
            for (let i = 0; i < this.lessonTopicsList.length; i++) {
                if (this.lessonTopicsList[i].id === topicMappingId) {
                    this.lessonTopicsList[i].orderNumber = newOrderNum;
                    this.lessonTopicsList[i].id = topicMappingId;
                    break;
                }
            }
            this.sortArrayByOrderNumber(this.lessonTopicsList);
        });
    }
    updateLessonTopics() {
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
                if (localthisObject.checkOrderNumChange) {
                    localthisObject.subscribeToUpdateResponse(localthisObject.lessonTopicService.updatePrerequisiteLessonTopicMapping(localthisObject.lessonTopicsList));
                }
            }
        });
    }
    addNewGeneralTopicMapping() {
        this.generalSubTopicsList = [];
        this.selectedGeneralSubTopicsList = [];
        this.generalSubjectTree = [];
        this.selectedGeneralSubject = null;
        this.selectedGeneralSubjectGrade = null;
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.openTopicMappingModal();
    }
    loadGeneralSubjectTree() {
        this.generalSubjectTree = [];
        this.modalNodeType = "";
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        if (this.selectedGeneralSubject) {
            let generalSubjectId = this.selectedGeneralSubject.id;
            this.generalSubjectService.getSubjectTreeBySubjectId(generalSubjectId).subscribe((res) => this.assignGeneralSubjectTree(res.body), (res) => this.onError(res));
        }
        else {
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
        }
    }
    assignGeneralSubjectTree(data) {
        this.generalSubjectTree = data;
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.enableExpandGSubjectNode = false;
    }
    showGeneralSubjectTreeDetails() {
        var localThisObj = this;
        $('#generalSubjectTreeView')
            .on('changed.jstree', function (e, data) {
            var i, j, conceptId;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.modalNodeType = data.node.type;
                if (localThisObj.modalNodeType === "root") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else if (localThisObj.modalNodeType === "concept") {
                    conceptId = data.node.id;
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                    localThisObj.topicIds = [];
                    localThisObj.getTopicsList(conceptId);
                }
                else if (localThisObj.modalNodeType === "topic") {
                    localThisObj.nodeName = data.node.data.name;
                    localThisObj.nodeDescription = data.node.data.description;
                }
                else {
                }
            }
        });
    }
    getTopicsList(conceptId) {
        let conceptChildrenList;
        conceptChildrenList = this.generalSubjectTree.filter(item => item.parent === conceptId);
        this.generalSubTopicsList = conceptChildrenList.filter(item => item.type === 'topic');
        this.disablePreSelectedTopics();
        this.addToListAction = true;
    }
    disablePreSelectedTopics() {
        if (this.lessonTopicsList.length > 0) {
            for (let i = 0; i < this.lessonTopicsList.length; i++) {
                for (let j = 0; j < this.generalSubTopicsList.length; j++) {
                    if (this.lessonTopicsList[i].topicId === this.generalSubTopicsList[j].data.id) {
                        this.generalSubTopicsList[j].disabled = true;
                    }
                }
            }
        }
    }
    checkNewlyAddedTopics(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = event.target.name;
        if (checked === true) {
            this.topicIds.push(selectedId);
            this.addToListAction = false;
        }
        else if (checked === false) {
            index = this.topicIds.findIndex(item => item === selectedId);
            this.topicIds.splice(index, 1);
        }
        this.topicIds = this.removeDuplicateElements(this.topicIds);
    }
    addTopicToList() {
        for (let i = 0; i < this.topicIds.length; i++) {
            this.selectedGeneralSubTopicsList.push(this.generalSubTopicsList.find(item => item.id === this.topicIds[i]));
        }
        this.selectedGeneralSubTopicsList = this.removeDuplicateElements(this.selectedGeneralSubTopicsList);
        this.addToListAction = true;
    }
    removeFromNewTopicList(id) {
        var topicIndex;
        if (this.selectedGeneralSubTopicsList.length > 0) {
            topicIndex = this.selectedGeneralSubTopicsList.findIndex(item => item.id === id);
            this.selectedGeneralSubTopicsList.splice(topicIndex, 1);
        }
        else {
            this.selectedGeneralSubTopicsList = [];
        }
    }
    toggleGeneralSubjectTreeNodes() {
        this.enableExpandGSubjectNode = !this.enableExpandGSubjectNode;
        if (this.enableExpandGSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#generalSubjectTreeView");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#generalSubjectTreeView");
        }
    }
    saveLessonTopicMapping() {
        let newLessonTopicsList = [];
        for (let i = 0; i < this.selectedGeneralSubTopicsList.length; i++) {
            newLessonTopicsList.push({
                topicId: this.selectedGeneralSubTopicsList[i].data.id,
                displayName: this.selectedGeneralSubTopicsList[i].data.name,
                lessonId: this.lessonId,
                orderNumber: this.lessonTopicsList.length + i + 1
            });
        }
        if (newLessonTopicsList.length > 0) {
            this.subscribeToSaveResponse(this.lessonTopicService.savePrerequisiteLessonTopicMapping(newLessonTopicsList));
        }
        else {
            this.pluginService.alertMessage("No prerequisite lesson topics added", "error");
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Lesson topic mapped successfully", "success");
        this.closeTopicMappingModal();
        this.getLessonTopicList(this.lessonId);
        this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        this.loadSubjectTree();
    }
    openTopicMappingModal() {
        this.pluginService.showModalWindow("#addNewPrereqTopicMappingModal");
    }
    closeTopicMappingModal() {
        this.pluginService.hideModalWindow("#addNewPrereqTopicMappingModal");
    }
    closeWithOutSavingTopicMapping() {
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
                localthisObject.closeTopicMappingModal();
            }
        });
    }
};
PrerequisiteLessonTopicManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"] },
    { type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"] },
    { type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["CoreErrorHandler"] }
];
PrerequisiteLessonTopicManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prerequisite-lesson-topic-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"],
        _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
        _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["CoreErrorHandler"]])
], PrerequisiteLessonTopicManageComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts ***!
  \***********************************************************************/
/*! exports provided: SyllabusLessonTopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicModule", function() { return SyllabusLessonTopicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _syllabus_lesson_topic_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syllabus-lesson-topic.route */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts");
/* harmony import */ var _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../question-builder/question-builder.module */ "./src/app/question-builder/question-builder.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./src/app/syllabus-lesson-topic/index.ts");











let SyllabusLessonTopicModule = class SyllabusLessonTopicModule {
};
SyllabusLessonTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_9__["QuestionBuilderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["NgJhipsterModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_syllabus_lesson_topic_route__WEBPACK_IMPORTED_MODULE_8__["syllabusLessonTopicRoute"]),
        ],
        declarations: [
            _index__WEBPACK_IMPORTED_MODULE_10__["LessonTopicManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["PrerequisiteLessonTopicManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicContentManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionManageComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionCreateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionDetailsComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionUpdateComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumAdditionalResourcesManageComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionDetailsComponent"],
            _index__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionUpdateComponent"]
        ],
        providers: [
            _index__WEBPACK_IMPORTED_MODULE_10__["SyllabusLessonTopicService"]
        ]
    })
], SyllabusLessonTopicModule);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts":
/*!**********************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts ***!
  \**********************************************************************/
/*! exports provided: syllabusLessonTopicRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syllabusLessonTopicRoute", function() { return syllabusLessonTopicRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson-topic/lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts");
/* harmony import */ var _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component */ "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts");
/* harmony import */ var _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-content/topic-content-manage.component */ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts");
/* harmony import */ var _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic-question/topic-question-manage.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts");
/* harmony import */ var _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addl-resource/addl-resource-manage.component */ "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts");
/* harmony import */ var _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic-question/topic-question-create.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts");
/* harmony import */ var _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../question-builder/matchlist/matchlist.component */ "./src/app/question-builder/matchlist/matchlist.component.ts");
/* harmony import */ var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../question-builder/mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../question-builder/mcq-standard */ "./src/app/question-builder/mcq-standard/index.ts");
/* harmony import */ var _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic-question/topic-question-details.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
/* harmony import */ var _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topic-question/topic-question-update.component */ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
/* harmony import */ var _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../question-builder/cloze/drag-n-drop/drag-n-drop.component */ "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
/* harmony import */ var _shared_ocr_ocr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/ocr/ocr.component */ "./src/app/shared/ocr/ocr.component.ts");















const syllabusLessonTopicRoute = [
    {
        path: "", redirectTo: "lesson-topic-manage", pathMatch: "full"
    },
    {
        path: "lesson-topic-manage",
        component: _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__["LessonTopicManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage lesson topics'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: "prerequisite-lesson-topic-manage",
        component: _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_3__["PrerequisiteLessonTopicManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage prerequisite lesson topics'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: "topic-content",
        component: _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_4__["CurriculumTopicContentManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage video content mapping'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: "topic-question",
        component: _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumTopicQuestionManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage topic questions'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: ":id/topic-question-create",
        component: _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumTopicQuestionCreateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Create new topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]],
        children: [
            {
                path: 'mcqstandard',
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__["MCQStandardComponent"],
                data: {
                    type: "MCQ_SINGLE",
                    title: "Create"
                },
            },
            {
                path: "mcqmultiple",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__["MCQStandardComponent"],
                data: {
                    type: "MCQ_MULTIPLE",
                    mode: "Create"
                }
            },
            {
                path: "mcqtruefalse",
                component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__["MCQStandardComponent"],
                data: {
                    type: "MCQ_TRUE_FALSE",
                    title: "Create"
                }
            },
            {
                path: 'mcqchoicematrix',
                component: _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["MCQChoiceMatrixComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_CHOICE_MATRIX"
                }
            }, {
                path: "matchlist",
                component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_8__["MatchlistComponent"],
                data: {
                    title: "Create",
                    type: "MCQ_MATCH_LIST"
                }
            },
            {
                path: "clozedrag",
                component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_13__["DragAndDropComponent"],
                data: {
                    title: "Create",
                    type: "mcq-drag"
                }
            },
        ],
    },
    {
        path: ":id/topic-question-edit",
        component: _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumTopicQuestionUpdateComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Edit topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: ":id/topic-question-view",
        component: _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumTopicQuestionDetailsComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: ":id/general-topic-question-view",
        component: _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumTopicQuestionDetailsComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'View topic question'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: "additional-resources",
        component: _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumAdditionalResourcesManageComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'Manage study material'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    },
    {
        path: 'ocr',
        component: _shared_ocr_ocr_component__WEBPACK_IMPORTED_MODULE_14__["OCRComponent"],
        data: {
            authorities: ['SYSTEM_ADMIN'],
            pageTitle: 'OCR tool (Convert image to text)'
        },
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }
];


/***/ }),

/***/ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts ***!
  \************************************************************************/
/*! exports provided: SyllabusLessonTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicService", function() { return SyllabusLessonTopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/service.constants */ "./src/app/shared/constants/service.constants.ts");





let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');
let SyllabusLessonTopicService = class SyllabusLessonTopicService {
    constructor(http) {
        this.http = http;
        this.lessonTopicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["lessonTopic"];
        this.prerequisiteLessonTopicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["prereqLessonTopic"];
        this.contentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["content"];
        this.topicContentDetailsResouceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["topicContentDetails"];
        this.topicQuestionDetailsResouceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["topicQuestionDetails"];
        this.questionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["question"];
        this.orgGeneralTopicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGeneralTopicContent"];
        this.orgGeneralTopicContentSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGeneralTopicContentSearch"];
        this.orgGeneralTopicQuestionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGeneralTopicQuestion"];
        this.orgGeneralTopicQuestionSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGeneralTopicQuestionSearch"];
        this.contentPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGenTopicContentSetPreference"];
        this.getContentPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGenTopicContentGetPreference"];
        this.orgQuestionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGenTopicQuestionSetPreference"];
        this.getQuestionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgGenTopicQuestionGetPreference"];
        this.lessonTopicDetailsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["lessonTopicDetails"];
        this.lessonPreReqTopicDetailsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["lessonPreReqTopicDetails"];
        this.addlResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["addlResources"];
        this.orgAddlResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgAddlResources"];
        this.setAddlResourcePreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgAddlResourcesSetPreference"];
        this.getAddlResourcePreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["orgAddlResourcesGetPreference"];
    }
    getLessonTopicListByLessonId(id) {
        return this.http.get(`${this.lessonTopicDetailsResourceUrl}/${id}`, { observe: 'response' });
    }
    getLessonPreReqTopicListByLessonId(id) {
        return this.http.get(`${this.lessonPreReqTopicDetailsResourceUrl}/${id}`, { observe: 'response' });
    }
    getLessonTopicListByLessonTopicId(id) {
        return this.http.get(`${this.lessonTopicResourceUrl}/${id}`, { observe: 'response' });
    }
    updateLessonTopicMapping(lessonTopic) {
        return this.http.put(this.lessonTopicResourceUrl, lessonTopic, { headers: headers, observe: 'response' });
    }
    saveLessonTopicMapping(topicMapping) {
        return this.http.post(this.lessonTopicResourceUrl, topicMapping, { headers: headers, observe: 'response' });
    }
    deleteLessonTopicMapping(topicIds) {
        return this.http.delete(`${this.lessonTopicResourceUrl}/${"batch"}/${topicIds}`, { observe: 'response' });
    }
    updatePrerequisiteLessonTopicMapping(lessonTopic) {
        return this.http.put(this.prerequisiteLessonTopicResourceUrl, lessonTopic, { headers: headers, observe: 'response' });
    }
    savePrerequisiteLessonTopicMapping(topicMapping) {
        return this.http.post(this.prerequisiteLessonTopicResourceUrl, topicMapping, { headers: headers, observe: 'response' });
    }
    deletePrerequisiteLessonTopicMapping(topicIds) {
        return this.http.delete(`${this.prerequisiteLessonTopicResourceUrl}/${"batch"}/${topicIds}`, { observe: 'response' });
    }
    getTopicContentDetails(id) {
        return this.http.get(`${this.topicContentDetailsResouceUrl}/${id}`, { observe: 'response' });
    }
    getTopicQuestionDetails(id) {
        return this.http.get(`${this.topicQuestionDetailsResouceUrl}/${id}`, { observe: 'response' });
    }
    getOrgGeneralTopicContentsByOrgId(topicId, organisationId) {
        var reqJSON = {
            "generalTopicId": topicId,
            "organisationId": organisationId
        };
        return this.http.post(this.orgGeneralTopicContentSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    getOrgGeneralTopicQuestionsByOrgId(topicId, organisationId) {
        var reqJSON = {
            "generalTopicId": topicId,
            "organisationId": organisationId
        };
        return this.http.post(this.orgGeneralTopicQuestionSearchResourceUrl, reqJSON, { observe: 'response' });
    }
    setContentPreference(isActive, generalTopicId, organisationId) {
        var reqJSON = {
            "active": isActive,
            "generalTopicId": generalTopicId,
            "organisationId": organisationId
        };
        return this.http.put(this.contentPreferenceResourceUrl, reqJSON, { observe: 'response' });
    }
    getContentPreference(organisationId, generalTopicId) {
        var reqJSON = {
            organisationId: organisationId,
            generalTopicId: generalTopicId
        };
        return this.http.post(this.getContentPreferenceResourceUrl, reqJSON, { headers: headers, observe: 'response' });
    }
    setQuestionPreference(isActive, generalTopicId, organisationId) {
        var reqJSON = {
            "active": isActive,
            "generalTopicId": generalTopicId,
            "organisationId": organisationId
        };
        return this.http.put(this.orgQuestionPreferenceResourceUrl, reqJSON, { observe: 'response' });
    }
    getQuestionPreference(orgId, topicId) {
        var reqJSON = {
            organisationId: orgId,
            generalTopicId: topicId
        };
        return this.http.post(this.getQuestionPreferenceResourceUrl, reqJSON, { headers: headers, observe: 'response' });
    }
    saveOwnTopicContent(ownGeneralTopicContents) {
        return this.http.post(this.orgGeneralTopicContentResourceUrl, ownGeneralTopicContents, { headers: headers, observe: 'response' });
    }
    updateOwnTopicContents(ownGeneralTopicContents) {
        return this.http.put(this.orgGeneralTopicContentResourceUrl, ownGeneralTopicContents, { headers: headers, observe: 'response' });
    }
    updateContentSource(ownGeneralTopicContent) {
        return this.http.put(this.contentResourceUrl, ownGeneralTopicContent, { headers: headers, observe: 'response' });
    }
    deleteOwnTopicContents(contentIds) {
        return this.http.delete(`${this.orgGeneralTopicContentResourceUrl}/${"batch"}/${contentIds}`, { observe: 'response' });
    }
    deleteOwnTopicQuestion(questionId) {
        return this.http.delete(`${this.orgGeneralTopicQuestionResourceUrl}/${questionId}`, { observe: 'response' });
    }
    saveOwnTopicQuestion(ownGeneralTopicQuestion) {
        return this.http.post(this.orgGeneralTopicQuestionResourceUrl, ownGeneralTopicQuestion, { headers: headers, observe: 'response' });
    }
    getGeneralTopicQuestionByQuestionId(id) {
        return this.http.get(`${this.questionResourceUrl}/${id}`, { observe: 'response' });
    }
    getOrgTopicQuestionByQuestionId(id) {
        return this.http.get(`${this.orgGeneralTopicQuestionResourceUrl}/${id}`, { observe: 'response' });
    }
    updateOrgTopicQuestion(question) {
        return this.http.put(this.orgGeneralTopicQuestionResourceUrl, question, { headers: headers, observe: 'response' });
    }
    updateGeneralTopicQuestion(question) {
        return this.http.put(this.questionResourceUrl, question, { headers: headers, observe: 'response' });
    }
    getAddlResource(lessonId) {
        var reqJSON = {
            lessonId: lessonId
        };
        return this.http.post(this.addlResourceUrl + '/search', reqJSON, { headers: headers, observe: 'response' });
    }
    saveAddlResource(addlResource) {
        return this.http.post(this.addlResourceUrl, addlResource, { headers: headers, observe: 'response' });
    }
    updateAddlResource(addlResources) {
        return this.http.put(this.addlResourceUrl, addlResources, { headers: headers, observe: 'response' });
    }
    deleteAddlResource(resourceIds) {
        return this.http.delete(`${this.addlResourceUrl}/${resourceIds}`, { observe: 'response' });
    }
    getOrgGeneralAddlResourceByOrganisationId(lessonId, organisationId) {
        var reqJSON = {
            lessonId: lessonId,
            organisationId: organisationId
        };
        return this.http.post(this.orgAddlResourceUrl + '/search', reqJSON, { headers: headers, observe: 'response' });
    }
    saveOwnAddlResource(ownAddlResource) {
        return this.http.post(this.orgAddlResourceUrl, ownAddlResource, { headers: headers, observe: 'response' });
    }
    updateOwnAddlResource(ownAddlResources) {
        return this.http.put(this.orgAddlResourceUrl, ownAddlResources, { headers: headers, observe: 'response' });
    }
    deleteOwnAddlResource(resourceIds) {
        return this.http.delete(`${this.orgAddlResourceUrl}/${resourceIds}`, { observe: 'response' });
    }
    setAddlResourcePreference(isActive, lessonId, organisationId) {
        var reqJSON = {
            "active": isActive,
            "lessonId": lessonId,
            "organisationId": organisationId
        };
        return this.http.put(this.setAddlResourcePreferenceUrl, reqJSON, { observe: 'response' });
    }
    getAddlResourcePreference(lessonId, organisationId) {
        var reqJSON = {
            "lessonId": lessonId,
            "organisationId": organisationId
        };
        return this.http.post(this.getAddlResourcePreferenceUrl, reqJSON, { headers: headers, observe: 'response' });
    }
};
SyllabusLessonTopicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SyllabusLessonTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SyllabusLessonTopicService);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CurriculumTopicContentManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicContentManageComponent", function() { return CurriculumTopicContentManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisation/organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _general_concept_topic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../general-concept-topic */ "./src/app/general-concept-topic/index.ts");



















let CurriculumTopicContentManageComponent = class CurriculumTopicContentManageComponent {
    constructor(_router, activatedRoute, subjectService, curriculumService, organisationService, topicContentService, genearalTopicContentService, eventManager, parseLinks, principalService, formBuilder, pluginService, userLoginService, commonService, changeDetectRef, fileService, errorHandler) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.topicContentService = topicContentService;
        this.genearalTopicContentService = genearalTopicContentService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.fileService = fileService;
        this.errorHandler = errorHandler;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.subjectTree = [];
        this.lessonList = [];
        this.organisations = [];
        this.contentDetails = {};
        this.generalTopicContents = [];
        this.ownTopicContents = [];
        this.orgGeneralTopicContents = [];
        this.contentIds = [];
        this.originDetails = [];
        this.hostedDetails = [];
        this.contentType = [];
        this.contentSource = [];
        this.selectedFile = null;
        this.checkContentCE = false;
        this.contentPreferenceStatus = false;
        this.enableExpandNode = false;
        this.validateForm = true;
        this.tableAction = true;
        this.updateAction = true;
        this.checkUrl1 = true;
    }
    ngOnInit() {
        this.loadCurriculums();
        this.createTopicContentForm();
        this.getContentType();
        this.getContentSource();
    }
    createTopicContentForm() {
        this.topicContentForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(250)]),
            webUrl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2048)]),
            publisher1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)]),
            webUrl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2048)]),
            publisher2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)]),
            webUrl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(2048)]),
            publisher3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(50)])
        });
    }
    get contentFormControl() { return this.topicContentForm.controls; }
    //TODO: load org specific curriculums if user belongs to a org ELSE IF the user is CognitoED content admin/system 
    //admin load all the standard curriculum
    loadCurriculums() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
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
    ngAfterViewInit() {
        this.nodeOnSelection();
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
        this.selectedLesson = null;
    }
    onGradeChange() {
        let curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe((res) => this.assignSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedSubject = null;
        this.selectedLesson = null;
    }
    assignSubjectList(data) {
        $("#subject").val("").trigger('change');
        this.subjectList = [];
        this.subjectTree = [];
        this.pluginService.jsTree("#viewTree", this.subjectTree, false);
        for (let i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
        }
    }
    onSubjectChange() {
        if (this.selectedSubject) {
            let subjectId = this.selectedSubject.id;
            this.loadSubjectTree(subjectId);
        }
        this.selectedLesson = null;
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
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
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
                                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
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
        result.subscribe((res) => this.onDownloadSuccess(res), (errRes) => this.onError(errRes));
    }
    onDownloadSuccess(resp) {
        if (resp.body) {
            let downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(downloadFilePath);
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
        resp.subscribe((res) => this.onDeleteFileSuccess(res), (res) => this.onError(res));
    }
    onDeleteFileSuccess(resp) {
        this.fileName = "No file chosen";
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.pluginService.alertMessage("File deleted successfully", "success");
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
    loadSubjectTree(subjectId) {
        this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignSubjectTree(res.body), (res) => this.onError(res));
    }
    assignSubjectTree(data) {
        this.lessonList = [];
        $("#lesson").val("").trigger('change');
        this.subjectTree = data;
        this.lessonList = this.subjectTree.filter(item => item.type === 'lesson');
        this.pluginService.jsTree("#viewTree", this.subjectTree, false);
    }
    getLessonTopicList() {
        if (this.selectedLesson) {
            let lessonId = this.selectedLesson.data.id;
            if (lessonId) {
                this.topicContentService
                    .getLessonTopicListByLessonId(lessonId)
                    .subscribe((res) => this.assignLessonTopicsList(res.body), (res) => this.onError(res));
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    }
    assignLessonTopicsList(data) {
        let topicsList = [], treeTopicsList = [];
        if (data.lessonTopics.length > 0) {
            topicsList = data.lessonTopics;
            for (let i = 0; i < topicsList.length; i++) {
                if (topicsList[i].topicContentCount === 0) {
                    treeTopicsList.push({
                        text: topicsList[i].topicName,
                        generalTopicId: topicsList[i].generalTopicId,
                        id: topicsList[i].id,
                        icon: "fa fa-times text-danger"
                    });
                }
                else {
                    treeTopicsList.push({
                        text: topicsList[i].topicName,
                        generalTopicId: topicsList[i].generalTopicId,
                        id: topicsList[i].id
                    });
                }
            }
        }
        else {
            this.pluginService.alertMessage("No topics mapped to a lesson", "error");
        }
        this.enableExpandNode = false;
        this.pluginService.jsTree("#topicsList", treeTopicsList, false);
        this.showContentMapping = false;
        this.showTopicHeading = true;
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
            this.validateForm = true;
        }
        if ((this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null)) {
            this.validateForm = true;
        }
        if (this.topicContentForm.valid) {
            this.validateForm = false;
        }
        if (this.topicContentForm.invalid) {
            this.validateForm = true;
        }
        if (this.checkUrl1 === true) {
            if ((webURL1 === "" || webURL1 === undefined || webURL1 === null)) {
                this.validateForm = true;
            }
        }
        if (this.checkUrl2 === true) {
            if ((webURL2 === "" || webURL2 === undefined || webURL2 === null)) {
                this.validateForm = true;
            }
        }
        if (this.checkUrl3 === true) {
            if ((webURL3 === "" || webURL3 === undefined || webURL3 === null)) {
                this.validateForm = true;
            }
        }
    }
    nodeOnSelection() {
        var localThisObj = this;
        $('#topicsList')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.generalTopicId = data.node.original.generalTopicId;
                localThisObj.topicName = data.node.original.text;
                localThisObj.generalTopicContents = [];
                localThisObj.orgGeneralTopicContents = [];
                localThisObj.ownTopicContents = [];
                //localThisObj.getGeneralTopicContentList(localThisObj.generalTopicId);
                localThisObj.getTopicContentList(localThisObj.generalTopicId);
                localThisObj.getOrgGeneralTopicContentByOrganisationId(localThisObj.generalTopicId);
                localThisObj.getOrganisationList();
                localThisObj.getContentPreference(localThisObj.generalTopicId);
                localThisObj.showContentMapping = true;
                localThisObj.selectedOrganisation = null;
                localThisObj.updateAction = true;
                localThisObj.tableAction = true;
            }
        });
    }
    getGeneralTopicContentList(generalTopicId) {
        this.genearalTopicContentService.getTopicContentList(generalTopicId).subscribe((res) => this.assignResponseToGeneralTopicList(res.body), (res) => this.onError(res));
    }
    assignResponseToGeneralTopicList(data) {
        this.generalTopicContents = [];
        this.generalTopicContents = data.generalTopicContents;
        this.topicDescription = data.description;
        this.sortArrayByOrderNumber(this.generalTopicContents);
        if (this.ownTopicContents.length > 0 || this.generalTopicContents.length > 0) {
            this.dragTableContent();
        }
    }
    getTopicContentList(generalTopicId) {
        this.topicContentService.getTopicContentDetails(generalTopicId).subscribe((res) => this.assignResponseToTopicList(res.body), (res) => this.onError(res));
    }
    assignResponseToTopicList(data) {
        this.ownTopicContents = [];
        this.topicDescription = data.description;
        this.ownTopicContents = data.orgGeneralTopicContents;
        this.sortArrayByOrderNumber(this.ownTopicContents);
        if (this.ownTopicContents.length > 0 || this.generalTopicContents.length > 0) {
            this.dragTableContent();
        }
    }
    getOrgGeneralTopicContentByOrganisationId(generalTopicId) {
        //User login Information for organisationId 
        this.organisationId = this.userLoginService.organisationId;
        this.topicContentService.getOrgGeneralTopicContentsByOrgId(generalTopicId, this.organisationId).subscribe((res) => this.assignResponseToOrgTopicList(res.body), (res) => this.onError(res));
    }
    assignResponseToOrgTopicList(data) {
        this.orgGeneralTopicContents = [];
        this.orgGeneralTopicContents = data;
        this.sortArrayByOrderNumber(this.orgGeneralTopicContents);
    }
    getOrgTopicContentByOrgId() {
        let organisationId = this.selectedOrganisation.id;
        if (organisationId) {
            this.topicContentService.getOrgGeneralTopicContentsByOrgId(this.generalTopicId, organisationId).subscribe((res) => this.assignResponseToOrgTopicContentListByOrgId(res.body), (res) => this.onError(res));
        }
    }
    assignResponseToOrgTopicContentListByOrgId(data) {
        this.orgGeneralTopicContents = [];
        this.orgGeneralTopicContents = data;
    }
    checkContentPreference(event) {
        let check = event.target.checked;
        let name = event.target.id;
        if (check === true && name === "ContentCE") {
            this.contentPreferenceStatus = false;
        }
        else if (check === true && name === "OwnContent") {
            this.contentPreferenceStatus = true;
        }
    }
    saveContentPreference() {
        if (this.contentPreferenceStatus === false) {
            // if (this.generalTopicContents.length > 0) {
            //     this.setContentPreference();
            // } else {
            //     this.pluginService.alertMessage("Please add atleast one general topic content and change preference", "error");
            // }
        }
        else if (this.contentPreferenceStatus === true) {
            if (this.ownTopicContents.length > 0) {
                this.setContentPreference();
            }
            else {
                this.pluginService.alertMessage("Please add atleast one own topic content and change preference", "error");
            }
        }
    }
    setContentPreference() {
        this.topicContentService.setContentPreference(this.contentPreferenceStatus, this.generalTopicId, this.organisationId).subscribe((res) => this.onSuccess(res.body), (res) => this.onError(res));
    }
    onSuccess(data) {
        this.pluginService.alertMessage("Content preference saved successfully", "success");
    }
    getContentPreference(generalTopicId) {
        //User login Information for organisationId 
        let orgId = this.userLoginService.organisationId;
        this.topicContentService.getContentPreference(orgId, generalTopicId).subscribe((res) => this.onGetPreferenceSuccess(res.body), (res) => this.onError(res));
    }
    onGetPreferenceSuccess(acitveStatus) {
        if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkContentCE = true;
            this.checkOwnContent = false;
        }
        else if (acitveStatus === true) {
            this.checkContentCE = false;
            this.checkOwnContent = true;
        }
    }
    openSubjectTreeModal() {
        this.pluginService.showModalWindow("#viewSubjectTreeModal");
    }
    closeSubjectTreeModal() {
        this.pluginService.hideModalWindow("#viewSubjectTreeModal");
    }
    getOrganisationList() {
        this.organisationService.getOrganisations().subscribe((res) => this.assignOrgList(res.body), (res) => this.onError(res));
    }
    assignOrgList(data) {
        this.organisations = data;
    }
    addOwnTopicContent() {
        this.modalTitleName = "Add";
        this.openTopicContentModal();
        this.resetFormValues();
        this.validateForm = false;
        this.disableDropdown = false;
        this.selectedContentSource = null;
        this.selectedContentType = null;
    }
    viewCETopicContent(contentId) {
        let contentDetails = [], contentDetail = {};
        contentDetails = this.generalTopicContents.filter(item => item.id === contentId);
        contentDetail = contentDetails[0];
        this.modalTitleName = "View";
        this.getContentDetails(contentDetail);
        this.openTopicContentModal();
    }
    patchCEContentFormfields(contentDetails) {
        this.contentId = contentDetails.id;
        this.topicContentForm.patchValue({
            contentTitle: contentDetails.content.title,
            contentDescription: contentDetails.content.description,
            webUrl1: contentDetails.content.url1,
            publisher1: contentDetails.publisher1,
            webUrl2: contentDetails.content.url2,
            publisher2: contentDetails.content.publisher2,
            webUrl3: contentDetails.content.url3,
            publisher3: contentDetails.content.publisher3
        });
        this.selectedContentType = this.contentType.filter(item => item.tag === contentDetails.content.contentType)[0];
        this.selectedContentSource = this.contentSource.filter(item => item.tag === contentDetails.content.contentSource)[0];
        if (contentDetails.content.webUrl == contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
        else if (contentDetails.content.webUrl == contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
        }
        else if (contentDetails.content.webUrl == contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
        }
        else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
        }
    }
    viewOrgTopicContent(contentId) {
        let contentDetails = [], contentDetail = {};
        contentDetails = this.orgGeneralTopicContents.filter(item => item.id === contentId);
        contentDetail = contentDetails[0];
        this.modalTitleName = "ViewOrg";
        this.getOwnContentDetails(contentDetail);
        this.openTopicContentModal();
    }
    editOwnTopicContent(contentId) {
        let contentDetails = [], contentDetail = {};
        contentDetails = this.ownTopicContents.filter(item => item.id === contentId);
        contentDetail = contentDetails[0];
        this.modalTitleName = "Edit";
        this.patchContentFormfields(contentDetail);
        this.openTopicContentModal();
    }
    viewOwnTopicContent(contentId) {
        let contentDetails = [], topicContent = {};
        let contentDetail = {};
        contentDetail = topicContent.content;
        contentDetails = this.ownTopicContents.filter(item => item.id === contentId);
        contentDetail = contentDetails[0];
        this.modalTitleName = "ViewOrg";
        this.getOwnContentDetails(contentDetail);
        this.openTopicContentModal();
    }
    getContentDetails(contentDetail) {
        this.contentDetails = contentDetail;
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
    }
    getOwnContentDetails(contentDetail) {
        this.contentDetails = contentDetail;
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
    }
    patchContentFormfields(contentDetails) {
        this.contentId = contentDetails.content.id;
        this.topicContentForm.patchValue({
            contentTitle: contentDetails.content.title,
            contentDescription: contentDetails.content.description,
            webUrl1: contentDetails.content.url1,
            publisher1: contentDetails.content.publisher1,
            webUrl2: contentDetails.content.url2,
            publisher2: contentDetails.content.publisher2,
            webUrl3: contentDetails.content.url3,
            publisher3: contentDetails.content.publisher3
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
    saveTopicContent() {
        if (this.topicContentForm.valid) {
            let ownGeneralTopicContents = [], topiccontent = {}, contentDetail = topiccontent.content;
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
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url2);
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url3);
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
                contentDetail.publisher = contentDetail.publisher1;
            }
            // }
            ownGeneralTopicContents.push({
                organisationId: this.userLoginService.organisationId,
                generalTopicId: this.generalTopicId,
                content: contentDetail,
                orderNumber: this.ownTopicContents.length + 1
            });
            this.saveTopicContents(ownGeneralTopicContents);
        }
        if (this.topicContentForm.invalid) {
            this.validateForm = true;
        }
    }
    saveTopicContents(ownGeneralTopicContents) {
        this.subscribeToSaveResponse(this.topicContentService.saveOwnTopicContent(ownGeneralTopicContents));
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Topic content created successfully", "success");
        this.resetFormValues();
        this.closeTopicContentModal();
        this.getTopicContentList(this.generalTopicId);
    }
    updateTopicContents() {
        if (this.topicContentForm.valid) {
            let contentDetail = {};
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
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
                contentDetail.publisher = contentDetail.publisher1;
            }
            else if (this.checkUrl2 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url2);
                contentDetail.publisher = contentDetail.publisher2;
            }
            else if (this.checkUrl3 === true) {
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url3);
                contentDetail.publisher = contentDetail.publisher3;
            }
            else {
                //If user not at all changed active url, defaultly it takes first url as active
                contentDetail.webUrl = this.getEmbedUrl(contentDetail.url1);
                contentDetail.publisher = contentDetail.publisher1;
            }
            // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
            //     contentDetail.fileName = this.uploadedFileName;
            //     contentDetail.filePath = this.uploadedFilePath;
            // }
            // }
            this.subscribeToUpdateResponse(this.topicContentService.updateContentSource(contentDetail));
        }
        if (this.topicContentForm.invalid) {
            this.validateForm = true;
        }
    }
    subscribeToUpdateResponse(result) {
        result.subscribe((res) => this.onUpdateSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateSuccess(res) {
        this.pluginService.alertMessage("Topic content updated successfully", "success");
        this.resetFormValues();
        this.closeTopicContentModal();
        this.getTopicContentList(this.generalTopicId);
    }
    openTopicContentModal() {
        this.pluginService.showModalWindow("#topicContentModal");
    }
    closeTopicContentModal() {
        this.pluginService.hideModalWindow("#topicContentModal");
    }
    resetFormValues() {
        this.topicContentForm.reset();
        this.uploadedFileName = "";
        this.uploadedFilePath = "";
        this.fileName = "No file chosen";
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
            for (let i = 0; i < this.ownTopicContents.length; i++) {
                if (this.ownTopicContents[i].id === contentId) {
                    this.ownTopicContents[i].orderNumber = newOrderNum;
                    break;
                }
            }
            this.sortArrayByOrderNumber(this.ownTopicContents);
        });
    }
    updateOwnTopicContentsWithOrderNumber() {
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
                    localthisObject.subscribeToUpdateTopicContentResponse(localthisObject.topicContentService.updateOwnTopicContents(localthisObject.ownTopicContents));
                }
            }
        });
    }
    subscribeToUpdateTopicContentResponse(result) {
        result.subscribe((res) => this.onUpdateTopicContentSuccess(res), (errRes) => this.onError(errRes));
    }
    onUpdateTopicContentSuccess(res) {
        this.pluginService.alertMessage("Topic content order updated successfully", "success");
        this.getTopicContentList(this.generalTopicId);
        this.updateAction = true;
        this.resetFormValues();
    }
    resetSelectedOwnTopicContent() {
        this.contentIds = [];
        this.tableAction = true;
        $(".checkAll").prop("checked", false);
    }
    checkSelectedOwnContents(event) {
        let selectedId, checked, index;
        checked = event.target.checked;
        selectedId = Number(event.target.title);
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
    sortArrayByOrderNumber(array) {
        array.sort((a, b) => (a.orderNumber > b.orderNumber) ? 1 : -1);
    }
    deleteOwnTopicContents() {
        if (this.contentPreferenceStatus === true) {
            this.pluginService.alertMessage("Please change your content preference and do delete action, ", "error");
        }
        else {
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
                        localthisObject.subscribeToDeleteResponse(localthisObject.topicContentService.deleteOwnTopicContents(localthisObject.contentIds));
                    }
                }
            });
        }
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic content deleted successfully", "success");
        this.tableAction = true;
        this.contentIds = [];
        this.getTopicContentList(this.generalTopicId);
    }
    toggleTreeNodes() {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#viewTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#viewTree");
        }
    }
    resetTopicContent() {
        this.resetFormValues();
    }
    closeTopicContentModalWithOutSaving() {
        if (this.modalTitleName === "View" || this.modalTitleName === "ViewOrg") {
            this.closeTopicContentModal();
        }
        else if (this.modalTitleName === "Add" || this.modalTitleName === "Edit") {
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
                    localthisObject.closeTopicContentModal();
                }
            });
        }
    }
    getEmbedUrl(url) {
        var pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var matches = url.match(pattern);
        if (matches) {
            let embedURL = "https://www.youtube.com/embed/" + matches[1];
            return embedURL;
        }
        return url;
    }
};
CurriculumTopicContentManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"] },
    { type: _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"] },
    { type: _general_concept_topic__WEBPACK_IMPORTED_MODULE_18__["GeneralConceptAndTopicService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_6__["Principal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"] },
    { type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["CoreErrorHandler"] }
];
CurriculumTopicContentManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-content-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"],
        _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"],
        _general_concept_topic__WEBPACK_IMPORTED_MODULE_18__["GeneralConceptAndTopicService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_6__["Principal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"],
        _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_17__["CoreErrorHandler"]])
], CurriculumTopicContentManageComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CurriculumTopicQuestionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionCreateComponent", function() { return CurriculumTopicQuestionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/local-storage/local-storage.service */ "./src/app/shared/local-storage/local-storage.service.ts");











let CurriculumTopicQuestionCreateComponent = class CurriculumTopicQuestionCreateComponent {
    constructor(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, localStorageService, commonService, fileService, changedetector, errorHandler) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.localStorageService = localStorageService;
        this.commonService = commonService;
        this.fileService = fileService;
        this.changedetector = changedetector;
        this.errorHandler = errorHandler;
        this.questionResource = {};
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.answers = [];
        this.contentSource = [];
        this.editorSolutionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.showSaveQuestion = false;
        this.showAddQuestion = false;
        this.validateQuestionType = true;
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.generalTopicId = Number(this.activatedRoute.snapshot.params['id']);
        if (this.generalTopicId) {
            this.getTopicName();
        }
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
    }
    getTopicName() {
        let topicDetail = {};
        topicDetail = this.localStorageService.retrieveData("topicDetails");
        if (topicDetail.id === this.generalTopicId) {
            this.topicName = topicDetail.title;
        }
        else {
            this.topicName = "";
        }
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
        if (lastItem === 'topic-question-create') {
            this.validateQuestionType = true;
        }
        else {
            this.validateQuestionType = false;
        }
    }
    loadPreviewQuestion() {
        let duplicateChoices = [], choiceText, question, choices = [], choiceId, answers = [], matrixChoices = [], matrixOptions = [];
        this.questionResource = [];
        this.questionResource.Choices = [];
        this.questionResource.Options = [];
        this.questionResource.Answers = [];
        this.questionResource = [];
        this.questionResource = this.questionBuilderService.getQuestionResource;
        this.questionType = this.questionResource.QuestionType;
        answers = this.questionResource.Answers;
        this.onChangeOptionType(this.questionType);
        question = this.questionResource.Question;
        if (question === "" || question === "undefined") {
        }
        else if (question.length > 2) {
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
                    }
                }
                else if (this.questionType === "MCQ_CHOICE_MATRIX") {
                    this.answers = [];
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
                    }
                }
                this.showSaveQuestion = true;
                this.updateQuestionResource();
            }
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
    resetPreviewQuestions() {
        this.questionResource = [];
        this.answers = [];
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
                    if (imageTags[i].alt === "") {
                        imageId = "image" + [i];
                        index = i;
                        imageTags[i].setAttribute("id", imageId); //Set id attribute for image 
                        imageUrl = imageTags[i].src; //Get image source 
                        base64 = yield this.getBase64ImageFromUrl(imageUrl);
                        updatedHTMLData = yield this.getAWSFilePath(base64, index, htmlElement);
                    }
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
            let block, contentType, encodedData, fileType, imageType, presignedURL, imageTags, updatedHTMLData, updatedFileName;
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
                        let fileNameSplit;
                        fileNameSplit = updatedFilePath.split("/");
                        updatedFileName = fileNameSplit[fileNameSplit.length - 1];
                        imageTags[index].setAttribute("src", updatedFilePath); //Setting aws filepath in respective image source
                        imageTags[index].setAttribute("alt", updatedFileName); //Passed updatedFileName in alt attribute for delete purpose
                        updatedHTMLData = htmlElement.innerHTML;
                        this.getImagePathUploadedHTML(updatedHTMLData);
                    }
                });
                yield this.fileService.uploadImagefileAWSS3(presignedURL, encodedData);
            }
        });
    }
    getImagePathUploadedHTML(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updatedHTMLDATA = data;
        });
    }
    saveQuestion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let questionResource = {}, questionDetails, updatedQuestionResource, solutionContentJson, updatedSolutionContent;
            questionResource.question = {};
            let userLoginInfo = [];
            userLoginInfo = this.localStorageService.retrieveData("userLoginInfo");
            yield this.updateImageSrc(this.solutionContent);
            if (this.solutionContent !== "") {
                updatedSolutionContent = this.updatedHTMLDATA;
                solutionContentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedSolutionContent));
            }
            else {
                solutionContentJson = "";
            }
            //User login Information for organisationId 
            if (this.category) {
                questionResource.question.category = this.category;
            }
            else {
                questionResource.question.category = this.questionCategory[0].tag;
            }
            if (this.complexityLevel) {
                questionResource.question.complexityLevel = this.complexityLevel;
            }
            else {
                questionResource.question.complexityLevel = 1;
            }
            this.organisationId = userLoginInfo[0].organisationId;
            updatedQuestionResource = this.questionBuilderService.getQuestionResource;
            questionResource.question.marks = updatedQuestionResource.TotalMarks * questionResource.question.complexityLevel;
            questionDetails = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
            questionResource.question.contentJson = questionDetails;
            questionResource.generalTopicId = this.generalTopicId;
            questionResource.question.generalTopicId = this.generalTopicId;
            questionResource.organisationId = this.organisationId;
            questionResource.question.solutionJson = solutionContentJson;
            this.subscribeToSaveResponse(this.questionService.saveOwnTopicQuestion(questionResource));
        });
    }
    subscribeToSaveResponse(result) {
        result.subscribe((resp) => this.onSaveSuccess(resp), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Own topic question created successfully", "success");
        this.showAddQuestion = true;
        this.showSaveQuestion = false;
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
                localObj.router.navigateByUrl('/lesson-topic/topic-question');
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
CurriculumTopicQuestionCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonLocalStorageService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"] }
];
CurriculumTopicQuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-question-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonLocalStorageService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_8__["FileManagementService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["CoreErrorHandler"]])
], CurriculumTopicQuestionCreateComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CurriculumTopicQuestionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionDetailsComponent", function() { return CurriculumTopicQuestionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/local-storage/local-storage.service */ "./src/app/shared/local-storage/local-storage.service.ts");










let CurriculumTopicQuestionDetailsComponent = class CurriculumTopicQuestionDetailsComponent {
    constructor(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService, localStorageService, errorHandler) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.localStorageService = localStorageService;
        this.errorHandler = errorHandler;
        this.questionResource = {};
        this.matchList = [];
        this.answers = [];
        this.getCurrentRouteInfo();
    }
    getCurrentRouteInfo() {
        let splitArray = [], currentUrl;
        currentUrl = this.router.url;
        splitArray = currentUrl.split('/');
        this.currentRoute = splitArray.pop();
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.activatedRoute.params.subscribe(params => {
            this.questionId = params['id'];
            this.questionId = Number(this.activatedRoute.snapshot.params['id']);
            if (this.questionId) {
                this.getTopicName();
            }
            if (this.currentRoute === 'topic-question-view') {
                this.getOrgTopicQuestionDetail(this.questionId);
            }
            else if (this.currentRoute === 'general-topic-question-view') {
                this.getGeneralTopicQuestionDetail(this.questionId);
            }
        });
    }
    getTopicName() {
        let topicDetail = {};
        topicDetail = this.localStorageService.retrieveData("topicDetails");
        if (this.questionId) {
            this.topicName = topicDetail.title;
        }
        else {
            this.topicName = "";
        }
    }
    getGeneralTopicQuestionDetail(questionId) {
        this.questionService
            .getGeneralTopicQuestionByQuestionId(questionId)
            .subscribe((res) => this.assignQuestionResource(res.body), (res) => this.onError(res));
    }
    assignQuestionResource(data) {
        let questionResource = {};
        questionResource = data;
        this.loadPreviewQuestion(questionResource);
    }
    getOrgTopicQuestionDetail(questionId) {
        this.questionService
            .getOrgTopicQuestionByQuestionId(questionId)
            .subscribe((res) => this.assignOrgQuestionResource(res.body), (res) => this.onError(res));
    }
    assignOrgQuestionResource(data) {
        let questionResource = {};
        questionResource = data.question;
        this.loadPreviewQuestion(questionResource);
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    loadPreviewQuestion(questionResource) {
        let duplicateChoices = [], choiceText, choiceId, choices = [], question, answers = [], matrixChoices = [], matrixOptions = [];
        this.questionResource = [];
        this.questionResource = this.questionBuilderService.convertStringToJson(questionResource.contentJson);
        this.questionType = this.questionResource.QuestionType;
        this.onChangeOptionType(this.questionType);
        question = this.questionResource.Question;
        if (this.questionType === "MCQ_SINGLE" || this.questionType === "MCQ_MULTIPLE" || this.questionType === "MCQ_TRUE_FALSE") {
            duplicateChoices = this.questionResource.Choices;
            answers = this.questionResource.Answers;
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
        }
        else if (this.questionType === "MCQ_CHOICE_MATRIX") {
            this.answers = [];
            answers = this.questionResource.Answers;
            matrixChoices = this.questionResource.Choices;
            matrixOptions = this.questionResource.Options;
            for (let k = 0; k < answers.length; k++) {
                this.answers.push({
                    choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                    optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
                });
            }
        }
        else if (this.questionType === "MCQ_MATCH_LIST") {
            this.answers = [];
            matrixChoices = [];
            matrixOptions = [];
            answers = this.questionResource.Answers;
            matrixChoices = this.questionResource.Choices;
            matrixOptions = this.questionResource.Options;
            for (let k = 0; k < answers.length; k++) {
                this.answers.push({
                    choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                    optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
                });
            }
        }
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
    resetPreviewQuestions() {
        this.questionResource = [];
        this.answers = [];
    }
    editQuestionRoute() {
        if (this.currentRoute === "topic-question-view") {
            this.router.navigate(['/lesson-topic', this.questionId, 'topic-question-edit']);
        }
        else if (this.currentRoute === "general-topic-question-view") {
            this.router.navigate(['/general-concept-and-topic', this.questionId, 'general-topic-question-edit']);
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
        if (this.currentRoute === "topic-question-view") {
            this.router.navigateByUrl('/lesson-topic/topic-question');
        }
        else if (this.currentRoute === "general-topic-question-view") {
            this.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
        }
        else {
            this.router.navigateByUrl('../');
        }
    }
};
CurriculumTopicQuestionDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"] },
    { type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"] }
];
CurriculumTopicQuestionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-question-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"],
        _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])
], CurriculumTopicQuestionDetailsComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CurriculumTopicQuestionManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionManageComponent", function() { return CurriculumTopicQuestionManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisation/organisation.service */ "./src/app/organisation/organisation.service.ts");
/* harmony import */ var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../curriculum/curriculum.service */ "./src/app/curriculum/curriculum.service.ts");
/* harmony import */ var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/constants/common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _general_concept_topic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../general-concept-topic */ "./src/app/general-concept-topic/index.ts");
















let CurriculumTopicQuestionManageComponent = class CurriculumTopicQuestionManageComponent {
    constructor(_router, activatedRoute, curriculumService, organisationService, subjectService, topicQuestionService, generalTopicQuestionService, eventManager, parseLinks, principalService, pluginService, userLoginService, errorHandler, questionBuilderService) {
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.subjectService = subjectService;
        this.topicQuestionService = topicQuestionService;
        this.generalTopicQuestionService = generalTopicQuestionService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.userLoginService = userLoginService;
        this.errorHandler = errorHandler;
        this.questionBuilderService = questionBuilderService;
        this.curriculumList = [];
        this.gradeList = [];
        this.subjectList = [];
        this.subjectTree = [];
        this.lessonList = [];
        this.organisations = [];
        this.generalTopicQuestions = [];
        this.ownTopicQuestions = [];
        this.orgGeneralTopicQuestions = [];
        this.topicQuestions = [];
        this.ownTopicQuestionResources = [];
        this.orgTopicQuestionResources = [];
        this.generalTopicQuestionResources = [];
        this.selectedAnswer = [];
        this.enableExpandNode = false;
        this.tableAction = true;
    }
    ngOnInit() {
        this.checkQuestionCE = false;
        this.enableExpandNode = false;
        this.questionPreferenceStatus = false;
        this.loadCurriculums();
    }
    loadCurriculums() {
        this.curriculumService.getCurriculumSearch().subscribe((res) => this.assignCurriculumList(res.body), (res) => this.onError(res));
    }
    assignCurriculumList(data) {
        this.curriculumList = [];
        for (let i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
        }
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    ngAfterViewInit() {
        this.nodeOnSelected();
    }
    onCurriculumChange() {
        let gradesApplicableFrom, gradesApplicableTo;
        if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
        }
        this.selectedGrade = null;
        this.selectedSubject = null;
        this.selectedLesson = null;
    }
    onGradeChange() {
        let curriculumId, gradeId, status;
        if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__["ACTIVE"];
            this.subjectService
                .getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status)
                .subscribe((res) => this.assignSubjectList(res.body), (res) => this.onError(res));
        }
        this.selectedSubject = null;
        this.selectedLesson = null;
    }
    onSubjectChange() {
        if (this.selectedSubject) {
            let subjectId = this.selectedSubject.id;
            this.loadSubjectTree(subjectId);
        }
        this.selectedLesson = null;
    }
    assignSubjectList(data) {
        this.subjectList = [];
        this.subjectTree = [];
        this.pluginService.jsTree("#viewSubjectTree", this.subjectTree, false);
        for (let i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
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
    loadSubjectTree(subjectId) {
        this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe((res) => this.assignSubjectTree(res.body), (res) => this.onError(res));
    }
    assignSubjectTree(data) {
        this.lessonList = [];
        $("#lesson").val("").trigger('change');
        this.subjectTree = data;
        this.lessonList = this.subjectTree.filter(item => item.type === 'lesson');
        this.pluginService.jsTree("#viewSubjectTree", this.subjectTree, false);
    }
    getLessonTopicList() {
        if (this.selectedLesson) {
            let lessonId = this.selectedLesson.data.id;
            if (lessonId) {
                this.topicQuestionService
                    .getLessonTopicListByLessonId(lessonId)
                    .subscribe((res) => this.assignLessonTopicsList(res.body), (res) => this.onError(res));
            }
            else {
                this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
        }
    }
    assignLessonTopicsList(data) {
        let topicsList = [], treeTopicsList = [];
        if (data.lessonTopics.length > 0) {
            topicsList = data.lessonTopics;
            for (let i = 0; i < topicsList.length; i++) {
                if (topicsList[i].questionsCount === 0) {
                    treeTopicsList.push({
                        text: topicsList[i].topicName,
                        generalTopicId: topicsList[i].generalTopicId,
                        id: topicsList[i].id,
                        icon: "fa fa-times text-danger"
                    });
                }
                else {
                    treeTopicsList.push({
                        text: topicsList[i].topicName,
                        generalTopicId: topicsList[i].generalTopicId,
                        id: topicsList[i].id
                    });
                }
            }
        }
        else {
            this.pluginService.alertMessage("No topics mapped to a lesson", "error");
        }
        this.pluginService.jsTree("#topicsList", treeTopicsList, false);
        this.showQuestionMapping = false;
        this.showTopicHeading = true;
        this.enableExpandNode = false;
    }
    nodeOnSelected() {
        var localThisObj = this;
        $('#topicsList')
            .on('changed.jstree', function (e, data) {
            var i, j;
            for (i = 0, j = data.selected.length; i < j; i++) {
                localThisObj.generalTopicId = data.node.original.generalTopicId;
                localThisObj.topicName = data.node.original.text;
                localThisObj.generalTopicQuestions = [];
                localThisObj.orgGeneralTopicQuestions = [];
                localThisObj.ownTopicQuestions = [];
                localThisObj.getGeneralTopicQuestionList(localThisObj.generalTopicId);
                localThisObj.getTopicQuestionList(localThisObj.generalTopicId);
                localThisObj.getOrgGeneralTopicQuestionByOrganisationId(localThisObj.generalTopicId);
                localThisObj.getOrganisationList();
                localThisObj.getQuestionPreference(localThisObj.generalTopicId);
                localThisObj.showQuestionMapping = true;
                localThisObj.tableAction = true;
            }
        });
    }
    getGeneralTopicQuestionList(generalTopicId) {
        this.generalTopicQuestionService.getTopicQuestionList(generalTopicId).subscribe((res) => this.assignResponseToGeneralTopicQuestionList(res.body), (res) => this.onError(res));
    }
    assignResponseToGeneralTopicQuestionList(data) {
        let questionDetails = [], question, complexityLevel, questionType;
        this.generalTopicQuestions = [];
        this.generalTopicQuestionResources = [];
        this.topicDescription = data.description;
        this.generalTopicQuestionResources = data.questions;
        for (let i = 0; i < this.generalTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.generalTopicQuestionResources[i].contentJson));
            for (let j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                if (this.generalTopicQuestionResources[i].complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.generalTopicQuestionResources[i].complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.generalTopicQuestionResources[i].complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.generalTopicQuestions.push({
                    id: this.generalTopicQuestionResources[i].id,
                    questionId: this.generalTopicQuestionResources[i].id,
                    questionCategory: this.titleCapitalize(this.generalTopicQuestionResources[i].category),
                    complexityLevel: complexityLevel,
                    questionText: question,
                    questionType: questionType,
                    generalTopicId: this.generalTopicQuestionResources[i].generalTopicId
                });
            }
        }
    }
    getTopicQuestionList(generalTopicId) {
        this.topicQuestionService.getTopicQuestionDetails(generalTopicId).subscribe((res) => this.assignResponseToTopicQuestionList(res.body), (res) => this.onError(res));
    }
    assignResponseToTopicQuestionList(data) {
        let questionDetails = [], question, complexityLevel, questionType;
        this.ownTopicQuestions = [];
        this.ownTopicQuestionResources = [];
        this.topicDescription = data.description;
        this.ownTopicQuestionResources = data.orgGeneralTopicQuestions;
        for (let i = 0; i < this.ownTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.ownTopicQuestionResources[i].question.contentJson));
            for (let j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                if (this.ownTopicQuestionResources[i].question.complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.ownTopicQuestionResources[i].question.complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.ownTopicQuestionResources[i].question.complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.ownTopicQuestions.push({
                    id: this.ownTopicQuestionResources[i].id,
                    questionId: this.ownTopicQuestionResources[i].id,
                    questionCategory: this.titleCapitalize(this.ownTopicQuestionResources[i].question.category),
                    complexityLevel: complexityLevel,
                    questionText: question,
                    questionType: questionType,
                    generalTopicId: this.ownTopicQuestionResources[i].generalTopicId
                });
            }
        }
    }
    getOrgGeneralTopicQuestionByOrganisationId(generalTopicId) {
        //User login Information for organisationId 
        this.organisationId = this.userLoginService.organisationId;
        this.topicQuestionService.getOrgGeneralTopicQuestionsByOrgId(generalTopicId, this.organisationId).subscribe((res) => this.assignResponseToOrgTopicQuestionList(res.body), (res) => this.onError(res));
    }
    getOrgTopicQuestiontByOrgId() {
        let organisationId = this.selectedOrganisation.id;
        if (organisationId) {
            this.topicQuestionService.getOrgGeneralTopicQuestionsByOrgId(this.generalTopicId, organisationId).subscribe((res) => this.assignResponseToOrgTopicQuestionList(res.body), (res) => this.onError(res));
        }
    }
    assignResponseToOrgTopicQuestionList(data) {
        let questionDetails = [], question, complexityLevel, questionType;
        this.orgTopicQuestionResources = [];
        this.orgTopicQuestionResources = data;
        for (let i = 0; i < this.orgTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.orgTopicQuestionResources[i].question.contentJson));
            for (let j = 0; j < questionDetails.length; j++) {
                question = questionDetails[j].Question;
                if (this.orgTopicQuestionResources[i].question.complexityLevel === 1) {
                    complexityLevel = "Low";
                }
                else if (this.orgTopicQuestionResources[i].question.complexityLevel === 2) {
                    complexityLevel = "Medium";
                }
                else if (this.orgTopicQuestionResources[i].question.complexityLevel === 3) {
                    complexityLevel = "High";
                }
                else {
                    complexityLevel = "";
                }
                if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                    questionType = "MCQ single answer";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                    questionType = "MCQ multiple answers";
                }
                else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                    questionType = "Choice matrix";
                }
                else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                    questionType = "MCQ true or false";
                }
                else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                    questionType = "MCQ match list";
                }
                else {
                    questionType = "";
                }
                this.orgGeneralTopicQuestions.push({
                    id: this.orgTopicQuestionResources[i].question.id,
                    questionId: this.orgTopicQuestionResources[i].question.id,
                    questionText: question,
                    questionCategory: this.titleCapitalize(this.orgTopicQuestionResources[i].question.category),
                    complexityLevel: complexityLevel,
                    questionType: questionType,
                    generalTopicId: this.orgTopicQuestionResources[i].generalTopicId
                });
            }
        }
    }
    titleCapitalize(word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    getOrganisationList() {
        this.organisationService.getOrganisations().subscribe((res) => this.assignOrgList(res.body), (res) => this.onError(res));
    }
    assignOrgList(data) {
        this.organisations = data;
    }
    openSubjectTreeModal() {
        this.pluginService.showModalWindow("#viewSubjectTreeModal");
    }
    closeSubjectTreeModal() {
        this.pluginService.hideModalWindow("#viewSubjectTreeModal");
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
    deleteOwnTopicQuestions(questionId) {
        var localthisObject = this;
        if (this.questionPreferenceStatus === true) {
            this.pluginService.alertMessage("Please change your question preference and do delete action, ", "error");
        }
        else {
            swal({
                title: "Are you sure to delete questions ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                confirmButtonColor: "#32b432",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, function (isConfirm) {
                if (isConfirm === true) {
                    localthisObject.subscribeToDeleteResponse(localthisObject.topicQuestionService.deleteOwnTopicQuestion(questionId));
                }
            });
        }
    }
    subscribeToDeleteResponse(result) {
        result.subscribe((res) => this.onDeleteSuccess(res), (errRes) => this.onError(errRes));
    }
    onDeleteSuccess(res) {
        this.pluginService.alertMessage("Topic question deleted successfully", "success");
        this.ownTopicQuestions = [];
        this.getTopicQuestionList(this.generalTopicId);
        this.tableAction = true;
    }
    checkQuestionPreference(event) {
        let check = event.target.checked;
        let name = event.target.id;
        if (check === true && name === "QuestionCE") {
            this.questionPreferenceStatus = false;
        }
        else if (check === true && name === "OwnQuestion") {
            this.questionPreferenceStatus = true;
        }
    }
    getQuestionPreference(generalTopicId) {
        //User login Information for organisationId 
        let orgId = this.userLoginService.organisationId;
        this.topicQuestionService.getQuestionPreference(orgId, generalTopicId).subscribe((res) => this.onGetPreferenceSuccess(res.body), (res) => this.onError(res));
    }
    onGetPreferenceSuccess(acitveStatus) {
        if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkQuestionCE = true;
            this.checkOwnQuestion = false;
        }
        else if (acitveStatus === true) {
            this.checkQuestionCE = false;
            this.checkOwnQuestion = true;
        }
    }
    saveQuestionPreference() {
        if (this.questionPreferenceStatus === false) {
            if (this.generalTopicQuestions.length >= 10) {
                this.setQuestionPreference();
            }
            else {
                this.pluginService.alertMessage("Please add atleast ten general topic question and change preference", "error");
            }
        }
        else if (this.questionPreferenceStatus === true) {
            if (this.ownTopicQuestions.length >= 10) {
                this.setQuestionPreference();
            }
            else {
                this.pluginService.alertMessage("Please add atleast ten own topic question and change preference", "error");
            }
        }
    }
    setQuestionPreference() {
        this.topicQuestionService.setQuestionPreference(this.questionPreferenceStatus, this.generalTopicId, this.organisationId).subscribe((res) => this.onSuccess(res.body), (res) => this.onError(res));
    }
    onSuccess(data) {
        this.pluginService.alertMessage("Question preference saved successfully", "success");
    }
    toggleTreeNodes() {
        this.enableExpandNode = !this.enableExpandNode;
        if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#viewSubjectTree");
        }
        else {
            this.pluginService.closeJsTreeAllNodes("#viewSubjectTree");
        }
    }
    loadUpdatedTopicQuestion() {
        this.getTopicQuestionList(this.generalTopicId);
        this.getOrgGeneralTopicQuestionByOrganisationId(this.generalTopicId);
    }
    openGeneralTopicSimulateQuestionModal() {
        this.pluginService.showModalWindow("#simulateTopicQuestionModal");
        this.simulateGeneralTopicQuestionList(this.generalTopicQuestionResources);
    }
    openOrgTopicSimulateQuestionModal() {
        this.pluginService.showModalWindow("#simulateTopicQuestionModal");
        this.simulateOwnTopicQuestionList(this.orgTopicQuestionResources);
    }
    openOwnTopicSimulateQuestionModal() {
        this.pluginService.showModalWindow("#simulateTopicQuestionModal");
        this.simulateOwnTopicQuestionList(this.ownTopicQuestionResources);
    }
    closeSimulateQuestionModal() {
        this.pluginService.hideModalWindow("#simulateTopicQuestionModal");
    }
    openGeneralTopicPreviewQuestionModal() {
        this.pluginService.showModalWindow("#previewTopicQuestionModal");
        this.previewGeneralTopicQuestionList(this.generalTopicQuestionResources);
    }
    openOrgTopicPreviewQuestionModal() {
        this.pluginService.showModalWindow("#previewTopicQuestionModal");
        this.previewOwnTopicQuestionList(this.orgTopicQuestionResources);
    }
    openOwnTopicPreviewQuestionModal() {
        this.pluginService.showModalWindow("#previewTopicQuestionModal");
        this.previewOwnTopicQuestionList(this.ownTopicQuestionResources);
    }
    closePreviewQuestionModal() {
        this.pluginService.hideModalWindow("#previewTopicQuestionModal");
    }
    previewGeneralTopicQuestionList(questionResources) {
        let questionDetails, options = [], answers = [], choices = [];
        this.topicQuestions = [];
        for (let i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].contentJson);
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
                id: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].id,
                choices: questionDetails.Choices,
                options: options,
                answers: answers
            });
        }
    }
    simulateGeneralTopicQuestionList(questionResources) {
        let questionDetails, options = [], choices = [];
        this.topicQuestions = [];
        for (let i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                options = this.shuffleArray(questionDetails.Options);
                choices = questionDetails.Choices;
            }
            else {
                options = [];
                choices = this.shuffleArray(questionDetails.Choices);
            }
            this.topicQuestions.push({
                id: questionResources[i].id,
                questionId: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                choices: choices,
                options: options,
                answers: questionDetails.Answers,
                checkAnswer: ""
            });
        }
    }
    previewOwnTopicQuestionList(questionResources) {
        let questionDetails, options = [], answers = [], choices = [];
        this.topicQuestions = [];
        for (let i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].question.contentJson);
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
                id: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].question.id,
                choices: questionDetails.Choices,
                options: options,
                answers: answers
            });
        }
    }
    simulateOwnTopicQuestionList(questionResources) {
        let questionDetails, options = [], choices = [];
        this.topicQuestions = [];
        for (let i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].question.contentJson);
            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
                options = this.shuffleArray(questionDetails.Options);
                choices = questionDetails.Choices;
            }
            else {
                options = [];
                choices = this.shuffleArray(questionDetails.Choices);
            }
            this.topicQuestions.push({
                id: questionResources[i].id,
                question: questionDetails.Question,
                questionType: questionDetails.QuestionType,
                generalTopicId: questionResources[i].generalTopicId,
                questionId: questionResources[i].question.id,
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
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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
CurriculumTopicQuestionManageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumService"] },
    { type: _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationService"] },
    { type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__["SubjectService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"] },
    { type: _general_concept_topic__WEBPACK_IMPORTED_MODULE_15__["GeneralConceptAndTopicService"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"] },
    { type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"] },
    { type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["CoreErrorHandler"] },
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"] }
];
CurriculumTopicQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-question-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumService"],
        _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationService"],
        _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__["SubjectService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
        _general_concept_topic__WEBPACK_IMPORTED_MODULE_15__["GeneralConceptAndTopicService"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"],
        ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"],
        _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"],
        _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["CoreErrorHandler"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]])
], CurriculumTopicQuestionManageComponent);



/***/ }),

/***/ "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CurriculumTopicQuestionUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionUpdateComponent", function() { return CurriculumTopicQuestionUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../syllabus-lesson-topic.service */ "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
/* harmony import */ var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/plugin/plugin.service */ "./src/app/shared/plugin/plugin.service.ts");
/* harmony import */ var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-builder/question-builder.service */ "./src/app/question-builder/question-builder.service.ts");
/* harmony import */ var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/user-login-info/user-login-info.service */ "./src/app/shared/user-login-info/user-login-info.service.ts");
/* harmony import */ var _question_builder_mcq_standard_mcq_standard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../question-builder/mcq-standard/mcq-standard.service */ "./src/app/question-builder/mcq-standard/mcq-standard.service.ts");
/* harmony import */ var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../question-builder/mcq-choicematrix */ "./src/app/question-builder/mcq-choicematrix/index.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/file-management/file-management.service */ "./src/app/shared/file-management/file-management.service.ts");
/* harmony import */ var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/error-handler/error-handler.service */ "./src/app/shared/error-handler/error-handler.service.ts");
/* harmony import */ var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/local-storage/local-storage.service */ "./src/app/shared/local-storage/local-storage.service.ts");














let CurriculumTopicQuestionUpdateComponent = class CurriculumTopicQuestionUpdateComponent {
    constructor(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService, commonService, fileService, errorHandler, localStorageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.fileService = fileService;
        this.errorHandler = errorHandler;
        this.localStorageService = localStorageService;
        this.questionDetail = {};
        this.viewModel = {};
        this.oldViewModel = {};
        this.answers = [];
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.contentSource = [];
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        this.validateQuestion = true;
        this.getCurrentRouteInfo();
    }
    getCurrentRouteInfo() {
        let splitArray = [], currentUrl;
        currentUrl = this.router.url;
        splitArray = currentUrl.split('/');
        this.currentRoute = splitArray.pop();
    }
    ngOnInit() {
        this.pluginService.sideMenuToggle();
        this.pluginService.newStepperJs();
        this.getContentSource();
        this.getQuestionCategory();
        this.getQuestionComplexityLevel();
        this.activatedRoute.params.subscribe(params => {
            this.questionId = params['id'];
            if (this.questionId) {
                this.getTopicName();
            }
            if (this.currentRoute === 'topic-question-edit') {
                this.getOrgTopicQuestionDetail(this.questionId);
            }
            else if (this.currentRoute === 'general-topic-question-edit') {
                this.getGeneralTopicQuestionDetail(this.questionId);
            }
        });
    }
    getTopicName() {
        let topicDetail = {};
        topicDetail = this.localStorageService.retrieveData("topicDetails");
        if (this.questionId) {
            this.topicName = topicDetail.title;
        }
        else {
            this.topicName = "";
        }
    }
    getGeneralTopicQuestionDetail(questionId) {
        this.questionService
            .getGeneralTopicQuestionByQuestionId(questionId)
            .subscribe((res) => this.assignQuestionResource(res.body), (res) => this.onError(res));
    }
    assignQuestionResource(data) {
        let categoryIndex, levelIndex;
        this.questionDetail = data;
        this.viewModel = this.questionBuilderService.convertStringToJson(this.questionDetail.contentJson);
        this.oldViewModel = this.questionBuilderService.convertStringToJson(this.questionDetail.contentJson);
        this.solutionContent = this.questionBuilderService.convertStringToJson(this.questionDetail.solutionJson);
        this.oldSolutionContent = this.solutionContent;
        if (this.viewModel.QuestionType === "MCQ_MULTIPLE") {
            this.choiceType = "checkbox";
        }
        else if (this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.choiceType = "radio";
        }
        categoryIndex = this.questionCategory.findIndex(item => item.tag === this.questionDetail.category);
        this.questionCategory[categoryIndex].checked = true;
        levelIndex = this.questionComplexityLevel.findIndex(item => item.value === this.questionDetail.complexityLevel);
        this.questionComplexityLevel[levelIndex].checked = true;
        this.loadUpdatedAnswers();
    }
    getOrgTopicQuestionDetail(questionId) {
        this.questionService
            .getOrgTopicQuestionByQuestionId(questionId)
            .subscribe((res) => this.assignOrgQuestionResource(res.body), (res) => this.onError(res));
    }
    assignOrgQuestionResource(data) {
        let categoryIndex, levelIndex;
        this.questionDetail = data;
        this.viewModel = this.questionBuilderService.convertStringToJson(this.questionDetail.question.contentJson);
        this.oldViewModel = this.questionBuilderService.convertStringToJson(this.questionDetail.question.contentJson);
        this.solutionContent = this.questionBuilderService.convertStringToJson(this.questionDetail.question.solutionJson);
        this.oldSolutionContent = this.solutionContent;
        if (this.viewModel.QuestionType === "MCQ_MULTIPLE") {
            this.choiceType = "checkbox";
        }
        else if (this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.choiceType = "radio";
        }
        categoryIndex = this.questionCategory.findIndex(item => item.tag === this.questionDetail.question.category);
        this.questionCategory[categoryIndex].checked = true;
        levelIndex = this.questionComplexityLevel.findIndex(item => item.value === this.questionDetail.question.complexityLevel);
        this.questionComplexityLevel[levelIndex].checked = true;
        this.loadUpdatedAnswers();
    }
    loadUpdatedAnswers() {
        if (this.viewModel.QuestionType === "MCQ_CHOICE_MATRIX" || this.viewModel.QuestionType === "MCQ_MATCH_LIST") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showChoiceMatrixAnswers();
        }
        else if (this.viewModel.QuestionType === "MCQ_MULTIPLE" || this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showMCQAnswers();
        }
    }
    loadQuestionResource() {
        if (this.viewModel.QuestionType === "MCQ_CHOICE_MATRIX" || this.viewModel.QuestionType === "MCQ_MATCH_LIST") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showChoiceMatrixAnswers();
            this.validateQuestion = false;
            this.updateQuestionResource();
        }
        else if (this.viewModel.QuestionType === "MCQ_MULTIPLE" || this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.validateQuestion = false;
            this.showMCQAnswers();
            this.updateQuestionResource();
        }
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
    onSelectQuestionCategory(value) {
        this.category = value;
    }
    onSelectComplexityLevel(value) {
        this.complexityLevel = value;
    }
    onError(errRes) {
        this.errorHandler.handleError(errRes);
    }
    addChoice() {
        this.viewModel.Choices.push(new _question_builder_mcq_standard_mcq_standard_service__WEBPACK_IMPORTED_MODULE_8__["Choice"](new Date().getUTCMilliseconds(), ""));
    }
    deleteChoice(choiceId) {
        for (let i = 0; i < this.viewModel.Answers.length; i++) {
            if (this.viewModel.Answers[i] !== choiceId) {
                let index = this.viewModel.Choices.findIndex(item => item.ChoiceId === choiceId);
                this.viewModel.Choices.splice(index, 1);
            }
            else {
                this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
            }
        }
    }
    deleteStem(choiceId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
        }
        else {
            let index = this.viewModel.Choices.findIndex(item => item.ChoiceId === choiceId);
            this.viewModel.Choices.splice(index, 1);
        }
    }
    markAsMCQAnswer(choiceId) {
        var index = this.viewModel.Answers.indexOf(choiceId);
        if (this.viewModel.QuestionType !== "MCQ_MULTIPLE") {
            this.viewModel.Answers = [];
        }
        if (index === -1) {
            this.viewModel.Answers = [...this.viewModel.Answers, choiceId];
        }
        else {
            this.viewModel.Answers = this.viewModel.Answers.filter((item) => { return item !== choiceId; });
        }
        this.loadUpdatedAnswers();
    }
    showMCQAnswers() {
        this.answers = [];
        for (let j = 0; j < this.viewModel.Answers.length; j++) {
            let answerText = this.viewModel.Choices.find(item => item.ChoiceId === this.viewModel.Answers[j]).ChoiceText;
            this.answers.push(answerText);
            answerText = "";
        }
    }
    showChoiceMatrixAnswers() {
        let answers = [], matrixChoices = [], matrixOptions = [];
        this.answers = [];
        answers = this.viewModel.Answers;
        matrixChoices = this.viewModel.Choices;
        matrixOptions = this.viewModel.Options;
        for (let k = 0; k < answers.length; k++) {
            this.answers.push({
                choiceName: matrixChoices.find(item => item.ChoiceId === answers[k].ChoiceId).ChoiceText,
                optionName: matrixOptions.find(item => item.OptionId === answers[k].OptionId).OptionText
            });
        }
    }
    addOption() {
        this.viewModel.Options = [...this.viewModel.Options,
            new _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["Option"](new Date().getUTCMilliseconds(), "")];
    }
    deleteOption(optionId) {
        if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
        }
        else {
            let index = this.viewModel.Options.findIndex(item => item.OptionId === optionId);
            this.viewModel.Options.splice(index, 1);
        }
    }
    markAsMatrixAnswer(choice, option) {
        this.viewModel.Answers = this.viewModel.Answers.filter((item) => {
            return item.ChoiceId !== choice.ChoiceId;
        });
        this.viewModel.Answers = [...this.viewModel.Answers,
            new _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["Answer"](choice.ChoiceId, option.OptionId)];
        this.loadUpdatedAnswers();
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
            if (questionResource.QuestionType === 'MCQ_CHOICE_MATRIX' || questionResource.QuestionType === "MCQ_MATCH_LIST") {
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
                }
                questionResource.Options = options;
            }
            yield this.checkAnyChangesInHtml(questionResource);
        });
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
                    if (imageTags[i].alt === "") {
                        imageId = "image" + [i];
                        index = i;
                        imageTags[i].setAttribute("id", imageId); //Set id attribute for image 
                        imageUrl = imageTags[i].src; //Get image source 
                        base64 = yield this.getBase64ImageFromUrl(imageUrl);
                        updatedHTMLData = yield this.getAWSFilePath(base64, index, htmlElement);
                    }
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
            let block, contentType, encodedData, fileType, imageType, presignedURL, imageTags, updatedHTMLData, updatedFileName;
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
                        let fileNameSplit;
                        fileNameSplit = updatedFilePath.split("/");
                        updatedFileName = fileNameSplit[fileNameSplit.length - 1];
                        imageTags[index].setAttribute("src", updatedFilePath); //Setting aws filepath in respective image source
                        imageTags[index].setAttribute("alt", updatedFileName); //Passed updatedFileName in alt attribute for delete purpose
                        updatedHTMLData = htmlElement.innerHTML;
                        this.getImagePathUploadedHTML(updatedHTMLData);
                    }
                });
                yield this.fileService.uploadImagefileAWSS3(presignedURL, encodedData);
            }
        });
    }
    getImagePathUploadedHTML(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updatedHTMLDATA = data;
        });
    }
    checkAnyChangesInHtml(questionResource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.oldViewModel.Question !== questionResource.Question) {
                yield this.compareHTMLElements(this.oldViewModel.Question, questionResource.Question);
            }
            if (questionResource.Choices.length > 0) {
                for (let i = 0; i < this.oldViewModel.Choices.length; i++) {
                    yield this.compareHTMLElements(this.oldViewModel.Choices[i].ChoiceText, questionResource.Choices[i].ChoiceText);
                }
            }
            if (questionResource.QuestionType === 'MCQ_CHOICE_MATRIX' || questionResource.QuestionType === "MCQ_MATCH_LIST") {
                if (questionResource.Options.length > 0) {
                    for (let i = 0; i < this.oldViewModel.Options.length; i++) {
                        yield this.compareHTMLElements(this.oldViewModel.Options[i].OptionText, questionResource.Options[i].OptionText);
                    }
                }
            }
            yield this.questionBuilderService.generateQuestionResource(questionResource);
        });
    }
    compareHTMLElements(oldObject, newObject) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let oldHtmlElement, newHtmlElement, oldImageTags, newImageTags, oldImageArr, newImageArr, removedFiles = [];
            oldHtmlElement = document.createElement("div");
            oldHtmlElement.innerHTML = oldObject;
            oldImageTags = oldHtmlElement.getElementsByTagName("img");
            oldImageArr = Array.from(oldImageTags);
            newHtmlElement = document.createElement("div");
            newHtmlElement.innerHTML = newObject;
            newImageTags = newHtmlElement.getElementsByTagName("img");
            newImageArr = Array.from(newImageTags);
            for (let i = 0; i < oldImageArr.length; i++) {
                if (newImageArr.length === 0) {
                    removedFiles.push(oldImageArr[i].alt);
                }
                else {
                    let index = newImageArr.findIndex(item => item.alt === oldImageArr[i].alt);
                    if (index === -1) {
                        removedFiles.push(oldImageArr[i].alt);
                    }
                }
            }
            if (removedFiles.length > 0) {
                for (let i = 0; i < removedFiles.length; i++) {
                    let fileName = removedFiles[i];
                    this.deleteUploadedFile(fileName);
                }
            }
        });
    }
    deleteUploadedFile(fileName) {
        this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(fileName));
    }
    subscribeToDeleteFiletResponse(resp) {
        resp.subscribe((res) => this.onDeleteFileSuccess(res), (res) => this.onError(res));
    }
    onDeleteFileSuccess(resp) {
        //File deleted successfully
    }
    updateQuestion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let updatedQuestionResource, solutionContentJson, updatedSolutionContent;
            yield this.updateImageSrc(this.solutionContent);
            if (this.solutionContent !== "") {
                updatedSolutionContent = this.updatedHTMLDATA;
                solutionContentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedSolutionContent));
            }
            else {
                solutionContentJson = "";
            }
            //Removed deleted image to AWS
            yield this.compareHTMLElements(this.oldSolutionContent, this.solutionContent);
            updatedQuestionResource = this.questionBuilderService.getQuestionResource;
            if (this.currentRoute === 'topic-question-edit') {
                if (this.category) {
                    this.questionDetail.question.category = this.category;
                }
                if (this.complexityLevel) {
                    this.questionDetail.question.complexityLevel = this.complexityLevel;
                }
                this.questionDetail.question.contentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
                this.questionDetail.question.solutionJson = solutionContentJson;
                this.questionDetail.question.marks = updatedQuestionResource.TotalMarks * this.questionDetail.question.complexityLevel;
                this.subscribeToSaveResponse(this.questionService.updateOrgTopicQuestion(this.questionDetail));
            }
            else if (this.currentRoute === 'general-topic-question-edit') {
                updatedQuestionResource = this.questionBuilderService.getQuestionResource;
                if (this.category) {
                    this.questionDetail.category = this.category;
                }
                if (this.complexityLevel) {
                    this.questionDetail.complexityLevel = this.complexityLevel;
                }
                this.questionDetail.contentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
                this.questionDetail.solutionJson = solutionContentJson;
                this.questionDetail.marks = updatedQuestionResource.TotalMarks * this.questionDetail.complexityLevel;
                this.subscribeToSaveResponse(this.questionService.updateGeneralTopicQuestion(this.questionDetail));
            }
        });
    }
    resetQuestion() {
        window.location.reload();
    }
    subscribeToSaveResponse(result) {
        result.subscribe((resp) => this.onSaveSuccess(resp), (errRes) => this.onError(errRes));
    }
    onSaveSuccess(res) {
        this.pluginService.alertMessage("Topic question updated successfully", "success");
        this.previousUrl();
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
        if (this.currentRoute === "topic-question-edit") {
            this.router.navigateByUrl('/lesson-topic/topic-question');
        }
        else if (this.currentRoute === "general-topic-question-edit") {
            this.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
        }
        else {
            this.router.navigateByUrl('../');
        }
    }
};
CurriculumTopicQuestionUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"] },
    { type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"] },
    { type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
    { type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_11__["FileManagementService"] },
    { type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["CoreErrorHandler"] },
    { type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__["CommonLocalStorageService"] }
];
CurriculumTopicQuestionUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic-question-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html")).default,
        providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["CoreErrorHandler"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"],
        _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"],
        _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"],
        _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
        _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_11__["FileManagementService"],
        _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["CoreErrorHandler"],
        _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_13__["CommonLocalStorageService"]])
], CurriculumTopicQuestionUpdateComponent);



/***/ })

}]);
//# sourceMappingURL=default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-topic-module-es2015.js.map