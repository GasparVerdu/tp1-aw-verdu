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
    <div class="card__link">${serv.link}</div>
</div>`
})

//contenedor.innerHTML = "hola tienda"


//let servidores;

//fetch("../../servidores.json")
//    .then((datos)=>{
//        //si lo paso de un then a otro tengo que hacer un return
//        return datos.json()
//    }
//)
//.then(
//    (datos)=>{
///
//        servidores = datos
//        console.log(servidores)
//    }
//)


