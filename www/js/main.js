function locatie_succes(position) {
    document.getElementById('button_locatie').src = "img/ic_action_location_found.png";
    
	alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');

};

function locatie_error(error) {
    document.getElementById('button_locatie').src = "img/ic_action_location_off.png";
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
};