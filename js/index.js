var bestemming_lat;
var bestemming_long;

var plek = [
['Munsterkerk', 51.193611, 5.988611,'Munsterplein','Pierre Cuypers + Jos Hermans'],
['Sint-Christoffelkathedraal', 51.196458, 5.984447,'Kraanpoort','Pierre Cuypers'] ];

function keuze(bestemming) {
	bestemming_lat = plek[bestemming][1];
	bestemming_long = plek[bestemming][2];
	navigator.geolocation.watchPosition(getLocatie, errorLocatie, {frequency: 100, timeout: 5000, enableHighAccuracy: true});
}

function getLocatie(position) {
	bestemming_lat = plek[0][1];
	bestemming_long = plek[0][2];
	
	document.getElementById('kompasbg').src = "img/KompasBlauw.png";
	var long = bestemming_long - position.coords.longitude;
	var lat = bestemming_lat - position.coords.latitude;
	var hoek = lat / long;
	var hoek_bestemming = Math.atan(hoek)*(180/Math.PI);
	
	if (lat > 0) {
		if (long > 0) {
			var bestemming_lat = hoek_bestemming;
		}
		if (long < 0) {
			var bestemming_lat = -180 + hoek_bestemming;	
		}
		if (long = 0) {
			var bestemming_lat = 90;
		}
	}
	if (lat < 0) {
		if (long > 0) {
			var bestemming_lat = -hoek_bestemming;
		}
		if (long < 0) {
			var bestemming_lat = 180 - hoek_bestemming;	
		}
		if (long = 0) {
			var bestemming_lat = -90;	
		}
	}
	
	if (lat = 0) {
		if (long > 0) {
			var bestemming_lat = 0;
		}
		if (long < 0) {
			var bestemming_lat = 180;	
		}
	}

	var draaihoek = position.coords.heading + bestemming_lat;
	$('#wijzer').css('-webkit-transform', 'rotate(' + draaihoek + 'deg)');
}

function errorLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGrijs.png";
}
