import { checkVisibilityAniamtionhaut, checkVisibility} from "./checkVisibility.js";
document.addEventListener("DOMContentLoaded", function() {
    // Liste des classes à traiter
    
  
  
    var elements= document.querySelectorAll("section,.school,.pbox div,h2,.animation-individuelle");
    
  
    // Écouter l'événement de scroll et appeler la fonction pour chaque classe
    document.addEventListener("scroll", function() {
      elements.forEach(function(className) {
        checkVisibilityAniamtionhaut(className,"animation-entrer-haut");
      });
    });
    document.addEventListener("resize", function() {
      elements.forEach(function(className) {
        checkVisibilityAniamtionhaut(className,"animation-entrer-haut");
      });
    });
  
    // Appeler la fonction pour vérifier la visibilité au chargement du DOM pour chaque classe
    elements.forEach(function(className) {
      checkVisibilityAniamtionhaut(className,"animation-entrer-haut");
    });
  });
  
  
  
