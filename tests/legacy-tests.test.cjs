// BL-002 paso 4/5: guardia del workflow legacy-tests.
// Revisa que el workflow corra solo en mi repo, use el bot shiruna (no el de mi madre),
// con Node 22 sobre ubuntu-latest, permisos de escritura y el censo del legado.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WORKFLOW = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'legacy-tests.yml'), 'utf8');

test('legacy-tests se llama legacy-tests y corre el censo del legado', () => {
  assert.match(WORKFLOW, /^name: legacy-tests$/m);
  assert.match(WORKFLOW, /node tools\/legacy\/census\.cjs/);
});

test('legacy-tests corre solo en mi repo (gate github.repository)', () => {
  assert.match(WORKFLOW, /if: github\.repository == 'shiruna-gato-negro\/gw2-factory-dev'/);
});

test('legacy-tests usa Node 22 sobre ubuntu-latest con permisos de escritura', () => {
  assert.match(WORKFLOW, /node-version: 22/);
  assert.match(WORKFLOW, /runs-on: ubuntu-latest/);
  assert.match(WORKFLOW, /permissions:\n  contents: write/);
});

test('legacy-tests usa el bot shiruna, no el de mi madre', () => {
  assert.match(WORKFLOW, /shiruna/);
  assert.doesNotMatch(WORKFLOW, /shiruvana-factory/);
});

test('legacy-tests declara concurrencia en serie', () => {
  assert.match(WORKFLOW, /concurrency:\n  group: legacy-tests/);
});