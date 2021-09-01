const Modal={
    open(){
        document
            .querySelector(".modal1")
            .classList
            .add("active")
    },
    close(){
        document
            .querySelector(".modal1")
            .classList.remove("active")
    }
}

class Validator{
    constructor(){
        this.validations=[
            'data-min-length',
            'data-max-length',
            'data-required',

        ]
    }
    //Iniciar a Validacao de todos os campos
    validate(form){

        //resgata todas as validacoes
        let currentValidations = document.querySelectorAll('form .error');

        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        }

        //pegar os inputs
        let inputs = form.getElementsByTagName("input");
        

        //transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validacao meadiante ao que for encontrado       
        inputsArray.forEach(function(input){
            for(let i = 0; this.validations.length > i; i++){
                // verifica se a validacao atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    //limpando a string para virar um metodo
                    let method = this.validations[i].replace('data-','').replace('-','')
                    //valor do input
                    let value = input.getAttribute(this.validations[i]);

                    //invocar o metodo
                    this[method](input,value);
                }   
            }

        },this)


  
  
    }




    // verifica se um input tem um numero minimo de caracteres





}





let form = document.getElementById("cadastre");
let submit = document.getElementById("submit");

let validator = new Validator();

//evento que dispara as validacoes
submit.addEventListener('click',function(e){
    
    e.preventDefault();

    validator.validate(form);
    
});
