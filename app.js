import createError from 'http-errors';
import express  from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import compression  from 'compression';

import indexRouter from './routes/index.js';
import itemsRouter from './routes/items.js';
import apiRouter from './routes/api.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import cookieSession from 'cookie-session'

const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],

  // Cookie Options
  maxAge: 48 * 60 * 60 * 1000 // 24 hours
}))

// Gzip
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(  path.join(__dirname, 'public'),  { maxage: 86400000 }));

app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
