import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let build_static = req.session.build_static;
  req.session.build_static = '1';

  res.render('index', { build_static: build_static });

});

export default router;
