

                                                                // indice string   ordem 01234567
let umaString = 'Um "texto"';  // No lugar de "", podemos usar \\. \textp\
// console.log(umaString)

// por exemplo, localizar um item especifico da string.

console.log(umaString[4]);

console.log(umaString.charAt(6));   // tambem para localizar item especifico

console.log(umaString.concat(' ', 'em', 'um', 'lindo dia.'));
console.log(umaString + ' ', 'em', 'um', 'lindo dia.');
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('texto')); // Localizar a posicao de uma string

console.log(umaString.indexOf('o', 3)); // Localizar 'o' depois do item 3.

console.log(umaString.lastIndexOf('o' , 3)); // Localiza de tras pra frente.

console.log(umaString.match(/[a-z]/g)); // Ele encontra todas as letras minusculas desse texto, curso de expressao regulares.

console.log(umaString.search(/x/)); // posicao da expressao regular

console.log(umaString.replace('Um', 'Outra')); // trocar a palavra Um por outra

console.log(umaString.replace(/r/g, '#')); // Substituir todas as letras r por #, lembrar do /g para varrer tudo

console.log(umaString.length); // tamanho da string

console.log(umaString.slice(2,6));

console.log(umaString.length - 3); // onsole.log(umaString.slice(-3);

console.log(umaString.slice(-5, umaString.length - 1));
//ou
console.log(umaString.slice(-5,-1));
// ou
console.log(umaString.substring(umaString.length - 5, umaSubstring.length -1));

console.log(umaString.split(' '));  // para divir a string onde declaramos

console.log(umaString.split(' ', 3));

