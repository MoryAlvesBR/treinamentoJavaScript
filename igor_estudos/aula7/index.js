// Nao podemos recriar constantes ou modificar o valor de uma constante.

// Nao podemos criar constantes com palavras reservadas.
// Variaveis precisam ter nomes significativos
// Nao pode comecar o nome de uma variavel com numero
// Nao podem conter espacos ou tracos, utilizamos o camelCase
// ex.: nomeCompletoDoCliente, nomeInicial, etc.
// Case-sensitive, exemplo.: cada uma tem valor diferente, no caso nomeCliente X nomecliente
// NAO UTILIZE VAR, UTILIZE LET.
// Ao criar uma constante, precisa sempre declarar um valor, inicializando ela com o =''

const nome = 'Joao';
// nome = 'Otavio'; nao ira funcionar, porque nao pode mudar o valor de uma constante;
console.log(nome);

// String = text | Number = numero
const primeiroNumero = 5; //Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);   
//Com let, explicando a diferenca de uma constante e uma let, a let vai alterando e perdendo seu valor inicial, enquanto a const conforme for evoluindo nao perde seu valor inicial.

console.log(typeof primeiroNumero); 

console.log(typeof(primeiroNumero + segundoNumero));

//Typeof e para saber se e String ou numero
// Extra.: Operadores matematicos, + soma, - subtracao, * multiplicacao, / divisao
// Alt + Seta(cima ou baixo) na linha do codigo para mover o conteudo, pelo vscode.
// Sinal de + para somar NUMEROS, e + para CONCATENAR STRINGS.
