const numero = 10;

if (numero >= 0 && numero <= 5) {
     console.log('Sim, o numero esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log(' O numero esta entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {      //Verdadeiro
    console.log(' O numero esta entre 9 e 11.');
} else { 
    console.log(' O numero NAO esta entre 0 e 11.');
}
  // O JS Vai executar o bloco de codigo verdadeiro e sair do else if
 // Se tiver mais de um condicao true, faca outro if para ela, devido ao padrao de leitura do sistema citado acima.
if (numero <= 10) {
    console.log('O numero e menor que 10.');
}