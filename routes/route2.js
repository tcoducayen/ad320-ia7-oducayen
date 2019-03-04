var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

/* GET route2 listing. */
router.get('/route2', function(req, res, next) {
  res.render('index', { title: 'Route2' });
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {

})

/*Function for a specific color name*/
router.get("/:color-name", (req, res, next) => {
  var colorToFind = req.params.color-name;
  colors.findColor(colortoFind,(error,result,fields) => {
    if (error) {
      res.status(500).send(error);
    }
    /*If all*/
    if (colorToFind == 'all') {
      res.send(JSON.stringify(colors))
    }
    /*If color*/
    res.send(result);
  })
})

module.exports = router;
