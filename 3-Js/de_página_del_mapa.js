const data = [
{tipo:"Hueco", estado:"Pendiente", canton:"San José"},
{tipo:"Basura", estado:"En Revisión", canton:"Heredia"},
{tipo:"Semáforo", estado:"Resuelto", canton:"Alajuela"},
{tipo:"Hueco", estado:"Resuelto", canton:"San José"}
];

const contenedor = document.getElementById("reportes");

// MOSTRAR REPORTES
function mostrar(lista){
contenedor.innerHTML = "";

lista.forEach(r=>{
contenedor.innerHTML += `
<div class="card">
  <div>
    <b>${r.tipo}</b><br>
    ${r.canton}
  </div>
  <div class="estado ${claseEstado(r.estado)}">
    ${r.estado}
  </div>
</div>
`;
});
}

// CLASE COLOR
function claseEstado(estado){
if(estado === "Pendiente") return "pendiente";
if(estado === "En Revisión") return "revision";
if(estado === "Resuelto") return "resuelto";
}

// FILTRO
function filtrar(){
const tipo = document.getElementById("tipo").value;
const estado = document.getElementById("estado").value;
const canton = document.getElementById("canton").value;

const resultado = data.filter(r=>{
return (!tipo || r.tipo===tipo) &&
(!estado || r.estado===estado) &&
(!canton || r.canton===canton);
});

mostrar(resultado);
}

// EVENTOS
document.getElementById("tipo").onchange = filtrar;
document.getElementById("estado").onchange = filtrar;
document.getElementById("canton").onchange = filtrar;

// PINES EN MAPA
const mapa = document.getElementById("mapa");

for(let i=0;i<6;i++){
let pin = document.createElement("div");
pin.className = "pin";
pin.style.top = Math.random()*260 + "px";
pin.style.left = Math.random()*90 + "%";
mapa.appendChild(pin);
}

// INICIO
mostrar(data);

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