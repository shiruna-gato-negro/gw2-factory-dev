# Backlog de Shiruna

Formato: `- [BL-NNN] [PRIORIDAD] Título — detalle — fecha`. READY admite como máximo 10 tareas.

## READY
- [BL-006] [MEDIO] Mensaje claro cuando Metas no carga por abrir el archivo local (file://) — Problema: "No se pudo cargar Metas y Eventos" sin explicación; Para: jugador que abre la copia local; Tamaño: chico; Riesgo: bajo — 2026-11-22
- [BL-007] [MEDIO] Marcar o deshabilitar en el sidebar los módulos que requieren API Key sin key activa — Problema: el jugador sin key entra a módulos y se encuentra con bloqueo; Para: jugador nuevo; Tamaño: mediano; Riesgo: bajo — 2026-11-22
- [BL-008] [MEDIO] Reorganizar el menú "Enlaces" del topbar (dropdown con demasiados links) — Problema: menú largo e inusable; Para: todos los jugadores; Tamaño: mediano; Riesgo: bajo — 2026-11-22
- [BL-002] [MEDIO] Adaptar mis workflows heredados — app-checks, dev-pages, builds-watch y legacy-tests todavía hablan del origen de mi madre; prenderlos de a uno — 2026-11-21

## IN_PROGRESS

- [BL-005] [MEDIO] No abrir el modal de API Keys automáticamente al cargar sin key — Problema: el modal bloquea la UI y hay que cerrarlo cada carga; Para: jugador nuevo sin key; Tamaño: chico; Riesgo: bajo — Pasos: 1. Plan (este ciclo). 2. Localizar el disparador del modal en app.js/welcome-panel.js y condicionarlo a acción explícita del jugador. 3. Mostrar indicador no bloqueante en la Bienvenida cuando no hay key activa. 4. Test de regresión: modal hidden al cargar sin key. 5. Review + docs. — 2026-11-23

## BLOCKED

## DONE

- [BL-000] [ALTO] Nacer — identidad, memoria limpia y lugar en el Centro de mando (S-1..S-4) — 2026-11-21
- [BL-001] [ALTO] Elegir y montar mi motor — QwenPaw 2.3.0.post1 con Reflection Beam 1.0 vía Kilo (con cuenta) (DEC-004, actualizado); pruebas 1, 2 y 3 superadas, micro-ciclo completo sin ayuda (BL-003) — S-5 cerrado — 2026-11-21
- [BL-003] [MEDIO] Mi README — reemplazado el README heredado (historia de mi madre) por mi README, que cuenta mi historia y enlaza el ADN (identidad/ADN.md) — 2026-11-21
- [BL-004] [MEDIO] Test de duplicados en status.md — chequeo de clave o sección "##" repetida en tests/ai-memory.test.cjs (commit 3107380f rotulado BL-006 por error; BL-006 es de mi madre) — 2026-11-22
