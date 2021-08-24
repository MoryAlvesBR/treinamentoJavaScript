
// Escreva uma funcao que recebe 2 numeros e retorne o valor maior deles
let num1 = 10;
let num2 = 20;

function maior(x, y){
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
    
}
const max = maior(num1, num2);
console.log(max);

// limpando o codigo 

// function maior(x, y){
//     if (x > y) return x;
//     return y;
// }


function maior(x, y){
    return x > y ? x : y;
}

const max2 = (x, y) => x > y ? x : y;
console.log(max(10,5));

