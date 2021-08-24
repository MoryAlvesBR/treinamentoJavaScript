/*
Aritmeticos + - / *
+ Adicao / Concatenacao
** Potenciacao
% Resto da divisao
*/

// const num1 = 10;
// const num2 = 3;
// console.log(num1 % num2);

// console.log((num1 + num2) * num1);
/* Ordem de precedencia sintaxe
1 - ()
2 - **
3 - * / %
4 - + ou -
*/

/*
Incremento = ++
Decremento = --
*/

// let contador = 1;
// contador++; // 2
// contador++; // 3
// contador++; // 4
// contador++; // 5
// console.log(contador);

// diferenca da posicao contador++ ou ++contador

// let contador = 1;
// console.log(contador++);
// console.log(contador);

// let contador = 10;
// console.log(--contador);
// console.log(--contador);

// Atras ele realiza a soma ou sub e depois motra o contador. Na frente, mostra o contador e depois faz a soma. Feito nos exemplos acima.

// const passo = 2;
// let contador = 0;
// contador += passo;   // mesma coisa que contador = contador + passo;

// contador = contador + passo;
// console.log(contador);
// contador = contador + passo;
// console.log(contador);
// contador = contador + passo;
// console.log(contador);

// ou 


// contador += passo;
// contador += passo;
// contador += passo;
// console.log(contador);

// tambem

// let contador = 2;
// contador *=10;
// console.log(contador);

// let contador = 2;
// contador **=10;
// console.log(contador);

// Lembrar do tipo de dado que se esta usando
// const num1 = 10;
// const num2 = 'Luiz';
// console.log(num1 * num2);

// vai dar NaN = Not a Number

// const num1 = 10;
// const num2 = '5';
// console.log(num1 * num2);

// Neste caso, a linguagem ira interpretar e tentar resolver a operacao. Convertendo a string para numero.

// Converter string em numero
// const num1 = 10;
// const num2 = parseInt('5');   // Converte em inteiro
// console.log(num1 * num2);
// console.log(typeof num2);

// const num1 = 10;
// const num2 = parseFloat('5.2');    // Converte em Float
// console.log(num1 * num2);
// console.log(typeof num2);
 
// const num1 = 10;
// const num2 = Number('Luiz');       // Tenta transformar a string em um Numero, seja int ou float.
// console.log(num1 * num2);
// console.log(typeof num2);