// BL-002 paso 3/5: guardia del workflow builds-watch y de la vigía/curación.
// Revisa que el workflow corra los tests de la vigía y la curación con Node 22, y que ni el
// workflow ni los scripts de la vigía/curación referencien al origen de mi madre (PabloSnchz).
// El User-Agent de la vigía y la curación apunta a mi repo (shiruna-gato-negro).
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WORKFLOW = fs.readFileSync(path.join(ROOT, '.github', 'workflows', 'builds-watch.yml'), 'utf8');
const WATCH = fs.readFileSync(path.join(ROOT, '.github', 'scripts', 'bld-watch.cjs'), 'utf8');
const CURATE = fs.readFileSync(path.join(ROOT, '.github', 'scripts', 'bld-curate.cjs'), 'utf8');
const LIB = fs.readFileSync(path.join(ROOT, 'tests', 'bld-curate-lib.cjs'), 'utf8');
const SMOKE = fs.readFileSync(path.join(ROOT, 'tests', 'bld-curate.smoke.cjs'), 'utf8');
const SMOKE2 = fs.readFileSync(path.join(ROOT, 'tests', 'bld-curate2.smoke.cjs'), 'utf8');

test('builds-watch se llama builds-watch y corre los tests de la vigía y la curación', () => {
  assert.match(WORKFLOW, /^name: builds-watch$/m);
  assert.match(WORKFLOW, /node --test \.github\/scripts\/bld-watch\.test\.cjs \.github\/scripts\/bld-curate\.test\.cjs \.github\/scripts\/bld-gear-scrape\.test\.cjs/);
});

test('builds-watch usa Node 22 sobre ubuntu-latest', () => {
  assert.match(WORKFLOW, /node-version: 22/);
  assert.match(WORKFLOW, /runs-on: ubuntu-latest/);
});

test('builds-watch no referencia al origen de mi madre (repo/org)', () => {
  [WORKFLOW, WATCH, CURATE, LIB, SMOKE, SMOKE2].forEach((src) => {
    assert.doesNotMatch(src, /PabloSnchz|shiruvana-factory|gw2-wallet-agents/);
  });
});

test('User-Agent de la vigía y la curación apunta a mi repo', () => {
  assert.match(WATCH, /shiruna-gato-negro\/gw2-factory-dev/);
  assert.match(CURATE, /shiruna-gato-negro\/gw2-factory-dev/);
  assert.match(LIB, /shiruna-gato-negro\/gw2-factory-dev/);
  assert.match(SMOKE, /shiruna-gato-negro\/gw2-factory-dev/);
  assert.match(SMOKE2, /shiruna-gato-negro\/gw2-factory-dev/);
});
