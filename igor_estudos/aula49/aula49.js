// Declaracao de funcao


function falaOi() {               //Function Hoisting, a engine do js permite chamar a funcao no topo ou abaixo do codigo.
    console.log('oi');
}
 
// First-class objects (Objetos de primeira class) // Tratando a funcao como um dado.
// Function expression

const souUmDado = function () {    // A variavel recebeu uma funcao e passou a ser uma funcao, por isso podemos tratar uma funcao como um dado.
    console.log('Sou um dado.');
};


function executaFuncao(funcao) {    // Uma funcao que executa outra funcao
    console.log('Vou executar sua funcao abaixo:')
    funcao();
};

executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

setInterval(function() {    // Tratando funcao como dado...

}, 1000);

// Dentro de um objeto             // Utilizar a funcao como metodo de um objeto.
// const obj = {
//     falar: function (){
//         console.log('Estou falando...');
//     }
// };

// obj.falar();

// Vai funcionar do mesmo jeito
const obj = {
    falar (){
        console.log('Estou falando...');
    }
};
 
obj.falar();




