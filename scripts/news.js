// Obtenir la date actuelle
const currentDate = new Date();

// Fonction de comparaison pour trier les objets par proximité avec la date actuelle
news.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-')); // Convertir la date en format YYYY-MM-DD
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    
    // Calculer la différence de temps par rapport à la date actuelle
    const diffA = Math.abs(currentDate - dateA);
    const diffB = Math.abs(currentDate - dateB);

    // Trier par dates les plus récentes par rapport à la date actuelle
    return diffA - diffB;
});

console.log("okk")
console.log(news);



const page = document.querySelector(".bloc-news");
page.innerHTML =""

news.forEach(actualite => {
    console.log(actualite)
    const section = document.createElement("section")
    section.className="animation-individuelle";

    //insertion image
    const div_image = document.createElement('div')
    const image = document.createElement('img')
    image.src = `assets/image/news/${actualite.image}`
    div_image.appendChild(image)
    

    //insertion texte
    div_texte = document.createElement("div")
    div_date= document.createElement("div")
    div_date.className="date"
    div_date.textContent = actualite.date

    div_type= document.createElement("div")
    div_type.className="type"
    div_type.textContent = actualite.type

    titre =document.createElement("h2")
    titre.textContent = actualite.nom

    texte = document.createElement("p")
    texte.textContent = actualite.information

    lien = document.createElement("a")
    lien.innerHTML = '<i class="fa-solid fa-link"></i>Plus d\'informations'
    lien.href=actualite.lien

    div_texte.appendChild(div_date)
    div_texte.appendChild(div_type)
    div_texte.appendChild(titre)
    div_texte.appendChild(texte)
    div_texte.appendChild(lien)




    section.appendChild(div_image)
    section.appendChild(div_texte)





    page.appendChild(section)


});


console.log(news)
