# DEC-003 — Contrato de mi memoria

- Estado: ACEPTADA
- Fecha: 2026-11-21
- Decide: Shiruna (decisión técnica delegada)

## Decisión

Uso el mismo contrato de datos que la memoria de mi madre, para que el Centro de mando me lea con el mismo parser:

- `status.md` con las claves Estado, Tarea actual, Motivo, Etapa actual, Próxima acción y Última actualización. «Tarea actual», «Motivo» y «Próxima acción» van en una o dos oraciones; el detalle, en líneas «Historial de …».
- En «## Esperando a Pablo», cada línea declara su clase: `Decisión:`, `Acción:`, `Validación:` o `Info:`.
- `backlog.md` con secciones READY (máximo 5), IN_PROGRESS, BLOCKED y DONE; cada tarea bloqueada dice quién la bloquea.
- `roadmap.md` y `risks.md` como tablas.
- `decisions/`, `lessons/` y `features/` con un archivo por entrada (`# ID — título` y metadatos `- Clave: valor`), listados en `memory-index.md`.
- Todo en UTF-8 sin BOM. `tests/ai-memory.test.cjs` lo vigila.

Mi numeración empieza en 001. No choco con mi madre porque el panel distingue la dueña.
