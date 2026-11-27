// BL-072 — Metas: marcar manualmente como «Hecho» (gn:meta:done:<id>, por día UTC).
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const SRC = fs.readFileSync(path.join(ROOT, 'js', 'meta.js'), 'utf8');

function utcDay(d) {
  return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0');
}

function load(Storage) {
  const noop = () => {};
  const document = { querySelector: () => null, querySelectorAll: () => [], addEventListener: noop, createElement: () => ({ style: {} }), body: {} };
  const window = { addEventListener: noop };
  vm.runInNewContext(SRC, { window, document, Storage, console, setTimeout, clearTimeout, setInterval, clearInterval });
  return window.Meta;
}

test('BL-072: la persistencia y el toggle están en el código', () => {
  assert.match(SRC, /gn:meta:done:/);
  assert.match(SRC, /data-mt-act="done"/);
  assert.match(SRC, /function readManualDone/);
  assert.match(SRC, /function toggleManualDone/);
  assert.match(SRC, /utcDayKey/);
});

test('BL-072: readManualDone lee el día UTC guardado', () => {
  const today = utcDay(new Date());
  const Storage = {
    STORAGE_KEYS: {},
    get(k) { return k === 'gn:meta:done:x' ? today : null; },
    set() {}, remove() {},
  };
  const Meta = load(Storage);
  const P = Meta._pure;
  assert.equal(P.manualDoneOf('x', new Date()), true);
  assert.equal(P.manualDoneOf('y', new Date()), false);
  assert.equal(P.manualDoneKey('abc'), 'gn:meta:done:abc');
});

test('BL-072: hideDone oculta las marcadas a mano', () => {
  const now = new Date();
  const inst = { state: 'none' };
  const rows = [
    { meta: { name: 'A' }, inst, done: null, manualDone: true },
    { meta: { name: 'B' }, inst, done: null, manualDone: false },
  ];
  const Meta = load({ STORAGE_KEYS: {}, get: () => null, set() {}, remove() {} });
  const P = Meta._pure;
  const base = { q: '', type: '', exp: '', when: 'all', hideDone: true, onlyDrop: false, onlyPreview: false, onlyPinned: false };
  assert.equal(rows.filter((r) => P.matches(r, base)).length, 1);
});