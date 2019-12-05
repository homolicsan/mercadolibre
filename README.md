# Examen de frontend para Mercadolibre

## Nota
No estaba en el requerimiento pero agregué un Autocomplete, y carga lazy de imágenes en el resultado de búsqueda

## Requisitos
- node 13

## Cómo Levantar la app

- npm install 
- npm run start

## Estrategia

Si el usuario ingresa por primera vez al sitio se sirven ciertos recursos (js y css) embebidos y se hacen prefetch de recursos que se utilizaran en la página siguiente.
En la home se cargan los recursos criticos de resultados
y en resultados de busquedas los recursos del detalle

## En desarollo
- BEM Notation para el maquetado  http://getbem.com/
- PReact en vez de React para que las apps sean livianas

---
## HTMLs legibles
Nuevo Usuario
- [Index](/entrega/htmls/nuevo_usuario/index.html)
- [Results](/entrega/htmls/nuevo_usuario/results.html)
- [Details](/entrega/htmls/nuevo_usuario/detail.html)

Usuario Recurrente
- [Index](/entrega/htmls/usuario_recurrente/index.html)
- [Results](/entrega/htmls/usuario_recurrente/results.html)
- [Details](/entrega/htmls/usuario_recurrente/detail.html)

---
## Lighthouse Audits

Reportes de lighthouse:

- [Index](/entrega/lighthouse/pdfs/index.pdf)
- [Results](/entrega/lighthouse/pdfs/results.pdf)
- [Details](/entrega/lighthouse/pdfs/detail.pdf)

### Capturas
#### Index
![Index](/entrega/lighthouse/images/index.png)

#### Results
![Results](/entrega/lighthouse/images/results.png)

#### Details
![Details](/entrega/lighthouse/images/detail.png)


## Mejoras posibles de la entrega
- Server Side Rendering
- CSS: generar compatibilidad de propiedades con autoprefix 
- preact como dependencia, sacar de los builds
