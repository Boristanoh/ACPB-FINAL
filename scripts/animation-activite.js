// Fonction pour redémarrer l'animation
function restartAnimation() {
var imageSlider = document.querySelector('.start');
imageSlider.style.animation = 'none'; // Annuler l'animation
void imageSlider.offsetWidth; // Forcez une réinitialisation
imageSlider.style.animation = null; // Réinitialiser l'animation
}

// Écouter l'événement visibilitychange
document.addEventListener('visibilitychange', function() {
if (document.visibilityState === 'visible') {
    // La page est maintenant visible, redémarrer l'animation
    restartAnimation();
}
});
