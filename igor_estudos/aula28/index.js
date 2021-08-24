
// const tresHoras = 60*60 * 3 *1000; // valor da constante em Milesimos de segundos 60*60 hora *3 horas * 1000 segundos
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);   //new e utilizado para objetos construtores, no caso o Date (escritos com a primeira letra Maiuscula)

// new Date(0); = 01/01/1970 Timestamp unix ou epoca unix, e o marco zero do tempo em js, antes dessa data utilizamos um numero negativo, pos data utilizamos positivo.
// const data = new Date(2019, 3, 20, 15, 14, 27, 999); // so vai ate 59s, em 60s arredonda o valor dos minutos. so vai ate 999 milisegundos, 1000 arredonda para 28s.
        // a funcao date precisa de 2 parametros no minimo para funcionar. // ano, mes, dia, hora , Minuto, segundo , milisegundo.                                        



// const data = new Date('2019-04-20 20:20:59')
// console.log(data.toString());   // converteu os valores de Date para string com .toString()

// console('Dia', data.getDate());

// console('Mes', data.getMonth());

// console('Ano', data.getFullYear());

// console('Minute', data.getMinutes());

// console('Seg', data.getSeconds());

// console('ms', data.getMilliseconds());

// console('Dia da semana', data.getDay());  // 0 - Domingo, 6 - Sabado

// console(data.toString());

// console.log(Date.now());  // conta todos os milesimos de segundos da data unix ate agora, se usarmos o resultado (milisegundos) em um new Date(); ira mostrar a data atual.

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

