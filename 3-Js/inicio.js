
document.addEventListener("DOMContentLoaded", function(){
    const botonHamburguesa = document.getElementById("hamburguesa")
    const menu = document.getElementById("menu")
    const header = document.querySelector("header");
    const enlacesMenu = document.querySelectorAll(".menu a")

    if(botonHamburguesa && menu) {
        botonHamburguesa.addEventListener("click", function(){
            menu.classList.toggle("activo");
            botonHamburguesa.classList.toggle("abierto")

        });

        enlacesMenu.forEach(function(enlace){
            enlace.addEventListener("click", function(){
                menu.classList.remove("activo")
                botonHamburguesa.classList.remove("abierto")
            })
        })
    }
    window.addEventListener("scroll", function(){
        if (window.scrollY > 50){
            header.classList.add("scrolled")
        }else{
            header.classList.remove("scrolled")
        }
    })
})