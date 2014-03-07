var bestemming = -1;
var lat_bestemming;
var long_bestemming;

var plek = [
['Munsterkerk','Munsterplein','Pierre Cuypers + Jos Hermans','51.113700','5.591900'],
['Sint-Christoffelkathedraal','Kraanpoort','Pierre Cuypers','51.114725','5.590401'] ];

function keuze(bestemming) {
	lat_bestemming = plek[bestemming][3];
	long_bestemming = plek[bestemming][4];
	navigator.geolocation.watchPosition(getLocatie, errorLocatie, {timeout: 5000, enableHighAccuracy: true});
}

function getLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasBlauw.png";
	var hoek_bestemming = Math.acos((position.coords.latitude - lat_bestemming)/(position.coords.longitude - long_bestemming));
	var draaihoek = position.coords.heading + hoek_bestemming;
	$('#wijzer').css('-webkit-transform', 'rotate(' + draaihoek + 'deg)');
}

function errorLocatie(position) {
	document.getElementById('kompasbg').src = "img/KompasGrijs.png";
}
