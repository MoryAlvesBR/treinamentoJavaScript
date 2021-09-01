//1. Declarar uma variável (imutável) com seu nome
const Nome = "Paulo Henrique"
console.log(Nome);

//2. Declarar uma variável (imutável) se o dia está chovendo ou não
const Clima = "o dia esta chovendo"
console.log(Clima);

//3. Declarar uma variável com o ano que você nasceu/data marcante por algum motivo
var ano = "31/05/2001"
console.log(ano, "data de nascimento");

//4. Declarar uma variável com idade ou número qualquer (imutável) e depois atribua seu valor com outro numero 
var idade = 19
console.log(idade, "minha idade em 2020")
var idade = 20
console.log(idade, "minha idade em 2021")

//5. Crie uma lista numérica de 1 a 10
var lista = [1,2,3,4,5,6,7,8,9,10]
console.log(lista);

//6. Crie um objeto (dicionário) com dados de um aluno (dados aleatórios/fictícios)
var DadosDeAlunos1 = {
    Nome : "paulo Oliveira",
    idade : "20 anos",
    NumeroDeMatricula : "0001",
    anoEscolar : "EM completo",
        raca : "Branco" ,
}
console.log(DadosDeAlunos1);

//7. Crie um objeto de nome dados com as variaveis (chave-valor) dos pontos 1, 2, 3 e 4.
var Dados = {
    Nome,
    Clima,
    ano,
    idade
}
console.log(Dados);

//8. Declare uma variável x com valor 10 e multiplique por um número inteiro qualquer.
var x = 10
var y = 5
var resultado = x * y

console.log(`o produto da multiplicacao de ${x} x ${y} = ${resultado}`)

// Metodoloucura
function dadosDaLista(nome,idade,sexo,anoEscolar ,raca) {
    objeto = {
        Nome : nome,
        idade : idade,
        sexo: sexo,
        anoEscolar : anoEscolar,
        raca : raca
    } 
    return objeto
}
//9. Crie uma lista de objetos, com base no ponto 6
var lista1 = [
    [dadosDaLista("Antinio","20","masculino", "EM completo", "pardo")] , 
    [dadosDaLista("Paulo","20","masculino", "EM completo", "branco")], 
    [dadosDaLista("Artur","20","masculino", "EM completo", "pardo")], 
    [dadosDaLista("Igor","20","masculino", "EM completo", "branco")], 
    [dadosDaLista("Jackellyne", "20","Feminino", "EM completo", "pardo")] , 
    [dadosDaLista("Lavenia", "22", "Feminino", "EM completo", "pardo")], 
    [dadosDaLista("Filipe", "22", "masculino", "EM completo", "pardo")] , 
    [dadosDaLista("Julho", "22", "masculino", "EM completo", "parda")], 
    [dadosDaLista("Davidson", "26", "masculino", "EM completo", "branco")] , 
    [dadosDaLista("Pedro", "25", "masculino", "EM completo", "branco")]
]
console.log(lista1);

//10. Declare uma variável numérica e multiplique por outro número (qualquer número)
var num1 = 2
var num2 =2
var result = num1 * num2
console.log(`o produto da multiplicacao de ${num1} x ${num2} = ${result}`)

