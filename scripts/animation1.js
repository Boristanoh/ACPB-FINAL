
document.addEventListener("DOMContentLoaded", function() {
    // Liste des classes à traiter
  
  
    var bloc__preisdent= document.querySelectorAll("section,.school,.pbox div,h2");
    
  
    // Écouter l'événement de scroll et appeler la fonction pour chaque classe
    document.addEventListener("scroll", function() {
      bloc__preisdent.forEach(function(className) {
        checkVisibilityAniamtionhaut(className,"animation-entrer-haut");
      });
    });
  
    // Appeler la fonction pour vérifier la visibilité au chargement du DOM pour chaque classe
    bloc__preisdent.forEach(function(className) {
      checkVisibilityAniamtionhaut(className,"animation-entrer-haut");
    });
  });
  
  
  
  // Fonction pour vérifier la visibilité pour une classe donnée
  function checkVisibilityAniamtionhaut(className,animation) {
  //   var element = document.querySelector(className);
    
    
  
    // Vérifier si l'élément est potentiellement visible
   
      var position = className.getBoundingClientRect();
      var screenHeight = window.innerHeight;
      if (position.top < screenHeight * 0.95 ) {
  
        if(!className.classList.contains(animation)){
          
        className.classList.add(animation);
        console.log(className)
    
      }
      }
      else{
          className.classList.remove(animation);
      }
  
  }
  