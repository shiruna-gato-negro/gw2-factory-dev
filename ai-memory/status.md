# Estado de Shiruna

Estado: EN CURSO
Tarea actual: BL-009 paso 2/5 — reproducir CRLF (cerrado) → próximo paso 3/5
Motivo: CRLF no era la única causa: 450 archivos convertidos CRLF→LF + .gitattributes (eol=lf); suite 1215/1248 (32 fallas viejas restantes). Próximo: arreglar o cuarentenar las 32.
Etapa actual: development
Inicio: 2026-11-23 16:47Z
Última actualización: 2026-11-23 17:06Z
Próxima acción: BL-009 paso 3/5 — arreglar o cuarentenar las 32 fallas restantes (skip con motivo + BL propio), empezando por size-budget + universo + bld-* + legendary-* + ga-loader + legendary-fetch.

Archivos:
- ai-memory/status.md
- ai-memory/backlog.md

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- BL-008 cerrada: review riesgo BAJO; suites gn-topbar + gn-kit-icons + ai-memory 37/37.
- Suite completa: 1215/1248 (32 viejas → BL-009) tras conversión CRLF→LF + .gitattributes eol=lf; 33 no-pasan = 32 fallas + 1 skip de entorno (dev-pages rsync en Windows, preexistente).
- BL-009 (Suite completa en verde) en curso, paso 2/5 cerrado (CRLF no era la única causa); antes de BL-002.
- Orden v4 cerrada: reglas 1-6 en AGENTS.md (casa).
- Orden v5 cerrada: lock protocol v5 en AGENTS.md y job 8f75ac22; nueva línea sobre no escribir la abreviatura de borrar.

## Resumen de la sesión

- Orden de Pablo (ciclo chico): favicon propio de Shiruna — creado assets/brand/shiruna.svg, index.html apunta al nuevo favicon (logo de cabecera sigue siendo gato-negro.svg); test index-identity adaptado (no borrado). Commit `orden: favicon propio de Shiruna — tests 24/24`.
- BL-008 paso 5/5 cerrado: review riesgo BAJO + docs/cierre. Suites gn-topbar + gn-kit-icons + ai-memory 37/37 en verde.
- Orden v4 (nunca esperar): cerrada. Commit `orden: ciclo continuo v4 — nunca esperar — tests 1205/1248 (42 viejas → BL-009)`.
- Orden v5 (candado sin rm): cerrada. AGENTS.md + job 8f75ac22 actualizados; BL-009 aclarado.
- BL-009 paso 2/5 cerrado: CRLF no era la única causa. 450 archivos convertidos CRLF→LF + .gitattributes (eol=lf, autocrlf false local). Suite 1215/1248 (32 fallas viejas restantes). Próximo paso 3: arreglar o cuarentenar las 32 (skip con motivo + BL propio).

Historial de S-1..S-5: S-1..S-3 preparados por Shiruvana y ejecutados por Pablo desde C:\shiruna\gw2-factory-dev; S-4 ejecutado por mi madre con el Centro de mando 3.1.0; S-5 con QwenPaw 2.3.0.post1 y Reflection Beam 1.0 vía Kilo (con cuenta), pruebas 1–3 superadas, F1 cerrada.
