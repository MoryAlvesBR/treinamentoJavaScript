/*

Primitivos (imutaveis) - string, number, boolean, undefined.
null (bigint, symbol) - Valor

Referencia (mutavel) - array, object, function

*/
//          0123 
// let nome = 'Luiz';
// nome[0] = 'Otavio';
// console.log(nome[0], nome);               // Exemplo mostrando que string e imutavel

// let a = 'A';
// let b = a;     // Copiando o valor primitivo.
// console.log(a,b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];               // Para copiar o array de A, mas para nao linkar a tag b com a A.
// let c = b;

// console.log(a, b);             // Como b esta linkado a um tipo de dado Referencia(mutavel), oque for alterado em a, vai alterar b.

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);

                        
const a = {                   //exemplo de b linkado a A.
    nome: 'Luiz',
    sobrenome: 'Otavio'

};

const b = a;

a.nome = 'Joao'
console.log(a);
console.log(b);


