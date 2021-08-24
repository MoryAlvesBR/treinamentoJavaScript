// While e Do While

// const nome = 'Luiz';
// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;         // Sem o i++ minha variavel sempre ira ser 0, nunca ira chegar a 10 no exemplo.
// };

// while (i <= nome.length) {
//     console.log(nome[i]);
//     i++;
// };


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {            
    rand = random(min, max);
    console.log(rand);
};

// Faca e depois check , executar o codigo e depois chegar a execucao

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);


// Comparando os dois while acima: o primeiro nao executou porque o rand = 10 ja estava definido, enquanto o Do, executou  o codigo inserido nele primeiro e depois fez a analise do while.




