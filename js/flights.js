 function searchFlight() {
  event.preventDefault();
 	var flightCards = document.getElementById('flight-cards');
 	flightCards.style.display = 'block';
 }

 function setRoute(flight, cardNumber) {
  var airToAir = document.getElementsByClassName('air-to-air');
  var origin = flight.origin;
  var destination = flight.destination;
  airToAir[cardNumber].textContent = origin + ' to ' + destination;
 }

 function setCarrier(flight, cardNumber) {
  var airCarrier = document.getElementsByClassName('air-carrier');
  var carrierName = flight.carrier;
  var airObj = {VX: 'Virgin America', UA: 'United Airlines'};
  var Obj = new RegExp(Object.keys(airObj).join('|'),'gi');
  airCarrier[cardNumber].textContent = carrierName.replace(Obj, function(matched) {
   return airObj[matched];
  });
 }

 function setPrice(flight, cardNumber) {
  var airPrice = document.getElementsByClassName('price');
  var price = flight.saleFareTotal.substring(3,6);
  var header = document.createElement('h1');
  airPrice[cardNumber].appendChild(header);
  airPrice[cardNumber].textContent ='$' + price;
  airPrice[cardNumber].style.margin = ' 0 0 20px 0';
 }

 function setTime(flight, cardNumber) {
  var airTime = document.getElementsByClassName('air-time');
  var departureTime = flight.departureTime;
  var arrivalTime = flight.arrivalTime;
  airTime[cardNumber].textContent = departureTime.substring(11,16)+ ' - ' + arrivalTime.substring(11,16);
 }

 function searchData (event) {
  event.preventDefault();
  var submitRequest = new XMLHttpRequest();
  submitRequest.open('POST','/qpx/form',true);
  submitRequest.setRequestHeader('content-type', 'application/json');
  submitRequest.send(formSubmit());
  submitRequest.addEventListener('load',function () {

   if((submitRequest.status === 200) || (submitRequest.status === 304)) {

    var flights = JSON.parse(submitRequest.responseText);
    var flightCard = document.getElementsByClassName('flight-card');

    for(var c = 0; c < flightCard.length; c++) {

     var trip = flights.body.trips.tripOption[c].pricing[0];
     console.log('$' + trip.saleFareTotal.substring(3,6));

     var leg = flights.body.trips.tripOption[c].slice[0].segment[0].leg[0];
     setRoute(leg, c);

     var segment = flights.body.trips.tripOption[c].slice[0].segment[0].flight;
     setCarrier(segment, c);

     var pricing = flights.body.trips.tripOPtion[c].pricing[0];
     setPrice(pricing, c);

     setTime(leg, c);
    }
   }
  });
 }

 function formSubmit() {
  var form = document.getElementById('search-form');
  var elements = form.elements;
  var formData = new Object();
  formData.flightWay = elements.flightWay.value;
  formData.flightClass = elements.flightClass.value;
  formData.selectAdult = elements.selectAdult.value;
  formData.selectChild = elements.selectChild.value;
  formData.flyingFrom = elements.flyingFrom.value;
  formData.flyingTo = elements.flyingTo.value;
  formData.departing = elements.departing.value;
  formData.returning = elements.returning.value;
  return JSON.stringify(formData);
 }

 var searchButton = document.getElementById('flight-search');

 searchButton.addEventListener('click', searchFlight, false);
 searchButton.addEventListener('click', searchData, false);
