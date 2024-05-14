//1 y 2

let misDatos = {
    nombre : 'Matias',
    apellido : 'Royan',
    dni : '46649902',
    comidasfavoritas : ['hamburguesa', 'empanadas', 'milanesa de carne'],
    saludar : function(){
        return 'Hola mi nombre es ' + this.nombre + " " + this.apellido + " tengo 19 años." + " " + "Mi comida favorita es la " + this.comidasfavoritas[0]
    }

}

console.log(misDatos.saludar())

//3

let auto = {
    marca : 'mercedes',
    modelo : 'AMG Gtr',
    año : '2017',
    color : 'Negro',
    posicion : 0,
    avanzar : function(n){
        return this.posicion += n
    },
    retroceder : function(n){
        return this.posicion -= n 

    }
 
}

console.log(auto.avanzar(1000))
console.log(auto.retroceder(300))

//4

let auto1 = {
    marca : 'mercedes',
    modelo : 'AMG Gtr',
    año : '2017',
    color : 'Negro',
    posicion : 0,
    moverse : function(n){
        

    }


}

//5

let ironMan = {
    nombre : 'Iron Man',
    equipo : 'Avengers',
    poderes : ['Volar', 'Lanzar misiles', 'Disparar láser'],
    energía : 100,
    getPoder : function(y){
        this.energía = this.energía - 10
        return `Poder elegido de ${this.nombre}: ${this.poderes[y]}. Energía restante: ${this.energía}.`;
    }
    
}

console.log(ironMan.getPoder(1))  
console.log(ironMan.getPoder(0))  
console.log(ironMan.getPoder(2))  

let Hulk = {
    nombre : 'Hulk',
    equipo : 'Avengers',
    poderes : ['Aplastar', 'Gritar', 'Golpear'],
    energía : 100,
    getPoder : function(x){
        this.energía = this.energía - 10
        return `Poder elegido de ${this.nombre}: ${this.poderes[x]}. Energía restante: ${this.energía}.`;
    }
    
}

console.log(Hulk.getPoder(1)) 
console.log(Hulk.getPoder(0))
console.log(Hulk.getPoder(2))  