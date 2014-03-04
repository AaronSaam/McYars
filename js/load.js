arr_keuze = [1, 1];

function keuze(k) {
	arr_keuze[1] = k
	document.getElementById('k'+arr_keuze[0]).style.background = 'white';
	document.getElementById('k'+arr_keuze[0]).style.color = 'black';
	document.getElementById('k'+arr_keuze[1]).style.background = 'royalblue';
	document.getElementById('k'+arr_keuze[1]).style.color = 'white';
	arr_keuze[0] = arr_keuze[1]
}