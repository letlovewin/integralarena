

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.D8rk7PGD.js","_app/immutable/chunks/scheduler.Dk__3NQe.js","_app/immutable/chunks/index.DhH_vOA0.js","_app/immutable/chunks/entry.DzDABR_o.js","_app/immutable/chunks/Footer.DMx_q6JX.js","_app/immutable/chunks/stores.Cypg9Wtd.js"];
export const stylesheets = [];
export const fonts = [];
