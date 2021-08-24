const nome = 'Luiz';
const nome1= "Luiz";
const nome2= `Luiz`;
const num1 = 10 // number
const num2 = 10.52 // number

let nomeAluno; // undefinide = nao aponta pra local nenhum na memoria
let sobrenomeAluno = null; // Nulo -> nao aponta pra local nenhum na memoria.
const aprovado = true; // or false; Boolean, conceito inicial valor logico

console.log(typeof aprovado, aprovado);
// typeof com dois valores, mostra o tipo e se e verdadeiro ou falso, o mesmo pra outros tipos de dados.


// exemplos de comportamenos de variaveis com dados.
let a = [1, 2];
let b = a;
console.log(a, b);

a = 3
console.log(a, b);

b.push(3);
console.log(a, b);
