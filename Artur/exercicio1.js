//1- variavel com nome

const name = 'Artur'
console.log('name:', name)

//2- variavl com dia com chuva ou nao

const rain = true
console.log(rain)

//3 - variavel com o ano que nasceu

let date = '18-09-2001'
console.log('Date: ',date)

//4 - variavel com idade e depois atribuir outro valor

var age = 19
console.log('Age: ',age)
age = 20
console.log('Altered age: ',age)

//5 - criar uma lista de 1-10

const list= [1,2,3,4,5,6,7,8,9,10]
console.log('List: ',list)

//6 - criar um objeto com dados

const object= {
    namee: 'Joao',
    age: 19,
    sexo: 'Recife',
    anoDeEstudo: '2 ano',
    raca: 'branco'

}
console.log(object)

//7 - criar um objeto com dados dos pontos 1,2,3,4

const data={
    name,
    rain,
    date,
    age
}
console.log(data)

//8 - multiplicar valor que esta em x

let x = 10
console.log('total: ',x*2)

// 9 - criar uma lista de objetos com base no ponto 6

function objeto(name,age,gender,grade,race){
    let objeto ={name:name,
           age:age, 
           gender:gender,
           grade:grade,
           race:race}        
    return objeto
}

    var pessoa = objeto('Artur',19,'masculino','2 periodo ADS', 'Pardo')
    var pessoa1= objeto('Paulo',20,'masculino','1 periodo ADS', 'Negro')
    var pessoa2= objeto('Igor',22,'masculino','1 periodo ADS','Branco')
    var pessoa3= objeto('Antonio',19,'masculino','','pardo')
    var pessoa4= objeto('Jackelyne',19,'feminino','1 periodo E.S', 'parda')
    var pessoa5= objeto('Lavinia',22,'feminino','7 periodo Pedagogia', 'negra')
    var pessoa6= objeto('Filipe',22,'masculino','','negro')
    var pessoa7= objeto('Julio',22,'masculino','3 periodo ADS', 'branco')
    var pessoa8= objeto('Davidson',26,'masculino','4 periodo ADS','branco')
    var pessoa9= objeto('Lucas',20,'masculino','5 periodo S.I','branco')
    console.log(pessoa,pessoa1,pessoa2,pessoa3,pessoa4,pessoa5,pessoa6,pessoa7,pessoa8,pessoa9)

// 10 - Declarar uma variavel e depois multiplicar 

var num = 2
console.log(num*2)

// EXERCICIO 3

// Crie uma classe Automovel com as seguintes caracteristicas

class automovel { 
    constructor(name,marca,model,paisOrigem){
        this.name=name;
        this.marca=marca;
        this.model=model;
        this.paisOrigem=paisOrigem;    
    }  
}
var carro1 = new automovel('Gol','Wolksvagem','Gol','Brasil')
var carro2 = new automovel('Ecosport', 'Ford','Ecosport','Brasil')
var carro3 = new automovel('Uno','Fiat','Uno','Brasil')
console.log('\n',carro1 ,'\n\n', carro2, '\n\n', carro3)


// EXERCICIO 4

// Criar classe automovel com os atributos

class automoveel{
    constructor(nome,marca,modelo,paisOrigem,tipoCombustivel){
        this.nome = nome;
        this.marca= marca;
        this.modelo=modelo;
        this.paisOrigem=paisOrigem;
        this.tipoCombustivel=tipoCombustivel; 
    }
    retornar(){
        console.log(`\n|Nome: ${this.nome} | Marca: ${this.marca} | Modelo: ${this.modelo} | Pais: ${this.paisOrigem} | Combustivel: ${this.tipoCombustivel} |\n`)
    }}
var automoveel1  = new automovel('Gol','Volkswagen','flex','Brasil','Gasolina')
automoveel1.retornar();
var automoveel2  = new automovel('Ecosport','Ford','flex','Brasil','Etanol')
automoveel2.retornar();

// Criar classe carro com os atributos 

class Carro{
    constructor(velocidadeMax,numeroRodas,temStep,ocupantes){
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas= numeroRodas;
        this.temStep= temStep;
        this.ocupantes=ocupantes;
    }
    retornaar(){
        console.log(`\n|Velocidade.Max: ${this.velocidadeMax} | Numero.Rodas: ${this.numeroRodas} | Step: ${this.temStep} | Ocupantes: ${this.ocupantes}|\n`)
    }
}
var carro1  = new Carro ('150km','4','sim','5')
carro1.retornaar();
var carro2  = new Carro('200km','4','nao','5')
carro2.retornaar();

//Criar classe moto com os atributos

class Moto{
    constructor(velocidadeMax,numeroRodas,ocupantes){
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas= numeroRodas;
        this.ocupantes=ocupantes;
    }
    return(){
        console.log(`\n|Velocidade.Max: ${this.velocidadeMax} | Numero.Rodas: ${this.numeroRodas} | Ocupantes: ${this.ocupantes}|\n`)
    }
}
var moto1  = new Moto ('100km','2','2')
moto1.return();
var moto2  = new Moto('250km','2','2')
moto2.return();

