import { ControlContainer, FormControl } from "@angular/forms";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
export declare function controlPath(
  name: string,
  parent: ControlContainer
): string[];
export declare class FormControlDirective {
  private parent;
  private bootstrapVersion;
  formControlName: string;
  formControl: string;
  get validClass(): boolean;
  get invalidClass(): boolean;
  get path(): string[];
  get control(): FormControl;
  get formDirective(): any;
  get bootstrapFour(): boolean;
  constructor(parent: ControlContainer, bootstrapVersion: BootstrapVersion);
}