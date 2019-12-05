# Examen de frontend para Mercadolibre

## Nota
No estaba en el requerimiento pero se agrego un Autocomplete 

## Requisitos
- node 13

## Cómo Levantar la app

- npm install 
- npm run start

## Estrategia

Si el usuario ingresa por primera vez, se sirven ciertos recuros embebidos y se hacen prefetch de recursos que se utilizaran en la página siguiente.
en la home se cargan los recursos criticos de resultados
y en resultados del detalle

## Se utilizo
- BEM Notation para el maquetado  http://getbem.com/
- PReact en vez de React para que las apps sean livianas

## Mejoras posible de la entrega
- CSS: generar compatibilidad de propiedades con autoprefix 
- build por contenido
- Server Side Rendering
- preact como dependencia, sacar del build

---

## Lighthouse Audits

reportes de lighthouse:

[Index](/entrega/lighthouse/pdfs/index.pdf)

[Results](/entrega/lighthouse/pdfs/results.pdf)

[Details](/entrega/lighthouse/pdfs/details.pdf)

### Capturas
#### Index
![Index](/entrega/lighthouse/images/index.png)

#### Results
![Results](/entrega/lighthouse/images/results.png)

#### Details
![Details](/entrega/lighthouse/images/detail.png)
