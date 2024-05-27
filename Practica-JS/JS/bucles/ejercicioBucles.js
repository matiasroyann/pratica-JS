//Precalentando

//1
for(let i=0; i<6; i++){
    console.log(`Practicando con el bucle for`);
}

//2
for(let i = 0; i <= 10; i++){
    console.log(`La variable i tiene el valor ${i}`);
}

//3
for(let i=2; i <= 20; i+=2){
    console.log(`${i}`)
}


for(let i=5; i <= 250; i+=5){
    console.log(`${i}`)
}

//4
for(let i=100; i>=0; i-=1){
    console.log(`${i}`)
}

//Tablas de multiplicar

//1

let base = 2

let resultados = []

//2 y 3

for(let i=0; i<=10; i++){
    resultados.push(base * i);
}

//4

console.log(resultados)

//Obteniendo el total 

//1 y //2
let ganancias = [-2,8,5,13,14,-15,-1,9,10,-6]

//3
let suma = 0

for(let i=0; i<10; i++){
    suma += ganancias[i]
}

console.log("ganancias:", suma) 

//Recorriendo arrays

//1

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ]

for(let i=0; i<=healingIsDifficult.length; i++){
    console.log(healingIsDifficult[i])
}
    
//2

for(let i=0; i<healingIsDifficult.length; i++){
    console.log(`${i + 1} ${healingIsDifficult[i]}`)
}

//Recorriendo arrays de Objetos Literales

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

//1

for(let i=0; i<got.length; i++){
    console.log(`Hola ${got[i].nombre} ${got[i].nombre} criatura viajera!`)
}
//2

for(let i=0; i<got.length; i++){
    console.log(`Soy ${got[i].nombre} ${got[i].apellido} de la ciudad ${got[i].ciudad}`)
}