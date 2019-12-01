const express = require('express');
const router = express.Router();
const https = require('https');

// cambiar nombre 
const responseMapping = require('../helpers/items/responseMapping.js');

/* GET items listing. */
router.get('/items', (req, res, next) => {
    let limit = 40; // se puede sacar si usamos un paginador
    let query = req.query;
    query = query.q;

    let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=' + limit;
   
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

router.get('/items/:id', function(req, res, next) {
    // json
  res.json({ });
});



module.exports = router;
