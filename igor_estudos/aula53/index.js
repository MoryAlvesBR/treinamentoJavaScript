// Closures - E a habilidade de uma funcao acessar o seu escopo lexico

//Global
/*function retornaFuncao() {
    const nome = 'Luiz';
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao();
*/
// console.log(funcao) /<- sao a mesma coisa, a diferenca e que o .dir e no node->/  console.dir(funcao)  *verificar o console.dir(funcao) no console do browser e analisar os escopos.
// Essa funcao tem 3 escopos, A da mae dela, o dela propria e o global.


function retornaFuncao(nome) {
    return function (){
        return nome;
    };
}

const funcao1 = retornaFuncao('Joao');                   //Exemplo de Closure:
const funcao2 = retornaFuncao('Luiz');                   //Isolou a Funcao para apenas retornar Joao, e apenas retornar Luiz.

console.log(funcao1(), funcao2());