 // Dependencies
 var request = require('request'),
     express = require('express'),
     path = require('path'),
     qpx = require('./qpx.js');

 // Express
 var app = express();

 // Routes
 app.use(express.static(__dirname + '/../css'));
 app.use(express.static(__dirname + '/../fonts'));
 app.use(express.static(__dirname + '/../images'));
 app.use(express.static(__dirname + '/../js'));
 app.use('/qpx', qpx.api);

 app.get('/', function(req, res) {
 	res.sendFile(path.join(__dirname + '/../html/index.html'));
 });

 app.get('destinations.json', function(req, res) {
  res.sendFile(path.join(__dirname + '/destinations.json'));
 });

 // Start Server
 app.listen(1337);
 console.log('1337 is the magic port!');