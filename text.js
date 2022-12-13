var texteActuel = 1; // Garde en mémoire le texte actuel

function changerTexte() {
  // Récupère l'élément span
  var span = document.getElementById("monSpan");

  // Modifie son contenu en fonction du texte actuel
  if (texteActuel == 1) {
    // Ajoute un effet d'écriture de texte en utilisant l'API de l'objet Element
    span.innerHTML = "";
    var i = 0;
    var intervalId = setInterval(function() {
      span.innerHTML += "Css"[i];
      i++;
      if (i >= "Css".length) {
        clearInterval(intervalId);
        texteActuel = 2;
      }
    }, 100);
  } else if (texteActuel == 2) {
    span.innerHTML = "";
    var i = 0;
    var intervalId = setInterval(function() {
      span.innerHTML += "Javascript"[i];
      i++;
      if (i >= "Javascript".length) {
        clearInterval(intervalId);
        texteActuel = 3;
      }
    }, 100);
  } else {
    span.innerHTML = "";
    var i = 0;
    var intervalId = setInterval(function() {
      span.innerHTML += "html"[i];
      i++;
      if (i >= "html".length) {
        clearInterval(intervalId);
        texteActuel = 1;
      }
    }, 100);
  }
}

var intervalId = setInterval(changerTexte, 2000); // Appelle la fonction toutes les 2 secondes