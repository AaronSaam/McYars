var bol_wijzer = new Boolean(true);
var bol_locatie = new Boolean(true);

function load_actionbar() {
    document.getElementById('button_locatie').src = "img/ic_action_location_searching.png";
    document.getElementById('button_locatie').style.visibility = 'visible';

    navigator.geolocation.getCurrentPosition(locatie_succes, load_error_locatie);

    if (bol_locatie = true) {
        heading = position.coords.heading;
        if (heading == 'NaN' || heading == null) {
            bol_wijzer = false;
        };

        document.getElementById('load_error_locatie').style.visibility = 'hidden';
    };
};

function load_error_locatie(error) {
    bol_locatie = false;
    document.getElementById('load_error_locatie').style.visibility = 'visible';
    document.getElementById('button_locatie').src = "img/ic_action_location_off.png";
    document.getElementById('load_error_locatie_code').innerHTML = 'ERROR ' + error.code + ' ' + error.message;
};

function load_error_locatie_button() {
    document.getElementById('load_error_locatie').style.visibility = 'hidden';
    load_actionbar();
};