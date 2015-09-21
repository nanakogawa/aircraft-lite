 function searchFlight() {
  event.preventDefault();
 	var flightCards = document.getElementById('flight-cards');
 	flightCards.style.display = 'block';
 }

 var searchButton = document.getElementById('flight-search');
 searchButton.addEventListener('click', searchFlight, false);