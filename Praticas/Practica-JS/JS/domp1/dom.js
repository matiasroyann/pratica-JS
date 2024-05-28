alert("Bienvenidos a mi sitio");

let confirmacion = confirm("¿Estas seguro que deseas avanzar?");

let saludo = document.querySelector('.saludo');

if (confirmacion) {
    saludo.textContent = "Qué alegría que quieras continuar tu visita";

} else{
    saludo.textContent = "Lamentamos que no quieras continuar tu visita" ;
    throw new Error("El usuario no decidio continuar");

}

let nombre = prompt("Ingrese su nombre:");
document.querySelector('h1').textContent = `Bienvenido ${nombre}`;

let edad = parseInt(prompt("¿cuantos años tienes?"));
if (edad < 18) {
    document.querySelector('.container-general').classList.add('hidden');
    document.querySelector('#accesoDenegado').classList.remove('hidden');
    throw new Error("El usuario no tiene mas 18 años o mas");
}

let programacion = confirm("¿Te gusta la programacion?")
let img = document.querySelector('.background-img') 
if (programacion) {
    img.style.backgroundImage = "url('img/programmer.jpeg')";
} else {
    img.style.backgroundImage = "url('img/gatito.jpeg')";
}

let url = prompt("Ingrese la URL de su imagen:")
let avatarimg = document.querySelector('.avatar')
avatarimg.src = url

let pelicula = {
    nombre: prompt("nombre de pelicula favorita"),
    director: prompt("nombre del director"),
    duracion: prompt("Duracion"),
    actor: prompt("actor")
}
document.querySelector("#nombre").innerText = pelicula.nombre
document.querySelector("#director").innerText = pelicula.director
document.querySelector("#duracion").innerText = pelicula.duracion
document.querySelector("#actor").innerText = pelicula.actor


let listapelicula = document.querySelector('#pelicula ul')


let desocultar = document.querySelector("div#pelicula")
desocultar.style.display = "block"