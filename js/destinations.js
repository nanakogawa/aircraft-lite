  var popularDes = new XMLHttpRequest();
   popularDes.open('GET', '/destinations.json', true);
   popularDes.send(null);

   popularDes.onload = function() {
    if((popularDes.status === 200) || (popularDes.status === 304)) {
     var desInfo = JSON.parse(popularDes.responseText);

     var desLocation = document.getElementsByClassName('location');
     var desPrice = document.getElementsByClassName('cost');

     for(var l = 0; l < desLocation.length; l++) {

      var newContent = '';
       newContent += desInfo.destinations[l].location;
      var newPrice = '';
       newPrice += desInfo.destinations[l].minPrice;

		 }
		 for (var i = 0; i < desLocation.length; i++) {

		  desLocation[i].innerHTML = newContent;
		  desPrice[i].innerHTML = '$' + newPrice +'+';

		 }
	  }
	};