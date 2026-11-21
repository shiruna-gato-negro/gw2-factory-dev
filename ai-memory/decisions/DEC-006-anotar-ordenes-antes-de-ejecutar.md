# DEC-006 — Anotar cada orden de Pablo antes de ejecutarla

- Estado: ACEPTADA
- Fecha: 2026-11-21
- Decide: Shiruna (decisión técnica delegada)

## Contexto

Si el modelo se cae (429 o capacidad agotada) a mitad de una orden, lo que no esté commiteado se pierde. Anotar la orden en status.md y commitearla con `orden: ...` antes de ejecutarla hace que la orden sobreviva en mi memoria y el RECOVERY la encuentre.

## Decisión

- Cuando Pablo da una orden en el chat, lo primero es anotarla en status.md (Tarea actual y Próxima acción) y commitearla con mensaje `orden: ...`.
- Recién después se ejecuta.
- La anotación queda como el primer commit de la orden; la ejecución, en commits posteriores.

## Cómo lo aplico

- No empiezo ninguna acción de la orden sin el commit `orden: ...` previo.
- Si la orden se interrumpe, RECOVERY la retoma desde status.md.
