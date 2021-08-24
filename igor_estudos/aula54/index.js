/* Funcoes de Callbacks -
Quando uma acao finaliza, executamos essa funcao */
/* Exemplo de Ordem de leitura de dados -
Citado na aula: em desenvolvimento web, queremos chamar alguma api ou codigo especifico em um momento e nao podemos medir a velocidade de ida e vinda do banco de dados, a leitura do js. Entao usamos callbacks.


setTimeout foi definido para simular um carregamento de uma api web.

function f1(){
    console.log('F1');
}

function f2(){
    console.log('F2');
}

function f3(){
    console.log('F3');
}

f1();
f2();
f3();
console.log('Ola mundo!') */

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

// function f1(){
//     setTimeout(function (){
//        // Ja e uma funcao de Callback
//         console.log('F1');
//     }, 500);
// }

// function f2(){
//     setTimeout(function (){
//         // Ja e uma funcao de Callback
//         console.log('F2');
//     }, 1000);
// }

// function f3(){
//     setTimeout(function (){
//         // Ja e uma funcao de Callback 
//         console.log('F3');
//     }, 800);
// }

// f1();
// f2();
// f3();
// console.log('Ola mundo!');

function f1(callback){
    setTimeout(function (){
       // Ja e uma funcao de Callback
        console.log('F1');
        if (callback) callback();
    }, rand());
}

function f2(){
    setTimeout(function (){
        // Ja e uma funcao de Callback
        console.log('F2');
        if (callback) callback();
    }, rand());
}

function f3(){
    setTimeout(function (){
        // Ja e uma funcao de Callback 
        console.log('F3');
        if (callback) callback();
    }, rand());
}

/* f1();                        Mesmo escrito em uma ordem, na executacao sera aleatorio, como definir a ordem mesmo com o 'tempo' aleatorio?
f2();
f3();
console.log('Ola mundo!'); */


/* Exemplo na aula, 'boneca russa'
f1(function (){
    f2(function (){
        f3(function (){
            console.log('Ola mundo!');
        });
    });
});  */

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Ola mundo!')
}
