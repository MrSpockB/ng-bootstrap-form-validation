import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, Inject } from "@angular/core";
import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";
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
export { MessagesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0J4RCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWE1QixZQUNxQyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVpoRSxhQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBYXhCLENBQUM7SUFYSixJQUFJLFNBQVM7UUFDWCxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QixLQUFLLGdCQUFnQixDQUFDLEtBQUs7Z0JBQ3pCLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssZ0JBQWdCLENBQUMsSUFBSTtnQkFDeEIsT0FBTyxrQkFBa0IsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FLRixDQUFBOzs0Q0FGSSxNQUFNLFNBQUMsaUJBQWlCOztBQVozQjtJQURDLEtBQUssRUFBRTs7bURBQ21CO0FBRmhCLGlCQUFpQjtJQWhCN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7O0dBSVQ7aUJBRUM7Ozs7O0tBS0M7S0FFSixDQUFDO0lBZUcsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTs7R0FkakIsaUJBQWlCLENBZ0I3QjtTQWhCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYmZ2LW1lc3NhZ2VzXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMoKVwiPnt7XG4gICAgICBtZXNzYWdlXG4gICAgfX08L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5pbnZhbGlkLWZlZWRiYWNrLFxuICAgICAgLnZhbGlkLWZlZWRiYWNrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIG1lc3NhZ2VzID0gKCkgPT4gW107XG5cbiAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuYm9vdHN0cmFwVmVyc2lvbikge1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLlRocmVlOlxuICAgICAgICByZXR1cm4gXCJoZWxwLWJsb2NrXCI7XG4gICAgICBjYXNlIEJvb3RzdHJhcFZlcnNpb24uRm91cjpcbiAgICAgICAgcmV0dXJuIFwiaW52YWxpZC1mZWVkYmFja1wiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQk9PVFNUUkFQX1ZFUlNJT04pIHByaXZhdGUgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvblxuICApIHt9XG59XG4iXX0=