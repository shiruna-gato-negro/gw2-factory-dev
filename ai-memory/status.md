# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: — (BL-013 cerrada)
Motivo: BL-013 paso 2/3 y guardia (paso 3/3) cerrados en este ciclo: claves stat.bld.* en gn-kit.js, kitIcon + BLD_STAT en bld-view.js, ícono en cada .bld-st; guardia en gn-kit-icons.test.cjs; suite 1193/1199 (6 skipped). Review BAJO.
Etapa actual: Documentation
Inicio: 2026-11-24 00:38Z
Última actualización: 2026-11-24 01:33Z
Próxima acción: BL-014 paso 1/3 — plan (vistas previas Chak y Dragon's End en Metas).

Archivos:
- ai-memory/status.md
- ai-memory/backlog.md
- ai-memory/roadmap.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- BL-013 cerrada: íconos en cabecera y pestañas de Builds (UNI-4b/UNI-7b); claves stat.bld.* + tab.bld.*; guardia en gn-kit-icons; suite 1193/1199 (6 skipped). BL-014 en READY (vistas previas Chak/Dragon's End).
- BL-002 cerrada: app-checks (4/4), builds-watch (4/4), legacy-tests (5/5) adaptados; guardias en verde; review BAJO; suite 1253/1261 (8 skipped). RSK-002 MITIGADO.
- BL-010 cerrada: size-budget y universo des-cuarentenados; index.html 49141 B (advertencia), meta.js 63426 B (≤63600), sidebar-nav.js 40.2 KB (advertencia, nota BL-007); suite 1255/1261 (6 skipped). Review BAJO; deuda MEDIO (6 cuarentenas → BL-011, BL-012).
- BL-008 cerrada: review riesgo BAJO; suites gn-topbar + gn-kit-icons + ai-memory 37/37.
- Orden v4 cerrada: reglas 1-6 en AGENTS.md.
- Orden v5 cerrada: lock protocol v5 en AGENTS.md y job 8f75ac22.
- Orden v6 cerrada: BL-011 y BL-012 canceladas; ga-loader marcado «no aplica en este repo»; meta.js restaurado (64051 B, techo actualizado); F2b en roadmap; reglas de tareas visibles para el jugador. Suite en verde (0 fail).

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

Historial de S-1..S-5: S-1..S-3 preparados por Shiruvana y ejecutados por Pablo desde C:\shiruna\gw2-factory-dev; S-4 ejecutado por mi madre con el Centro de mando 3.1.0; S-5 con QwenPaw 2.3.0.post1 y Reflection Beam 1.0 vía Kilo (con cuenta), pruebas 1–3 superadas, F1 cerrada.
