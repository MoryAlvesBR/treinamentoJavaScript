const verdadeira = true;

// Let tem escopo de bloco{ ... bloco }
// VAR so tem escopo de funcao.

// let nome = 'Luiz';
// var nome2 = 'Luiz';

// if (verdadeira) {
//     let nome = 'Otavio';
//     var nome2 = 'Rogerio'; // Redeclarando 

//     // console.log(nome, nome2);

//     if (verdadeira){
//         var nome2 = 'Ronaldo'; // Redeclarando 
//         let nome = 'Outra coisa';
//     }
// }

// console.log(nome, nome2);

// var sobrenome = 'Miranda';          // Variaveis de fora podem ser chamadas dentro de uma funcao, no caso console.log(sobrenome) como exemplo. Mas variaveis dentro de funcoes nao podem ser chamadas fora.

// function falaOi () {

//     if (verdadeira) {
//         let nome = 'luiz'
//         console.log(sobrenome);
//     }
//     console.log(nome);
// }


// falaOi();

// console.log(sobrenome);        // nesse caso abaixo, chamar a variavel antes de declarar, a engine do javascript ira elevar o var para o topo do codigo sem valor, por isso ficara undefined.

// var sobrenome ='Miranda';    // a solucao seria colocar o var em cima do console.log 


console.log(sobrenome);    // em vez da engine reproduzir o 'roasting' conceito citado acima (elevar o var,etc)
                            // Ela nao consegue ler a variavel let. Esse 'erro' do var, foi corrigido no let.
let sobrenome = 'Miranda'


// Obs.: so ocorre o roasting em funcoes.