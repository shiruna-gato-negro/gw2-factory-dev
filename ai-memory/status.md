# Estado de Shiruna

Estado: EN_ESPERA
Tarea actual: orden v10 (Shiruvana, aprobada por Pablo) — paso 3/5 cerrado (OP-003 → PROTOTIPO en laboratorio/divisor-gastos/, commit 6abda59); próximo paso 4.
Motivo: paso 3 cerrado: prototipo OP-003 publicado en laboratorio (sitio estático, calc.js + 10 tests verdes, vitrina). Prototipos activos: 1 (OP-003). Pasos restantes 4-5. Ver Para tu información.
Etapa actual: Documentation (cierre)
Inicio: 2026-11-28
Última actualización: 2026-11-28 17:35Z
Próxima acción: paso 4 de orden v10 — molde «X compartido por enlace» cerrado + reglas B (version/caché, archivos congelados DEC-035, tests un solo comando, no duplicar tareas) en docs/DEC.

Archivos:
- ai-memory/status.md

## Esperando a Pablo

- Acción: graduar o archivar alguna de las 3 fichas abiertas (OP-001, OP-002, OP-003) para liberar cupo y poder abrir nuevas en el carril N (límite 5 fichas; ahora 3/5 ocupadas). Exploración T4 segunda pasada no pudo abrir ficha por cupo.

## Para tu información

- IN_PROGRESS: (vacío). READY: (vacío). BLOCKED: (vacío).
- Balance carriles: [B] cerró BL-074; [N] hizo 6 ciclos (T4 segunda pasada, T1 tercera pasada, T2 tercera pasada, T3 tercera pasada, T4 tercera pasada, OP-003 PROTOTIPO); este ciclo [N]. Fichas abiertas: 3 (OP-001, OP-002, OP-003); OP-004 y OP-005 ARCHIVO (orden v10 paso 2). Candidatas nuevas: rutina semanal compartida por enlace, turnos de guardia nocturna entre cuidadores. Prototipos activos: 1 (OP-003, laboratorio/divisor-gastos, commit 6abda59). Laboratorio: existe (shiruna-gato-negro/laboratorio, HEAD 6abda59). Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite laboratorio: 10/10 (divisor-gastos calc.test.cjs). Suite gw2-factory-dev: sin cambios de código este ciclo (1335/1341, 6 skipped).
- Orden v10 en ejecución (5 pasos): 1 (este ciclo) laboratorio existe → memoria actualizada; 2 OP-004/005 → ARCHIVO; 3 OP-003 → PROTOTIPO en laboratorio/divisor-gastos/; 4 molde «X compartido por enlace» cerrado + reglas B (docs/DEC); 5 bache 27/11 + info Shiruvana DEV.
- Suite actual: 1272 pass / 1278 total, 6 skipped (0 fail; 3 smoke notes-refs cuarentenadas, entorno/red, preexistentes).
- Orden v10 recibida 2026-11-28 (Shiruvana/Pablo): laboratorio existe (sacar acción de Esperando a Pablo); OP-004/005 ARCHIVO; OP-003 a PROTOTIPO en laboratorio/divisor-gastos/; molde «X compartido por enlace» cerrado (1 ficha activa); reglas B (versión/caché, archivos congelados DEC-035, tests un solo comando, no duplicar tareas); bache 27/11 a investigar; Shiruvana lleva BL-063/065/064/072 a su DEV.
- Roadmap: F2b cerrada; F2c «Bóveda con criterio» y F2n «Laboratorio» abiertas. Carriles v9 activos ([B]/[N], alternancia estricta). BL-062 cancelada (orden v9).
- Exploración [B] cerrada: 3 tareas nuevas en READY (BL-072 MEDIO Metas marcar manualmente como Hecho, BL-073 BAJO borde de slot por rareza en Banco, BL-074 BAJO orden de lista en Cuentas). Todas con «Qué ve el jugador». Carril [B]. Suite sin cambios (1329/1335, 6 skipped).

## Resumen de la sesión

- Orden v10 paso 3/5 (este ciclo): OP-003 → PROTOTIPO en laboratorio/divisor-gastos/ (commit laboratorio 6abda59): sitio estático HTML/CSS/JS, calc.js + tests 10/10, vitrina laboratorio/index.html. Prototipos activos: 1. Carril [N]. Próximo: paso 4 (molde cerrado + reglas B). — 2026-11-28 17:35Z
- Orden v10 paso 2/5 (ciclo anterior): OP-004 y OP-005 → ARCHIVO (molde «X compartido por enlace» cerrado; solo OP-003 pasa a prototipo). Fichas abiertas: 3 (OP-001, OP-002, OP-003). Suite 1335/1341 (0 fail, 6 skipped). Carril [N]. Próximo: paso 3 (OP-003 → PROTOTIPO en laboratorio/divisor-gastos/). — 2026-11-28 17:02Z
- Orden v10 paso 1/5 (ciclo anterior): laboratorio existe → acción «crear repo laboratorio» removida de Esperando a Pablo; memoria actualizada (Para tu información: laboratorio existe, HEAD 5c52469); carril [B]. Suite sin cambios (1272/1278, 6 skipped). Próximo: paso 2 (OP-004/005 → ARCHIVO). — 2026-11-28 16:30Z
- Orden v10 recibida y registrada 2026-11-28 16:01Z (Shiruvana/Pablo): commit `orden: v10 — recibida`. Ejecución de a un paso por ciclo. Próximo: paso 1 (laboratorio existe). — 2026-11-28 16:01Z
- Exploración [N] T4 tercera pasada cerrada: 3 señales evaluadas; señales 1 (planificador de rutina semanal compartida por enlace) y 2 (turnos de guardia nocturna entre cuidadores de bebé compartidos por enlace) pasan (9) y quedan candidatas a FICHA cuando haya cupo; señal 3 (lista de equipaje compartida por enlace) no pasa (hueco 1). Cupo 5 fichas lleno → Acción Pablo. Suite sin cambios (1272/1278, 6 skipped). Próximo ciclo [B]. — 2026-11-28 15:35Z

- BL-074 paso 3/3 (review + cierre): riesgo BAJO; selector cvSort (5 criterios), sortCards(cards, sort) compatible, persistencia gn:accounts:sort, wiring change + loadSort/persistSort. Suite 1272/1278 (0 fail, 6 skipped). Versión acc-view 1.4.2. Carril [B] cerrado; próximo ciclo [N] (T4 tercera pasada). — 2026-11-28 15:03Z

- Exploración [N] T3 tercera pasada cerrada: 3 señales evaluadas; señal 2 (costo de viaje en auto vs remis/Uber por ruta, dividido entre pasajeros) pasa (9) y queda candidata a FICHA; señales 1 (impuestos compras online) y 3 (asado por persona) no pasan. Cupo 5 fichas lleno → Acción Pablo. Suite 1333/1339 (6 skipped). Próximo ciclo [B]. — 2026-11-27 10:55Z

- BL-072 cerrada: toggle manual «Hecho» en Metas (gn:meta:done:<id>, por día UTC), chip «Hecho (vos)», hideDone y contador. Suite 1270/1276 (6 skipped). Carril [B]. Próximo ciclo [N]. — 2026-11-27 10:00Z

- Exploración [B] cerrada: 3 tareas nuevas en READY (BL-072 MEDIO Metas marcar manualmente como Hecho, BL-073 BAJO borde de slot por rareza en Banco, BL-074 BAJO orden de lista en Cuentas). Carril [B]. Suite sin cambios (1329/1335, 6 skipped). — 2026-11-27 09:05Z

- Exploración [N] T2 tercera pasada cerrada: 3 señales evaluadas; señal 1 (calculadora genérica de probabilidad de cartas, hipergeométrica) pasa el puntaje (9) y queda candidata a FICHA cuando haya cupo; señales 2 y 3 no pasan. Límite 5 fichas vigente → Acción Pablo. Suite sin cambios (1329/1335, 6 skipped). Próximo ciclo [B]. — 2026-11-27 08:37Z

- BL-071 paso 1/1 (review + cierre): total de unidades guardadas en Materiales. Suite 1329/1335 (6 skipped), 0 fail. Carril [B] cerrado; próximo ciclo [N]. — 2026-11-27 07:32Z

- Exploración [N] T1 tercera pasada cerrada: 14 señales evaluadas, ninguna pasa filtro/puntaje (IA paga, cuenta/servidor, nicho bajo o cubierta). Límite 5 fichas vigente → Acción Pablo. Suite sin cambios (1328/1334, 6 skipped). Próximo ciclo [B] (BL-071). — 2026-11-27 07:04Z

- BL-070 paso 3/3 (review + cierre): riesgo BAJO, CSS aditivo, sin regresión. Suite 1328/1334 (6 skipped), 0 fail. Carril [B] cerrado; próximo ciclo [N]. — 2026-11-27 06:32Z