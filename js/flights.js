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
    var flightCard = document.getElementsByClassName('flight-card');

    for(var c = 0; c < flightCard.length; c++) {

     console.log(flights.body.trips.tripOption[c].slice[0].segment[0].leg[0].origin, ' to ',
      flights.body.trips.tripOption[c].slice[0].segment[0].leg[0].destination);

     var airToAir = document.getElementsByClassName('air-to-air');
     var airOrigin = flights.body.trips.tripOption[c].slice[0].segment[0].leg[0].origin;
     var airDestination = flights.body.trips.tripOption[c].slice[0].segment[0].leg[0].destination;
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
