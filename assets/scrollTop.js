window.addEventListener("scroll", function(){
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('voltar', window.scrollY > 250)
})