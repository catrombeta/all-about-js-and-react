// CONSTANTE (NÃO MUDA)

/*
* Não podemos criar constantes com palavras reservadas
* COnstantes precisam ter nomes significativos
* Não podemos começar o nome de uma constante com um número
* camelCase
* Case-sensitive
* Não podemos modificar o valor de uma constante como podemos fazer em let

*/

const nome = 'Caroline'; // NECESSÁRIO DECLARAR UM VALOR! NÃO PODE FICAR VAZIO
// nome = 'joão'; - aparece erro "TypeError: Assignment to constant variable"
console.log(nome);

// podemos usar duas constantes ou variáveis para fazer uma nova constante ou variável. Exemplo:

const primeiroNumero = 1;
const segundoNumero = 50;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);

// CONCATENAR É A AÇÃO DE JUNTAR E NORMLAMENTE FAZ-SE COM O SÍMBOLO DE +. TOMAR CUIDADO PQ O + TAMBÉM É UTILIZADO PARA SOMA

