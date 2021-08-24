// Escopo lexico, podemos de dentro de uma funcao acessar qualquer variavel vizinha proximo dela, no caso utilizando o escopo global.


const nome = 'Luiz';

function falaNome (){
    
    console.log(nome);
}

falaNome();

function usaFalaNome(){
    const nome = 'Otavio';
    falaNome();
}

usaFalaNome();            // A const nome nao sera priorizada, porque a function falaNome, esta buscando a const nome em seus vizinhos mais proximos. Porque e um movimento padrao do js.

