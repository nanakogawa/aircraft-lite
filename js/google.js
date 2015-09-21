 // Dependencies
 var express = require('express'),
     request = require('request');

 // Express
 var google = express.Router();

 // Routes
 google.get('/list', function(req, res) {
  req('https://www.googleapis.com/qpxExpress/v1/trips' +
   '?key=AIzaSyCww-Th87gchTpUwFDuZfgte6HtuY9LPVM');
   res(body);
 });

 // Return router
 exports.api = google;

 //module.exports = google;

