 function searchFlight() {
  event.preventDefault();
 	var flightCards = document.getElementById('flight-cards');
 	flightCards.style.display = 'block';
 }

 function submit (event) {
 event.preventDefault();
  var submitRequest = new XMLHttpRequest();
   submitRequest.open('GET','/form',true);
   submitRequest.open('POST','/form',true);
   submitRequest.setRequestHeader('content-type', 'application/json');
   submitRequest.send(formSubmit());
   submitRequest.addEventListener('load',function () {
   console.log(formSubmit.responseText);
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
