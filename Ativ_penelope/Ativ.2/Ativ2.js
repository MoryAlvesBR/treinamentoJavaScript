console.log("Hello World!");

class Automovel{
    constructor(nome,marca,modelo,paisOrigem){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;



    }
}


var car1 = new Automovel(["Soul","Kia","Flex","Coreia"])
var car2 = new Automovel(["Gol","volkswagen","Flex","Brazil"])


var listOne = Object.keys(car1);
console.log(listOne);

for(var i = 0; i < listOne.length; i++){
    console.log(car1[listOne[i]]);
}

var listTwo = Object.keys(car2);
console.log(listTwo);

for(var e = 0; e < listTwo.length; e++){
    console.log(car2[listTwo[e]]);
}
console.log("")
console.log("")


//PARTE 2
class Carro{
    constructor(nome,marca,modelo,cor){
    this.nome = nome;
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    }
}

var car = new Carro(["Gol","volkswagen","Flex","vermelho"])


var listthree = Object.keys(car);
console.log(listthree);

for(var i = 0; i < listthree.length; i++){
    console.log(car[listthree[i]]);
}
