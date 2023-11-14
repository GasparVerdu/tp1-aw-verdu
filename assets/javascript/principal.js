import listado from "./servidores.js" 
//console.log(listado)

const contenedor = document.getElementById("contenedor")

let contenidohtml = "";

listado.servidores.forEach((serv)=>{
    serv.nombre;
    contenidohtml += `<div class="card">
    <div class="card__name">${serv.nombre}</div>
    <div class="card__players">${serv.jugadores}</div>
    <div class="card__ip">${serv.direccionip}</div>
    <div class="card__link"><a href="${serv.link}">CONNECT</a></div>
</div>`
})

contenedor.innerHTML = contenidohtml


