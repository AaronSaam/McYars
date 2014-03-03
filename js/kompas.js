var bol_wijzer = new Boolean(true);
var bol_locatie = new Boolean(false);

var plek = TAFFY([{
    naam: 'Munsterkerk',
    N: '51.113700',
    O: '5.591900',
    adres: 'Munsterplein'
}, {
    naam: 'Sint-Christoffelkathedraal',
    N: '51.114725',
    O: '5.590401',
    adres: 'Kraanpoort'
}]);

/*function test() {
var randomnumber=Math.floor(Math.random()*plek().count()+1);
alert(randomnumber) };*/

function getLocation() {
    navigator.geolocation.watchPosition(onSuccess, onError);
};

function onSuccess(position) {
    document.getElementById('button_locatie').src = "img/ic_action_location_found.png";
    document.getElementById('footer_accuracy').innerHTML = position.coords.accuracy + '%';

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
	
	if (bol_wijzer == true) {
		document.getElementById('wijzer').style = 'transform: rotate(' + position.coords.heading + 'deg); -moz-transform: rotate(' + position.coords.heading + 'deg); -o-transform: rotate(' + position.coords.heading + 'deg) -webkit-transform: rotate(' + position.coords.heading + 'deg)' ;	
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
}