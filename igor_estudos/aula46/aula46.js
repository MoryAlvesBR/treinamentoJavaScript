// setInterval e setTimeout

function mostraHora() {
    let data = new Date();
    
    return data.toLocaleTimeString('pt-BR', { 
        hour12:false
    })
}
// setInterval(); ira determinar um intervalo para que alguma funcao seja executada em determinado momento.
// function funcaDoInterval() {        //Essa funcao apenas mostra hora.
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);  // 1000 milisegundos = 1s

// Para forcar a parada do setInterval, CTRL SHIFT P e digita >stop code run


// Nao precisamos criar uma funcao somente para utilizar o setInterval, como mostra no exemplo abaixo utilizando funcoes anonimas.

setInterval (function () {
    console.log(mostraHora());
}, 1000);

const time = setInterval (function () {     // criamos a constante timer para armazenar o setInterval e utilizar o setTimeout para parar.
    console.log(mostraHora());
}, 1000);

setTimeout(function () {  // Essa funcao executa apenas uma vez, diferente do setInterval
    clearInterval(timer);   // Parar o setInterval
}, 3000);        // tempo para parada.

setTimeout(function(){
    console.log('Ola mundo!');
}, 5000);