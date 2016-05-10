var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/bios/modulemasters');

app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));

app.get('/bios', function(req, res){
res.send(bios);
});

app.get('/*', function(req, res) {
  console.log('request params', req.params);
var file = req.params[0] || 'views/index.html'; // Returns requested file. If no file requested, returns index.html.
res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log("Server is ready on port:" + app.get('port'));
});
