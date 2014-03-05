var bol_wijzer = new Boolean(true);
var bol_locatie = new Boolean(false);
var plek_keuze

var plek = [['Munsterkerk','Munsterplein','Pierre Cuypers' + '\n' + 'Jos Hermans','51.113700','5.591900']['Sint-Christoffelkathedraal','Kraanpoort','Pierre Cuypers','51.114725','5.590401']];

// Hoofdmenu
arr_keuze = [-1, -1];

function keuze(plek_keuze) {
	arr_keuze[1] = plek_keuze
	document.getElementById('k'+arr_keuze[0]).style.background = 'white';
	document.getElementById('k'+arr_keuze[0]).style.color = 'black';
	document.getElementById('k'+arr_keuze[1]).style.background = 'royalblue';
	document.getElementById('k'+arr_keuze[1]).style.color = 'white';
	arr_keuze[0] = arr_keuze[1];
	if (plek_keuze == -1) {
		plek_keuze=Math.floor(Math.random()*(plek().count()+1));
	}
}

// Kompas
function getLocation() {
    navigator.geolocation.watchPosition(onSuccess, onError);
};

function onSuccess(position) {
    document.getElementById('button_locatie').src = "img/ic_action_location_found.png";
    document.getElementById('footer_accuracy').innerHTML = Math.round(position.coords.accuracy) + '%';

    if (bol_locatie == false) {
        bol_locatie = true;
        document.getElementById('kompasbg').src = "img/KompasBlauw.png";
    };

    if (bol_wijzer == true) {
        heading = position.coords.heading;
        if (isNaN(heading) || heading == null) {
            document.getElementById('wijzer').style.visibility = 'hidden';
            document.getElementById('footer_error').innerHTML = "Richting niet ondersteund";
            bol_wijzer = false;
        };

		heading = 50;
		document.getElementById('afstand').innerHTML = heading;
        if (bol_wijzer == true) {
			document.getElementById('wijzer').style.visibility = 'visible';
            document.getElementById('wijzer').style = '-webkit-transform: rotate(' +  + 'deg); -o-transform: rotate(' + heading + 'deg); transform: rotate(' + heading + 'deg); -moz-transform: rotate(' + heading + 'deg); -ms-transform: rotate(' + heading + 'deg)';
        };
    };
}

function onError(error) {
    document.getElementById('button_locatie').src = "img/ic_action_location_off.png";
    document.getElementById('footer_accuracy').innerHTML = 'Error';
    document.getElementById('footer_error').innerHTML = '#' + error.code + ' - ' + error.message;
    if (bol_locatie == true) {
        bol_locatie = false;
        document.getElementById('kompasbg').src = "img/KompasGrijs.png";
    };
};

//INFORMATIE
plek_aanwezig = 1;

function plek_info(plek_aanwezig) {

document.getElementById('plek_naam').innerHTML = plek[1][0];
}