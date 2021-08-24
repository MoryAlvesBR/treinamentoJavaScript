// Tratando e lançando erros (try, catch e finally)

try{
    // Executa quando não há erros
} catch(e){
    // Executa quando há erros
} finally {
    // Sempre
}

// Exemplo: Abrir, manipular e fechar arquivo. Se ocorrer um erro na hora de manipular, irá pular a ação de Fechar Arquivo e ir para o catch.
try{
    // console.log(a);      Tente "descomentar" este console.log para entender o exemplo acima.
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    try{
        console.log(b);
    }catch(e){
        console.log('Deu erro');
    }finally {
        console.log('Também sou finally.');S
    }
} catch(e){
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');        // Se no caso do exemplo acima acontecer, tentar fechar o arquivo no Finally.
}



// exemplo function

function retonaHora(data) {
    if(data && !(data instanceof Date)) {                         //Se a "data" for enviada e(&&) a "data" for diferente da instancia Date
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {                                      //  Se não enviar uma data, ele irá gerar uma automaticamente.
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false                          // Para tornar o horário do tempo exibido em 24h, em vez de 12h. 
    })
}
// retonaHora ();        // irá dar erro
// retonaHora(new Date()); // não irá dar erro
try{
    const data = new Date('01-01-1970 12:58:17');
    const hora = retonaHora ();
    console.log(hora);
}catch(e){
    // Tratar erro
    // console.log(e);
}finally {
    console.log('Tenha um bom dia');
}