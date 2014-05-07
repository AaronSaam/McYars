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
	document.getElementById('plek_straat').innerHTML = plek[bestemming_keuze][3];
	document.getElementById('plek_bouwjaar').innerHTML = plek[bestemming_keuze][4];
	document.getElementById('plek_architect').innerHTML = plek[bestemming_keuze][5];
	document.getElementById('plek_beschrijving').innerHTML = plek[bestemming_keuze][6];
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