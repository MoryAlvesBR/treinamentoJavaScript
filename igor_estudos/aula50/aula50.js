function funcao() {
    console.log('Oie');
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);    // Se a funcao nao tiver funcao(parametro), feito o exemplo, tudo oque voce utilizar de argumento sera ignorado pelo js.


// o arguments e exclusivo para o function (), nao para arrowfunctions

function funcao() {
    console.log(arguments[0]);          // Se utilizar apenas console.log(arguments), ira pegar todos os argumentos da funcao, com o indice[], ira pegar apenas o especificado.
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao(a, b, c) {                         // funcao para somar os arguments
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

funcao(1, 2, 3);

//

function funcao(a, b = 2, c = 4) {
    // b = b || 0;      maneira antiga de solucionar o problema abaixo, de colocar apenas o valor de a, o b seria undefinied, porem declaramos deste modo ou atribuimos um valor a b na funcao(a, b)
    console.log(a + b);
}

funcao(2, 10, 20);

function funcao(a, b = 2, c = 4) {      // Apenas com undefined, b assume 2.
    console.log(a + b);
}

funcao(2, undefined, 20);

// desestruturacao de objeto
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao({nome: 'Luiz', sobrenome: 'Otavio', idade: 20});

/* ou
let obj = {nome: 'Luiz', sobrenome: 'Otavio', idade: 20};
funcao (obj);
*/


// desestruturacao array
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Luiz Otavio', 'Miranda', 30]);


const conta = function (operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};

conta('+', 0, 20, 30, 40, 50);

// Com arrow function, o arguments nao sera lido, porem podemos chegar ao mesmo resultado utilizando ...argumento
const conta = (...args) => {
    console.log(args)
};
conta ('+', 1, 20, 30, 40, 50);
