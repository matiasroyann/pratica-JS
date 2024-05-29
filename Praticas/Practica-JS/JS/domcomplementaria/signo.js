let numero = prompt("Ingrese un numero:");

numero = parseFloat(numero);

let respuestaNumero = document.querySelector(".respuesta");

if (numero > 0) {
    respuestaNumero.textContent = "El número " + numero + " es positivo.";
} else if (numero === 0) {
    respuestaNumero.textContent = "El número " + numero + " es cero.";
} else {
    respuestaNumero.textContent = "El número " + numero + " es negativo.";
}
