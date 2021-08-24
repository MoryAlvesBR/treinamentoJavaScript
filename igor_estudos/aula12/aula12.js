/*
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;    // Criar uma constante para preservar o valor de A
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC); 

*/

// ou

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA , varB , varC] = [varB , varC , varA]

console.log(varA, varB, varC);

