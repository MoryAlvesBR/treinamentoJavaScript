
class Automovel {
    constructor (nome,marca,modelo,paisOrigem){
        this.nome = nome
        this.marca = marca
        this.modelo = modelo
        this.paisOrigem = paisOrigem
    }

}

var car = new Automovel('Toro','Fiat', '2021','Italia')
var car1 = new Automovel('Fusca', 'Volkswagem', '1983', 'Alemanha')
var lista = [car,car1]
console.log(lista);

for (let list of lista) {
    console.log(list);
}


function criandoObjeto(nome, marca, modelo, paisOrigem){
    automovel = {
        nome: nome,
        marca: marca,
        modelo: modelo,
        paisOrigem: paisOrigem,
    }
    return automovel
}   
var objeto = criandoObjeto('Cayenne','Porsche','2022','Alemanha');
console.log(objeto);


objeto.cor = 'Vermelho';


delete objeto.paisOrigem;
console.log(objeto);



