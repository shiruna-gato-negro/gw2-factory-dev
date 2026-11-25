# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: (ninguna — BL-053 cerrada)
Motivo: BL-053 cerrada — headerHTML usa getOwnershipCounts() del tracker (tengo/total) con barra; sin Key solo total. Test de regresión BL-053 en armeria-shell (50 de 206 + barra 24.3%; sin Key Catálogo 206). Suite 1234/1240 (6 skipped). Review BAJO.
Etapa actual: (cerrada)
Inicio: 2026-11-25
Última actualización: 2026-11-25 16:05Z
Próxima acción: (ninguna — READY vacío; próximo ciclo explora La Bóveda como jugadora y propone tareas nuevas).

Archivos:
- ai-memory/backlog.md
- ai-memory/status.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (vacío). READY: (vacío). BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1240 total, 1234 pass, 0 fail, 6 skipped (.test.cjs); smoke notes-refs ×3 preexistentes.

## Resumen de la sesión

- orden v7 procesos: reglas de procesos en AGENTS.md (sección «Procesos») y status.md. Commit `orden: v7 procesos — tests 1225/1231`.
- Exploración La Bóveda (Builds, Metas): 3 tareas nuevas en READY (BL-048, BL-049, BL-050).
- BL-048 cerrada: filtro «Solo con notas en castellano» en la Biblioteca. Suite 1226/1232 (6 skipped).
- MAP-3 cerrada: mi parte del mapa (ai-memory/mapa.json) corregida y versionada (1.0.1). Suite 1228/1234 (6 skipped).
- v8 cerrada (orden): reglas en AGENTS.md (no abrir navegador de Pablo; servidores puerto 8123 sin ventana; cortar PID al cerrar). Commit `orden: v8 explorar sin ventanas — tests 1228/1234`.
- BL-049 cerrada: bld-rows.js dpsHTML unifica texto a «Sin bench publicado». Suite 1228/1234 (6 skipped).
- BL-050 cerrada: Welcome tarjeta de Builds muestra «X de Y con notas en castellano» (countNotes + fetch notes.json). Suite 1229/1235 (6 skipped).
- BL-051 cerrada: test de regresión del filtro «Solo con infusión o drop» en Metas (matches hasDrop + switch en UI). Suite 1231/1237 (6 skipped).
- BL-052 cerrada: switch «Solo con stock» en Inventario → Materiales (onlyStock + reset + test). Suite 1233/1239 (6 skipped).
- Exploración La Bóveda (Metas, Inventario, Armería Legendaria): 3 tareas nuevas en READY (BL-051 cerrada, BL-052 switch «Solo con stock» en Materiales, BL-053 resumen global de legendarias). Todas con «Qué ve el jugador».
- BL-053 cerrada: resumen global en headerHTML usa getOwnershipCounts() del tracker (tengo/total) con barra; sin Key solo total. Test de regresión BL-053 (50 de 206 + barra 24.3%; sin Key Catálogo 206). Suite 1234/1240 (6 skipped). Review BAJO.