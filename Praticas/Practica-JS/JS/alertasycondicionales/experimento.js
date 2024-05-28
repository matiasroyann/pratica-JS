var nombre = prompt("ingrese su nombre: ")

console.log("nombre de usuario:", nombre)

var edad = prompt("ingrese su edad: ")

console.log("edad del usuario", edad)

var fandeportes = confirm("¿Te gustan los deportes?")

console.log("el usuario es fan de los deportes:", fandeportes)

alert("muchas gracias " + nombre + " por responder las preguntas")

let usuario = {
    nombre: nombre,
    edad: edad,
    fandeportes: fandeportes,
    deportistaProfesional: function(){
        if(this.fandeportes){
            return "Sí, soy fan de los deportes"
        } else{
            return "No soy tan fan aún de los deportes"
        }
    
    }
}

console.log(usuario.deportistaProfesional())