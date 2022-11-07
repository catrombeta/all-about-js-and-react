// ARGUMENTOS

// ARGUMENTOS SÃO PASSADOS PARA PARA OS PARÂMETROS, OU SEJA:

function soma(x,y) { // PARAMETROS SÃO X E Y
    return x + y;
}
console.log(soma(1,2)); // ARGUMENTOS 1 E 2 ENVIADOS PARA OS PARÂMETROS

// A FUNÇÃO UTILIZADA A PALAVRA FUNCTION (OU SEJA, EXCLUI-SE ARROW FUNCTION) POSSUI TEM UMA VARIÁVEL ESPECIAL CHAMADA ARGUMENTS QUE SUSTENTA TODOS OS ARGUMENTOS ENVIADOS :)

function funcao() {
    console.log(arguments);
}
funcao('Valor', '1', '5', '3');

console.log('########')

// SUPOMOS QUE EU TENHO 2 PARÂMTROS, MAS SÓ ENVIO UM ARGUMENTO. O QUE FAZER? ANTIGAMENTE COLOCAVAMOS UM VALOR PADRÃO NO CORPO DA FUNÇÃO (EX1) E ATUALMENTE (EX2) MANDAMOS O PADÃO DIRETAMENTE DOS PARAMETROS

// EX1
function sominha(a, b, c) {
    b = b || 0;
    c = c || 0;
    console.log(a + b + c);
}
sominha(2);

// EX2
function sominhaAtual(a, b = 0, c = 0) {
    console.log(a + b + c);
}
sominhaAtual(2); // SE EU COLOCAR ATRIBUIÇÃO PARA B E C ELE VAI ASSUMAR OS NOVOS VALORES

// VIA DESESTRUTURAÇÃO DE OBJETO

console.log('########################')

function desestruturacaoObjeto({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
desestruturacaoObjeto({nome: 'Carol', sobrenome: 'Trombeta', idade: 26});

console.log('########################')

function desestruturacaoArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
desestruturacaoArray(['Carol', 'Trombeta', 26]);