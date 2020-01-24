function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-topic-module"], {
  /***/
  "./node_modules/file-saver/dist/FileSaver.min.js":
  /*!*******************************************************!*\
    !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFileSaverDistFileSaverMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (a, b) {
      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })(this, function () {
      "use strict";

      function b(a, b) {
        return "undefined" == typeof b ? b = {
          autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
          autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
          type: a.type
        }) : a;
      }

      function c(b, c, d) {
        var e = new XMLHttpRequest();
        e.open("GET", b), e.responseType = "blob", e.onload = function () {
          a(e.response, c, d);
        }, e.onerror = function () {
          console.error("could not download file");
        }, e.send();
      }

      function d(a) {
        var b = new XMLHttpRequest();
        b.open("HEAD", a, !1);

        try {
          b.send();
        } catch (a) {}

        return 200 <= b.status && 299 >= b.status;
      }

      function e(a) {
        try {
          a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
          var b = document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
      }

      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
          a = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype ? function (b, g, h) {
        var i = f.URL || f.webkitURL,
            j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
          i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function () {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
          var i = document.createElement("a");
          i.href = f, i.target = "_blank", setTimeout(function () {
            e(i);
          });
        }
      } : function (a, b, d, e) {
        if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
        var g = "application/octet-stream" === a.type,
            h = /constructor/i.test(f.HTMLElement) || f.safari,
            i = /CriOS\/[\d]+/.test(navigator.userAgent);

        if ((i || g && h) && "object" == typeof FileReader) {
          var j = new FileReader();
          j.onloadend = function () {
            var a = j.result;
            a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null;
          }, j.readAsDataURL(a);
        } else {
          var k = f.URL || f.webkitURL,
              l = k.createObjectURL(a);
          e ? e.location = l : location.href = l, e = null, setTimeout(function () {
            k.revokeObjectURL(l);
          }, 4E4);
        }
      });
      f.saveAs = a.saveAs = a, true && (module.exports = a);
    }); //# sourceMappingURL=FileSaver.min.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionBuilderClozeDragNDropDragNDropComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-block my-2\" *ngIf=\"viewmodel\">\r\n    <p class=\"font-20 font-bold\">Question</p>\r\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\r\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\"  [required]=\"true\">\r\n    </ckeditor>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-20 font-bold\">Response</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewmodel.Options\">\r\n        <div class=\"editor\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #choiceInput=\"ngModel\"\r\n                placeholder=\"Enter question (min length: 3 and max length: 4000)\" \r\n                [required]=\"true\">\r\n            </ckeditor>\r\n        </div>\r\n        <div class=\"delete d-flex align-items-end ml-4 font-20 text-danger\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n        <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"drag--container\">\r\n    <p class=\"font-20 font-bold\">Preview</p>\r\n    <div [questionPreview]=\"viewmodel.Question\" class=\"preview-panel\">\r\n    </div>\r\n    <div class=\"option--container options zone\">\r\n        <span *ngFor=\"let option of viewmodel.Options\" [attr.data-option-id]=\"option.OptionId\" class=\"option--item\"\r\n            [MathJax]=\"option.OptionText | sanitizeHtml\"> </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\r\n    <button class=\"btn btn-danger mr-2\" type=\"submit\" (click)=\"cancel()\">\r\n        <i class=\"fa fa-times mr-2\"></i> Cancel</button>\r\n    <button class=\"btn btn-success\" type=\"submit\" (click)=\"saveQuestion()\">\r\n        <i class=\"fa fa-save mr-2\"></i> Save Question</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/matchlist/matchlist.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/matchlist/matchlist.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionBuilderMatchlistMatchlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row my-2\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\r\n        <h5 class=\"font-16\">Compose question - Match list</h5>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\r\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\r\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\" [required]=\"true\">\r\n    </ckeditor>\r\n    <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\r\n        Question is required\r\n    </span>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Left side option</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\" #choiceInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\r\n                Left side option is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-center ml-3 font-20 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n        <button class=\"btn btn-info\" (click)=\"addChoice()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add left option</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Right side option</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #optionInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!optionInput.valid\">\r\n                Right side option is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-center ml-4 font-20 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n        <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add right option</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"drag--container mb-2\">\r\n    <p class=\"font-16\">Setting up answers</p>\r\n\r\n    <div cdkDropListGroup>\r\n        <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n            <div class=\"mcq-left mr-2\">\r\n                <div class=\"match-list\" data-value=\"viewModel.Choices\">\r\n                    <div class=\"list-box\" *ngFor=\"let item of viewModel.Choices\"\r\n                        [MathJax]=\"item.ChoiceText | sanitizeHtml\"></div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n            <div class=\"mcq-right ml-2\">\r\n                <div cdkDropList [cdkDropListData]=\"viewModel.Options\" class=\"match-list\"\r\n                    (cdkDropListDropped)=\"updatedDropList($event)\">\r\n                    <div class=\"list-box\" *ngFor=\"let item of viewModel.Options\" cdkDrag\r\n                        [MathJax]=\"item.OptionText | sanitizeHtml\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n            <span *ngIf=\"answers.length > 0\">\r\n                <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                    -\r\n                    <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                    {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n            </span>\r\n        </div>\r\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionBuilderMcqChoicematrixMcqChoicematrixComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row my-2\">\r\n    <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\r\n        <h5 class=\"font-16\">Compose question - Choice matrix question</h5>\r\n        <a target=\"_blank\" class=\"btn btn-info\" routerLink=\"./topic-question-sample\">\r\n            <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\" #questionInput=\"ngModel\"\r\n        placeholder=\"Enter question (min length: 3 and max length: 4000)\" [required]=\"true\">\r\n    </ckeditor>\r\n    <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\r\n        Question is required\r\n    </span>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Stems</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [required]=\"true\" [(ngModel)]=\"choice.ChoiceText\"\r\n                #choiceInput=\"ngModel\" placeholder=\"Enter choice (min length: 1 and max length: 4000)\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\r\n                Stem is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n    <button class=\"btn btn-info\" (click)=\"addChoice()\">\r\n        <i class=\"fa fa-plus-circle mr-2\"></i> Add stem</button>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Options</p>\r\n    <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\r\n        <div class=\"mcq-stem\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\" #optionInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!optionInput.valid\">\r\n                Option is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n    <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n        <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\r\n</div>\r\n\r\n<div class=\"w-100 d-block my-2\">\r\n    <p class=\"font-16\">Setting up answers</p>\r\n</div>\r\n\r\n<table class=\"table-matrix my-2\">\r\n    <tr class=\"bg-lightgray\">\r\n        <td></td>\r\n        <td *ngFor=\"let option of viewModel.Options\">\r\n            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n        </td>\r\n    </tr>\r\n    <tr style=\"background: none !important;\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n        <td *ngFor=\"let option of viewModel.Options\">\r\n            <div class=\"radio\">\r\n                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\" [choicematrix]=\"viewModel.Answers\"\r\n                    [optionid]=\"option.OptionId\" [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\"\r\n                    (click)=\"markAsAnswer(choice, option)\">\r\n                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n<div class=\"mb-3 font-18\">\r\n    <div class=\"border-success p-3 alert-success\">\r\n        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n        <span *ngIf=\"answers.length > 0\">\r\n            <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                -\r\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </span>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-standard/mcq-standard.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-standard/mcq-standard.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionBuilderMcqStandardMcqStandardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\r\n    <div class=\"row my-2\">\r\n        <div class=\"col-xxl-12 d-flex justify-content-between align-items-center\">\r\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_SINGLE'\">\r\n                <p class=\"font-16\">Compose question - MCQ single answer</p>\r\n            </div>\r\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_MULTIPLE'\">\r\n                <p class=\"font-16\">Compose question - MCQ multiple answers</p>\r\n            </div>\r\n            <div class=\"\" *ngIf=\"viewModel.QuestionType === 'MCQ_TRUE_FALSE'\">\r\n                <p class=\"font-16\">Compose question - MCQ true or false</p>\r\n            </div>\r\n            <a target=\"_blank\" class=\"btn btn-info\" routerLink=\"./topic-question-sample\">\r\n                <i class=\"fa fa-question-circle mr-2\"></i>View sample questions\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\"\r\n                #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                [required]=\"true\">\r\n            </ckeditor>\r\n        </div>\r\n        <span class=\"text-danger font-15 my-2 mx-3\" *ngIf=\"!questionInput.valid\">\r\n            Question is required\r\n        </span>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <p class=\"font-16\">Choices</p>\r\n    </div>\r\n    <div class=\"w-100 mb-2 my-2 d-flex\" *ngFor=\"let choice of viewModel.Choices\">\r\n        <div class=\"mcq-choice d-flex align-items-center\"\r\n            [ngClass]=\"{'radio': choiceType === 'radio','checkbox': choiceType === 'checkbox'}\">\r\n            <input type=\"{{choiceType}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"viewModel.Answers\"\r\n                [choiceid]=\"choice.ChoiceId\" (click)=\"markAsAnswer(choice.ChoiceId)\">\r\n            <label for=\"{{choice.ChoiceId}}\"></label>\r\n        </div>\r\n        <div class=\"mcq-question\">\r\n            <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\" #choiceInput=\"ngModel\"\r\n                placeholder=\"Enter choice (min length: 1 and max length: 4000)\" [required]=\"true\">\r\n            </ckeditor>\r\n            <span class=\"text-danger font-15 my-2\" *ngIf=\"!choiceInput.valid\">\r\n                Choice is required\r\n            </span>\r\n        </div>\r\n        <div class=\"mcq-action font-22 d-flex align-items-center text-danger d-flex justify-content-end delete-icon\">\r\n            <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\r\n        <div class=\"btn btn-info\" *ngIf=\"viewModel.QuestionType !== 'MCQ_TRUE_FALSE'\" (click)=\"addChoice()\">\r\n            <i class=\"fa fa-plus-circle mr-2\"></i> Add Choice</div>\r\n    </div>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span>\r\n            <span *ngIf=\"answers.length > 0\">\r\n                <span class=\"text-dark\" *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                    <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                    {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/pick-question-type/pick-question-type.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/pick-question-type/pick-question-type.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionBuilderPickQuestionTypePickQuestionTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-start flex-wrap\">\r\n    <div *ngFor=\"let type of questionTypes;let i=index;\">\r\n        <label for=\"{{type.id}}\">\r\n            <div class=\"d-flex p-2\" (click)=\"navigateToUrl(type.router)\">\r\n                <div class=\"radio\">\r\n                    <input type=\"radio\" id=\"{{type.id}}\" [checked]=\"type.checked\" name=\"mcq\">\r\n                    <label for=\"{{type.id}}\"></label>\r\n                </div>\r\n                <div>\r\n                    <div class=\"mcq-header\">\r\n                        <p class=\"text-white p-2\">\r\n                            {{type.name}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"mcq-img p-2\">\r\n                        <img src=\"{{type.imgsrc}}\" alt=\"{{type.name}}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </label>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicAddlResourceAddlResourceManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\" id=\"curriculumDropdown\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div id=\"treeView\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-2 py-2\">\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n            <div class=\"d-flex w-100 justify-content-between mb-2 flex-wrap\">\r\n                <div class=\"filterbg p-3 mb-2 w-100\">\r\n                    <p class=\"font-20\">Content preference for {{nodeName}}</p>\r\n                    <div class=\"row m-0 mb-2\">\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"ContentCE\" name=\"content\" [checked]=\"checkContentCE\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"ContentCE\">Recommended by CE</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"OwnContent\" name=\"content\" [checked]=\"checkOwnContent\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"OwnContent\">Use\r\n                                our own resource</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"w-100 d-flex justify-content-end\">\r\n                            <div class=\"btn btn-success\" (click)=\"saveContentPreference()\">\r\n                                <i class=\"fa fa-save mr-2\"></i>Save\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab w-100\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\r\n                                aria-controls=\"home\" aria-selected=\"false\">Recommended\r\n                                by CE </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\r\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by organizations</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\r\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\r\n                                additional lesson resources </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\r\n                            aria-labelledby=\"home-tab\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-md-12 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-primary\" (click)=\"addAddlessonResources()\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\r\n                                        resources\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"addlResource\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\r\n                                    id=\"dragTable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Resource category</th>\r\n                                            <th>Content type</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody id=\"dragBody\">\r\n                                        <tr\r\n                                            *ngFor=\"let resource of addlResource;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Select\" data-column=\"Select\" id=\"{{resource.id}}\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" title=\"{{resource.id}}\" id=\"{{resource.id}}2\"\r\n                                                        (change)=\"checkSelectedContents($event)\" class=\"checkAll\">\r\n                                                    <label for=\"{{resource.id}}2\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Order number\" class=\"index\">\r\n                                                {{resource.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                {{resource.content.title}}\r\n                                            </td>\r\n                                            <td data-column=\"Resource category\">\r\n                                                {{resource.content.tag}}\r\n                                            </td>\r\n                                            <td data-column=\"Content type\">\r\n                                                {{resource.content.contentType}}\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div>\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                                        (click)=\"viewAddlResource(resource.id)\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-outline-success mr-1 mb-1 btn-icon-size\"\r\n                                                        (click)=\"editAddlResource(resource.id)\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"addlResource.length > 0\">\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableGenAction\"\r\n                                        (click)=\"resetSelectedAddlResource()\">\r\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableGenAction\"\r\n                                        (click)=\"deleteAddlResource()\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                    </button>\r\n                                    <button class=\"btn btn-success\" [disabled]=\"updateGenAction\"\r\n                                        (click)=\"updateAddlResourceWithOrderNumber()\">\r\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                            <div class=\"col-12 filterbg py-2 px-4 rounded my-4\">\r\n                                <div class=\"filtericon font-20\">\r\n                                    <i class=\"fa fa-filter\"></i>\r\n                                </div>\r\n                                <div class=\"row col-xxl-4 mb-3\">\r\n                                    <ng-select [items]=\"organisations\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        bindLabel=\"name\" placeholder=\"Select organisation\"\r\n                                        [(ngModel)]=\"selectedOrganisation\" class=\"w-100\">\r\n                                    </ng-select>\r\n                                </div>\r\n                                <div class=\"w-100 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-success\" (click)=\"getOrgGeneralAddlResourceByOrganisation()\">\r\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"orgGeneralAddlResource\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Resource category</th>\r\n                                            <th>Content type</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let resource of orgGeneralAddlResource;trackBy: trackId;\">\r\n                                            <td data-column=\"Order number\">\r\n                                                {{resource.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                {{resource.content.title}}\r\n                                            </td>\r\n                                            <td data-column=\"Resource category\">\r\n                                                {{resource.content.tag}}\r\n                                            </td>\r\n                                            <td data-column=\"Content type\">\r\n                                                {{resource.content.contentType}}\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                                    (click)=\"viewOrgAddlResource(resource.id)\">\r\n                                                    <i class=\"fa fa-eye\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-md-12 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-primary\" (click)=\"addOwnAddlResources()\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\r\n                                        resources\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ownAddlResource\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\r\n                                    id=\"ownContentDragTable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Resource category</th>\r\n                                            <th>Content type</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody id=\"ownContentDragBody\">\r\n                                        <tr *ngFor=\"let resource of ownAddlResource;trackBy: trackId;\">\r\n                                            <td data-column=\"Select\" data-column=\"Select\" id=\"{{resource.id}}\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" title=\"{{resource.id}}\" id=\"{{resource.id}}1\"\r\n                                                        (change)=\"checkSelectedOwnContents($event)\"\r\n                                                        class=\"checkAllOwnContents\">\r\n                                                    <label for=\"{{resource.id}}1\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Order number\" class=\"index\">\r\n                                                {{resource.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                {{resource.content.title}}\r\n                                            </td>\r\n                                            <td data-column=\"Resource category\">\r\n                                                {{resource.content.tag}}\r\n                                            </td>\r\n                                            <td data-column=\"Content type\">\r\n                                                {{resource.content.contentType}}\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div>\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                                        (click)=\"viewOwnAddlResource(resource.id)\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\r\n                                                        (click)=\"editOwnAddlResource(resource.id)\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"ownAddlResource.length > 0\">\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"resetSelectedOwnAddlResource()\">\r\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"deleteOwnAddlResource()\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                    </button>\r\n                                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\r\n                                        (click)=\"updateOwnAddlResourceWithOrderNumber()\">\r\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"additionalResourceModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" [formGroup]=\"lessonResourceForm\"\r\n        role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} content\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeLessonResourceModalWithOutSaving()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Title\r\n                    </label>\r\n                    <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\r\n                        class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\r\n                        inputRestriction=\"alphabetsNumbersWithMinus\" />\r\n                    <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                        Allowed characters - Alphabets, Numbers and One special character (-)\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Description <span class=\"text-muted\"\r\n                            *ngIf=\"modalTitleName !== 'View'\">(Optional)</span>\r\n                    </label>\r\n                    <textarea class=\"form-control description-form\"\r\n                        placeholder=\"Enter description (min length: 3 and max length: 250)\"\r\n                        formControlName=\"contentDescription\" minlength=\"3\" maxlength=\"250\"></textarea>\r\n                    <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                        Allowed characters - Alphabets, Numbers and Special characters\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Resource category\r\n                    </label>\r\n                    <ng-select [items]=\"resourceCategory\" [disabled]=\"disableDropdown\"\r\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select resource category\"\r\n                        [(ngModel)]=\"selectedCategory\" formControlName=\"resourceCategory\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Content type\r\n                    </label>\r\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\r\n                        formControlName=\"contentType\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div *ngIf=\"selectedContentType\">\r\n                    <div class=\"form-group mb-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                        <label class=\"col-form-label\">Web URL\r\n                        </label>\r\n                        <input type=\"url\" class=\"form-control\"\r\n                            placeholder=\"Enter web url(min length: 3 and max length: 2048)\" formControlName=\"webSource\"\r\n                            minlength=\"3\" maxlength=\"2048\">\r\n                        <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group mb-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                        <label class=\"col-form-label\">File\r\n                        </label>\r\n                        <div class=\"custom-file\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\r\n                            <label class=\"custom-file-label\" for=\"documentFile\">\r\n                                <i>\r\n                                    {{fileName}}\r\n                                </i></label>\r\n                        </div>\r\n                        <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Only PDF will allow Max file size - 100 MB\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"d-flex w-100 my-2\">\r\n                            <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\r\n                                    *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                    <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\r\n                                <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\r\n                                    <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\r\n                                </a>\r\n                                <div *ngIf=\"modalTitleName !=='View'\">\r\n                                    <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\" *ngIf=\"uploadedFileName\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete file\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"btn btn-danger\" (click)=\"resetLessonResource()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-success\" (click)=\"updateAddlResource()\"\r\n                        [disabled]=\"lessonResourceForm.invalid\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalActionName === 'AddlResource'\">\r\n                    <div *ngIf=\"modalTitleName === 'Add'\">\r\n                        <button class=\"btn btn-success\" (click)=\"saveAddlResource()\"\r\n                            [disabled]=\"lessonResourceForm.invalid\">\r\n                            <i class=\"fa fa-save mr-2\"></i>\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalActionName === 'OwnAddlResource'\">\r\n                    <div *ngIf=\"modalTitleName === 'Add'\">\r\n                        <button class=\"btn btn-success\" (click)=\"saveOwnAddlResource()\"\r\n                            [disabled]=\"lessonResourceForm.invalid\">\r\n                            <i class=\"fa fa-save mr-2\"></i>\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <div class=\"btn btn-danger\" (click)=\"closeLessonResourceModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicLessonPlanLessonPlanManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3 alert-warning w-100\">\r\n    Coming soon ...!\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicLessonTopicLessonTopicManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandSubjectNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandSubjectNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div id=\"treeView\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-3 py-3\">\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\r\n                <div class=\"mb-2\">\r\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\r\n                </div>\r\n                <div class=\"d-flex align-items-start\">\r\n                    <a class=\"btn btn-primary text-white mb-2\" (click)=\"addNewGeneralTopicMapping()\">\r\n                        <i class=\"fa fa-cog mr-2\"></i> Add new general topic\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"lessonTopicsList\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Order number</th>\r\n                            <th>General topic name</th>\r\n                            <th>New topic name</th>\r\n                            <th>Primary applicable grade</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody id=\"dragBody\">\r\n                        <tr *ngFor=\"let lesson of lessonTopicsList;trackBy: trackId;\">\r\n                            <td data-column=\"Select\" title=\"{{lesson.id}}\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" title=\"{{lesson.id}}\" id=\"{{lesson.id}}\"\r\n                                        (change)=\"checkSelectedTopics($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{lesson.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Order number\" class=\"index\">\r\n                                {{lesson.orderNumber}}\r\n                            </td>\r\n                            <td data-column=\"General topic name\">\r\n                                {{lesson.generalTopicName}}\r\n                            </td>\r\n                            <td data-column=\"New topic name\">\r\n                                {{lesson.topicName}}\r\n                            </td>\r\n                            <td data-column=\"Primary applicable grade\">\r\n                                {{lesson.grade}}\r\n                            </td>\r\n                            <td data-column=\"Action\">\r\n                                <a class=\"btn btn-outline-success mr-1 mb-1 btn-icon-size\"\r\n                                    (click)=\"editLessonTopic(lesson.id)\">\r\n                                    <i class=\"fa fa-edit\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"lessonTopicsList.length > 0\">\r\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopic()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger mx-2\" [disabled]=\"tableAction\" (click)=\"deleteLessonTopics()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\" (click)=\"updateLessonTopics()\">\r\n                        <i class=\"fa fa-save mr-2\"></i> Update order\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"addNewTopicMappingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addNewTopicMappingModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Add new general topic mapping - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicMapping()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"col-12 filterbg my-4 rounded\">\r\n                    <div class=\"filtericon font-20\">\r\n                        <i class=\"fa fa-filter\"></i>\r\n                    </div>\r\n                    <div class=\"row d-flex justify-content-start align-items-center\">\r\n                        <div class=\"col-lg-3 mb-3\">\r\n                            <ng-select [items]=\"generalSubjectList\" [ngModelOptions]=\"{standalone: true}\"\r\n                                bindLabel=\"title\" placeholder=\"Select general subject\"\r\n                                [(ngModel)]=\"selectedGeneralSubject\">\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end pb-3 row\">\r\n                        <div class=\"col-lg-2\">\r\n                            <button class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                (click)=\"loadGeneralSubjectTree()\">\r\n                                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-3\">\r\n                        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubjectTree.length > 1\">\r\n                            <div class=\"btn btn-primary mr-2\" (click)=\"toggleGeneralSubjectTreeNodes()\">\r\n                                <i class=\"fa fa-clone mr-2\"></i>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === false\">\r\n                                    Expand all\r\n                                </span>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === true\">\r\n                                    Collapse all\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"generalSubjectTreeView\"></div>\r\n                    </div>\r\n                    <div class=\"col-xxl-9\">\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'root'\">\r\n                            <p><b>Subject name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Subject description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"modalNodeType === 'concept'\" class=\"p-3\">\r\n                            <div class=\"my-2\">\r\n                                <p><b>Concept name</b> - {{nodeName}}</p>\r\n                                <p><b>Concept description - {{nodeDescription}}</b></p>\r\n                            </div>\r\n                            <div *ngIf=\"generalSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of generalSubTopicsList;\">\r\n                                            <td data-column=\"Select\">\r\n                                                <label for=\"{{topic.id}}+123\">\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"{{topic.id}}\" id=\"{{topic.id}}+123\"\r\n                                                            (change)=\"checkNewlyAddedTopics($event)\"\r\n                                                            [checked]=\"topic.disabled\" [disabled]=\"topic.disabled\">\r\n                                                        <label for=\"{{topic.id}}+123\"></label>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </td>\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"d-flex justify-content-end my-2\">\r\n                                <button class=\"btn btn-info\" [disabled]=\"addToListAction\" (click)=\"addTopicToList()\">\r\n                                    <i class=\"fa fa-plus-circle mr-2\"></i> Add to list\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"selectedGeneralSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                            <th>Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of selectedGeneralSubTopicsList;\">\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                            <td data-column=\"Action\">\r\n                                                <div class=\"btn btn-outline-danger\"\r\n                                                    (click)=\"removeFromNewTopicList(topic.id)\">\r\n                                                    <i class=\"fa fa-trash\"></i>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'topic'\">\r\n                            <p><b>Topic name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Topic description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeTopicMappingModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n                <div class=\"btn btn-success\" (click)=\"saveLessonTopicMapping()\">\r\n                    <i class=\"fa fa-save mr-2\"></i> Save\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"editLessonTopicModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\" [formGroup]=\"lessonTopicForm\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Edit lesson topic\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicName()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">General topic name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"generalTopicName\" />\r\n                </div>\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">New topic name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"newTopicName\"\r\n                        placeholder=\"Enter new topic name (minlength: 3 and maxlength: 75)\"\r\n                        inputRestriction=\"alphabetsNumbersWithMinus\" minlength=\"3\" maxlength=\"75\" />\r\n                    <div class=\"text-muted font-15 my-2\">\r\n                        Allowed characters - Alphabets, Numbers and Special character (-)\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-danger\" (click)=\"resetEditLessonTopicModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Reset\r\n                </button>\r\n                <button class=\"btn btn-success\" (click)=\"updateLessonTopicName()\">\r\n                    <i class=\"fa fa-save mr-2\"></i>\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicPrerequisiteLessonTopicPrerequisiteLessonTopicManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandSubjectNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandSubjectNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div id=\"treeView\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-3 py-3\">\r\n\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'unit'\">\r\n            <p><b>Unit name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Unit description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'lesson'\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\r\n                <div class=\"mb-2\">\r\n                    <h4 class=\"font-24 mb-2\">{{nodeName}}</h4>\r\n                </div>\r\n                <div class=\"d-flex align-items-start\">\r\n                    <a class=\"btn btn-primary text-white mb-2\" (click)=\"addNewGeneralTopicMapping()\">\r\n                        <i class=\"fa fa-cog mr-2\"></i> Add new general topic\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"lessonTopicsList\">\r\n                <table class=\"table table-hover table-striped table-bordered nowrap w-100\" id=\"dragTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Select</th>\r\n                            <th>Order number</th>\r\n                            <th>Topic name</th>\r\n                            <th>Primary applicable grade</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody id=\"dragBody\">\r\n                        <tr *ngFor=\"let lesson of lessonTopicsList;trackBy: trackId;\">\r\n                            <td data-column=\"Select\" title=\"{{lesson.id}}\">\r\n                                <div class=\"checkbox\">\r\n                                    <input type=\"checkbox\" title=\"{{lesson.id}}\" id=\"{{lesson.id}}\"\r\n                                        (change)=\"checkSelectedTopics($event)\" class=\"checkAll\">\r\n                                    <label for=\"{{lesson.id}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td data-column=\"Order number\" class=\"index\">\r\n                                {{lesson.orderNumber}}\r\n                            </td>\r\n                            <td data-column=\"Topic name\">\r\n                                {{lesson.displayName}}\r\n                            </td>\r\n                            <td data-column=\"Primary applicable grade\">\r\n                                {{lesson.grade}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"lessonTopicsList.length > 0\">\r\n                    <button class=\"btn btn-danger\" [disabled]=\"tableAction\" (click)=\"resetSelectedTopic()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                    </button>\r\n                    <button class=\"btn btn-danger mx-2\" [disabled]=\"tableAction\" (click)=\"deleteLessonTopics()\">\r\n                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                    </button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"updateAction\" (click)=\"updateLessonTopics()\">\r\n                        <i class=\"fa fa-save mr-2\"></i> Update order\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"addNewPrereqTopicMappingModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"addNewPrereqTopicMappingModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Add new prerequisite topic mapping - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeWithOutSavingTopicMapping()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"col-12 filterbg my-4 rounded\">\r\n                    <div class=\"filtericon font-20\">\r\n                        <i class=\"fa fa-filter\"></i>\r\n                    </div>\r\n                    <div class=\"row d-flex justify-content-start align-items-center\">\r\n                        <div class=\"col-lg-3 mb-3\">\r\n                            <ng-select [items]=\"generalSubjectList\" [ngModelOptions]=\"{standalone: true}\"\r\n                                bindLabel=\"title\" placeholder=\"Select general subject\"\r\n                                [(ngModel)]=\"selectedGeneralSubject\">\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end pb-3 row\">\r\n                        <div class=\"col-lg-2\">\r\n                            <button class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                (click)=\"loadGeneralSubjectTree()\">\r\n                                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xxl-3\">\r\n                        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"generalSubjectTree.length > 1\">\r\n                            <div class=\"btn btn-primary mr-2\" (click)=\"toggleGeneralSubjectTreeNodes()\">\r\n                                <i class=\"fa fa-clone mr-2\"></i>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === false\">\r\n                                    Expand all\r\n                                </span>\r\n                                <span *ngIf=\"enableExpandGSubjectNode === true\">\r\n                                    Collapse all\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"generalSubjectTreeView\"></div>\r\n                    </div>\r\n                    <div class=\"col-xxl-9\">\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'root'\">\r\n                            <p><b>Subject name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Subject description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"modalNodeType === 'concept'\" class=\"p-3\">\r\n                            <div class=\"my-2\">\r\n                                <p><b>Concept name</b> - {{nodeName}}</p>\r\n                                <p><b>Concept description - {{nodeDescription}}</b></p>\r\n                            </div>\r\n                            <div *ngIf=\"generalSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of generalSubTopicsList;\">\r\n                                            <td data-column=\"Select\">\r\n                                                <label for=\"{{topic.id}}+123\">\r\n                                                    <div class=\"checkbox\">\r\n                                                        <input type=\"checkbox\" name=\"{{topic.id}}\" id=\"{{topic.id}}+123\"\r\n                                                            (change)=\"checkNewlyAddedTopics($event)\"\r\n                                                            [checked]=\"topic.disabled\" [disabled]=\"topic.disabled\">\r\n                                                        <label for=\"{{topic.id}}+123\"></label>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </td>\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"d-flex justify-content-end my-2\">\r\n                                <button [disabled]=\"addToListAction\" class=\"btn btn-info\" (click)=\"addTopicToList()\">\r\n                                    <i class=\"fa fa-plus-circle mr-2\"></i> Add to list\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"selectedGeneralSubTopicsList\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Topic name</th>\r\n                                            <th>Topic description</th>\r\n                                            <th>Primary applicable grade</th>\r\n                                            <th>Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let topic of selectedGeneralSubTopicsList;\">\r\n                                            <td data-column=\"Topic name\">\r\n                                                {{topic.data.name}}\r\n                                            </td>\r\n                                            <td data-column=\"Topic description\">\r\n                                                {{topic.data.description}}\r\n                                            </td>\r\n                                            <td data-column=\"Primary applicable grade\">\r\n                                                {{topic.data.baseGrade}}\r\n                                            </td>\r\n                                            <td data-column=\"Action\">\r\n                                                <div class=\"btn btn-outline-danger\"\r\n                                                    (click)=\"removeFromNewTopicList(topic.id)\">\r\n                                                    <i class=\"fa fa-trash\"></i>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-3\" *ngIf=\"modalNodeType === 'topic'\">\r\n                            <p><b>Topic name</b></p>\r\n                            <p>{{nodeName}}</p>\r\n                            <p><b>Topic description</b></p>\r\n                            <p>{{nodeDescription}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeTopicMappingModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n                <div class=\"btn btn-success\" (click)=\"saveLessonTopicMapping()\">\r\n                    <i class=\"fa fa-save mr-2\"></i> Save\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicTopicContentTopicContentManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\" (change)=\"onSubjectChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedSubject\">\r\n            <ng-select [items]=\"lessonList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\r\n                placeholder=\"Select lesson\" [(ngModel)]=\"selectedLesson\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"getLessonTopicList()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-between align-items-center\" *ngIf=\"showTopicHeading\">\r\n    <h5 class=\"font-20 mb-2\">Lesson topics</h5>\r\n    <div class=\"btn btn-primary\" (click)=\"openSubjectTreeModal()\">\r\n        <i class=\"fa fa-eye mr-2\"></i>\r\n        View subject tree\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3\">\r\n        <div id=\"topicsList\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9\">\r\n        <div class=\"py-2\" *ngIf=\"showContentMapping\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center mb-2 flex-wrap\">\r\n                <div class=\"filterbg p-3 mb-2 w-100\">\r\n                    <p class=\"font-20\">Content preference for {{topicName}}</p>\r\n                    <div class=\"row m-0 mb-2\">\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"ContentCE\" name=\"content\" [checked]=\"checkContentCE\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"ContentCE\">Recommended by CE</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" id=\"OwnContent\" name=\"content\" [checked]=\"checkOwnContent\"\r\n                                (change)=\"checkContentPreference($event)\">\r\n                            <label for=\"OwnContent\">Use\r\n                                our own content</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"w-100 d-flex justify-content-end\">\r\n                            <div class=\"btn btn-success\" (click)=\"saveContentPreference()\">\r\n                                <i class=\"fa fa-save mr-2\"></i>Save\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab w-100\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\r\n                                aria-controls=\"home\" aria-selected=\"false\">Recommended\r\n                                by CE </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\r\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by organizations</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\r\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\r\n                                content </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\r\n                            aria-labelledby=\"home-tab\">\r\n                            <div *ngIf=\"generalTopicContents\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Active Web URL</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let topicContent of generalTopicContents;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Order number\">\r\n                                                {{topicContent.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                {{topicContent.content.title}}\r\n                                            </td>\r\n                                            <td data-column=\"Active Web URL\">\r\n                                                <a class=\"btn btn-link text-ellipsis\"\r\n                                                    href=\"{{topicContent.content.webUrl}}\" target=\"_blank\">\r\n                                                    {{topicContent.content.webUrl}}\r\n                                                </a>\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                                    (click)=\"viewCETopicContent(topicContent.id)\">\r\n                                                    <i class=\"fa fa-eye\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                            <div class=\"col-12 filterbg py-2 px-4 rounded my-4\">\r\n                                <div class=\"filtericon font-20\">\r\n                                    <i class=\"fa fa-filter\"></i>\r\n                                </div>\r\n                                <div class=\"row col-xxl-4 mb-3\">\r\n                                    <ng-select [items]=\"organisations\" class=\"w-100\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                                        placeholder=\"Select organisation\" [(ngModel)]=\"selectedOrganisation\">\r\n                                    </ng-select>\r\n                                </div>\r\n                                <div class=\"w-100 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                        (click)=\"getOrgTopicContentByOrgId()\">\r\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"orgGeneralTopicContents\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Active Web URL</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let orgcontent of orgGeneralTopicContents;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Order number\">\r\n                                                {{orgcontent.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                {{orgcontent.content.title}}\r\n                                            </td>\r\n                                            <td data-column=\"Active Web URL\">\r\n                                                <a class=\"btn btn-link text-ellipsis\"\r\n                                                    href=\"{{orgcontent.content.webUrl}}\" target=\"_blank\">\r\n                                                    {{orgcontent.content.webUrl}}\r\n                                                </a>\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                                    (click)=\"viewOrgTopicContent(orgcontent.id)\">\r\n                                                    <i class=\"fa fa-eye\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\r\n                            <div class=\"row mb-2\">\r\n                                <div class=\"col-md-12 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-primary\" (click)=\"addOwnTopicContent()\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Add new\r\n                                        content\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ownTopicContents\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\"\r\n                                    id=\"dragTable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Order number</th>\r\n                                            <th>Title</th>\r\n                                            <th>Active Web URL</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody id=\"dragBody\">\r\n                                        <tr\r\n                                            *ngFor=\"let topicContent of ownTopicContents;trackBy: trackId;let topicIndex = index\">\r\n                                            <td data-column=\"Select\" title=\"{{topicContent.id}}\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" title=\"{{topicContent.id}}\"\r\n                                                        id=\"{{topicContent.id}}+1\" class=\"checkAll\"\r\n                                                        (change)=\"checkSelectedOwnContents($event)\">\r\n                                                    <label for=\"{{topicContent.id}}+1\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Order number\" class=\"index\">\r\n                                                {{topicContent.orderNumber}}\r\n                                            </td>\r\n                                            <td data-column=\"Title\">\r\n                                                {{topicContent.content.title}}\r\n                                            </td>\r\n                                            <td data-column=\"Active Web URL\">\r\n                                                <a class=\"btn btn-link text-ellipsis\"\r\n                                                    href=\"{{topicContent.content.webUrl}}\" target=\"_blank\">\r\n                                                    {{topicContent.content.webUrl}}\r\n                                                </a>\r\n                                            </td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div>\r\n                                                    <a class=\"btn btn-outline-info mr-1 mb-1 btn-icon-size\"\r\n                                                        (click)=\"viewOwnTopicContent(topicContent.id)\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\r\n                                                        (click)=\"editOwnTopicContent(topicContent.id)\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"mt-3 d-flex w-100 justify-content-end\" *ngIf=\"ownTopicContents.length > 0\">\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"resetSelectedOwnTopicContent()\">\r\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"deleteOwnTopicContents()\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                    </button>\r\n                                    <button class=\"btn btn-success\" [disabled]=\"updateAction\"\r\n                                        (click)=\"updateOwnTopicContentsWithOrderNumber()\">\r\n                                        <i class=\"fa fa-save mr-2\"></i>Update order\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"topicContentModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" [formGroup]=\"topicContentForm\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    {{modalTitleName}} content\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeTopicContentModalWithOutSaving()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"form-group mb-2\">\r\n                        <label class=\"col-form-label\">Title\r\n                        </label>\r\n                        <input type=\"text\" placeholder=\"Enter content name (min length: 3 and max length: 75)\"\r\n                            class=\"form-control\" formControlName=\"contentTitle\" minlength=\"3\" maxlength=\"75\"\r\n                            inputRestriction=\"alphabetsNumbersWithMinus\" />\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and One special character (-)\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group mb-2\">\r\n                        <label class=\"col-form-label\">Description <span class=\"text-muted\">(Optional)</span>\r\n                        </label>\r\n                        <textarea class=\"form-control description-form\"\r\n                            placeholder=\"Enter description (min length: 3 and max length: 250)\"\r\n                            formControlName=\"contentDescription\"></textarea>\r\n                        <div class=\"text-muted font-15 my-2\">\r\n                            Allowed characters - Alphabets, Numbers and Special characters\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group mb-2\">\r\n                    <label class=\"col-form-label\">Content type\r\n                    </label>\r\n                    <ng-select [items]=\"contentType\" [disabled]=\"disableDropdown\" [ngModelOptions]=\"{standalone: true}\"\r\n                        bindLabel=\"name\" placeholder=\"Select content type\" [(ngModel)]=\"selectedContentType\"\r\n                        [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"form-group mb-2\" *ngIf=\"selectedContentType\">\r\n                    <label class=\"col-form-label\">Content source\r\n                    </label>\r\n                    <ng-select [items]=\"contentSource\" [disabled]=\"disableDropdown\"\r\n                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\" placeholder=\"Select content source\"\r\n                        [(ngModel)]=\"selectedContentSource\" [searchable]=\"false\">\r\n                    </ng-select>\r\n                </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource\"> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                        <div class=\"form-group mb-2\" *ngIf=\"selectedContentSource.name === 'File upload'\">\r\n                            <label class=\"col-form-label\">File\r\n                            </label>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                <input type=\"file\" (change)=\"onDocumentFileChanges($event)\" id=\"documentFile\" />\r\n                                <label class=\"custom-file-label\" for=\"documentFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\"custom-file\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                <input type=\"file\" alife-file-to-base64 (onFileChanged)=\"onVideoFileChanges($event)\"\r\n                                    id=\"videoFile\" />\r\n                                <label class=\"custom-file-label\" for=\"videoFile\">\r\n                                    <i>\r\n                                        {{fileName}}\r\n                                    </i></label>\r\n                            </div>\r\n                            <div class=\" d-flex w-100\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    Only PDF will allow Max file size - 100 MB\r\n                                </div>\r\n                                <div class=\"text-muted font-15 my-2\" *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    Max file size - 200 MB\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"d-flex w-100 my-2\">\r\n                                <div *ngIf=\"selectedContentType.tag === 'VIDEO'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadVideoFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"selectedContentType.tag === 'DOCUMENT'\">\r\n                                    <div *ngIf=\"modalTitleName !== 'View'\">\r\n                                        <button class=\"btn btn-warning mr-2\" (click)=\"uploadDocumentFile()\"\r\n                                            *ngIf=\"!uploadedFileName && !uploadedFilePath\">\r\n                                            <i class=\"fa fa-upload mr-2\"></i>Upload file\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"showFileAction\" class=\"d-flex justify-content-between\">\r\n                                    <a class=\"btn btn-info mr-2\" (click)=\"downloadFile()\" *ngIf=\"uploadedFileName\">\r\n                                        <i class=\"fa fa-download mr-2\"></i>{{uploadedFileName}}\r\n                                    </a>\r\n                                    <div *ngIf=\" modalTitleName !=='View'\">\r\n                                        <a class=\" btn btn-danger\" (click)=\"deleteUploadedFile()\"\r\n                                            *ngIf=\"uploadedFileName\">\r\n                                            <i class=\"fa fa-trash mr-2\"></i>Delete file\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div *ngIf=\"selectedContentSource.name !== 'File upload'\"> -->\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl1\">\r\n                            <div class=\"text-muted font-15 my-2\" *ngIf=\"modalTitleName !== 'View'\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher1\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl1\" [checked]=\"checkUrl1\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl1\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl2\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher2\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl2\" [checked]=\"checkUrl2\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl2\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"border p-2 mb-2\">\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Web URL <span class=\"text-muted\">\r\n                                    (Optional)\r\n                                </span>\r\n                            </label>\r\n                            <input type=\"url\" class=\"form-control\"\r\n                                placeholder=\"Enter web url (minlength: 3 and maxlength: 2048)\" minlength=\"3\"\r\n                                maxlength=\"2048\" formControlName=\"webUrl3\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets, Numbers and Special characters\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2\">\r\n                            <label class=\"col-form-label\">Publisher\r\n                            </label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                placeholder=\"Enter publisher (minlength: 3 and maxlength: 50)\"\r\n                                inputRestriction=\"alphabetsWithSpace\" formControlName=\"publisher3\">\r\n                            <div class=\"text-muted font-15 my-2\">\r\n                                Allowed characters - Alphabets\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-2 radio d-flex\">\r\n                            <input type=\"radio\" name=\"activeUrl\" id=\"webUrl3\" [checked]=\"checkUrl3\"\r\n                                (click)=\"onActiveWebUrlSelection($event)\" [disabled]=\"disableUrl\">\r\n                            <label for=\"webUrl3\">is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <!-- </div> -->\r\n                    <!-- </div> -->\r\n                </div>\r\n                <div *ngIf=\"modalTitleName === 'View'\">\r\n                    <div class=\"d-flex justify-content-between w-100\">\r\n                        <p><b>Title </b></p>\r\n                        <p>{{contentDetails.content.title}}</p>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\r\n                        <p><b>Description</b></p>\r\n                        <p>{{contentDetails.content.description}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url1\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 1</b></p>\r\n                            <p>{{contentDetails.content.url1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 1</b></p>\r\n                            <p>{{contentDetails.content.publisher1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 1</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url1\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url2\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 2</b></p>\r\n                            <p>{{contentDetails.content.url2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 2</b></p>\r\n                            <p>{{contentDetails.content.publisher2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 2</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url2\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 3</b></p>\r\n                            <p>{{contentDetails.content.url3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 3</b></p>\r\n                            <p>{{contentDetails.content.publisher3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 3</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url3\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"modalTitleName === 'ViewOrg'\">\r\n                    <div class=\"d-flex justify-content-between w-100\">\r\n                        <p><b>Title </b></p>\r\n                        <p>{{contentDetails.content.title}}</p>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between w-100\" *ngIf=\"contentDetails.content.description\">\r\n                        <p><b>Description</b></p>\r\n                        <p>{{contentDetails.content.description}}</p>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url1\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 1</b></p>\r\n                            <p>{{contentDetails.content.url1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 1</b></p>\r\n                            <p>{{contentDetails.content.publisher1}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 1</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url1\" name=\"checkActiveURL\" [checked]=\"checkUrl1\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url1\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url2\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 2</b></p>\r\n                            <p>{{contentDetails.content.url2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 2</b></p>\r\n                            <p>{{contentDetails.content.publisher2}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 2</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url2\" name=\"checkActiveURL\" [checked]=\"checkUrl2\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url2\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"contentDetails.content.url3\">\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Web URL 3</b></p>\r\n                            <p>{{contentDetails.content.url3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Publisher 3</b></p>\r\n                            <p>{{contentDetails.content.publisher3}}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between w-100\">\r\n                            <p><b>Active 3</b></p>\r\n                            <div>\r\n                                <div class=\"radio\">\r\n                                    <input type=\"radio\" id=\"url3\" name=\"checkActiveURL\" [checked]=\"checkUrl3\"\r\n                                        [disabled]=\"true\">\r\n                                    <label for=\"url3\"></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n                    <div class=\"btn btn-danger\" (click)=\"cancelTopicContent()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Reset\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Add'\">\r\n                    <button class=\"btn btn-success\" (click)=\"saveTopicContent()\" [disabled]=\"validateForm\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'Edit'\">\r\n                    <button class=\"btn btn-success\" (click)=\"updateTopicContents()\" [disabled]=\"validateForm\">\r\n                        <i class=\"fa fa-save mr-2\"></i>\r\n                        Save\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngIf=\"modalTitleName === 'View'|| modalTitleName === 'ViewOrg' \">\r\n                    <button class=\"btn btn-danger\" (click)=\"closeTopicContentModal()\">\r\n                        <i class=\"fa fa-times mr-2\"></i>\r\n                        Close\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewSubjectTreeModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    View subject tree\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n                    <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                        <i class=\"fa fa-clone mr-2\"></i>\r\n                        <span *ngIf=\"enableExpandNode === false\">\r\n                            Expand all\r\n                        </span>\r\n                        <span *ngIf=\"enableExpandNode === true\">\r\n                            Collapse all\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div id=\"viewTree\"></div>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-end align-items-start\">\r\n                <button class=\"btn btn-danger\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Close\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicTopicQuestionTopicQuestionCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 1 - Select question type</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12\">\r\n                <pick-question-type></pick-question-type>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" [disabled]=\"validateQuestionType\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\r\n                <p class=\"font-20 text-warning\">Step 2 - Build question</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mx-3\">\r\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question category</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\r\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\r\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\r\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\r\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\r\n                                (click)=\"onSelectComplexityLevel(level.value)\">\r\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" [disabled]=\"validateQuestion\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 3 - Add solution content (Optional)</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mb-2\">\r\n                <label for=\"\">Solution content</label>\r\n                <ckeditor class=\"w-100\" [config]=\"editorSolutionConfig\" [(ngModel)]=\"solutionContent\"\r\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                    [required]=\"true\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"loadPreviewQuestion()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 4 - Summary</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"w-100\">\r\n            <div\r\n                *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3 p-3\">\r\n                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                        *ngFor=\"let choice of questionResource.Choices;let i = index\">\r\n                        <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\r\n                            <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" disabled readonly>\r\n                            <label for=\"{{choice.ChoiceId}}\">\r\n                                <p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                            *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\r\n                    <tr class=\"bg-lightgray\">\r\n                        <td></td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <p [MathJax]=\"option.OptionText | sanitizeHtml\"></p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\r\n                        <td><p [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></p></td>\r\n                        <td *ngFor=\"let option of questionResource.Options\">\r\n                            <div class=\"radio\">\r\n                                <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\r\n                                    name=\"{{ choice.ChoiceId }}\">\r\n                                <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                            *ngFor=\"let data of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"data.choiceName | sanitizeHtml\"></span> -\r\n                            <span [MathJax]=\"data.optionName | sanitizeHtml\"></span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                            <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngFor=\"let answer of answers\">\r\n                    <div class=\"choice-container\">\r\n                        <div class=\"item\">\r\n                            <div class=\"choice--group\">\r\n                                <div class=\"choice--label\">\r\n                                    <p [MathJax]=\"answer.choiceName | sanitizeHtml\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"line-circle\">\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"drag--container\">\r\n                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"mb-3 font-18\">\r\n                    <div class=\"border-success p-3 alert-success\">\r\n                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                            *ngFor=\"let data of answers;let checkIndex =index\">\r\n                            <span [MathJax]=\"data.choiceName | sanitizeHtml\"></span> -\r\n                            <span [MathJax]=\"data.optionName | sanitizeHtml\"></span>\r\n                            {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"showSaveQuestion\">\r\n            <button class=\"btn btn-success float-right ml-2\" (click)=\"saveQuestion()\" [disabled]=\"showAddQuestion\">\r\n                <i class=\"fa fa-save mr-2\"></i>\r\n                Save question\r\n            </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"showAddQuestion\">\r\n            <button class=\"btn btn-info float-right\" (click)=\"addQuestion()\">\r\n                <i class=\"fa fa-plus-circle mr-2\"></i>\r\n                Add one more question\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"previous btn btn-danger float-right mr-2\" (click)=\"resetPreviewQuestions()\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicTopicQuestionTopicQuestionDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n    <a class=\"btn btn-success\" (click)=\"editQuestionRoute()\">\r\n        <i class=\"fa fa-edit mr-2\"></i> Edit question\r\n    </a>\r\n</div>\r\n<div *ngIf='questionType === \"MCQ_SINGLE\" || questionType === \"MCQ_MULTIPLE\" || questionType === \"MCQ_TRUE_FALSE\"'>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\r\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-3 p-3\">\r\n        <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n            *ngFor=\"let choice of questionResource.Choices;let i = index\">\r\n            <div [ngClass]=\"{'radio': type === 'radio','checkbox': type === 'checkbox'}\">\r\n                <input type=\"{{type}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"questionResource.Answers\"\r\n                    [choiceid]=\"choice.ChoiceId\" disabled readonly>\r\n                <label for=\"{{choice.ChoiceId}}\"></label>\r\n            </div>\r\n            <label for=\"{{choice.ChoiceId}}\">\r\n                <span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf='questionType === \"MCQ_CHOICE_MATRIX\"'>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\r\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <table class=\"border-collapse my-2 font-18 p-3\" style=\"pointer-events: none\">\r\n        <tr class=\"bg-lightgray\">\r\n            <td></td>\r\n            <td *ngFor=\"let option of questionResource.Options\">\r\n                <span [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n            </td>\r\n        </tr>\r\n        <tr style=\"background: none !important;\" *ngFor=\"let choice of questionResource.Choices\">\r\n            <td><span [MathJax]=\"choice.ChoiceText\"></span></td>\r\n            <td *ngFor=\"let option of questionResource.Options\">\r\n                <div class=\"radio\">\r\n                    <input type=\"radio\" disabled readonly [id]=\"option.OptionId+choice.ChoiceId\"\r\n                        [choicematrix]=\"questionResource.Answers\" [optionid]=\"option.OptionId\"\r\n                        [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\">\r\n                    <label for=\"{{option.OptionId+choice.ChoiceId}}\"></label>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\r\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf='questionType === \"MCQ_MATCH_LIST\"'>\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-xxl-12\">\r\n            <div class=\"border-info p-3 alert-info font-18\" style=\"line-height: 24px;\">\r\n                <span class=\"text-info\">Question&nbsp;:&nbsp;</span>\r\n                <span class=\"text-dark\" [MathJax]=\"questionResource.Question | sanitizeHtml\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngFor=\"let answer of answers\">\r\n        <div class=\"choice-container\">\r\n            <div class=\"item\">\r\n                <div class=\"choice--group\">\r\n                    <div class=\"choice--label\">\r\n                        <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"line-circle\">\r\n            </div>\r\n            <div class=\"item\">\r\n                <div class=\"drag--container\">\r\n                    <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                        [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <div class=\"mb-3 font-18\">\r\n        <div class=\"border-success p-3 alert-success\">\r\n            <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\r\n                <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicTopicQuestionTopicQuestionManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-lg-3 mb-3\">\r\n            <ng-select [items]=\"curriculumList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"acronym\"\r\n                placeholder=\"Select curriculum\" [(ngModel)]=\"selectedCurriculum\" (change)=\"onCurriculumChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedCurriculum\">\r\n            <ng-select [items]=\"gradeList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGrade\" (change)=\"onGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedGrade\">\r\n            <ng-select [items]=\"subjectList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"subject\"\r\n                placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\" (change)=\"onSubjectChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-lg-3 mb-3\" *ngIf=\"selectedSubject\">\r\n            <ng-select [items]=\"lessonList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\r\n                placeholder=\"Select lesson\" [(ngModel)]=\"selectedLesson\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-lg-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"getLessonTopicList()\">\r\n                <i class=\"fa fa-filter mr-1\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w-100 d-flex justify-content-between align-items-center\" *ngIf=\"showTopicHeading\">\r\n    <h5 class=\"font-20 mb-2\">Lesson topics</h5>\r\n    <div class=\"btn btn-primary\" (click)=\"openSubjectTreeModal()\">\r\n        <i class=\"fa fa-eye mr-2\"></i>\r\n        View subject tree\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-3\">\r\n        <div id=\"topicsList\"></div>\r\n    </div>\r\n    <div class=\"col-xxl-9 mb-3\">\r\n        <div class=\"py-2\" *ngIf=\"showQuestionMapping\">\r\n            <div class=\"d-flex w-100 justify-content-between align-items-center mb-2 flex-wrap\">\r\n                <div class=\"filterbg p-3 mb-2 w-100\">\r\n                    <p class=\"font-20\">Content preference for {{topicName}}</p>\r\n                    <div class=\"row m-0 mb-2\">\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" class=\"form-check-input\" id=\"QuestionCE\" name=\"question\"\r\n                                [checked]=\"checkQuestionCE\" (change)=\"checkQuestionPreference($event)\">\r\n                            <label for=\"QuestionCE\">Recommended by CE</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 radio px-0\">\r\n                            <input type=\"radio\" class=\"form-check-input\" id=\"OwnQuestion\" name=\"question\"\r\n                                [checked]=\"checkOwnQuestion\" (change)=\"checkQuestionPreference($event)\">\r\n                            <label for=\"OwnQuestion\">Use\r\n                                our own question</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mx-0\">\r\n                        <div class=\"w-100 d-flex justify-content-end\" (click)=\"saveQuestionPreference()\">\r\n                            <div class=\"btn btn-success\">\r\n                                <i class=\"fa fa-save mr-2\"></i>Save\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab w-100\">\r\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\r\n                                aria-controls=\"home\" aria-selected=\"false\">Recommended\r\n                                by CE </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\r\n                                aria-controls=\"profile\" aria-selected=\"true\">Recommended by\r\n                                organizations</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link show\" id=\"portfolio-tab\" data-toggle=\"tab\" href=\"#portfolio\" role=\"tab\"\r\n                                aria-controls=\"portfolio\" aria-selected=\"false\"> Own\r\n                                question </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane fade py-3 active show\" id=\"home\" role=\"tabpanel\"\r\n                            aria-labelledby=\"home-tab\">\r\n                            <div class=\"row\" *ngIf=\"generalTopicQuestions.length > 0\">\r\n                                <div class=\"col-xxl-12 flex-wrap d-flex justify-content-lg-end\">\r\n                                    <div class=\"btn btn-info mb-2 mr-2\"\r\n                                        (click)=\"openGeneralTopicPreviewQuestionModal()\">\r\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                                    </div>\r\n                                    <div class=\"btn btn-success mb-2\" (click)=\"openGeneralTopicSimulateQuestionModal()\">\r\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"generalTopicQuestions\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Question category</th>\r\n                                            <th>Question type</th>\r\n                                            <th>Complexity level</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let question of generalTopicQuestions ;trackBy: trackId\">\r\n                                            <td data-column=\"Question category\">{{question.questionCategory}}</td>\r\n                                            <td data-column=\"Question type\">{{question.questionType}}</td>\r\n                                            <td data-column=\"Complexity level\">{{question.complexityLevel}}</td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <a target=\"_blank\" class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\"\r\n                                                    [routerLink]=\"['/lesson-topic', question.id, 'topic-question-view' ]\">\r\n                                                    <i class=\"fa fa-eye\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                            <div class=\"w-100 filterbg py-2 px-4 rounded my-4\">\r\n                                <div class=\"filtericon font-20\">\r\n                                    <i class=\"fa fa-filter\"></i>\r\n                                </div>\r\n                                <div class=\"row col-xxl-4 mb-3\">\r\n                                    <ng-select [items]=\"organisations\" class=\"w-100\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                                        placeholder=\"Select organisation\" [(ngModel)]=\"selectedOrganisation\">\r\n                                    </ng-select>\r\n                                </div>\r\n                                <div class=\"w-100 d-flex justify-content-end\">\r\n                                    <div class=\"btn btn-success float-right waves-effect waves-light\"\r\n                                        (click)=\"getOrgTopicQuestiontByOrgId()\">\r\n                                        <i class=\"fa fa-filter mr-2\"></i>Apply\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"orgGeneralTopicQuestions.length > 0\">\r\n                                <div class=\"col-xxl-12 d-flex flex-wrap justify-content-lg-end\">\r\n                                    <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openOrgTopicPreviewQuestionModal()\">\r\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                                    </div>\r\n                                    <div class=\"btn btn-success mb-2\" (click)=\"openOrgTopicSimulateQuestionModal()\">\r\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"orgGeneralTopicQuestions\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Question category</th>\r\n                                            <th>Question type</th>\r\n                                            <th>Complexity level</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let orgquestion of orgGeneralTopicQuestions ;trackBy: trackId\">\r\n                                            <td data-column=\"Question category\">{{orgquestion.questionCategory}}</td>\r\n                                            <td data-column=\"Question type\">{{orgquestion.questionType}}</td>\r\n                                            <td data-column=\"Complexity level\">{{orgquestion.complexityLevel}}</td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <a target=\"_blank\" class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\"\r\n                                                    [routerLink]=\"['/lesson-topic', orgquestion.id, 'topic-question-view' ]\">\r\n                                                    <i class=\"fa fa-eye\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade py-3\" id=\"portfolio\" role=\"tabpanel\" aria-labelledby=\"portfolio-tab\">\r\n                            <div class=\"row\">\r\n                                <div\r\n                                    class=\"col-xxl-12 flex-wrap d-flex justify-content-lg-end justify-content-md-between\">\r\n                                    <div class=\"btn btn-info mr-2 mb-2\" (click)=\"openOwnTopicPreviewQuestionModal()\"\r\n                                        *ngIf=\"ownTopicQuestions.length > 0\">\r\n                                        <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                                    </div>\r\n                                    <div class=\"btn btn-success mr-2 mb-2\" (click)=\"openOwnTopicSimulateQuestionModal()\"\r\n                                        *ngIf=\"ownTopicQuestions.length > 0\">\r\n                                        <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                                    </div>\r\n                                    <a target=\"_blank\" class=\"btn btn-primary mb-2 mr-2\"\r\n                                        [routerLink]=\"['/lesson-topic',generalTopicId,'topic-question-create']\">\r\n                                        <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\r\n                                    </a>\r\n                                    <div class=\"btn btn-warning mb-2\" (click)=\"loadUpdatedTopicQuestion()\">\r\n                                        <i class=\"fa fa-refresh mr-2\"></i> Refresh\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ownTopicQuestions\">\r\n                                <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Select</th>\r\n                                            <th>Question category</th>\r\n                                            <th>Question type</th>\r\n                                            <th>Complexity level</th>\r\n                                            <th>Actions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let ownquestion of ownTopicQuestions ;trackBy: trackId\">\r\n                                            <td data-column=\"Select\">\r\n                                                <div class=\"checkbox\">\r\n                                                    <input type=\"checkbox\" id=\"{{ownquestion.id}}\" class=\"checkAll\"\r\n                                                        (change)=\"checkSelectedOwnQuestions($event)\">\r\n                                                    <label for=\"{{ownquestion.id}}\"></label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td data-column=\"Question category\">{{ownquestion.questionCategory}}</td>\r\n                                            <td data-column=\"Question type\">{{ownquestion.questionType}}</td>\r\n                                            <td data-column=\"Complexity level\">{{ownquestion.complexityLevel}}</td>\r\n                                            <td data-column=\"Actions\">\r\n                                                <div>\r\n                                                    <a target=\"_blank\"\r\n                                                        class=\"btn btn-outline-info  mr-1 mb-1 btn-icon-size\"\r\n                                                        [routerLink]=\"['/lesson-topic', ownquestion.questionId, 'topic-question-view' ]\">\r\n                                                        <i class=\"fa fa-eye\"></i>\r\n                                                    </a>\r\n                                                    <a target=\"_blank\"\r\n                                                        class=\"btn btn-outline-success  mr-1 mb-1 btn-icon-size\"\r\n                                                        [routerLink]=\"['/lesson-topic', ownquestion.questionId, 'topic-question-edit' ]\">\r\n                                                        <i class=\"fa fa-edit\"></i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"w-100 d-flex justify-content-end mt-4\" *ngIf=\"ownTopicQuestions.length > 0\">\r\n                                    <button class=\"btn btn-danger mr-2\" [disabled]=\"tableAction\"\r\n                                        (click)=\"resetSelectedOwnTopicQuestions()\">\r\n                                        <i class=\"fa fa-times mr-2\"></i>Reset\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"deleteTopicQuestions()\"\r\n                                        [disabled]=\"tableAction\">\r\n                                        <i class=\"fa fa-trash mr-2\"></i>Delete\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"viewSubjectTreeModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    View subject tree\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n                    <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                        <i class=\"fa fa-clone mr-2\"></i>\r\n                        <span *ngIf=\"enableExpandNode === false\">\r\n                            Expand all\r\n                        </span>\r\n                        <span *ngIf=\"enableExpandNode === true\">\r\n                            Collapse all\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div id=\"viewSubjectTree\"></div>\r\n            </div>\r\n            <div class=\"modal-footer d-flex justify-content-end align-items-start\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSubjectTreeModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i>\r\n                    Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"simulateTopicQuestionModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"simulateTopicQuestionModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Simulate question - {{topicName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\r\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div cdkDropListGroup>\r\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n                                        <div class=\"mcq-left mr-2\">\r\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\r\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n                                        <div class=\"mcq-right ml-2\">\r\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\r\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\r\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\"\r\n                                                [MathJax]=\"option.OptionText  | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\"\r\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\r\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\r\n                                </div>\r\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\r\n                                    (click)=\"nextQuestion()\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"previewTopicQuestionModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"previewTopicQuestionModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Preview question - {{topicName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                [answers]=\"questiondata.answers\" disabled readonly>\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\r\n                                                readonly [answers]=\"questiondata.answers\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer || sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\r\n                                    <div class=\"choice-container\">\r\n                                        <div class=\"item\">\r\n                                            <div class=\"choice--group\">\r\n                                                <div class=\"choice--label\">\r\n                                                    <span [MathJax]=\"answer.choiceName  | sanitizeHtml\"></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"line-circle\">\r\n                                        </div>\r\n                                        <div class=\"item\">\r\n                                            <div class=\"drag--container\">\r\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                                    [MathJax]=\"answer.optionName  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"text-dark d-flex flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName || sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName || sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\"\r\n                                                [MathJax]=\"option.OptionText  | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"text-dark d-flex flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName || sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName || sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyllabusLessonTopicTopicQuestionTopicQuestionUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 my-3 justify-content-between d-flex\">\r\n    <div class=\"btn btn-danger\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stepperTab\">\r\n    <ul id=\"progressbar\">\r\n        <li class=\"active\">\r\n            <span class=\"bar\">\r\n            </span>\r\n        </li>\r\n        <li>\r\n        </li>\r\n    </ul>\r\n\r\n    <fieldset>\r\n        <div class=\"row pb-4\">\r\n            <div class=\"col-xxl-12 p-3 alert-warning\">\r\n                <p class=\"font-20 text-warning\">Step 1 - Edit question</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mx-3\">\r\n                <div class=\"form-group mb-2 row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question category</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let category of questionCategory\">\r\n                            <input type=\"radio\" id=\"{{category.name}}\" name=\"assessmentCategory\"\r\n                                (click)=\"onSelectQuestionCategory(category.tag)\" [checked]=\"category.checked\">\r\n                            <label for=\"{{category.name}}\">{{category.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  row d-flex justify-content-between flex-wrap mb-2\">\r\n                    <label class=\"font-16 mb-3\">Select question complexity level</label>\r\n                    <div class=\"d-flex w-100 row\">\r\n                        <div class=\"radio col-xxl-3\" *ngFor=\"let level of questionComplexityLevel\">\r\n                            <input type=\"radio\" id=\"{{level.name}}\" name=\"complexityLevel\" [checked]=\"level.checked\"\r\n                                (click)=\"onSelectComplexityLevel(level.value)\">\r\n                            <label for=\"{{level.name}}\">{{level.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div\r\n            *ngIf=\"viewModel.QuestionType === 'MCQ_SINGLE' || viewModel.QuestionType === 'MCQ_MULTIPLE' || viewModel.QuestionType === 'MCQ_TRUE_FALSE'\">\r\n            <div class=\"w-100 d-block my-2\" *ngIf=\"viewModel\">\r\n                <div class=\"row my-2\">\r\n                    <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n                        <h5 class=\"font-18 font-bold\">Compose question</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xxl-12\">\r\n                        <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\"\r\n                            #questionInput=\"ngModel\">\r\n                        </ckeditor>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <h5 class=\"font-20 font-bold\">Choices</h5>\r\n            </div>\r\n            <div class=\"w-100 mb-2 my-2 d-flex\" *ngFor=\"let choice of viewModel.Choices\">\r\n                <div class=\"mcq-choice d-flex align-items-center\"\r\n                    [ngClass]=\"{'radio': choiceType === 'radio','checkbox': choiceType === 'checkbox'}\">\r\n                    <input type=\"{{choiceType}}\" [id]=\"choice.ChoiceId\" name=\"answer\" [answers]=\"viewModel.Answers\"\r\n                        [choiceid]=\"choice.ChoiceId\" (click)=\"markAsMCQAnswer(choice.ChoiceId)\">\r\n                    <label for=\"{{choice.ChoiceId}}\"></label>\r\n                </div>\r\n                <div class=\"mcq-question\">\r\n                    <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\"\r\n                        #questionInput=\"ngModel\">\r\n                    </ckeditor>\r\n                </div>\r\n                <div class=\"mcq-action font-22 d-flex align-items-center text-danger d-flex justify-content-end\">\r\n                    <i class=\"fa fa-trash\" (click)=\"deleteChoice(choice.ChoiceId)\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-100 d-flex justify-content-end align-self-start my-2\">\r\n                <div class=\"btn btn-info\" *ngIf=\"viewModel.QuestionType !== 'MCQ_TRUE_FALSE'\" (click)=\"addChoice()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add Choice</div>\r\n            </div>\r\n            <div class=\"my-3 font-18\">\r\n                <div class=\"border-success p-3 alert-success\">\r\n                    <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                        *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                        <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                        {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewModel.QuestionType ==='MCQ_CHOICE_MATRIX'\">\r\n            <div class=\"row my-2\">\r\n                <div class=\"col-xxl-12 d-flex justify-content-between\">\r\n                    <h5 class=\"font-18 font-bold\">Compose question</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-xxl-12\">\r\n                    <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"viewModel.Question\">\r\n                    </ckeditor>\r\n                </div>\r\n            </div>\r\n            <div class=\"w-100 d-block my-2\">\r\n                <p class=\"font-20 font-bold\">Stems</p>\r\n                <div class=\"w-100 d-flex mb-2\" *ngFor=\"let choice of viewModel.Choices\">\r\n                    <div class=\"mcq-stem\">\r\n                        <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"choice.ChoiceText\">\r\n                        </ckeditor>\r\n                    </div>\r\n                    <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger\">\r\n                        <i class=\"fa fa-trash\" (click)=\"deleteStem(choice.ChoiceId)\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n                <button class=\"btn btn-info\" (click)=\"addChoice()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add stem</button>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-block my-2\">\r\n                <p class=\"font-20 font-bold\">Options</p>\r\n                <div class=\"w-100 d-flex mb-2\" *ngFor=\"let option of viewModel.Options\">\r\n                    <div class=\"mcq-stem\">\r\n                        <ckeditor class=\"w-100\" [config]=\"editorChoiceConfig\" [(ngModel)]=\"option.OptionText\">\r\n                        </ckeditor>\r\n                    </div>\r\n                    <div class=\"mcq-action d-flex align-items-center justify-content-end font-22 text-danger\">\r\n                        <i class=\"fa fa-trash\" (click)=\"deleteOption(option.OptionId)\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-flex justify-content-end my-2 align-self-start\">\r\n                <button class=\"btn btn-info\" (click)=\"addOption()\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Add Option</button>\r\n            </div>\r\n\r\n            <div class=\"w-100 d-block my-2\">\r\n                <p class=\"font-20 font-bold\">Setting up answers</p>\r\n            </div>\r\n\r\n            <table class=\"table-matrix my-2\">\r\n                <tr class=\"bg-lightgray\">\r\n                    <td></td>\r\n                    <td *ngFor=\"let option of viewModel.Options\">\r\n                        <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                    </td>\r\n                </tr>\r\n                <tr style=\"background: none !important;\" *ngFor=\"let choice of viewModel.Choices\">\r\n                    <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                    <td *ngFor=\"let option of viewModel.Options\">\r\n                        <div class=\"radio\">\r\n                            <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                [choicematrix]=\"viewModel.Answers\" [optionid]=\"option.OptionId\"\r\n                                [choiceid]=\"choice.ChoiceId\" name=\"{{ choice.ChoiceId }}\"\r\n                                (click)=\"markAsMatrixAnswer(choice, option)\">\r\n                            <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <div class=\"mb-3 font-18\">\r\n                <div class=\"border-success p-3 alert-success\">\r\n                    <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                        *ngFor=\"let answer of answers;let checkIndex =index\">\r\n                        <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> -\r\n                        <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                        {{checkIndex  === answers.length - 1? ' ' : ','}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewModel.QuestionType === 'MCQ_MATCH_LIST'\">\r\n            <match-list [questionResource]=\"viewModel\"></match-list>\r\n        </div>\r\n\r\n        <button class=\"next btn btn-success float-right\" (click)=\"loadQuestionResource()\">\r\n            Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n        </button>\r\n\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-xxl-12 mb-2 alert-warning p-3\">\r\n                <p class=\"font-20 text-warning\">Step 2 - Edit solution content</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xxl-12 mb-2\">\r\n                <label for=\"\">Solution content</label>\r\n                <ckeditor class=\"w-100\" [config]=\"editorQuestionConfig\" [(ngModel)]=\"solutionContent\"\r\n                    #questionInput=\"ngModel\" placeholder=\"Enter question (min length: 3 and max length: 4000)\"\r\n                    [required]=\"true\">\r\n                </ckeditor>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <button class=\"btn btn-success ml-2 float-right next\" (click)=\"updateQuestion()\">\r\n            <i class=\"fa fa-save mr-2\"></i>\r\n            Save question\r\n        </button>\r\n\r\n        <button class=\"btn btn-danger ml-2 float-right next\" (click)=\"resetQuestion()\">\r\n            <i class=\"fa fa-times mr-2\"></i>Reset\r\n        </button>\r\n\r\n        <div class=\"previous btn btn-danger float-right\">\r\n            <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n        </div>\r\n    </fieldset>\r\n</div>";
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
  "./src/app/organisation/organisation.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/organisation/organisation.service.ts ***!
    \******************************************************/

  /*! exports provided: OrganisationService */

  /***/
  function srcAppOrganisationOrganisationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganisationService", function () {
      return OrganisationService;
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

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var OrganisationService =
    /*#__PURE__*/
    function () {
      function OrganisationService(http) {
        _classCallCheck(this, OrganisationService);

        this.http = http;
        this.organisationResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/common/api/organisations';
        this.curriculumResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curricula/search';
      }

      _createClass(OrganisationService, [{
        key: "createOrganisation",
        value: function createOrganisation(organisation) {
          return this.http.post(this.organisationResourceUrl, organisation, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "updateOrganisation",
        value: function updateOrganisation(organisation) {
          return this.http.put(this.organisationResourceUrl, organisation, {
            observe: 'response'
          });
        }
      }, {
        key: "getOrganisationByOrganisationId",
        value: function getOrganisationByOrganisationId(id) {
          return this.http.get("".concat(this.organisationResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getOrganisations",
        value: function getOrganisations(req) {
          var options = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
          return this.http.get(this.organisationResourceUrl, {
            params: options,
            observe: 'response'
          });
        }
      }, {
        key: "deleteOrganisation",
        value: function deleteOrganisation(id) {
          return this.http["delete"]("".concat(this.organisationResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }]);

      return OrganisationService;
    }();

    OrganisationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OrganisationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], OrganisationService);
    /***/
  },

  /***/
  "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionBuilderClozeDragNDropDragNDropComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".choice--group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 20px; }\n\n.choice--answer {\n  width: 5%; }\n\n.choice--editor {\n  width: 95%; }\n\n.choice--delete {\n  width: 5%;\n  text-align: right;\n  font-size: 16px; }\n\n.choice--delete i {\n    cursor: pointer; }\n\n.actions {\n  text-align: center; }\n\n.choice-container, .option-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px; }\n\n.choice-container .item, .option-container .item {\n    width: 45%; }\n\n.choice-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.option--container.zone {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.zone {\n  border: 1px solid #eeeeee;\n  padding: 10px 5px;\n  margin-bottom: 10px;\n  min-height: 50px;\n  border: 1px dashed #e8e6e6; }\n\n.zone .option--container {\n    justify-content: space-around;\n    min-width: 50px; }\n\n.choice--label {\n  min-height: 50px;\n  border: 1px solid #eee;\n  padding: 10px 5px;\n  width: 95%; }\n\n.option--container .option--item {\n  min-height: 50px;\n  border: 1px solid #eee;\n  padding: 10px 5px;\n  background-color: #eaeaea; }\n\n.choice--group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.choice--editor {\n  width: 95%; }\n\n.choice--delete {\n  width: 5%;\n  text-align: right;\n  font-size: 16px; }\n\n.choice--delete i {\n    cursor: pointer; }\n\n.dropzone {\n  outline: solid 1px;\n  height: 50px;\n  height: 50px; }\n\n.actions {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYnVpbGRlci9jbG96ZS9kcmFnLW4tZHJvcC9DOlxcQ29kZWJhc2VcXGNlYWRtaW4vc3JjXFxhcHBcXHF1ZXN0aW9uLWJ1aWxkZXJcXGNsb3plXFxkcmFnLW4tZHJvcFxcZHJhZy1uLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksU0FBUyxFQUFBOztBQUdiO0VBQ1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUhuQjtJQUtRLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUkxQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBOztBQUw5QjtJQU9RLDZCQUE2QjtJQUM3QixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBRVEsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBSWY7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFIbkI7SUFLUSxlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksa0JBQWtCO0VBQUUsWUFBWTtFQUNoQyxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1idWlsZGVyL2Nsb3plL2RyYWctbi1kcm9wL2RyYWctbi1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob2ljZS0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2hvaWNlLS1hbnN3ZXIge1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4uY2hvaWNlLS1lZGl0b3Ige1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5jaG9pY2UtLWRlbGV0ZSB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNob2ljZS1jb250YWluZXIsIC5vcHRpb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaG9pY2UtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG4ub3B0aW9uLS1jb250YWluZXIuem9uZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuLnpvbmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U4ZTZlNjtcclxuICAgIC5vcHRpb24tLWNvbnRhaW5lciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hvaWNlLS1sYWJlbCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLm9wdGlvbi0tY29udGFpbmVyIHtcclxuICAgIC5vcHRpb24tLWl0ZW0ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hvaWNlLS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5jaG9pY2UtLWVkaXRvciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uY2hvaWNlLS1kZWxldGUge1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kcm9wem9uZSB7XHJcbiAgICBvdXRsaW5lOiBzb2xpZCAxcHg7IGhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ClozeDrag, Answer, Option, DragAndDropComponent */

  /***/
  function srcAppQuestionBuilderClozeDragNDropDragNDropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClozeDrag", function () {
      return ClozeDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return Answer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropComponent", function () {
      return DragAndDropComponent;
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

    var ClozeDrag = function ClozeDrag() {
      _classCallCheck(this, ClozeDrag);
    };

    var Answer = function Answer(ZoneId, OptionId) {
      _classCallCheck(this, Answer);

      this.ZoneId = ZoneId;
      this.OptionId = OptionId;
    };

    var Option = function Option(OptionId, OptionText) {
      _classCallCheck(this, Option);

      this.OptionId = OptionId;
      this.OptionText = OptionText;
    };

    var DragAndDropComponent =
    /*#__PURE__*/
    function () {
      function DragAndDropComponent(router, activatedRoute, elementRef) {
        _classCallCheck(this, DragAndDropComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.elementRef = elementRef;
        this.viewmodel = new ClozeDrag();
      }

      _createClass(DragAndDropComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.activatedRoute.snapshot.data.question) {
            this.viewmodel = this.activatedRoute.snapshot.data.question;
            this.resetDropState();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var containers = $(this.elementRef.nativeElement).find(".drag--container"); //const droppable = new Droppable(containers.get(0), {
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
      }, {
        key: "onDropped",
        value: function onDropped(args) {
          var _this = this;

          /* If the dropzone is Zone(X) then do nothing... */
          if (!$(args.data.dropzone).is(".cloze--dropzone")) return; //this.viewmodel.Answers = [];

          Promise.resolve().then(function () {
            var previewpanel = $(_this.elementRef.nativeElement).find(".preview-panel");
            previewpanel.find(".zone").map(function (index, item) {
              var zoneId = index + 1;
              var optionId = "";
              item = $(item);

              if (item.children().length > 0) {
                optionId = item.find(".option--item").data("option-id");
              }

              _this.viewmodel.Answers.push(new Answer(zoneId, optionId));
            });
          });
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(OptionId) {
          this.viewmodel.Options = this.viewmodel.Options.filter(function (item) {
            return item.OptionId !== OptionId;
          });
        }
      }, {
        key: "addOption",
        value: function addOption() {
          this.viewmodel.Options = this.viewmodel.Options || [];
          this.viewmodel.Options.push(new Option(new Date().getUTCMilliseconds(), ""));
        }
      }, {
        key: "saveQuestion",
        value: function saveQuestion() {// console.log(this.viewmodel);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigateByUrl("assessment/choose");
        }
        /**
         * This method should be invoked only once after the component is loaded
         */

      }, {
        key: "resetDropState",
        value: function resetDropState() {
          var _this2 = this;

          // this method will restore the state of the dropped item
          Promise.resolve().then(function () {
            if (_this2.viewmodel.Answers && _this2.viewmodel.Answers.length > 0) {
              var rootElement = $(_this2.elementRef.nativeElement);
              var dropPanel = rootElement.find(".preview-panel");
              var optionPool = rootElement.find(".option--container");

              for (var i = 0; i < _this2.viewmodel.Answers.length; i++) {
                var zone = dropPanel.find(".zone:nth-child(".concat(_this2.viewmodel.Answers[i].ZoneId, ")"));
                var droppable = optionPool.find("[data-option-id='".concat(_this2.viewmodel.Answers[i].OptionId, "']"));
                zone.append(droppable).addClass("draggable-dropzone--occupied");
              }
            }
          });
        }
      }]);

      return DragAndDropComponent;
    }();

    DragAndDropComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    DragAndDropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drag-n-drop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drag-n-drop.component.scss */
      "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], DragAndDropComponent);
    /***/
  },

  /***/
  "./src/app/question-builder/cloze/question-preview.directive.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/question-builder/cloze/question-preview.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: QuestionPreviewDirective */

  /***/
  function srcAppQuestionBuilderClozeQuestionPreviewDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionPreviewDirective", function () {
      return QuestionPreviewDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuestionPreviewDirective =
    /*#__PURE__*/
    function () {
      function QuestionPreviewDirective(elementRef) {
        _classCallCheck(this, QuestionPreviewDirective);

        this.elementRef = elementRef;
      }

      _createClass(QuestionPreviewDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rootElement = $(this.elementRef.nativeElement);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(change) {
          this.rootElement = $(this.elementRef.nativeElement);

          if (this.rootElement) {
            var preview = this.question ? this.question.replace(/{{response}}/g, '<span class="cloze--dropzone zone"></span>') : "";
            this.rootElement.html(preview);
          }
        }
      }]);

      return QuestionPreviewDirective;
    }();

    QuestionPreviewDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("questionPreview"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], QuestionPreviewDirective.prototype, "question", void 0);
    QuestionPreviewDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[questionPreview]"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], QuestionPreviewDirective);
    /***/
  },

  /***/
  "./src/app/question-builder/matchlist/matchlist.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/question-builder/matchlist/matchlist.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MatchList, Answer, Choice, Option, MatchlistComponent */

  /***/
  function srcAppQuestionBuilderMatchlistMatchlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchList", function () {
      return MatchList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return Answer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Choice", function () {
      return Choice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchlistComponent", function () {
      return MatchlistComponent;
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


    var _question_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");

    var MatchList = function MatchList() {
      _classCallCheck(this, MatchList);

      this.Choices = [];
      this.Options = [];
      this.Answers = [];
    };

    var Answer = function Answer(ChoiceId, OptionId) {
      _classCallCheck(this, Answer);

      this.ChoiceId = ChoiceId;
      this.OptionId = OptionId;
    };

    var Choice = function Choice(ChoiceId, ChoiceText) {
      _classCallCheck(this, Choice);

      this.ChoiceId = ChoiceId;
      this.ChoiceText = ChoiceText;
    };

    var Option = function Option(OptionId, OptionText) {
      _classCallCheck(this, Option);

      this.OptionId = OptionId;
      this.OptionText = OptionText;
    };

    var MatchlistComponent =
    /*#__PURE__*/
    function () {
      function MatchlistComponent(route, router, questionService, pluginService, changedetector) {
        var _this3 = this;

        _classCallCheck(this, MatchlistComponent);

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
        this.route.data.subscribe(function (args) {
          if (args.type === "MCQ_MATCH_LIST") {
            _this3.viewModel.QuestionType = args.type;
          }
        });
      }

      _createClass(MatchlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.route.snapshot.data.question) {
            this.viewModel = this.route.snapshot.data.question; //this.resetDropState();
          }

          this.getCurrentRouteInfo();
        }
      }, {
        key: "getCurrentRouteInfo",
        value: function getCurrentRouteInfo() {
          var splitUrl, routeName;
          splitUrl = this.router.url.split("/");
          routeName = splitUrl.pop();

          if (routeName === "topic-question-edit" || routeName === "general-topic-question-edit") {
            this.viewModel = this.questionResource;
            this.showMatchListAnswers();
            this.checkDrag = true;
          }
        }
      }, {
        key: "updatedDropList",
        value: function updatedDropList(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.viewModel.Answers = [];

            for (var i = 0; i < this.viewModel.Choices.length; i++) {
              for (var j = 0; j < this.viewModel.Options.length; j++) {
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
      }, {
        key: "showMatchListAnswers",
        value: function showMatchListAnswers() {
          var _this4 = this;

          var answers = [],
              matrixChoices = [],
              matrixOptions = [];
          this.answers = [];
          matrixChoices = [];
          matrixOptions = [];
          answers = this.viewModel.Answers;
          matrixChoices = this.viewModel.Choices;
          matrixOptions = this.viewModel.Options;

          var _loop = function _loop(k) {
            _this4.answers.push({
              choiceName: matrixChoices.find(function (item) {
                return item.ChoiceId === answers[k].ChoiceId;
              }).ChoiceText,
              optionName: matrixOptions.find(function (item) {
                return item.OptionId === answers[k].OptionId;
              }).OptionText
            });
          };

          for (var k = 0; k < answers.length; k++) {
            _loop(k);
          }

          this.checkDrag = false;
        }
      }, {
        key: "addChoice",
        value: function addChoice() {
          if (this.viewModel.Choices.length > 0) {
            this.viewModel.Choices = [].concat(_toConsumableArray(this.viewModel.Choices), [new Choice(new Date().getUTCMilliseconds(), "")]);
          } else if (this.viewModel.Choices.length === 0) {
            this.viewModel.Choices = [];
            this.viewModel.Choices = [].concat(_toConsumableArray(this.viewModel.Choices), [new Choice(new Date().getUTCMilliseconds(), "")]);
          } else {
            this.viewModel.Choices = [];
          }
        }
      }, {
        key: "addOption",
        value: function addOption() {
          if (this.viewModel.Options.length > 0) {
            this.viewModel.Options = [].concat(_toConsumableArray(this.viewModel.Options), [new Option(new Date().getUTCMilliseconds(), "")]);
          } else if (this.viewModel.Options.length === 0) {
            this.viewModel.Options = [].concat(_toConsumableArray(this.viewModel.Options), [new Option(new Date().getUTCMilliseconds(), "")]);
          } else {
            this.viewModel.Options = [];
          }
        }
      }, {
        key: "deleteChoice",
        value: function deleteChoice(choiceId) {
          if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
          } else {
            var index = this.viewModel.Choices.findIndex(function (item) {
              return item.ChoiceId === choiceId;
            });
            this.viewModel.Choices.splice(index, 1);
          }
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(optionId) {
          if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
          } else {
            var index = this.viewModel.Options.findIndex(function (item) {
              return item.OptionId === optionId;
            });
            this.viewModel.Options.splice(index, 1);
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
            this.showMatchListAnswers();
          }

          this.changedetector.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.viewModel.Question = "";
          this.viewModel.Choices = [];
          this.viewModel.Options = [];
          this.viewModel.QuestionType = "";
          this.viewModel.Answers = [];
        }
      }]);

      return MatchlistComponent;
    }();

    MatchlistComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MatchlistComponent.prototype, "questionResource", void 0);
    MatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "match-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matchlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/matchlist/matchlist.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MatchlistComponent);
    /***/
  },

  /***/
  "./src/app/question-builder/mcq-choicematrix/index.ts":
  /*!************************************************************!*\
    !*** ./src/app/question-builder/mcq-choicematrix/index.ts ***!
    \************************************************************/

  /*! exports provided: MCQChoiceMatrix, Answer, Choice, Option, MCQChoiceMatrixComponent, UpdateAnswersDirective */

  /***/
  function srcAppQuestionBuilderMcqChoicematrixIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mcq-choicematrix.component */
    "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrix", function () {
      return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["MCQChoiceMatrix"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["Answer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Choice", function () {
      return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["Choice"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["Option"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrixComponent", function () {
      return _mcq_choicematrix_component__WEBPACK_IMPORTED_MODULE_1__["MCQChoiceMatrixComponent"];
    });
    /* harmony import */


    var _update_answers_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./update-answers.directive */
    "./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateAnswersDirective", function () {
      return _update_answers_directive__WEBPACK_IMPORTED_MODULE_2__["UpdateAnswersDirective"];
    });
    /***/

  },

  /***/
  "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionBuilderMcqChoicematrixMcqChoicematrixComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".table-matrix {\n  border-collapse: collapse; }\n\n.bg-lightgray {\n  background-color: #f0f0f0 !important; }\n\n.table-matrix tbody tr td,\n.table-matrix tbody tr th {\n  border: 1px solid #dee2e6 !important;\n  text-align: center; }\n\n.roundLabel {\n  padding: 5px; }\n\n.roundLabel:hover {\n  background: #fcfdd8; }\n\n.mcq-stem {\n  width: 95%; }\n\n.mcq-action {\n  width: 5%; }\n\n.radio {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYnVpbGRlci9tY3EtY2hvaWNlbWF0cml4L0M6XFxDb2RlYmFzZVxcY2VhZG1pbi9zcmNcXGFwcFxccXVlc3Rpb24tYnVpbGRlclxcbWNxLWNob2ljZW1hdHJpeFxcbWNxLWNob2ljZW1hdHJpeC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLG9DQUF1QyxFQUFBOztBQUd6Qzs7RUFFRSxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1idWlsZGVyL21jcS1jaG9pY2VtYXRyaXgvbWNxLWNob2ljZW1hdHJpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi4vLi4vc2Nzcy9jb25zdGFudC5zY3NzXCI7XHJcblxyXG4udGFibGUtbWF0cml4IHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi5iZy1saWdodGdyYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLW1hdHJpeCB0Ym9keSB0ciB0ZCxcclxuLnRhYmxlLW1hdHJpeCB0Ym9keSB0ciB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdW5kTGFiZWwge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnJvdW5kTGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZkZDg7XHJcbn1cclxuXHJcbi5tY3Etc3RlbSB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLm1jcS1hY3Rpb24ge1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MCQChoiceMatrix, Answer, Choice, Option, MCQChoiceMatrixComponent */

  /***/
  function srcAppQuestionBuilderMcqChoicematrixMcqChoicematrixComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrix", function () {
      return MCQChoiceMatrix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return Answer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Choice", function () {
      return Choice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQChoiceMatrixComponent", function () {
      return MCQChoiceMatrixComponent;
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


    var _question_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");

    var MCQChoiceMatrix = function MCQChoiceMatrix() {
      _classCallCheck(this, MCQChoiceMatrix);

      this.Choices = [];
      this.Options = [];
      this.Answers = [];
    };

    var Answer = function Answer(ChoiceId, OptionId) {
      _classCallCheck(this, Answer);

      this.ChoiceId = ChoiceId;
      this.OptionId = OptionId;
    };

    var Choice = function Choice(choiceId, choiceText) {
      _classCallCheck(this, Choice);

      this.ChoiceId = choiceId;
      this.ChoiceText = choiceText;
    };

    var Option = function Option(optionId, optionText) {
      _classCallCheck(this, Option);

      this.OptionId = optionId;
      this.OptionText = optionText;
    };

    var MCQChoiceMatrixComponent =
    /*#__PURE__*/
    function () {
      function MCQChoiceMatrixComponent(router, route, questionService, pluginService, changedetector) {
        var _this5 = this;

        _classCallCheck(this, MCQChoiceMatrixComponent);

        this.router = router;
        this.route = route;
        this.questionService = questionService;
        this.pluginService = pluginService;
        this.changedetector = changedetector;
        this.answers = [];
        this.viewModel = new MCQChoiceMatrix();
        this.route.data.subscribe(function (args) {
          if (args.type === "MCQ_CHOICE_MATRIX") {
            _this5.viewModel.QuestionType = args.type;
          }
        });
      }

      _createClass(MCQChoiceMatrixComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
          this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
          if (this.route.snapshot.data.question) Promise.resolve().then(function () {
            _this6.viewModel = _this6.route.snapshot.data.question;
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
          }

          this.changedetector.detectChanges();
        }
      }, {
        key: "deleteChoice",
        value: function deleteChoice(choiceId) {
          if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
          } else {
            var index = this.viewModel.Choices.findIndex(function (item) {
              return item.ChoiceId === choiceId;
            });
            this.viewModel.Choices.splice(index, 1);
          }
        }
      }, {
        key: "addChoice",
        value: function addChoice() {
          this.viewModel.Choices = [].concat(_toConsumableArray(this.viewModel.Choices), [new Choice(new Date().getUTCMilliseconds(), "")]);
        }
      }, {
        key: "addOption",
        value: function addOption() {
          this.viewModel.Options = [].concat(_toConsumableArray(this.viewModel.Options), [new Option(new Date().getUTCMilliseconds(), "")]);
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(optionId) {
          if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
          } else {
            var index = this.viewModel.Options.findIndex(function (item) {
              return item.OptionId === optionId;
            });
            this.viewModel.Options.splice(index, 1);
          }
        }
      }, {
        key: "markAsAnswer",
        value: function markAsAnswer(choice, option) {
          var _this7 = this;

          var index;

          if (this.viewModel.Answers.length === 0) {
            this.viewModel.Answers = [];
          }

          this.viewModel.Answers.push({
            ChoiceId: choice.ChoiceId,
            OptionId: option.OptionId
          });

          if (this.viewModel.Answers.length > 0) {
            var _loop2 = function _loop2(i) {
              for (var j = i + 1; j < _this7.viewModel.Answers.length; j++) {
                if (_this7.viewModel.Answers[i].ChoiceId === _this7.viewModel.Answers[j].ChoiceId) {
                  index = _this7.viewModel.Answers.findIndex(function (item) {
                    return item.ChoiceId === _this7.viewModel.Answers[i].ChoiceId;
                  });

                  _this7.viewModel.Answers.splice(index, 1);
                }
              }
            };

            for (var i = 0; i < this.viewModel.Answers.length; i++) {
              _loop2(i);
            }
          }

          this.viewModel.TotalMarks = this.viewModel.Answers.length;
          this.showChoiceMatrixAnswers();
        }
      }, {
        key: "showChoiceMatrixAnswers",
        value: function showChoiceMatrixAnswers() {
          var _this8 = this;

          var answers = [],
              matrixChoices = [],
              matrixOptions = [];
          this.answers = [];
          answers = this.viewModel.Answers;
          matrixChoices = this.viewModel.Choices;
          matrixOptions = this.viewModel.Options;

          var _loop3 = function _loop3(k) {
            _this8.answers.push({
              choiceName: matrixChoices.find(function (item) {
                return item.ChoiceId === answers[k].ChoiceId;
              }).ChoiceText,
              optionName: matrixOptions.find(function (item) {
                return item.OptionId === answers[k].OptionId;
              }).OptionText
            });
          };

          for (var k = 0; k < answers.length; k++) {
            _loop3(k);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.viewModel.Question = "";
          this.viewModel.Choices = [];
          this.viewModel.Options = [];
          this.viewModel.QuestionType = "";
          this.viewModel.Answers = [];
        }
      }]);

      return MCQChoiceMatrixComponent;
    }();

    MCQChoiceMatrixComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    MCQChoiceMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq-choicematrix.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq-choicematrix.component.scss */
      "./src/app/question-builder/mcq-choicematrix/mcq-choicematrix.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _question_builder_service__WEBPACK_IMPORTED_MODULE_3__["QuestionBuilderService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MCQChoiceMatrixComponent);
    /***/
  },

  /***/
  "./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/question-builder/mcq-choicematrix/update-answers.directive.ts ***!
    \*******************************************************************************/

  /*! exports provided: UpdateAnswersDirective */

  /***/
  function srcAppQuestionBuilderMcqChoicematrixUpdateAnswersDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAnswersDirective", function () {
      return UpdateAnswersDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UpdateAnswersDirective =
    /*#__PURE__*/
    function () {
      function UpdateAnswersDirective(elementRef) {
        _classCallCheck(this, UpdateAnswersDirective);

        this.elementRef = elementRef;
        this.answers = [];
      }

      _createClass(UpdateAnswersDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this9 = this;

          this.elementRef.nativeElement.removeAttribute("checked");

          if (changes["answers"]) {
            var answer = this.answers.findIndex(function (item) {
              return item.ChoiceId === _this9.choiceid;
            });

            if (answer > -1 && this.answers[answer].OptionId === this.optionid) {
              this.elementRef.nativeElement.setAttribute("checked", "checked");
            }
          }
        }
      }]);

      return UpdateAnswersDirective;
    }();

    UpdateAnswersDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choicematrix'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], UpdateAnswersDirective.prototype, "answers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choiceid'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UpdateAnswersDirective.prototype, "choiceid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('optionid'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UpdateAnswersDirective.prototype, "optionid", void 0);
    UpdateAnswersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[choicematrix]"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], UpdateAnswersDirective);
    /***/
  },

  /***/
  "./src/app/question-builder/mcq-standard/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/question-builder/mcq-standard/index.ts ***!
    \********************************************************/

  /*! exports provided: MCQStandardComponent */

  /***/
  function srcAppQuestionBuilderMcqStandardIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mcq_standard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mcq-standard.component */
    "./src/app/question-builder/mcq-standard/mcq-standard.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MCQStandardComponent", function () {
      return _mcq_standard_component__WEBPACK_IMPORTED_MODULE_1__["MCQStandardComponent"];
    });
    /***/

  },

  /***/
  "./src/app/question-builder/mcq-standard/mcq-standard.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/question-builder/mcq-standard/mcq-standard.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MCQStandardComponent */

  /***/
  function srcAppQuestionBuilderMcqStandardMcqStandardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQStandardComponent", function () {
      return MCQStandardComponent;
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


    var _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mcq-standard.service */
    "./src/app/question-builder/mcq-standard/mcq-standard.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _question_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/file-management/file-management.service */
    "./src/app/shared/file-management/file-management.service.ts");

    var MCQStandardComponent =
    /*#__PURE__*/
    function () {
      function MCQStandardComponent(mcqService, route, questionService, changedetector, pluginService, fileService) {
        var _this10 = this;

        _classCallCheck(this, MCQStandardComponent);

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
        this.route.data.subscribe(function (args) {
          if (args.type === "MCQ_SINGLE") {
            _this10.choiceType = "radio";
            _this10.viewModel.QuestionType = args.type;
          }

          if (args.type === "MCQ_MULTIPLE") {
            _this10.choiceType = "checkbox";
            _this10.viewModel.QuestionType = args.type;
          }

          if (args.type === "MCQ_TRUE_FALSE") {
            _this10.choiceType = "radio";
            _this10.viewModel.Choices = [new _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["Choice"](new Date().getUTCMilliseconds() + 1, "True"), new _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["Choice"](new Date().getUTCMilliseconds(), "False")];
            _this10.viewModel.QuestionType = args.type;
          }
        });
      }

      _createClass(MCQStandardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.route.snapshot.data.question) Promise.resolve().then(function () {
            _this11.viewModel = _this11.mcqService.load(_this11.route.snapshot.data.question);
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.viewModel) {
            this.questionService.generateQuestionResource(this.viewModel);
            this.showMCQAnswers();
          }

          this.changedetector.detectChanges();
        }
      }, {
        key: "updateQuestionDetails",
        value: function updateQuestionDetails() {
          this.questionService.generateQuestionResource(this.viewModel);
          this.showMCQAnswers();
        }
      }, {
        key: "showMCQAnswers",
        value: function showMCQAnswers() {
          var _this12 = this;

          this.answers = [];

          var _loop4 = function _loop4(j) {
            var answerText = _this12.viewModel.Choices.find(function (item) {
              return item.ChoiceId === _this12.viewModel.Answers[j];
            }).ChoiceText;

            _this12.answers.push(answerText);

            answerText = "";
          };

          for (var j = 0; j < this.viewModel.Answers.length; j++) {
            _loop4(j);
          }
        }
      }, {
        key: "addChoice",
        value: function addChoice() {
          this.mcqService.addChoice();
        }
      }, {
        key: "deleteChoice",
        value: function deleteChoice(choiceId) {
          this.mcqService.deleteChoice(choiceId);
        }
      }, {
        key: "markAsAnswer",
        value: function markAsAnswer(choiceId) {
          this.mcqService.toggleAnswer(choiceId);
          this.viewModel.TotalMarks = this.viewModel.Answers.length;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.viewModel.Question = "";
          this.viewModel.Choices = [];
          this.viewModel.QuestionType = "";
          this.viewModel.Answers = [];
        }
      }]);

      return MCQStandardComponent;
    }();

    MCQStandardComponent.ctorParameters = function () {
      return [{
        type: _mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _question_builder_service__WEBPACK_IMPORTED_MODULE_4__["QuestionBuilderService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__["FileManagementService"]
      }];
    };

    MCQStandardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq-standard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/mcq-standard/mcq-standard.component.html"))["default"],
      providers: [_mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mcq_standard_service__WEBPACK_IMPORTED_MODULE_2__["MCQStandardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _question_builder_service__WEBPACK_IMPORTED_MODULE_4__["QuestionBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_6__["FileManagementService"]])], MCQStandardComponent);
    /***/
  },

  /***/
  "./src/app/question-builder/mcq-standard/mcq-standard.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/question-builder/mcq-standard/mcq-standard.service.ts ***!
    \***********************************************************************/

  /*! exports provided: MCQStandard, Choice, MCQStandardService */

  /***/
  function srcAppQuestionBuilderMcqStandardMcqStandardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQStandard", function () {
      return MCQStandard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Choice", function () {
      return Choice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQStandardService", function () {
      return MCQStandardService;
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


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");

    var MCQStandard = function MCQStandard() {
      _classCallCheck(this, MCQStandard);

      this.Choices = [];
      this.Answers = [];
    };

    var Choice =
    /**
     *
     */
    function Choice(ChoiceId, ChoiceText) {
      _classCallCheck(this, Choice);

      this.ChoiceId = ChoiceId;
      this.ChoiceText = ChoiceText;
    };

    var MCQStandardService =
    /*#__PURE__*/
    function () {
      function MCQStandardService(pluginService) {
        _classCallCheck(this, MCQStandardService);

        this.pluginService = pluginService;
        this._question = new MCQStandard();
      }

      _createClass(MCQStandardService, [{
        key: "addChoice",
        value: function addChoice() {
          this._question.Choices.push(new Choice(new Date().getUTCMilliseconds(), ""));
        }
      }, {
        key: "getQuestion",
        value: function getQuestion() {
          return this._question;
        }
      }, {
        key: "deleteChoice",
        value: function deleteChoice(choiceId) {
          if (this._question.Answers.length > 0) {
            for (var i = 0; i < this._question.Answers.length; i++) {
              if (this._question.Answers[i] !== choiceId) {
                var index = this._question.Choices.findIndex(function (item) {
                  return item.ChoiceId === choiceId;
                });

                this._question.Choices.splice(index, 1);
              } else {
                this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
              }
            }
          } else {
            var _index = this._question.Choices.findIndex(function (item) {
              return item.ChoiceId === choiceId;
            });

            this._question.Choices.splice(_index, 1);
          }
        }
      }, {
        key: "toggleAnswer",
        value: function toggleAnswer(choiceId) {
          var index = this._question.Answers.indexOf(choiceId);

          if (this._question.QuestionType !== "MCQ_MULTIPLE") {
            this._question.Answers = [];
          }

          if (index === -1) {
            this._question.Answers = [].concat(_toConsumableArray(this._question.Answers), [choiceId]);
          } else {
            this._question.Answers = this._question.Answers.filter(function (item) {
              return item !== choiceId;
            });
          }
        }
      }, {
        key: "load",
        value: function load(question) {
          this._question = question;
          return this._question;
        }
      }]);

      return MCQStandardService;
    }();

    MCQStandardService.ctorParameters = function () {
      return [{
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__["PluginService"]
      }];
    };

    MCQStandardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_2__["PluginService"]])], MCQStandardService);
    /***/
  },

  /***/
  "./src/app/question-builder/mcq-standard/update-answers.directive.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/question-builder/mcq-standard/update-answers.directive.ts ***!
    \***************************************************************************/

  /*! exports provided: AnswersDirective */

  /***/
  function srcAppQuestionBuilderMcqStandardUpdateAnswersDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswersDirective", function () {
      return AnswersDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnswersDirective =
    /*#__PURE__*/
    function () {
      function AnswersDirective(elementRef) {
        _classCallCheck(this, AnswersDirective);

        this.elementRef = elementRef;
      }

      _createClass(AnswersDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.elementRef.nativeElement.removeAttribute("checked");

          if (changes["answers"]) {
            if (this.answers.indexOf(this.choiceid) > -1) {
              this.elementRef.nativeElement.setAttribute('checked', 'checked');
            }
          }
        }
      }]);

      return AnswersDirective;
    }();

    AnswersDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('answers'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], AnswersDirective.prototype, "answers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choiceid'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AnswersDirective.prototype, "choiceid", void 0);
    AnswersDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[answers]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AnswersDirective);
    /***/
  },

  /***/
  "./src/app/question-builder/pick-question-type/pick-question-type.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/question-builder/pick-question-type/pick-question-type.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PickQuestionComponent */

  /***/
  function srcAppQuestionBuilderPickQuestionTypePickQuestionTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickQuestionComponent", function () {
      return PickQuestionComponent;
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


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");

    var PickQuestionComponent =
    /*#__PURE__*/
    function () {
      function PickQuestionComponent(router, route, commonService) {
        _classCallCheck(this, PickQuestionComponent);

        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.questionTypes = [];
      }

      _createClass(PickQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getQuestionTypeDetails();
        }
      }, {
        key: "getQuestionTypeDetails",
        value: function getQuestionTypeDetails() {
          var _this13 = this;

          this.commonService.getQuestionTypeList().subscribe(function (data) {
            _this13.questionTypes = data;
            var currentRoute = _this13.router.url;

            _this13.setSelectedQuestionType(currentRoute);
          });
        }
      }, {
        key: "setSelectedQuestionType",
        value: function setSelectedQuestionType(currentRoute) {
          var splitUrl = [],
              lastItem;
          splitUrl = currentRoute.split("/");
          lastItem = "./" + splitUrl.pop();

          for (var i = 0; i < this.questionTypes.length; i++) {
            if (lastItem === this.questionTypes[i].router) {
              this.questionTypes.find(function (item) {
                return item.router === lastItem;
              }).checked = true;
            }
          }
        }
      }, {
        key: "navigateToUrl",
        value: function navigateToUrl(url) {
          this.router.navigate([url], {
            relativeTo: this.route
          });
        }
      }]);

      return PickQuestionComponent;
    }();

    PickQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    PickQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'pick-question-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pick-question-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/question-builder/pick-question-type/pick-question-type.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])], PickQuestionComponent);
    /***/
  },

  /***/
  "./src/app/question-builder/question-builder.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/question-builder/question-builder.module.ts ***!
    \*************************************************************/

  /*! exports provided: QuestionBuilderModule */

  /***/
  function srcAppQuestionBuilderQuestionBuilderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionBuilderModule", function () {
      return QuestionBuilderModule;
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


    var _mcq_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mcq-standard */
    "./src/app/question-builder/mcq-standard/index.ts");
    /* harmony import */


    var _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mcq-standard/update-answers.directive */
    "./src/app/question-builder/mcq-standard/update-answers.directive.ts");
    /* harmony import */


    var _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mcq-choicematrix */
    "./src/app/question-builder/mcq-choicematrix/index.ts");
    /* harmony import */


    var _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./matchlist/matchlist.component */
    "./src/app/question-builder/matchlist/matchlist.component.ts");
    /* harmony import */


    var _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cloze/question-preview.directive */
    "./src/app/question-builder/cloze/question-preview.directive.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _question_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cloze/drag-n-drop/drag-n-drop.component */
    "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
    /* harmony import */


    var _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pick-question-type/pick-question-type.component */
    "./src/app/question-builder/pick-question-type/pick-question-type.component.ts");

    var QuestionBuilderModule = function QuestionBuilderModule() {
      _classCallCheck(this, QuestionBuilderModule);
    };

    QuestionBuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_mcq_standard__WEBPACK_IMPORTED_MODULE_2__["MCQStandardComponent"], _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__["PickQuestionComponent"], _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__["AnswersDirective"], _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["MCQChoiceMatrixComponent"], _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["UpdateAnswersDirective"], _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"], _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"], _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__["QuestionPreviewDirective"]],
      imports: [_shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      providers: [_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      exports: [_mcq_standard__WEBPACK_IMPORTED_MODULE_2__["MCQStandardComponent"], _pick_question_type_pick_question_type_component__WEBPACK_IMPORTED_MODULE_10__["PickQuestionComponent"], _mcq_standard_update_answers_directive__WEBPACK_IMPORTED_MODULE_3__["AnswersDirective"], _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["MCQChoiceMatrixComponent"], _mcq_choicematrix__WEBPACK_IMPORTED_MODULE_4__["UpdateAnswersDirective"], _matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"], _cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"], _cloze_question_preview_directive__WEBPACK_IMPORTED_MODULE_6__["QuestionPreviewDirective"]]
    })], QuestionBuilderModule);
    /***/
  },

  /***/
  "./src/app/question-builder/question-builder.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/question-builder/question-builder.service.ts ***!
    \**************************************************************/

  /*! exports provided: QuestionBuilderService */

  /***/
  function srcAppQuestionBuilderQuestionBuilderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionBuilderService", function () {
      return QuestionBuilderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuestionBuilderService =
    /*#__PURE__*/
    function () {
      function QuestionBuilderService() {
        _classCallCheck(this, QuestionBuilderService);
      }

      _createClass(QuestionBuilderService, [{
        key: "generateQuestionResource",
        //mcq-single, mcq-multiple, mcq-true or false, mcq-choice matrix and matchlist
        value: function generateQuestionResource(jsonObj) {
          var jsonData = JSON.stringify(jsonObj);
          this.questionDetails = jsonObj;
          this.saveQuestionResource(jsonData);
        } //mcq-single, mcq-multiple, mcq-true or false,mcq-choice matrix and matchlist

      }, {
        key: "saveQuestionResource",
        value: function saveQuestionResource(jsonData) {
          this.questionResource = this.convertJsonToString(jsonData);
        }
      }, {
        key: "convertJsonToString",
        //JSON to String conversion
        value: function convertJsonToString(jsonData) {
          var jsonString;
          jsonString = jsonData.replace(/"/g, '\\"');
          return jsonString;
        } //String to JSON conversion

      }, {
        key: "convertStringToJson",
        value: function convertStringToJson(stringData) {
          var stringJson, parseJsonString;
          stringJson = stringData.replace(/\\"/g, '\"');
          parseJsonString = JSON.parse(stringJson);
          return parseJsonString;
        }
      }, {
        key: "getQuestionResource",
        get: function get() {
          return this.questionDetails;
        }
      }]);

      return QuestionBuilderService;
    }();

    QuestionBuilderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionBuilderService);
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
  "./src/app/subject/subject.service.ts":
  /*!********************************************!*\
    !*** ./src/app/subject/subject.service.ts ***!
    \********************************************/

  /*! exports provided: SubjectService */

  /***/
  function srcAppSubjectSubjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectService", function () {
      return SubjectService;
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


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var SubjectService =
    /*#__PURE__*/
    function () {
      function SubjectService(http) {
        _classCallCheck(this, SubjectService);

        this.http = http;
        this.subjectResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects';
        this.subjectResourceUrlWithTree = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects/subject-tree';
        this.subjectResourceUrlSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/curriculum-subjects/search';
      }

      _createClass(SubjectService, [{
        key: "getSubjectBySubjectId",
        value: function getSubjectBySubjectId(id) {
          return this.http.get("".concat(this.subjectResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "updateSubjectStatus",
        value: function updateSubjectStatus(generalSubject) {
          return this.http.put(this.subjectResourceUrl, generalSubject, {
            observe: 'response'
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.subjectResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "saveSubject",
        value: function saveSubject(generalSubject) {
          return this.http.post(this.subjectResourceUrlWithTree, generalSubject, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "getSubjectByCurriculumIdAndGradeId",
        value: function getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status) {
          var reqJSON;

          if (status === _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_4__["ACTIVE"]) {
            reqJSON = {
              "curriculumId": curriculumId,
              "grade": gradeId,
              "status": status
            };
          } else {
            reqJSON = {
              "curriculumId": curriculumId,
              "grade": gradeId
            };
          }

          return this.http.post(this.subjectResourceUrlSearch, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "getSubjectTreeBySubjectId",
        value: function getSubjectTreeBySubjectId(id) {
          return this.http.get("".concat(this.subjectResourceUrlWithTree, "/").concat(id), {
            observe: 'response'
          });
        }
      }]);

      return SubjectService;
    }();

    SubjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], SubjectService);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CurriculumAdditionalResourcesManageComponent */

  /***/
  function srcAppSyllabusLessonTopicAddlResourceAddlResourceManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumAdditionalResourcesManageComponent", function () {
      return CurriculumAdditionalResourcesManageComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/user-login-info/user-login-info.service */
    "./src/app/shared/user-login-info/user-login-info.service.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");
    /* harmony import */


    var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../subject/subject.service */
    "./src/app/subject/subject.service.ts");
    /* harmony import */


    var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../organisation/organisation.service */
    "./src/app/organisation/organisation.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/file-management/file-management.service */
    "./src/app/shared/file-management/file-management.service.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);

    var CurriculumAdditionalResourcesManageComponent =
    /*#__PURE__*/
    function () {
      function CurriculumAdditionalResourcesManageComponent(_router, activatedRoute, addlResourceService, curriculumService, subjectService, organisationService, eventManager, parseLinks, principalService, pluginService, formBuilder, userLoginInfo, commonService, changeDetectorRef, fileService) {
        _classCallCheck(this, CurriculumAdditionalResourcesManageComponent);

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

      _createClass(CurriculumAdditionalResourcesManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCurriculums();
          this.createAdditionLessonResourceForm();
          this.getContentCategory();
          this.getContentType();
        }
      }, {
        key: "getContentCategory",
        value: function getContentCategory() {
          var _this14 = this;

          this.commonService.getContentCategoryList().subscribe(function (categoryData) {
            _this14.resourceCategory = categoryData;
          });
        }
      }, {
        key: "getContentType",
        value: function getContentType() {
          var _this15 = this;

          this.commonService.getContentTypeList().subscribe(function (typeData) {
            _this15.contentType = typeData;
          });
        }
      }, {
        key: "createAdditionLessonResourceForm",
        value: function createAdditionLessonResourceForm() {
          this.lessonResourceForm = this.formBuilder.group({
            contentTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(75)]),
            contentDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(250)]),
            resourceCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            contentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            webSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null)
          });
        }
      }, {
        key: "loadCurriculums",
        value: function loadCurriculums() {
          var _this16 = this;

          this.curriculumService.getCurriculumSearch().subscribe(function (res) {
            return _this16.assignCurriculumList(res.body);
          }, function (res) {
            return _this16.onError(res.message);
          });
        }
      }, {
        key: "assignCurriculumList",
        value: function assignCurriculumList(data) {
          this.curriculumList = [];

          for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "onDocumentFileChanges",
        value: function onDocumentFileChanges(event) {
          this.selectedFile = event.target.files;
          this.fileName = this.selectedFile[0].name;

          if (this.selectedFile[0].type === "application/pdf" && this.selectedFile[0].size > 104857600) {
            this.pluginService.alertMessage("Please upload file size lesser than 100 MB", "error");
          }
        }
      }, {
        key: "uploadDocumentFile",
        value: function uploadDocumentFile() {
          var _this17 = this;

          if (this.fileName !== "No file chosen") {
            if (this.selectedFile[0].type === "application/pdf") {
              var file = this.selectedFile.item(0);
              this.fileService.getpresignedurls(this.fileName).subscribe(function (res) {
                if (res.status === 200) {
                  _this17.uploadedFileName = Object.keys(res.body)[0];
                  _this17.uploadedFilePath = Object.values(res.body)[0];
                  _this17.fileName = _this17.uploadedFileName;

                  if (_this17.uploadedFileName && _this17.uploadedFilePath) {
                    _this17.fileService.uploadPDFFile(_this17.uploadedFilePath, file).subscribe(function (event) {
                      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                        _this17.showFileAction = true;

                        _this17.pluginService.alertMessage("File uploaded successfully", "success");
                      }
                    });
                  }
                }
              });
            } else {
              this.pluginService.alertMessage("Invalid file, it support only PDF", "error");
            }
          } else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
          }
        }
      }, {
        key: "downloadFile",
        value: function downloadFile() {
          if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
          }
        }
      }, {
        key: "subscribeToDownloadResponse",
        value: function subscribeToDownloadResponse(result) {
          var _this18 = this;

          result.subscribe(function (res) {
            return _this18.onDownloadSuccess(res);
          }, function (errRes) {
            return _this18.onDownloadError(errRes);
          });
        }
      }, {
        key: "onDownloadSuccess",
        value: function onDownloadSuccess(resp) {
          if (resp.body) {
            var downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(downloadFilePath);
          }
        }
      }, {
        key: "onDownloadError",
        value: function onDownloadError(error) {
          this.pluginService.alertMessage("Error in downloading file", "error");
        }
      }, {
        key: "checkContentType",
        value: function checkContentType() {
          if (this.selectedContentType) {
            if (this.selectedContentType.tag === 'DOCUMENT') {
              if (this.uploadedFilePath) {
                this.deleteUploadedFile();
              }
            }
          }
        }
      }, {
        key: "deleteUploadedFile",
        value: function deleteUploadedFile() {
          this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(this.uploadedFileName));
        }
      }, {
        key: "subscribeToDeleteFiletResponse",
        value: function subscribeToDeleteFiletResponse(resp) {
          var _this19 = this;

          resp.subscribe(function (res) {
            return _this19.onDeleteFileSuccess(res);
          }, function (res) {
            return _this19.onDeleteError(res);
          });
        }
      }, {
        key: "onDeleteFileSuccess",
        value: function onDeleteFileSuccess(resp) {
          this.fileName = "No file chosen";
          this.uploadedFileName = "";
          this.uploadedFilePath = "";
          this.pluginService.alertMessage("File deleted successfully", "success");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.showSyllabusDetails();
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }

          this.selectedGrade = null;
          this.selectedSubject = null;
        }
      }, {
        key: "onGradeChange",
        value: function onGradeChange() {
          var _this20 = this;

          var curriculumId, gradeId, status;

          if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__["ACTIVE"];
            this.subjectService.getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status).subscribe(function (res) {
              return _this20.assignSubjectList(res.body);
            }, function (res) {
              return _this20.onError(res.message);
            });
          }

          this.selectedSubject = null;
        }
      }, {
        key: "assignSubjectList",
        value: function assignSubjectList(data) {
          this.subjectList = [];

          for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
          }
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.gradeList = [];

          for (var i = min; i <= max; i++) {
            this.gradeList.push({
              "id": i,
              "name": i
            });
          }

          return this.gradeList;
        }
      }, {
        key: "loadSubjectTree",
        value: function loadSubjectTree() {
          var _this21 = this;

          if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;

            if (subjectId) {
              this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) {
                return _this21.assignSubjectTree(res.body);
              }, function (res) {
                return _this21.onError(res.message);
              });
            } else {
              this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
          }
        }
      }, {
        key: "assignSubjectTree",
        value: function assignSubjectTree(data) {
          this.subjectTree = data;
          this.pluginService.jsTree("#treeView", this.subjectTree, false);
          this.enableExpandNode = false;
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
          this.validateTopicContentForm();
          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "validateTopicContentForm",
        value: function validateTopicContentForm() {
          var contentName, webURL;
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

          if (webURL === "" || webURL === undefined || webURL === null || this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null) {
            this.validateForm = true;
          }
        }
      }, {
        key: "showSyllabusDetails",
        value: function showSyllabusDetails() {
          var localThisObj = this;
          $('#treeView').on('changed.jstree', function (e, data) {
            var i, j;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "unit") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "lesson") {
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
              } else {}
            }
          });
        }
      }, {
        key: "getAddlResourceList",
        value: function getAddlResourceList(lessonId) {
          var _this22 = this;

          this.addlResourceService.getAddlResource(lessonId).subscribe(function (res) {
            return _this22.assignResponseToAddlResourceList(res.body);
          }, function (res) {
            return _this22.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToAddlResourceList",
        value: function assignResponseToAddlResourceList(data) {
          this.addlResource = data;
          this.sortArrayByOrderNumber(this.addlResource);
          this.dragTableContent();
        }
      }, {
        key: "getOrgGeneralAddlResourceByOrganisation",
        value: function getOrgGeneralAddlResourceByOrganisation() {
          var _this23 = this;

          var organisationId = this.selectedOrganisation.id;
          this.addlResourceService.getOrgGeneralAddlResourceByOrganisationId(this.lessonId, organisationId).subscribe(function (res) {
            return _this23.assignResponseToOrgAddlResource(res.body);
          }, function (res) {
            return _this23.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToOrgAddlResource",
        value: function assignResponseToOrgAddlResource(data) {
          this.orgGeneralAddlResource = data;
          this.sortArrayByOrderNumber(this.orgGeneralAddlResource);
        }
      }, {
        key: "getOrgGeneralAddlResourceByOrganisationId",
        value: function getOrgGeneralAddlResourceByOrganisationId(lessonId) {
          var _this24 = this;

          //User login info organisationId
          this.organisationId = this.userLoginInfo.organisationId;
          this.addlResourceService.getOrgGeneralAddlResourceByOrganisationId(lessonId, this.organisationId).subscribe(function (res) {
            return _this24.assignResponseToOrgAddlResourceList(res.body);
          }, function (res) {
            return _this24.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToOrgAddlResourceList",
        value: function assignResponseToOrgAddlResourceList(data) {
          this.orgGeneralAddlResource = data;
          this.ownAddlResource = data;
          this.sortArrayByOrderNumber(this.ownAddlResource);
          this.ownAddlResourceDragTableContent();
        }
      }, {
        key: "getOrganisationList",
        value: function getOrganisationList() {
          var _this25 = this;

          this.organisationService.getOrganisations().subscribe(function (res) {
            return _this25.assignOrgList(res.body);
          }, function (res) {
            return _this25.onError(res.message);
          });
        }
      }, {
        key: "assignOrgList",
        value: function assignOrgList(data) {
          this.organisations = data;
        }
      }, {
        key: "sortArrayByOrderNumber",
        value: function sortArrayByOrderNumber(array) {
          array.sort(function (a, b) {
            return a.orderNumber > b.orderNumber ? 1 : -1;
          });
        }
      }, {
        key: "getAddlResourcePreference",
        value: function getAddlResourcePreference(lessonId) {
          var _this26 = this;

          this.addlResourceService.getAddlResourcePreference(lessonId, this.organisationId).subscribe(function (res) {
            return _this26.onGetPreferenceSuccess(res.body);
          }, function (res) {
            return _this26.onError(res.message);
          });
        }
      }, {
        key: "onGetPreferenceSuccess",
        value: function onGetPreferenceSuccess(acitveStatus) {
          if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkContentCE = true;
            this.checkOwnContent = false;
          } else if (acitveStatus === true) {
            this.checkContentCE = false;
            this.checkOwnContent = true;
          }
        }
      }, {
        key: "checkContentPreference",
        value: function checkContentPreference(event) {
          var check = event.target.checked;
          var name = event.target.id;

          if (check === true && name === "ContentCE") {
            this.contentPreferenceStatus = false;
          } else if (check === true && name === "OwnContent") {
            this.contentPreferenceStatus = true;
          }
        }
      }, {
        key: "saveContentPreference",
        value: function saveContentPreference() {
          if (this.contentPreferenceStatus === false) {
            if (this.addlResource.length <= 0) {
              this.pluginService.alertMessage("Before set content preference atleast one general additional lesson resources is mandatory", "error");
            } else {
              this.setContentPreference();
            }
          } else if (this.contentPreferenceStatus === true) {
            if (this.ownAddlResource.length <= 0) {
              this.pluginService.alertMessage("Please add atleast one own additional lesson resources and do preference", "error");
            } else {
              this.setContentPreference();
            }
          }
        }
      }, {
        key: "setContentPreference",
        value: function setContentPreference() {
          var _this27 = this;

          this.addlResourceService.setAddlResourcePreference(this.contentPreferenceStatus, this.lessonId, this.organisationId).subscribe(function (res) {
            return _this27.onSuccess(res.body);
          }, function (res) {
            return _this27.onError(res.message);
          });
        }
      }, {
        key: "onSuccess",
        value: function onSuccess(data) {
          this.pluginService.alertMessage("Content preference saved successfully", "success");
        }
      }, {
        key: "resetFormValues",
        value: function resetFormValues() {
          this.lessonResourceForm.reset();
          this.selectedCategory = null;
        }
      }, {
        key: "addAddlessonResources",
        value: function addAddlessonResources() {
          this.openLessonResourceModal();
          this.modalTitleName = "Add";
          this.modalActionName = "AddlResource";
          this.resetFormValues();
          this.enableFormFields();
        }
      }, {
        key: "addOwnAddlResources",
        value: function addOwnAddlResources() {
          this.openLessonResourceModal();
          this.modalTitleName = "Add";
          this.modalActionName = "OwnAddlResource";
          this.resetFormValues();
          this.enableFormFields();
        }
      }, {
        key: "openLessonResourceModal",
        value: function openLessonResourceModal() {
          this.pluginService.showModalWindow("#additionalResourceModal");
        }
      }, {
        key: "closeLessonResourceModal",
        value: function closeLessonResourceModal() {
          this.pluginService.hideModalWindow("#additionalResourceModal");
        }
      }, {
        key: "viewAddlResource",
        value: function viewAddlResource(contentId) {
          var lessonResourcesDetails = [],
              lessonResourceDetail = {};
          lessonResourceDetail.content = {};
          lessonResourcesDetails = this.addlResource.filter(function (item) {
            return item.id === contentId;
          });
          lessonResourceDetail = lessonResourcesDetails[0];
          this.modalTitleName = "View";
          this.modalActionName = "AddlResource";
          this.patchContentFormfields(lessonResourceDetail);
          this.openLessonResourceModal();
        }
      }, {
        key: "editAddlResource",
        value: function editAddlResource(contentId) {
          var lessonResourcesDetails = [],
              lessonResourceDetail = {};
          lessonResourceDetail.content = {};
          lessonResourcesDetails = this.addlResource.filter(function (item) {
            return item.id === contentId;
          });
          lessonResourceDetail = lessonResourcesDetails[0];
          this.modalTitleName = "Edit";
          this.modalActionName = "AddlResource";
          this.patchContentFormfields(lessonResourceDetail);
          this.openLessonResourceModal();
        }
      }, {
        key: "viewOrgAddlResource",
        value: function viewOrgAddlResource(contentId) {
          var lessonResourcesDetails = [],
              lessonResourceDetail = {};
          lessonResourceDetail.content = {};
          lessonResourcesDetails = this.orgGeneralAddlResource.filter(function (item) {
            return item.id === contentId;
          });
          lessonResourceDetail = lessonResourcesDetails[0];
          this.modalTitleName = "View";
          this.modalActionName = "OrgAddlResource";
          this.patchContentFormfields(lessonResourceDetail);
          this.openLessonResourceModal();
        }
      }, {
        key: "editOwnAddlResource",
        value: function editOwnAddlResource(contentId) {
          var lessonResourcesDetails = [],
              lessonResourceDetail = {};
          lessonResourceDetail.content = {};
          lessonResourcesDetails = this.ownAddlResource.filter(function (item) {
            return item.id === contentId;
          });
          lessonResourceDetail = lessonResourcesDetails[0];
          this.modalTitleName = "Edit";
          this.modalActionName = "OwnAddlResource";
          this.patchContentFormfields(lessonResourceDetail);
          this.openLessonResourceModal();
        }
      }, {
        key: "viewOwnAddlResource",
        value: function viewOwnAddlResource(contentId) {
          var lessonResourcesDetails = [],
              lessonResourceDetail = {};
          lessonResourceDetail.content = {};
          lessonResourcesDetails = this.ownAddlResource.filter(function (item) {
            return item.id === contentId;
          });
          lessonResourceDetail = lessonResourcesDetails[0];
          this.modalTitleName = "View";
          this.modalActionName = "OwnAddlResource";
          this.patchContentFormfields(lessonResourceDetail);
          this.openLessonResourceModal();
        }
      }, {
        key: "patchContentFormfields",
        value: function patchContentFormfields(lessonResourceDetail) {
          this.contentId = lessonResourceDetail.content.id;
          this.selectedCategory = this.resourceCategory.filter(function (item) {
            return item.tag === lessonResourceDetail.content.tag;
          })[0];
          this.selectedContentType = this.contentType.filter(function (item) {
            return item.tag === lessonResourceDetail.content.contentType;
          })[0];
          this.lessonResourceForm.patchValue({
            contentTitle: lessonResourceDetail.content.title,
            contentDescription: lessonResourceDetail.content.description
          });

          if (this.selectedContentType.tag === "DOCUMENT") {
            this.showFileAction = true;
            this.fileName = lessonResourceDetail.content.fileName;
            this.uploadedFileName = lessonResourceDetail.content.fileName;
            this.uploadedFilePath = lessonResourceDetail.content.filePath;
          } else if (this.selectedContentType.tag === "VIDEO") {
            this.lessonResourceForm.patchValue({
              webSource: lessonResourceDetail.content.webUrl
            });
          }

          if (this.modalTitleName === "View") {
            this.disableFormFields();
          } else if (this.modalTitleName === "Edit" || this.modalTitleName === "Add") {
            this.enableFormFields();
          }
        }
      }, {
        key: "disableFormFields",
        value: function disableFormFields() {
          this.lessonResourceForm.get('contentTitle').disable();
          this.lessonResourceForm.get('contentDescription').disable();
          this.lessonResourceForm.get('resourceCategory').disable();
          this.lessonResourceForm.get('contentType').disable();
          this.lessonResourceForm.get('webSource').disable(); //this.disableDropdown = true;
        }
      }, {
        key: "enableFormFields",
        value: function enableFormFields() {
          this.lessonResourceForm.get('contentTitle').enable();
          this.lessonResourceForm.get('contentDescription').enable();
          this.lessonResourceForm.get('resourceCategory').enable();
          this.lessonResourceForm.get('contentType').enable();
          this.lessonResourceForm.get('webSource').enable(); //this.disableDropdown = false;
        }
      }, {
        key: "saveAddlResource",
        value: function saveAddlResource() {
          var _this28 = this;

          if (this.lessonResourceForm.valid) {
            var addlResources = [],
                addlResource = {};
            addlResource.content = {};
            addlResource.lessonId = this.lessonId;
            addlResource.orderNumber = this.addlResource.length + 1;
            addlResource.content.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
            addlResource.content.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
            addlResource.content.tag = this.selectedCategory.tag;
            addlResource.content.contentType = this.selectedContentType.tag;

            if (this.selectedContentType.tag === "VIDEO") {
              addlResource.content.contentSource = "WEB_URL";
              addlResource.content.webUrl = this.trimValue(this.lessonResourceForm.value.webSource);
            } else if (this.selectedContentType.tag === "DOCUMENT") {
              addlResource.content.contentSource = "FILE_UPLOAD";
              addlResource.content.fileName = this.uploadedFileName;
              addlResource.content.filePath = this.uploadedFilePath;
            }

            addlResources.push(addlResource);
            this.addlResourceService.saveAddlResource(addlResources).subscribe(function (res) {
              return _this28.onSaveSuccess(res.body);
            }, function (res) {
              return _this28.onSaveError(res.error);
            });
          }

          if (this.lessonResourceForm.invalid) {
            return;
          }
        }
      }, {
        key: "saveOwnAddlResource",
        value: function saveOwnAddlResource() {
          var _this29 = this;

          if (this.lessonResourceForm.valid) {
            var orgGeneralAddlResources = [],
                orgGeneralAddlResource = {};
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
              orgGeneralAddlResource.content.webUrl = this.trimValue(this.lessonResourceForm.value.webSource);
            } else if (this.selectedContentType.tag === "DOCUMENT") {
              orgGeneralAddlResource.content.contentSource = "FILE_UPLOAD";
              orgGeneralAddlResource.content.fileName = this.uploadedFileName;
              orgGeneralAddlResource.content.filePath = this.uploadedFilePath;
            }

            orgGeneralAddlResources.push(orgGeneralAddlResource);
            this.addlResourceService.saveOwnAddlResource(orgGeneralAddlResources).subscribe(function (res) {
              return _this29.onSaveSuccess(res.body);
            }, function (res) {
              return _this29.onSaveError(res.error);
            });
          }

          if (this.lessonResourceForm.invalid) {
            return;
          }
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(resp) {
          this.pluginService.alertMessage("Additional Lesson resource added successfully", "success");
          this.resetFormValues();
          this.closeLessonResourceModal();
          this.getAddlResourceList(this.lessonId);
          this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "updateAddlResource",
        value: function updateAddlResource() {
          var contentResource = {};
          contentResource = {};
          contentResource.id = this.contentId;
          contentResource.title = this.trimValue(this.lessonResourceForm.value.contentTitle);
          contentResource.description = this.trimValue(this.lessonResourceForm.value.contentDescription);
          contentResource.tag = this.selectedCategory.tag;
          contentResource.contentType = this.selectedContentType.tag;

          if (this.selectedContentType.tag === "VIDEO") {
            contentResource.contentSource = "WEB_URL";
            contentResource.webUrl = this.trimValue(this.lessonResourceForm.value.webSource);
          } else if (this.selectedContentType.tag === "DOCUMENT") {
            contentResource.contentSource = "FILE_UPLOAD";
            contentResource.fileName = this.uploadedFileName;
            contentResource.filePath = this.uploadedFilePath;
          }

          this.subscribeToUpdateResponse(this.addlResourceService.updateContentSource(contentResource));
        }
      }, {
        key: "subscribeToUpdateResponse",
        value: function subscribeToUpdateResponse(result) {
          var _this30 = this;

          result.subscribe(function (res) {
            return _this30.onUpdateSuccess(res);
          }, function (errRes) {
            return _this30.onUpdateError(errRes);
          });
        }
      }, {
        key: "onUpdateSuccess",
        value: function onUpdateSuccess(res) {
          this.pluginService.alertMessage("Additional Lesson resource updated successfully", "success");
          this.resetFormValues();
          this.closeLessonResourceModal();
          this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
        }
      }, {
        key: "onUpdateError",
        value: function onUpdateError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "checkSelectedContents",
        value: function checkSelectedContents(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = Number(event.target.title);

          if (checked === true) {
            this.tableGenAction = false;
            this.resourceIds.push(selectedId);
          } else if (checked === false) {
            index = this.resourceIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.resourceIds.splice(index, 1);
          }

          this.resourceIds = this.removeDuplicateElements(this.resourceIds);

          if (this.resourceIds.length <= 0) {
            this.tableGenAction = true;
          }
        }
      }, {
        key: "checkSelectedOwnContents",
        value: function checkSelectedOwnContents(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = Number(event.target.title);

          if (checked === true) {
            this.tableAction = false;
            this.ownLessonResourceIds.push(selectedId);
          } else if (checked === false) {
            index = this.ownLessonResourceIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.ownLessonResourceIds.splice(index, 1);
          }

          this.ownLessonResourceIds = this.removeDuplicateElements(this.ownLessonResourceIds);

          if (this.ownLessonResourceIds.length <= 0) {
            this.tableAction = true;
          }
        }
      }, {
        key: "removeDuplicateElements",
        value: function removeDuplicateElements(array) {
          var temp = [];

          for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
              temp.push(array[i]);
            }
          }

          return temp;
        }
      }, {
        key: "resetSelectedAddlResource",
        value: function resetSelectedAddlResource() {
          this.resourceIds = [];
          this.tableGenAction = true;
          $(".checkAll").prop("checked", false);
        }
      }, {
        key: "resetSelectedOwnAddlResource",
        value: function resetSelectedOwnAddlResource() {
          this.ownLessonResourceIds = [];
          this.tableAction = true;
          $(".checkAllOwnContents").prop("checked", false);
        }
      }, {
        key: "deleteAddlResource",
        value: function deleteAddlResource() {
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
      }, {
        key: "deleteOwnAddlResource",
        value: function deleteOwnAddlResource() {
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
              if (localthisObject.ownLessonResourceIds.length > 0) {
                localthisObject.subscribeToDeleteResponse(localthisObject.addlResourceService.deleteOwnAddlResource(localthisObject.ownLessonResourceIds));
              }
            }
          });
        }
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(result) {
          var _this31 = this;

          result.subscribe(function (res) {
            return _this31.onDeleteSuccess(res);
          }, function (errRes) {
            return _this31.onDeleteError(errRes);
          });
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(res) {
          this.pluginService.alertMessage("Topic content deleted successfully", "success");
          this.tableGenAction = true;
          this.tableAction = true;
          this.resourceIds = [];
          this.ownLessonResourceIds = [];
          this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
          this.getAddlResourceList(this.lessonId);
        }
      }, {
        key: "onDeleteError",
        value: function onDeleteError(errRes) {
          this.pluginService.alertMessage("Could not delete, please contact admin", "error");
        }
      }, {
        key: "dragTableContent",
        value: function dragTableContent() {
          var localThisObj = this;

          var fixHelperModified = function fixHelperModified(e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
              $(this).width($originals.eq(index).width());
            });
            return $helper;
          },
              updateIndex = function updateIndex(e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
              $(this).html(i + 1);
            });
            localThisObj.updateAddlResourceOrder();
          };

          $("#dragTable #dragBody").sortable({
            helper: fixHelperModified,
            stop: updateIndex
          });
          $("#dragBody").sortable({
            distance: 1,
            opacity: 0,
            delay: 10,
            cursor: "move",
            update: function update() {}
          });
        }
      }, {
        key: "ownAddlResourceDragTableContent",
        value: function ownAddlResourceDragTableContent() {
          var localThisObj = this;

          var fixHelperModified = function fixHelperModified(e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
              $(this).width($originals.eq(index).width());
            });
            return $helper;
          },
              updateIndex = function updateIndex(e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
              $(this).html(i + 1);
            });
            localThisObj.updateOwnAddlResourceOrder();
          };

          $("#ownContentDragTable #ownContentDragBody").sortable({
            helper: fixHelperModified,
            stop: updateIndex
          });
          $("#ownContentDragBody").sortable({
            distance: 1,
            opacity: 0,
            delay: 10,
            cursor: "move",
            update: function update() {}
          });
        }
      }, {
        key: "updateAddlResourceOrder",
        value: function updateAddlResourceOrder() {
          var _this32 = this;

          this.updateGenAction = false;
          this.checkOrderNumChange = true;
          var table = document.querySelector('#dragTable');
          var rows = table.querySelectorAll('tbody tr');
          Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].id);
            var newOrderNum = Number(list[1].textContent);

            for (var i = 0; i < _this32.addlResource.length; i++) {
              if (_this32.addlResource[i].id === contentId) {
                _this32.addlResource[i].orderNumber = newOrderNum;
                break;
              }
            }

            _this32.sortArrayByOrderNumber(_this32.addlResource);
          });
        }
      }, {
        key: "updateOwnAddlResourceOrder",
        value: function updateOwnAddlResourceOrder() {
          var _this33 = this;

          this.updateAction = false;
          this.checkOrderNumChange = true;
          var table = document.querySelector('#ownContentDragTable');
          var rows = table.querySelectorAll('tbody tr');
          Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].id);
            var newOrderNum = Number(list[1].textContent);

            for (var i = 0; i < _this33.ownAddlResource.length; i++) {
              if (_this33.ownAddlResource[i].id === contentId) {
                _this33.ownAddlResource[i].orderNumber = newOrderNum;
                break;
              }
            }

            _this33.sortArrayByOrderNumber(_this33.ownAddlResource);
          });
        }
      }, {
        key: "updateAddlResourceWithOrderNumber",
        value: function updateAddlResourceWithOrderNumber() {
          var updatedAddlResource = [];

          for (var i = 0; i < this.addlResource.length; i++) {
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
      }, {
        key: "subscribeToUpdateAddlResouceResponse",
        value: function subscribeToUpdateAddlResouceResponse(result) {
          var _this34 = this;

          result.subscribe(function (res) {
            return _this34.onUpdateAddlSuccess(res);
          }, function (errRes) {
            return _this34.onUpdateTopicContentError(errRes);
          });
        }
      }, {
        key: "onUpdateAddlSuccess",
        value: function onUpdateAddlSuccess(res) {
          this.pluginService.alertMessage("Additional resource order updated successfully", "success");
          this.getAddlResourceList(this.lessonId);
          this.updateGenAction = true;
          this.resetFormValues();
        }
      }, {
        key: "updateOwnAddlResourceWithOrderNumber",
        value: function updateOwnAddlResourceWithOrderNumber() {
          var updatedOwnAddlResource = [];

          for (var i = 0; i < this.ownAddlResource.length; i++) {
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
      }, {
        key: "subscribeToUpdateOwnAddlResouceResponse",
        value: function subscribeToUpdateOwnAddlResouceResponse(result) {
          var _this35 = this;

          result.subscribe(function (res) {
            return _this35.onUpdateOwnAddlSuccess(res);
          }, function (errRes) {
            return _this35.onUpdateTopicContentError(errRes);
          });
        }
      }, {
        key: "onUpdateOwnAddlSuccess",
        value: function onUpdateOwnAddlSuccess(res) {
          this.pluginService.alertMessage("Additional resource order updated successfully", "success");
          this.getOrgGeneralAddlResourceByOrganisationId(this.lessonId);
          this.updateAction = true;
          this.resetFormValues();
        }
      }, {
        key: "onUpdateTopicContentError",
        value: function onUpdateTopicContentError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.enableExpandNode = !this.enableExpandNode;

          if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
          } else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
          }
        }
      }, {
        key: "closeLessonResourceModalWithOutSaving",
        value: function closeLessonResourceModalWithOutSaving() {
          if (this.modalTitleName === "View") {
            this.closeLessonResourceModal();
          } else if (this.modalTitleName === "Add" || this.modalTitleName === "Edit") {
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
              } else {
                localthisObject.closeLessonResourceModal();
              }
            });
          }
        }
      }, {
        key: "resetLessonResource",
        value: function resetLessonResource() {
          this.lessonResourceForm.reset();
          this.fileName = "";
          this.uploadedFileName = "";
          this.uploadedFilePath = "";
          this.selectedContentType = null;
          this.selectedCategory = null;
        }
      }]);

      return CurriculumAdditionalResourcesManageComponent;
    }();

    CurriculumAdditionalResourcesManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"]
      }, {
        type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"]
      }, {
        type: _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_6__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"]
      }];
    };

    CurriculumAdditionalResourcesManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addl-resource-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"], _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_6__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"]])], CurriculumAdditionalResourcesManageComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: LessonPlanManageComponent */

  /***/
  function srcAppSyllabusLessonTopicLessonPlanLessonPlanManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LessonPlanManageComponent", function () {
      return LessonPlanManageComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");

    var LessonPlanManageComponent =
    /*#__PURE__*/
    function () {
      function LessonPlanManageComponent() {
        _classCallCheck(this, LessonPlanManageComponent);
      }

      _createClass(LessonPlanManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LessonPlanManageComponent;
    }();

    LessonPlanManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lesson-plan-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_2__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LessonPlanManageComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: LessonTopicManageComponent */

  /***/
  function srcAppSyllabusLessonTopicLessonTopicLessonTopicManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LessonTopicManageComponent", function () {
      return LessonTopicManageComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../subject/subject.service */
    "./src/app/subject/subject.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../general-subject/general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LessonTopicManageComponent =
    /*#__PURE__*/
    function () {
      function LessonTopicManageComponent(_router, activatedRoute, curriculumService, subjectService, lessonTopicService, eventManager, parseLinks, principalService, pluginService, generalSubjectService, formBuilder) {
        _classCallCheck(this, LessonTopicManageComponent);

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
        this.enableExpandSubjectNode = false;
        this.enableExpandGSubjectNode = false;
        this.tableAction = true;
        this.updateAction = true;
        this.addToListAction = true;
      }

      _createClass(LessonTopicManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCurriculums();
          this.loadGeneralSubjectList();
          this.createLessonTopicForm();
        }
      }, {
        key: "createLessonTopicForm",
        value: function createLessonTopicForm() {
          this.lessonTopicForm = this.formBuilder.group({
            generalTopicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](""),
            newTopicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(75)])
          });
        }
      }, {
        key: "loadCurriculums",
        value: function loadCurriculums() {
          var _this36 = this;

          this.curriculumService.getCurriculumSearch().subscribe(function (res) {
            return _this36.assignCurriculumList(res.body);
          }, function (res) {
            return _this36.onError(res.message);
          });
        }
      }, {
        key: "assignCurriculumList",
        value: function assignCurriculumList(data) {
          this.curriculumList = [];

          for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.showSyllabusDetails();
          this.showGeneralSubjectTreeDetails();
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }

          this.selectedGrade = null;
          this.selectedSubject = null;
        }
      }, {
        key: "onGradeChange",
        value: function onGradeChange() {
          var _this37 = this;

          var curriculumId, gradeId, status;

          if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.subjectService.getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status).subscribe(function (res) {
              return _this37.assignSubjectList(res.body);
            }, function (res) {
              return _this37.onError(res.message);
            });
          }

          this.selectedSubject = null;
        }
      }, {
        key: "assignSubjectList",
        value: function assignSubjectList(data) {
          this.subjectList = [];

          for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
          }
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.gradeList = [];

          for (var i = min; i <= max; i++) {
            this.gradeList.push({
              "id": i,
              "name": i
            });
          }

          return this.gradeList;
        }
      }, {
        key: "loadSubjectTree",
        value: function loadSubjectTree() {
          var _this38 = this;

          if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);

            if (subjectId) {
              this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) {
                return _this38.assignSubjectTree(res.body);
              }, function (res) {
                return _this38.onError(res.message);
              });
            } else {
              this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
          }
        }
      }, {
        key: "assignSubjectTree",
        value: function assignSubjectTree(data) {
          this.subjectTree = data;
          this.pluginService.jsTree("#treeView", this.subjectTree, false);
          this.nodeType = "";
          this.enableExpandSubjectNode = false;
        }
      }, {
        key: "showSyllabusDetails",
        value: function showSyllabusDetails() {
          var localThisObj = this;
          $('#treeView').on('changed.jstree', function (e, data) {
            var i, j;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "unit") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "lesson") {
                localThisObj.lessonId = data.node.data.id;
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.objective;
                localThisObj.getLessonTopicList(localThisObj.lessonId);
              } else {}
            }
          });
        }
      }, {
        key: "getLessonTopicList",
        value: function getLessonTopicList(lessonId) {
          var _this39 = this;

          this.lessonTopicService.getLessonTopicListByLessonId(lessonId).subscribe(function (res) {
            return _this39.assignLessonTopicsList(res.body);
          }, function (res) {
            return _this39.onError(res.message);
          });
        }
      }, {
        key: "assignLessonTopicsList",
        value: function assignLessonTopicsList(data) {
          this.lessonTopicsList = [];
          this.lessonTopicsList = data.lessonTopics;

          for (var i = 0; i < this.lessonTopicsList.length; i++) {
            var topicId = this.lessonTopicsList[i].generalTopicId;
            var index = i;
            this.getTopicDetails(topicId, index);
          }

          this.sortArrayByOrderNumber(this.lessonTopicsList);
          this.updateAction = true;
          this.tableAction = true;
          this.topicIds = [];
          this.dragUpdateLessonTopicList();
        }
      }, {
        key: "getTopicDetails",
        value: function getTopicDetails(topicId, index) {
          var _this40 = this;

          this.lessonTopicService.getTopicDetailsByTopicId(topicId).subscribe(function (res) {
            return _this40.assignTopicDetailList(res.body, index);
          }, function (res) {
            return _this40.onError(res.message);
          });
        }
      }, {
        key: "assignTopicDetailList",
        value: function assignTopicDetailList(data, index) {
          var grade = data.baseGrade;
          this.lessonTopicsList[index].grade = grade;
        }
      }, {
        key: "sortArrayByOrderNumber",
        value: function sortArrayByOrderNumber(array) {
          array.sort(function (a, b) {
            return a.orderNumber > b.orderNumber ? 1 : -1;
          });
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.enableExpandSubjectNode = !this.enableExpandSubjectNode;

          if (this.enableExpandSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
          } else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
          }
        }
      }, {
        key: "checkSelectedTopics",
        value: function checkSelectedTopics(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = Number(event.target.title);

          if (checked === true) {
            this.tableAction = false;
            this.lessonTopicIds.push(selectedId);
          } else if (checked === false) {
            index = this.lessonTopicIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.lessonTopicIds.splice(index, 1);
          }

          this.lessonTopicIds = this.removeDuplicateElements(this.lessonTopicIds);

          if (this.lessonTopicIds.length <= 0) {
            this.tableAction = true;
          }
        }
      }, {
        key: "removeDuplicateElements",
        value: function removeDuplicateElements(array) {
          var temp = [];

          for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
              temp.push(array[i]);
            }
          }

          return temp;
        }
      }, {
        key: "deleteLessonTopics",
        value: function deleteLessonTopics() {
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
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(result) {
          var _this41 = this;

          result.subscribe(function (res) {
            return _this41.onDeleteSuccess(res);
          }, function (errRes) {
            return _this41.onDeleteError(errRes);
          });
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(res) {
          this.pluginService.alertMessage("Lesson topic deleted successfully", "success");
          this.tableAction = true;
          this.lessonTopicIds = [];
          this.getLessonTopicList(this.lessonId);
        }
      }, {
        key: "onDeleteError",
        value: function onDeleteError(errRes) {
          this.pluginService.alertMessage("Could not delete, please contact admin", "error");
        }
      }, {
        key: "resetSelectedTopic",
        value: function resetSelectedTopic() {
          this.lessonTopicIds = [];
          this.tableAction = true;
          $(".checkAll").prop("checked", false);
        }
      }, {
        key: "updateLessonTopicMapping",
        value: function updateLessonTopicMapping(lessonTopics) {
          this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
        }
      }, {
        key: "subscribeToUpdateResponse",
        value: function subscribeToUpdateResponse(result) {
          var _this42 = this;

          result.subscribe(function (res) {
            return _this42.onUpdateSuccess(res);
          }, function (errRes) {
            return _this42.onUpdateError(errRes);
          });
        }
      }, {
        key: "onUpdateSuccess",
        value: function onUpdateSuccess(res) {
          this.pluginService.alertMessage("Lesson topic mapping updated successfully", "success");
          this.getLessonTopicList(this.lessonId);
          this.closeEditLessonTopicModal();
        }
      }, {
        key: "onUpdateError",
        value: function onUpdateError(errRes) {
          this.pluginService.alertMessage("Could not update, please contact admin", "error");
        }
      }, {
        key: "dragUpdateLessonTopicList",
        value: function dragUpdateLessonTopicList() {
          var localThisObj = this;

          var fixHelperModified = function fixHelperModified(e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
              $(this).width($originals.eq(index).width());
            });
            return $helper;
          },
              updateIndex = function updateIndex(e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
              $(this).html(i + 1);
            });
            localThisObj.updateLessonTopicOrder();
          };

          $("#dragTable #dragBody").sortable({
            helper: fixHelperModified,
            stop: updateIndex
          });
          $("#dragBody").sortable({
            distance: 1,
            opacity: 0,
            delay: 10,
            cursor: "move",
            update: function update() {}
          });
        }
      }, {
        key: "updateLessonTopicOrder",
        value: function updateLessonTopicOrder() {
          var _this43 = this;

          this.updateAction = false;
          this.checkOrderNumChange = true;
          var table = document.querySelector('#dragTable');
          var rows = table.querySelectorAll('tbody tr');
          Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var topicMappingId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);

            for (var i = 0; i < _this43.lessonTopicsList.length; i++) {
              if (_this43.lessonTopicsList[i].id === topicMappingId) {
                _this43.lessonTopicsList[i].orderNumber = newOrderNum;
                _this43.lessonTopicsList[i].id = topicMappingId;
                break;
              }
            }

            _this43.sortArrayByOrderNumber(_this43.lessonTopicsList);
          });
        }
      }, {
        key: "updateLessonTopics",
        value: function updateLessonTopics() {
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
      }, {
        key: "addNewGeneralTopicMapping",
        value: function addNewGeneralTopicMapping() {
          this.generalSubTopicsList = [];
          this.selectedGeneralSubTopicsList = [];
          this.generalSubjectTree = [];
          this.selectedGeneralSubject = null;
          this.modalNodeType = "";
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
          this.openTopicMappingModal();
        }
      }, {
        key: "loadGeneralSubjectList",
        value: function loadGeneralSubjectList() {
          var _this44 = this;

          this.generalSubjectService.getSubjectSearchList().subscribe(function (res) {
            return _this44.assignGeneralSubjectList(res.body);
          }, function (res) {
            return _this44.onError(res.message);
          });
        }
      }, {
        key: "assignGeneralSubjectList",
        value: function assignGeneralSubjectList(data) {
          this.generalSubjectList = data;
        }
      }, {
        key: "loadGeneralSubjectTree",
        value: function loadGeneralSubjectTree() {
          var _this45 = this;

          this.generalSubjectTree = [];
          this.modalNodeType = "";
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);

          if (this.selectedGeneralSubject) {
            var generalSubjectId = this.selectedGeneralSubject.id;
            this.generalSubjectService.getSubjectTreeBySubjectId(generalSubjectId).subscribe(function (res) {
              return _this45.assignGeneralSubjectTree(res.body);
            }, function (res) {
              return _this45.onError(res.message);
            });
          }
        }
      }, {
        key: "assignGeneralSubjectTree",
        value: function assignGeneralSubjectTree(data) {
          this.generalSubjectTree = data;
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
          this.enableExpandGSubjectNode = false;
        }
      }, {
        key: "showGeneralSubjectTreeDetails",
        value: function showGeneralSubjectTreeDetails() {
          var localThisObj = this;
          $('#generalSubjectTreeView').on('changed.jstree', function (e, data) {
            var i, j, conceptId;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.modalNodeType = data.node.type;

              if (localThisObj.modalNodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.modalNodeType === "concept") {
                conceptId = data.node.id;
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.topicIds = [];
                this.addToListAction = true;
                localThisObj.getTopicsList(conceptId);
              } else if (localThisObj.modalNodeType === "topic") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else {}
            }
          });
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList(conceptId) {
          var conceptChildrenList;
          conceptChildrenList = this.generalSubjectTree.filter(function (item) {
            return item.parent === conceptId;
          });
          this.generalSubTopicsList = conceptChildrenList.filter(function (item) {
            return item.type === 'topic';
          });
          this.disablePreSelectedTopics();
        }
      }, {
        key: "disablePreSelectedTopics",
        value: function disablePreSelectedTopics() {
          if (this.lessonTopicsList.length > 0) {
            for (var i = 0; i < this.lessonTopicsList.length; i++) {
              for (var j = 0; j < this.generalSubTopicsList.length; j++) {
                if (this.lessonTopicsList[i].generalTopicId === this.generalSubTopicsList[j].data.id) {
                  this.generalSubTopicsList[j].disabled = true;
                }
              }
            }
          }
        }
      }, {
        key: "checkNewlyAddedTopics",
        value: function checkNewlyAddedTopics(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = event.target.name;

          if (checked === true) {
            this.topicIds.push(selectedId);
            this.addToListAction = false;
          } else if (checked === false) {
            index = this.topicIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.topicIds.splice(index, 1);
          }

          this.topicIds = this.removeDuplicateElements(this.topicIds);
        }
      }, {
        key: "addTopicToList",
        value: function addTopicToList() {
          var _this46 = this;

          var _loop5 = function _loop5(i) {
            _this46.selectedGeneralSubTopicsList.push(_this46.generalSubTopicsList.find(function (item) {
              return item.id === _this46.topicIds[i];
            }));
          };

          for (var i = 0; i < this.topicIds.length; i++) {
            _loop5(i);
          }

          this.selectedGeneralSubTopicsList = this.removeDuplicateElements(this.selectedGeneralSubTopicsList);
          this.addToListAction = true;
        }
      }, {
        key: "removeFromNewTopicList",
        value: function removeFromNewTopicList(id) {
          var topicIndex;

          if (this.selectedGeneralSubTopicsList.length > 0) {
            topicIndex = this.selectedGeneralSubTopicsList.findIndex(function (item) {
              return item.id === id;
            });
            this.selectedGeneralSubTopicsList.splice(topicIndex, 1);
          } else {
            this.selectedGeneralSubTopicsList = [];
          }
        }
      }, {
        key: "toggleGeneralSubjectTreeNodes",
        value: function toggleGeneralSubjectTreeNodes() {
          this.enableExpandGSubjectNode = !this.enableExpandGSubjectNode;

          if (this.enableExpandGSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#generalSubjectTreeView");
          } else {
            this.pluginService.closeJsTreeAllNodes("#generalSubjectTreeView");
          }
        }
      }, {
        key: "saveLessonTopicMapping",
        value: function saveLessonTopicMapping() {
          var newLessonTopicsList = [];

          for (var i = 0; i < this.selectedGeneralSubTopicsList.length; i++) {
            newLessonTopicsList.push({
              generalTopicId: this.selectedGeneralSubTopicsList[i].data.id,
              topicName: this.selectedGeneralSubTopicsList[i].data.name,
              generalTopicName: this.selectedGeneralSubTopicsList[i].data.name,
              lessonId: this.lessonId,
              orderNumber: this.lessonTopicsList.length + i + 1
            });
          }

          if (newLessonTopicsList.length > 0) {
            this.subscribeToSaveResponse(this.lessonTopicService.saveLessonTopicMapping(newLessonTopicsList));
          }
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this47 = this;

          result.subscribe(function (res) {
            return _this47.onSaveSuccess(res);
          }, function (errRes) {
            return _this47.onSaveError(errRes);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("Lesson topic mapped successfully", "success");
          this.closeTopicMappingModal();
          this.getLessonTopicList(this.lessonId);
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
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
        key: "editLessonTopic",
        value: function editLessonTopic(lessonTopicId) {
          var lessonTopic = this.lessonTopicsList.filter(function (item) {
            return item.id === lessonTopicId;
          })[0];
          this.lessonTopicId = lessonTopicId;
          this.lessonTopicForm.setValue({
            generalTopicName: lessonTopic.generalTopicName,
            newTopicName: lessonTopic.topicName
          });
          this.lessonTopicForm.get('generalTopicName').disable();
          this.openEditLessonTopicModal();
        }
      }, {
        key: "closeWithOutSavingTopicMapping",
        value: function closeWithOutSavingTopicMapping() {
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
      }, {
        key: "openEditLessonTopicModal",
        value: function openEditLessonTopicModal() {
          this.pluginService.showModalWindow("#editLessonTopicModal");
        }
      }, {
        key: "closeEditLessonTopicModal",
        value: function closeEditLessonTopicModal() {
          this.pluginService.hideModalWindow("#editLessonTopicModal");
        }
      }, {
        key: "closeWithOutSavingTopicName",
        value: function closeWithOutSavingTopicName() {
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
      }, {
        key: "updateLessonTopicName",
        value: function updateLessonTopicName() {
          var _this48 = this;

          var lessonTopic = {},
              lessonTopics = [];
          lessonTopic = this.lessonTopicsList.filter(function (item) {
            return item.id === _this48.lessonTopicId;
          })[0];
          lessonTopic.topicName = this.trimValue(this.lessonTopicForm.get('newTopicName').value);
          lessonTopics.push(lessonTopic);
          this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
        }
      }, {
        key: "onUpdateLessonTopicError",
        value: function onUpdateLessonTopicError(errRes) {
          this.pluginService.alertMessage("Could not update, please contact admin", "error");
        }
      }, {
        key: "resetEditLessonTopicModal",
        value: function resetEditLessonTopicModal() {
          var _this49 = this;

          var lessonTopic = this.lessonTopicsList.filter(function (item) {
            return item.id === _this49.lessonTopicId;
          })[0];
          this.lessonTopicForm.setValue({
            generalTopicName: lessonTopic.generalTopicName,
            newTopicName: lessonTopic.topicName
          });
          this.lessonTopicForm.get('generalTopicName').disable();
        }
      }, {
        key: "openTopicMappingModal",
        value: function openTopicMappingModal() {
          this.pluginService.showModalWindow("#addNewTopicMappingModal");
        }
      }, {
        key: "closeTopicMappingModal",
        value: function closeTopicMappingModal() {
          this.pluginService.hideModalWindow("#addNewTopicMappingModal");
        }
      }]);

      return LessonTopicManageComponent;
    }();

    LessonTopicManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"]
      }, {
        type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]
      }, {
        type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
      }];
    };

    LessonTopicManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lesson-topic-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_8__["CurriculumService"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_5__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"], _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]])], LessonTopicManageComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: PrerequisiteLessonTopicManageComponent */

  /***/
  function srcAppSyllabusLessonTopicPrerequisiteLessonTopicPrerequisiteLessonTopicManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrerequisiteLessonTopicManageComponent", function () {
      return PrerequisiteLessonTopicManageComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../subject/subject.service */
    "./src/app/subject/subject.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../general-subject/general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");

    var PrerequisiteLessonTopicManageComponent =
    /*#__PURE__*/
    function () {
      function PrerequisiteLessonTopicManageComponent(_router, activatedRoute, curriculumService, subjectService, lessonTopicService, eventManager, parseLinks, principalService, generalSubjectService, pluginService) {
        _classCallCheck(this, PrerequisiteLessonTopicManageComponent);

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
        this.enableExpandSubjectNode = false;
        this.enableExpandGSubjectNode = false;
        this.addToListAction = true;
        this.tableAction = true;
        this.updateAction = true;
      }

      _createClass(PrerequisiteLessonTopicManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCurriculums();
          this.loadGeneralSubjectList();
        }
      }, {
        key: "loadCurriculums",
        value: function loadCurriculums() {
          var _this50 = this;

          this.curriculumService.getCurriculumSearch().subscribe(function (res) {
            return _this50.assignCurriculumList(res.body);
          }, function (res) {
            return _this50.onError(res.message);
          });
        }
      }, {
        key: "assignCurriculumList",
        value: function assignCurriculumList(data) {
          this.curriculumList = [];

          for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.showSyllabusDetails();
          this.showGeneralSubjectTreeDetails();
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }

          this.selectedGrade = null;
          this.selectedSubject = null;
        }
      }, {
        key: "onGradeChange",
        value: function onGradeChange() {
          var _this51 = this;

          var curriculumId, gradeId, status;

          if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.subjectService.getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status).subscribe(function (res) {
              return _this51.assignSubjectList(res.body);
            }, function (res) {
              return _this51.onError(res.message);
            });
          }

          this.selectedSubject = null;
        }
      }, {
        key: "assignSubjectList",
        value: function assignSubjectList(data) {
          this.subjectList = [];

          for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
          }
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.gradeList = [];

          for (var i = min; i <= max; i++) {
            this.gradeList.push({
              "id": i,
              "name": i
            });
          }

          return this.gradeList;
        }
      }, {
        key: "loadSubjectTree",
        value: function loadSubjectTree() {
          var _this52 = this;

          if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);

            if (subjectId) {
              this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) {
                return _this52.assignSubjectTree(res.body);
              }, function (res) {
                return _this52.onError(res.message);
              });
            } else {
              this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
          }
        }
      }, {
        key: "assignSubjectTree",
        value: function assignSubjectTree(data) {
          this.subjectTree = data;
          this.pluginService.jsTree("#treeView", this.subjectTree, false);
          this.enableExpandSubjectNode = false;
        }
      }, {
        key: "showSyllabusDetails",
        value: function showSyllabusDetails() {
          var localThisObj = this;
          $('#treeView').on('changed.jstree', function (e, data) {
            var i, j;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "unit") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "lesson") {
                localThisObj.lessonId = data.node.data.id;
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.objective;
                localThisObj.getLessonTopicList(localThisObj.lessonId);
              } else {}
            }
          });
        }
      }, {
        key: "getLessonTopicList",
        value: function getLessonTopicList(lessonId) {
          var _this53 = this;

          this.lessonTopicService.getLessonTopicListByLessonId(lessonId).subscribe(function (res) {
            return _this53.assignLessonTopicsList(res.body);
          }, function (res) {
            return _this53.onError(res.message);
          });
        }
      }, {
        key: "assignLessonTopicsList",
        value: function assignLessonTopicsList(data) {
          this.lessonTopicsList = [];
          this.lessonTopicsList = data.lessonPreReqTopics;

          for (var i = 0; i < this.lessonTopicsList.length; i++) {
            var topicId = this.lessonTopicsList[i].topicId;
            var index = i;
            this.getTopicDetails(topicId, index);
          }

          this.sortArrayByOrderNumber(this.lessonTopicsList);
          this.dragUpdateLessonTopicList();
          this.tableAction = true;
          this.updateAction = true;
          this.topicIds = [];
        }
      }, {
        key: "getTopicDetails",
        value: function getTopicDetails(topicId, index) {
          var _this54 = this;

          this.lessonTopicService.getTopicDetailsByTopicId(topicId).subscribe(function (res) {
            return _this54.assignTopicDetailList(res.body, index);
          }, function (res) {
            return _this54.onError(res.message);
          });
        }
      }, {
        key: "assignTopicDetailList",
        value: function assignTopicDetailList(data, index) {
          var grade = data.baseGrade;
          this.lessonTopicsList[index].grade = grade;
        }
      }, {
        key: "sortArrayByOrderNumber",
        value: function sortArrayByOrderNumber(array) {
          array.sort(function (a, b) {
            return a.orderNumber > b.orderNumber ? 1 : -1;
          });
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.enableExpandSubjectNode = !this.enableExpandSubjectNode;

          if (this.enableExpandSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#treeView");
          } else {
            this.pluginService.closeJsTreeAllNodes("#treeView");
          }
        }
      }, {
        key: "checkSelectedTopics",
        value: function checkSelectedTopics(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = Number(event.target.title);

          if (checked === true) {
            this.tableAction = false;
            this.lessonTopicIds.push(selectedId);
          } else if (checked === false) {
            index = this.lessonTopicIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.lessonTopicIds.splice(index, 1);
          }

          this.lessonTopicIds = this.removeDuplicateElements(this.lessonTopicIds);

          if (this.lessonTopicIds.length <= 0) {
            this.tableAction = true;
          }
        }
      }, {
        key: "removeDuplicateElements",
        value: function removeDuplicateElements(array) {
          var temp = [];

          for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
              temp.push(array[i]);
            }
          }

          return temp;
        }
      }, {
        key: "deleteLessonTopics",
        value: function deleteLessonTopics() {
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
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(result) {
          var _this55 = this;

          result.subscribe(function (res) {
            return _this55.onDeleteSuccess(res);
          }, function (errRes) {
            return _this55.onDeleteError(errRes);
          });
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(res) {
          this.pluginService.alertMessage("Lesson topic deleted successfully", "success");
          this.tableAction = true;
          this.lessonTopicIds = [];
          this.getLessonTopicList(this.lessonId);
        }
      }, {
        key: "onDeleteError",
        value: function onDeleteError(errRes) {
          this.pluginService.alertMessage("Could not delete, please contact admin", "error");
        }
      }, {
        key: "resetSelectedTopic",
        value: function resetSelectedTopic() {
          this.lessonTopicIds = [];
          this.tableAction = true;
          $(".checkAll").prop("checked", false);
        }
      }, {
        key: "updateLessonTopicMapping",
        value: function updateLessonTopicMapping(lessonTopics) {
          this.subscribeToUpdateResponse(this.lessonTopicService.updateLessonTopicMapping(lessonTopics));
        }
      }, {
        key: "subscribeToUpdateResponse",
        value: function subscribeToUpdateResponse(result) {
          var _this56 = this;

          result.subscribe(function (res) {
            return _this56.onUpdateSuccess(res);
          }, function (errRes) {
            return _this56.onUpdateError(errRes);
          });
        }
      }, {
        key: "onUpdateSuccess",
        value: function onUpdateSuccess(res) {
          this.pluginService.alertMessage("Lesson topic mapping updated successfully", "success");
          this.getLessonTopicList(this.lessonId);
        }
      }, {
        key: "onUpdateError",
        value: function onUpdateError(errRes) {
          this.pluginService.alertMessage("Could not update, please contact admin", "error");
        }
      }, {
        key: "dragUpdateLessonTopicList",
        value: function dragUpdateLessonTopicList() {
          var localThisObj = this;

          var fixHelperModified = function fixHelperModified(e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
              $(this).width($originals.eq(index).width());
            });
            return $helper;
          },
              updateIndex = function updateIndex(e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
              $(this).html(i + 1);
            });
            localThisObj.updateLessonTopicOrder();
          };

          $("#dragTable #dragBody").sortable({
            helper: fixHelperModified,
            stop: updateIndex
          });
          $("#dragBody").sortable({
            distance: 1,
            opacity: 0,
            delay: 10,
            cursor: "move",
            update: function update() {}
          });
        }
      }, {
        key: "updateLessonTopicOrder",
        value: function updateLessonTopicOrder() {
          var _this57 = this;

          this.updateAction = false;
          this.checkOrderNumChange = true;
          var table = document.querySelector('#dragTable');
          var rows = table.querySelectorAll('tbody tr');
          Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var topicMappingId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);

            for (var i = 0; i < _this57.lessonTopicsList.length; i++) {
              if (_this57.lessonTopicsList[i].id === topicMappingId) {
                _this57.lessonTopicsList[i].orderNumber = newOrderNum;
                _this57.lessonTopicsList[i].id = topicMappingId;
                break;
              }
            }

            _this57.sortArrayByOrderNumber(_this57.lessonTopicsList);
          });
        }
      }, {
        key: "updateLessonTopics",
        value: function updateLessonTopics() {
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
      }, {
        key: "addNewGeneralTopicMapping",
        value: function addNewGeneralTopicMapping() {
          this.generalSubTopicsList = [];
          this.selectedGeneralSubTopicsList = [];
          this.generalSubjectTree = [];
          this.selectedGeneralSubject = null;
          this.modalNodeType = "";
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
          this.openTopicMappingModal();
        }
      }, {
        key: "loadGeneralSubjectList",
        value: function loadGeneralSubjectList() {
          var _this58 = this;

          this.generalSubjectService.getSubjectSearchList().subscribe(function (res) {
            return _this58.assignGeneralSubjectList(res.body);
          }, function (res) {
            return _this58.onError(res.message);
          });
        }
      }, {
        key: "assignGeneralSubjectList",
        value: function assignGeneralSubjectList(data) {
          this.generalSubjectList = data;
        }
      }, {
        key: "loadGeneralSubjectTree",
        value: function loadGeneralSubjectTree() {
          var _this59 = this;

          this.generalSubjectTree = [];
          this.modalNodeType = "";
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);

          if (this.selectedGeneralSubject) {
            var generalSubjectId = this.selectedGeneralSubject.id;
            this.generalSubjectService.getSubjectTreeBySubjectId(generalSubjectId).subscribe(function (res) {
              return _this59.assignGeneralSubjectTree(res.body);
            }, function (res) {
              return _this59.onError(res.message);
            });
          }
        }
      }, {
        key: "assignGeneralSubjectTree",
        value: function assignGeneralSubjectTree(data) {
          this.generalSubjectTree = data;
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
          this.enableExpandGSubjectNode = false;
        }
      }, {
        key: "showGeneralSubjectTreeDetails",
        value: function showGeneralSubjectTreeDetails() {
          var localThisObj = this;
          $('#generalSubjectTreeView').on('changed.jstree', function (e, data) {
            var i, j, conceptId;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.modalNodeType = data.node.type;

              if (localThisObj.modalNodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.modalNodeType === "concept") {
                conceptId = data.node.id;
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.topicIds = [];
                localThisObj.getTopicsList(conceptId);
              } else if (localThisObj.modalNodeType === "topic") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else {}
            }
          });
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList(conceptId) {
          var conceptChildrenList;
          conceptChildrenList = this.generalSubjectTree.filter(function (item) {
            return item.parent === conceptId;
          });
          this.generalSubTopicsList = conceptChildrenList.filter(function (item) {
            return item.type === 'topic';
          });
          this.disablePreSelectedTopics();
          this.addToListAction = true;
        }
      }, {
        key: "disablePreSelectedTopics",
        value: function disablePreSelectedTopics() {
          if (this.lessonTopicsList.length > 0) {
            for (var i = 0; i < this.lessonTopicsList.length; i++) {
              for (var j = 0; j < this.generalSubTopicsList.length; j++) {
                if (this.lessonTopicsList[i].topicId === this.generalSubTopicsList[j].data.id) {
                  this.generalSubTopicsList[j].disabled = true;
                }
              }
            }
          }
        }
      }, {
        key: "checkNewlyAddedTopics",
        value: function checkNewlyAddedTopics(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = event.target.name;

          if (checked === true) {
            this.topicIds.push(selectedId);
            this.addToListAction = false;
          } else if (checked === false) {
            index = this.topicIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.topicIds.splice(index, 1);
          }

          this.topicIds = this.removeDuplicateElements(this.topicIds);
        }
      }, {
        key: "addTopicToList",
        value: function addTopicToList() {
          var _this60 = this;

          var _loop6 = function _loop6(i) {
            _this60.selectedGeneralSubTopicsList.push(_this60.generalSubTopicsList.find(function (item) {
              return item.id === _this60.topicIds[i];
            }));
          };

          for (var i = 0; i < this.topicIds.length; i++) {
            _loop6(i);
          }

          this.selectedGeneralSubTopicsList = this.removeDuplicateElements(this.selectedGeneralSubTopicsList);
          this.addToListAction = true;
        }
      }, {
        key: "removeFromNewTopicList",
        value: function removeFromNewTopicList(id) {
          var topicIndex;

          if (this.selectedGeneralSubTopicsList.length > 0) {
            topicIndex = this.selectedGeneralSubTopicsList.findIndex(function (item) {
              return item.id === id;
            });
            this.selectedGeneralSubTopicsList.splice(topicIndex, 1);
          } else {
            this.selectedGeneralSubTopicsList = [];
          }
        }
      }, {
        key: "toggleGeneralSubjectTreeNodes",
        value: function toggleGeneralSubjectTreeNodes() {
          this.enableExpandGSubjectNode = !this.enableExpandGSubjectNode;

          if (this.enableExpandGSubjectNode) {
            this.pluginService.openJsTreeAllNodes("#generalSubjectTreeView");
          } else {
            this.pluginService.closeJsTreeAllNodes("#generalSubjectTreeView");
          }
        }
      }, {
        key: "saveLessonTopicMapping",
        value: function saveLessonTopicMapping() {
          var newLessonTopicsList = [];

          for (var i = 0; i < this.selectedGeneralSubTopicsList.length; i++) {
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
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this61 = this;

          result.subscribe(function (res) {
            return _this61.onSaveSuccess(res);
          }, function (errRes) {
            return _this61.onSaveError(errRes);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("Lesson topic mapped successfully", "success");
          this.closeTopicMappingModal();
          this.getLessonTopicList(this.lessonId);
          this.pluginService.jsTree("#generalSubjectTreeView", this.generalSubjectTree, false);
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "openTopicMappingModal",
        value: function openTopicMappingModal() {
          this.pluginService.showModalWindow("#addNewPrereqTopicMappingModal");
        }
      }, {
        key: "closeTopicMappingModal",
        value: function closeTopicMappingModal() {
          this.pluginService.hideModalWindow("#addNewPrereqTopicMappingModal");
        }
      }, {
        key: "closeWithOutSavingTopicMapping",
        value: function closeWithOutSavingTopicMapping() {
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
      }]);

      return PrerequisiteLessonTopicManageComponent;
    }();

    PrerequisiteLessonTopicManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"]
      }, {
        type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"]
      }, {
        type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]
      }];
    };

    PrerequisiteLessonTopicManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prerequisite-lesson-topic-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_5__["Principal"], _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_10__["GeneralSubjectService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]])], PrerequisiteLessonTopicManageComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SyllabusLessonTopicModule */

  /***/
  function srcAppSyllabusLessonTopicSyllabusLessonTopicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicModule", function () {
      return SyllabusLessonTopicModule;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _syllabus_lesson_topic_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./syllabus-lesson-topic.route */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts");
    /* harmony import */


    var _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lesson-topic/lesson-topic-manage.component */
    "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts");
    /* harmony import */


    var _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component */
    "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts");
    /* harmony import */


    var _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./topic-content/topic-content-manage.component */
    "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts");
    /* harmony import */


    var _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./topic-question/topic-question-manage.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts");
    /* harmony import */


    var _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./addl-resource/addl-resource-manage.component */
    "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts");
    /* harmony import */


    var _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./topic-question/topic-question-create.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts");
    /* harmony import */


    var _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../question-builder/question-builder.module */
    "./src/app/question-builder/question-builder.module.ts");
    /* harmony import */


    var _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./topic-question/topic-question-details.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
    /* harmony import */


    var _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./topic-question/topic-question-update.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
    /* harmony import */


    var _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./lesson-plan/lesson-plan-manage.component */
    "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts");

    var SyllabusLessonTopicModule = function SyllabusLessonTopicModule() {
      _classCallCheck(this, SyllabusLessonTopicModule);
    };

    SyllabusLessonTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_15__["QuestionBuilderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["NgJhipsterModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_syllabus_lesson_topic_route__WEBPACK_IMPORTED_MODULE_8__["syllabusLessonTopicRoute"])],
      declarations: [_lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_9__["LessonTopicManageComponent"], _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_10__["PrerequisiteLessonTopicManageComponent"], _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_18__["LessonPlanManageComponent"], _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumTopicContentManageComponent"], _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumTopicQuestionManageComponent"], _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_14__["CurriculumTopicQuestionCreateComponent"], _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumTopicQuestionDetailsComponent"], _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_17__["CurriculumTopicQuestionUpdateComponent"], _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_13__["CurriculumAdditionalResourcesManageComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      exports: [_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumTopicQuestionDetailsComponent"], _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_17__["CurriculumTopicQuestionUpdateComponent"]]
    })], SyllabusLessonTopicModule);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.route.ts ***!
    \**********************************************************************/

  /*! exports provided: syllabusLessonTopicRoute */

  /***/
  function srcAppSyllabusLessonTopicSyllabusLessonTopicRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "syllabusLessonTopicRoute", function () {
      return syllabusLessonTopicRoute;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lesson-topic/lesson-topic-manage.component */
    "./src/app/syllabus-lesson-topic/lesson-topic/lesson-topic-manage.component.ts");
    /* harmony import */


    var _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component */
    "./src/app/syllabus-lesson-topic/prerequisite-lesson-topic/prerequisite-lesson-topic-manage.component.ts");
    /* harmony import */


    var _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./topic-content/topic-content-manage.component */
    "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts");
    /* harmony import */


    var _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./topic-question/topic-question-manage.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts");
    /* harmony import */


    var _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addl-resource/addl-resource-manage.component */
    "./src/app/syllabus-lesson-topic/addl-resource/addl-resource-manage.component.ts");
    /* harmony import */


    var _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./topic-question/topic-question-create.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts");
    /* harmony import */


    var _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../question-builder/matchlist/matchlist.component */
    "./src/app/question-builder/matchlist/matchlist.component.ts");
    /* harmony import */


    var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../question-builder/mcq-choicematrix */
    "./src/app/question-builder/mcq-choicematrix/index.ts");
    /* harmony import */


    var _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../question-builder/mcq-standard */
    "./src/app/question-builder/mcq-standard/index.ts");
    /* harmony import */


    var _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./topic-question/topic-question-details.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
    /* harmony import */


    var _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./topic-question/topic-question-update.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
    /* harmony import */


    var _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../question-builder/cloze/drag-n-drop/drag-n-drop.component */
    "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
    /* harmony import */


    var _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./lesson-plan/lesson-plan-manage.component */
    "./src/app/syllabus-lesson-topic/lesson-plan/lesson-plan-manage.component.ts");

    var syllabusLessonTopicRoute = [{
      path: "",
      redirectTo: "lesson-topic-manage",
      pathMatch: "full"
    }, {
      path: "lesson-topic-manage",
      component: _lesson_topic_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_2__["LessonTopicManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage lesson topics'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: "prerequisite-lesson-topic-manage",
      component: _prerequisite_lesson_topic_prerequisite_lesson_topic_manage_component__WEBPACK_IMPORTED_MODULE_3__["PrerequisiteLessonTopicManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage prerequisite lesson topics'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: "topic-content",
      component: _topic_content_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_4__["CurriculumTopicContentManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage topic content'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: "topic-question",
      component: _topic_question_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumTopicQuestionManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage topic questions'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: ":id/topic-question-create",
      component: _topic_question_topic_question_create_component__WEBPACK_IMPORTED_MODULE_7__["CurriculumTopicQuestionCreateComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Create new topic question'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]],
      children: [{
        path: 'mcqstandard',
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__["MCQStandardComponent"],
        data: {
          type: "MCQ_SINGLE",
          title: "Create"
        }
      }, {
        path: "mcqmultiple",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__["MCQStandardComponent"],
        data: {
          type: "MCQ_MULTIPLE",
          mode: "Create"
        }
      }, {
        path: "mcqtruefalse",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_10__["MCQStandardComponent"],
        data: {
          type: "MCQ_TRUE_FALSE",
          title: "Create"
        }
      }, {
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
      }, {
        path: "clozedrag",
        component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_13__["DragAndDropComponent"],
        data: {
          title: "Create",
          type: "mcq-drag"
        }
      }]
    }, {
      path: ":id/topic-question-edit",
      component: _topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_12__["CurriculumTopicQuestionUpdateComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Edit topic question'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: ":id/topic-question-view",
      component: _topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumTopicQuestionDetailsComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'View topic question'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: "additional-resources",
      component: _addl_resource_addl_resource_manage_component__WEBPACK_IMPORTED_MODULE_6__["CurriculumAdditionalResourcesManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage additional lesson resources'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: "lesson-plans",
      component: _lesson_plan_lesson_plan_manage_component__WEBPACK_IMPORTED_MODULE_14__["LessonPlanManageComponent"],
      data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Manage lesson plan'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }];
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts ***!
    \************************************************************************/

  /*! exports provided: SyllabusLessonTopicService */

  /***/
  function srcAppSyllabusLessonTopicSyllabusLessonTopicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SyllabusLessonTopicService", function () {
      return SyllabusLessonTopicService;
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

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var SyllabusLessonTopicService =
    /*#__PURE__*/
    function () {
      function SyllabusLessonTopicService(http) {
        _classCallCheck(this, SyllabusLessonTopicService);

        this.http = http;
        this.lessonAllDetailsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lessons/all-details';
        this.lessonTopicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lesson-topics';
        this.prerequisiteLessonTopicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lesson-pre-req-topics';
        this.orgGeneralTopicContentSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents/search';
        this.orgGeneralTopicContentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents';
        this.orgGeneralTopicQuestionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions';
        this.topicAllDetailsResouceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topics/all-details';
        this.contentPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents/set-content-preference';
        this.getContentPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-contents/get-org-content-preference';
        this.orgGeneralTopicQuestionSearchResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions/search';
        this.orgQuestionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions/set-org-questions-preference';
        this.questionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/questions';
        this.getQuestionPreferenceResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/org-general-topic-questions/get-org-questions-preference';
        this.addlResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/lesson-addl-contents';
        this.orgAddlResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/org-lesson-addl-contents';
        this.getAddlResourcePreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/org-lesson-addl-contents/get-org-content-preference';
        this.setAddlResourcePreferenceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/learning/api/org-lesson-addl-contents/set-content-preference';
        this.contentResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/contents';
        this.topicResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + 'services/content/api/general-topics';
      }

      _createClass(SyllabusLessonTopicService, [{
        key: "getLessonTopicListByLessonId",
        value: function getLessonTopicListByLessonId(id) {
          return this.http.get("".concat(this.lessonAllDetailsResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getLessonTopicListByLessonTopicId",
        value: function getLessonTopicListByLessonTopicId(id) {
          return this.http.get("".concat(this.lessonTopicResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getTopicDetailsByTopicId",
        value: function getTopicDetailsByTopicId(id) {
          return this.http.get("".concat(this.topicResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "updateLessonTopicMapping",
        value: function updateLessonTopicMapping(lessonTopic) {
          return this.http.put(this.lessonTopicResourceUrl, lessonTopic, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "saveLessonTopicMapping",
        value: function saveLessonTopicMapping(topicMapping) {
          return this.http.post(this.lessonTopicResourceUrl, topicMapping, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "deleteLessonTopicMapping",
        value: function deleteLessonTopicMapping(topicIds) {
          return this.http["delete"]("".concat(this.lessonTopicResourceUrl, "/", "batch", "/").concat(topicIds), {
            observe: 'response'
          });
        }
      }, {
        key: "updatePrerequisiteLessonTopicMapping",
        value: function updatePrerequisiteLessonTopicMapping(lessonTopic) {
          return this.http.put(this.prerequisiteLessonTopicResourceUrl, lessonTopic, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "savePrerequisiteLessonTopicMapping",
        value: function savePrerequisiteLessonTopicMapping(topicMapping) {
          return this.http.post(this.prerequisiteLessonTopicResourceUrl, topicMapping, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "deletePrerequisiteLessonTopicMapping",
        value: function deletePrerequisiteLessonTopicMapping(topicIds) {
          return this.http["delete"]("".concat(this.prerequisiteLessonTopicResourceUrl, "/", "batch", "/").concat(topicIds), {
            observe: 'response'
          });
        }
      }, {
        key: "getTopicDetails",
        value: function getTopicDetails(id) {
          return this.http.get("".concat(this.topicAllDetailsResouceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getOrgGeneralTopicContentsByOrgId",
        value: function getOrgGeneralTopicContentsByOrgId(topicId, organisationId) {
          var reqJSON = {
            "generalTopicId": topicId,
            "organisationId": organisationId
          };
          return this.http.post(this.orgGeneralTopicContentSearchResourceUrl, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "getOrgGeneralTopicQuestionsByOrgId",
        value: function getOrgGeneralTopicQuestionsByOrgId(topicId, organisationId) {
          var reqJSON = {
            "generalTopicId": topicId,
            "organisationId": organisationId
          };
          return this.http.post(this.orgGeneralTopicQuestionSearchResourceUrl, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "setContentPreference",
        value: function setContentPreference(isActive, generalTopicId, organisationId) {
          var reqJSON = {
            "active": isActive,
            "generalTopicId": generalTopicId,
            "organisationId": organisationId
          };
          return this.http.put(this.contentPreferenceResourceUrl, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "getContentPreference",
        value: function getContentPreference(organisationId, generalTopicId) {
          var reqJSON = {
            organisationId: organisationId,
            generalTopicId: generalTopicId
          };
          return this.http.post(this.getContentPreferenceResourceUrl, reqJSON, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "setQuestionPreference",
        value: function setQuestionPreference(isActive, generalTopicId, organisationId) {
          var reqJSON = {
            "active": isActive,
            "generalTopicId": generalTopicId,
            "organisationId": organisationId
          };
          return this.http.put(this.orgQuestionPreferenceResourceUrl, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "getQuestionPreference",
        value: function getQuestionPreference(orgId, topicId) {
          var reqJSON = {
            organisationId: orgId,
            generalTopicId: topicId
          };
          return this.http.post(this.getQuestionPreferenceResourceUrl, reqJSON, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "saveOwnTopicContent",
        value: function saveOwnTopicContent(ownGeneralTopicContents) {
          return this.http.post(this.orgGeneralTopicContentResourceUrl, ownGeneralTopicContents, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "updateOwnTopicContents",
        value: function updateOwnTopicContents(ownGeneralTopicContents) {
          return this.http.put(this.orgGeneralTopicContentResourceUrl, ownGeneralTopicContents, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "updateContentSource",
        value: function updateContentSource(ownGeneralTopicContent) {
          return this.http.put(this.contentResourceUrl, ownGeneralTopicContent, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "deleteOwnTopicContents",
        value: function deleteOwnTopicContents(contentIds) {
          return this.http["delete"]("".concat(this.orgGeneralTopicContentResourceUrl, "/", "batch", "/").concat(contentIds), {
            observe: 'response'
          });
        }
      }, {
        key: "deleteOwnTopicQuestions",
        value: function deleteOwnTopicQuestions(questionIds) {
          return this.http["delete"]("".concat(this.orgGeneralTopicQuestionResourceUrl, "/", "batch", "/").concat(questionIds), {
            observe: 'response'
          });
        }
      }, {
        key: "saveOwnTopicQuestion",
        value: function saveOwnTopicQuestion(ownGeneralTopicQuestion) {
          return this.http.post(this.orgGeneralTopicQuestionResourceUrl, ownGeneralTopicQuestion, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "getQuestionByQuestionId",
        value: function getQuestionByQuestionId(id) {
          return this.http.get("".concat(this.questionPreferenceResourceUrl, "/").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "updateQuestion",
        value: function updateQuestion(question) {
          return this.http.put(this.questionPreferenceResourceUrl, question, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "getAddlResource",
        value: function getAddlResource(lessonId) {
          var reqJSON = {
            lessonId: lessonId
          };
          return this.http.post(this.addlResourceUrl + '/search', reqJSON, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "saveAddlResource",
        value: function saveAddlResource(addlResource) {
          return this.http.post(this.addlResourceUrl, addlResource, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "updateAddlResource",
        value: function updateAddlResource(addlResources) {
          return this.http.put(this.addlResourceUrl, addlResources, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "deleteAddlResource",
        value: function deleteAddlResource(resourceIds) {
          return this.http["delete"]("".concat(this.addlResourceUrl, "/").concat(resourceIds), {
            observe: 'response'
          });
        }
      }, {
        key: "getOrgGeneralAddlResourceByOrganisationId",
        value: function getOrgGeneralAddlResourceByOrganisationId(lessonId, organisationId) {
          var reqJSON = {
            lessonId: lessonId,
            organisationId: organisationId
          };
          return this.http.post(this.orgAddlResourceUrl + '/search', reqJSON, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "saveOwnAddlResource",
        value: function saveOwnAddlResource(ownAddlResource) {
          return this.http.post(this.orgAddlResourceUrl, ownAddlResource, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "updateOwnAddlResource",
        value: function updateOwnAddlResource(ownAddlResources) {
          return this.http.put(this.orgAddlResourceUrl, ownAddlResources, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "deleteOwnAddlResource",
        value: function deleteOwnAddlResource(resourceIds) {
          return this.http["delete"]("".concat(this.orgAddlResourceUrl, "/").concat(resourceIds), {
            observe: 'response'
          });
        }
      }, {
        key: "setAddlResourcePreference",
        value: function setAddlResourcePreference(isActive, lessonId, organisationId) {
          var reqJSON = {
            "active": isActive,
            "lessonId": lessonId,
            "organisationId": organisationId
          };
          return this.http.put(this.setAddlResourcePreferenceUrl, reqJSON, {
            observe: 'response'
          });
        }
      }, {
        key: "getAddlResourcePreference",
        value: function getAddlResourcePreference(lessonId, organisationId) {
          var reqJSON = {
            "lessonId": lessonId,
            "organisationId": organisationId
          };
          return this.http.post(this.getAddlResourcePreferenceUrl, reqJSON, {
            headers: headers,
            observe: 'response'
          });
        }
      }]);

      return SyllabusLessonTopicService;
    }();

    SyllabusLessonTopicService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SyllabusLessonTopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], SyllabusLessonTopicService);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CurriculumTopicContentManageComponent */

  /***/
  function srcAppSyllabusLessonTopicTopicContentTopicContentManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumTopicContentManageComponent", function () {
      return CurriculumTopicContentManageComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/user-login-info/user-login-info.service */
    "./src/app/shared/user-login-info/user-login-info.service.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");
    /* harmony import */


    var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../subject/subject.service */
    "./src/app/subject/subject.service.ts");
    /* harmony import */


    var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../organisation/organisation.service */
    "./src/app/organisation/organisation.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/file-management/file-management.service */
    "./src/app/shared/file-management/file-management.service.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);

    var CurriculumTopicContentManageComponent =
    /*#__PURE__*/
    function () {
      function CurriculumTopicContentManageComponent(_router, activatedRoute, subjectService, curriculumService, organisationService, topicContentService, eventManager, parseLinks, principalService, formBuilder, pluginService, userLoginService, commonService, changeDetectRef, fileService) {
        _classCallCheck(this, CurriculumTopicContentManageComponent);

        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.subjectService = subjectService;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.topicContentService = topicContentService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.formBuilder = formBuilder;
        this.pluginService = pluginService;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.fileService = fileService;
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

      _createClass(CurriculumTopicContentManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCurriculums();
          this.createTopicContentForm();
          this.getContentType();
          this.getContentSource();
        }
      }, {
        key: "createTopicContentForm",
        value: function createTopicContentForm() {
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
      }, {
        key: "loadCurriculums",
        //TODO: load org specific curriculums if user belongs to a org ELSE IF the user is CognitoED content admin/system 
        //admin load all the standard curriculum
        value: function loadCurriculums() {
          var _this62 = this;

          this.curriculumService.getCurriculumSearch().subscribe(function (res) {
            return _this62.assignCurriculumList(res.body);
          }, function (res) {
            return _this62.onError(res.message);
          });
        }
      }, {
        key: "assignCurriculumList",
        value: function assignCurriculumList(data) {
          this.curriculumList = [];

          for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "getContentType",
        value: function getContentType() {
          var _this63 = this;

          this.commonService.getContentTypeList().subscribe(function (typeData) {
            _this63.contentType = typeData;
          });
        }
      }, {
        key: "getContentSource",
        value: function getContentSource() {
          var _this64 = this;

          this.commonService.getContentSourceList().subscribe(function (sourceData) {
            _this64.contentSource = sourceData;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.nodeOnSelection();
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }

          this.selectedGrade = null;
          this.selectedSubject = null;
          this.selectedLesson = null;
        }
      }, {
        key: "onGradeChange",
        value: function onGradeChange() {
          var _this65 = this;

          var curriculumId, gradeId, status;

          if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_14__["ACTIVE"];
            this.subjectService.getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status).subscribe(function (res) {
              return _this65.assignSubjectList(res.body);
            }, function (res) {
              return _this65.onError(res.message);
            });
          }

          this.selectedSubject = null;
          this.selectedLesson = null;
        }
      }, {
        key: "assignSubjectList",
        value: function assignSubjectList(data) {
          $("#subject").val("").trigger('change');
          this.subjectList = [];
          this.subjectTree = [];
          this.pluginService.jsTree("#viewTree", this.subjectTree, false);

          for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
          }
        }
      }, {
        key: "onSubjectChange",
        value: function onSubjectChange() {
          if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.loadSubjectTree(subjectId);
          }

          this.selectedLesson = null;
        }
      }, {
        key: "onActiveWebUrlSelection",
        value: function onActiveWebUrlSelection(event) {
          if (event.target.checked === true) {
            this.activeUrl = event.target.id;

            if (this.activeUrl === "webUrl1") {
              this.checkUrl1 = true;
              this.checkUrl2 = false;
              this.checkUrl3 = false;
            } else if (this.activeUrl === "webUrl2") {
              this.checkUrl2 = true;
              this.checkUrl3 = false;
              this.checkUrl1 = false;
            } else if (this.activeUrl === "webUrl3") {
              this.checkUrl3 = true;
              this.checkUrl1 = false;
              this.checkUrl2 = false;
            }
          }
        }
      }, {
        key: "onVideoFileChanges",
        value: function onVideoFileChanges(event) {
          var splitType;
          this.selectedFile = event[0];
          splitType = this.selectedFile.type.split('/');
          this.fileType = splitType[0];
          this.fileName = this.selectedFile.name;

          if (this.fileType === "video" && this.selectedFile.size > 209715200) {
            this.pluginService.alertMessage("Please upload file size lesser than 200 MB", "error");
          }
        }
      }, {
        key: "uploadVideoFile",
        value: function uploadVideoFile() {
          var _this66 = this;

          if (this.fileName !== "No file chosen") {
            if (this.fileType === "video") {
              this.fileService.getpresignedurls(this.fileName).subscribe(function (res) {
                if (res.status === 200) {
                  _this66.uploadedFileName = Object.keys(res.body)[0];
                  _this66.uploadedFilePath = Object.values(res.body)[0];
                  _this66.fileName = _this66.uploadedFileName;

                  if (_this66.uploadedFileName && _this66.uploadedFilePath) {
                    var block, base64Data, dataSrc;
                    dataSrc = _this66.selectedFile.base64;
                    block = dataSrc.split(";");
                    base64Data = block[1].split(",")[1];

                    _this66.fileService.uploadVideoFile(_this66.uploadedFilePath, base64Data).subscribe(function (event) {
                      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                        _this66.showFileAction = true;

                        _this66.pluginService.alertMessage("File uploaded successfully", "success");
                      }
                    });
                  }
                }
              });
            } else {
              this.pluginService.alertMessage("Invalid file, it support only Video formats", "error");
            }
          } else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
          }
        }
      }, {
        key: "onDocumentFileChanges",
        value: function onDocumentFileChanges(event) {
          this.selectedFile = event.target.files;
          this.fileName = this.selectedFile[0].name;

          if (this.selectedFile[0].type === "application/pdf" && this.selectedFile[0].size > 104857600) {
            this.pluginService.alertMessage("Please upload file size lesser than 100 MB", "error");
          }
        }
      }, {
        key: "uploadDocumentFile",
        value: function uploadDocumentFile() {
          var _this67 = this;

          if (this.fileName !== "No file chosen") {
            if (this.selectedFile[0].type === "application/pdf") {
              var file = this.selectedFile.item(0);
              this.fileService.getpresignedurls(this.fileName).subscribe(function (res) {
                if (res.status === 200) {
                  _this67.uploadedFileName = Object.keys(res.body)[0];
                  _this67.uploadedFilePath = Object.values(res.body)[0];
                  _this67.fileName = _this67.uploadedFileName;

                  if (_this67.uploadedFileName && _this67.uploadedFilePath) {
                    _this67.fileService.uploadPDFFile(_this67.uploadedFilePath, file).subscribe(function (event) {
                      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                        _this67.showFileAction = true;

                        _this67.pluginService.alertMessage("File uploaded successfully", "success");
                      }
                    });
                  }
                }
              });
            } else {
              this.pluginService.alertMessage("Invalid file, it support only PDF", "error");
            }
          } else {
            this.pluginService.alertMessage("Please choose file and upload it", "error");
          }
        }
      }, {
        key: "downloadFile",
        value: function downloadFile() {
          if (this.uploadedFileName) {
            this.subscribeToDownloadResponse(this.fileService.downloadFiles(this.uploadedFileName));
          }
        }
      }, {
        key: "subscribeToDownloadResponse",
        value: function subscribeToDownloadResponse(result) {
          var _this68 = this;

          result.subscribe(function (res) {
            return _this68.onDownloadSuccess(res);
          }, function (errRes) {
            return _this68.onDownloadError(errRes);
          });
        }
      }, {
        key: "onDownloadSuccess",
        value: function onDownloadSuccess(resp) {
          if (resp.body) {
            var downloadFilePath = Object.values(resp.body)[0];
            Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(downloadFilePath);
          }
        }
      }, {
        key: "onDownloadError",
        value: function onDownloadError(error) {
          this.pluginService.alertMessage("Error in downloading file", "error");
        }
      }, {
        key: "checkContentType",
        value: function checkContentType() {
          this.closeTopicContentModal();

          if (this.selectedContentSource) {
            if (this.selectedContentSource.tag === 'FILE_UPLOAD') {
              if (this.uploadedFilePath) {
                this.deleteUploadedFile();
              }
            }
          }
        }
      }, {
        key: "deleteUploadedFile",
        value: function deleteUploadedFile() {
          this.subscribeToDeleteFiletResponse(this.fileService.deleteUploadedFile(this.uploadedFileName));
        }
      }, {
        key: "subscribeToDeleteFiletResponse",
        value: function subscribeToDeleteFiletResponse(resp) {
          var _this69 = this;

          resp.subscribe(function (res) {
            return _this69.onDeleteFileSuccess(res);
          }, function (res) {
            return _this69.onDeleteError(res);
          });
        }
      }, {
        key: "onDeleteFileSuccess",
        value: function onDeleteFileSuccess(resp) {
          this.fileName = "No file chosen";
          this.uploadedFileName = "";
          this.uploadedFilePath = "";
          this.pluginService.alertMessage("File deleted successfully", "success");
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.gradeList = [];

          for (var i = min; i <= max; i++) {
            this.gradeList.push({
              "id": i,
              "name": i
            });
          }

          return this.gradeList;
        }
      }, {
        key: "loadSubjectTree",
        value: function loadSubjectTree(subjectId) {
          var _this70 = this;

          this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) {
            return _this70.assignSubjectTree(res.body);
          }, function (res) {
            return _this70.onError(res.message);
          });
        }
      }, {
        key: "assignSubjectTree",
        value: function assignSubjectTree(data) {
          this.lessonList = [];
          $("#lesson").val("").trigger('change');
          this.subjectTree = data;
          this.lessonList = this.subjectTree.filter(function (item) {
            return item.type === 'lesson';
          });
          this.pluginService.jsTree("#viewTree", this.subjectTree, false);
        }
      }, {
        key: "getLessonTopicList",
        value: function getLessonTopicList() {
          var _this71 = this;

          if (this.selectedLesson) {
            var lessonId = this.selectedLesson.data.id;

            if (lessonId) {
              this.topicContentService.getLessonTopicListByLessonId(lessonId).subscribe(function (res) {
                return _this71.assignLessonTopicsList(res.body);
              }, function (res) {
                return _this71.onError(res.message);
              });
            } else {
              this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
          }
        }
      }, {
        key: "assignLessonTopicsList",
        value: function assignLessonTopicsList(data) {
          var topicsList = [],
              treeTopicsList = [];
          topicsList = data.lessonTopics;

          for (var i = 0; i < topicsList.length; i++) {
            treeTopicsList.push({
              text: topicsList[i].topicName,
              generalTopicId: topicsList[i].generalTopicId,
              id: topicsList[i].id
            });
          }

          this.enableExpandNode = false;
          this.pluginService.jsTree("#topicsList", treeTopicsList, false);
          this.showContentMapping = false;
          this.showTopicHeading = true;
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
          this.validateTopicContentForm();
          this.changeDetectRef.detectChanges();
        }
      }, {
        key: "validateTopicContentForm",
        value: function validateTopicContentForm() {
          var contentName, webURL1, webURL2, webURL3;
          contentName = this.trimValue(this.topicContentForm.value.contentTitle);
          webURL1 = this.trimValue(this.topicContentForm.value.webUrl1);
          webURL2 = this.trimValue(this.topicContentForm.value.webUrl2);
          webURL3 = this.trimValue(this.topicContentForm.value.webUrl3);

          if (contentName === "" || contentName === undefined || contentName === null) {
            this.validateForm = true;
          }

          if (this.uploadedFilePath === "" || this.uploadedFilePath === undefined || this.uploadedFilePath === null) {
            this.validateForm = true;
          }

          if (this.topicContentForm.valid) {
            this.validateForm = false;
          }

          if (this.topicContentForm.invalid) {
            this.validateForm = true;
          }

          if (this.checkUrl1 === true) {
            if (webURL1 === "" || webURL1 === undefined || webURL1 === null) {
              this.validateForm = true;
            }
          }

          if (this.checkUrl2 === true) {
            if (webURL2 === "" || webURL2 === undefined || webURL2 === null) {
              this.validateForm = true;
            }
          }

          if (this.checkUrl3 === true) {
            if (webURL3 === "" || webURL3 === undefined || webURL3 === null) {
              this.validateForm = true;
            }
          }
        }
      }, {
        key: "nodeOnSelection",
        value: function nodeOnSelection() {
          var localThisObj = this;
          $('#topicsList').on('changed.jstree', function (e, data) {
            var i, j;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.generalTopicId = data.node.original.generalTopicId;
              localThisObj.topicName = data.node.original.text;
              localThisObj.generalTopicContents = [];
              localThisObj.orgGeneralTopicContents = [];
              localThisObj.ownTopicContents = [];
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
      }, {
        key: "getTopicContentList",
        value: function getTopicContentList(generalTopicId) {
          var _this72 = this;

          this.topicContentService.getTopicDetails(generalTopicId).subscribe(function (res) {
            return _this72.assignResponseToTopicList(res.body);
          }, function (res) {
            return _this72.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToTopicList",
        value: function assignResponseToTopicList(data) {
          this.generalTopicContents = [];
          this.ownTopicContents = [];
          this.generalTopicContents = data.generalTopicContents;
          this.sortArrayByOrderNumber(this.generalTopicContents);
          this.ownTopicContents = data.orgGeneralTopicContents;
          this.sortArrayByOrderNumber(this.ownTopicContents);

          if (this.ownTopicContents.length > 0 || this.generalTopicContents.length > 0) {
            this.dragTableContent();
          }
        }
      }, {
        key: "getOrgGeneralTopicContentByOrganisationId",
        value: function getOrgGeneralTopicContentByOrganisationId(generalTopicId) {
          var _this73 = this;

          //User login Information for organisationId 
          this.organisationId = this.userLoginService.organisationId;
          this.topicContentService.getOrgGeneralTopicContentsByOrgId(generalTopicId, this.organisationId).subscribe(function (res) {
            return _this73.assignResponseToOrgTopicList(res.body);
          }, function (res) {
            return _this73.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToOrgTopicList",
        value: function assignResponseToOrgTopicList(data) {
          this.orgGeneralTopicContents = [];
          this.orgGeneralTopicContents = data;
          this.sortArrayByOrderNumber(this.orgGeneralTopicContents);
        }
      }, {
        key: "getOrgTopicContentByOrgId",
        value: function getOrgTopicContentByOrgId() {
          var _this74 = this;

          var organisationId = this.selectedOrganisation.id;
          this.topicContentService.getOrgGeneralTopicContentsByOrgId(this.generalTopicId, organisationId).subscribe(function (res) {
            return _this74.assignResponseToOrgTopicContentListByOrgId(res.body);
          }, function (res) {
            return _this74.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToOrgTopicContentListByOrgId",
        value: function assignResponseToOrgTopicContentListByOrgId(data) {
          this.orgGeneralTopicContents = [];
          this.orgGeneralTopicContents = data;
        }
      }, {
        key: "checkContentPreference",
        value: function checkContentPreference(event) {
          var check = event.target.checked;
          var name = event.target.id;

          if (check === true && name === "ContentCE") {
            this.contentPreferenceStatus = false;
          } else if (check === true && name === "OwnContent") {
            this.contentPreferenceStatus = true;
          }
        }
      }, {
        key: "saveContentPreference",
        value: function saveContentPreference() {
          if (this.contentPreferenceStatus === false) {
            if (this.generalTopicContents.length <= 0) {
              this.pluginService.alertMessage("Before set content preference atleast one general topic content is mandatory", "error");
            } else {
              this.setContentPreference();
            }
          } else if (this.contentPreferenceStatus === true) {
            if (this.ownTopicContents.length <= 0) {
              this.pluginService.alertMessage("Please add atleast one own topic content and do preference", "error");
            } else {
              this.setContentPreference();
            }
          }
        }
      }, {
        key: "setContentPreference",
        value: function setContentPreference() {
          var _this75 = this;

          this.topicContentService.setContentPreference(this.contentPreferenceStatus, this.generalTopicId, this.organisationId).subscribe(function (res) {
            return _this75.onSuccess(res.body);
          }, function (res) {
            return _this75.onError(res.message);
          });
        }
      }, {
        key: "onSuccess",
        value: function onSuccess(data) {
          this.pluginService.alertMessage("Content preference saved successfully", "success");
        }
      }, {
        key: "getContentPreference",
        value: function getContentPreference(generalTopicId) {
          var _this76 = this;

          //User login Information for organisationId 
          var orgId = this.userLoginService.organisationId;
          this.topicContentService.getContentPreference(orgId, generalTopicId).subscribe(function (res) {
            return _this76.onGetPreferenceSuccess(res.body);
          }, function (res) {
            return _this76.onError(res.message);
          });
        }
      }, {
        key: "onGetPreferenceSuccess",
        value: function onGetPreferenceSuccess(acitveStatus) {
          if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkContentCE = true;
            this.checkOwnContent = false;
          } else if (acitveStatus === true) {
            this.checkContentCE = false;
            this.checkOwnContent = true;
          }
        }
      }, {
        key: "openSubjectTreeModal",
        value: function openSubjectTreeModal() {
          this.pluginService.showModalWindow("#viewSubjectTreeModal");
        }
      }, {
        key: "closeSubjectTreeModal",
        value: function closeSubjectTreeModal() {
          this.pluginService.hideModalWindow("#viewSubjectTreeModal");
        }
      }, {
        key: "getOrganisationList",
        value: function getOrganisationList() {
          var _this77 = this;

          this.organisationService.getOrganisations().subscribe(function (res) {
            return _this77.assignOrgList(res.body);
          }, function (res) {
            return _this77.onError(res.message);
          });
        }
      }, {
        key: "assignOrgList",
        value: function assignOrgList(data) {
          this.organisations = data;
        }
      }, {
        key: "addOwnTopicContent",
        value: function addOwnTopicContent() {
          this.modalTitleName = "Add";
          this.openTopicContentModal();
          this.resetFormValues();
          this.validateForm = false;
          this.disableDropdown = false;
          this.selectedContentSource = null;
          this.selectedContentType = null;
        }
      }, {
        key: "viewCETopicContent",
        value: function viewCETopicContent(contentId) {
          var contentDetails = [],
              contentDetail = {};
          contentDetails = this.generalTopicContents.filter(function (item) {
            return item.id === contentId;
          });
          contentDetail = contentDetails[0];
          this.modalTitleName = "View";
          this.getContentDetails(contentDetail);
          this.openTopicContentModal();
        }
      }, {
        key: "patchCEContentFormfields",
        value: function patchCEContentFormfields(contentDetails) {
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
          this.selectedContentType = this.contentType.filter(function (item) {
            return item.tag === contentDetails.content.contentType;
          })[0];
          this.selectedContentSource = this.contentSource.filter(function (item) {
            return item.tag === contentDetails.content.contentSource;
          })[0];

          if (contentDetails.content.webUrl == contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          } else if (contentDetails.content.webUrl == contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
          } else if (contentDetails.content.webUrl == contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
          } else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          }
        }
      }, {
        key: "viewOrgTopicContent",
        value: function viewOrgTopicContent(contentId) {
          var contentDetails = [],
              contentDetail = {};
          contentDetails = this.orgGeneralTopicContents.filter(function (item) {
            return item.id === contentId;
          });
          contentDetail = contentDetails[0];
          this.modalTitleName = "ViewOrg";
          this.getOwnContentDetails(contentDetail);
          this.openTopicContentModal();
        }
      }, {
        key: "editOwnTopicContent",
        value: function editOwnTopicContent(contentId) {
          var contentDetails = [],
              contentDetail = {};
          contentDetails = this.ownTopicContents.filter(function (item) {
            return item.id === contentId;
          });
          contentDetail = contentDetails[0];
          this.modalTitleName = "Edit";
          this.patchContentFormfields(contentDetail);
          this.openTopicContentModal();
        }
      }, {
        key: "viewOwnTopicContent",
        value: function viewOwnTopicContent(contentId) {
          var contentDetails = [],
              topicContent = {};
          var contentDetail = {};
          contentDetail = topicContent.content;
          contentDetails = this.ownTopicContents.filter(function (item) {
            return item.id === contentId;
          });
          contentDetail = contentDetails[0];
          this.modalTitleName = "ViewOrg";
          this.getOwnContentDetails(contentDetail);
          this.openTopicContentModal();
        }
      }, {
        key: "getContentDetails",
        value: function getContentDetails(contentDetail) {
          this.contentDetails = contentDetail;

          if (this.contentDetails.content.webUrl == this.contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          } else if (this.contentDetails.content.webUrl == this.contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
          } else if (this.contentDetails.content.webUrl == this.contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
          } else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          }
        }
      }, {
        key: "getOwnContentDetails",
        value: function getOwnContentDetails(contentDetail) {
          this.contentDetails = contentDetail;

          if (this.contentDetails.content.webUrl == this.contentDetails.content.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          } else if (this.contentDetails.content.webUrl == this.contentDetails.content.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
          } else if (this.contentDetails.content.webUrl == this.contentDetails.content.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
          } else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          }
        }
      }, {
        key: "patchContentFormfields",
        value: function patchContentFormfields(contentDetails) {
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
          }); // this.selectedContentType = this.contentType.filter(item => item.tag === contentDetails.contentType)[0];
          // this.selectedContentSource = this.contentSource.filter(item => item.tag === contentDetails.contentSource)[0];
          // if (this.selectedContentSource) {
          //     if (this.selectedContentSource.tag === "WEB_URL") {

          if (contentDetails.webUrl == contentDetails.url1) {
            this.checkUrl1 = true;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          } else if (contentDetails.webUrl == contentDetails.url2) {
            this.checkUrl2 = true;
            this.checkUrl3 = false;
            this.checkUrl1 = false;
          } else if (contentDetails.webUrl == contentDetails.url3) {
            this.checkUrl3 = true;
            this.checkUrl2 = false;
            this.checkUrl1 = false;
          } else {
            this.checkUrl1 = false;
            this.checkUrl2 = false;
            this.checkUrl3 = false;
          } // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
          //     this.uploadedFileName = contentDetails.fileName;
          //     this.fileName = contentDetails.fileName;
          //     this.uploadedFilePath = contentDetails.filePath;
          // }
          // }

        }
      }, {
        key: "saveTopicContent",
        value: function saveTopicContent() {
          if (this.topicContentForm.valid) {
            var ownGeneralTopicContents = [],
                topiccontent = {},
                contentDetail = topiccontent.content;
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
            contentDetail.contentSource = "WEB_URL"; //Below codes are Video and document file upload
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
            } else if (this.checkUrl2 === true) {
              contentDetail.webUrl = contentDetail.url2;
              contentDetail.publisher = contentDetail.publisher2;
            } else if (this.checkUrl3 === true) {
              contentDetail.webUrl = contentDetail.url3;
              contentDetail.publisher = contentDetail.publisher3;
            } else {
              //If user not at all changed active url, defaultly it takes first url as active
              contentDetail.webUrl = contentDetail.url1;
              contentDetail.publisher = contentDetail.publisher1;
            } // }


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
      }, {
        key: "saveTopicContents",
        value: function saveTopicContents(ownGeneralTopicContents) {
          this.subscribeToSaveResponse(this.topicContentService.saveOwnTopicContent(ownGeneralTopicContents));
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this78 = this;

          result.subscribe(function (res) {
            return _this78.onSaveSuccess(res);
          }, function (errRes) {
            return _this78.onSaveError(errRes);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("Topic content created successfully", "success");
          this.resetFormValues();
          this.closeTopicContentModal();
          this.getTopicContentList(this.generalTopicId);
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "updateTopicContents",
        value: function updateTopicContents() {
          if (this.topicContentForm.valid) {
            var contentDetail = {};
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
            contentDetail.contentSource = "WEB_URL"; //Below codes are Video and document file upload
            // contentDetail.contentType = this.selectedContentType.tag;
            // contentDetail.contentSource = this.selectedContentSource.tag;
            // if (this.selectedContentSource) {
            //     //Active web url assigning condition
            //     if (this.selectedContentSource.tag === "WEB_URL") {

            if (this.checkUrl1 === true) {
              contentDetail.webUrl = contentDetail.url1;
              contentDetail.publisher = contentDetail.publisher1;
            } else if (this.checkUrl2 === true) {
              contentDetail.webUrl = contentDetail.url2;
              contentDetail.publisher = contentDetail.publisher2;
            } else if (this.checkUrl3 === true) {
              contentDetail.webUrl = contentDetail.url3;
              contentDetail.publisher = contentDetail.publisher3;
            } else {
              //If user not at all changed active url, defaultly it takes first url as active
              contentDetail.webUrl = contentDetail.url1;
              contentDetail.publisher = contentDetail.publisher1;
            } // } else if (this.selectedContentSource.tag === "FILE_UPLOAD") {
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
      }, {
        key: "subscribeToUpdateResponse",
        value: function subscribeToUpdateResponse(result) {
          var _this79 = this;

          result.subscribe(function (res) {
            return _this79.onUpdateSuccess(res);
          }, function (errRes) {
            return _this79.onUpdateError(errRes);
          });
        }
      }, {
        key: "onUpdateSuccess",
        value: function onUpdateSuccess(res) {
          this.pluginService.alertMessage("Topic content updated successfully", "success");
          this.resetFormValues();
          this.closeTopicContentModal();
          this.getTopicContentList(this.generalTopicId);
        }
      }, {
        key: "onUpdateError",
        value: function onUpdateError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "openTopicContentModal",
        value: function openTopicContentModal() {
          this.pluginService.showModalWindow("#topicContentModal");
        }
      }, {
        key: "closeTopicContentModal",
        value: function closeTopicContentModal() {
          this.pluginService.hideModalWindow("#topicContentModal");
        }
      }, {
        key: "resetFormValues",
        value: function resetFormValues() {
          this.topicContentForm.reset();
        }
      }, {
        key: "dragTableContent",
        value: function dragTableContent() {
          var localThisObj = this;

          var fixHelperModified = function fixHelperModified(e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function (index) {
              $(this).width($originals.eq(index).width());
            });
            return $helper;
          },
              updateIndex = function updateIndex(e, ui) {
            $("td.index", ui.item.parent()).each(function (i) {
              $(this).html(i + 1);
            });
            localThisObj.updateTopicContentOrder();
          };

          $("#dragTable #dragBody").sortable({
            helper: fixHelperModified,
            stop: updateIndex
          });
          $("#dragBody").sortable({
            distance: 1,
            opacity: 0,
            delay: 10,
            cursor: "move",
            update: function update() {}
          });
        }
      }, {
        key: "updateTopicContentOrder",
        value: function updateTopicContentOrder() {
          var _this80 = this;

          this.updateAction = false;
          this.checkOrderNumChange = true;
          var table = document.querySelector('#dragTable');
          var rows = table.querySelectorAll('tbody tr');
          Array.from(rows).forEach(function (row) {
            var list = row.querySelectorAll('td');
            var contentId = Number(list[0].title);
            var newOrderNum = Number(list[1].textContent);

            for (var i = 0; i < _this80.ownTopicContents.length; i++) {
              if (_this80.ownTopicContents[i].id === contentId) {
                _this80.ownTopicContents[i].orderNumber = newOrderNum;
                break;
              }
            }

            _this80.sortArrayByOrderNumber(_this80.ownTopicContents);
          });
        }
      }, {
        key: "updateOwnTopicContentsWithOrderNumber",
        value: function updateOwnTopicContentsWithOrderNumber() {
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
      }, {
        key: "subscribeToUpdateTopicContentResponse",
        value: function subscribeToUpdateTopicContentResponse(result) {
          var _this81 = this;

          result.subscribe(function (res) {
            return _this81.onUpdateTopicContentSuccess(res);
          }, function (errRes) {
            return _this81.onUpdateTopicContentError(errRes);
          });
        }
      }, {
        key: "onUpdateTopicContentSuccess",
        value: function onUpdateTopicContentSuccess(res) {
          this.pluginService.alertMessage("Topic content order updated successfully", "success");
          this.getTopicContentList(this.generalTopicId);
          this.updateAction = true;
          this.resetFormValues();
        }
      }, {
        key: "onUpdateTopicContentError",
        value: function onUpdateTopicContentError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
        }
      }, {
        key: "resetSelectedOwnTopicContent",
        value: function resetSelectedOwnTopicContent() {
          this.contentIds = [];
          this.tableAction = true;
          $(".checkAll").prop("checked", false);
        }
      }, {
        key: "checkSelectedOwnContents",
        value: function checkSelectedOwnContents(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = Number(event.target.title);

          if (checked === true) {
            this.tableAction = false;
            this.contentIds.push(selectedId);
          } else if (checked === false) {
            index = this.contentIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.contentIds.splice(index, 1);
          }

          this.contentIds = this.removeDuplicateElements(this.contentIds);

          if (this.contentIds.length <= 0) {
            this.tableAction = true;
          }
        }
      }, {
        key: "removeDuplicateElements",
        value: function removeDuplicateElements(array) {
          var temp = [];

          for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
              temp.push(array[i]);
            }
          }

          return temp;
        }
      }, {
        key: "sortArrayByOrderNumber",
        value: function sortArrayByOrderNumber(array) {
          array.sort(function (a, b) {
            return a.orderNumber > b.orderNumber ? 1 : -1;
          });
        }
      }, {
        key: "deleteOwnTopicContents",
        value: function deleteOwnTopicContents() {
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
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(result) {
          var _this82 = this;

          result.subscribe(function (res) {
            return _this82.onDeleteSuccess(res);
          }, function (errRes) {
            return _this82.onDeleteError(errRes);
          });
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(res) {
          this.pluginService.alertMessage("Topic content deleted successfully", "success");
          this.tableAction = true;
          this.contentIds = [];
          this.getTopicContentList(this.generalTopicId);
        }
      }, {
        key: "onDeleteError",
        value: function onDeleteError(errRes) {
          this.pluginService.alertMessage("Could not delete, please contact admin", "error");
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.enableExpandNode = !this.enableExpandNode;

          if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#viewTree");
          } else {
            this.pluginService.closeJsTreeAllNodes("#viewTree");
          }
        }
      }, {
        key: "closeTopicContentModalWithOutSaving",
        value: function closeTopicContentModalWithOutSaving() {
          if (this.modalTitleName === "View" || this.modalTitleName === "ViewOrg") {
            this.closeTopicContentModal();
          } else if (this.modalTitleName === "Add" || this.modalTitleName === "Edit") {
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
      }, {
        key: "contentFormControl",
        get: function get() {
          return this.topicContentForm.controls;
        }
      }]);

      return CurriculumTopicContentManageComponent;
    }();

    CurriculumTopicContentManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"]
      }, {
        type: _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_6__["Principal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]
      }, {
        type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"]
      }];
    };

    CurriculumTopicContentManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic-content-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-content/topic-content-manage.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"], _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_5__["SyllabusLessonTopicService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_6__["Principal"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"], _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_9__["UserLoginInfoService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _shared_file_management_file_management_service__WEBPACK_IMPORTED_MODULE_15__["FileManagementService"]])], CurriculumTopicContentManageComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CurriculumTopicQuestionCreateComponent */

  /***/
  function srcAppSyllabusLessonTopicTopicQuestionTopicQuestionCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionCreateComponent", function () {
      return CurriculumTopicQuestionCreateComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../question-builder/question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/user-login-info/user-login-info.service */
    "./src/app/shared/user-login-info/user-login-info.service.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");

    var CurriculumTopicQuestionCreateComponent =
    /*#__PURE__*/
    function () {
      function CurriculumTopicQuestionCreateComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService, commonService, changedetector) {
        _classCallCheck(this, CurriculumTopicQuestionCreateComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.changedetector = changedetector;
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

      _createClass(CurriculumTopicQuestionCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pluginService.sideMenuToggle();
          this.pluginService.newStepperJs();
          this.generalTopicId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
          this.getContentSource();
          this.getQuestionCategory();
          this.getQuestionComplexityLevel();
        }
      }, {
        key: "getContentSource",
        value: function getContentSource() {
          var _this83 = this;

          this.commonService.getContentSourceList().subscribe(function (data) {
            _this83.contentSource = data;
          });
        }
      }, {
        key: "getQuestionCategory",
        value: function getQuestionCategory() {
          var _this84 = this;

          this.commonService.getQuestionCategoryList().subscribe(function (data) {
            _this84.questionCategory = data;
          });
        }
      }, {
        key: "getQuestionComplexityLevel",
        value: function getQuestionComplexityLevel() {
          var _this85 = this;

          this.commonService.getQuestionComplexityLevelList().subscribe(function (data) {
            _this85.questionComplexityLevel = data;
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.validateQuestionTypeSelectedOrNot();
          this.changedetector.detectChanges();
        }
      }, {
        key: "validateQuestionTypeSelectedOrNot",
        value: function validateQuestionTypeSelectedOrNot() {
          var currentRoute,
              splitUrl = [],
              lastItem;
          currentRoute = this.router.url;
          splitUrl = currentRoute.split("/");
          lastItem = splitUrl.pop();

          if (lastItem === 'topic-question-create') {
            this.validateQuestionType = true;
          } else {
            this.validateQuestionType = false;
          }
        }
      }, {
        key: "loadPreviewQuestion",
        value: function loadPreviewQuestion() {
          var _this86 = this;

          var duplicateChoices = [],
              choiceText,
              question,
              choices = [],
              choiceId,
              answers = [],
              matrixChoices = [],
              matrixOptions = [];
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
            //"Question is missing, please fill question detail";
            this.validateQuestion = true;
          } else if (question.length > 2) {
            if (answers.length > 0) {
              if (this.questionType === "MCQ_SINGLE" || this.questionType === "MCQ_MULTIPLE" || this.questionType === "MCQ_TRUE_FALSE") {
                this.answers = [];
                duplicateChoices = this.questionResource.Choices;

                if (duplicateChoices.length > 0) {
                  choices = [];

                  for (var i = 0; i < duplicateChoices.length; i++) {
                    choiceId = duplicateChoices[i].ChoiceId;
                    choiceText = duplicateChoices[i].ChoiceText;
                    choices.push({
                      "choiceId": choiceId,
                      "choiceText": choiceText
                    });
                  }

                  var _loop7 = function _loop7(j) {
                    var answerText = choices.find(function (item) {
                      return item.choiceId === answers[j];
                    }).choiceText;

                    _this86.answers.push(answerText);

                    answerText = "";
                  };

                  for (var j = 0; j < answers.length; j++) {
                    _loop7(j);
                  }

                  this.validateQuestion = false;
                } else {
                  //"Choices are missing, Please fill the choices";
                  this.validateQuestion = true;
                }
              } else if (this.questionType === "MCQ_CHOICE_MATRIX") {
                this.answers = [];
                matrixChoices = [];
                matrixOptions = [];
                matrixChoices = this.questionResource.Choices;
                matrixOptions = this.questionResource.Options;

                if (matrixChoices.length > 0 && matrixOptions.length > 0) {
                  if (answers.length > 0) {
                    this.answers = [];

                    var _loop8 = function _loop8(k) {
                      _this86.answers.push({
                        choiceName: matrixChoices.find(function (item) {
                          return item.ChoiceId === answers[k].ChoiceId;
                        }).ChoiceText,
                        optionName: matrixOptions.find(function (item) {
                          return item.OptionId === answers[k].OptionId;
                        }).OptionText
                      });
                    };

                    for (var k = 0; k < answers.length; k++) {
                      _loop8(k);
                    }
                  }

                  this.validateQuestion = false;
                } else {
                  //"Choices and options are missing, please fill the details";
                  this.validateQuestion = true;
                }
              } else if (this.questionType === "MCQ_MATCH_LIST") {
                matrixChoices = [];
                matrixOptions = [];
                matrixChoices = this.questionResource.Choices;
                matrixOptions = this.questionResource.Options;

                if (matrixChoices.length > 0 && matrixOptions.length > 0) {
                  if (answers.length > 0) {
                    this.answers = [];

                    var _loop9 = function _loop9(_k) {
                      _this86.answers.push({
                        choiceName: matrixChoices.find(function (item) {
                          return item.ChoiceId === answers[_k].ChoiceId;
                        }).ChoiceText,
                        optionName: matrixOptions.find(function (item) {
                          return item.OptionId === answers[_k].OptionId;
                        }).OptionText
                      });
                    };

                    for (var _k = 0; _k < answers.length; _k++) {
                      _loop9(_k);
                    }
                  }

                  this.validateQuestion = false;
                } else {
                  //"Left side and right side options are missing, please fill the details";
                  this.validateQuestion = true;
                }
              }

              this.showSaveQuestion = true;
            } else {
              //"Answer is missing, please select a answer";
              this.validateQuestion = true;
            }
          }
        }
      }, {
        key: "onContentSource",
        value: function onContentSource(sourceName) {
          this.selectedContentSource = sourceName;
        }
      }, {
        key: "onSelectQuestionCategory",
        value: function onSelectQuestionCategory(value) {
          this.category = value;
        }
      }, {
        key: "onSelectComplexityLevel",
        value: function onSelectComplexityLevel(value) {
          this.complexityLevel = value;
        }
      }, {
        key: "onChangeOptionType",
        value: function onChangeOptionType(questionType) {
          if (questionType === "MCQ_SINGLE" || questionType === "MCQ_TRUE_FALSE") {
            this.type = "radio";
          } else if (questionType === "MCQ_MULTIPLE") {
            this.type = "checkbox";
          } else {
            this.type = "";
          }
        }
      }, {
        key: "resetPreviewQuestions",
        value: function resetPreviewQuestions() {
          this.questionResource = [];
          this.answers = [];
        }
      }, {
        key: "saveQuestion",
        value: function saveQuestion() {
          var questionResource = {},
              questionDetails,
              updatedQuestionResource;
          questionResource.question = {}; //User login Information for organisationId 

          if (this.category) {
            questionResource.question.category = this.category;
          } else {
            questionResource.question.category = this.questionCategory[0].tag;
          }

          if (this.complexityLevel) {
            questionResource.question.complexityLevel = this.complexityLevel;
          } else {
            questionResource.question.complexityLevel = 1;
          }

          this.organisationId = this.userLoginService.organisationId;
          updatedQuestionResource = this.questionBuilderService.getQuestionResource;
          questionResource.question.marks = updatedQuestionResource.TotalMarks;
          questionDetails = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
          questionResource.question.contentJson = questionDetails;
          questionResource.generalTopicId = this.generalTopicId;
          questionResource.question.generalTopicId = this.generalTopicId;
          questionResource.organisationId = this.organisationId;
          questionResource.question.solutionJson = this.questionBuilderService.convertJsonToString(JSON.stringify(this.solutionContent));
          this.subscribeToSaveResponse(this.questionService.saveOwnTopicQuestion(questionResource));
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this87 = this;

          result.subscribe(function (resp) {
            return _this87.onSaveSuccess(resp);
          }, function (errRes) {
            return _this87.onSaveError(errRes);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("Own topic question created successfully", "success");
          this.showAddQuestion = true;
          this.showSaveQuestion = false;
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
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
              localObj.router.navigateByUrl('/lesson-topic/topic-question');
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          window.location.reload();
          this.questionType = "";
          this.showSaveQuestion = true;
        }
      }]);

      return CurriculumTopicQuestionCreateComponent;
    }();

    CurriculumTopicQuestionCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    CurriculumTopicQuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic-question-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-create.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CurriculumTopicQuestionCreateComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CurriculumTopicQuestionDetailsComponent */

  /***/
  function srcAppSyllabusLessonTopicTopicQuestionTopicQuestionDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionDetailsComponent", function () {
      return CurriculumTopicQuestionDetailsComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../question-builder/question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/user-login-info/user-login-info.service */
    "./src/app/shared/user-login-info/user-login-info.service.ts");

    var CurriculumTopicQuestionDetailsComponent =
    /*#__PURE__*/
    function () {
      function CurriculumTopicQuestionDetailsComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService) {
        _classCallCheck(this, CurriculumTopicQuestionDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.questionResource = {};
        this.matchList = [];
        this.answers = [];
        this.getCurrentRouteInfo();
      }

      _createClass(CurriculumTopicQuestionDetailsComponent, [{
        key: "getCurrentRouteInfo",
        value: function getCurrentRouteInfo() {
          var splitArray = [],
              currentUrl;
          currentUrl = this.router.url;
          splitArray = currentUrl.split('/');
          this.currentRoute = splitArray.pop();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this88 = this;

          this.pluginService.sideMenuToggle();
          this.activatedRoute.params.subscribe(function (params) {
            _this88.questionId = params['id'];

            _this88.getQuestionDetail(_this88.questionId);
          });
        }
      }, {
        key: "getQuestionDetail",
        value: function getQuestionDetail(questionId) {
          var _this89 = this;

          this.questionService.getQuestionByQuestionId(questionId).subscribe(function (res) {
            return _this89.assignQuestionResource(res.body);
          }, function (res) {
            return _this89.onError(res.message);
          });
        }
      }, {
        key: "assignQuestionResource",
        value: function assignQuestionResource(data) {
          var questionResource = {};
          questionResource = data;
          this.loadPreviewQuestion(questionResource);
        }
      }, {
        key: "onError",
        value: function onError(resp) {
          this.pluginService.alertMessage("Could not get question detail please contact admin", "error");
        }
      }, {
        key: "loadPreviewQuestion",
        value: function loadPreviewQuestion(questionResource) {
          var _this90 = this;

          var duplicateChoices = [],
              choiceText,
              choiceId,
              choices = [],
              question,
              answers = [],
              matrixChoices = [],
              matrixOptions = [];
          this.questionResource = [];
          this.questionResource = this.questionBuilderService.convertStringToJson(questionResource.contentJson);
          this.questionType = this.questionResource.QuestionType;
          this.onChangeOptionType(this.questionType);
          question = this.questionResource.Question;

          if (this.questionType === "MCQ_SINGLE" || this.questionType === "MCQ_MULTIPLE" || this.questionType === "MCQ_TRUE_FALSE") {
            duplicateChoices = this.questionResource.Choices;
            answers = this.questionResource.Answers;

            for (var i = 0; i < duplicateChoices.length; i++) {
              choiceId = duplicateChoices[i].ChoiceId;
              choiceText = duplicateChoices[i].ChoiceText;
              choices.push({
                "choiceId": choiceId,
                "choiceText": choiceText
              });
            }

            var _loop10 = function _loop10(j) {
              var answerText = choices.find(function (item) {
                return item.choiceId === answers[j];
              }).choiceText;

              _this90.answers.push(answerText);

              answerText = "";
            };

            for (var j = 0; j < answers.length; j++) {
              _loop10(j);
            }
          } else if (this.questionType === "MCQ_CHOICE_MATRIX") {
            this.answers = [];
            answers = this.questionResource.Answers;
            matrixChoices = this.questionResource.Choices;
            matrixOptions = this.questionResource.Options;

            var _loop11 = function _loop11(k) {
              _this90.answers.push({
                choiceName: matrixChoices.find(function (item) {
                  return item.ChoiceId === answers[k].ChoiceId;
                }).ChoiceText,
                optionName: matrixOptions.find(function (item) {
                  return item.OptionId === answers[k].OptionId;
                }).OptionText
              });
            };

            for (var k = 0; k < answers.length; k++) {
              _loop11(k);
            }
          } else if (this.questionType === "MCQ_MATCH_LIST") {
            this.answers = [];
            matrixChoices = [];
            matrixOptions = [];
            answers = this.questionResource.Answers;
            matrixChoices = this.questionResource.Choices;
            matrixOptions = this.questionResource.Options;

            var _loop12 = function _loop12(_k2) {
              _this90.answers.push({
                choiceName: matrixChoices.find(function (item) {
                  return item.ChoiceId === answers[_k2].ChoiceId;
                }).ChoiceText,
                optionName: matrixOptions.find(function (item) {
                  return item.OptionId === answers[_k2].OptionId;
                }).OptionText
              });
            };

            for (var _k2 = 0; _k2 < answers.length; _k2++) {
              _loop12(_k2);
            }
          }
        }
      }, {
        key: "onChangeOptionType",
        value: function onChangeOptionType(questionType) {
          if (questionType === "MCQ_SINGLE" || questionType === "MCQ_TRUE_FALSE") {
            this.type = "radio";
          } else if (questionType === "MCQ_MULTIPLE") {
            this.type = "checkbox";
          } else {
            this.type = "";
          }
        }
      }, {
        key: "resetPreviewQuestions",
        value: function resetPreviewQuestions() {
          this.questionResource = [];
          this.answers = [];
        }
      }, {
        key: "editQuestionRoute",
        value: function editQuestionRoute() {
          if (this.currentRoute === "topic-question-view") {
            this.router.navigate(['/lesson-topic', this.questionId, 'topic-question-edit']);
          } else if (this.currentRoute === "general-topic-question-view") {
            this.router.navigate(['/general-concept-and-topic', this.questionId, 'general-topic-question-edit']);
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
          if (this.currentRoute === "topic-question-view") {
            this.router.navigateByUrl('/lesson-topic/topic-question');
          } else if (this.currentRoute === "general-topic-question-view") {
            this.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
          } else {
            this.router.navigateByUrl('../');
          }
        }
      }]);

      return CurriculumTopicQuestionDetailsComponent;
    }();

    CurriculumTopicQuestionDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"]
      }];
    };

    CurriculumTopicQuestionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic-question-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"]])], CurriculumTopicQuestionDetailsComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CurriculumTopicQuestionManageComponent */

  /***/
  function srcAppSyllabusLessonTopicTopicQuestionTopicQuestionManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionManageComponent", function () {
      return CurriculumTopicQuestionManageComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/user-login-info/user-login-info.service */
    "./src/app/shared/user-login-info/user-login-info.service.ts");
    /* harmony import */


    var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../question-builder/question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../subject/subject.service */
    "./src/app/subject/subject.service.ts");
    /* harmony import */


    var _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../organisation/organisation.service */
    "./src/app/organisation/organisation.service.ts");
    /* harmony import */


    var _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../curriculum/curriculum.service */
    "./src/app/curriculum/curriculum.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");

    var CurriculumTopicQuestionManageComponent =
    /*#__PURE__*/
    function () {
      function CurriculumTopicQuestionManageComponent(_router, activatedRoute, curriculumService, organisationService, subjectService, topicQuestionService, eventManager, parseLinks, principalService, pluginService, userLoginService, questionBuilderService) {
        _classCallCheck(this, CurriculumTopicQuestionManageComponent);

        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.curriculumService = curriculumService;
        this.organisationService = organisationService;
        this.subjectService = subjectService;
        this.topicQuestionService = topicQuestionService;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.userLoginService = userLoginService;
        this.questionBuilderService = questionBuilderService;
        this.questionIds = [];
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

      _createClass(CurriculumTopicQuestionManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkQuestionCE = false;
          this.enableExpandNode = false;
          this.questionPreferenceStatus = false;
          this.loadCurriculums();
        }
      }, {
        key: "loadCurriculums",
        value: function loadCurriculums() {
          var _this91 = this;

          this.curriculumService.getCurriculumSearch().subscribe(function (res) {
            return _this91.assignCurriculumList(res.body);
          }, function (res) {
            return _this91.onError(res.message);
          });
        }
      }, {
        key: "assignCurriculumList",
        value: function assignCurriculumList(data) {
          this.curriculumList = [];

          for (var i = 0; i < data.length; i++) {
            this.curriculumList.push(data[i]);
          }
        }
      }, {
        key: "onError",
        value: function onError(errorMessage) {
          this.pluginService.alertMessage(errorMessage, "error");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.nodeOnSelected();
        }
      }, {
        key: "onCurriculumChange",
        value: function onCurriculumChange() {
          var gradesApplicableFrom, gradesApplicableTo;

          if (this.selectedCurriculum) {
            gradesApplicableFrom = this.selectedCurriculum.gradesApplicableFrom;
            gradesApplicableTo = this.selectedCurriculum.gradesApplicableTo;
            this.generateGradeList(gradesApplicableFrom, gradesApplicableTo);
          }

          this.selectedGrade = null;
          this.selectedSubject = null;
          this.selectedLesson = null;
        }
      }, {
        key: "onGradeChange",
        value: function onGradeChange() {
          var _this92 = this;

          var curriculumId, gradeId, status;

          if (this.selectedGrade) {
            curriculumId = this.selectedCurriculum.id;
            gradeId = this.selectedGrade.id;
            status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_12__["ACTIVE"];
            this.subjectService.getSubjectByCurriculumIdAndGradeId(curriculumId, gradeId, status).subscribe(function (res) {
              return _this92.assignSubjectList(res.body);
            }, function (res) {
              return _this92.onError(res.message);
            });
          }

          this.selectedSubject = null;
          this.selectedLesson = null;
        }
      }, {
        key: "onSubjectChange",
        value: function onSubjectChange() {
          if (this.selectedSubject) {
            var subjectId = this.selectedSubject.id;
            this.loadSubjectTree(subjectId);
          }

          this.selectedLesson = null;
        }
      }, {
        key: "assignSubjectList",
        value: function assignSubjectList(data) {
          this.subjectList = [];
          this.subjectTree = [];
          this.pluginService.jsTree("#viewSubjectTree", this.subjectTree, false);

          for (var i = 0; i < data.length; i++) {
            this.subjectList.push(data[i]);
          }
        }
      }, {
        key: "generateGradeList",
        value: function generateGradeList(min, max) {
          this.gradeList = [];

          for (var i = min; i <= max; i++) {
            this.gradeList.push({
              "id": i,
              "name": i
            });
          }

          return this.gradeList;
        }
      }, {
        key: "loadSubjectTree",
        value: function loadSubjectTree(subjectId) {
          var _this93 = this;

          this.subjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) {
            return _this93.assignSubjectTree(res.body);
          }, function (res) {
            return _this93.onError(res.message);
          });
        }
      }, {
        key: "assignSubjectTree",
        value: function assignSubjectTree(data) {
          this.lessonList = [];
          $("#lesson").val("").trigger('change');
          this.subjectTree = data;
          this.lessonList = this.subjectTree.filter(function (item) {
            return item.type === 'lesson';
          });
          this.pluginService.jsTree("#viewSubjectTree", this.subjectTree, false);
        }
      }, {
        key: "getLessonTopicList",
        value: function getLessonTopicList() {
          var _this94 = this;

          if (this.selectedLesson) {
            var lessonId = this.selectedLesson.data.id;

            if (lessonId) {
              this.topicQuestionService.getLessonTopicListByLessonId(lessonId).subscribe(function (res) {
                return _this94.assignLessonTopicsList(res.body);
              }, function (res) {
                return _this94.onError(res.message);
              });
            } else {
              this.pluginService.alertMessage("Please select a filter and then apply", "error");
            }
          }
        }
      }, {
        key: "assignLessonTopicsList",
        value: function assignLessonTopicsList(data) {
          var topicsList = [],
              treeTopicsList = [];
          topicsList = data.lessonTopics;

          for (var i = 0; i < topicsList.length; i++) {
            treeTopicsList.push({
              text: topicsList[i].topicName,
              generalTopicId: topicsList[i].generalTopicId,
              id: topicsList[i].id
            });
          }

          this.pluginService.jsTree("#topicsList", treeTopicsList, false);
          this.showQuestionMapping = false;
          this.showTopicHeading = true;
          this.enableExpandNode = false;
        }
      }, {
        key: "nodeOnSelected",
        value: function nodeOnSelected() {
          var localThisObj = this;
          $('#topicsList').on('changed.jstree', function (e, data) {
            var i, j;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.generalTopicId = data.node.original.generalTopicId;
              localThisObj.topicName = data.node.original.text;
              localThisObj.generalTopicQuestions = [];
              localThisObj.orgGeneralTopicQuestions = [];
              localThisObj.ownTopicQuestions = [];
              localThisObj.getTopicQuestionList(localThisObj.generalTopicId);
              localThisObj.getOrgGeneralTopicQuestionByOrganisationId(localThisObj.generalTopicId);
              localThisObj.getOrganisationList();
              localThisObj.getQuestionPreference(localThisObj.generalTopicId);
              localThisObj.showQuestionMapping = true;
              localThisObj.tableAction = true;
            }
          });
        }
      }, {
        key: "getTopicQuestionList",
        value: function getTopicQuestionList(generalTopicId) {
          var _this95 = this;

          this.topicQuestionService.getTopicDetails(generalTopicId).subscribe(function (res) {
            return _this95.assignResponseToTopicQuestionList(res.body);
          }, function (res) {
            return _this95.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToTopicQuestionList",
        value: function assignResponseToTopicQuestionList(data) {
          var questionDetails = [],
              question,
              complexityLevel,
              questionType;
          this.generalTopicQuestions = [];
          this.ownTopicQuestions = [];
          this.generalTopicQuestionResources = [];
          this.ownTopicQuestionResources = [];
          this.generalTopicQuestionResources = data.questions;
          this.ownTopicQuestionResources = data.orgGeneralTopicQuestions;

          for (var i = 0; i < this.generalTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.generalTopicQuestionResources[i].contentJson));

            for (var j = 0; j < questionDetails.length; j++) {
              question = questionDetails[j].Question;

              if (this.generalTopicQuestionResources[i].complexityLevel === 1) {
                complexityLevel = "Low";
              } else if (this.generalTopicQuestionResources[i].complexityLevel === 2) {
                complexityLevel = "Medium";
              } else if (this.generalTopicQuestionResources[i].complexityLevel === 3) {
                complexityLevel = "High";
              } else {
                complexityLevel = "";
              }

              if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                questionType = "MCQ single answer";
              } else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                questionType = "MCQ multiple answers";
              } else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                questionType = "Choice matrix";
              } else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                questionType = "MCQ true or false";
              } else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                questionType = "MCQ match list";
              } else {
                questionType = "";
              }

              this.generalTopicQuestions.push({
                id: this.generalTopicQuestionResources[i].id,
                questionCategory: this.titleCapitalize(this.generalTopicQuestionResources[i].category),
                complexityLevel: complexityLevel,
                questionText: question,
                questionType: questionType,
                generalTopicId: this.generalTopicQuestionResources[i].generalTopicId
              });
            }
          }

          for (var _i = 0; _i < this.ownTopicQuestionResources.length; _i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.ownTopicQuestionResources[_i].question.contentJson));

            for (var _j = 0; _j < questionDetails.length; _j++) {
              question = questionDetails[_j].Question;

              if (this.ownTopicQuestionResources[_i].question.complexityLevel === 1) {
                complexityLevel = "Low";
              } else if (this.ownTopicQuestionResources[_i].question.complexityLevel === 2) {
                complexityLevel = "Medium";
              } else if (this.ownTopicQuestionResources[_i].question.complexityLevel === 3) {
                complexityLevel = "High";
              } else {
                complexityLevel = "";
              }

              if (questionDetails[_j].QuestionType === "MCQ_SINGLE") {
                questionType = "MCQ single answer";
              } else if (questionDetails[_j].QuestionType === "MCQ_MULTIPLE") {
                questionType = "MCQ multiple answers";
              } else if (questionDetails[_j].QuestionType === "MCQ_CHOICE_MATRIX") {
                questionType = "Choice matrix";
              } else if (questionDetails[_j].QuestionType === "MCQ_TRUE_FALSE") {
                questionType = "MCQ true or false";
              } else if (questionDetails[_j].QuestionType === "MCQ_MATCH_LIST") {
                questionType = "MCQ match list";
              } else {
                questionType = "";
              }

              this.ownTopicQuestions.push({
                id: this.ownTopicQuestionResources[_i].id,
                questionCategory: this.titleCapitalize(this.ownTopicQuestionResources[_i].question.category),
                complexityLevel: complexityLevel,
                questionText: question,
                questionType: questionType,
                generalTopicId: this.ownTopicQuestionResources[_i].generalTopicId,
                questionId: this.ownTopicQuestionResources[_i].question.id
              });
            }
          }
        }
      }, {
        key: "getOrgGeneralTopicQuestionByOrganisationId",
        value: function getOrgGeneralTopicQuestionByOrganisationId(generalTopicId) {
          var _this96 = this;

          //User login Information for organisationId 
          this.organisationId = this.userLoginService.organisationId;
          this.topicQuestionService.getOrgGeneralTopicQuestionsByOrgId(generalTopicId, this.organisationId).subscribe(function (res) {
            return _this96.assignResponseToOrgTopicQuestionList(res.body);
          }, function (res) {
            return _this96.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToOrgTopicQuestionList",
        value: function assignResponseToOrgTopicQuestionList(data) {
          var questionDetails = [],
              question,
              complexityLevel,
              questionType;
          this.orgGeneralTopicQuestions = [];
          this.orgTopicQuestionResources = [];
          this.orgTopicQuestionResources = data;

          for (var i = 0; i < this.orgTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.orgTopicQuestionResources[i].question.contentJson));

            for (var j = 0; j < questionDetails.length; j++) {
              question = questionDetails[j].Question;

              if (this.orgTopicQuestionResources[i].question.complexityLevel === 1) {
                complexityLevel = "Low";
              } else if (this.orgTopicQuestionResources[i].question.complexityLevel === 2) {
                complexityLevel = "Medium";
              } else if (this.orgTopicQuestionResources[i].question.complexityLevel === 3) {
                complexityLevel = "High";
              } else {
                complexityLevel = "";
              }

              if (questionDetails[j].QuestionType === "MCQ_SINGLE") {
                questionType = "MCQ single answer";
              } else if (questionDetails[j].QuestionType === "MCQ_MULTIPLE") {
                questionType = "MCQ multiple answers";
              } else if (questionDetails[j].QuestionType === "MCQ_CHOICE_MATRIX") {
                questionType = "Choice matrix";
              } else if (questionDetails[j].QuestionType === "MCQ_TRUE_FALSE") {
                questionType = "MCQ true or false";
              } else if (questionDetails[j].QuestionType === "MCQ_MATCH_LIST") {
                questionType = "MCQ match list";
              } else {
                questionType = "";
              }

              this.orgGeneralTopicQuestions.push({
                id: this.orgTopicQuestionResources[i].question.id,
                question: question,
                questionCategory: this.titleCapitalize(this.orgTopicQuestionResources[i].question.category),
                complexityLevel: complexityLevel,
                questionType: questionType,
                generalTopicId: this.orgTopicQuestionResources[i].generalTopicId
              });
            }
          }
        }
      }, {
        key: "titleCapitalize",
        value: function titleCapitalize(word) {
          if (!word) return word;
          return word[0].toUpperCase() + word.substr(1).toLowerCase();
        }
      }, {
        key: "getOrgTopicQuestiontByOrgId",
        value: function getOrgTopicQuestiontByOrgId() {
          var _this97 = this;

          var organisationId = this.selectedOrganisation.id;
          this.topicQuestionService.getOrgGeneralTopicQuestionsByOrgId(this.generalTopicId, organisationId).subscribe(function (res) {
            return _this97.assignResponseToOrgTopicQuestionListByOrgId(res.body);
          }, function (res) {
            return _this97.onError(res.message);
          });
        }
      }, {
        key: "assignResponseToOrgTopicQuestionListByOrgId",
        value: function assignResponseToOrgTopicQuestionListByOrgId(data) {
          var questionDetails = [],
              question;
          this.orgGeneralTopicQuestions = [];
          this.orgTopicQuestionResources = [];
          this.orgTopicQuestionResources = data;

          for (var i = 0; i < this.orgTopicQuestionResources.length; i++) {
            questionDetails = [];
            questionDetails.push(this.questionBuilderService.convertStringToJson(this.orgTopicQuestionResources[i].question.contentJson));

            for (var j = 0; j < questionDetails.length; j++) {
              question = questionDetails[j].Question;
              this.orgGeneralTopicQuestions.push({
                id: this.orgTopicQuestionResources[i].question.id,
                question: question,
                questionType: questionDetails[j].QuestionType,
                generalTopicId: this.orgTopicQuestionResources[i].generalTopicId
              });
            }
          }
        }
      }, {
        key: "getOrganisationList",
        value: function getOrganisationList() {
          var _this98 = this;

          this.organisationService.getOrganisations().subscribe(function (res) {
            return _this98.assignOrgList(res.body);
          }, function (res) {
            return _this98.onError(res.message);
          });
        }
      }, {
        key: "assignOrgList",
        value: function assignOrgList(data) {
          this.organisations = data;
        }
      }, {
        key: "openSubjectTreeModal",
        value: function openSubjectTreeModal() {
          this.pluginService.showModalWindow("#viewSubjectTreeModal");
        }
      }, {
        key: "closeSubjectTreeModal",
        value: function closeSubjectTreeModal() {
          this.pluginService.hideModalWindow("#viewSubjectTreeModal");
        }
      }, {
        key: "checkSelectedOwnQuestions",
        value: function checkSelectedOwnQuestions(event) {
          var selectedId, checked, index;
          checked = event.target.checked;
          selectedId = event.target.id;

          if (checked === true) {
            this.tableAction = false;
            this.questionIds.push(selectedId);
          } else if (checked === false) {
            index = this.questionIds.findIndex(function (item) {
              return item === selectedId;
            });
            this.questionIds.splice(index, 1);
          }

          this.questionIds = this.removeDuplicateElements(this.questionIds);

          if (this.questionIds.length <= 0) {
            this.tableAction = true;
          }
        }
      }, {
        key: "removeDuplicateElements",
        value: function removeDuplicateElements(array) {
          var temp = [];

          for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
              temp.push(array[i]);
            }
          }

          return temp;
        }
      }, {
        key: "deleteTopicQuestions",
        value: function deleteTopicQuestions() {
          var localthisObject = this;
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
              if (localthisObject.questionIds.length > 0) {
                localthisObject.subscribeToDeleteResponse(localthisObject.topicQuestionService.deleteOwnTopicQuestions(localthisObject.questionIds));
              }
            }
          });
        }
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(result) {
          var _this99 = this;

          result.subscribe(function (res) {
            return _this99.onDeleteSuccess(res);
          }, function (errRes) {
            return _this99.onDeleteError(errRes);
          });
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(res) {
          this.pluginService.alertMessage("Topic question deleted successfully", "success");
          this.ownTopicQuestions = [];
          this.questionIds = [];
          this.getTopicQuestionList(this.generalTopicId);
          this.tableAction = true;
        }
      }, {
        key: "onDeleteError",
        value: function onDeleteError(errRes) {
          this.pluginService.alertMessage("Could not delete, please contact admin", "error");
        }
      }, {
        key: "resetSelectedOwnTopicQuestions",
        value: function resetSelectedOwnTopicQuestions() {
          this.questionIds = [];
          $(".checkAll").prop("checked", false);
          this.tableAction = true;
        }
      }, {
        key: "checkQuestionPreference",
        value: function checkQuestionPreference(event) {
          var check = event.target.checked;
          var name = event.target.id;

          if (check === true && name === "QuestionCE") {
            this.questionPreferenceStatus = false;
          } else if (check === true && name === "OwnQuestion") {
            this.questionPreferenceStatus = true;
          }
        }
      }, {
        key: "getQuestionPreference",
        value: function getQuestionPreference(generalTopicId) {
          var _this100 = this;

          //User login Information for organisationId 
          var orgId = this.userLoginService.organisationId;
          this.topicQuestionService.getQuestionPreference(orgId, generalTopicId).subscribe(function (res) {
            return _this100.onGetPreferenceSuccess(res.body);
          }, function (res) {
            return _this100.onError(res.message);
          });
        }
      }, {
        key: "onGetPreferenceSuccess",
        value: function onGetPreferenceSuccess(acitveStatus) {
          if (acitveStatus === "" || acitveStatus === null || acitveStatus === false) {
            this.checkQuestionCE = true;
            this.checkOwnQuestion = false;
          } else if (acitveStatus === true) {
            this.checkQuestionCE = false;
            this.checkOwnQuestion = true;
          }
        }
      }, {
        key: "saveQuestionPreference",
        value: function saveQuestionPreference() {
          if (this.questionPreferenceStatus === false) {
            if (this.generalTopicQuestions.length <= 0) {
              this.pluginService.alertMessage("Before set question preference atleast one general topic question is mandatory", "error");
            } else {
              this.setQuestionPreference();
            }
          } else if (this.questionPreferenceStatus === true) {
            if (this.ownTopicQuestions.length <= 0) {
              this.pluginService.alertMessage("Please add atleast one own topic question and do preference", "error");
            } else {
              this.setQuestionPreference();
            }
          }
        }
      }, {
        key: "setQuestionPreference",
        value: function setQuestionPreference() {
          var _this101 = this;

          this.topicQuestionService.setQuestionPreference(this.questionPreferenceStatus, this.generalTopicId, this.organisationId).subscribe(function (res) {
            return _this101.onSuccess(res.body);
          }, function (res) {
            return _this101.onError(res.message);
          });
        }
      }, {
        key: "onSuccess",
        value: function onSuccess(data) {
          this.pluginService.alertMessage("Question preference saved successfully", "success");
        }
      }, {
        key: "toggleTreeNodes",
        value: function toggleTreeNodes() {
          this.enableExpandNode = !this.enableExpandNode;

          if (this.enableExpandNode) {
            this.pluginService.openJsTreeAllNodes("#viewSubjectTree");
          } else {
            this.pluginService.closeJsTreeAllNodes("#viewSubjectTree");
          }
        }
      }, {
        key: "loadUpdatedTopicQuestion",
        value: function loadUpdatedTopicQuestion() {
          this.getTopicQuestionList(this.generalTopicId);
          this.getOrgGeneralTopicQuestionByOrganisationId(this.generalTopicId);
        }
      }, {
        key: "openGeneralTopicSimulateQuestionModal",
        value: function openGeneralTopicSimulateQuestionModal() {
          this.pluginService.showModalWindow("#simulateTopicQuestionModal");
          this.simulateGeneralTopicQuestionList(this.generalTopicQuestionResources);
        }
      }, {
        key: "openOrgTopicSimulateQuestionModal",
        value: function openOrgTopicSimulateQuestionModal() {
          this.pluginService.showModalWindow("#simulateTopicQuestionModal");
          this.simulateOwnTopicQuestionList(this.orgTopicQuestionResources);
        }
      }, {
        key: "openOwnTopicSimulateQuestionModal",
        value: function openOwnTopicSimulateQuestionModal() {
          this.pluginService.showModalWindow("#simulateTopicQuestionModal");
          this.simulateOwnTopicQuestionList(this.ownTopicQuestionResources);
        }
      }, {
        key: "closeSimulateQuestionModal",
        value: function closeSimulateQuestionModal() {
          this.pluginService.hideModalWindow("#simulateTopicQuestionModal");
        }
      }, {
        key: "openGeneralTopicPreviewQuestionModal",
        value: function openGeneralTopicPreviewQuestionModal() {
          this.pluginService.showModalWindow("#previewTopicQuestionModal");
          this.previewGeneralTopicQuestionList(this.generalTopicQuestionResources);
        }
      }, {
        key: "openOrgTopicPreviewQuestionModal",
        value: function openOrgTopicPreviewQuestionModal() {
          this.pluginService.showModalWindow("#previewTopicQuestionModal");
          this.previewOwnTopicQuestionList(this.orgTopicQuestionResources);
        }
      }, {
        key: "openOwnTopicPreviewQuestionModal",
        value: function openOwnTopicPreviewQuestionModal() {
          this.pluginService.showModalWindow("#previewTopicQuestionModal");
          this.previewOwnTopicQuestionList(this.ownTopicQuestionResources);
        }
      }, {
        key: "closePreviewQuestionModal",
        value: function closePreviewQuestionModal() {
          this.pluginService.hideModalWindow("#previewTopicQuestionModal");
        }
      }, {
        key: "previewGeneralTopicQuestionList",
        value: function previewGeneralTopicQuestionList(questionResources) {
          var questionDetails,
              options = [],
              answers = [],
              choices = [];
          this.topicQuestions = [];

          for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].contentJson);

            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
              answers = [];
              choices = [];
              options = questionDetails.Options;
              choices = questionDetails.Choices;

              var _loop13 = function _loop13(k) {
                answers.push({
                  choiceName: choices.find(function (item) {
                    return item.ChoiceId === questionDetails.Answers[k].ChoiceId;
                  }).ChoiceText,
                  optionName: options.find(function (item) {
                    return item.OptionId === questionDetails.Answers[k].OptionId;
                  }).OptionText
                });
              };

              for (var k = 0; k < questionDetails.Answers.length; k++) {
                _loop13(k);
              }
            } else if (questionDetails.QuestionType === "MCQ_SINGLE" || questionDetails.QuestionType === "MCQ_MULTIPLE" || questionDetails.QuestionType === "MCQ_TRUE_FALSE") {
              options = [];
              answers = [];

              var _loop14 = function _loop14(j) {
                var answerText = questionDetails.Choices.find(function (item) {
                  return item.ChoiceId === questionDetails.Answers[j];
                }).ChoiceText;
                answers.push(answerText);
                answerText = "";
              };

              for (var j = 0; j < questionDetails.Answers.length; j++) {
                _loop14(j);
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
      }, {
        key: "simulateGeneralTopicQuestionList",
        value: function simulateGeneralTopicQuestionList(questionResources) {
          var questionDetails,
              options = [],
              choices = [];
          this.topicQuestions = [];

          for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].contentJson);

            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
              options = this.shuffleArray(questionDetails.Options);
              choices = questionDetails.Choices;
            } else {
              options = [];
              choices = this.shuffleArray(questionDetails.Choices);
            }

            this.topicQuestions.push({
              id: questionResources[i].id,
              question: questionDetails.Question,
              questionType: questionDetails.QuestionType,
              generalTopicId: questionResources[i].generalTopicId,
              questionId: questionResources[i].id,
              choices: choices,
              options: options,
              answers: questionDetails.Answers,
              checkAnswer: ""
            });
          }
        }
      }, {
        key: "previewOwnTopicQuestionList",
        value: function previewOwnTopicQuestionList(questionResources) {
          var questionDetails,
              options = [],
              answers = [],
              choices = [];
          this.topicQuestions = [];

          for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].question.contentJson);

            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
              answers = [];
              choices = [];
              options = questionDetails.Options;
              choices = questionDetails.Choices;

              var _loop15 = function _loop15(k) {
                answers.push({
                  choiceName: choices.find(function (item) {
                    return item.ChoiceId === questionDetails.Answers[k].ChoiceId;
                  }).ChoiceText,
                  optionName: options.find(function (item) {
                    return item.OptionId === questionDetails.Answers[k].OptionId;
                  }).OptionText
                });
              };

              for (var k = 0; k < questionDetails.Answers.length; k++) {
                _loop15(k);
              }
            } else if (questionDetails.QuestionType === "MCQ_SINGLE" || questionDetails.QuestionType === "MCQ_MULTIPLE" || questionDetails.QuestionType === "MCQ_TRUE_FALSE") {
              options = [];
              answers = [];

              var _loop16 = function _loop16(j) {
                var answerText = questionDetails.Choices.find(function (item) {
                  return item.ChoiceId === questionDetails.Answers[j];
                }).ChoiceText;
                answers.push(answerText);
                answerText = "";
              };

              for (var j = 0; j < questionDetails.Answers.length; j++) {
                _loop16(j);
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
      }, {
        key: "simulateOwnTopicQuestionList",
        value: function simulateOwnTopicQuestionList(questionResources) {
          var questionDetails,
              options = [],
              choices = [];
          this.topicQuestions = [];

          for (var i = 0; i < questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(questionResources[i].question.contentJson);

            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
              options = this.shuffleArray(questionDetails.Options);
              choices = questionDetails.Choices;
            } else {
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
      }, {
        key: "shuffleArray",
        value: function shuffleArray(array) {
          array.sort(function () {
            return Math.random() - 0.5;
          });
          return array;
        }
      }, {
        key: "onSelectMCQSingleAnswer",
        value: function onSelectMCQSingleAnswer(questionId, choiceId) {
          var topicIndex;
          topicIndex = this.topicQuestions.findIndex(function (item) {
            return item.id === questionId;
          });

          for (var i = 0; i < this.topicQuestions[topicIndex].answers.length; i++) {
            if (this.topicQuestions[topicIndex].answers[i] === choiceId) {
              this.topicQuestions[topicIndex].checkAnswer = "Correct";
            } else {
              this.topicQuestions[topicIndex].checkAnswer = "Wrong";
            }
          }
        }
      }, {
        key: "onSelectMCQMultipleAnswer",
        value: function onSelectMCQMultipleAnswer(questionId, choiceId, event) {
          var topicIndex, checked, choiceIndex;
          checked = event.target.checked;
          topicIndex = this.topicQuestions.findIndex(function (item) {
            return item.id === questionId;
          });

          if (checked === true) {
            this.selectedAnswer.push(choiceId);
          } else {
            choiceIndex = this.selectedAnswer.findIndex(function (item) {
              return item === choiceId;
            });
            this.selectedAnswer.splice(choiceIndex, 1);
          }

          this.checkMultipleAnswer(topicIndex);
        }
      }, {
        key: "checkMultipleAnswer",
        value: function checkMultipleAnswer(index) {
          var answers = this.topicQuestions[index].answers.sort();
          var selectedAnswers = this.selectedAnswer.sort();
          var duplicateAnswers = [];

          for (var i = 0; i < answers.length; i++) {
            for (var j = 0; j < selectedAnswers.length; j++) {
              if (answers[i] === selectedAnswers[j]) {
                duplicateAnswers.push(selectedAnswers[j]);
                this.topicQuestions[index].checkAnswer = "Partial";
              } else {
                this.topicQuestions[index].checkAnswer = "Wrong";
              }
            }
          }

          if (duplicateAnswers.length > 0) {
            if (duplicateAnswers.length === answers.length) {
              if (JSON.stringify(duplicateAnswers.sort()) === JSON.stringify(selectedAnswers)) {
                this.topicQuestions[index].checkAnswer = "Correct";
              } else {
                this.topicQuestions[index].checkAnswer = "Partial";
              }
            } else {
              this.topicQuestions[index].checkAnswer = "Partial";
            }
          }
        }
      }, {
        key: "onSelectChoiceMatrixAnswer",
        value: function onSelectChoiceMatrixAnswer(questionId, choiceId, optionId) {
          var _this102 = this;

          var topicIndex, index;
          topicIndex = this.topicQuestions.findIndex(function (item) {
            return item.id === questionId;
          });

          if (this.selectedAnswer.length === 0) {
            this.selectedAnswer = [];
          }

          this.selectedAnswer.push({
            ChoiceId: choiceId,
            OptionId: optionId
          });

          if (this.selectedAnswer.length > 1) {
            var _loop17 = function _loop17(i) {
              for (var j = i + 1; j < _this102.selectedAnswer.length; j++) {
                if (_this102.selectedAnswer[i].ChoiceId === _this102.selectedAnswer[j].ChoiceId) {
                  index = _this102.selectedAnswer.findIndex(function (item) {
                    return item.ChoiceId === _this102.selectedAnswer[i].ChoiceId;
                  });

                  _this102.selectedAnswer.splice(index, 1);
                }
              }
            };

            for (var i = 0; i < this.selectedAnswer.length; i++) {
              _loop17(i);
            }
          }

          this.checkMatrixAndMatchListAnswers(topicIndex);
        }
      }, {
        key: "checkAnswerStatus",
        value: function checkAnswerStatus(questionId) {
          var topicIndex = this.topicQuestions.findIndex(function (item) {
            return item.id === questionId;
          });

          if (this.topicQuestions[topicIndex].checkAnswer === "Correct") {
            this.pluginService.alertMessage("Good keep going...Correct answer", "success");
          } else if (this.topicQuestions[topicIndex].checkAnswer === "Partial") {
            this.pluginService.alertMessage("This is partially correct", "warning");
          } else if (this.topicQuestions[topicIndex].checkAnswer === "Wrong") {
            this.pluginService.alertMessage("Oops..! this is wrong", "error");
          } else {
            this.pluginService.alertMessage("Please select a answer and check it", "error");
          }
        }
      }, {
        key: "updatedDropList",
        value: function updatedDropList(questionId, event) {
          var topicIndex = this.topicQuestions.findIndex(function (item) {
            return item.id === questionId;
          });

          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.selectedAnswer = [];

            for (var i = 0; i < this.topicQuestions[topicIndex].choices.length; i++) {
              for (var j = 0; j < this.topicQuestions[topicIndex].options.length; j++) {
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
      }, {
        key: "checkMatrixAndMatchListAnswers",
        value: function checkMatrixAndMatchListAnswers(index) {
          var sortArr1,
              sortArr2,
              duplicateAnswers = [];

          for (var i = 0; i < this.topicQuestions[index].answers.length; i++) {
            for (var j = 0; j < this.selectedAnswer.length; j++) {
              if (this.topicQuestions[index].answers[i].ChoiceId === this.selectedAnswer[j].ChoiceId) {
                if (this.topicQuestions[index].answers[i].OptionId === this.selectedAnswer[j].OptionId) {
                  duplicateAnswers.push({
                    ChoiceId: this.selectedAnswer[j].ChoiceId,
                    OptionId: this.selectedAnswer[j].OptionId
                  });
                }
              } else {
                this.topicQuestions[index].checkAnswer = "Wrong";
              }
            }
          }

          if (duplicateAnswers.length > 0) {
            sortArr1 = function sortArr1(obj1, obj2) {
              return obj1.ChoiceId - obj2.ChoiceId;
            };

            var sortedArray1 = duplicateAnswers.sort(sortArr1);

            sortArr2 = function sortArr2(obj1, obj2) {
              return obj1.ChoiceId - obj2.ChoiceId;
            };

            var sortedArray2 = this.selectedAnswer.sort(sortArr2);

            if (duplicateAnswers.length === this.topicQuestions[index].answers.length) {
              if (JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2)) {
                this.topicQuestions[index].checkAnswer = "Correct";
              } else {
                this.topicQuestions[index].checkAnswer = "Partial";
              }
            } else {
              this.topicQuestions[index].checkAnswer = "Partial";
            }
          }
        }
      }, {
        key: "previousQuestion",
        value: function previousQuestion() {
          this.selectedAnswer = [];
        }
      }, {
        key: "nextQuestion",
        value: function nextQuestion() {
          this.selectedAnswer = [];
        }
      }]);

      return CurriculumTopicQuestionManageComponent;
    }();

    CurriculumTopicQuestionManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumService"]
      }, {
        type: _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationService"]
      }, {
        type: _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__["SubjectService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_5__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]
      }, {
        type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"]
      }, {
        type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]
      }];
    };

    CurriculumTopicQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic-question-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-manage.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _curriculum_curriculum_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumService"], _organisation_organisation_service__WEBPACK_IMPORTED_MODULE_10__["OrganisationService"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_9__["SubjectService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_5__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"], _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"], _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_8__["QuestionBuilderService"]])], CurriculumTopicQuestionManageComponent);
    /***/
  },

  /***/
  "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CurriculumTopicQuestionUpdateComponent */

  /***/
  function srcAppSyllabusLessonTopicTopicQuestionTopicQuestionUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumTopicQuestionUpdateComponent", function () {
      return CurriculumTopicQuestionUpdateComponent;
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


    var _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../syllabus-lesson-topic.service */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.service.ts");
    /* harmony import */


    var _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/plugin/plugin.service */
    "./src/app/shared/plugin/plugin.service.ts");
    /* harmony import */


    var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../question-builder/question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/user-login-info/user-login-info.service */
    "./src/app/shared/user-login-info/user-login-info.service.ts");
    /* harmony import */


    var _question_builder_mcq_standard_mcq_standard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../question-builder/mcq-standard/mcq-standard.service */
    "./src/app/question-builder/mcq-standard/mcq-standard.service.ts");
    /* harmony import */


    var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../question-builder/mcq-choicematrix */
    "./src/app/question-builder/mcq-choicematrix/index.ts");
    /* harmony import */


    var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/common/common.service */
    "./src/app/shared/common/common.service.ts");

    var CurriculumTopicQuestionUpdateComponent =
    /*#__PURE__*/
    function () {
      function CurriculumTopicQuestionUpdateComponent(activatedRoute, router, pluginService, questionBuilderService, questionService, formBuilder, userLoginService, commonService) {
        var _this103 = this;

        _classCallCheck(this, CurriculumTopicQuestionUpdateComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.userLoginService = userLoginService;
        this.commonService = commonService;
        this.questionDetail = {};
        this.viewModel = {};
        this.answers = [];
        this.questionCategory = [];
        this.questionComplexityLevel = [];
        this.contentSource = [];
        this.editorQuestionConfig = this.pluginService.getCKEditorQuestionConfig();
        this.editorChoiceConfig = this.pluginService.getCKEditorChoiceConfig();
        this.validateQuestion = true;
        this.getCurrentRouteInfo();
        this.activatedRoute.data.subscribe(function (args) {
          if (args.type === "MCQ_MATCH_LIST") {
            _this103.viewModel.QuestionType = args.type;
          }
        });
      }

      _createClass(CurriculumTopicQuestionUpdateComponent, [{
        key: "getCurrentRouteInfo",
        value: function getCurrentRouteInfo() {
          var splitArray = [],
              currentUrl;
          currentUrl = this.router.url;
          splitArray = currentUrl.split('/');
          this.currentRoute = splitArray.pop();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this104 = this;

          this.pluginService.sideMenuToggle();
          this.pluginService.newStepperJs();
          this.getContentSource();
          this.getQuestionCategory();
          this.getQuestionComplexityLevel();
          this.activatedRoute.params.subscribe(function (params) {
            _this104.questionId = params['id'];

            _this104.getQuestionDetail(_this104.questionId);
          });
        }
      }, {
        key: "loadUpdatedAnswers",
        value: function loadUpdatedAnswers() {
          if (this.viewModel.QuestionType === "MCQ_CHOICE_MATRIX") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showChoiceMatrixAnswers();
          } else if (this.viewModel.QuestionType === "MCQ_MULTIPLE" || this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showMCQAnswers();
          }
        }
      }, {
        key: "loadQuestionResource",
        value: function loadQuestionResource() {
          if (this.viewModel.QuestionType === "MCQ_CHOICE_MATRIX") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.showChoiceMatrixAnswers();
            this.validateQuestion = false;
          } else if (this.viewModel.QuestionType === "MCQ_MULTIPLE" || this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.questionBuilderService.generateQuestionResource(this.viewModel);
            this.validateQuestion = false;
            this.showMCQAnswers();
          }
        }
      }, {
        key: "getContentSource",
        value: function getContentSource() {
          var _this105 = this;

          this.commonService.getContentSourceList().subscribe(function (data) {
            _this105.contentSource = data;
          });
        }
      }, {
        key: "getQuestionCategory",
        value: function getQuestionCategory() {
          var _this106 = this;

          this.commonService.getQuestionCategoryList().subscribe(function (data) {
            _this106.questionCategory = data;
          });
        }
      }, {
        key: "getQuestionComplexityLevel",
        value: function getQuestionComplexityLevel() {
          var _this107 = this;

          this.commonService.getQuestionComplexityLevelList().subscribe(function (data) {
            _this107.questionComplexityLevel = data;
          });
        }
      }, {
        key: "onSelectQuestionCategory",
        value: function onSelectQuestionCategory(value) {
          this.category = value;
        }
      }, {
        key: "onSelectComplexityLevel",
        value: function onSelectComplexityLevel(value) {
          this.complexityLevel = value;
        }
      }, {
        key: "getQuestionDetail",
        value: function getQuestionDetail(questionId) {
          var _this108 = this;

          this.questionService.getQuestionByQuestionId(questionId).subscribe(function (res) {
            return _this108.assignQuestionResource(res.body);
          }, function (res) {
            return _this108.onError(res.message);
          });
        }
      }, {
        key: "assignQuestionResource",
        value: function assignQuestionResource(data) {
          var _this109 = this;

          var categoryIndex, levelIndex;
          this.questionDetail = data;
          this.viewModel = this.questionBuilderService.convertStringToJson(this.questionDetail.contentJson);

          if (this.viewModel.QuestionType === "MCQ_MULTIPLE") {
            this.choiceType = "checkbox";
          } else if (this.viewModel.QuestionType === "MCQ_SINGLE" || this.viewModel.QuestionType === "MCQ_TRUE_FALSE") {
            this.choiceType = "radio";
          }

          categoryIndex = this.questionCategory.findIndex(function (item) {
            return item.tag === _this109.questionDetail.category;
          });
          this.questionCategory[categoryIndex].checked = true;
          levelIndex = this.questionComplexityLevel.findIndex(function (item) {
            return item.value === _this109.questionDetail.complexityLevel;
          });
          this.questionComplexityLevel[levelIndex].checked = true;
          this.loadUpdatedAnswers();
        }
      }, {
        key: "onError",
        value: function onError(resp) {
          this.pluginService.alertMessage("Could not get question detail please contact admin", "error");
        }
      }, {
        key: "addChoice",
        value: function addChoice() {
          this.viewModel.Choices.push(new _question_builder_mcq_standard_mcq_standard_service__WEBPACK_IMPORTED_MODULE_8__["Choice"](new Date().getUTCMilliseconds(), ""));
        }
      }, {
        key: "deleteChoice",
        value: function deleteChoice(choiceId) {
          for (var i = 0; i < this.viewModel.Answers.length; i++) {
            if (this.viewModel.Answers[i] !== choiceId) {
              var index = this.viewModel.Choices.findIndex(function (item) {
                return item.ChoiceId === choiceId;
              });
              this.viewModel.Choices.splice(index, 1);
            } else {
              this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
            }
          }
        }
      }, {
        key: "deleteStem",
        value: function deleteStem(choiceId) {
          if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, choice is already related to answer", "error");
          } else {
            var index = this.viewModel.Choices.findIndex(function (item) {
              return item.ChoiceId === choiceId;
            });
            this.viewModel.Choices.splice(index, 1);
          }
        }
      }, {
        key: "markAsMCQAnswer",
        value: function markAsMCQAnswer(choiceId) {
          var index = this.viewModel.Answers.indexOf(choiceId);

          if (this.viewModel.QuestionType !== "MCQ_MULTIPLE") {
            this.viewModel.Answers = [];
          }

          if (index === -1) {
            this.viewModel.Answers = [].concat(_toConsumableArray(this.viewModel.Answers), [choiceId]);
          } else {
            this.viewModel.Answers = this.viewModel.Answers.filter(function (item) {
              return item !== choiceId;
            });
          }

          this.loadUpdatedAnswers();
        }
      }, {
        key: "showMCQAnswers",
        value: function showMCQAnswers() {
          var _this110 = this;

          this.answers = [];

          var _loop18 = function _loop18(j) {
            var answerText = _this110.viewModel.Choices.find(function (item) {
              return item.ChoiceId === _this110.viewModel.Answers[j];
            }).ChoiceText;

            _this110.answers.push(answerText);

            answerText = "";
          };

          for (var j = 0; j < this.viewModel.Answers.length; j++) {
            _loop18(j);
          }
        }
      }, {
        key: "showChoiceMatrixAnswers",
        value: function showChoiceMatrixAnswers() {
          var _this111 = this;

          var answers = [],
              matrixChoices = [],
              matrixOptions = [];
          this.answers = [];
          answers = this.viewModel.Answers;
          matrixChoices = this.viewModel.Choices;
          matrixOptions = this.viewModel.Options;

          var _loop19 = function _loop19(k) {
            _this111.answers.push({
              choiceName: matrixChoices.find(function (item) {
                return item.ChoiceId === answers[k].ChoiceId;
              }).ChoiceText,
              optionName: matrixOptions.find(function (item) {
                return item.OptionId === answers[k].OptionId;
              }).OptionText
            });
          };

          for (var k = 0; k < answers.length; k++) {
            _loop19(k);
          }
        }
      }, {
        key: "addOption",
        value: function addOption() {
          this.viewModel.Options = [].concat(_toConsumableArray(this.viewModel.Options), [new _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["Option"](new Date().getUTCMilliseconds(), "")]);
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(optionId) {
          if (this.viewModel.Answers.length > 0) {
            this.pluginService.alertMessage("You can't delete it, option is already related to answer", "error");
          } else {
            var index = this.viewModel.Options.findIndex(function (item) {
              return item.OptionId === optionId;
            });
            this.viewModel.Options.splice(index, 1);
          }
        }
      }, {
        key: "markAsMatrixAnswer",
        value: function markAsMatrixAnswer(choice, option) {
          this.viewModel.Answers = this.viewModel.Answers.filter(function (item) {
            return item.ChoiceId !== choice.ChoiceId;
          });
          this.viewModel.Answers = [].concat(_toConsumableArray(this.viewModel.Answers), [new _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_9__["Answer"](choice.ChoiceId, option.OptionId)]);
          this.loadUpdatedAnswers();
        }
      }, {
        key: "resetQuestion",
        value: function resetQuestion() {
          this.answers = [];
          this.getQuestionDetail(this.questionId);
        }
      }, {
        key: "updateQuestion",
        value: function updateQuestion() {
          var updatedQuestionResource = this.questionBuilderService.getQuestionResource;
          this.questionDetail.contentJson = this.questionBuilderService.convertJsonToString(JSON.stringify(updatedQuestionResource));
          this.questionDetail.solutionJson = this.questionBuilderService.convertJsonToString(JSON.stringify(this.solutionContent));
          this.questionDetail.marks = updatedQuestionResource.TotalMarks;

          if (this.category) {
            this.questionDetail.category = this.category;
          } else {
            this.questionDetail.category = this.questionCategory[0].tag;
          }

          if (this.complexityLevel) {
            this.questionDetail.complexityLevel = this.complexityLevel;
          } else {
            this.questionDetail.complexityLevel = 1;
          }

          this.subscribeToSaveResponse(this.questionService.updateQuestion(this.questionDetail));
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(result) {
          var _this112 = this;

          result.subscribe(function (resp) {
            return _this112.onSaveSuccess(resp);
          }, function (errRes) {
            return _this112.onSaveError(errRes);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          this.pluginService.alertMessage("Topic question updated successfully", "success");
          this.previousUrl();
        }
      }, {
        key: "onSaveError",
        value: function onSaveError(errRes) {
          this.pluginService.alertMessage("Could not save, please contact admin", "error");
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
          if (this.currentRoute === "topic-question-edit") {
            this.router.navigateByUrl('/lesson-topic/topic-question');
          } else if (this.currentRoute === "general-topic-question-edit") {
            this.router.navigateByUrl('/general-concept-and-topic/general-topic-question');
          } else {
            this.router.navigateByUrl('../');
          }
        }
      }]);

      return CurriculumTopicQuestionUpdateComponent;
    }();

    CurriculumTopicQuestionUpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
      }, {
        type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"]
      }, {
        type: _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"]
      }, {
        type: _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]
      }];
    };

    CurriculumTopicQuestionUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topic-question-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.html"))["default"],
      providers: [_syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_6__["QuestionBuilderService"], _syllabus_lesson_topic_service__WEBPACK_IMPORTED_MODULE_4__["SyllabusLessonTopicService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_user_login_info_user_login_info_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginInfoService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]])], CurriculumTopicQuestionUpdateComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~general-concept-topic-general-concept-topic-module~syllabus-lesson-topic-syllabus-lesson-topic-module-es5.js.map