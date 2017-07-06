// Sound Effects (START)

function thememusic() {var audio = new Audio('audio/001.mp3'); audio.loop = true; audio.play()};
function loadmusicA() {var audio = new Audio('audio/003.mp3'); audio.loop = true; audio.play()};
function loadmusicD() {var audio = new Audio('audio/005.mp3'); audio.loop = true; audio.play()};
function loadmusicP() {var audio = new Audio('audio/004.mp3'); audio.loop = true; audio.play()};
function shipflying() {var audio = new Audio('audio/002.mp3'); audio.loop = true; audio.play()};
function beepsound() {var audio = new Audio('audio/beep.mp3'); audio.loop = false; audio.play()};
function Dbeep() {var audio = new Audio('audio/beep2.mp3'); audio.loop = false; audio.play()};
function Pbeep() {var audio = new Audio('audio/beep3.mp3'); audio.loop = false; audio.play()};

// Sound Effects (END)

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function Dhome() {
  dlinks = ["main.html", "main.html", "main.html", "main.html"]
  var i = Math.random() * dlinks.length;
  i = parseInt(i, 10);
  parent.location = dlinks[i];
  return dlinks;
}

function dDATA() {
  Dbeep();
  setTimeout(function() { Dhome(); }, 10000);
}

function Phome() {
  plinks = ["main.html", "main.html", "main.html", "main.html"]
  var i = Math.random() * plinks.length;
  i = parseInt(i, 10);
  parent.location = plinks[i];
  return plinks;
}

function pDATA() {
  Pbeep();
  setTimeout(function() { Phome(); }, 10000);
}

function Ahome() {
  alinks = ["index.html", "index.html", "index.html", "index.html"]
  var i = Math.random() * alinks.length;
  i = parseInt(i, 10);
  parent.location = alinks[i];
  return alinks;
}

function aDATA() {
  beepsound();
  setTimeout(function() { Ahome(); }, 10000);
}

