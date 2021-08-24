// Tratando e lançando erros (try, catch, throw)

console.log(naoExisto);  // Irá dar erro porque naoExisto não foi definido

try {                                 // tentar executar dentro do bloco um codigo
    console.log(naoExisto);
} catch(err) {                        // E o erro sera "pego" e armazenado dentro do bloco catch
    console.log('naoExisto não existe');   // Não é recomendado expor o erro da sua aplicação, tanto para experiência do usuário, quanto para exibir vulnerabilidades do seu programa.
    console.log(err);          // Ver o erro "capturado" pelo catch.
}

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('X e Y precisam ser números.');                 // new é uma função construtora, na aula demonstrou um pouco dela (new Error ou new ReferenceError, ou outros erros que podemos selecionar com JS, basta digitar Error) mas não comentou muito sobre porque iremos ver mais na frente.
    }
    return x + y;
}
// se utilizarmos console.log(soma('1',2)),sem o try/catch, o erro irá aparecer a linha onde ocorreu o erro e mais informações.
try {
    console.log(soma(1,2));
    console.log(soma('1', 2));                        // Se não houvesse esse erro, o js rodaria apenas o try.
}catch(error) {
    // console.log(error);         // com try/catch o "error" irá aparecer somente a string declarada no throw.
    console.log('Alguma coisa mais amigável para o usuário');
}                            