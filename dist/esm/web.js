import { WebPlugin } from '@capacitor/core';
export class AuthBrowserWeb extends WebPlugin {
    constructor() {
        super();
        this._lastWindow = null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async start(_options) {
        throw new Error("Method not implemented on web.");
    }
    async abort() {
        throw new Error("Method not implemented on web.");
    }
}
const AuthBrowser = new AuthBrowserWeb();
export { AuthBrowser };
//# sourceMappingURL=web.js.map