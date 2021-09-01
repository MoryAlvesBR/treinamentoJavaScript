// Gets
// Page1 - Login
const inputlogin = document.getElementById("loginNew");
const buttonlogin = document.getElementById("loginto");

//Page2 - Cadastro
const divCadastro = document.getElementById("formcadastro");
var nameCadastro = document.getElementById("inputcadname");
var idCadastro = document.getElementById("inputcadid");

var select1 = document.getElementById("fid");
var value1 = select1.options[select1.selectedIndex].value;
var selectxt1 = select1.options[select1.selectedIndex].textContent;

// const ouro = document.getElementById("fid1").value;
// const prata = document.getElementById("fid2").value;
// const bronze = document.getElementById("fid3").value;

// Page3 - Confirmacao
const divConfirm = document.getElementById("popconfirm");
const buttonconfirmcad = document.getElementById("confirmcad");

//Page4 - Menu Index
const divMenu = document.getElementById("menucontent");
const menuheader = document.getElementById("menulist");
const buttoncardapio = document.querySelector('.logCardapio');

//Page5 - Cardapio
const divCardapio = document.getElementById("formcardapio");
//Pratos Principais
const divPratos = document.getElementById("pratos");
const pratoVeg = document.getElementById("veg");
const qntVeg = document.getElementById("vegquant");
var valueVeg = qntVeg.options[qntVeg.selectedIndex].value;
const pratoFish = document.getElementById("fish");
const qntFish = document.getElementById("fishquant");
const pratoFrango = document.getElementById("frango");
const qntFrango = document.getElementById("frangoquant");
const pratoCarnes = document.getElementById("carnes");
const qntCarnes = document.getElementById("carnesquant");
//Sobremesas
const divSobremesas = document.getElementById("sobremesas");
const cake = document.getElementById("cake");
const qntCake = document.getElementById("cakequant");
const icediet = document.getElementById("icediet");
const qntIcediet = document.getElementById("icedietquant");
const mouseDiet = document.getElementById("moused");
const qntMoused = document.getElementById("mousedquant");
const mouseC = document.getElementById("mousec");
const qntMousec = document.getElementById("mousecquant");
//Bebidas
const divBebidas = document.getElementById("bebidas");
const cha = document.getElementById("cha");
const qntCha = document.getElementById("chaquant");
const sucol = document.getElementById("sucol");
const qntSucol = document.getElementById("sucolquant");
const sucom = document.getElementById("sucom");
const qntSucom = document.getElementById("sucomquant");
const refrid = document.getElementById("refrid");
const qntRefrid = document.getElementById("refridquant");

//Pag6 - Confirm Cardapio
const divConfirmCardapio = document.getElementById("cardapioconfirm");
const confirmCardapio = document.getElementById("inputcomanda");
//listas
var listadeclientes = []
// Metodos

var tipo = () => {
    var option = select1.children[select1.selectedIndex];
    var texto = option.text;
    return texto
}

var tipoMenu = () => {
    var option = select1.children[select1.selectedIndex];
    var texto = option.text;
    for (var i = 0; i < select1.options.length; i++){
        if(texto === 'Prata'){
            return `<p class="padrao2">Prata</p>`
        }
        if(texto === 'Bronze'){
            return `<p class="padrao3">Bronze</p>`
        }
        if(texto === 'Padrão'){
            return `<p class="padrao4">Padrão</p>`
        } else {
            return `<p class="padrao1">Gold</p>`
        }
    }
}


var verificando = [];

function createCliente (){
    cliente = {
        nome: '',
        id: '',
        tipo: ''
    },
    createID = () => {
        return cliente.id = `${value1}`+ 0 + 0 + 0 + `${idCadastro.value}`
    },
    createName = () => {
        return cliente.nome = nameCadastro.value;
    },
    createTipo = () => {
        return cliente.tipo = tipo();
    }
    return createID(), createName(), createTipo(), cliente
}
insertCliente = () => {
    return verificando.push(createCliente());
}




clearVerificando = () => {
    if (verificando != []){
        return verificando = []
    }
}
var b = verificando;
function compareObjects (){
    if (listadeclientes = []){
        listadeclientes.push(createCliente());
    }else {
        listadeclientes.forEach(b =>{
            if (b != listadeclientes){
                listadeclientes.push(b[0])
            }else {
                listadeclientes.nome = b.nome; listadeclientes.id = b.id; listadeclientes.tipo = b.tipo
            }
               
        });
    }
}
    
    // switch (i = 0, i < listadeclientes.length, i++){
    //     case listadeclientes[i].value === b:
    //         b.nome = `${listadeclientes[i].nome}`;
    //         b.id = `${listadeclientes[i].id}`; 
    //         b.tipo = `${listadeclientes[i].tipo}`;    
    //     case listadeclientes[i].value !== b:
    //         listadeclientes.push(b)
    //     default:
    //         listadeclientes.push(b)
    // }




function insertHTML(){
    menuheader.innerText = '';    
    listadeclientes.map((clienteAtual) =>{
            menuheader.innerHTML += `
            <li class="clientelist">
            <p class="clientlisttxt">${clienteAtual.nome} ${tipoMenu()}</p>
            <button class="clientdelete">Excluir</button>
            <button class="clientnota">Nota parcial</button>
            </li>
            `
        })
}

function limpaInput(){

}


function salvarMenu(){
    const liClientes = menuheader.querySelectorAll('li');                     // Constante para 'capturar' todos os li's da lista. console.log(liTarefas);
    const listaMenu = [];
    for (let cliente of liClientes){                         // For para varrer os li da Lista
        let clienteTexto = cliente.innerText;                 // criou uma variavel para capturar o texto do for.
        clienteTexto = clienteTexto.replace('Apagar', '').trim();            // Substituir a palavra 'Apagar' do button por '' .trim remove os espaços sobrando na ponta da string.
        // console.log(tarefaTexto);
        listaMenu.push(clienteTexto);
    };
    
    const menuJSON = JSON.stringify(listaMenu);             // Foi criado uma string do array, convertido para JSON. É uma string que podemos depois converter de volta em ARRAY. .stringify converte um elemento JS em um JSON string
    // console.log(listaDeTarefas);
    localStorage.setItem('menu', menuJSON);                           // é global do navegador, podemos usar em todo lugar do código. localStorage(nome, valor) é para salvar no seu navegador "coisas"; o nome é importante para utilizar ele em outra parte do código; só podemos salvar strings, por isso convertemos o array acima. Como verificar no navegador o localStorage? Inspecionar --> clicar em >> --> Application --> Storage/Local Storage/ file://

}

function salvarClientes(){
    const clientesJSON = JSON.stringify(listadeclientes);             
    localStorage.setItem('clientes', clientesJSON);                           

}

function adicionaMenu(){
    const menuJSON = localStorage.getItem('menu');
    const listaMenu = JSON.parse(menu)           // .parse converte de volta para um elemento JS. console.log(listaDeTarefas)

    for (let tarefa of listaMenu){                 // Um for para varrer o Array e criar as tarefas novamente com criaTarefa(input), no caso criaTarefa(varrendooarray/tarefa)
        insertHTML(tarefa);
    };
};

// Moldais

const Modal1 = {
    open() {
        const searchm1 = document.querySelector(".modal-overlay1");
        searchm1.classList.add("active");
        const modal1 = document.getElementById("modal1")
        modal1.classList.add("active");

    },
    close() {

            const searchm1 = document.querySelector(".modal-overlay1");
            searchm1.classList.remove("active");
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
        const searchm1 = document.querySelector('.modal-overlay1');
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
        const searchm1 = document.querySelector('.modal-overlay1');
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
    cardapio() {
        const searchm5 = document.querySelector('.modal-overlay5');
        searchm5.classList.add("active");
        const modal5 = document.getElementById("modal5")
        modal5.classList.add("active");
        const searchm4 = document.querySelector('.modal-overlay4');
        searchm4.classList.remove("active");
        const modal4 = document.getElementById("modal4")
        modal4.classList.remove("active");
        
    },
    close() {
        const searchm4 = document.querySelector(".modal-overlay4")
        searchm4.classList.remove("active")
        const modal4 = document.getElementById("modal4")
        modal4.classList.remove("active");
    },
    openlogin(){
        const searchm4 = document.querySelector(".modal-overlay4")
        searchm4.classList.add("active")
        const modal4 = document.getElementById("modal4")
        modal4.classList.add("active");
        const searchm1 = document.querySelector(".modal-overlay1");
        searchm1.classList.remove("active");
        const modal1 = document.getElementById("modal1")
        modal1.classList.remove("active");
    },
    open(){
        const searchm4 = document.querySelector(".modal-overlay4")
        searchm4.classList.add("active")
        const modal4 = document.getElementById("modal4")
        modal4.classList.add("active");
    }
}

const Modal5 = {
    
    open() {

        const searchm6 = document.querySelector(".modal-overlay6")
        searchm6.classList.add("active");
        const modal6 = document.getElementById("modal6")
        modal6.classList.add("active");
        const searchm4 = document.querySelector('.modal-overlay4');
        searchm4.classList.remove("active");
        
    },
    close() {
        const searchm5 = document.querySelector(".modal-overlay5")
        searchm5.classList.remove("active")
        const modal5 = document.getElementById("modal5")
        modal5.classList.remove("active");
        const searchm4 = document.querySelector(".modal-overlay4")
        searchm4.classList.add("active")
        const modal4 = document.getElementById("modal4")
        modal4.classList.add("active");
    },
    closeConfirm(){
        const searchm6 = document.querySelector(".modal-overlay6")
        searchm6.classList.remove("active")
        const modal6 = document.getElementById("modal6")
        modal6.classList.remove("active");
    },
    addPedido(){
        const searchm6 = document.querySelector(".modal-overlay6")
        searchm6.classList.remove("active")
        const modal6 = document.getElementById("modal6")
        modal6.classList.remove("active");
    }
}