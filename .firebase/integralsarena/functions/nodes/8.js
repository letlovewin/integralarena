import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/8.BZOjlxvp.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.YBxWRTly.js","_app/immutable/chunks/Footer.eyh5GOhS.js","_app/immutable/chunks/stores.D2-Zatat.js","_app/immutable/chunks/entry.qtg7CP6L.js"];
export const stylesheets = [];
export const fonts = [];
