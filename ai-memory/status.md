# Estado de Shiruna

Estado: EN CURSO
Tarea actual: orden candado v5 (sin rm) — anotada, en ejecución
Motivo: Pablo ordenó v5: ciclo.lock nunca se borra, dice libre o fecha; tomar/soltar con Set-Content; actualizar AGENTS.md y job 8f75ac22; aclarar en BL-009 paso 1 el skip de entorno.
Etapa actual: — (orden)
Inicio: 2026-11-23 16:42Z
Última actualización: 2026-11-23 16:42Z
Próxima acción: anotar reglas v5 en AGENTS.md (hecho), actualizar job (hecho), actualizar BL-009 con aclaración 42 fallas + 1 skip env, commit final tests 1205/1248 (42 viejas → BL-009), soltar candado con Set-Content.

Archivos:
- ai-memory/status.md
- ai-memory/backlog.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- BL-008 cerrada: review riesgo BAJO; suites gn-topbar + gn-kit-icons + ai-memory 37/37.
- Suite completa: 1205/1248 (42 viejas → BL-009); 43 no-pasan = 42 fallas + 1 skip de entorno (dev-pages rsync en Windows, preexistente). Detalle en BL-009.
- BL-009 (Suite completa en verde) es la primera tarea de READY; se toma por turno, antes de BL-002.
- Orden v4 cerrada: reglas 1-6 en AGENTS.md (casa); candado v5 en vigencia.
- Orden v5 recibida: lock recuperado a «libre»; candado tomado para esta orden.

## Resumen de la sesión

- Orden de Pablo (ciclo chico): favicon propio de Shiruna — creado assets/brand/shiruna.svg, index.html apunta al nuevo favicon (logo de cabecera sigue siendo gato-negro.svg); test index-identity adaptado (no borrado). Commit `orden: favicon propio de Shiruna — tests 24/24`.
- BL-008 paso 5/5 cerrado: review riesgo BAJO + docs/cierre. Suites gn-topbar + gn-kit-icons + ai-memory 37/37 en verde.
- BL-009 (Suite completa en verde) entra como primera de READY (ALTO); BL-002 queda detrás.
- Orden v4 (nunca esperar): cerrada. Commit `orden: ciclo continuo v4 — nunca esperar — tests 1205/1248 (42 viejas → BL-009)`.
- Orden v5 (candado sin rm): en ejecución.

Historial de S-1..S-5: S-1..S-3 preparados por Shiruvana y ejecutados por Pablo desde C:\shiruna\gw2-factory-dev; S-4 ejecutado por mi madre con el Centro de mando 3.1.0; S-5 con QwenPaw 2.3.0.post1 y Reflection Beam 1.0 vía Kilo (con cuenta), pruebas 1–3 superadas, F1 cerrada.
