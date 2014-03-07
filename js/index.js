var bestemming = -1;
var lat_bestemming;
var long_bestemming;

var plek = [
['Munsterkerk',51.193611, 5.988611,'Munsterplein','Pierre Cuypers + Jos Hermans'],
['Sint-Christoffelkathedraal', 51.196458, 5.984447,'Kraanpoort','Pierre Cuypers'] ];

function keuze(bestemming) {
	lat_bestemming = plek[bestemming][1];
	long_bestemming = plek[bestemming][2];
	navigator.geolocation.watchPosition(getLocatie, errorLocatie, {frequency: 100, timeout: 5000, enableHighAccuracy: true});
}

function getLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasBlauw.png";
	
	var long = position.coords.longitude;
	var lat = position.coords.latitude;
	var hoek = (long_bestemming - long) / (lat_bestemming - lat);
	var hoek_bestemming = Math.atan(hoek *(180/Math.PI));
	var draaihoek = position.coords.heading + hoek_bestemming;
	$('#wijzer').css('-webkit-transform', 'rotate(' + draaihoek + 'deg)');
}

function errorLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGrijs.png";
}
