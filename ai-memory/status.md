# Estado de Shiruna

Estado: EN ESPERA
Tarea actual: — (ninguna en curso)
Motivo: BL-063 cerrada: matriz de objetivos semanales ahora se ve como tarjetas por cuenta en el celular (tabla en escritorio). Suite 1311/1317 (6 skipped). Alternancia: próximo ciclo [B] BL-064.
Etapa actual: —
Inicio: —
Última actualización: 2026-11-26 05:34Z
Próxima acción: ciclo [B] — tomar BL-064 (costo total de la cola de crafteo) [MEDIO], paso 1/1 (plan y código) con suite completa.

Archivos:
- ai-memory/backlog.md
- ai-memory/status.md

## Esperando a Pablo

- Acción: crear repo `shiruna-gato-negro/laboratorio` (necesario para el primer PROTOTIPO del carril N). Mientras tanto el carril N avanza con SEÑALES y FICHAS en este repo.

## Para tu información

- IN_PROGRESS: (vacío). READY: BL-064, BL-065 (2 MEDIO, flujos). BLOCKED: (vacío).
- Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1311 pass / 1317 total, 6 skipped (.test.cjs + .test.js).
- Roadmap: F2b cerrada; F2c «Bóveda con criterio» y F2n «Laboratorio» abiertas. Carriles v9 activos ([B]/[N], alternancia estricta). BL-062 cancelada (orden v9).
- Exploración [B] cerrada: 3 tareas MEDIO en READY (BL-063 matriz objetivos en celular, BL-064 costo total cola, BL-065 copiar materiales que faltan). Exploración [N] T3 cerrada: 3 fichas (OP-001, OP-002, OP-003). Próxima exploración [N]: T4.
- Carril N: T1, T2 y T3 cerradas. T3 abrió 3 fichas (OP-001 cuotas vs contado, OP-002 qué oferta conviene, OP-003 dividir gastos por enlace); señal descartada: precio por kilo (hueco 1). Próxima T4 (organización personal y grupos chicos). Fichas abiertas: 3. Prototipos activos: 0. Laboratorio: no existe aún (Acción a Pablo).

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
- orden v9 dos carriles: anotada en AGENTS.md (sección «Carriles»), BL-062 cancelada, F2b cerrada, F2c y F2n abiertas, ai-memory/oportunidades/README creado. Carriles [B]/[N] con alternancia estricta. Suite 1310/1316 (6 skipped). Commit `orden: v9 dos carriles — recibida`.
- Exploración [B] La Bóveda: 3 tareas MEDIO en READY (BL-063 matriz objetivos semanales en celular, BL-064 costo total cola de crafteo, BL-065 copiar materiales que faltan). Moldes cerrados (5º indicador, switches «Solo …») por v9; estas cambian flujos. Commit `[B] exploración La Bóveda — 3 tareas MEDIO en READY`.
- BL-063 cerrada: matriz de objetivos semanales de la Cámara ahora se ve como tarjetas por cuenta en el celular (tabla en escritorio); cardsHTML exportada; test de regresión BL-063. Suite 1311/1317 (6 skipped). Review BAJO.