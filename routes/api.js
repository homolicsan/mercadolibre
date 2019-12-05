import express from 'express';
import https from 'https';
// TODO cambiar nombre 
import responseMapping from '../helpers/responseMapping.js';
import responseDetailMapping from '../helpers/responseDetailMapping.js';
import getDataAsPromise from '../helpers/getDataAsPromise.js';

const  router = express.Router();

/* GET items listing. */
// TODO usar getDataAsPromise
router.get('/items', (req, res, next) => {
  let query = req.query;
  query = query.q;

  let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;
  
  if (query) {
    https.get(url, (resp) => {
      let data = '';
  
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
          data += chunk;
      });
  
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        res.json( responseMapping(data) );
      });
  
      }).on("error", (err) => {
        // TODO: se podria usar http codes
        res.json({
            error: 'error',
            message: err.message
        });
        console.log("Error: " + err.message);
      });

  }
  else{
    res.json({
      error: 'error',
      message: err.message
    });
  }

});

// TODO: Sacar al controler
router.get('/items/:id', function(req, res, next) {

  let id = req.params.id
  if (id) {
    let url = 'https://api.mercadolibre.com/items/' + id;
    let url_detail = url + '/description' ;
    let item_promise = getDataAsPromise(url);
    let item_detail_promise = getDataAsPromise(url_detail);

    Promise.all([item_promise, item_detail_promise]).then((values)=>{
      res.json( responseDetailMapping(values[0], values[1]) );
    });
  }
  else{
    res.json({
      error: 'error',
      message: err.message
    });
  }
});

// Autocomplete
router.get('/autocomplete', function(req, res, next) {

  let query = req.query;
  query = query.q;

  let url = 'https://http2.mlstatic.com/resources/sites/MLA/autosuggest?showFilters=true&limit=6&api_version=2&q=' + query;

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.json( JSON.parse(data));
    });

    }).on("error", (err) => {
      // TODO: se podria usar http codes
      res.json({
          error: 'error',
          message: err.message
      });
      console.log("Error: " + err.message);
    });
});


export default router;
