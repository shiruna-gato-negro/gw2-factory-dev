# Estado de Shiruna

Estado: EN CURSO
Tarea actual: BL-008 paso 3/5 — estilos de grupos en CSS de index.html y linkIcons() ignora encabezados
Motivo: Paso 3 del ciclo continuo: estilos .gn-tb__group/.gn-tb__group-label agregados en index.html; linkIcons() ignora encabezados (guard + href). tests gn-topbar 20/20, gn-kit-icons 1/1, ai-memory 15/15 en verde.
Etapa actual: Development (BL-008)
Inicio: 2026-11-23 13:31Z
Última actualización: 2026-11-23 15:01Z
Próxima acción: BL-008 paso 4/5 — tests de regresión (5 links, grupos, iconos, teclado).

Archivos:
- ai-memory/status.md
- ai-memory/backlog.md
- index.html
- js/gn-topbar.js

## Esperando a Pablo

— (nada pendiente fuera de mi repo)

## Para tu información

- Paso 2 BL-005: revisé app.js y welcome-panel.js. No hay disparador automático del modal en el código actual: `openKeysModal` solo se invoca desde handlers de clic (`keysMenuBtn`, `data-act="add-key"/"manage-keys"`). La apertura ya es explícita; se agregó test de regresión (paso 4) que verifica `keysModal.hidden === true` al cargar sin key. tests/welcome-view.test.cjs: 12/12.
- Paso 2 BL-008: reorganizado marcado de #gnTbLinks en grupos (Comunidad: Wiki, Foros; Juego: Sitio oficial; Cuenta: Crear API Key; Ayuda: Ayuda de ArenaNet) con encabezados .gn-tb__group; 5 menuitems intactos; tests gn-topbar 20/20, gn-kit-icons 1/1, ai-memory 15/15 en verde. Riesgo BAJO.
- Paso 3 BL-008: estilos .gn-tb__group/.gn-tb__group-label en index.html; linkIcons() ignora encabezados (guard + href). tests gn-topbar 20/20, gn-kit-icons 1/1, ai-memory 15/15 en verde. Riesgo BAJO.
- Paso 3 BL-005: indicador no bloqueante verificado/consolidado — pill «API Key sin cargar» (data-act add-key) en la cabecera y los tres pasos ya presentes en estado sin key. Sin cambio de código. tests/welcome-view.test.cjs: 12/12.
- Ciclo continuo v2: BL-005 sigue IN_PROGRESS (pasos 2, 3 y 4 cerrados en este ciclo).
- Paso 2+3 BL-006: detecta location.protocol === 'file:' en initOnce catch y muestra mensaje claro (file://, servidor local http://, sitio); mantiene mensaje genérico para otros fallos. Test de regresión estático tests/meta-fileprotocol.test.cjs (4/4). Suite meta-view 28/28, ai-memory 15/15. Riesgo BAJO.
- Paso 4 BL-006: review riesgos/regresiones — sin cambios de código. Suites meta-fileprotocol + meta-view + meta-header + meta-events + ai-memory 59/59; modal/pill sin regresión. Fallo preexistente welcome-tags (CSS) no relacionado. Riesgo BAJO.
- Paso 5 BL-006: docs (status/backlog) y cierre. BL-006 movido a DONE. Riesgo BAJO. Suites verdes.
- Paso 2 BL-007: carry free/local en modules() y MODULES_FALLBACK; badge «Con Key» en decorate() cuando no hay key activa (desktop + barra + hoja); CSS .sbr-key; tests 3 nuevos (sin key 8+, con key 0, refresh sin duplicar). sidebar-nav 39/39, ai-memory 15/15. Riesgo BAJO.
- Paso 3 BL-007: tests de regresión consolidados — exactamente 8 módulos marcados sin key, 0 con key, refresh sin duplicados; Inicio y Builds marcados free (no requieren Key). sidebar-nav 39/39, ai-memory 15/15. Riesgo BAJO.
- Paso 4 BL-007: review riesgos/regresiones — sin cambios de código; suites sidebar-nav 54/54, ai-memory 15/15; fallos preexistentes welcome-tags (CSS) y wv-shop-ui no relacionados. Riesgo BAJO.
- Paso 5 BL-007: docs (status/backlog) y cierre. BL-007 movido a DONE. Riesgo BAJO. Suites sidebar-nav 54/54, ai-memory 15/15.

## Resumen de la sesión

- Orden de Shiruvana (vía Pablo): ciclo continuo v2 ejecutada en un solo ciclo.

Historial de S-1..S-5: S-1..S-3 preparados por Shiruvana y ejecutados por Pablo desde C:\shiruna\gw2-factory-dev; S-4 ejecutado por mi madre con el Centro de mando 3.1.0; S-5 con QwenPaw 2.3.0.post1 y Reflection Beam 1.0 vía Kilo (con cuenta), pruebas 1–3 superadas, F1 cerrada.