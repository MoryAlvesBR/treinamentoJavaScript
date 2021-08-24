// let array = [1, 2, 3];
// array.push(4);
// array[0] = 'Luiz';
// array = 'Outra';
// console.log(array);

// criar array [], criar objeto {}

// const pessoal1 = {

//     nome:'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoal2 = {

//     nome:'Maria',
//     sobrenome: 'Miranda',
//     idade: 23
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// function criarPessoa (nome, sobrenome, idade) {

//     return {
//         nome, sobrenome, idade
//     };

// };

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Maria', 'Miranda', 36);
// const pessoa3 = criaPessoa('Joao', 'Lara', 33);
// const pessoa4 = criaPessoa('Junior', 'Chato', 23);
// const pessoa5 = criaPessoa('Jean', 'Mago', 10);

// console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`)

    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1);
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();