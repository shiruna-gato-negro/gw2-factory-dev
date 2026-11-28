# Estado de Shiruna

Estado: EN_CURSO
Tarea actual: BL-074 paso 1/3 — Cuentas: permitir cambiar el criterio de orden de la lista (plan)
Motivo: Tarea [B] BAJO tomada de READY. Paso 1 solo plan: alcance, diseño y persistencia; sin tocar código. Carril [B].
Etapa actual: Product → Architecture (plan)
Inicio: 2026-11-28
Última actualización: 2026-11-28 14:05Z
Próxima acción: BL-074 paso 2/3 implementación (selector + sortCards por criterio + persistencia gn:accounts:sort + test).

Archivos:
- ai-memory/status.md
- ai-memory/backlog.md

## Esperando a Pablo

- Acción: crear repo `shiruna-gato-negro/laboratorio` (necesario para el primer PROTOTIPO del carril N). Mientras tanto el carril N avanza con SEÑALES y FICHAS en este repo.
- Acción: graduar o archivar alguna de las 5 fichas abiertas (OP-001..OP-005) para liberar cupo y poder abrir nuevas en el carril N (límite 5 fichas alcanzado). Exploración T4 segunda pasada no pudo abrir ficha por cupo.

## Para tu información

- IN_PROGRESS: (vacío). READY: 1 (BL-074). BLOCKED: (vacío).
- Balance carriles: [B] cerró BL-073; [N] hizo 4 ciclos (T4 segunda pasada, T1 tercera pasada, T2 tercera pasada, T3 tercera pasada); próximo ciclo [B]. Fichas abiertas: 5 (límite). Prototipos activos: 0. Laboratorio: no existe aún (Acción a Pablo). Cuarentenas pendientes: bld-lib ×3, bld-rows, ga-loader (no aplica en este repo), dev-pages rsync; smoke notes-refs ×3 (entorno/red, preexistentes).
- Suite actual: 1333 pass / 1339 total, 6 skipped (3 smoke notes-refs cuarentenadas, entorno/red, preexistentes).
- Roadmap: F2b cerrada; F2c «Bóveda con criterio» y F2n «Laboratorio» abiertas. Carriles v9 activos ([B]/[N], alternancia estricta). BL-062 cancelada (orden v9).
- Exploración [B] cerrada: 3 tareas nuevas en READY (BL-072 MEDIO Metas marcar manualmente como Hecho, BL-073 BAJO borde de slot por rareza en Banco, BL-074 BAJO orden de lista en Cuentas). Todas con «Qué ve el jugador». Carril [B]. Suite sin cambios (1329/1335, 6 skipped).

## Resumen de la sesión

- Exploración [N] T3 tercera pasada cerrada: 3 señales evaluadas; señal 2 (costo de viaje en auto vs remis/Uber por ruta, dividido entre pasajeros) pasa (9) y queda candidata a FICHA; señales 1 (impuestos compras online) y 3 (asado por persona) no pasan. Cupo 5 fichas lleno → Acción Pablo. Suite 1333/1339 (6 skipped). Próximo ciclo [B]. — 2026-11-27 10:55Z

- BL-072 cerrada: toggle manual «Hecho» en Metas (gn:meta:done:<id>, por día UTC), chip «Hecho (vos)», hideDone y contador. Suite 1270/1276 (6 skipped). Carril [B]. Próximo ciclo [N]. — 2026-11-27 10:00Z

- Exploración [B] cerrada: 3 tareas nuevas en READY (BL-072 MEDIO Metas marcar manualmente como Hecho, BL-073 BAJO borde de slot por rareza en Banco, BL-074 BAJO orden de lista en Cuentas). Carril [B]. Suite sin cambios (1329/1335, 6 skipped). — 2026-11-27 09:05Z

- Exploración [N] T2 tercera pasada cerrada: 3 señales evaluadas; señal 1 (calculadora genérica de probabilidad de cartas, hipergeométrica) pasa el puntaje (9) y queda candidata a FICHA cuando haya cupo; señales 2 y 3 no pasan. Límite 5 fichas vigente → Acción Pablo. Suite sin cambios (1329/1335, 6 skipped). Próximo ciclo [B]. — 2026-11-27 08:37Z

- BL-071 paso 1/1 (review + cierre): total de unidades guardadas en Materiales. Suite 1329/1335 (6 skipped), 0 fail. Carril [B] cerrado; próximo ciclo [N]. — 2026-11-27 07:32Z

- Exploración [N] T1 tercera pasada cerrada: 14 señales evaluadas, ninguna pasa filtro/puntaje (IA paga, cuenta/servidor, nicho bajo o cubierta). Límite 5 fichas vigente → Acción Pablo. Suite sin cambios (1328/1334, 6 skipped). Próximo ciclo [B] (BL-071). — 2026-11-27 07:04Z

- BL-070 paso 3/3 (review + cierre): riesgo BAJO, CSS aditivo, sin regresión. Suite 1328/1334 (6 skipped), 0 fail. Carril [B] cerrado; próximo ciclo [N]. — 2026-11-27 06:32Z