/* Escreva uma funcao que recebe um numero e
retorne o seguitne:
numero e divisivel por 3 = Fizz 
numero e divisivel por 5 = Buzz
numero e divisivel por 3 e 5 = FizzBuzz
numero NAO e divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero e um numero = Retorna o proprio numero
Use a funcao com numeros de 0 a 100 */

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero, 'nao e um number';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; // Essa funcao deve vir no topo, para as debaixo nao sobreescrever ela.
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
}
console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}