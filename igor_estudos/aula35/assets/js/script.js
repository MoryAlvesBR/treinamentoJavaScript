const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Qualquer texto 2'},
    {tag: 'section', texto: 'Qualquer texto 3'},
    {tag: 'footer', texto: 'Qualquer texto 4'},
];
// console.log(elementos);
const container = document.querySelector('.container');
// O document.querySelector sempre ira pegar a PRIMEIRA class referida, no caso do exercicio temos apenas um container, entao utilizamos.
const div = document.createElement('div');
// Utilizamos o for para varrer a const elementos, let i = 0 e a variavel de controle, utilizamos o sinal de < em vez de <= elementos.length, porque o elementos.length ira mostrar que ha 4 itens, porem o indice, sabemos que ele comeca de 0,1,2... etc.
for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i];
    let tagcriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto)   // criar um texto a partir do Node
    // tagCriada.innerHTML = texto;         // tambem podemos utilizar tagCriada.innerText = texto; e mais seguro utilizar porque no texto em elementos, nao ha nenhuma tag html.
    tagcriada.appendChild(textoCriado);
    div.appendChild(tagcriada);
    // abaixo vemos um exemplo mais "verboso", escrevendo mais no codigo, entao na aula utilizamos acima.
    // console.log(elementos[i]);
    // console.log(elementos[i].tag); para ler o conteudo da tag em cada laco de repeticao 
}

container.appendChild(div);
// Utilizando o DOM, o document.appendChild sempre insere no final do elemento(class/id)
// Se der CTRL N, o node.js ira rodar o codigo, mas ele nao contem a biblioteca do DOM (https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)