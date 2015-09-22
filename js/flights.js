 function searchFlight() {
  event.preventDefault();
 	var flightCards = document.getElementById('flight-cards');
 	flightCards.style.display = 'block';
 }

 function submit (event) {
  event.preventDefault();
  var submitRequest = new XMLHttpRequest();
  submitRequest.open('POST','/qpx/form',true);
  submitRequest.setRequestHeader('content-type', 'application/json');
  submitRequest.send(formSubmit());
  submitRequest.addEventListener('load',function () {

   if((submitRequest.status === 200) || (submitRequest.status === 304)) {

    var flights = JSON.parse(submitRequest.responseText);
    var trips = flights.body.trips;
    var flightCards = document.getElementsByClassName('flight-cards');

    for(var c = 0; c < flightCards.length; c++) {

     var airToAir = document.getElementsByClassName('air-to-air');
     var airOrigin = trips[c].data.airport[0].city;
     var airDestination = trips[c].data.airport[0].city;
     airToAir[c].innerHTML = airOrigin + ' to ' + airDestination;

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
 searchButton.addEventListener('click', submit, false);
