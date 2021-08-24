// IIFE - Immediately invoked function
/* Criando uma funcao sem nome, para nao tocar o escopo global.

(function (){
    const nome = 'Igor';
    console.log(nome)
}) (); 

const nome = 'Jose';
console.log(nome);
*/

(function (idade, peso, altura){
    const sobrenome = 'Gouveia';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Igor'))
    }

    falaNome();
    console.log(idade, peso, altura);
}) (22, 71, 1.71); 