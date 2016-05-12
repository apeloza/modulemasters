
//Required files loaded in
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/bios/modulemasters');
var likes = require('./routes/likesrouter');

//The server listens on port 3000
app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));
app.use('/likes', likes);

//The server fetches the bios and related data
app.get('/bios', function(req, res){
res.send(bios);
});

//The html file and related files are returned
app.get('/*', function(req, res) {
  console.log('request params', req.params);
var file = req.params[0] || 'views/index.html'; 
res.sendFile(path.join(__dirname, "./public", file));
});


app.listen(app.get('port'), function() {
  console.log("Server is ready on port:" + app.get('port'));
});
