// Atribuicao via desestruturacao (Objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome
// Atribuicao via desestruturacao abaixo:   // tambem funciona no array
const { nome = 'Nao existe', sobrenome } = pessoa;
console.log(nome, sobrenome);

// Como alterar a chave e permanecer o valor:
// const { nome: n, sobrenome } = pessoa;
// console.log(n, sobrenome);

// Chamar oque consta dentro de endereco:
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

// No exemplo, transformando rua em r, o valor de r atribuido na const criada nao altera o valor da rua da primeira const pessoa, so iria mudar se nao houvesse valor.
// Chamando o objeto inteiro endereco inteiro, apos chamar rua e numero.
const { endereco: { rua: r = 12345 , numero }, endereco } = pessoa;
console.log(r, numero, endereco);

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);
    