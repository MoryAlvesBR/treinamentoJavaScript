// const container = document.querySelector('.container');
// const btn1 = document.querySelector('.btn1');

// function openModal (mn){
//     let modal = document.getElementById(mn);

//     if(modal == 'undefined' || modal == null) return;

//     modal.style.display = 'Block';
//     document.body.style.overflow = 'hidden';
// }

// function closeModal (mn){
//     let modal = document.getElementById(mn);

//     if(modal == 'undefined' || modal == null) return;

//     modal.style.display = 'none';
//     document.body.style.overflow = 'auto';

// }


const Modal1 = {
    open() {
        //abrir modal
        //adicionar  class ative ao modal
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active");
        const modal1 = document.getElementById("modal1")
        modal1.classList.add("active");

    },
    close() {
        //afechar modal
        //remover class ative ao modal
        document
            .querySelector(".modal-overlay")
            .classList.remove("active")
            const modal1 = document.getElementById("modal1")
            modal1.classList.remove("active");
    }
}


const Modal2 = {
    open() {
        //abrir modal
        //adicionar  class ative ao modal
        const searchm2 = document.querySelector(".modal-overlay2")
        searchm2.classList.add("active")
        const modal2 = document.getElementById("modal2")
        modal2.classList.add("active");
        const searchm1 = document.querySelector('.modal-overlay');
        searchm1.classList.remove("active");
        const modal1 = document.getElementById("modal1")
        modal1.classList.remove("active");
        
    },
    close() {
        //afechar modal
        //remover class ative ao modal
        const searchm2 = document.querySelector(".modal-overlay2")
        searchm2.classList.remove("active")
        const modal2 = document.getElementById("modal2")
        modal2.classList.remove("active");
    },

    backpag() {
        const searchm2 = document.querySelector(".modal-overlay2")
        searchm2.classList.remove("active")
        const modal2 = document.getElementById("modal2")
        modal2.classList.remove("active");
        const searchm1 = document.querySelector('.modal-overlay');
        searchm1.classList.add("active");
        const modal1 = document.getElementById("modal1")
        modal1.classList.add("active");    
    }
    
}

const Modal3 = {
    open() {
        const searchm3 = document.querySelector(".modal-overlay3")
        searchm3.classList.add("active")
        const modal3 = document.getElementById("modal3")
        modal3.classList.add("active");
        
    },
    close() {
        const searchm2 = document.querySelector('.modal-overlay2');
        searchm2.classList.add("active");
        const searchm3 = document.querySelector(".modal-overlay3")
        searchm3.classList.remove("active")
        const modal3 = document.getElementById("modal3")
        modal3.classList.remove("active");
    },
    nextpag(){
        const searchm3 = document.querySelector(".modal-overlay3")
        searchm3.classList.remove("active")
        const modal3 = document.getElementById("modal3")
        modal3.classList.remove("active");
        const searchm2 = document.querySelector('.modal-overlay2');
        searchm2.classList.remove("active");
        const modal2 = document.getElementById("modal2")
        modal2.classList.remove("active");
        const searchm4 = document.querySelector(".modal-overlay4")
        searchm4.classList.add("active")
        const modal4 = document.getElementById("modal4")
        modal4.classList.add("active");

    }
}

const Modal4 = {
    open() {
        //abrir modal
        //adicionar  class ative ao modal
        document
            .querySelector(".modal-overlay2")
            .classList
            .add("active")
        const searchm1 = document.querySelector('.modal-overlay');
        searchm1.classList.remove("active");
        
    },
    close() {
        const searchm4 = document.querySelector(".modal-overlay4")
        searchm4.classList.remove("active")
        const modal4 = document.getElementById("modal4")
        modal4.classList.remove("active");
    }
}

// function createLogin(nome, id){
//     cliente = {
//         nome: nome,
//         id: id,
//     };
//    return cliente
// };

//     function criaLi (){                                      // função para criar o elemento li html da lista ul.
//         const li = document.createElement('li');
//         return li;
//     };

//     function returnID () {
//         var id = listaclientesmenu
//         return id

//     }

// class Cliente {
//     constructor (a){
//         this.nome = "igor"
//         this.nomeElements = document.querySelectorAll(a)
//         this.addClickEvent();
//     }

//     handleClick(event){
//         event.preventDefault();
//         const href = event.currentTarget.getAttribute("href");
//         const section = document.querySelector(href);
//         console.log(section)
//     }

//     addClickEvent(){
//         this.linkElements.forEach(link => {
//             link.addEventListener("click", () =>
//             this.handleClick);
//         });
//     }
// }

// const ig = new Cliente("a");
// console.log(ig.nome)

// const precos = [
//     "Credito",
//     "R$ 200",
//     "R$ 400",
//     "R$ 300",
//     "R$ 400"
// ]
// const precosFiltro = precos.filter(preco => preco.includes("R$"));

// // if(preco === "400"){
// //     return true;
// // } else {
// //     return false;
// // }

// const precoNumeros = precosFiltro.map(preco =>
//     Number(preco.replace("R$", ""))
// );

// const total = precoNumeros.reduce(function(anterior, atual){
//     return anterior + atual;
// }

//     // function setId (){
//     //     const fid = document.querySelector('.fidelidade')
//     //     if (fid === 999){
//     //         var retorno = '999' + random(1, 10) + random(1, 10) + random(1, 10) + random(1, 10) + random(1, 10) + random(1, 10)
//     //         const retorn = retorno
//     //         return this.cliente.ide = retorn
//     //     }
//     // }
//     // Timer
//     // function criaHoraDosSegundos(segundos) {
//     //     const data = new Date(segundos * 1000);    
//     //     return data.toLocaleTimeString('pt-BR', {
//     //         hour12: false,
//     //         timeZone: 'UTC'         
//     //     });
//     // }

//     // let segundos = 0;
//     // let timer;              

//     // function iniciaRelogio(){
//     //     timer = setInterval(function (){
//     //     segundos++;
//     //     relogio.innerHTML = criaHoraDosSegundos(segundos);
//     //     }, 1000);
//     // }

//     // Buttons
// function criaBotaoNota(li) {
//         li.innerText += ' ';                                       // criar um espaçamento entre o li e o button, comente essa linha para verificar.
//         const botaoApagar = document.createElement('button');      // criar um button
//         botaoApagar.innerText = 'Nota';                       // Definir o texto do button
//         // botaoApagar.classList.add('apagar');                 // Poderia utilizar o .classList.add para criar uma classe, para manipular sua função no codigo.
//         botaoApagar.setAttribute('class', 'apagar');            // Em vez do exemplo acima, utilizou o setAttribute para criar um atributo (href, class, etc) e seu nome.
//         botaoApagar.setAttribute('title', 'Apagar está tarefa'); // Criou um title.
//         li.appendChild(botaoApagar);                            // No fim do li, ira adicionar o button
// };

//     function criaBotaoApagar(li) {
//         li.innerText += ' ';                                       // criar um espaçamento entre o li e o button, comente essa linha para verificar.
//         const botaoApagar = document.createElement('img');      // criar um button
//         botaoApagar.src = "../img/delete.png";                    // Definir o texto do button
//         // botaoApagar.classList.add('apagar');                 // Poderia utilizar o .classList.add para criar uma classe, para manipular sua função no codigo.
//         botaoApagar.setAttribute('class', 'apagar');            // Em vez do exemplo acima, utilizou o setAttribute para criar um atributo (href, class, etc) e seu nome.
//         botaoApagar.setAttribute('title', 'Apagar está tarefa'); // Criou um title.
//         li.appendChild(botaoApagar);                            // No fim do li, ira adicionar o button
//     };

//     function criaBotaoCardapio(li) {
//         li.innerText += ' ';                                       // criar um espaçamento entre o li e o button, comente essa linha para verificar.
//         const botaoApagar = document.createElement('button');      // criar um button
//         botaoApagar.innerText = 'Cardapio';                       // Definir o texto do button
//         // botaoApagar.classList.add('apagar');                 // Poderia utilizar o .classList.add para criar uma classe, para manipular sua função no codigo.
//         botaoApagar.setAttribute('class', 'apagar');            // Em vez do exemplo acima, utilizou o setAttribute para criar um atributo (href, class, etc) e seu nome.
//         botaoApagar.setAttribute('title', 'Apagar está tarefa'); // Criou um title.
//         li.appendChild(botaoApagar);                            // No fim do li, ira adicionar o button
//     };

//     function criaTimer(li) {
//         li.innerText += ' ';                                       // criar um espaçamento entre o li e o button, comente essa linha para verificar.
//         const timer = document.createElement('p');      // criar um button
//         timer.innerText = '00:00:00';                       // Definir o texto do button
//         // botaoApagar.classList.add('apagar');                 // Poderia utilizar o .classList.add para criar uma classe, para manipular sua função no codigo.
//         timer.setAttribute('class', 'apagar');            // Em vez do exemplo acima, utilizou o setAttribute para criar um atributo (href, class, etc) e seu nome.
//         timer.setAttribute('title', 'Apagar está tarefa'); // Criou um title.
//         li.appendChild(timer);                            // No fim do li, ira adicionar o button
//     };


    

//     function soma(x, y){
//         if (typeof x !== 'number' || typeof y !== 'number') {
//             throw new ReferenceError('X e Y precisam ser números.');                 // new é uma função construtora, na aula demonstrou um pouco dela (new Error ou new ReferenceError, ou outros erros que podemos selecionar com JS, basta digitar Error) mas não comentou muito sobre porque iremos ver mais na frente.
//         }
//         return x + y;
//     }

//     function createLogin(nome, id){
//         cliente = {
//             nome: nome,
//             id: id,
//         };
//        return listaclientesmenu.push(cliente)
//     };

// var listaclientesmenu = []

// function salvarClientes() {                    // Constante para 'capturar' todos os li's da lista. console.log(liTarefas);
//     const listaSalvar = [];

//     for (let cliente in listaclientesmenu){                         // For para varrer os li da Lista
//         let clienteTexto = cliente.value;                 // criou uma variavel para capturar o texto do for.          // Substituir a palavra 'Apagar' do button por '' .trim remove os espaços sobrando na ponta da string.
//         listaSalvar.push(clienteTexto);
//     };
//     const clientesJSON = JSON.stringify(listaSalvar);             // Foi criado uma string do array, convertido para JSON. É uma string que podemos depois converter de volta em ARRAY. .stringify converte um elemento JS em um JSON string
//     // console.log(listaDeTarefas);
//     localStorage.setItem('clientes', clientesJSON);
// }

// function adicionarTarefasSalvas (){
//     const tarefas = localStorage.getItem('clientes');
//     const listaDeClientes = JSON.parse(tarefas)           // .parse converte de volta para um elemento JS. console.log(listaDeTarefas)

//     for (let tarefa of listaDeClientes){                 // Um for para varrer o Array e criar as tarefas novamente com criaTarefa(input), no caso criaTarefa(varrendooarray/tarefa)
//         criaTarefa();
//     };
// };


// document.addEventListener('click', function (e) {
//     const el = e.target;
//     const insertlista = document.querySelector('.menuClientes');

//     if(el.classList.contains('.salvar3')){
//         var cadastronome = document.querySelector('.fullname').value;
//         var fidelidade = document.querySelector('.fidelidade').value;
        
//         function criaCliente (){       // Cria a Tarefa, j
//             const li = criaLi();                                // Uma constante para retornar a função criaLi();
//             li.innerText = cadastronome;                           // Colocar o texto do input na li
//             insertlista.appendChild(li);
//             // setId();
//             // li.innerText += returnID();
//             criaBotaoApagar(li);
//             criaBotaoCardapio(li);
//             criaBotaoNota(li)
            
//             criaTimer()
            
//             createLogin(cadastronome, fidelidade)
//             // salvarClientes();
//             // salvarTarefas();
//         };
//         criaCliente();
//     }
// })

var obj={cliente:{
            nome:"",
            idade:"",
            tempo:8,
            pedidos:[
                {
                    nomedopedido:"pizza",
                    valorPedido:15,
                    tempoEspera:10
                },
        ]

        },
        garcom:{
            nome:"", id:1
        }
    }
   
function addPedido(pedido){
    newpedido={
        nomedopedido:pedido.nomedopedido,
                        valorPedido:pedido.valorPedido,
                        tempoEspera:pedido.tempoEspera
    }
    obj.cliente.pedidos.push(newpedido);
    console.log(obj.cliente.pedidos)
}


// console.log(obj.cliente.pedidos)
test={
    nomedopedido:"mimacarao",
                    valorPedido:362,
                    tempoEspera:23623
}
addPedido(test)


const nomeCompleto = [
    { nome: 'Igor'},
    { id: 'cartao'}
]


nomeCompleto.forEach(valorAtual => {
    console.log(valorAtual.nome)
})

nomeCompleto.forEach((valorAtual, indice, meuarray) => {
    console.log(valorAtual.nome)
})