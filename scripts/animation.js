



document.addEventListener("DOMContentLoaded", function() {
  // Liste des classes à traiter


  var classesToCheck = document.querySelectorAll("main section");
  console.log(classesToCheck)

  // Écouter l'événement de scroll et appeler la fonction pour chaque classe
  document.addEventListener("scroll", function() {
    classesToCheck.forEach(function(className) {
      checkVisibility(className,"animation-entrer-droit");
    });
  });

  // Appeler la fonction pour vérifier la visibilité au chargement du DOM pour chaque classe
  classesToCheck.forEach(function(className) {
    checkVisibility(className,"animation-entrer-droit");
  });
});

// Fonction pour vérifier la visibilité pour une classe donnée
function checkVisibility(className,animation) {
//   var element = document.querySelector(className);
  var isVisible = false; // Booléen pour suivre si l'élément est déjà visible

  // Vérifier si l'élément est potentiellement visible
  if (!isVisible) {
    var position = className.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    if (position < screenHeight*0.5) {
        // className.classList.remove(".animation-sortir-droit")
      className.classList.add(animation);
      isVisible = true; // Marquer l'élément comme visible
    }
    else{
        className.classList.remove(animation);
        // className.classList.add(".animation-sortir-droit")
        isVisible = false;
        
    }
  }

}



