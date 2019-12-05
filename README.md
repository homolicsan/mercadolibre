# Examen de frontend para Mercadolibre

## Nota
No estaba en el requerimiento pero se agrego un Autocomplete 

## Requisitos
- node 13

## Cómo Levantar la app

`` 
  npm install \n
  npm run start
``
## Estrategia

- Los estáticos se cachean y gzipean
Y en la home se hace una prefech de los css y js del resultado de busqueda

- En resultados de busqueda se hace un prefech los css y js del detalle del producto

## Se utilizo
- BEM Notation para el maquetado  http://getbem.com/

## Mejoras posible de la entrega
- CSS: generar compatibilidad de propiedades con autoprefix 
- build por contenido
- Server Side Rendering
- preact como dependencia, sacar del build

===

## Lighthouse Audits

- reportes de lighthouse pdf

[Index](/entrega/lighthouse/pdfs/index.png)

[Results](/entrega/lighthouse/pdfs/results.png)

[Details](/entrega/lighthouse/pdfs/details.pdf)

### Capturas
#### Index
![Index](/entrega/lighthouse/images/index.png)

#### Results
![Results](/entrega/lighthouse/images/results.png)

#### Details
![Details](/entrega/lighthouse/images/detail.png)
