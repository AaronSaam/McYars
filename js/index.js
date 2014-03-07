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
	
	var long = long_bestemming - position.coords.longitude;
	var lat = lat_bestemming - position.coords.latitude;
	var hoek = lat / long;
	var hoek_bestemming = Math.atan(hoek)*(180/Math.PI);
	
	switch(lat) {
	
	case lat >0:
		if (long > 0) {
			var lat_bestemming = hoek_bestemming;
		}
		if (long < 0) {
			var lat_bestemming = -180 + hoek_bestemming;	
		}
		if (long = 0) {
			var lat_bestemming = 90;
		}
	
	case lat < 0:
		if (long > 0) {
			var lat_bestemming = -hoek_bestemming;
		}
		if (long < 0) {
			var lat_bestemming = 180 - hoek_bestemming;	
		}
		if (long = 0) {
			var lat_bestemming = -90;	
		}
	
	case lat = 0:
		if (long > 0) {
			var lat_bestemming = 0;
		}
		if (long < 0) {
			var lat_bestemming = 180;	
		}
	}

	var draaihoek = position.coords.heading + lat_bestemming;
	$('#wijzer').css('-webkit-transform', 'rotate(' + draaihoek + 'deg)');
}

function errorLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGrijs.png";
}
