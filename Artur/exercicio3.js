
// Criar classe automovel com os atributos
class automovel{
    constructor(nome,marca,modelo,paisOrigem,tipoCombustivel){
        this.nome = nome;
        this.marca= marca;
        this.modelo=modelo;
        this.paisOrigem=paisOrigem;
        this.tipoCombustivel=tipoCombustivel; 
    }
    retornar(){
        console.log(`\n|Nome: ${this.nome} | Marca: ${this.marca} | Modelo: ${this.modelo} | Pais: ${this.paisOrigem} | Combustivel: ${this.tipoCombustivel} |\n`)
    }
var automovel1  = new automovel('Gol','Volkswagen','flex','Brasil','Gasolina')
automovel1.retornar();
var automovel2  = new automovel('Ecosport','Ford','flex','Brasil','Etanol')
automovel2.retornar();

// Criar classe carro com os atributos 

class Carro{
    constructor(velocidadeMax,numeroRodas,temStep,ocupantes){
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas= numeroRodas;
        this.temStep= temStep;
        this.ocupantes=ocupantes;
    }
    retornar(){
        console.log(`\n|Velocidade.Max: ${this.velocidadeMax} | Numero.Rodas: ${this.numeroRodas} | Step: ${this.temStep} | Ocupantes: ${this.ocupantes}|\n`)
    }
}
var carro1  = new Carro ('150km','4','sim','5')
carro1.retornar();
var carro2  = new Carro('200km','4','nao','5')
carro2.retornar();

//Criar classe moto com os atributos

class Moto{
    constructor(velocidadeMax,numeroRodas,ocupantes){
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas= numeroRodas;
        this.ocupantes=ocupantes;
    }
    retornar(){
        console.log(`\n|Velocidade.Max: ${this.velocidadeMax} | Numero.Rodas: ${this.numeroRodas} | Ocupantes: ${this.ocupantes}|\n`)
    }
}
var moto1  = new Moto ('100km','2','2')
moto1.retornar();
var moto2  = new Moto('250km','2','2')
moto2.retornar();
