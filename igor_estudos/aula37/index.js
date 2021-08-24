// For in - estrutura de repeticao

// For in -> le os indices ou chaves do objeto 
// indices        0       1        2 


// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio', 
//     idade: 30
// };

// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }


// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio', 
//     idade: 30
// };

// const chave = 'nome';
// console.log(pessoa[chave]);


// const frutas = ['Pera', 'Maca', 'Uva'];

// for (let indice in frutas) {
//     console.log(frutas[indice])
// }



// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }



// For of                     
// o for of nao funciona com objetos
//            012345...
// const nome = 'Luiz Otavio';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

/* for (let valor of nome) {
    console.log(valor);
} */ 

// const nome = ['Luiz', 'Otavio', 'Henrique']

// for (let valor of nome) {
//     console.log(valor);
// }

// nome.forEach(function(valor, indice, array){
//     console.log(valor, indice, array);
// });

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

for (let i in pessoa) {
    console.log(i)
};

