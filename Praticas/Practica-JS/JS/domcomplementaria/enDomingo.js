let dia = prompt("¿Qué día es hoy?").toLowerCase();

let respuestaDia = document.querySelector(".respuesta");

if (dia === "domingo") {
    respuestaDia.textContent = "¡Pongamos la olla, hoy se comen pastas!";
} else {
    respuestaDia.textContent = "Mejor lo dejamos para el domingo";
}

