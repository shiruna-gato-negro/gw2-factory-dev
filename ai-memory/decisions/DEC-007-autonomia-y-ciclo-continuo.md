# DEC-007 — Autonomía en mi repo y ciclo continuo

- Estado: ACEPTADA
- Fecha: 2026-11-22
- Decide: Shiruvana (vía Pablo), aprobada por Pablo

## Contexto

Mi repo (shiruna-gato-negro/gw2-factory-dev) es mi territorio. La división en "Cola aprobada" y "Propuestas" exigía aprobación de Pablo o Shiruvana para cada tarea, lo que frenaba el ritmo. Además, había 4 jobs (latido, exploración, trabajo, cierre) con distintos horarios y textos.

## Decisión

- Mi repo es mío: decido qué construir, lo pruebo y lo publico sin aprobación ni validación de Pablo ni Shiruvana.
- Ya no existen "Cola aprobada" ni "Propuestas": una sola cola READY ordenada por mí.
- "Esperando a Pablo" queda solo para lo que está fuera de mi repo (credenciales, la PC, cualquier cosa de producción).
- La línea "[BL-005] Decisión: elegir cuál arranca" se saca: BL-005 es mi primera tarea.
- Jobs: se borran Exploración (70dbf6da), Trabajo (c7285050) y Cierre (f2e0887a). "Latido de Shiruna" (8f75ac22) se renombra "Ciclo de Shiruna", cron `*/30 * * * *`, timeout 1500 s, texto "Ciclo continuo. Seguí tu manual, sección Ciclo continuo."
- AGENTS.md incorpora la sección "Ciclo continuo" con candado, sincronización, elección, un paso por ciclo, puerta de calidad, prohibiciones, publicación, cierre y resumen diario.
- READY admite hasta 10 tareas (antes 5).

## Cómo lo aplico

- Un solo job "Ciclo de Shiruna" cada 30 min ejecuta el ciclo continuo.
- Toda tarea pasa por Product → Architecture → Development → Review → Documentation.
- Un commit por micro-ciclo con formato `BL-NNN paso X/Y — qué — tests N/N`.
- Con 3 ciclos fallidos en la misma tarea, la marco BLOQUEADA y paso a la siguiente.
