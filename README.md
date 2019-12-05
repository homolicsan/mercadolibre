# Examen de frontend para Mercadolibre

No estaba en el requerimiento pero se agrego un Autocomplete 
con una pegada a
https://http2.mlstatic.com/resources/sites/MLA/autosuggest?showFilters=true&limit=6&api_version=2&q=ce


# Requisitos
- node 13

# Levantar la app

´´´ 
  npm install
  npm run start
´´´
# Estrategia

- Los estáticos se cachean y gzipean
Y en la home se hace una prefech de los css y js del resultado de busqueda

- En resultados de busqueda se hace un prefech los css y js del detalle del producto

# Se utilizo
- BEM Notation para el maquetado  http://getbem.com/

# Mejoras sobre pa entrega
- CSS: generar compatibilidad de propiedades con autoprefix 
- build por contenido
- Server Side Rendering
- preact como dependencia, sacar del build
