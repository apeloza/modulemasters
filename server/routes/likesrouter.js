var express = require('express');
var router = express.Router();

//Variables are initialized to store likes
var hannah = 0;
var glyde = 0;
var tracey = 0;
var anthony = 0;

//The server's like counters are updated
router.post('/hannah', function(req,res) {
  hannah++;
  res.send({ "likes": hannah });
});

router.post('/glyde', function(req,res) {
  glyde++;
  res.send({ "likes": glyde });
});

router.post('/tracey', function(req,res) {
  tracey++;
  res.send({ "likes": tracey });
});

router.post('/anthony', function(req,res) {
  anthony++;
  res.send({ "likes": anthony });
});

module.exports = router;
