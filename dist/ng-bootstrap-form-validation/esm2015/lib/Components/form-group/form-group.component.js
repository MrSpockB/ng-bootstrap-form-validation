import { __decorate, __metadata } from "tslib";
import { Component, ContentChildren, ContentChild, ElementRef, HostBinding, Input, QueryList, OnInit, AfterContentInit } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessageService } from "../../Services/error-message.service";
import { MessagesComponent } from "../messages/messages.component";
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
export { FormGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVduRSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWtDN0IsWUFDVSxLQUFpQixFQUNqQixtQkFBd0M7UUFEeEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBL0JsRCx3QkFBbUIsR0FBbUIsRUFBRSxDQUFDO1FBR3pDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQXdCcEIsYUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUt4QyxDQUFDO0lBMUJKLElBQUksU0FBUztRQUNYLE9BQU8sQ0FDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNqRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FDekIsQ0FBQztJQUNKLENBQUM7SUFHRCxJQUFJLFVB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LEVBQUU7OytEQUNpQztBQUd6QztJQURDLEtBQUssRUFBRTs7OERBQ21CO0FBRzNCO0lBREMsV0FBVyxDQUFDLGlCQUFpQixDQUFDOzs7bURBTTlCO0FBR0Q7SUFEQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7OztvREFPaEM7QUFHRDtJQURDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzs4QkFDVixpQkFBaUI7eURBQUM7QUE1QjdCLGtCQUFrQjtJQVI5QixTQUFTLENBQUM7UUFDVCxvQ0FBb0M7UUFDcEMsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7R0FHVDtLQUNGLENBQUM7cUNBb0NpQixVQUFVO1FBQ0ksbUJBQW1CO0dBcEN2QyxrQkFBa0IsQ0FzRjlCO1NBdEZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4uL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiLmZvcm0tZ3JvdXBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGJmdi1tZXNzYWdlcyAqbmdJZj1cIiFtZXNzYWdlc0Jsb2NrXCIgW21lc3NhZ2VzXT1cIm1lc3NhZ2VzXCI+PC9iZnYtbWVzc2FnZXM+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihGb3JtQ29udHJvbE5hbWUpXG4gIEZvcm1Db250cm9sTmFtZXM6IFF1ZXJ5TGlzdDxGb3JtQ29udHJvbE5hbWU+O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbUVycm9yTWVzc2FnZXM6IEVycm9yTWVzc2FnZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgdmFsaWRhdGlvbkRpc2FibGVkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGFzLWVycm9yXCIpXG4gIGdldCBoYXNFcnJvcnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gIWMudmFsaWQgJiYgYy5kaXJ0eSAmJiBjLnRvdWNoZWQpICYmXG4gICAgICAhdGhpcy52YWxpZGF0aW9uRGlzYWJsZWRcbiAgICApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGFzLXN1Y2Nlc3NcIilcbiAgZ2V0IGhhc1N1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+ICFjLnZhbGlkKSAmJlxuICAgICAgdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiBjLmRpcnR5ICYmIGMudG91Y2hlZCkgJiZcbiAgICAgICF0aGlzLnZhbGlkYXRpb25EaXNhYmxlZFxuICAgICk7XG4gIH1cblxuICBAQ29udGVudENoaWxkKE1lc3NhZ2VzQ29tcG9uZW50KVxuICBwdWJsaWMgbWVzc2FnZXNCbG9jazogTWVzc2FnZXNDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXTtcblxuICBwdWJsaWMgbWVzc2FnZXMgPSAoKSA9PiB0aGlzLmdldE1lc3NhZ2VzKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZVNlcnZpY2U6IEVycm9yTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlc0Jsb2NrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzQmxvY2subWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5lcnJvck1lc3NhZ2VzXG4gICAgICAuY29uY2F0KHRoaXMuY3VzdG9tRXJyb3JNZXNzYWdlcylcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBnZXQgbGFiZWwoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIHJldHVybiBsYWJlbCAmJiBsYWJlbC50ZXh0Q29udGVudCA/IGxhYmVsLnRleHRDb250ZW50LnRyaW0oKSA6IFwiVGhpcyBmaWVsZFwiO1xuICB9XG5cbiAgZ2V0IGlzRGlydHlBbmRUb3VjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+IGMuZGlydHkgJiYgYy50b3VjaGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgaWYgKCF0aGlzLmlzRGlydHlBbmRUb3VjaGVkIHx8IHRoaXMudmFsaWRhdGlvbkRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLkZvcm1Db250cm9sTmFtZXMubWFwKGYgPT4gZi5uYW1lKTtcblxuICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5maWx0ZXIoXG4gICAgICAoYywgaSkgPT5cbiAgICAgICAgIWMudmFsaWQgJiZcbiAgICAgICAgISFjLmVycm9ycyAmJlxuICAgICAgICAvLyBmaWx0ZXIgb3V0IEZvcm1Db250cm9sTmFtZXMgdGhhdCBzaGFyZSB0aGUgc2FtZSBuYW1lIC0gdXN1YWxseSBmb3IgcmFkaW8gYnV0dG9uc1xuICAgICAgICBuYW1lcy5pbmRleE9mKGMubmFtZSkgPT09IGlcbiAgICApLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhjb250cm9sLmVycm9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3JNZXNzYWdlcy5maW5kKGVyciA9PiBlcnIuZXJyb3IgPT09IGtleSk7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvci5mb3JtYXQodGhpcy5sYWJlbCwgY29udHJvbC5lcnJvcnNba2V5XSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==