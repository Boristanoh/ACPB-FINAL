/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score. 
 */
console.log("Boris")
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    console.log('viens ici')
    popupBackground.classList.add("active")
    document.body.classList.add("no-scroll")
    console.log(popupBackground)
}

/**
 * Cette fonction cache la popup pour partager son score. 
 */
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
    document.body.classList.remove("no-scroll")
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    btnEnvoyer = document.querySelector(".boutton-envoyer")
    
    
    let popupBackground = document.querySelector(".popupBackground")
    btnEnvoyer.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        console.log(btnEnvoyer)
        sendEmail()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
    document.getElementById("btnok").addEventListener("click", () => {
            cacherPopup()
        
    })

    
}

          
function sendEmail() {
  // Récupérez les données du formulaire
  //document.getElementById('success-message').textContent = 'E-mail envoyé avec succès!';
  var email = document.getElementById('email').value;
  var objet = document.getElementById('objet').value;
  var message = document.getElementById('message').value;
  var name = document.getElementById('nom').value;
  // Effectuez la validation personnalisée
  if (name === '' || email === '' || objet === '' || message === '') {
      alert('Veuillez remplir tous les champs du formulaire.');
      return; // Ne continuez pas avec l'envoi si la validation échoue
  }else{
    


  // Définissez les placeholders dynamiquement
  var templateParams = {
    to_email: email,
    email_subject: objet,
    email_message: message,
    user_name : name
  };

  // Envoyez l'e-mail en utilisant Email.js
  emailjs.send('service_aklc7xh', 'template_3f8dxto', templateParams)
    .then(function(response) {
        afficherPopup()
      console.log('E-mail envoyé avec succès :', response);
      
      // Réinitialisez les champs du formulaire
      document.getElementById('email').value = '';
      document.getElementById('objet').value = '';
      document.getElementById('message').value = '';
      document.getElementById('nom').value = '';
    }, function(error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
      document.getElementById('error-message').textContent = 'Erreur lors de l\'envoi de l\'e-mail.';
    });
  }
  
}
// Initialisez Email.js avec votre User ID
emailjs.init("ebo48V2ej9i53Mrb7");
initAddEventListenerPopup()
