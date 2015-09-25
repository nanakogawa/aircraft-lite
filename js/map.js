 function initMap() {
  var malLatLng = {lat: 4.957002, lng: 73.459579};
  var lucLatLng = {lat: 13.830227, lng: -61.051502};
  var greLatLng = {lat: 36.393156, lng: 25.461509};
  var ratLatLng = {lat: -15.506433, lng: 167.200274};
  var vieLatLng = {lat: 18.126285, lng: -65.440098};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: malLatLng,
    scrollwheel: false,
    zoom: 2
  });

  var markerOne = 'marker1.png';
  var maldivesMarker = new google.maps.Marker({
    map: map,
    position: malLatLng,
    title: 'Kaafu Atoll, Maldives',
    icon: markerOne
  });

  var markerTwo = 'marker2.png';
  var luciaMarker = new google.maps.Marker({
    map: map,
    position: lucLatLng,
    title: 'Jalousle, St. Lucia',
    icon: markerTwo
  });

  var markerThree = 'marker3.png';
  var greeceMarker = new google.maps.Marker({
    map: map,
    position: greLatLng,
    title: 'Santorini, Greece',
    icon: markerThree
  });

  var markerFour = 'marker4.png';
  var ratuaMarker = new google.maps.Marker({
    map: map,
    position: ratLatLng,
    title: 'Luganville, Vanuatu',
    icon: markerFour
  });

  var markerFive = 'marker5.png';
  var prMarker = new google.maps.Marker({
    map: map,
    position: vieLatLng,
    title: 'Vieques, Puerto Rico',
    icon: markerFive
  });
}