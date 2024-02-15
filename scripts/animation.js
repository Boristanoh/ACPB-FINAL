import { checkVisibilityAniamtionhaut,checkVisibility} from "./checkVisibility.js";



document.addEventListener("DOMContentLoaded", function() {
  // Liste des classes à traiter


  var classesToCheck = document.querySelectorAll("main section");
  console.log("enfinnnn")
  console.log(classesToCheck)

  // Écouter l'événement de scroll et appeler la fonction pour chaque classe
  document.addEventListener("scroll", function() {
    classesToCheck.forEach(function(className,index) {
      if(index%2===0){
        checkVisibility(className,"animation-entrer-droit",0.95);
      }else{
        checkVisibility(className,"animation-entrer-gauche",0.95);
      }
    });
  });

  // Appeler la fonction pour vérifier la visibilité au chargement du DOM pour chaque classe
  classesToCheck.forEach(function(className,index) {
    if(index%2===0){
      checkVisibility(className,"animation-entrer-droit",0.95);
    }else{
      checkVisibility(className,"animation-entrer-gauche",0.95);
    }
  
  });
});





