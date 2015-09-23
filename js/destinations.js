  var popularDes = new XMLHttpRequest();
   popularDes.open('GET', '/destinations.json', true);
   popularDes.send(null);

   popularDes.onload = function() {
    if((popularDes.status === 200) || (popularDes.status === 304)) {

     var desInfo = JSON.parse(popularDes.responseText);
     var desArray = desInfo.destinations;

     for(var l = 0; l < desArray.length; l++) {

      var desLocation = document.getElementsByClassName('location');
      var newLocation = desArray[l].location;
      desLocation[l].innerHTML = newLocation;

      var desPrice = document.getElementsByClassName('cost');
      var newPrice = desArray[l].minPrice;
      desPrice[l].innerHTML = '$' + newPrice +'+';

      var desImage = document.getElementsByClassName('pop-des');
      var newImage = desArray[l].image;
      desImage[l].style.background = 'url("' + newImage + '")';
      desImage[l].style.backgroundSize = 'cover';

		 }
	  }
	};