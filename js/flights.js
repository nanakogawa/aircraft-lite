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

 function setFlightPrice(flight, cardNumber) {
  var airPrice = document.getElementsByClassName('price');
  var price = flight.saleFareTotal.substring(3,6).replace('.', '');
  airPrice[cardNumber].textContent = '$' + price;
  airPrice[cardNumber].style.margin = '20px 0 20px 0';
  airPrice[cardNumber].style.fontSize = '32px';
 }

 function setDepTime(flight, cardNumber) {
  var departureTime = flight.departureTime.substring(11,16);
  var dTime = departureTime.split(':');
  var hour = dTime[0];
  var min = '';

  if (dTime[0] > 12) {
   hour = (dTime[0] - 12) + ':' + dTime[1] + 'pm';
  }
  else if (dTime[0] == 0) {
   hour = 12 + ':' + dTime[1] + 'am';
  }
  else if (hour == 12) {
   min += ':' + dTime[1] + 'pm';
  }
  else {
   min += ':' + dTime[1] + 'am';
  }
  var airDepTime = document.getElementsByClassName('air-dep');
  airDepTime[cardNumber].textContent = hour + min;
 }

 function setAriTime(flight, cardNumber) {
  var arrivalTime = flight.arrivalTime.substring(11,16);
  var aTime = arrivalTime.split(':');
  var hour = aTime[0];
  var min = '';

  if (aTime[0]> 12) {
   hour = (aTime[0] - 12) + ':' + aTime[1] + 'pm';
  }
  else if (aTime[0] == 0) {
   hour = 12 + ':' + aTime[1] + 'am';
  }
  else if (hour == 12) {
   min += ':' + aTime[1] + 'pm';
  }
  else {
   min += ':' + aTime[1] + 'am';
  }
  var airAriTime = document.getElementsByClassName('air-ari');
  airAriTime[cardNumber].textContent = hour + min;
 }

 function setDuration(flight, cardNumber) {
  var airDuration = document.getElementsByClassName('air-duration');
  var duration = flight.duration;
  var m = duration % 60;
  var h = (duration - m)/60;
  airDuration[cardNumber].textContent = h.toString() + " h " + (m<10?"0":"") + m.toString() + ' min';
 }

 function setAvailability(flight, cardNumber) {
  var airAvailable = document.getElementsByClassName('air-available');
  var available = flight.bookingCodeCount;
  airAvailable[cardNumber].textContent = 'Available Seats: ' + available;
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

     var leg = flights.body.trips.tripOption[c].slice[0].segment[0].leg[0];
     setRoute(leg, c);
     setDepTime(leg, c);
     setAriTime(leg, c);

     var flight = flights.body.trips.tripOption[c].slice[0].segment[0].flight;
     setCarrier(flight, c);

     var pricing = flights.body.trips.tripOption[c].pricing[0];
     setFlightPrice(pricing, c);

     var slice = flights.body.trips.tripOption[c].slice[0];
     setDuration(slice, c);

     var segment = flights.body.trips.tripOption[c].slice[0].segment[0];
     setAvailability(segment, c);
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