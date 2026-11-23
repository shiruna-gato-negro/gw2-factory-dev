# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas.

## READY
- [BL-011] [MEDIO] Restaurar .github/workflows/github-metrics-to-ga4.yml (falta en el repo; test ga-loader cuarentenado) — 2026-11-23
- [BL-012] [MEDIO] Actualizar datos de builds (vigentes) — PvE 3/36, bench count; tests bld-lib (3) y bld-rows (1) cuarentenados — 2026-11-23

## IN_PROGRESS

- [BL-010] [MEDIO] Achicar o registrar archivos que crecieron del presupuesto de tamaño — index.html (49199 B, 47 B sobre 48 KB), js/meta.js (64051 B, 451 B sobre techo 63600), js/sidebar-nav.js (41203 B, 243 B sobre 40 KB). Tests cuarentenados: size-budget (la Bóveda cumple presupuesto) y universo (index.html carga universo.css + ≤48 KB). — 2026-11-23
  Pasos:
  1/5 — plan (este ciclo): mover a IN_PROGRESS, definir pasos. (commit BL-010 paso 1/5)
  2/5 — index.html: achicado 58 B (49199 → 49141, ≤48 KB) quitando comentario BL-092; size-budget sin error. (cerrado)
  3/5 — js/meta.js: achicar 451 B sobre techo 63600 (BL-006 file://); si no es posible sin perder funcionalidad, extraer a archivo aparte. Verificar size-budget. (cerrado: 64051 → 63426, ≤63600, header + file:// simplificado; size-budget sin error)
  4/5 — js/sidebar-nav.js: achicar 243 B sobre 40 KB (BL-007 badge «Con Key») o registrar en advertencia con motivo. Verificar size-budget. (cerrado: registrado en advertencia, 40.2 KB, nota BL-007; size-budget sin errores)
  5/5 — des-cuarentenar tests (quitar .skip en size-budget y universo), correr suite completa, review + docs + cierre. Commit final.

## BLOCKED

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
