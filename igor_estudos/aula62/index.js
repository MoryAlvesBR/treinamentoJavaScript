// Funcoes recursivas
// Navegadores tem limites de recursividades, deu exemplo de no caso o navegador so suportar apenas 1000 recursividades.
function recursiva(max){
    if (max >=10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);