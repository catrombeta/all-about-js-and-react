// CLOSURES

function retornaFuncao() {
    const nome = 'Caroline';
    return function () {
        return nome; // CLOSURE É A HABILIDADE DE ACESSAR A VARIÁVEL QUE ESTÁ DEFINIDA FORA DELA.
    };
}

const funcao = retornaFuncao();
console.dir(funcao);
