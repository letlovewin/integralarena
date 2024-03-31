

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Bh3RmDza.js","_app/immutable/chunks/scheduler.D_sqSeie.js","_app/immutable/chunks/index.CRPgblYZ.js","_app/immutable/chunks/entry.BDJvmx6-.js","_app/immutable/chunks/Footer.c5qvfyB6.js","_app/immutable/chunks/stores.C8VJqg6l.js"];
export const stylesheets = [];
export const fonts = [];
