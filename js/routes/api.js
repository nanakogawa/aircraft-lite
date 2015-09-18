 // Dependencies
 var express = require('express'),
     path = require('path');

 // Express
 var router = express.Router();

 // Routes
 router.use('/', function(req, res) {
  res.send('My API');
 });

 router.get('/example1', function(req, res) {;
  res.send('API is working');
 });

 // Return router
 module.exports = router;