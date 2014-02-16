// JavaScript Document
function getLocation() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
		document.getElementById('locatieknop').src = "img/ic_action_location_searching.png";
    }

function onSuccess(position) {
        document.getElementById('locatieknop').src = "img/ic_action_location_found.png";
		var element = document.getElementById('geolocation');
		alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp  	     + '\n');
};

function onError(error) {
    document.getElementById('locatieknop').src = "img/ic_action_location_off.png";
    alert('code: '    + error.code    + '\n' +
    	'message: ' + error.message + '\n');
	}