 function setLocation (des, divNumber) {
  var desLocation = document.getElementsByClassName('location');
  var newLocation = des[divNumber].location;
  desLocation[divNumber].textContent = newLocation;
 }

 function setPrice (des, divNumber) {
  var desPrice = document.getElementsByClassName('cost');
  var newPrice = des[divNumber].minPrice;
  desPrice[divNumber].textContent = '$' + newPrice +'+';
 }

 function setImage (des, divNumber) {
  var desImage = document.getElementsByClassName('pop-des');
  var newImage = des[divNumber].image;
  desImage[divNumber].style.background = 'url("' + newImage + '")';
  desImage[divNumber].style.backgroundSize = 'cover';
 }

 var popularDes = new XMLHttpRequest();
 popularDes.open('GET', '/destinations.json', true);
 popularDes.send(null);

 popularDes.onload = function() {
  if((popularDes.status === 200) || (popularDes.status === 304)) {
   var desInfo = JSON.parse(popularDes.responseText);
   var desArray = desInfo.destinations;

   for(var l = 0; l < desArray.length; l++) {

    setLocation(desArray, l);
    setPrice(desArray, l);
    setImage(desArray, l);

	 }
	}
 };
