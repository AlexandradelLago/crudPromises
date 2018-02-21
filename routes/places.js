var express = require('express');
var router = express.Router();
var Place = require ("../models/Place.js")

/* GET users listing. */
//Listo todos los Places
router.get('/', function(req, res, next) {
  Place.find()
    .then(respuesta =>  res.render("index",{places:respuesta}))
    .catch(err => res.render("error"));
});

//Renderiza la pagina del formulario
router.get('/new', function(req, res, next) {
  res.render("newPlace")
});
//Leer el formulario
router.post('/new', function(req,res,next){
  console.log("entrando a mi post")
  console.log("8===========D ----------- ({})")
  var location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };
  var form = new Place ({
    name: req.body.name,
    location: location
  })

  form.save()
    .then(()=> console.log("conseguido!!!"))
    .catch(() =>console.log("la has cagao hermano"))
});

router.get(':id', function(req,res,next){
  Place.findById (req.params.id)
    .then(pennywise => res.render("singlePlace",{singlePlace:pennywise}))
    .catch(err => res.render("error", {err:err}));
});

router.post('/new', function(req, res, next) {
  res.render("index")
});
router.post('/', function(req, res, next) {
  res.render("index")
});


module.exports = router;
