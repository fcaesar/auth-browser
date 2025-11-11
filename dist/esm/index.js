import { registerPlugin } from '@capacitor/core';
const AuthBrowser = registerPlugin('AuthBrowser', {
    web: () => import('./web').then(m => new m.AuthBrowserWeb()),
});
export * from './definitions';
export { AuthBrowser };
//# sourceMappingURL=index.js.map