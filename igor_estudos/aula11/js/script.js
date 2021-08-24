alert('Com a nossa mensagem.'); // E um metodo dentro do objeto window, window.alert('');

// window.confirm('Deseja realmente apagar?'); Boolean, true ou false.

// window.prompt('Digite os eu nome:');

/*
    const confirma = confirm('Realmente deseja apagar?');
    se digitar confirma (o nome da variavel no console do navegador, ele ja faz a funcao do console.log)
    
    
    let confirma = confirm(`Qualquer mensagem`);

    let num1 = prompt('Digite um numero');
    let num2 = prompt('Digite outro numero');
    num1 + num2 // concatenou
    typeof num1
    typeof num2
    num1 = parseFloat(num1);
    typeof num1
    num2 = parseFloat(num2);
    typeof num2
    num1 +_num2 // somou
    */

let num1 = prompt('Digite o primeiro numero:');
let num2 = prompt('Digite o numero dois');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
const resultado = num1 + num2;
alert(`O resultado foi: ${resultado}`);

// ou e tambem alert(`O resultado foi: ${num1 + num2})


