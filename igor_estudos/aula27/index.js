// Operador ternarion (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'usuario normal';
// mesma coisa que o if abaixo
// if (pontuacaoUsuario >= 1000) {

//     console.log('Usuario VIP');
// } else {
//     console.log('usuario normal');
// }

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // corPadrao e um 'fallback', determinando que ou vai ser null ou Preta

console.log(nivelUsuario, corPadrao);