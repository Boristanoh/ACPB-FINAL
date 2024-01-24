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

