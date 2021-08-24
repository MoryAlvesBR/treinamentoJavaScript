// ATRIBUICAO VIA DESESTRUTURACAO (Arrays)


// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numero = [1, 2, 3];
// [a, b, c] = numero;                //reatribuicao por desestruturacao

// console.log(a, b, c);

const numero = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// const [um, dois, tres, ... resto] = numeros;   //significa ... rest, ... spread

// console.log(um, dois, tres);
// console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;   // ... rest, ... spread

console.log(um, tres, cinco);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// console.log(numeros[1][2]);
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// const[,[,,seis]] = numeros;  // substituir o numero 6 no array[1]
// console.log(seis);

