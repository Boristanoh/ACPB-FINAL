// // JavaScript
// const promo = document.querySelectorAll(".promo");
// const h2 = document.querySelector("h2");
// const galerie = document.querySelector(".galerie");
// const lien = document.querySelectorAll(".lien-conteneur-image"); // Assurez-vous d'utiliser ".lien-conteneur-image"
// console.log(promo);
// console.log("promo4");
// galerie.innerHTML = "";

// const modal = document.getElementById('modal');
// const closeModal = document.querySelector('.close__modal');

// // Ajoutez un gestionnaire d'événements pour le clic sur le bouton de fermeture
// closeModal.addEventListener('click', function() {
//     modal.style.display = 'none'; // Masquer la fenêtre modale lors du clic sur le bouton de fermeture
// });

// promo.forEach((element, index) => {
//     element.addEventListener("click", () => {
//         promo.forEach((element2, index2) => {
//             element2.classList.remove("choix");
//         });
//         element.classList.add("choix");
//         h2.textContent = element.textContent;
//         galerie.innerHTML = "";
//         ajout_photo(element.textContent);
//     });
// });

// function ajout_photo(chemin) {
//     const imagesToPreload = [];

//     let index = 1;
//     let imageExiste = true;

//     while (imageExiste) {
//         let baliseLien = document.createElement("a");
//         let baliseImage = document.createElement("img");
//         let baliseDiv = document.createElement("div");

//         let cheminImage;
//         let extension;

//         // Vérifier si l'image existe en JPG
//         cheminImage = `assets/image/galerie/${chemin.toLowerCase()}/image${index}.JPG`;
//         extension = "JPG";

//         // Si l'image JPG n'existe pas, utiliser l'extension PNG
//         if (!imageExisteSync(cheminImage)) {
//             cheminImage = `assets/image/galerie/${chemin.toLowerCase()}/image${index}.jpg`;
//             extension = "jpg";
//         }

//         // Vérifier si l'image existe (synchroniquement)
//         imageExiste = imageExisteSync(cheminImage);

//         if (imageExiste) {
//             baliseLien.href = cheminImage;
//             baliseImage.src = cheminImage;
//             baliseImage.loading = "lazy";
//             baliseDiv.className = "photo-hover";
//             baliseDiv.textContent = "Voir la photo";
//             baliseLien.className = "lien-conteneur-image";
//             imagesToPreload.push(cheminImage);

//             baliseLien.addEventListener('click', function(event) {
//                 event.preventDefault(); // Empêcher le comportement par défaut de l'élément <a>
//                 // Ajouter votre logique pour afficher l'image en grand ici
//                 afficherImageEnGrand(cheminImage);
//             });

//             baliseLien.appendChild(baliseImage);
//             baliseLien.appendChild(baliseDiv);
//             galerie.appendChild(baliseLien);

//             index++;
//         }
//     }

//     // Préchargement sélectif des images
//     preloadImages(imagesToPreload);
//     // Modifier l'historique de navigation après l'ajout des images
//     history.pushState(null, null, window.location.pathname);
// }

// // Fonction pour vérifier si une image existe (synchroniquement)
// function imageExisteSync(url) {
//     const http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     return http.status !== 404;
// }

// function afficherImageEnGrand(imageUrl) {
//     const modalImage = document.getElementById('modal-image');
//     modalImage.src = imageUrl; // Définir la source de l'image dans la fenêtre modale
//     modal.style.display = 'block'; // Afficher la fenêtre modale
// }

// function preloadImages(images) {
//     for (let imagePath of images) {
//         const img = new Image();
//         img.src = imagePath;
//     }
// }





const promo = document.querySelectorAll(".promo");
const h2 = document.querySelector("h2");
const galerie = document.querySelector(".galerie");
console.log(promo);
console.log("promo4");
galerie.innerHTML = "";
ajout_photo("promotion 58");

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close__modal');

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton de fermeture
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Masquer la fenêtre modale lors du clic sur le bouton de fermeture
});

promo.forEach((element, index) => {
    element.addEventListener("click", () => {
        promo.forEach((element2, index2) => {
            element2.classList.remove("choix");
        });
        element.classList.add("choix");
        h2.textContent = element.textContent;
        galerie.innerHTML = "";
        ajout_photo(element.textContent);
    });
});

async function ajout_photo(chemin) {

    galerie.innerHTML = "";
    cleanUpImageLoadEvent(); 
    const imagesToPreload = [];

    let index = 1;
    let imageExiste = true;

    while (imageExiste) {
        let baliseLien = document.createElement("a");
        let baliseImage = document.createElement("img");
        let baliseDiv = document.createElement("div");

        let cheminImage;
        let extension;

        // Vérifier si l'image existe en JPG
        cheminImage = `assets/image/galerie/${chemin.toLowerCase()}/image${index}.JPG`;
        extension = "JPG";

        // Si l'image JPG n'existe pas, utiliser l'extension PNG
        if (!await imageExisteAsync(cheminImage)) {
            cheminImage = `assets/image/galerie/${chemin.toLowerCase()}/image${index}.jpg`;
            extension = "jpg";
        }

        // Vérifier si l'image existe (asynchrone)
        imageExiste = await imageExisteAsync(cheminImage);

        if (imageExiste) {
            baliseLien.href = cheminImage;
            baliseImage.src = cheminImage;
            baliseImage.loading = "lazy";
            baliseDiv.className = "photo-hover";
            baliseDiv.textContent = "Voir la photo";
            baliseLien.className = "lien-conteneur-image";
            imagesToPreload.push(cheminImage);

            const loadingIcon = document.createElement("div");
            loadingIcon.className = "loading-icon";
            loadingIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            baliseLien.appendChild(loadingIcon);
            baliseImage.addEventListener("load", () => {
                loadingIcon.style.display = "none"; // Cacher l'icône de chargement une fois que l'image est chargée
            });

            baliseLien.addEventListener('click', function(event) {
                event.preventDefault(); // Empêcher le comportement par défaut de l'élément <a>
                // Ajouter votre logique pour afficher l'image en grand ici
                afficherImageEnGrand(cheminImage);
            });

            baliseLien.appendChild(baliseImage);
            baliseLien.appendChild(baliseDiv);
            galerie.appendChild(baliseLien);
            // Ajout de l'événement de chargement à chaque image
         


            index++;
        } else {
            break; // Si l'image n'existe pas, sortir de la boucle
        }
        
        
     
    }
    console.log("avant-loading")
    window.addEventListener('load', function() {
        // Vérifier si la première image n'a pas déjà été chargée pour éviter de déclencher l'événement plusieurs fois
        if (!firstImageLoaded) {
            const firstImage = document.querySelector('.galerie img');
            firstImage.onload = function() {
                document.getElementById('gallery-loading').style.display = 'none'; // Masquer le texte de chargement
                document.querySelector('.galerie').style.backgroundColor = 'red'; // Rétablir la couleur de fond par défaut
                firstImageLoaded = true; // Marquer la première image comme chargée
            };
        }
    });

   

    // Préchargement sélectif des images
    preloadImages(imagesToPreload);
    // Modifier l'historique de navigation après l'ajout des images
    history.pushState(null, null, window.location.pathname);
   


}


// Fonction pour vérifier si une image existe (asynchrone)
async function imageExisteAsync(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.error("Une erreur s'est produite lors de la vérification de l'existence de l'image:", error);
        return false;
    }
}

function afficherImageEnGrand(imageUrl) {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl; // Définir la source de l'image dans la fenêtre modale
    modal.style.display = 'block'; // Afficher la fenêtre modale
}

function preloadImages(images) {
    for (let imagePath of images) {
        const img = new Image();
        img.src = imagePath;
    }
}


function cleanUpImageLoadEvent() {
    const images = document.querySelectorAll('.galerie img');
    images.forEach(image => {
        image.removeEventListener('load', handleImageLoad);
    });
}