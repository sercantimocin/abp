(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('primeng/components/common/messageservice'), require('primeng/toast'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@ngxs/store'), require('@ngxs/router-plugin'), require('snq'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.theme.shared', ['exports', '@abp/ng.core', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', 'primeng/components/common/messageservice', 'primeng/toast', 'rxjs', 'rxjs/operators', '@angular/router', '@ngxs/store', '@ngxs/router-plugin', 'snq', '@angular/animations'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.theme = global.abp.ng.theme || {}, global.abp.ng.theme.shared = {}), global.ng_core, global.ng.core, global.ngBootstrap, global.core$1, global.messageservice, global.toast, global.rxjs, global.rxjs.operators, global.ng.router, global.store, global.routerPlugin, global.snq, global.ng.animations));
}(this, function (exports, ng_core, core, ngBootstrap, core$1, messageservice, toast, rxjs, operators, router, store, routerPlugin, snq, animations) { 'use strict';

    snq = snq && snq.hasOwnProperty('default') ? snq['default'] : snq;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    AbstractToaster = /** @class */ (function () {
        function AbstractToaster(messageService) {
            this.messageService = messageService;
            this.key = 'abpToast';
            this.sticky = false;
        }
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        AbstractToaster.prototype.info = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'info', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        AbstractToaster.prototype.success = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'success', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        AbstractToaster.prototype.warn = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'warn', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        AbstractToaster.prototype.error = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'error', options);
        };
        /**
         * @protected
         * @param {?} message
         * @param {?} title
         * @param {?} severity
         * @param {?=} options
         * @return {?}
         */
        AbstractToaster.prototype.show = /**
         * @protected
         * @param {?} message
         * @param {?} title
         * @param {?} severity
         * @param {?=} options
         * @return {?}
         */
        function (message, title, severity, options) {
            this.messageService.clear(this.key);
            this.messageService.add(__assign({ severity: severity, detail: message, summary: title }, options, { key: this.key }, (typeof (options || ((/** @type {?} */ ({})))).sticky === 'undefined' && { sticky: this.sticky })));
            this.status$ = new rxjs.Subject();
            return this.status$;
        };
        /**
         * @param {?=} status
         * @return {?}
         */
        AbstractToaster.prototype.clear = /**
         * @param {?=} status
         * @return {?}
         */
        function (status) {
            this.messageService.clear(this.key);
            this.status$.next(status || "dismiss" /* dismiss */);
            this.status$.complete();
        };
        return AbstractToaster;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmationService = /** @class */ (function (_super) {
        __extends(ConfirmationService, _super);
        function ConfirmationService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.key = 'abpConfirmation';
            _this.sticky = true;
            return _this;
        }
        ConfirmationService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ConfirmationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(core.ɵɵinject(messageservice.MessageService)); }, token: ConfirmationService, providedIn: "root" });
        return ConfirmationService;
    }(AbstractToaster));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmationComponent = /** @class */ (function () {
        function ConfirmationComponent(confirmationService) {
            this.confirmationService = confirmationService;
            this.confirm = "confirm" /* confirm */;
            this.reject = "reject" /* reject */;
            this.dismiss = "dismiss" /* dismiss */;
        }
        /**
         * @param {?} status
         * @return {?}
         */
        ConfirmationComponent.prototype.close = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.confirmationService.clear(status);
        };
        ConfirmationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-confirmation',
                        template: "\n    <p-toast\n      position=\"center\"\n      key=\"abpConfirmation\"\n      (onClose)=\"close(dismiss)\"\n      [modal]=\"true\"\n      [baseZIndex]=\"1000\"\n      styleClass=\"\"\n    >\n      <ng-template let-message pTemplate=\"message\">\n        <div *ngIf=\"message.summary\" class=\"modal-header\">\n          <h4 class=\"modal-title\">\n            {{ message.summary | abpLocalization: message.titleLocalizationParams }}\n          </h4>\n        </div>\n        <div class=\"modal-body\">\n          {{ message.detail | abpLocalization: message.messageLocalizationParams }}\n        </div>\n\n        <div class=\"modal-footer justify-content-center\">\n          <button *ngIf=\"!message.hideCancelBtn\" type=\"button\" class=\"btn btn-secondary\" (click)=\"close(reject)\">\n            {{ message.cancelCopy || 'AbpIdentity::Cancel' | abpLocalization }}\n          </button>\n          <button *ngIf=\"!message.hideYesBtn\" type=\"button\" class=\"btn btn-secondary\" (click)=\"close(confirm)\">\n            <span>{{ message.yesCopy || 'AbpIdentity::Yes' | abpLocalization }}</span>\n          </button>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
                    }] }
        ];
        /** @nocollapse */
        ConfirmationComponent.ctorParameters = function () { return [
            { type: ConfirmationService }
        ]; };
        return ConfirmationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ErrorComponent = /** @class */ (function () {
        function ErrorComponent() {
            this.title = 'Oops!';
            this.details = 'Sorry, an error has occured.';
        }
        /**
         * @return {?}
         */
        ErrorComponent.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeChild(this.host, this.elementRef.nativeElement);
        };
        ErrorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-error',
                        template: "\n    <div class=\"error\">\n      <button id=\"abp-close-button mr-2\" type=\"button\" class=\"close\" (click)=\"destroy()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"row centered\">\n        <div class=\"col-md-12\">\n          <div class=\"error-template\">\n            <h1>\n              {{ title | abpLocalization }}\n            </h1>\n            <div class=\"error-details\">\n              {{ details | abpLocalization }}\n            </div>\n            <div class=\"error-actions\">\n              <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\n                ><span class=\"glyphicon glyphicon-home\"></span> {{ '::Menu:Home' | abpLocalization }}\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: [".error{position:fixed;top:0;background-color:#fff;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
                    }] }
        ];
        return ErrorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoaderBarComponent = /** @class */ (function () {
        function LoaderBarComponent(actions, router$1) {
            var _this = this;
            this.actions = actions;
            this.router = router$1;
            this.containerClass = 'abp-loader-bar';
            this.progressClass = 'abp-progress';
            this.isLoading = false;
            this.filter = (/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload.url.indexOf('openid-configuration') < 0; });
            this.progressLevel = 0;
            actions
                .pipe(store.ofActionSuccessful(ng_core.StartLoader, ng_core.StopLoader), operators.filter(this.filter), core$1.takeUntilDestroy(this))
                .subscribe((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (action instanceof ng_core.StartLoader)
                    _this.startLoading();
                else
                    _this.stopLoading();
            }));
            router$1.events
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationStart || event instanceof router.NavigationEnd; })), core$1.takeUntilDestroy(this))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event instanceof router.NavigationStart)
                    _this.startLoading();
                else
                    _this.stopLoading();
            }));
        }
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.startLoading = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isLoading = true;
            /** @type {?} */
            var interval = setInterval((/**
             * @return {?}
             */
            function () {
                if (_this.progressLevel < 75) {
                    _this.progressLevel += Math.random() * 10;
                }
                else if (_this.progressLevel < 90) {
                    _this.progressLevel += 0.4;
                }
                else if (_this.progressLevel < 100) {
                    _this.progressLevel += 0.1;
                }
                else {
                    clearInterval(interval);
                }
            }), 300);
            this.interval = interval;
        };
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.stopLoading = /**
         * @return {?}
         */
        function () {
            var _this = this;
            clearInterval(this.interval);
            this.progressLevel = 100;
            this.isLoading = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.progressLevel = 0;
            }), 800);
        };
        LoaderBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-loader-bar',
                        template: "\n    <div id=\"abp-loader-bar\" [ngClass]=\"containerClass\" [class.is-loading]=\"isLoading\">\n      <div [ngClass]=\"progressClass\" [style.width.vw]=\"progressLevel\"></div>\n    </div>\n  ",
                        styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{background:#77b6ff;box-shadow:0 0 10px rgba(119,182,255,.7);height:2px;left:0;position:fixed;top:0;transition:width .4s}"]
                    }] }
        ];
        /** @nocollapse */
        LoaderBarComponent.ctorParameters = function () { return [
            { type: store.Actions },
            { type: router.Router }
        ]; };
        LoaderBarComponent.propDecorators = {
            containerClass: [{ type: core.Input }],
            progressClass: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            filter: [{ type: core.Input }]
        };
        return LoaderBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(actions) {
            this.actions = actions;
            this.buttonClass = 'btn btn-primary';
            this.buttonType = 'button';
            this.loading = false;
            this.disabled = false;
        }
        Object.defineProperty(ButtonComponent.prototype, "icon", {
            get: /**
             * @return {?}
             */
            function () {
                return "" + (this.loading ? 'fa fa-spin fa-spinner' : this.iconClass || 'd-none');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.requestType || this.requestURLContainSearchValue) {
                this.actions
                    .pipe(store.ofActionSuccessful(ng_core.StartLoader, ng_core.StopLoader), operators.filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var condition = true;
                    if (_this.requestType) {
                        if (!Array.isArray(_this.requestType))
                            _this.requestType = [_this.requestType];
                        condition =
                            condition &&
                                _this.requestType.findIndex((/**
                                 * @param {?} type
                                 * @return {?}
                                 */
                                function (type) { return type.toLowerCase() === event.payload.method.toLowerCase(); })) > -1;
                    }
                    if (condition && _this.requestURLContainSearchValue) {
                        condition =
                            condition &&
                                event.payload.url.toLowerCase().indexOf(_this.requestURLContainSearchValue.toLowerCase()) > -1;
                    }
                    return condition;
                })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.loading = !_this.loading;
                    }), 0);
                }));
            }
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-button',
                        template: "\n    <button [attr.type]=\"buttonType\" [ngClass]=\"buttonClass\" [disabled]=\"loading || disabled\">\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return [
            { type: store.Actions }
        ]; };
        ButtonComponent.propDecorators = {
            buttonClass: [{ type: core.Input }],
            buttonType: [{ type: core.Input }],
            iconClass: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            requestType: [{ type: core.Input }],
            requestURLContainSearchValue: [{ type: core.Input }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ANIMATION_TIMEOUT = 200;
    var ModalComponent = /** @class */ (function () {
        function ModalComponent(renderer, confirmationService) {
            this.renderer = renderer;
            this.confirmationService = confirmationService;
            this.centered = false;
            this.modalClass = '';
            this.size = 'lg';
            this.visibleChange = new core.EventEmitter();
            this.init = new core.EventEmitter();
            this._visible = false;
            this._busy = false;
            this.showModal = false;
            this.isOpenConfirmation = false;
            this.closable = false;
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(ModalComponent.prototype, "visible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._visible;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                if (typeof value !== 'boolean')
                    return;
                if (!this.modalContent) {
                    if (value) {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.showModal = value;
                            _this.visible = value;
                        }), 0);
                    }
                    return;
                }
                if (value) {
                    this.setVisible(value);
                    this.listen();
                }
                else {
                    this.closable = false;
                    this.renderer.addClass(this.modalContent.nativeElement, 'fade-out-top');
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.setVisible(value);
                        _this.ngOnDestroy();
                    }), ANIMATION_TIMEOUT - 10);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "busy", {
            get: /**
             * @return {?}
             */
            function () {
                return this._busy;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
                    this.abpSubmit.loading = value;
                }
                this._busy = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        ModalComponent.prototype.setVisible = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._visible = value;
            this.visibleChange.emit(value);
            this.showModal = value;
            value
                ? rxjs.timer(ANIMATION_TIMEOUT + 100)
                    .pipe(operators.take(1))
                    .subscribe((/**
                 * @param {?} _
                 * @return {?}
                 */
                function (_) { return (_this.closable = true); }))
                : (this.closable = false);
        };
        /**
         * @return {?}
         */
        ModalComponent.prototype.listen = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.fromEvent(document, 'keyup')
                .pipe(operators.takeUntil(this.destroy$), operators.debounceTime(150), operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key && key.code === 'Escape' && _this.closable; })))
                .subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.close();
            }));
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.abpClose)
                    return;
                rxjs.fromEvent(_this.abpClose.nativeElement, 'click')
                    .pipe(operators.takeUntil(_this.destroy$), operators.filter((/**
                 * @return {?}
                 */
                function () { return !!(_this.closable && _this.modalContent); })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.close(); }));
            }), 0);
            this.init.emit();
        };
        /**
         * @return {?}
         */
        ModalComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.closable || this.busy)
                return;
            /** @type {?} */
            var nodes = getFlatNodes(((/** @type {?} */ (this.modalContent.nativeElement.querySelector('#abp-modal-body')))).childNodes);
            if (hasNgDirty(nodes)) {
                if (this.isOpenConfirmation)
                    return;
                this.isOpenConfirmation = true;
                this.confirmationService
                    .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                    .subscribe((/**
                 * @param {?} status
                 * @return {?}
                 */
                function (status) {
                    rxjs.timer(ANIMATION_TIMEOUT).subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.isOpenConfirmation = false;
                    }));
                    if (status === "confirm" /* confirm */) {
                        _this.visible = false;
                    }
                }));
            }
            else {
                this.visible = false;
            }
        };
        ModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-modal',
                        template: "<div\n  *ngIf=\"showModal\"\n  (click)=\"close()\"\n  id=\"abp-modal\"\n  class=\"modal fade {{ modalClass }} d-block show\"\n  [style.padding-right.px]=\"'15'\"\n>\n  <div\n    id=\"abp-modal-container\"\n    class=\"modal-dialog modal-{{ size }} fade-in-top\"\n    tabindex=\"-1\"\n    [class.modal-dialog-centered]=\"centered\"\n    #abpModalContent\n  >\n    <div #content id=\"abp-modal-content\" class=\"modal-content\" (click)=\"$event.stopPropagation()\">\n      <div id=\"abp-modal-header\" class=\"modal-header\">\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\n\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div\n        id=\"abp-modal-body\"\n        class=\"modal-body\"\n        [style.height]=\"height || undefined\"\n        [style.minHeight]=\"minHeight || undefined\"\n      >\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\n\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ModalComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: ConfirmationService }
        ]; };
        ModalComponent.propDecorators = {
            visible: [{ type: core.Input }],
            busy: [{ type: core.Input }],
            centered: [{ type: core.Input }],
            modalClass: [{ type: core.Input }],
            size: [{ type: core.Input }],
            height: [{ type: core.Input }],
            minHeight: [{ type: core.Input }],
            visibleChange: [{ type: core.Output }],
            init: [{ type: core.Output }],
            abpHeader: [{ type: core.ContentChild, args: ['abpHeader', { static: false },] }],
            abpBody: [{ type: core.ContentChild, args: ['abpBody', { static: false },] }],
            abpFooter: [{ type: core.ContentChild, args: ['abpFooter', { static: false },] }],
            abpClose: [{ type: core.ContentChild, args: ['abpClose', { static: false, read: core.ElementRef },] }],
            abpSubmit: [{ type: core.ContentChild, args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
            modalContent: [{ type: core.ViewChild, args: ['abpModalContent', { static: false },] }],
            abpButtons: [{ type: core.ViewChildren, args: ['abp-button',] }]
        };
        return ModalComponent;
    }());
    /**
     * @param {?} nodes
     * @return {?}
     */
    function getFlatNodes(nodes) {
        return Array.from(nodes).reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) { return __spread(acc, (val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val])); }), []);
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    function hasNgDirty(nodes) {
        return nodes.findIndex((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return (node.className || '').indexOf('ng-dirty') > -1; })) > -1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastComponent = /** @class */ (function () {
        function ToastComponent() {
        }
        ToastComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-toast',
                        template: "\n    <p-toast position=\"bottom-right\" key=\"abpToast\" [baseZIndex]=\"1000\">\n      <ng-template let-message pTemplate=\"message\">\n        <span\n          class=\"ui-toast-icon pi\"\n          [ngClass]=\"{\n            'pi-info-circle': message.severity == 'info',\n            'pi-exclamation-triangle': message.severity == 'warn',\n            'pi-times': message.severity == 'error',\n            'pi-check': message.severity == 'success'\n          }\"\n        ></span>\n        <div class=\"ui-toast-message-text-content\">\n          <div class=\"ui-toast-summary\">{{ message.summary | abpLocalization: message.titleLocalizationParams }}</div>\n          <div class=\"ui-toast-detail\">{{ message.detail | abpLocalization: message.messageLocalizationParams }}</div>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
                    }] }
        ];
        return ToastComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var styles = "\n.is-invalid .form-control {\n  border-color: #dc3545;\n  border-style: solid !important;\n}\n\n.is-invalid .invalid-feedback,\n.is-invalid + * .invalid-feedback {\n  display: block;\n}\n\n.data-tables-filter {\n  text-align: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.navbar .dropdown-submenu a::after {\n  transform: rotate(-90deg);\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.navbar .dropdown-menu {\n  min-width: 200px;\n}\n\n.modal {\n background-color: rgba(0, 0, 0, .6);\n}\n\n.abp-ellipsis {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* <animations */\n\n.fade-in-top {\n  animation: fadeInTop 0.2s ease-in-out;\n}\n\n.fade-out-top {\n  animation: fadeOutTop 0.2s ease-in-out;\n}\n\n\n@keyframes fadeInTop {\n  from {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(5px);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutTop {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n\n/* </animations */\n\n";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULTS = {
        defaultError: {
            message: 'An error has occurred!',
            details: 'Error detail not sent by server.',
        },
        defaultError401: {
            message: 'You are not authenticated!',
            details: 'You should be authenticated (sign in) in order to perform this operation.',
        },
        defaultError403: {
            message: 'You are not authorized!',
            details: 'You are not allowed to perform this operation.',
        },
        defaultError404: {
            message: 'Resource not found!',
            details: 'The resource requested could not found on the server.',
        },
    };
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler(actions, store$1, confirmationService, appRef, cfRes, rendererFactory, injector) {
            var _this = this;
            this.actions = actions;
            this.store = store$1;
            this.confirmationService = confirmationService;
            this.appRef = appRef;
            this.cfRes = cfRes;
            this.rendererFactory = rendererFactory;
            this.injector = injector;
            actions.pipe(store.ofActionSuccessful(ng_core.RestOccurError)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                var _a = res.payload, err = _a === void 0 ? (/** @type {?} */ ({})) : _a;
                /** @type {?} */
                var body = snq((/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (err))).error.error; }), DEFAULTS.defaultError.message);
                if (err.headers.get('_AbpErrorFormat')) {
                    /** @type {?} */
                    var confirmation$ = _this.showError(null, null, body);
                    if (err.status === 401) {
                        confirmation$.subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.navigateToLogin();
                        }));
                    }
                }
                else {
                    switch (((/** @type {?} */ (err))).status) {
                        case 401:
                            _this.showError(DEFAULTS.defaultError401.details, DEFAULTS.defaultError401.message).subscribe((/**
                             * @return {?}
                             */
                            function () {
                                return _this.navigateToLogin();
                            }));
                            break;
                        case 403:
                            _this.createErrorComponent({
                                title: DEFAULTS.defaultError403.message,
                                details: DEFAULTS.defaultError403.details,
                            });
                            break;
                        case 404:
                            _this.showError(DEFAULTS.defaultError404.details, DEFAULTS.defaultError404.message);
                            break;
                        case 500:
                            _this.createErrorComponent({
                                title: '500',
                                details: 'AbpAccount::InternalServerErrorMessage',
                            });
                            break;
                        case 0:
                            if (((/** @type {?} */ (err))).statusText === 'Unknown Error') {
                                _this.createErrorComponent({
                                    title: 'Unknown Error',
                                    details: 'AbpAccount::InternalServerErrorMessage',
                                });
                            }
                            break;
                        default:
                            _this.showError(DEFAULTS.defaultError.details, DEFAULTS.defaultError.message);
                            break;
                    }
                }
            }));
        }
        /**
         * @private
         * @param {?=} message
         * @param {?=} title
         * @param {?=} body
         * @return {?}
         */
        ErrorHandler.prototype.showError = /**
         * @private
         * @param {?=} message
         * @param {?=} title
         * @param {?=} body
         * @return {?}
         */
        function (message, title, body) {
            if (body) {
                if (body.details) {
                    message = body.details;
                    title = body.message;
                }
                else {
                    message = body.message || DEFAULTS.defaultError.message;
                }
            }
            return this.confirmationService.error(message, title, {
                hideCancelBtn: true,
                yesCopy: 'OK',
            });
        };
        /**
         * @private
         * @return {?}
         */
        ErrorHandler.prototype.navigateToLogin = /**
         * @private
         * @return {?}
         */
        function () {
            this.store.dispatch(new routerPlugin.Navigate(['/account/login'], null, {
                state: { redirectUrl: this.store.selectSnapshot(routerPlugin.RouterState).state.url },
            }));
        };
        /**
         * @param {?} instance
         * @return {?}
         */
        ErrorHandler.prototype.createErrorComponent = /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            /** @type {?} */
            var renderer = this.rendererFactory.createRenderer(null, null);
            /** @type {?} */
            var host = renderer.selectRootElement('app-root', true);
            /** @type {?} */
            var componentRef = this.cfRes.resolveComponentFactory(ErrorComponent).create(this.injector);
            for (var key in componentRef.instance) {
                if (componentRef.instance.hasOwnProperty(key)) {
                    componentRef.instance[key] = instance[key];
                }
            }
            this.appRef.attachView(componentRef.hostView);
            renderer.appendChild(host, ((/** @type {?} */ (componentRef.hostView))).rootNodes[0]);
            componentRef.instance.renderer = renderer;
            componentRef.instance.elementRef = componentRef.location;
            componentRef.instance.host = host;
        };
        ErrorHandler.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ErrorHandler.ctorParameters = function () { return [
            { type: store.Actions },
            { type: store.Store },
            { type: ConfirmationService },
            { type: core.ApplicationRef },
            { type: core.ComponentFactoryResolver },
            { type: core.RendererFactory2 },
            { type: core.Injector }
        ]; };
        /** @nocollapse */ ErrorHandler.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(core.ɵɵinject(store.Actions), core.ɵɵinject(store.Store), core.ɵɵinject(ConfirmationService), core.ɵɵinject(core.ApplicationRef), core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.RendererFactory2), core.ɵɵinject(core.INJECTOR)); }, token: ErrorHandler, providedIn: "root" });
        return ErrorHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidationErrorComponent = /** @class */ (function (_super) {
        __extends(ValidationErrorComponent, _super);
        function ValidationErrorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ValidationErrorComponent.prototype, "abpErrors", {
            get: /**
             * @return {?}
             */
            function () {
                return this.validationErrors.map((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    if (!error.message)
                        return error;
                    /** @type {?} */
                    var index = error.message.indexOf('[');
                    if (index > -1) {
                        return __assign({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
                    }
                    return error;
                }));
            },
            enumerable: true,
            configurable: true
        });
        ValidationErrorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-validation-error',
                        template: "\n    <div class=\"invalid-feedback\" *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n      {{ error.message | abpLocalization: error.interpoliteParams }}\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return ValidationErrorComponent;
    }(core$1.ValidationErrorComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function appendScript(injector) {
        /** @type {?} */
        var fn = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var lazyLoadService = injector.get(ng_core.LazyLoadService);
            return rxjs.forkJoin(lazyLoadService.load(null, 'style', styles, 'head', 'afterbegin') /* lazyLoadService.load(null, 'script', scripts) */).pipe(operators.take(1));
        });
        return fn;
    }
    var ThemeSharedModule = /** @class */ (function () {
        function ThemeSharedModule() {
        }
        /**
         * @return {?}
         */
        ThemeSharedModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: ThemeSharedModule,
                providers: [
                    {
                        provide: core.APP_INITIALIZER,
                        multi: true,
                        deps: [core.Injector, ErrorHandler],
                        useFactory: appendScript,
                    },
                    { provide: messageservice.MessageService, useClass: messageservice.MessageService },
                ],
            };
        };
        ThemeSharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ng_core.CoreModule,
                            toast.ToastModule,
                            ngBootstrap.NgbModalModule,
                            core$1.NgxValidateCoreModule.forRoot({
                                targetSelector: '.form-group',
                                blueprints: {
                                    email: "AbpAccount::ThisFieldIsNotAValidEmailAddress.",
                                    max: "AbpAccount::ThisFieldMustBeAStringWithAMaximumLengthOf{1}[{{ max }}]",
                                    maxlength: "AbpAccount::ThisFieldMustBeAStringWithAMaximumLengthOf{1}[{{ requiredLength }}]",
                                    min: "AbpAccount::ThisFieldMustBeAStringWithAMinimumLengthOf{1}AndAMaximumLengthOf{0}[{{ min }},{{ max }}]",
                                    minlength: "AbpAccount::ThisFieldMustBeAStringWithAMinimumLengthOf{1}AndAMaximumLengthOf{0}[{{ min }},{{ max }}]",
                                    required: "AbpAccount::ThisFieldIsRequired.",
                                    passwordMismatch: "AbpIdentity::Identity.PasswordConfirmationFailed",
                                },
                                errorTemplate: ValidationErrorComponent,
                            }),
                        ],
                        declarations: [
                            ButtonComponent,
                            ConfirmationComponent,
                            ToastComponent,
                            ModalComponent,
                            ErrorComponent,
                            LoaderBarComponent,
                            ValidationErrorComponent,
                        ],
                        exports: [ngBootstrap.NgbModalModule, ButtonComponent, ConfirmationComponent, ToastComponent, ModalComponent, LoaderBarComponent],
                        entryComponents: [ErrorComponent, ValidationErrorComponent],
                    },] }
        ];
        return ThemeSharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var slideFromBottom = animations.trigger('routeAnimations', [
        animations.state('void', animations.style({ 'margin-top': '20px', opacity: '0' })),
        animations.state('*', animations.style({ 'margin-top': '0px', opacity: '1' })),
        animations.transition(':enter', [animations.animate('0.2s ease-out', animations.style({ opacity: '1', 'margin-top': '0px' }))]),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Confirmation;
    (function (Confirmation) {
        /**
         * @record
         */
        function Options() { }
        Confirmation.Options = Options;
    })(Confirmation || (Confirmation = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    (function (Toaster) {
        /**
         * @record
         */
        function Options() { }
        Toaster.Options = Options;
    })(exports.Toaster || (exports.Toaster = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToasterService = /** @class */ (function (_super) {
        __extends(ToasterService, _super);
        function ToasterService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} messages
         * @return {?}
         */
        ToasterService.prototype.addAll = /**
         * @param {?} messages
         * @return {?}
         */
        function (messages) {
            var _this = this;
            this.messageService.addAll(messages.map((/**
             * @param {?} message
             * @return {?}
             */
            function (message) { return (__assign({ key: _this.key }, message)); })));
        };
        ToasterService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ToasterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(core.ɵɵinject(messageservice.MessageService)); }, token: ToasterService, providedIn: "root" });
        return ToasterService;
    }(AbstractToaster));

    exports.ButtonComponent = ButtonComponent;
    exports.ConfirmationComponent = ConfirmationComponent;
    exports.ConfirmationService = ConfirmationService;
    exports.LoaderBarComponent = LoaderBarComponent;
    exports.ModalComponent = ModalComponent;
    exports.ThemeSharedModule = ThemeSharedModule;
    exports.ToastComponent = ToastComponent;
    exports.ToasterService = ToasterService;
    exports.appendScript = appendScript;
    exports.slideFromBottom = slideFromBottom;
    exports.ɵa = ValidationErrorComponent;
    exports.ɵb = ButtonComponent;
    exports.ɵc = ConfirmationComponent;
    exports.ɵd = ConfirmationService;
    exports.ɵe = AbstractToaster;
    exports.ɵf = ToastComponent;
    exports.ɵg = ModalComponent;
    exports.ɵh = ErrorComponent;
    exports.ɵi = LoaderBarComponent;
    exports.ɵj = ErrorHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=abp-ng.theme.shared.umd.js.map