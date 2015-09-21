 // Dependencies
 var express = require('express'),
     request = require('request');

 // Express
 var google = express.Router();

 // Object
 var search = {
   "request": {

     "slice": [
      {
       "origin": "LAX",
       "destination": "CPH",
       "date": "2015-11-11"
      }
     ],
     "passengers":
      {
       "adultCount": 1,
       "infantInLapCount": 0,
       "infantInSeatCount": 0,
       "childCount": 0,
       "seniorCount": 0
     },
       "solutions": 20,
       "refundable": false
   }
 };

 // Routes
 google.get('/list', function(req, res) {
  request({
   method: 'POST',
   url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?' +
    'key=AIzaSyCww-Th87gchTpUwFDuZfgte6HtuY9LPVM',
   json: true,
   body: search
  }, function(error, data) {
   res.send(data);
  });
 });

 // Return router
 exports.api = google;

