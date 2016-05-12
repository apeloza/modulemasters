
//Required files loaded in
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/bios/modulemasters');

//Variables are initialized to store likes
var hannah = 0;
var glyde = 0;
var tracey = 0;
var anthony = 0;


//The server listens on port 3000
app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));

//The server fetches the bios and related data
app.get('/bios', function(req, res){
res.send(bios);
});

//The server's like counters are updated
app.post('/likes/hannah', function(req,res) {
  hannah++;
  res.send({ "likes": hannah });
});

app.post('/likes/glyde', function(req,res) {
  glyde++;
  res.send({ "likes": glyde });
});

app.post('/likes/tracey', function(req,res) {
  tracey++;
  res.send({ "likes": tracey });
});

app.post('/likes/anthony', function(req,res) {
  anthony++;
  res.send({ "likes": anthony });
});

//The html file and related files are returned
app.get('/*', function(req, res) {
  console.log('request params', req.params);
var file = req.params[0] || 'views/index.html'; // Returns requested file. If no file requested, returns index.html.
res.sendFile(path.join(__dirname, "./public", file));
});


app.listen(app.get('port'), function() {
  console.log("Server is ready on port:" + app.get('port'));
});
