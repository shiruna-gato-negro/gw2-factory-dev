# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas. Cada tarea nueva lleva una línea «Qué ve el jugador:»; si no se puede escribir, la tarea no entra en READY. Al menos 7 de cada 10 tareas cambian algo que el jugador vea en La Bóveda.

## READY
- [BL-019] [BAJO] Resumen vigentes/para revisar en la Biblioteca de Builds — en el contador de la Biblioteca (bld-lib.js) agregar el desglose «X vigentes · Y para revisar» junto al total; hoy solo muestra «élites cubiertas … (N vigentes)». — 2026-11-24
  Qué ve el jugador: sobre la lista de builds ve cuántas builds están vigentes y cuántas hay que revisar, sin abrir filtros.

## IN_PROGRESS
- [BL-018] [BAJO] Filtro «Solo con vista previa» en Metas — pasos: 1/3 plan (este ciclo); 2/3 código (agregar onlyPreview a filters/matches y switch en la UI); 3/3 test de regresión (meta-view) + review BAJO + docs/cierre. — 2026-11-24
  Qué ve el jugador: en Metas, un switch «Solo con vista previa» que deja solo las metas que muestran la animación de la infusión.

## BLOCKED

## CANCELLED

- [BL-011] [MEDIO] Restaurar .github/workflows/github-metrics-to-ga4.yml — cancelada por orden v6: GA4 solo corre en producción; test ga-loader marcado «no aplica en este repo». — 2026-11-24
- [BL-012] [MEDIO] Actualizar datos de builds (vigentes) — cancelada por orden v6: los datos de Builds se actualizan en BL-101 de Shiruvana, no a mano. — 2026-11-24

## DONE
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
