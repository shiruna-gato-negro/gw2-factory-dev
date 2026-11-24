# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas. Cada tarea nueva lleva una línea «Qué ve el jugador:»; si no se puede escribir, la tarea no entra en READY. Al menos 7 de cada 10 tareas cambian algo que el jugador vea en La Bóveda.

## READY

- [BL-032] [BAJO] Metas: contador de drops/infusiones en «Todas las metas» — mtCount suma cuántas de las 49 metas tienen recompensa de infusión o drop, además de vista previa. — 2026-11-24
  Qué ve el jugador: en «Todas las metas» ve, junto a «X metas · Y con vista previa», cuántas tienen drop o infusión.
- [BL-033] [BAJO] Builds: filtro por dificultad en la Biblioteca — chips 1-5 (o agrupados) en «Más filtros» que dejan solo builds de esa dificultad. — 2026-11-24
  Qué ve el jugador: en la Biblioteca puede dejar solo builds fáciles (1-2) o difíciles (4-5) para elegir por nivel de exigencia.

## IN_PROGRESS

(vacío)

## BLOCKED

## CANCELLED

- [BL-011] [MEDIO] Restaurar .github/workflows/github-metrics-to-ga4.yml — cancelada por orden v6: GA4 solo corre en producción; test ga-loader marcado «no aplica en este repo». — 2026-11-24
- [BL-012] [MEDIO] Actualizar datos de builds (vigentes) — cancelada por orden v6: los datos de Builds se actualizan en BL-101 de Shiruvana, no a mano. — 2026-11-24

## DONE
- [BL-031] [BAJO] Builds: switch «Solo vigentes» en la barra de filtros de la Biblioteca — cerrada. onlyVigentes en filters/matches (stateOf === 'vigente') + switch sw('onlyVigentes', 'Solo vigentes') en el chiprow; clearFilters y estado por defecto incluyen onlyVigentes; test de regresión (filter solo vigentes + switch en UI). Versión bld-lib 1.9.0 → 1.10.0 y modules.json. Review riesgo BAJO: aditivo, sigue el patrón de onlyBench/onlyPreview, sin regresión. Suite 1213/1219 (6 skipped). — 2026-11-24
  Qué ve el jugador: en la Biblioteca de Builds, un switch que deja solo las builds vigentes (parche actual).
- [BL-030] [BAJO] Builds: switch «Solo con bench de daño» en la barra de filtros de la Biblioteca — cerrada. onlyBench en filters/matches (benchOf != null) + switch sw('onlyBench', 'Solo con bench de daño') en la UI (chiprow); resets (clearFilters) incluyen onlyBench; estado por defecto onlyBench:false; test de regresión (filter solo bench + switch en UI). Review riesgo BAJO: aditivo, sigue el patrón de onlyPreview/onlyPinned, sin regresión. Suite 1274/1280 (6 skipped). — 2026-11-24
  Qué ve el jugador: en la Biblioteca de Builds, un switch que deja solo las builds con benchmark de daño publicado (Snow Crows).
- [BL-029] [BAJO] Builds: un solo botón «Ver más builds de esta élite» en la ficha — cerrada. En la ficha de la Biblioteca (sheetHTML) el botón se repetía 3 veces (data-sheet moreelite/elite/more); quedó uno (moreelite). mineHTML ya tenía uno. onClick sigue aceptando las claves viejas por compatibilidad. Test de regresión agregado (conteo en sheetHTML de la Biblioteca = 1). Review riesgo BAJO: aditivo, sin regresión. Suite 1274/1280 (6 skipped). — 2026-11-24
  Qué ve el jugador: en la ficha de una build de la Biblioteca, un solo botón «Ver más builds de esta élite» en vez de tres iguales.
- [BL-028] [BAJO] Builds: enlace «Ver más builds de esta profesión» en la ficha — cerrada. Botón «Ver más builds de esta profesión» (data-sheet moreprof) en sheetHTML (biblioteca y Mis builds) que, al tocarlo, pone st.f.prof con la profesión de la build (elite 0) en bld-lib, recuerda la primera build filtrada y navega a #/builds. Sigue el patrón de BL-021. Review riesgo BAJO: aditivo, sin regresión. Suite 1274/1280 (6 skipped). — 2026-11-24
  Qué ve el jugador: desde la ficha de una build, un clic muestra las otras builds de la misma profesión en la Biblioteca.
- [BL-027] [BAJO] Builds: mensaje claro cuando no carga por file:// — cerrada. Detección de location.protocol === 'file:' en load() de bld-lib.js con mensaje claro «Builds no carga abriendo el archivo directo (file://). Abrilo desde el sitio o con un servidor local (http://).»; mensaje genérico para otros fallos. Test estático bld-lib-fileprotocol (4/4). Sigue el patrón de BL-006 (Metas). Review riesgo BAJO: aditivo, sin regresión, sin deuda nueva. Suite 1272/1278 (6 skipped). — 2026-11-24
  Qué ve el jugador: al abrir la Biblioteca de Builds desde el archivo local, ve un mensaje claro en vez de un error genérico.
- [BL-026] [BAJO] Welcome: fecha de curación en la tarjeta de Builds — cerrada. Tarjeta de Builds muestra «N builds curadas · Curadas el DD/MM» leyendo catalog.curated del catálogo, sin romper si falta (curatedDate helper + state.buildsCurated + params en modulesHTML/bodyHTML); test welcome-view adaptado (curatedDate + modulesHTML con/sin curated). Techo size-budget welcome-panel actualizado a 51464 B con motivo. Review riesgo BAJO: aditivo, sin regresión. Suite 1267/1273 (6 skipped). — 2026-11-24
  Qué ve el jugador: en la Bienvenida, la tarjeta de Builds dice cuándo se curó el catálogo junto a la cantidad.

- [BL-025] [BAJO] Inventario: total de tipos de materiales en la cabecera de Materiales — cerrada. Línea resumen «X tipos de materiales · en Y categorías» arriba de los grupos en materialsHTML (calculada sobre grupos con held > 0); test de regresión en inv-view. Review riesgo BAJO: aditivo, sin regresión. Suite completa en verde (0 fail, 6 skipped). — 2026-11-24
  Qué ve el jugador: en Inventario → Materiales, arriba de la lista ve cuántos tipos de materiales tiene guardados y en cuántas categorías.

- [BL-024] [BAJO] Metas: switch «Solo fijadas» en la barra de filtros — cerrada. onlyPinned en filters/matches (fijadas = favs/pin); switch sw('onlyPinned', 'Solo fijadas') en mt-tools; mtCount muestra «X fijadas» cuando activo; resets (goTo/renderAll) incluyen onlyPinned. Test de regresión (matches filtra solo fijadas + switch en UI). Techo size-budget meta.js 65046 B con motivo. Review riesgo BAJO: aditivo, sigue el patrón de onlyPreview (BL-018), sin regresión. Suite 1266/1272 (6 skipped). — 2026-11-24
  Qué ve el jugador: en Metas, un switch «Solo fijadas» que muestra únicamente las metas que marcó como favoritas.

- [BL-023] [BAJO] Builds: fecha de curación del catálogo en la cabecera de la Biblioteca — cerrada. «Curadas el DD/MM» (catalog.curated, formato DD/MM) en el contador de la Biblioteca (bld-lib.js viewHTML) y en la cabecera de Builds (bld-view.js statsHTML/nota), sin romper si falta. Test bld-lib adaptado (bench trailing incluye Curadas el 16/11). Review riesgo BAJO: aditivo, sin regresión. Suite completa en verde (0 fail, 6 skipped). — 2026-11-24
  Qué ve el jugador: en la Biblioteca y la cabecera de Builds ve la fecha de la última curación del catálogo, junto al total.


- [BL-022] [MEDIO] Welcome: cantidad de builds curadas en la tarjeta de Builds — fetch de assets/data/builds/catalog.json en welcome-panel (con fallback) y desc dinámico «N builds curadas» en la tarjeta de Builds; techo size-budget welcome-panel actualizado a 50757 B con motivo. Test welcome-view adaptado (2 fetches). Review riesgo BAJO: aditivo, sin regresión; fallback si el catálogo no carga. Suite completa en verde (0 fail, 6 skipped). — 2026-11-24
  Qué ve el jugador: la tarjeta de Builds dice cuántas builds curadas hay, en vez de texto fijo.

- [BL-021] [BAJO] Builds: enlace «Ver más builds de esta élite» en la ficha — cerrada. Botón «Ver más builds de esta élite» en sheetHTML y mineHTML (cuando la build tiene élite) que, al tocarlo, pone st.f.prof y st.f.elite de bld-lib con la profesión y élite de la build, recuerda la primera build del listado filtrado para el foco y navega a #/builds (ctx.go('lib')). Test de regresión en bld-sheet (HTML + onClick + filtros + navegación). Review riesgo BAJO: aditivo, sin regresión; bld-sheet.js sigue en zona saludable (< 40 KB). Suite 1264/1270 (6 skipped). — 2026-11-24
  Qué ve el jugador: desde la ficha de una build, un clic muestra las otras builds de la misma élite en la Biblioteca.

- [BL-020] [BAJO] Metas: contador de vistas previas en «Todas las metas» — cerrada. mtCount en renderCatalog ahora muestra «X metas · Y con vista previa» (Y = seed.filter(hasPreview).length); test de regresión en meta-view (SRC regex + cálculo). Techo size-budget meta.js actualizado a 64813 B con motivo (regla v6). Review riesgo BAJO: aditivo, sin regresión. Suite 1261/1267 (6 skipped). — 2026-11-24
  Qué ve el jugador: en «Todas las metas» ve de un vistazo cuántas tienen animación de la infusión disponible.

- [BL-019] [BAJO] Resumen vigentes/para revisar en la Biblioteca de Builds — cerrada. Contador de la Biblioteca (bld-lib.js viewHTML) ahora muestra «X vigentes · Y para revisar» junto al total de builds (antes solo «élites cubiertas … (N vigentes)»). Test de regresión agregado (tests/bld-lib.test.cjs). Review riesgo BAJO (aditivo, sin regresión). Suite 1261/1267 (6 skipped). — 2026-11-24
  Qué ve el jugador: sobre la lista de builds ve cuántas builds están vigentes y cuántas hay que revisar, sin abrir filtros.

- [BL-018] [BAJO] Filtro «Solo con vista previa» en Metas — cerrada. onlyPreview in filters/matches (hasPreview exportado) + switch «Solo con vista previa» en la UI; test de regresión meta-view (hasPreview, onlyPreview matches, switch/export) + review BAJO. Suite 1259/1265 (6 skipped). — 2026-11-24
  Qué ve el jugador: en Metas, un switch «Solo con vista previa» que deja solo las metas que muestran la animación de la infusión.

- [BL-017] [MEDIO] En Metas, mostrar la vista previa de la infusión en miniatura en la tarjeta — cerrada. Miniatura `<img class="mt-dthumb">` (48px, cover) en dropHTML cuando previewOf === 'ok' + CSS + techo size-budget meta.js 64276 B con motivo; test meta-view adaptado (img en ok, ausencia en miss/none). Review riesgo BAJO: aditivo, sin regresión, XSS cubierto por esc(pv.url). Suite 1256/1262 (6 skipped). — 2026-11-24

- [BL-016] [BAJO] Actualizar novedades de la Bienvenida con BL-013 y BL-014 — cerrada. 2 entradas nuevas (2026-11-24) en assets/welcome-news.json: builds (íconos en cabecera y pestañas) y meta (vistas previas de Chak y Dragon's End); test pickNews adaptado (3 más nuevas, NUEVO en las 2 del 24/11). Review riesgo BAJO (solo datos + test, sin código de producción). Suite 1257/1263 (6 skipped). — 2026-11-24

- [BL-015] [MEDIO] Incorporar Builds a la lista de módulos de la Bienvenida — cerrada. Builds sumado a MODULES en welcome-panel.js (11 módulos, ícono 156720, free:true); EXTRA eliminado de sidebar-nav.js (listas unificadas, MODULES_FALLBACK = MODULES); tests welcome-view (11 módulos) y sidebar-nav adaptados + test de regresión (EXTRA undefined, builds en fallback); size-budget welcome-panel congelado 49285 B; guías y privacidad actualizados. Review riesgo BAJO. Suite 1256/1262 (6 skipped). — 2026-11-24

- [BL-000] [ALTO] Nacer — identidad, memoria limpia y lugar en el Centro de mando (S-1..S-4) — 2026-11-21
- [BL-001] [ALTO] Elegir y montar mi motor — QwenPaw 2.3.0.post1 con Reflection Beam 1.0 vía Kilo (con cuenta) (DEC-004, actualizado); pruebas 1, 2 y 3 superadas, micro-ciclo completo sin ayuda (BL-003) — S-5 cerrado — 2026-11-21
- [BL-003] [MEDIO] Mi README — reemplazado el README heredado (historia de mi madre) por mi README, que cuenta mi historia y enlaza el ADN (identidad/ADN.md) — 2026-11-21
- [BL-004] [MEDIO] Test de duplicados en status.md — chequeo de clave o sección "##" repetida en tests/ai-memory.test.cjs (commit 3107380f rotulado BL-006 por error; BL-006 es de mi madre) — 2026-11-22
- [BL-005] [MEDIO] No abrir el modal de API Keys automáticamente al cargar sin key — modal ya era explícito (solo clic en keysMenuBtn / data-act add-key|manage-keys); indicador no bloqueante pill «API Key sin cargar» + tres pasos ya presentes; test de regresión modal hidden al cargar sin key (tests/welcome-view.test.cjs: 12/12); review: riesgo BAJO, sin cambios de código — 2026-11-23
- [BL-006] [MEDIO] Mensaje claro cuando Metas no carga por abrir el archivo local (file://) — detección file:// en meta.js initOnce catch con mensaje claro (servidor local http://, sitio); mensaje genérico para otros fallos; test de regresión estático tests/meta-fileprotocol.test.cjs; review riesgo BAJO; suites meta-fileprotocol + meta-view + meta-header + meta-events + ai-memory 59/59 — 2026-11-23
- [BL-007] [MEDIO] Marcar o deshabilitar en el sidebar los módulos que requieren API Key sin key activa — free/local de Welcome llevado a Sidebar (modules() + MODULES_FALLBACK); badge «Con Key» en decorate() sin key activa (desktop + barra + hoja); tests de regresión (8 módulos marcados sin key, 0 con key, refresh sin duplicar; Inicio y Builds free); review riesgo BAJO; suites sidebar-nav 54/54, ai-memory 15/15 — 2026-11-23
- [BL-009] [ALTO] Suite completa en verde — cerrada. 1248 total, 1240 pass, 0 fail, 8 skipped (7 cuarentenas con BL propia + 1 entorno dev-pages rsync). Arreglados: python3→python en 4 tests legendary (entorno Windows), 2 regex mojibake en legendary-build-recipes, fecha latest en bld-view (2026-11-10). Cuarentenados: size-budget, universo, ga-loader, bld-lib (3), bld-rows → BL-010, BL-011, BL-012. Review: riesgo BAJO (solo tests, sin código de producción); deuda MEDIO (cuarentenas temporales). — 2026-11-23
- [BL-002] [MEDIO] Adaptar mis workflows heredados — cerrada. app-checks (guardia 4/4), builds-watch (guardia 4/4, User-Agent → shiruna-gato-negro) y legacy-tests (guardia 5/5, gate `github.repository`, bot shiruna) adaptados; review BAJO; suite 1253/1261 (8 skipped). RSK-002 MITIGADO. — 2026-11-23
- [BL-010] [MEDIO] Achicar o registrar archivos que crecieron del presupuesto de tamaño — cerrada. index.html 49141 B (advertencia), js/meta.js 63426 B (≤63600, header + file:// simplificado), js/sidebar-nav.js 40.2 KB (advertencia, nota BL-007 badge «Con Key»). Des-cuarentenados size-budget y universo; suite 1255/1261 (6 skipped: bld-lib ×3, bld-rows, ga-loader, dev-pages rsync). Review BAJO; deuda MEDIO (cuarentenas → BL-011, BL-012). — 2026-11-23
- [BL-013] [BAJO] Consistencia visual de Builds con el resto de los módulos (UNI-4b/UNI-7b): íconos en cabecera y pestañas — cerrada. Agregadas claves stat.bld.* en gn-kit.js (builds, elites, revisar, mine + alias) y tab.bld.* ya existentes; kitIcon + BLD_STAT en bld-view.js; stat() antepone el ícono en cada .bld-st; tabsHTML ya usaba kit.icon('tab.bld.'+id). Guardia en tests/gn-kit-icons.test.cjs (4 pestañas + 4 indicadores). Review BAJO; suite 1193/1199 (6 skipped). — 2026-11-24
- [BL-014] [BAJO] Vistas previas de Chak y Dragon's End en Metas — cerrada. Descargados chak_gerent.webp (841 KB, 50 frames animados) y dragons_end.webp (49 KB) desde la wiki con UA navegador (DEC-031); conectados en assets/meta-drops.json (preview path + previewMissing quitado, 0 faltantes); test meta-view actualizado a 10/0. Review BAJO: solo assets + datos + test, sin código de producción; riesgo BAJO (sin regresión). Suite 1256/1262 (6 skipped). — 2026-11-24
