 // Dependencies
 var request = require('request'),
     express = require('express'),
     path = require('path');

 // Express
 var app = express();

 // Routes
 app.use(express.static(__dirname + '/../css'));
 app.use(express.static(__dirname + '/../fonts'));
 app.use(express.static(__dirname + '/../images'));
 app.use('/api', require('./api.js'));

 app.get('/', function(req, res) {
 	res.sendFile(path.join(__dirname + '/../html/index.html'));
 });

 // Start Server
 app.listen(1337);
 console.log('1337 is the magic port!');