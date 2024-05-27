var numero1 = prompt("Por favor, ingresa el primer numero: ")

var numero2 = prompt("Por favor, ingresa el segundo numero: ")

function multiplicar(num1,num2) {
     
    var resultado = num1*num2

    return "el resultado de multiplicar " + num1 + " y " + num2 + " es: " + resultado

}

console.log(multiplicar(numero1,numero2))