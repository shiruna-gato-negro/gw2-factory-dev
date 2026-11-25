// Armería (BL-064, ARM-1): cabecera con resumen, pestañas «Catálogo / Mi cola» y buscador.
// El marco lo pinta render-catologo.js junto con la barra de filtros: la firma del contrato de renderers no cambia.
// Corre con: node --test tests/*.test.cjs
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const JS = path.join(__dirname, '..', 'js');

function el(id) {
  const n = { id, _h: '', listeners: {}, textContent: '', value: '' };
  Object.defineProperty(n, 'innerHTML', { get: () => n._h, set: (v) => { n._h = String(v); } });
  n.addEventListener = (t, f) => { (n.listeners[t] = n.listeners[t] || []).push(f); };
  return n;
}

// Un tracker de mentira con lo que lee el marco: estado, cola y las acciones de las pestañas.
function cargar(opts = {}) {
  const registro = {};
  const calls = [];
  const nodes = {};
  const head = { children: [], appendChild(c) { this.children.push(c); } };
  const getEl = (id) => nodes[id] || null;
  const win = {
    console: { info() {}, log() {}, warn() {} },
    LegendaryTracker: {
      QUEUE_MAX: 5,
      registerRender(map) { registro.r = map; return true; },
      registerItemModal() { return true; },
      getOwnershipCounts() { return opts.own || { tengo: 3, faltan: 203 }; },
      getQueue() { return (opts.queue || []).slice(); },
      getState() {
        return { mode: opts.mode || 'catalog', token: opts.token === undefined ? 'KEY' : opts.token,
          loading: !!opts.loading, error: opts.error || null, owned: opts.owned || {} };
      },
      setMode(m) { calls.push(['setMode', m]); },
      refresh() { calls.push(['refresh']); }
    }
  };
  win.window = win;
  win.document = { getElementById: getEl, createElement: () => ({}), head };
  win.setTimeout = setTimeout;
  const ctx = vm.createContext(win);
  vm.runInContext(fs.readFileSync(path.join(JS, 'legendary-data.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(JS, 'render-catologo.js'), 'utf8'), ctx);
  ['legendaryModeContent', 'armGridHost', 'armSearchLive'].forEach((id) => { nodes[id] = el(id); });
  return { win, r: registro.r, items: win.LegendaryCatalog.items, calls, nodes, head, A: win.LegendaryCatalogUI._arm };
}
const cards = (h) => (h.match(/class="card lt-item-card"/g) || []).length;
const fire = (node, type, target) => (node.listeners[type] || []).forEach((f) => f({ target }));

test('cabecera: título, resumen por tipo y la cola, sobre el catálogo completo', () => {
  const x = cargar({ owned: { 30684: 1, 30698: 1, 81908: 1 }, queue: [30703, 30689] });
  const html = x.r.filterBar({}, x.items);
  assert.match(html, /<h2 id="armTitle">Armería Legendaria<\/h2>/);
  assert.match(html, /Desbloqueadas<\/small><b>3 <span>de 206<\/span><\/b><div class="arm-bar" aria-hidden="true"><i style="width:1\.5%"><\/i>/);
  assert.match(html, /Armas<\/small><b>2 <span>de 57<\/span>/);
  assert.match(html, /Armaduras<\/small><b>0 <span>de 132<\/span>/);
  assert.match(html, /Abalorios y más<\/small><b>1 <span>de 17<\/span>/);
  assert.match(html, /En tu cola<\/small><b>2 <span>de 5<\/span>/);
  assert.match(html, /206 legendarias · lo que tenés en la armería de tu cuenta/);
  const s = x.A.summary(x.items, { 999999: 1, 30684: 0 }, []);
  assert.equal(s.owned, 0, 'un id que no está en el catálogo, o con 0, no cuenta');
});

test('cabecera: dice la verdad sin Key, leyendo o si la API falla', () => {
  assert.match(cargar({ token: null }).r.filterBar({}, cargar().items), /Sin API Key ves el catálogo completo; para marcar las tuyas, cargá una en Inicio\./);
  assert.match(cargar({ loading: true }).r.filterBar({}, cargar().items), /Leyendo la armería de tu cuenta…/);
  assert.match(cargar({ error: 'HTTP 500' }).r.filterBar({}, cargar().items), /No pude leer la armería de tu cuenta/);
});

test('pestañas: «Catálogo» y «Mi cola» reemplazan a «Modo:», con la actual marcada', () => {
  const x = cargar({ queue: [30703] });
  let html = x.r.filterBar({}, x.items);
  assert.match(html, /<nav class="arm-tabs" aria-label="Vistas de la Armería">/);
  assert.match(html, /data-arm-tab="catalog" aria-current="page">Catálogo<span>206<\/span>/);
  assert.match(html, /data-arm-tab="progress">Mi cola<span>1 de 5<\/span>/);
  assert.match(html, /<input type="search" id="armSearch"/, 'el buscador está en el catálogo');
  html = cargar({ mode: 'progress' }).r.filterBar({}, x.items);
  assert.match(html, /data-arm-tab="progress" aria-current="page"/);
  assert.doesNotMatch(html, /armSearch/, 'en la cola no hay buscador');
  // El tracker pinta «Modo: Catálogo / Mi progreso» con style="display:flex" en línea:
  // sin !important la regla pierde y los botones viejos se ven (captura de Pablo, ARM-5).
  assert.match(x.A.CSS, /#legendaryArmoryPanel>\.panel__title,#legendaryArmoryBody>\.legendary-view-toggle\{display:none!important\}/);
});

test('las pestañas y «Actualizar» llaman al tracker; un solo oyente aunque se repinte', () => {
  const x = cargar();
  x.r.filterBar({}, x.items);
  x.r.filterBar({}, x.items);
  const c = x.nodes.legendaryModeContent;
  assert.equal(c.listeners.click.length, 1);
  const tab = { getAttribute: (k) => (k === 'data-arm-tab' ? 'progress' : null), parentNode: c };
  fire(c, 'click', tab);
  const span = { getAttribute: () => null, parentNode: tab };
  fire(c, 'click', span);
  const ref = { getAttribute: (k) => (k === 'data-arm-act' ? 'refresh' : null), parentNode: c };
  fire(c, 'click', ref);
  assert.deepEqual(JSON.parse(JSON.stringify(x.calls)), [['setMode', 'progress'], ['setMode', 'progress'], ['refresh']]);
});

test('buscador: filtra la grilla sin rearmar la página, sin tildes y en los dos idiomas', () => {
  const x = cargar();
  const grid = x.r.catalogGrid(x.items, {});
  assert.match(grid, /^<div id="armGridHost">/);
  assert.equal(cards(grid), 206, 'sin búsqueda, las 206');
  const c = x.nodes.legendaryModeContent;
  x.r.filterBar({}, x.items);
  fire(c, 'input', { id: 'armSearch', value: 'Crepusculo' });
  assert.equal(cards(x.nodes.armGridHost.innerHTML), 1);
  assert.match(x.nodes.armGridHost.innerHTML, /data-id="30704"|Crepúsculo/);
  assert.equal(x.nodes.armSearchLive.textContent, '1 legendaria');
  assert.match(x.nodes.armGridHost.innerHTML, /<p class="arm-count">1 legendaria para «Crepusculo»<\/p>/);
  fire(c, 'input', { id: 'armSearch', value: 'sunrise' });
  assert.match(x.nodes.armGridHost.innerHTML, /Amanecer/, 'también por el nombre en inglés');
  fire(c, 'input', { id: 'armSearch', value: 'zzz' });
  assert.equal(cards(x.nodes.armGridHost.innerHTML), 0);
  assert.match(x.nodes.armGridHost.innerHTML, /No encontré ninguna legendaria que se llame «zzz»/);
  assert.equal(x.nodes.armSearchLive.textContent, '0 legendarias');
  fire(c, 'input', { id: 'otro', value: 'x' });
  assert.match(x.nodes.armGridHost.innerHTML, /zzz/, 'otros campos no me importan');
  // Al repintar (por ejemplo, con un filtro) el buscador conserva lo escrito.
  assert.match(x.r.filterBar({}, x.items), /value="zzz"/);
  fire(c, 'input', { id: 'armSearch', value: '' });
  assert.equal(cards(x.nodes.armGridHost.innerHTML), 206);
  assert.equal(x.nodes.armSearchLive.textContent, '');
  assert.equal(x.A.norm('ÁrBoL ñandú'), 'arbol nandu');
});

test('lo escrito por el usuario se escapa', () => {
  const x = cargar();
  x.r.filterBar({}, x.items);
  fire(x.nodes.legendaryModeContent, 'input', { id: 'armSearch', value: '<img src=x onerror=1>' });
  assert.doesNotMatch(x.nodes.armGridHost.innerHTML, /<img src=x/);
  assert.match(x.r.filterBar({}, x.items), /value="&lt;img src=x onerror=1&gt;"/);
});

test('estilos: una sola hoja, tokens para el texto, 12 px o más, foco visible y 44 px en el celular', () => {
  const x = cargar();
  x.r.filterBar({}, x.items);
  const mine = () => x.head.children.filter((c) => c.id === 'arm-css');
  assert.equal(mine().length, 1);
  x.nodes['arm-css'] = mine()[0];
  x.r.filterBar({}, x.items);
  assert.equal(mine().length, 1, 'una sola hoja aunque se repinte');
  const css = x.A.CSS;
  assert.doesNotMatch(css, /(?:^|[;{])color:#/, 'ningún texto con color fijo');
  const sizes = [...css.matchAll(/font-size:([\d.]+)rem/g)].map((m) => Number(m[1]));
  assert.ok(sizes.length && sizes.every((s) => s >= 0.75), 'tamaños: ' + sizes.join(', '));
  assert.match(css, /\.arm-btn:focus-visible,\.arm-tab:focus-visible,\.arm-search:focus-visible\{outline:2px solid var\(--acc-1\)/);
  assert.match(css, /@media \(max-width:900px\)\{[^\n]*\.arm-tab,\.arm-btn,\.arm-search\{min-height:44px\}/);
});

test('BL-053: con Key el resumen global usa getOwnershipCounts (X de Y + barra con width); sin Key solo el total del catálogo', () => {
  // Con Key: el tracker dice 50 tengo / 156 faltan (total 206), distinto de los owned pasados (1).
  // La cabecera debe mostrar los números del tracker, no los del resumen local, con barra de progreso.
  const x = cargar({ owned: { 30684: 1 }, own: { tengo: 50, faltan: 156 } });
  const html = x.r.filterBar({}, x.items);
  assert.match(html, /Desbloqueadas<\/small><b>50 <span>de 206<\/span><\/b><div class="arm-bar" aria-hidden="true"><i style="width:24\.3%"><\/i>/);
  // Sin Key: solo el total del catálogo, sin «0 de Y» ni barra engañosa.
  const y = cargar({ token: null });
  const html2 = y.r.filterBar({}, y.items);
  assert.match(html2, /<small>Catálogo<\/small><b>206<\/b>/);
  assert.doesNotMatch(html2, /0 de 206/);
  assert.doesNotMatch(html2, /arm-bar/);
});

test('BL-054: switch «Solo sin tener» presente en la barra y oculta las que ya tenés', () => {
  const owned = { 30684: 1, 30698: 1, 81908: 1 };
  const x = cargar({ owned: owned });
  const html = x.r.filterBar({}, x.items);
  assert.match(html, /data-arm-sw="onlyUnowned"/, 'switch presente');
  assert.match(html, /Solo sin tener/, 'etiqueta del switch');
  // Sin el switch: las 206.
  assert.equal(cards(x.r.catalogGrid(x.items, owned)), 206, 'sin switch, todas');
  // Con el switch activo: se ocultan las 3 tenidas.
  x.A.state.onlyUnowned = true;
  assert.equal(cards(x.r.catalogGrid(x.items, owned)), 203, 'con switch, solo las que faltan');
  // El switch refleja el estado en el HTML.
  assert.match(x.r.filterBar({}, x.items), /data-arm-sw="onlyUnowned"[^>]*aria-checked="false"|aria-checked="true"/);
});

test('BL-054: onlyUnowned se resetea al buscar y al cambiar de pestaña', () => {
  const x = cargar();
  x.A.state.onlyUnowned = true;
  x.A.state.mode = 'catalog';
  // cambiar de pestaña (progress) resetea
  x.win.LegendaryTracker.getState = () => ({ mode: 'progress', token: 'KEY', loading: false, error: null, owned: {} });
  x.r.filterBar({}, x.items);
  assert.equal(x.A.state.onlyUnowned, false, 'reset al cambiar de pestaña');
  // buscar resetea
  x.win.LegendaryTracker.getState = () => ({ mode: 'catalog', token: 'KEY', loading: false, error: null, owned: {} });
  x.A.state.onlyUnowned = true;
  x.A.search('zzz');
  assert.equal(x.A.state.onlyUnowned, false, 'reset al buscar');
});
