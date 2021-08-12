// Exercicio Aula 3

//1.
class Automovel {
    constructor(nome, marca, modelo, paisOrigem){
        this.nome = nome;
        this.marca = marca,
        this.modelo = modelo,
        this.paisOrigem = paisOrigem;

    }
     name(){
        console.log('O nome e:', this.nome);
     }
     model(){
        console.log('O modelo e:', this.modelo);
     }
     brand(){
        console.log('O marca e:', this.marca);   
     }
     pais(){
         console.log('O pais de origem e:', this.paisOrigem);
     }
}
var newCar1 = new Automovel('Fusca', 'Volkswagem', '1983', 'Alemanha');
    newCar1.name();
    newCar1.model();
    newCar1.brand();
    newCar1.pais();

//2. 
var newCar2 = new Automovel('Civic', 'Honda', '2021', 'Japao');

var lista0 = [newCar1,newCar2];

console.log(lista0);

//3.


for (let valor of lista0){
    if (valor == 0){
        valor.name();
        valor.brand();
    }
        valor.name();
        valor.brand();
}

// Parte 2


function createObj3(nome, marca, modelo, paisOrigem){
    objeto = {
        nome: nome,
        marca: marca,
        modelo: modelo,
        paisOrigem: paisOrigem,
    };
   return objeto
};

var obj = createObj3('Fusca', 'Volkswagem', '1983', 'Alemanha');
console.log(obj);
obj.cor = 'Azul';
delete obj.paisOrigem;
console.log(obj);


