import { __decorate, __metadata, __param, __spread } from 'tslib';
import { EventEmitter, Input, Output, HostListener, Directive, InjectionToken, Inject, Component, ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, ContentChildren, QueryList, HostBinding, ContentChild, Optional, Host, SkipSelf, NgModule } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormControlName, ControlContainer } from '@angular/forms';
import { CommonModule } from '@angular/common';

var FormValidationDirective = /** @class */ (function () {
    function FormValidationDirective() {
        this.validSubmit = new EventEmitter();
    }
    FormValidationDirective.prototype.onSubmit = function () {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    };
    FormValidationDirective.prototype.markAsTouchedAndDirty = function (control) {
        var _this = this;
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach(function (key) {
                return _this.markAsTouchedAndDirty(control.controls[key]);
            });
        }
        else if (control instanceof FormArray) {
            control.controls.forEach(function (c) { return _this.markAsTouchedAndDirty(c); });
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], FormValidationDirective.prototype, "formGroup", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormValidationDirective.prototype, "validSubmit", void 0);
    __decorate([
        HostListener("submit"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormValidationDirective.prototype, "onSubmit", null);
    FormValidationDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: "[formGroup]"
        })
    ], FormValidationDirective);
    return FormValidationDirective;
}());

var BootstrapVersion;
(function (BootstrapVersion) {
    BootstrapVersion[BootstrapVersion["Three"] = 0] = "Three";
    BootstrapVersion[BootstrapVersion["Four"] = 1] = "Four";
})(BootstrapVersion || (BootstrapVersion = {}));

var CUSTOM_ERROR_MESSAGES = new InjectionToken("ng-bootstrap-form-validation custom error messages");
var BOOTSTRAP_VERSION = new InjectionToken("ng-bootstrap-form-validation module options");

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = function () { return []; };
    }
    Object.defineProperty(MessagesComponent.prototype, "className", {
        get: function () {
            switch (this.bootstrapVersion) {
                case BootstrapVersion.Three:
                    return "help-block";
                case BootstrapVersion.Four:
                    return "invalid-feedback";
            }
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MessagesComponent.prototype, "messages", void 0);
    MessagesComponent = __decorate([
        Component({
            selector: "bfv-messages",
            template: "\n    <span [ngClass]=\"className\" *ngFor=\"let message of messages()\">{{\n      message\n    }}</span>\n  ",
            styles: ["\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "]
        }),
        __param(0, Inject(BOOTSTRAP_VERSION)),
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
        { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
    ]; };
    ErrorMessageService.ɵprov = ɵɵdefineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(ɵɵinject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
    ErrorMessageService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __param(0, Inject(CUSTOM_ERROR_MESSAGES)),
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
        { type: ElementRef },
        { type: ErrorMessageService }
    ]; };
    __decorate([
        ContentChildren(FormControlName),
        __metadata("design:type", QueryList)
    ], FormGroupComponent.prototype, "FormControlNames", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FormGroupComponent.prototype, "customErrorMessages", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormGroupComponent.prototype, "validationDisabled", void 0);
    __decorate([
        HostBinding("class.has-error"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormGroupComponent.prototype, "hasErrors", null);
    __decorate([
        HostBinding("class.has-success"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormGroupComponent.prototype, "hasSuccess", null);
    __decorate([
        ContentChild(MessagesComponent),
        __metadata("design:type", MessagesComponent)
    ], FormGroupComponent.prototype, "messagesBlock", void 0);
    FormGroupComponent = __decorate([
        Component({
            // tslint:disable:component-selector
            selector: ".form-group",
            template: "\n    <ng-content></ng-content>\n    <bfv-messages *ngIf=\"!messagesBlock\" [messages]=\"messages\"></bfv-messages>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef,
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
            return this.bootstrapVersion === BootstrapVersion.Four;
        },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: undefined, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FormControlDirective.prototype, "formControlName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FormControlDirective.prototype, "formControl", void 0);
    __decorate([
        HostBinding("class.is-valid"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormControlDirective.prototype, "validClass", null);
    __decorate([
        HostBinding("class.is-invalid"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormControlDirective.prototype, "invalidClass", null);
    FormControlDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: ".form-control,.form-check-input,.custom-control-input"
        }),
        __param(0, Optional()),
        __param(0, Host()),
        __param(0, SkipSelf()),
        __param(1, Inject(BOOTSTRAP_VERSION)),
        __metadata("design:paramtypes", [ControlContainer, Number])
    ], FormControlDirective);
    return FormControlDirective;
}());

var NgBootstrapFormValidationModule = /** @class */ (function () {
    function NgBootstrapFormValidationModule() {
    }
    NgBootstrapFormValidationModule_1 = NgBootstrapFormValidationModule;
    NgBootstrapFormValidationModule.forRoot = function (userOptions) {
        if (userOptions === void 0) { userOptions = {
            bootstrapVersion: BootstrapVersion.Four
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
        NgModule({
            imports: [CommonModule],
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

/*
 * Public API Surface of ng-bootstrap-form-validation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BOOTSTRAP_VERSION, BootstrapVersion, CUSTOM_ERROR_MESSAGES, FormGroupComponent, FormValidationDirective, MessagesComponent, NgBootstrapFormValidationModule, ErrorMessageService as ɵa, FormControlDirective as ɵb };
//# sourceMappingURL=ng-bootstrap-form-validation.js.map
