var bol_wijzer = 1;
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
    	bol_wijzer = 2;
    };
};

function load_error_locatie(error) {
    bol_locatie = false;
    document.getElementById('button_locatie').src = "img/ic_action_location_off.png";
    alert('ERROR ' + error.code + '\n' + error.message);
};