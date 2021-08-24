/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC e de 25.925925925925924
Luiz Otavio nasceu em 1991.
*/
const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura*altura)
indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
console.log(indiceMassaCorporal);
let anoNascimento;
anoNascimento = 2021 - idade;
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmM, 'de altura e seu IMC e de', indiceMassaCorporal, nome, 'nasceu em', anoNascimento)
// com +
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');
console.log(' tem ' + alturaEmM + ' de altura e seu IMC e de ' + indiceMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento + '.');

// template strings

console.log(`tem ${alturaEmM} de altura e seu IMC e de ${indiceMassaCorporal}`);