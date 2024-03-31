import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.hYfH4KQM.js","_app/immutable/chunks/scheduler.D_sqSeie.js","_app/immutable/chunks/index.CuPN4mT2.js"];
export const stylesheets = ["_app/immutable/assets/0.DjzVJcX4.css"];
export const fonts = [];
