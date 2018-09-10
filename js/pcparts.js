window.onload = function(){



/* ------------------------------------
	Browser sniffing
--------------------------------------- */

	if(!document.getElementById) return false;
	if(!document.getElementById("partTxt")) return false; // article met fallback tekst
	if(!document.getElementById("partsMenu")) return false; // section met knoppen
	if(typeof pcparts == "undefined") return false;
    
   
    
/* ------------------------------------
	Variables
--------------------------------------- */

	var partTxt = document.getElementById("partTxt"); // article
	var btnParts = document.getElementsByClassName("btnPart"); // alle a-tags
	var btnDiv = document.getElementsByClassName("btnDiv"); // alle divs van de a-tags
    
  
    
/* ------------------------------------
	DOM
--------------------------------------- */

	// Melding over uitgeschakeld JavaScript weghalen.
	partTxt.innerHTML = "";
	
	// Div maken voor tekst en afbeelding
	var imgContainer = document.createElement("div");
	imgContainer.setAttribute("class", "dynamicDiv");
	
	// Image tag voor achtergrondafbeelding tekstballon
	var partImg1 = document.createElement("img");
	partImg1.setAttribute("class", "balloon");

	// Infotekst over pc-part
	var partInfo = document.createElement("p");
	
	// Paragraaf met link naar vervolgpagina over onderdeel
	var partLink = document.createElement("a");

	// Image tag voor afbeelding pc-part
	var partImg2 = document.createElement("img");
	partImg2.setAttribute("class", "dynamicImg");
	
	// Stop de tags op hun plek
	imgContainer.appendChild(partImg1);
	imgContainer.appendChild(partInfo);
	imgContainer.appendChild(partLink);
	imgContainer.appendChild(partImg2);

	partTxt.appendChild(imgContainer);
	
	updatePart();
    
	

/* ------------------------------------
	Functions
--------------------------------------- */

	function updatePart(whichPart){
	
		var partNumber;
		
		if(whichPart == undefined) {
		partNumber = 1;	
		} else {
			partNumber = parseInt(whichPart.substr(1,1)); // substr = haal karakters uit de string, beginnend bij eerste nummer en aantal is tweede nummer.
		}
		
		partImg1.src = "images/" + pcparts[partNumber].background;
		partInfo.textContent = pcparts[partNumber].info;
		partLink.textContent = pcparts[partNumber].link;
		partLink.href = pcparts[partNumber].anchor;
		partImg2.src = "images/" + pcparts[partNumber].image;		
    }
	

	
	function updateBtn(fromBtn, toBtn, aTag){
		
		var imageObject = aTag.getElementsByTagName("img")[0]; // pakt eerste img uit de a-tag
		var oldBtn = imageObject.src;
		var newBtn = oldBtn.replace(fromBtn, toBtn); // Wisselen van de tekst hvr naar lnk en andersom.
		imageObject.src = newBtn; // Src van de img updaten naar de nieuwe src.
	}
    
  
	
/* ------------------------------------
	Event binding
--------------------------------------- */
    
	partTxt.style.display = "none";

	var eventLijst = ['click', 'mouseover', 'mouseout'];
	
	for(hetEvent of eventLijst){ // Voor elke var hetEvent in de array 'eventLijst'...
	 
		for(var i = 0; i<btnParts.length; i++){ // Ga door alle a-tags heen in de nav...
			btnParts[i].addEventListener(hetEvent, function(e){ //...en bind er iedere ronde een addEventListener aan vast die onderstaande function aanroept.
					

				if(e.type == 'click') { // als er een click event plaatsvindt...
					
					// loop door alle knoppen en zet 'cur' knoppen weer op 'lnk'. 
					for(var i=0;i<btnParts.length; i++){
					updateBtn('cur', 'lnk', btnParts[i]);
					}
					
					e.preventDefault();
					partTxt.style.display = "block";
					updatePart(this.getAttribute("id"));
					updateBtn('hvr', 'cur', this);

					
				} else if(e.type == 'mouseover'){
					updateBtn('lnk', 'hvr', this);
				} else if(e.type == 'mouseout'){
					updateBtn( 'hvr', 'lnk', this);
				}
				
			
			}, false);	
		}
	}
    
    
    
}