import { WebPlugin } from '@capacitor/core';
import type { AuthBrowserPlugin, OpenOptions, SuccessOrFailureResult } from './definitions';
export declare class AuthBrowserWeb extends WebPlugin implements AuthBrowserPlugin {
    _lastWindow: Window | null;
    constructor();
    start(_options: OpenOptions): Promise<SuccessOrFailureResult>;
    abort(): Promise<void>;
}
declare const AuthBrowser: AuthBrowserWeb;
export { AuthBrowser };
