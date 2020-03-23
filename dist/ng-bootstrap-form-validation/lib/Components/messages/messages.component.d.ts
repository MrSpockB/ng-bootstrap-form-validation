import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
export declare class MessagesComponent {
  private bootstrapVersion;
  messages: () => any[];
  get className(): "help-block" | "invalid-feedback";
  constructor(bootstrapVersion: BootstrapVersion);
}