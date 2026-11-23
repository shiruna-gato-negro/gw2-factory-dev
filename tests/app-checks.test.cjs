// BL-002 paso 2/5: guardia del workflow app-checks.
// Revisa que el workflow siga corriendo la suite de la app en push/PR, en modo
// solo lectura, con Node 22, y sin referencias al origen de mi madre.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WORKFLOW = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'app-checks.yml'), 'utf8');

test('app-checks se dispara en push a main y en pull_request', () => {
  assert.match(WORKFLOW, /^name: app-checks$/m);
  assert.match(WORKFLOW, /\non:\n  push:\n    branches: \[main\]\n  pull_request:\n/);
});

test('app-checks es de solo lectura: contents: read, sin escritura ni bot', () => {
  assert.match(WORKFLOW, /permissions:\n  contents: read/);
  assert.doesNotMatch(WORKFLOW, /contents: write/);
  assert.doesNotMatch(WORKFLOW, /shiruvana-factory|github-actions\[bot\]/);
});

test('app-checks usa Node 22 y corre la suite de tests de la app', () => {
  assert.match(WORKFLOW, /node-version: 22/);
  assert.match(WORKFLOW, /node --test tests\/\*\.test\.cjs tests\/\*\.test\.js tests\/\*\.smoke\.js/);
  assert.match(WORKFLOW, /runs-on: ubuntu-latest/);
});

test('app-checks no referencia al origen de mi madre (repo/org)', () => {
  assert.doesNotMatch(WORKFLOW, /PabloSnchz|shiruvana-factory|gw2-wallet-agents/);
});
