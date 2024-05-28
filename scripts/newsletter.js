// Code JavaScript côté client
fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email: 'email@example.com' }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
.then(data => {
    console.log(data.message);
    if (data.resetInput) {
        document.getElementById('email-input').value = '';
    }
})
.catch(error => console.error('Erreur:', error));


// document.addEventListener('DOMContentLoaded', function() {
//     // Sélectionnez le formulaire par son ID ou une autre méthode appropriée
//     const form = document.getElementById('newsletterForm');

//     // Ajoutez un gestionnaire d'événement pour l'événement de soumission du formulaire
//     form.addEventListener('submit', function(event) {
//         // Empêchez le comportement par défaut du formulaire (rechargement de la page)
//         event.preventDefault();

//         // Vous pouvez effectuer d'autres actions ici, comme envoyer les données du formulaire via AJAX
//         // Exemple : envoyerDonneesFormulaire();
//     });
// });
