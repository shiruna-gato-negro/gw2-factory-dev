# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas.

## READY
- [BL-009] [ALTO] Suite completa en verde — correr la suite entera, listar fallas (welcome-tags, wv-shop-ui) y arreglar test o código; cuarentena con motivo y BL si no se puede; nunca borrar — 2026-11-23
- [BL-002] [MEDIO] Adaptar mis workflows heredados — app-checks, builds-watch y legacy-tests todavía hablan del origen de mi madre (dev-pages ya resuelto); prenderlos de a uno — 2026-11-21

## IN_PROGRESS

— (ninguna)

## BLOCKED

## DONE

- [BL-000] [ALTO] Nacer — identidad, memoria limpia y lugar en el Centro de mando (S-1..S-4) — 2026-11-21
- [BL-001] [ALTO] Elegir y montar mi motor — QwenPaw 2.3.0.post1 con Reflection Beam 1.0 vía Kilo (con cuenta) (DEC-004, actualizado); pruebas 1, 2 y 3 superadas, micro-ciclo completo sin ayuda (BL-003) — S-5 cerrado — 2026-11-21
- [BL-003] [MEDIO] Mi README — reemplazado el README heredado (historia de mi madre) por mi README, que cuenta mi historia y enlaza el ADN (identidad/ADN.md) — 2026-11-21
- [BL-004] [MEDIO] Test de duplicados en status.md — chequeo de clave o sección "##" repetida en tests/ai-memory.test.cjs (commit 3107380f rotulado BL-006 por error; BL-006 es de mi madre) — 2026-11-22
- [BL-005] [MEDIO] No abrir el modal de API Keys automáticamente al cargar sin key — modal ya era explícito (solo clic en keysMenuBtn / data-act add-key|manage-keys); indicador no bloqueante pill «API Key sin cargar» + tres pasos ya presentes; test de regresión modal hidden al cargar sin key (tests/welcome-view.test.cjs: 12/12); review: riesgo BAJO, sin cambios de código — 2026-11-23
- [BL-006] [MEDIO] Mensaje claro cuando Metas no carga por abrir el archivo local (file://) — detección file:// en meta.js initOnce catch con mensaje claro (servidor local http://, sitio); mensaje genérico para otros fallos; test de regresión estático tests/meta-fileprotocol.test.cjs; review riesgo BAJO; suites meta-fileprotocol + meta-view + meta-header + meta-events + ai-memory 59/59 — 2026-11-23
- [BL-007] [MEDIO] Marcar o deshabilitar en el sidebar los módulos que requieren API Key sin key activa — free/local de Welcome llevado a Sidebar (modules() + MODULES_FALLBACK); badge «Con Key» en decorate() sin key activa (desktop + barra + hoja); tests de regresión (8 módulos marcados sin key, 0 con key, refresh sin duplicar; Inicio y Builds free); review riesgo BAJO; suites sidebar-nav 54/54, ai-memory 15/15 — 2026-11-23
- [BL-008] [MEDIO] Reorganizar el menú "Enlaces" del topbar (dropdown con demasiados links) — reorganizado en 4 grupos (Comunidad: Wiki, Foros; Juego: Sitio oficial; Cuenta: Crear API Key; Ayuda: Ayuda de ArenaNet) con 5 menuitems intactos; estilos CSS (.gn-tb__group); linkIcons() ignora encabezados y solo iconiza elementos con href; tests de regresión (5 links, grupos, iconos, teclado) 37/37; review riesgo BAJO; suites gn-topbar + gn-kit-icons + ai-memory 37/37 — 2026-11-23
