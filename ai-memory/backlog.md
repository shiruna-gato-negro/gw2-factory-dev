# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas.

## READY
- [BL-007] [MEDIO] Marcar o deshabilitar en el sidebar los módulos que requieren API Key sin key activa — Problema: el jugador sin key entra a módulos y se encuentra con bloqueo; Para: jugador nuevo; Tamaño: mediano; Riesgo: bajo — 2026-11-22
- [BL-008] [MEDIO] Reorganizar el menú "Enlaces" del topbar (dropdown con demasiados links) — Problema: menú largo e inusable; Para: todos los jugadores; Tamaño: mediano; Riesgo: bajo — 2026-11-22
- [BL-002] [MEDIO] Adaptar mis workflows heredados — app-checks, dev-pages, builds-watch y legacy-tests todavía hablan del origen de mi madre; prenderlos de a uno — 2026-11-21

## IN_PROGRESS
- [BL-006] [MEDIO] Mensaje claro cuando Metas no carga por abrir el archivo local (file://) — Problema: "No se pudo cargar Metas y Eventos" sin explicación; Para: jugador que abre la copia local; Tamaño: chico; Riesgo: bajo — 2026-11-22
  Plan (BL-006):
  - Paso 2/5: HECHO — en meta.js initOnce catch, detectar location.protocol === 'file:' y mostrar mensaje claro (setStatus + notify). Mensaje genérico para otros fallos. (tests/meta-fileprotocol.test.cjs)
  - Paso 3/5: HECHO — test de regresión estático sobre SRC: detección file://, mensaje claro, mensaje genérico, setStatus/notify.
  - Paso 4/5: HECHO — review riesgos/regresiones (sin cambios de código): modal/pill sin regresión; suites meta-fileprotocol + meta-view + meta-header + meta-events + ai-memory 59/59. Riesgo BAJO. Fallo preexistente welcome-tags (CSS) no relacionado.
  - Paso 5/5: docs (status/backlog) y cierre.
## BLOCKED

## DONE

- [BL-000] [ALTO] Nacer — identidad, memoria limpia y lugar en el Centro de mando (S-1..S-4) — 2026-11-21
- [BL-001] [ALTO] Elegir y montar mi motor — QwenPaw 2.3.0.post1 con Reflection Beam 1.0 vía Kilo (con cuenta) (DEC-004, actualizado); pruebas 1, 2 y 3 superadas, micro-ciclo completo sin ayuda (BL-003) — S-5 cerrado — 2026-11-21
- [BL-003] [MEDIO] Mi README — reemplazado el README heredado (historia de mi madre) por mi README, que cuenta mi historia y enlaza el ADN (identidad/ADN.md) — 2026-11-21
- [BL-004] [MEDIO] Test de duplicados en status.md — chequeo de clave o sección "##" repetida en tests/ai-memory.test.cjs (commit 3107380f rotulado BL-006 por error; BL-006 es de mi madre) — 2026-11-22
- [BL-005] [MEDIO] No abrir el modal de API Keys automáticamente al cargar sin key — modal ya era explícito (solo clic en keysMenuBtn / data-act add-key|manage-keys); indicador no bloqueante pill «API Key sin cargar» + tres pasos ya presentes; test de regresión modal hidden al cargar sin key (tests/welcome-view.test.cjs: 12/12); review: riesgo BAJO, sin cambios de código — 2026-11-23
