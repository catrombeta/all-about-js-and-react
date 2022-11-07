// AULA SOBRE AS DIVERSAS FORMAS DE DECLARAR FUNÇÕES

// DECLARAÇÃO DE FUNÇÃO CLASSICA

function falaOi() {
    console.log('Oie');
}
falaOi(); // CHAMA A FUNÇÃO. PODE SER CHAMADA ANTES OU DEPOIS DE DECLARAR A FUNÇÃO, POIS ACONTECE O FENÔMENO HOISTING, OU SEJA, ELE VAI PROCURAR PELO DOCUMENTO ONDE ELA FOI CHAMADA E IRÁ EXECUTAR NA MESMA.

// FIRST-CLASS OBJECTS: OBJETO DE PRIMEIRA CLASSE. A FUNÇÃO PODE FUNCIONAR COMO UM DADO, COMO POR EXEMPLO:

const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado(); // A CONSTANTE PODE SER CHAMADA COMO FUNÇÃO PORQUE A FUNÇÃO É O DADO DA CONSTANTE!

// FUNÇÃO COMO PARÂMETRO

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// ARROW FUNCTION - MAIS RECENTE PELO ECMA6 (function expression porém mais curta)
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// DENTRO DE UM OBJETO POSSO TER UMA FUNCAO

const obj = {
    falar() {
        console.log('Estou falando...');
    }

    // É A MESMA COISA QUE:
    // falar: function() {
    //     console.log('Estou falando...');
    // }
}
obj.falar();