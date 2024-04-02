import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/8.CXADW9H3.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.DhH_vOA0.js","_app/immutable/chunks/Footer.DMx_q6JX.js","_app/immutable/chunks/stores.Cypg9Wtd.js","_app/immutable/chunks/entry.DzDABR_o.js"];
export const stylesheets = [];
export const fonts = [];
