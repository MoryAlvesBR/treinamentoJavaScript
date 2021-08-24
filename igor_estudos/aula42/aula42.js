/* Escreva uma funcao chamada ePaisagem que
recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

// function ePaisagem (largura, altura){
//     if (x > y) {
//         return true;
//     }
//     return false;
// }

// function ePaisagem (largura, altura){
//     return largura > altura ? true : false;
// }

// function ePaisagem (largura, altura){
//     return largura > altura;              Funciona do mesmo jeito que acima
// }

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1920));