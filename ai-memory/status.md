# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: (ninguna en curso — BL-048 cerrada)
Motivo: BL-048 paso 2/3 (implementación) cerrada: onlyNotes en bld-lib.js (VERSION 1.14.0), notes.json en preload, switch en chiprow, clearFilters; test de regresión BL-048 en tests/bld-lib.test.cjs. Review riesgo BAJO: aditivo, sigue el patrón de onlyBench/onlyVigentes, sin regresión. Suite 1226/1232 (6 skipped).
Etapa actual: Documentation (cierre)
Inicio: 2026-11-25
Última actualización: 2026-11-25 10:55Z
Próxima acción: tomar BL-049 (Builds: unificar texto de falta de benchmark en las filas) — Paso 1 plan.

Archivos:
- js/bld-lib.js
- tests/bld-lib.test.cjs
- ai-memory/status.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (ninguno). READY: BL-049, BL-050. BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1232 total, 1226 pass, 0 fail, 6 skipped (.test.cjs); smoke notes-refs ×3 preexistentes.
- Orden v7 procesos (Shiruvana): reglas agregadas a AGENTS.md sección «Procesos» (no cortar procesos por nombre; servidores de prueba con PID guardado; no tocar puertos 8088/8099; si caído, mirar puerto, levantar en puerto nuevo).

## Resumen de la sesión

- orden v7 procesos: reglas de procesos en AGENTS.md (sección «Procesos») y status.md. Commit `orden: v7 procesos — tests 1225/1231`.
- Exploración La Bóveda (Builds, Metas): 3 tareas nuevas en READY (BL-048, BL-049, BL-050).
- BL-048 paso 1/3 (plan): pasos escritos en backlog.md. Commit `BL-048 paso 1/3 — plan — tests 1225/1231`.
- BL-048 paso 2/3 (implementación): onlyNotes en bld-lib.js (VERSION 1.14.0), notes.json en preload, switch en chiprow, clearFilters; tests bld-lib adaptados. Review riesgo BAJO. Suite 1226/1232 (6 skipped). Commit `BL-048 paso 2/3 — implementación — tests 1226/1232`.