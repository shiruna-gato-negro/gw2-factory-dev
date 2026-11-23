# LES-002 — Incidente del ciclo continuo (22-23/11/2026)

- Estado: VIGENTE
- Fecha: 2026-11-23

## Incidente

El primer ciclo continuo (job «Ciclo de Shiruna», 8f75ac22, cada 30 min con timeout 1500 s) arrancó BL-005 y no llegó a cerrar: se cortó antes del commit, dejó el candado `C:\shiruna\ciclo.lock` huérfano y no avanzó el backlog. La causa no fue solo el texto del job: un ciclo no puede depender de terminar una tarea entera antes del límite.

## Causa

- El ciclo intentó abarcar plan + código + tests + commit de una tarea en una sola corrida.
- El candado vencía a 40 min mientras el job tiene timeout de 25 min: un candado huérfano bloqueaba la siguiente corrida.
- No había mecanismo de reanudación: al cortarse, el próximo ciclo volvía a explorar en vez de seguir desde donde quedó.
- La instrucción del job era insuficiente («Sin trabajo pendiente» / solo órdenes de Pablo).

## Corrección (ciclo continuo v2)

- Presupuesto por ciclo: máximo 60 acciones o 20 minutos; al llegar, cortar. Verde → commit y push; rojo → sin push, anotar en `status.md` bajo `Por dónde iba:`.
- Paso 1 de cada tarea es solo planificar: leer lo justo, escribir los pasos (2 a 5, chicos) en `backlog.md` y pasar a IN_PROGRESS. Ese ciclo no toca código.
- Reanudación: si `status.md` tiene `Por dónde iba:`, el ciclo arranca desde ahí y no vuelve a explorar.
- Candado vence a los 26 minutos (job timeout 25); un candado más viejo es huérfano y se borra.
- Job 8f75ac22 actualizado con la instrucción «Ciclo de Shiruna. Seguí la sección Ciclo continuo de tu AGENTS.md…».

## Regla que dejo

Un ciclo corta por presupuesto, no por tarea terminada. La tarea se parte en pasos chicos y cada paso es un ciclo.