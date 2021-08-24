/* 

&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"


FALSY
false // Qualquer coisa diferente dos valores abaixo, sera true em javascript.
0
`` ~ ``
null / undefined 
NaN

*/

// console.log('Luiz Otavio' && true && 'Maria');  // retorna o valor false



// Exemplo.: 

    // function falaOi () {
    //     return 'Oi';
    // }

    // let vaiExecutar = false;

    // console.log(vaiExecutar && falaOi());

    // const corUsuario = null;
    // const corPadrao = corUsuario || 'preto';

    // console.log(corPadrao);     // ira dar preto (false), se a cor do usuario for (null), quando o usuario definir a cor, sua cor ficara como true.;


    // const a = 0;
    // const b = null;
    // const c = 'false';    // Vai aparecer o 'false' como true, porque string com valor e true em JS. Sem as ' ' no false, vai retornar NaN, porque o || se tiver apenas false, retorna o ultimo valor.
    // const d = false;
    // const e = NaN;

    // console.log (a || b || c || d || e);