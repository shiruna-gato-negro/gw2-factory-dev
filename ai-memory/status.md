# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: (ninguna — BL-023 cerrada)
Motivo: BL-023 paso 1/1 cerrado: «Curadas el DD/MM» en el contador de la Biblioteca (bld-lib.js viewHTML) y en la cabecera de Builds (bld-view.js statsHTML), tomando catalog.curated, sin romper si falta. Suite completa en verde (0 fail, 6 skipped).
Etapa actual: Review + Documentation (cierre)
Inicio: 2026-11-24 12:00Z
Última actualización: 2026-11-24 12:04Z
Próxima acción: READY vacía → explorar La Bóveda como jugadora y proponer 1 a 3 tareas nuevas (máximo 10 en READY).

Archivos:
- ai-memory/backlog.md
- ai-memory/status.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (ninguna). READY: (vacía). DONE reciente: BL-023.
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync.
- Suite actual: 1269 total, 1263 pass, 0 fail, 6 skipped.

## Resumen de la sesión

- Orden de Pablo (ciclo chico): favicon propio de Shiruna — creado assets/brand/shiruna.svg, index.html apunta al nuevo favicon (logo de cabecera sigue siendo gato-negro.svg); test index-identity adaptado (no borrado). Commit `orden: favicon propio de Shiruna — tests 24/24`.
- BL-008 paso 5/5 cerrado: review riesgo BAJO + docs/cierre. Suites gn-topbar + gn-kit-icons + ai-memory 37/37 en verde.
- Orden v4 (nunca esperar): cerrada. Commit `orden: ciclo continuo v4 — nunca esperar — tests 1205/1248 (42 viejas → BL-009)`.
- Orden v5 (candado sin rm): cerrada. AGENTS.md + job 8f75ac22 actualizados; BL-009 aclarado.
- BL-009 paso 3/5 y 4/5 cerrados: python3→python en 4 tests legendary; 2 regex mojibake en legendary-build-recipes; fecha latest bld-view 2026-11-10. Cuarentenados 7 tests (size-budget, universo, ga-loader, bld-lib ×3, bld-rows) con skip + BL propia (BL-010, BL-011, BL-012). Suite 1240/1248 (0 fail, 8 skip). BL-009 cerrada. Review: BAJO.

- BL-002 paso 5/5 cerrado: review riesgo BAJO + docs/cierre. Workflows adaptados (app-checks, builds-watch, legacy-tests) con guardias 4/4, 4/4, 5/5 en verde; suite 1253/1261 (8 skipped). RSK-002 MITIGADO.

- BL-010 paso 3/5 cerrado: meta.js achicado 625 B (64051 → 63426, ≤63600) acortando header y simplificando detección file:// (BL-006); size-budget sin error para meta.js; suite 1253/1261 (8 skipped).

- BL-010 paso 5/5 cerrado: quité .skip en size-budget y universo; suite completa 1255/1261 (0 fail, 6 skipped). Review riesgo BAJO; BL-010 movida a DONE. Commit `BL-010 paso 5/5 — des-cuarentenar size-budget y universo + review/docs/cierre — tests 1255/1261 (6 skipped)`.
- BL-011 paso 3/5 cerrado: .skip quitado de ga-loader; 5/5 pass; suite completa 1255/1260 (5 skipped, 0 fail). Review BAJO (solo test des-cuarentenado, sin código de producción). Próximo paso 4/5.
- Orden v6 cerrada: canceladas BL-011 y BL-012; ga-loader marcado «no aplica en este repo» (skip + comentario); meta.js restaurado con cabecera + mensaje claro BL-006 (64051 B, techo actualizado en size-budget.json); backlog/roadmap/AGENTS actualizados (F2b, reglas visibles, pasos por tamaño, infra solo si bloquea); suite en verde (0 fail). Commit de trabajo.

- BL-014 paso 1/3 cerrado: plan escrito en backlog.md (3 pasos). Suite 1193/1199 (6 skipped). Commit `BL-014 paso 1/3 — plan — tests 1193/1199 (6 skipped)`.

- BL-014 paso 3/3 cerrado: review riesgo BAJO + docs/cierre. Vistas previas Chak y Dragon's End conectadas; meta-view 10/0; suite 1256/1262 (6 skipped); BL-014 movida a DONE. READY vacía → próxima acción: explorar La Bóveda.

- BL-015 paso 1/3 cerrado: exploración + propuesta de 3 tareas (BL-015/016/017) y plan de BL-015 (Builds en Bienvenida). Suite 1255/1261 (6 skipped). Commit `BL-015 paso 1/3 — plan — tests 1255/1261 (6 skipped)`.

- BL-015 paso 3/3 cerrado: test de regresión (EXTRA undefined, builds en MODULES_FALLBACK), review riesgo BAJO, docs/cierre. Suite 1256/1262 (6 skipped). BL-015 movida a DONE. READY: BL-016, BL-017.

- BL-016 paso 1/1 cerrado: 2 entradas nuevas en welcome-news.json (builds íconos cabecera/pestañas, meta vistas previas Chak y Dragon's End), test pickNews adaptado (3 más nuevas, NUEVO en las 2 del 24/11); review BAJO; suite 1257/1263 (6 skipped). BL-016 movida a DONE. READY: BL-017.

- BL-017 paso 2/3 cerrado: miniatura `<img class="mt-dthumb">` en dropHTML cuando previewOf === 'ok' + CSS .mt-dthumb (48px, cover) + size-budget meta.js 64276 B con motivo; test meta-view adaptado (aserción img en ok, ausencia en miss/none). Suite 1256/1262 (6 skipped). IN_PROGRESS → paso 3/3 pendiente.

- BL-018 paso 2/3 cerrado: onlyPreview en matches()/filters + switch «Solo con vista previa» en la UI; hasPreview exportado; techo size-budget 64719 B con motivo. Suite 1256/1262 (6 skipped). IN_PROGRESS → paso 3/3 pendiente.
- BL-019 paso 1/1 cerrado: desglose «X vigentes · Y para revisar» en el contador de la Biblioteca (bld-lib.js viewHTML) + test de regresión bld-lib + review BAJO + docs/cierre. Suite 1261/1267 (6 skipped). BL-019 movida a DONE. READY vacía.

- BL-023 paso 1/1 cerrado: «Curadas el DD/MM» en contador de la Biblioteca (bld-lib.js) y cabecera de Builds (bld-view.js), catalog.curated, sin romper si falta; test bld-lib adaptado; suite 1263/1269 (6 skipped). BL-023 movida a DONE. READY vacía.

Historial de S-1..S-5: S-1..S-3 preparados por Shiruvana y ejecutados por Pablo desde C:\shiruna\gw2-factory-dev; S-4 ejecutado por mi madre con el Centro de mando 3.1.0; S-5 con QwenPaw 2.3.0.post1 y Reflection Beam 1.0 vía Kilo (con cuenta), pruebas 1–3 superadas, F1 cerrada.