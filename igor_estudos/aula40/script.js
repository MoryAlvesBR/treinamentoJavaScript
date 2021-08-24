// Break e continue 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
    
//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         continue;            // pular a interacao do laco, vai pular o numero 2.
//     }
    // console.log(numero); para exibir o numero 7 antes de encerrar o laco
//     if (numero === 7) {
//         console.log('Fim')
//         break;            // break ira parar o laco
//     }
//     console.log(numero);     // sem mostrar 7
// }


// for (let numero in numeros) {
//     let numero = numeros[i];

//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         continue;            // pular a interacao do laco, vai pular o numero 2.
//     }
    // console.log(numero); para exibir o numero 7 antes de encerrar o laco
//     if (numero === 7) {
//         console.log('Fim')
//         break;            // break ira parar o laco
//     }
//     console.log(numero);     // sem mostrar 7
// }

for (let i = 0; i < numeros.length; i++) {     // utilizando o for padrao como exemplo
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;            
    }
    // console.log(numero); 
    if (numero === 7) {
        console.log('Fim')
        break;            
    }
    console.log(numero);     
}

let i = 0;

while (i < numeros.length){          // utilizando while
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue;            
    }
    console.log(numero); 
    if (numero === 7) {
        console.log('Fim')
        i++;
        break;            
    }
    i++;
}

do {          // utilizando Do While
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue;            
    }
    console.log(numero); 
    if (numero === 7) {
        console.log('Fim')
        i++;
        break;            
    }
    i++;
} while (i < numeros.length);