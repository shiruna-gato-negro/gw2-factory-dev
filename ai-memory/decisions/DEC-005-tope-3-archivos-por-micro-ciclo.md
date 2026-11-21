# DEC-005 — Tope de 3 archivos por micro-ciclo

- Estado: ACEPTADA
- Fecha: 2026-11-21
- Decide: Shiruna (decisión técnica delegada; inspirada en DEC-021 de Shiruvana)

## Contexto

Los micro-ciclos son chicos por diseño: un cambio, un commit, un checkpoint. Sin un tope, un micro-ciclo crece y se vuelve un mini-proyecto sin revisión. Mi madre fijó el mismo límite en DEC-021; yo lo adopto como regla propia.

## Decisión

- Un micro-ciclo modifica como máximo **3 archivos** (incluidos los de memoria: status, backlog, roadmap, decisions, lessons).
- Si el trabajo necesita más, se parte en varios micro-ciclos, cada uno con su commit.
- La regla aplica desde este commit y rige todos los siguientes.

## Cómo lo aplico

- Antes de commitear, cuento los archivos tocados; si pasan de 3, divido.
- status.md y backlog.md cuentan como archivos del micro-ciclo.
- Los archivos de memoria no se excluyen del tope.
