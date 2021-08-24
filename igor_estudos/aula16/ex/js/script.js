const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('txt2')

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';

texto.innerHTML += `<p>A raiz quadrada do numero e ${numero ** 0.5}</p> </br>`;

texto.innerHTML += `<p>${numero} e inteiro? ${Number.isInteger(numero)}</p> </br>`;

texto.innerHTML += `<p>E NaN? ${Number.isNaN(numero)}</p> </br>`;

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p> </br>` ;

texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil((numero))}</p> </br>` ;

texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p> </br>` ;
