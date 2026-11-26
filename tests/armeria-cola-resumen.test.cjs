// Armería (BL-064): resumen en «Mi cola» con unidades que faltan y costo en el TP.
// Corre con: node --test tests/*.test.cjs
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const JS = path.join(__dirname, '..', 'js');
const AVATAR = 'data:image/webp;base64,UklGRgAAAA';

function el(id) {
  const n = { id, _h: '', listeners: {}, textContent: '', attrs: {}, focused: false };
  Object.defineProperty(n, 'innerHTML', { get: () => n._h, set: (v) => { n._h = String(v); } });
  n.addEventListener = (t, f, cap) => { (n.listeners[t] = n.listeners[t] || []).push({ f, cap: !!cap }); };
  n.setAttribute = (k, v) => { n.attrs[k] = String(v); };
  n.focus = () => { n.focused = true; };
  return n;
}

function cargar(opts = {}) {
  const registro = {};
  const calls = [];
  const nodes = {};
  const body = { children: [], appendChild(c) { this.children.push(c); nodes[c.id] = c; } };
  const state = { queue: (opts.queue || []).slice() };
  const missMap = opts.missing || {};
  const win = {
    console: { info() {}, log() {}, warn() {} },
    LegendaryTracker: {
      QUEUE_MAX: 5,
      registerRender(map) { registro.r = map; return true; },
      registerItemModal() { return true; },
      getOwnershipCounts() { return { tengo: 0, faltan: 206 }; },
      getQueue() { return state.queue.slice(); },
      getState() {
        return { mode: opts.mode || 'progress', token: opts.token === undefined ? 'KEY' : opts.token,
          loading: !!opts.loading, error: opts.error || null, owned: opts.owned || {} };
      },
      openItemModal(id) { calls.push(['open', String(id)]); },
      toggleQueue(id) {
        calls.push(['toggle', String(id)]);
        const i = state.queue.indexOf(Number(id));
        if (i === -1) return { ok: false };
        state.queue.splice(i, 1);
        return { ok: true, added: false };
      },
      setMode(m) { calls.push(['setMode', m]); },
      computeMaterials(id) {
        const m = (missMap[id] !== undefined) ? missMap[id] : 0;
        return { status: 'recipe', totals: { need: 10, have: 10 - m, missing: m } };
      }
    }
  };
  if (opts.avatar !== undefined) win.Shiruvana = { AVATAR: opts.avatar };
  win.window = win;
  win.document = { getElementById: (id) => nodes[id] || null, createElement: () => el(''), head: { appendChild() {} }, body };
  win.setTimeout = setTimeout;
  const ctx = vm.createContext(win);
  vm.runInContext(fs.readFileSync(path.join(JS, 'legendary-data.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(JS, 'render-catologo.js'), 'utf8'), ctx);
  nodes.legendaryModeContent = el('legendaryModeContent');
  return { r: registro.r, items: win.LegendaryCatalog.items, calls, nodes, state, A: win.LegendaryCatalogUI._arm };
}

test('BL-064: el resumen muestra unidades que faltan y costo en el TP', () => {
  const q = [30703, 30684];
  const x = cargar({ queue: q, missing: { 30703: 5, 30684: 3 } });
  const h = x.r.filterBar({}, x.items);
  assert.match(h, /<p class="arm-qsummary">Unidades que faltan: 8\. Costo en el TP: /);
});

test('BL-064: sin unidades que faltan ni precios, no hay resumen', () => {
  const q = [30684];
  const x = cargar({ queue: q, missing: { 30684: 0 }, owned: { 30684: 1 } });
  const h = x.r.filterBar({}, x.items);
  assert.doesNotMatch(h, /arm-qsummary/);
});
