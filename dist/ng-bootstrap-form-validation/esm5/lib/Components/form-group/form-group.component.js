import { __decorate, __metadata } from "tslib";
import { Component, ContentChildren, ContentChild, ElementRef, HostBinding, Input, QueryList, OnInit, AfterContentInit } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessageService } from "../../Services/error-message.service";
import { MessagesComponent } from "../messages/messages.component";
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
export { FormGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVduRTtJQWtDRSw0QkFDVSxLQUFpQixFQUNqQixtQkFBd0M7UUFGbEQsaUJBR0k7UUFGTSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUEvQmxELHdCQUFtQixHQUFtQixFQUFFLENBQUM7UUFHekMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBd0JwQixhQUFRLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQztJQUt4QyxDQUFDO0lBMUJKLHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQWhDLENBQWdDLENBQUM7Z0JBQ2pFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUN6QixDQUFDO1FBQ0osQ0FBQzs7O09B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LENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWxEZ0IsVUFBVTtnQkFDSSxtQkFBbUI7O0lBbENsRDtRQURDLGVBQWUsQ0FBQyxlQUFlLENBQUM7a0NBQ2YsU0FBUztnRUFBa0I7SUFHN0M7UUFEQyxLQUFLLEVBQUU7O21FQUNpQztJQUd6QztRQURDLEtBQUssRUFBRTs7a0VBQ21CO0lBRzNCO1FBREMsV0FBVyxDQUFDLGlCQUFpQixDQUFDOzs7dURBTTlCO0lBR0Q7UUFEQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7Ozt3REFPaEM7SUFHRDtRQURDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztrQ0FDVixpQkFBaUI7NkRBQUM7SUE1QjdCLGtCQUFrQjtRQVI5QixTQUFTLENBQUM7WUFDVCxvQ0FBb0M7WUFDcEMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHlIQUdUO1NBQ0YsQ0FBQzt5Q0FvQ2lCLFVBQVU7WUFDSSxtQkFBbUI7T0FwQ3ZDLGtCQUFrQixDQXNGOUI7SUFBRCx5QkFBQztDQUFBLEFBdEZELElBc0ZDO1NBdEZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4uL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiLmZvcm0tZ3JvdXBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGJmdi1tZXNzYWdlcyAqbmdJZj1cIiFtZXNzYWdlc0Jsb2NrXCIgW21lc3NhZ2VzXT1cIm1lc3NhZ2VzXCI+PC9iZnYtbWVzc2FnZXM+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihGb3JtQ29udHJvbE5hbWUpXG4gIEZvcm1Db250cm9sTmFtZXM6IFF1ZXJ5TGlzdDxGb3JtQ29udHJvbE5hbWU+O1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbUVycm9yTWVzc2FnZXM6IEVycm9yTWVzc2FnZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgdmFsaWRhdGlvbkRpc2FibGVkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGFzLWVycm9yXCIpXG4gIGdldCBoYXNFcnJvcnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gIWMudmFsaWQgJiYgYy5kaXJ0eSAmJiBjLnRvdWNoZWQpICYmXG4gICAgICAhdGhpcy52YWxpZGF0aW9uRGlzYWJsZWRcbiAgICApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGFzLXN1Y2Nlc3NcIilcbiAgZ2V0IGhhc1N1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+ICFjLnZhbGlkKSAmJlxuICAgICAgdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiBjLmRpcnR5ICYmIGMudG91Y2hlZCkgJiZcbiAgICAgICF0aGlzLnZhbGlkYXRpb25EaXNhYmxlZFxuICAgICk7XG4gIH1cblxuICBAQ29udGVudENoaWxkKE1lc3NhZ2VzQ29tcG9uZW50KVxuICBwdWJsaWMgbWVzc2FnZXNCbG9jazogTWVzc2FnZXNDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXTtcblxuICBwdWJsaWMgbWVzc2FnZXMgPSAoKSA9PiB0aGlzLmdldE1lc3NhZ2VzKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZVNlcnZpY2U6IEVycm9yTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlc0Jsb2NrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzQmxvY2subWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5lcnJvck1lc3NhZ2VzXG4gICAgICAuY29uY2F0KHRoaXMuY3VzdG9tRXJyb3JNZXNzYWdlcylcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBnZXQgbGFiZWwoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIHJldHVybiBsYWJlbCAmJiBsYWJlbC50ZXh0Q29udGVudCA/IGxhYmVsLnRleHRDb250ZW50LnRyaW0oKSA6IFwiVGhpcyBmaWVsZFwiO1xuICB9XG5cbiAgZ2V0IGlzRGlydHlBbmRUb3VjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+IGMuZGlydHkgJiYgYy50b3VjaGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgaWYgKCF0aGlzLmlzRGlydHlBbmRUb3VjaGVkIHx8IHRoaXMudmFsaWRhdGlvbkRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLkZvcm1Db250cm9sTmFtZXMubWFwKGYgPT4gZi5uYW1lKTtcblxuICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5maWx0ZXIoXG4gICAgICAoYywgaSkgPT5cbiAgICAgICAgIWMudmFsaWQgJiZcbiAgICAgICAgISFjLmVycm9ycyAmJlxuICAgICAgICAvLyBmaWx0ZXIgb3V0IEZvcm1Db250cm9sTmFtZXMgdGhhdCBzaGFyZSB0aGUgc2FtZSBuYW1lIC0gdXN1YWxseSBmb3IgcmFkaW8gYnV0dG9uc1xuICAgICAgICBuYW1lcy5pbmRleE9mKGMubmFtZSkgPT09IGlcbiAgICApLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhjb250cm9sLmVycm9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3JNZXNzYWdlcy5maW5kKGVyciA9PiBlcnIuZXJyb3IgPT09IGtleSk7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvci5mb3JtYXQodGhpcy5sYWJlbCwgY29udHJvbC5lcnJvcnNba2V5XSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==