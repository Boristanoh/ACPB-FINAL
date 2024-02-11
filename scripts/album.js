const promo = document.querySelectorAll(".promo")
const h2 = document.querySelector("h2")
console.log(promo)


promo.forEach((element,index)=>{
    
    element.addEventListener("click",()=>{
        promo.forEach((element2,index2)=>{

      element2.classList.remove("choix")        
    })
        element.classList.add("choix")
 
        h2.textContent = element.textContent
        
    })
})