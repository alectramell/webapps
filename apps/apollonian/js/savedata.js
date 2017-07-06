
// Create Save Archive..
function createSave() {

    var clearData = confirm("Are you sure you want to Reset the Saved Data?..");
    if (clearData == true) {
    	var xsavegame = prompt("What is your name? (player1, myTag, etc.): ");
    	localStorage.setItem("savegamedata", xsavegame);
    	localStorage.setItem("savegamelvl", 150);
    	var xgsave = localStorage.getItem("savegamedata");
    	alert("Success! Hello " + xgsave + ", Welcome to the Apollonian Company!");
    }
}

// Load Saved Archive..

function loadSave() {

    var xgsave = localStorage.getItem("savegamedata");
    alert("User " + xgsave + "'s data will be loaded..");
}

function loadData() {

    var xglvl = localStorage.getItem("savegamelvl");
    document.getElementById("xgLevel").innerHTML = xglvl;

    var xgcoin = "GP";
    document.getElementById("xgCoin").innerHTML = xgcoin;

    var xgsave = localStorage.getItem("savegamedata");
    document.getElementById("xgName").innerHTML = xgsave;
}







