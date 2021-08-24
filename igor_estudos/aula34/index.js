// For classico - Estrutura de repeticao

// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index, inicialmente como zero, para quando for <= 5 parar o laco, i++ para somar 1 sempre que terminar o laco
// comecamos com 0, mas podemos comecar com qualquer outro valor(positivo ou negativo)
// em vez de somar apenas 1, poderiamos atribuir tambem qualquer outro valor, por exemplo i += 10
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

// for (let i = 5; i >= 0; i-=1) {         // decrescente
//     console.log(`Linha ${i}`);
// }


// saber se e par ou impar
// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i, par);
// };



const frutas = ['Maca', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[1]);
};
// console.log(frutas.length);  // tamanho do array
// utilizamos o sinal de < em vez de <= frutas.length, porque o frutas.length ira mostrar que ha 3 itens, porem o indice, sabemos que ele comeca de 0,1,2... etc.