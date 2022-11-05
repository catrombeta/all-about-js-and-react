// FUNCTIONS

function saudacao(nome) {
    return(`Bom dia ${nome}`);
}

const variavel = saudacao('Carol');

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

// console.log(soma()); IRÁ RTORNAR O VALOR Q EU DEIXEI PRÉ FORMULADO NA FUNÇÃO QUE É 1 PARA X 1 1 PARA Y

console.log(soma(2, 2)); // ASSUMIU X A 2 E Y A 2

// funcao anonima: funcao dentro de uma variável

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));