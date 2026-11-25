# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: (ninguna en curso)
Motivo: BL-044 paso 1/1 cerrada — 5º indicador «Fractales recomendados hoy» en Actividades. Suite 1222/1228 (6 skipped).
Etapa actual: Documentation (cierre)
Inicio: 2026-11-24
Última actualización: 2026-11-25 06:04Z
Próxima acción: READY vacía → explorar La Bóveda como jugadora y anotar 1 a 3 tareas nuevas (máximo 10 en READY).

Archivos:
- ai-memory/backlog.md
- ai-memory/status.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (ninguno). READY: (vacío). BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1228 total, 1222 pass, 0 fail, 6 skipped (.test.cjs); smoke notes-refs ×3 preexistentes.

## Resumen de la sesión

- BL-044 paso 1/1 (implementación): statsHTML de act-view.js ahora incluye un 5º indicador «Recomendados» con «X fractales recomendados hoy» (m.fr.recommended.length), «—»/«sin datos» sin datos; grid de .av-stats pasado a 5 columnas. Test de regresión BL-044 en tests/act-view.test.cjs. Review riesgo BAJO: aditivo, sin regresión. Suite 1222/1228 (6 skipped).
- BL-043 paso 1/1 (implementación): statsHTML de inv-view.js ahora incluye un 5º indicador «Objetos distintos» con «X tipos distintos en el banco» (ids únicos en bankSlots); grid de .iv-stats pasado a 5 columnas. Test de regresión BL-043 en tests/inv-view.test.cjs. Review riesgo BAJO: aditivo, sin regresión. Suite 1221/1227 (6 skipped).
- BL-042 paso 1/1 (implementación): statsHTML de home-view.js ahora incluye un 5º indicador «Nodos que te faltan» con «X de Y nodos de la API sin desbloquear» (apiTotal - api); grid de .hs-stats pasado a 5 columnas. Test de regresión BL-042 en tests/home-view.test.cjs. Review riesgo BAJO: aditivo, sin regresión. Suite 1220/1226 (6 skipped).
- S-8: exploración La Bóveda — 3 tareas nuevas en READY (BL-042 Heredad nodos que te faltan, BL-043 Inventario objetos distintos en el banco, BL-044 Actividades fractales recomendados hoy). Sin cambios de código. Suite 1219/1225 (6 skipped).
- BL-041 paso 1/1 (implementación): statsHTML de raids-view.js ahora incluye un 5º indicador «Modo desafío» con «X de Y hechos» (encuentros con cm === true completados, sobre el catálogo); buildModel suma cmDone/cmTotal (y aliases) en stats; grid de .rv-stats pasado a 5 columnas. Test de regresión BL-041 en tests/raids-view.test.cjs. Review riesgo BAJO: aditivo, sin regresión. Suite 1219/1225 (6 skipped).
- BL-040 paso 1/1 (implementación): headHTML de wv-view.js ahora incluye un 5º indicador «Especiales» con «X de Y» (sobre counts.special, igual que Hoy y Esta semana), «—»/«sin datos todavía» sin datos; buildModel agrega special. Grid de .wvx-stats pasado a 5 columnas. Test de regresión BL-040 en tests/wv-view.test.cjs. Review riesgo BAJO: aditivo, sin regresión. Suite 1218/1224 (6 skipped).
- BL-039 paso 1/1 (implementación): statsHTML de acc-view.js ahora incluye un 5º indicador «Comandante» con «X de Y cuentas son comandante» (sobre las cuentas cargadas, commander === true), «Sin datos» sin token o sin cargar; summary de acc-model.js agrega commanders/commanderFrom. Grid de .cv-stats pasado a 5 columnas. Review riesgo BAJO: aditivo, sin regresión. Suite 1217/1223 (6 skipped).
- S-7: exploración La Bóveda — 3 tareas nuevas en READY (BL-039..BL-041). Suite 1217/1223 (6 skipped). Sin cambios de código.
- BL-038 paso 1/1 (implementación): statsHTML de ach-view.js ahora incluye un 5º indicador «Logros completos» con «X de Y logros completos» (sobre los logros cargados de la cuenta, completos = pct ≥ 1); sin datos muestra «Sin datos». buildModel calcula completed/total a partir de snap.acc y snap.metaById. Grid de .achx-stats pasado a 5 columnas. Review riesgo BAJO: aditivo, sin regresión. Suite 1217/1223 (6 skipped).