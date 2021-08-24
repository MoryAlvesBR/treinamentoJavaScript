// return
// Retorna um valor
// Termina a funcao

function soma(a, b) {
    return a+b;
}

console.log(soma(5,2));

function soma2(a, b){
    console.log(a + b);
}

soma2(5, 2);

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}
const p1 = criaPessoa('Luiz, Otavio');
const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;               // Utilizando dentro da funcao interna o parametro da funcao interna.
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('mundo!');         // Resto esta dentro da const fala!
console.log(resto);

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

function criaMultiplicador(multiplicador){
    // multiplicador
    function multiplicacao(n){
        return n * multiplicador;
    }

    return multiplicao;
}


// ou

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };

}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));


// console.log(duplica(3));         // podemos retornar qualquer coisa na funcao, teste o console.log com valores diferentes.
// console.log(triplica(2));
// console.log(quadriplica(2)); 