const div = document.querySelector('.div');

div.addEventListener('submit', function(e){
    e.preventDefault();
    cadastro();
})

function cadastro (nome,sobrenome,cpf,fidelidade,){
    objeto = {nome:nome, 
           sobrenome:sobrenome, 
           cpf:cpf,
           fidelidade:fidelidade}
    return objeto;
}

function cliente(){
    cadastro();
    const cadastroo = ['Id','Nome','Sobrenome','Cpf','Fidelidade']
    console.log(cadastroo)
    cadastroo.pop()
    cadastroo.pop()
    cadastroo.pop()
    cadastroo.pop()
    cadastroo.pop()
    console.log(cadastroo)
    return cadastroo;    
}






