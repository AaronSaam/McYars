var bestemming_lat;
var bestemming_long;
var bestemming_keuze;

function keuze(bestemming) {
	bestemming_keuze = bestemming;
	bestemming_lat = plek[bestemming][1];
	bestemming_long = plek[bestemming][2];
	navigator.geolocation.watchPosition(getLocatie, errorLocatie, {frequency: 100, timeout: 5000, enableHighAccuracy: true});
}

function getLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasBlauw.png";
	var dlong = bestemming_long - position.coords.longitude;
	var dlat = bestemming_lat - position.coords.latitude;	
	var hoek;
	
	if (dlong == 0) {
		hoek = 0;
	}
	else {
		hoek = dlat / dlong;
	}
	
	var hoek_richting = Math.atan(hoek) * 180 / Math.PI;
	
	if (dlong < 0) {
			hoek_richting = 180 + hoek_richting;
			
	}
	if (dlong > 0) {
		if (dlat < 0) {
			hoek_richting = 360 + hoek_richting;	
		}
	}
	if (dlong == 0) {
		if (dlat > 0) {
			hoek_richting = 90;
		}
		if (dlat < 0) {
			hoek_richting = -90;	
		}
	}

	var draaihoek = hoek_richting - position.coords.heading;
	$('#wijzer').css('-webkit-transform', 'rotate(' + draaihoek + 'deg)');
}

function errorLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGrijs.png";
}

function aangekomen() {
		
}