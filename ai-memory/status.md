# Estado de Shiruna

Estado: EN_CURSO
Tarea actual: BL-069 paso 1/3 (plan) — cabeceras de 5 indicadores responsive en el celular
Motivo: Paso 1/3 solo planifica. Detalle y pasos en backlog.md (IN_PROGRESS). Sin cambios de código este ciclo.
Etapa actual: Product/Architecture (plan)
Inicio: 2026-11-27
Última actualización: 2026-11-27 03:00Z
Próxima acción: BL-069 paso 2/3 — implementación CSS @media(max-width:720px) + tests.

Archivos:
- ai-memory/status.md
- ai-memory/backlog.md
- ai-memory/oportunidades/ (sin cambios)

## Esperando a Pablo

- Acción: crear repo `shiruna-gato-negro/laboratorio` (necesario para el primer PROTOTIPO del carril N). Mientras tanto el carril N avanza con SEÑALES y FICHAS en este repo.

## Para tu información

- IN_PROGRESS: BL-069 paso 1/3 (plan). READY: 2 (BL-070, BL-071). BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1317 pass / 1323 total, 6 skipped.
- Roadmap: F2b cerrada; F2c «Bóveda con criterio» y F2n «Laboratorio» abiertas. Carriles v9 activos ([B]/[N], alternancia estricta). BL-062 cancelada (orden v9).
- Exploración [B] cerrada: 3 tareas nuevas en READY (BL-069 MEDIO cabeceras de 5 indicadores responsive en el celular, BL-070 MEDIO catálogo de la Armería Legendaria responsive en el celular, BL-071 BAJO total de unidades guardadas en Materiales). Todas con «Qué ve el jugador».
- Exploración [N] T1, T2 y T3 (segunda pasada) cerradas: T1 3 señales (ninguna pasa); T2 4 señales (ninguna pasa); T3 6 señales (ninguna pasa). Fichas abiertas: 5 (límite). Prototipos activos: 0. Laboratorio: no existe aún (Acción a Pablo).

## Resumen de la sesión

- BL-069 paso 1/3 (plan): cabeceras de 5 indicadores responsive en el celular. Plan en backlog.md (IN_PROGRESS). Sin código. Suite 1255/1261 (6 skipped). — 2026-11-27 03:00Z

- BL-066 paso 1/3 (plan): exploración [B] cerrada, 3 tareas nuevas en READY (BL-066 MEDIO resumen por grupo con barra, BL-067 BAJO conteo en pills, BL-068 MEDIO resumen AA en Tienda). Carril [B]. Suite 1315/1321 (6 skipped). — 2026-11-26 23:30Z

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
Exploración [N] T4 cerrada: 2 fichas nuevas (OP-004 rotador de tareas del hogar por enlace, OP-005 lista compartida por enlace). Señales descartadas: planificador de menús (hueco 1), calendario compartido (8 pts), ruleta de turnos (hueco 1). Fichas abiertas: 5 (límite). Suite sin cambios. — 2026-11-26
- BL-065 cerrada: botón «Copiar lo que falta» en Materiales totales (legendary-tree-ui.js + handler en tracker) copia la lista de materiales faltantes al portapapeles. Test de regresión BL-065. Techo legendary-tracker 63971 → 66285 B. Review BAJO. Suite 1315/1321 (6 skipped). — 2026-11-26
- BL-066 cerrada: resumen por grupo en nodesHTML («X de Y desbloqueados» + .hs-bar), test BL-066, size-budget 37689 B. Suite 1253/1259 (6 skipped). — 2026-11-27 00:05Z
- Exploración [N] T2 (segunda pasada) cerrada: 4 señales (MH Now, Stardew, PoE, Satisfactory), ninguna pasa filtro/puntaje; sin ficha nueva. Límite 5 fichas vigente. Suite 1316/1322 (6 skipped). — 2026-11-27 01:04Z
- BL-068 cerrada: resumen AA compacto en la Tienda (aaLineHTML + helper shopSummary). Suite 1255/1261 (6 skipped). — 2026-11-27 01:30Z
- Exploración [B] cerrada: 3 tareas nuevas en READY (BL-069 MEDIO cabeceras de 5 indicadores responsive en el celular, BL-070 MEDIO catálogo de la Armería Legendaria responsive en el celular, BL-071 BAJO total de unidades guardadas en Materiales). Carril [B]. Suite 1317/1323 (6 skipped). — 2026-11-27 02:15Z
