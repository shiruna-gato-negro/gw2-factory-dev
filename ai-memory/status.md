# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: (ninguna) — BL-031 cerrada (paso 1/1).
Motivo: BL-031 completada: onlyVigentes en filters/matches (stateOf === 'vigente') + switch sw('onlyVigentes', 'Solo vigentes') en el chiprow de la Biblioteca; clearFilters y estado por defecto incluyen onlyVigentes; test de regresión (filter solo vigentes + switch en UI). Versión bld-lib 1.9.0 → 1.10.0. Review riesgo BAJO: aditivo, sigue el patrón de onlyBench/onlyPreview, sin regresión. Suite 1213/1219 (6 skipped). Exploración: READY tenía 0 tareas; se propusieron BL-032 y BL-033.
Etapa actual: Documentation (cierre)
Inicio: —
Última actualización: 2026-11-24 19:20Z
Próxima acción: tomar BL-032 (paso 1 plan) en el próximo ciclo.

Archivos:
- ai-memory/backlog.md
- ai-memory/status.md
- js/bld-lib.js

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (vacío). READY: BL-032, BL-033. BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync.
- Suite actual: 1219 total, 1213 pass, 0 fail, 6 skipped.

## Resumen de la sesión

- BL-031 paso 1/1 cerrado: switch «Solo vigentes» en la Biblioteca de Builds (onlyVigentes en filter + sw en UI + clearFilters/estado por defecto + test de regresión). Versión bld-lib 1.9.0 → 1.10.0. Suite 1213/1219 (6 skipped). READY con BL-032 y BL-033 (propuesta de exploración).