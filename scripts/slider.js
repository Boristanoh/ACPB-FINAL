// document.addEventListener("DOMContentLoaded", function() {
//     const sliderContent = document.querySelector('.slider-content');
//     let currentIndex = 0;
  
//     function nextSlide() {
//       currentIndex++;
//       if (currentIndex >= 3) { // Ajustez le nombre en fonction du nombre total de slides
//         currentIndex = 0;
//       }
//       updateSlider();
//     }
  
//     function prevSlide() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = 2; // Ajustez le nombre en fonction du nombre total de slides
//       }
//       updateSlider();
//     }
  
//     function updateSlider() {
//       const translateValue = -currentIndex * 100 + '%';
//       sliderContent.style.transform = 'translateX(' + translateValue + ')';
//     }
  
//     setInterval(nextSlide, 5000); // Défilement automatique toutes les 5 secondes (ajustez si nécessaire)
  
//     // Vous pouvez également ajouter des boutons ou d'autres éléments pour permettre aux utilisateurs de contrôler le slider
//   });


document.addEventListener("DOMContentLoaded", function() {
    const sliderContent = document.querySelector('.slider-content');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= 3) { // Ajustez le nombre en fonction du nombre total de slides
        currentIndex = 0;
      }
      updateSlider();
    }
  
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = 2; // Ajustez le nombre en fonction du nombre total de slides
      }
      updateSlider();
    }
  
    function updateSlider() {
      const translateValue = -currentIndex * 100 + '%';
      sliderContent.style.transform = 'translateX(' + translateValue + ')';
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    setInterval(nextSlide, 5000); // Défilement automatique toutes les 5 secondes (ajustez si nécessaire)
  });
  