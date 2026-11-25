# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: (ninguna en curso — orden v7 procesos cerrada)
Motivo: orden de Shiruvana (vía Pablo, 2026-11-25): reglas de procesos en AGENTS.md (sección «Procesos») y status.md.
Etapa actual: Documentation (cierre)
Inicio: 2026-11-24
Última actualización: 2026-11-25 10:32Z
Próxima acción: explorar La Bóveda como jugadora y proponer 1 a 3 tareas nuevas en READY (READY vacía).

Archivos:
- ai-memory/status.md
- AGENTS.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (ninguno). READY: (vacío). BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1231 total, 1225 pass, 0 fail, 6 skipped (.test.cjs); smoke notes-refs ×3 preexistentes.
- Orden v7 procesos (Shiruvana): reglas agregadas a AGENTS.md sección «Procesos» (no cortar procesos por nombre; servidores de prueba con PID guardado; no tocar puertos 8088/8099; si caído, mirar puerto, levantar en puerto nuevo).

## Resumen de la sesión

- orden v7 procesos: reglas de procesos en AGENTS.md (sección «Procesos») y status.md. Commit `orden: v7 procesos — tests N/N`.
- BL-047 paso 1/1 (implementación): statsHTML de wv-purchases-view.js suma un 5º indicador «AA total» con «X AA en todas las cuentas» (avail + marked), «—»/«sin datos» sin datos. Grid de .wvp-stats pasado a 5 columnas. Test de regresión BL-047 en tests/wv-purchases-view.test.cjs. Review riesgo BAJO. Suite 1225/1231 (6 skipped).