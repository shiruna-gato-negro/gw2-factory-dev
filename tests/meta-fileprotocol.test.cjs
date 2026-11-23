// BL-006 paso 3 — Mensaje claro cuando Metas no carga por abrir el archivo local (file://).
// Verifica (estático sobre SRC) la detección de file:// y el mensaje claro, manteniendo el genérico para otros fallos.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SRC = fs.readFileSync(path.join(ROOT, 'js', 'meta.js'), 'utf8');

test('BL-006: initOnce detecta protocolo file://', () => {
  assert.match(SRC, /location\.protocol\s*===\s*['"]file:['"]/);
});

test('BL-006: mensaje claro para file:// menciona file://, sitio y servidor local (http://)', () => {
  assert.match(SRC, /file:\/\//);
  assert.match(SRC, /servidor local/i);
  assert.match(SRC, /http:\/\//);
});

test('BL-006: se mantiene el mensaje genérico para otros fallos', () => {
  assert.match(SRC, /No se pudo cargar Metas y Eventos\./);
});

test('BL-006: setStatus y notify se invocan con el mensaje resuelto', () => {
  assert.match(SRC, /setStatus\(msg,\s*['"]error['"]\)/);
  assert.match(SRC, /notify\(['"]error['"],\s*msg/);
});
