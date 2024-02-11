console.log("test")
const faqs = document.querySelectorAll(".faqs")

faqs.forEach((faq,index) =>{ 
    faq.addEventListener("click",()=>{
       
        faqs.forEach((faq2,index2) =>{
            if(index !=index2){
                faq2.classList.remove("active")
            }
         
        })
        faq.classList.toggle("active")

        console.log(faq)
    })}
   
)

console.log(faqs)