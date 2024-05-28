var nacionalidad = prompt("ingrese su nacionalidad: ")

var profesion = prompt("ingrese su profesion: ")

var kilometros = prompt("ingrsese cuantos kilometros camina por dia: ")

function fliosofoHipster(nacionalidad, profesion, kmsRecorridos){
    if(nacionalidad.toLowerCase() === "argentino" && profesion.toLowerCase()=== "musico" && parseInt(kmsRecorridos)>2){
        return "Soy un filosofo hipster"
    } else{
        return "aun no soy filosofo Hipster"
    }

}

console.log(fliosofoHipster(nacionalidad,profesion,kilometros))