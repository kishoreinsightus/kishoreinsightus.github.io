function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["promotions-promotions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/availed-users-detail.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/availed-users-detail.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPromotionsAvailedUsersDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 d-flex justify-content-between my-3\">\r\n    <div class=\"btn btn-danger mr-2\" (click)=\"onBack()\">\r\n        <i class=\"fa fa-chevron-left mr-2\"></i> Back\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n        <thead>\r\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n                <th jhiSortBy=\"givenName\">First name<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"lastName\">Last name<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"mobileNumber\">Mobile number<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"startDate\">Availed on<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"promoCode\">Promo code<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"promotionDiscount\">Discount availed(%)<span class=\"fa fa-sort ml-1\"></span></th>\r\n                <th jhiSortBy=\"amountAfterDiscount\">Amount after discount<span class=\"fa fa-sort ml-1\"></span></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n            [infiniteScrollDistance]=\"0\">\r\n            <tr *ngFor=\"let data of availedUserList\">\r\n                <td data-column=\"First Name\">{{data.givenName}}</td>\r\n                <td data-column=\"Last Name\">{{data.lastName}}</td>\r\n                <td data-column=\"Mobile Number\">{{data.mobileNumber}}</td>\r\n                <td data-column=\"Availed on\">{{data.startDate}}</td>\r\n                <td data-column=\"Promo code\">{{data.promoCode}}</td>\r\n                <td data-column=\"Discount (%)\">{{data.promotionDiscount}}</td>\r\n                <td data-column=\"Amount\">{{data.amountAfterDiscount}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/promotions.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/promotions.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPromotionsPromotionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-end mb-2\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN']\">\r\n  <div class=\"btn btn-primary\" (click)=\"addPromotion()\">\r\n    <i class=\"fa fa-plus-circle mr-2\"></i>Add promotion\r\n  </div>\r\n</div>\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-hover table-striped table-bordered nowrap w-100\">\r\n    <thead>\r\n      <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"reset.bind(this)\">\r\n        <th jhiSortBy=\"promoCode\">Promo code<span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th jhiSortBy=\"discount\">Discount (%)<span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th jhiSortBy=\"validFrom\">Valid from<span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th jhiSortBy=\"validTo\">Valid to<span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th jhiSortBy=\"status\">Status<span class=\"fa fa-sort ml-1\"></span></th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody infinite-scroll (scrolled)=\"loadPage(page + 1)\" [infiniteScrollDisabled]=\"page >= links['last']\"\r\n      [infiniteScrollDistance]=\"0\">\r\n      <tr *ngFor=\"let data of promotionList\">\r\n        <td data-column=\"Promo code\">{{data.promoCode}}</td>\r\n        <td data-column=\"Discount (%)\">{{data.discount}}</td>\r\n        <td data-column=\"Valid from\">{{data.validFrom}}</td>\r\n        <td data-column=\"Valid to\">{{data.validTo}}</td>\r\n        <td data-column=\"Status\">\r\n          <span *ngIf=\"checkDateExpiresOn(data.validTo)\">\r\n            Inactive\r\n          </span>\r\n          <span *ngIf=\"!checkDateExpiresOn(data.validTo)\">\r\n            Active\r\n          </span>\r\n        </td>\r\n        <td>\r\n          <a class=\"btn btn-outline-success btn-icon mr-1 mb-1\" (click)=\"editPromotion(data.id)\"\r\n            tooltip=\"Edit promotion\" *iusHasAnyAuthority=\"['SYSTEM_ADMIN']\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </a>\r\n          <a class=\"btn btn-outline-info btn-icon mr-1 mb-1\" (click)=\"viewAvailedUsers(data.id)\"\r\n            tooltip=\"View availed users\">\r\n            <i class=\"fa fa-users\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<form name=\"form\" (ngSubmit)=\"promotion.form.valid && onSubmit()\" #promotion=\"ngForm\" novalidate>\r\n  <div class=\"modal slideInRight\" tabindex=\"-1\" role=\"dialog\" id=\"promotionModal\">\r\n    <div class=\"modal-dialog modal-full-height modal-right modal-notify\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header bg-warning d-flex align-items-center\">\r\n          <h5 class=\"modal-title text-white\">\r\n            {{modalTitleName}} promotion\r\n          </h5>\r\n          <div class=\"close btn btn-xl\" (click)=\"closePromotionModal()\">\r\n            <i class=\"fa fa-times\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group mb-2\">\r\n            <label for=\"promoCode\">Promo code *</label>\r\n            <input trim type=\"text\" class=\"form-control\" name=\"promoCode\" [(ngModel)]=\"promotionItem.promoCode\"\r\n              placeholder=\"Enter promo code\" minlength=\"6\" maxlength=\"6\" #promoCode=\"ngModel\" trim required\r\n              [disabled]=\"disableAction\" inputRestriction=\"alphabetsNumbers\" />\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label for=\"title\">Discount *</label>\r\n            <input trim type=\"text\" class=\"form-control\" name=\"discount\" [(ngModel)]=\"promotionItem.discount\"\r\n              placeholder=\"Enter discount\" #discount=\"ngModel\" trim required [disabled]=\"disableAction\"\r\n              inputRestriction=\"onlyIntegers\" />\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label>Valid from *</label>\r\n            <div class=\"input-group date datepicker-default\">\r\n              <input type=\"text\" name=\"validFrom\" class=\"form-control\" placeholder=\"Select date\"\r\n                [(ngModel)]=\"promotionItem.validFrom\" trim id=\"validFrom\" datepicker required>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mb-2\">\r\n            <label>Valid to *</label>\r\n            <div class=\"input-group date datepicker-default\">\r\n              <input type=\"text\" name=\"validTo\" class=\"form-control\" placeholder=\"Select date\"\r\n                [(ngModel)]=\"promotionItem.validTo\" trim id=\"validTo\" datepicker required>\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"btn btn-danger mr-2\" (click)=\"resetPromotion()\" *ngIf=\"modalTitleName === 'Add'\">\r\n            <i class=\"fa fa-times mr-2\"></i>\r\n            Reset\r\n          </div>\r\n          <button class=\"btn btn-success\" [disabled]=\"!promotion.form.valid\"\r\n            *ngIf=\"modalTitleName === 'Add' || modalTitleName === 'Edit'\">\r\n            <i class=\"fa fa-save mr-2\"></i>\r\n            Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>";
    /***/
  },

  /***/
  "./src/app/promotions/availed-users-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/promotions/availed-users-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: AvailedUsersDetailComponent */

  /***/
  function srcAppPromotionsAvailedUsersDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvailedUsersDetailComponent", function () {
      return AvailedUsersDetailComponent;
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


    var _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/error-handler/error-handler.service */
    "./src/app/shared/error-handler/error-handler.service.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _promotions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./promotions.service */
    "./src/app/promotions/promotions.service.ts");
    /* harmony import */


    var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/local-storage/local-storage.service */
    "./src/app/shared/local-storage/local-storage.service.ts");

    var AvailedUsersDetailComponent =
    /*#__PURE__*/
    function () {
      function AvailedUsersDetailComponent(_router, activatedRoute, eventManager, parseLinks, principalService, pluginService, errorHandler, promotionService, localStorageService) {
        _classCallCheck(this, AvailedUsersDetailComponent);

        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.promotionService = promotionService;
        this.localStorageService = localStorageService;
        this.availedUserList = [];
        this.availedUserList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_7__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
          last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
        this.enableAction = true;
      }

      _createClass(AvailedUsersDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.pluginService.sideMenuToggle();
          this.promotionId = Number(this.activatedRoute.snapshot.params['id']);

          if (this.promotionId) {
            this.getPromoCode();
          }

          if (this.promotionId) {
            this.loadAvailedUsersList();
          }

          this.principalService.identity().then(function (account) {
            _this.currentAccount = account;
          });
          this.registerChangeInOrganisations();
        }
      }, {
        key: "getPromoCode",
        value: function getPromoCode() {
          var salesPromotion = {};
          salesPromotion = this.localStorageService.retrieveData("salesPromotion");

          if (this.promotionId === salesPromotion.id) {
            this.promoCode = salesPromotion.promoCode;
          }
        }
      }, {
        key: "loadAvailedUsersList",
        value: function loadAvailedUsersList() {
          var _this2 = this;

          this.promotionService.getAvailedUsers(this.promoCode).subscribe(function (res) {
            return _this2.paginateAvailedUsers(res.body, res.headers);
          }, function (res) {
            return _this2.onError(res);
          });
        }
      }, {
        key: "paginateAvailedUsers",
        value: function paginateAvailedUsers(data, headers) {
          this.links = this.parseLinks.parse(headers.get('link'));
          this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
          this.availedUserList = [];

          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              this.availedUserList.push(data[i]);
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
        key: "reset",
        value: function reset() {
          this.page = 0;
          this.availedUserList = [];
          this.loadAvailedUsersList();
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          this.page = page;
          this.loadAvailedUsersList();
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
        key: "registerChangeInOrganisations",
        value: function registerChangeInOrganisations() {
          var _this3 = this;

          this.eventSubscriber = this.eventManager.subscribe('organisationListModification', function (response) {
            return _this3.reset();
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
        key: "previousPage",
        value: function previousPage() {
          this._router.navigateByUrl('/sales-promotions');
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
              localObj.previousPage();
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }, {
        key: "ngDestroy",
        value: function ngDestroy() {
          this.eventSubscriber.unsubscribe();
        }
      }]);

      return AvailedUsersDetailComponent;
    }();

    AvailedUsersDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_6__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"]
      }, {
        type: _promotions_service__WEBPACK_IMPORTED_MODULE_8__["PromotionService"]
      }, {
        type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"]
      }];
    };

    AvailedUsersDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./availed-users-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/availed-users-detail.component.html"))["default"],
      providers: [_shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_6__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_3__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["CoreErrorHandler"], _promotions_service__WEBPACK_IMPORTED_MODULE_8__["PromotionService"], _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"]])], AvailedUsersDetailComponent);
    /***/
  },

  /***/
  "./src/app/promotions/index.ts":
  /*!*************************************!*\
    !*** ./src/app/promotions/index.ts ***!
    \*************************************/

  /*! exports provided: PromotionsComponent, PromotionService */

  /***/
  function srcAppPromotionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _promotions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./promotions.component */
    "./src/app/promotions/promotions.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function () {
      return _promotions_component__WEBPACK_IMPORTED_MODULE_1__["PromotionsComponent"];
    });
    /* harmony import */


    var _promotions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./promotions.service */
    "./src/app/promotions/promotions.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PromotionService", function () {
      return _promotions_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"];
    });
    /***/

  },

  /***/
  "./src/app/promotions/promotions.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/promotions/promotions.component.ts ***!
    \****************************************************/

  /*! exports provided: PromotionsComponent */

  /***/
  function srcAppPromotionsPromotionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function () {
      return PromotionsComponent;
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


    var _promotions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./promotions.service */
    "./src/app/promotions/promotions.service.ts");
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
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/local-storage/local-storage.service */
    "./src/app/shared/local-storage/local-storage.service.ts");

    var PromotionsComponent =
    /*#__PURE__*/
    function () {
      function PromotionsComponent(_router, activatedRoute, eventManager, parseLinks, principalService, pluginService, errorHandler, promotionService, localStorageService) {
        _classCallCheck(this, PromotionsComponent);

        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.eventManager = eventManager;
        this.parseLinks = parseLinks;
        this.principalService = principalService;
        this.pluginService = pluginService;
        this.errorHandler = errorHandler;
        this.promotionService = promotionService;
        this.localStorageService = localStorageService;
        this.promotionList = [];
        this.promotionItem = {};
        this.promotionList = [];
        this.itemsPerPage = _shared__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"];
        this.page = 0;
        this.links = {
          last: 0
        };
        this.predicate = 'id';
        this.reverse = false;
      }

      _createClass(PromotionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.loadPromotionList();
          this.principalService.identity().then(function (account) {
            _this4.currentAccount = account;
          });
          this.registerChangeInOrganisations();
        }
      }, {
        key: "loadPromotionList",
        value: function loadPromotionList() {
          var _this5 = this;

          this.promotionService.getAllSalesPromotions().subscribe(function (res) {
            return _this5.paginateSalesPromotions(res.body, res.headers);
          }, function (res) {
            return _this5.onError(res);
          });
        }
      }, {
        key: "paginateSalesPromotions",
        value: function paginateSalesPromotions(data, headers) {
          this.links = this.parseLinks.parse(headers.get('link'));
          this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
          this.promotionList = [];

          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              this.promotionList.push(data[i]);
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
        key: "reset",
        value: function reset() {
          this.page = 0;
          this.promotionList = [];
          this.loadPromotionList();
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          this.page = page;
          this.loadPromotionList();
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
        key: "registerChangeInOrganisations",
        value: function registerChangeInOrganisations() {
          var _this6 = this;

          this.eventSubscriber = this.eventManager.subscribe('organisationListModification', function (response) {
            return _this6.reset();
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
        key: "previousPage",
        value: function previousPage() {
          this._router.navigateByUrl('/organisation');
        }
      }, {
        key: "openPromotionModal",
        value: function openPromotionModal() {
          this.pluginService.showModalWindow("#promotionModal");
        }
      }, {
        key: "closePromotionModal",
        value: function closePromotionModal() {
          this.pluginService.hideModalWindow("#promotionModal");
        }
      }, {
        key: "addPromotion",
        value: function addPromotion() {
          this.modalTitleName = "Add";
          this.disableAction = false;
          this.disablePastDays("#validFrom");
          this.disablePastDays("#validTo");
          this.resetPromotion();
          this.openPromotionModal();
        }
      }, {
        key: "editPromotion",
        value: function editPromotion(id) {
          this.modalTitleName = "Edit";
          this.disableAction = true;
          this.promotionItem = {};
          this.promotionItem = this.promotionList.filter(function (item) {
            return item.id === id;
          })[0];
          this.pluginService.setDate("#validFrom", this.promotionItem.validFrom);
          this.pluginService.setDate("#validTo", this.promotionItem.validTo);
          this.disablePastDays("#validFrom");
          this.disablePastDays("#validTo");
          this.openPromotionModal();
        } //Date format conversion 2020-12-02 into 02-12-2020

      }, {
        key: "stringFormatDate",
        value: function stringFormatDate(date) {
          var dateFormat = date.split("-").reverse().join("-");
          return dateFormat;
        } //Check if dueDate is expired, it return true

      }, {
        key: "checkDateExpiresOn",
        value: function checkDateExpiresOn(date) {
          var currentDate = new Date(Date.now());
          var givenDate = new Date(this.stringFormatDate(date));

          if (givenDate < currentDate) {
            return true;
          }

          return false;
        }
      }, {
        key: "viewAvailedUsers",
        value: function viewAvailedUsers(id) {
          this.promotionItem = {};
          this.promotionItem = this.promotionList.filter(function (item) {
            return item.id === id;
          })[0];
          this.localStorageService.storeData("salesPromotion", this.promotionItem);

          this._router.navigate(['sales-promotions', id, 'availed-users-view']);
        }
      }, {
        key: "disablePastDays",
        value: function disablePastDays(id) {
          $(id).datepicker('setStartDate', new Date());
        }
      }, {
        key: "subscribeToSaveResponse",
        value: function subscribeToSaveResponse(resp) {
          var _this7 = this;

          resp.subscribe(function (res) {
            return _this7.onSaveSuccess(res);
          }, function (res) {
            return _this7.onError(res);
          });
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(res) {
          if (this.modalTitleName === 'Add') {
            this.pluginService.alertMessage("Promotion saved successfully", "success");
          } else if (this.modalTitleName === 'Edit') {
            this.pluginService.alertMessage("Promotion updated successfully", "success");
          }

          this.loadPromotionList();
          this.closePromotionModal();
          this.resetPromotion();
        }
      }, {
        key: "savePromotion",
        value: function savePromotion() {
          this.subscribeToSaveResponse(this.promotionService.createSalesPromotions(this.promotionItem));
        }
      }, {
        key: "updatePromotion",
        value: function updatePromotion() {
          this.subscribeToSaveResponse(this.promotionService.updateSalesPromotions(this.promotionItem));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.modalTitleName === "Add") {
            this.savePromotion();
          } else if (this.modalTitleName === "Edit") {
            this.updatePromotion();
          }
        }
      }, {
        key: "resetPromotion",
        value: function resetPromotion() {
          this.promotionItem = {};
          this.resetDatepickers();
        }
      }, {
        key: "resetDatepickers",
        value: function resetDatepickers() {
          $('#validFrom').datepicker('setDate', null);
          $('#validTo').datepicker('setDate', null);
        }
      }, {
        key: "ngDestroy",
        value: function ngDestroy() {
          this.eventSubscriber.unsubscribe();
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
              localObj.previousPage();
              localObj.pluginService.sideMenuToggle();
            }
          });
        }
      }]);

      return PromotionsComponent;
    }();

    PromotionsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"]
      }, {
        type: ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiParseLinks"]
      }, {
        type: _core__WEBPACK_IMPORTED_MODULE_7__["Principal"]
      }, {
        type: _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]
      }, {
        type: _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"]
      }, {
        type: _promotions_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"]
      }, {
        type: _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"]
      }];
    };

    PromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./promotions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/promotions/promotions.component.html"))["default"],
      providers: [_promotions_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"], ng_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiParseLinks"], _core__WEBPACK_IMPORTED_MODULE_7__["Principal"], _shared_plugin_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"], _shared_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["CoreErrorHandler"], _promotions_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"], _shared_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["CommonLocalStorageService"]])], PromotionsComponent);
    /***/
  },

  /***/
  "./src/app/promotions/promotions.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/promotions/promotions.module.ts ***!
    \*************************************************/

  /*! exports provided: PromotionsModule */

  /***/
  function srcAppPromotionsPromotionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionsModule", function () {
      return PromotionsModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./index */
    "./src/app/promotions/index.ts");
    /* harmony import */


    var _promotions_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./promotions.route */
    "./src/app/promotions/promotions.route.ts");
    /* harmony import */


    var _availed_users_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./availed-users-detail.component */
    "./src/app/promotions/availed-users-detail.component.ts");

    var PromotionsModule = function PromotionsModule() {
      _classCallCheck(this, PromotionsModule);
    };

    PromotionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_promotions_route__WEBPACK_IMPORTED_MODULE_9__["promotionsRoute"]), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__["NgJhipsterModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      declarations: [_index__WEBPACK_IMPORTED_MODULE_8__["PromotionsComponent"], _availed_users_detail_component__WEBPACK_IMPORTED_MODULE_10__["AvailedUsersDetailComponent"]],
      providers: [_index__WEBPACK_IMPORTED_MODULE_8__["PromotionService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], PromotionsModule);
    /***/
  },

  /***/
  "./src/app/promotions/promotions.route.ts":
  /*!************************************************!*\
    !*** ./src/app/promotions/promotions.route.ts ***!
    \************************************************/

  /*! exports provided: promotionsRoute */

  /***/
  function srcAppPromotionsPromotionsRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "promotionsRoute", function () {
      return promotionsRoute;
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


    var _promotions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./promotions.component */
    "./src/app/promotions/promotions.component.ts");
    /* harmony import */


    var _availed_users_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./availed-users-detail.component */
    "./src/app/promotions/availed-users-detail.component.ts");

    var promotionsRoute = [{
      path: '',
      component: _promotions_component__WEBPACK_IMPORTED_MODULE_2__["PromotionsComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'Sales promotions'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }, {
      path: ':id/availed-users-view',
      component: _availed_users_detail_component__WEBPACK_IMPORTED_MODULE_3__["AvailedUsersDetailComponent"],
      data: {
        authorities: ['SYSTEM_ADMIN'],
        pageTitle: 'View availed users'
      },
      canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__["UserRouteAccessService"]]
    }];
    /***/
  },

  /***/
  "./src/app/promotions/promotions.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/promotions/promotions.service.ts ***!
    \**************************************************/

  /*! exports provided: PromotionService */

  /***/
  function srcAppPromotionsPromotionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionService", function () {
      return PromotionService;
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


    var _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/constants/service.constants */
    "./src/app/shared/constants/service.constants.ts");

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    headers = headers.append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Headers', '*');

    var PromotionService =
    /*#__PURE__*/
    function () {
      function PromotionService(http) {
        _classCallCheck(this, PromotionService);

        this.http = http;
        this.promotionResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["promotions"];
        this.studentCourseSubscriptionsResourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _shared_constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["studentCourseSubscriptions"];
      }

      _createClass(PromotionService, [{
        key: "createSalesPromotions",
        value: function createSalesPromotions(promotion) {
          return this.http.post(this.promotionResourceUrl, promotion, {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "updateSalesPromotions",
        value: function updateSalesPromotions(promotion) {
          return this.http.put(this.promotionResourceUrl, promotion, {
            observe: 'response'
          });
        }
      }, {
        key: "getAllSalesPromotions",
        value: function getAllSalesPromotions() {
          return this.http.get(this.promotionResourceUrl, {
            observe: 'response'
          });
        }
      }, {
        key: "getAvailedUsers",
        value: function getAvailedUsers(promoCode) {
          var reqJson = {
            promoCode: promoCode
          };
          return this.http.post(this.studentCourseSubscriptionsResourceUrl, reqJson, {
            observe: 'response'
          });
        }
      }]);

      return PromotionService;
    }();

    PromotionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PromotionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PromotionService);
    /***/
  }
}]);
//# sourceMappingURL=promotions-promotions-module-es5.js.map