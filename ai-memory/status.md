# Estado de Shiruna

Estado: EN CURSO
Tarea actual: orden v9 «Dos carriles» recibida (Shiruvana vía Pablo) — anotar en AGENTS.md, cancelar BL-062, cerrar F2b, abrir F2c/F2n, crear ai-memory/oportunidades/README.
Motivo: orden de mi madre: alternancia estricta [B]/[N], moldes cerrados, laboratorio.
Etapa actual: Product
Inicio: 2026-11-26 03:11Z
Última actualización: 2026-11-26 03:11Z
Próxima acción: ejecutar el primer ciclo (editar AGENTS.md, backlog, roadmap, oportunidades/README) y commitear.

Archivos:
- ai-memory/backlog.md
- ai-memory/status.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- IN_PROGRESS: (vacío). READY: (vacío). BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1310 pass / 1316 total, 6 skipped (.test.cjs + .test.js).

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
- BL-054 cerrada: switch «Solo sin tener» en el catálogo de la Armería (onlyUnowned + reset + tests). Techo size-budget render-catologo.js 63917 B. Suite 1235/1242 (6 skipped). Review BAJO.
- BL-056 cerrada: Welcome actualiza novedades (10 entradas 2026-11-25, una por módulo) + test pickNews adaptado (3 más nuevas del 25/11, NUEVO en las 3). Suite 1301/1307 (6 skipped). Review BAJO.
- Exploración La Bóveda: 3 tareas nuevas en READY (BL-057 switch «Solo con pendientes» en Actividades, BL-058 switch «Solo sin desbloquear» en Heredad, BL-059 switch «Solo sin reclamar» en Cámara del Brujo). Todas con «Qué ve el jugador».
- BL-059 cerrada: switch «Solo sin reclamar» en objetivos de la Cámara (wv-objectives-ui.js, data-wv-sw, onlyUnclaimed, reset al cambiar de kind). Tests wv-objectives-ui +2. Suite 1304/1310 (6 skipped). Review BAJO.
- Exploración La Bóveda: 3 tareas nuevas en READY (BL-060 switch «Solo sin completar» en Raids → Encuentros, BL-061 switch «Solo sin completar» en Logros, BL-062 switch «Solo con Key» en Cuentas). Todas con «Qué ve el jugador».
- BL-061 cerrada: switch «Solo sin completar» en Logros (ach-view.js + ach-cards.js). Tests +2 (ach-view, ach-cards). Suite 1308/1314 (6 skipped). Review BAJO.
- BL-062 cerrada: switch «Solo con Key» en Cuentas (acc-view.js, data-cv-sw="onlyWithKey", onlyWithKey en st.ui, reset en goTab/cvQ). Tests +2. Registrado en advertencia (40.3 KB). Suite 1310/1316 (6 skipped). Review BAJO.