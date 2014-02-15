// JavaScript Document
function getLocation() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

function onSuccess(position) {
        document.getElementById("actionbar").style.background = "green"
		var element = document.getElementById('geolocation');
		document.getElementById('kompasrichting').innerHTML = position.coords.heading;
		document.getElementById('kompas').style.transform = "rotate(" + position.coords.position + "deg)";
}

function onError(error) {
    document.getElementById("actionbar").style.background = "red"
    alert('code: '    + error.code    + '\n' +
    	'message: ' + error.message + '\n');
	}