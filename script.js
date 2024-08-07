let modal=document.querySelector(".modal")
let overlay=document.querySelector(".overlay")
let closeBtn=document.querySelector(".close-modal")
let modalBtns=document.querySelectorAll(".show-modal")

modalBtns.forEach(function(btn){
    btn.addEventListener("click",function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })   
})

function closeModalFunction(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

closeBtn.addEventListener("click",closeModalFunction)
overlay.addEventListener("click",closeModalFunction)
document.addEventListener("keydown",function(e){
    if (e.key == "Escape"){
       closeModalFunction()
    }
})