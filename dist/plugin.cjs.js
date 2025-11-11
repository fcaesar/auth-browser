'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AuthBrowser$1 = core.registerPlugin('AuthBrowser', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AuthBrowserWeb()),
});

class AuthBrowserWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AuthBrowserWeb: AuthBrowserWeb,
    AuthBrowser: AuthBrowser
});

exports.AuthBrowser = AuthBrowser$1;
//# sourceMappingURL=plugin.cjs.js.map
