import * as universal from '../entries/pages/account/_uid_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/account/[uid]/+page.js";
export const imports = ["_app/immutable/nodes/3.D3mhH5rW.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.YBxWRTly.js","_app/immutable/chunks/Footer.Bs4B1bs4.js","_app/immutable/chunks/stores.B14Odr4f.js","_app/immutable/chunks/entry.dknNnvOo.js"];
export const stylesheets = [];
export const fonts = [];
