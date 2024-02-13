const promo = document.querySelectorAll(".promo")
const h2 = document.querySelector("h2")
const galerie = document.querySelector(".galerie")
console.log(promo)
galerie.innerHTML =""
ajout_photo("promotion 58")


promo.forEach((element,index)=>{
    
    element.addEventListener("click",()=>{
        promo.forEach((element2,index2)=>{

      element2.classList.remove("choix")        
    })
        element.classList.add("choix")
 
        h2.textContent = element.textContent
        galerie.innerHTML =""
        ajout_photo(element.textContent)
        
    })
})

function ajout_photo(chemin){
 for(let i =1;i<=9;i++){
    let baliseLien = document.createElement("a")
    let baliseImage = document.createElement("img")
    let baliseDiv = document.createElement("div")

    try{
        baliseLien.href =`assets/image/galerie/${chemin.toLowerCase()}/image${i}.jpg`
        baliseImage.src=`assets/image/galerie/${chemin.toLowerCase()}/image${i}.jpg`
        console.log("ahhhhhhhhhhhh")
    }catch(error){
        baliseLien.href =`assets/image/galerie/${chemin.toLowerCase()}/image${i}.PNG`
        baliseImage.src=`assets/image/galerie/${chemin.toLowerCase()}/image${i}.PNG`
        console.log("ehhhhhhhhhhhh")
    }
    console.log(`assets/image/galerie/${chemin.toLowerCase()}/image${i}.JPG`)
    baliseDiv.className = "photo-hover"
    baliseDiv.textContent="Voir la photo"
    baliseLien.className="lien-conteneur-image"
    // fetch(`assets/image/galerie/${chemin.toLowerCase()}/image1.JPG`).then(response => response.json()).then(files=>{
    //     console.log(files)
    // } )

    
    baliseLien.appendChild(baliseImage)
    baliseLien.appendChild(baliseDiv)
    galerie.appendChild(baliseLien)
 }
    
   
}