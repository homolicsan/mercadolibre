const express = require('express');
const router = express.Router();

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.render('items', { });
});

router.get('/:id', function(req, res, next) {
  res.render('itemDetail', {  });
});

module.exports = router;
