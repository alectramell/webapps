

function openLink() {
  xlinks = ["img/A.png", "img/B.png", "img/C.png", "img/D.png", "img/E.png", "img/F.png", "img/G.png", "img/H.png"]
  var i = Math.random() * xlinks.length;
  i = parseInt(i, 10);
  ouTput.src = xlinks[i];
  return xlinks;
}

