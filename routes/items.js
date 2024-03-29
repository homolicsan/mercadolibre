import express from 'express';
import http from 'http';
import pug from 'pug';

// import serverSideRendering from '../helpers/server-side-rendering.jsx';

const router = express.Router();
const jsFunctionString = pug.renderFile('./views/items-ssr.pug', {name: "fancyTemplateFun"});
const htmlHeader = pug.renderFile('./views/modules/head.pug', {name: "fancyTemplateFun"});

/* GET items listing. */
router.get('/', function(req, res, next) {
  
  let build_static = req.session.build_static;
  req.session.build_static = '1';

  res.render('items', { build_static: build_static });
});

/* GET items listing. */
router.get('/ssr', function(req, res, next) {

  let timeout = 6000;  
  let query = req.query;
  query = query.q;

  let finished = false;

  let url = 'http://localhost:3000/api/items?q=' + query;

  http.get(url, (resp) => {
    let data = '';

    // A chunk of data hasbeen recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        finished = true;
       // res.write( serverSideRendering( data) );

       // TODO no va tiene que ser sync
      setTimeout(()=>{
        res.end('</html>');
      }, 2000)
      
    });

    }).on("error", (err) => {
       
    });

  res.write('<head>');
  res.write(htmlHeader);
  res.write('</head>');

  res.write('<body>');

  res.write('hola <br>');


  res.write('como estas 2 <br>');
  res.write(jsFunctionString);
  //const a = pug.renderFile('items2.pug', { title: 'Express' });

  setTimeout( () => {
    res.write('como estas 3<br>');
    res.write('');

  }, 2000);

/*
  setTimeout( () => {

    if (!finished ) {

      //res.write('<script>ML.data = </script>'

      let a = "hola"

      res.write(`
        <script>

          // emitir evento indicando que se produjo timeout
        </script>
      `);

      res.end('</html>');
    }

  }, timeout);


*/
  
  // res.render('items', { });
});

// Detail como chunk
router.get('/:id', function(req, res, next) {

  let build_static = req.session.build_static;
  req.session.build_static = '1';

  let id = req.params.id
  let url = 'http://localhost:3000/api/items/' + id;

  res.write(`
    <!DOCTYPE html>
      <html lang="es-AR">
        <head>
  `);
  res.write(pug.renderFile('./views/detail_head.pug', {build_static: build_static}));

  http.get(url, (resp) => {
    let data = '';
    // A chunk of data hasbeen recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      data = JSON.parse(data);

      res.write(`
        <title>${data.item.title}</title>
        <meta name='description' content='Mercadolibre descripcion, keyword1 keyword2 keyword3' />
      </head>
      <body>`)

      res.write(pug.renderFile('./views/detail_body.pug', data));
      res.end(`
        </body>
      </html>`);

    });

    }).on("error", (err) => {
      res.end(`
        </body>
      </html>`);
    });

});

export default router;
