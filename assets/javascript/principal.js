//import listado from "./servidores.js" 
//console.log(listado)
let servidores;

fetch("../../servidores.json")
    .then((datos)=>{
        //si lo paso de un then a otro tengo que hacer un return
        return datos.json()
    }
)
.then(
    (datos)=>{

        servidores = datos
        console.log(servidores)
    }
)