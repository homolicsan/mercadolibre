# Examen de frontend para Mercadolibre

. No estaba en el requerimiento pero se agrego un Autocomplete 
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


