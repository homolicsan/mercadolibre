import express from 'express';
import http from 'http';
import pug from 'pug';

// import serverSideRendering from '../helpers/server-side-rendering.jsx';

const router = express.Router();

const jsFunctionString = pug.renderFile('./views/items-ssr.pug', {name: "fancyTemplateFun"});

const htmlHeader = pug.renderFile('./views/modules/head.pug', {name: "fancyTemplateFun"});

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.render('items', {  });
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

  let id = req.params.id
  let url = 'http://localhost:3000/api/items/' + id;
  
  res.write('<head>');
  res.write('<meta charset="utf-8">');
  res.write('</head>');
  res.write('<body>');
  res.write('hola <br>');

  res.write(pug.renderFile('./views/detail_header.pug'));

  res.write('como estas 2 <br>');

  http.get(url, (resp) => {
    let data = '';
    // A chunk of data hasbeen recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {

      res.write(pug.renderFile('./views/detail_body.pug', JSON.parse(data)));
      res.end('</html>');

    });

    }).on("error", (err) => {

      res.end('</html>');
       
    });


});

export default router;
