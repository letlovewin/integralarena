

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B8vP1dJi.js","_app/immutable/chunks/scheduler.GlODDw6I.js","_app/immutable/chunks/index.BNYT5x7Y.js","_app/immutable/chunks/Navigation.DgMToSD0.js","_app/immutable/chunks/stores.CInjHWks.js","_app/immutable/chunks/entry.CA9iS0Zg.js"];
export const stylesheets = [];
export const fonts = [];
