 // Dependencies
 var request = require('request'),
     express = require('express'),
     path = require('path'),
     winston = require('winston'),
     bodyParser = require('body-parser'),
     google = require('./google.js');

 // Express
 var app = express();

 // Body Parse
 var jsonParser = bodyParser.json();

 // Winston
 var transport = new winston.transports.Console({level: 'debug', colorize: true});
 var logger = new winston.Logger({ transports: [transport] });

 // Routes
 app.use(bodyParser.urlencoded({ extended: false }));

 app.use(express.static(__dirname + '/../css'));
 app.use(express.static(__dirname + '/../fonts'));
 app.use(express.static(__dirname + '/../images'));
 app.use(express.static(__dirname + '/../js'));
 app.use('/google', google.api);

 app.get('/', function(req, res) {
 	res.sendFile(path.join(__dirname + '/../html/index.html'));
 });

 app.get('destinations.json', function(req, res) {
  res.sendFile(path.join(__dirname + '/destinations.json'));
 });

 app.post('/form', jsonParser, function(req, res) {
  console.log(JSON.stringify(req.body));
  res.send('Form Data Submitted');
 });

 // Start Server
 app.listen(1337);
 console.log('1337 is the magic port!');