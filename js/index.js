var bestemming_lat;
var bestemming_long;
var bestemming_keuze;

function keuze(bestemming) {
	if (bestemming < 0) {
		bestemming_keuze = Math.floor(Math.random()*22)
	}
	else {
		bestemming_keuze = bestemming;
	}
	
	bestemming_lat = plek[bestemming_keuze][1];
	bestemming_long = plek[bestemming_keuze][2];
	document.getElementById('plek_naam').innerHTML = plek[bestemming_keuze][0];
	document.getElementById('info_straat').innerHTML = plek[bestemming_keuze][3];
	document.getElementById('info_bouwjaar').innerHTML = plek[bestemming_keuze][4];
	document.getElementById('info_architect').innerHTML = plek[bestemming_keuze][5];
	document.getElementById('info_beschrijving').innerHTML = plek[bestemming_keuze][6];
	navigator.geolocation.watchPosition(getLocatie, errorLocatie, {frequency: 100, timeout: 5000, enableHighAccuracy: true});
}

function getLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGeel.png";
	var location_mode = 0;
	
	var dlong = bestemming_long - position.coords.longitude;
	if (dlong < 0) {
		location_mode += 2;
	}
	
	var dlat = bestemming_lat - position.coords.latitude;	
	if (dlat > 0) {
		location_mode += 1;
	}
	
	var hoek;
	
	if (dlong == 0) {
		hoek = 0;
	}
	else {
		hoek = dlong / dlat;
	}
		
	hoek = Math.atan(hoek) * 180 / Math.PI;
	
	if (hoek > 90) {
	alert('Er is iets misgegaan. Vermeld a.u.b. uw locatie in uw feedback.');
	};
	
	if (location_mode == 0) {
		hoek = 360 + hoek;
	}
	if (location_mode == 1) {
		hoek = 90 - hoek;
	}
	if (location_mode == 2) {
		hoek = 270 - hoek;	
	}
	if (location_mode == 3) {
		hoek = 180 + hoek;	
	}
	
	var draaihoek = hoek - position.coords.heading;
	$('#wijzer').css('-webkit-transform', 'rotate(' + draaihoek + 'deg)');
}

function errorLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGrijs.png";
}

function aangekomen() {
		
}
