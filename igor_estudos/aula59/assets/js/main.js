function criaCalculadora(){
    return {
        display: document.querySelector('.display'),      
        btnClear: document.querySelector('.btn-clear'),

        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        realizaConta(){
                        // eval e perigoso e transforma qualquer string em js, pode ser perigoso para a protecao do seu site, utilizado apenas no exemplo da aula.
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {                     // if for NaN ou valor falso
                    alert('Conta Invalida');
                    return;
                }

                this.display.value = String(conta)
            } catch(e){
                alert('Conta invalida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);   // O tamanho do conteudo do display -1
        },

        cliqueBotoes(){
            // this -> calculadora , quem chamou a funcao que e o this, no caso const calculadora. 
            document.addEventListener('click', e => {          // utilizando arrowfunction (e) => em vez de function (e), o document perde o 'this', tornando o this para o escopo da 'calculadora'.
                const el = e.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });  // o }.bind(this)); significa para usar o this do escopo da 'calculadora' e nao o this do escopo do document.addEventListener('click',). Sem o .bind, daria errado porque o this.btnParaDisplay esta buscando no escopo do document
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();