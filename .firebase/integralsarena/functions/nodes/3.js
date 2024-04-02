import * as universal from '../entries/pages/account/_uid_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/account/[uid]/+page.js";
export const imports = ["_app/immutable/nodes/3.BIkhOI5l.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.DhH_vOA0.js","_app/immutable/chunks/Footer.DMx_q6JX.js","_app/immutable/chunks/stores.Cypg9Wtd.js","_app/immutable/chunks/entry.DzDABR_o.js"];
export const stylesheets = [];
export const fonts = [];
