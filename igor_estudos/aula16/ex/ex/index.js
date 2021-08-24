//            012345678910
// const nome = 'Luiz Otavio'
// console.log(nome[0]); // L

//                 0       1        2
const alunos = ['Joao', 'Maria', 'Pedro'];

console.log(typeof alunos);
console.log(alunos instanceof Array);    // saber se e um array, true or false.

/* alunos.push('Luiza');
 alunos.push('Eduardo');
  console.log(alunos.slice(0,3));  // (primeiro,ultimotermo), o ultimo termo não irá retornar, então no exemplo mostraria apenas os items 0, 1 e 2.

 console.log(alunos.slice(0,-2)); // nao mostra os dois ultimos termos, no caso, não mostraria Luiza e Eduardo. */

// delete.alunos[1]; // deletar o item, se tornando undefined.

// alunos.pop(); remove o ultimo elemento
// const removido = alunos.pop();  salva em uma constante o item removido
// const removido = alunos.shift(); remove do começo

// alunos.unshift('Fabio'); // adiciona no inicio do array
// alunos.unshift('Luiza');

// alunos.push('Luiza');
// alunos.push('Fábio');    // Adiciona ao final do array

// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fabio';
// alunos[alunos.length] = 'Luana';  // essa sequencia adiciona ao final do array

// alunos[0] = 'Jose';   // alterar um item
// alunos[3] = 'Ana';    // Adiciona 

// console.log(alunos[0]);
// console.log(alunos[2]);
// console.log(alunos);