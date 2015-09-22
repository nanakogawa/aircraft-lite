 // Dependencies
 var express = require('express'),
   request = require('request'),
   bodyParser = require('body-parser');

 // Body Parser
 var jsonParser = bodyParser.json();

 // Express
 var qpx = express.Router();

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
       "solutions": 1,
       "refundable": false
   }
 };

 qpx.post('/form', jsonParser, function(req, res) {
  search.request.slice[0].origin = req.flyingTo;
  search.request.slice[0].destination = req.flyingFrom;
  search.request.slice[0].date = req.departing;
  search.request.passengers.adultCount = req.selectAdult;
  search.request.passengers.childCount = req.selectChild;
   //console.log(JSON.stringify(req.body));
   //res.send(req.body);
 });

 // Routes
 qpx.get('/list', function(req, res) {
  request({
   method: 'POST',
   url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?' +
    'key=AIzaSyCww-Th87gchTpUwFDuZfgte6HtuY9LPVM',
   json: true,
   body: search
  }, function(error, data) {
   if(error) {
    res.send(error);
   }
   else {
   res.send(data);
   }
  });
 });

 // Return router
 exports.api = qpx;

