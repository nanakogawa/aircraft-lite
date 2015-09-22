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
       "childCount": 0
     },
       "solutions": 1,
       "refundable": false
   }
 };

 qpx.post('/form', jsonParser, function(req, res) {
  search.request.slice[0].origin = req.body.flyingFrom;
  search.request.slice[0].destination = req.body.flyingTo;
  search.request.slice[0].date = req.body.departing;
  request({
   method: 'POST',
   url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?' +
    'key=AIzaSyAlqfXUkrgIw6JvIrTtezz3zozHPJMwscc',
   json: true,
   body: search
  }, function(error, data) {
   if(error) {
    console.log('error was found');
    res.send(error);
   }
   else {
   res.send(data);
   }
  });
 });

 // Return router
 exports.api = qpx;

