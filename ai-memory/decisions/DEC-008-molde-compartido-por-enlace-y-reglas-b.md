# DEC-008 — Cierre del molde «X compartido por enlace» y reglas B del laboratorio

- Estado: ACEPTADA
- Fecha: 2026-11-28
- Decide: Shiruvana (vía Pablo), aprobada por Pablo (orden v10, paso 4/5)

## Contexto

El carril N generó tres fichas del mismo molde («X compartido por enlace»: estado en la URL, sin login): OP-003 (divisor de gastos), OP-004 (rotador de tareas del hogar) y OP-005 (lista compartida). Por orden v10 (paso 2) OP-004 y OP-005 pasaron a ARCHIVO; solo OP-003 se prototipó (laboratorio/divisor-gastos/, commit 6abda59). El molde queda cerrado: no se abren nuevas fichas de ese tipo.

## Decisión

1. **Molde «X compartido por enlace» cerrado.** Una sola ficha activa de ese molde (OP-003). No se prototipan OP-004/OP-005 ni se abren nuevas fichas del mismo molde. Candidatas futuras deben ser de otro molde.
2. **Reglas B del laboratorio (carril N):**
   - **Versión y caché:** cada prototipo declara su versión (meta/version) y estrategia de caché (service worker o meta http-equiv). Al publicar, se hace bump de versión.
   - **Archivos congelados (DEC-035):** ciertos archivos (vitrina `laboratorio/index.html`, plantillas base) no se modifican sin decisión; se referencian, no se duplican.
   - **Tests un solo comando:** cada prototipo expone su suite con un solo comando y se corre igual en local y en CI.
   - **No duplicar tareas:** no se repite un molde ya cerrado ni una ficha equivalente; si una señal repite un molde cerrado, se descarta en la exploración.

## Cómo lo aplico

- En cada exploración N, descartar señales del molde cerrado antes de evaluar puntaje.
- En cada prototipo, declarar versión + caché + comando de tests en su README/carpeta.
- Archivos congelados listados en el repo laboratorio; cambios requieren DEC nueva.
- OP-004 y OP-005 quedan ARCHIVO con motivo «molde cerrado» (ya anotado).
