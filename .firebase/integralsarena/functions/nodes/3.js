import * as universal from '../entries/pages/account/_uid_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/account/[uid]/+page.js";
export const imports = ["_app/immutable/nodes/3.DQ0zyhji.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.YBxWRTly.js","_app/immutable/chunks/Footer.eyh5GOhS.js","_app/immutable/chunks/stores.D2-Zatat.js","_app/immutable/chunks/entry.qtg7CP6L.js"];
export const stylesheets = [];
export const fonts = [];
