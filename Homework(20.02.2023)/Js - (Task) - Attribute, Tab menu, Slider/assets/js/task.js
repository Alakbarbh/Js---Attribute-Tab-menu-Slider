let btn = document.querySelector(".button .btn")
let border = document.querySelector(".borders")
let icon = document.querySelector(".general .borders i")



btn.addEventListener("click",function(){
    border.classList.add("active")
    this.classList.add("d-none")
})

icon.addEventListener("click",function(){
    border.classList.remove("active")
    btn.classList.remove("d-none")
})