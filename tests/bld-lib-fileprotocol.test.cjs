// BL-027 paso 2 — Mensaje claro cuando la Biblioteca de Builds no carga por abrir el archivo local (file://).
// Verifica (estático sobre SRC) la detección de file:// y el mensaje claro, manteniendo el genérico para otros fallos.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SRC = fs.readFileSync(path.join(ROOT, 'js', 'bld-lib.js'), 'utf8');

test('BL-027: load detecta protocolo file://', () => {
  assert.match(SRC, /location\.protocol\s*===\s*['"]file:['"]/);
});

test('BL-027: mensaje claro para file:// menciona file://, sitio implícito y servidor local (http://)', () => {
  assert.match(SRC, /file:\/\//);
  assert.match(SRC, /servidor local/i);
  assert.match(SRC, /http:\/\//);
  assert.match(SRC, /Builds no carga abriendo el archivo directo/);
});

test('BL-027: se mantiene el mensaje genérico para otros fallos', () => {
  assert.match(SRC, /No pude cargar la biblioteca/);
});

test('BL-027: st.error y paint se invocan con el mensaje resuelto', () => {
  assert.match(SRC, /st\.error\s*=\s*msg/);
  assert.match(SRC, /paint\(ctx\)/);
});
