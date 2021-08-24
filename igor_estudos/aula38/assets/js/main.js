// Exercicios com Nodelist(browser)

const paragrafos = document.querySelector('.paragrafos');   // Lembrando que o querySelector retorna apenas o primeiro elemento encontrado.
// retornando o comentario acima -> para selecionar todos os <p></p> utilizamos paragrafos.querySelectorAll('p')
// Ira retornar uma NodeList(4) [p, p, p, p] do DOM da API do Browser, nao e um array mas se comporta de uma maneira extramamente similar.
const ps = paragrafos.querySelectorAll('p');  // ps[0], ps[1], etc... 

const estilosBody = getComputedStyle(document.body);   // Criou uma constante para pegar todos os estilos do body
const backgroundColorBody = estilosBody.backgroundColor;  // Criou uma constante para pegar apenas o backgroundColor do body, mas poderia ser qualquer outro dado sobre o estilo do body.

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFF';
};

