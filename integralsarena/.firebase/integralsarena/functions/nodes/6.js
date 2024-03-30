import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/6.ZvjePvy6.js","_app/immutable/chunks/scheduler.GlODDw6I.js","_app/immutable/chunks/index.BNYT5x7Y.js","_app/immutable/chunks/Navigation.DgMToSD0.js","_app/immutable/chunks/stores.CInjHWks.js","_app/immutable/chunks/entry.CA9iS0Zg.js"];
export const stylesheets = [];
export const fonts = [];
