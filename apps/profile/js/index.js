
function newGame() {

	var XNAME = prompt('Enter Name:');
	localStorage.name = (XNAME);
	alert('Hello ' + localStorage.name + '!');
	localStorage.exp = 10;
	parent.location = 'home.html';
}

function loadGame() {

	alert('Welcome back ' + localStorage.name + '!');
	localStorage.exp = Number(localStorage.exp)+5;
	parent.location = 'home.html';	
}

if (localStorage.exp <= 30) {

	localStorage.lvl = 'img/lvl1.png';

} else if (localStorage.exp <= 50) {

	localStorage.lvl = 'img/lvl2.png';

} else if (localStorage.exp <= 80) {

	localStorage.lvl = 'img/lvl3.png';

} else if (localStorage.exp <= 90) {

	localStorage.lvl = 'img/lvl4.png';

} else if (localStorage.exp <= 100) {

	localStorage.lvl = 'img/lvl5.png';
}
