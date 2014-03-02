var bol_wijzer = new Boolean(true);
var bol_locatie = new Boolean(false);

// LOAD
function load_actionbar() {
    document.getElementById('button_locatie').src = "img/ic_action_location_searching.png";
    document.getElementById('button_locatie').style.visibility = 'visible';

    navigator.geolocation.getCurrentPosition(load_succes_locatie, load_error_locatie);  
};


function load_succes_locatie(position) {
    document.getElementById('button_locatie').src = "img/ic_action_location_found.png";
            
	heading = position.coords.heading;
    if (heading == 'NaN' || heading == null) {
    	bol_wijzer = false;
    };
};

function load_error_locatie(error) {
    bol_locatie = false;
    document.getElementById('button_locatie').src = "img/ic_action_location_off.png";
    alert('ERROR ' + error.code + '\n' + error.message);
};


//KOMPAS
var plek = TAFFY([
{naam:'Munsterkerk', 				N:'51.113700', O:'5.591900', adres:'Munsterplein'},
{naam:'Sint-Christoffelkathedraal', N:'51.114725', O:'5.590401', adres:'Kraanpoort'}]);

function test() {
var randomnumber=Math.floor(Math.random()*plek().count()+1);
alert(randomnumber) };

function getLocation() {
navigator.geolocation.getCurrentPosition(onSuccess, onError);  
};

function onSuccess() {
		document.getElementById('button_locatie').src = "img/ic_action_location_found.png";
		if (bol_locatie == false) {
			bol_locatie = true;
			document.getElementById('kompasbg').src = "img/KompasBlauw.png";
		};
		document.getElementById('footer_error').innerHTML = position.coords.accuracy;
		
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