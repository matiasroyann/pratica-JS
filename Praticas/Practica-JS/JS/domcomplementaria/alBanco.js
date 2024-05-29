let diaSemana = prompt("Ingrese un día de la semana:").toLowerCase();
let hora = prompt("Ingrese la hora actual (HH:mm):");

let respuestaf = document.querySelector(".respuesta");


let partesHora = hora.split(":");


let horaNum = parseInt(partesHora[0]);

if (
    (diaSemana === "lunes" ||
        diaSemana === "martes" ||
        diaSemana === "miércoles" ||
        diaSemana === "jueves" ||
        diaSemana === "viernes") &&
    horaNum >= 10 &&
    horaNum < 15
) {
    respuestaf.textContent =
        "¡Bien! Todavía estamos a tiempo de llegar al banco.";
} else {
    respuestaf.textContent = "Uf... No llegamos al banco.";
}
