/* 1- Capturar o evento de submit do formulario.
p / h*h */

const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido!', false);
        return;
    } 

    if (!altura) {
        setResultado('Altura invalida!', false);
        return;
    } 
    const imc = getImc(peso, altura);
    const nivelimc = getNivelImc(imc);
    const msg = `O seu IMC e ${imc} (${nivelimc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    // if (imc >= 39.9){           // If foi feito de tras pra frente, porque a linguagem ira ver o primeiro valor verdadeiro e retornar, por isso utilizou de tras para frente.
    //     return nivel[5];        // Nao foi utilizado Else if por causa do Return(o raciocinio criado para no Return), entao utilizamos outros ifs.
    // } 
    // if (imc >= 34.9){     
    //     return nivel[4];
    // } 
    // if (imc => 29.9) {
    //     return nivel[3];
    // } 
    // if (imc >= 24.9){
    //     return nivel[2];
    // } 
    // if (imc =>  18.5){
    //     return nivel[1];
    // } 
    // if (imc < 18.5) {
    //     return nivel[0];
    // }

    if (imc >= 39.9) return nivel[5];                  // Formatamos assim por ser um If pequeno.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}


function getImc(peso, altura);
    const imc = peso / altura ** 2;
    return imc.toFixed(2)                          // toFixed(2) para Retornar o valor com 2 casa decimais.

function criarP (){
    const p = document.createElement('p');    // criar paragrafo em js
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    
    resultado.innerHTML = '';    // poderia ser  resultado.innerHTML = `<p>${msg}</p>`; ou resultado.innerHTML = msg;  para quando chamar a funcao setResultado('string'), adicionar o conteudo no HTML.
    


    const p = criarP();
    if (isValid){                                                // Como exemplificado a cima, Se usarmos a constante setResultado(msg, true), significa que chamamos a const msg e nomeamos ela de true, fazendo um If (com o valor definido de verdadeiro e falso) utilizando a string isValid como posicao para oque setamos de 'true', o if ira realizar a varredura.
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);           // appendChild para adicionar o elemento na div resultado


}