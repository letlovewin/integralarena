import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DeH6FclB.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.DhH_vOA0.js"];
export const stylesheets = ["_app/immutable/assets/0.CtxzLJek.css"];
export const fonts = [];
