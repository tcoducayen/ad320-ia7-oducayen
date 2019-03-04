var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

/* GET route1 listing. */
router.get('/route1', function(req, res, next) {
  res.render('route1', { title: 'Route1' });
});

router.get('/', function(req, res, next) {
  res.render('route1', { title: 'Route1' });
});

module.exports = router;
