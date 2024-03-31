import * as universal from '../entries/pages/account/_uid_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/account/[uid]/+page.js";
export const imports = ["_app/immutable/nodes/3.DZ6l439I.js","_app/immutable/chunks/scheduler.D_sqSeie.js","_app/immutable/chunks/index.CRPgblYZ.js","_app/immutable/chunks/Footer.GMLPs_JP.js","_app/immutable/chunks/stores.DlIZWd63.js","_app/immutable/chunks/entry.CPv9dRf0.js"];
export const stylesheets = [];
export const fonts = [];
