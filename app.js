const form = document.querySelector("form")
const input = document.querySelector("input");
const response = document.querySelector(".response");
const error = document.querySelector(".error")
form.addEventListener("submit", (e)=>{
     e.preventDefault();
     if (input.value=="") {
         response.classList.add("show");
         error.classList.add("show")
     }else  if (!input.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))  
     {
        response.classList.add("show");
        error.classList.add("show")
     } else{
        response.classList.remove("show");
        error.classList.remove("show")
        //alert("Good email")
     }
})