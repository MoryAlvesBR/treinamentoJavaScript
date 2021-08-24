// IEE 754-2008
let num1 = 15;   //number 
let num2 = 2.5; //number 

num1 += num2; // num1 = num1 + num2
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2)); //arredondar
console.log(num1);

// console.log(num1.toString() + num2);
// console.log(typeof num1);     //nao ira funcionar 
//ou
// num1 = num1.toString();
// console.log(typeof num1); // ira transformar num1 em string

// console.log(num1.toString(2)); para transformar o numero em binario

// console.log(num1.toFixed(2)); // arredondar numero

// console.log(Number.isInteger(num1)); // saber se o numero e um inteiro

// console.log(Number.isNaN(num1)); // retorna verdadeiro se a conta for invalida.

  
