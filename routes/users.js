var express = require('express');
var router = express.Router();
const scrap = require('../utils/scrap')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:search', (req, res) => {
  console.log(req.params.search)
  scrap(`https://www.tutellus.com/buscador/${req.params.search}/cursos`).then(data=>
  res.render('index', { 
      data: data,
      author: data[0].author,
      duration: data[0].duration,
      rating: data[0].rating,
      price: data[0].Price
  }));
})

module.exports = router;
