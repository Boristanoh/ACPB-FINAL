var sidenav = document.querySelector(".navbarlink")
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var navbar = document.querySelector(".navbar")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  console.log(1)
  openBtn.classList.add("ferme");
  sidenav.classList.add("active");
  navbar.classList.add("boutton");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");

  navbar.classList.remove("boutton");
  openBtn.classList.remove("ferme");
}


document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.querySelector('.start__p2');
  const textToAnimate = "La BCP-ST plus qu'une famille.";

  const textElement2 = document.querySelector('.start__p1');
  textElement.textContent = "";
  const textToAnimate2 = "Association  des Classes Préparatoires Biologiques ";

  function typeText(textElement, textToAnimate, callback) {
    textElement.textContent = "";
    let i = 0;

    function type() {
      if (i < textToAnimate.length) {
        textElement.textContent += textToAnimate.charAt(i);
        i++;
        setTimeout(type, 70); // Contrôle la vitesse de frappe
      } else {
        // Appel de la fonction de rappel une fois que le texte est entièrement écrit
        callback();
      }
    }

    type();
  }

  // Première animation
  typeText(textElement2, textToAnimate2, function () {
    // Fonction de rappel appelée lorsque le texte 1 est entièrement écrit
    // Démarrez la deuxième animation ici
    typeText(textElement, textToAnimate, function () {
      // Fonction de rappel pour la deuxième animation si nécessaire
    });
  });
});






document.addEventListener("DOMContentLoaded", function() {
  // Liste des classes à traiter


  var newsletter= document.querySelectorAll(".newsletter");
  console.log(newsletter)

  // Écouter l'événement de scroll et appeler la fonction pour chaque classe
  document.addEventListener("scroll", function() {
    newsletter.forEach(function(className) {
      checkVisibility(className,"animation-entrer-bas");
    });
  });

  // Appeler la fonction pour vérifier la visibilité au chargement du DOM pour chaque classe
  newsletter.forEach(function(className) {
    checkVisibility(className,"animation-entrer-bas");
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
    if (position < screenHeight * 1) {
        // className.classList.remove(".animation-sortir-droit")
      className.classList.add(animation);
      console.log(1,className)
      isVisible = true; // Marquer l'élément comme visible
    }
    else{
        className.classList.remove(animation);
        // className.classList.add(".animation-sortir-droit")
        isVisible = false;
        
    }
  }

}







document.addEventListener("DOMContentLoaded", function() {
  // Liste des classes à traiter


  var bloc__preisdent= document.querySelectorAll(".bloc__preisdent");
  

  // Écouter l'événement de scroll et appeler la fonction pour chaque classe
  document.addEventListener("scroll", function() {
    bloc__preisdent.forEach(function(className) {
      checkVisibility(className,"animation-entrer-haut");
    });
  });

  // Appeler la fonction pour vérifier la visibilité au chargement du DOM pour chaque classe
  bloc__preisdent.forEach(function(className) {
    checkVisibility(className,"animation-entrer-haut");
  });
});

// Fonction pour vérifier la visibilité pour une classe donnée
function checkVisibility(className,animation) {
//   var element = document.querySelector(className);
  var isVisible1 = false; // Booléen pour suivre si l'élément est déjà visible
  

  // Vérifier si l'élément est potentiellement visible
  if (!isVisible1) {
    var position = className.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    if (position < screenHeight * 1) {
        // className.classList.remove(".animation-sortir-droit")
      className.classList.add(animation);
      console.log(2,className)
      isVisible1 = true; // Marquer l'élément comme visible
    }
    else{
        className.classList.remove(animation);
        // className.classList.add(".animation-sortir-droit")
        isVisible1 = false;
        
    }
  }

}
