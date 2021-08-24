// Switch/Case

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terca';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6){
//     diaSemanaTexto = 'Sabado';
// } else {
//     diaSemanaTexto = '';
// }
// o switch abaixo e igual ao if acima
// switch(diaSemana) {
// case 0:
//     diaSemanaTexto ='Domingo';
//     break;
// case 1:
//     diaSemanaTexto ='Segunda';
//     break;
// case 2:
//     diaSemanaTexto ='Terca';
//     break;
// case 3:
//     diaSemanaTexto ='Quarta';
//     break;
// case 4:
//     diaSemanaTexto ='Quinta';
//     break;
// case 5:
//     diaSemanaTexto ='Sexta';
//     break;
// case 6:
//     diaSemanaTexto ='Sabado';
//     break;
// default:
//     diaSemanaTexto = '';
//     break;
// }
  // O break; e utilizado para freiar o raciocinio do programa no case analisado.
function getDiaSemanaTexto (diaSemana) {        // a variavel diaSemana so existe dentro do escopo da funcao
    let diaSemanaTexto;

    switch(diaSemana) {
    case 0:
        diaSemanaTexto ='Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto ='Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto ='Terca';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto ='Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto ='Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto ='Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto ='Sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();   // 0 a 6, 0 - Domingo, 1 - Segunda, etc...
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);