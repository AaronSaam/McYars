var bestemming_lat;
var bestemming_long;

var plek = [
['Munsterkerk',					51.193611, 5.988611, 'Munsterplein',			'Pierre Cuypers, Jos Hermans'],
['Sint-Christoffelkathedraal',	51.196458, 5.984447, 'Kraanpoort',				'Pierre Cuypers'],
['Minderbroederskerk',			51.191492, 5.986339, 'Minderbroedersstraat',	'Pierre Cuypers'],
['Stadhuis',					51.195889, 5.985847, 'Markt 31',				'Pierre Cuypers'],
['De Kiosk',					51.193353, 5.988031, 'Munsterplein',			'Pierre Cuypers'],
['Ursulakapel',					51.195614, 5.990875, 'Voogdijstraat 24',		'Jos Cuypers'],
['Caroluskapel',				51.197033, 5.989219, 'Swalmerstraat 100',		'Jos Hermans'],
['Steenen Trappen',				51.193339, 5.985681, 'Neerstraat 33',			'Peter van Boshuysen'],
['Nationaal Indië-monument',	51.181178, 5.987481, 'Maastrichterweg 25',		'Dick van Wijk, Wijnand Thönissen']
/*['Rattentoren',
['Synagoge',
['Bisschoppelijk Paleis',
['Historiehuis',
['Wegkruis met houten corpus',
['Pierre Cuypers',
['Jubileumfontein',
['De Ruivers',
['Emile Seipgens',
['Schinderhannes',
['Cuypershuis',
['Teeken en ambachtschool',*/
];

function keuze(bestemming) {
	bestemming_lat = plek[bestemming][1];
	bestemming_long = plek[bestemming][2];
	navigator.geolocation.watchPosition(getLocatie, errorLocatie, {frequency: 100, timeout: 5000, enableHighAccuracy: true});
}

function getLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasBlauw.png";
	var dlong;
	var dlat;
	var hoek;
	if (position.coords.longitude < 0) {
		dlong = bestemming_long + position.coords.longitude;
	}
	else {
		dlong = bestemming_long - position.coords.longitude;
	}
	
	if (position.coords.latitude < 0) {
		dlat = bestemming_lat + position.coords.latitude;
	}
	else {
		dlat = bestemming_lat - position.coords.latitude;	
	}
		
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