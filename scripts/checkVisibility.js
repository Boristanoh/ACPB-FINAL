// Fonction pour vérifier la visibilité pour une classe donnée
export function checkVisibility(className,animation,nombre) {

    //   var element = document.querySelector(className);
      var isVisible = false; // Booléen pour suivre si l'élément est déjà visible
    
      // Vérifier si l'élément est potentiellement visible
      if (!isVisible) {
        var position = className.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;
        if (position < screenHeight*nombre) {
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


  // Fonction pour vérifier la visibilité pour une classe donnée
  export function checkVisibilityAniamtionhaut(className,animation) {
 
    //   var element = document.querySelector(className);
      
      
    
      // Vérifier si l'élément est potentiellement visible
     
        var position = className.getBoundingClientRect();
        var screenHeight = window.innerHeight;
        if (position.top < screenHeight * 0.95 ) {
    
          if(!className.classList.contains(animation)){
            
          className.classList.add(animation);
          // console.log(className)
      
        }
        }
        else{
            className.classList.remove(animation);
        }
    
    }
    