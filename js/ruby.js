window.onload = function(){



/*
	==========================================================
			GET NAME EN VERBERG/TOON LAPTOPS
	==========================================================
*/


var naam = "";
var nameResult = document.getElementById("nameResult"); //span tag

var nameDiv = document.getElementById("nameDiv"); // gedeelte waar je je naam in kunt vullen.
var laptopOut = document.getElementById("laptopOut"); // gedeelte met buitenkant laptop
var laptopIn = document.getElementById("laptopIn"); // gedeelte gedeelte met binnenkant laptop

laptopOut.style.display = "none";
laptopIn.style.display = "none";

document.getElementById("btnSwap").addEventListener("click", function () { // koppel event aan de knop "Ga verder"

nameDiv.style.display = "none";
laptopOut.style.display = "block";

naam = document.getElementById("nameInput").value;
nameResult.textContent = naam;
});

document.getElementById("enterPulse").addEventListener("click", function () { // koppel event aan de knop "enter"

laptopOut.style.display = "none";
laptopIn.style.display = "block";

});



}