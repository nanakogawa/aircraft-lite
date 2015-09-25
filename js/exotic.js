 function setImage (exotics, numbers) {
  var eImage = document.getElementsByClassName('exotic-img');
  var images = exotics[numbers].exoticImage;
  eImage[numbers].style.background = 'url("' + images + '")';
  eImage[numbers].style.backgroundSize = 'cover';
 }

 function setLocation (exotics, numbers) {
  var eLocation = document.getElementsByClassName('exotic-location');
  var locations = exotics[numbers].exoticLocation;
  eLocation[numbers].textContent = locations;
 }

 function setFlightPrice (exotics, numbers) {
  var eFlightPrice= document.getElementsByClassName('exotic-price');
  var flightPrices = exotics[numbers].flightPrice;
  eFlightPrice[numbers].textContent = '$' + flightPrices + '+';
  eFlightPrice[numbers].style.float = 'right';
 }

 function setStay (exotics, numbers) {
  var eStay= document.getElementsByClassName('exotic-stay');
  var stays = exotics[numbers].stay;
  eStay[numbers].textContent = stays;
 }

 function setStayPrice (exotics, numbers) {
  var eStayPrice = document.getElementsByClassName('exotic-booking');
  var stayPrices = exotics[numbers].stayPrice;
  eStayPrice[numbers].textContent = '$' + stayPrices + '+';
 }

 function setAddress (exotics, numbers) {
  var eAddress = document.getElementsByClassName('exotic-address');
  var addresses = exotics[numbers].address;
  eAddress[numbers].textContent = addresses;
 }

 function setPhoneNumber (exotics, numbers) {
  var eNumber = document.getElementsByClassName('exotic-number');
  var number = exotics[numbers].phoneNumber;
  eNumber[numbers].textContent = number;
 }

 var exoticDes = new XMLHttpRequest();
  exoticDes.open('GET', '/exotic.json', true);
  exoticDes.send(null);

  exoticDes.onload = function() {
   if((exoticDes.status === 200) || (exoticDes.status === 304)) {
    var exoticInfo = JSON.parse(exoticDes.responseText);
    var exoticArray = exoticInfo.exotic;

    for(var e = 0; e < exoticArray.length; e++) {
     setImage(exoticArray, e);
     setLocation(exoticArray, e);
     setFlightPrice(exoticArray, e);
     setStay(exoticArray, e);
     setStayPrice(exoticArray, e);
     setAddress(exoticArray, e);
     setPhoneNumber(exoticArray, e);
    }
   }
  };