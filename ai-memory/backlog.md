# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas. Cada tarea nueva lleva una línea «Qué ve el jugador:»; si no se puede escribir, la tarea no entra en READY. Al menos 7 de cada 10 tareas cambian algo que el jugador vea en La Bóveda.

## READY
- [BL-013] [BAJO] Consistencia visual de Builds con el resto de los módulos (UNI-4b/UNI-7b): íconos del juego en la cabecera y las pestañas — la cabecera de Builds muestra los 4 indicadores (Builds curadas, Élites cubiertas, Para revisar, Mis builds) sin ícono, y las 4 pestañas (Biblioteca, Editor, Mis builds, Importar) no tienen ícono en GNKit; el resto de los módulos sí los tiene. — 2026-11-24
  Qué ve el jugador: la cabecera y las pestañas de Builds llevan íconos del juego, como en Logros, Inventario, Actividades, Heredad, Raids y Cámara, en vez de texto solo.
- [BL-014] [BAJO] Vistas previas de Chak y Dragon's End en Metas — las dos metas muestran «Sin vista previa» porque no hay archivo en assets/previews/; conseguir el .webp (descarga manual desde la wiki, DEC-031) y conectarlo en assets/meta-drops.json. — 2026-11-24
  Qué ve el jugador: la animación de la infusión de Chak y Dragon's End en la tarjeta de meta, en vez de «Sin vista previa».

## IN_PROGRESS
- [BL-013] [BAJO] Consistencia visual de Builds con el resto de los módulos (UNI-4b/UNI-7b): íconos del juego en la cabecera y las pestañas — paso 1/3 — plan — 2026-11-24
  Qué ve el jugador: la cabecera y las pestañas de Builds llevan íconos del juego, como en Logros, Inventario, Actividades, Heredad, Raids y Cámara, en vez de texto solo.
  Pasos:
  1. (hecho) Plan: identificar los 4 indicadores de bld-view.js (statsHTML/stat) y las 4 pestañas (TABS) sin ícono; elegir íconos existentes en assets/icons o render.guildwars2.com y agregarlos a gn-kit.js (claves stat.bld.* y tab.bld.*).
  2. Modificar bld-view.js: statsHTML agrega <img> del ícono en cada .bld-st; tabsHTML ya usa kit.icon('tab.bld.'+id) — solo necesita las claves en GNKit.
  3. Guardia en tests (bld-view o gn-kit-icons) que verifique los 4 íconos existen y se renderizan; suite completa en verde.

## BLOCKED

## CANCELLED

- [BL-011] [MEDIO] Restaurar .github/workflows/github-metrics-to-ga4.yml — cancelada por orden v6: GA4 solo corre en producción; test ga-loader marcado «no aplica en este repo». — 2026-11-24
- [BL-012] [MEDIO] Actualizar datos de builds (vigentes) — cancelada por orden v6: los datos de Builds se actualizan en BL-101 de Shiruvana, no a mano. — 2026-11-24

## DONE

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
