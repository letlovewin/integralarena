import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/7.DZcBFOzE.js","_app/immutable/chunks/scheduler.D_sqSeie.js","_app/immutable/chunks/index.CMhCYZte.js","_app/immutable/chunks/Navigation.DBZ_97fb.js","_app/immutable/chunks/stores.HdbwNfyr.js","_app/immutable/chunks/entry.BYlfhTy_.js"];
export const stylesheets = [];
export const fonts = [];
