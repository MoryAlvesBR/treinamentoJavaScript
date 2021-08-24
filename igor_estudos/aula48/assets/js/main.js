const inputTarefa = document.querySelector('.inputtarefa');
const btnTarefa = document.querySelector('.btntarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){                                      // função para criar o elemento li html da lista ul.
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function (e){                                      //Observação: keypress é quando a tecla é pressionada, keyup pressionada e solta, keydown quando é pressionada e solta, mas ainda é pressionada.
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;                         // Poderia utilizar input.value === "", mas usou !( do valor em branco), return.
        criaTarefa(inputTarefa.value);
    };
    
    // console.log(e); //verificar o evento, no caso o KeyCode da tecla ENTER que queremos é 13.
});   

function limpaInput(){               // Limpar o input digitado para digitar um novo.
    inputTarefa.value = '';
    inputTarefa.focus();                // .focus é quando selecionamos um input como mouse o | fica piscando para digitar, no caso, pedimos para o js focar este elemento | no input.
};

function criaBotaoApagar(li) {
    li.innerText += ' ';                                       // criar um espaçamento entre o li e o button, comente essa linha para verificar.
    const botaoApagar = document.createElement('button');      // criar um button
    botaoApagar.innerText = 'Apagar';                       // Definir o texto do button
    // botaoApagar.classList.add('apagar');                 // Poderia utilizar o .classList.add para criar uma classe, para manipular sua função no codigo.
    botaoApagar.setAttribute('class', 'apagar');            // Em vez do exemplo acima, utilizou o setAttribute para criar um atributo (href, class, etc) e seu nome.
    botaoApagar.setAttribute('title', 'Apagar está tarefa'); // Criou um title.
    li.appendChild(botaoApagar);                            // No fim do li, ira adicionar o button
};


function criaTarefa(textoInput){       // Cria a Tarefa, j
    const li = criaLi();                                // Uma constante para retornar a função criaLi();
    li.innerText = textoInput;                          // Colocar o texto do input na li
    tarefas.appendChild(li);                            // Jogar o conteudo na pagina, relembrando: appendChild joga no sentido abaixo do conteudo. append joga na parte de cima. 
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function(){             // Capturar o evento do Button
    if (!inputTarefa.value) return;                         // Poderia utilizar input.value === "", mas usou !( do valor em branco), return.
    criaTarefa(inputTarefa.value);
});


document.addEventListener('click', function (e) {                             // Capturar o elemento clicado
    const el = e.target;
    if (el.classList.contains('apagar')) {                                 // Se ao clicar, o elemento conter a class 'apagar', irá reproduzir o código digitado abaixo.
        el.parentElement.remove();                                                       // Ao clicar no Button 'apagar', queremos que ele delete o seu elemento pai, no caso o li, utilize console.log(el.parentElement) para saber quem é o "pai" do elemento.    };
        salvarTarefas();                                                   // Ao apagar, irá atualizar o array.
    };

    
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');                     // Constante para 'capturar' todos os li's da lista. console.log(liTarefas);
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){                         // For para varrer os li da Lista
        let tarefaTexto = tarefa.innerText;                 // criou uma variavel para capturar o texto do for.
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();            // Substituir a palavra 'Apagar' do button por '' .trim remove os espaços sobrando na ponta da string.
        // console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    };
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);             // Foi criado uma string do array, convertido para JSON. É uma string que podemos depois converter de volta em ARRAY. .stringify converte um elemento JS em um JSON string
    // console.log(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);                           // é global do navegador, podemos usar em todo lugar do código. localStorage(nome, valor) é para salvar no seu navegador "coisas"; o nome é importante para utilizar ele em outra parte do código; só podemos salvar strings, por isso convertemos o array acima. Como verificar no navegador o localStorage? Inspecionar --> clicar em >> --> Application --> Storage/Local Storage/ file://

};

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)           // .parse converte de volta para um elemento JS. console.log(listaDeTarefas)

    for (let tarefa of listaDeTarefas){                 // Um for para varrer o Array e criar as tarefas novamente com criaTarefa(input), no caso criaTarefa(varrendooarray/tarefa)
        criaTarefa(tarefa);
    };
};

adicionaTarefasSalvas ();