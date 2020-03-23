(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-bootstrap-form-validation', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-bootstrap-form-validation'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var FormValidationDirective = /** @class */ (function () {
        function FormValidationDirective() {
            this.validSubmit = new core.EventEmitter();
        }
        FormValidationDirective.prototype.onSubmit = function () {
            this.markAsTouchedAndDirty(this.formGroup);
            if (this.formGroup.valid) {
                this.validSubmit.emit(this.formGroup.value);
            }
        };
        FormValidationDirective.prototype.markAsTouchedAndDirty = function (control) {
            var _this = this;
            if (control instanceof forms.FormGroup) {
                Object.keys(control.controls).forEach(function (key) {
                    return _this.markAsTouchedAndDirty(control.controls[key]);
                });
            }
            else if (control instanceof forms.FormArray) {
                control.controls.forEach(function (c) { return _this.markAsTouchedAndDirty(c); });
            }
            else if (control instanceof forms.FormControl && control.enabled) {
                control.markAsDirty();
                control.markAsTouched();
                control.updateValueAndValidity();
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", forms.FormGroup)
        ], FormValidationDirective.prototype, "formGroup", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], FormValidationDirective.prototype, "validSubmit", void 0);
        __decorate([
            core.HostListener("submit"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], FormValidationDirective.prototype, "onSubmit", null);
        FormValidationDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: "[formGroup]"
            })
        ], FormValidationDirective);
        return FormValidationDirective;
    }());


    (function (BootstrapVersion) {
        BootstrapVersion[BootstrapVersion["Three"] = 0] = "Three";
        BootstrapVersion[BootstrapVersion["Four"] = 1] = "Four";
    })(exports.BootstrapVersion || (exports.BootstrapVersion = {}));

    var CUSTOM_ERROR_MESSAGES = new core.InjectionToken("ng-bootstrap-form-validation custom error messages");
    var BOOTSTRAP_VERSION = new core.InjectionToken("ng-bootstrap-form-validation module options");

    var MessagesComponent = /** @class */ (function () {
        function MessagesComponent(bootstrapVersion) {
            this.bootstrapVersion = bootstrapVersion;
            this.messages = function () { return []; };
        }
        Object.defineProperty(MessagesComponent.prototype, "className", {
            get: function () {
                switch (this.bootstrapVersion) {
                    case exports.BootstrapVersion.Three:
                        return "help-block";
                    case exports.BootstrapVersion.Four:
                        return "invalid-feedback";
                }
            },
            enumerable: true,
            configurable: true
        });
        MessagesComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [BOOTSTRAP_VERSION,] }] }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MessagesComponent.prototype, "messages", void 0);
        MessagesComponent = __decorate([
            core.Component({
                selector: "bfv-messages",
                template: "\n    <span [ngClass]=\"className\" *ngFor=\"let message of messages()\">{{\n      message\n    }}</span>\n  ",
                styles: ["\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "]
            }),
            __param(0, core.Inject(BOOTSTRAP_VERSION)),
            __metadata("design:paramtypes", [Number])
        ], MessagesComponent);
        return MessagesComponent;
    }());

    var ɵ0 = function (label) { return label + " is required"; }, ɵ1 = function (label) { return label + " is invalid"; }, ɵ2 = function (label, error) {
        return label + " must be at least " + error.requiredLength + " characters";
    }, ɵ3 = function (label, error) {
        return label + " must be no longer than " + error.requiredLength + " characters";
    }, ɵ4 = function (label, error) { return label + " is required"; }, ɵ5 = function (label, error) { return "Invalid email address"; }, ɵ6 = function (label, error) { return label + " must be no greater than " + error.max; }, ɵ7 = function (label, error) { return label + " must be no less than " + error.min; };
    var DEFAULT_ERRORS = [
        {
            error: "required",
            format: ɵ0
        },
        {
            error: "pattern",
            format: ɵ1
        },
        {
            error: "minlength",
            format: ɵ2
        },
        {
            error: "maxlength",
            format: ɵ3
        },
        {
            error: "requiredTrue",
            format: ɵ4
        },
        {
            error: "email",
            format: ɵ5
        },
        {
            error: "max",
            format: ɵ6
        },
        {
            error: "min",
            format: ɵ7
        }
    ];

    var ErrorMessageService = /** @class */ (function () {
        function ErrorMessageService(customErrorMessages) {
            this.customErrorMessages = customErrorMessages;
            this.defaultErrors = DEFAULT_ERRORS;
            this.errorMessages = customErrorMessages.reduce(function (acc, cur) { return acc.concat(cur); }, this.defaultErrors);
        }
        ErrorMessageService.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: core.Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
        ]; };
        ErrorMessageService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(core["ɵɵinject"](CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
        ErrorMessageService = __decorate([
            core.Injectable({
                providedIn: "root"
            }),
            __param(0, core.Inject(CUSTOM_ERROR_MESSAGES)),
            __metadata("design:paramtypes", [Array])
        ], ErrorMessageService);
        return ErrorMessageService;
    }());

    var FormGroupComponent = /** @class */ (function () {
        function FormGroupComponent(elRef, errorMessageService) {
            var _this = this;
            this.elRef = elRef;
            this.errorMessageService = errorMessageService;
            this.customErrorMessages = [];
            this.validationDisabled = false;
            this.messages = function () { return _this.getMessages(); };
        }
        Object.defineProperty(FormGroupComponent.prototype, "hasErrors", {
            get: function () {
                return (this.FormControlNames.some(function (c) { return !c.valid && c.dirty && c.touched; }) &&
                    !this.validationDisabled);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "hasSuccess", {
            get: function () {
                return (!this.FormControlNames.some(function (c) { return !c.valid; }) &&
                    this.FormControlNames.some(function (c) { return c.dirty && c.touched; }) &&
                    !this.validationDisabled);
            },
            enumerable: true,
            configurable: true
        });
        FormGroupComponent.prototype.ngAfterContentInit = function () {
            if (this.messagesBlock) {
                this.messagesBlock.messages = this.messages;
            }
        };
        FormGroupComponent.prototype.ngOnInit = function () {
            this.errorMessages = this.errorMessageService.errorMessages
                .concat(this.customErrorMessages)
                .reverse();
        };
        Object.defineProperty(FormGroupComponent.prototype, "label", {
            get: function () {
                var label = this.elRef.nativeElement.querySelector("label");
                return label && label.textContent ? label.textContent.trim() : "This field";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupComponent.prototype, "isDirtyAndTouched", {
            get: function () {
                return this.FormControlNames.some(function (c) { return c.dirty && c.touched; });
            },
            enumerable: true,
            configurable: true
        });
        FormGroupComponent.prototype.getMessages = function () {
            var _this = this;
            var messages = [];
            if (!this.isDirtyAndTouched || this.validationDisabled) {
                return messages;
            }
            var names = this.FormControlNames.map(function (f) { return f.name; });
            this.FormControlNames.filter(function (c, i) {
                return !c.valid &&
                    !!c.errors &&
                    // filter out FormControlNames that share the same name - usually for radio buttons
                    names.indexOf(c.name) === i;
            }).forEach(function (control) {
                Object.keys(control.errors).forEach(function (key) {
                    var error = _this.errorMessages.find(function (err) { return err.error === key; });
                    if (!error) {
                        return;
                    }
                    messages.push(error.format(_this.label, control.errors[key]));
                });
            });
            return messages;
        };
        FormGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ErrorMessageService }
        ]; };
        __decorate([
            core.ContentChildren(forms.FormControlName),
            __metadata("design:type", core.QueryList)
        ], FormGroupComponent.prototype, "FormControlNames", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], FormGroupComponent.prototype, "customErrorMessages", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], FormGroupComponent.prototype, "validationDisabled", void 0);
        __decorate([
            core.HostBinding("class.has-error"),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], FormGroupComponent.prototype, "hasErrors", null);
        __decorate([
            core.HostBinding("class.has-success"),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], FormGroupComponent.prototype, "hasSuccess", null);
        __decorate([
            core.ContentChild(MessagesComponent),
            __metadata("design:type", MessagesComponent)
        ], FormGroupComponent.prototype, "messagesBlock", void 0);
        FormGroupComponent = __decorate([
            core.Component({
                // tslint:disable:component-selector
                selector: ".form-group",
                template: "\n    <ng-content></ng-content>\n    <bfv-messages *ngIf=\"!messagesBlock\" [messages]=\"messages\"></bfv-messages>\n  "
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                ErrorMessageService])
        ], FormGroupComponent);
        return FormGroupComponent;
    }());

    function controlPath(name, parent) {
        // tslint:disable-next-line:no-non-null-assertion
        return __spread(parent.path, [name]);
    }
    var FormControlDirective = /** @class */ (function () {
        function FormControlDirective(
        // this value might be null, but we union type it as such until
        // this issue is resolved: https://github.com/angular/angular/issues/25544
        parent, bootstrapVersion) {
            this.parent = parent;
            this.bootstrapVersion = bootstrapVersion;
        }
        Object.defineProperty(FormControlDirective.prototype, "validClass", {
            get: function () {
                if (!this.control) {
                    return false;
                }
                return (this.bootstrapFour &&
                    this.control.valid &&
                    (this.control.touched || this.control.dirty));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "invalidClass", {
            get: function () {
                if (!this.control) {
                    return false;
                }
                return (this.bootstrapFour &&
                    this.control.invalid &&
                    this.control.touched &&
                    this.control.dirty);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "path", {
            get: function () {
                return controlPath(this.formControlName, this.parent);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            get: function () {
                return this.formDirective && this.formDirective.getControl(this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "formDirective", {
            get: function () {
                return this.parent ? this.parent.formDirective : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "bootstrapFour", {
            get: function () {
                return this.bootstrapVersion === exports.BootstrapVersion.Four;
            },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.ctorParameters = function () { return [
            { type: forms.ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [BOOTSTRAP_VERSION,] }] }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], FormControlDirective.prototype, "formControlName", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], FormControlDirective.prototype, "formControl", void 0);
        __decorate([
            core.HostBinding("class.is-valid"),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], FormControlDirective.prototype, "validClass", null);
        __decorate([
            core.HostBinding("class.is-invalid"),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], FormControlDirective.prototype, "invalidClass", null);
        FormControlDirective = __decorate([
            core.Directive({
                // tslint:disable-next-line:directive-selector
                selector: ".form-control,.form-check-input,.custom-control-input"
            }),
            __param(0, core.Optional()),
            __param(0, core.Host()),
            __param(0, core.SkipSelf()),
            __param(1, core.Inject(BOOTSTRAP_VERSION)),
            __metadata("design:paramtypes", [forms.ControlContainer, Number])
        ], FormControlDirective);
        return FormControlDirective;
    }());

    var NgBootstrapFormValidationModule = /** @class */ (function () {
        function NgBootstrapFormValidationModule() {
        }
        NgBootstrapFormValidationModule_1 = NgBootstrapFormValidationModule;
        NgBootstrapFormValidationModule.forRoot = function (userOptions) {
            if (userOptions === void 0) { userOptions = {
                bootstrapVersion: exports.BootstrapVersion.Four
            }; }
            return {
                ngModule: NgBootstrapFormValidationModule_1,
                providers: [
                    {
                        provide: CUSTOM_ERROR_MESSAGES,
                        useValue: userOptions.customErrorMessages || [],
                        multi: true
                    },
                    {
                        provide: BOOTSTRAP_VERSION,
                        useValue: userOptions.bootstrapVersion
                    },
                    ErrorMessageService
                ]
            };
        };
        var NgBootstrapFormValidationModule_1;
        NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [
                    FormValidationDirective,
                    FormGroupComponent,
                    MessagesComponent,
                    FormControlDirective
                ],
                exports: [
                    FormValidationDirective,
                    FormGroupComponent,
                    MessagesComponent,
                    FormControlDirective
                ]
            })
        ], NgBootstrapFormValidationModule);
        return NgBootstrapFormValidationModule;
    }());

    exports.BOOTSTRAP_VERSION = BOOTSTRAP_VERSION;
    exports.CUSTOM_ERROR_MESSAGES = CUSTOM_ERROR_MESSAGES;
    exports.FormGroupComponent = FormGroupComponent;
    exports.FormValidationDirective = FormValidationDirective;
    exports.MessagesComponent = MessagesComponent;
    exports.NgBootstrapFormValidationModule = NgBootstrapFormValidationModule;
    exports.ɵa = ErrorMessageService;
    exports.ɵb = FormControlDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-bootstrap-form-validation.umd.js.map