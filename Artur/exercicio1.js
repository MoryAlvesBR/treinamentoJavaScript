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
    return{name:name,
           age:age, 
           gender:gender,
           grade:grade,
           race:race}}

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

   
