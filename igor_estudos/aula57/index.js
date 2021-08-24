// Funcoes Fabricas (Factory Functions) 
// Constructor Function ( Funcoes construtoras)
// function criaPessoa (nome, sobrenome, altura, peso){
//     return {
//         nome, 
//         sobrenome,
//         fala: function (assunto){
//             return `${nome} ${sobrenome} esta ${assunto}.`
//         },
//         altura: altura,
//         peso: peso,
//         imc(){
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     };
// }
// Quando uma funcao esta dentro de um objeto, chamamos de metodo.
// const p1 = criaPessoa('Igor', 'Gouveia', 1.8, 70);
// console.log(p1.fala('falando sobre agua'))                     // this.nome = p1.nome
// const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 57);
// console.log(p2.fala('falando sobre js'));


function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');            // Vai transformar a string em um Array
            this.nome = valor.shift();           // O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
            this.sobrenome = valor.join(' ');   // O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
        },

        fala: function (assunto){
            return `${nome} esta ${assunto}.`
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc(){                                                      // O get permite tornar um metodo em um atributo do objeto, em vez de utilizarmos p1.imc(), utilizamos p1.imc
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
// Quando uma funcao esta dentro de um objeto, chamamos de metodo.
const p1 = criaPessoa('Igor', 'Gouveia', 1.8, 70);
console.log(p1.fala('falando sobre agua'))                     // this.nome = p1.nome
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 57);
console.log(p2.fala('falando sobre js'));

console.log(p1.imc);
console.log(p1.nome);
console.log(p1.sobrenome);


