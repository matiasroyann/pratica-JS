var numero1 = prompt("Ingrese el primer número:");
var numero2 = prompt("Ingrese el segundo número:");


numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

var respuestaNumero = document.querySelector(".respuesta");


if (numero1 > numero2) {
    respuestaNumero.textContent = `${numero1} es el número mayor.`;
} else if (numero2 > numero1) {
    respuestaNumero.textContent = `${numero2} es el número mayor.`;
} else {
    respuestaNumero.textContent = "Ambos números son iguales.";
}
