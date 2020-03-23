import { __decorate, __metadata, __param } from 'tslib';
import { EventEmitter, Input, Output, HostListener, Directive, InjectionToken, Inject, Component, ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, ContentChildren, QueryList, HostBinding, ContentChild, Optional, Host, SkipSelf, NgModule } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormControlName, ControlContainer } from '@angular/forms';
import { CommonModule } from '@angular/common';

let FormValidationDirective = class FormValidationDirective {
    constructor() {
        this.validSubmit = new EventEmitter();
    }
    onSubmit() {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    }
    markAsTouchedAndDirty(control) {
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach(key => this.markAsTouchedAndDirty(control.controls[key]));
        }
        else if (control instanceof FormArray) {
            control.controls.forEach(c => this.markAsTouchedAndDirty(c));
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
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

var BootstrapVersion;
(function (BootstrapVersion) {
    BootstrapVersion[BootstrapVersion["Three"] = 0] = "Three";
    BootstrapVersion[BootstrapVersion["Four"] = 1] = "Four";
})(BootstrapVersion || (BootstrapVersion = {}));

const CUSTOM_ERROR_MESSAGES = new InjectionToken("ng-bootstrap-form-validation custom error messages");
const BOOTSTRAP_VERSION = new InjectionToken("ng-bootstrap-form-validation module options");

let MessagesComponent = class MessagesComponent {
    constructor(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = () => [];
    }
    get className() {
        switch (this.bootstrapVersion) {
            case BootstrapVersion.Three:
                return "help-block";
            case BootstrapVersion.Four:
                return "invalid-feedback";
        }
    }
};
MessagesComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "messages", void 0);
MessagesComponent = __decorate([
    Component({
        selector: "bfv-messages",
        template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{
      message
    }}</span>
  `,
        styles: [`
      .invalid-feedback,
      .valid-feedback {
        display: block;
      }
    `]
    }),
    __param(0, Inject(BOOTSTRAP_VERSION)),
    __metadata("design:paramtypes", [Number])
], MessagesComponent);

const ɵ0 = label => `${label} is required`, ɵ1 = label => `${label} is invalid`, ɵ2 = (label, error) => `${label} must be at least ${error.requiredLength} characters`, ɵ3 = (label, error) => `${label} must be no longer than ${error.requiredLength} characters`, ɵ4 = (label, error) => `${label} is required`, ɵ5 = (label, error) => `Invalid email address`, ɵ6 = (label, error) => `${label} must be no greater than ${error.max}`, ɵ7 = (label, error) => `${label} must be no less than ${error.min}`;
const DEFAULT_ERRORS = [
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

let ErrorMessageService = class ErrorMessageService {
    constructor(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
        this.errorMessages = customErrorMessages.reduce((acc, cur) => acc.concat(cur), this.defaultErrors);
    }
};
ErrorMessageService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
];
ErrorMessageService.ɵprov = ɵɵdefineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(ɵɵinject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
ErrorMessageService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __param(0, Inject(CUSTOM_ERROR_MESSAGES)),
    __metadata("design:paramtypes", [Array])
], ErrorMessageService);

let FormGroupComponent = class FormGroupComponent {
    constructor(elRef, errorMessageService) {
        this.elRef = elRef;
        this.errorMessageService = errorMessageService;
        this.customErrorMessages = [];
        this.validationDisabled = false;
        this.messages = () => this.getMessages();
    }
    get hasErrors() {
        return (this.FormControlNames.some(c => !c.valid && c.dirty && c.touched) &&
            !this.validationDisabled);
    }
    get hasSuccess() {
        return (!this.FormControlNames.some(c => !c.valid) &&
            this.FormControlNames.some(c => c.dirty && c.touched) &&
            !this.validationDisabled);
    }
    ngAfterContentInit() {
        if (this.messagesBlock) {
            this.messagesBlock.messages = this.messages;
        }
    }
    ngOnInit() {
        this.errorMessages = this.errorMessageService.errorMessages
            .concat(this.customErrorMessages)
            .reverse();
    }
    get label() {
        const label = this.elRef.nativeElement.querySelector("label");
        return label && label.textContent ? label.textContent.trim() : "This field";
    }
    get isDirtyAndTouched() {
        return this.FormControlNames.some(c => c.dirty && c.touched);
    }
    getMessages() {
        const messages = [];
        if (!this.isDirtyAndTouched || this.validationDisabled) {
            return messages;
        }
        const names = this.FormControlNames.map(f => f.name);
        this.FormControlNames.filter((c, i) => !c.valid &&
            !!c.errors &&
            // filter out FormControlNames that share the same name - usually for radio buttons
            names.indexOf(c.name) === i).forEach(control => {
            Object.keys(control.errors).forEach(key => {
                const error = this.errorMessages.find(err => err.error === key);
                if (!error) {
                    return;
                }
                messages.push(error.format(this.label, control.errors[key]));
            });
        });
        return messages;
    }
};
FormGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ErrorMessageService }
];
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
        template: `
    <ng-content></ng-content>
    <bfv-messages *ngIf="!messagesBlock" [messages]="messages"></bfv-messages>
  `
    }),
    __metadata("design:paramtypes", [ElementRef,
        ErrorMessageService])
], FormGroupComponent);

function controlPath(name, parent) {
    // tslint:disable-next-line:no-non-null-assertion
    return [...parent.path, name];
}
let FormControlDirective = class FormControlDirective {
    constructor(
    // this value might be null, but we union type it as such until
    // this issue is resolved: https://github.com/angular/angular/issues/25544
    parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    get validClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.valid &&
            (this.control.touched || this.control.dirty));
    }
    get invalidClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.invalid &&
            this.control.touched &&
            this.control.dirty);
    }
    get path() {
        return controlPath(this.formControlName, this.parent);
    }
    get control() {
        return this.formDirective && this.formDirective.getControl(this);
    }
    get formDirective() {
        return this.parent ? this.parent.formDirective : null;
    }
    get bootstrapFour() {
        return this.bootstrapVersion === BootstrapVersion.Four;
    }
};
FormControlDirective.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
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

var NgBootstrapFormValidationModule_1;
let NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = class NgBootstrapFormValidationModule {
    static forRoot(userOptions = {
        bootstrapVersion: BootstrapVersion.Four
    }) {
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
    }
};
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

/*
 * Public API Surface of ng-bootstrap-form-validation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BOOTSTRAP_VERSION, BootstrapVersion, CUSTOM_ERROR_MESSAGES, FormGroupComponent, FormValidationDirective, MessagesComponent, NgBootstrapFormValidationModule, ErrorMessageService as ɵa, FormControlDirective as ɵb };
//# sourceMappingURL=ng-bootstrap-form-validation.js.map