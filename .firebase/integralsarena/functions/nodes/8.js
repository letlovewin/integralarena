import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/8.DweHciTK.js","_app/immutable/chunks/scheduler.D_sqSeie.js","_app/immutable/chunks/index.CRPgblYZ.js","_app/immutable/chunks/Footer.c5qvfyB6.js","_app/immutable/chunks/stores.C8VJqg6l.js","_app/immutable/chunks/entry.BDJvmx6-.js"];
export const stylesheets = [];
export const fonts = [];
