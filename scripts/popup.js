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
    document.getElementById("formulaire").inert = true
    document.getElementById("loading-icon").style.display = "block"
    
    

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
        sendresponse(email.toLowerCase(),name)
      console.log('E-mail envoyé avec succès :', response);
      
      // Réinitialisez les champs du formulaire
      document.getElementById('email').value = '';
      document.getElementById('objet').value = '';
      document.getElementById('message').value = '';
      document.getElementById('nom').value = '';
      document.getElementById("loading-icon").style.display = "none"
      document.getElementById("formulaire").inert = false
      
    }, function(error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
      document.getElementById("loading-icon").style.display = "none"
      document.getElementById("formulaire").inert = false
      alert('Erreur lors de l\'envoi de l\'e-mail :');
      document.getElementById('error-message').textContent = 'Erreur lors de l\'envoi de l\'e-mail.';

    });
    
  }
  
}

function sendresponse(ReceiveEmail,ReceiveName){
    fetch('https://api.sendinblue.com/v3/smtp/email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': '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'
  },
  body: JSON.stringify({
    sender: { name: 'Association des Classes Préparatoires Biologiques(ACPB)', email: 'acpb.inphb@gmail.com' },
    to: [{ email: ReceiveEmail }],
    subject: 'Réponse automatique - Réception de votre message',
    textContent: ` 
     Bonjour ${ReceiveName},
    
    Nous vous remercions d'avoir pris le temps de nous envoyer votre avis/question. Veuillez noter que cette réponse est automatique pour confirmer la réception de votre message.
    
    Nous avons bien reçu votre message et nous vous en sommes reconnaissants.
    
    Votre contribution est précieuse pour nous et nous nous engageons à l'examiner attentivement. Nous vous fournirons une réponse détaillée dès que possible.
    
    En attendant, n'hésitez pas à nous contacter si vous avez d'autres questions ou préoccupations.
    
    Cordialement,
    
    Association des Classes Préparatoires Biologiques(ACPB)

    E-mail: acpb.inphb@gmail.com`
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Erreur lors de l\'envoi de l\'e-mail');
  }
  console.log('E-mail envoyé avec succès');
})
.catch(error => console.error('Erreur:', error));

}
// Initialisez Email.js avec votre User ID
emailjs.init("ebo48V2ej9i53Mrb7");
initAddEventListenerPopup()
