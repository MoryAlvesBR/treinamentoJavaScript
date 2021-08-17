// 1.
const Name = 'Jackelyne'
console.log(Name);
// 2.
const Clima = ' Não esta chovendo, graças a Deus!'
console.log(Clima);
// 3.
var anodenasc = 2001
console.log(anodenasc);
// 4.
console.log("")
var idade = 23
const Idoso = idade
console.log(Idoso)
// 5.
var lista = [1,2,3,4,5,6,7,8,9,10]
console.log(lista);
// 6.
var dicionario = {
    nome: 'Luisa',
    sexo: 'Indefinido',
    idade: 19,
    anoDeEstudo: '6º ano',
    raca: 'Humana'
}
console.log(dicionario);
// 7.
var dados = {
    Name,
    Clima,
    anodenasc,
    Idoso
}
console.log(dados);
// 8.
var x = 10
console.log(x*10);

// 9.
function CreateObject(nome,sexo,idade,anoDeEstudo,raca) {
    objeto1 = {
        nome: nome,
        sexo: sexo,
        idade: idade,
        anoDeEstudo: anoDeEstudo,
        raca: raca

    }   
    return objeto1 
}

var ListaDeObjetos = [
    CreateObject('Jacke','Feminino','19','EM Completo','Parda'),
    CreateObject('Paulinho','Masculino','20','EM Completo','Parda'),
    CreateObject('Toin','Masculino','19','EM Completo','Parda'),
    CreateObject('Igor','Masculino','22','EM Completo','Branco'),
    CreateObject('Lavina','Feminino','22','EM Completo','Negra'),
    CreateObject('Artur','Masculino','20','EM Completo','Negro'),
    CreateObject('Luquinhas','Masculino','18','EM Completo','Branco'),
    CreateObject('Kathe','Feminino','16','EM Incompleto','Parda'),
    CreateObject('Pedro','Masculino','18','EM Completo','Parda'),
    CreateObject('Julio','Masculino','22','EM Completo','Parda'),
]
console.log(ListaDeObjetos);
// 10.
var numero = 20
var result = numero*3
console.log(result);