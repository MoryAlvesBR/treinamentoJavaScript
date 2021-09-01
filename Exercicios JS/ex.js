//1. Declarar uma variável (imutável) com seu nome
var nome = "lavinia";
nome = "Ola " + nome;
console.log(nome);
console.log("")
//2. Declarar uma variável (imutável) se o dia está chovendo ou não
var clima = "Nao esta chovendo";
console.log(clima);
console.log("")
//3. Declarar uma variável com o ano que você nasceu/data marcante por algum motivo
const anodenascimento = 1999;
console.log(anodenascimento);
const datamarcante = "18 de marco";
console.log(datamarcante)
console.log("")
//4. Declarar uma variável com idade ou número qualquer (imutável) e depois atribua seu valor com outro numero
var idade = 22;
console.log(idade);
var idade = 23;
console.log(idade);
console.log("")
//5. Crie uma lista numérica de 1 a 10
let lista = [1,2,3,4,5,6,7,8,9,10]
console.log(lista);
console.log("")
//6. Crie um objeto (dicionário) com dados de um aluno (dados aleatórios/fictícios)
var dicionario = {
    nome:"Paulo",
    sexo:"Masculino",
    idade:"20",
    ano: "8 periodo",
    raca:"branco",
}
console.log(dicionario);
console.log("")
//7. Crie um objeto de nome dados com as variaveis (chave-valor) dos pontos 1, 2, 3 e 4.
var dados ={
    nome:nome,
    clima:clima,
    anodenascimento:anodenascimento,
    idade:idade,
}
console.log(dados)
//8. Declare uma variável x com valor 10 e multiplique por um número inteiro qualquer.
var x = 10;
x = x * 5;
console.log(x);
//9. Crie uma lista de objetos, com base no ponto 6
function Lista(nome,sexo,idade,ano,raca){
    objeto = {
        nome:nome,
        sexo:sexo,
        idade:idade,
        ano:ano,
        raca:raca,
    }
    return objeto
}
var lista1 = [
    Lista ("Paulo","Masculino","20","8 periodo","branco"),
    Lista ("Antonio","Masculino","19","8 periodo","pardo"),
    Lista ("Igor","Masculino","22","8 periodo","branco"),
    Lista ("Arthur","Masculino","19","8 periodo","pardo"),
    Lista ("Italo","Masculino","23","8 periodo","negro"),
    Lista ("lucas","Masculino","22","8 periodo","pardo"),
    Lista ("Lavinia","Feminino","22","8 periodo","parda"),
    Lista ("Kelly","Feminino","19","8 periodo","parda"),
    Lista ("Pedro","Masculino","18","8 periodo","branco"),
    Lista ("Ryan","Masculino","20","8 periodo","pardo"),
]
console.log(lista1)
//10. Declare uma variável numérica e multiplique por outro número (qualquer número)
var z = 500;
z = z * 3;
console.log(z);


