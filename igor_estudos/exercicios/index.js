const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
// Inserir
const text1 = document.querySelector('#um');
const resp1 = document.querySelector('.resp1');

function InserirImagem(url) {
    let img = document.createElement("img");
    img.src=url;
    return img;
}

document.addEventListener('click', function click(e) {  
    const el = e.target;
    
    if(el.classList.contains('resp1')){
        function nomeIgor (){
            const nomeIgor = 'Igor';
            return nomeIgor;
        }
        
        var img1 = InserirImagem("./img/img1.png");
        img1.setAttribute('class', 'apagarimg1');
        text1.append(img1);
        
        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc1');    
        comentario.innerText = 'A resposta é:'
        text1.appendChild(comentario);
        
        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar1');    
            resp.innerText = nomeIgor();
        text1.appendChild(resp);
        resp1.classList.remove('resp1');
    }

    if(el.classList.contains('resp2')){
        function solChuva (){
            const sol = 'o dia esta ensolarado';
            const chuva =' o dia esta chovendo';
            return `Ou ${sol} ou ${chuva}`;
        }
        var img2 = InserirImagem("./img/img2.png");
        img2.setAttribute('class', 'apagarimg2');
        text2.append(img2);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc2');    
        comentario.innerText = 'A resposta é:'
        text2.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar2');    
            resp.innerText = solChuva();
        text2.appendChild(resp);
        resp2.classList.remove('resp2');
    }

    if(el.classList.contains('resp3')){
        function aniver (){
            const aniverNamoro = new Date(2017, 4, 17, 21, 0, 0);
        
            return `O aniversário de namoro de Igor aconteceu em ${aniverNamoro.toLocaleDateString('pt-BR')} 
            as ${aniverNamoro.toLocaleTimeString('pt-BR', { hour12: false})}`;
        }

        var img3 = InserirImagem("./img/img3.png");
        img3.setAttribute('class', 'apagarimg3');
        text3.append(img3);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc3');    
        comentario.innerText = 'A resposta é:'
        text3.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar3');    
            resp.innerText = aniver();
        text3.appendChild(resp);
        resp3.classList.remove('resp3');
    }
    
    if(el.classList.contains('resp4')){
        function idade (){
            var idadeIgor = 22;
            var ficandoVelho = idadeIgor;
            const idoso1 = ficandoVelho;
            var idadeIgor = 23;
            var ficandoVelho = idadeIgor;
            const idoso2 = ficandoVelho;
            return `Agora Igor tem ${idoso1}, mas em 2022, Igor terá ${idoso2}.`;
        }
        
        var img4 = InserirImagem("./img/img4.png");
        img4.setAttribute('class', 'apagarimg4');
        text4.append(img4);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc4');    
        comentario.innerText = 'Capturei o valor de ficandoVelho, conforme a variável idadeIgor foi mudando ao longo do tempo.';
        text4.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar4');    
            resp.innerText = idade();
        text4.appendChild(resp);
        resp4.classList.remove('resp4');
    }

    if(el.classList.contains('resp5')){
        function list0 (){
            const lista0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            return `Criei uma lista de 10 números -> ${lista0}.`;
        }
        var img5 = InserirImagem("./img/img5.png");
        img5.setAttribute('class', 'apagarimg5');
        text5.append(img5);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc5');    
        comentario.innerText = 'A resposta é:'
        text5.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar5');    
            resp.innerText = list0();
        text5.appendChild(resp);
        resp5.classList.remove('resp5');
    }

    if(el.classList.contains('resp6')){
        function dicionario(){
            var dict = [{}];

            dict.push({
                nome: '',
                sexo: '',
                idade: '',
                anoEstudo: '',
                raca: ''
            });

            function createDict(nome, sexo, idade, anoEstudo, raca){
                dict = [{
                    nome: nome,
                    sexo: sexo,
                    idade: idade,
                    anoEstudo: anoEstudo,
                    raca: raca
                }];
                return JSON.stringify(dict)
            };
            const aluno1 = createDict('Igor', 'Masculino', '22', 'Tecnologo ADS', 'Branco');
            return aluno1
        }
        var img6 = InserirImagem("./img/img6.png");
        img6.setAttribute('class', 'apagarimg6');
        text6.append(img6);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc6');    
        comentario.innerText = 'A resposta é:'
        text6.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar6');    
            resp.innerText = dicionario();
        text6.appendChild(resp);
        resp6.classList.remove('resp6');
    }

    if(el.classList.contains('resp7')){
    
        function createObj1(nome, clima, datanasc, idade){

            lista1 = {
                name: nome,
                climate: clima,
                date: datanasc,
                age: idade
            }
            return JSON.stringify(lista1)
        };
        
        var listaobjetos = [
            createObj1('Igor', 'Ensolarado', '09/03/1999', '22'),
            createObj1('Maria', 'Chovendo', '09/03/1996', '25'),
            createObj1('Joana', 'Chovendo', '09/03/1997', '23'),
            createObj1('Pedro', 'Ensolarado', '09/03/1998', '22'),
            createObj1('Paulo', 'Ensolarado', '09/03/1999', '22'),
            createObj1('Arthur', 'Chovendo', '09/03/1999', '22'),
            createObj1('Lavinia', 'Ensolarado', '09/03/1994', '27'),
            createObj1('Jacke', 'Ensolarado', '09/03/1996', '25'),
            createObj1('Antonio', 'Chovendo', '09/03/1998', '23'),
            createObj1('Brian', 'Ensolarado', '09/03/1997', '24')
        ];

        var img7 = InserirImagem("./img/img7.png");
        img7.setAttribute('class', 'apagarimg7');
        text7.append(img7);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc7');    
        comentario.innerText = 'A resposta é:'
        text7.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar7');    
            resp.innerText = listaobjetos;
        text7.appendChild(resp);
        resp7.classList.remove('resp7');
    }

    if(el.classList.contains('resp8')){
        
        function creatRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var xis = 10;
        var aleatorio = creatRandomInt(1, 100);
        const operacao = xis * aleatorio;
       const resposta8 = `A multiplicacao de ${xis} vezes ${aleatorio}, resulta em ${operacao}`;
        
        var img8 = InserirImagem("./img/img8.png");
        img8.setAttribute('class', 'apagarimg8');
        text8.append(img8);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc8');    
        comentario.innerText = 'A resposta é:'
        text8.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar8');    
            resp.innerText = resposta8;
        text8.appendChild(resp);
        resp8.classList.remove('resp8');
    }
    
    if(el.classList.contains('resp9')){
        
        function createObj2(nome, sexo, idade, anoEstudo, raca){
            objeto = {
                nome: nome,
                sexo: sexo,
                idade: idade,
                anoEstudo: anoEstudo,
                raca: raca
            };
           return JSON.stringify(objeto)
        };
        
        var lista2 = [
            createObj2('Igor', 'Masculino', '22', '9º Ano','Branco'),
            createObj2('Mari', 'Feminino', '20', '7º Ano','Branco'),
            createObj2('Paulo', 'Masculino', '25', '9º Ano','Pardo'),
            createObj2('Fulana', 'Feminino', '19', '6º Ano','Branca'),
            createObj2('Deyvision', 'Masculino', '18', '9º Ano','Negro'),
            createObj2('Marcela', 'Feminino', '25', '8º Ano','Negra'),
            createObj2('Arthur', 'Masculino', '22', '9º Ano','Pardo'),
            createObj2('Laura', 'Feminino', '20', '6º Ano','Pardo'),
            createObj2('Brian', 'Masculino', '24', '7º Ano','Branco'),
            createObj2('Josefa', 'Feminino', '20', '8º Ano','Branco')
        ];
        
        var img9 = InserirImagem("./img/img9.png");
        img9.setAttribute('class', 'apagarimg9');
        text9.append(img9);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc9');    
        comentario.innerText = 'A resposta é:'
        text9.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar9');    
            resp.innerText = lista2;
        text9.appendChild(resp);
        resp9.classList.remove('resp9');
    }
    
    if(el.classList.contains('resp10')){
        function creatRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var numeroA = creatRandomInt(1, 100);
        var numeroB = creatRandomInt(1, 100);
        const operacao2 = numeroA * numeroB; 
        const resposta10 = `A multiplicacao de ${numeroA} vezes ${numeroB}, igual a ${operacao2}.`;

        var img10 = InserirImagem("./img/img10.png");
        img10.setAttribute('class', 'apagarimg10');
        text10.append(img10);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc10');    
        comentario.innerText = 'A resposta é:'
        text10.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar10');    
            resp.innerText = resposta10;
        text10.appendChild(resp);
        resp10.classList.remove('resp10');
    }

    if(el.classList.contains('resp11')){

        class Automovel {
            constructor(nome, marca, modelo, paisOrigem){
                this.nome = nome;
                this.marca = marca,
                this.modelo = modelo,
                this.paisOrigem = paisOrigem;
        
            }
             name(){
                return `O nome é: ${this.nome}.`
             }
             model(){
                return `O modelo é: ${this.modelo}.`
             }
             brand(){
                return `A marca é: ${this.marca}.`  
             }
             pais(){
                 return `O pais de origem é: ${this.paisOrigem}.`
             }
        }
        var newCar1 = new Automovel('Fusca', 'Volkswagem', '1983', 'Alemanha');
        
        var img11 = InserirImagem("./img/img11.png");
        img11.setAttribute('class', 'apagarimg11');
        text11.append(img11);
        
        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc11');    
        comentario.innerText = 'A resposta é:'
        text11.appendChild(comentario);
        
        var resp = document.createElement('p');
        resp.setAttribute('class', 'apagar11');    
        resp.innerHTML = newCar1.name() + '<br />' + newCar1.model() + '<br />' + newCar1.brand() + '<br />' + newCar1.pais();
        text11.appendChild(resp);
        resp11.classList.remove('resp11');
    }

    if(el.classList.contains('resp12')){
        class Automovel {
            constructor(nome, marca, modelo, paisOrigem){
                this.nome = nome;
                this.marca = marca,
                this.modelo = modelo,
                this.paisOrigem = paisOrigem;
        
            }
             name(){
                return `O nome é: ${this.nome}.`
             }
             model(){
                return `O modelo é: ${this.modelo}.`
             }
             brand(){
                return `A marca é: ${this.marca}.`  
             }
             pais(){
                 return `O pais de origem é: ${this.paisOrigem}.`
             }
        }
        var newCar1 = new Automovel('Fusca', 'Volkswagem', '1983', 'Alemanha');

        var newCar2 = new Automovel('Civic', 'Honda', '2021', 'Japao');

        var lista3 = [newCar1,newCar2];
        
        var img12 = InserirImagem("./img/img12.png");
        img12.setAttribute('class', 'apagarimg12');
        text12.append(img12);
        
        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc12');    
        comentario.innerText = 'A resposta é:'
        text12.appendChild(comentario);
        
        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar12');    
            resp.innerText = JSON.stringify(lista3);
        text12.appendChild(resp);
        resp12.classList.remove('resp12');
    }

    if(el.classList.contains('resp13')){
        class Automovel {
            constructor(nome, marca, modelo, paisOrigem){
                this.nome = nome;
                this.marca = marca,
                this.modelo = modelo,
                this.paisOrigem = paisOrigem;
        
            }
             name(){
                return `O nome é: ${this.nome}.`
             }
             model(){
                return `O modelo é: ${this.modelo}.`
             }
             brand(){
                return `A marca é: ${this.marca}.`  
             }
             pais(){
                 return `O pais de origem é: ${this.paisOrigem}.`
             }
        }
        var newCar1 = new Automovel('Fusca', 'Volkswagem', '1983', 'Alemanha');

        var newCar2 = new Automovel('Civic', 'Honda', '2021', 'Japao');

        var lista3 = [newCar1,newCar2];

        function valorLista (){  
            var a = '';
            var b = '';
            for (let i = 0; i < lista3.length; i++) { 
                if (i == 0){
                b = lista3[i].name() + ' ' + lista3[i].brand() + '<br />';
                }
                a = lista3[i].name() + ' ' + lista3[i].brand();
            }
            return a + '<br />' + b;
        };
        var img13 = InserirImagem("./img/img13.png");
        img13.setAttribute('class', 'apagarimg13');
        text13.append(img13);

        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc13');    
        comentario.innerText = 'A resposta é:'
        text13.appendChild(comentario);

        var resp = document.createElement('p');
            resp.setAttribute('class', 'apagar13');    
            resp.innerHTML = valorLista();
        text13.appendChild(resp);
        resp13.classList.remove('resp13');
    }

    if(el.classList.contains('resp14')){
        function createObj3(nome, marca, modelo, paisOrigem){
            objeto = {
                nome: nome,
                marca: marca,
                modelo: modelo,
                paisOrigem: paisOrigem,
            };
           return objeto
        };
        
        var obj = createObj3('Fusca', 'Volkswagem', '1983', 'Alemanha');
        const obj1 = obj;
        
        var img14 = InserirImagem("./img/img14.png");
        img14.setAttribute('class', 'apagarimg14');
        text14.append(img14);
        
        var comentario = document.createElement('p');
        comentario.setAttribute('class', 'apagarc14');    
        comentario.innerText = 'A resposta é:'
        text14.appendChild(comentario);      
        var resp = document.createElement('p');
        resp.setAttribute('class', 'apagar14');    
        resp.innerText = JSON.stringify(obj1);
        obj.cor = 'Azul';
        delete obj.paisOrigem;
        const obj2 = obj;
        resp.innerText += JSON.stringify(obj2);
        text14.appendChild(resp);
        resp14.classList.remove('resp14');
    }
    
});
// Deletar
const del1 = document.querySelector('.del1');
document.addEventListener('click', function click(e) {  
    const el = e.target;
    
    if(el.classList.contains('del1')){
        var remove = document.querySelector('.apagar1');
        var removeimg = document.querySelector('.apagarimg1');
        var removec = document.querySelector('.apagarc1');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp1.classList.add('resp1');
    }
    
    if(el.classList.contains('del2')){
        var remove = document.querySelector('.apagar2');
        var removeimg = document.querySelector('.apagarimg2');
        var removec = document.querySelector('.apagarc2');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp2.classList.add('resp2');
    }

    if(el.classList.contains('del3')){
        var remove = document.querySelector('.apagar3');
        var removeimg = document.querySelector('.apagarimg3');
        var removec = document.querySelector('.apagarc3');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp3.classList.add('resp3');
    }

    if(el.classList.contains('del4')){
        var remove = document.querySelector('.apagar4');
        var removeimg = document.querySelector('.apagarimg4');
        var removec = document.querySelector('.apagarc4');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp4.classList.add('resp4');
    }

    if(el.classList.contains('del5')){
        var remove = document.querySelector('.apagar5');
        var removeimg = document.querySelector('.apagarimg5');
        var removec = document.querySelector('.apagarc5');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp5.classList.add('resp5');
    }

    if(el.classList.contains('del6')){
        var remove = document.querySelector('.apagar6');
        var removeimg = document.querySelector('.apagarimg6');
        var removec = document.querySelector('.apagarc6');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp6.classList.add('resp6');
    }

    if(el.classList.contains('del7')){
        var remove = document.querySelector('.apagar7');
        var removeimg = document.querySelector('.apagarimg7');
        var removec = document.querySelector('.apagarc7');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp7.classList.add('resp7');
    }

    if(el.classList.contains('del8')){
        var remove = document.querySelector('.apagar8');
        var removeimg = document.querySelector('.apagarimg8');
        var removec = document.querySelector('.apagarc8');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp8.classList.add('resp8');
    }

    if(el.classList.contains('del9')){
        var remove = document.querySelector('.apagar9');
        var removeimg = document.querySelector('.apagarimg9');
        var removec = document.querySelector('.apagarc9');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp9.classList.add('resp9');
    }

    if(el.classList.contains('del10')){
        var remove = document.querySelector('.apagar10');
        var removeimg = document.querySelector('.apagarimg10');
        var removec = document.querySelector('.apagarc10');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp10.classList.add('resp10');
    }
    
    if(el.classList.contains('del11')){
        var remove = document.querySelector('.apagar11');
        var removeimg = document.querySelector('.apagarimg11');
        var removec = document.querySelector('.apagarc11');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp11.classList.add('resp11');
    }

    if(el.classList.contains('del12')){
        var remove = document.querySelector('.apagar12');
        var removeimg = document.querySelector('.apagarimg12');
        var removec = document.querySelector('.apagarc12');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp12.classList.add('resp12');
    }

    if(el.classList.contains('del13')){
        var remove = document.querySelector('.apagar13');
        var removeimg = document.querySelector('.apagarimg13');
        var removec = document.querySelector('.apagarc13');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp13.classList.add('resp13');
    }

    if(el.classList.contains('del14')){
        var remove = document.querySelector('.apagar14');
        var removeimg = document.querySelector('.apagarimg14');
        var removec = document.querySelector('.apagarc14');
        removeimg.remove();
        removec.remove();
        remove.remove();
        resp14.classList.add('resp14');
    }
});

//Inserir
const text2 = document.querySelector('#dois');
const resp2 = document.querySelector('.resp2');
//Deletar
const del2 = document.querySelector('.del2');

const text3 = document.querySelector('#tres');
const resp3 = document.querySelector('.resp3');
const del3 = document.querySelector('.del3');

const text4 = document.querySelector('#quatro');
const resp4 = document.querySelector('.resp4');
const del4 = document.querySelector('.del4');

const text5 = document.querySelector('#cinco');
const resp5 = document.querySelector('.resp5');
const del5 = document.querySelector('.del5');

const text6 = document.querySelector('#seis');
const resp6 = document.querySelector('.resp6');
const del6 = document.querySelector('.del6');

const text7 = document.querySelector('#sete');
const resp7 = document.querySelector('.resp7');
const del7 = document.querySelector('.del7');

const text8 = document.querySelector('#oito');
const resp8 = document.querySelector('.resp8');
const del8 = document.querySelector('.del8');

const text9 = document.querySelector('#nove');
const resp9 = document.querySelector('.resp9');
const del9 = document.querySelector('.del9');

const text10 = document.querySelector('#dez');
const resp10 = document.querySelector('.resp10');
const del10 = document.querySelector('.del10');

const text11 = document.querySelector('#onze');
const resp11 = document.querySelector('.resp11');
const del11 = document.querySelector('.del11');

const text12 = document.querySelector('#doze');
const resp12 = document.querySelector('.resp12');
const del12 = document.querySelector('.del2');

const text13 = document.querySelector('#treze');
const resp13 = document.querySelector('.resp13');
const del13 = document.querySelector('.del13');

const text14 = document.querySelector('#catorze');
const resp14 = document.querySelector('.resp14');
const del14 = document.querySelector('.del14');
