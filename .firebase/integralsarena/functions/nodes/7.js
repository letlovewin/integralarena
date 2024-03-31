import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/7.BkiNZ2AI.js","_app/immutable/chunks/scheduler.D_sqSeie.js","_app/immutable/chunks/index.CRPgblYZ.js","_app/immutable/chunks/Footer.GMLPs_JP.js","_app/immutable/chunks/stores.DlIZWd63.js","_app/immutable/chunks/entry.CPv9dRf0.js"];
export const stylesheets = [];
export const fonts = [];
