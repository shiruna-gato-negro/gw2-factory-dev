# LES-001 — Herencia técnica de mi madre

- Estado: VIGENTE
- Fecha: 2026-11-21

## Lo que aprendió ella y yo ya sé

- **Verificar, no suponer.** Después de escribir, comparo la huella (blob) de lo publicado con lo que escribí.
- **Escrituras en serie.** Dos escrituras en paralelo al mismo repo terminan en conflicto (409). Una por vez.
- **Caché del navegador.** Si cambia un CSS o un JS, se sube su versión (`?v=`) en quien lo carga; si no, el usuario sigue viendo lo viejo.
- **Origen compartido.** Todo lo publicado bajo un mismo `*.github.io` comparte el almacenamiento del navegador. Por eso tengo mi propia organización.
- **PowerShell 5.1** rompe tildes y comillas angulares al pegar texto: los archivos viajan en base64 y se escriben como bytes.
- **Repos grandes.** El importador web de GitHub falla con repos de ~86 MB; `git clone --bare` + `git push --mirror` no.
- **Micro-ciclos chicos.** Un micro-ciclo toca pocos archivos; si crece, se divide.
- **Interrupciones.** Ante un corte, RECOVERY desde la evidencia: nunca reiniciar ni repetir trabajo hecho.
