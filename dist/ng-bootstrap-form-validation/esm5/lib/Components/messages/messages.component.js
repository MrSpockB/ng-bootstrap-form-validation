import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, Inject } from "@angular/core";
import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";
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
export { MessagesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0J4RDtJQWFFLDJCQUNxQyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVpoRSxhQUFRLEdBQUcsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLENBQUM7SUFheEIsQ0FBQztJQVhKLHNCQUFJLHdDQUFTO2FBQWI7WUFDRSxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDN0IsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO29CQUN6QixPQUFPLFlBQVksQ0FBQztnQkFDdEIsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJO29CQUN4QixPQUFPLGtCQUFrQixDQUFDO2FBQzdCO1FBQ0gsQ0FBQzs7O09BQUE7O2dEQUdFLE1BQU0sU0FBQyxpQkFBaUI7O0lBWjNCO1FBREMsS0FBSyxFQUFFOzt1REFDbUI7SUFGaEIsaUJBQWlCO1FBaEI3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsK0dBSVQ7cUJBRUMsNkZBS0M7U0FFSixDQUFDO1FBZUcsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTs7T0FkakIsaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbGliL0VudW1zL0Jvb3RzdHJhcFZlcnNpb25cIjtcbmltcG9ydCB7IEJPT1RTVFJBUF9WRVJTSU9OIH0gZnJvbSBcIi4uLy4uL1Rva2Vucy90b2tlbnNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImJmdi1tZXNzYWdlc1wiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIFtuZ0NsYXNzXT1cImNsYXNzTmFtZVwiICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzKClcIj57e1xuICAgICAgbWVzc2FnZVxuICAgIH19PC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuaW52YWxpZC1mZWVkYmFjayxcbiAgICAgIC52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtZXNzYWdlcyA9ICgpID0+IFtdO1xuXG4gIGdldCBjbGFzc05hbWUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmJvb3RzdHJhcFZlcnNpb24pIHtcbiAgICAgIGNhc2UgQm9vdHN0cmFwVmVyc2lvbi5UaHJlZTpcbiAgICAgICAgcmV0dXJuIFwiaGVscC1ibG9ja1wiO1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLkZvdXI6XG4gICAgICAgIHJldHVybiBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIl19