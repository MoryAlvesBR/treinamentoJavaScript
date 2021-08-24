// Funcao construtora -> objetos 
// Funcao fabrica -> objetos 
// Construtora -> Pessoa (new)      // Funcoes construtoras sao 'moldes' para gerar um objeto.  // Comeca com 'P'(letra MAIUSCULA) para definir que e uma funcao construtora por convencao e lembrar de usar o new antes 

function Pessoa(nome, sobrenome) {
    // Atributos privados, funcionam so no escopo da classe
    const ID = 123456;
  
    const metodoInterno = e => {

    };
   
    // Atributos ou metodos publicos
    this.nome = nome;

    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa ('Maria', 'Oliveira');






