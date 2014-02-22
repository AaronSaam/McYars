// Variabelen
var KompasWijzer = " ";
var Locatie = 1;

function onLoad() {
    document.addEventListener("deviceready", getLocation, false);
}

if (Locatie == 1) {

    function getLocation() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        document.getElementById('locatieknop').src = "img/ic_action_location_searching.png";
    }

};

function onSuccess(position) {
    document.getElementById('locatieknop').src = "img/ic_action_location_found.png";
    alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');

    if (KompasWijzer = " ") {
        var heading = position.coords.heading;
        if (heading = 'NaN' || heading == null) {
            KompasWijzer = 0;
            alerticon();
        } else {
            KompasWijzer = 1;
        };
    };
};

function alerticon() {
    document.getElementById('alert').style.visibility = 'visible';
}

function viewAlert() {
    alert('We kunnen je richting niet bepalen.' + '\n' + 'Je apparaat bevat geen magneten.');
};

// Fout bij ophalen locatie
function onError(error) {
    document.getElementById('locatieknop').src = "img/ic_action_location_off.png";
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
};