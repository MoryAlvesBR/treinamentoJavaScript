class Automovel {
    constructor (nome,marca,modelo,paisOrigem){
        this.nome = nome
        this.marca = marca
        this.modelo = modelo
        this.paisOrigem = paisOrigem
    }

}

var car = new Automovel('Toro','Fiat', '2021','Italia')
var car1 = new Automovel('Cayenne','Porsche','2022','Alemanha')
var lista = [car,car1]
console.log(lista);

for (let list of lista) {
    console.log(list);
}
