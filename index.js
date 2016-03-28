var xhr = new XMLHttpRequest(); 
var result;
var img0 = document.getElementById('img0');
var valText = document.getElementById('valText')
var submit = document.getElementById('submit')
var cadre = document.getElementById('cadre');

// Creation d'une balise IMG
// var newImg = document.createElement("img"); // Creation balise img
// var textNode = document.createTextNode(valText.value); // texte présente dans la balise
// newImg.appendChild(textNode);   // Association des deux elements

// cadre.insertBefore(newImg, cadre.childNodes[0]); // Ajout de la nouvelle image au dessu de premiere enfant de cadre

// var newImg = document.getElementsByTagName('img')[0]
// att = document.createAttribute("id");
// att.value = "img1";
// newImg.setAttributeNode(att);
/////////////////////////////////////////


// JSON
submit.onclick=function(evt) { 
	evt.preventDefault();

	alert('Veuillez patienter...')

		if (valText.value != "") {
		xhr.open('GET', 'https://js-ajax-pinterest.herokuapp.com/images?q='+valText.value+'');
		xhr.onreadystatechange = function() {
		  if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		    result = xhr.responseText;
		    result = JSON.parse(result);

		    	var newTtle = document.createElement("h2"); // Création d'une nouvelle balise H2
		    	var textTtle = document.createTextNode(valText.value); // Ajout de la valeur entrer dans var
		    	newTtle.appendChild(textTtle); // Attribution valeur var dans H2
		    	cadre.insertBefore(newTtle, cadre.childNodes[0]); // Insertion balise H2 enfant de div#cadre
		    	newTtle.style.width = "100%"; // Ajout de propriété de style -> Prend tte largeur
		    	newTtle.style.textAlign = "center"; // Ajout de propriété de style -> Centre le text
		    

		    for (var i = 0; i < result.urls.length; i++) {
		    	var newImg = document.createElement("img"); // Creation nouvel balise img
		    	var textNode = document.createTextNode("Image numéro"+[i]); // Creation du texte de la balise
		    	newImg.appendChild(textNode); // Attribution du texte a la balise

		    	cadre.insertBefore(newImg, cadre.childNodes[1]); // Ajout de la nouvelle image au dessu de premiere enfant de cadre


		    	crtIdImg = document.createAttribute("id");
		    	crtIdImg.value = "img"+[i]; // Associe l'attribut a chaque balise img
		    	// var newImg = document.getElementById('img'+[i]);
		    	newImg.setAttributeNode(crtIdImg);

		    	crtClassImg = document.createAttribute("class");
		    	crtClassImg.value = "hvr-grow";
		    	newImg.setAttributeNode(crtClassImg);




		    	document.getElementById('img'+[i]).setAttribute('src', result.urls[i]); // Attribution source img
		    };
		    

		  }

		};
		xhr.send(null);
	} else {
		alert("Faut taper le nom d'une image...");
	}
}


// Affiche le cadre sur la photo
/* var img = document.getElementById('logo');

img.onclick = function() {
	if (img.getAttribute("class") == "border") {
		img.classList.remove("border");
	} else {
		img.classList.add("border");
	}
} */


	var frstLogo = document.getElementById("logo");
	var clnFrstLogo = frstLogo.cloneNode(true);
