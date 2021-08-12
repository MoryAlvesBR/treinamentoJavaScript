// Exercicio - 2 //
// 1. aaaa
const nomeIgor = 'Igor';
console.log(nomeIgor);
// 2.
const sol = 'O dia esta ensolarado';
console.log(sol);
const chuva =' O dia esta chovendo';
console.log(chuva);
//3.
const aniverNamoro = new Date(2017, 4, 17, 21, 0, 0);

console.log(`Aconteceu em ${aniverNamoro.toLocaleDateString('pt-BR')} as ${aniverNamoro.toLocaleTimeString('pt-BR', { hour12: false})}`);

//4.
var idadeIgor = 22;
var idoso = idadeIgor;
console.log('Igor tem', idoso);
var idadeIgor = 23;
var idoso = idadeIgor;
console.log('Em 2022 Igor tem', idoso);

// 5.
const lista0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(' A lista e:', lista0);


//6. Nome, Sexo, Idade, Ano de Estudo 

var dict = [{}];

dict.push({
    nome: '',
    sexo: '',
    idade: '',
    anoEstudo: '',
    raca: ''
});

console.log(dict);

function createDict(nome, sexo, idade, anoEstudo, raca){
    dict = [{
        nome: nome,
        sexo: sexo,
        idade: idade,
        anoEstudo: anoEstudo,
        raca: raca
    }];
   
};

createDict('Igor', 'Masculino', '22', 'Tecnologo ADS', 'Branco');

console.log(dict);

//7. Crie um objeto
function createObj1(nome, clima, datanasc, idade){

    lista1 = {
        name: nome,
        climate: clima,
        date: datanasc,
        age: idade
    }
   return lista1
};
const objetoCriado = createObj1('Igor', 'Ensolarado', '09/03/1999', '22');
console.log(objetoCriado);

// 8.
var xis = 10;
var aleatorio = creatRandomInt(1, 100);

function creatRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const operacao = xis * aleatorio;
console.log(`A multiplicacao de ${xis} vezes ${aleatorio}, resulta em ${operacao}`);

//9. Lista 10 objetos 

function createObj2(nome, sexo, idade, anoEstudo, raca){
    objeto = {
        nome: nome,
        sexo: sexo,
        idade: idade,
        anoEstudo: anoEstudo,
        raca: raca
    };
   return objeto
};

var lista2 = [
    createObj2('Igor', 'Masculino', '22', '9º Ano','Branco'),
    createObj2('Mari', 'Feminino', '20', '7º Ano','Branco'),
    createObj2('Paulo', 'Masculino', '25', '9º Ano','Pardo'),
    createObj2('Fulana', 'Feminino', '19', '6º Ano','Branca'),
    createObj2('Deyvision', 'Masculino', '18', 'MestreDoConhecimento','Negro'),
    createObj2('Marcela', 'Feminino', '25', '8º Ano','Negra'),
    createObj2('Arthur', 'Masculino', '22', '9º Ano','Pardo'),
    createObj2('Laura', 'Feminino', '20', '6º Ano','Pardo'),
    createObj2('Brian', 'Masculino', '24', 'Aprendiz','Branco'),
    createObj2('Josefa', 'Feminino', '20', '8º Ano','Branco')
];

console.log('A lista e:',lista2);

// 10.
var numeroA = creatRandomInt(1, 100);
var numeroB = creatRandomInt(1, 100);

const operacao2 = numeroA * numeroB;
console.log(`A multiplicacao de ${numeroA} vezes ${numeroB}, igual a ${operacao2}`);

