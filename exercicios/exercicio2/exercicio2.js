// 1. Deve possuir os seguintes atributos
//     1. nome
//     2. marca
//     3. modelo
//     4. paisOrigem
// 2. Os atributos devem ser inicializados através do construtor da classe
// 3. Ter uma função getAutomovel e retornar todos os atributos do Automovel
class Automovel { 
    constructor(nome,marca,modelo,paisOrigem){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOringem = paisOrigem;
    }
}
// Metodoloucura
function dadosDaLista(nome,marca,modelo,paisOrigem) {
    lista = {
        Nome : nome,
        Marca : marca,
        Modelo : modelo,
        paisOringem : paisOrigem,
    } 
    return lista
}
//2. Crie uma lista com 2 ou mais automoveis
var lista1 =[
    [dadosDaLista("fusca", "volkswagem","flex","alemanha")],
    [dadosDaLista("gol", "volkswagem","flex","alemanha")],
]
//console.log(lista1);

//3. Utilize **FOR** ou **FOR OF** e imprima a cada execução o nome e marca do automóvel
for (let carros of lista1){
    for ( carros in lista1) {
        console.log(carros)}
    console.log(carros)
}

//4. Dentro do FOR ou FOR OF ( Item 3 ) faça um **FOR IN** e imprima também todas as keys **"chaves"** do objeto de automóvel.
for (const carros in lista1) {
    console.log(carros)
}

//PARTE 2

//1. Crie um objeto de automovel (com os mesmos atributos de 1.1)
class automovel {
    constructor(nome,marca,modelo,cor){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
    oi(){
        console.log(`${this.nome} ${this.marca} ${this.modelo} ${this.cor}`)
    }

}
// var auto= new automovel("fusca", "volkswagem","flex","alemanha")
// auto.oi()