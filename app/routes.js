// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for home
router.get('/', function(req, res) {
  res.render('pages/home');
});

router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/projects', function(req, res) {
  res.render('pages/projects');
});
