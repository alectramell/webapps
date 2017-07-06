
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

function getEcho() {
  plinks = [echoLoop1(), echoLoop2(), echoLoop3()]
  var i = Math.random() * plinks.length;
  i = parseInt(i, 10);
  plinks[i];
  return plinks;
}

function echoLoop1() {

	setTimeout(function() { echoMSG(); }, 45000);
}

function echoLoop2() {

	setTimeout(function() { echoMSG(); }, 60000);
}

function echoLoop3() {

	setTimeout(function() { echoMSG(); }, 120000);
}

function echoMSG() {

	XSHIP.src = 'img/echoMSG.png';
	XSHIP.useMap='#echoMSG';
}
