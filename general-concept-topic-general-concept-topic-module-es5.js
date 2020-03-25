function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-concept-topic-general-concept-topic-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-concept-question-manage.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-concept-question-manage.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralConceptTopicGeneralConceptQuestionManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 filterbg my-4 rounded\">\r\n    <div class=\"filtericon font-20\">\r\n        <i class=\"fa fa-filter\"></i>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-start align-items-center\">\r\n        <div class=\"col-xxl-3 mb-3\">\r\n            <ng-select [items]=\"allGrades\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"name\"\r\n                placeholder=\"Select grade\" [(ngModel)]=\"selectedGeneralSubjectGrade\"\r\n                (change)=\"onGeneralSubjectGradeChange()\">\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-xxl-3 mb-3\">\r\n            <ng-select [items]=\"subjects\" bindLabel=\"title\" placeholder=\"Select subject\" [(ngModel)]=\"selectedSubject\">\r\n            </ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end pb-3 row\">\r\n        <div class=\"col-xxl-2\">\r\n            <button class=\"btn btn-success float-right waves-effect waves-light\" (click)=\"loadSubjectTree()\">\r\n                <i class=\"fa fa-filter mr-2\"></i>Apply\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xxl-4 mb-3 py-3\">\r\n        <div class=\"d-flex justify-content-start mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div class=\"btn btn-primary mr-2\" (click)=\"toggleTreeNodes()\">\r\n                <i class=\"fa fa-clone mr-2\"></i>\r\n                <span *ngIf=\"enableExpandNode === false\">\r\n                    Expand all\r\n                </span>\r\n                <span *ngIf=\"enableExpandNode === true\">\r\n                    Collapse all\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"tree-scroll\">\r\n            <div id=\"treeView\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xxl-8 mb-3 py-3\">\r\n\r\n        <div class=\"d-flex justify-content-start badge-lightBlue rounded p-2 mb-2\" *ngIf=\"subjectTree.length > 1\">\r\n            <div>\r\n                NOTE : <i class=\"fa fa-book ml-2\"></i> - Subject,<i class=\"fa fa-sitemap ml-2\"></i> - Concept,\r\n                <i class=\"fa fa-file ml-2\"></i> - Topic, <i class=\"fa fa-times text-danger ml-2\"></i> - No question is\r\n                mapped\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'root'\">\r\n            <p><b>Subject name</b></p>\r\n            <p>{{nodeName}}</p>\r\n            <p><b>Subject description</b></p>\r\n            <p>{{nodeDescription}}</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'concept'\">\r\n            <div class=\"w-100\">\r\n                <p><b>Concept description</b></p>\r\n                <p class=\"mb-2\">{{nodeDescription}}</p>\r\n            </div>\r\n            <div class=\"d-flex align-items-start flex-wrap justify-content-md-between justify-content-lg-end w-100\">\r\n                <div class=\"btn btn-info mb-2 mr-2\" (click)=\"openPreviewQuestionModal()\" *ngIf=\"questions.length > 0\">\r\n                    <i class=\"fa fa-list-alt mr-2\"></i> Preview questions\r\n                    <span class=\"badge badge-light\">{{questions.length}}</span>\r\n                </div>\r\n                <div class=\"btn btn-success mb-2 mr-2\" (click)=\"openSimulateQuestionModal()\"\r\n                    *ngIf=\"questions.length > 0\">\r\n                    <i class=\"fa fa-cogs mr-2\"></i> Simulate questions\r\n                    <span class=\"badge badge-light\">{{questions.length}}</span>\r\n                </div>\r\n                <a class=\"btn btn-primary text-white mb-2 mr-2\" target=\"_blank\"\r\n                    [routerLink]=\"['/general-concept-and-topic',topicId,'general-topic-question-create']\">\r\n                    <i class=\"fa fa-plus-circle mr-2\"></i> Create new question\r\n                </a>\r\n                <div class=\"btn btn-warning text-white mb-2\" (click)=\"loadUpdatedTopicQuestions()\">\r\n                    <i class=\"fa fa-refresh mr-2\"></i> Refresh\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"accordion\" id=\"questions\">\r\n                <div class=\"mb-2 acd-group\" *ngFor=\"let question of questions;let index=index\">\r\n                    <div class=\"card-header border\">\r\n                        <h5 class=\"mb-0\">\r\n                            <a href=\"#questionDetail{{question.id}}\"\r\n                                class=\"btn-block text-left text-muted acd-heading collapsed d-flex\"\r\n                                data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                                <div style=\"width: 99%;\" [MathJax]=\"question.questionText\">\r\n                                </div>\r\n                            </a>\r\n                        </h5>\r\n                    </div>\r\n                    <div id=\"questionDetail{{question.id}}\" class=\"collapse\" data-parent=\"#questions\">\r\n                        <div class=\"card-body p-3\">\r\n                            <div class=\"d-flex justify-content-between mb-2\">\r\n                                <div>\r\n                                    <b>Question type</b> : {{question.questionType}}\r\n                                </div>\r\n                                <div>\r\n                                    <b>Question category</b> : {{question.questionCategory}}\r\n                                </div>\r\n                                <div>\r\n                                    <b>Completexity level</b> : {{question.complexityLevel}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xxl-4 p-0 mb-2\">\r\n                                <ng-select [items]=\"topicsList\" [ngModelOptions]=\"{standalone: true}\" bindLabel=\"text\"\r\n                                    placeholder=\"Select topic\" [(ngModel)]=\"question.mappedTopic\">\r\n                                </ng-select>\r\n                            </div>\r\n                            <div class=\"d-flex justify-content-end w-100\">\r\n                                <a class=\"btn btn-info  mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                    target=\"_blank\"\r\n                                    [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-view' ]\">\r\n                                    <i class=\"fa fa-eye mr-2\"></i> View\r\n                                </a>\r\n                                <a class=\"btn btn-success mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                    target=\"_blank\"\r\n                                    [routerLink]=\"['/general-concept-and-topic', question.id, 'general-topic-question-edit' ]\">\r\n                                    <i class=\"fa fa-edit mr-2\"></i> Edit\r\n                                </a>\r\n                                <a class=\"btn btn-danger mr-2 mb-2 d-flex justify-content-center align-items-center\"\r\n                                    (click)=\"deleteTopicQuestions(question.id)\">\r\n                                    <i class=\"fa fa-trash mr-2\"></i> Delete\r\n                                </a>\r\n                                <a class=\"btn btn-success mb-2 d-flex justify-content-center align-items-center\"\r\n                                    (click)=\"updateQuestion()\">\r\n                                    <i class=\"fa fa-save mr-2\"></i> Save\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"nodeType === 'topic'\">\r\n            <div class=\"w-100\">\r\n                <p><b>Topic name</b></p>\r\n                <p class=\"mb-2\">{{nodeName}}</p>\r\n                <p><b>Topic description</b></p>\r\n                <p class=\"mb-2\">{{nodeDescription}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"simulateQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"simulateQuestionModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Simulate question - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionSimulateIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                (change)=\"onSelectMCQSingleAnswer(questiondata.id,choice.ChoiceId)\">\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\"\r\n                                                (click)=\"onSelectMCQMultipleAnswer(questiondata.id,choice.ChoiceId,$event)\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText  | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div cdkDropListGroup>\r\n                                    <div class=\"example-container d-flex justify-content-between flex-nowrap mb-2\">\r\n                                        <div class=\"mcq-left mr-2\">\r\n                                            <div class=\"match-list\" data-value=\"questiondata.choices\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.choices\"\r\n                                                    [MathJax]=\"item.ChoiceText  | sanitizeHtml\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"line-circle w-auto\" *ngFor=\"let item of viewModel.Choices\" id=\"{{item}}\"></div> -->\r\n                                        <div class=\"mcq-right ml-2\">\r\n                                            <div cdkDropList [cdkDropListData]=\"questiondata.options\" class=\"match-list\"\r\n                                                (cdkDropListDropped)=\"updatedDropList(questiondata.id, $event)\">\r\n                                                <div class=\"list-box\" *ngFor=\"let item of questiondata.options\" cdkDrag\r\n                                                    [MathJax]=\"item.OptionText  | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\"\r\n                                                    (click)=\"onSelectChoiceMatrixAnswer(questiondata.id,choice.ChoiceId, option.OptionId)\">\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\" (click)=\"previousQuestion()\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-info mx-2 mb-2\" (click)=\"checkAnswerStatus(questiondata.id)\">\r\n                                    <i class=\"fa fa-check mr-2\"></i>Check answer\r\n                                </div>\r\n                                <div class=\"btn btn-success mb-2\" href=\"#questionSimulateIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\"\r\n                                    (click)=\"nextQuestion()\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closeSimulateQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"previewQuestionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"previewQuestionModal\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-notify\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n                <h5 class=\"modal-title text-white\">\r\n                    Preview question - {{nodeName}}\r\n                </h5>\r\n                <div class=\"close btn btn-xl\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"questionPreviewIndicators\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\"\r\n                    data-interval=\"false\">\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item\" [ngClass]=\"{'active': questionIndex === 0}\"\r\n                            *ngFor=\"let questiondata of topicQuestions;let questionIndex = index;\">\r\n                            <div\r\n                                *ngIf=\"questiondata.questionType === 'MCQ_SINGLE' || questiondata.questionType === 'MCQ_MULTIPLE' || questiondata.questionType === 'MCQ_TRUE_FALSE'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question  | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row mb-3 p-3 text-capitalize\">\r\n                                    <div class=\"col-lg-6 col-md-12 d-flex justify-content-start mb-2\"\r\n                                        *ngFor=\"let choice of questiondata.choices;let i = index\">\r\n                                        <div class=\"radio\" *ngIf=\"questiondata.questionType !== 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"radio\" [id]=\"choice.ChoiceId\" name=\"answer\"\r\n                                                [answers]=\"questiondata.answers\" disabled readonly>\r\n                                            <label for=\"{{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <div class=\"checkbox\" *ngIf=\"questiondata.questionType === 'MCQ_MULTIPLE'\">\r\n                                            <input type=\"checkbox\" [id]=\"choice.ChoiceId\" name=\"answers\" disabled\r\n                                                readonly [answers]=\"questiondata.answers\">\r\n                                            <label for=\" {{choice.ChoiceId}}\"></label>\r\n                                        </div>\r\n                                        <label for=\"{{choice.ChoiceId}}\"\r\n                                            [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span class=\"text-dark\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_MATCH_LIST'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngFor=\"let answer of questiondata.answers;\">\r\n                                    <div class=\"choice-container\">\r\n                                        <div class=\"item\">\r\n                                            <div class=\"choice--group\">\r\n                                                <div class=\"choice--label\">\r\n                                                    <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"line-circle\">\r\n                                        </div>\r\n                                        <div class=\"item\">\r\n                                            <div class=\"drag--container\">\r\n                                                <div class=\"choice--editor option--container zone\" class=\"option--item\"\r\n                                                    [MathJax]=\"answer.optionName | sanitizeHtml\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"d-flex text-dark flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ' ,'}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"questiondata.questionType === 'MCQ_CHOICE_MATRIX'\">\r\n                                <div class=\"row mb-3\">\r\n                                    <div class=\"col-xxl-12\">\r\n                                        <div class=\"border-info p-3 alert-info font-18 d-flex\"\r\n                                            style=\"line-height: 24px;\">\r\n                                            <span class=\"text-info\">Q&nbsp;-&nbsp;{{questionIndex + 1}}.&nbsp;</span>\r\n                                            <span class=\"text-dark\" [MathJax]=\"questiondata.question | sanitizeHtml\">\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <table class=\"table-matrix my-2 text-capitalize\">\r\n                                    <tr class=\"bg-lightgray\">\r\n                                        <td></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <span class=\"text-dark\" [MathJax]=\"option.OptionText | sanitizeHtml\"></span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"background: none !important;\"\r\n                                        *ngFor=\"let choice of questiondata.choices\">\r\n                                        <td><span [MathJax]=\"choice.ChoiceText | sanitizeHtml\"></span></td>\r\n                                        <td *ngFor=\"let option of questiondata.options\">\r\n                                            <div class=\"radio\">\r\n                                                <input type=\"radio\" [id]=\"choice.ChoiceId+option.OptionId\"\r\n                                                    name=\"{{ choice.ChoiceId }}\" disabled readonly>\r\n                                                <label for=\"{{choice.ChoiceId+option.OptionId}}\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                                <div class=\"mb-3 font-18\">\r\n                                    <div class=\"border-success p-3 alert-success\">\r\n                                        <span class=\"text-success\">Answer&nbsp;:&nbsp;</span><span\r\n                                            class=\"d-flex text-dark flex-nowrap\"\r\n                                            *ngFor=\"let answer of questiondata.answers;let checkIndex =index\">\r\n                                            <span [MathJax]=\"answer.choiceName | sanitizeHtml\"></span> <span>-</span>\r\n                                            <span [MathJax]=\"answer.optionName | sanitizeHtml\"></span>\r\n                                            {{checkIndex  === questiondata.answers.length - 1? ' ' : ','}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"w-100 d-flex justify-content-end align-self-center my-2\">\r\n                                <div class=\"btn btn-danger mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"prev\" *ngIf=\"questionIndex !== 0\">\r\n                                    <i class=\"fa fa-arrow-left mr-2\"></i>Previous\r\n                                </div>\r\n                                <div class=\"btn btn-success ml-2  mb-2\" href=\"#questionPreviewIndicators\" role=\"button\"\r\n                                    data-slide=\"next\" *ngIf=\"questionIndex !== topicQuestions.length - 1\">\r\n                                    Next<i class=\"fa fa-arrow-right ml-2\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"btn btn-danger\" (click)=\"closePreviewQuestionModal()\">\r\n                    <i class=\"fa fa-times mr-2\"></i> Close\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/general-concept-topic/general-concept-question-manage.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/general-concept-topic/general-concept-question-manage.component.ts ***!
    \************************************************************************************/

  /*! exports provided: GeneralConceptQuestionManageComponent */

  /***/
  function srcAppGeneralConceptTopicGeneralConceptQuestionManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralConceptQuestionManageComponent", function () {
      return GeneralConceptQuestionManageComponent;
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


    var _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-concept-topic.service */
    "./src/app/general-concept-topic/general-concept-topic.service.ts");
    /* harmony import */


    var _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../question-builder/question-builder.service */
    "./src/app/question-builder/question-builder.service.ts");
    /* harmony import */


    var _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../general-subject/general-subject.service */
    "./src/app/general-subject/general-subject.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");
    /* harmony import */


    var _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/constants/common.constants */
    "./src/app/shared/constants/common.constants.ts");

    var GeneralConceptQuestionManageComponent =
    /*#__PURE__*/
    function () {
      function GeneralConceptQuestionManageComponent(_router, generalSubjectService, generalTopicQuestionService, pluginService, questionBuilderService, errorHandler) {
        _classCallCheck(this, GeneralConceptQuestionManageComponent);

        this._router = _router;
        this.generalSubjectService = generalSubjectService;
        this.generalTopicQuestionService = generalTopicQuestionService;
        this.pluginService = pluginService;
        this.questionBuilderService = questionBuilderService;
        this.errorHandler = errorHandler;
        this.subjectTree = [];
        this.questions = [];
        this.topicQuestions = [];
        this.questionResources = [];
        this.selectedAnswer = [];
        this.topicsList = [];
        this.allGrades = [];
        this.enableExpandNode = false;
        this.tableAction = true;
        this.allGrades = [{
          "id": 1,
          "name": 1
        }, {
          "id": 2,
          "name": 2
        }, {
          "id": 3,
          "name": 3
        }, {
          "id": 4,
          "name": 4
        }, {
          "id": 5,
          "name": 5
        }, {
          "id": 6,
          "name": 6
        }, {
          "id": 7,
          "name": 7
        }, {
          "id": 8,
          "name": 8
        }, {
          "id": 9,
          "name": 9
        }, {
          "id": 10,
          "name": 10
        }, {
          "id": 11,
          "name": 11
        }, {
          "id": 12,
          "name": 12
        }];
        this.selectedGeneralSubjectGrade = null;
      }

      _createClass(GeneralConceptQuestionManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onError",
        value: function onError(errRes) {
          this.errorHandler.handleError(errRes);
        }
      }, {
        key: "showConceptAndTopicDetails",
        value: function showConceptAndTopicDetails() {
          var localThisObj = this;
          $('#treeView').on('changed.jstree', function (e, data) {
            var i, j, conceptId;

            for (i = 0, j = data.selected.length; i < j; i++) {
              localThisObj.nodeType = data.node.type;

              if (localThisObj.nodeType === "root") {
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
              } else if (localThisObj.nodeType === "concept") {
                conceptId = data.node.id;
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.getTopicsList(conceptId);
              } else if (localThisObj.nodeType === "topic") {
                localThisObj.topicId = data.node.data.id;
                localThisObj.nodeName = data.node.data.name;
                localThisObj.nodeDescription = data.node.data.description;
                localThisObj.questions = [];
                localThisObj.getTopicQuestionsList(localThisObj.topicId);
              } else {
                localThisObj.nodeType = "";
              }
            }
          });
        }
      }, {
        key: "getTopicsList",
        value: function getTopicsList(conceptId) {
          var conceptChildrenList;
          conceptChildrenList = this.subjectTree.filter(function (item) {
            return item.parent === conceptId;
          });
          this.topicsList = conceptChildrenList.filter(function (item) {
            return item.type === 'topic';
          });
        }
      }, {
        key: "loadUpdatedTopicQuestions",
        value: function loadUpdatedTopicQuestions() {
          this.getTopicQuestionsList(this.topicId);
        }
      }, {
        key: "getTopicQuestionsList",
        value: function getTopicQuestionsList(topicId) {
          var _this = this;

          this.generalTopicQuestionService.getTopicQuestionList(topicId).subscribe(function (res) {
            return _this.assignResponseToQuestionList(res.body);
          }, function (res) {
            return _this.onError(res);
          });
        }
      }, {
        key: "assignResponseToQuestionList",
        value: function assignResponseToQuestionList(data) {
          var questionDetails = [],
              question,
              complexityLevel,
              questionType;
          this.questions = [];
          this.questionResources = data.questions;

          if (this.questionResources.length > 0) {
            for (var i = 0; i < this.questionResources.length; i++) {
              questionDetails.push(this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson));
              question = questionDetails[i].Question;

              if (this.questionResources[i].complexityLevel === 1) {
                complexityLevel = "Low";
              } else if (this.questionResources[i].complexityLevel === 2) {
                complexityLevel = "Medium";
              } else if (this.questionResources[i].complexityLevel === 3) {
                complexityLevel = "High";
              } else {
                complexityLevel = "";
              }

              if (questionDetails[i].QuestionType === "MCQ_SINGLE") {
                questionType = "MCQ single answer";
              } else if (questionDetails[i].QuestionType === "MCQ_MULTIPLE") {
                questionType = "MCQ multiple answers";
              } else if (questionDetails[i].QuestionType === "MCQ_CHOICE_MATRIX") {
                questionType = "Choice matrix";
              } else if (questionDetails[i].QuestionType === "MCQ_TRUE_FALSE") {
                questionType = "MCQ true or false";
              } else if (questionDetails[i].QuestionType === "MCQ_MATCH_LIST") {
                questionType = "MCQ match list";
              } else {
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
      }, {
        key: "titleCapitalize",
        value: function titleCapitalize(word) {
          if (!word) return word;
          return word[0].toUpperCase() + word.substr(1).toLowerCase();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.showConceptAndTopicDetails();
        }
      }, {
        key: "onGeneralSubjectGradeChange",
        value: function onGeneralSubjectGradeChange() {
          var _this2 = this;

          if (this.selectedGeneralSubjectGrade) {
            var grade = this.selectedGeneralSubjectGrade.name;
            var status = _shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["ACTIVE"];
            this.selectedSubject = null;
            this.generalSubjectService.getSubjectListByGrade(grade, status).subscribe(function (res) {
              return _this2.assignGeneralSubjectList(res.body);
            }, function (res) {
              return _this2.onError(res);
            });
          }

          this.selectedGeneralSubjectGrade = null;
          this.subjects = [];
        }
      }, {
        key: "assignGeneralSubjectList",
        value: function assignGeneralSubjectList(data) {
          this.subjects = [];
          this.subjects = data;
        }
      }, {
        key: "loadSubjectTree",
        value: function loadSubjectTree() {
          var _this3 = this;

          if (!this.selectedSubject && !this.selectedGeneralSubjectGrade) {
            this.selectedSubject = null;
            this.selectedGeneralSubjectGrade = null;
            this.pluginService.alertMessage("Please select a filter and then apply", "error");
          } else {
            this.subjectTree = [];
            this.pluginService.jsTree("#treeView", this.subjectTree, false);
            var subjectId = this.selectedSubject.id;

            if (subjectId) {
              this.generalSubjectService.getSubjectTreeBySubjectId(subjectId).subscribe(function (res) {
                return _this3.assignResponsetoTree(res.body);
              }, function (res) {
                return _this3.onError(res);
              });
            }
          }
        }
      }, {
        key: "assignResponsetoTree",
        value: function assignResponsetoTree(subject) {
          this.subjectTree = [];

          if (subject.length > 0) {
            for (var i = 0; i < subject.length; i++) {
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
        value: function deleteTopicQuestions(questionId) {
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
      }, {
        key: "subscribeToDeleteResponse",
        value: function subscribeToDeleteResponse(result) {
          var _this4 = this;

          result.subscribe(function (res) {
            return _this4.onDeleteSuccess(res);
          }, function (errRes) {
            return _this4.onError(errRes);
          });
        }
      }, {
        key: "onDeleteSuccess",
        value: function onDeleteSuccess(res) {
          this.pluginService.alertMessage("Topic content deleted successfully", "success");
          this.questions = [];
          this.getTopicQuestionsList(this.topicId);
          this.tableAction = true;
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
        key: "openSimulateQuestionModal",
        value: function openSimulateQuestionModal() {
          this.pluginService.showModalWindow("#simulateQuestionModal");
          this.simulateTopicQuestionList();
        }
      }, {
        key: "closeSimulateQuestionModal",
        value: function closeSimulateQuestionModal() {
          this.pluginService.hideModalWindow("#simulateQuestionModal");
        }
      }, {
        key: "openPreviewQuestionModal",
        value: function openPreviewQuestionModal() {
          this.pluginService.showModalWindow("#previewQuestionModal");
          this.previewTopicQuestionList();
        }
      }, {
        key: "closePreviewQuestionModal",
        value: function closePreviewQuestionModal() {
          this.pluginService.hideModalWindow("#previewQuestionModal");
        }
      }, {
        key: "previewTopicQuestionList",
        value: function previewTopicQuestionList() {
          var questionDetails,
              options = [],
              answers = [],
              choices = [];
          this.topicQuestions = [];

          for (var i = 0; i < this.questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson);

            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
              answers = [];
              choices = [];
              options = questionDetails.Options;
              choices = questionDetails.Choices;

              var _loop = function _loop(k) {
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
                _loop(k);
              }
            } else if (questionDetails.QuestionType === "MCQ_SINGLE" || questionDetails.QuestionType === "MCQ_MULTIPLE" || questionDetails.QuestionType === "MCQ_TRUE_FALSE") {
              options = [];
              answers = [];

              var _loop2 = function _loop2(j) {
                var answerText = questionDetails.Choices.find(function (item) {
                  return item.ChoiceId === questionDetails.Answers[j];
                }).ChoiceText;
                answers.push(answerText);
                answerText = "";
              };

              for (var j = 0; j < questionDetails.Answers.length; j++) {
                _loop2(j);
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
      }, {
        key: "simulateTopicQuestionList",
        value: function simulateTopicQuestionList() {
          var questionDetails,
              options = [],
              choices = [];
          this.topicQuestions = [];

          for (var i = 0; i < this.questionResources.length; i++) {
            questionDetails = this.questionBuilderService.convertStringToJson(this.questionResources[i].contentJson);

            if (questionDetails.QuestionType === "MCQ_MATCH_LIST" || questionDetails.QuestionType === "MCQ_CHOICE_MATRIX") {
              options = this.shuffleArray(questionDetails.Options);
              choices = questionDetails.Choices;
            } else {
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
          var _this5 = this;

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
            var _loop3 = function _loop3(i) {
              for (var j = i + 1; j < _this5.selectedAnswer.length; j++) {
                if (_this5.selectedAnswer[i].ChoiceId === _this5.selectedAnswer[j].ChoiceId) {
                  index = _this5.selectedAnswer.findIndex(function (item) {
                    return item.ChoiceId === _this5.selectedAnswer[i].ChoiceId;
                  });

                  _this5.selectedAnswer.splice(index, 1);
                }
              }
            };

            for (var i = 0; i < this.selectedAnswer.length; i++) {
              _loop3(i);
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
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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

      return GeneralConceptQuestionManageComponent;
    }();

    GeneralConceptQuestionManageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectService"]
      }, {
        type: _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]
      }, {
        type: _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]
      }];
    };

    GeneralConceptQuestionManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-concept-question-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-concept-topic/general-concept-question-manage.component.html"))["default"],
      providers: [_general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _general_subject_general_subject_service__WEBPACK_IMPORTED_MODULE_6__["GeneralSubjectService"], _general_concept_topic_service__WEBPACK_IMPORTED_MODULE_4__["GeneralConceptAndTopicService"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"], _question_builder_question_builder_service__WEBPACK_IMPORTED_MODULE_5__["QuestionBuilderService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["CoreErrorHandler"]])], GeneralConceptQuestionManageComponent);
    /***/
  },

  /***/
  "./src/app/general-concept-topic/general-concept-topic.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/general-concept-topic/general-concept-topic.module.ts ***!
    \***********************************************************************/

  /*! exports provided: GeneralConceptAndTopicModule */

  /***/
  function srcAppGeneralConceptTopicGeneralConceptTopicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralConceptAndTopicModule", function () {
      return GeneralConceptAndTopicModule;
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


    var _general_concept_topic_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-concept-topic.route */
    "./src/app/general-concept-topic/general-concept-topic.route.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var ng_jhipster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-jhipster */
    "./node_modules/ng-jhipster/fesm2015/ng-jhipster.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../question-builder/question-builder.module */
    "./src/app/question-builder/question-builder.module.ts");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./index */
    "./src/app/general-concept-topic/index.ts");
    /* harmony import */


    var _syllabus_lesson_topic_syllabus_lesson_topic_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../syllabus-lesson-topic/syllabus-lesson-topic.module */
    "./src/app/syllabus-lesson-topic/syllabus-lesson-topic.module.ts");
    /* harmony import */


    var _general_concept_question_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./general-concept-question-manage.component */
    "./src/app/general-concept-topic/general-concept-question-manage.component.ts");

    var GeneralConceptAndTopicModule = function GeneralConceptAndTopicModule() {
      _classCallCheck(this, GeneralConceptAndTopicModule);
    };

    GeneralConceptAndTopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ng_jhipster__WEBPACK_IMPORTED_MODULE_6__["NgJhipsterModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_general_concept_topic_route__WEBPACK_IMPORTED_MODULE_3__["generalConceptAndTopicRoute"]), _question_builder_question_builder_module__WEBPACK_IMPORTED_MODULE_9__["QuestionBuilderModule"], _syllabus_lesson_topic_syllabus_lesson_topic_module__WEBPACK_IMPORTED_MODULE_11__["SyllabusLessonTopicModule"]],
      declarations: [_index__WEBPACK_IMPORTED_MODULE_10__["GeneralTopicContentManageComponent"], _index__WEBPACK_IMPORTED_MODULE_10__["GeneralTopicQuestionManageComponent"], _index__WEBPACK_IMPORTED_MODULE_10__["GeneralTopicQuestionCreateComponent"], _general_concept_question_manage_component__WEBPACK_IMPORTED_MODULE_12__["GeneralConceptQuestionManageComponent"]],
      providers: [_index__WEBPACK_IMPORTED_MODULE_10__["GeneralConceptAndTopicService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], GeneralConceptAndTopicModule);
    /***/
  },

  /***/
  "./src/app/general-concept-topic/general-concept-topic.route.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/general-concept-topic/general-concept-topic.route.ts ***!
    \**********************************************************************/

  /*! exports provided: generalConceptAndTopicRoute */

  /***/
  function srcAppGeneralConceptTopicGeneralConceptTopicRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generalConceptAndTopicRoute", function () {
      return generalConceptAndTopicRoute;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./general-topic-question-manage.component */
    "./src/app/general-concept-topic/general-topic-question-manage.component.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-topic-question-create.component */
    "./src/app/general-concept-topic/general-topic-question-create.component.ts");
    /* harmony import */


    var _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../question-builder/mcq-standard */
    "./src/app/question-builder/mcq-standard/index.ts");
    /* harmony import */


    var _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../question-builder/matchlist/matchlist.component */
    "./src/app/question-builder/matchlist/matchlist.component.ts");
    /* harmony import */


    var _question_builder_mcq_choicematrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../question-builder/mcq-choicematrix */
    "./src/app/question-builder/mcq-choicematrix/index.ts");
    /* harmony import */


    var _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./general-topic-content-manage.component */
    "./src/app/general-concept-topic/general-topic-content-manage.component.ts");
    /* harmony import */


    var _syllabus_lesson_topic_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../syllabus-lesson-topic/topic-question/topic-question-details.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-details.component.ts");
    /* harmony import */


    var _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../question-builder/cloze/drag-n-drop/drag-n-drop.component */
    "./src/app/question-builder/cloze/drag-n-drop/drag-n-drop.component.ts");
    /* harmony import */


    var _syllabus_lesson_topic_topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../syllabus-lesson-topic/topic-question/topic-question-update.component */
    "./src/app/syllabus-lesson-topic/topic-question/topic-question-update.component.ts");
    /* harmony import */


    var _general_concept_question_manage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./general-concept-question-manage.component */
    "./src/app/general-concept-topic/general-concept-question-manage.component.ts");

    var generalConceptAndTopicRoute = [{
      path: "",
      redirectTo: "general-topic-question",
      pathMatch: "full"
    }, {
      path: 'general-topic-question',
      component: _general_topic_question_manage_component__WEBPACK_IMPORTED_MODULE_1__["GeneralTopicQuestionManageComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Manage general topic questions'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: 'general-concept-question',
      component: _general_concept_question_manage_component__WEBPACK_IMPORTED_MODULE_11__["GeneralConceptQuestionManageComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Manage general concept questions'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/general-topic-question-create',
      component: _general_topic_question_create_component__WEBPACK_IMPORTED_MODULE_3__["GeneralTopicQuestionCreateComponent"],
      children: [{
        path: 'mcqstandard',
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
        data: {
          type: "MCQ_SINGLE",
          title: "Create"
        }
      }, {
        path: "mcqstandard/:qid",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
        data: {
          type: "MCQ_SINGLE",
          title: "Edit"
        }
      }, {
        path: "mcqmultiple",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
        data: {
          type: "MCQ_MULTIPLE",
          mode: "Create"
        }
      }, {
        path: "mcqmultiple/:qid",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
        data: {
          type: "MCQ_MULTIPLE",
          mode: "Edit"
        }
      }, {
        path: "mcqtruefalse",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
        data: {
          type: "MCQ_TRUE_FALSE",
          title: "Create"
        }
      }, {
        path: "mcqtruefalse/:qid",
        component: _question_builder_mcq_standard__WEBPACK_IMPORTED_MODULE_4__["MCQStandardComponent"],
        data: {
          type: "MCQ_TRUE_FALSE",
          title: "Edit"
        }
      }, {
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
      }, {
        path: "matchlist/:qid",
        component: _question_builder_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_5__["MatchlistComponent"],
        data: {
          title: "Edit",
          type: "MCQ_MATCH_LIST"
        }
      }, {
        path: "clozedrag",
        component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
        data: {
          title: "Create",
          type: "mcq-drag"
        }
      }, {
        path: "clozedrag/:qid",
        component: _question_builder_cloze_drag_n_drop_drag_n_drop_component__WEBPACK_IMPORTED_MODULE_9__["DragAndDropComponent"],
        data: {
          title: "Edit",
          type: "mcq-drag"
        }
      }],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Create general topic question'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/general-topic-question-view',
      component: _syllabus_lesson_topic_topic_question_topic_question_details_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumTopicQuestionDetailsComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'View general topic question'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: ':id/general-topic-question-edit',
      component: _syllabus_lesson_topic_topic_question_topic_question_update_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumTopicQuestionUpdateComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Edit general topic question'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }, {
      path: 'general-topic-content',
      component: _general_topic_content_manage_component__WEBPACK_IMPORTED_MODULE_7__["GeneralTopicContentManageComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Manage general video content mapping'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__["UserRouteAccessService"]]
    }];
    /***/
  }
}]);
//# sourceMappingURL=general-concept-topic-general-concept-topic-module-es5.js.map